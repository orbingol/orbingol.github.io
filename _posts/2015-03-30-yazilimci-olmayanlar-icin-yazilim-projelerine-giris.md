---
layout: post
title:  "Yazılımcı olmayanlar için yazılım projelerine giriş"
description: "Yazılımcı olmayan ve olmak istemeyen kişiler için basit anlamda yazılım projelerine giriş ve bu tür projelerin planlanması"
date:   2015-03-30 02:21:00
categories:
- software project management
- planning
---

Bu yazıda daha önceden sıkça başıma gelen ve bu yüzden çok fazla sorun yaşadığım *yazılım projelendirme* hakkında kısa bir bilgi vereceğim. Bu yazı çeşitli kitapların, üniversite master / doktora programlarının veya PMI standartlarının bir özeti değil, daha çok *bir de böyle deneyin, bakalım nasıl olacak?* şeklinde fikir vermeyi amaçlıyor olacak ve bazı araçlar ile işlerinizi kolaylaştırmanın yolunu anlatmaya çalışacak.

Bu yazı **PHP ve jQuery ile yapılacak bir proje var, ilgilenir misin?** diye bana gelen kişilere ithafen yazılmıştır. Eğer bu kafadaysanız, lütfen okumaya devam edin.

Öncelikle *Proje nedir?* ile başlayalım.

## Proje nedir?

Proje, bir amaca yönelik çalışmaların, belirli bir plan, ekip ve finansman dahilinde yürütüldüğü çalışma aracıdır. Bu açıklama pek net olmayabilir. Madde madde açıklamak gerekirse:

* Bir projenin bir amacı olmalı.
* Bir planı olmalı, başlangıcı ve bitişi belli olmalı.
* Bir ekibi olmalı, yani birden fazla kişi çalışmalı veya çalışabilmeli.
* Bir bütçesi olmalı.
* Detaylar, en azından kaba / genel bir şekilde, belli olmalı.

Bu noktadan bakarak değerlendirirsek, bir ana proje altında küçük projelerin bulunması da söz konusu olabilir. Örneğin; firmanızın websitesini yenilemek istiyorsunuz.

* Ana proje: Firma websitesinin yenilenmesi
* Alt proje 1: Yeni içeriğin planlanması projesi
* Alt proje 2: Tasarım projesi
* Alt proje 3: Websitesinin oluşturulması projesi
* Alt proje 4: Eski içeriğin yeni websitesine aktarılması projesi

şeklinde bir örneklendirme yapılabilir.

Projeler ve alt projeler, genel kapsamlı araçlar olmalıdır. Proje içindeki işleri *yapılabilecek boyutlarda* ve çeşitli seviyelerde bölebilmeliyiz (iş kırınım yapısı) ama tek başına değerlendirilmesi imkansız olacak kadar küçük veya büyük parçalara bölmemiz doğru olmayacaktır.

Projelerde en önemli unsurlardan biri dokümantasyondur. Proje, siz tatile çıktığınızda veya hasta olduğunuzda da devam etmeli, değil mi? Bu yüzden, proje çalışanlarının erişebileceği ve düzenlemeler, eklemeler yapabileceği bir dokümana ihtiyacınız olacak. 

Bu başlıkta daha çok konuşulacak konu var, ama bunları sıkılmadan okuyabilecek insan bulmakta zorlanabiliriz :) Kısaca bu başlık altında bahsetmek istediğim konu, projelerimizi hazırlarken öncelikle *Agile çalışalım, Scrum yapalım* demek yerine, doğru düzgün iş planı yapıp, bütçe hazırlayıp, kafanızda birtakım şeyleri netleştirmenizin daha mantıklı olduğu. Bunları doğru düzgün yaptıktan sonra ve derin detaylara inmeden hemen önce bir çalışma metodu seçmeniz, bir miktar daha doğru olacaktır.

