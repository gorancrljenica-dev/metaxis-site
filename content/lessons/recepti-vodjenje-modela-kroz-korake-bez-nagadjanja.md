# Recepti: vođenje modela kroz korake bez nagađanja

## Uvod

Jedan od najčešćih razloga zašto AI daje neujednačene rezultate je to što mu zadatak djeluje jasan — ali proces nije. Model zna *šta* treba uraditi, ali ne zna *kako tačno* da dođe do rezultata.

Recipe Pattern rješava upravo taj problem.

Ovaj pattern tretira prompt kao **recept**: niz jasno definisanih sastojaka i koraka koji vode do predvidivog ishoda. Umjesto da se oslanjaš na improvizaciju modela, ti mu daješ strukturu rada — redoslijed, tempo i očekivani završetak.

Drugim riječima, AI ne "kuha po osjećaju". On slijedi recept.

## Šta je Recipe Pattern i zašto je važan

Recipe Pattern je prompting pristup u kojem zadatak razlažeš na **jasne, numerisane korake**, slično receptu za jelo. Svaki korak ima svoju funkciju i prirodno vodi u sljedeći.

Recipe Pattern **ne ograničava kreativnost**, nego uklanja konfuziju.

Bez recepta, AI često:

- preskače važne korake
- miješa analizu i zaključak
- daje odgovor prije nego što je "obradio" problem

Sa receptom, model:

- zna kojim redoslijedom razmišlja
- ostaje fokusiran na zadatak
- proizvodi stabilne i ponovljive rezultate

Zato je ovaj pattern posebno koristan kada želiš **dosljednost**, a ne iznenađenja.

## Kako Recipe Pattern funkcioniše u praksi

Recipe Pattern se obično sastoji od tri do pet koraka. Primjer osnovne strukture izgleda ovako:

1. **Analiza zadatka** — Model jasno definiše šta je problem i koje su ključne varijable.
2. **Prikupljanje ili organizacija informacija** — Razdvaja relevantne od nerelevantnih podataka.
3. **Obrada / razrada rješenja** — Povezuje informacije u smislen tok.
4. **Finalni rezultat** — Daje jasan, sažet i upotrebljiv odgovor.
5. *(Opcionalno)* **Provjera ili poboljšanje** — Model kratko provjerava da li je rezultat u skladu s ciljem.

Ovaj redoslijed nije krut, ali **redoslijed mora postojati**. Bez njega, AI se vraća nagađanju.

## Primjer Recipe Pattern prompta

```
Koristi Recipe Pattern.

1. Prvo analiziraj moj zahtjev i sažmi šta tačno treba uraditi.
2. Zatim identifikuj ključne informacije koje su potrebne.
3. Nakon toga razradi rješenje korak po korak.
4. Na kraju daj jasan i praktičan finalni odgovor.
```

Ovim promptom ti:

- vodiš model kroz proces
- sprečavaš preskakanje faza
- dobijaš odgovor koji ima unutrašnju logiku

Ako želiš dodatnu kontrolu, Recipe Pattern se lako kombinuje sa drugim obrascima, npr.:

- **Recipe + CVP** (na kraju provjera logike)
- **Recipe + Template Pattern** (strukturisan izlaz)

## Sažetak

Recipe Pattern uči AI da **radi po procesu, ne po osjećaju**. Umjesto brzih, često površnih odgovora, dobijaš stabilan tok razmišljanja koji vodi do jasnog rezultata. Kada ti je važna pouzdanost, ponovljivost i kontrola — ovaj pattern postaje nezamjenjiv.
