---
layout: post
title:  "Ubuntu'ya Calibri ve Cambria Fontlarının Kurulumu"
description: "Ubuntu ve türevleri için yeni Microsoft Office sürümleri içinde gelen Calibri ve Cambria fontlarının kurulması"
date:   2015-03-28 19:55:00
categories:
- ubuntu
- fonts
---

Başlığın aslında "Debian ve türevleri için Calibri ve Cambria font alternatiflerinin kurulumu" olması gerekiyordu, çünkü Calibri ve Cambria fontları, mevcut lisansları itibarıyla, internet üzerinde dağıtılamıyor. Ancak bu durum, Microsoft ürünlerini kullanan arkadaşların bizlere gönderdiği bazı dosyaları düzenlemekte sorun çıkarabiliyor.

Bu noktada sevgili Google, ünlü Chromebook'ları için aynı (veya yakın) boyutlarda ve aralıkta, **Carlito** ve **Caladea** isimli fontlar üretmiş ve fontconfig üzerindeki ayar dosyalarından bunların ismini Calibri ve Cambria olarak göstermiş. Oldukça şık bir hareket olmuş bence.

Debian ve türevlerini kullanan arkadaşların bu fontları internette aramasına gerek yok. Doğrudan paket yöneticisinden kurabiliyorlar. Hemen adımları yazalım.

1) Desktop Linux kullananlar için genel olarak gerek olmayabilir ama usüldendir, önce paket veritabanımızı güncelleyelim.

{% highlight bash %}
$ sudo apt-get update
{% endhighlight %}

2) Sonrasında ilgili paketleri kuralım.

{% highlight bash %}
$ sudo apt-get install fonts-crosextra-carlito fonts-crosextra-caladea
{% endhighlight %}
 
Burada **fonts-crosextra-carlito** ve **fonts-crosextra-caladea** paketlerini kurmuş olduk. Bu fontların **Calibri** ve **Cambria** olarak görünmesini sağlayan ayarlar ise aşağıdaki dosyalardadır.

* _/etc/fonts/conf.d/30-0-google-crosextra-carlito-fontconfig.conf_
* _/etc/fonts/conf.d/30-0-google-crosextra-caladea-fontconfig.conf_

İlgili paketlerin kurulumu bu dosyaları oluşturacak ve gerekli ayarları yapacaktır. Unutmadan söyleyeyim, eğer LibreOffice açık ise kapatıp tekrardan açmamız gerekecektir.

Tabii ki de bu fontlar bildiğiniz Calibri ve Cambria değiller, ona benzer olarak üretilmiş ve ayar dosyaları sayesinde onlar gibi gösterilmiş fontlar. Dikkatli gözler ufak farkları göreceklerdir. Bence, lisans sorunu olmadan fontları bu şekilde kullanabilmek oldukça güzel.

*ORB.*
