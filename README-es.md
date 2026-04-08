*[English](README.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [한국어](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](README-es.md) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Añadir Traducción](https://github.com/donnemartin/system-design-primer/issues/28)*

**¡Ayuda a [traducir](TRANSLATIONS.md) esta guía!**

# El Manual de Diseño de Sistemas (System Design Primer)

<p align="center">
  <img src="images/jj3A5N8.png">
  <br/>
</p>

## Motivación

> Aprende a diseñar sistemas a gran escala.
> Prepárate para la entrevista de diseño de sistemas.

### Aprende a diseñar sistemas a gran escala

Aprender a diseñar sistemas escalables te ayudará a convertirte en un mejor ingeniero.

El diseño de sistemas es un tema amplio. Existe una **vasta cantidad de recursos dispersos por la web** sobre los principios de diseño de sistemas.

Este repositorio es una **colección organizada** de recursos para ayudarte a aprender cómo construir sistemas a escala.

### Aprende de la comunidad de código abierto (Open Source)

Este es un proyecto de código abierto que se actualiza continuamente.

¡Las [contribuciones](#contribuyendo) son bienvenidas!

### Prepárate para la entrevista de diseño de sistemas

Además de las entrevistas de algoritmos y código, el diseño de sistemas es un **componente obligatorio** del **proceso de entrevista técnica** en muchas empresas de tecnología de primer nivel (Big Tech).

**Practica preguntas comunes de entrevistas de diseño de sistemas** y **compara** tus resultados con **soluciones de muestra**: discusiones, código y diagramas.

Temas adicionales para la preparación de entrevistas:

* [Guía de estudio](#guía-de-estudio)
* [Cómo abordar una pregunta de entrevista de diseño de sistemas](#cómo-abordar-una-pregunta-de-entrevista-de-diseño-de-sistemas)
* [Preguntas de entrevista de diseño de sistemas, **con soluciones**](#preguntas-de-entrevista-de-diseño-de-sistemas-con-soluciones)
* [Preguntas de entrevista de diseño orientado a objetos, **con soluciones**](#preguntas-de-entrevista-de-diseño-orientado-a-objetos-con-soluciones)
* [Preguntas adicionales de entrevista de diseño de sistemas](#preguntas-adicionales-de-entrevista-de-diseño-de-sistemas)

## Tarjetas de Anki (Flashcards)

<p align="center">
  <img src="images/zdCAkB3.png">
  <br/>
</p>

Los [mazos de tarjetas de Anki](https://apps.ankiweb.net/) proporcionados utilizan la repetición espaciada para ayudarte a retener conceptos clave de diseño de sistemas.

* [Mazo de diseño de sistemas](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [Mazo de ejercicios de diseño de sistemas](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Mazo de ejercicios de diseño orientado a objetos](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Ideal para usar mientras te desplazas.

### Recurso de Programación: Desafíos Interactivos de Código

¿Buscas recursos para prepararte para la [**Entrevista de Programación**](https://github.com/donnemartin/interactive-coding-challenges)?

<p align="center">
  <img src="images/b4YtAEN.png">
  <br/>
</p>

Echa un vistazo al repositorio hermano [**Interactive Coding Challenges**](https://github.com/donnemartin/interactive-coding-challenges), que contiene un mazo de Anki adicional:

* [Mazo de programación](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## Contribuyendo

> Aprende de la comunidad.

Siéntete libre de enviar Pull Requests (PR) para ayudar a:

* Corregir errores
* Mejorar secciones
* Añadir nuevas secciones
* [Traducir](https://github.com/donnemartin/system-design-primer/issues/28)

El contenido que necesita pulirse se coloca [en desarrollo](#en-desarrollo).

Revisa las [Directrices para Contribuir](CONTRIBUTING.md).

---

## Índice de temas de diseño de sistemas

> Resúmenes de varios temas de diseño de sistemas, incluyendo pros y contras. **Todo es un compromiso técnico (trade-off)**.
>
> Cada sección contiene enlaces a recursos más profundos.

<p align="center">
  <img src="images/jrUBAF7.png">
  <br/>
</p>

* [Temas de diseño de sistemas: empieza aquí](#temas-de-diseño-de-sistemas-empieza-aquí)
    * [Paso 1: Revisa la videoclase sobre escalabilidad](#paso-1-revisa-la-videoclase-sobre-escalabilidad)
    * [Paso 2: Revisa el artículo sobre escalabilidad](#paso-2-revisa-el-artículo-sobre-escalabilidad)
* [Rendimiento (Performance) vs Escalabilidad](#rendimiento-vs-escalabilidad)
* [Latencia vs Rendimiento (Throughput)](#latencia-vs-throughput)
* [Disponibilidad vs Consistencia](#disponibilidad-vs-consistencia)
    * [Teorema CAP](#teorema-cap)
* [Patrones de Consistencia](#patrones-de-consistencia)
* [Patrones de Disponibilidad](#patrones-de-disponibilidad)
* [DNS (Sistema de Nombres de Dominio)](#domain-name-system)
* [CDN (Red de Entrega de Contenidos)](#content-delivery-network)
* [Balanceador de Carga](#load-balancer)
* [Proxy Inverso (Servidor Web)](#reverse-proxy-web-server)
* [Capa de Aplicación](#application-layer)
* [Base de Datos](#database)
* [Caché](#cache)
* [Asincronismo](#asynchronism)
* [Comunicación](#communication)
* [Seguridad](#security)
* [Apéndice](#appendix)

---

## Guía de estudio

> Temas sugeridos para revisar según tu cronograma de entrevista (corto, medio, largo).

![Imgur](images/OfVllex.png)

**P: Para las entrevistas, ¿necesito saber todo lo que hay aquí?**

**R: No, no necesitas saber todo para prepararte.** Lo que se te pregunte depende de variables como tu experiencia, el puesto y la empresa.

| | Corto | Medio | Largo |
|---|---|---|---|
| Leer los [temas de diseño de sistemas](#índice-de-temas-de-diseño-de-sistemas) | :+1: | :+1: | :+1: |
| Revisar blogs de ingeniería de empresas | :+1: | :+1: | :+1: |
| Estudiar [arquitecturas del mundo real](#arquitecturas-del-mundo-real) | :+1: | :+1: | :+1: |
| Practicar preguntas con soluciones | Algunas | Muchas | La mayoría |

---

*Nota: Esta traducción profesional está siendo mantenida por [Mauricio Sevilla (ConfiguroWeb)](https://github.com/configurowebmax). Si encuentras errores técnicos o quieres colaborar con las secciones detalladas, ¡tu PR es bienvenido!*
