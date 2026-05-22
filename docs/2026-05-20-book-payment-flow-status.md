# Book Payment Flow — Status Update (2026-05-20)

## Production download flow — WORKING

- Vercel env vars are now correctly added to the real `metaxis` project, not the wrong `metaxis-site-vercel` project.
- Fresh redeploy without build cache was completed.
- `/download/{NEW_TOKEN}` now renders the valid download page.
- `Preuzmi PDF` successfully downloads the book.
- Old public `/dl/*` path remains dead.

## PayPal NCP configuration — INSPECTED

Existing payment link is active:

- **Hosted ID:** `G3Q2HE54HA55G`
- **Product:** Operativni Sistem za rad sa AI — PDF
- **Price:** 20.00 EUR

Changes applied to PayPal NCP:

- Confirmation tab previously had an old auto-return URL using the old token.
- Auto-return URL was updated to:
  `https://metaxis.io/download/9Y-gGJ9xF5BF8CaHBlH8ZyZzpzg3TB2w`
- Shipping address was turned **OFF** because this is a digital PDF product.

## Real payment test — INCONCLUSIVE

Observed behavior during a live test with a debit card (guest checkout):

- Browser did **NOT** redirect to the download page.
- PayPal Activity did **NOT** show a new transaction.
- User did **NOT** receive a PayPal email confirmation.
- Bank/card shows a charge or authorization hold.

**Interpretation:** payment was likely authorized / pending at bank/card level, but **not completed/captured by PayPal**.

## Current conclusion

- Code / download flow is **working**.
- PayPal return URL is **corrected**.
- The unresolved issue is **PayPal checkout completion** — likely tied to guest debit-card checkout, card authorization behavior, or regional PayPal processing.
- **Do NOT change code yet.**

## What we are waiting for

1. Whether the card authorization disappears or becomes a completed charge.
2. Whether PayPal Activity eventually shows the transaction.
3. A clean test using a different real PayPal account instead of guest debit-card checkout.

## Next recommended test

- Pay with a separate real PayPal account (not guest debit card).
- If PayPal-account payment completes and redirects correctly → merchant setup and the Metaxis flow are OK; the issue is isolated to guest card checkout.
- If PayPal-account payment also fails → PayPal merchant / payment-link setup needs deeper investigation.

## Do NOT modify

- `/download` route
- token
- env vars
- PDF route
- PayPal success URL

## Current state

- Payment / download **code is DONE**.
- PayPal card checkout completion remains **UNCONFIRMED**.
- Waiting for payment processor behavior / PayPal-account test result.
