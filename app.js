// Birlashtiruv va solishtiruv operatorlari #part6

/*
Birlashtiruv operatorlari bu operatorlar asosiy vazifasi malumot qoshish ayirish kopaytirish bolish va hokazo 

  Misol:1
    let age = 18+5;
    age += 2; //age = age + 2
    age -= 3; //age = age - 2
    age *= 2; //age = age * 2
    age /= 2; //age = age / 2

    += - vazifasi qoshish boladi deylik {age + 2} shuni chiroyli yozib korsatib berish uchun biza {age += 2} desak ham boladi va buni manosi (age)ga ikki qoshib ketishni anglatadi

  Misol:2
    age++ - inkrement 
    age-- - dekrement

    Ko'p holatda tsikllarda ma'lum bi hisoblagichga 1 qoshish kerak bo'lib qoladi shunaqa vaziyatga inkrementdan foydalansak bo'ladi. Bu ishimizani va kodimizani tushunarliroq qilib ko'rsatadi.


Solishtiruv operatorlari. Bu operatorlar juda ham ko'p joylarda uchratsak bo'ladi. Ularning asosiy vazifasi biron nimaga aniqlik kiritish hisoblanadi yani solishtirish.

  Misol:
    const vasia = 20;
    console.log(age > vasia) - age kattami vasiadan // true
    console.log(age >= vasia) - age katta yoki tengmi vasiaga // true
    console.log(age < vasia)  - age kichkinami vasiadan // false
    console.log(age <= vasia) - age kichkina yoki tengmi vasiaga // false
    console.log(age == vasia) - age tengmi vasiaga // false

    {true va false} nimaligini keyingi darslarimizada korib chiqshimiza mumkin. Oddiy qilib aytganda {true} - rost degani, {false} - yolg'on degani.
*/