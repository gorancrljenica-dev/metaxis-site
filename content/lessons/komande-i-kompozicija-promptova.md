# Komandna biblioteka: komande za ponašanje modela

## Uvod

Kada ljudi pričaju o prompt engineeringu, često misle na duge i kompleksne promptove. U praksi, to brzo postane neefikasno. Svaki put iznova objašnjavaš kontekst, ton, način razmišljanja — i nadaš se da će AI "pogoditi" kako treba.

Ova tabela je nastala iz potrebe da se taj haos svede na minimum.

Umjesto da svaki put pišeš novi prompt od nule, koristiš **kratke komande** koje AI-ju jasno govore *kako treba da razmišlja*, ne samo *šta da uradi*.

Ovo nije lista trikova. Ovo je **kontrolni jezik** za upravljanje ponašanjem AI-ja.

## Kako koristiti ovu biblioteku

Svaka komanda u tabeli predstavlja **jedan način razmišljanja** koji možeš "uključiti" po potrebi.

U praksi to izgleda ovako:

- u promptu jasno navedeš koju komandu želiš da AI koristi
- kombinuješ ih po potrebi (npr. FIP + CVP)
- dobijaš konzistentno ponašanje, umjesto nasumičnih odgovora

Ne moraš pamtiti sve. Dovoljno je da znaš **kada koji pattern ima smisla**.

## Kako čitati tabelu

Ako gledaš tabelu kao cjelinu, primijetićeš tri važne stvari:

- neke komande upravljaju **interakcijom** (npr. FIP)
- neke upravljaju **provjerom i kvalitetom razmišljanja** (CVP, CoVP, SFP)
- neke upravljaju **stilom, kontekstom i ulogom** (RT, EXP, EMP, CTP)

Drugim riječima, ne biraš "bolji prompt", nego **pravilan misaoni režim** za zadatak koji imaš. To je razlika između nasumičnog korištenja AI-ja i kontrolisanog rada.

## Komandna tabela

| Komanda | Puno ime | Opis ponašanja | Kada koristiti | Primjer upotrebe |
|---------|----------|----------------|----------------|-----------------|
| **FIP** | *Flipped Interaction Pattern* | AI **postavlja pitanja tebi** kako bi prikupio informacije prije nego što odgovori. | Kada ne znaš tačno šta želiš, ili želiš da AI pomogne definisati cilj, brief ili problem. | "Koristi FIP da mi postaviš pitanja dok ne shvatiš moje ciljeve i publiku, pa onda napravi plan sadržaja." |
| **CVP** | *Cognitive Verifier Pattern* | AI **provjerava i koriguje vlastito razmišljanje** prije nego što da odgovor. | Kada želiš da odgovor bude tačan, logičan i samoproveren. | "Koristi CVP da provjeri svoj odgovor o razlici između fine-tuninga i promptinga." |
| **RT** | *Reframing Technique* | AI **preformuliše pitanje** iz više uglova da bi generisao bolji izlaz. | Kada želiš dublje, kreativnije ili preciznije tumačenje teme. | "Koristi RT da preformulišeš moje pitanje o digitalnom fokusu na tri različita načina." |
| **CoVP** | *Chain of Verification Pattern* | AI koristi **višestepenu provjeru**: generiše odgovor, zatim ga provjerava kroz logičke filtere. | Kada je zadatak složen i traži višeslojno rezonovanje. | "Koristi CoVP da provjeri strategiju u tri koraka: logika, izvedivost, jasnoća." |
| **FRT** | *Fact-Checking Reframing Technique* | AI preformuliše zadatak uz **ugrađenu provjeru činjenica** i izvora. | Kada radiš s podacima, citatima, edukativnim sadržajem. | "Koristi FRT da preformulise moj tekst i provjeri tačnost svih tvrdnji." |
| **SOP** | *Step-by-Step Output Pattern* | AI razlaže zadatak u **sekvencu logičnih koraka**. | Kada želiš jasnoću, procesno razmišljanje ili uputstvo. | "Koristi SOP da objasniš proces spajanja Notiona s n8n korak po korak." |
| **EXP** | *Expert Persona Pattern* | AI preuzima **ulogu eksperta** određenog profila i iz te perspektive odgovara. | Kada želiš ton i preciznost specifične profesije. | "Koristi EXP i ponašaj se kao senior n8n inženjer koji objašnjava početniku." |
| **CTP** | *Context-Transfer Pattern* | AI **pamti i koristi kontekst** iz prethodnih poruka da bi održao konzistentnost. | Kada radiš duge projekte (eBook, kurs, workflow). | "Koristi CTP i nastavi gdje smo stali s RAG workflowom." |
| **EMP** | *Emotion Modulation Pattern* | AI prilagođava **ton, stil i emocionalnu nijansu** teksta. | Kada želiš emocionalno usklađen ton komunikacije. | "Koristi EMP da prepravi ovaj tekst u smiren mentorski ton." |
| **SFP** | *Self-Feedback Pattern* | AI daje **komentar o sopstvenom odgovoru** — šta je bilo dobro, a šta bi poboljšao. | Kada želiš model koji uči kroz samorefleksiju. | "Koristi SFP da ocijeniš kvalitet svog prethodnog odgovora." |

## Sažetak

Prompt Pattern Command Library je tvoj **brzi interfejs za upravljanje AI-jem**.

Umjesto da objašnjavaš sve iznova, koristiš kratke komande koje jasno definišu:

- ko AI treba da bude
- kako treba da razmišlja
- i kada da stane

Ako iz cijele knjige zadržiš samo jednu stvar za svakodnevni rad — ova tabela je vrlo dobar kandidat.
