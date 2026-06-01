---
title: "Evaluacija AI Outputa: Validacija, Greške i Povjerenje"
date: "2026-06-01"
slug: "evaluacija-ai-outputa-validacija-greske-povjerenje"
excerpt: "Kako pretvoriti AI iz generatora teksta u odgovoran, kontrolisani sistem koji detektuje i označava greške prije nego što dostignu korisnika."
tags: ["AI Patterns", "Evaluacija", "Prompt Engineering", "Kvaliteta"]
readTime: "6 min čitanja"
---

## Problem: AI zvuči uvjerljivo, ali nije tačan

Jedan od najvećih rizika u radu s AI-jem nije greška sama po sebi — već **greška koju model izgovara s povjerenjem**.

AI može:
- dati netačne medicinske savjete,
- propustiti kritične logičke greške,
- izgraditi zaključke na pogrešnim pretpostavkama,
- sve to vođujući se kao da je siguran.

Bez namjerne evaluacije, nema kontrole.

Evaluation / Validation / Error Detection Pattern rješava to uvođenjem **drugog stupa** — nakon generisanja, AI mora provjeriti samog sebe.

## Tri nivoa evaluacije

Evaluation Pattern se sastoji od tri međuzavisna sloja provjere:

### 1. Faktička validacija
Model provjerava činjeničnu tačnost svih tvrdnji. Koja znanja su sigurna, a gdje postoji nagađanje? Gdje su neprovjerene pretpostavke?

### 2. Logička konzistentnost
Zaključci slijede iz argumenata? Postoje li kontradikcije ili preskočeni koraci? Tihe logičke greške često zvuče razumno — ovdje se detektuju.

### 3. Kontekstualna primjenjivost
Odgovor može biti tačan *općenito*, ali neprimjenjiv *ovdje*. Odgovara li domen, cilj i korisnik?

## Kako to implementirati

Standardni evaluation prompt nakon glavnog odgovora:

> Provjeri svoj odgovor:
> 1. Koje tvrdnje su činjenično sigurne?
> 2. Gdje postoji nesigurnost ili pretpostavke?
> 3. Postoje li logičke greške ili kontradikcije?
> 4. Je li odgovor primjenjiv za ovaj kontekst?
> 5. Koja je tvoja razina povjerenja — 100%, 70%, 50%?
> 6. Trebaš li upozoriti korisnika na rizik?

Ovim AI prestaje biti generator i postaje **kontrolisani sistem**.

## Gdje je ovo kritično

**Medicinski domeni**: Pogrešna doza nije "greška koju možemo poboljšati" — ona je štetna.

**RAG sistemi**: Hallucinations moraju biti detektovane. Ako izvora nema, to mora biti jasno označeno.

**Poslovne odluke**: Uvjerljiv, ali pogrešan savjet je najskuplja vrsta greške.

**Automatizacije**: Greška u jednom koraku može prekinuti cijeli pipeline i poslati pogrešne podatke.

## Razlika od WRI

Važno je razlikovati evaluation od poboljšanja (WRI):
- **WRI** pita: "Kako ovo biti bolje?"
- **Evaluation** pita: "Je li ovo uopšte ispravno?"

WRI je za iterativno poboljšanje. Evaluation je za **zaustavljanje sistema kada nije sigurno**.

## Zaključak

Ako Write & Reflect Improvement uči AI da bude bolji autor, Evaluation Pattern uči AI da bude **odgovoran sistem**.

Ovaj pattern:
- smanjuje rizik od štetnih grešaka,
- sprječava tihe, uvjerljive greške,
- povećava povjerenje u automation,
- omogućava sigurnu upotrebu u kritičnim domenama.

Bez njega, nijedan profesionalni AI workflow nije kompletan.