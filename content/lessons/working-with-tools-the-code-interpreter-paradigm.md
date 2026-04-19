# Working with Tools: The Code Interpreter Paradigm

## Uvod

Kad ljudi prvi put koriste Code Interpreter, često imaju pogrešan mentalni model. Misle da je to "AI koji zna Excel" ili "AI koji zna Python".

To nije tačno.

Code Interpreter nije znanje.
On je **workflow**.

Drugim riječima, AI ne postaje pametniji —
on dobija **proces** kroz koji može da radi stvarne stvari: da učita podatke, obradi ih, provjeri ih i tek onda donese zaključak.

Ako ne razumiješ taj workflow, Code Interpreter djeluje kao crna kutija.
Ako ga razumiješ, postaje **najpouzdaniji alat u cijelom sistemu**.

## Šta znači "workflow" u kontekstu Code Interpretera

Workflow znači da AI **ne radi sve odjednom**.

On prolazi kroz jasno razdvojene faze:
- prima ulaz (fajl ili podatke)
- razumije strukturu
- izvršava operacije
- provjerava rezultate
- tek onda komunicira zaključak

Ovo je ključno:
> Zaključak dolazi zadnji, ne prvi.

To je suprotno od klasičnog chata, gdje AI često krene od odgovora pa ga "popunjava".

## Standardni Code Interpreter Workflow (korak po korak)

Iako se u interfejsu sve dešava "u jednom razgovoru", u pozadini se uvijek dešava isti niz koraka.

### 1. Učitavanje (Load)

AI prvo:
- učitava fajl (Excel, CSV, image, PDF…)
- identifikuje tip i strukturu
- provjerava da li su podaci čitljivi

Ako fajl nije jasan ili je pogrešnog formata — workflow staje.
Ovdje AI još **ništa ne analizira**.

### 2. Razumijevanje strukture (Inspect)

Zatim AI:
- gleda kolone, redove, tipove podataka
- prepoznaje praznine, nelogičnosti, formate
- pravi internu mapu podataka

Ovo je faza gdje dobar AI:
> prvo pogleda tabelu, pa tek onda računa

Ako preskoči ovu fazu — rezultati su nepouzdani.

### 3. Obrada (Process)

Tek sada AI:
- računa prosjeke, trendove, razlike
- filtrira podatke
- poredi scenarije
- transformiše podatke po zadatku

Ovdje se izvršava stvarni kod.
Nema nagađanja. Samo operacije.

### 4. Provjera (Verify)

Ovo je najvažnija, ali često zanemarena faza.

Dobar Code Interpreter workflow uključuje:
- provjeru da li rezultati imaju smisla
- poređenje sa očekivanjima
- provjeru grešaka (npr. outlieri, nelogične vrijednosti)

Ovdje se često kombinuje sa **CVP (Cognitive Verifier Pattern)**.

### 5. Izlaz (Output)

Tek na kraju AI:
- generiše tekstualni sažetak
- pravi tabelu ili grafikon
- objašnjava šta brojevi znače

Bitno:
> Output je objašnjenje rezultata, ne zamjena za rezultat.

## Zašto je razumijevanje workflowa ključno

Ako ne razumiješ ovaj tok:
- vjeruješ AI-ju "na riječ"
- ne znaš gdje može pogriješiti
- ne znaš kako da ga ispraviš

Ako razumiješ workflow:
- znaš **šta da pitaš**
- znaš **kada da staneš**
- znaš **kada da tražiš provjeru**

To je razlika između:
> "AI mi je rekao"

i

> "AI mi je izračunao, provjerio i objasnio"

## Kako ti utičeš na workflow kroz prompt

Ti kao korisnik **ne pišeš kod**, ali pišeš **instrukcije koje oblikuju workflow**.

Primjer dobrog workflow prompta:

```sql
Use Code Interpreter.

1. Load the attached Excel file.
2. Inspect the structure and explain what the data represents.
3. Analyze monthly trends.
4. Verify the results and highlight any anomalies.
5. Present a clear summary with one chart.
```

Ovim promptom:
- sprečavaš preskakanje faza
- prisiljavaš AI na redoslijed
- povećavaš pouzdanost rezultata

## Kratka analogija

Zamisli laboratoriju.
Bez workflowa — neko ti samo kaže rezultat.
Sa workflowom — vidiš:
- uzorak
- mjerenje
- kontrolu
- zaključak

Code Interpreter workflow je **laboratorijski protokol za podatke**.

## Sažetak

Code Interpreter nije magija, nego proces. Razumijevanjem njegovog workflowa — od učitavanja do provjere — dobijaš potpunu kontrolu nad rezultatima. Kada znaš kojim redom AI radi, znaš i kako da ga vodiš, ispraviš i koristiš bez slijepog povjerenja.
