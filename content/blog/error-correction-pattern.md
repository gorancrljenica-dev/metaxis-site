---
title: "Error-Correction Pattern: Kako natjerati AI da ispravlja samo sebe"
date: "2026-05-25"
slug: "error-correction-pattern-ai"
excerpt: "Nauči kako implementirati Error-Correction Pattern kako bi AI model detektovao i ispravio svoje greške prije nego što korisnik vidi odgovor."
tags: ["Prompt Engineering", "AI Quality", "Error Detection", "Best Practices"]
readTime: "6 min čitanja"
---

## Zašto AI greške nije vidjelo prije?

Standardni AI odgovori izlaze direktno iz modela — bez provjere. To znači halucinacije, netačne podatke, logičke greške i loš kod dostižu korisnika.

**Error-Correction Pattern** je rješenje: učiniš da AI pregledа svoj odgovor, nađe greške i ispravи ih prije nego što se odgovor generira.

To je kao da staviš internog QA inženjera ispred svakog odgovora.

## Kako funkcionira Error-Correction?

Pattern ima tri koraka:

**1. Inicijalni odgovor** — AI generiše svoj prvi pokušaj
**2. Analiza grešaka** — Pregledava što je napisao i traži probleme
**3. Ispravljeni odgovor** — Generiše poboljšanu verziju

Proces ide ovako:
- Dijeli odgovor na dijelove (disassembly)
- Traži greške: faktografske, logičke, matematičke, stilske (error detection)
- Pravi novu verziju bez greške (reconstruction)

## Šta se sprečava?

Sa Error-Correction patternom eliminiraš:
- **Halucinacije** — netačne "činjenice"
- **Logičke greške** — kontradikcije i nekonzistentnosti
- **Greške u kodu** — bugove i loše strukture
- **Medicinsku netačnost** — krivo interpretirane nalaze
- **RAG greške** — odgovore koji nisu potkrijepljeni izvorom
- **Kalkulacijske greške** — pogrešne brojeve

Rezultat? Odgovori koji su precizni, profesionalni i pouzdani.

## Praktični primjer

**Zadatak:** "Objasni ulogu triglicerida u zdravlju"

**Inicijalni odgovor:**
> Trigliceridi su vrsta holesterola koja povećava rizik od bolesti srca.

**Analiza greške:**
- ❌ Trigliceridi NISU holesterol — to su masne molekule
- ❌ Nedostaje metabolička uloga
- ❌ Premali detalji

**Ispravljeni odgovor:**
> Trigliceridi su skladišni oblik masti i primarni izvor energije. Povišeni nivoi povezani su sa inzulinskom rezistencijom i kardiovaskularnim rizikom. Ključni su pokazatelji metaboličkog zdravlja.

Vidi razliku? Drugi odgovor je tačan, detaljan i stručan.

## Gdje se koristi?

- **Stručan sadržaj** — članci, dokumentacija, knjige
- **Kod i debugging** — pronalaženje i ispravka bugova
- **Medicina** — kritična za interpretaciju nalaza
- **RAG sistemi** — provjera jesu li odgovori utemeljeni
- **Poslovne analize** — provjera logike i kalkulacija
- **Dnevni izvještaji** — eliminacija nelogičnih zaključaka

## Implementacija

Osnovni template:

```
1. Generiši inicijalni odgovor
2. Pregledaj kritički
3. Identifikuj SVE greške
4. Objasni zašto su to greške
5. Napiši ispravljenu verziju
6. Vrati samo finalni odgovor
```

Error-Correction nije dodatna opcija — to je standard za profesionalne AI sisteme. Bez njega, AI ostaje površan. Sa njim, postaje samokorektivni sistem visoke preciznosti.

Dodaj ovo u svoj prompt engineering strategiji i vidi kako se kvaliteta dramatično poboljšava.