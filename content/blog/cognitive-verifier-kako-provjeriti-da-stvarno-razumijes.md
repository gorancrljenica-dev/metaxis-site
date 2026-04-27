---
title: "Cognitive Verifier Pattern: Kako natjerati AI da prvo razmisli"
date: "2026-04-27"
slug: "cognitive-verifier-pattern-ai-razmisljanje"
excerpt: "Obrazac koji usporiava AI i tjera ga da provjeri vlastito razumijevanje prije nego što odgovori na pitanja."
tags: ["AI Prompting", "Cognitive Patterns", "Critical Thinking"]
readTime: "4 min citanja"
---

## Zašto AI često odgovara bez razmišljanja?

Jedan od najvećih problema u radu s AI-jem je brzina. Model dobije pitanje i odmah isporuči samouvjeren, logičan, ali često pogrešan odgovor. To stvara iluziju razumijevanja kod oba učesnika.

**Cognitive Verifier Pattern** (CVP) rješava upravo to — zaustavljajući AI na poluputa da provjeri vlastitu logiku prije nego što napiše odgovor.

## Što je Cognitive Verifier Pattern?

CVP je tehnika u kojoj AI **ne daje odmah konačan odgovor**, već prvo analizira samo pitanje:

1. Prima tvoje pitanje
2. Identifikuje nejasnoće, pogrešne pretpostavke ili skrivene pretpostavke
3. Generiše **podpitanja** koja razjašnjavaju problem
4. Tek nakon toga sastavlja provjeren odgovor

Umjesto brzog refleksa, pretvara odgovor u **proces razmišljanja**.

## Zašto je ovo važno?

Rezultat su:
- **Precizniji zaključci** — nema površnih pretpostavki
- **Dublje razumijevanje** — kontekst je jasno definisan
- **Manji rizik od grešaka** — svaka pretpostavka se eksplicitno provjerava
- **Pouzdaniji odgovori** — posebno za kompleksne, strateške zadatke

## Kako ga primjenjuješ?

Umjesto običnog pitanja:

```
"Kako da poboljšam produktivnost svog tima?"
```

Koristi CVP format:

```
Prije nego što odgovoriš, koristi Cognitive Verifier Pattern:
1. Koja pitanja nisam postavio koja bi trebala biti jasna?
2. Koje pretpostavke moram provjeriti?
3. Što mi nedostaje za relevantan odgovor?

Tek nakon što identificiraš te stvari, daj mi konkretan prijedlog.
```

AI tada:
- Primjećuje da "produktivnost" nije definisana
- Pita: koja je veličina tima? Tip posla? Koji konkretno problem?
- Sa tvojim odgovorima sastavlja prilagođen plan umjesto generičkog savjeta

Razlika nije u dužini odgovora — nego u **kvaliteti procesa**.

## Kada ga koristiti?

CVP je neophod za:
- **Strateške odluke** gdje pogrešna pretpostavka košta skupo
- **Kompleksne probleme** koji zahtijevaju analizu
- **Važne preporuke** gdje kontekst nije očit
- **Kritičko razmišljanje** gdje brzina nije prioritet

Ne koristi ga za:
- Jednostavna, jednoznačna pitanja
- Brze informacije gdje je kontekst jasan
- Rutinske zadatke gdje analiza usporiava više nego pomaže

## Praktični savjet

Integrira CVP kao dio redovnog rada, ali selektivno. Postavi ga kao defaultni oblik razmišljanja za važne odluke i kompleksne probleme, a preskočи ga za brze lookup-e.

Rezultat: AI koji **stvarno razumije** tvoje pitanja umjesto koji samo brzo odgovara na njih.