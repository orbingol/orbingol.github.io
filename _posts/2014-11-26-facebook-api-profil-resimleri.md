---
layout: post
title:  "Facebook API ile profil resimlerine erişmek"
date:   2014-10-26 09:00:00
categories:
- sosyal medya
- api
- opengraph
- jquery
---
Günümüze şöyle bir bakıldığında, sosyal medya araçlarına duyulan ilginin oldukça fazla olduğunu gözlemlemek zor değil. Hayatın her anında belirmeye başlamış oldukları ise su katılmaz gerçek. Bu durumda, genel olarak müşteri gereksinimlerine bakıldığında da, sosyal medya API'lerinin kullanımı *yazılım işinin ayrılmaz parçası* haline gelmesi kaçınılmaz oluyor. Üstüne üstlük, çoğu zaman sosyal medya API'lerini kullanmak eğlenceli oluyor :)

Bugün Facebook Graph API kullanarak, kullanıcıların profil resimlerine nasıl erişebileceğimizi öğreneceğiz. Bu işlemi [Facebook PHP API](https://developers.facebook.com/docs/reference/php/4.0.0) veya [jQuery AJAX](http://api.jquery.com/jquery.ajax/) gibi yollarla websitenize entegre edebilirsiniz.

### Profil resimlerine erişim

Facebook Graph API bize */user/picture* ucunu sunmakta. Bu ucu kullanarak doğrudan resmi gösterebileceğimiz gibi, JSON verisi olarak da profil resmi bilgilerine erişebiliyoruz. Sorgu yapacağımız uç şu şekilde:

```
http://graph.facebook.com/{kullanici_ismi veya ID'si}/picture
```

Bu noktada örnek vermenin işleri kolaylaştırabileceğini düşünüyorum. Mesela, kullanıcı ismi *muratduman.net* ise, sorgu yapacağımız ucu şu şekilde ayarlıyoruz:

```
http://graph.facebook.com/muratduman.net/picture
```

Veya kullanıcı ID'si *123456789* ise, sorgu yapacağımız uç şu şekle dönüşüyor

```
http://graph.faceook.com/123456789/picture
```

### API parametreleri ve dönüş elemanları

Bu uç 4 tip parametre alabilmektedir.

* **redirect**: *true* olarak ayarlandığında size JSON verisini döndürecektir. *false* olarak ayarlandığında ise doğrudan resmi gösterecektir. Varsayılan olarak *false* ayarlıdır.
* **width**: Resmin genişliğini belirlemek için kullanılır.
* **height**: Resmin yüksekliğini belirlemek için kullanılır.
* **type**: Profil resimleri, Facebook tarafından 4 şekilde saklanıyor: *square*, *small*, *normal* ve *large*. İlk üç tanesi resimlerin özel olarak işlenmiş halleri olmakla beraber, *large* değeri bize resmin orjinalini dönmektedir.

Daha önceden de bahsettiğim gibi, bu uç bize doğrudan resmi dönebiliyor veya *redirect* parametresinin değerine göre JSON verisi dönebiliyor. Eğer, JSON verisi dönerse aşağıdaki elemanları dönecektir.

* **url**: Profil resmine doğrudan bağlantı adresi
* **is_silhoutte**: Eğer profil resmi yüklenmemişse veya bir şekilde resmi görüntülemeye izniniz yoksa, Facebook'un varsayılan boş profil resmi gösterilir. Bu eleman *true* veya *false* dönerek, varsayılan profil resminin değiştirilip değiştirilmediğini size bildirir. Böylelikle, profil resmi olmayan kullanıcılar için kendinizin belirleiği varsayılan avatarı kullanma şansınız olur.
* **width**: *url* parametresi ile belirlenen resmin genişliğini piksel cinsinden gösterir.
* **height**: *url* parametresi ile belirlenen resmin uzunluğunu piksel cinsinden gösterir.

### Profil resmi sorgu örnekleri

Hemen deneme yapalım :)

* _muratduman.net_ kullanıcısının profil resmini *genişliği 420px* olacak şekilde alalım ve bizi doğrudan resme yönlendirsin:

```
http://graph.facebook.com/muratduman.net/picture?width=420
```

* _muratduman.net_ kullanıcısının profil resmini *genişliği 720px* ve *orjinal boy* olacak şekilde alalım ve bizi doğrudan resme yönlendirsin:

```
http://graph.facebook.com/muratduman.net/picture?width=720&type=large
```

* _muratduman.net_ kullanıcısının profil resmini *genişliği ve yüksekliği 720px* ve *orjinal boy* olacak şekilde alalım ve JSON verisi olarak dönüş yapılsın:

```
http://graph.facebook.com/muratduman.net/picture?redirect=0&width=720&type=large
```

Dönen JSON verisi şu şekilde olacaktır:

```json
{
   "data": {
      "height": 539,
      "is_silhouette": false,
      "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/10805791_10152377390686050_5073673385756436727_n.jpg?oh=e09eef1a07ef1eb5014d9eb42f071941&oe=550CF3FE&__gda__=1427633148_4359542b9513e4723e5b47af4337c20d",
      "width": 572
   }
}
```
Bu noktada elimize daha düşük genişlik ve yükseklik verisi geldi. Muhtemelen,  _muratduman.net_ kullanıcısı muhtemelen profil resmini 720px boyunda yüklemedi ve bu yüzden Facebook bize daha düşük boyda bir dönüş yaptı.


* _123456789_ kullanıcısının profil resmini *genişliği ve yüksekliği 180px* ve *kare boy* olacak şekilde alalım ve JSON verisi olarak dönüş yapılsın:

```
http://graph.facebook.com/123456789/picture?redirect=0&width=180&type=square
```

Dönen JSON verisi şu şekilde olacaktır:

```json
{
   "data": {
      "is_silhouette": true,
      "url": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif"
   }
}
```

Evet :) **is_silhoutte** elemanı *true* olarak döndü. Yani aşağıdaki resmi göreceğiz:

![Facebook Empty Profile](https://fbstatic-a.akamaihd.net/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif)

Facebook API'sinin kullanıcı profil resmi ile ilgili kısmı bu kadardı. Sorularınız ve yorumlarınız olursa, aşağıdaki kutucuğa yazabilirsiniz.

Kolaylıklar! :)



*ORB.*



