# BAD Examples

Rejected drafts. Content that failed reviewer or evaluator checks.

## What belongs here

- Drafts that were rejected with a reason
- AI-generated output that passed generation but failed review
- Real examples of patterns from REJECTED_PATTERNS.md appearing in actual output

## Rejection categories to tag

Use one or more tags per file:

- `ai-slop` — generic phrasing, could be from any brand
- `fake-authority` — performs expertise without substance
- `motivational` — inspiration without operational grounding
- `startup-theater` — buzzwords, performative mission
- `engagement-bait` — CTA spam, comment hooks
- `hype` — "game-changer", "10x", "unlock potential"
- `platform-mismatch` — wrong format for the target platform
- `emoji-spam` — excessive or decorative emoji use
- `generic-ai` — "AI is transforming...", "future of work" framing

## File naming convention

```
YYYY-MM-DD_platform_slug_[rejection-tag].md
```

Example:
```
2026-05-21_instagram_agent-loopovi_ai-slop.md
2026-05-21_linkedin_kontrola-outputa_fake-authority.md
```

## Why this folder matters

The evaluator learns more from bad examples than from rules alone.
Abstract rules describe patterns. Bad examples demonstrate them.

Every sprint should save at least one rejected draft here, with rejection reason noted at the top of the file.

## File header format

```
---
rejected: true
reason: [rejection tag]
platform: linkedin | instagram | facebook
source_slug: [blog post slug]
date: YYYY-MM-DD
---
```
