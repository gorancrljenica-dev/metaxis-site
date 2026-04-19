# Retrieval-Augmented Prompting: When AI Needs Memory (RAP)

## 1. Uvod u Retrieval-Augmented Prompting (RAP)

Retrieval-Augmented Prompting (RAP) je tehnika u kojoj se AI modelu *prvo* dostavi relevantna informacija iz baze znanja, a *tek onda* model odgovara na upit.

Drugim riječima:
**AI + pretraga memorije**

umjesto

**AI + nagađanje**

RAP je osnova svakog ozbiljnog:
- RAG sistema,
- AI asistenta sa memorijom,
- internog chatbot-a,
- enterprise AI rješenja,
- workflowa koji koristi tvoje dokumente,
- baze znanja u Notionu, Obsidianu, Pinecone-u, ChromaDB-u, Elasticsearchu.

Bez RAP-a, modeli haluciniraju.
Sa RAP-om, modeli daju *tačne i verifikovane* odgovore.

## 2. Zašto je RAP ključan?

Bez retrievala (pretraživanja):
- modeli se oslanjaju na opštu obuku,
- ne znaju tvoje dokumente,
- lako izmišljaju podatke,
- ne razumiju specifičan kontekst.

Sa retrieval-om:
- odgovori su bazirani na konkretnim izvorima,
- smanjuje se rizik od halucinacija,
- AI zna *tačno ono što ti želiš*,
- možeš izgraditi lične i poslovne AI asistente,
- radi kao produžetak tvoje baze znanja.

RAP je temelj za sve napredne AI sisteme — posebno za AI OS i RAG projekte.

## 3. Standardni RAP Prompt Template

Koristi sljedeći proces:
1. **Primaj upit** korisnika.
2. **Identifikuj ključne pojmove** u upitu (entity extraction).
3. **Kreiraj pretraživački query** zasnovan na tim pojmovima.
4. **Pretraži bazu** i vrati *najrelevantnije fragmente*.
5. **Sažmi i strukturiraj fragmente** u koherentan odgovor.
6. **Referenciraj izvor** (ako je potrebno).
7. **Napravi finalni odgovor** koristeći samo pronađene informacije.
8. **Dodaj confidence score.**

Ovo je osnovni mentalni tok svakog RAP sistema.

## 4. Interna logika RAP procesa

RAP se sastoji iz tri koraka:

### a) Retrieval (pretraga)

AI traži najrelevantnije dijelove baze:
- embedding upit →
- vektorska pretraga →
- vraća se top-k rezultata.

### b) Augmentation (dopuna)

Ti rezultati se ubacuju u prompt kao kontekst.

Na primjer:
> "Based on the following retrieved information: [tekst], answer the question…"

### c) Generation (generisanje)

AI sada odgovara *samo* na osnovu dostavljenog teksta →
drastično smanjuje halucinacije.

## 5. Primjena RAP-a u realnim projektima

### a) AI OS memorija
RAP omogućava OS-u da "zna" tvoje prethodne dane, navike, odluke, lekcije.

### b) RAG projekti
Svaki odgovor dolazi iz tvoje baze, ne iz modelove improvizacije.

### c) n8n integracije
Workflow može:
- primiti pitanje →
- pretražiti Notion/Obsidian →
- poslati fragmente GPT-u.

### d) Medicinski upiti
AI koristi samo validne izvore (smjernice, protokole, članke).

### e) SEO i scraping sistemi
Analiza koristi sadržaj koji ti scrapuješ, a ne opšte znanje modela.

### f) Korporativni asistenti
AI odgovara prema internim PDF-ovima, procedurama, SOP-ovima.

### g) ChatGPT sa tvojim dokumentima
Pretraga + kontekst = tačan odgovor.

## 6. Primjer RAP procesa

Zadatak:
"Koje su ključne prednosti OpenAI API-ja?"

Pretpostavimo da je baza znanja sadržavala dokument:
> "OpenAI API omogućava integraciju LLM-ova u aplikacije. Prednosti uključuju jednostavno skaliranje, pouzdanu obradu teksta i mogućnost kreiranja agenata."

### AI radi sljedeće:

**1. Extraction:**
- prepoznaje ključne pojmove "OpenAI API", "prednosti"

**2. Retrieval:**
→ pronalazi relevantan fragment iz baze

**3. Augmentation:**
→ ubacuje ga u prompt

**4. Response:**
"Glavne prednosti OpenAI API-ja su skalabilnost, pouzdana obrada teksta i mogućnost razvoja naprednih AI agenata."
→ 0% halucinacija, 100% bazirano na stvarnom izvoru.

## 7. Sažetak lekcije

Retrieval-Augmented Prompting (RAP) je tehnika kojom se AI-u dostavlja relevantan sadržaj iz baze znanja prije generisanja odgovora.

Time se:
- smanjuje haluciniranje,
- povećava tačnost,
- AI povezuje sa tvojim podacima,
- stvaraju RAG sistemi,
- omogućavaju profesionalni AI asistenti.

Ovo je temelj modernog AI dizajna.
