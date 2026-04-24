---
title: "Tool Use: Kada, Zašto i Kako Agent Koristi Alate"
date: "2026-04-24"
slug: "tool-use-agenti-alati"
excerpt: "Razumijevanje decision-making procesa: kako agent bira alate, validira rezultate i izbjeće halucinacije."
tags: ["AI Agenti", "Tool Use", "Action Selection", "Prompt Engineering"]
readTime: "6 min čitanja"
---

## Zašto je Tool Use Prelomna Tačka

Agent bez alata je ograničen na vlastiti kontekst. Može razmišljati, kombinovati informacije, provjeravati logiku — ali **ne može proširiti stvarnost**.

Onog trenutka kada agent dobije mogućnost da pretražuje bazu, pozove API, pročita fajl ili izvrši izračun, on prestaje biti samo jezički model i postaje **operativni agent**. Tool Use je razlika između razmišljanja o svijetu i stvarne interakcije sa njim.

## Šta je Action Selection Zapravo?

Action Selection nije tehnički detalj — to je **odlučivanje**.

U svakom loop-u, agent mora odgovoriti: "Da li mi je potreban alat — ili mogu nastaviti bez njega?"

Loš agent koristi alate prerano, nepotrebno ili koristi pogrešan alat. **Dobar agent** koristi alat samo kada ima jasan razlog, zna šta očekuje kao rezultat i zna kada da stane.

## Mentalni Model: Think → Decide → Act → Verify

Precizni loop za tool use:

1. **Think** – šta mi trenutno nedostaje?
2. **Decide** – trebam li alat ili ne?
3. **Act** – izvrši jednu alat-akciju
4. **Verify** – je li alat dao koristan rezultat?

Ako agent ne može odgovoriti na "Decide" — nije agent, nego automat.

## Kada Agent NE SMIJE Koristiti Alat

- Već ima dovoljno informacija
- Zadatak je čisto konceptualan
- Alat ne povećava tačnost
- Rezultat se ne može validirati

Svako nepotrebno korištenje alata je **signal lošeg dizajna**.

## Kada Agent MORA Koristiti Alat

- Radi sa nepoznatim podacima
- Mora provjeriti činjenice
- Mora obraditi datoteke ili tabele
- Mora izvršiti izračun
- Mora dohvatiti stanje sistema

Ako agent ne koristi alat u ovim situacijama — **halucinira**.

## Tool Use kao Ugovor

Alat nije opcija. Kada agent koristi alat, mora znati:

- Ime alata
- Ulazne parametre
- Očekivani output
- Format rezultata
- Kriterije uspjeha

## Standardni Tool Use Prompt

```
At each step:

1. THINK: Šta mi nedostaje?
2. DECIDE: Trebam li alat?
3. ACT: Izvrši jednu akciju
4. VERIFY: Je li rezultat valjan?

Pravila:
- Nikad alat bez opravdanja
- Jedna akcija po koraku
- Uvijek provjeri rezultat
```

## Najčešće Greške

❌ Korištenje alata "za svaki slučaj"  
❌ Više alata u jednoj akciji  
❌ Nema provjere rezultata  
❌ Alat umjesto razmišljanja  
❌ Agent ne zna kada da stane  

## Zaključak

Tool Use nije tehnička sitnica — to je **odgovornost agenta**. Agent koji zna kada koristiti alat, kako ga validirati i kada da stane, može raditi samostalno i pouzdano. Bez ovoga, sistemi ostaju demonstracije. Sa ovim — postaju stvarni sistemi.
```