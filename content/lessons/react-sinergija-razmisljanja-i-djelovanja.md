# ReAct — sinergija razmišljanja i djelovanja

## Uvod

Chain-of-Thought uči AI da razmišlja. ReAct ide korak dalje — uči ga da **razmišlja i djeluje**.

ReAct (Reason + Act) je paradigma u kojoj model ne ostaje zatvoren u vlastitom rezonovanju, nego koristi spoljašnje izvore da provjeri i nadogradi svoje zaključke.

Ukratko: **Think → Act → Observe → Repeat.**

## Kako ReAct funkcioniše

ReAct se odvija kroz petlju:

1. **Thought** — model izražava misao ili hipotezu
2. **Action** — izvršava vanjsku radnju (pretraga, API, alat)
3. **Observation** — dobija rezultat akcije
4. **Loop** — koristi rezultat da formira novu misao

Ova povratna petlja smanjuje halucinacije i povećava tačnost.

Model ne ostaje "zatvoren u glavi" (kao u Chain-of-Thought), nego koristi vanjski svijet (API-je, baze, okruženja) da provjeri i nadogradi svoje zaključke.

### Konkretni primjer toka

1. **Thought** → model izražava unutrašnje rezonovanje: "Moram pronaći hotel gdje je održan show Mystère."
2. **Action** → izvršava vanjsku radnju: "Search[Cirque du Soleil Mystère]"
3. **Observation** → dobija rezultat akcije: "Mystère is held at Treasure Island Hotel and Casino."
4. **Loop** → koristi posmatranje da generiše sljedeću misao: "Znači, trebam potražiti broj soba u tom hotelu."

Ova petlja misli i akcija stvara dinamičan tok učenja i odlučivanja.

## Ključne prednosti

| Aspekt | Klasični CoT | ReAct |
|--------|-------------|-------|
| Razmišljanje | Samo unutar modela | Kombinacija unutrašnjeg i spoljašnjeg |
| Ažurnost informacija | Ograničena na trening podatke | Može pretraživati real-time izvore |
| Halucinacije | Česte | Znatno smanjene |
| Transparentnost | Ograničena | Svaka odluka ima trag |
| Primjena | Tekstualni zadaci | Q&A, igre, web-navigacija, agenti |

## Zašto je ReAct važan

U poređenju sa klasičnim CoT-om:

- CoT razmišlja samo unutar modela
- ReAct kombinuje unutrašnje razmišljanje i spoljašnje provjere
- svaka odluka ima trag (misao → akcija → rezultat)

Zbog toga je ReAct osnova za:

- AI agente
- web-navigaciju
- alate koji komuniciraju s realnim sistemima

Istraživanja (HotpotQA, WebShop, ALFWorld) potvrđuju veću tačnost i manju sklonost halucinacijama.

## Sažetak

ReAct omogućava LLM-u da **misli kao čovjek i uči kroz djelovanje**. To ga pretvara iz pasivnog generatora teksta u aktivnog, provjerljivog agenta.
