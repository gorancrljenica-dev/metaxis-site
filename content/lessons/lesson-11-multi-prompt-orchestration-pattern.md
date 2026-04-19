# Multi-Prompt Orchestration: kada prompti postanu proces

*Kako jedan prompt prerasta u kontrolisani tok*

## Uvod: zašto jedan prompt više nije dovoljan

U prethodnoj lekciji (*Prompt Orchestration / Multi-Pattern Control*) vidio si kako je moguće **orkestrirati više misaonih obrazaca unutar jednog prompta**.

Multi-Prompt Orchestration ide **korak dalje**.

Ovdje više ne govorimo o:
- jednom upitu
- jednom odgovoru
- jednom misaonom toku

Već o **sekvenci promptova** koji zajedno čine **kontrolisani proces**.

Drugim riječima, AI više ne reaguje — **AI izvršava tok**.

Ovaj obrazac čini osnovu za:
- AI agente
- višefazne analize
- RAG sisteme
- n8n automatizacije
- AI OS arhitekture

Ako želiš stabilne, ponovljive i profesionalne rezultate, **Multi-Prompt Orchestration nije opcija — već nužnost**.

## Šta je Multi-Prompt Orchestration

**Multi-Prompt Orchestration Pattern** je tehnika u kojoj se **više promptova koristi kao koordinisana cjelina**, pri čemu svaki prompt ima:
- jasno definisanu ulogu
- precizno mjesto u toku
- kontrolisan input i output
- jasan odnos prema prethodnim i narednim koracima

Svaki prompt predstavlja **jednu fazu procesa**, a ne improvizaciju.

Model ne "razmišlja ispočetka" svaki put, već **nastavlja već započeti tok**.

## Zašto je ovaj pattern presudan u praksi

Bez orkestracije više promptova, AI sistemi vrlo brzo pokazuju slabosti:
- gubitak konteksta
- nedosljedne odgovore
- unutrašnje kontradikcije
- nepotrebno ponavljanje
- nekontrolisan i nestabilan output

Multi-Prompt Orchestration omogućava:
- fazno razmišljanje
- razdvajanje odgovornosti
- evaluaciju svakog koraka
- povratne petlje (feedback loops)
- stabilne i predvidive AI tokove

Ovo je razlika između:
> "AI mi pomaže"

i

> "AI je dio sistema".

## Osnovna arhitektura multi-prompt sistema

Tipičan orkestrirani tok izgleda ovako:
1. **Prompt 1 — Analiza i razumijevanje**
2. **Prompt 2 — Obrada i generisanje**
3. **Prompt 3 — Evaluacija i provjera**
4. **Prompt 4 — Korekcija i finalizacija**

Svaki prompt:
- prima tačno definisan input
- proizvodi kontrolisan output
- predaje rezultat sljedećem koraku

AI ne improvizuje — **izvršava unaprijed definisani tok**.

## Standardni Multi-Prompt Orchestration Template

**Prompt 1 — Context Builder**
- Razumije cilj
- Postavlja pitanja ako je potrebno
- Definiše okvir zadatka

**Prompt 2 — Core Execution**
- Izvršava glavni zadatak
- Generiše primarni output

**Prompt 3 — Evaluation Layer**
- Provjerava logiku
- Identifikuje greške
- Procjenjuje kvalitet

**Prompt 4 — Improvement Layer**
- Ispravlja uočene probleme
- Poboljšava strukturu i jasnoću
- Isporučuje finalni output

Template se može proširivati ili skraćivati, ali **redoslijed se ne preskače**.

## Interna logika: zašto ovo funkcioniše

Multi-Prompt Orchestration koristi isti princip kao profesionalni tim:
- jedan analizira
- drugi radi
- treći provjerava
- četvrti unapređuje

AI modeli su vrlo dobri u svakoj od ovih uloga **pojedinačno**, ali nepouzdani kada sve pokušavaju raditi istovremeno.

Razdvajanjem u više promptova:
- smanjuješ kognitivno opterećenje modela
- dobijaš preciznije rezultate
- smanjuješ rizik od halucinacija
- dobijaš kontrolu nad procesom

## Primjer orkestriranog toka (sažeto)

**Zadatak:**
"Napravi analizu tržišta za digitalni AI proizvod u zdravstvu."

**Prompt 1 — Analiza**
- Koja je ciljna publika?
- Koji problem se rješava?
- Koji je kontekst tržišta?

**Prompt 2 — Generisanje**
- Analiza tržišta
- Segmentacija
- Prilike i rizici

**Prompt 3 — Evaluacija**
- Jesu li pretpostavke realne?
- Postoje li rupe u logici?
- Šta nedostaje?

**Prompt 4 — Poboljšanje**
- Preciziranje
- Strukturiranje
- Finalna verzija

Rezultat je dokument koji izgleda kao da ga je radio **tim stručnjaka**, a ne jedan model.

## Gdje se ovaj pattern koristi u realnim sistemima

**AI agenti**
Agent nije jedan prompt, već skup orkestriranih promptova.

**RAG sistemi**
Jedan prompt za retrieval, drugi za sintezu, treći za validaciju.

**n8n automatizacije**
Svaki node predstavlja jednu fazu orkestracije.

**AI OS sistemi**
Dnevni procesi, evaluacije i refleksije oslanjaju se na sekvence.

**Profesionalno pisanje i analitika**
Izvještaji, strategije i tehnička dokumentacija.

## Ključna razlika u odnosu na druge pattern-e

- Task Decomposition → razlaže zadatak
- Write → Reflect → Improve → poboljšava jedan output
- Multi-Pattern Control → više patterna u jednom promptu
- **Multi-Prompt Orchestration → kontrolisani sistem promptova**

Ovo je **arhitekturni pattern**, a ne samo prompting tehnika.

## Sažetak

Multi-Prompt Orchestration Pattern omogućava izgradnju **stabilnih, ponovljivih i profesionalnih AI sistema**.

Umjesto jednog pametnog prompta, koristiš **pažljivo orkestriran proces**.

Ovaj obrazac predstavlja most između prompt inženjeringa i stvarnih AI sistema.
