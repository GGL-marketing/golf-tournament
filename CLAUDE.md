# GGL (Global Golf League) Website

Marketing site for Global Golf League, a South African amateur golf league. Live at globalgolfleague.net.
React + Vite, deployed on Vercel from GitHub repo `GGL-marketing/golf-tournament`. Serverless functions live in `api/`.

## Branches and deploys

- `main`: the live site at globalgolfleague.net. Pushing here goes live within 1 to 2 minutes.
- `landing`: the pre-launch waitlist landing page (current work). Pushing here updates its Vercel preview link only.
- `preview`: the original tournament entry site with Stripe payments. Paused, kept for later.
- When the landing page is approved, `landing` gets merged into `main`.
- Never push or merge to `main` without an explicit OK. Ask before any `git push`.
- Run locally with `vercel dev` (needed for the `api/` functions), at http://localhost:3000.

## Key files

Landing page (`landing` branch):
- `src/main.jsx`: renders `LandingPage`
- `src/LandingPage.jsx` and `src/LandingPage.css`: the whole landing page
- `api/subscribe.js`: waitlist form to Mailchimp

Tournament site (`preview` branch, do not edit when working on the landing page):
- `src/App.jsx` (desktop, over 768px), `src/MobileApp.jsx` and `src/MobileApp.css` (768px and under)
- `src/EntryModal.jsx` (3-step entry form with Stripe), `src/Stepper.jsx`, `src/MagicBento.jsx`, `src/PillNav.jsx`, `src/Loader.jsx`
- `api/create-payment-intent.js` (Stripe), `api/mailchimp-webhook.js` (Stripe webhook to Mailchimp)
- `src/ComingSoon.jsx`: old holding page, unused but kept

`index.html` holds the Meta Pixel and the Facebook domain verification meta tag. Do not remove either.

## Secrets

Never read `.env` or `.env.local` (blocked in `.claude/settings.json`). Variable names, for reference only:
`VITE_STRIPE_PUBLISHABLE_KEY`, `STRIPE_RESTRICTED_KEY`, `STRIPE_WEBHOOK_SECRET`, `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX`.
They are set in Vercel for Production and Preview.

## Brand

- Navy `#0f132a`, gold `#d5af4c`, white `#ffffff`
- Supporting: cream `#fbf7ea` (wordmark), steel blue `#2b4a6f` and `#3d6491` (title box borders, swooshes)
- Headings, labels, buttons: Orbitron (Google Fonts)
- Landing page body text: ApparatSemiCond, loaded from `src/assets/fonnts.com-ApparatSemiCond_*.otf`
- Tournament site body text: The Foriene Serif Italic
- Layout follows the client deck: navy title boxes with steel-blue borders, grey gradient section bars, gold gradient tables and prize cards, navy and gold swooshes
- Tables and prize cards on gold use navy text only

## Landing page build notes

- Page order: hero (GGL / Global Golf League / tagline over video, no top header), button grid under the hero on phones and tablets, hero copy, Join the Waitlist (navy section with perks and a Get Early Access button), What You Can Look Forward To (Hole-in-One Challenge, New Era Tournament, GGL App), Why GGL, FAQs, CTA, footer
- The menu bar (full row on desktop, slim bar with GGL, Join and a Menu dropdown on phones and tablets) slides in from the top as soon as the visitor scrolls. Phones and tablets also keep the button grid under the hero.
- The side panel opens from the Sign Up menu item, the Join button in the phone bar, the Get Early Access button in the Join section and the Join the Waitlist button in the bottom CTA.
- Hole-In-One Details, Tournament Details, App Features and Prize T's & C's fold open and closed on phones (600px and under) and are always open on bigger screens
- The benefits table has been removed
- Division prize cards stack on scroll using position: sticky. .lp-section-white must use overflow: clip, not overflow: hidden, or the stacking stops working
- TiltCard (tilt and glare on the prize cards), GlowCard (gold glow border on Why GGL) and RevealImage (left-to-right wipe reveal on section images) are hand-built with motion. They switch off on touch screens and with reduced motion
- Animations use `motion/react`, which is already installed. The text animation, side panel and texture buttons were rebuilt by hand. Do not install shadcn, Tailwind or component registries.
- The side panel renders through `createPortal` to `document.body`. A transform or filter on an ancestor breaks `position: fixed`, which caused bugs before.
- The waitlist form lives only in the side panel. Its state is held in `LandingPage`
- Mobile: inputs must be at least 16px to stop iOS zooming, and there must be no horizontal scroll
- Phones and tablets (900px and under) hide the desktop nav and show a 2-column menu grid under the hero, plus the slim fixed bar once the visitor scrolls
- Never animate height: 'auto' with motion on this page. Motion restores the scroll position when it measures auto height, which cancels menu jumps

## Integrations

- Mailchimp merge fields: `FNAME`, `LNAME`, `WHATSAPP`, `HOMECLUB`, `REGION`, `HANDICAP`
- Waitlist signups are tagged `Pre-Launch Signup` and `Region: <region>`
- Meta Pixel ID `2495989744214125`. Events: PageView (all pages), CompleteRegistration (waitlist signup), Lead (tournament form opened), Purchase (tournament payment, with value in ZAR)
- Stripe webhook URL must be `https://www.globalgolfleague.net/api/mailchimp-webhook` (with `www`, or Vercel redirects and Stripe fails)
- `api/mailchimp-webhook.js` needs `bodyParser: false` and the `micro` buffer for Stripe signature checks

## Content facts (must match the client deck)

- Hole-in-One Challenge: R100,000 cash, one official shot on a designated par 3, max 100 players per challenge day, one day a week for a month per partner club, active HNA number required, under 18s can play but can't win the prize
- New Era Tournament: two-day Individual Stableford, 153 players, 51 per division, top 24 per division play Day 2, two R250,000 hole-in-one chances per day (four in total)
- Divisions and fees: Division 1 handicap 0 to 9, R2,500. Division 2 handicap 10 to 17, R2,000. Division 3 handicap 18 to 35, R1,000
- Prizes: R116,000 in Canal Walk gift vouchers (down to 5th place per division) plus an optional R4,000 putting competition. Tournament prizes are vouchers only, not cash
- App: 3-month free trial for waitlist members, then R200 per month
- Don't invent dates, prizes or eligibility rules. If something isn't in the deck, ask.

## Open issues

- Division 1 1st and 2nd and Division 2 1st prizes are above GolfRSA's R12,500 non-cash limit for handicap competitions. Winners could lose amateur status. The client needs to confirm.
- `api/mailchimp-webhook.js` builds the "Member Exists" email hash with hex instead of MD5, so repeat entrants don't get tagged
- The `preview` branch still has old tournament pricing (Division 1 R3,000, Division 3 handicap 18 to 54)

## How to work in this repo

- Change only what is asked. Don't restyle, rewrite or rename other sections.
- Explain in short, plain bullet points. No jargon without a one-line explanation.
- Website copy: plain, direct sentences. No em dashes, no hype or filler marketing language.
- When giving terminal commands, give one command at a time (PowerShell doesn't handle `&&` chaining well here)
- After changes, check the page runs with `vercel dev` before suggesting a push
- Flag uncertainty instead of guessing