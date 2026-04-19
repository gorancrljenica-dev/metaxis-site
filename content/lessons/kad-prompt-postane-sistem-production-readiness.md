# Kad prompt postane sistem: production readiness

*Kada prompt prestaje biti trik i postaje sistem*

## 1. Šta znači "production-ready" u AI kontekstu

Prompt nije production-ready zato što:
- daje dobar odgovor jednom,
- zvuči pametno,
- izgleda elegantno.

Prompt je production-ready kada:
- daje **konzistentan output**,
- radi **bez tebe u petlji**,
- preživljava loš input,
- ne halucinira pod pritiskom,
- zna kada **ne smije odgovoriti**,
- može biti dio **sistema**.

Production readiness ≠ pametan prompt
Production readiness = **pouzdano ponašanje**

## 2. Evolucija: od prompta do sistema

Realna hijerarhija izgleda ovako:
1. **Single prompt** → ručni eksperiment
2. **Pattern-based prompt** → kontrola ponašanja
3. **Multi-pattern orchestration** → stabilnost
4. **Guardrails + validation** → sigurnost
5. **Agent loops + control flow** → autonomija
6. **Production system** → povjerenje

Ako nešto preskočiš — sistem će ti to naplatiti kasnije.

## 3. Checklista: da li je nešto production-ready

Ovo je **nepregovarljiva lista**.

### Kontrola ponašanja
- koristi pattern(e), ne slobodan tekst
- zna koji misaoni režim je aktivan

### Validacija
- provjerava vlastiti output
- ima Self-Correction ili WRI loop

### Ograničenja
- koristi constraint-based prompting
- format je stabilan (JSON / tabela)

### Sigurnost
- ima guardrails
- ima hard stop uslove

### Kontinuitet
- ponašanje je isto danas i sutra
- nije zavisno od "dobrog pitanja"

Ako makar jedna stavka fali → **nije produkcija**.

## 4. Najčešća iluzija (i zašto projekti propadaju)

Iluzija:
> "Radi savršeno kod mene."

Realnost:
- produkcija = loš input
- produkcija = nejasni zahtjevi
- produkcija = pogrešan redoslijed
- produkcija = stres test

AI koji radi samo kad je sve idealno → **nije AI sistem**.

## 5. Production prompt ≠ lijep prompt

Lijep prompt:
- čitljiv
- inspirativan
- kreativan

Production prompt:
- dosadan
- striktan
- repetitivan
- "težak"

Ali:
- ne puca
- ne improvizuje
- ne izmišlja

U produkciji **ljepota je bug**, ne feature.

## 6. Standardni Production Prompt Skeleton

```
System Scope:
- Define domain and responsibility boundaries

Active Patterns:
- List explicit patterns in use

Constraints:
- Format, length, content limits

Validation:
- Self-check / verification step

Guardrails:
- Hard rules
- Hard stop conditions

Output Contract:
- Exact structure
- No additional text

Failure Mode:
- What to do if output cannot be generated
```

Ako tvoj prompt nema sve ovo → **još je igračka**.

## 7. Razlika: demo vs produkcija

| Demo | Produkcija |
|------|------------|
| Jedan primjer | Svi primjeri |
| Ručna korekcija | Autonomna korekcija |
| "Izgleda pametno" | "Radi uvijek" |
| Tolerira greške | Ne smije |

## 8. Production mindset (ovo je najvažnije)

U produkciji:
- **nemaš povjerenje u model**
- vjeruješ samo sistemu
- sve što može poći po zlu → hoće
- "ne znam" je validan output

Ovo nije pesimizam.
Ovo je **inženjerska realnost**.

## 9. Kako ova knjiga treba da se koristi

Ovo **nije**:
- lista trikova
- prompt cheat-sheet
- "10 načina da…"

Ovo **jeste**:
- misaoni okvir
- sistemski alat
- osnova za AI OS
- temelj za agente, RAG, n8n, CDS, produkciju

Ako čitalac samo kopira promptove → promašio je poentu.
Ako razumije obrasce → ima moć.

## 10. Završna istina

AI nije opasan jer je pametan.
Opasan je jer **ljudi vjeruju outputu bez sistema**.

Ova knjiga postoji da to spriječi.

## 11. Završni sažetak knjige

- Prompting nije pisanje — nego **kontrola ponašanja**
- Patterni nisu trikovi — nego **mentalni modovi**
- Agent nije bot — nego **kontrolisana petlja**
- Guardrails nisu ograničenje — nego **sigurnost**
- Produkcija ne traži kreativnost — nego **disciplinu**

Ako si došao do ovdje →
razmišljaš **sistemski**, ne korisnički.
