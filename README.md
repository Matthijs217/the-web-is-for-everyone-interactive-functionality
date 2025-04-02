# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->
Ik heb de vacature site gemaakt voor DDA. Op de vacature site zie je alle vacatures die er open staan op dit moment. Onderin kan je meer vacatures toevoegen als je op de knop klikt. Dan komt er een popup met alle informatie die nodig is om een vacature toe te voegen. Als je op een vacature klikt kom je ook de detailpage van die ene vacature. De website is ook mooi responsive en werkt dus op alle schermen!

<img width="250" alt="Scherm­afbeelding 2025-04-02 om 09 53 56" src="https://github.com/user-attachments/assets/9212290c-aea8-4acd-9179-b9eab1641892" />

<img width="250" alt="Scherm­afbeelding 2025-04-02 om 09 54 38" src="https://github.com/user-attachments/assets/2bdfb11c-91b5-42bf-bbc2-ce000a4a572b" />

<img width="250" alt="Scherm­afbeelding 2025-04-02 om 09 54 52" src="https://github.com/user-attachments/assets/44a8494f-dfb1-4bfb-bb6f-7715e5bfbd18" />


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
User story: Als bedrijfs eigenaar wil ik graag mijn eigen vacatures toevoegen aan de bestaande vacature site van DDA, zodat mensen ook bij mij terrecht komen als bedrijf.

Je kan met deze interactie zelf een vacature toevoegen. Deze komt dan ook in het lijstje te staan. Je klikt op vacature toevoegen en opent daarmee de popup. Vul daar het forumulier in en druk op "submit"

<img width="250" alt="Scherm­afbeelding 2025-04-02 om 09 56 44" src="https://github.com/user-attachments/assets/ba7a1101-654f-4e35-afa0-571c57c7a4b2" />

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

Voor deze site is er gebruik gemaakt van Liquid, CSS, Javascript en Node.JS. Ik heb in liquid de loop ingeladen van alle vacatures. Met CSS de pagina gestyled. Met JavaScript heb ik ervoor gezorgd dat er een melding word getoond en weer verdwijnd na het toevoegen van de vacature. NodeJS voor alle back-end. Om de api te gebruiken, te verwerken en renderen.

**data en database**
- De server maakt een api call naar de vacature database van DDA. zie dat [hier](https://github.com/Matthijs217/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L36-L40)
- De data word door gegeven aan de liquid template. zie dat [hier](https://github.com/Matthijs217/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L45)
- Liquid gebruikt de data uit de server. zie dat [hier](https://github.com/Matthijs217/the-web-is-for-everyone-interactive-functionality/blob/main/views/vacatures.liquid#L79-L94)
- Liquid post het formulier weer naar de server. zie dat [hier](https://github.com/Matthijs217/the-web-is-for-everyone-interactive-functionality/blob/main/views/vacatures.liquid#L98)
- De server verwerkt dat weer en stuurt het door naar de database. zie dat [hier](https://github.com/Matthijs217/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L72-L92)

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
Voor dit project word NodeJS gebruikt. Om dat te laten werken moet NodeJS goed geïnstalleerd zijn. Na het installeren kan het geopend worden.

Voer in de terminal `npm install` uit om alle benodigdheden te installeren.

Voer vervolgens `npm start` uit om de server te starten.

Ga naar http://localhost:8000 om het project te bekijken.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
