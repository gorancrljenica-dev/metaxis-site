---
title: "Feedback signali: Kako AI sistemi uče bez treniranja"
date: "2026-06-08"
slug: "feedback-signali-ucenje-bez-treniranja"
excerpt: "AI sistemi se poboljšavaju kroz feedback signale, ne kroz ponovno treniranje. Model ostaje isti, ponašanje se mijenja."
tags: ["AI Agenti", "Feedback Sistemi", "Runtime Learning", "Enterprise AI"]
readTime: "5 min čitanja"
---

## Ključna istina koju većina pogrešno shvata

AI sistemi **ne moraju biti trenirani** da bi se poboljšavali. U profesionalnim okruženjima, model ostaje statički dok se ponašanje dinamički prilagođava kroz **feedback i reward signale**.

Ako ovo ne razumiješ, miješaš RLHF sa runtime kontrolom i praviš nestabilne agente.

## Šta feedback JESTE

Feedback nije ponovno treniranje ili trajna promjena modela. To je **signal kvalitete** koji kontrolira ponašanje i koriggira tok izvršavanja. Utiče na *sljedeći korak*, ne na sam model.

Reward signal je minimalna informacija:
- ✔️ / ❌
- score 0–1
- pass / fail

Jednostavnost je snaga. Kompleksni feedback zbunjuje agente i kvari loop.

## Agent Loop sa Feedback-om

1. **Think** – agent planira
2. **Act** – izvršava akciju
3. **Verify** – provjerava rezultat
4. **Reward** – dodjeljuje signal
5. **Adjust** – prilagođava sljedeći korak

Bez feedbacka, loop je slijep.

## Learning without Training

AI "uči" mijenjajući **strategiju, redoslijed koraka, šablone i pravila aktivacije** — ali model ostaje isti. Ovo je **runtime learning**, ne model learning.

Agent generiše JSON:
- Validan JSON → reward = pass
- Slomljen JSON → reward = fail

Sljedeći pokušaj: agent prilagođava strategiju, pojačava constraint. Nema treniranja, sistem se ipak poboljšava.

## Feedback ≠ Memory

Kritično razlikovanje:
- **Feedback** utiče na *sljedeći korak*
- **Memory** utiče na *buduće sesije*

Većina feedbacka nikada ne ide u memory — samo agregirani, stabilni obrasci mogu.

## Primjer: Medicinski sistemi

Ako preporuka odstupa od smjernica → fail  
Ako terminologija netačna → fail  
Ako izvor nije naveden → fail

Agent prilagođava stil, dubinu i provjere — ne "uči medicinu", nego **uči kako se ponašati u sistemu**.

## Najčešća greška

"Daj detaljaran feedback da AI bolje nauči"

Krivo. AI treba:
- **Jasan signal** (ne objašnjenje)
- **Stabilan kriterij**
- **Konzistentnu evaluaciju**

Detalji idu u log, ne u reward.

## Zaključak

Feedback ≠ treniranje. Model ostaje isti, ponašanje postaje bolje. Ovo je osnova agent stabilnosti, enterprise AI i sistema bez halucinacija.