export const enquiryTypes = ["Project or partnership", "PADI product vision", "Media enquiry", "General question"] as const;
export const discoverySources = ["Search engine", "AI assistant", "GitHub", "Referral", "Other"] as const;
export type EnquiryInput = { name: string; email: string; company: string; type: string; source: string; message: string };

const line = (value: string) => value.replace(/[\r\n]+/g, " ").trim();
export function prepareEnquiry(input: EnquiryInput) {
  const name = line(input.name);
  const email = line(input.email);
  const company = line(input.company);
  const message = input.message.trim();
  if (!name || name.length > 100) throw new Error("Enter your name using up to 100 characters.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) throw new Error("Enter a valid email address.");
  if (company.length > 150) throw new Error("Keep the company name under 150 characters.");
  if (!message || message.length > 5000) throw new Error("Enter a message using up to 5,000 characters.");
  const type = enquiryTypes.find(value => value === input.type) ?? "General question";
  const source = discoverySources.find(value => value === input.source) ?? "Not specified";
  const subject = `Lightways.Tech — ${type}`;
  const body = [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "Not specified"}`, `Enquiry: ${type}`, `Found Lightways through: ${source}`, "", message].join("\n");
  const base = `mailto:admin@lightways.tech?subject=${encodeURIComponent(subject)}`;
  const complete = `${base}&body=${encodeURIComponent(body)}`;
  const copyFirst = complete.length > 1800;
  return { subject, body, copyFirst, href: copyFirst ? base : complete };
}
