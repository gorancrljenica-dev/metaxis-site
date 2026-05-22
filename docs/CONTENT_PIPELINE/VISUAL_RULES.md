# Visual Rules — Metaxis Content Pipeline

The visual layer supports the editorial system. It does not lead it.
A weak post with a polished visual is still a weak post.

---

## Philosophy

Metaxis visuals should feel used, not produced.

Used means: the kind of thing you'd see on a real operator's screen, notebook, or whiteboard — not the kind of thing a branding agency would deliver.

This isn't minimalism for aesthetic reasons. It's because Metaxis content is about operational systems. The visual language should match the work.

---

## Color Foundation

**Base:**
- Charcoal: `#1C1C1E` or similar
- Graphite: `#2C2C2E`
- Warm dark gray: `#222220`
- Muted navy: `#1A1F2E`

Avoid pure `#000000` as a dominant base — it reads as designed, not operational.

**Accent (one at a time, not combined):**
- Muted amber: `#C9862A`
- Warm orange: `#D4703A`
- Desaturated cyan: `#4A9E9E`
- Muted electric blue: `#3D6FA8`
- Subtle crimson: `#8F2D2D`

Accents are signals. One per visual. Used to highlight a single element — an arrow, a label, a key phrase. Not as decorative color fields.

**Text on dark:**
- Primary text: `#E8E8E4` (off-white, not pure white)
- Secondary text: `#9A9A94`
- Avoid pure `#FFFFFF` — too stark against dark base

---

## Visual Categories

### Category A — Calm Typography

Short operational statement on a clean dark background.

Use when:
- The claim is strong enough to stand alone
- No diagram is needed to explain the concept
- The caption carries the explanation; the visual carries the mood

Rules:
- One primary line, maximum two lines of text
- No decorative elements beyond a subtle rule or margin
- Typeface: monospace or geometric sans — not script, not display
- Controlled spacing — generous, not tight

Example output: "Think → Act → Verify" on charcoal. One accent-color arrow. Nothing else.

---

### Category B — Operational Screens

Real work artifacts. Terminal output, workflow diagrams, code snippets, reviewer notes, architecture sketches.

Use when:
- The content is about a real system or process
- A screenshot communicates more than an illustration
- The post references something that actually exists

Rules:
- Use real screenshots when available — do not fake them
- Slight crop or framing is acceptable; manipulation is not
- Dark-themed terminal/editor screenshots fit the visual language naturally
- Can add minimal annotation (muted accent arrow pointing to the key line)

What this is NOT: stock imagery of code on a screen.

---

### Category C — Sketch Systems

Hand-drawn or hand-drawn-style diagrams. Loops, flows, process maps, annotations.

Use when:
- The concept has a structure that benefits from spatial representation
- A polished diagram would look over-designed for the content
- The post describes a system the audience is expected to understand, not admire

Rules:
- Slightly rough edges are better than pixel-perfect alignment
- Arrows should look drawn, not rendered
- Can use whiteboard aesthetic on a light panel, or chalk-on-dark aesthetic
- Labels should be typewritten or set in a monospace font — not calligraphy
- System diagrams should be legible at 600px wide

---

### Category D — Human Context

Real environment photos. Notebook, desk, monitor, work-in-progress.

Use when:
- The post has a personal or observational tone
- The content benefits from grounding (this is real work, not theory)
- Category A–C would feel too polished for the specific post

Rules:
- No stock photography
- No staged "productivity" setups
- Real desks have clutter. That's fine.
- Monitor photos should show real work, not lorem ipsum
- Notebook photos should show real notes, not decorative handwriting

---

## Organic Imperfection

Imperfection is allowed and sometimes preferred.

Acceptable:
- Slightly uneven spacing that reads as composed, not broken
- Real screenshots with UI artifacts (dark mode inconsistencies, cursor, etc.)
- Visible notebook lines or grid
- Sketch marks, corrections, annotations
- Imperfect alignment that reads as editorial, not careless

Not acceptable:
- Blurry photos that look like accidents
- Misaligned text that looks like a mistake
- Inconsistency that reads as incoherence (not the same as imperfection)

The goal is: looks like a real person made this, not: looks like a real person made a mistake.

---

## Anti-Patterns — Forbidden Visual Language