Bu noktada itiraz etmeyin ve başlığa bakın: *Yazılımcı olmayanlardan* bahsediyorum. Daha önceden sistematik yöntemleri kullanmış kişiler için bu şekilde çalışmak basit kalabilir, ama zaten bu yazı size hitap etmiyor :)

## Proje tamam, şimdi ne yapacağım?

Bir kere *proje tamam* dediğiniz an çuvallamışsınızdır. Daha projeye başlamadınız, sadece aklınızda olanları bir kenara yazdınız ve imkanlarınızı belirlediniz. Sizin aklınızda olan şeylerin tamamı, gerçek anlamda bir yazılım projesine *düşündüğünüz hızda* aktarılamayabilir. Bu yüzden projenizi aşama aşama planlamanız, daha sonraki gereksiz üzüntülerden sizi uzak tutacaktır.

Yazılım projeleri düşünüldüğünde, kullanılacak programlama dilinden, çalışacağı platforma kadar (web, mobil, desktop, komut satırı, ...) çokça faktör değerlendirilmesi gerekmekte. Yazılımcı olmayanlar için bunları düşünmek oldukça zor olabilir, bu yüzden bu noktada yazılımcı bir arkadaşınıza (kesin kenarda köşede bunlardan bir tane vardır) bazı konularda danışabilirsiniz. Bu danışma işinden önce ne yapmanız gerektiğini belirtmek isterim:

1. Projenizin içinde olması gerekenleri başlıklar halinde belirleyin ve bu başlıklar altına kendi anladığınız şekilde (yani teknik bir dil kullanmanıza gerek yok) madde madde açıklamalar yazın. (Vision & Scope Document)
2. Projenizde kullanılmasını istediğiniz ana ve yardımcı renkleri belirleyin. Bu konuda **Renk Bilimi - Color Science** başlıklı Wiki makalelerine veya kitaplara bakabilirsiniz. Sizin hoşunuza giden renk herkesin hoşuna gidecek diye bir şart yok, bu yüzden bu işin bilimi ve araştırmalarına yönlenmek en iyi yol.
3. Projenizde olmasını düşündüğünüz ekranları çizin, akışları belirleyin. Bunları belirlemek için özel bir araç kullanmanıza gerek yok, *kurşun kalem, silgi ve kağıt* kullanarak çizimlerinizi yapabilirsiniz. Aynı zamanda akışların belirlenmesi de oldukça önemli, mesela *Sisteme giriş yapıldıktan sonra hangi ekrana yönlenecek?* sorusunun cevabına bu aşamada cevap vermelisiniz. (Low Fidelity Prototyping)
4. Hoşunuza giden teknolojileri bir kenara not alın ve bir miktar araştırma yapın veya teknolojiyi sunan firmanın websitesindeki lansman videolarını izleyin. Böylelikle bu teknolojilerden faydalanıp faydalanamayacağınız hakkında fikirleriniz oluşacaktır. Siz teknik bir kişi olmayabilirsiniz ama bu aşamadan sonra sorularımızı soracağımız teknik arkadaş bu konularda sizi yönlendirebilecektir.

Özet olarak, elinizden gelebildiğini kadar önçalışmayı yaptıktan sonra detaylar için teknik kişilere gitmelisiniz. Yoksa teknik arkadaşlar sizin sinirlerinizi bozabilir, demedi demeyin :)

## Bu projeyi nasıl yöneteceğim ben?

Teknik kısımların değerlendirilmesi ve planlanması tamamlandıktan sonra, derin detaylar yani iş kırınımları belirlenmeli ve işlerin yapılıp yapılmadığı takip edilmelidir. Günümüzde *böl ve kazan* veya benzeri döngüsel yöntemleri izlemeniz uygun bir tercih olabilir. Sonuçta siz teknik bir kişi değilsiniz, ancak bu bir yazılım projesi yönetemeyeceğiniz anlamına gelmiyor. Uygun araçlar ve yöntemleri ile sizin de başarılı bir projeniz olabilir.

