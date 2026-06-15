---
title: "Few-Shot Prompting: Učite AI kroz primjere umjesto objašnjenja"
date: "2026-06-15"
slug: "few-shot-prompting-ucenje-kroz-primjere"
excerpt: "Few-Shot Prompting koristi snagu AI-ja u prepoznavanju obrazaca. Umjesto objašnjenja, pokažite primjere i dobijte dosljedne, predvidive rezultate."
tags: ["Prompt Engineering", "AI", "Few-Shot Learning"]
readTime: "6 min čitanja"
---

## Zašto riječi često nisu dovoljne

Jedna od najvećih zabluda u radu s AI-jem je uvjerenje da model razumije šta želiš čim mu to napišeš. U praksi, riječi nisu dovoljne. AI ne dijeli tvoje iskustvo, kontekst ni intuiciju.

Ali dijeli nešto drugo: **sposobnost prepoznavanja obrazaca.**

Few-Shot Prompting koristi upravo to. Umjesto da objašnjavaš *šta želiš*, ti **pokažeš kako izgleda dobar odgovor**. AI tada ne pogađa—on **imitira obrazac koji si mu dao**.

## Što je Few-Shot Prompting?

Few-Shot Prompting je tehnika gdje AI-ju daješ **nekoliko konkretnih primjera ulaza i izlaza**, a zatim od njega tražiš novi odgovor po istom obrascu.

Ključna stvar: ne učiš ga pravila—**učiš ga stilom i strukturom**. Model ne pamti primjere dugoročno; on ih koristi **kao referentni uzorak u tom trenutku**.

### Praktičan primjer

Ako želiš da AI organizira tvoj dan, daješ mu dva-tri primjera kako ti to radiš, i zatim ga pitaš za novi dan:

**Primjer 1:**
- Fokus: Konsolidacija AI OS projekta
- Zadaci: 1) Obsidian zapis, 2) n8n test, 3) analiza

**Primjer 2:**
- Fokus: RAG poboljšanja
- Zadaci: 1) Feedback scoring, 2) Embedding optimizacija

Novi zahtjev: "Kako da unaprijedim svoj workflow?"

AI tada generiše odgovor koji **kopira stil, strukturu i ton** prethodnih primjera—bez dodatnog objašnjenja.

## Osnovna struktura Few-Shot prompta

Svaki dobar Few-Shot prompt ima tri dijela:

1. **Instrukcija** — Kratko objašnjenje šta trebam
2. **Primjeri** — Nekoliko parova Input → Output
3. **Novi zahtjev** — Ulaz za koji želim odgovor

Primjer:
```
Zadatak: Evaluiraj kod po obrascu ispod.

Primjer 1:
Input: [kod]
Output: Kvaliteta: 8/10. Nedostaje dokumentacija.

Primjer 2:
Input: [kod]
Output: Kvaliteta: 6/10. Kompleksna logika bez testova.

Evaluiraj sada:
Input: [novi kod]
```

## Kada Few-Shot Prompting radi najbolje

Few-Shot je posebno moćan za:

- **Konzistentan stil pisanja** — copying tone, vocabulary, format
- **Klasifikaciju i evaluaciju** — ratings, kategorije, feedback
- **Standardizaciju odgovora** — QA, ocjene, izvještaji
- **Interni jezik** — usklađivanje sa tvojim specifičnim zahtjevima

Loš je izbor za:

- Matematičke proračune koji trebaju apsolutnu preciznost
- Zadacima s vrlo specifičnim pravilima bez jasnog obrasca
- Situacijama gdje želiš potpuno slobodan kreativni odgovor

## Ključ: Kvaliteta primjera

Few-Shot je **tačno onoliko dobar koliko su dobri primjeri**. Dobar primjer mora biti:

- **Jasan** — nije zbunjujući ili nejasan
- **Tipičan** — predstavlja standardnu situaciju
- **Konzistentan** — svi primjeri slijede isti stil

Ako su primjeri loši ili kontradiktorni, model proizvodi nestabilne rezultate. AI ne prosječi—on **kopira dominantni obrazac**.

## Few-Shot + drugi pattern-i

Few-Shot Prompting postaje jači kada se kombinuje sa:

- **Template Pattern** — primjeri + fiksna struktura
- **Meta Language Creation** — primjeri koji definiraju značenje
- **Chain of Thought** — primjeri koji pokazuju brzo mišljenja

## Zašto Few-Shot Prompting radi?

AI modeli su trenirani na milijardama primjera. Njihova moć nije u zaključivanju, nego u **prepoznavanju i nastavku obrazaca**. Kada mu daš dobar primjer, praktički kažeš:

> "Ovako izgleda ispravan odgovor u ovom kontekstu."

U praksi, **dva dobra primjera vrijeđaju više od deset rečenica objašnjenja**.

## Zaključak

Few-Shot Prompting je jedan od najjednostavnijih i najpouzdanijih alata u prompt engineering-u. Umjesto da objašnjavaš kompleksna pravila, pokažeš primjere. Dobar obrazac + nekoliko dobrih primjera = dosljednost, stabilnost i predvidivost koje možeš pouzdano koristiti u produkciji.