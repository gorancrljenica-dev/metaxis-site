# Tabular Reasoning & Table Operations

*Kako AI razumije, čisti i "misli" u tabelama*

## 1. Uvod u Tabular Reasoning

Tabular Reasoning predstavlja sposobnost AI modela da **razumije tabelarne podatke kao strukturu**, a ne kao običan tekst.

Za razliku od narativnog teksta, tabela ima:
- kolone sa značenjem,
- redove sa kontekstom,
- implicitna pravila (tipovi podataka, odnosi, nedostajuće vrijednosti).

AI koji posjeduje tabularno rezonovanje ne "čita" tabelu — on je **analizira kao analitičar**.

Zahvaljujući ovom patternu, model može:
- razumjeti šta kolone predstavljaju,
- prepoznati greške i nedosljednosti,
- izračunavati statistike,
- transformisati strukturu,
- spajati i filtrirati podatke,
- izvoditi zaključke na osnovu brojeva, a ne teksta.

Ovo je ključna sposobnost za sve realne AI sisteme koji rade s podacima.

## 2. Zašto je Tabular Reasoning važan?

U stvarnom svijetu, **najvažniji podaci gotovo uvijek žive u tabelama**.

Primjeri:
- Excel i Google Sheets fajlovi
- medicinske i laboratorijske evidencije
- CRM i ERP sistemi
- CSV datasetovi
- SEO scraper outputi
- RAG metapodaci
- n8n input/output strukture

Bez tabularnog rezonovanja, AI ostaje:
- ograničen na tekst,
- nesiguran u radu s brojkama,
- sklon pogrešnim zaključcima.

Tabular Reasoning omogućava modelu da:
- čisti podatke,
- vrši agregaciju,
- klasificira vrijednosti,
- detektuje trendove i anomalije,
- priprema podatke za dalju automatizaciju i analitiku.

Drugim riječima:
**bez ove sposobnosti, AI nije upotrebljiv u ozbiljnom radu s podacima.**

## 3. Standardni prompt šablon za Tabular Reasoning

Da bi model radio pouzdano s tabelama, moraš mu jasno reći **da se ponaša kao analitičar**, a ne kao generator teksta.

### Tabular Reasoning Prompt Template

> Analiziraj sljedeću tabelu i izvrši ove zadatke:
>
> 1. Identifikuj sve kolone i njihove tipove podataka.
> 2. Provjeri da li postoje greške, nelogičnosti ili nedostajući podaci.
> 3. Izračunaj osnovne statistike (count, mean, median, min, max, standard deviation).
> 4. Identifikuj trendove, outliere i obrasce.
> 5. Kreiraj novu tabelu sa standardizovanim kolonama.
> 6. Transformiši podatke prema navedenim pravilima.
> 7. Izvezi finalnu tabelu kao CSV ili JSON.
> 8. Sažmi ključne uvide u maksimalno pet tačaka.

Ovaj šablon predstavlja **profesionalni standard za rad s tabelama** u AI okruženju.

## 4. Interna logika Tabular Reasoning procesa

AI ne obrađuje tabele "odjednom". Proces se odvija u jasno razdvojenim fazama.

### a) Strukturna analiza

U prvoj fazi model identifikuje:
- nazive kolona,
- tipove podataka (tekst, broj, datum),
- prazna polja,
- razlike u formatima.

Ovo je faza u kojoj AI razumije **šta tabela zapravo jeste**.

### b) Validacija i čišćenje

Zatim slijedi korekcija:
- standardizacija datuma,
- konverzija numeričkih vrijednosti,
- uklanjanje duplikata,
- označavanje ili uklanjanje nevažećih zapisa.

Bez ove faze, svaka dalja analiza je nepouzdana.

### c) Transformacija i analitika

Nakon čišćenja, AI može vršiti:
- agregacije,
- filtriranje,
- izračune,
- klasifikaciju,
- trend analizu,
- pivotiranje (po potrebi).

Ovdje tabela postaje **izvor znanja**, a ne samo skup brojeva.

### d) Prezentacija rezultata

Na kraju, rezultati se organizuju kao:
- nova tabela,
- CSV ili JSON fajl,
- vizualni prikaz,
- narativni sažetak za ljudsko razumijevanje.

## 5. Primjena u raznim kontekstima

### a) Excel i poslovne analize

AI može zamijeniti:
- ručne pivot tabele,
- filtriranje i sortiranje,
- osnovne statističke proračune,
- generisanje izvještaja.

### b) RAG dataset priprema

Prije embeddinga, podaci **moraju biti čisti, konzistentni i strukturirani**.
Tabular Reasoning je ovdje obavezna faza.

### c) SEO scraper i automatizacije

Scrapovani podaci se pretvaraju u uredne tabele spremne za n8n pipeline i dalju obradu.

### d) AI OS – lični analitički sistem

Podaci o:
- zdravlju,
- treningu,
- projektima,
- navikama

mogu se analizirati, porediti i optimizirati kroz tabularni obrazac.

### e) Medicinske i laboratorijske tabele

Vrijednosti poput LDL-a, HbA1c, EF-a ili CRP-a dobijaju smisao tek kada su:
- standardizovane,
- usporedive,
- pravilno interpretirane.

## 6. Primjer Tabular Reasoning transformacije

Ulazna tabela:

| Ime | Datum | LDL | EF |
|-----|-------|-----|----|
| Marko | 12/2/24 | 3.4 | 55% |
| Ana | 2024-02-12 | 5.8 | 40% |
| N/A | 2024/02/12 | — | 38% |

AI obrada uključuje:
- standardizaciju datuma (ISO),
- uklanjanje nevažećih zapisa,
- konverziju numeričkih tipova,
- osnovnu statistiku.

Finalna tabela:

| name | date | ldl | ef |
|------|------|-----|----|
| Marko | 2024-02-12 | 3.4 | 55 |
| Ana | 2024-02-12 | 5.8 | 40 |

**Ključni uvidi:**
- jedan zapis je neupotrebljiv,
- LDL pokazuje visoku varijabilnost,
- EF vrijednosti ukazuju na različite stadije rizika,
- podaci zahtijevaju konsolidaciju izvora.

## 7. Sažetak lekcije

Tabular Reasoning omogućava AI modelima da **pouzdano rade s tabelama**, transformišu podatke i izvode analitičke zaključke.

Ovaj pattern je neophodan za:
- profesionalni rad s Excelom,
- pripremu RAG sistema,
- automatizacije,
- medicinsku i poslovnu analitiku.

Kada AI pravilno razumije tabele, prestaje biti tekstualni alat — i postaje **analitički asistent**.
