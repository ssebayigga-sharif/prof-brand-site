const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  "BREVO_API_KEY",
  "BREVO_SENDER_EMAIL",
];

const missing = required.filter((name) => !process.env[name]?.trim());

if (missing.length > 0) {
  console.error("Missing production configuration:");
  for (const name of missing) {
    console.error(`- ${name}`);
  }
  process.exit(1);
}

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL);
if (siteUrl.protocol !== "https:" && siteUrl.hostname !== "localhost") {
  console.error("NEXT_PUBLIC_SITE_URL must use HTTPS outside localhost.");
  process.exit(1);
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL.startsWith("https://")) {
  console.error("NEXT_PUBLIC_SUPABASE_URL must use HTTPS.");
  process.exit(1);
}

console.log("Production configuration contains all required variables.");
