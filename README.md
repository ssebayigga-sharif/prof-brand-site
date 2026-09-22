# Judge Nsereko Public Archive

The public archive for Judge Daniel David Ntanda Nsereko. It contains the
profile, career record, books, scholarship, speaking information, search, and
authenticated contact workflow.

## Stack

- Next.js 16 App Router and React 19
- Tailwind CSS 4
- Supabase Auth and Postgres
- Brevo SMTP API for authenticated contact delivery
- OpenNext for Cloudflare Workers

## Local setup

Requirements: Node.js 20 or newer, npm, and access to the Supabase and Brevo
projects.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Create `.env.local` with the public Supabase values and server-only mail
settings:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
BREVO_API_KEY=your-brevo-api-key
BREVO_SENDER_EMAIL=verified-sender@example.com
```

Never commit `.env.local`, `.dev.vars`, or any API key. Cloudflare local
preview reads server secrets from `.dev.vars` when configured.

## Supabase setup

1. Create a Supabase project and copy its URL and publishable key into the
   environment file.
2. Run the migration in
   `supabase/migrations/202609150001_profiles.sql` against the project.
3. Enable email/password authentication in Supabase Auth.
4. Add these redirect URLs under Authentication > URL Configuration:
   - `http://localhost:3000/auth/callback`
   - `https://prof-branding-site.sharifsseba.workers.dev/auth/callback`
   - the callback URL for any custom production domain
5. Confirm the `profiles` table, row-level security policies, and new-user
   trigger exist after migration.

Unauthenticated visitors to `/contact` are sent through signup and returned to
the contact composer after email verification.

## Brevo setup

1. Create a Brevo API key with permission to send transactional email.
2. Verify the sender domain or sender address used by `BREVO_SENDER_EMAIL`.
3. Set `BREVO_API_KEY` and `BREVO_SENDER_EMAIL` in the production secret
   store.
4. Submit a real contact message and confirm delivery and reply-to behavior.

Without `BREVO_API_KEY`, the contact API returns a clear configuration error
and the page keeps the direct email fallback available.

## Cloudflare deployment

Authenticate Wrangler, then use the repository scripts:

```bash
npx wrangler login
npm run build
npm run deploy
```

The worker and asset configuration lives in `wrangler.jsonc`. The deploy
script builds OpenNext and deploys `.open-next/worker.js`. Configure these
production variables or secrets in the Cloudflare Worker environment:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `BREVO_API_KEY`
- `BREVO_SENDER_EMAIL`

Cloudflare observability is enabled in `wrangler.jsonc`. Use Worker logs and
metrics to monitor request failures, auth callbacks, and contact API
responses. Add Cloudflare Web Analytics separately if visitor analytics are
required; no tracking script is bundled by default.

## Validation commands

```bash
npm run lint
npx tsc --noEmit
npm run check:production-config
npm run build
```

Run `npm run check:production-config` in the production environment before
deploying. It verifies that all required variables are present and that the
public site and Supabase URLs use HTTPS outside localhost.

Before release, test signup, email verification, sign-in, sign-out, the
protected contact page, successful Brevo delivery, direct-email fallback, the
custom 404 page, and keyboard navigation on mobile and desktop.

## Main routes

- `/` - archive overview
- `/career` - career and CV
- `/books` - books catalogue
- `/writing` - scholarship explorer
- `/speaking` - speaking engagements
- `/contact` - authenticated contact composer
- `/search` - archive search
- `/account` - authenticated member portal
