# Razlaganje zadatka: od nejasnog zahtjeva do koraka

## 1. Uvod u Task Decomposition

Task Decomposition je tehnika kojom se **kompleksan, nejasan ili višeslojan zadatak** razlaže na niz manjih, jasno definisanih koraka koje AI model može razumjeti, izvršiti i kontrolisati.

AI modeli funkcionišu znatno bolje kada:

- znaju tačno *šta je sljedeći korak*,
- razumiju *zašto taj korak postoji*,
- i imaju jasan redoslijed izvršavanja.

Zbog toga Task Decomposition nije samo "tehnika promptinga", nego **temeljni princip rada svih naprednih AI sistema**.

## 2. Zašto je Task Decomposition ključan?

Kada se zadatak ne razloži:

- model preskače korake,
- pravi logičke rupe,
- daje djelimične ili nepovezane odgovore,
- ne razumije stvarni cilj,
- output je teško kontrolisati i provjeriti.

Razlaganjem zadatka dobijaš:

- **preciznost** – svaki korak ima svrhu,
- **dosljednost** – isti proces daje sličan rezultat,
- **upravljivost** – možeš intervenisati po fazama,
- **provjerljivost** – svaka faza se može validirati,
- **mogućnost optimizacije** – slabe tačke su vidljive.

Task Decomposition pretvara AI iz improvizatora u **procesnog izvršioca**.

## 3. Standardni prompt šablon za Task Decomposition

Da bi model pravilno razložio zadatak, moraš mu **eksplicitno tražiti strukturu**, ne samo rezultat.

> Razloži sljedeći zadatak na jasno definisane faze.
>
> 1. Identifikuj glavni cilj zadatka.
> 2. Definiši sve potciljeve ili podsisteme potrebne za postizanje cilja.
> 3. Pretvori potciljeve u konkretne korake.
> 4. Za svaki korak opiši: ulazne podatke, radnju, očekivani izlaz.
> 5. Organizuj korake u logički redoslijed.
> 6. Identifikuj tačke rizika ili potencijalne greške.
> 7. Predloži optimizovanu verziju procesa.

## 4. Interna logika procesa

### a) Makro-razumijevanje

Model prvo mora razumjeti **šta je stvarni cilj**, a ne samo površinski zahtjev.

Korisnici često opisuju simptom ("napravi izvještaj"), a ne cilj ("donijeti odluku na osnovu trenda"). Ako se ova faza preskoči, cijeli proces ide u pogrešnom smjeru.

### b) Mikro-razlaganje

Zatim se kompleksan zadatak rastavlja na **male, izvršive jedinice**.

Primjeri:

- "Analiziraj podatke" → učitaj fajl → očisti podatke → izračunaj metrike → napravi grafike → napiši zaključke
- "Napravi automatizaciju" → definiši input → dizajniraj tok → odaberi trigger → definiši output → testiraj

### c) Linearizacija

Na kraju se svi koraci poredaju u **redoslijed kojim ih AI može izvesti**.

Ova faza sprječava preskakanje, kružnu logiku i kontradikcije između faza.

## 5. Primjena u raznim kontekstima

### AI OS – modularni sistemi

Task Decomposition omogućava jasno definisane inpute, outpute i granice odgovornosti svakog modula.

### RAG sistemi

RAG proces se prirodno razlaže na: ingest, embedding, indeksiranje, razumijevanje upita, evaluaciju odgovora.

### n8n automatizacije

Svaki n8n workflow je zapravo **vizualni oblik Task Decomposition-a**. Node = jedan korak. Flow = linearizovani proces.

### Prompt Engineering

Svi napredni promptovi (analitika, agenti, višefazni zadaci) implicitno koriste Task Decomposition.

## 6. Primjer Task Decomposition u praksi

Zadatak: "Napravi izvještaj iz Excel fajla sa analizom trendova."

Razlaganje:

1. **Učitaj fajl** — provjeri dostupne sheetove, identifikuj numeričke kolone
2. **Očisti podatke** — ukloni duplikate, standardizuj datume, ispravi tipove podataka
3. **Analiziraj trendove** — izračunaj moving average, identifikuj outliere
4. **Vizualizuj podatke** — napravi line chart, napravi histogram
5. **Generiši zaključke** — sažmi 3–5 ključnih opažanja
6. **Izvoz** — PDF izvještaj, CSV dataset

## 7. Sažetak lekcije

Task Decomposition Pattern omogućava da se kompleksni zadaci pretvore u niz preciznih, jasno definisanih faza.

Ovaj obrazac:

- povećava kvalitet outputa,
- stabilizuje ponašanje modela,
- omogućava profesionalne AI workflowe.

Task Decomposition je **temelj svih ozbiljnih AI projekata**.
