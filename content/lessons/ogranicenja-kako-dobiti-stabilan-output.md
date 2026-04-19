# Ograničenja: kako dobiti stabilan output

## 1. Uvod u Constraint-Based Prompting

Constraint-Based Prompting je tehnika u kojoj AI dobija **jasno definisana ograničenja** koja mora poštovati tokom generisanja odgovora.

Ta ograničenja mogu se odnositi na: format, stil, dužinu, ton, broj stavki, jezik, terminologiju, raspon vrijednosti, logičke zabrane (šta model *ne smije* uraditi), obavezne elemente (šta *mora* uključiti).

Ovim pristupom AI prestaje biti "kreativni generator" i postaje **precizno podešen alat** koji radi unutar jasno zadanih granica.

Ne pitaš više *šta bi AI mogao reći*, nego **šta mu je dozvoljeno da kaže — i kako**.

## 2. Zašto je ova tehnika ključna

Bez eksplicitnih ograničenja, AI modeli često:

- proizvode preduge odgovore,
- koriste neadekvatan ton,
- dodaju nepotrebne informacije,
- improvizuju podatke,
- preskaču ključne elemente,
- krše format (posebno JSON).

Constraint-Based Prompting omogućava:

- potpunu kontrolu outputa,
- dosljednost kroz više poziva,
- stabilnost u automatizacijama (n8n, API),
- tehnički ispravne odgovore,
- profesionalan i predvidiv stil.

Zbog toga je ovaj pattern **obavezan** u ozbiljnim enterprise-level sistemima.

## 3. Standardni Constraint-Based Template

Izvrši zadatak **strogo po sljedećim ograničenjima**.

**FORMAT OGRANIČENJA**
- Output mora biti u formatu: *(JSON / tabela / bullet list / sekcije — navesti tačno)*
- Ne dodavati tekst van traženog formata
- Koristiti isključivo navedene ključeve

**STILSKA OGRANIČENJA**
- Ton: *(stručan / formalan / tehnički / neutralan)*
- Rečenice kratke i jasne
- Bez metafora i kreativnih elemenata *(osim ako je eksplicitno dozvoljeno)*

**SADRŽAJNA OGRANIČENJA**
- Maksimalno X riječi
- Tačno Y stavki
- Obavezno uključiti: *(navesti)*
- Strogo izbjegavati: *(navesti)*

**LOGIČKA OGRANIČENJA**
- Ne izmišljati podatke
- Ako informacija nije poznata → eksplicitno navesti
- Poštovati numeričke i semantičke granice

## 4. Kako model "razmišlja" pod ograničenjima

Constraint-Based Prompting funkcioniše kroz tri osnovna mehanizma:

**a) Channeling** — Model razmišlja unutar dozvoljenog kognitivnog prostora.

**b) Filtering** — Sve što ne zadovoljava uslove biva eliminisano prije outputa.

**c) Structural anchoring** — Format postaje obavezujući zakon, naročito kod JSON i API izlaza.

Rezultat je odgovor koji je **stabilan, tehnički validan i predvidiv**.

## 5. Praktičan primjer

**Zadatak:** "Napiši sažetak istraživanja o dijabetesu."

**Ograničenja:** maksimalno 80 riječi, striktno profesionalan ton, obavezno uključiti: prevalencu, komplikacije, značaj kontrole, izbjegavati brojčane vrijednosti bez izvora, format: bullet list.

**Rezultat:**

- Dijabetes je hronično metaboličko stanje sa rastućom globalnom prevalencom.
- Glavne komplikacije uključuju vaskularna, bubrežna i neurološka oštećenja.
- Kontrola glikemije značajno smanjuje dugoročne rizike.
- Multidisciplinarni pristup poboljšava ishode liječenja i kvalitet života.

Sav format, ton i sadržaj su ispoštovani bez odstupanja.

## 6. Sažetak lekcije

Constraint-Based Prompting omogućava da AI radi **unutar jasno definisanih granica**, bez improvizacije i grešaka.

Ovaj pattern je temelj:

- stabilnih AI sistema,
- tehnički sigurnih automatizacija,
- profesionalnih tekstova,
- pouzdanih AI agenata.

Bez ograničenja — AI je nepredvidiv. Sa ograničenjima — **postaje alat pod punom kontrolom**.
