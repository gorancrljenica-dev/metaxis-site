# Managing Context: Working Within the Context Window (CWO)

## 1. Uvod u Context Window Optimization (CWO)

Context Window predstavlja *koliko informacija model može držati u glavi odjednom*.
- GPT-ovi imaju određeni broj tokena.
- Ako ubaciš previše teksta → važne informacije se izgube.
- Ako ubaciš premalo → model nema dovoljno konteksta.

**CWO (Context Window Optimization)** je tehnika optimizacije sadržaja koji model prima kako bi radio:
- pametnije,
- tačnije,
- stabilnije,
- brže.

Bez CWO → AI se zbuni, halucinira, gubi nit, miješa teme, promašuje suštinu.
Sa CWO → AI radi kao hirurg — precizno, fokusirano, efikasno.

## 2. Zašto je CWO važan?

Jer modeli NE RAZUMIJU sav tekst jednako.

Oni rade prema prioritetu:
1. zadnje što pročitaju → NAJVAŽNIJE
2. sredina → veoma lako gubi važnost
3. početak → gubi se na dugim inputima

CWO rješava:
- gubitak fokusa AI-ja,
- brisanje važnih detalja,
- kontradiktorne odgovore,
- halucinacije kod dugih promptova,
- probleme sa dužinom kod RAG sistema.

Ako praviš:
- AI asistenta
- AI OS
- RAG
- Workflowe u n8n
- ChatGPT Custom GPT
- knjižni sistem u Notionu/Obsidianu
- CI/CD dokumentacijski AI

→ ovo je must-have znanje.

## 3. Standardni CWO Prompt Template

U svim budućim odgovorima koristi sljedeći pristup:

1. **Identifikuj ključne informacije** (najvažnijih 10–20%).
2. **Sažmi nebitne informacije** u kratke linije.
3. **Strukturiraj sadržaj** (sekcije, liste, tabele).
4. **Prioritiziraj kritične elemente** na početku prompta.
5. **Ukloni redundantne dijelove**.
6. **Dodaj short-memory recap** za dugotrajne procese.
7. **Razdvoji prompt u logičke blokove.**

Ovo omogućava modelu da razumije *tačno ono što treba*, a ne sve što si mu poslao.

## 4. Interna logika CWO procesa

CWO se zasniva na tri glavna mehanizma:

### a) Hierarchical Relevance (hijerarhija važnosti)

Model rangira informacije:
1. najvažnije → imperativ
2. srednje → kontekst
3. nebitne → ignorira

Ti kao autor moraš kontrolisati ovaj rang.

### b) Compression (kompresija)

Duge sekcije se skraćuju u:
- bullet list
- sažetak
- ključne stavke
- numeričke vrijednosti
- ultrasažeti format

### c) Chunking (segmentacija)

Informacije se dijele u male "pakete" koje model može pratiti.
Svaka ozbiljna AI arhitektura mora koristiti chunking.

## 5. Kada se koristi CWO?

**Obavezno** u sljedećim situacijama:
- RAG sistemi (dokumenti + AI)
- n8n workflowi (dugi JSON-i, tehnički inputi)
- AI OS daily logs (mnogo teksta svaki dan)
- veliki Notion/Obsidian fajlovi
- knjige, eBookovi, dugi eseji
- ChatGPT custom GPT memorija
- kod debug output (predugački logovi)
- svi sistemi gdje AI treba razumjeti historiju događaja

Ako AI daje kontradiktorne ili zbunjene odgovore → kriv je loš CWO.

## 6. Primjer CWO u praksi

Zadatak:
"Daj mi strategiju za AI OS zasnovanu na mojim 20 prethodnih dnevnih zapisa."

Bez CWO → AI će:
- izgubiti fokus,
- pogrešno grupisati informacije,
- ignorisati polovinu zapisa.

Sa CWO → AI će:
1. Sažeti svaki zapis na 3–5 ključnih stavki
2. Identificirati obrasce u ponašanju
3. Rangirati probleme po prioritetu
4. Donijeti strategiju u 5 tačaka
5. Napraviti akcijski plan

CWO mijenja sve.

## 7. CWO u RAG sistemima (ultra važno)

Ako uneseš:
- previše teksta → model ignorira pola
- premalo teksta → model nema dovoljno informacija
- loše odabrane fragmente → model griješi

CWO omogućava:
- pravilno biranje chunkova
- pravilnu dužinu chunkova
- pravilno spajanje konteksta
- optimalno korištenje embeddinga

Najbolji RAG-ovi nisu oni sa najviše podataka —
nego oni sa NAJBOLJE OPTIMIZOVANIM kontekstom.

## 8. Sažetak lekcije

Context Window Optimization (CWO) je tehnika upravljanja i optimizacije količine informacija koje AI model može obraditi istovremeno.

Omogućava:
- bolju tačnost,
- manje halucinacija,
- stabilnije odgovore,
- efikasnije RAG sisteme,
- pametnije AI asistente.

CWO je ključno znanje u modernom AI dizajnu i jedan od temelja svake ozbiljne primjene.

Bez CWO — AI je nepouzdan.
Sa CWO — AI je profesionalac.
