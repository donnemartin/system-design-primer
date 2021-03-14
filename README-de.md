*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](README-de.md) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

**Helfe diesen Leitfaden zu [übersetzen](TRANSLATIONS.md)!**

# The System Design Primer

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>



## Anki Karteikarten

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

Die hier zur Verfügung gestellten [Anki Karteikarten](https://apps.ankiweb.net/) nutzen das Konzept der verteilten Wiederholung. Damit sollst du beim Behalten der Schlüsselkonzepte des System Designs unterstützt werden.

* [Karteikarten System Design](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [Übungskarteikarten System Design](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Übungskarteikarten Objektorientiertes Design](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Super um unterwegs zu üben!

### Coding Ressourcen: Interaktive Coding Herausforderungen

Auf der Suche nach Ressourcen um dich bei der Vorbereitung auf ein [**Coding Interview**](https://github.com/donnemartin/interactive-coding-challenges) vorzubereiten?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

Schau dir das Partner Repo [**Interaktive Coding Herausforderungen**](https://github.com/donnemartin/interactive-coding-challenges) mit einem zusätzlichen Anki Deck an:

* [Coding Deck](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## Inhaltsverzeichnis der System Design Themen

> Zusammenfassung verschiedener System Design Themen inklusive der Vor- und Nachteile  **Alles ist ein Kompromiss**.
>
> Jedes Kapitel beinhaltet Links zu vertiefenden Ressourcen.

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [System Design Themen: Starte hier](#system-design-topics-start-here)
    * [Schritt 1: Schaue das Video über Skalierbarkeit an](#step-1-review-the-scalability-video-lecture)
    * [Schritt 2: Lese den Artikel zu Skalierbarkeit](#step-2-review-the-scalability-article)
    * [Nächste Schritte](#next-steps)
* [Leistung vs Skalierbarkeit](#performance-vs-scalability)
* [Latenz vs Durchsatz](#latency-vs-throughput)
* [Verfügbarkeit vs Konsistenz](#availability-vs-consistency)
    * [Der CAP Satz](#cap-theorem)
        * [CP - Konsistenz und Ausfalltoleranz](#cp---consistency-and-partition-tolerance)
        * [AP - Verfügbarkeit und Ausfalltoleranz](#ap---availability-and-partition-tolerance)
* [Konsistenzklassen](#consistency-patterns)
    * [Schwache Konsistenz](#weak-consistency)
    * [Eventuelle Konsistenz](#eventual-consistency)
    * [Starke Konsistenz](#strong-consistency)
* [Verfügbarkeitsklassen](#availability-patterns)
    * [Fail-over](#fail-over)
    * [Replizierung](#replication)
    * [Verfügbarkeit in Zahlen](#availability-in-numbers)
* [Domain name system](#domain-name-system)
* [Netzwerk für die Bereitstellung von Inhalten (CDN)](#content-delivery-network)
    * [Push CDNs](#push-cdns)
    * [Pull CDNs](#pull-cdns)
* [Load balancer](#load-balancer)
    * [Aktiv-passiv](#active-passive)
    * [Aktiv-passiv](#active-active)
    * [Schicht 4 load balancing](#layer-4-load-balancing)
    * [Schicht 7 load balancing](#layer-7-load-balancing)
    * [Horizontale Skalierung](#horizontal-scaling)
* [Reverse proxy (web server)](#reverse-proxy-web-server)
    * [Load balancer vs reverse proxy](#load-balancer-vs-reverse-proxy)
* [Applikationsschicht](#application-layer)
    * [Microservices](#microservices)
    * [Serviceerkennung](#service-discovery)
* [Datenbanken](#database)
    * [Relationale Datenbankmanagementsysteme (RDBMS)](#relational-database-management-system-rdbms)
        * [Master-slave Replizierung](#master-slave-replication)
        * [Master-master Replizierung](#master-master-replication)
        * [Federation](#federation)
        * [Sharding](#sharding)
        * [Denormalisierung](#denormalization)
        * [SQL tuning](#sql-tuning)
    * [NoSQL](#nosql)
        * [Key-value Speicher](#key-value-store)
        * [Dokumentenspeicher](#document-store)
        * [Spaltenorientierte Datenbanken](#wide-column-store)
        * [Graph Datenbanken](#graph-database)
    * [SQL oder NoSQL](#sql-or-nosql)
* [Cache](#cache)
    * [Client caching](#client-caching)
    * [CDN caching](#cdn-caching)
    * [Web server caching](#web-server-caching)
    * [Datenbank caching](#database-caching)
    * [Applikationscaching](#application-caching)
    * [Caching auf Datenbank-Abfragelevel](#caching-at-the-database-query-level)
    * [Caching auf Objektlevel](#caching-at-the-object-level)
    * [Wann den Cache aktualisieren](#when-to-update-the-cache)
        * [Cache-aside](#cache-aside)
        * [Write-through](#write-through)
        * [Write-behind (write-back)](#write-behind-write-back)
        * [Refresh-ahead](#refresh-ahead)
* [Asynchronie](#asynchronism)
    * [Message queues](#message-queues)
    * [Task queues](#task-queues)
    * [Gegendruck](#back-pressure)
* [Kommunikationstechniken](#communication)
    * [Transmission control protocol (TCP)](#transmission-control-protocol-tcp)
    * [User datagram protocol (UDP)](#user-datagram-protocol-udp)
    * [Remote procedure call (RPC)](#remote-procedure-call-rpc)
    * [Representational state transfer (REST)](#representational-state-transfer-rest)
* [Sicherheit](#security)
* [Appendix](#appendix)
    * [Zweierpotenzen](#powers-of-two-table)
    * [Latenzen die jeder Programmierer kennen sollte](#latency-numbers-every-programmer-should-know)
    * [Zusätzliche System Design Interviewfragen](#additional-system-design-interview-questions)
    * [Architekturen aus der echten Welt](#real-world-architectures)
    * [Unternehmensarchitekturen](#company-architectures)
    * [Engineering Blogs von Unternehmen](#company-engineering-blogs)
* [In Entwicklung](#under-development)
* [Danksagung](#credits)
* [Kontakt](#contact-info)
* [Lizenz](#license)

## Studienführer

> Empfohlene Themen basierend auf deinen Zeithorizont zum Interview (kurz, mittel, lang).

![Imgur](images/OfVllex.png)

**F: Muss ich für Interviews alles von hier wissen?**

**A: Nein, du musst nicht alles hier wissen um dich auf ein Interview vorzubereiten**.

Was man dich bei einem Interview frägt hängt von verschiedenen Variablen ab:

* Wie viel Erfahrung hast du
* Welchen technischen Hintergrund hast du
* Auf welche Position bewirbst du dich
* Bei welcher Firma ist das Interview
* Glück

Von erfahreneren Kandidaten wird allgemein mehr Wissen im Bereich System Design erwartet. Von Architekten oder Teamleitern wird mehr Wissen als vom individuellen Teammitglied erwartet. Moderne Tech-Unternehmen haben häufig multiple Vorstellungsrunden.

Beginne breit und fokussiere dich auf einige wenige Bereiche. Es hilft wenn man ein wenig über verschiedene Schlüsselthemen des System Designs. Passe den folgenden Studienführer basierend auf deinem Zeithorizont, deiner Erfahrung, die Position auf die du dich bewirbst und die Firma bei der du dich bewirbst, an.

* **Kurzer Zeithorizont** - Strebe ein **breites** Wissen über System Design Themen an. Übe mit dem Lösen **einiger** Interview Fragen.
* **Mittlerer Zeithorizont** - Strebe ein **breites** Wissen und **etwas** Tiefe über System Design Themen. Übe mit dem Lösen **vieler** Interview Fragen.
* **Langer Zeithorizont** - Strebe ein **breites** Wissen und **weit mehr** Tiefe über System Design Themen. Übe mit dem Lösen der **meisten** Interview Fragen.

# TODO Links überarbeiten

| | Kurzfristig | Mittelfristig | Langfristig |
|---|---|---|---|
| Lese dir [System design topics](#index-of-system-design-topics) durch um ein breites Verständnis vom Zusammenspiel von Systemen zu bekommen | :+1: | :+1: | :+1: |
| Lese dir ein paar Artikel von [Company engineering blogs](#company-engineering-blogs) zu den Firmen bei denen du dich vorstellst durch | :+1: | :+1: | :+1: |
| Lese dir ein paar Artikel von [Real world architectures](#real-world-architectures) durch | :+1: | :+1: | :+1: |
| Beschäftige dich mit [How to approach a system design interview question](#how-to-approach-a-system-design-interview-question) | :+1: | :+1: | :+1: |
| Arbeite dich durch [System design interview questions with solutions](#system-design-interview-questions-with-solutions) | Einige | Viele | Alle |
| Arbeite dich durch [Object-oriented design interview questions with solutions](#object-oriented-design-interview-questions-with-solutions) | Einige | Viele | Alle |
| Beschäftige dich mit [Additional system design interview questions](#additional-system-design-interview-questions) | Einige | Viele | Alle |
