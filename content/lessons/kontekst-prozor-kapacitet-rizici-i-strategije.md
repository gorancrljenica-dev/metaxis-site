# Kontekst prozor: kapacitet, rizici i strategije

*(šta agent pamti — a šta NIKADA ne smije)*

## 1. Zašto je "pamćenje" najčešće pogrešno shvaćen dio AI sistema

Većina korisnika govori o "AI pamćenju" kao o jednoj stvari.

U stvarnosti, agent **nikada nema jedno pamćenje** — već više potpuno različitih mehanizama.

Ako ih ne razdvojiš:
- agent halucinira kontinuitet,
- kontekst se miješa,
- sistem postaje nepouzdan,
- greške se akumuliraju bez traga.

Ova lekcija uvodi **preciznu mapu: šta je memory, šta je state, a šta je samo context window**.

## 2. Tri potpuno različita pojma (kritično razdvajanje)

### A) Context Window

- Privremeni radni prostor modela
- Postoji samo tokom jednog odgovora
- Nestaje odmah nakon odgovora
- Ograničen veličinom (tokeni)

**Context nije pamćenje.**

### B) State

- Trenutno stanje procesa ili agenta
- Živi između koraka (loop-ova)
- Često se čuva spolja (JSON, varijable, DB)

Primjeri:
- trenutni korak u workflow-u
- status zadatka
- aktivni mod (analysis / output / verify)

**State je tehničko stanje, ne znanje.**

### C) Memory

- Namjerno sačuvana informacija
- Postoji izvan modela
- Vraća se selektivno
- Ima pravila upotrebe

Primjeri:
- korisničke preferencije
- trajni podaci
- istorija odluka
- verified facts

**Memory je dizajnirana odluka, ne nusproizvod razgovora.**

## 3. Najčešća greška: "model se sjeća"

Model se **nikada ne sjeća**.

Ako vidiš kontinuitet, to je zato što:
- ti ponovo šalješ kontekst
- sistem reinjectuje memoriju
- state se ponovo učitava

Ako to ne znaš — ne kontrolišeš sistem.

## 4. Šta agent SMIJE da pamti

Agent smije čuvati samo informacije koje su:
- stabilne kroz vrijeme
- relevantne za buduće odluke
- provjerene
- bez kontekstualnog šuma

Primjeri:
- trajni ciljevi
- preferirani format
- potvrđeni identiteti
- verified procedure
- dozvoljeni alati

## 5. Šta agent NIKADA ne smije pamtiti

- privremene pretpostavke
- neprovjerene zaključke
- emocije iz jednog razgovora
- pogrešne ulaze
- kontekstualne improvizacije
- eksperimente

Ako ovo uđe u memory → **sistem se kvari iznutra**.

## 6. Memory ≠ Log

Ovo je česta zabuna.
- **Log** → zapis *šta se desilo*
- **Memory** → odluka *šta vrijedi zapamtiti*

Sve može ići u log.
Samo mali dio smije u memory.

## 7. Standardni Memory Gating Template

```
Candidate Information:
- Content:
- Source:
- Confidence Level:

Evaluation:
- Is it stable over time? (yes/no)
- Is it reusable? (yes/no)
- Is it verified? (yes/no)
- Is it context-dependent? (yes/no)

Decision:
- Store in memory? (yes/no)
- Memory type: (preference / fact / rule / history)
- Expiry or review condition:
```

Ako nemaš ovaj filter → **memory postaje smeće**.

## 8. Kako agent koristi memoriju (ispravan tok)

1. Task započinje
2. Agent učitava **samo relevantnu memoriju**
3. Kontekst se gradi
4. Zadatak se izvršava
5. Novi podaci prolaze **memory gating**
6. Samo odobreni ulaze u memory

Memory se **nikada ne koristi direktno bez provjere konteksta**.

## 9. Memory u Agent Loop-ovima

U loop-ovima:
- **Think** → čita memory
- **Act** → koristi state
- **Verify** → odlučuje šta (ako išta) ide u memory

Ako memory upisuješ bez Verify faze → **to više nije agent**.

## 10. Primjer: medicinski AI sistem

Ako agent:
- jednom pogrešno pročita LDL vrijednost
- i to zapamti

➡️ svaki budući savjet je kompromitovan.

Ispravno ponašanje:
- čuvati *izvor*
- čuvati *raspon*
- čuvati *status verifikacije*
- nikada čuvati sirovu vrijednost bez konteksta

## 11. Sažetak lekcije

- Context ≠ State ≠ Memory
- Memory je **arhitektonska odluka**
- Sve što pamtiš mora biti:
  - provjereno
  - stabilno
  - korisno

Agent bez jasnih granica pamćenja → **nije inteligentan, nego opasan**.

Ovdje se završava osnovna kontrola kontinuiteta u AI sistemima.
