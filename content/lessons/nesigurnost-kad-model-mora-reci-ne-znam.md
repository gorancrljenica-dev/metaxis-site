# Nesigurnost: kad model mora reći "ne znam"

## 1. Problem koji ruši ozbiljne AI sisteme

Najopasnija greška AI sistema nije netačan odgovor.

Najopasnija greška je **samouvjereno pogrešan odgovor**.

Model koji:
- uvijek odgovara,
- nikad ne pokazuje sumnju,
- ne zna reći "ne znam",

nije pametan — nego **opasan**.

## 2. Zašto AI prirodno glumi sigurnost

LLM je treniran da:
- nastavi tekst,
- zvuči uvjerljivo,
- isporuči odgovor.

On **nema prirodan impuls da stane**.

Ako mu ti ne postaviš pravila za:
- nesigurnost,
- nekompletne podatke,
- kontradikcije,

on će **popuniti praznine**.

## 3. Confidence ≠ Accuracy

Važno razdvajanje:
- **Confidence** → koliko uvjerljivo zvuči
- **Accuracy** → koliko je tačno

Model može biti:
- vrlo samouvjeren
- potpuno netačan

Zato se u profesionalnim sistemima **confidence mora kontrolisati**, ne vjerovati mu se.

## 4. Uncertainty kao sistemska vrijednost

Ozbiljni AI sistemi **moraju znati kada da stanu**.

Uncertainty se aktivira kada:
- nema dovoljno podataka,
- izvori su kontradiktorni,
- izlaz bi bio nagađanje,
- kontekst je van definisanog opsega,
- posljedice greške su visoke (medicina, pravo, finansije).

## 5. Kada model MORA reći "I don't know"

Model mora eksplicitno stati kada:
- podatak nije prisutan u inputu
- odgovor bi zahtijevao pretpostavku
- izvor nije pouzdan ili nije naveden
- pitanje izlazi van domena sistema
- confidence padne ispod definisanog praga

Ovo nije slabost.
Ovo je **kontrola rizika**.

## 6. Confidence Threshold (prag sigurnosti)

Profesionalni sistemi uvode **confidence threshold**.

Primjer:
- confidence ≥ 0.8 → dozvoljen odgovor
- confidence 0.5–0.79 → odgovor + upozorenje
- confidence < 0.5 → *ne odgovaraj*

Bez praga → sistem halucinira.
Sa pragom → sistem je pouzdan.

## 7. Standardni Confidence & Uncertainty Template

```
Before answering:
- Do I have sufficient data? (yes/no)
- Are sources consistent? (yes/no)
- Is this within my defined scope? (yes/no)

Confidence estimation:
- Confidence score: (0–1)
- Uncertainty factors:
  - missing data
  - conflicting info
  - domain mismatch

Decision:
- Answer normally
- Answer with warning
- State explicitly: "I don't have enough information to answer this reliably."
```

Ovo je **sistemska kočnica** protiv halucinacija.

## 8. "I don't know" kao kvalitet, ne greška

U ozbiljnim domenima:
- medicina
- farmacija
- finansije
- pravni sistemi
- decision-support

rečenica

**"Nemam dovoljno informacija da dam pouzdan odgovor"**

je **najbolji mogući output**.

Sve ostalo je rizik.

## 9. Primjer: medicinski decision-support

Pitanje:
> "Da li je ovaj pacijent kandidat za terapiju X?"

Ako nedostaje:
- EF
- eGFR
- kalij
- komorbiditeti

Ispravan odgovor:
> "Nije moguće donijeti pouzdanu preporuku bez navedenih parametara."

Ne:
> "Vjerovatno da."

## 10. Primjer: RAG sistem

Ako:
- dokument ne sadrži odgovor
- embedding nije pronašao relevantan chunk

Ispravno:
> "Informacija nije pronađena u dostupnim izvorima."

Ne:
> generisati "razumno" objašnjenje.

## 11. Najčešća greška

"Ako kaže 'ne znam', korisnik će biti nezadovoljan."

U realnim sistemima:
- korisnik više vjeruje sistemu koji zna stati
- nego onom koji uvijek priča

Povjerenje se gradi **ograničenjima**, ne brbljanjem.

## 12. Sažetak lekcije

- Confidence nije isto što i tačnost
- Uncertainty mora biti eksplicitna
- "I don't know" je validan output
- Prag sigurnosti je obavezan
- Ovo štiti korisnika, sistem i tebe

Bez ove lekcije:
- agenti haluciniraju
- sistemi pucaju
- odgovornost je nejasna
