# facebook/deployed/

Facebook visuals used in live posts. Production artifacts.

## What belongs here

- The exact visual file that was published
- Feed screenshot (if captured) — named with `_feed-screenshot` suffix
- Deployment note file referencing the validation log

## What does NOT belong here

- Raw versions (those stay in raw/)
- Rejected versions (those go to rejected/)
- LinkedIn or Instagram visuals

## File set per deployment

```
2026-05-21_facebook_agent-loopovi_DEPLOYED.png          — the actual published visual
2026-05-21_facebook_agent-loopovi_feed-screenshot.png   — screenshot from Facebook feed (optional)
2026-05-21_facebook_agent-loopovi_deploy-note.md        — deployment reference
```

## Deploy note format

```
Deployed: YYYY-MM-DD
Post: blog-001_facebook_APPROVED.md (V3)
Visual category: [A/B/C/D — or "text-only" if no visual used]
Feed observations: [summary or pointer to REAL_WORLD_VALIDATION.md]
Validation log: docs/CONTENT_PIPELINE/REAL_WORLD_VALIDATION.md — Deployment [N]
```

## Warning

A deployed visual is a validated artifact for this specific post, date, and account context.
It is NOT a reusable template. See VISUAL_RULES.md — Visual Fatigue Rules.

## Current deployed

No Facebook visuals deployed yet.
