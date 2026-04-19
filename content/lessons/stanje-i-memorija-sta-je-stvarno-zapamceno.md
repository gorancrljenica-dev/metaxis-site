# Stanje i memorija: šta je stvarno zapamćeno

*Kada agent mora "pamtiti" — a kada to postaje opasno*

## 1. Zašto je pamćenje najopasniji dio agent sistema

Agent bez memorije: ponavlja iste greške, ne gradi kontinuitet, nema istoriju.

Agent sa loše dizajniranom memorijom: postaje nekonzistentan, kontradiktoran, nekontrolisan.

Zato je **Memory ≠ više konteksta**. Memory je **arhitektonska odluka**, ne feature.

## 2. Razlika koju moraš imati čistu u glavi

### Context
- kratkoročno, privremeno, nestaje nakon sesije
- služi za *trenutno razmišljanje*

### State
- trenutno stanje sistema
- varijable, flagovi, modovi
- "gdje se agent sada nalazi"

### Memory
- dugoročno, selektivno, namjerno zapisano
- koristi se kasnije

**Samo Memory preživljava vrijeme.**

## 3. Kada agent NE SMIJE imati memoriju

Agent **ne smije** pamtiti ako:

- radi jednokratni zadatak,
- nema validaciju informacija,
- nema jasna pravila brisanja,
- radi savjetodavne ili osjetljive stvari.

Primjeri: Q&A bot, medicinski savjeti bez pacijent-ID, brainstorming agent, demo agent.

U tim slučajevima memorija je **rizik**, ne prednost.

## 4. Kada agent MORA imati memoriju

Memorija je obavezna kada:

- agent radi dugoročno,
- ima iterativne ciljeve,
- mora izbjeći ponavljanje grešaka,
- prati korisničke preferencije,
- gradi sistem (AI OS, agent mreže).

## 5. Tipovi memorije koje agent može imati

**a) Ephemeral Memory** — kratkotrajna, briše se brzo, služi za tok zadatka.

**b) Working Memory** — traje kroz jednu sesiju, drži međurezultate, nije trajna.

**c) Long-Term Memory** — trajna, selektivna, zapisuje se namjerno, koristi se kasnije.

Profesionalni agent koristi **samo ono što mora**.

## 6. Najveća greška: automatsko pamćenje

Ako agent pamti **sve što vidi** — to nije memorija, to je šum.

Memorija mora biti: rijetka, sažeta, provjerena, opravdana.

Zlatno pravilo: > Ako ne znaš zašto nešto pamtiš — ne pamti.

## 7. Standardni Memory Control Template

```
At each step, evaluate memory usage:

1. Identify whether new information is:
   - transient
   - session-based
   - long-term relevant

2. Store information ONLY if:
   - it is reusable,
   - it improves future decisions,
   - it is validated,
   - it has clear scope.

3. Define memory type:
   - ephemeral
   - working
   - long-term

4. Define expiration or persistence rule.

5. Never store raw conversations.
   Store distilled insights only.
```

## 8. Memory u RAG sistemima

RAG ≠ memorija.

- RAG: dohvaća informacije, ne pamti iskustvo.
- Memorija: pamti odluke, preferencije, evaluacije.

Stabilni sistemi koriste RAG za znanje, Memory za ponašanje. Ako to pomiješaš — dobićeš halucinacije sa samopouzdanjem.

## 9. Sažetak lekcije

Memory nije luksuz. Ali nije ni default.

Agent koji pamti bez kontrole → degradira. Agent koji ne pamti kada treba → stagnira.

Pravi agent: zna **kada** pamtiti, zna **šta** pamtiti, zna **kada brisati**.

Ovdje se agenti dijele na demonstracije i **sisteme koji žive dugo**.