The following categories are explicitly rejected:

**AI aesthetics:**
- Glowing neural networks or AI brain imagery
- Neon robot or humanoid AI visuals
- Hologram or floating UI elements
- Cyberpunk city backgrounds
- Blue-glow "tech" typography

**Stock photography:**
- Startup meetings with laptops and coffee
- "Productivity" person at a clean desk with a motivational expression
- Any staged human imagery
- Generic team collaboration photos

**Design theater:**
- Gradient-heavy backgrounds without functional purpose
- Motivational typography posters ("Work harder. Think bigger.")
- Oversized emoji as visual elements
- "Future of AI" visual motifs (circuit boards, gears, infinity symbols)
- Design that communicates "this is designed" rather than "this is real"

**Overuse patterns:**
- Same centered quote card in every post
- Same layout proportions every post
- Same accent color in every visual
- Same visual category in consecutive posts

---

## Visual Fatigue Rules

Visual repetition is a fingerprint. Platforms and audiences recognize patterns faster than creators do.

Rules:
- Do not use the same visual category in more than two consecutive posts
- Do not use the same layout structure (centered text + background) more than twice in the same month
- Do not use the same accent color in consecutive visuals
- Vary the visual weight: some posts will be text-only, some will be diagram-heavy, some will be screenshots

Controlled variability means: the audience cannot predict the visual format before they read the post. They can predict the tone (calm, operational), not the format.

---

## Pairing Logic — Visual + Caption

The visual and caption are not duplicates of each other.

- If the caption explains a concept, the visual represents the structure.
- If the caption is a scenario, the visual is the artifact.
- If the caption is a short sharp claim, the visual can carry the claim itself.
- If the caption is long and detailed, the visual should be minimal.

The visual and caption should add to each other, not say the same thing twice.

---

## What "operational" looks like

A Metaxis visual passes this test:
Would someone working in operations find this credible and useful — or does it look like it was made for social media?

If it looks like it was made for social media: redesign.
If it looks like it was made to explain something real: approved.

---

## Feed Context Findings

From Deployment 001 (LinkedIn, 2026-05-21). Observed in real conditions, not predicted from design review.

**Standalone preview ≠ feed perception.**
A visual that looks weak or low-contrast in isolation can perform well inside a noisy feed. The frame that matters is the one surrounded by other content. Test in feed context, not just in the design tool.

**Subtle visuals can outperform loud ones inside noisy feeds.**
The deployed visual was calm and low-contrast by design. In feed, surrounded by higher-saturation posts, that calmness created differentiation. The visual didn't need to compete — it held attention by not competing.

**Readability thresholds must be tested at mobile feed render size.**
Footer text and secondary labels that are legible at design resolution can be unreadable at feed render size on mobile. This is not detectable without testing in the actual feed environment. It is now a required pre-deployment gate.

**Footer readability mattered more than expected.**
Small text at the bottom of a visual is often where metadata, attribution, or secondary labels live. Failing there does not break the visual — but it erodes the operational feel. If something is in the frame, it should be readable.

**Operational calmness survived real deployment.**
The visual language defined in this document translated from design intent to live context without degradation. The post did not read as promotional or AI-generated in real conditions. This validates the design direction but does not reduce the repetition risk.

**Pre-deployment checklist (mandatory from Deployment 002 onward):**
- [ ] Reviewed at mobile feed render size (not design resolution)
- [ ] Footer and secondary text legible at feed size
- [ ] Visual category differs from previous post
- [ ] Accent color not repeated from previous post
- [ ] Visual does not duplicate the caption

---

## Visual Artifact Storage

Visuals are traceable pipeline artifacts. Every visual — produced, approved, deployed, or rejected — has a designated location.

```
content-pipeline/visuals/
├── linkedin/
│   ├── raw/        — V1/V2/V3 variants, not yet reviewed
│   ├── approved/   — passed human review + feed-context test
│   ├── deployed/   — used in a live post
│   └── rejected/   — failed at any stage (must be preserved)
├── instagram/
│   ├── raw/
│   ├── approved/
│   ├── deployed/
│   └── rejected/
└── facebook/
    ├── raw/
    ├── approved/
    ├── deployed/
    └── rejected/
```

