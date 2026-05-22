# facebook/rejected/

Facebook visuals that failed at any pipeline stage. Must be preserved.

## What belongs here

- Visuals that failed feed-context testing
- Visuals that failed human review
- Visuals that were technically correct but violated VISUAL_RULES.md

## What does NOT belong here

- Approved or deployed visuals
- LinkedIn or Instagram visuals

## Do not delete rejected visuals

Rejected visuals are evaluator material. They show what failure looks like in practice, which is more useful than abstract rules.

A rejected Facebook visual might become a BAD example in docs/CONTENT_PIPELINE/EXAMPLES/BAD/.

## Rejection note format (required)

Each rejected file must have an accompanying `.md` note:

```
2026-05-21_facebook_agent-loopovi_v1_rejected.md

Rejected: YYYY-MM-DD
Reason: [description of failure]
Rule violated: VISUAL_RULES.md — [section]
Action taken: [corrected in V2 / abandoned / other]
```

## Facebook-specific rejection causes to document

- Visual overridden by OG link preview image (unexpected behavior)
- Too low contrast in Facebook feed (different gamma/brightness than preview tool)
- Category A reused — visual fatigue risk (see VISUAL_RULES.md)
- Wrong aspect ratio causing crop in mobile feed
- Accent color repeated from previous post
- Text unreadable at Facebook feed thumbnail size

## Current rejected

No Facebook visuals rejected yet.
