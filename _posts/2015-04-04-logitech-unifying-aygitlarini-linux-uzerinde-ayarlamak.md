---
layout: post
title:  "Logitech Unifying aygıtlarını Linux ile ayarlamak"
description: ""
date:   2015-04-04 11:48:00
categories:
- linux
- tips
---

Logitech, ürettiği kaliteli cihazlar ile ünlü bir firma. Biraz pahalı bile olsa, çoğu kullanıcı bu firmanın ürünlerini tercih etmekte. Bir süre önce [Logitech Unifiying](http://www.logitech.com/tr-tr/promotions/6072) denilen teknoloji ile karşılaştım ve tek alıcı ile birden çok cihazı kullanabilme rahatlığını farkettim. Cihazları tek alıcıda eşlemek için Logitech'in Windows için geliştirdiği bir program var. Bugün size bu işi Linux ile nasıl yapabileceğinizi anlatacağım.

Eğer eşlenmiş cihazlarınız varsa veya herhangi bir eşlemeye ihtiyaç duymuyorsanız, aşağıdaki aşamaları uygulamak zorunda değilsiniz. Logitech Unifying cihazları, diğer cihazlar gibi, otomatik olarak Linux dağıtımları üzerinde çalışmaktadırlar.

## Logitech Unifiying nedir?

Çok basitçe, birden fazla Logitech cihazını tek bir alıcı ile kontrol etmeyi sağlayan bir teknolojidir. Cihazların içinde bir aşağıdakine benzer logoya sahip bir alıcısı vardır. Bu logo kutuların üzerinde de belirtilmiştir.

[![Logitech Unifying Alıcısı](https://farm4.staticflickr.com/3026/5692436058_47c7005abb_n.jpg)](https://www.flickr.com/photos/sfmine79/5692436058)

Konumuz Logitech Unifying olmadığından, hemen bu cihazları çeşitli Linux dağıtımları üzerinden nasıl kontrol edebileceğimizi öğrenelim.

## Unifying cihazlarını Linux üzerinden nasıl kontrol edebilirim?

Linux üzerinde bu cihazları kontrol etmek oldukça basit, çünkü [Solaar](http://pwr.github.io/Solaar/) isimli ve oldukça güzel bir kontrol programı mevcut. Bu programın bir [Launchpad PPA](https://launchpad.net/~daniel.pavel/+archive/ubuntu/solaar)'sı bile var, yani Ubuntu ve türevlerine (örn. Linux Mint gibi) rahatlıkla kurabiliriz.

**Ubuntu ve türevleri için kurulum aşamaları** aşağıdaki gibi olacak:

{% highlight bash %}
$ sudo add-apt-repository ppa:daniel.pavel/solaar
$ sudo apt-get update
$ sudo apt-get install solaar
{% endhighlight %}

Bu aşamada bazı gerekli paketlerin kurulumu da gerçekleşecek ve sonunda Solaar'ı kullanabilir hale geleceğiz.

Programı çalıştırdığımızda *alıcıyı takıp çıkarmamızı* isteyecek. Program zaman zaman, özellikle yeni bir cihaz tanıtırken, bu işlemi yapmanızı isteyecektir ve bunu arayüzünde belirtecektir. Merak etmeyin, programın çalışması için sürekli *tak çıkar* yapmanıza gerek olmayacak, yalnızca özel durumlarda ihtiyaç olabiliyor.

Solaar sayesinde;

* Cihazlarınızı tek alıcı üzerinde eşleyebilir,
* Cihazlarınızın birtakım ayarlarını yapabilir (örn. *Swap Fx Keys* gibi),
* Cihazlarınızın pil durumunu takip edebilirsiniz.

Pek tabii, pili bittiğinde cihaz çalışmayacağından dolayı pilin bittiğini anlayabilirsiniz ama özel bir durumda, örneğin bir seyahate çıkacaksınız ve cihazınızın pili az ise, bu program sayesinde bu durumu tespit ederek önlem alabilirsiniz. Sıklıkla kullandığım Linux Mint içinden gelen ve pil durumunu gösteren widget bir parça yanıltıcı çalışıyor, bu yüzden Solaar oldukça işime yarıyor.

Ubuntu ve türevleri dışındaki Linux dağıtımlarının kurulum aşamaları için [Solaar'ın Github sayfasını](http://pwr.github.io/Solaar/) ziyaret edebilirsiniz.

Umarım Solaar sizin işinize de yarar :)

*ORB.*
