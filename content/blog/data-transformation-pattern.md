---
title: "Data Transformation Pattern: Osnova za pouzdanu analizu"
date: "2026-05-04"
slug: "data-transformation-pattern"
excerpt: "Većina grešaka u analizi nije greška računanja, nego loše pripreme podataka. Nauči kako AI transformiše podatke pravilno."
tags: ["Data Analysis", "AI Patterns", "Data Preparation", "Prompts"]
readTime: "5 min čitanja"
---

Većina grešaka u radu s podacima **ne nastaje zbog loše analize**, nego zbog loše pripreme podataka. Brojevi su tu, kolone postoje, sve izgleda "u redu" — ali zaključci su pogrešni.

Zašto? Zato što AI (i ljudi) **razmišljaju drugačije u zavisnosti od oblika podataka**.

## Šta je Data Transformation Pattern?

Data Transformation Pattern je standardizovani obrazac koji omogućava precizno upravljanje načinom na koji AI model transformiše, čisti i reorganizuje podatke. Nije to analiza — to je **priprema podataka tako da analiza uopće ima smisla**.

Bez ovakvog obrasca, rezultati su često nedosljedni, nepotpuni ili pogrešno strukturirani.

Cilj patterna je osigurati:
- predvidljiv output
- stabilnu logiku transformacije
- kontrolu nad formatom
- mogućnost integracije rezultata u automatizovane sisteme

## Šta znači transformacija?

Data transformation znači **svjesno mijenjanje strukture, formata ili organizacije podataka** prije nego što se nad njima radi analiza.

To uključuje:
- čišćenje podataka (uklanjanje grešaka i praznih vrijednosti)
- grupisanje i agregaciju (mjesečni trendovi umjesto dnevnih zapisa)
- promjenu formata (datumi, tekst, brojevi)
- filtriranje relevantnih zapisa

Važna spoznaja: transformacija **ne dodaje nove informacije**, ali dramatično mijenja šta iz postojećih možeš zaključiti.

Bez jasnih instrukcija, AI model:
- ne zna šta treba ukloniti
- ne zna kako strukturirati podatke
- često mijenja format nepredvidivo
- gubi informacije ili stvara duplikate

## Zašto je transformacija ključna?

Bez transformacije, podaci su često:
- previše detaljni (ne vidiš šumu)
- neujednačeni (teško se porede)
- pogrešno grupisani (obrasci su skriveni)

AI tada računa ispravno, ali zaključuje pogrešno.

Sa dobrom transformacijom:
- obrasci postaju vidljivi
- trendovi se pojavljuju
- anomalije iskaču same

Zato se u ozbiljnoj analitici kaže: **"Ako transformacija nije dobra, analiza je nebitna."**

## Tipične transformacije

**Čišćenje podataka** — uklanjanje praznih vrijednosti, duplikata i nelogičnih zapisa.

**Agregacija** — dnevni podaci postaju mjesečni trendovi; pojedinačni zapisi postaju pregled po kategoriji.

**Promjena strukture** — okretanje tabele (redovi ↔ kolone), razdvajanje ili spajanje kolona.

**Filtriranje** — izdvajanje samo relevantnih podataka, ignorisanje šuma.

Evo kako izgleda dobar prompt koji primjenjuje ovaj pattern:

```
Use Code Interpreter.

1. Load the dataset.
2. Clean the data and explain what was removed.
3. Transform to monthly aggregated format.
4. Explain why this transformation is appropriate.
5. Only then perform the analysis.
```

Ovim promptom tjeraš AI da razmišlja o obliku podataka i dobijaš transparentnost.

## Data Transformation kao misaoni obrazac

Although se izvodi kodom, ovaj pattern je prije svega **misaoni obrazac**. Pitanja koja trebaš postaviti:
- U kom obliku su podaci sada?
- U kom obliku trebaju biti za smislen odgovor?
- Šta gubim, a šta dobijam ovom transformacijom?

## Zaključak

Data Transformation Pattern osigurava da AI analizira podatke u pravom obliku. Ne radi se o računanju, nego o pripremi. Kada su podaci pravilno transformisani, zaključci postaju jasni, relevantni i pouzdani. Bez ove faze, i najbolja analiza stoji na klimavim nogama.