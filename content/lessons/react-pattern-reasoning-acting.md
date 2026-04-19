# ReAct Pattern (Reasoning + Acting)

## 1. Uvod u ReAct Pattern

ReAct (Reasoning + Acting) je napredni prompt inženjerski obrazac koji kombinuje:
1. **razmišljanje (Reasoning)**
2. **akciju (Acting)** — pozivanje alata, API-a, upita, pretraživanja, parsiranja podataka

Ovaj pattern omogućava AI modelima da:
- planiraju korake,
- razmišljaju kao agenti,
- pozivaju alate,
- izvršavaju radnje,
- koriste memoriju,
- iterativno rješavaju kompleksne zadatke.

ReAct je *osnovna arhitektura* iza modernih AI agenata, kao što su:
- OpenAI Assistants
- LangChain agenti
- AutoGPT
- n8n AI agent sistemi
- RAG agent pipeline-i

Ako želiš da AI radi "kao agent", moraš ovladati ReAct metodologijom.

## 2. Zašto je ReAct Pattern ključan?

Bez ReAct-a:
- AI samo "priča", ali ne *radi*.
- Model može dati odgovor, ali ne može donošenje odluka razložiti.
- Kompleksni zadaci se raspadaju.
- U integracijama (n8n, Lovable, RAG) AI ne može samostalno praviti korake.

Sa ReAct-om:
- AI postaje problem solver,
- pametno bira akcije,
- koristi alate kad treba,
- planira unaprijed,
- validira rezultate.

To je temelj inteligentnog ponašanja u AI sistemima.

## 3. Standardni ReAct Prompt Template

Kada rješavaš zadatak, koristi sljedeću strukturu:

**1) Thinking (Reasoning)**
Opiši svoj tok misli, plan i logiku.
(Ne otkrivati korisniku — samo interni proces.)

**2) Action**
Navedi koju radnju preduzimaš:
- pretraga
- čitanje podataka
- računanje
- pozivanje API-ja
- parsiranje JSON-a
- izvršavanje koda
- RAG upit

Format:
```
Action: [ime_alata_ili_radnje]
Input: [podatak koji se šalje alatu]
```

**3) Observation**
Zabilježi rezultat akcije.

**4) Final Answer**
Nakon završetka svih akcija, isporuči finalni odgovor korisniku.

Ovaj obrazac simulira način na koji ljudi rješavaju probleme: mislimo → djelujemo → gledamo rezultat → nastavljamo.

## 4. Interna logika ReAct procesa

ReAct funkcioniše u pet koraka:

### a) Interpretacija cilja
Šta korisnik želi? Šta je konačni cilj?

### b) Plan razmišljanja
AI pravi mapu koraka (internal chain-of-thought).

### c) Izbor akcije
AI bira odgovarajuću radnju (alat, API, kalkulaciju, kod).

### d) Posmatranje rezultata
AI vidi šta se desilo nakon akcije.

### e) Iteracija ili finalizacija
Nastaviti ili dati finalni odgovor.

Ovaj ciklus kreira inteligentno ponašanje.

## 5. Primjena u realnim projektima

### a) AI OS
Tvoj AI OS koristi "thinking → action → result" kako bi:
- generisao dnevni fokus,
- provjerio stare zapise,
- analizirao navike,
- gradio preporuke.

### b) RAG sistemi
ReAct je idealan za:
- analiziranje pitanja,
- pravljenje RAG upita,
- provjeru relevantnosti,
- sastavljanje finalnog odgovora.

### c) AI agenti (OpenAI Assistants)
Agenti koriste ReAct da:
- pozovu alat,
- pretraže bazu,
- upišu podatke,
- izvrše kalkulacije,
- rješavaju višekoračne zadatke.

### d) n8n AI Action nodes
Savršeno se poklapa sa multi-step workflowima gdje model:
- parsira
- odlučuje
- poziva akcije
- validira output

### e) Programiranje i kod
ReAct omogućava:
- generisanje koda,
- provjeru koda,
- izvršavanje,
- korekciju grešaka.

### f) SEO Scraper
ReAct agent može:
1. scrape →
2. clean →
3. extract →
4. analyze →
5. export

Sve u jednoj orkestriranoj sekvenci.

## 6. Primjer ReAct procesa

Zadatak:
"Pronađi prosjek LDL vrijednosti u ovoj tabeli i napiši medicinsku interpretaciju."

**Thinking:**
Treba izračunati prosjek → analizirati → dati medicinski zaključak.

**Action 1:**
```
Action: Calculate
Input: [2.8, 3.1, 3.4, 3.0]
```

**Observation 1:**
Prosjek = 3.075

**Action 2:**
Interpretiraj vrijednost kao kardiolog.

**Observation 2:**
LDL iznad ciljnih vrijednosti.

**Final Answer:**
"Prosječna LDL vrijednost iznosi 3.08 mmol/L, što je iznad preporučenog cilja za većinu pacijenata sa povišenim KV rizikom. Preporučuje se optimizacija terapije i reevaluacija lipida za 6–8 sedmica."

→ Ovo je *AI agent behavior*, a ne običan prompt.

## 7. Sažetak lekcije

ReAct Pattern je napredni obrazac koji kombinuje razmišljanje i akciju u jedinstveni inteligentni ciklus.

Omogućava AI modelima da:
- planiraju,
- koriste alate,
- razmišljaju u koracima,
- validiraju rezultate,
- i rješavaju kompleksne zadatke efikasnije nego jednim promptom.

Ovaj pattern je osnova modernih AI agenata, RAG sistema, n8n integracija i svih višenamjenskih AI aplikacija.

Bez ReAct-a AI ostaje generator teksta.
Sa ReAct-om → postaje inteligentan sistem.
