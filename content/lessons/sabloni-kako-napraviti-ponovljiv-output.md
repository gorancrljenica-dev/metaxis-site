# Šabloni: kako napraviti ponovljiv output

## Uvod

Jedan od glavnih razloga zašto AI često daje neujednačene odgovore nije nedostatak znanja, nego nedostatak strukture.

Jednom dobiješ jasan, fokusiran tekst. Drugi put — haotičan, razvučen ili nedorečen. Iako si postavio isto pitanje.

Template Pattern rješava upravo taj problem.

Ovaj pattern koristi **unaprijed definisan misaoni šablon** koji model mora slijediti. Kao u Excel tabeli: svaka "ćelija" ima svoju funkciju, a preskakanje nije dozvoljeno.

## Kako Template Pattern funkcioniše

Template Pattern se sastoji od nekoliko jasno razdvojenih elemenata koji zajedno čine stabilan okvir razmišljanja.

### Svrha (Purpose)

Prvi korak je da definišeš **šta želiš standardizovati**.

To mogu biti: lekcije, poglavlja knjige, analize, poslovni izvještaji, postovi za društvene mreže, edukativne bilješke.

Bez jasno definisane svrhe, šablon nema smisla.

### Okvir (Frame)

Zatim određuješ **redoslijed sekcija** koje se uvijek ponavljaju.

Na primjer: **Uvod → Objašnjenje → Primjer → Zaključak**

Model mora poštovati taj raspored, bez obzira na temu. Ovdje ne kontrolišeš sadržaj — nego tok razmišljanja.

### Blokovi (Blocks)

Svaka sekcija ima **jasnu ulogu**:

- **Hook** — privlači pažnju i uvodi temu
- **Core idea** — objašnjava suštinu pojma
- **Example** — daje konkretan, primjenjiv prikaz
- **Summary** — zatvara krug i učvršćuje poruku

AI ne improvizuje gdje šta ide. Svaki dio ima svoju funkciju.

### Konzistentnost

Bez obzira na temu, struktura ostaje ista. To stvara:

- prepoznatljiv stil,
- profesionalni ritam,
- lakše čitanje,
- lakšu upotrebu u serijama sadržaja.

Čitalac (ili korisnik) zna šta da očekuje.

### Fleksibilnost

Template nije zatvor. Možeš ga prilagoditi: dužini, tonu, publici, nivou stručnosti.

Ali **okvir ostaje isti**.

Upravo ta kombinacija stabilnosti i fleksibilnosti čini ovaj pattern moćnim.

## Prompt (primjer)

> Use the Template Pattern to create a short educational note.
>
> **Topic:** "What is Prompt Engineering?"
>
> **Template Structure:**
>
> 1. *Hook:* Start with a one-line metaphor or relatable example.
> 2. *Definition:* Explain the concept in one paragraph.
> 3. *Example:* Show a simple real-world application.
> 4. *Summary:* End with one sentence that captures the essence.
>
> **Tone:** Clear, confident, and teacher-like — not academic.

Ovim promptom ti ne govoriš AI-ju *šta* da misli, nego *kako* da strukturira razmišljanje.

## Sažetak

Template Pattern omogućava AI-ju da piše **dosljedno, jasno i profesionalno**.

Posebno je koristan kada:

- radiš serije sadržaja,
- gradiš edukativne materijale,
- želiš stabilnu formu, ali promjenjiv sadržaj,
- praviš knjigu, kurs ili sistem znanja.

Forma ostaje ista — sadržaj se mijenja.
