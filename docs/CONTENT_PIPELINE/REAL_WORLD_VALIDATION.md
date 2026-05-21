# Real-World Validation Log

Operational findings from actual deployments. Not theory.

---

## Deployment 001 — LinkedIn

**Date:** 2026-05-21
**Post:** blog-001_linkedin_APPROVED.md (V3)
**Visual:** Typography card — charcoal base, "Think → Act → Verify" loop structure, muted amber accent
**Status:** Deployed

---

### What was tested

- Approved caption (V3) paired with approved visual
- Feed appearance on LinkedIn desktop and mobile
- Readability at feed render size
- Audience perception of tone (editorial vs promotional)

---

### Findings

**Visual performed better in-feed than in standalone preview.**
The preview image (thumbnail, small) appeared low-contrast and questionable. In actual feed context — with surrounding posts providing visual noise — the calm, dark, structured visual held attention more effectively. Conclusion: standalone preview is not the correct test for feed visuals.

**Readability issue discovered in V1 of the visual.**
Footer text and small secondary labels were not legible at feed render size on mobile. This was not visible in the design-stage preview. Issue was caught before posting, corrected, and re-tested. The corrected version (V2 of the visual asset) was deployed.

**Correction made:** Footer text size increased, contrast ratio improved. Visual approved and deployed as corrected version.

**Operational calmness survived deployment.**
No "AI-slop" perception reported. No aggressive marketing feel. Post read as editorial/operational, not promotional. The tone calibration from Sprint 1 held in real conditions.

**No brand mismatch detected.**
Post felt consistent with what metaxis.io presents. Systems-oriented, calm, direct.

---

### Active risks identified post-deployment

**Visual fingerprint repetition.**
The deployed visual was a dark typography card with amber accent — Category A. If subsequent posts default to the same format, the pattern becomes recognizable within 3–4 posts.

**"Systems quote account" drift.**
If every post is a dark-background statement card with one bold claim, Metaxis starts to look like a "systems wisdom" account rather than an operational resource. This is a positioning risk, not a quality risk. Mitigated by: varying visual categories, ensuring some posts use Category B (screenshots) or no image.

**Amber accent overuse.**
Amber appeared in Sprint 1 visual concepts and in this deployed visual. It should not appear in the next two posts' visuals. Rotate accent or remove accent entirely for the next cycle.

**Typography layout lock-in.**
Category A is the easiest format to produce and passed deployment. That creates a bias toward repeating it. It should not be used in the next post's visual.

---

### Lessons from this deployment

1. Test in feed, not just in preview. The frame that matters is the one the audience sees.
2. Footer and small text must be tested at mobile feed render size, not at design resolution.
3. Visual readability is a pre-deployment gate, not a post-deployment observation.
4. The visual system works. The risk is not quality — it's repetition.

---

## Deployments Pending

- Instagram V2 — visual concept defined, not yet produced
- Facebook V3 — visual optional, text post viable
