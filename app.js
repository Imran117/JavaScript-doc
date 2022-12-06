// O'zgaruvchanlar #part2

/*
  Oldingi partimizada biz o'zgaruvchanlar qanday yaratish va uning qiymatlarini o'zgartirishni ko'rib chiqqan edik.
  
  Hozir esa o'zgaruvchanlarni qanday to'g'ri nomlashni ko'rib chiqamiza

  Misol: 1
    let userName = 'Alex'
    let myClass8 = 8;
    let $myVar = 'var';
    let _name = 'Axe';

    quyidagi ko'rganlaringiz bu o'zgaruvchanlarni to'gri nomlash deb ataladi.
     > userName - camelCase uslubi bilan yozish (orasidan joy ochmagan holatda).
     > myClass8 - son qoshish imkoniyati (faqat ohiriga qoshish).
     > $myVar, _name - faqatgina 2ta {$ _} symbol qoshish imkoniyati (bosh va ohriga).



  Misol: 2
    let user_name = 'Alex'
    let UserName = 'Alex'
    let 8myClass = 8;
    let my-Var = 'var';
    let const = '1'

   Keyingiz misolimizada o'zgaruvchanlarni mumkin bo'lmagan nomlashlar bilan atash.
    > user_name - bunday nomlash tavsiya etilmaydi.
    > UserName - hamma sozlarni bosh harfini kattada yozish tavsiya etilmaydi.
    > 8myClass - son hichqachon boshidan qoyish mumkin emas.
    > my-Var - sozlarni - bilan ajratib yozish mumkin emas.
    > const - maxsus Js kalit so'zlari bilan yozish mutlaqo mumkin emas.
*/