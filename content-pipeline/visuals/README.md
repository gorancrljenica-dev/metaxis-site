# Visual Archive — content-pipeline/visuals/

Visuals are first-class pipeline artifacts. They are traceable, versioned, and staged — the same as captions.

---

## Platform separation

Visuals are stored by platform. Do not mix.

```
visuals/
├── linkedin/
├── instagram/
└── facebook/
```

Each platform has different aspect ratios, readability thresholds, feed behavior, and caption relationships. A visual made for LinkedIn is not a visual made for Instagram.

---

## Stage definitions

```
raw/        → early attempts, variants, V1/V2/V3. Not approved.
approved/   → human-approved candidate. Ready for publishing. Not yet deployed.
deployed/   → used in a live public post. Production artifact.
rejected/   → failed visuals. Must be preserved — rejection is evaluator data.
```

Files move through stages. They do not get renamed in place — a raw file stays in raw/; its approved version is a separate file in approved/.

---

## Naming convention

```
YYYY-MM-DD_platform_slug_version.ext
```

Examples:
```
2026-05-21_linkedin_agent-loopovi_v1.png
2026-05-21_linkedin_agent-loopovi_v2.png
2026-05-21_linkedin_agent-loopovi_APPROVED.png
2026-05-21_linkedin_agent-loopovi_DEPLOYED.png
2026-05-21_instagram_agent-loopovi_v1.png
2026-05-21_facebook_agent-loopovi_v1.png
```

Forbidden:
```
final.png / final-final.png / post.png / image1.png / copy.png
```

Naming chaos destroys visual memory across posts and versions.

---

## Visual artifact lifecycle

```
concept (visual-concepts.md)
  → production (raw/)
  → human review
  → feed-context test
  → approved/ (if passed)
  → deployed/ (after live posting)
  → rejected/ (if failed at any stage)
```

Feed-context testing is a required gate before moving to approved/. See VISUAL_RULES.md.

---

## Relationship to VISUAL_RULES.md

VISUAL_RULES.md defines: color system, categories, anti-patterns, visual fatigue rules, feed context findings.

This archive applies those rules to actual files. When a visual is rejected, the rejection README note should name which rule it violated.

---

## Warning

A deployed visual is a validated artifact for the specific post, date, and account context it was used in.

It is NOT an automatic template for future posts.

Using the same layout in the next post begins the visual fingerprint pattern that VISUAL_RULES.md flags as a risk. See: Visual Fatigue Rules.
