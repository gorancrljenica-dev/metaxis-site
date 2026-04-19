# Feedback signali: učenje bez treniranja

*(kako AI "uči" bez promjene modela)*

## 1. Ključna istina koju većina pogrešno shvata

AI sistemi **ne moraju biti trenirani** da bi se poboljšavali.

U profesionalnim sistemima:
- **model ostaje isti**
- **ponašanje se mijenja**

To se postiže kroz **feedback i reward signale**, ne kroz fine-tuning.

Ako ovo ne razumiješ:
- miješaš RLHF sa runtime kontrolom
- precjenjuješ "učenje"
- praviš krhke agente

## 2. Šta feedback JESTE (a šta NIJE)

### Feedback nije:
- ponovno treniranje
- trajna promjena modela
- "pamćenje razgovora"

### Feedback jeste:
- signal kvaliteta
- kontrola ponašanja
- korekcija toka
- ulaz za loop odluke

Feedback utiče **na sljedeći korak**, ne na model.

## 3. Reward signal – minimalna, ali moćna informacija

Reward signal je **jednostavan pokazatelj uspjeha ili neuspjeha**.

Primjeri:
- ✔️ / ❌
- score 0–1
- confidence level
- pass / fail
- user accept / reject

Nije objašnjenje.
Nije analiza.
Samo **signal**.

## 4. Zašto je jednostavan signal bolji od "pametnog"

Što je signal:
- kraći
- jasniji
- binarniji

→ to je sistem stabilniji.

Kompleksni feedback:
- zbunjuje agent
- uvodi kontradikcije
- kvari loop

Profesionalni sistemi **razdvajaju**:
- signal (reward)
- objašnjenje (log)
- korekciju (plan)

## 5. Gdje se feedback koristi u Agent Loop-u

U standardnom loop-u:
1. **Think** – agent planira
2. **Act** – agent izvršava
3. **Verify** – rezultat se provjerava
4. **Reward / Feedback** – dodjeljuje se signal
5. **Adjust** – agent prilagođava sljedeći korak

Bez feedbacka, loop je slijep.

## 6. Learning without Training – šta se ZAISTA dešava

AI "uči" tako što:
- mijenja **strategiju**
- mijenja **redoslijed koraka**
- mijenja **šablone**
- mijenja **pravila aktivacije**

Model ostaje isti.
Ponašanje evoluira.

Ovo je **runtime learning**, ne model learning.

## 7. Standardni Feedback & Reward Template

```
Task Outcome:
- Expected result:
- Actual result:

Evaluation:
- Success criteria met? (yes/no)
- Major errors detected? (yes/no)
- Format respected? (yes/no)

Reward Signal:
- Score: (0–1) or (pass/fail)
- Confidence level:
- Action recommendation:
  - repeat
  - adjust
  - escalate
```

Bez ovog → agent nema mjeru uspjeha.

## 8. Feedback ≠ Memory

Ovo je kritično.
- **Feedback** → utiče na *sljedeći korak*
- **Memory** → utiče na *buduće sesije*

Većina feedbacka **nikada ne ide u memory**.
Samo agregirani, stabilni obrasci mogu.

## 9. Primjer: n8n + AI agent

Agent generiše JSON.
- JSON validan → reward = pass
- JSON slomljen → reward = fail

Sljedeći pokušaj:
- agent mijenja strategiju
- pojačava constraint
- smanjuje kreativnost

Nema treniranja.
Sistem se ipak poboljšava.

## 10. Primjer: medicinski decision-support

Ako:
- preporuka odstupa od smjernica → fail
- terminologija netačna → fail
- izvor nije naveden → fail

Agent prilagođava:
- stil
- dubinu
- provjere

Ne "uči medicinu".
Uči **kako da se ponaša u sistemu**.

## 11. Najčešća greška

"Daj detaljan feedback da AI bolje nauči"

Ne.

AI treba:
- jasan signal
- stabilan kriterij
- konzistentnu evaluaciju

Detalji idu u **log**, ne u reward.

## 12. Sažetak lekcije

- Feedback ≠ training
- Reward ≠ objašnjenje
- Učenje se dešava kroz **kontrolu ponašanja**
- Model ostaje isti
- Sistem postaje bolji

Ovo je osnova:
- agent stabilnosti
- enterprise AI
- medicinskih sistema
- automatizacija bez halucinacija
