---
layout: post
title:  "Komut satırından MySQL ile çalışmak - Bölüm 2"
description: "Komut satırı kullanarak MySQL veritabanlarını ve kullanıcılarını yönetmek - bölüm 2"
date:   2015-01-29 18:20:00
categories:
- mysql
- database
---

Yazımızın 2. bölümünde, MySQL üzerinde veritabanı ve kullanıcı oluşturma işlemlerini anlatacağım.

## Veritabanı oluşturma

*drupal* isimli bir veritabanı oluşturalım.

{% highlight bash %}
mysql> create database drupal;
Query OK, 1 row affected (0.00 sec)

{% endhighlight %}

İşlem oldukça basit olmasına rağmen, dikkat edeceğimiz önemli bir durum vardır: MySQL üzerinde yapacağımız isimlendirme işlemleri büyük-küçük karaktere duyarlıdır. Yani *drupal* ile *Drupal* aynı veritabanını göstermez.

{% highlight bash %}
mysql> create database Drupal;
Query OK, 1 row affected (0.00 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| Drupal             |
| drupal             |
| mysql              |
| performance_schema |
+--------------------+
5 rows in set (0.00 sec)
{% endhighlight %}

## Kullanıcı oluşturma ve yetkilendirme

Kullanıcı adı *drpluser* ve şifresi *wst123dp* olan bir kullanıcı oluşturalım.

{% highlight bash %}
mysql> create user 'drpluser'@localhost identified by 'wst123dp';
Query OK, 0 rows affected (0.02 sec)

{% endhighlight %}

Bu noktada kullanıcımızın yetkilerine bakalım. Kullanıcının gerçekten bir yetkisi yok ama MySQL aşağıdaki gibi bir çıktı gösteriyor.

{% highlight bash %}
mysql> show grants for 'drpluser'@localhost;
+-----------------------------------------------------------------------------------------------------------------+
| Grants for drpluser@localhost                                                                                   |
+-----------------------------------------------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'drpluser'@'localhost' IDENTIFIED BY PASSWORD '*4360711F7710164AE49525B846B5B071B4579196' |
+-----------------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)
{% endhighlight %}

Biz *drpluser* kullanıcısı için *drupal* veritabanını kullanma yetkisi verelim. Genel olarak *ALL PRIVILEGES* yetkisi işimizi görecektir. Ekstra güvenlik için INSERT, UPDATE, DELETE vb. için ayrı ayrı yetkiler verebilirsiniz. Burada kullanacağımız yetki türü **veritabanı için kullanım yetkisi (usage)** olarak geçiyor.

{% highlight bash %}
mysql> grant all privileges on drupal.* to 'drpluser'@localhost;
Query OK, 0 rows affected (0.00 sec)

{% endhighlight %}

Burada *drupal* veritabanı altındaki tüm tablolar için *drpluser*'a yetki verdik. Yani istersek tek tek tablolar için de yetki verebiliyoruz. Bu yazıda bunu yapmayacağız ama bu işlemi yapmak için yıldız işareti yerine tablo ismi yazmanız gerektiğini zaten kavramışsınızdır.

Şimdi tekrardan izinlere bakalım:

{% highlight bash %}
mysql> show grants for 'drpluser'@localhost;
+-----------------------------------------------------------------------------------------------------------------+
| Grants for drpluser@localhost                                                                                   |
+-----------------------------------------------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'drpluser'@'localhost' IDENTIFIED BY PASSWORD '*4360711F7710164AE49525B846B5B071B4579196' |
| GRANT ALL PRIVILEGES ON `drupal`.* TO 'drpluser'@'localhost'                                                    |
+-----------------------------------------------------------------------------------------------------------------+
2 rows in set (0.00 sec)
{% endhighlight %}

Gördüğünüz gibi yeni eklediğimiz veritabanı kullanım yetkisi yerinde duruyor.

Bunu deneyelim.

{% highlight bash %}
onur@watt ~ $ mysql -u drpluser -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 54
Server version: 5.5.41-0ubuntu0.14.04.1-log (Ubuntu)

Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use touchscr
ERROR 1044 (42000): Access denied for user 'drpluser'@'localhost' to database 'touchscr'
{% endhighlight %}

Evet, gördüğünüz gibi *touchscr* isimli veritabanını kullanma yetkisi yok, çünkü bu veritabanı için kullanım yetkisi vermemiştik. Ama:

{% highlight bash %}
mysql> use drupal
Database changed
{% endhighlight %}

Ayarladığımız izinler beklendiği gibi çalışıyor.

Bu yazımızın sorununda, yalnızca mysql komut satırı istemcisi kullanarak bazı veritabanı işlemlerini yapmayı öğrenmiş olduk. Görmüş olduğunuz üzere, zor bir işlem değil ama bazı komutları ve sorguları bilmek, bunların davranışlarını anlamak gerekiyor.

Umarım faydalı olmuştur.

*ORB.*
