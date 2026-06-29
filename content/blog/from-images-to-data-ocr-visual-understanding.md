---
title: "Od slika do podataka: OCR i vizualno razumijevanje"
date: "2026-06-29"
slug: "ocr-vizualno-razumijevanje"
excerpt: "Kako AI sistemi pretvaraju slike u strukturirane podatke kroz OCR i visual understanding tehnike."
tags: ["OCR", "Image Understanding", "AI", "Automatizacija", "Podatci"]
readTime: "6 min čitanja"
---

## Most između stvarnog svijeta i AI sistema

OCR (Optical Character Recognition) i Image Understanding predstavljaju skup tehnika koje omogućavaju AI-ju da radi sa vizualnim sadržajem na isti način kao sa tekstom. To znači mogućnost čitanja teksta sa slika, prepoznavanja objekata, simbola, struktura i pretvaranja vizualnih informacija u mašinski upotrebljive podatke.

Zašto je ovo važno? Većina informacija u stvarnom svijetu ne nastaje digitalno. Medicinski izvještaji, laboratorijski nalazi, fotografisani formulari, snimci ekrana — sve to ostaje izolovan sadržaj bez OCR-a i vizualnog razumijevanja. Ove tehnike omogućavaju da vizualni sadržaj postane **podatkovni resurs** umjesto mrtve slike.

## Dvoslojni proces: ekstrakcija i interpretacija

OCR nije jednokrakan proces. Sastoji se od dva jasno odvojena sloja.

**Ekstrakcija (OCR)** — model prepoznaje znakove, brojeve i tekstualne blokove, normalizuje tekst i čisti šum nastao uslijed lošeg osvjetljenja. Rezultat je čist tekst, ali bez značenja.

**Interpretacija (Image Understanding)** — model identifikuje objekte, razumije raspored elemenata, prepoznaje kontekst dokumenta i analizira kompoziciju. Tek kombinacijom ove dvije faze slika postaje pravi podatak.

## Standardizovani prompt šablon

Kako učiniti ovu sposobnost pouzdanom? Korištenim standardizovanim prompt-šablonom:

1. Identifikuj sve vizualne elemente
2. Izvuci sav tekst sa slike
3. Konvertuj tekst u strukturirani format (JSON, tabelu)
4. Opiši ključne vizualne karakteristike
5. Identifikuj relevatne informacije za poslovni kontekst
6. Predloži poboljšanja slike ako je potrebno

Ovaj šablon postaje ulazna tačka za sve vizualne analitičke zadatke.

## Praktične primjene

**Medicinska dokumentacija** — ekstrakcija podataka iz laboratorijskih nalaza, dijagnostičkih izvještaja i fotografisanih recepata.

**RAG sistemi** — vizualni sadržaj se pretvara u tekstualne embeddinge koje RAG može pretraživati i rangirati.

**AI OS vizualna memorija** — fotografije postaju indeksirane informacije umjesto haotične galerije.

**Automatizacija unosa podataka** — OCR omogućava direktan unos iz slika u Notion, Google Sheets, CRM sisteme putem n8n workflow-a.

## Primjer u praksi

Fotografija laboratorijskog izvještaja sadrži:
```
LDL-Cholesterol
3.4 mmol/L
Date: 12/02/2024
Patient: Marko M.
```

Nakon OCR obrade, rezultat je strukturirani JSON:
```json
{
  "pacijent": "Marko M.",
  "datum": "2024-02-12",
  "parametar": "LDL-Cholesterol",
  "vrijednost": 3.4,
  "jedinica": "mmol/L"
}
```

Ovaj format se sada može direktno koristiti u AI sustavima, analitici i automatizacijama.

## Zaključak

OCR i Image Understanding transformiraju vizualni materijal u strukturirane podatke. To otvara put digitalizaciji dokumenata, automatizaciji unosa i punoj integraciji vizualnog sadržaja u AI sisteme. Kada se koriste standardizovani obrasci ekstrakcije, svaka slika postaje potencijalni podatak — ne samo vizualni artefakt.