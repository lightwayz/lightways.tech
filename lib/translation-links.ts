export const translationLanguages = [
  { code: "en", name: "English", native: "English" },
  { code: "fr", name: "French", native: "Français" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "ig", name: "Igbo", native: "Igbo" },
  { code: "ha", name: "Hausa", native: "Hausa" },
  { code: "yo", name: "Yoruba", native: "Yorùbá" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "sw", name: "Swahili", native: "Kiswahili" },
  { code: "rw", name: "Kinyarwanda", native: "Kinyarwanda" },
] as const;

export function translationHref(code: string, pathname: string) {
  if (!translationLanguages.some(language => language.code === code)) throw new Error("Unsupported translation language");
  // Send only published route names, never query parameters, drafts or local URLs.
  const route = ["/", "/padi", "/privacy", "/work", "/work/energywallet-ticket-centre", "/work/unic-law-firm"].includes(pathname) ? pathname : "/";
  const source = `https://lightways.tech${route}`;
  if (code === "en") return source;
  const url = new URL("https://translate.google.com/translate");
  url.search = new URLSearchParams({ sl: "en", tl: code, u: source }).toString();
  return url.href;
}
