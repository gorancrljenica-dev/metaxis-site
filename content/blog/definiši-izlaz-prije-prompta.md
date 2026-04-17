---
title: "Definiši izlaz prije nego napišeš prompt"
date: "2026-04-17"
slug: "definiši-izlaz-prije-prompta"
excerpt: "Najveća greška pri kreiranju AI sistema je pisanje prompta bez jasne specifikacije očekivanog izlaza."
tags: ["AI", "Prompt Engineering", "Production"]
readTime: "3 min čitanja"
---

## Zašto se AI sistemi ruše u produkciji?

Većina inženjera počinje sa samim modelom. Odaberu GPT, Claude, Llama—pa krenu sa promptom. Greška.

Problemi se ne događaju zato što model nije dobar. Oni se događaju jer sistem očekuje format `{"user_id": 123, "status": "approved"}`, a model vrati slobodni tekst. Ili očekuje JSON sa tri polja, a model doda četvrto. Ili broj karaktera eksplodira jer nije bilo ograničenja.

**Izlaz je nepredvidljiv bez specifikacije.**

## Obrnuti redoslijed: Izlaz prvo, prompt kasnije

Prije nego što otvoriš editor za prompt, odgovori na ova pitanja:

**Što model treba vratiti?**
- JSON, CSV, markdown, strukturirani tekst?
- Koja polja su obavezna?
- Koliko karaktera maksimalno?
- Kakav tip podataka za svako polje (string, boolean, number)?

**Primjer loš:**
```
Propiši kupcu email sa ponudom.
```

**Primjer dobar:**
```
Vrati JSON sa strukturom:
{
  "subject": "string, max 60 znakova",
  "greeting": "string, personalizirano po imenu",
  "offer_description": "string, 2-3 recenice",
  "cta_button_text": "string, do 30 znakova",
  "closing": "string"
}
```

## Kako strukturirati specifikaciju

1. **Definiši format**: JSON je idealan jer je deterministički parsibilan
2. **Nabroji sva polja**: Čak i opcionalna. Biti jasan je važnije nego biti sažet
3. **Dodaj tipove podataka**: string, number, boolean, array, enum
4. **Postavi granice**: dužina, broj stavki, dozvoljene vrijednosti
5. **Daj primjer**: Model je bolji kada vidi primjer tačnog outputa

## Prompt se gradi prema specifikaciji

Tek kada imaš specifikaciju, pišeš prompt:

```
Generiši email ponudu za B2B klijente.

Obavezno vrati JSON sa sljedećom strukturom:
{
  "subject": "string (max 60 znakova)",
  "greeting": "string",
  "offer_description": "string (2-3 recenice)",
  "cta_button_text": "string (max 30 znakova)",
  "closing": "string"
}

Primjer validnog odgovora:
{
  "subject": "Jedinstvena ponuda za tvoj biznis",
  "greeting": "Pozdrav, [Company Name]!",
  ...
}
```

## Praktični savjet za produkciju

Dodaj validaciju nakon što model vrati rezultat:

```python
import json
from jsonschema import validate

schema = {
    "type": "object",
    "properties": {
        "subject": {"type": "string", "maxLength": 60},
        "greeting": {"type": "string"}
    },
    "required": ["subject", "greeting"]
}

response = call_ai_model(prompt)
validate(instance=json.loads(response), schema=schema)
```

Ako validacija padne, ili pokušaj ponovo sa jasnijim promptom, ili odbij rezultat prije nego dospije do korisnika.

## Zaključak

**Red koji funkcionira:**
1. Definiši očekivani izlaz
2. Napiši specifikaciju
3. Napiši prompt prema specifikaciji
4. Dodaj validaciju
5. Testiraj sa stvarnim podacima

Model će biti bolji, sistem će biti stabilniji, a produkcija će biti mirna.