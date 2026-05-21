# approved/

Production-ready content. Human-approved. Ready for manual posting.

## What belongs here

- Drafts that passed reviewer checklist without rejection
- Final versions only — no in-progress content
- Content considered safe to publish as-is

## What does NOT belong here

- Drafts still under review
- Rejected content
- Anything with status other than `approved`

## Naming convention

Same filename, no rename:

```
blog-001_linkedin.md
blog-001_instagram.md
```

## File header update (required on approval)

```yaml
---
status: approved
source: blog-001_processed.md
platform: linkedin
generated: YYYY-MM-DD
approved_by: [initials]
approved_date: YYYY-MM-DD
posted: false
posted_date:
---
```

Update `posted: true` and `posted_date` manually after publishing.

## Workflow rule

```
reviewed/ → approved/
```

Approved content is never auto-posted.
Human copies content manually to the platform.
`posted` field is updated by hand after publishing.

## Copy to EXAMPLES/GOOD

After posting, copy a clean version to:
`docs/CONTENT_PIPELINE/EXAMPLES/GOOD/`

Format: `YYYY-MM-DD_platform_slug.md`
