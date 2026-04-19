# Game-play: misaona igra za dolaženje do cilja

## Uvod

Kada AI dobije složen zadatak, najveći problem nije nedostatak znanja — nego gubitak fokusa. Model često krene dobro, ali se putem razvuče, skrene s cilja ili završi u opštem objašnjavanju bez jasnog ishoda.

Game Play Pattern postoji da bi se to spriječilo.

Ovaj pattern tretira zadatak kao **misaonu igru** sa jasnim ciljem, pravilima i fazama. Model se ne ponaša kao generator teksta, nego kao igrač koji zna:

- šta pokušava postići
- po kojim pravilima igra
- kada je "pobjeda" ostvarena

## Kako Game Play Pattern funkcioniše

Game Play Pattern se sastoji od nekoliko međusobno povezanih elemenata:

**Cilj (Goal)**

Na početku se jasno definiše šta znači uspješan ishod. Bez toga, model nema mjerilo kvaliteta.

Primjer cilja: objasniti pojam tako da ga razumije i srednjoškolac.

**Pravila (Rules)**

Ovdje postavljaš ograničenja ponašanja: ton, stil, zabrane i prioritete.

Primjeri:
- ne koristi žargon
- izbjegavaj duge rečenice
- budi konkretan i jasan

**Faze (Phases)**

Razmišljanje se dijeli u korake kako bi se izbjeglo preskakanje logike.

Tipičan tok:
- Faza 1: shvati problem
- Faza 2: razradi mogućnosti
- Faza 3: zaključi i sažmi

**Strategija (Strategy)**

Definiše "stil igre" — kako model pristupa zadatku.

Primjeri strategija:
- analitička (razlaže i povezuje)
- eksperimentalna (testira više rješenja)
- reflektivna (povezuje s iskustvom i analogijama)

**Povratna petlja (Feedback Loop)**

Na kraju svake runde model provjerava:
- da li je cilj postignut
- da li je odgovor koristan i tačan
- da li treba novi pokušaj

## Primjer u praksi

Zamisli da želiš da AI objasni **Chain-of-Thought** početniku, ali da to ne bude suho objašnjenje.

Umjesto klasičnog prompta, koristiš Game Play Pattern:

> Play the "Game of Understanding."
>
> **Goal:** objasniti Chain-of-Thought kao jednostavnu edukativnu igru u tri runde.
>
> **Rules:** koristi jednostavan jezik, svaka runda gradi prethodnu, završi pitanjem.
>
> **Phases:** setup → play → win.
>
> **Style:** smiren, prijateljski, mentorski.

Rezultat je objašnjenje koje:
- ima jasan tok
- zadržava pažnju
- vodi čitaoca do "aha" momenta

AI ne improvizuje — on **igra igru do kraja**.

## Primjer prompta

```
Play the "Game of Understanding."
Your goal: Explain the concept of "Chain of Thought" to a beginner as if you're guiding them through a simple 3-round game.

Rules:
- Use plain language, no technical jargon.
- Each round must build on the previous one.
- End each round with a short question that makes the reader think.

Phases:
1. Setup – Introduce the idea.
2. Play – Show how it works step by step.
3. Win – Give a clear summary and "aha" moment.

Style:
Calm, friendly, and logical — like a mentor helping someone learn through curiosity, not memorization.
```

## Sažetak

Game Play Pattern pomaže AI-ju da razmišlja sa svrhom. Umjesto slobodnog lutanja kroz tekst, model ima cilj, pravila i strategiju. To ga čini posebno korisnim za edukaciju, objašnjavanje i vođenje korisnika kroz složene ideje.
