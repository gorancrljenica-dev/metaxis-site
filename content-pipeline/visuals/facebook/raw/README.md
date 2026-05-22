# facebook/raw/

Early visual attempts for Facebook. Not reviewed. Not approved.

## What belongs here

- V1, V2, V3 variants of a visual before approval
- Rough attempts and layout explorations
- Visuals that haven't been feed-tested yet

## What does NOT belong here

- Approved visuals (those go to approved/)
- Deployed visuals (those go to deployed/)
- Visuals intended for LinkedIn or Instagram

## When files move out

Move to `approved/` if: visual passes feed-context test and human review.
Move to `rejected/` if: visual fails at any point.
Files stay in `raw/` until explicitly moved. Do not delete.

## Notes to accompany the asset

Add a short `.md` sidecar file for any file that gets reviewed:

```
2026-05-21_facebook_agent-loopovi_v1_notes.md

Visual V1 — Facebook agent-loopovi
Issues found: [description]
Action: [corrected in V2 / rejected / other]
```

## Facebook-specific

Aspect ratio: 1200×630 (landscape link preview) or 1080×1080 (square post).
Facebook feed renders visuals smaller than they appear in the composer — test at feed size.
Facebook also supports text-only posts; a visual is not required for every deployment.
If the post uses a link preview, the visual may be overridden by the OG image — verify behavior before approving.
