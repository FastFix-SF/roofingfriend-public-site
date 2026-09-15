# Add a /privacy-policy page

## Goal
A page at `/privacy-policy` titled "Privacy Policy" that names The Roofing Friend, Inc., explains what information we collect and how we use it, and carries the required SMS disclosures — all in English.

## What the page says
- Heading: **Privacy Policy** (with a "Last updated" date)
- Identifies the business as **The Roofing Friend, Inc.**
- What we collect: name, phone, email, service address, project details, photos you send, payment details, messages you send us, plus basic device/usage data from the website.
- How we use it: schedule and perform service, send quotes, respond to questions, process payments, improve and secure the site, and meet legal obligations.
- **SMS / text messaging section**, including verbatim:
  > We do not sell or share your SMS opt-in data or personal information with third parties for marketing purposes.
  Plus: message frequency may vary, message and data rates may apply, reply STOP to stop receiving messages, reply HELP for help.
- How we share information (service providers, legal requests, business transfers) — no selling.
- Data retention, security, your choices and deletion requests, children's privacy, changes to the policy.
- Contact block: The Roofing Friend, Inc., San Francisco Bay Area, email and phone.

## How it's built
- New page `src/pages/PrivacyPolicyPage.tsx`, styled like the existing privacy page (Navbar, prose article, Footer), with Helmet metadata: title "Privacy Policy | The Roofing Friend", matching description, canonical + og/twitter tags pointing at `https://roofingfriend.com/privacy-policy`.
- Register the lazy route `/privacy-policy` in `src/App.tsx`.
- Point the footer "Privacy Policy" link (currently reading TEST123) at `/privacy-policy`.
- Add `/privacy-policy` to `public/sitemap.xml`.
- The existing `/privacy` page stays as is so old links keep working.

## Files touched
- `src/pages/PrivacyPolicyPage.tsx` (new)
- `src/App.tsx`
- `src/components/Footer.tsx`
- `public/sitemap.xml`
