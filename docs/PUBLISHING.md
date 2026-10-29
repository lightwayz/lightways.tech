# Publishing and hosting

Publish the company website from lightwayz/lightways.tech, branch main. PADI remains a planned product, not a launched application.

## Hostinger compatibility

Use the existing Business plan's Next.js Web App, Node 22.x, root ./ and output .next. Both npm run build and npm run build:webpack use next build --webpack. The standard start script is npm run start, with PORT supplied by the hosting platform.

The configuration is next.config.mjs, a normal JavaScript module with JSDoc type checking. Its security headers match the previous next.config.ts. This avoids invoking SWC to compile a TypeScript configuration file: Hostinger's current Linux builder cannot load the native SWC binary for this Next.js version because its system glibc is older. Webpack can use Next.js's WASM fallback; Turbopack requires native bindings.

Official references:
- https://nextjs.org/docs/app/api-reference/config/next-config-js
- https://www.hostinger.com/support/how-to-fix-next-js-16-turbopack-build-errors-on-hostinger/

The first Hostinger attempt failed at next.config.ts loading before publication. This compatibility change follows those logs; provider deployment success still needs verification.

No credentials or environment files are required by this presentation website. Email links open the visitor's email app; the server does not send mail. No PADI backend is deployed here.

## Domain and rollback

Initial Hostinger deployment uses a provider-assigned temporary hostname. Connecting lightways.tech, changing DNS or replacing its existing Hostinger website requires a separate explicit decision. Do not change nameservers or email DNS records during application deployment.

Original main: 1e61a8e7e5a3c36e23d993a8863e4a52b03b307a. Company publishing merge: 0697251265c25be2e437aae0a828addf5d8b0f8f. History retains both for rollback. Use provider rollback or redeployment against the intended commit rather than force-pushing history.
