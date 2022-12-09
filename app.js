// Operatorlar ishlash ketmaketligi #part7

/*
Quyidagi darslarda sizlar bilan operatorlar va ularning tulari haqida to'xtalib o'tgan edik. Endi esa ularning ishlash ketmaketligini ko'rib chiqsak ham bo'ladi.
Oddiy qilib etkanda boshlang'ich matematikada o'rgatilingan arifmetik ammallarni ishlashini ko'rsak ham bo'ladi

  Misol:1
    operatorlarning bir biridan ustunligini tablitsasini mdn kutubxonasidan ko'rishingiz mumkin.
    site-> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
  
    const isSuited = 100 - 10 > 90 - 5; - (95 kattami 85 dan)
    console.log(isSuited) // true

    Bu yerda korsak bo'ladiki hozir javob true qaytdi, sabab ? chunki bu yerda operotlar bir biridan ustunligi sababli endi shu amalni darajasida ko'radigan bo'sak:
    // 100 - (12) 10 > (10) 90 - (12) 5
    Qavusga olingan son nima deyishingiz mumkin e'tibor bering bu qavuslar har bitta operatordan keyin yozilmoqda yani bilsak bo'ladiki (-)ning darajasi 12 va (>)ning darajasi 10 bu holda (-)birinchi ishlaydi.
  
  Misol:2
    Ana endi azgina shu mavzuga chuqurlashsak ham bo'ladi. Savol bo'lishi mumkin qanday qilib qaysidir operatorni boshqa operatorlardan ustun qilib qo'yish mumkin degan... Buni yo'li onson bu yo'lni xatto oddiy arifmetikada ham ko'rsak bo'ladi

    const a = 6 + 10 / 2 // javob: 11 qaytadi albatta biz kutgan javob kelmadi ana endi shuni boshqacha yo'l bilan qilib ko'rsak ham bo'ladi.

    const a = (6 + 10) / 2 // javob: 8 shu joyida bizada quyidagi misolimizada birinchi (/) bajarilayotkan edi. Endi esa (+) birinchi ishga tushmoqda bunga sabab hozir (6 + 10) amalimizani qavusga o'rab qo'yik birinchi ishga tushishi uchun. 

  Misol:3
    Keyingi misolimizada qiymatning bir nechta o'zgaruvchanga birdanigga qo'shilib ketishini ko'rsak ham bo'ladi.

    let b;
    let c;
    c = b = 100 + 50 + 30;

    Javobni o'qishdan oldin o'zingiz mdnga kirib operatorlarni darajalarini ko'rib ozingiz bir fikir qilib ko'ring b va c ichiga nima qo'shiladi

    c = 180
    b = 180
*/