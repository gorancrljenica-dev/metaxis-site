# Planiranje i task grafovi: kad zadatak postane sistem

*Kako agent razmišlja unaprijed — bez gubljenja kontrole*

## 1. Zašto planiranje nije isto što i "razmišljanje"

Model može: razmišljati, rezonovati, odgovarati.

Ali **agent mora planirati**.

- razmišljanje = reakcija na upit
- planiranje = konstrukcija puta do cilja

Bez planiranja agent: skače između koraka, zaboravlja cilj, ulazi u petlje, proizvodi fragmentiran output.

Planiranje je ono što **razdvaja chat-model od sistema**.

## 2. Tri nivoa agent planiranja

### 1. Goal Definition
- Šta je stvarni cilj?
- Kada je zadatak završen?
- Koji su kriteriji uspjeha?

Bez ovog → sve dalje je improvizacija.

### 2. Task Decomposition
- Razlaganje cilja u izvršive dijelove
- Identifikacija zavisnosti
- Eliminacija suvišnih koraka

### 3. Task Graph (ne lista!)
- Koraci nisu linearni
- Neki se izvršavaju paralelno
- Neki čekaju validaciju
- Neki se ponavljaju

Agent ne razmišlja u "listama", već u **grafovima**.

## 3. Task List vs Task Graph

**Task List (❌)**
- korak 1, korak 2, korak 3
- Nema povratnih veza, nema provjera, nema grananja

**Task Graph (✅)**
- čvorovi (tasks), veze (dependencies), grananja, povratne petlje, validacioni čvorovi
- Omogućava kontrolu toka, otpornost na greške, skaliranje sistema

## 4. Standardni Planning & Task Graph Template

```
Step 1: Define Goal
- Final objective:
- Success criteria:

Step 2: Decompose into Tasks
For each task:
- Task name
- Input
- Output
- Dependencies

Step 3: Build Task Graph
- Identify parallel tasks
- Identify validation checkpoints
- Identify feedback loops

Step 4: Execution Rules
- When to stop
- When to retry
- When to escalate error
```

## 5. Primjer: Agent koji analizira dataset

**Goal:** "Analizirati dataset i generisati pouzdan izvještaj"

**Decomposition:**
- Load data → Validate schema → Clean data → Analyze metrics → Visualize results → Generate summary → Validate conclusions

**Task Graph logika:**
- *Clean data* ne može prije *Validate schema*
- *Visualize* zavisi od *Analyze*
- *Validate conclusions* je obavezna prije finalnog outputa
- Ako validacija padne → povratak na analizu

## 6. Zašto planiranje smanjuje halucinacije

Halucinacije često nastaju jer model: ne zna gdje se nalazi u procesu, ne zna šta je već uradio, preskače provjere.

Task Graph: uvodi orijentaciju, uvodi provjere, uvodi granice.

Agent sa planom halucinira **manje**, ne više.

## 7. Najčešće greške u agent planiranju

- Plan je skriven (implicit)
- Nema validacionih čvorova
- Sve je linearno
- Nema stop-uslova
- Nema rollbacka

Ako plan **ne možeš nacrtati** — ne postoji.

## 8. Sažetak lekcije

Agent bez planiranja je: reaktivan, nepredvidiv, lomljiv.

Agent sa planiranjem i task grafom: zna gdje ide, zna kada stati, zna kada se vratiti, zna kada je završio.

Ovdje se pravi razlika između "AI koji odgovara" i **AI koji vodi proces**.
