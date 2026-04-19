# Flipped Interaction: kad AI vodi intervju umjesto tebe

## Uvod

Ponekad problem nije u tome da AI nema dobar odgovor — nego u tome da ti nemaš dovoljno jasno definisan zahtjev.

Znaš otprilike šta želiš, ali ne znaš:

- koje informacije su zaista bitne,
- šta sve utiče na krajnji rezultat,
- kako da pitanje postaviš tako da AI ne nagađa.

Flipped Interaction Pattern postoji upravo za takve situacije.

## Šta je Flipped Interaction Pattern

Flipped Interaction Pattern (FIP) je tehnika u kojoj **AI preuzima inicijativu u razgovoru**.

Umjesto da odmah izvrši tvoju komandu, AI:

- postavlja pitanja,
- razjašnjava kontekst,
- testira pretpostavke,
- prikuplja informacije,

sve dok ne stekne dovoljno razumijevanja da može dati **precizan, kontekstualno tačan i upotrebljiv odgovor**.

Drugim riječima, uloge su zamijenjene:

- ti postaješ izvor podataka,
- AI postaje istraživač, analitičar ili mentor.

Zbog ove zamjene uloga, obrazac se zove *flipped*.

## Kako se pravi prompt

Osnovna struktura Flipped Interaction prompta izgleda ovako:

```
I would like you to ask me questions to achieve [X].
You should keep asking questions until [Y] is met.
(Optional) Ask me one question at a time. Ask me the first question.
```

Gdje:

- **[X]** predstavlja tvoj cilj (npr. plan, strategiju, tekst, analizu)
- **[Y]** predstavlja uslov prestanka (trenutak kada AI ima dovoljno informacija da može dati kvalitetan odgovor)

Ovim promptom **zabranjuješ AI-ju da žuri s rješenjem**. On prvo mora razumjeti problem.

## Primjeri iz prakse

**Primjer 1 — trening plan**

> "I would like you to ask me questions to help create a weekly training plan.
> Ask questions until you know my fitness level, schedule, and recovery goals.
> Ask one question at a time."

**Primjer 2 — email sekvenca**

> "I would like you to ask questions to help me write an email sequence.
> Ask questions until you understand my audience and tone.
> Start with the first question."

U oba primjera, AI **ne nudi rješenje odmah**. Prvo gradi kontekst — kao dobar konsultant ili trener.

## Gdje se FIP koristi najčešće

Flipped Interaction Pattern je posebno koristan:

- kada znaš *šta želiš*, ali ne znaš kako to precizno definisati
- kada želiš da AI vodi brainstorming proces
- kod personalizovanih planova, strategija i tekstova
- kada je kontekst važniji od brzine odgovora
- kada ne želiš generičke savjete

Ovo je pattern za situacije u kojima je **razumijevanje važnije od brzine**.

## Analogija

Zamisli da AI nije pomoćnik koji čeka komandu, nego **intervjuer**.

Postavlja prava pitanja:

- o tebi,
- o cilju,
- o ograničenjima,
- o prioritetima,

sve dok ne shvati tvoju situaciju. Tek tada daje odgovor koji zaista *pogađa u centar*.

## Primjer gotovog prompta

```
I would like you to ask me questions to design a personalized content strategy.
Ask me questions until you fully understand my target audience, content goals, and tone of communication.
Ask one question at a time. Ask me the first question.
```

Ovim promptom praktično kažeš AI-ju: **"Ne pretpostavljaj. Prvo me upoznaj."**

## Mini vježba

Isprobaj sljedeće:

```
I would like you to ask me questions to improve the clarity and tone of my LinkedIn bio.
Keep asking until you fully understand my audience, purpose, and professional tone.
Ask one question at a time. Start now.
```

Primijeti kako se razgovor ponaša drugačije nego kod klasičnog prompta.

## Sažetak

Flipped Interaction Pattern preokreće uloge u razgovoru.

AI postavlja pitanja — ti daješ kontekst.

Rezultat nisu brzi odgovori, nego **precizni, relevantni i stvarno upotrebljivi outputi**, prilagođeni tvojoj konkretnoj situaciji.
