# Cognitive Verifier: kako provjeriti da stvarno razumiješ

Pattern koji tjera AI da prvo razmišlja, a tek onda odgovara.

---

### 1. Šta je to

Cognitive Verifier Pattern (CVP) je tehnika u kojoj AI **ne daje odmah konačan odgovor**, već prvo analizira samo pitanje.

Umjesto direktnog odgovaranja, model:

1. prima tvoje pitanje
2. identifikuje šta u njemu može biti nejasno, preširoko, pogrešno postavljeno ili zasnovano na skrivenim pretpostavkama
3. generiše **podpitanja** koja razjašnjavaju problem
4. tek nakon toga kombinuje te uvide u jedan smislen, provjeren odgovor

Na taj način AI ne "pogađa" rješenje, nego ga **logički sastavlja kroz provjeru vlastitog razumijevanja**.

CVP pretvara odgovor u proces, a ne u refleks.

Cognitive Verifier Pattern pomaže AI-ju da uspori, razmisli i provjeri vlastitu logiku prije nego što isporuči konačan odgovor.

Rezultat su:

- precizniji zaključci
- dublje razumijevanje problema
- manji rizik od pogrešnih pretpostavki
- pouzdaniji odgovori kod kompleksnih pitanja

Ako želiš da AI **razumije prije nego što odgovori**, CVP je temeljni obrazac koji moraš koristiti.

### 2. Problem koji rješava

Jedan od najvećih problema u radu s AI-jem je brzina. Model često dobije pitanje i odmah isporuči odgovor koji zvuči samouvjereno, logično i uvjerljivo — ali nije nužno tačan, potpun ili dobro promišljen.

To stvara iluziju razumijevanja, i kod AI-ja i kod korisnika.

**Cognitive Verifier Pattern** postoji upravo da bi razbio tu iluziju. Njegova svrha nije da AI napiše više teksta, nego da **uspori proces razmišljanja** i provjeri da li je pitanje uopšte pravilno shvaćeno prije nego što se na njega odgovori.

### 3. Kako funkcioniše

U praksi, Cognitive Verifier Pattern mijenja način na koji postavljaš upit.

Umjesto da AI pitaš samo *šta* misli, eksplicitno ga tražiš da:

- provjeri da li je pravilno razumio pitanje
- razloži problem na manje misaone cjeline
- identifikuje moguće nejasnoće ili pogrešne pretpostavke
- tek onda izvede zaključak

Time se uloga AI-ja mijenja: **od generatora odgovora → u asistenta za razmišljanje**

Ovo je jedna od ključnih razlika između površnog korištenja AI-ja i ozbiljnog, profesionalnog rada s njim.

### 4. Kada ga koristiti

Cognitive Verifier Pattern je posebno koristan kada:

- pitanje djeluje jednostavno, ali krije kompleksnost
- postoji rizik od pogrešnih ili neizgovorenih pretpostavki
- tražiš analitički, strateški ili savjetodavni odgovor
- radiš sa važnim odlukama, a ne brzim informacijama

Bez ovog patterna, AI često:

- preskače ključne korake u razmišljanju
- zaključuje prerano
- gradi odgovor na pogrešnoj osnovi

Sa CVP-om dobijaš **kognitivno provjeren rezultat**, a ne samo lijepo formulisan tekst.

### 5. Primjer upotrebe

Zamisli da AI-ju postaviš sljedeće pitanje:

> "Kako da poboljšam produktivnost svog tima?"

Bez CVP-a, AI odmah nudi listu savjeta — generičnih, uopštenih, neadaptiranih tvojoj situaciji.

Sa CVP-om, prompt izgleda ovako:

```
Koristi Cognitive Verifier Pattern.
Pitanje: "Kako da poboljšam produktivnost svog tima?"
Prije nego odgovoriš, identificiraj pretpostavke i nejasnoće u pitanju.
Postavi mi podpitanja. Tek nakon mojih odgovora daj finalni prijedlog.
```

AI tada:
1. primjećuje da "produktivnost" nije definisana
2. pita: veličina tima? tip posla? koji problem konkretno?
3. tek sa tvojim odgovorima sastavlja relevantan plan

Razlika nije u odgovoru — nego u **procesu koji je doveo do odgovora**.

### 6. Ograničenja

CVP nije uvijek pravi izbor.

Nije koristan kada:
- pitanje je jednostavno i jednoznačno
- trebaš brz odgovor bez analize
- kontekst je već potpuno definisan u promptu

Ako zlouptrebljavaš CVP na svakom pitanju, AI postaje spor i pretjerano analitičan — što gubi smisao u rutinskim zadacima.

**Pravilo**: koristi CVP za odluke i analize gdje pogrešna pretpostavka košta. Nemoj ga koristiti za brze informacije.
