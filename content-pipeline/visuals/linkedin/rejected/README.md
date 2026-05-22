# linkedin/rejected/

LinkedIn visuals that failed at any pipeline stage. Must be preserved.

## What belongs here

- Visuals that failed feed-context testing
- Visuals that failed human review
- Visuals that were technically correct but violated VISUAL_RULES.md

## What does NOT belong here

- Approved or deployed visuals
- Instagram or Facebook visuals

## Do not delete rejected visuals

Rejected visuals are evaluator material. They show what failure looks like in practice, which is more useful than abstract rules.

A rejected LinkedIn visual might become a BAD example in docs/CONTENT_PIPELINE/EXAMPLES/BAD/.

## Rejection note format (required)

Each rejected file must have an accompanying `.md` note:

```
2026-05-21_linkedin_agent-loopovi_v1_rejected.md

Rejected: 2026-05-21
Reason: footer text unreadable at mobile feed render size
Rule violated: VISUAL_RULES.md — Feed Context Findings (readability threshold)
Action taken: corrected in V2
```

## LinkedIn-specific rejection causes to document

- Footer / secondary text unreadable at mobile scale
- Too low contrast in feed context (looked different than in preview)
- Category A reused — visual fatigue risk (see VISUAL_RULES.md)
- Wrong aspect ratio
- Accent color repeated from previous post

## Current rejected

- `2026-05-21_linkedin_agent-loopovi_v1.png` — Deployment 001 V1
  Reason: footer readability failure at mobile feed size
  Corrected in: `approved/2026-05-21_linkedin_agent-loopovi_APPROVED.png` (V2)
