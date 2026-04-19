# Data Transformation Pattern

## Uvod

Većina grešaka u radu s podacima **ne nastaje zbog loše analize**, nego zbog loše pripreme podataka. Brojevi su tu, kolone postoje, sve izgleda "u redu" — ali zaključci su pogrešni.

Zašto?

Zato što AI (i ljudi) **razmišljaju drugačije u zavisnosti od oblika podataka**.

Data Transformation Pattern se bavi upravo tim slojem rada, ne analizom, nego **pripremom podataka tako da analiza uopće ima smisla**.

Ako preskočiš ovu fazu, Code Interpreter može savršeno izračunati — **pogrešnu stvar**.

Data Transformation Pattern je standardizovani obrazac koji omogućava precizno upravljanje načinom na koji AI model transformiše, čisti i reorganizuje podatke.

Bez ovakvog obrasca, rezultati su često nedosljedni, nepotpuni ili pogrešno strukturirani.

Cilj ovog patterna je osigurati:
- predvidljiv output,
- stabilnu logiku transformacije,
- kontrolu nad formatom,
- mogućnost integracije rezultata u automatizovane sisteme.

Ovaj pristup predstavlja temelj za profesionalni rad sa datasetovima i naprednim AI workflow-ima.

## Šta znači "data transformation"

Data transformation znači **svjesno mijenjanje strukture, formata ili organizacije podataka** prije nego što se nad njima radi analiza.

To uključuje:
- čišćenje podataka
- grupisanje i agregaciju
- promjenu formata (datumi, tekst, brojevi)
- spajanje ili razdvajanje kolona
- filtriranje i selekciju

Važno je razumjeti:
> transformacija ne dodaje nove informacije,
> ali dramatično mijenja **šta iz postojećih možeš zaključiti**.

Bez jasnih instrukcija, AI model:
- ne zna šta treba ukloniti ili zadržati,
- ne zna kako strukturirati podatke,
- često mijenja format,
- gubi informacije ili stvara duplikate.

Data Transformation Pattern uklanja te nedostatke jer modelu daje eksplicitna pravila transformacije.

Primjena je posebno važna u:
- analizi Excel fajlova,
- pripremi podataka za RAG,
- radu sa CSV-ovima i API outputima,
- čišćenju tekstualnih podataka,
- n8n pipeline-ima za data processing,
- SEO scraper backend strukturama.

## Zašto je Data Transformation ključna faza workflowa

Bez transformacije, podaci su često:
- previše detaljni
- neujednačeni
- nepogodni za poređenje
- pogrešno grupisani

AI tada:
- računa ispravno
- ali zaključuje pogrešno

Sa dobrom transformacijom:
- obrasci postaju vidljivi
- trendovi se pojavljuju
- anomalije iskaču same

Zato se u ozbiljnoj analitici kaže:
> "Ako transformacija nije dobra, analiza je nebitna."

## Tipične transformacije koje AI koristi

### Čišćenje podataka (Cleaning)

AI uklanja ili ispravlja:
- prazne vrijednosti
- duplikate
- nelogične zapise
- pogrešne formate

Bez ovoga, prosjeci i trendovi lažu.

### Agregacija (Grouping & Aggregation)

Umjesto pojedinačnih zapisa, AI:
- grupiše po datumu, kategoriji, regionu
- računa zbir, prosjek, minimum, maksimum

Primjer:
- dnevni podaci → mjesečni trend
- pojedinačni zapisi → pregled po kategoriji

Ovdje se **pojavljuje značenje**, ne samo brojevi.

### Promjena strukture (Reshaping)

AI može:
- "okrenuti" tabelu (rows ↔ columns)
- razdvojiti jednu kolonu u više
- spojiti više kolona u jednu

Ovo je često presudno za vizualizaciju i poređenje.

### Filtriranje i selekcija

Ne moraju svi podaci ući u analizu.

AI:
- izdvaja relevantne zapise
- ignoriše šum
- fokusira se na ono što odgovara cilju

Bez ove faze, analiza postaje bučna i nejasna.

## Kako izgleda dobar Data Transformation prompt

Dobar prompt **ne traži odmah zaključak**.
On prvo traži pripremu.

Primjer:

```sql
Use Code Interpreter.

1. Load the dataset.
2. Clean the data and explain what was removed or corrected.
3. Transform the data to a monthly aggregated format.
4. Explain why this transformation is appropriate.
5. Only then perform the analysis.
```

Ovim promptom:
- tjeraš AI da razmišlja o obliku podataka
- dobijaš transparentnost
- znaš **zašto** su rezultati takvi kakvi jesu

## Data Transformation kao misaoni, ne tehnički pattern

Iako se izvodi kodom, Data Transformation Pattern je prije svega **misaoni obrazac**.

Pitanja koja uvijek trebaš sebi (ili AI-ju) postaviti:
- U kom obliku su podaci sada?
- U kom obliku trebaju biti da bi odgovor imao smisla?
- Šta gubim, a šta dobijam ovom transformacijom?

Ovdje AI postaje:
> analitičar koji priprema materijal prije zaključivanja

## Kratka analogija

Zamisli da gledaš mapu.
Ako je previše detaljna — izgubiš se.
Ako je previše pojednostavljena — nemaš kontekst.

Data Transformation je **biranje prave mape za put koji želiš preći**.

## Sažetak

Data Transformation Pattern osigurava da AI analizira podatke u pravom obliku. Ne radi se o računanju, nego o pripremi. Kada su podaci pravilno transformisani, zaključci postaju jasni, relevantni i pouzdani. Bez ove faze, i najbolja analiza stoji na klimavim nogama.
