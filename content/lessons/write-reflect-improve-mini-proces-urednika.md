# Write → Reflect → Improve: mini-proces urednika

## 1. Uvod u Write → Reflect → Improve (WRI) obrazac

Write → Reflect → Improve je višefazni obrazac koji uvodi **svjesnu samoprovjeru** u proces generisanja AI odgovora.

Umjesto da model isporuči jedan odgovor — kakav god da ispadne — WRI ga vodi kroz tri jasno razdvojene faze:

1. **Write** – inicijalno generisanje odgovora
2. **Reflect** – kritička analiza vlastitog outputa
3. **Improve** – integrisana, poboljšana verzija

Ovaj obrazac mijenja osnovnu dinamiku rada s AI-jem. Model više ne djeluje kao "generator teksta koji pogađa odgovor", nego kao autor koji piše nacrt, zatim ga uređuje i poboljšava.

## 2. Zašto je ovaj pattern važan?

AI modeli ne griješe zato što su "glupi", nego zato što:

- preskoče kontekst,
- ne primijete kontradikcije,
- pogrešno interpretiraju upit,
- daju generičke odgovore,
- ne provjere da li su ispunili kriterije zadatka.

WRI uvodi upravo to pitanje — model mora provjeriti da li je njegov odgovor dobar.

Korištenjem ovog obrasca značajno se povećava:

- **preciznost** (manje pogrešnih tvrdnji),
- **pouzdanost** (manje halucinacija),
- **jasnoća** (bolja struktura),
- **stručnost** (zreliji ton i argumentacija).

## 3. Standardni prompt šablon za WRI

**Korak 1 – Write**

> Generiši inicijalni odgovor na zadatak. Ne pokušavaj da ga unaprijed optimizuješ.

**Korak 2 – Reflect**

> Kritički procijeni svoj prethodni odgovor:
> 1. Identifikuj logičke greške
> 2. Uoči preskočene informacije
> 3. Označi nejasne ili površne dijelove
> 4. Provjeri da li su ispunjeni svi kriteriji zadatka
> 5. Navedi konkretna poboljšanja

**Korak 3 – Improve**

> Na osnovu refleksije, generiši novu verziju odgovora koja:
> - ispravlja uočene probleme,
> - ima jasniju strukturu,
> - uklanja suvišne dijelove,
> - preciznije odgovara na zadatak.

## 4. Interna logika WRI procesa

### a) Write – Prvi nacrt

U ovoj fazi model slobodno generiše odgovor. Ovo je sirova verzija, nacrt bez samocenzure, polazna tačka — ne konačno rješenje. Greške u ovoj fazi nisu problem — one su očekivane.

### b) Reflect – Kritička samoevaluacija

Ovdje model ulazi u meta-poziciju. On više **ne piše**, nego:

- čita vlastiti tekst,
- analizira strukturu,
- prepoznaje slabosti,
- poredi odgovor s ciljem zadatka.

Ova faza je ključna jer model po prvi put "razmišlja o onome što je rekao".

### c) Improve – Integrisana optimizacija

Na osnovu refleksije, model kreira novu verziju koja:

- ispravlja greške,
- pojašnjava ključne dijelove,
- dodaje preciznost,
- uklanja nejasnoće,
- zaokružuje odgovor u profesionalni standard.

Ovo nije kozmetičko uređivanje — ovo je **kvalitativni skok**.

## 5. Primjer WRI u praksi

Zadatak: "Napiši sažetak o važnosti kontrole LDL vrijednosti."

**Write – inicijalni odgovor:**

> "LDL je bitan za zdravlje srca i treba ga držati niskim. Visok LDL može uzrokovati probleme i važno je redovno ga pratiti."

**Reflect – kritička analiza:**

Model uočava: preopćenitost, manjak stručnog konteksta, izostanak mehanizma rizika, nejasne preporuke.

**Improve – poboljšana verzija:**

> "LDL-holesterol je ključni biomarker kardiovaskularnog rizika. Povišene vrijednosti ubrzavaju aterosklerotski proces i povećavaju vjerovatnoću infarkta miokarda i moždanog udara. Redovno praćenje LDL-a i pravovremena terapijska intervencija omogućavaju značajno smanjenje ukupnog kardiovaskularnog rizika."

Razlika u kvalitetu je očigledna.

## 6. Sažetak lekcije

Write → Reflect → Improve Pattern uvodi **samokorekciju** u rad AI modela.

Ovaj obrazac:

- smanjuje greške,
- povećava tačnost,
- podiže profesionalni nivo outputa.

WRI nije dodatak promptingu — on je **standard za ozbiljan rad s AI-jem**.
