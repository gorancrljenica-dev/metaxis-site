# Evaluating AI Output: Validation, Errors, and Trust

*Kako AI prestaje da "zvuči uvjerljivo" i počinje da bude tačan*

## 1. Uvod: Zašto evaluacija mora biti eksplicitna

Jedan od najvećih problema u radu s AI-jem nije to što model griješi.
Problem je što **griješi uvjerljivo**.

Bez jasnog obrasca za evaluaciju, AI može:
- dati netačne informacije,
- propustiti ključne greške,
- izgraditi zaključke na pogrešnim pretpostavkama,
- "zvučati pametno", a biti pogrešan.

Evaluation / Validation / Error Detection Pattern uvodi **namjernu provjeru kvaliteta** u AI output.

Ovaj obrazac uči AI da:
- **procijeni vlastiti odgovor**,
- **provjeri tačnost**,
- **detektuje greške**,
- **označi nesigurnosti**,
- i po potrebi — **zaustavi isporuku**.

Drugim riječima:
AI više nije samo generator, nego **kontrolisani sistem**.

## 2. Razlika između generisanja i evaluacije

Važno je razumjeti jednu ključnu razliku:
- **Generisanje** = "napravi odgovor"
- **Evaluacija** = "da li je ovaj odgovor dobar, tačan i siguran?"

Većina korisnika **nikad ne traži evaluaciju**.
Zato AI nema razlog da je radi.

Ovaj pattern uvodi **drugu misaonu ulogu**:
> nakon što završi zadatak — AI mora stati i provjeriti sam sebe.

## 3. Tri nivoa provjere (Evaluation Stack)

Evaluation Pattern se sastoji od tri sloja.

### a) Validacija tačnosti (Factual Validation)

Model provjerava:
- da li su tvrdnje činjenično tačne,
- da li postoje neprovjerene pretpostavke,
- da li je koristio nagađanje.

Ako informacija nije sigurna → mora biti označena.

### b) Logička validacija (Logical Consistency)

Model provjerava:
- da li zaključci slijede iz argumenata,
- da li postoje kontradikcije,
- da li su koraci preskočeni.

Ovdje se često otkrivaju "tihe greške" koje zvuče razumno.

### c) Kontekstualna validacija (Context Fit)

Model provjerava:
- da li odgovor odgovara *ovom* korisniku,
- *ovom* cilju,
- *ovom* domenu (medicina ≠ marketing ≠ edukacija).

Odgovor može biti tačan — ali **neprimjenjiv**.

## 4. Standardni prompt šablon za Evaluation Pattern

### Evaluation / Validation Prompt Template

> Nakon što završiš odgovor, izvrši evaluaciju:
>
> 1. Provjeri činjeničnu tačnost svih tvrdnji.
> 2. Identifikuj sve pretpostavke ili nesigurne dijelove.
> 3. Provjeri logičku konzistentnost odgovora.
> 4. Procijeni da li je odgovor u skladu s kontekstom i ciljem.
> 5. Označi potencijalne greške ili slabosti.
> 6. Ako je potrebno, predloži ispravke ili upozori korisnika.
>
> Na kraju, jasno navedi:
> - da li je odgovor **siguran za upotrebu**,
> - ili zahtijeva dodatnu provjeru.

Ovaj šablon pretvara AI u **kontrolisani sistem, ne generator teksta**.

## 5. Interna logika Error Detection-a

Error Detection nije isto što i poboljšanje (WRI).
- **WRI** pita: *"Kako da ovo bude bolje?"*
- **Evaluation Pattern** pita: *"Da li je ovo uopšte ispravno?"*

Model mora imati dozvolu da kaže:
- "ovdje nisam siguran",
- "ovdje postoji rizik greške",
- "ovo treba dodatnu validaciju".

Bez toga — AI uvijek ide do kraja, čak i kad ne bi trebao.

## 6. Primjeri gdje je ovaj pattern kritičan

### a) Medicinski i farmaceutski kontekst

Pogrešna doza, pogrešna interpretacija nalaza ili guideline-a **nije prihvatljiva greška**.
Evaluation Pattern ovdje djeluje kao "crvena zastavica".

### b) RAG sistemi

RAG odgovori moraju biti:
- u skladu sa izvorima,
- bez halucinacija,
- jasno označeni ako izvor nije pronađen.

### c) Automatizacije i n8n workflow-i

Greška u jednom koraku može:
- prekinuti pipeline,
- poslati pogrešne podatke,
- napraviti sistemsku grešku.

### d) Poslovne i strateške odluke

Uvjerljiv, ali pogrešan savjet je **najskuplja vrsta greške**.

## 7. Sažetak lekcije

Evaluation / Validation / Error Detection Pattern uvodi **odgovornost** u rad s AI-jem.

Ovaj obrazac:
- smanjuje rizik,
- sprječava tihe greške,
- povećava profesionalni standard,
- omogućava sigurno korištenje AI sistema.

Ako WRI uči AI da bude bolji autor,
**Evaluation Pattern uči AI da bude odgovoran sistem.**

Bez njega, nijedan AI workflow nije kompletan.
