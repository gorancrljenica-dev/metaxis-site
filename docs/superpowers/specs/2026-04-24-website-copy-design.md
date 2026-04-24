# Spec: Website Copy Redesign — metaxis.io

Date: 2026-04-24
Status: Approved

---

## Context

The current website copy is heavily clinical/healthcare focused, which is misaligned with the Metaxis brand positioning. Metaxis builds structured operational systems for small businesses. The copy needs to reflect that — speaking in outcomes, not technical implementation.

Structure stays the same. Only text content changes.

---

## Positioning

Metaxis builds structured operational systems that turn messy processes, inconsistent decisions, and manual workflows into structured, repeatable, and automated systems.

Target user: small business owners who care about saving time, reducing errors, having control, and making better decisions.

Communication rules:
- Speak in outcomes (clarity, control, time saved)
- No AI buzzwords
- Simple, direct, concrete
- Clarity over sophistication

---

## Changes by Section

### Hero

| Field | Old | New |
|-------|-----|-----|
| badge | "AI Systems & Decision Tools" | "Operational Systems · Automation" |
| subtitle | "Building AI decision systems and automation tools." | "Turning inconsistent decisions and manual workflows into structured, repeatable systems." |
| subtitle2 | "Where intelligence meets clinical practice." | "Less guesswork. More control." |

CTAs unchanged: "Explore Projects" / "View Labs"

---

### WhatIBuild

Description (section header):
> Old: "Systems where structured intelligence and human decision-making intersect."
> New: "Three types of operational systems — each designed to give your business clarity, consistency, and control."

**Card 1 — Decision Systems**
- Title: `Decision Systems`
- Description: `Structured rules and logic that make the right decision clear. No more guesswork — consistent outcomes every time a situation repeats.`
- Icon: Brain (keep)

**Card 2 — Automation Systems**
- Title: `Automation Systems`
- Description: `Manual, repetitive workflows — automated. Your team focuses on work that actually requires a human.`
- Icon: Zap (keep)

**Card 3 — Digital Health Tools**
- Title: `Digital Health Tools`
- Description: `Clinical decision support and monitoring tools for healthcare practitioners. Structured logic applied to patient care workflows.`
- Icon: HeartPulse (keep)

---

### Contact

| Field | Old | New |
|-------|-----|-----|
| p1 | "Interested in collaborating on AI systems, clinical decision support, or automation projects?" | "Looking to bring structure and automation to your business operations?" |
| p2 | "I'm open to consulting engagements, research collaborations, and conversations about applying AI to complex decision environments." | "Open to consulting engagements, operational system design, and conversations about solving complex process problems." |
| item1 | "Clinical AI consulting" | "Business process automation" |
| item2 | "Decision support architecture" | "Decision system design" |
| item3 | "Healthcare automation" | "Operations consulting" |
| item4 | "Research collaborations" | "Clinical AI & healthcare tools" |
| item5 | "Technical advisory" | "Technical advisory" |

---

### Footer

| Field | Old | New |
|-------|-----|-----|
| tagline | "Building AI systems that support human decisions." | "Structured systems that support human decisions." |

---

## Out of Scope

- BS (Bosnian) locale — updated separately after EN is confirmed live
- Visual design, layout, component structure — no changes
- Projects section copy — project cards describe actual projects, left as-is
- Labs section copy — unchanged

---

## Files to Edit

- `locales/en.json` — all text changes
- `locales/bs.json` — follow-up, out of scope for this sprint
