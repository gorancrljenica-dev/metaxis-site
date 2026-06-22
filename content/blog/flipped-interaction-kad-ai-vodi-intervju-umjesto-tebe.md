---
title: "Flipped Interaction: Kad AI Vodi Intervju Umjesto Tebe"
date: "2026-06-22"
slug: "flipped-interaction-ai-intervju"
excerpt: "Tehnika u kojoj AI postavlja pitanja umjesto da odmah odgovara, čime osigurava bolji kontekst i preciznije rezultate."
tags: ["AI Prompting", "Pattern Design", "Produktivnost"]
readTime: "4 min citanja"
---

## Problem: Nejasni Zahtjevi, Generički Odgovori

Često znaš *približno* šta želiš od AI-ja, ali ne znaš:

- koje informacije su bitne
- šta sve utiče na konačan rezultat
- kako precizno postaviti pitanje

Rezultat? AI nagađa, daje generičke odgovore, a ti moraš sve preradi. Za ovakve situacije postoji bolje rješenje.

## Šta je Flipped Interaction Pattern

**Flipped Interaction Pattern (FIP)** je tehnika u kojoj AI preuzima inicijativu umjesto tebe.

Umjesto da odmah izvrši komandu, AI:

- postavlja clarifying pitanja
- razjašnjava kontekst
- testira pretpostavke
- prikuplja potrebne informacije

sve dok ne stekne dovoljno razumijevanja za **pravi** odgovor.

Uloge se zamijenjuju: ti postaneš izvor podataka, AI postane istraživač.

## Osnovna Struktura Prompta

Flipped Interaction prompt ima jednostavan format:

```
I would like you to ask me questions to achieve [CILJ].
You should keep asking questions until [USLOV] is met.
Ask me one question at a time. Ask me the first question.
```

To znači:

- **[CILJ]** — šta želiš (plan, strategija, tekst, analiza)
- **[USLOV]** — kada AI ima dovoljno informacija

Ovim promptom zabranjuješ AI-ju da žuri. Prvo mora razumjeti situaciju.

## Praktični Primjeri

**Za trening plan:**
> "I would like you to ask me questions to create a personalized training plan. Ask until you understand my fitness level, schedule, and goals. Ask one question at a time."

**Za email kampanju:**
> "Ask me questions to design an email sequence. Keep asking until you understand my audience, tone, and objectives. Start with the first question."

**Za LinkedIn bio:**
> "Ask me questions to improve my LinkedIn bio. Continue until you fully understand my audience, professional brand, and tone."

U svakom slučaju, AI prvo gradi kontekst kao dobar konsultant.

## Gdje Se FIP Posebno Isplati

Flipped Interaction je idealan za:

- Personalizovane planove i strategije
- Brainstorming sesije gdje trebaš vodstvo
- Scenarije gdje znaš cilj, ali ne i put
- Situacije gdje je kontekst važniji od brzine
- Kad želiš izbjegnuti generičke savjete

## Analogija

Zamjeti FIP kao intervju umjesto uputstva.

Umjesto da ti kažu šta da radiš, pravi istraživač prvo pita:

- O tebi
- O cilju
- O ograničenjima
- O prioritetima

Tek kada razumiju situaciju, daju preporuku koja stvarno *pogađa u centar*.

## Ključna Razlika

| Klasičan Prompt | Flipped Interaction |
|---|---|
| Brz odgovor | Pravi odgovor |
| Često generički | Personalizovan |
| Trebam dodatne izmjene | Gotov prvi put |
| Brža interakcija | Bolja veza |

## Zaključak

Flipped Interaction Pattern nije za situacije gdje ti je potrebna brzina.

On je za situacije gdje ti je potrebna **preciznost**.

Kada planiraš nešto važno, ili kada je kontekst ključan, pusti AI-ja da te intervjuira. Rezultati će biti bolji.