---
title: "Agent Loopovi: Think → Act → Verify"
date: "2026-04-20"
slug: "agent-loopovi-think-act-verify"
excerpt: "Kako AI prestaje da odgovara i počinje da djeluje kroz kontrolisane petlje razmišljanja, akcije i provjere."
tags: ["AI Agents", "Control Flow", "Prompt Engineering"]
readTime: "5 min čitanja"
---

## Zašto Agent Loopovi Bitne

Do sada si naučio kontrolisati šta AI zna (Role), kako zvuči (Persona), kako se ponaša (Mode), i kako se provjerava (Self-Correction). Ali postoji kritična razlika između **AI-ja koji odgovara** i **AI-ja koji izvršava zadatke kroz vrijeme**.

Ta razlika se zove **agent loop** — mehanizam koji omogućava AI-ju da donosi odluke u više koraka, koristi alate, provjerava rezultate i ispravlja se dok ne postigne cilj.

Bez loop-a, AI je pametan ali statičan. Sa loop-om, AI postaje **operativni sistem ponašanja**.

## Think → Act → Verify Ciklus

Agent loop je kontrolisana petlja sa tri ključne faze:

**Think** — AI analizira cilj, trenutno stanje, ograničenja i dostupne resurse. Ovdje se dešava task decomposition i izbor strategije, ali bez davanja konačnog odgovora.

**Act** — AI izvršava jednu konkretnu akciju: generiše tekst, poziva alat, izvršava API request ili pretraživanja. Ključno je: **jedna akcija = jedan potez**.

**Verify** — AI provjerava rezultat. Da li je akcija dala očekivani rezultat? Postoje li greške? Je li format ispravan? Ako nešto nije u redu, sistem se vraća i koriguje umjesto da kontinuira sa pogrešnim informacijama.

Ova petlja se ponavlja dok cilj nije ispunjen ili dok sistem ne signalizira završetak.

## Control Flow — Upravljanje Petljom

Control flow je skup pravila koji određuje:
- Kada AI smije nastaviti?
- Kada mora stati?
- Kada se vraća unazad?
- Kada eskalira grešku?

Bez control flow-a sistem luta, ponavlja se i troši resurse. Sa jasnim pravilima, ponašanje je stabilno i ponovljivo.

## Praktični Primjer

```
1. THINK: Koja je moja trenutna pozicija prema cilju?
2. ACT: Pretraži dostupne izvore
3. VERIFY: Jesu li rezultati relevantni?
4. DECIDE: Trebam li više informacija ili mogu odgovoriti?
→ Ako nije dovoljno: vrati se na THINK
→ Ako je dovoljno: generiši finalni odgovor
```

## Gdje Se To Koristi

**RAG sistemi** — Think (šta trebam?), Act (pretraži izvore), Verify (relevantni su?), Act (generiši odgovor), Verify (skladan s izvorima?).

**AI agenti** — Kontinuirani ciklus planiranja, izvršavanja i prilagođavanja.

**Automatizacije** — Svaki workflow je implicitni agent loop sa trigger, akcijom i provjером.

## Česte Greške

Izbjegni: nedostatak jasnog cilja, nema stop uslova, izvršavanje više akcija odjednom, preskakanje verifikacije, odsutnost ograničenja.

## Zaključak

Agent loopovi su moment kada AI prestaje biti generator teksta i postaje **sistem ponašanja**. Think → Act → Verify nije trik — to je operativna filozofija koja pretvara AI iz alata u agentu.