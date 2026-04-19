# Alati: izbor akcije i izvršenje

*Kada, zašto i kako agent koristi alate — a kada ne smije*

## 1. Zašto je Tool Use prelomna tačka

Agent bez alata je **ograničen na vlastiti kontekst**. On može razmišljati, kombinovati informacije, provjeravati logiku — ali **ne može proširiti stvarnost**.

Onog trenutka kada agent dobije mogućnost da: pretraži bazu, pozove API, pročita fajl, izvrši izračun, zapiše ili pročita stanje — AI prestaje biti "jezički model" i postaje **operativni agent**.

Tool Use je razlika između *razmišljanja o svijetu* i *interakcije sa svijetom*.

## 2. Šta zapravo znači "Action Selection"

Action Selection nije tehnički detalj. To je **odlučivanje**.

Agent u svakom loop-u mora odgovoriti na pitanje: "Da li mi je potreban alat — ili mogu nastaviti bez njega?"

Loš agent: koristi alate prerano, koristi ih nepotrebno, koristi pogrešan alat, ne provjerava rezultat.

Dobar agent: koristi alat **samo kad ima razlog**, zna *zašto* ga koristi, zna *šta očekuje* kao rezultat, zna *kada da stane*.

## 3. Mentalni model: Think → Decide → Act

U kontekstu alata, loop se precizira:

1. **Think** – šta mi trenutno nedostaje?
2. **Decide** – da li mi treba alat ili ne?
3. **Act** – izvrši *jednu* alat-akciju
4. **Verify** – provjeri da li je alat dao koristan rezultat

Ako agent ne zna odgovoriti na **Decide** — nije agent, nego automat bez kontrole.

## 4. Kada agent NE SMIJE koristiti alat

Agent **ne smije** koristiti alat ako:

- već ima dovoljno informacija,
- zadatak je čisto konceptualan,
- alat ne povećava tačnost,
- alat bi dodao šum ili rizik,
- rezultat se ne može validirati.

Svako korištenje alata u tim situacijama je **signal lošeg dizajna**.

## 5. Kada agent MORA koristiti alat

Agent **mora** koristiti alat kada:

- radi sa podacima koje ne zna,
- mora provjeriti činjenice,
- mora obraditi fajl ili tabelu,
- mora izvršiti izračun,
- mora dohvatiti stanje sistema,
- mora zapisati rezultat.

Primjeri: RAG pretraga, OCR analiza slike, CSV / Excel analiza, API validacija.

Ako agent ne koristi alat u ovim situacijama — on halucinira.

## 6. Tool Use kao ugovor, ne kao sloboda

Alat nije "opcija". Alat je **ugovor**.

Kada agent koristi alat, mora znati:

- ime alata,
- ulazne parametre,
- očekivani output,
- format rezultata,
- kriterije uspjeha.

## 7. Standardni Tool Use Prompt Template

```
You are operating as an AI agent with access to tools.

At each step, follow this logic:

1. THINK:
   - Identify what information or capability is missing.
   - Determine if a tool is required.

2. DECIDE:
   - If no tool is needed, continue reasoning.
   - If a tool is needed, select exactly one appropriate tool.
   - Clearly state why this tool is required.

3. ACT:
   - Execute the selected tool with explicit input parameters.
   - Perform only one tool action.

4. VERIFY:
   - Evaluate the tool output.
   - Confirm whether it satisfies the requirement.
   - If not, adjust strategy or select a different tool.

Rules:
- Never use a tool without justification.
- Never chain tools in one step.
- Always verify tool output before continuing.
```

## 8. Najčešće greške kod Tool Use-a

- ❌ alat se koristi "za svaki slučaj"
- ❌ više alata u jednoj akciji
- ❌ nema provjere rezultata
- ❌ alat se koristi umjesto razmišljanja
- ❌ agent ne zna kada da stane

## 9. Sažetak lekcije

Tool Use nije tehnička sitnica. To je **odgovornost agenta**.

Agent koji zna: kada da koristi alat, kada da ne koristi, kako da validira rezultat — je agent koji može raditi **samostalno i pouzdano**.

Bez ovoga, svi agent sistemi ostaju demonstracije. Sa ovim — postaju **stvarni sistemi**.
