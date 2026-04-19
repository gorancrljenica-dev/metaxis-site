# Kombinovanje komandi: misaoni režimi i kontrola

## Uvod

Jedna od najvećih prednosti rada s patternima je to što ih ne moraš koristiti izolovano. U stvarnom radu, najkvalitetniji rezultati dolaze kada **kombinuješ više misaonih režima** unutar jednog prompta.

Umjesto da AI-ju kažeš samo *šta* da uradi, ti mu govoriš:

- kako da prikuplja informacije
- kako da razmišlja
- kako da provjeri vlastite zaključke

Svaka komanda postaje **jedan sloj u procesu razmišljanja**.

## Kako kombinovanje patterna funkcioniše u praksi

Osnovna logika kombinovanja izgleda ovako:

1. **FIP** — AI prvo prikuplja informacije od tebe kroz pitanja.
2. **RT** — zatim preformuliše i proširuje razumijevanje problema.
3. **CVP** — na kraju provjerava i koriguje vlastiti zaključak.
4. *(Opcionalno)* **CoVP** ili **SOP** — dodatna validacija ili struktura procesa.

Na ovaj način AI ne djeluje kao jedan model, nego kao **tim**: jedan pita, drugi analizira, treći provjerava.

## Primjeri kombinacija

| Kombinacija | Šta AI radi | Kada koristiti |
|-------------|-------------|----------------|
| **FIP + CVP** | AI te prvo ispituje da bi razumio cilj, zatim sam provjerava finalni odgovor. | Kada nisi siguran kako da definišeš zadatak ili cilj. |
| **RT + CVP** | AI preformuliše pitanje iz više uglova, zatim testira logiku svakog rješenja. | Kada želiš bolji, precizniji ili dublji uvid u temu. |
| **EXP + SOP + CVP** | AI govori kao ekspert, objašnjava korak-po-korak i provjerava svaki korak. | Kada želiš edukativni, strukturisan i provjeren tekst. |
| **FIP + RT + CoVP** | AI postavlja pitanja, preformuliše koncept iz više perspektiva i validira sve slojeve. | Kada praviš kompleksne projekte (AI sistemi, workflowi, planovi). |

## Praktičan primjer

Prompt koji kombinuje **FIP + CVP**:

```
Koristi FIP + CVP.
Pomogni mi da napravim strukturu edukativnog kursa o AI strategiji.
Postavljaj mi pitanja dok ne shvatiš moju publiku i ciljeve,
zatim sam provjeri i koriguj svoj finalni prijedlog prije nego što ga pošalješ.
```

Tok rada izgleda ovako:

1. AI te intervjuiše (FIP).
2. Sastavlja prijedlog kursa.
3. Provjerava vlastitu logiku prije isporuke (CVP).

Rezultat je strukturisan, kontekstualno tačan i samoproveren odgovor.

## Meta Combo Prompt Template (FIP + RT + CVP)

```
You are an advanced AI strategist and educator.

Use the Meta Combo Pattern (FIP + RT + CVP) to process my request.

1. Flipped Interaction (FIP):
   - Start by asking me targeted questions to fully understand my goal, audience, and context.
   - Ask one question at a time.
   - Continue until you are confident that you understand what I truly need.

2. Reframing Technique (RT):
   - Once you have enough context, reframe my topic or question from at least two different perspectives
     (e.g. conceptual, practical, creative, analytical).
   - Briefly explain your reasoning for each framing before continuing.

3. Cognitive Verifier Pattern (CVP):
   - After generating your main answer, verify your own reasoning by asking yourself:
       • Is this logically sound and contextually relevant?
       • Does it align with the information gathered during FIP?
       • Are there any unclear or weak points?
   - Refine and improve your answer based on that verification.

4. Final Output:
   - Present the verified and improved answer clearly and structured.
   - Add a short section at the end titled "Verification Notes"
     summarizing what you refined or corrected in your reasoning.
```

| Faza | Uloga | Rezultat |
|------|-------|---------|
| **FIP** | AI te "intervjuiše" da razumije cilj | Odgovor temeljen na stvarnim potrebama, ne pretpostavkama |
| **RT** | AI preformuliše temu i sagleda više uglova | Dublje razumijevanje i kvalitetniji sadržaj |
| **CVP** | AI provjerava svoj zaključak | Tačan, jasan i dosljedan izlaz |

## Sažetak

Kombinovanjem pattern-komandi učiš AI da **razmišlja u više slojeva** — da pita, analizira i sam se provjerava prije nego što govori. To je prelaz sa "promptanja" na **kontrolisano rezonovanje**.
