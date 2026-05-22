# instagram/rejected/

Instagram visuals that failed at any pipeline stage. Must be preserved.

## What belongs here

- Visuals that failed feed-context testing
- Visuals that failed human review
- Visuals that were technically correct but violated VISUAL_RULES.md

## What does NOT belong here

- Approved or deployed visuals
- LinkedIn or Facebook visuals

## Do not delete rejected visuals

Rejected visuals are evaluator material. They show what failure looks like in practice, which is more useful than abstract rules.

A rejected Instagram visual might become a BAD example in docs/CONTENT_PIPELINE/EXAMPLES/BAD/.

## Rejection note format (required)

Each rejected file must have an accompanying `.md` note:

```
2026-05-21_instagram_agent-loopovi_v1_rejected.md

Rejected: YYYY-MM-DD
Reason: [description of failure]
Rule violated: VISUAL_RULES.md — [section]
Action taken: [corrected in V2 / abandoned / other]
```

## Instagram-specific rejection causes to document

- Text overlay unreadable at grid thumbnail size
- First frame too dense — requires tapping to read
- Too low contrast in feed context (looked different than in preview)
- Category A reused — visual fatigue risk (see VISUAL_RULES.md)
- Wrong aspect ratio (non-square causing unexpected crop)
- Accent color repeated from previous post

## Current rejected

No Instagram visuals rejected yet.
