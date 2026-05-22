# linkedin/deployed/

LinkedIn visuals used in live posts. Production artifacts.

## What belongs here

- The exact visual file that was published
- Feed screenshot (if captured) — named with `_feed-screenshot` suffix
- Deployment note file referencing the validation log

## What does NOT belong here

- Raw versions (those stay in raw/)
- Rejected versions (those go to rejected/)
- Instagram or Facebook visuals

## File set per deployment

```
2026-05-21_linkedin_agent-loopovi_DEPLOYED.png          — the actual published visual
2026-05-21_linkedin_agent-loopovi_feed-screenshot.png   — screenshot from LinkedIn feed (optional)
2026-05-21_linkedin_agent-loopovi_deploy-note.md        — deployment reference
```

## Deploy note format

```
Deployed: 2026-05-21
Post: blog-001_linkedin_APPROVED.md (V3)
Visual category: A — Calm Typography
Feed observations: [summary or pointer to REAL_WORLD_VALIDATION.md]
Validation log: docs/CONTENT_PIPELINE/REAL_WORLD_VALIDATION.md — Deployment 001
```

## Warning

A deployed visual is a validated artifact for this specific post, date, and account context.
It is NOT a reusable template. See VISUAL_RULES.md — Visual Fatigue Rules.

## Current deployed

- `2026-05-21_linkedin_agent-loopovi_DEPLOYED.png` — Deployment 001
  Caption: LinkedIn V3 (agent-loopovi)
  Category A, charcoal base, amber accent
  Validation: REAL_WORLD_VALIDATION.md
