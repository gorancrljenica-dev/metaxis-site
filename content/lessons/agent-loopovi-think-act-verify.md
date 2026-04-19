# Agent loopovi: Think → Act → Verify

*Think → Act → Verify: kako AI prestaje da "odgovara" i počinje da djeluje*

## 1. Zašto uopšte govorimo o agent loop-ovima

Do ove tačke u knjizi naučio si kako da: kontrolišeš šta AI zna (Role), kako zvuči (Persona), šta radi u jednom trenutku (Mode), uvedeš samoprovjeru (WRI, Self-Correction Loop), postaviš jasna ograničenja (Constraints).

Sve to je neophodno. Ali još uvijek postoji jedna ključna razlika između:

- **AI koji odgovara**, i
- **AI koji izvršava zadatak kroz vrijeme**.

Ta razlika se zove **agent loop**.

Agent loop je ono što omogućava AI-ju da: donosi odluke u više koraka, koristi alate, provjerava rezultate, ispravlja se, i nastavlja dok ne dođe do cilja.

Bez loop-a, AI je pametan — ali statičan. Sa loop-om, AI postaje **operativni sistem ponašanja**.

## 2. Šta je zapravo Agent Loop

Agent Loop je **kontrolisana petlja ponašanja**.

Umjesto jednog odgovora, AI prolazi kroz **ponovljivi ciklus**:

1. **Think** – razmišlja šta treba uraditi
2. **Act** – izvršava akciju (tekst, alat, API, odluka)
3. **Verify** – provjerava rezultat
4. **Decide** – nastavlja ili završava

Ova petlja se ponavlja **dok cilj nije ispunjen** ili dok sistem ne kaže "stani".

Agent loop **nije beskonačno razmišljanje**. On je *namjenski kontrolisan tok*.

## 3. Think → Act → Verify kao mentalni model

### Think (Razmišljanje)

AI analizira: cilj, trenutno stanje, ograničenja, šta zna, šta ne zna.

U ovoj fazi **ne daje konačan odgovor**. Ovdje se dešavaju: Task Decomposition, izbor strategije, odluka o sljedećem koraku.

### Act (Akcija)

AI izvršava **jednu konkretnu radnju**: napiše dio teksta, pozove alat, izvrši API request, pretraži RAG, generiše podatke, transformiše output.

Jedna akcija = jedan potez.

### Verify (Provjera)

AI provjerava: da li je akcija dala očekivani rezultat, da li postoje greške, da li je format ispravan, da li je cilj bliži nego prije.

Ako nešto nije u redu → **ne ide dalje**, nego koriguje.

Ovo je razlika između "AI koji se nada da je u pravu" i "AI koji provjerava prije nego nastavi".

## 4. Control Flow — ko upravlja petljom

Control Flow je skup pravila koji odgovara na pitanja:

- Kada AI smije nastaviti?
- Kada mora stati?
- Kada se vraća korak unazad?
- Kada eskalira grešku?
- Kada završava proces?

Bez control flow-a: AI luta, ponavlja se, halucinira, troši resurse, gubi fokus.

Sa control flow-om: ponašanje je stabilno, output je ponovljiv, sistem je pouzdan.

## 5. Osnovni Agent Loop Template

```
You are operating as an AI agent.

Follow this control loop strictly:

1. THINK:
   - Analyze the current goal.
   - Decide the next best action.
   - Do NOT produce a final answer yet.

2. ACT:
   - Perform exactly one action.
   - Clearly label the action and its output.

3. VERIFY:
   - Check if the action result is correct and useful.
   - If errors exist, identify them.

4. DECIDE:
   - If the goal is not yet achieved, repeat the loop.
   - If the goal is achieved, produce the final output.

Rules:
- Do not skip steps.
- Do not combine steps.
- Stop immediately if constraints are violated.
```

## 6. Primjena u realnim sistemima

**a) AI agenti** — Agent koji planira, izvršava, provjerava, nastavlja. Bez loop-a → chatbot. Sa loop-om → agent.

**b) RAG sistemi** — Think → šta tražim? Act → retrieve izvore. Verify → da li su relevantni? Act → generiši odgovor. Verify → da li je u skladu s izvorima?

**c) n8n automatizacije** — Trigger → akcija → provjera → sljedeći node. Svaki workflow je implicitni agent loop.

**d) AI OS** — AI OS sa loop-om: prati stanje, reaguje, prilagođava se, uči iz rezultata.

## 7. Najčešće greške kod agent loop-ova

- ❌ nema jasnog cilja
- ❌ nema stop uslova
- ❌ AI radi više akcija odjednom
- ❌ nema verifikacije
- ❌ nema granica (constraints)

## 8. Sažetak lekcije

Agent Loops i Control Flow su trenutak kada AI:

- prestaje biti generator teksta,
- prestaje biti alat,
- i postaje **sistem ponašanja**.

Think → Act → Verify nije trik. To je **operativna filozofija**.
