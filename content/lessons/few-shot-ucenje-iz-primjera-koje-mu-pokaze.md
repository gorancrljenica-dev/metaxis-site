# Few-shot: učenje iz primjera koje mu pokažeš

## Uvod

Jedna od najvećih zabluda u radu s AI-jem je uvjerenje da model "razumije" šta želiš čim mu to napišeš riječima. U praksi, riječi često nisu dovoljne. AI ne dijeli tvoje iskustvo, kontekst ni intuiciju.

Ali dijeli nešto drugo: **sposobnost prepoznavanja obrazaca.**

Few-Shot Prompting koristi upravo to.

Umjesto da objašnjavaš *šta želiš*, ti **pokažeš kako izgleda dobar odgovor**. AI tada ne pogađa. On **imitira obrazac koji si mu dao**.

## Šta je Few-Shot Prompting (i šta NIJE)

Few-Shot Prompting je tehnika u kojoj AI-ju daješ **nekoliko konkretnih primjera ulaza i izlaza**, a zatim od njega tražiš da proizvede novi izlaz po istom obrascu.

Ključna stvar: ne učiš ga pravilima — **učiš ga stilom i strukturom**.

Važno je i šta Few-Shot *nije*:

- nije fine-tuning
- nije trajno učenje
- nije pamćenje

Model ne "pamti" primjere dugoročno. On ih koristi **u tom trenutku kao referentni uzorak**.

### Primjer Few-Shot

**Primjer 1:**
Input: "Organizuj mi dan."
Output:
- Fokus dana: Konsolidacija AI OS projekta
- Zadaci: 1) Obsidian zapis, 2) n8n test, 3) analiza ChatGPT lekcija
- Upozorenje: Ne rasipati fokus na nove alate

**Primjer 2:**
Input: "Kako da poboljšam workflow?"
Output:
- Optimizacija: Uvedi logging u Notion
- Rizik: Previše paralelnih projekata
- Preporuka: Jedan workflow dnevno do kraja

**Novi input:** "Kako da unaprijedim svoj RAG sistem?"

**Output modela:**
- Poboljšanje: Dodaj feedback scoring metrikom
- Optimizacija: Ubrzaj embedding ingest proces
- Preporuka: Dokumentuj sve edge-caseove u Obsidianu

LLM kopira stil, strukturu, ton, format.

## Kada se ne može koristiti

Few-shot nije dobro rješenje za:

- **Zadacima koji zahtijevaju visoku preciznost bez varijacija** — npr. matematički proračuni, medicinske doze.
- **Kada radiš s velikim inputima** — dugi tekst može zbuniti model.
- **Kada je zadatak previše specifičan** — nema smislen uzorak.
- **Kada želiš potpuno slobodan kreativni odgovor** — Few-shot ograničava kreativnost modela.

## Zašto Few-Shot Prompting radi tako dobro

AI modeli su trenirani na ogromnim količinama primjera. Njihova snaga nije u zaključivanju kao kod čovjeka, nego u **prepoznavanju i nastavku obrazaca**.

Kada mu daš dobar primjer, ti mu praktično kažeš:

> "Ovako izgleda ispravno razmišljanje u ovom kontekstu."

Zato Few-Shot Prompting:

- dramatično povećava dosljednost
- smanjuje pogrešne interpretacije
- čuva stil, ton i strukturu
- daje stabilne rezultate čak i kod kompleksnih zadataka

U mnogim slučajevima, **dva dobra primjera vrijede više od deset rečenica objašnjenja**.

## Osnovna struktura Few-Shot prompta

Tipičan Few-Shot prompt ima tri dijela:

1. **Instrukcija** — Kratko objašnjenje šta AI treba da uradi.
2. **Primjeri (shots)** — Nekoliko parova *Input → Output*.
3. **Novi zahtjev** — Ulaz za koji želiš novi odgovor po istom obrascu.

Primjer strukture:

```
Zadatak: Uradi X po obrascu ispod.

Primjer 1:
Input: ...
Output: ...

Primjer 2:
Input: ...
Output: ...

Sada uradi isto za:
Input: ...
```

AI tada prepozna obrazac, prilagodi ga novom ulazu i generiše odgovor koji "liči" na prethodne.

## Kako birati dobre primjere

Few-Shot Prompting je **tačno onoliko dobar koliko su dobri primjeri** koje daš.

Dobar primjer mora biti:

- jasan
- tipičan (ne ekstrem)
- tačno predstavljati stil i dubinu koju želiš

Loši primjeri zbunjuju model, uvode kontradikcije i proizvode nestabilne rezultate.

Ako želiš analitički stil — svi primjeri moraju biti analitički. Ako želiš jednostavan jezik — svi primjeri moraju biti jednostavni.

AI ne "prosječi". On **kopira dominantni obrazac**.

## Gdje je Few-Shot Prompting najkorisniji

Few-Shot Prompting je posebno moćan kada:

- želiš **konzistentan stil pisanja**
- radiš **klasifikaciju ili evaluaciju**
- standardizuješ odgovore (QA, feedback, ocjene)
- praviš **interni "jezik" sa AI-jem**
- gradiš agente koji moraju reagovati predvidivo

Kada je Few-Shot najbolji izbor:

- **Specifičan stil** — pisanje u određenom tonu (smiren, motivacioni, klinički...)
- **Specifičan format** — lista, tabela, JSON, bullet points, email, caption...
- **Dosljednost** — kada model *svaki put* mora davati iste vrste odgovora
- **Replikacija složenog zadatka** — pravila koja se teško objasne, ali lako pokažu

## Few-Shot + drugi patterni

Few-Shot Prompting postaje još jači kada se kombinuje sa:

- **Template Pattern** → primjeri + fiksna struktura
- **Menu Action Pattern** → primjeri za svaku dozvoljenu akciju
- **CVP** → provjera da li novi odgovor slijedi obrazac primjera
- **Meta Language Creation Pattern** → primjeri koji definišu značenje "tvog jezika"

## Kratka analogija

Zamisli da nekome objašnjavaš kako da napiše dobar email. Možeš pričati sat vremena. Ili možeš pokazati **tri dobra emaila**. Većina ljudi će naučiti iz primjera. AI — još brže.

## Sažetak

Few-Shot Prompting koristi ono u čemu je AI najjači: prepoznavanje obrazaca. Umjesto da objašnjavaš pravila, ti pokazuješ primjere. Kada želiš dosljednost, stabilan stil i predvidivo ponašanje — Few-Shot Prompting je jedan od najpouzdanijih alata koje imaš.
