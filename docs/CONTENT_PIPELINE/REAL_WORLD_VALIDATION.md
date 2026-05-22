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

## Deployment 002 — Instagram

**Date:** 2026-05-22
**Post:** blog-001_instagram_APPROVED.md (V2)
**Visual:** Category C — Sketch Systems, 3-slide carousel, operational loop structure
**Status:** Deployed

### Findings

**Carousel format was appropriate for loop/process content.**
Think → Act → Verify has a sequential structure that maps naturally to carousel slides. Using a single image would have compressed a three-part structure into one frame — losing the visual sequencing that reinforces the concept.

**Rough notebook feel outperformed polished infographic direction.**
The operational sketch aesthetic (hand-drawn arrows, slightly rough edges) read as authentic systems thinking rather than designed content. A polished infographic version would have looked like every other "AI workflow" graphic on the platform.

**First slide is the only gate.**
Feed exposure depends entirely on whether the first slide stops the scroll. The remaining slides only matter if slide one works. Slide one should carry the core claim, not a setup.

**Instagram captions are lower-stakes than the visual entry.**
Unlike LinkedIn, where the caption can carry a long editorial argument, Instagram audiences often decide on the visual alone. Caption quality mattered but was secondary to visual entry.

**Active risks:**
- Category C carousel was used here — avoid repeating carousel format in the next Instagram post
- Sketch aesthetic worked once; it is now a recognizable style if repeated consecutively

---

## Deployment 003 — Facebook

**Date:** 2026-05-22
**Post:** blog-001_facebook_APPROVED.md (V3)
**Visual:** Category B/D — Operational artifact, notebook/workspace context
**Status:** Deployed

### Findings

**Artifact realism was the strongest differentiator.**
The notebook/workspace visual felt more human and less "designed" than either the LinkedIn or Instagram visuals. Facebook's audience and feed context is more personal-network-oriented — a real-looking artifact fits that context better than a branded graphic.

**Facebook benefits from Category D more than LinkedIn.**
LinkedIn's professional feed makes a clean typography card credible. Facebook's more conversational feed makes the same card feel like an ad. Real-environment imagery (desk, notebook, monitor) reads as a person sharing something, not a brand posting content.

**OG image risk is real.**
When posting with a link, Facebook may override the attached image with the blog post's OG image. Verify which visual actually appears after posting. If the link preview takes over, the visual is irrelevant.

**Text-only was a viable alternative.**
Facebook V3 worked with a visual, but the caption stands alone without one. For future Facebook posts where no strong visual concept exists, text-only is the correct choice — not a forced Category A card.

**Active risks:**
- Artifact realism worked once — the next Facebook post should not be the same notebook/desk setup
- "Systems wisdom" post arc (scenario → diagnosis → framework → close) is now the established Facebook pattern — needs variation on the next cycle

---

---

## Deployment 004 — LinkedIn (blog-002)

**Date:** 2026-05-22
**Post:** blog-002_linkedin_APPROVED.md (V2)
**Visual:** Category B — Operational Screens, two-panel deployment divergence artifact (deployment success indicator vs. user error state)
**Status:** Deployed

### Findings

**Narrative entry point differentiated from Cycle 001.**
Opening mid-failure — "The deployment finished. Logs were clean. Users still saw: 'Link nije validan.'" — created immediate engagement without requiring a conceptual setup. No audience confusion about what the post was about.

**"Technically functional. Operationally misleading." landed as a finding, not a quote.**
The standalone pivot line registered in feed as an operational observation, not as a shareable insight card. It anchored the post without making the post feel like a quote account.

**AI implication held in context.**
LinkedIn's professional audience accepted the brief AI implication ("where a workflow can keep generating outputs and updating logs long after the control logic has stopped working correctly") as credible industry observation, not as thought-leadership posturing. This is the correct register for LinkedIn. It did not work the same way on Instagram or Facebook — correct decision to assign it here only.

**No AI-slop perception reported.**

---

## Deployment 005 — Instagram (blog-002)

**Date:** 2026-05-22
**Post:** blog-002_instagram_APPROVED.md (V3)
**Visual:** Category D — Human Context, operational workstation with deployment logs, notebook sketches, subtle deployment contradiction; text overlay: "Deployment completed successfully. Users still saw errors."
**Status:** Deployed

