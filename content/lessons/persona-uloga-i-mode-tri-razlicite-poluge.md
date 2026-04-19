# Persona, uloga i mode: tri različite poluge

*Zašto nisu isto — i zašto većina ljudi to pogrešno miješa*

## 1. Zašto je ova lekcija uopšte potrebna

U radu s AI-jem često ćeš vidjeti da ljudi koriste pojmove *persona*, *role* i *mode* kao da znače isto.

U praksi to dovodi do:

- konfuznih promptova,
- nekonzistentnih odgovora,
- loše kontrolisanih AI sistema.

Problem nije u AI-ju. Problem je u **miješanju slojeva ponašanja**.

## 2. Brza orijentacija (jedna rečenica po pojmu)

- **Persona** → *kako AI zvuči*
- **Role** → *šta AI jeste (stručno)*
- **Mode** → *kako se AI ponaša u tom trenutku*

## 3. Persona — stil, ton i "ličnost"

Persona definiše **način izražavanja**, ne znanje.

Ona utiče na: ton (smiren, oštar, prijateljski), stil (mentorski, akademski, sarkastičan), emocionalnu nijansu, način obraćanja čitaocu.

Persona **ne garantuje stručnost**. Možeš imati savršenu personu — i potpuno pogrešan sadržaj.

Primjeri persona:

- smireni mentor
- skeptični analitičar
- direktni trener
- empatični savjetnik
- neutralni tehnički narator

Persona je ono zbog čega tekst "zvuči ljudski".

## 4. Role — stručni identitet

Role definiše **kognitivni i profesionalni okvir znanja**.

Kada dodijeliš role, ti govoriš AI-ju: "Razmišljaj i odgovaraj kao ova vrsta stručnjaka."

Role utiče na: terminologiju, dubinu objašnjenja, način zaključivanja, prioritete informacija.

Primjeri role:

- kardiolog
- senior data analyst
- n8n automation architect
- AI systems designer

Bez role, AI je generalista. Sa role-om, AI postaje **specijalista**.

## 5. Mode — operativno ponašanje

Mode određuje **šta AI trenutno radi**, ne ko je on i kako zvuči.

Mode je *operativni kontekst*. On definiše:

- da li AI analizira, piše, evaluira ili ispravlja,
- da li postavlja pitanja ili daje odgovore,
- da li generiše, validira ili sažima.

Primjeri modova:

- **Analysis mode** – razmišljanje korak po korak
- **Draft mode** – generisanje prve verzije
- **Review mode** – kritička evaluacija
- **Correction mode** – ispravke i optimizacija
- **Agent mode** – donošenje odluka i akcija

Mode je ono što AI *trenutno izvršava*.

## 6. Zašto miješanje ova tri pojma pravi haos

Ako napišeš: "Budi profesionalni doktor i napiši to prijateljski, analiziraj i ispravi se."

AI dobija **tri konflikta odjednom**:

- persona i role nisu jasno razdvojene,
- mode nije definisan redoslijedom,
- ponašanje nije kontrolisano.

Rezultat: nestabilan output, nekad dobar, nekad loš, nemoguće ponoviti isti kvalitet.

## 7. Ispravan mentalni model

> **Role** = ko si
> **Persona** = kako zvučiš
> **Mode** = šta sada radiš

I uvijek ih postavljaj **tim redoslijedom**.

## 8. Praktičan primjer

Dobro definisan prompt:

> Preuzmi ulogu kardiologa.
> Persona: smiren, stručan, jasan — bez metafora.
> Mode:
> 1. prvo objasni pojam,
> 2. zatim provjeri tačnost,
> 3. onda isporuči finalni odgovor.

Rezultat: stručno ispravan, konzistentan, stabilan, ponovljiv. Ovo je **sistemski prompt**, ne improvizacija.

## 9. Kako se ovo koristi u ozbiljnim sistemima

- **AI OS** — Role = modul (zdravlje, fokus, strategija), Persona = stil komunikacije, Mode = trenutno ponašanje
- **RAG sistemi** — Role = researcher / analyst, Mode = retrieve → reason → answer, Persona = neutralna
- **AI agenti** — Role = domen ekspert, Mode = loop (think → act → verify), Persona = minimalna

## 10. Sažetak lekcije

Persona, Role i Mode nisu sinonimi. Oni su **tri različita sloja kontrole**.

- Persona upravlja *stilom*
- Role upravlja *znanjem*
- Mode upravlja *ponašanjem*

Ako ih jasno razdvojiš, AI prestaje biti "chat" i postaje **pouzdan sistem**.
