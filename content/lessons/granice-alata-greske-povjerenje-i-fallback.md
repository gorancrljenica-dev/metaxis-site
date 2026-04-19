# Granice alata: greške, povjerenje i fallback

*(Kako agent bira alat — i kada mu NE vjeruje)*

## 1. Zašto alati nisu "pomoć", nego rizik

U naprednim AI sistemima, alati nisu neutralni.
Svaki alat:
- može pogriješiti,
- može vratiti nepotpune podatke,
- može zakazati,
- može dati lažno samopouzdane rezultate.

Agent koji **slijepo vjeruje alatu** nije inteligentan — on je krhak.

Ova lekcija definiše **kako agent bira alat, kako tretira greške i gdje povlači granicu povjerenja**.

## 2. Razlika: Model vs Alat

Važno razdvajanje:
- **Model** → rezonuje, odlučuje, planira
- **Alat** → izvršava ograničenu operaciju

Alat:
- nema kontekst,
- nema razumijevanje cilja,
- nema odgovornost za krajnji ishod.

**Odgovornost je uvijek na agentu**, nikada na alatu.

## 3. Kada agent uopšte treba koristiti alat

Agent **ne smije koristiti alat po inerciji**.

Prije svakog poziva mora proći kroz ova pitanja:
1. Da li je zadatak uopšte alat-vrijedan?
2. Da li model već ima dovoljno informacija?
3. Koji alat je *najmanje rizičan* za ovaj korak?
4. Da li je alat deterministički ili heuristički?
5. Da li postoji fallback ako alat zakaže?

Ako nema jasnog odgovora → **nema poziva alata**.

## 4. Kategorije alata (po nivou povjerenja)

### A) Deterministički alati (visoko povjerenje)

Primjeri:
- kalkulacije
- formatiranje
- parsiranje JSON-a
- validacija šema

Greške su:
- lako uočljive
- binarne (radi / ne radi)

➡️ Visok nivo povjerenja.

### B) Polu-deterministički alati (srednje povjerenje)

Primjeri:
- OCR
- scraping
- data extraction
- embedding generisanje

Greške:
- često tihe
- djelimične
- zavise od kvaliteta inputa

➡️ Zahtijevaju **validaciju outputa**.

### C) Heuristički / "pametni" alati (nisko povjerenje)

Primjeri:
- search
- recommendation API
- sentiment analysis
- AI-powered eksterni servisi

Greške:
- suptilne
- uvjerljive
- teško uočljive bez provjere

➡️ Nikada se ne koriste bez **verification pass-a**.

## 5. Tool Trust Boundary (kritični koncept)

**Tool Trust Boundary** je linija iza koje agent:
- prestaje vjerovati alatu,
- preuzima kontrolu,
- pokreće validaciju ili fallback.

Agent mora eksplicitno znati:
- gdje alat *smije odlučivati*
- gdje *nikada ne smije*

Bez ove granice:
- greške se propagiraju,
- halucinacije se maskiraju,
- sistem postaje opasan.

## 6. Standardni Tool Selection & Trust Template

```
Task:
- Description:

Candidate Tools:
- Tool A:
- Purpose:
- Trust Level:
- Known Failure Modes:

Decision:
- Selected Tool:
- Reason:

Trust Boundary:
- What output is trusted:
- What must be validated:
- Fallback if tool fails:
```

Ovo je **minimalni profesionalni standard**.

## 7. Kako agent tretira greške alata

Agent nikada ne smije:
- ignorisati grešku,
- pretpostaviti da je rezultat tačan,
- "popraviti" rezultat bez priznanja greške.

Ispravan tok:
1. Detekcija greške
2. Klasifikacija greške
3. Odlučivanje:
   - retry
   - fallback
   - eskalacija
4. Dokumentovanje greške (log)

Greška je informacija — ne smetnja.

## 8. Primjer: OCR alat u medicinskom kontekstu

OCR vrati:
- pogrešan broj
- pogrešnu decimalu
- zamijenjene jedinice

Agent **ne smije**:
- direktno koristiti podatak
- donositi zaključak

Ispravno ponašanje:
- flagovati nesigurnost
- tražiti potvrdu
- uporediti sa rasponima
- označiti podatak kao "unverified"

➡️ Ovo spašava sistem od kritične greške.

## 9. Alati u Agent Loop-ovima

U loop-ovima (Think → Act → Verify):
- **Think** → bira alat
- **Act** → koristi alat
- **Verify** → ne vjeruje alatu

Ako Verify preskočiš — **to više nije agent**, nego skripta.

## 10. Najčešće greške u radu s alatima

- Previše alata za isti task
- Alat se koristi bez opravdanja
- Output se uzima zdravo za gotovo
- Nema fallbacka
- Nema logovanja grešaka
- Agent se "zaljubi" u alat

Profesionalni agent je **skeptičan prema alatima**.

## 11. Sažetak lekcije

Alati:
- ubrzavaju,
- ali i kvare.

Agent koji zna:
- **kada koristiti alat**
- **kada mu vjerovati**
- **kada stati**

→ gradi pouzdan sistem.

Ovdje se razdvaja:
- "AI koji koristi tool"
- od **AI sistema koji kontroliše rizik**.