Proje yönetmek, tabii ki de bir araçla olacak bir iş değil. Projeyi siz yönetiyor olacaksınız, araç ise sadece size yardımcı olacak. Bu noktada, seçmiş olduğunuz yazılım geliştirme döngüsüne göre bir araç kullanabilirsiniz. Örneğin;

* Redmine, Jira, Bootcamp ve benzerleri
* Bugzilla
* Trello
* Slack
* Github veya Bitbucket gibi servislerin içinde bulunan issue tracker ve wiki sistemleri
* Helpdesk sistemleri (Kayako, Zendesk ve benzerleri)
* Mediawiki
* ... (aklıma gelmeyen çok şey var)

Evet biliyorum, bunların bir kısmı proje yönetim aracı değil. Zaten projeyi araç değil biz yönetiyoruz ve ihtiyacımız olan veya sevebileceğimiz / takımın sevebileceği - faydalanabileceği türden bir araç kullanmak, proje yönetmeyi eziyet olmaktan çıkarıp mutlu olabileceğiniz bir hale dönüştürebilir. Bu noktada bir bilene danışabilir veya firmaların sağladığı ücretsiz deneme sürümlerini veya online servisler için deneme periyotlarını kullanabilirsiniz.

## Profesyonel örnekler

Burada size *bilmemkimin bilmemne projesi süper gitmişti* şeklinde örnekler vermeyeceğim. Bu işin her zaman kitabına uygun gittiğini söylemem çok zor. Herkesin kendinden bir parçayı ortaya dökmesi ve diğerlerinin de bu dökülenlerin hakkını vermesi gerekiyor. Bu noktada **The Toyota Way** konusunda bir araştırma yapmanızı öneririm. Bence **gerçek anlamda profesyonel yaklaşım** budur, kendini profesyonel sanan unsurların herkesi hiçesayan davranışları değil...

Yine de hızlıca bakıp görebileceğiniz bir örnekten bahsedeceğim: oDesk'te bulunan ilanların bir kısmında *I have specifications* şeklinde notlar görebilirsiniz. oDesk'in kendisi de, bu şekilde önçalışma yapılmayan projelere pek ilgi gösterilmediğini belirtmekte zaten. Her ne kadar yazılım işleri bir parça hor görülüp, yan işmiş gibi lanse edilse de, internet üzerinden verilen servislerde ve e-ticaret gibi uygulamalarda yazılım doğrudan bu işin belkemiği durumunda olabiliyor. Bu yüzden, yazılım yoğunluklu (software intensive) çalışma yapıldığında, buna gerekli özeni göstermek **zorundasınız**.

## Proje bitsin artık!

Pek tabii bu yazıda, bir proje yöneticisi için oldukça önemli olan zaman ve iş planlamanın nasıl yapılacağı, bütçe hesaplamaları, zaman tahmini, proje yönetime yardımcı olan araçların nasıl kullanılması gerektiği, müşteri ilişkileri, çeşitli standartların belirlenmesi ve uygulanması gibi konulara değinmedik. Aslına bakarsak, *konuların şöyle bir üzerinden geçtik* demem daha doğru olacak.

Proje yönetmek ve bir takım halinde çalışabilmek pek kolay bir iş değil. Takımınızda olan kişilerin birer robot olmadığını unutmamanız gerekiyor. Ayrıca kendinizin de robot olmadığını bilmeniz gerekiyor. Bu yüzden, en başından itibaren elden geldiğince düzgün planlanmış ve kişilerden olabildiğince bağımsız olarak ilerleyebilmiş projeler, daha az sorunlu olacak ve sizi daha çok mutlu edecektir.

Bu yazıda oldukça fazla eksik var, ama yazılımcı olmayanlar için önemli olarak gördüğüm bazı noktaları belirtmek istediğimden dolayı, şimdilik bu kadar yeterli olacaktır diye düşünüyorum.

Bu konuda sizlerin de yorumlarınızı duymak isterim.

*ORB.*
