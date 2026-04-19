# Guardrails: sigurnosna pravila i hard stop

## 1. Zašto guardrails uopšte postoje

AI sistemi ne pucaju zato što su glupi.
Pucaju zato što **nemaju granice**.

Guardrails su **sistemska pravila ponašanja** koja određuju:
- šta AI smije,
- šta ne smije,
- kada mora stati,
- kada mora eskalirati,
- kada mora odbiti zadatak.

Bez guardrails-a:
- agent "ode predaleko",
- halucinacije postaju uvjerljive,
- sistem preuzima odgovornost koju ne smije imati.

## 2. Šta su guardrails (precizna definicija)

**Guardrails** su **nepregovarljiva pravila** koja ograničavaju ponašanje modela **bez obzira na prompt**.

Ona nisu:
- stil,
- ton,
- uloga.

Ona su:
- **sigurnosni okvir**
- **kontrola rizika**
- **pravna i etička barijera**
- **hard stop mehanizam**

## 3. Tri nivoa zaštite

### a) Soft guardrails (usmjeravanje)
- preporučeni ton
- preferirani format
- poželjni stil

➡️ mogu se prekršiti ako korisnik insistira

### b) Hard guardrails (zabrane)
- zabrana davanja medicinske terapije
- zabrana pravnih savjeta
- zabrana finansijskih preporuka
- zabrana izmišljanja podataka

➡️ **ne smiju se prekršiti**

### c) Hard stop (prekid)
- sistem **mora stati**
- nema odgovora
- nema "vjerovatno"
- nema nagađanja

➡️ samo objašnjenje zašto se ne može odgovoriti

## 4. Zašto su hard stopovi ključni

Najopasnija situacija:
> "AI skoro zna odgovor."

Tu nastaje halucinacija.

Hard stop se aktivira kada:
- nedostaju ključni podaci,
- kontekst je van domene,
- rizik greške je visok,
- odgovor bi bio nagađanje.

## 5. Razlika: guardrails vs constraints

Važno razdvajanje:
- **Constraints** → kako da odgovori
- **Guardrails** → *da li uopšte smije odgovoriti*

Constraints oblikuju odgovor.
Guardrails odlučuju **da li odgovor postoji**.

## 6. Standardni Guardrails Template

```
Safety Rules:
- Do NOT provide medical, legal or financial decisions
- Do NOT invent missing data
- Do NOT guess when information is incomplete

Hard Stop Conditions:
- Missing critical inputs
- Domain outside defined scope
- Conflicting sources without resolution
- Confidence below threshold

If any hard stop condition is met:
- Explicitly refuse to answer
- Explain why the answer cannot be given
- Suggest what information is required
```

Ovo je **nepregovarljivi dio sistema**, ne prompt trik.

## 7. Primjer: medical decision-support

Pitanje:
> "Koju terapiju da uvedem ovom pacijentu?"

Ako nema:
- EF
- eGFR
- K+
- terapijske istorije

Ispravan izlaz:
> "Ovaj sistem ne može dati terapijsku preporuku bez navedenih parametara."

Ne:
> "Uobičajeno se koristi…"

## 8. Primjer: n8n + API workflow

Ako je JSON:
- nepotpun
- pogrešno strukturiran

Hard stop:
> "Output cannot be generated. Required fields are missing."

Bez guardrails-a → workflow puca u produkciji.

## 9. Primjer: AI agent

Agent bez guardrails-a:
- sam odlučuje
- improvizuje
- prelazi granice

Agent sa guardrails-ima:
- zna kada da pita
- zna kada da stane
- zna kada da eskalira

Razlika između **demo bota** i **produkcionog sistema**.

## 10. Najčešće greške

- "Guardrails ubijaju fleksibilnost" → Guardrails spašavaju sistem
- "Korisnik želi odgovor po svaku cijenu" → Korisnik želi **pouzdan** odgovor
- "AI je pametan, snaći će se" → AI mora biti **kontrolisan**

## 11. Guardrails u AI OS arhitekturi

U ozbiljnom AI OS-u:
- guardrails su **iznad promptova**
- ne mogu se override-ovati
- vrijede za sve module
- važe i za agente

Bez toga → AI OS je igračka.

## 12. Sažetak lekcije

- Guardrails definišu granice
- Hard stops sprječavaju katastrofe
- Constraints nisu isto što i guardrails
- "Ne mogu odgovoriti" je validan output
- Ovo je temelj produkcionih AI sistema

Bez guardrails-a:
- agenti haluciniraju
- sistemi pucaju
- odgovornost je mutna

Sa njima:
- sistem je pouzdan
- skalabilan
- profesionalan
