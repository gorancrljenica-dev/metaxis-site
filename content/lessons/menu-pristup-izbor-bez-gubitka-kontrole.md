# Menu pristup: izbor bez gubitka kontrole

## Uvod

Jedan od suptilnih problema u radu s AI-jem je prevelika sloboda.

Kad mu daš otvoren zadatak, model često pokušava da bude "koristan" na sve moguće načine — i završi sa odgovorom koji je širok, neujednačen ili promašuje ono što ti je zapravo trebalo.

Menu Action Pattern rješava taj problem tako što **ne tražiš odgovor**, nego **ponudiš opcije**.

Umjesto: "Šta misliš o ovome?" ti kažeš: "Evo menija. Izaberi jednu od ovih akcija."

AI tada ne improvizuje smjer — on bira **unutar granica koje si ti postavio**.

## Šta je Menu Action Pattern i zašto je važan

Menu Action Pattern je prompting obrazac u kojem AI-ju daješ **ograničen skup dozvoljenih akcija**, obično u formi liste ili menija. Model ne odlučuje *šta bi sve mogao*, nego *šta smije* da uradi.

Ovaj pattern je posebno važan jer:

- smanjuje rasipanje odgovora
- povećava preciznost i fokus
- čini interakciju predvidivom

U praksi, Menu Action Pattern pretvara AI iz "pričalice" u **kontrolisanog asistenta**.

## Kako Menu Action Pattern funkcioniše u praksi

Osnovna logika je jednostavna:

1. Ti definišeš **menije akcija**
2. AI mora izabrati **jednu (ili više) ponuđenih opcija**
3. AI izvršava samo izabranu akciju — ništa van toga

Primjer menija može izgledati ovako:

- A) Analiziraj tekst i sažmi ga
- B) Preformuliši tekst za jasniji stil
- C) Pronađi logičke greške
- D) Postavi pitanja za dodatno razjašnjenje

AI tada:

- prvo bira opciju
- zatim izvršava tačno tu radnju

Time dobijaš **dvostepenu kontrolu**: kontrolišeš i *šta* radi i *kako* razmišlja.

## Primjer Menu Action Pattern prompta

```
Koristi Menu Action Pattern.

Dostupne akcije:
A) Sažmi tekst u 5 tačaka
B) Preformuliši tekst za početnike
C) Identifikuj nejasne dijelove
D) Postavi pitanja za dodatni kontekst

Prvo izaberi jednu akciju i objasni zašto.
Zatim izvrši samo izabranu akciju.
```

Ovaj obrazac:

- sprječava "odgovaranje na sve odjednom"
- tjera AI da pokaže namjeru prije izvršenja
- povećava kvalitet rezultata

## Gdje je ovaj pattern najkorisniji

Menu Action Pattern je izuzetno koristan kada:

- radiš **reviziju teksta ili ideja**
- želiš **kontrolisan brainstorming**
- gradiš **AI asistenta ili agenta**
- vodiš AI kroz kompleksne odluke korak po korak

Posebno je moćan u kombinaciji sa:

- **FIP** (AI postavlja pitanja, ali unutar menija)
- **CVP** (provjera nakon izvršenja akcije)
- **Recipe Pattern** (meniji po fazama recepta)

## Kratka analogija

Zamisli AI kao zaposlenog u restoranu.

Bez menija — pita goste svašta, predlaže sve i svašta, zbunjuje.
Sa menijem — zna šta se nudi, šta se ne nudi i radi posao precizno.

Menu Action Pattern je **jelovnik za razmišljanje**.

## Sažetak

Menu Action Pattern ti omogućava da AI-ju daš slobodu izbora **bez gubitka kontrole**. Umjesto otvorenih odgovora, dobijaš fokusirane akcije. Kada želiš jasnoću, preciznost i predvidivost — ovaj pattern je jedno od najjačih oruđa koje imaš.
