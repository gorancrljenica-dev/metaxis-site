# From Images to Data: OCR & Visual Understanding

## 1. Uvod u OCR i vizualno razumijevanje

OCR (Optical Character Recognition) i Image Understanding predstavljaju skup tehnika koje omogućavaju AI modelu da **radi sa vizualnim svijetom na isti način na koji inače radi sa tekstom**.

To uključuje sposobnost da model:
- čita tekst sa slike,
- prepoznaje objekte, lica, simbole i strukture,
- razumije raspored i odnose između elemenata,
- interpretira kompoziciju slike,
- i na kraju — pretvara vizualne informacije u formalne, mašinski upotrebljive podatke.

Ove dvije komponente zajedno čine temelj za sve AI sisteme koji moraju raditi sa **realnim dokumentima**, fotografijama i snimcima ekrana — onim što ljudi zapravo koriste u svakodnevnom radu, a ne idealiziranim digitalnim formatima.

Drugim riječima:
**OCR i Image Understanding su most između stvarnog svijeta i AI sistema.**

## 2. Zašto je ova tehnika važna?

Većina informacija u stvarnom svijetu **ne nastaje digitalno**.

One postoje kao:
- fotografije,
- medicinski izvještaji,
- laboratorijski nalazi uslikani telefonom,
- formulari,
- promotivni materijali,
- grafikoni i dijagrami,
- snimci ekrana aplikacija i sistema.

Bez OCR-a i vizualnog razumijevanja, sav taj sadržaj ostaje **izolovan**:
- ne može se indeksirati,
- ne može se koristiti u RAG sistemima,
- ne može ući u automatizaciju (n8n),
- ne može biti dio AI OS memorije,
- ne može se analizirati, filtrirati ili kategorizirati.

OCR i Image Understanding rješavaju upravo taj problem:
oni omogućavaju da vizualni sadržaj postane **podatkovni resurs**, a ne mrtva slika.

## 3. Standardizovani prompt šablon za OCR & Image Understanding

Da bi ova sposobnost bila pouzdana, mora biti **standardizovana**.

Zato se koristi jasan prompt-šablon koji vodi model kroz cijeli proces — od identifikacije elemenata do strukturiranja podataka.

### OCR & Image Understanding Prompt Template

> Analiziraj sliku koju dostavljam i primijeni sljedeće korake:
>
> 1. Identifikuj sve vizualne elemente (objekte, tekst, pozicioniranje).
> 2. Izvuci sav tekst sa slike koristeći OCR.
> 3. Konvertuj tekst u strukturirani format (tabela ili JSON).
> 4. Opiši ključne elemente: kompoziciju, osvjetljenje, kontrast i fokus.
> 5. Identifikuj potencijalno relevantne informacije za analitički ili poslovni kontekst.
> 6. Ako je potrebno, predloži poboljšanja slike (svjetlo, kontrast, jasnoća).
> 7. Obradi sliku u dodatnim verzijama ako je potrebna transformacija (crop, resize, rotation).

Ovaj prompt se koristi kao **osnovni alat** za sve vizualne analitičke zadatke i predstavlja ulaznu tačku za dalju automatizaciju.

## 4. Interna logika procesa

OCR i Image Understanding ne dešavaju se "odjednom".

Proces ima **dva jasno odvojena sloja**.

### a) Ekstrakcija (OCR)

U ovoj fazi model:
- prepoznaje znakove, brojeve i tekstualne blokove,
- normalizuje tekst (format datuma, brojeva, jedinica),
- čisti šum i greške nastale uslijed lošeg osvjetljenja ili kvaliteta slike.

Rezultat ove faze je **čist tekst**, ali bez značenja.

### b) Interpretacija (Image Understanding)

U drugoj fazi model:
- identifikuje objekte i simbole,
- razumije raspored elemenata,
- prepoznaje kontekst (dokument, grafikon, formular),
- analizira kompoziciju, svjetlo i kontrast,
- i povezuje elemente u smislenu cjelinu.

Tek kombinacijom ove dvije faze slika postaje **podatak**, a ne samo tekst.

## 5. Primjena u raznim kontekstima

### a) Medicinska i farmaceutska dokumentacija

Ekstrakcija i strukturiranje podataka iz:
- laboratorijskih nalaza,
- dijagnostičkih izvještaja,
- papirnih formulara,
- fotografisanih recepata i terapijskih planova.

Ovdje OCR direktno omogućava digitalizaciju procesa koji su inače ručni i nepouzdani.

### b) RAG sistemi

Vizualni sadržaj se pretvara u tekstualne embeddinge koje RAG sistemi mogu pretraživati, rangirati i koristiti u odgovaranju.

### c) AI OS – vizualna memorija

Fotografije i screenshotovi postaju **indeksirane informacije**, a ne haotična galerija slika.

### d) Automatizacija unosa podataka

OCR omogućava automatski unos podataka iz slika direktno u:
- Notion baze,
- Google Sheets,
- CRM sisteme,

putem n8n workflow-a.

### e) Analiza grafova i dijagrama

Model može očitati vrijednosti sa grafikona i pretvoriti ih u numeričke tabele spremne za dalju analizu.

## 6. Primjer OCR ekstrakcije

Ulazna slika sadrži sljedeći tekst:
> LDL-Cholesterol
> 3.4 mmol/L
> Date: 12/02/2024
> Patient: Marko M.

Nakon OCR obrade i strukturiranja, rezultat izgleda ovako:

```json
{
  "pacijent": "Marko M.",
  "datum": "2024-02-12",
  "parametar": "LDL-Cholesterol",
  "vrijednost": 3.4,
  "jedinica": "mmol/L"
}
```

Ovaj format se zatim može direktno koristiti:
- u AI OS zdravstvenim modulima,
- u RAG memoriji,
- za analitiku kroz Code Interpreter,
- u n8n automatizacijama za praćenje vrijednosti.

## 7. Sažetak lekcije

OCR i Image Understanding omogućavaju AI-ju da vizualne informacije pretvori u strukturirane podatke.

Time se otvara put ka:
- digitalizaciji dokumenata,
- automatizaciji unosa,
- analitičkoj obradi slika,
- i punoj integraciji vizualnog materijala u AI sisteme.

Kada se koriste standardizovani obrasci ekstrakcije, **svaka slika postaje potencijalni podatak**, a ne samo vizualni artefakt.
