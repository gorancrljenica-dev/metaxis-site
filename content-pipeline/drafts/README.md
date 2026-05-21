# drafts/

Raw generated platform content. Not approved. Not reviewed.

## What belongs here

- First-pass LinkedIn draft
- First-pass Instagram caption
- First-pass Facebook post
- Carousel outline (if applicable)
- Hashtag candidates

## What does NOT belong here

- Approved content
- Reviewer-edited versions
- Content that has been published

## Naming convention

Match the processed file name, add platform suffix:

```
blog-001_linkedin.md
blog-001_instagram.md
blog-001_facebook.md
blog-001_carousel.md
```

## File header (required)

```yaml
---
status: draft
source: blog-001_processed.md
platform: linkedin
generated: YYYY-MM-DD
reviewed: false
---
```

## Workflow rule

```
processed/ → drafts/ → reviewed/
```

No draft moves to approved/ without passing through reviewed/.
Status field stays `draft` until reviewer changes it.
