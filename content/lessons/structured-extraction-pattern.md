# Structured Extraction Pattern

*Kako AI pretvara haotičan tekst u podatke koji se mogu koristiti*

## 1. Uvod u Structured Extraction

Structured Extraction je tehnika kojom se **nestrukturirani sadržaj** — dokument, PDF, paragraf, web-stranica ili tekst iz slike — pretvara u **jasno definisanu strukturu**.

Najčešći oblici te strukture su:
- tabela,
- JSON objekt,
- lista ključnih informacija,
- skup kategorija,
- uredan CSV dataset.

Ono što ovu tehniku čini ključnom nije sama ekstrakcija, nego činjenica da se složen i nepredvidiv sadržaj **pretvara u nešto što AI sistemi mogu pouzdano koristiti kao podatke**.

Zahvaljujući Structured Extraction patternu, AI prestaje biti samo alat za čitanje i sažimanje — i postaje **univerzalni mehanizam za izdvajanje informacija** u medicini, biznisu, edukaciji i analitici.

## 2. Zašto je Structured Extraction ključan?

Većina informacija u realnom svijetu **ne dolazi u tabelama**.

One dolaze kao:
PDF-ovi, e-mailovi, članci, medicinski izvještaji, upisni formulari, tekstualne bilješke, web sadržaj.

Bez strukturiranja:
- podaci su teško pretraživi,
- ne mogu se pouzdano povezivati,
- ne mogu ući u RAG sisteme,
- nisu pogodni za analitiku,
- ne mogu se koristiti u automatizacijama (n8n, API, CRM).

Structured Extraction rješava upravo taj problem:
on pretvara haotičan input u **precizan, dosljedan i mašinski upotrebljiv format**.

Drugim riječima — bez ove tehnike, AI sistemi nemaju *na čemu* da rade.

## 3. Standardni prompt šablon za Structured Extraction

Da bi ekstrakcija bila pouzdana, ona mora biti **standardizovana**.

Zato se koristi jasan prompt-šablon koji ograničava model i sprječava nagađanja.

### Structured Extraction Prompt Template

> Izdvoji ključne informacije iz sljedećeg teksta i organizuj ih u strukturirani format.
>
> 1. Identifikuj sve relevantne entitete (navedi ih).
> 2. Organizuj ekstrakciju u oblik:
>    - **JSON** objekta, ili
>    - **tabele sa kolonama**, ili
>    - **CSV dataset-a** (navedi format).
> 3. Ako postoje nedostajući podaci, označi ih kao `null`.
> 4. Uključi samo informacije koje se eksplicitno nalaze u tekstu.
> 5. Ne dodaj pretpostavke ili dodatna tumačenja.
> 6. Označi dvosmislene ili nejasne stavke u podacima.

Ovaj šablon služi kao **ugovor** između tebe i AI-ja:
model zna šta smije da radi — i, jednako važno, šta ne smije.

## 4. Interna logika procesa

Structured Extraction se ne dešava u jednom potezu.
Proces ima **tri jasne faze**.

### a) Identifikacija entiteta

Model prvo odlučuje **šta je važno**:
- imena,
- datumi,
- numeričke vrijednosti,
- terapije,
- simptomi,
- kategorije,
- naslovi i oznake.

Ako ova faza zakaže, cijela ekstrakcija je pogrešna.

### b) Normalizacija podataka

Zatim se podaci **čiste i standardizuju**:
- datumi prelaze u ISO format,
- imena se stilizuju konzistentno,
- brojevi postaju numerički tipovi.

Cilj nije ljepota — cilj je **dosljednost**.

### c) Mapping → struktura

Na kraju se informacije raspoređuju u:
- JSON ključeve,
- kolone tabele,
- CSV polja.

U tom trenutku dokument prestaje biti tekst i postaje **dataset** koji može ući u AI sisteme.

## 5. Primjena u raznim kontekstima

### a) RAG (Retrieval-Augmented Generation)
Dokumenti se moraju strukturirati prije indeksiranja u vektorske baze.
Bez toga, pretraga postaje nepouzdana.

### b) Medicinski i farmaceutski sadržaji
Ekstrakcija ključnih parametara kao što su:
lijek, doziranje, indikacija, EF, LDL, simptomi — direktno iz PDF-ova i izvještaja.

### c) AI OS – organizacija znanja
Bilješke, članci i dokumenti se pretvaraju u strukture koje se mogu:
pretraživati, sortirati, tagirati i povezivati.

### d) Analiza PDF-ova i izvještaja
Automatsko pronalaženje vrijednosti, preporuka i klasifikacija bez ručnog čitanja.

### e) No-code sistemi i n8n automatizacije
Strukturirani output se direktno šalje u:
Notion, Google Sheets, CRM sisteme i API pozive.

## 6. Primjer Structured Extraction transformacije

Ulazni tekst:
> Pacijent: Marko M.
> Datum: 12.2.2024.
> Terapija: Rosuvastatin 20 mg.
> Kontrola za 3 mjeseca.
> LDL: 3.4 mmol/L.
> Napomena: smanjiti unos zasićenih masti.

### Ekstrakcija (JSON format)

```json
{
  "pacijent": "Marko M.",
  "datum": "2024-02-12",
  "terapija": "Rosuvastatin 20 mg",
  "kontrola": "3 mjeseca",
  "ldl": 3.4,
  "napomena": "smanjiti unos zasićenih masti"
}
```

### Ekstrakcija (tabela)

| Pacijent | Datum | Terapija | Kontrola | LDL | Napomena |
|----------|-------|----------|----------|-----|----------|
| Marko M. | 2024-02-12 | Rosuvastatin 20 mg | 3 mjeseca | 3.4 | smanjiti unos zasićenih masti |

Ovaj output je **odmah spreman** za RAG, n8n pipeline, evidencije i CRM sisteme.

## 7. Sažetak lekcije

Structured Extraction Pattern omogućava da nestrukturirani tekst postane **podatak koji se može koristiti**.

Transformacija teksta u JSON, tabelu ili CSV predstavlja jedan od **temelja modernog AI ekosistema**, posebno u sistemima koji zavise od tačne i dosljedne obrade informacija.

Bez ovog patterna, automatizacija i RAG sistemi nemaju stabilnu osnovu.
