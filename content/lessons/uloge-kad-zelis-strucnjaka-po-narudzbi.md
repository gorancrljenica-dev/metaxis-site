# Uloge: kad želiš stručnjaka po narudžbi

## 1. Uvod u Role-Based Prompting

Role-Based Prompting je tehnika u kojoj AI-u eksplicitno dodjeljuješ **ulogu**, čime direktno utičeš na način njegovog razmišljanja, nivo stručnosti i kvalitet odgovora.

Uloga može biti:

- profesionalna (*doktor, programer, analitičar, fitness trener*),
- akademska (*profesor, istraživač, urednik*),
- tehnička (*n8n inženjer, AI agent, DevOps stručnjak*),
- stilistička (*copywriter, storyteller, marketinški strateg*),
- visoko specijalizovana (*kardiolog, lipidolog, AI OS arhitekt*).

Dodjeljivanjem uloge ne mijenjaš samo **stil odgovora**, već cijelu *kognitivnu mapu* po kojoj model rezonuje.

AI tada ne odgovara "kao model", nego kao **profil znanja koji si definisao**.

## 2. Zašto je ova tehnika presudna

Kada ne definišeš ulogu, AI najčešće odgovara:

- preširoko,
- preopćenito,
- bez jasne dubine,
- bez konzistentne perspektive.

Kada definišeš ulogu:

- odgovori postaju fokusirani,
- terminologija se automatski prilagođava,
- logika postaje stručna,
- kontekst se bolje razumije,
- kvalitet skače višestruko.

Role-Based Prompting daje AI-ju **identitet**, a identitet vodi ponašanje.

## 3. Standardni Role-Based Prompt Template

```
Preuzmi ulogu [navedi tačnu ulogu]
(npr. senior data analyst, medicinski endokrinolog, n8n automation architect)
i odgovaraj isključivo u skladu s tom ulogom.

Zadatak:
- [navedi konkretan zadatak]

Ograničenja:
- ton (stručan, formalan, tehnički),
- stil (kratko, jasno, bez ukrasa),
- format (JSON, tabela, sekcije),
- fokus na tačnost,
- bez improvizacije ili nagađanja.
```

## 4. Kako Role-Based Prompting djeluje

Kada model dobije ulogu, dešavaju se četiri stvari:

**a) Aktivacija relevantnog znanja** — Model koristi terminologiju, strukturu i prioritete tipične za tu profesiju.

**b) Usmjeravanje pažnje** — Fokusira se na ono što je za tog stručnjaka važno, a ignoriše nebitno.

**c) Veća dubina objašnjenja** — Eksperti ne objašnjavaju kao početnici — već precizno i kontekstualno.

**d) Smanjenje halucinacija** — Uloga djeluje kao prirodno ograničenje koje sužava prostor za improvizaciju.

## 5. Primjena u realnim sistemima

- **AI OS** — Svaki modul ima svoju ulogu (zdravlje, fokus, strategija, automatizacija).
- **RAG sistemi** — "Researcher mode", "citation mode", "analyst mode".
- **Pisanje knjiga** — Uloga urednika ili recenzenta drastično poboljšava kvalitet.
- **n8n workflowi** — Precizna uloga sprječava pogrešne instrukcije.
- **Medicina i nauka** — Uloga stručnjaka smanjuje greške i povećava pouzdanost.

## 6. Praktičan primjer

**Bez uloge:** Površno, općenito, neupotrebljivo.

**Sa ulogom:**

Prompt: "Preuzmi ulogu kardiologa. Objasni šta je LDL-holesterol. Koristi stručan, ali jasan ton. Bez metafora."

Output: "LDL-holesterol predstavlja lipoproteinsku česticu niske gustoće odgovornu za transport holesterola iz jetre ka perifernim tkivima. Povišene koncentracije LDL-a ubrzavaju aterosklerotski proces, naročito kod prisutne oksidacije LDL čestica. Optimalno upravljanje LDL-em ključno je za smanjenje ukupnog kardiovaskularnog rizika."

## 7. Sažetak lekcije

Role-Based Prompting dodjeljuje AI-ju **identitet** kako bi odgovarao kao stvarni stručnjak.

Ovaj pattern omogućava:

- konzistentnost,
- stručnu dubinu,
- preciznost,
- realističan profesionalni nivo,
- znatno manju improvizaciju.

To je jedan od **najvažnijih alata naprednog rada sa AI-jem** i temelj svakog ozbiljnog sistema.