### Findings

**Visual acted as evidence, not as branding.**
The operational workstation with actual deployment logs conveyed the failure state directly. The visual showed rather than announced. Audience registered it as a real debugging session, not a produced content piece.

**"The infrastructure said everything worked. The user got an error." — close without lesson.**
The post ended on two conflicting facts. The reader completed the implication without being given it. This performed better than any diagnostic question or framework statement would have in this position. Confirms: ending on tension is a valid editorial strategy.

**Visual dependency lower than Cycle 001.**
Narrative strength was sufficient for the post to stand independently. The visual supported rather than anchored. This is the correct direction when caption quality is high.

**Operational realism outperformed polished systems aesthetics.**
Category D registered as higher-trust than the Cycle 001 Category C sketch carousel in terms of immediate feed credibility. This is a platform-specific finding — what reads as authentic on Instagram is real-environment context, not illustrated systems thinking.

**Active risks:**
- Category D operational workstation used here — avoid same aesthetic in next Instagram post
- "Deployment" content type now established as the Instagram register for Cycle 002

---

## Deployment 006 — Facebook (blog-002)

**Date:** 2026-05-22
**Post:** blog-002_facebook_APPROVED.md (V3)
**Visual:** Category C — Sketch Systems, two-column divergence diagram (what deployment logs showed vs. what was actually true)
**Status:** Deployed

### Findings

**Sketch diagram complemented rather than duplicated the caption.**
The two-column divergence diagram made the technical gap immediately visible without requiring the caption to explain it. Caption told the story; visual showed the structure. When caption and visual have different jobs, neither feels redundant.

**"The deploy worked. It just didn't change what we needed it to change." — strongest closing line in the cycle.**
Performed well in Facebook's personal-network context. The "it just" construction is honest and slightly vulnerable — a tone that reads as genuine on Facebook in a way it would not on LinkedIn.

**First-person plural felt authentic.**
"We deployed," "We went through," "We eventually traced it" — this register fits Facebook's conversational feed. Same voice would read differently (possibly less credible) on LinkedIn.

**Active risks:**
- Category C sketch used here — do not repeat on Facebook in Cycle 003
- Debugging narrative arc is now the established Facebook pattern for Cycle 002

---

## Cycle 001 vs Cycle 002 — Behavioral Comparison

| Dimension | Cycle 001 | Cycle 002 |
|-----------|-----------|-----------|
| Source type | Conceptual framework (Think → Act → Verify) | Deployment failure narrative (real event, specific cause) |
| Editorial approach | Framework-driven — posts built toward a framework statement | Event-driven — posts opened mid-failure, ended without resolving tension |
| AI-slop resistance | Required three iterations to reduce fingerprints; persistent arc formula | Fewer iterations needed; specific real event acted as natural anti-slop anchor |
| "Systems quote account" risk | Present — Category A visual + quote-style close | Absent — Instagram and Facebook ended on observed facts, not insights |
| Visual dependency | High — Category A card was the post's primary identity signal | Lower — narrative strength was sufficient; visual was supportive |
| Reader role | Given the insight | Completes the implication |

**Critical finding from Cycle 002:**
Editorial restraint increases operational realism. The pipeline is strongest when it ends on tension. It is weakest when it resolves the tension for the reader.

---

## Visual Archive Reference

Deployed visual files are stored in `content-pipeline/visuals/` alongside their deployment notes.

Each deployment entry in this log corresponds to files in:
```
content-pipeline/visuals/{platform}/deployed/
```

Deployment 001 files:
```
content-pipeline/visuals/linkedin/deployed/2026-05-21_linkedin_agent-loopovi_DEPLOYED.png
content-pipeline/visuals/linkedin/deployed/2026-05-21_linkedin_agent-loopovi_deploy-note.md
content-pipeline/visuals/linkedin/rejected/2026-05-21_linkedin_agent-loopovi_v1.png
content-pipeline/visuals/linkedin/rejected/2026-05-21_linkedin_agent-loopovi_v1_rejected.md
```

For future deployments: add entry to this log AND place the deployed file + deploy-note in the corresponding `visuals/{platform}/deployed/` folder. The two systems stay in sync — this log is the narrative record; the visuals/ archive is the file record.
