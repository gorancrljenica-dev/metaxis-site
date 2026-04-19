# Prelaz: od prompta do agenta

Do ovog trenutka u knjizi učio si **kako natjerati AI da misli bolje**.

Učio si kako da:

- razbiješ zadatak (Task Decomposition),
- strukturiraš podatke (Structured Extraction),
- kontrolišeš format i kvalitet (WRI, Self-Correction Loop),
- provjeriš logiku i greške prije finalnog odgovora.

Sve ove tehnike imaju jednu zajedničku stvar: fokusirane su na **jedan odgovor u jednom trenutku**.

To je moćno — ali ima granicu.

## Kada prompt više nije dovoljan

U stvarnim projektima, AI rijetko radi samo jednu stvar:

- ne piše samo tekst,
- ne analizira samo jedan dataset,
- ne daje samo jedan savjet.

Umjesto toga, AI mora:

- **donositi odluke u nizu**,
- **pamtiti prethodne korake**,
- **poštovati ograničenja**,
- **koristiti alate**,
- **ispravljati se u hodu**,
- **ponavljati procese dok ne dođe do cilja**.

Tu prompt prestaje biti dovoljan. Tu počinje **ponašanje sistema**.

## Šta zapravo znači "agent"

Agent nije "pametniji prompt". Agent nije "chatbot sa više teksta".

Agent je **kontrolisani obrazac ponašanja**.

Jednostavno rečeno:

> Prompt govori šta da kaže. Agent definiše kako da se ponaša.

Agent kombinuje više elemenata:

- razmišljanje (reasoning),
- akcije (tool usage),
- povratne petlje (loops),
- ograničenja (constraints),
- uloge (roles),
- memoriju (state).

Sve to zajedno čini sistem koji **ne reaguje samo**, nego **djeluje namjenski**.

## Zašto je ovo prijelomna tačka

Do sada si gradio **kvalitet jednog odgovora**. Odavde počinješ graditi **stabilnost kroz vrijeme**.

Razlika je ključna:

- Prompting → optimizuje *jedan output*
- Agent patterns → dizajniraju *ponašanje kroz više koraka*

Ovo je trenutak kada AI prestaje biti alat za pisanje i postaje **komponenta sistema**.

## Šta slijedi

U narednim lekcijama ulazimo u obrasce koji:

- nameću granice modelu,
- definišu uloge i odgovornosti,
- povezuju više promptova u jedan tok,
- omogućavaju razmišljanje + djelovanje (ReAct),
- uvode memoriju, alate i evaluaciju.

Ovdje više ne pitaš: "Kako da dobijem bolji odgovor?"

Ovdje pitaš: "Kako da AI radi pouzdano, ponovljivo i bez mog stalnog nadzora?"

## Mentalni model za nastavak

> Agent = Prompt + Pravila + Petlje + Akcije + Kontrola

Ako ovo razumiješ — sve što slijedi ima smisla.
