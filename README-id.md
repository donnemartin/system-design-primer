*[English](README.md) ∙ [Indonesian](README-id.md) ∙ [日本語](README-ja.md) ∙ [简体中文](README-zh-Hans.md) ∙ [繁體中文](README-zh-TW.md) | [العَرَبِيَّة‎](https://github.com/donnemartin/system-design-primer/issues/170) ∙ [বাংলা](https://github.com/donnemartin/system-design-primer/issues/220) ∙ [Português do Brasil](https://github.com/donnemartin/system-design-primer/issues/40) ∙ [Deutsch](https://github.com/donnemartin/system-design-primer/issues/186) ∙ [ελληνικά](https://github.com/donnemartin/system-design-primer/issues/130) ∙ [עברית](https://github.com/donnemartin/system-design-primer/issues/272) ∙ [Italiano](https://github.com/donnemartin/system-design-primer/issues/104) ∙ [韓國語](https://github.com/donnemartin/system-design-primer/issues/102) ∙ [فارسی](https://github.com/donnemartin/system-design-primer/issues/110) ∙ [Polski](https://github.com/donnemartin/system-design-primer/issues/68) ∙ [русский язык](https://github.com/donnemartin/system-design-primer/issues/87) ∙ [Español](https://github.com/donnemartin/system-design-primer/issues/136) ∙ [ภาษาไทย](https://github.com/donnemartin/system-design-primer/issues/187) ∙ [Türkçe](https://github.com/donnemartin/system-design-primer/issues/39) ∙ [tiếng Việt](https://github.com/donnemartin/system-design-primer/issues/127) ∙ [Français](https://github.com/donnemartin/system-design-primer/issues/250) | [Add Translation](https://github.com/donnemartin/system-design-primer/issues/28)*

# Dasar Perancangan Sistem

<p align="center">
  <img src="http://i.imgur.com/jj3A5N8.png"/>
  <br/>
</p>

## Motivasi

> Belajar bagaimana merancang sistem skala besar.
>
> Persiapan wawancara rancangan sistem.

### Belajar bagaimana merancang sistem dalam skala besar

Belajar bagaimana merancang sistem terskalakan membantu menjadikan kita perekayasa yang lebih baik.

Perancangan sistem merupakan topik yang luas.
Sumber daya mengenai prinsip-prinsip perancangan sistem banyak tersebar di berbagai situs di internet.
Hal ini menyulitkan karena sumber daya tersebut tidak terkumpul di satu tempat.

Repositori ini menjadi tempat **pengorganisasian koleksi-koleksi** sumber daya yang dibutuhkan untuk belajar membangun sistem dalam sekala besar.

### Belajar dari komunitas sumber terbuka

Proyek ini merupakan proyek sumber terbuka yang terus diperbarui.

[Ayo kontribusi](#kontribusi) di sini!

### Persiapan wawancara perancangan sistem

Selain wawancara pemrograman, perancangan sistem adalah salah satu **komponen yang diwajibkan** dari dari **proses wawancara teknis** di banyak perusahaan teknologi.

**Latih pertanyaan-pertanyaan umum wawancara perancangan sistem** dan **bandingkan** hasilmu dengan contoh solusi: diskusi, program, dan diagram.

Topik-topik tambahan untuk persiapan wawancara:

* [Panduan belajar](#panduan-belajar)
* [Pendekatan menjawab pertanyaan wawancara perancangan sistem](#pendekatan-menjawab-pertanyaan-wawancara-perancangan-sistem)
* [Pertanyaan wawancara perancangan sistem beserta solusinya](#pertanyaan-wawancara-perancangan-sistem-beserta-solusinya)
* [Pertanyaan wawancara perancangan berbasis objek beserta solusinya](#pertanyaan-wawancara-perancangan-berbasis-objek-beserta-solusinya)
* [Tambahan pertanyaan wawancara perancangan sistem](#tambahan-pertanyaan-wawancara-perancangan-sistem)

## Kartu kilat Anki

<p align="center">
  <img src="http://i.imgur.com/zdCAkB3.png"/>
  <br/>
</p>

[Bungkusan kartu kilat Anki](https://apps.ankiweb.net/) yang disediakan menggunakan perulangan berjeda untuk membantu menguasai konsep-konsep kunci perancangan sistem.

* [Bungkusan perancangan sistem](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design.apkg)
* [Bungkusan latihan-latihan perancangan sistem](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/System%20Design%20Exercises.apkg)
* [Bungkusan latihan-latihan perancangan berbasis objek](https://github.com/donnemartin/system-design-primer/tree/master/resources/flash_cards/OO%20Design.apkg)

Cocok untuk digunakan ketika dalam perjalanan.

### Sumber daya kode: Tantangan kode interaktif

Apakah Anda mencari sumber daya untuk membantu persiapan [wawancara pemrograman](https://github.com/donnemartin/interactive-coding-challenges)?

<p align="center">
  <img src="http://i.imgur.com/b4YtAEN.png"/>
  <br/>
</p>

Silakan periksa repositori [Tantangan Pemrograman Interaktif](https://github.com/donnemartin/interactive-coding-challenges) yang berisi tambahan bungkusan Anki:

* [Bungkusan pemrograman](https://github.com/donnemartin/interactive-coding-challenges/tree/master/anki_cards/Coding.apkg)

## Kontribusi

> Belajar dari komunitas.

Silakan kirim permintaan tarik (pull request) untuk membantu hal-hal berikut:

* Membenarkan kesalahan
* Memperbaiki bagian yang ada
* Menambahkan bagian baru
* [Terjemahan](https://github.com/donnemartin/system-design-primer/issues/28)

Konten yang masih memerlukan polesan ditempatkan di bagian [dalam pengembangan](dalam-pengembangan)

Tinjau kembali [Pedomain Kontribusi](CONTRIBUTING.md).

## Indeks topik perancangan sistem

> Ringkasan dari berbagai topik perancangan sistem, termasuk kelebihan dan kekurangannya. **Segala sesuatu dalam perancangan adalah hasil kompromi**.
>
> Setiap bagian berisi tautan ke sumber daya yang lebih dalam.

<p align="center">
  <img src="http://i.imgur.com/jrUBAF7.png"/>
  <br/>
</p>

* [Topik perancangan sistem: Mulai dari sini](#topik-perancangan-sistem-mulai-dari-sini)
    * [Langkah 1: Tonton kuliah video skalabilitas](#langkah-1-tonton-kuliah-video-skalabilitas)
    * [Langkah 2: Baca artikel skalabilitas](#langkah-2-baca-artikel-skalabilitas)
    * [Langkah selanjutnya](#langkah-selanjutnya)
* [Kinerja vs skalabilitas](#kinerja-vs-skalabilitas)
* [Latensi vs lewatan](#latensi-vs-lewatan)
* [Ketersediaan vs konsistensi](#ketersediaan-vs-konsistensi)
    * [Teorema CAP](#teorema-cap)
        * [CP - konsistensi dan toleransi penyekatan](#cp---konsistensi-dan-toleransi-penyekatan)
        * [AP - ketersediaan dan toleransi penyekatan](#ap---ketersediaan-dan-toleransi-penyekatan)
* [Pola konsistensi](#pola-konsistensi)
    * [Konsistensi lemah](#konsistensi-lemah)
    * [Konsistensi yang mungkin terjadi (eventual consistency)](#konsistensi-yang-mungkin-terjadi-eventual-consistency)
    * [Konsisten kuat](#konsisten-kuat)
* [Pola ketersediaan](#pola-ketersediaan)
    * [Fail-over](#fail-over)
    * [Replikasi](#replikasi)
    * [Ketersediaan dalam angka](#ketersediaan-dalam-angka)
* [Domain name system](#domain-name-system)
* [Content delivery network](#content-delivery-network)
    * [CDN setor](#cdn-setor)
    * [CDN tarik](#cdn-tarik)
* [Penyeimbang beban](#penyeimbang-beban)
    * [Aktif-pasif](#aktif-pasif)
    * [Aktif-aktif](#aktif-aktif)
    * [Penyeimbangan beban lapisan ke-4](#penyeimbangan-beban-lapisan-ke-4)
    * [Penyeimbang beban lapisan ke-7](#penyeimbang-beban-lapisan-ke-7)
    * [Penyekalaan horizontal](#penyekalaan-horizontal)
* [Proksi terbalik (server web)](#proksi-terbalik-server-web)
    * [Penyeimbang beban vs proksi terbalik](#penyeimbang-beban-vs-proksi-terbalik)
* [Lapisan aplikasi](#lapisan-aplikasi)
    * [Layanan mikro (Microservices)](#layanan-mikro-microservices)
    * [Penemuan layanan (Service Discovery)](#penemuan-layanan-service-discovery-)
* [Basis data](#basis-data)
    * [Sistem pengelolaan basis data relasional](#sistem-pengelolaan-basis-data-relasional)
        * [Replikasi master-slave](#replikasi-master-slave)
        * [Replikasi master-master](#replikasi-master-master)
        * [Federasi](#federasi)
        * [Pecahan (Sharding)](#pecahan-sharding)
        * [Denormalisasi](#denormalisasi)
        * [Penyetelan SQL](#penyetelan-sql)
    * [NoSQL](#nosql)
        * [Gudang kunci-nilai](#gudang-kunci-nilai)
        * [Gudang dokumen (document store)](#gudang-dokumen-document-store)
        * [Gudang kolom lebar (Wide column store)](#gudang-kolom-lebar-wide-column-store)
        * [Basis data graf](#basis-data-graf)
    * [SQL atau NoSQL](#sql-atau-nosql)
* [Singgahan](#singgahan)
    * [Singgahan klien](#singgahan-klien)
    * [Singgahan CDN](#singgahan-cdn)
    * [Singgahan server web](#singgahan-server-web)
    * [Singgahan basis data](#singgahan-basis-data)
    * [Singgahan aplikasi](#singgahan-aplikasi)
    * [Singgahan pada level kueri basis data](#singgahan-pada-level-kueri-basis-data)
    * [Singgahan pada level objek](#singgahan-pada-level-objek)
    * [Kapan singgahan diperbarui](#kapan-singgahan-diperbarui)
        * [Singgahan sampingan (Cache-aside)](#singgahan-sampingan-cache-aside)
        * [Write-through](#write-through)
        * [Write-behind (write-back)](#write-behind-write-back)
        * [Refresh-ahead](#refresh-ahead)
* [Asinkronisme](#asinkronisme)
    * [Antrian pesan](#antrian-pesan)
    * [Antrian tugas](#antrian-tugas)
    * [Tekanan balik (Back pressure)](#tekanan-balik-back-pressure)
* [Komunikasi](#komunikasi)
    * [Transmission control protocol (TCP)](#transmission-control-protocol-tcp)
    * [User datagram protocol (UDP)](#user-datagram-protocol-udp)
    * [Remote procedure call (RPC)](#remote-procedure-call-rpc)
    * [Representational state transfer (REST)](#representational-state-transfer-rest)
* [Keamanan](#keamanan)
* [Lampiran](#lampiran)
    * [Tabel perpangkatan dua](#tabel-perpangkatan-dua)
    * [Nilai latensi yang perlu diketahui oleh setiap pemrogram](#nilai-latensi-yang-perlu-diketahui-oleh-setiap-pemrogram)
    * [ambahan pertanyaan wawancara perancangan sistem](#tambahan-pertanyaan-wawancara-perancangan-sistem)
    * [Arsitektu dunia nyata](#arsitektu-dunia-nyata)
    * [Arsitektur perusahaan](#arsitektur-perusahaan)
    * [Blog teknik perusahaan](#blog-teknik-perusahaan)
* [Dalam pengembangan](#dalam-pengembangan)
* [Kredit](#kredit)
* [Contact info](#contact-info)
* [License](#license)

## Panduan belajar

> Topik yang disarankan untuk ditinjau ulang berdasarkan garis waktu wawancara (pendek, sedang, panjang).

![Imgur](http://i.imgur.com/OfVllex.png)

**P: Apakah saya perlu mengetahui segala sesuatu yang ada di sini untuk wawancara?**

**J: Tidak. Anda tidak perlu tahu segala sesuatu yang ada di sini untuk persiapan wawancara**.

Apa yang menjadi pertanyaan saat Anda wawancara bergantung pada hal-hal yang tidak tentu, contohnya:

* Banyak pengalaman yang Anda miliki
* Latar belakang teknis Anda
* Posisi yang Anda lamar
* Perusahaan tempat Anda wawancara
* Keberuntungan

Kandidat yang berpengalaman umumnya diharapkan untuk tahu lebih mengenai perancangan sistem.
Arsitek atau pemimpin tim mungkin diharapkan untuk tahu lebih banyak dibandingkan kontributor perorangan.
Perusahan teknologi top kemungkinan besar mempunyai satu atau lebih sesi wawancara perancangan.

Mulai dari topik yang luas dan masuk lebih dalam ke beberapa area.
Pengetahuan dasar berbagai topik-topik kunci perancangan sistem akan sangat membantu.
Sesuaikan panduan berikut berdasarkan waktu, pengalaman, posisi yang dilamar, dan perusahan tempat Anda wawancara.

* **Garis waktu pendek** - Bidik topik-topik perancangan sistem secara luas. Latih dengan cara menjawab beberapa pertanyaan wawancara.
* **Garis waktu sedang** - Bidik topik-topik perancangan sistem secara luas dan perdalam dibeberapa bagian tertentu. Latih dengan cara menjawab banyak pertanyaan wawancara.
* **Garis waktu panjang** - Bidik topik-topik perancangan sistem secara laus dan mendalam. Latih dengan cara menyelesaikan seluruh pertanyaan wawancara.

| | Pendek | Menengah | Panjang |
|---|---|---|---|
| Baca sampai habis [Indeks topik perancangan sistem](#indeks-topik-perancangan-sistem) untuk pemahaman secara luas bagaimana cara kerja suatu sistem | :+1: | :+1: | :+1: |
| Baca sampai habis beberapa artikel di [Blog teknik perusahaan](#blog-teknik-perusahaan) untuk perusahaan tempat Anda wawancara | :+1: | :+1: | :+1: |
| Baca sampai habis beberapa [Arsitektur dunia nyata](#arsitektur-dunia-nyata) | :+1: | :+1: | :+1: |
| Ulas [Pendekatan menjawab pertanyaan wawancara perancangan sistem](#pendekatan-menjawab-pertanyaan-wawancara-perancangan-sistem) | :+1: | :+1: | :+1: |
| Tinjau [Pertanyaan wawancara perancangan sistem beserta solusinya](#pertanyaan-wawancara-perancangan-sistem-beserta-solusinya) | Sebagian | Banyak | Sebagian besar |
| Teliti [Pertanyaan wawancara perancangan berbasis objek beserta solusinya](#pertanyaan-wawancara-perancangan-berbasis-objek-beserta-solusinya) | Sebagaian | Banyak | Sebagian besar |
| Periksa [Tambahan pertanyaan wawancara perancangan sistem](#tambahan-pertanyaan-wawancara-perancangan-sistem) | Sebagian | Banyak | Sebagian besar |

## Pendekatan menjawab pertanyaan wawancara perancangan sistem

> Cara menangani pertanyaan wawancara perancangan sistem.

Wawancara perancangan sistem adalah pembicaraan yang bersifat terbuka.
Kita diharapkan untuk menuntun pembicaraan tersebut.

Kita dapat menggunakan langkah-langkah berikut untuk menuntun diskusi.
Untuk memperkuat proses diskusi, ulas bagian [Pertanyaan wawancara perancangan sistem beserta solusinya](#pertanyaan-wawancara-rancangan-sistem-beserta-solusinya) menggunakan langkah-langkah berikut.

### Langkah 1: Uraikan kasus penggunaan, batasan, dan asumsi

Kumpulkan kebutuhan dan tentukan ruang lingkup permasalahan.
Gunakan pertanyaan untuk memperjelas kasus penggunaan dan batasan.
Diskusikan juga asumsi yang diambil.

* Siapa pengguna sistem?
* Bagaimana pengguna sistem akan menggunakan sistem tersebut?
* Berapa banyak pengguna sistem?
* Apa yang dilakukan oleh sistem?
* Masukan dan keluaran apa yang ada pada sistem?
* Berapa besar ekspektasi data yang perlu ditangani?
* Berapa ekspektasi jumlah permintaan per detik?
* Berapa ekspektasi rasio baca dan tulis?

### Langkah 2: Buat rancangan tingkat tinggi

Jabarkan rancangan tingkat tinggi yang mencakup seluruh komponen penting.

* Buat sketsa komponen utama dan hubungannya
* Beri alasan untuk ide Anda

### Langkah 3: Rancang komponen inti

Perinci setiap komponen inti.
Sebagai contoh, jika Anda diminta [merancang layanan penyingkat tautan](solutions/system_design/pastebin/README.md), diskusikan hal-hal berikut:

* Pembangkitan dan penyimpanan campuran (hash) dari tautan penuh
    * [MD5](solutions/system_design/pastebin/README.md) dan [Base62](solutions/system_design/pastebin/README.md)
    * Tabrakan campuran (hash)
    * SQL atau NoSQL
    * Skema basis data
* Penerjemahan tautan hasil pencampuran menjadi tautan penuh
* API dan rancangan berbasis objek

### Langkah 4: Skalakan rancangan

Kenali dan tangani kemacetan dalam batasan yang ada.
Sebagai contoh, apakah diperlukan hal-hal berikut untuk menangani masalah skalabilitas?

* Pembagi beban (Load balancer)
* Penyekalaan mendatar (Horizontal scaling)
* Penyinggahan (Caching)
* Pemecahan basis data (Database sharding)

Diskusikan potensi solusi dan kompromi.
Segala sesuatunya adalah hasil kompromi.
Tangani kemacetan menggunakan [prinsip-prinsip perancangan sistem terskala](#indeks-topik-perancangan-sistem).

### Kalkulasi belakang amplop

Anda mungkin diminta untuk mengestimasi dengan tangan.
Aculah lampiran pada sumber daya berikut:

* [Kalkulasi belakang amplop](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)
* [Tabel perpangkatan dua](#tabel-perpangkatan-dua)
* [Nilai latensi yang perlu diketahui oleh setiap pemrogram](#nilai-latensi-yang-perlu-diketahui-oleh-setiap-pemrogram])

### Sumber dan bacaan lanjutan

Periksa tautan-tautan berikut untuk lebih memahami apa yang diharapkan saat wawancara perancangan sistem:

* [Cara jago melewati wawancara perancangan sistem](https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)
* [Wawancara perancangan sistem](http://www.hiredintech.com/system-design)
* [Pengantar Arsitektur dan Wawancara Perancangan Sistem](https://www.youtube.com/watch?v=ZgdS0EUmn70)

## Pertanyaan wawancara perancangan sistem beserta solusinya

> Pertanyaan umum pada wawancara perancangan sistem beserta contoh diskusi, kode, dan diagram.
>
> Solusi terhubung dengan konten di dalam folder `solutions/`.


| Pertanyaan | |
|---|---|
| Perancangan Pastebin.com (or Bit.ly) | [Solusi](solutions/system_design/pastebin/README.md) |
| Perancangan linimasa Twitter and pencarian (atau linimasa dan pencarian Facebook) | [Solusi](solutions/system_design/twitter/README.md) |
| Perancangan perayap web | [Solusi](solutions/system_design/web_crawler/README.md) |
| Perancangan Mint.com | [solusi](solutions/system_design/mint/README.md) |
| Perancangan struktur data untuk jejaring sosial | [Solusi](solutions/system_design/social_graph/README.md) |
| Perancangan gudang kunci-nilai (key-value) untuk mesin pencari | [Solusi](solutions/system_design/query_cache/README.md) |
| Perancangan peringkat penjualan Amazon berdasarkan fitur kategori | [Solusi](solutions/system_design/sales_rank/README.md) |
| Perancangan sistem terskala untuk jutaan pengguna pada AWS | [Solusi](solutions/system_design/scaling_aws/README.md) |
| Tambahkan pertanyaan perancangan sistem | [Kontribusi](#kontribusi) |

### Perancangan Pastebin.com (or Bit.ly)

[Lihat latihan dan solusi](solutions/system_design/pastebin/README.md)

![Imgur](http://i.imgur.com/4edXG0T.png)

### Perancangan linimasa Twitter and pencarian (atau linimasa dan pencarian Facebook)

[Lihat latihan dan solusi](solutions/system_design/twitter/README.md)

![Imgur](http://i.imgur.com/jrUBAF7.png)

### Perancangan perayap web

[Lihat latihan dan solusi](solutions/system_design/web_crawler/README.md)

![Imgur](http://i.imgur.com/bWxPtQA.png)

### Perancangan Mint.com

[Lihat latihan dan solusi](solutions/system_design/mint/README.md)

![Imgur](http://i.imgur.com/V5q57vU.png)

### Perancangan struktur data untuk jejaring sosial

[Lihat latihan dan solusi](solutions/system_design/social_graph/README.md)

![Imgur](http://i.imgur.com/cdCv5g7.png)

### Perancangan gudang kunci-nilai (key-value) untuk mesin pencari

[Lihat latihan dan solusi](solutions/system_design/query_cache/README.md)

![Imgur](http://i.imgur.com/4j99mhe.png)

### Perancangan peringkat penjualan Amazon berdasarkan fitur kategori

[Lihat latihan dan solusi](solutions/system_design/sales_rank/README.md)

![Imgur](http://i.imgur.com/MzExP06.png)

### Perancangan sistem terskala untuk jutaan pengguna pada AWS

[Lihat latihan dan solusi](solutions/system_design/scaling_aws/README.md)

![Imgur](http://i.imgur.com/jj3A5N8.png)

## Pertanyaan wawancara perancangan berbasis objek beserta solusinya

> Pertanyaan umum pada wawancara perancangan berbasis objek beserta diskusi, code, dan diagram.
>
> Solusi terhubung dengan konten di dalam folder `solutions/`.

> **Catatan: Bagian ini dalam proses pengembangan**

| Pertanyaan | |
|---|---|
| Perancangan peta campuran (hash map) | [Solusi](solutions/object_oriented_design/hash_table/hash_map.ipynb)  |
| Perancangan singgahan yang paling jarang digunakan (LRU cache) | [Solusi](solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |
| Perancangan pusat panggilan | [Solusi](solutions/object_oriented_design/call_center/call_center.ipynb)  |
| Perancangan tumpukan kartu | [Solusi](solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |
| Perancangan tempat parkir | [Solusi](solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |
| Perancangan server obrolan | [Solusi](solutions/object_oriented_design/online_chat/online_chat.ipynb)  |
| Perancangan larik melingkar (circular array) | [Kontribusi](#kontribusi)  |
| Add an object-oriented design question | [Kontribusi](#kontribusi) |

## Topik perancangan sistem: Mulai dari sini

Baru mengenal perancangan sistem?

Pertama-tama, kita perlu memahami prinsip-prinsip umum, belajar apa saja prinsip-prinsip tersebut, bagaimana penggunaannya, dan kelebihan dan kekurangannya.

### Langkah 1: Tonton kuliah video skalabilitas

[Kuliah skalabilitas di Harvard](https://www.youtube.com/watch?v=-W9F__D3oY4)

* Topik yang dicakup:
    * Penyekalaan tegak lurus (vertical scaling)
    * Penyekalan mendatar (horizontal scaling)
    * Penyinggahan (caching)
    * Pembagian beban (load balancing)
    * Pereplikasian basis data (database replication)
    * Penyekatan basis data (database partitioning)

### Langkah 2: Baca artikel skalabilitas

[Skalabilitas untuk orang-orangan](http://www.lecloud.net/tagged/scalability/chrono)

* Topik yang dicakup:
    * [Klona](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
    * [Basis data](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
    * [Singgahan](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
    * [Asinkron](http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)

### Langkah selanjutnya

Selanjutnya kita akan melihat kompromi pada tingkat tinggi:

* **Kinerja** vs **skalabilitas**
* **Latensi** vs **lewatan**
* **Ketersediaan** vs **konsistensi**

Perlu diingat bahwa **segala sesuatunya adalah hasil kompromi**.

Selanjutnya kita akan mempelajari lebih dalam topik-topik tertentu seperti DNS, CDNs, dan penyeimbang beban.

## Kinerja vs skalabilitas

Sebuah layanan disebut terskala jika layanan tersebut menghasilkan peningkatan kinerja secara proposional terhadap pertambahan sumber daya.
Secara umum, peningkatan kinerja berarti pertambahan unit kerja yang bisa diselesaikan.
kemungkinan lainnya adalah kemampuan menangani unit kerja ukurannya yang lebih besar, contohnya ketika himpunan data berkembang.<sup><a href=http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html>1</a></sup>

Cara lain melihat kinerja vs skalabilitas:

* Jika layanan terkena masalah kinerja, sistem terasa lambat oleh pengguna tunggal.
* Jika layanan terkena masalah skalabilitas, sistem terasa cepat oleh pengguna tunggal tetapi menjadi lambat ketika di bawah tekanan.

### Sumber dan bacaan lanjutan

* [Sepatah kata untuk skalabilitas](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)
* [Skalabilitas, ketersediaan, stabilitas, pola](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)

## Latensi vs lewatan

**Latensi** adalah waktu yang diperlukan untuk melakukan suatu aksi atau mendapatkan hasil.

**Lewatan** adalah jumlah aksi atau hasil yang didapatkan per satuan waktu.

Secara umum, kita menargetkan **lewatan yang maksimal** dengan **latensi yang dapat diterima**.

### Sumber dan bacaan lanjutan

* [Memahami latensi vs lewatan](https://community.cadence.com/cadence_blogs_8/b/sd/archive/2010/09/13/understanding-latency-vs-throughput)

## Ketersediaan vs konsistensi

### Teorema CAP

<p align="center">
  <img src="http://i.imgur.com/bgLMI2u.png"/>
  <br/>
  <i><a href=http://robertgreiner.com/2014/08/cap-theorem-revisited>Sumber: tinjauan kembali teorema CAP</a></i>
</p>

Dalam sistem komputer terdistribusi, kita hanya dapat mendukung dua dari jaminan berikut:

* **Konsistensi (Consistency)** - Setiap operasi baca menerima tulisan terbaru atau error
* **Ketersediaan (Availability)** - Setiap permintaan mendapat tanggapan, tanpa jaminan tanggapan tersebut berisi informasi terbaru
* **Toleransi Penyekatan (Partition Tolerance)** - Sistem tetap bekerja meskipun terjadi penyekatan yang berubah-ubah karena kegagalan jaringan

*Jaringan tidak dapat diandalkan sehingga kita perlu mendukung toleransi penyekatan.*
*Kita perlu memilih kompromi perangkat lunak antara konsistensi dan ketersediaan.*

#### CP - konsistensi dan toleransi penyekatan

Menunggu tanggapan dari mesin yang tersekat mungkin akan gagal karena kehabisan waktu.
CP adalah kompromi yang baik jika bisnis mempunyai kebutuhan baca dan tulis yang bersifat atom.

#### AP - ketersediaan dan toleransi penyekatan

Tanggapan berisi data terakhir yang tersedia pada sebuah mesin dimana data tersebut mungkin bukan data terbaru.
Tulisan bakal memerlukan beberapa saat untuk tersebar ke mesin lain ketika masalah penyekatan selesai.

AP adalah kompromi yang baik jika kebutuhan bisnis mengijinkan untuk [konsistensi yang mungkin terjadi](#konsistensi-yang-mungkin-terjadi-eventual-consistency) atau ketika sistem perlu tetap bekerja walaupun ada kesalahan pihak luar.

### Sumber dan bacaan lanjutan

* [Tinjauan kembali teorema CAP](http://robertgreiner.com/2014/08/cap-theorem-revisited/)
* [Pengantar teoream CAP dalam bahasa inggris polos](http://ksat.me/a-plain-english-introduction-to-cap-theorem)
* [Tanya jawab CAP](https://github.com/henryr/cap-faq)

## Pola konsistensi

Dengan adanya salinan ganda data, kita dihadapkan dengan pilihan cara untuk menyinkronkan salinan tersebut.
Salinan data perlu disinkronkan sehingga pengguna memiliki pandangan yang konsisten terhadap data.
Ingat kembali definisi konsistensi dari [teorema CAP](#teorema-cap) - Setiap operasi baca menerima tulisan terbaru atau gagal.

### Konsistensi lemah

Setelah operasi tulis, operasi baca belum tentu melihat hasil operasi tulis.
Pendekatan usaha terbaik perlu diambil.

Pendekatan ini bisa dilihat pada sistem contohnya Memcached.
Konsistensi lemah bekerja dengan baik pada sistem kasus penggunaan waktu nyata contohnya VoIP, obrolan video, dan permainan banyak pemain waktu nyata.
Sebagai contoh, jika kita dalam panggilan telpon dan kehilangan sinyal untuk beberapa detik, kita tidak akan mendengar pembicaraan yang terjadi ketika koneksi terputus.

### Konsistensi yang mungkin terjadi (eventual consistency)

Setelah operasi tulis, operasi baca akan melihat pada waktu yang akan datang (biasanya dalam mili seconds).
Data direplikasi secara asinkron.

Pendekatan ini terlihat di sistem contohnya DNS dan email.
Konsistensi yang mungkin terjadi bekerja dengan baik di sistem yang sangat tersedia.

### Konsisten kuat

Setelah operasi tulis, operasi baca akan langsung melihatnya.
Data direplikasi secara sinkron.

Pendekatan ini terlihat pada sistem pemberkasan dan RDBMS.
Konsistensi kuat bekerja dengan baik di sistem yang membutuhkan transaksi.

### Sumber dan bacaan tambahan

* [Transaksi lintas pusat data](http://snarfed.org/transactions_across_datacenters_io.html)

## Pola ketersediaan

Ada dua pola utama untuk mendukung ketersediaan tinggi: **fail-over** dan **replikasi**.

### Fail-over

#### Aktif-pasif

Dengan mekanisme fail-over aktif-pasif, denyut nadi dikirim antara server aktif dan pasif dalam keadaan siaga.
Jika pengiriman denyut nadi terinterupsi, server pasif akan mengambil alih alamat IP yang aktif dan meneruskan layanan.

Lamanya waktu penghentian ditentukan berdasarkan kondisi server pasif apakah dalam status siaga 'panas' atau siaga 'dingin'.
Hanya server yang aktif yang melayani permintaan.

Fail-over aktif-pasif disebut juga dengan istilah failover _master-slave_.

#### Aktif-aktif

Dalam aktif-aktif, kedua server mengelola layanan secara berbarengan, menyebarkan beban kerja diantara mereka.

Jika server terhubung langsung ke internet, DNS perlu mengetahui IP publik kedua server.
Jika server terhubung ke jaringan internal, logik pada aplikasi perlu mengetahui alamat IP kedua server.

Failover aktif-aktif disebut juga dengan istilah failover _master-master_.

### Kerugian: failover

* Fail-over meningkatkan jumlah perangkat keras yang dibutuhkan dan kompleksitas.
* Ada potensi kehilangan data ketika sistem aktif gagal pada ada data terbaru yang sudah berhasil ditulis di server aktif tetapi belum direplikasi ke server pasif.

### Replikasi

#### Master-slave and master-master

Topik ini dibahas lebih lanjut di bagian [Basis data](#basis-data):

* [Replikasi Master-slave](#replikasi-master-slave)
* [Replikasi Master-master](#replikasi-master-master)

### Ketersediaan dalam angka

Ketersediaan seringnya dinyatakan berdasarkan waktu nyala (atau waktu padam) sebagai persentasi dari waktu ketersediaan layanan.
Ketersediaan umumnya diukur di dalam angka 9s.
Sebuah layanan dengan tingkat ketersediaan 99.99% digambarkan sebagai layanan yang memiliki empat 9.

#### Ketersediaan 99.9% - tiga 9

| Durasi            | Waktu padam yang terterima|
|---------------------|--------------------|
| Waktu padam per tahun  | 8h 45min 57s       |
| Waktu padam per bulan  | 43m 49.7s          |
| Waktu padam per minggu | 10m 4.8s           |
| Waktu padam per hari   | 1m 26.4s           |

#### Ketersediaan 99.99% - empat 9

| Durasi            | Waktu padam yang terterima|
|---------------------|--------------------|
| Waktu padam per tahun  | 52min 35.7s        |
| Waktu padam per bulan  | 4m 23s             |
| Waktu padam per minggu | 1m 5s              |
| Waktu padam per hari   | 8.6s               |

#### Ketersediaan sejajar vs berurutan

Jika suatu layanan terdiri dari beberapa komponen yang rentan mengalami kegagalan, ketersediaan layanan secara keseluruhan tergantung apakah komponen tersebut sejajar atau berurutan.

###### Berurutan

Ketersedian secara keseluruhan berkurang ketika dua komponen dengan tingkat ketersediaan kurang dari 100% bekerja berurutan:

```
Ketersedian (Total) = Ketersediaan (Foo) * Ketersedian (Bar)
```

Jika `Foo` dan `Bar` keduanya masing-masing memiliki 99.9% tingkat ketersediaan, maka total tingkat ketersediaan keduanya berurutan menjadi 99.8%.

###### Sejajar

Ketersediaan secara keseluruhan meningkat ketika dua komponen dengan tingkat tersediaan kurang dari 100% bekerja sejajar:

```
Ketersediaan (Total) = 1 - (1 - Ketersediaan (Foo)) * (1 - Ketersediaan (Bar))
```

Jika `Foo` dan `Bar` keduanya masing-masing memiliki tingkat ketersediaan sebesar 99.9%, maka total tingkat ketersediaan sejajar keduanya adalah 99.9999%.

## Domain name system

<p align="center">
  <img src="http://i.imgur.com/IOyLj4i.jpg"/>
  <br/>
  <i><a href=http://www.slideshare.net/srikrupa5/dns-security-presentation-issa>Sumber: presentasi keamanan DNS</a></i>
</p>

Domain Name System (DNS) menerjemahkan nama suatu domain seperti www.example.com menjadi alamaat IP.

DNS bersifat hierarki, dengan beberapa server berkuasa di level puncak.
Router atau ISP yang kita gunakan menyediakan informasi mengenai server DNS yang dihubungi ketika melakukan pencarian.
Server DNS tingkat lebih rendah menyinggahkan pemetaan yang mungkin tidak mutakhir karena penundaan perambatan DNS.
Hasil DNS bisa juga disinggahkan oleh peramban atau sistem operasi selama periode tertentu yang ditentukan oleh [masa berlaku DNS](https://en.wikipedia.org/wiki/Time_to_live).

* **NS record (name server)** - Menentukan server DNS untuk domain/subdomain tersebut.
* **MX record (mail exchange)** - Menentukan server email untuk penerimaan pesan.
* **A record (address)** - Mengarahkan sebuah nama ke alamat IP.
* **CNAME (canonical)** - Mengarahkan sebuah nama ke nama lain. Nama lain tersebut bisa berupa `CNAME` atau `A` (Contohnya example.com diarahkan ke www.example.com).

Layanan seperti [CloudFlare](https://www.cloudflare.com/dns/) dan [Route 53](https://aws.amazon.com/route53/) menyediakan layanan DNS terkelola.
Beberapa layanan DNS mampu mengarahkan lalu lintas melalui berbagai metode:

* [Weighted round robin](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
    * Mencegah lalu lintas bergerak menuju server yang sedang dalam pemeliharaan
    * Menyeimbangkan antara berbagai ukuran gugusan
    * Pengujian A/B
* Berdasarkan latensi
* Berdasarkan geolokasi

### Kekurangan: DNS

* Pengaksesan server DNS menambahkan sedikit penundaan, walaupun sudah diperingan menggunakan singgahan seperti penjelasan di atas.
* Pengelolaan server DNS bisa jadi rumit dan umumnya dikelola oleh [pemerintah, penyedia jasa internet, dan perusahaan besar](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729).
* Layanan DNS belakangan ini mengalami [serangan DDoS](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/), preventing users from accessing websites such as Twitter without knowing Twitter's IP address(es).

### Sumber dan bacaan lanjutan

* [Arsitektur DNS](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)
* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [Artikel tentang DNS](https://support.dnsimple.com/categories/dns/)

## Content delivery network

<p align="center">
  <img src="http://i.imgur.com/h9TAuGI.jpg"/>
  <br/>
  <i><a href=https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/>Sumber: Mengapa menggunakan CDN</a></i>
</p>

Content delivery network (CDN) adalah jaringan server proksi yang tersebar secara global, menyuguhkan konten dari lokasi terdekat ke pengguna.
Umumnya, berkas statis seperti HTML/CSS/JS, foto, dan video disuguhkan oleh CDN, meskipun beberapa CDN seperti Amazon CloudFront mendukung konten dinamis.
Resolusi DNS situs akan memberitahu pengguna server mana yang dihubungi.

Penyuguhan konten melalui CDN bisa meningkatkan kinerja secara signifikan melalui dua cara:

* Pengguna menerima konten dari pusat data terdekat ke mereka
* Server kita tidak perlu melayani permintaan yang dipenuhi oleh CDN

### CDN setor

CDN setor menerima konten baru kapanpun perubahan terjadi di server kita.
Kita bertanggungjawab penuh untuk menyediakan konten, mengunggah langsung ke CDN dan menulis ulang alamat URL supaya mengarah ke CDN.
Kita dapat mengkonfigurasi kapan konten kedaluarsa dan kapan konten diperbarui.
Konten diunggah hanya ketika ada konten baru atau konten berubah untuk meminimalkan lalu lintas dan memaksimalkan penyimpanan.

Situs dengan lalu lintas kecil atau situs dengan konten yang tidak sering diperbarui bekerja baik dengan CDN setor.
Konten ditempatkan pada CDN sekali, daripada ditarik ulang secara berkala.

### CDN tarik

CDN tarik mengambil konten baru dari server kita ketika ada user pertama yang meminta konten tersebut.
Kita menyimpan konten di server kita dan menulis ulang URL supaya mengarah ke CDN.
Mekanisme ini menghasilkan permintaan yang lebih lambat sampai konten singgah di CDN.

[Masa berlaku](https://en.wikipedia.org/wiki/Time_to_live) menentukan berapa lama konten akan singgah.
CDN tarik meminimalkan ruang penyimpanan pada CDN, tetapi bisa menciptakan lalu lintas yang berlebihan jika berkas kedaluarsa dan ditarik sebelum berkas tersebut diubah.

Situs dengan lalu lintas padat bekerja baik dengan CDN tarik, sebagaimana lalu lintas tersebar secara merata dengan konten yang baru diminta saja yang tersimpan di CDN.

### Kekurangan: CDN

* Biaya CDN bisa signifikan tergantung kepadatan lalu lintas, meskipun perlu ditimbang biaya tambahan yang akan ditanggung tanpa CDN.
* Konten mungkin kedaluarsa jika konten diupdate sebelum masa berlaku habis.
* CDN mengharuskan perubahan alamat URL sehingga konten statis mengarah ke CDN.

### Sumber dan bacaan lanjutan

* [Pengiriman konten terdistribusi secara global](https://figshare.com/articles/Globally_distributed_content_delivery/6605972)
* [Perbedaan antara CDN setor dan tarik](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)

## Penyeimbang beban

<p align="center">
  <img src="http://i.imgur.com/h81n9iK.png"/>
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Sumber: Pola perancangan sistem terskala</a></i>
</p>

Penyeimbang beban membagikan permintaan klien yang masuk ke sumber daya komputasi seperti server aplikasi dan basis data.
Dalam setiap kasus, penyeimbang beban mengembalikan tanggapan dari sumber daya komputasi ke klien yang sesuai.
Penyeimbang beban efektif dalam hal:

* Mencegah permintaan dilayani oleh server yang tidak sehat
* Mencegah sumber daya kelebihan beban
* Membantu menghilangkan titik kegagalan

Penyeimbang beban bisa diimplementasikan menggunakan perangkat keras (mahal) atau dengan perangkat lunak seperti HAProxy.

Yang termasuk dalam manfaat tambahan:

* **Terminasi SSL** - Mendekripsi permintaan yang datang dan mengenkripsi tanggapan server sehingga server bagian belakang tidak perlu melakukan operasi yang berpotensi mahal ini
    * Menghilangkan kebutuhan menginstall [sertifikat x.509](https://en.wikipedia.org/wiki/X.509) pada setiap server
* **Persistensi sesi** - Mengeluarkan kuki dan mengarahkan permintaan klien yang spesifik ke server yang sama jika aplikasi web tidak melakukan pelacakan sesi

Untuk menjaga dari kegagalan, biasa dilakukan pendirian penyeimbang beban berganda, baik itu mode [aktif-pasif](#aktif-pasif) atau [aktif-aktif](#aktif-aktif).

Penyeimbang beban dapat mengarahkan lalu linta berdasarkan berbagai metrik termasuk:

* Sembarang
* Beban tersedikit
* Sesi/kuki
* [Bergantian atau bergantian dengan bobot](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)
* [Lapisan ke-4](#penyeimbangan-beban-lapisan-ke-4)
* [Lapisan ke-7](#layer-7-load-balancing)

### Penyeimbangan beban lapisan ke-4

Penyeimbang beban lapisan ke-4 menggunakan informasi pada [lapisan transportasi](#komunikasi) untuk menentukan bagaimana cara mendistribusikan permintaan.
Umumnya, proses ini melibatkan asal alamat ip, tujuan alamat ip dan porta pada tajuk (header), tetapi bukan isi paket.
Penyeimbang beban lapisan ke-4 meneruskan paket jaringan dari dan ke server hulu dengan melakukan [translasi alamat jaringan](https://www.nginx.com/resources/glossary/layer-4-load-balancing/).

### Penyeimbang beban lapisan ke-7

Penyeimbang beban lapisan ke-7 menggunakan informasi pada [lapisan aplikasi](#komunikasi) untuk menentukan cara mendistribusikan permintaan.
Informasi yang dapat dilibat adalah tajuk, pesan, dan kuki.
Penyeimbang beban lapisan ke-7 mengakhiri lalu lintas jaringan, membaca pesan, membuat keputusan penyeimbangan beban, kemudian membuka koneksi ke server terpilih.
Sebagai contoh, penyeimbang beban lapisan ke-7 bisa mengarahkan lalu lintas video menuju server yang menginangi video tersebut sembari mengarahkan lalu lintas tagihan pengguna yang lebih sensitif ke server yang keamanannya sudah diperketat.
Layer 7 load balancers look at the [application layer](#communication) to decide how to distribute requests.  

Dengan mengorbankan fleksibilitas, penyeimbang beban lapisan ke-4 memerlukan waktu dan sumber daya komputasi yang lebih sedikit dibandingkan dengan penyeimbang beban lapisan ke-7, walaupun dampak kinerjanya bisa sangat minim pada perangkat keras komoditas modern.

### Penyekalaan horizontal

Penyeimbang beban bisa juga membantu penyekalaan horizontal untuk meningkatkan kinerja dan ketersediaan.
Penyekalaan keluar menggunakan mesin komoditas lebih efisien dari segi biaya dan menghasilkan ketersediaan yang lebih tinggi dibandingkan dengan penyekalaan ke atas server.
Penyekalaan ke atas sebuah server individu menggunakan perangkat keras yang lebih mahal disebut dengan penyekalaan vertikal.
Mencari pekerja yang bekerja pada perangkat lunak komoditas juga lebih mudah dibandingkan mencari pekerja untuk sistem firma terspesialisasi.

#### Kekurangan: Penyekalaan horizontal

* Penyekalaan secara horizontal meningkatkan kompleksitas dan melibatkan pengklonaan server
    * Server seharusnya nirkeadaan: server seharusnya tidak mengandung data apapun yang berhubungan dengan pengguna seperti sesi dan profil pengguna
    * Sesi dapat disimpan pada penyimpanan data terpusat seperti [basis data](#basis-data) (SQL, NoSQL) atau [singgahan](#singgahan) persisten (Redis, Memcached)
* Server hilir seperti singgahan dan basis data perlu menangani lebih banyak koneksi secara simultan ketika terjadi penyekalaan keluar server hulu

### Kekurangan: penyeimbang beban

* Penyeimbang beban bisa menjadi titik macet kinerja jika penyeimbang beban tidak memiliki sumber daya yang cukup atau tidak dikonfigurasi dengan benar.
* Menambahkan penyeimbang beban untuk menghilangkan titik kegagalan akan meningkatkan kompleksitas.
* Penyeimbang beban tunggal adalah titik kegagalan. Konfigurasi penyeimbang beban ganda membuat sistem lebih kompleks lagi.

### Sumber dan bacaan lanjutan

* [Arsitektur NGINX](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [Panduan arsitektur HAProxy](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Penyekalaan](http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))
* [Penyeimbang beban lapisan ke-4](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)
* [Penyeimbang beban lapisak ke-7](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)
* [Konfigurasi pendengar ELB](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)

## Proksi terbalik (server web)

<p align="center">
  <img src="http://i.imgur.com/n41Azff.png"/>
  <br/>
  <i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Sumber: Wikipedia</a></i>
  <br/>
</p>

Proksi terbalik adalah server web yang memusatkan layanan-layanan internal dan menyediakan antarmuka terpadu ke publik.
Permintaan dari klien diteruskan ke salah satu server yang mampu memenuhi permintaan tersebut sebelum proksi terbalik mengembalikan tanggapan server tersebut ke klien.

Benefit tambahan yang termasuk di dalamnya:

* **Meningkatkan keamanan** - Menyembunyikan informasi mengenai server bagian belakang, memasukan alamat IP ke dalam daftar hitam, dan membatasi jumlah koneksi per klien
* **Meningkatkan skalabilitas dan fleksibilitas** - Klien hanya melihat alamat IP proksi terbalik sehingga memungkinkan kita untuk menyekalakan server atau mengganti konfigurasi
* **Terminasi SSL** - Mendekripsi permintaan yang datang dan mengenkripsi tanggapan server sehingga server bagian belakang tidak perlu melakukan operasi yang berpotensi mahal ini
    * Menghapus keperluan untuk menginstall [sertifikat x.509](https://en.wikipedia.org/wiki/X.509) di setiap server
* **Kompresi** - Memampatkan tanggapan server
* **Singgahan** - Mengembalikan tanggapan berdasarkan permintaan yang ada disinggahan
* **Konten statis** - Melayani konten statis secara langsung
    * HTML/CSS/JS
    * Foto
    * Video
    * Dan lainnya

### Penyeimbang beban vs proksi terbalik

* Penggelaran penyeimbang beban berguna ketika kita mempunyai beberapa server. Seringkali, penyeimbang beban mengarahkan lalu lintas ke sekumpulan server yang melayani fungsi yang sama.
* Proksi terbalik bisa berguna bahkan untuk satu server web atau satu server aplikasi sehingga membuka manfaat yang dijelaskan pada bagian sebelumnya.
* Solusi seperti NGINX dan HAProxy mendukung pemproxyan terbalik dan penyeimbangan beban lapisan ke-7.

### Kekurangan: proksi terbalik

* Menambahkan proksi terbalik meningkatkan kompleksitas.
* Proksi terbalik tunggal adalah titik kegagalan. Pengkonfigurasian proksi terbalik ganda (Contohnya [failover](https://en.wikipedia.org/wiki/Failover)) meningkatkan kompleksitas lagi.

### Sumber dan bacaan lanjutan

* [Proksi terbalik vs penyeimbang beban](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)
* [Arsitektur NGINX](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)
* [Panduan arsitektur HAProxy](http://www.haproxy.org/download/1.2/doc/architecture.txt)
* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)

## Lapisan aplikasi

<p align="center">
  <img src="http://i.imgur.com/yB5SYwm.png"/>
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Sumber: Pengantar pengarsitekan sistem secara terskala</a></i>
</p>

Pemisahan antara lapisan web dengan lapisan aplikasi (dikenal juga dengan istilah lapisan platform) memungkinkan kita untuk menyekala dan mengkonfigurasi kedua lapisan secara independen.
Penambahan API baru menghasilkan penambahan server aplikasi tanpa perlu penambahan server web.
Prinsip tanggung jawab tunggal menganjurkan untuk layanan yang kecil dan mandiri yang bekerja secara bersama.
Tim kecil dengan layanan kecil bisa merencanakan pertumbuhan yang cepat secara lebih agresif. 

Pekerja pada lapisan aplikasi membantu mengaktifkan [asinkronisme](#asinkronisme).

### Layanan mikro (Microservices)

Sehubungan dengan diskusi ini adalah [microservices](https://en.wikipedia.org/wiki/Microservices) dimana dapat digambarkan sebagai sekumpulan layanan yang kecil, modular, dan dapat digelar secara independen.
Setiap layanan menjalankan proses yang unik dan berkomunikasi melalui mekanisme ringan dan sudah terdefinisi dengan baik untuk melayani tujuan bisnis.<sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>

Contohnya, Pinterest bisa memiliki layanan mikro: profil pengguna, pengikut, umpan, pencarian, pengunggahan foto, dan lain.

### Penemuan layanan (Service Discovery)

Sistem seperti [Consul](https://www.consul.io/docs/index.html), [Etcd](https://coreos.com/etcd/docs/latest), dan [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) bisa membantu layanan untuk saling menemukan dengan cara melacak nama yang terdaftar, alamat, dan porta.
[Pemeriksaan kesehatan](https://www.consul.io/intro/getting-started/checks.html) membantu menguji integritas layanan dan seringkali dilakukan menggunakan titik akhir [HTTP](#hypertext-transfer-protocol-http).
Baik Consul dan Etcd keduanya memiliki [gudang kunci-nilai](#gudang-kunci-nilai) bawaan yang berguna untuk menyimpan nilai konfigurasi dan data bersama lainnya.

### Kekurangan: lapisan aplikasi

* Penambahan lapisan aplikasi dengan layanan hubungan renggang memerlukan pendekatan yang berbeda dari sudut pandang arsitektur, operasi, dan proses dibandingkan dengan sistem monolitik.
* Layanan mikro bisa meningkatkan kompleksitas dalam aspek penggelaran dan operasi.

### Sumber dan bacaan lanjutan

* [Pengantar pengarsitekan sistem secara terskala](http://lethain.com/introduction-to-architecting-systems-for-scale)
* [Meretakan wawancara perancangan sistem](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Arsitektur berorientasi layanan](https://en.wikipedia.org/wiki/Service-oriented_architecture)
* [Pengantar Zookeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)
* [Alasan kenapa kita perlu tahu mengenai pembangunan layanan mikro](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)

## Basis data

<p align="center">
  <img src="http://i.imgur.com/Xkm5CXz.png"/>
  <br/>
  <i><a href=https://www.youtube.com/watch?v=w95murBkYmU>Sumber: Penyekalaan untuk 10 juta pengguna pertama</a></i>
</p>

### Sistem pengelolaan basis data relasional

Basis data relasional seperti SQL merupakan sekumpulan butir data yang diorganisasi ke dalam tabel.

***ACID** adalah sekumpulan property dari [transaksi](https://en.wikipedia.org/wiki/Database_transaction) basis data relasional 

* **Atomicity** - Seluruh operasi dalam transaksi berhasil seluruhnya atau gagal semuanya
* **Consistency** - Transaksi apa pun akan membawa basis data dari satu keadaan ke keadaan lain
* **Isolation** - Menjalankan transaksi secara bersamaan memiliki hasil yang sama seolah-olah transaksi dijalankan secara berurutan
* **Durability** - Sekali transaksi telah dilakukan, transaksi akan bertahan

Ada banyak teknik untuk menyekala basis data relasional: **replikasi master-slave**, **replikasi master-master**, **federasi**, **sharding**, **denormalization**, dan **penyetelan SQL**.

#### Replikasi master-slave

Master melayani operasi baca dan tulis, mereplikasi tulisan ke slave lainnya dimana slave hanya melayani operasi baca.
Slave bisa juga mereplikasi data ke slave lainnya membentuk mode seperti pohon.
Jika master luring, sistem tetap bisa beroperasi dalam mode hanya baca sampai salah satu slave dipromosikan menjadi master atau master yang baru diadakan.

<p align="center">
  <img src="http://i.imgur.com/C9ioGtn.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Sumber: Skalabilitas, Ketersediaan, Kestabilan, Pola-pola</a></i>
</p>

##### Kekurangan: replikasi master-slave

* Logik tambahan diperlukan untuk mempromosikan sebuah slave menjadi master.
* Lihat [Kekurangan: replikasi](#kekurangan-replikasi) untuk hal yang berhubungan dengan master-slave dan master-master.

#### Replikasi master-master

Kedua master melayani operasi baca dan tulis dan berkoordinasi satu sama lain untuk operasi tulis.
Jika salah satu master mati, sistem tetap bisa beroperasi untuk baca dan tulis.

<p align="center">
  <img src="http://i.imgur.com/krAHLGg.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Sumber: Skalabilitas, Ketersediaan, Kestabilan, Pola-pola</a></i>
</p>

##### Kekurangan: master-master replication

* Kita akan memerlukan penyeimbang beban atau membuat perubahan pada logik aplikasi untuk menentukan kemana operasi tulis diarahkan.
* Kebanyakan sistem master-master memiliki konsistensi yang longgar (melanggar prinsip ACID) atau mengalami peningkatan jeda operasi tulis karena ada sinkronisasi.
* Resolusi konflik lebih berperan karena lebih banyak simpul yang ditambahkan dan peningkatan latensi.
* Lihat [Kekurangan: replikasi](#kekurangan-replikasi) untuk hal yang berhubungan dengan master-slave dan master-master.

##### Kekurangan: replikasi

* Ada potensi kehilangan data jika master gagal sebelum data yang baru tertulis direplikasi ke simpul yang lain.
* Tulisan diputar ulang pada replika baca.  Jika ada banyak tulisan, replika baca bisa macet ketika menulis ulang tulisan dan tidak mampu melakukan banyak operasi baca.
* Semakin banyak slave baca, semakin banyak pula yang perlu direplikasi sehingga meningkatkan jeda replikasi.
* Pada beberapa sistem, menulis ke master bisa menghidupkan beberapa ulir (thread) untuk menulis secara paralel, sedangkan replika baca hanya mendukung menulis secara berurutan menggunakan satu ulir.
* Replikasi meningkatkan kebutuhan perangkat keras dan tambahan kompleksitas.

##### Sumber dan bacaan lanjuta: replikasi

* [Skalabilitas, Ketersediaan, Kestabilan, Pola-pola](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Replikasi multi master](https://en.wikipedia.org/wiki/Multi-master_replication)

#### Federasi

<p align="center">
  <img src="http://i.imgur.com/U3qV33e.png"/>
  <br/>
  <i><a href=https://www.youtube.com/watch?v=w95murBkYmU>Sumber: Penyekalaan untuk 10 juta pengguna pertama</a></i>
</p>

Federasi (atau penyekatan fungsional) membagi basis data berdasarkan fungsi.
Sebagai contoh, alih-alih basis data tunggal yang monolitik, kita bisa memiliki tiga basis data: **forum**, **pengguna**, dan **produk**.
Federasi mengurangi lalu lintas baca dan tulis ke setiap basis data dan oleh karena itu mengurangi jeda replikasi.
Basis data yang lebih kecil memungkinkan lebih banyak data yang bisa dimuat di dalam memori sehingga meningkatkan popularitas singgahan dikarenakan kualitas lokalitasnya.
Tanpa master terpusat tunggal yang menyambungkan tulisan sehingga kita bisa melakukan operasi tulis secara paralel yang berdampak meningkatnya lewatan.

##### Kekurangan: federasi

* Federasi tidak efektif jika skema kita memerlukan fungsi atau tabel dalam jumlah yang sangat besar.
* Kita perlu memperbarui logik aplikasi untuk menentukan basis data mana untuk operasi baca dan tulis.
* Menggabungkan data dari dua basis data menjadi lebih kompleks ketika menggunakan [hubungan server](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers).
* Federasi meningkatkan jumlah perangkat keras dan kompleksitas.

##### Sumber dan bacaan lanjutan: federasi

* [Penyekalaan untuk 10 juta pengguna pertama](https://www.youtube.com/watch?v=w95murBkYmU)

#### Pecahan (Sharding)

<p align="center">
  <img src="http://i.imgur.com/wU8x5Id.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Sumber: Skalabilitas, Ketersediaan, Kestabilan, Pola-pola</a></i>
</p>

Pecahan (sharding) mendistribusikan data ke berbagai basis data yang berbeda dimana setiap basis data hanya dapat mengelola subset data.
Ambil basis data pengguna sebagai contoh. Ketika jumlah pengguna bertambah maka lebih banyak pecahan yang ditambahkan ke dalam gugusan.

Serupa dengan manfaat dari (federasi)[#federasi], pecahan mengurangi lalu lintas baca dan tulis, mengurangi replikasi, dan meningkatkan popularitas singgahan.
Ukuran indeks juga berkurang yang secara umum meningkatkan kinerja dengan kueri yang lebih cepat.
Jika salah satu pecahan mati, pecahan yang lain masih beroperasi, meski kita ingin menambahkan beberapa bentuk replikasi untuk mencegah kehilangan data.
Seperti federasi, tidak ada master terpusat tunggal yang menyambungkan tulisan sehingga kita bisa melakukan operasi tulis secara paralel yang berdampak meningkatnya lewatan.

Cara umum memecah sebuah tabel pengguna adalah salah satunya dengan memanfaat inisial nama belakang pengguna atau geolokasi pengguna.

##### Kekurangan: pecahan

* Kita perlu memperbarui logik aplikasi untuk bekerja dengan pecahan yang dapat menyebabkan kueri yang lebih kompleks.
* Distribusi data bisa menjadi tidak seimbang di dalam pecahan. Contohnya, sekumpulan pengguna dengan kuasa penuh pada suatu pecahan bisa menghasilkan beban berlebih dibandingkan pecahan lain.
    * Penyeimbangan ulang menambah kompleksitas. Pecahan yang berfungsi berdasarkan [consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) bisa mengurangi jumlah data yang dikirim.
* Menggabungkan data dari berbagai pecahan menjadi lebih kompleks.
* Pecahan memerlukan lebih banyak perangkat keras dan menambah kompleksitas.

##### Sumber dan bacaan tambahan: pecahan

* [Kedatangan pecahan](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)
* [Arsitektur basis data pecahan](https://en.wikipedia.org/wiki/Shard_(database_architecture))
* [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)

#### Denormalisasi

Denormalisasi mencoba memperbaiki kinerja operasi baca dengan mengorbankan operasi tulis.
Salinan data yang berlebihan ditulis di beberapa tabel untuk menghindari operasi penggabungan yang mahal.
Beberapa RDBMS seperti [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) dan Oracle mendukung [materialized views](https://en.wikipedia.org/wiki/Materialized_view) yang menangani penyimpanan informasi yang berlebih dan memastikan salinan tersebut konsisten.

Ketika data menjadi terdistribusi dengan teknik seperti [federasi](#federasi) dan [pecahan](#pecahan), pengelolaan penggabungan data lintas pusat data meningkatkan kompleksitas lebih tinggi lagi.
Denormalisasi bisa jadi menghindari kebutuhan penggabungan yang bersifat kompleks.

Pada kebanyakan sistem, operasi baca bisa jauh mengalahkan operasi tulis dengan rasio 100:1 bahkan 1000:1.
Operasi baca yang memerlukan penggabungan basis data yang kompleks bisa menjadi sangat mahal biayanya dan menghabiskan banyak waktu untuk operasi disk.

##### Kekurangan: denormalisasi

* Data punya salinan.
* Batasan (constraint) bisa membantu salinan informasi yang berlebihan untuk tetap sinkron yang berdampak pada meningkatnya kompleksitas rancangan basis data.
* Basis data denormalisasi dengan beban operasi tulis berat mungkin kinerjanya akan lebih buruk dibandingkan basis data ternormalisasi.

###### Sumber dan bacaan lanjutan: denormalisasi

* [Denormalisasi](https://en.wikipedia.org/wiki/Denormalization)

#### Penyetelan SQL

Penyetelah SQL merupakan topik yang luas dan banyak [buku](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) yang sudah dituliskan sebagai referensi.

**Tolok ukur** dan **profil** penting untuk menyimulasi dan menemukan kemacetan.

* **Tolok ukur** - Menyimulasi situasi beban tinggi dengan alat seperti [ab](http://httpd.apache.org/docs/2.2/programs/ab.html).
* **Profil** - Memungkinkan alat seperti [slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) membantu melacak masalah kinerja.

Pembuatan tolok ukur dan profil bisa mengarahkan kita kepada optimisasi berikut.

##### Perketat skema

* MySQL menulis data ke disk pada blok yang berdekatan untuk mempercepat akses.
* Gunakan `CHAR` dari pada `VARCHAR` untuk bidang dengan panjang tetap.
    * `CHAR` memungkinkan akses acak yang cepat secara efektif sedangkan pada `VARCHAR` kita harus menemukan ujung sebuah string sebelum pindah ke string selanjutnya.
* Gunakan `TEXT` untuk teks dalam blok besar seperti tulisan blog. `TEXT` juga memungkinkan untuk pencarian biner. Penggunaan `TEXT` menghasilkan penyimpanan penunjuk pada disk yang berguna untuk menemukan blok teks selanjutnya.
* Gunakan `INT` untuk menyimpan jumlah besar sampai dengan 2^32 atau 4 miliar.
* Gunakan `DECIMAL` untuk mata uang sehingga terhindar dari kesalahan representasi _floating point_.
* Hindari menyimpan `BLOBS` berukuran besar, simpan lokasi dimana objek tersebut berada.
* `VARCHAR(255)` adalah jumlah karakter terbesar yang bisa dihitung dalam angka 8 bit, seringkali memaksimalkan penggunaan byte pada beberapa RDBMS.
* Atur batasan `NOT NULL` ditempat yang relevan untuk [meningkatkan kinerja pencarian](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search).

##### Gunakan indeks yang baik

* Kolom yang kita kueri (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) menjadi lebih cepat dengan indeks.
* Indeks umumnya digambarkan sebagai penyeimbang diri [B-tree](https://en.wikipedia.org/wiki/B-tree) yang menjaga data terurut dan memungkinkan pencarian, akses berurut, penambahan, dan penghapusan dalam waktu yang logaritmik.
* Penempatan pada indeks memungkinkan data disimpan pada memori sehingga membutuhkan ruang lebih.
* Operasi tulis bisa menjadi lebih lambat karena indeks juga perlu diperbarui.
* Ketika memuat data dalam jumlah besar, mungkin akan lebih cepat ketika indeks dinonaktifkan, muat data, kemudian bangun kembali indeks.

##### Hindari penggabungan mahal

* [Denormalisasi](#denormalisasi) ketika kinerja membutuhkan hal tersebut.

##### Partisi table

* Pisahkan tabel dengan menempatkan titik panas di tabel yang berbeda untuk membantu tabel tetap dalam memori.

##### Setel singgahan kueri

* Pada beberapa kasus, [singgahan kueri](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html) dapat menyebabkan [masalah kinerja](https://www.percona.com/blog/2016/10/12/mysql-5-7-performance-tuning-immediately-after-installation/).

##### Sumber dan bacaan lanjutan: Peyetelan SQL

* [Kiat untuk mengoptimasi kueri MySQL](http://aiddroid.com/10-tips-optimizing-mysql-queries-dont-suck/)
* [Apakah ada alasan yang baik dibalik seringnya digunakan VARCHAR(255)?](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)
* [Bagaimana nilai null mempengaruhi kinerja?](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)
* [Log kueri lambat](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)

### NoSQL

NoSQL adalah sekumpulan butir data yang diwakili pada **gudang kunci-nilai**, **gudang dokumen**, **gudang kolom lebar**, atau **basis data graf**.
Data di denormalisasi dan penggabungan umumnya dilakukan pada kode aplikasi.
Kebanyakan gudang NoSQL tidak memiliki transaksi ACID dan memilih [konsistensi yang mungkin terjadi](#konsistensi-yang-mungkin-terjadi-eventual-consistency).

**BASE** seringkali digunakan untuk menggambarkan property basis data NoSQL.
Sebagai perbandingan dengan [teorema CAP](#teorema-cap), BASE memilih ketersediaan dibandingkan konsistensi.

* **Basically available** - Sistem menjamin ketersediaan.
* **Soft state** - Keadaan sistem bisa berubah seiring waktu, bahkan tanpa ada masukan.
* **Eventual consistency** - Sistem akan menjadi konsisten selama periode waktu tertentu mengingat bahwa sistem tidak menerima masukan selama periode tersebut.

Sebagai tambahan dalam pemilihan antara [SQL atau NoSQL](#sql-atau-nosql), pemahaman akan tipe basis data NoSQL yang sesuai dengan kasus penggunan kita menjadi penting.
Kita akan bahas **gudang tanda-kunci**, **gudang dokumen**, **gudang kolom lebar**, dan **basis data graf** di bagian selanjutnya.

#### Gudang kunci-nilai

> Abstraksi: tabel hash

Gudang kunci-nilai umumnya memungkinkan operasi baca dan tulis dengan kompleksitas waktu O(1) dan umumnya didukung oleh memori atau SSD.
Gudang data mampu mengelola kunci menurut [urutan leksikografis](https://en.wikipedia.org/wiki/Lexicographical_order) yang memungkinkan pengambilan rentang kunci yang efisien.
Gudang kunci-nilai mengizinkan penyimpanan meta data beserta dengan nilai.

Gudang kunci-nilai menyediakan kinerja tinggi dan sering kali digunakan untuk model data sederhana atau data yang berubah dengan cepat seperti lapisan singgah dalam memori.
Karena Gudan kunci-nilai hanya menawarkan kumpulan operasi yang terbatas, kompleksitas dipindahkan ke lapisan aplikasi jika operasi tambahan diperlukan.

Gudang kunci-nilai menjadi dasar bagi sistem yang lebih kompleks seperti gudang dokumen, dan di beberapa kasus graf database.

##### Sumber dan bacaan lanjutan: gudang kunci-nilai

* [Basis data kunci-nilai](https://en.wikipedia.org/wiki/Key-value_database)
* [Kekurangan gudang kunci-nilai](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)
* [Arsitektur Redis](http://qnimate.com/overview-of-redis-architecture/)
* [Arsitektur Memcached](https://www.adayinthelifeof.nl/2011/02/06/memcache-internals/)

#### Gudang dokumen (document store)

> Abstraksi: gudang kunci-nilai dimana dokumen disimpan sebagai nilai

Gudang dokumen terpusat pada dokumen (XML, JSON, biner, dan lainnya) dimana dokumen menyimapan semua informasi untuk objek tertentu.
Gudang dokumen menyediakan API atau bahasa kueri untuk mengkueri berdasarkan struktur internal dari dokumen itu sendiri.
*Menjadi catatan bahwa banyak gudang kunci-nilai menyertakan fitur untuk bekerja dengan metadata suatu nilai sehingga mengaburkan batasan antara kedua jenis gudang.*

Berdasarkan implementasi yang mendasarinya, dokumen diorganisasi berdasarkan koleksi, tag, metdata, atau direktori.
Meskipun dokumen bisa diorganisasi atau dikelompokan bersama, dokumen bisa memiliki bidang yang berbeda satu sama lain.

Beberapa gudang dokumen seperti [MongoDB](https://www.mongodb.com/mongodb-architecture) dan [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) menyediakan bahasa seperti SQL untuk melakukan kueri yang kompleks.
[DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) mendukung kunci-nilai dan dokumen.

Gudang dokumen menyediakan fleksibilitas tinggi dan sering kali digunakan untuk bekerja dengan data yang sesekali berubah.

##### Sumber dan bacaan lanjutan: gudang dokumen

* [Basis data berorientasi dokumen](https://en.wikipedia.org/wiki/Document-oriented_database)
* [Arsitektur MongoDB](https://www.mongodb.com/mongodb-architecture)
* [Arsitektur CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)
* [Arsitektur Elasticsearch](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)

#### Gudang kolom lebar (Wide column store)

<p align="center">
  <img src="http://i.imgur.com/n16iOGk.png"/>
  <br/>
  <i><a href=http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html>Sumber: SQL & NoSQL, sejarah singkat</a></i>
</p>

> Abstraksi: peta bersarang `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`

Dasar unit data dari gudang kolom lebar adalah kolom (pasangan nama/nilai).
Kolom bisa digabung ke dalam keluarga kolom (sejalan dengan tabel SQL).
Keluarga kolom super menggabungkan keluarga kolom.
Kita bisa mengakses setiap kolom secara independen menggunakan kunci baris.
Kolom dengan kunci baris yang sama membentuk baris.
Setiap nilai mengandung cap waktu untuk kebutuh pemersian dan resolusi konflik.

Google mengenalkan [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) sebagai gudang kolom lebar pertama.
Rancangan Bigtable mempengaruhi [HBase](https://www.mapr.com/blog/in-depth-look-hbase-architecture) yang sering digunakan pada ekosistem Hadoop dan [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html) dari Facebook.
Gudang seperti BigTable, HBase, dan Cassandra memelihara kunci dengan urutan leksikografi yang memungkinkan pengambilan rentang kunci secara selektif.

Gudang kolom lebar menawarkan ketersediaan dan skalabilitas tinggi.
Mereka sering kali digunakan untuk penyimpanan himpunan data yang sangat besar.

##### Sumber dan bacaan lanjutan: gudang kolom lebar

* [SQL & NoSQL, sejarah singkat](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)
* [Arsitektur Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)
* [Arsitektur HBase](https://www.mapr.com/blog/in-depth-look-hbase-architecture)
* [Arsitektur Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)

#### Basis data graf

<p align="center">
  <img src="http://i.imgur.com/fNcl65g.png"/>
  <br/>
  <i><a href=https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png>Sumber: Basis data graf</a></i>
</p>

> Abstraksi: graf

Di dalam basis data graf, setiap simpul adalah catatan dan setiap busur adalah hubuungan antar dua simpul.
Basis data graf dioptimisasi untuk mengambarkan hubungan kompleks dengan banyak kunci asing atau hubungan banyak-ke-banyak.

Basis data graf menawarkan kinerja tinggi untuk model data dengan hubungan kompleks seperti jejaring sosial.
Basis data ini relatif baru dan belum banyak digunakan secara luas.
Hal ini menyebabkan lebih sulit menemukan alat pengembangan dan sumber daya.
Banyak graf hanya bisa diakses menggunakan [API REST](#representational-state-transfer-rest)

##### Sumber dan bacaan lanjutan: graph

* [Basis data Graf](https://en.wikipedia.org/wiki/Graph_database)
* [Neo4j](https://neo4j.com/)
* [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)

#### Sumber dan bacaan lanjutan: NoSQL

* [Penjelasan terminologi base](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)
* [Panduan keputusan dan survei basis data NoSQL](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)
* [Skalabilitas](http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
* [Pengantar NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)
* [Pola NoSQL](http://horicky.blogspot.com/2009/11/nosql-patterns.html)

### SQL atau NoSQL

<p align="center">
  <img src="http://i.imgur.com/wXGqG5f.png"/>
  <br/>
  <i><a href=https://www.infoq.com/articles/Transition-RDBMS-NoSQL/>Sumber: Transisi dari RDBMS ke NoSQL</a></i>
</p>

Alasan memilih **SQL**:

* Data terstruktur
* Ketat skema
* Data bersifat relasional
* Kebutuhan penggabungan yang kompleks
* Transaksi
* Pola penyekalaan jelas
* Lebih mapan: pengembang, komunitas, kode, alat-alat, dan lainnya
* Pencarian menggunakan indek sangat cepat

Alasan memilih **NoSQL**:

* Data semi terstruktur
* Skema fleksible dan dinamis
* Data bersifat tidak relasional
* Tidak perlu penggabungan yang kompleks
* Menyimpan banyak TB (bahkan PB) data
* Beban kerja yang sangat intens akan data
* Lewatan sangat tinggi untuk keluaran masukan per detik

Contoh data yang cocok untuk NoSQL:

* Mengkonsumsi secara cepat data *clickstream* dan log
* Papan peringkat atau data penilaian
* Data sementara seperti keranjang belanja
* Tabel yang sering diakses (tabel 'panas')
* Tabel metadata/pencarian

##### Sumber dan bacaan lanjutan: SQL atau NoSQL

* [Penyekalaan untuk 10 juta pengguna pertama](https://www.youtube.com/watch?v=w95murBkYmU)
* [Perbedaan SQL vs NoSQL](https://www.sitepoint.com/sql-vs-nosql-differences/)

## Singgahan

<p align="center">
  <img src="http://i.imgur.com/Q6z24La.png"/>
  <br/>
  <i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Sumber: Pola perancangan sistem terskala</a></i>
</p>

Singgahan memperbaiki waktu pemuatan halaman dan bisa mengurangi beban pada server dan database.
Pada model ini, dispatcher pertama-tama akan mencari apakah permintaan sudah pernah diajukan sebelumnya dan mencoba mencari hasil sebelumnya untuk dikembalikan untuk menghemat eksekusi yang sebenarnya.

Basis data umumnya mendapat manfaat dari distribusi yang merata antara operasi baca dan tulis lintas partisi.
Butir yang populer bisa memiringkan penyaluran yang menyebabkan kemacetan.
Penempatan singgahan di depan database akan membantu menyerap beban yang tidak merata dan lonjakan lalu lintas.

### Singgahan klien

Singgahan bisa tersedia pada sisi klien (Misalkan sistem operasi dan peramban), [sisi server](#proksi-terbalik-server-web), atau lapisan singgahan tersendiri.

### Singgahan CDN

[CDNs](#content-delivery-network) dianggap sebagai jenis singgahan.

### Singgahan server web

[Proksi terbalik](#proksi-terbalik-server-web) dan singgahan seperti [Varnish](https://www.varnish-cache.org/) mampu melayani konten statis dan dinamis secara langsung.
Server web juga bisa menyinggahi permintaan, mengembalikan tanggapan tanpa perlu mengontak server aplikasi.

### Singgahan basis data

Basis data biasanya menyertakan berbagai level singgahan dalam konfigurasi bawaan yang dioptimasi untuk kebutuhan general.
Mengubah pengaturan untuk pola tertentu bisa meningkatkan kinerja basis data.

### Singgahan aplikasi

Singgahan dalam memori seperti Memcahed dan Redis adalah gudang kunci-nilai antara aplikasi kita dengan penyimpanan data.
Karena data tersimpan di memori, pengambilan data menjadi lebih cepat dibandingkan basis data yang menyimpan data di disk.
RAM lebih terbatas dibandingkan disk sehingga algoritma [invalidasi singgahan](https://en.wikipedia.org/wiki/Cache_algorithms) seperti [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used) bisa membantu menginvalidasi entri 'dingin' dan mempertahankan entri 'panas' di RAM.

Redis memiliki fitur tambahan berikut:

* Opsi persisten
* Struktur data bawaan seperti himpunan terurut dan lis

Ada beberapa level yang dapat kita cache yang secara umum terbagi menjadi 2 kategori: **kueri basis data** dan **objek**:

* Level baris
* Level kueri
* Objek yang bisa diserialisasi dalam bentuk penuh
* HTML yang sudah disajikan sepenuhnya

Secara umum, kita seharusnya menghindari singgahan berbasis file karena hal ini menyebabkan pengklonaan dan penyekalaan otomatis menjadi lebih sulit.

### Singgahan pada level kueri basis data

Setiap kali kita mengkueri basis data, cincang kueri untuk jadi kunci dan simpan hasil kueri ke singgahan.
Pendekatan ini memiliki kelemahan dari sisi kedaluarsa:

* Susah menghapus hasil singgahan dengan kueri kompleks
* Jika satu potong data berubah contohnya sel tabel, kita perlu menghapus seluruh kueri singgahan yang mungkin di dalamnya termasuk sel yang berubah.

### Singgahan pada level objek

Perlakukan data kita sebagai objek sebagaimana kita memperlakukan kode aplikasi.
Biarkan aplikasi kita mengumpulkan himpunan data dari basis data menjadi objek kelas atau struktur data:

* Hapus objek dari singgahan jika dasar datanya berubah
* Ijinkan pemrosesan asinkron: pekerja mengumpulkan objek dengan cara mengkonsumsi objek singgahan terbaru

Saran akan apa saja yang disinggahi:

* Sesi pengguna
* Halaman web yang sudah disajikan secara penuh
* Aliran aktivitas
* Data graf pengguna

### Kapan singgahan diperbarui

Karena kita hanya bisa menyimpan data dalam jumlah terbatas pada singgahan, kita perlu menentukan strategi memperbarui singgahan yang bekerja paling baik untuk kasus penggunan kita.

#### Singgahan sampingan (Cache-aside)

<p align="center">
  <img src="http://i.imgur.com/ONjORqk.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Sumber: Dari singgahan menuju kisi data dalam memori</a></i>
</p>

Aplikasi bertanggung jawab membaca dan menulis dari penyimpanan.
Singgahan tidak berinteraksi dengan penyimpanan secara langsung.
Aplikasi melakukan hal berikut:

* Mencari entri di singgahan yang menghasilkan entri luput
* Muat entri dari basis data
* Simpan entri ke dalam singgahan
* Kembalikan entri

```python
def get_user(self, user_id):
    user = cache.get("user.{0}", user_id)
    if user is None:
        user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
        if user is not None:
            key = "user.{0}".format(user_id)
            cache.set(key, json.dumps(user))
    return user
```

[Memcached](https://memcached.org/) umumnya digunakan untuk kasus seperti di atas.

Operasi pembacaan data selanjutnya menjadi cepat.
Singgahan sampingan dikenal juga dengan istilah _lazy loading_.
Hanya data yang diminta yang ada disinggahan sehingga menghindari singgahan penuh dengan data yang tidak diminta.

##### Kekurangan: singgahan sampingan

* Setiap singgahan yang luput menghasilkan tiga perjalanan yang dapat menyebabkan jeda nyata.
* Data bisa kedaluarsa jika data diperbarui pada basis data. Masalah ini dimitigasi dengan aturan masa berlaku yang memaksa pembaruan entri singgahan atau menggunakan mekanisme _write-through_.
* Ketika simpul gagal, simpul digantikan oleh simpul yang baru yang kosong sehingga meningkatkan latensi.

#### Write-through

<p align="center">
  <img src="http://i.imgur.com/0vBc0hN.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Sumber: Skalabilitas, ketersedian, stabilitas, pola</a></i>
</p>

Aplikasi menggunakan singgahan sebagai gudang data utama, membaca dan menulis data ke singgahan sementara singgahan bertanggung jawab membaca dan menulis ke basis data:

* Aplikasi menambah/mengubah entri pada singgahan
* Singgahan secara sinkron menulis entri ke gudang data
* Kembali

Kode aplikasi:

```python
set_user(12345, {"foo":"bar"})
```

Kode singgahan:

```python
def set_user(user_id, values):
    user = db.query("UPDATE Users WHERE id = {0}", user_id, values)
    cache.set(user_id, user)
```

Write-through adalah operasi yang lambat secara keseluruhan karena beban operasi menulis, tetapi operasi baca selanjutnya terhadap data yang baru ditulis menjadi cepat.
Pengguna umumnya lebih toleran terhadap latensi ketika mengubah data dibandingkan membaca data.
Data di dalam singgahan tidak kedaluarsa.

##### Kekurangan: write through

* Ketika simpul baru diciptakan karena kegagalan atau penyekalaan, simpul baru tersebut tidak menyimpan entri sampai entri diperbarui di basis data. Singgahan sampingan bersamaan dengan _write-through_ dapat meringakan masalah ini.
* Kebanyakan data yang tertulis mungkin tidak pernah dibaca. Hal ini bisa diminimalkan dengan masa berlaku.

#### Write-behind (write-back)

<p align="center">
  <img src="http://i.imgur.com/rgSrvjG.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Sumber: Sumber: Skalabilitas, ketersedian, stabilitas, pola</a></i>
</p>

Pada *write-behind*, aplikasi melakukan hal berikut:

* Menambah/memperbarui entri pada singgahan
* Secara asinkron menuliskan entri ke gudang data untuk meningkatkan kinerja

##### Kekurangan: write-behind

* Ada potensi kehilangan data jika singgahan mati sebelum konten tersimpan ke gudang data.
* Lebih kompleks untuk diimplementasikan dibandingkan singgahan sampingan dan _write-through_.

#### Refresh-ahead

<p align="center">
  <img src="http://i.imgur.com/kxtjqgE.png"/>
  <br/>
  <i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Sumber: Dari singgahan menuju kisi data dalam memori</a></i>
</p>

Kita dapat mengkonfigurasi singgahan agar secara otomatis menyegarkan entri singgahan yang paling baru diakses sebelum waktu kedaluarsa.

_Refresh-ahead_ bisa menghasilkan pengurangan latensi dibandingkan _read-through_ jika singgahan bisa memprediksi dengan akurat butir-butir mana yang kemungkinan besar dibutuhkan di masa yang akan datang.

##### Kekurangan: refresh-ahead

* Kesalahan prediksi butir yang kemungkinan dibutuhkan di masa yang akan datang bisa berdampak pada penurunan kinerja jika dibandingkan dengan singgahan tanpa _refresh-ahead_.

### Kekurangan: singgahan

* Perlu memelihara konsistensi antara singgahan dan sumber kebenaran seperti basis data melalui [invalidasi singgahan](https://en.wikipedia.org/wiki/Cache_algorithms).
* Invalidasi cache adalah masalah sulit. Tambahan kompleksitas lainnya adalah penentuan waktu untuk memperbarui singgahan.
* Perlu mengubah aplikasi contohnya menambahkan Redis atau Memcached.

### Sumber dan bacaan lanjutan:

* [Dari singgahan menuju kisi data dalam memori](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
* [Pola perancangan sistem terskala](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)
* [Pengantar arsitektur sistem terskala](http://lethain.com/introduction-to-architecting-systems-for-scale/)
* [Skalabilitas, ketersediaan, kestabilan, pola](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)
* [Skalabilitas](http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
* [Strategi AWS ElastiCache](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))

## Asinkronisme

<p align="center">
  <img src="http://i.imgur.com/54GYsSx.png"/>
  <br/>
  <i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Sumber: Pengantar arsitektur sistem terskala</a></i>
</p>

Alur kerja asinkron membantu mengurangi waktu permintaan untuk operasi mahal yang sebaliknya dilakukan dalam barisan.
Alur kerja ini juga dapat membantu terlebih dahulu mengerjakan pekerjaan yang memakan waktu seperti agregasi data berkala.

### Antrian pesan

Antrian pesan menerima, menahan, dan mengirimkan pesan.
Jika operasi terlalu lambat dilakukan secara berurutan, kita dapat menggunakan antrian pesan dengan alur kerja sebagai berikut:

* Aplikasi menerbitkan kerjaan ke antrian, kemudian memberitahu penggunan tentang status pekerjaan
* Pekerja akan mengambil pekerjaan dari antrian, memproses pekerjaan tersebut, kemudian memberi isyarat ketika pekerjaan selesai

Pengguna tidak terhambat dan pekerjaan bisa diproses dibelakang layar.
Selama periode ini, klien bisa melakukan pemrosesan kecil-kecilan supaya kelihatan pekerjaan telah selesai.
Contohnya, ketika mengirimkan sebuah tweet, tweet bisa saja muncul secara instan di linimasa kita, tetapi tweet akan membutuhkan waktu untuk bisa muncul di linimasa pengikut kita.

**[Redis](https://redis.io/)** adalah broker pesan sederhana yang berguna dimana pesan bisa hilang.

**[RabbitMQ](https://www.rabbitmq.com/)** adalah antrian pesan yang populer yang mengharuskan kita untuk beradaptasi dengan protokol 'AMQP' dan mengelola simpul kita sendiri.

**[Amazon SQS](https://aws.amazon.com/sqs/)** adalah antrian pesan yang dikelola oleh pihak lain dimana ada kemungkinan latensi yang tinggi. Kemungkinan lain adalah pesan dikirimkan lebih dari sekali.

### Antrian tugas

Antrian tugas menerima tugas dan data lainnya, menjalankan tugas tersebut, dan kemudian mengirimkan hasilnya.
Antrian tugas mendukung penjadwalan dan bisa digunakan untuk menjalankan tugas komputasi intens di belakang layar.

**Celery** adalah antrian tugas yang memiliki support python yang baik. Selain itu Celery juga mendukung untuk penjadwalan.

### Tekanan balik (Back pressure)

Jika antrian mulai tumbuh secara signifikan maka ukuran antrian menjadi lebih lebih besar dibandingkan ukuran memori.
Hal ini mengakibatkan singgahan luput, operasi baca disk, dan bahkan kinerja yang lebih lambat.
[Tekanan balik](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html) membantu dengan cara membatasi ukuran antrian dengan demikian memelihara laju lewatan tinggi dan waktu tanggap yang baik bagi pekerjaan yang ada di dalam antrian.  
Ketika antrian penuh, klien memperoleh balasan server sibuk atau HTTP code status 503 untuk mencoba lagi di waktu yang akan datang.
Klien dapat mencoba mengiriman permintaan lagi di waktu yang akan datang dengan tambahan [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff).

### Kekurangan: asinkronisme

* Kasus penggunaan seperti kalkulasi yang tidak mahal dan alur kerja waktu nyata lebih cocok untuk operasi secara sinkron. Penambahan antrian meningkatkan jeda dan kompleksitas.

### Sumber dan bacaan lanjutan:

* [Semua ini adalah permainan angka](https://www.youtube.com/watch?v=1KRYH75wgy4)
* [Menerapkan tekanan balik ketika kelebihan beban](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
* [Hukum Little](https://en.wikipedia.org/wiki/Little%27s_law)
* [Apa perbedaan antara antrian pesan dan antrian tugas?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)

## Komunikasi

<p align="center">
  <img src="http://i.imgur.com/5KeocQs.jpg"/>
  <br/>
  <i><a href=http://www.escotal.com/osilayer.html>Sumber: Model 7 lapisan OSI</a></i>
</p>

### Hypertext transfer protocol (HTTP)

HTTP adalah metode pengkodean dan pengiriman data antara klien dan server.
HTTP merupakan protokol permintaan/tanggapan dimana klien mengirimkan permintaan dan server menerbitkan tanggapan dengan konten yang relevan dan informasi status penyelesaian mengenai permintaan klien.
HTTP bersifat mandiri, memungkinkan permintaan dan tanggapan mengalir melewati berbagai perute menengah dan server yang melakukan penyeimbangan beban, persinggahan, enkripsi, dan kompresi. 

Dasar permintaan HTTP terdiri dari kata kerja (metode) dan sumber daya (endpoint).
Berikut adalah kata kerja HTTP yang umum:

| Kata kerja | Deskripsi | Idempoten* | Aman | Bisa disinggahkan |
|---|---|---|---|---|
| GET | Membaca sumber daya | Ya | Ya | Ya |
| POST | Menciptakan sumber daya atau memicu proses yang menangani data | Tidak | Tidak | Ya jika tanggapan berisi informasi kesegaran |
| PUT | Menciptakan atau mengganti sumber daya | Ya | Tidak | Tidak |
| PATCH | Memperbarui sebagian sumber daya | Tidak | Tidak | Ya jika tanggapan berisi informasi kesegaran |
| DELETE | Menghapus sumber daya | Ya | Tidak | Tidak |

*Menghasilkan hasil yang sama ketika dipanggil berkali-kali.

HTTP adalah protokol pada lapisan aplikasi yang bergantung pada protokol lapisan bawah seperti **TCP** dan **UDP**.

#### Sumber dan bacaan lanjutan: HTTP

* [Apakah HTTP itu?](https://www.nginx.com/resources/glossary/http/)
* [Perbedaan antara HTTP dan TCP](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [Perbedaan antara PUT dan PATCH](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)

### Transmission control protocol (TCP)

<p align="center">
  <img src="http://i.imgur.com/JdAsdvG.jpg"/>
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Sumber: Bagaimana membuat permainan banyak pemain</a></i>
</p>

TCP adalah protokol berorientasi koneksi yang melalui [jaringan IP](https://en.wikipedia.org/wiki/Internet_Protocol)
Koneksi dibangun dan diterminasi menggunakan [salam](https://en.wikipedia.org/wiki/Handshaking)
Seluruh paket yang dikirim dijamin akan mencapai tujuan sesuai dengan urutan pengiriman tanpa korupsi melalui:

* Nomor urut dan [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) untuk setiap paket
* [Pengakuan](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) paket dan pengiriman ulang secara otomatis

Jika pengiriman tidak menerima tanggapan yang benar maka paket akan dikirim ulang.
Jika waktu habis beberapa kali maka koneksi akan batalkan.
TCP juga menjalankan [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) dan [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).
Jaminan ini menyebabkan jeda dan menghasilkan pengiriman yang kurang efisien dibandingkan UDP.

Untuk memastikan lewatan yang tinggi, server web membuka koneksi TCP dalam jumlah yang besar yang berdampak pada penggunaan memori yang tinggi.
Membuka koneksi dalam jumlah yang besar antara ulir server web dengan server lain seperti Memcached memiliki harga yang mahal.
[Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) bisa membantu meringankan biaya koneksi selain berganti ke protokol UDP jika dirasa tepat.

TCP berguna untuk aplikasi yang memerlukan keandalan tinggi tetapi tidak kritis terhadap waktu.
Beberapa contoh pengguna protokol TCP adalah server web, basis data, SMTP, FTP, dan SSH.

Gunakan TCP daripada UDP ketika:

* Kita perlu seluruh data sampai dengan utuh
* Kita ingin secara otomatis menggunakan estimasi terbaik dari lewatan jaringan

### User datagram protocol (UDP)

<p align="center">
  <img src="http://i.imgur.com/yzDrJtA.jpg"/>
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Sumber: Bagaimana membuat permainan banyak pemain</a></i>
</p>

UDP adalah protokol tanpa koneksi.
Datagram (sepadan dengan paket) hanya dijamin pada level datagram.
Datagram mungkin mencapai tujuannya secara tidak berurut atau tidak sampai sama sekali.
UDP tidak mendukung kontrol kemacetan.
Tanpa jaminan seperti yang didukung TCP, UDP secara umum lebih efisien.

UDP bisa mengirimkan datagram ke seluruh perangkat yang ada di jaringan.
Hal ini berguna pada [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) karena klien belum memiliki alamat IP sehingga menghalangi TCP untuk bisa bekerja.

UDP kuranga dapat diandalkan tetapi bekerja dengan baik untuk kasus penggunaan waktu nyata seperti VoIP, obrolan video, streaming, dan permain banyak pemain waktu nyata.

Gunakan UDP daripada TCP ketika:

* Kita membutuhkan latensi terendah
* Data telat lebih parah dibandingkan data hilang
* Kita ingin menerapkan sendiri mekanisme koreksi kesalahan

#### Sumber dan bacaan lanjutan: TCP dan UDP

* [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)

### Remote procedure call (RPC)

<p align="center">
  <img src="http://i.imgur.com/iF4Mkb5.png"/>
  <br/>
  <i><a href=http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview>Sumber: Memecahkan wawancara perangcangan sistem</a></i>
</p>

Pada RPC, klien menyebabkan prosedur dieksekusi pada ruang alamat berbeda, biasanya pada server jarak jauh.
Prosedur dikode dengan cara seolah-olah prosedur adalah pemanggilan lokal, menyembunyikan detail cara komunikasi antara klien program dengan server.
Pemanggilan jarak jauh biasanya lebih lambat dan kurang biasa diandalkan dibandingkan dengan pemanggilan lokal sehingga pembedaan antara pemanggilan RCP dan lokal berguna untuk dilakukan.
Kerangka kerja RPC yang popular termasuk di dalamnya adalah [Protobuf](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/), dan [Avro](https://avro.apache.org/docs/current/).

RPC adalah protokol permintaan-tanggapan:

* **Client program** - Memanggil prosedur rintisan klien. Parameter dikirim ke tumpukan seperti pemanggilan prosedur lokal.
* **Client stub procedure** - Menyusun id dan argumen prosedur ke dalam pesan permintaan.
* **Client communication module** - Sistem operasi mengirimkan pesan dari klien ke server.
* **Server communication module** - Sistem operasi menyampaikan paket yang datang ke prosedur rintisan server.
* **Server stub procedure** -  Membongkar pesan permintaan dari klien, memanggil prosedur server yang sesuai dengan id dan menyampaikan argumen pemanggilan.
* Tanggapan server mengulangi langkah-langkah di atas dengan urutan terbalik.

Contoh pemanggilan RPC:

```
GET /someoperation?data=anId

POST /anotheroperation
{
  "data":"anId";
  "anotherdata": "another value"
}
```
RPC fokus pada memperlihatkan perilaku.
RPC umumnya digunakan untuk alasan kinerja pada komunikasi internal, karena kita bisa menempa pemanggilan alami sesuai dengan kebutuhan kasus penggunan kita.

Pilih pustaka alamiah (alias SDK) ketika:

* Kita mengetahui platform sasaran kita.
* Kita ingin mengontrol cara akses "logik" kita.
* Kita ingin mengendalikan cara kontrol kesalahan terjadi di luar pustaka kita.
* Kinerja dan pengalaman pengguna akhir adalah perhatian utama kita.

API HTTP yang mengikuti REST cendrung lebih banyakan digunakan untuk API publik.

#### Kekurangan: RPC

* Klien RPC menjadi lebih terikat pada implementasi layanan.
* API baru perlu didefinisikan untuk setiap operasi atau kasus penggunaan baru.
* Lebih sulit untuk awakutu (debug) RPC.
* Kita mungkin tidak bisa memanfaatkan teknologi yang telah ada secara langsung. Sebagai contoh, usaha tambahakan diperlukan untuk memastikan [pemanggilan RPC disinggahkan secara tepat](http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) pada server singgahan seperti [Squid](http://www.squid-cache.org/).

### Representational state transfer (REST)

REST adalah gaya arsitektur menegakkan model klien/server dimana klien bertindak terhadap sekumpulan sumber daya yang dikelola oleh server.
Server menyediakan penggambaran dari sumber daya dan aksi yang dapat memanipulasi atau menciptakan penggambaran baru dari sumber daya.
Seluruh komunikasi harus nirkeadaan dan dapat disinggahkan.

Ada 4 kualitas dari antarmuka berbasis REST:

* **Identify resources (URI in HTTP)** - Menggunakan URI yang sama terlepas dari operasi apa pun itu.
* **Change with representations (Verbs in HTTP)** - Menggunakan kata kerja, tajuk, dan badan.
* **Self-descriptive error message (status response in HTTP)** - Gunakan kode status, jangan buat ulang sesuatu yang sudah ada.
* **[HATEOAS](http://restcookbook.com/Basics/hateoas/) (HTML interface for HTTP)** - Layanan web kita dapat diakses secara penuh menggunakan peramban.

Contoh pemanggilan REST:

```
GET /someresources/anId

PUT /someresources/anId
{"anotherdata": "another value"}
```

REST fokus pada penampakan data.
REST meminimalkan ikatan antara klien/server dan seringkali digunakan untuk API HTTP publik.
REST menggunakan metode yang generik dan seragam untuk penampakan sumber daya melalui URIs, [penggambaran melalui tajuk](https://github.com/for-GET/know-your-http-well/blob/master/headers.md), dan aksi melalui kata kerja seperti GET, POST, PUT, DELETE, dan PATCH.
Karena nirkeadaan, REST sangat bagus untuk penyekalaan horizontal dan pemecahan.

#### Kekurangan: REST

* REST berfokus pada penampakan data.
  hal ini mungkin tidak cocok ketika sumber daya tidak teratur secara alamiah atau tidak bisa diakses dalam hierarki sederhana.
  Sebagai contoh, pengembalian seluruh catatan yang diperbarui beberapa jam yang lalu yang sesuai dengan sekumpulan peristiwa tertentu tidak bisa dinyatakan dengan mudah menggunakan jalan URI.
  Dengan REST, contoh di atas kemungkinan besar dilaksanakan menggunakan kombinasi jalan URI, parameter kueri, dan tubuh permintaan.
* REST umumnya bergantung pada beberapa kata kerja (GET, POST, PUT, DELETE, dan PATCH) yang kadangkala tidak sesuai dengan kasus penggunaan kita.
  Sebagai contoh, memindahkan dokumen kedaluarsa ke folder arsip mungkin tidak pas sepenuhnya menggunakan kata kerja tersebut.
* Pengambilan sumber daya rumit dengan hierarki bersarang memerlukan beberapa perjalanan bolak-balik antara klien dan server.
  Contohnya mengambil isi dari butir blog dan komentar yang akan ditampilkan dalam satu halaman.
  Untuk aplikasi ponsel yang beroperasi diberbagai keadaan jaringan, kebutuhan beberapa perjalanan bolak-balik sangat tidak dinginkan.
* Seiring waktu, ekstra bagian kemungkinan ditambahkan ke dalam tanggapan API.
  Klien lama akan menerima seluruh bagian data baru, bahkan klien yang tidak memerlukannya.
  Hal ini berdampak pada membesarnya ukuran muatan dan membesarnya latensi.

### Perbandingan pemanggilan RPC dan REST

| Operasi | RPC | REST |
|---|---|---|
| Pendaftaran    | **POST** /signup | **POST** /persons |
| Pengunduran diri    | **POST** /resign<br/>{<br/>"personid": "1234"<br/>} | **DELETE** /persons/1234 |
| Pengambilan info diri | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |
| Pengambilan daftar butir seseorang | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |
| Penambahan butir baru ke butir sesorang | **POST** /addItemToUsersItemsList<br/>{<br/>"personid": "1234";<br/>"itemid": "456"<br/>} | **POST** /persons/1234/items<br/>{<br/>"itemid": "456"<br/>} |
| Penambahan butir   | **POST** /modifyItem<br/>{<br/>"itemid": "456";<br/>"key": "value"<br/>} | **PUT** /items/456<br/>{<br/>"key": "value"<br/>} |
| Penghapusan butir | **POST** /removeItem<br/>{<br/>"itemid": "456"<br/>} | **DELETE** /items/456 |

<p align="center">
  <i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Sumber: Apakah Anda benar-benar tahu mengapa anda memilih REST dibandingkan RPC</a></i>
</p>

#### Sumber dan bacaan lanjutan: REST dan RPC

* [Apakah Anda benar-benar tahu mengapa anda memilih REST dibandingkan RPC](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)
* [Kapan pendekatan ke-RPC-an lebih cocok dibandingkan dengan REST?](http://programmers.stackexchange.com/a/181186)
* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)
* [Menyanggah mitos RPC dan REST](http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)
* [Apakah kekurangan penggunan REST](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)
* [Memecahkan wawancara perancangan sistem](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)
* [Thrift](https://code.facebook.com/posts/1468950976659943/)
* [Kenapa REST untuk penggunaan internal dan bukan RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)

## Keamanan

Bagian ini memerlukan pembaruan.
Pertimbangkan untuk [berkontribusi](#kontribusi)!

Keamanan merupakan topik yang luas.
Kecuali Anda memiliki pengalaman yang cukup, latar belakang keamanan, atau melamar posisi yang membutuhkan pengetahuan keamanan, Anda mungkin tidak perlu mengetahui lebih dari pengetahuan dasar:

* Enkripsi saat transit dan saat istirahat.
* Bersihkan seluruh masukan pengguna atau parameter masukan yang terekspos ke pengguna untuk mencegah [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) dan [Injeksi SQL](https://en.wikipedia.org/wiki/SQL_injection).
* Gunakan kueri terparameter untuk mencegah injeksi SQL.
* Gunakan prinsip [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).

### Sumber dan bacaan lanjutan

* [Daftar periksa keamanan API](https://github.com/shieldfy/API-Security-Checklist)
* [Panduan keamanan untuk pengembang](https://github.com/FallibleInc/security-guide-for-developers)
* [sepuluh teratas OWASP](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)

## Lampiran

Kita kadang diminta untuk melakukan estimasi 'kalkulasi di belakang amplop'.
Sebagai contoh, kita mungkin perlu menentukan berapa lama waktu yang diperlukan untuk menghasilkan 100 keluku dari disk atau berapa banyak memori yang akan digunakan oleh struktur data.
**Tabel perpangkatan dua** dan **Nilai latensi yang perlu diketahui oleh setiap pemrogram** merupakan referensi yang berguna.

### Tabel perpangkatan dua

```
Pangkat           Nilai tepat        Nilai kisaran        Byte
---------------------------------------------------------------
7                             128
8                             256
10                           1024   seribu              1 KB
16                         65,536                       64 KB
20                      1,048,576   1 juta              1 MB
30                  1,073,741,824   1 miliar            1 GB
32                  4,294,967,296                       4 GB
40              1,099,511,627,776   1 triliun           1 TB
```

#### Sumber dan bacaan lanjutan

* [Powers of two](https://en.wikipedia.org/wiki/Power_of_two)

### Nilai latensi yang perlu diketahui oleh setiap pemrogram

```
Nilai Perbandingan Latensi
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy            10,000   ns       10 us
Send 1 KB bytes over 1 Gbps network     10,000   ns       10 us
Read 4 KB randomly from SSD*           150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from 1 Gbps  10,000,000   ns   10,000 us   10 ms  40x memory, 10X SSD
Read 1 MB sequentially from disk    30,000,000   ns   30,000 us   30 ms 120x memory, 30X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Catatan
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns
```

Metrik yang berguna berdasarkan nilai di atas:

* Read sequentially from disk at 30 MB/s
* Read sequentially from 1 Gbps Ethernet at 100 MB/s
* Read sequentially from SSD at 1 GB/s
* Read sequentially from main memory at 4 GB/s
* 6-7 world-wide round trips per second
* 2,000 round trips per second within a data center

#### Gambaran nilai latensi

![](https://camo.githubusercontent.com/77f72259e1eb58596b564d1ad823af1853bc60a3/687474703a2f2f692e696d6775722e636f6d2f6b307431652e706e67)

#### Sumber dan bacaan lanjutan

* [Nilai latensi yang perlu diketahui oleh setiap pemrogram - 1](https://gist.github.com/jboner/2841832)
* [Nilai latensi yang perlu diketahui oleh setiap pemrogram - 2](https://gist.github.com/hellerbarde/2843375)
* [Rancangan, pelajaran, dan anjuran dari pembangunan sistem terdistribusi besar](http://www.cs.cornell.edu/projects/ladis2009/talks/dean-keynote-ladis2009.pdf)
* [Anjuran rekayasa perangkat lunak dari pembangunan sisterm terdistribusi skala besar](https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf)

### Tambahan pertanyaan wawancara perancangan sistem

> Pertanyaan umum wawancara perancangan sistem, dengan tautan ke sumber daya untuk menyelesaikannya.

| Pertanyaan | Referensi |
|---|---|
| Rancang layanan sinkronisasi file seperti Dropbox | [youtube.com](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| Rancang mesin pencari seperti Google | [queue.acm.org](http://queue.acm.org/detail.cfm?id=988407)<br/>[stackexchange.com](http://programmers.stackexchange.com/questions/38324/interview-question-how-would-you-implement-google-search)<br/>[ardendertat.com](http://www.ardendertat.com/2012/01/11/implementing-search-engines/)<br/>[stanford.edu](http://infolab.stanford.edu/~backrub/google.html) |
| Rancang perayap web terskala seperti Google | [quora.com](https://www.quora.com/How-can-I-build-a-web-crawler-from-scratch) |
| Rancang docs | [code.google.com](https://code.google.com/p/google-mobwrite/)<br/>[neil.fraser.name](https://neil.fraser.name/writing/sync/) |
| Rancang gudang nilai-kunci seperti Redis | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| Rancang sistem penyinggahan seperti Memcached | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Rancang sistem rekomendasi seperti Amazon | [hulu.com](https://web.archive.org/web/20170406065247/http://tech.hulu.com/blog/2011/09/19/recommendation-system.html)<br/>[ijcai13.org](http://ijcai13.org/files/tutorial_slides/td3.pdf) |
| Rancang sistem url kecil seperti Bitly | [n00tc0d3r.blogspot.com](http://n00tc0d3r.blogspot.com/) |
| Rancang aplikasi obrolan seperti WhatsApp | [highscalability.com](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html)
| Rancang sistem berbagi gambar seperti Instagram | [highscalability.com](http://highscalability.com/flickr-architecture)<br/>[highscalability.com](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html) |
| Rancang fungsi umpan berita Facebook | [quora.com](http://www.quora.com/What-are-best-practices-for-building-something-like-a-News-Feed)<br/>[quora.com](http://www.quora.com/Activity-Streams/What-are-the-scaling-issues-to-keep-in-mind-while-developing-a-social-network-feed)<br/>[slideshare.net](http://www.slideshare.net/danmckinley/etsy-activity-feeds-architecture) |
| Rancang fungsi linimasa Facebook | [facebook.com](https://www.facebook.com/note.php?note_id=10150468255628920)<br/>[highscalability.com](http://highscalability.com/blog/2012/1/23/facebook-timeline-brought-to-you-by-the-power-of-denormaliza.html) |
| Rancang fungsi obrolan Facebook | [erlang-factory.com](http://www.erlang-factory.com/upload/presentations/31/EugeneLetuchy-ErlangatFacebook.pdf)<br/>[facebook.com](https://www.facebook.com/note.php?note_id=14218138919&id=9445547199&index=0) |
| Rancang fungsi pencarian graf seperti Facebook | [facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-building-out-the-infrastructure-for-graph-search/10151347573598920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-indexing-and-ranking-in-graph-search/10151361720763920)<br/>[facebook.com](https://www.facebook.com/notes/facebook-engineering/under-the-hood-the-natural-language-interface-of-graph-search/10151432733048920) |
| Rancang jaringan pengiriman konten seperti CloudFlare | [figshare.com](https://figshare.com/articles/Globally_distributed_content_delivery/6605972) |
| Rancang sistem topik terkini seperti Twitter | [michael-noll.com](http://www.michael-noll.com/blog/2013/01/18/implementing-real-time-trending-topics-in-storm/)<br/>[snikolov .wordpress.com](http://snikolov.wordpress.com/2012/11/14/early-detection-of-twitter-trends/) |
| Rancang sistem penghasilan ID acak | [blog.twitter.com](https://blog.twitter.com/2010/announcing-snowflake)<br/>[github.com](https://github.com/twitter/snowflake/) |
| Kembalikan permintaan k teratas selama interval tertentu | [cs.ucsb.edu](https://www.cs.ucsb.edu/sites/cs.ucsb.edu/files/docs/reports/2005-23.pdf)<br/>[wpi.edu](http://davis.wpi.edu/xmdv/docs/EDBT11-diyang.pdf) |
| Rancang sistem yang menyajikan data dari berbagai pusat data | [highscalability.com](http://highscalability.com/blog/2009/8/24/how-google-serves-data-from-multiple-datacenters.html) |
| Rancang permainan kartu banyak pemain daring | [indieflashblog.com](http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html)<br/>[buildnewgames.com](http://buildnewgames.com/real-time-multiplayer/) |
| Rancang sistem pemungut sampah | [stuffwithstuff.com](http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/)<br/>[washington.edu](http://courses.cs.washington.edu/courses/csep521/07wi/prj/rick.pdf) |
| Rancang pembatas laju API | [https://stripe.com/blog/](https://stripe.com/blog/rate-limiters) |
| Tambahkan pertanyaan perancangan sistem | [Kontribusi](#kontribusi) |

### Arsitektur dunia nyata

> Artikel tentang bagaiman sistem dirancang pada dunia nyata.

<p align="center">
  <img src="http://i.imgur.com/TcUo2fw.png"/>
  <br/>
  <i><a href=https://www.infoq.com/presentations/Twitter-Timeline-Scalability>Sumber: Lini masa Twitter terskala</a></i>
</p>

**Jangan fokus pada detail seluk beluk artikel berikut, fokus lah pada:**

* Kenali prinsip bersama, teknologi umum, dan pola dalam artikel
* Pelajari masalah yang diselesaikan oleh setiap komponen, dimana komponen dapat dan tidak dapat bekerja
* Ulas pelajaran yang dipetik

|Tipe | Sistem | Referensi |
|---|---|---|
| Pemrosesan data | **MapReduce** - Pemrosesan data terdistribusi dari Google | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/mapreduce-osdi04.pdf) |
| Pemrosesan data | **Spark** - Pemrosesan data terdistribusi dari Databricks | [slideshare.net](http://www.slideshare.net/AGrishchenko/apache-spark-architecture) |
| Pemrosesan data | **Storm** - Pemrosesan data terdistribusi dari Twitter | [slideshare.net](http://www.slideshare.net/previa/storm-16094009) |
| | | |
| Gudang data | **Bigtable** - Basis data berorintasi kolom terdistribusi dari Google | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) |
| Gudang data | **HBase** - Implementasi sumber terbuka dari Bigtable | [slideshare.net](http://www.slideshare.net/alexbaranau/intro-to-hbase) |
| Gudang data | **Cassandra** - Basis data berorientasi kolom terdistribusi dari Facebook | [slideshare.net](http://www.slideshare.net/planetcassandra/cassandra-introduction-features-30103666)
| Gudang data | **DynamoDB** - Basis data berorientasi dokumen dari Amazon | [harvard.edu](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) |
| Gudang data | **MongoDB** - Basis data berorientasi dokumen | [slideshare.net](http://www.slideshare.net/mdirolf/introduction-to-mongodb) |
| Gudang data | **Spanner** - Basis data terdistribusi secara global dari Google | [research.google.com](http://research.google.com/archive/spanner-osdi2012.pdf) |
| Gudang data | **Memcached** - Sistem persinggahan memori terdistribusi | [slideshare.net](http://www.slideshare.net/oemebamo/introduction-to-memcached) |
| Gudang data | **Redis** - Sistem persinggahan memori terdistribusi dengan persistensi dan tipe nilai | [slideshare.net](http://www.slideshare.net/dvirsky/introduction-to-redis) |
| | | |
| Sistem berkas | **Google File System (GFS)** - Sistem berkas terdistribusi | [research.google.com](http://static.googleusercontent.com/media/research.google.com/zh-CN/us/archive/gfs-sosp2003.pdf) |
| Sistem berkas | **Hadoop File System (HDFS)** - Implementasi sumber terbuka dari GFS | [apache.org](http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) |
| | | |
| Tambahan | **Chubby** - Layanan penguncian untuk sistem terdistribusi hubungan renggang dari Google | [research.google.com](http://static.googleusercontent.com/external_content/untrusted_dlcp/research.google.com/en/us/archive/chubby-osdi06.pdf) |
| Tambahan | **Dapper** - Infrastruktur telusuran sistem terdistribusi | [research.google.com](http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36356.pdf)
| Tambahan | **Kafka** - Antrian pesan pub/sub dari LinkedIn | [slideshare.net](http://www.slideshare.net/mumrah/kafka-talk-tri-hug) |
| Tambahan | **Zookeeper** - Infrastruktur dan layanan terpusat untuk sinkronisasi | [slideshare.net](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) |
| | Tambahkan arsitektur | [Kontribusi](#kontribusi) |

### Arsitektur perusahaan

| Perusahaan | Referensi |
|---|---|
| Amazon | [Arsitektur Amazon](http://highscalability.com/amazon-architecture) |
| Cinchcast | [Penghasilan 1.500 jam suara setiap hari](http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html) |
| DataSift | [Penambangan data secara waktu nyata dengan 120.000 kicauan setiap detik](http://highscalability.com/blog/2011/11/29/datasift-architecture-realtime-datamining-at-120000-tweets-p.html) |
| DropBox | [Bagaimana kami menyekala Dropbox](https://www.youtube.com/watch?v=PE4gwstWhmc) |
| ESPN | [Pengoperasi 100.000 duh nuh nuhs per detik](http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html) |
| Google | [Arsitektur Google](http://highscalability.com/google-architecture) |
| Instagram | [14 juta pengguna, terabyte foto](http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html)<br/>[Apa kekuatan Instagram](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances) |
| Justin.tv | [Arsitektur penyiaran video langsung Justin.Tv](http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html) |
| Facebook | [Penyekalaan Memcached di Facebook](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/key-value/fb-memcached-nsdi-2013.pdf)<br/>[TAO: Gudang data terdistribusi Facebook untuk graf sosial](https://cs.uwaterloo.ca/~brecht/courses/854-Emerging-2014/readings/data-store/tao-facebook-distributed-datastore-atc-2013.pdf)<br/>[Penyimpanan foto Facebook](https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf)<br/>[Cara Facebook siaran langsung ke 800.0000 penonton serentak](http://highscalability.com/blog/2016/6/27/how-facebook-live-streams-to-800000-simultaneous-viewers.html) |
| Flickr | [Arsitektur Flickr](http://highscalability.com/flickr-architecture) |
| Mailbox | [Drai 0 sampai 1 juta pengguna dalam 6 minggu](http://highscalability.com/blog/2013/6/18/scaling-mailbox-from-0-to-one-million-users-in-6-weeks-and-1.html) |
| Netflix | [Pandangan 360 derajat dari seluruh tumpukan teknologi Netflix](http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html)<br/>[Netflix: Apa yang terjadi ketika kita menekan tombol mulai?](http://highscalability.com/blog/2017/12/11/netflix-what-happens-when-you-press-play.html) |
| Pinterest | [Dari 0 sampai puluhan miliar tampilan halaman sebulan](http://highscalability.com/blog/2013/4/15/scaling-pinterest-from-0-to-10s-of-billions-of-page-views-a.html)<br/>[18 juta pengunjung, 10x pertumbuhan, 12 karyawan](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html) |
| Playfish | [50 juta pengguna bulanan dan semakin bertumbuh](http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html) |
| PlentyOfFish | [Arsitektur PlentyOfFish](http://highscalability.com/plentyoffish-architecture) |
| Salesforce | [Cara mereka menangani 1,3 miliar transaksi sehari](http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html) |
| Stack Overflow | [Arsitektur Stack Overflow](http://highscalability.com/blog/2009/8/5/stack-overflow-architecture.html) |
| TripAdvisor | [40 juta pengunjung, 200 juta tampilan halaman dinamis, 30TB data](http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html) |
| Tumblr | [15 miliar tampilan halaman sebulan](http://highscalability.com/blog/2012/2/13/tumblr-architecture-15-billion-page-views-a-month-and-harder.html) |
| Twitter | [Mempercepat Twitter 10000 persen kali](http://highscalability.com/scaling-twitter-making-twitter-10000-percent-faster)<br/>[Penyimpanan 250 juta cuitan sehari menggunakan MySQL](http://highscalability.com/blog/2011/12/19/how-twitter-stores-250-million-tweets-a-day-using-mysql.html)<br/>[150 juta pengguna aktif, 300 ribu kueri per detik, a 22 MB/S firehose](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html)<br/>[Skalabilitas lini masa](https://www.infoq.com/presentations/Twitter-Timeline-Scalability)<br/>[Data besar dan kecil di Twitter](https://www.youtube.com/watch?v=5cKTP36HVgI)<br/>[Operasional di Twitter: penyekalaan di atas 100 juta pengguna](https://www.youtube.com/watch?v=z8LU0Cj6BOU)<br/>[Cara Twitter menangani 30000 gambar per detik](http://highscalability.com/blog/2016/4/20/how-twitter-handles-3000-images-per-second.html) |
| Uber | [Cara Uber menyekala platform pasar waktu nyata mereka](http://highscalability.com/blog/2015/9/14/how-uber-scales-their-real-time-market-platform.html)<br/>[Pelajaran yang dipetik dari menyekala Uber menjadi 2000 perekayasa, 1000 layanan, dan 8000 repositori Git](http://highscalability.com/blog/2016/10/12/lessons-learned-from-scaling-uber-to-2000-engineers-1000-ser.html) |
| WhatsApp | [Arsitektur WhatsApp yang dibeli Facebook senilai $19 milliar](http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html) |
| YouTube | [Skalabilitas YouTube](https://www.youtube.com/watch?v=w5WVu624fY8)<br/>[Arsitektur YouTube](http://highscalability.com/youtube-architecture) |

### Blog teknik perusahaan

> Arsitektur perusahaan tempat Anda wawancara.
>
> Pertanyaan yang mungkin ditanyakan dari domain yang sama.

* [Rekayasa Airbnb](http://nerds.airbnb.com/)
* [Pengembang Atlassian](https://developer.atlassian.com/blog/)
* [Blog AWS](https://aws.amazon.com/blogs/aws/)
* [Blog Rekayawa Bitly](http://word.bitly.com/)
* [Blog Box](https://blog.box.com/blog/category/engineering)
* [Blog Pengembang Cloudera](http://blog.cloudera.com/)
* [Blog Teknik Dropbox](https://tech.dropbox.com/)
* [Rekayasa di Quora](http://engineering.quora.com/)
* [Blog Teknik Ebay](http://www.ebaytechblog.com/)
* [Blog Teknik Evernote](https://blog.evernote.com/tech/)
* [Etsy Code as Craft](http://codeascraft.com/)
* [Rekayasa Facebook](https://www.facebook.com/Engineering)
* [Kode Flickr](http://code.flickr.net/)
* [Blog Rekayasa Foursquare](http://engineering.foursquare.com/)
* [Blog Rekayasa GitHub Engineering Blog](http://githubengineering.com/)
* [Blog Penelitian Google](http://googleresearch.blogspot.com/)
* [Blog Rekayasa Groupon](https://engineering.groupon.com/)
* [Blog Rekayasa Heroku](https://engineering.heroku.com/)
* [Blog Rekayasa Hubspot](http://product.hubspot.com/blog/topic/engineering)
* [High Scalability](http://highscalability.com/)
* [Rekayasa Instagram](http://instagram-engineering.tumblr.com/)
* [Blog Perangkat Lunak Intel](https://software.intel.com/en-us/blogs/)
* [Blog Teknik Jane Street](https://blogs.janestreet.com/category/ocaml/)
* [Rekayasa LinkedIn](http://engineering.linkedin.com/blog)
* [Rekayasa Microsoft](https://engineering.microsoft.com/)
* [Rekayasa Python Microsoft](https://blogs.msdn.microsoft.com/pythonengineering/)
* [Blog Teknik Netflix](http://techblog.netflix.com/)
* [Blog Pengembang Paypal](https://devblog.paypal.com/category/engineering/)
* [Blog Rekayasa Pinterest](https://medium.com/@Pinterest_Engineering)
* [Blog Reddit](http://www.redditblog.com/)
* [Blog Rekayasa Salesforce](https://developer.salesforce.com/blogs/engineering/)
* [Blog Rekayasa Slack](https://slack.engineering/)
* [Lab Spotify](https://labs.spotify.com/)
* [Blog Rekayasa Twilio](http://www.twilio.com/engineering)
* [Rekayasa Twitter](https://blog.twitter.com/engineering/)
* [Blog Rekayasa Uber](http://eng.uber.com/)
* [Blog Rekayasa Yahoo](http://yahooeng.tumblr.com/)
* [Blog Rekayasa Yelp](http://engineeringblog.yelp.com/)
* [Blog Rekayasa Zynga](https://www.zynga.com/blogs/engineering)

#### Sumber dan bacaan lanjutan

Ingin menambahkan blog? Untuk menghindari duplikasi kerjaan, pertimbangkan untuk menambahkan blog perusahaan ke repo berikut:

* [kilimchoi/engineering-blogs](https://github.com/kilimchoi/engineering-blogs)

## Dalam pengembangan

Berminta menambahkan bagian atau membantu menyelesaikan bagian yang sedang dalam tahap pengerjaan? [Ayo kontribusi](#kontribusi)!

* Komputasi terdistribusi dengan MapReduce
* Hashing konsisten
* _Scatter gather_
* [Kontribusi](#kontribusi)

## Kredit

Kredit dan sumber tersedia di sepanjang repo ini.

Terima kasih khusus kepada:

* [Hired in tech](http://www.hiredintech.com/system-design/the-system-design-process/)
* [Cracking the coding interview](https://www.amazon.com/dp/0984782850/)
* [High scalability](http://highscalability.com/)
* [checkcheckzz/system-design-interview](https://github.com/checkcheckzz/system-design-interview)
* [shashank88/system_design](https://github.com/shashank88/system_design)
* [mmcgrana/services-engineering](https://github.com/mmcgrana/services-engineering)
* [Contekan perancangan sistem](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [Daftar baca sistem terdistribusi](http://dancres.github.io/Pages/)
* [Pemecahan wawancara perancangan sistem](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)

## Contact info

Feel free to contact me to discuss any issues, questions, or comments.

My contact info can be found on my [GitHub page](https://github.com/donnemartin).

## License

*I am providing code and resources in this repository to you under an open source license.  Because this is my personal repository, the license you receive to my code and resources is from me and not my employer (Facebook).*

    Copyright 2017 Donne Martin

    Creative Commons Attribution 4.0 International License (CC BY 4.0)

    http://creativecommons.org/licenses/by/4.0/
