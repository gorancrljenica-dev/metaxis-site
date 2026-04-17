---
title: "Kontrola outputa: zašto dobar prompt nije dovoljan"
date: "2026-04-17"
slug: "kontrola-outputa-zasto-prompt-nije-dovoljan"
excerpt: "Većina problema s AI outputima nije u promptu — nego u nedostatku sistema koji definira šta je prihvatljiv rezultat. Kontrola outputa je operativni sloj koji prompt ne može zamijeniti."
tags: ["Kontrola outputa", "Prompt Engineering", "AI sistemi"]
readTime: "6 min čitanja"
---

Kad AI da loš odgovor, prva reakcija je popraviti prompt.

To je razumljivo. Prompt je vidljiv — lako ga je uhvatiti, urediti, testirati ponovo. Ali u većini slučajeva problem nije u formulaciji. Problem je u tome što sistem nema definisano šta je dobar output.

## Prompt kao instrukcija, output kao rezultat

Prompt je instrukcija. Output je rezultat izvršavanja te instrukcije u određenom kontekstu, s određenim modelom, u određenom trenutku.

Isti prompt može dati različite outpute. To nije greška — to je priroda probabilističkih sistema. Greška je očekivati konzistenciju od nečega što po definiciji nije deterministično.

Operativni pristup to prihvata i gradi sloj iznad: **kontrolu outputa**.

## Šta je kontrola outputa

Kontrola outputa je skup mehanizama koji osiguravaju da output zadovoljava definirane kriterije — bez obzira na varijabilnost u generisanju.

To uključuje:

- **Format constraints** — output mora biti u određenom formatu (JSON, lista, tabela)
- **Length bounds** — output ne smije biti kraći ni duži od definisanih granica
- **Content gates** — output mora sadržavati određene elemente, ili ih ne smije sadržavati
- **Validation loops** — output se provjerava nakon generisanja, ne samo prima

Ovo nije novi prompt. Ovo je sloj koji stoji između generisanja i upotrebe.

## Zašto prompt sam po sebi ne rješava ovo

Prompt može tražiti format. Model može i ne mora ispoštovati.

Prompt može tražiti određenu dužinu. Model ima vlastitu procjenu šta je "dovoljno".

Prompt može tražiti da se izbjegne određeni sadržaj. Model će pokušati — ali nema garancije.

Sve ove instrukcije u promptu su **zahtjevi**, ne **ograničenja**. Razlika je fundamentalna.

Kontrola outputa pretvara zahtjeve u ograničenja. Ne na nivou modela — na nivou sistema.

## Praktičan primjer

Zamislite workflow koji iz teksta izvlači strukturirane podatke za dalju obradu.

Prompt kaže: "Vrati JSON s poljima naziv, datum i iznos."

Model vraća JSON — ponekad. Drugi put vraća prose tekst koji opisuje podatke. Treći put vraća JSON omotan u markdown code block. Četvrti put vraća JSON s dodatnim poljem koje prompt nije tražio.

Bez kontrole outputa, svaka od ovih varijacija lomi workflow.

S kontrolom outputa:
1. Output se parsira kao JSON
2. Ako parsing ne uspije — workflow ne nastavlja, vraća error
3. Ako JSON ne sadrži sva tri polja — workflow ne nastavlja, vraća error
4. Tek kad output prođe validaciju — prelazi na sljedeći korak

Prompt ostaje isti. Sistem postaje robustan.

## Gdje ovo živu u praksi

Kontrola outputa nije jedna tehnika. To je razmišljanje o outputu kao o interfejsu.

Kao što API definira šta ulazi i šta izlazi — AI sistem treba definirati šta je prihvatljiv output. Ne "šta bi trebalo biti" — nego "šta sistem prihvata kao validno".

Kad definirate taj standard, prompt engineering postaje mnogo jednostavniji. Ne pišete prompt koji mora riješiti sve edge case-ove. Pišete prompt koji generira outpute koje vaš validacijski sloj može obraditi.

---

Ovo je jedan od šest tematskih blokova u knjizi [Operativni Sistem za rad sa AI](/book). Blok 1 pokriva komande, šablone, format i meta-jezik — sve s ciljem da output postane predvidiv i upotrebljiv.
