param(
    [Parameter(Mandatory = $true)]
    [string]$RepositoryPath
)
$ErrorActionPreference = 'Stop'
$sourceRoot = [IO.Path]::GetFullPath($PSScriptRoot)
$targetRoot = (Resolve-Path -LiteralPath $RepositoryPath).Path
$targetRoot = [IO.Path]::GetFullPath($targetRoot).TrimEnd([IO.Path]::DirectorySeparatorChar)
if (!(Test-Path -LiteralPath (Join-Path $targetRoot '.git'))) { throw 'Choose your cloned Git repository, which must contain .git.' }
if ($targetRoot -eq $sourceRoot -or $sourceRoot.StartsWith($targetRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Extract this update into a separate folder outside your Git repository.' }
$manifestPath = Join-Path $sourceRoot 'upgrade-manifest.json'
if (!(Test-Path -LiteralPath $manifestPath)) { throw 'Upgrade manifest is missing. Extract the complete source ZIP first.' }
$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$backupRoot = Join-Path ([IO.Path]::GetDirectoryName($targetRoot)) (([IO.Path]::GetFileName($targetRoot)) + '-backup-' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff'))
New-Item -ItemType Directory -Path $backupRoot | Out-Null
function Get-CheckedPath([string]$rootPath, [string]$relativePath) {
    $resolvedPath = [IO.Path]::GetFullPath((Join-Path $rootPath $relativePath))
    if (!$resolvedPath.StartsWith($rootPath + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'A manifest path is outside its allowed directory.' }
    if ($relativePath -match '(^|[\\/])(\.git|\.env[^\\/]*|node_modules|\.next)([\\/]|$)') { throw 'Protected path in manifest.' }
    return $resolvedPath
}
# Validate every source before making any changes, and reject duplicate paths.
$seenPaths = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($relativePath in $manifest.files) {
    if (!$seenPaths.Add($relativePath.Replace([char]92, [char]47))) { throw "Duplicate managed path: $relativePath" }
    $sourcePath = Get-CheckedPath $sourceRoot $relativePath
    $null = Get-CheckedPath $targetRoot $relativePath
    if (!(Test-Path -LiteralPath $sourcePath -PathType Leaf)) { throw "Source file missing: $relativePath" }
}
# Back up each managed file before replacing it. Git, environment files and dependencies are untouched.
foreach ($relativePath in $manifest.files) {
    $sourcePath = Get-CheckedPath $sourceRoot $relativePath
    $targetPath = Get-CheckedPath $targetRoot $relativePath
    $backupPath = Get-CheckedPath $backupRoot $relativePath
    if (!(Test-Path -LiteralPath $sourcePath -PathType Leaf)) { throw "Source file missing: $relativePath" }
    if (Test-Path -LiteralPath $targetPath) {
        New-Item -ItemType Directory -Force -Path ([IO.Path]::GetDirectoryName($backupPath)) | Out-Null
        Copy-Item -LiteralPath $targetPath -Destination $backupPath -Force
    }
    New-Item -ItemType Directory -Force -Path ([IO.Path]::GetDirectoryName($targetPath)) | Out-Null
    [IO.File]::Copy($sourcePath, $targetPath, $true)
}
# Move obsolete files and accidental nested folders to the backup; do not delete them.
foreach ($relativePath in $manifest.retire) {
    $targetPath = Get-CheckedPath $targetRoot $relativePath
    $backupPath = Get-CheckedPath $backupRoot ('retired/' + $relativePath)
    if (Test-Path -LiteralPath $targetPath) {
        New-Item -ItemType Directory -Force -Path ([IO.Path]::GetDirectoryName($backupPath)) | Out-Null
        Move-Item -LiteralPath $targetPath -Destination $backupPath
    }
}
Write-Host "Updated files in: $targetRoot"
Write-Host "Original managed files and retired folders saved in: $backupRoot"
Write-Host 'No Git commands or deployments were run. Review git status, then run npm ci and npm run dev.'
