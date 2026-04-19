# Napredni menu sistemi: od izbora do agent menija

## Uvod

U prethodnoj lekciji vidjeli smo kako **Menu Action Pattern** ograničava AI i daje mu jasne opcije za djelovanje. To je bio prvi korak ka kontroli.

Ali stvarni problemi ne stanu u jedan meni.

U stvarnom radu:

- zadaci imaju faze
- odluke imaju posljedice
- jedna akcija otvara potrebu za sljedećom

Tu prestaje "meni kao lista" i počinje **meni kao sistem**.

Ova lekcija objašnjava kako se jednostavan Menu Action Pattern razvija u:

- **Advanced Menu** (višeslojni meniji)
- **AI Agent Menu System** (trajni sistem odlučivanja)

Ovdje AI više ne "odgovara". Ovdje AI **učestvuje u procesu**.

## Od osnovnog menija do naprednog menija

Osnovni Menu Action Pattern izgleda ovako:

> "Izaberi jednu od ponuđenih akcija."

To je korisno — ali ograničeno.

**Advanced Menu** uvodi hijerarhiju i stanje:

- meniji zavise od prethodnih izbora
- nisu sve opcije uvijek dostupne
- izbor u jednoj fazi utiče na narednu

Drugim riječima: AI ne bira samo *šta* radi — nego *kada* i *zašto*.

## Osnovni Menu Action Pattern (core)

Struktura je jednostavna:

```
Menu of Actions:
1. [akcija 1]
2. [akcija 2]
3. [akcija 3]
4. [akcija 4]

User will choose one number. Perform only that action.

Input:
[tekst]
```

Tri pravila:

1. Akcije moraju biti glagoli + rezultat.
2. Samo jedna akcija.
3. Input ide na kraj.

## Advanced Menu Pattern

Advanced Menu Pattern je proširenje osnovnog menija u **višefazni sistem odluka**.

Umjesto jedne liste opcija, imaš:

- glavni meni (high-level odluke)
- podmenije (specifične akcije)
- uslove prelaska (pravila toka)

Primjer logike:

- Ako je zadatak "analiza" → prikaži analitički meni
- Ako je zadatak "pisanje" → prikaži kreativni meni
- Ako nema dovoljno informacija → aktiviraj FIP meni

AI se tada ponaša kao operater koji zna koji alat smije koristiti u kojoj fazi.

Primjer strukture:

```
Menu of Actions:
1. Analyze
   - 1a. Find weaknesses
   - 1b. Find contradictions
2. Transform
   - 2a. Rewrite clearly
   - 2b. Rewrite persuasively
3. Generate
   - 3a. Create a plan
   - 3b. Create a checklist
4. Automate
   - 4a. Suggest n8n nodes
   - 4b. Suggest Notion structure

Rules:
- User selects one code (e.g., 2a).
- Perform only that action.
- If unclear, ask a clarifying question.

Input:
[tekst]
```

## Menu Pattern za AI Agente (Agent Decision Matrix)

Ovo je najjača verzija. Ovdje ne biraš ti — bira AI agent. Ali ti ga učiš *kako* da bira.

```
Agent Menu (choose one based on the user goal):
1. Understand
   - Summarize
   - Identify problem
   - Detect missing info
2. Plan
   - Create steps
   - Propose workflow
   - Define required tools
3. Act
   - Generate content
   - Transform text
   - Produce structured data
4. Verify
   - Evaluate quality
   - Find errors
   - Improve clarity
5. Next Step Logic
   - Choose the optimal next action
   - Explain why
   - Perform it

Rules:
- Agent must choose one action per cycle.
- Agent must justify the choice in one sentence.
- Output must match the action.
- If the goal is not clear → go to Step 1 (Understand).

Input:
[user request]
```

Ovo je **decision brain** za AI. Prava inteligencija nastaje tek kada agent može da bira **šta je najbolji sljedeći korak**.

## Kako nastaje AI Agent Menu System

AI Agent Menu System ide korak dalje. On podrazumijeva da:

- AI **pamti stanje zadatka**
- zna u kojoj se fazi nalazi
- zna koje su akcije dozvoljene u toj fazi
- zna kada mora stati i tražiti input

To više nije prompt. To je **pravilo ponašanja kroz cijelu sesiju**.

U tom sistemu:

- meniji nisu jednokratni
- oni su **trajni kontrolni mehanizam**
- AI ne izlazi iz uloge bez dozvole

Zato govorimo o *agentu*, a ne o odgovoru.

## Kratka analogija

Zamisli da zapošljavaš asistenta.

Bez menija — pita te za sve, stalno.
Sa menijem — zna koje poslove radi.
Sa **agent menu sistemom** — zna šta mu je posao, kada da te pita, kada da djeluje sam.

To je razlika između pomoćnika i agenta.

## Sažetak

- **Menu Action Pattern** daje izbor
- **Advanced Menu** uvodi strukturu i faze
- **AI Agent Menu System** uvodi stanje, pravila i kontinuitet

Ovdje AI prestaje biti alat za odgovore i postaje **kontrolisan misaoni sistem**.
