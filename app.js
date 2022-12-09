// Ma'lumot turlari #part7

/*
Object va primitivlar

Primitiv ma'lumot turlari. nega aynan primitiv oddiy qilib aytkanda biron o'zgaruvchan yaratdiz va uni ichida son bor edi keyin esa uni ichiga satr qo'shib qo'ydingiz e'tibor berinki siz bergan ikkinchi qiymat birinchi bergan qiymatingizni o'rnini egallaydi yani Js shu joyida siz birinchi bergan ma'lumotingizni almashtirib qo'yadi shuning uchun ham shunaqa nom berilgan. Yana buning sabablari juda lekin biza hozir aynan birinchi faktini ko'rib chiqdik.

Object - bu bir ma'lumot turi bo'lin uning ichida kalit va kalitning qiymati beriladi va quyidagi primitiv ma'umot turlarini kalitning qiymati qilib beramiz, undan tashqari object ichida object yaratib katta Ierarxiyalar qilsak ham bo'ladi.

  Misol:1
    Primitivlar 7ga bo'linadi

    const age = 18; - SON
    const surname = 'Zafar'; - Satr
    const isAdmin = true; - True or False

    const isAdmin = undefined;
    let data; - qiymat berilmagan
    let box = null;
    const admin = Symbol('Admin');
    const big = BigInt(999999999999999);


    Ko'rgan misollaringiz primitiv ma'lumot turlari hisoblanadi va bu ma'umot turlari o'zgaruvchanniki emas balkm o'zgaruvchan ichidagi qiymatniki desak adashmaymiz.

    Son - Js da son ma'lumot turib bo'lib uni ichiga yaxlit son, qoldiqli sonlarni o'z ichiga oladi. Qoldiqli sonlar doim . bilan qoldig'i yoziladi.
    --
    Satr - satr bu oddiy tekst bo'lib tekstni doim '"` qo'shtirnoqlar ostiga olinadi.
    --
    Boolean - mantiqiy ma'lumot turi bo'lib true va false javobini o'z ichiga oladi yani (true - rost), (false - yolg'on) degan ma'noni anglatadi.
    --
    Undefined - berilmagan qiymat bunday javobni olish uchun oddiy o'zgaruvchan yarating va uni ichiga hech nima kiritmang. agar consolega chiqazib ko'rsak bizaga bu yerda undefined qaytakanini ko'rishimiza mumkin yani quti bor lekin uni ichiga hech nima yo'qligini anglatadi.
    --
    Null - bo'shliq bu qiymatni ishlatilinishi kerak bo'lgan yoki ichiga vaqtinchalik berib turish uchun kerak bo'ladigan ma'lumot deb chunsak ham bo'ladi.
    --
    Symbol - takrorlanmas ma'lumot turib bo'lib bu qiymat hech nimaga teng bo'lmaydi. Misol uchun {admin == 'admin'} false qaytadi chunki takrorlanmas ma'lumot turi bo'lgandan keyin o'ziga o'xshagan qiymatga ham teng bo'lmaydi.
    --
    BigInt - Asosan katta sonlar bilan ishlash uchun moslashgan. Savol bo'lishi mumkin nega oddiy son ma'lumot turida yozsa bo'lmaydimi deb ha! bo'ladi lekin katta sonlarni butunlay chiqazib bera olmaydi. Shuning uchun ham BigInt ma'lumot turi bizlarga bu joyda butunlay katta sonni chiqazib beradi.

    ******************************
    Shu quyida keltirilgan misollarni qanday ma'lumot turiga mansubligini bilish uchun {typeOf} kalit so'zidan foydalansak ham bo'ladi

      Misol: 
        let name = 'Alex'
        console.log(type of name) // String
*/