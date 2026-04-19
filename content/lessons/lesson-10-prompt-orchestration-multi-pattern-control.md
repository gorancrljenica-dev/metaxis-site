# Prompt Orchestration / Multi-Pattern Control

*Kako AI prestaje da koristi obrasce pojedinačno i počinje da ih koristi kao sistem*

## 1. Uvod: Zašto pojedinačni patterni nisu dovoljni

Do ove tačke u knjizi, naučio si kako da koristiš pojedinačne obrasce:
- strukturiraš podatke,
- razlažeš zadatke,
- analiziraš tabele,
- vizualizuješ rezultate,
- poboljšavaš i evaluiraš output.

Međutim, u realnom radu s AI-jem, problemi **rijetko dolaze izolovano**.

Stvarni zadaci zahtijevaju da AI:
- prvo razumije kontekst,
- zatim postavi pitanja,
- onda generiše rješenje,
- provjeri tačnost,
- poboljša kvalitet,
- i tek na kraju isporuči odgovor.

Ovdje nastupa **Prompt Orchestration**.

To je obrazac koji omogućava da **više patterna radi zajedno**, u kontrolisanom redoslijedu, sa jasnim ulogama i granicama.

## 2. Šta je Prompt Orchestration?

Prompt Orchestration je tehnika kojom **svjesno upravljaš redoslijedom, ulogom i međusobnim odnosom više prompt obrazaca** u jednom zadatku.

Umjesto da AI koristi jedan pattern "ad hoc", ti mu govoriš:
- koji obrazac koristi *prvo*,
- koji *zatim*,
- koji ima *kontrolnu ulogu*,
- a koji je *finalni filter*.

Analogija je jasna:
> Pojedinačni pattern = muzičar
> Prompt Orchestration = dirigent

Bez dirigenta, svi sviraju — ali ne zajedno.

## 3. Zašto je Multi-Pattern Control kritičan?

Bez orkestracije, AI:
- miješa logike,
- preskače važne faze,
- daje dobar odgovor prerano,
- ne provjerava vlastite greške,
- gubi stabilnost u složenim zadacima.

Multi-Pattern Control omogućava:
- **predvidivo ponašanje modela**,
- **kontrolu kvaliteta po fazama**,
- **ponovljivost rezultata**,
- **sigurnu upotrebu u profesionalnim sistemima**.

Ovo je razlika između:
- "AI mi ponekad pomogne"

i

- "AI mi je pouzdan dio sistema".

## 4. Osnovna logika orkestracije (mentalni model)

Svaka dobra orkestracija ima četiri sloja:

### a) Ulazni sloj – Razumijevanje zadatka
(npr. FIP, Reframing)

AI mora znati:
- šta želiš,
- zašto,
- u kom kontekstu.

### b) Izvršni sloj – Generisanje
(npr. Task Decomposition, Structured Extraction, Tabular Reasoning)

Ovdje AI **radi posao**.

### c) Kontrolni sloj – Provjera
(npr. WRI, Evaluation, Error Detection)

Ovdje AI **provjerava sam sebe**.

### d) Izlazni sloj – Finalna isporuka
(strukturiran, jasan, siguran output)

Bez ova četiri sloja, sistem je nestabilan.

## 5. Standardni Prompt Orchestration Template

> Koristi sljedeći orkestrirani pristup:

**Faza 1 – Razumijevanje (Context & Clarification):**
Postavi pitanja dok ne razumiješ cilj, kontekst i ograničenja.

**Faza 2 – Izvršenje (Generation):**
Razloži zadatak na korake i generiši rješenje po fazama.

**Faza 3 – Provjera (Evaluation):**
Provjeri tačnost, logiku i kontekstualnu primjenjivost.

**Faza 4 – Poboljšanje (Refinement):**
Poboljšaj odgovor na osnovu identifikovanih slabosti.

**Faza 5 – Finalni output:**
Isporuči jasan, strukturiran i siguran odgovor.

Ovaj šablon je **kičma svih ozbiljnih AI workflowa**.

## 6. Primjer orkestracije u praksi

Zadatak:
> "Analiziraj laboratorijske podatke pacijenata i pripremi izvještaj."

Orkestracija:
1. **FIP** – AI pita o populaciji, cilju analize, referentnim vrijednostima.
2. **Structured Extraction + Tabular Reasoning** – podaci se čiste, normalizuju i analiziraju.
3. **Data Visualization** – trendovi se prikazuju grafički.
4. **WRI** – izvještaj se piše, reflektuje i poboljšava.
5. **Evaluation Pattern** – provjerava se tačnost i medicinska sigurnost.

➡️ Rezultat: izvještaj koji je **analitički tačan, čitljiv i siguran za upotrebu**.

Bez orkestracije, isti zadatak bi dao nepouzdan i fragmentiran output.

## 7. Gdje se Prompt Orchestration koristi

### a) AI OS sistemi
Svaki modul (zdravlje, znanje, projekti) ima svoj orkestrirani tok.

### b) RAG sistemi
Upit → pretraga → generisanje → evaluacija → finalni odgovor.

### c) AI agenti
Agenti bez orkestracije su nepredvidivi.

### d) Automatizacije (n8n)
Svaki node je faza u orkestriranom procesu.

### e) Profesionalni prompt engineering
Bez orkestracije, nema skalabilnosti.

## 8. Sažetak lekcije

Prompt Orchestration / Multi-Pattern Control je **razlika između korištenja AI-ja i upravljanja AI-jem**.

Ovaj obrazac:
- povezuje sve prethodne lekcije,
- daje stabilnost sistemu,
- omogućava profesionalnu upotrebu,
- sprečava haos u složenim zadacima.

Ako su patterni alati, **orkestracija je arhitektura**.

Bez nje, nema ozbiljnog AI sistema.