**Naming convention:** `YYYY-MM-DD_platform_slug_version.ext`

Examples:
```
2026-05-21_linkedin_agent-loopovi_v1.png      — raw
2026-05-21_linkedin_agent-loopovi_APPROVED.png — approved (V2 corrected)
2026-05-21_linkedin_agent-loopovi_DEPLOYED.png — deployed
2026-05-21_linkedin_agent-loopovi_v1.png      — also in rejected/ (V1 footer failure)
```

Each rejected file must have a `.md` rejection note explaining why. Rejected visuals are evaluator data — do not delete.

Each deployed file must have a deploy note referencing the validation log entry in `REAL_WORLD_VALIDATION.md`.

See each platform's stage README for full format requirements.

---

## Cross-Platform Visual Findings

From the first full publishing cycle (blog-001, all three platforms, 2026-05-22).

**Same content needs different visual logic per platform.**
LinkedIn: calm typography card. Instagram: process carousel. Facebook: artifact-style image. The source content was identical. The visual execution had nothing in common. Do not adapt a LinkedIn visual for Instagram — produce from scratch.

**Category A (typography) is LinkedIn's natural register, not a universal default.**
On LinkedIn, a dark background with one clean statement reads as editorial authority. On Facebook, the same card reads as a branded ad. On Instagram, it reads as a quote post. Category A is appropriate for LinkedIn; it is often the wrong choice for the other two platforms.

**Category C (sketch systems) worked for process/loop content on Instagram.**
Sequential process content — loops, flows, multi-step frameworks — maps well to carousel format with sketch-style visuals. The rough operational aesthetic reads as authentic thinking, not polished marketing.

**Category B/D (artifact realism) was the strongest choice for Facebook.**
A notebook or real work environment feels personal on Facebook's network-oriented feed. It does not feel personal on LinkedIn. Know which platform is being designed for before choosing a category.

**Visual fatigue warning — first cycle complete.**
The following must not repeat in the next cycle without variation:
- Category A on any platform
- Amber accent on any platform
- Carousel format on Instagram
- Notebook/workspace on Facebook

The next cycle must use different categories across all three platforms.

---

## Cycle 002 Visual Findings

From blog-002 deployment (all three platforms, 2026-05-22). Source type: deployment failure narrative.

**Visuals work better as evidence than as identity.**
Cycle 001 Category A made the visual the post's primary identity signal — the audience sees the brand before they see the content. Cycle 002 Category D (operational workstation, Instagram) acted as evidence that a specific failure happened. When the visual shows rather than announces, audience trust increases. The visual earns attention rather than demanding it.

**Visual dependency decreases when narrative strength increases.**
Cycle 002 captions were operationally grounded in a specific real event. The visual's job became support rather than anchor — the Instagram caption would stand independently without its visual. In Cycle 001, the Category A visual was more load-bearing. Implication: invest in caption quality before visual production. Strong captions reduce visual dependency.

**Operational realism outperformed polished systems aesthetics.**
Category D (real operational workstation with actual deployment logs) registered in feed as a real debugging session. Category A (clean typography card) registered as designed content. In Cycle 002's context — a deployment failure narrative — the gap between "real" and "designed" was detectable and meaningful. Match visual register to source type, not to brand consistency alone.

**Sketch diagram (Category C) is most effective when caption and visual have different jobs.**
Facebook Cycle 002: the two-column divergence diagram showed the gap between deployment state and operational state. The caption told the story; the visual showed the structure. When caption and visual describe the same thing differently, neither is redundant. When they describe the same thing in the same way, one is unnecessary.

**Category D is a primary option, not a fallback.**
The visual concept notes for Cycle 002 treated Category D as a backup if no polished visual could be produced. In deployment, Category D performed as the strongest credibility signal. Real operational environments convey competence in a way that designed typography cards cannot. For content grounded in real events — deployment failures, debugging processes, real system behavior — Category D should be the first consideration, not the last.

**Visual rotation principle holds.**
Cycle 001: A (LinkedIn), C (Instagram), B/D (Facebook).
Cycle 002: B (LinkedIn), D (Instagram), C (Facebook).
No category repeated on any platform across two cycles. The visual language remained variable. This is the correct behavior. Continue rotating.
