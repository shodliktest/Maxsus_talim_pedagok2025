// ===== PAROL TIZIMI =====
const AUTH_KEY = 'test_authenticated';
const VALID_CREDENTIALS = {
    username: 'Pedagog2025',
    password: 'Odina1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
    {
    question: "Maxsus pedagogika fani qanday fan?",
    options: [
      "Jismoniy va ruhiy rivojlanishda nuqsoni bo`lgan bolalar ta`lim tarbiyasi bilan shug'ullanadigan fan",
      "Ko`rish nuqsoni bo`lgan bolalar bilan shug'ullanadigan fan",
      "Nutqida nuqsoni bo`lgan bolalar bilan shug'ullanadigan fan",
      "Eshitishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan"
    ],
    correctAnswer: "Jismoniy va ruhiy rivojlanishda nuqsoni bo`lgan bolalar ta`lim tarbiyasi bilan shug'ullanadigan fan"
  },
  {
    question: "Fanning asosiy vazifalari nimalardan iborat deb o'ylaysiz?",
    options: [
      "Bolaning ta`lim tarbiyasi uchun zarur shart-sharoitni yaratish",
      "Rivojlantirish diagnostikasi, tashxis qo`yishdan",
      "Maxsus yordamga muxtoj bolalarning ijtimoiy adabtatsiya, reabilitatsiya, kopensatsiyasini amalga oshirishdan",
      "Maxsus muassasalarga bolalarni saralashdan"
    ],
    correctAnswer: "Maxsus yordamga muxtoj bolalarning ijtimoiy adabtatsiya, reabilitatsiya, kopensatsiyasini amalga oshirishdan"
  },
  {
    question: "Maxsus pedagogika fanining qaysi yo`nalishlari mustaqil tarmoq sifatida ajralib chiqgan?",
    options: [
      "Oligofrenopedagogika, oftalmologiya, dermotologiya, logopediya",
      "Tiflopedagogika, ottorinoloringologiya, rinoplastika, surdologiya",
      "Surdopedagogika, stomatologiya, fiziologiya, patologiya",
      "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
    ],
    correctAnswer: "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Eshitishida nuqson bo`lgan bolalar keltirilgan qatorni ko`rsating?",
    options: [
      "Karlik, gipokinez, dislaliya",
      "Disleksiya, alaliya, daltonizm",
      "Surdologiya, surdopedagogika, tiflologiya",
      "Karlar, zaif eshituvchilar, eshitishda kech qolgan bolalar"
    ],
    correctAnswer: "Karlar, zaif eshituvchilar, eshitishda kech qolgan bolalar"
  },
  {
    question: "Ko`rishda nuqsoni bo`lgan bolalar qaysilar?",
    options: [
      "Alaliya, afaziya, rinolaliya",
      "Logopediya, nevropatologiya, psixiatriya",
      "Ko`zi ojizlar (ko`rlar), zaif ko`ruvchilar, ko`rishda kech qolganlar",
      "Tiflologiya, Oligofreniya, Logopatiya"
    ],
    correctAnswer: "Ko`zi ojizlar (ko`rlar), zaif ko`ruvchilar, ko`rishda kech qolganlar"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bo`lgan bolalarning asosiy guruhi?",
    options: [
      "Psixologik nuqsoni bo`lgan bolalar",
      "Aqli zaiflik (oligofreniya), aqliy rivojlanishning kechikishi",
      "Nutqida nuqsoni bor bolalar",
      "Eshitishida nuqsoni bor bolalar"
    ],
    correctAnswer: "Aqli zaiflik (oligofreniya), aqliy rivojlanishning kechikishi"
  },
  {
    question: "Maxsus pedagogika fanining bo`limlari qaysi to'g'ri ko'rsatilgan?",
    options: [
      "Oftalmologiya, Otorinoloringologiya, Nevrologiya, Psixiatriya",
      "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika",
      "Dermotologiya, Anatomiy, Fiziologiya, Patologiya",
      "Surdologiya, Tiflologiya, Oligofreniya, Patologiya"
    ],
    correctAnswer: "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Surdopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Surdopedagogika asosiy vazifalari?",
    options: [
      "Eshitishda nuqsoni bo`lgan bolalarni o`qitish, tarbiyalash, nutqni rivojlantirish va ijtimoiy moslashtirish",
      "Ko`rishida nuqsoni bo`lgan bolalarni o`qitish",
      "Aqliy nuqsoni bo`lgan bolalarni o`qitish",
      "Nutqida nuqsoni bo`lgan bolalarni o`qitish"
    ],
    correctAnswer: "Eshitishda nuqsoni bo`lgan bolalarni o`qitish, tarbiyalash, nutqni rivojlantirish va ijtimoiy moslashtirish"
  },
  {
    question: "Tiflopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Tayanch harakatida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Ko`rishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Tiflopedagogikaning asosiy vazifalari?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalarni o`qitish",
      "Ko`rishida nuqsoni bo`lgan bolalarni o`qitish, tarbiyalash, kompensator imkoniyatlarni rivojlantirish va ijtimoiy moslashtirish",
      "Aqliy nuqsoni bo`lgan bolalarni o`qitish",
      "Eshitishida nuqsoni bo`lgan bolalarni o`qitish"
    ],
    correctAnswer: "Ko`rishida nuqsoni bo`lgan bolalarni o`qitish, tarbiyalash, kompensator imkoniyatlarni rivojlantirish va ijtimoiy moslashtirish"
  },
  {
    question: "Oligofrenopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Aqliy rivojlanishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Oligofrenopedagogikaning asosiy vazifalari?",
    options: [
      "Eshitishida nuqsoni bo`lgan bolalarni o`qitish",
      "Aqli zaif bolalarni o`qitish, tarbiyalash, ijtimoiy-mehnatga moslashtirish",
      "Ko`rishida nuqsoni bo`lgan bolalarni o`qitish",
      "Nutqida nuqsoni bo`lgan bolalarni o`qitish"
    ],
    correctAnswer: "Aqli zaif bolalarni o`qitish, tarbiyalash, ijtimoiy-mehnatga moslashtirish"
  },
  {
    question: "Logopediya fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Aqliy nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Nutqida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Logopediyaning asosiy vazifalari?",
    options: [
      "Nutq nuqsonlarining sababini, mexanizmini, simptomatikasi va tuzilishini, tuzatish yo`llarini o`rganish",
      "Eshitishida nuqsoni bo`lgan bolalarni o`qitish",
      "Ko`rishida nuqsoni bo`lgan bolalarni o`qitish",
      "Aqliy nuqsoni bo`lgan bolalarni o`qitish"
    ],
    correctAnswer: "Nutq nuqsonlarining sababini, mexanizmini, simptomatikasi va tuzilishini, tuzatish yo`llarini o`rganish"
  },
  {
    question: "Inklyuziv ta`limning asosiy tamoyili nima?",
    options: [
      "Barcha bolalarni ajratish",
      "Har bir bolaning teng ishtirok etishini ta'minlash",
      "Faqat sog'lom bolalarga ta'lim berish",
      "Ta'limda qat'iy standartlarga amal qilish"
    ],
    correctAnswer: "Har bir bolaning teng ishtirok etishini ta'minlash"
  },
  {
    question: "Maxsus pedagogikaga bog`liq fanlarni ko`rsating?",
    options: [
      "Anatomiya, Fiziologiya, Patologiya, Psixologiya, Neorofiziologiya",
      "Astronomiya, Geografiya, Kimyo, Fizika",
      "Botologiya, Zoologiya, Gidrobiologiya, Genetika",
      "San`atshunoslik, Arxeologiya, Geologiya, Filologiya"
    ],
    correctAnswer: "Anatomiya, Fiziologiya, Patologiya, Psixologiya, Neorofiziologiya"
  },
  {
    question: "Tiflopedagogikaning asosiy vazifasi?",
    options: [
      "Nutq nuqsonlarini tuzatish",
      "Aqliy rivojlanishda nuqsoni bo'lgan bolalarni o'qitish",
      "Ko'rishida nuqsoni bo'lgan bolalarni o'qitish va ijtimoiy moslashtirish",
      "Eshitishida nuqsoni bo'lgan bolalarni o'qitish"
    ],
    correctAnswer: "Ko'rishida nuqsoni bo'lgan bolalarni o'qitish va ijtimoiy moslashtirish"
  },
  {
    question: "Surdopedagogika kimlar bilan ishlaydi?",
    options: [
      "Karlar va zaif eshituvchilar",
      "Ko'zi ojizlar va zaif ko'ruvchilar",
      "Aqli zaiflar",
      "Nutqida nuqsoni borlar"
    ],
    correctAnswer: "Karlar va zaif eshituvchilar"
  },
  {
    question: "Oligofrenopedagogika qaysi nuqsonli bolalar bilan ishlaydi?",
    options: [
      "Ko'rish nuqsoni",
      "Aqliy rivojlanishda nuqson",
      "Nutq nuqsoni",
      "Eshitish nuqsoni"
    ],
    correctAnswer: "Aqliy rivojlanishda nuqson"
  },
  {
    question: "Logopediya qanday nuqsonlarni o'rganadi?",
    options: [
      "Ko'rish nuqsonlari",
      "Eshitish nuqsonlari",
      "Nutq nuqsonlari",
      "Tayanch-harakat nuqsonlari"
    ],
    correctAnswer: "Nutq nuqsonlari"
  },
  {
    question: "Inklyuziv ta`lim nima?",
    options: [
      "Maxsus muassasalarda ta'lim berish",
      "Imkoniyati cheklangan bolalarni umumiy ta'lim jarayoniga qo'shish",
      "Faqat uyda o'qitish",
      "Bolalarni bir-biridan ajratish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarni umumiy ta'lim jarayoniga qo'shish"
  },
  {
    question: "Kompensatsiya nima?",
    options: [
      "Nuqsonni yo'qotish",
      "Nuqson natijasida buzilgan funksiyalarni boshqa sog'lom funksiyalar orqali qoplash",
      "Nuqsonni kuchaytirish",
      "Faqat dorilar bilan davolash"
    ],
    correctAnswer: "Nuqson natijasida buzilgan funksiyalarni boshqa sog'lom funksiyalar orqali qoplash"
  },
  {
    question: "Maxsus ta'limda reabilitatsiya nimani anglatadi?",
    options: [
      "Bemor bolani davolash",
      "Ijtimoiy, mehnatga va o'qishga qayta moslashtirish (tiklash)",
      "Faqat fizioterapiya",
      "Nuqsonni tashxislash"
    ],
    correctAnswer: "Ijtimoiy, mehnatga va o'qishga qayta moslashtirish (tiklash)"
  },
  {
    question: "Integratsiya ta'limi nima?",
    options: [
      "Maxsus bolalarni umumiy maktablarga qisman moslashtirish",
      "Faqat maxsus sinflar yaratish",
      "Barcha bolalarni aralashtirish",
      "Faqat ota-onalar bilan ishlash"
    ],
    correctAnswer: "Maxsus bolalarni umumiy maktablarga qisman moslashtirish"
  },
  {
    question: "Defektologiya atamasi qaysi fan bilan sinonim?",
    options: [
      "Psixologiya",
      "Maxsus pedagogika",
      "Tibbiyot",
      "Sotsiologiya"
    ],
    correctAnswer: "Maxsus pedagogika"
  },
  {
    question: "Maxsus pedagogika asosiy tushunchalari qaysi javobda to'g'ri ko'rsatilgan?",
    options: [
      "Nuqson, kompensatsiya, reabilitatsiya, integratsiya, inklyuziya",
      "Diagnostika, ta'lim, tarbiya, shaxs, jamiyat",
      "O'qitish, rivojlantirish, moslashtirish, baholash",
      "Tibbiy, pedagogik, ijtimoiy yordam"
    ],
    correctAnswer: "Nuqson, kompensatsiya, reabilitatsiya, integratsiya, inklyuziya"
  },
  {
    question: "Nutqida nuqson bo`lgan bolalar keltirilgan qatorni ko`rsating?",
    options: [
      "Karlar, zaif eshituvchilar, eshitishda kech qolgan bolalar",
      "Alaliya, afaziya, rinolaliya, duduqlanish",
      "Ko`zi ojizlar, zaif ko`ruvchilar, ko`rishda kech qolganlar",
      "Aqli zaiflar, aqliy rivojlanishda kech qolganlar"
    ],
    correctAnswer: "Alaliya, afaziya, rinolaliya, duduqlanish"
  },
  {
    question: "Tiflopedagogika fanining predmeti nima?",
    options: [
      "Aqliy rivojlanishda nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Ko'rishida nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Eshitishida nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Nutqida nuqsoni bor bolalarning ta`lim-tarbiyasi"
    ],
    correctAnswer: "Ko'rishida nuqsoni bor bolalarning ta`lim-tarbiyasi"
  },
  {
    question: "Oligofrenopedagogika fanining asosiy metodi?",
    options: [
      "Kuzatish, eksperiment, faoliyat mahsulini o'rganish",
      "Faqat tibbiy davolash",
      "Faqat dorilar berish",
      "Faqat ota-onalar bilan suhbat"
    ],
    correctAnswer: "Kuzatish, eksperiment, faoliyat mahsulini o'rganish"
  },
  {
    question: "Surdopedagogika o'rganadigan asosiy vosita?",
    options: [
      "Brayl yozuvi",
      "Eshitish apparatlari va og'zaki nutqni rivojlantirish usullari",
      "Ijtimoiy moslashish usullari",
      "Faqat jismoniy tarbiya"
    ],
    correctAnswer: "Eshitish apparatlari va og'zaki nutqni rivojlantirish usullari"
  },
  {
    question: "Maxsus ta'lim muassasalarining asosiy maqsadi?",
    options: [
      "Bolalarni faqat tibbiy davolash",
      "Nuqsonli bolalarni o'qitish, tarbiyalash va ijtimoiy hayotga tayyorlash",
      "Faqat ularni ajratib turish",
      "Faqat ota-onalarni o'qitish"
    ],
    correctAnswer: "Nuqsonli bolalarni o'qitish, tarbiyalash va ijtimoiy hayotga tayyorlash"
  },
  {
    question: "Karlar ta'limida qaysi usuldan foydalaniladi?",
    options: [
      "Brayl usuli",
      "Daktilologiya va imo-ishora tili",
      "Faqat og'zaki nutq",
      "Faqat yozma nutq"
    ],
    correctAnswer: "Daktilologiya va imo-ishora tili"
  },
  {
    question: "Ko'zi ojizlar ta'limida asosiy yozuv turi nima?",
    options: [
      "Lotin yozuvi",
      "Brayl yozuvi",
      "Kirill yozuvi",
      "Imo-ishora tili"
    ],
    correctAnswer: "Brayl yozuvi"
  },
  {
    question: "Oligofrenopedagogika ta'limida darslarning asosiy xususiyati?",
    options: [
      "Yuqori tempda o'tish",
      "Oddiylashtirilgan, amaliy yo'naltirilgan va sekin o'tadigan darslar",
      "Faqat nazariy bilim berish",
      "Faqat o'yin bilan o'tish"
    ],
    correctAnswer: "Oddiylashtirilgan, amaliy yo'naltirilgan va sekin o'tadigan darslar"
  },
  {
    question: "Logopediya nutq nuqsonlarini qaysi jihatdan o'rganadi?",
    options: [
      "Faqat tibbiy jihatdan",
      "Pedagogik, psixologik va tibbiy jihatdan kompleks yondashuv",
      "Faqat sotsiologik jihatdan",
      "Faqat iqtisodiy jihatdan"
    ],
    correctAnswer: "Pedagogik, psixologik va tibbiy jihatdan kompleks yondashuv"
  },
  {
    question: "Nuqsonli rivojlanishning asosiy sabablari?",
    options: [
      "Faqat genetik omillar",
      "Genetik, biologik va ijtimoiy omillar (prenatal, perinatal, postnatal davrlar)",
      "Faqat ijtimoiy sharoit",
      "Faqat ovqatlanish"
    ],
    correctAnswer: "Genetik, biologik va ijtimoiy omillar (prenatal, perinatal, postnatal davrlar)"
  },
  {
    question: "Maxsus pedagogika qaysi yo`nalishda tadqiqotlar olib boradi?",
    options: [
      "Tibbiy usullar",
      "Nuqsonni bartaraf etish usullari, ta'lim, tarbiya va korreksiya usullari",
      "Faqat texnik vositalar",
      "Faqat ota-onalarni tayyorlash"
    ],
    correctAnswer: "Nuqsonni bartaraf etish usullari, ta'lim, tarbiya va korreksiya usullari"
  },
  {
    question: "Maxsus ta'limda 'korreksiya' nima?",
    options: [
      "Nuqsonni davolash",
      "Rivojlanishdagi nuqsonni tuzatish va kamchiliklarni bartaraf etishga qaratilgan pedagogik jarayon",
      "Faqat tarbiya berish",
      "Faqat o'qitish"
    ],
    correctAnswer: "Rivojlanishdagi nuqsonni tuzatish va kamchiliklarni bartaraf etishga qaratilgan pedagogik jarayon"
  },
  {
    question: "Inklyuziv ta'limning maqsadi?",
    options: [
      "Maxsus bolalarni ajratish",
      "Barcha bolalarni, ularning ehtiyojidan qat'iy nazar, umumiy maktablarda birga o'qitish",
      "Faqat sog'lom bolalarni o'qitish",
      "Faqat kasal bolalarni davolash"
    ],
    correctAnswer: "Barcha bolalarni, ularning ehtiyojidan qat'iy nazar, umumiy maktablarda birga o'qitish"
  },
  {
    question: "Tiflopedagogikada sezgi organlarining kompensatsiyasi qaysi organlar hisobiga amalga oshadi?",
    options: [
      "Ko'rish",
      "Eshitish, hidlash, sezish (tuyish) kabi qolgan sog'lom analizatorlar",
      "Faqat nutq",
      "Faqat harakat"
    ],
    correctAnswer: "Eshitish, hidlash, sezish (tuyish) kabi qolgan sog'lom analizatorlar"
  },
  {
    question: "Surdopedagogikada asosiy ta'lim muammosi nima?",
    options: [
      "Harakatlanish muammosi",
      "Nutqni o'zlashtirish va rivojlantirish muammosi",
      "Ko'rish muammosi",
      "Aqliy qobiliyat muammosi"
    ],
    correctAnswer: "Nutqni o'zlashtirish va rivojlantirish muammosi"
  },
  {
    question: "Oligofrenopedagogikada bolalarni guruhlash qaysi mezon asosida amalga oshiriladi?",
    options: [
      "Yoshiga qarab",
      "Aqliy zaiflik darajasiga ko'ra (engil, o'rta, og'ir)",
      "Jinsiga qarab",
      "Oilaviy sharoitiga qarab"
    ],
    correctAnswer: "Aqliy zaiflik darajasiga ko'ra (engil, o'rta, og'ir)"
  },
  {
    question: "Logopedik yordamga muhtoj bolalar qaysilar?",
    options: [
      "Eshitishida nuqsoni borlar",
      "Nutqida nuqsoni bor (duduqlanadigan, alaliyali, dizartriyali) bolalar",
      "Ko'rishida nuqsoni borlar",
      "Aqliy rivojlanishida nuqsoni borlar"
    ],
    correctAnswer: "Nutqida nuqsoni bor (duduqlanadigan, alaliyali, dizartriyali) bolalar"
  },
  {
    question: "Imkoniyati cheklangan bolalarning rivojlanishi qanday qonuniyatlarga bo'ysunadi?",
    options: [
      "Faqat o'ziga xos qonuniyatlarga",
      "Umumiy va o'ziga xos qonuniyatlarga",
      "Faqat umumiy qonuniyatlarga",
      "Hech qanday qonuniyatlarga bo'ysunmaydi"
    ],
    correctAnswer: "Umumiy va o'ziga xos qonuniyatlarga"
  },
  {
    question: "Maxsus pedagogika fanining asosiy metodi?",
    options: [
      "Faqat testlash",
      "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa",
      "Faqat o'lchash",
      "Faqat davolash"
    ],
    correctAnswer: "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa"
  },
  {
    question: "Tiflopedagogikada Brayl yozuvining ahamiyati?",
    options: [
      "Muloqot qilish",
      "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita",
      "Harakatni o'rganish",
      "Faqat rasm chizish"
    ],
    correctAnswer: "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday usul muhim?",
    options: [
      "Faqat yozma nutq",
      "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish",
      "Faqat Brayl yozuvi",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish"
  },
  {
    question: "Aqliy zaiflikning (oligofreniya) asosiy belgisi?",
    options: [
      "Ko'rlik",
      "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi",
      "Duduqlanish",
      "Karnilik"
    ],
    correctAnswer: "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi"
  },
  {
    question: "Logopedik korreksiya qaysi yoshdan boshlanishi samarali?",
    options: [
      "Faqat maktab yoshidan",
      "Erta yoshdan (maktabgacha yosh)",
      "Faqat o'smirlikdan",
      "Faqat katta yoshdan"
    ],
    correctAnswer: "Erta yoshdan (maktabgacha yosh)"
  },
  {
    question: "Korreksion-pedagogik yordam nima uchun kerak?",
    options: [
      "Nuqsonli bolalarni ajratish uchun",
      "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun",
      "Faqat jazolash uchun",
      "Faqat dars berish uchun"
    ],
    correctAnswer: "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun"
  },
  {
    question: "Tiflopedagogikada 'Oriyentatsiya' nima?",
    options: [
      "Faqat o'qish",
      "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi",
      "Faqat nutq",
      "Faqat yozish"
    ],
    correctAnswer: "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi"
  },
  {
    question: "Surdopedagogikada 'Koxlear implantatsiya' qanday ahamiyatga ega?",
    options: [
      "Ko'rishni yaxshilash",
      "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish",
      "Aql darajasini oshirish",
      "Harakatni yaxshilash"
    ],
    correctAnswer: "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish"
  },
  {
    question: "Aqli zaif bolalarni mehnatga tayyorlashda asosiy maqsad?",
    options: [
      "Oliy ma'lumot berish",
      "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish",
      "Faqat nazariy bilim berish",
      "Faqat uyda qoldirish"
    ],
    correctAnswer: "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish"
  },
  {
    question: "Logopedik tashxis nima uchun kerak?",
    options: [
      "Bolaning sog'lomligini aniqlash",
      "Nutq nuqsonining turi, darajasi va sababini aniqlash",
      "Faqat aql darajasini o'lchash",
      "Faqat eshitishni tekshirish"
    ],
    correctAnswer: "Nutq nuqsonining turi, darajasi va sababini aniqlash"
  },
  {
    question: "Maxsus pedagogika boshqa fanlar bilan qanday bog'liq?",
    options: [
      "Faqat tibbiyot bilan",
      "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan",
      "Faqat adabiyot bilan",
      "Faqat fizika bilan"
    ],
    correctAnswer: "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan"
  },
  {
    question: "Tiflopedagogikada yordamchi vositalar qaysilar?",
    options: [
      "Eshitish apparatlari",
      "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar",
      "Faqat qalam",
      "Faqat loy"
    ],
    correctAnswer: "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar"
  },
  {
    question: "Surdopedagogikada 'Vizual qabul' nima?",
    options: [
      "Ovozni qabul qilish",
      "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish",
      "Brayl yozuvini qabul qilish",
      "Faqat hidni qabul qilish"
    ],
    correctAnswer: "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish"
  },
  {
    question: "Oligofrenopedagogikada asosiy ta'lim vazifasi?",
    options: [
      "Oliy matematika o'qitish",
      "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish",
      "Faqat tarix o'qitish",
      "Faqat chet tili o'qitish"
    ],
    correctAnswer: "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish"
  },
  {
    question: "Maxsus pedagogika fanining tadqiqot usullari?",
    options: [
      "Faqat tibbiy tekshiruvlar",
      "Pedagogik kuzatish, eksperiment, faoliyat mahsuli tahlili, hujjatlarni o'rganish",
      "Faqat iqtisodiy tahlil",
      "Faqat jismoniy mashqlar"
    ],
    correctAnswer: "Pedagogik kuzatish, eksperiment, faoliyat mahsuli tahlili, hujjatlarni o'rganish"
  },
  {
    question: "Surdopedagogikada 'Daktilologiya' nima?",
    options: [
      "Yozma nutq",
      "Barmoqlar yordamida harfma-harf nutqni ko'rsatish",
      "Og'zaki nutq",
      "Imo-ishora tili"
    ],
    correctAnswer: "Barmoqlar yordamida harfma-harf nutqni ko'rsatish"
  },
  {
    question: "Tiflopedagogikada asosiy muammo?",
    options: [
      "Nutq nuqsoni",
      "Atrof-muhit haqida ma'lumot olishning qiyinligi va harakatlanish cheklovi",
      "Aqliy rivojlanishning buzilishi",
      "Eshitishning buzilishi"
    ],
    correctAnswer: "Atrof-muhit haqida ma'lumot olishning qiyinligi va harakatlanish cheklovi"
  },
  {
    question: "Oligofrenopedagogikada 'darslik'lar qanday bo'lishi kerak?",
    options: [
      "Oliy maktab darsliklariga o'xshash",
      "Oddiy, ko'rgazmali, amaliy topshiriqlarga boy bo'lishi kerak",
      "Faqat og'zaki",
      "Faqat yozma"
    ],
    correctAnswer: "Oddiy, ko'rgazmali, amaliy topshiriqlarga boy bo'lishi kerak"
  },
  {
    question: "Logopedik mashg'ulotlarning asosiy maqsadi?",
    options: [
      "Faqat grammatika o'rgatish",
      "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish",
      "Faqat o'qishni o'rgatish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish"
  },
  {
    question: "Maxsus pedagogika fanining asosiy vazifasi?",
    options: [
      "Nuqsonli bolalarni ajratish",
      "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish",
      "Faqat sog'lom bolalarni o'qitish",
      "Faqat tibbiy tashxis qo'yish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish"
  },
  {
    question: "Tiflopedagogikada yordamchi vositalar qaysilar?",
    options: [
      "Eshitish apparatlari",
      "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar",
      "Faqat qalam",
      "Faqat loy"
    ],
    correctAnswer: "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar"
  },
  {
    question: "Surdopedagogikada 'Vizual qabul' nima?",
    options: [
      "Ovozni qabul qilish",
      "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish",
      "Brayl yozuvini qabul qilish",
      "Faqat hidni qabul qilish"
    ],
    correctAnswer: "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish"
  },
  {
    question: "Oligofrenopedagogikada asosiy ta'lim vazifasi?",
    options: [
      "Oliy matematika o'qitish",
      "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish",
      "Faqat tarix o'qitish",
      "Faqat chet tili o'qitish"
    ],
    correctAnswer: "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish"
  },
  {
    question: "Logopedik mashg'ulotlarning asosiy maqsadi?",
    options: [
      "Faqat grammatika o'rgatish",
      "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish",
      "Faqat o'qishni o'rgatish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish"
  },
  {
    question: "Maxsus pedagogika fanining asosiy vazifasi?",
    options: [
      "Nuqsonli bolalarni ajratish",
      "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish",
      "Faqat sog'lom bolalarni o'qitish",
      "Faqat tibbiy tashxis qo'yish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish"
  },
  {
    question: "Maxsus pedagogika nechanchi yildan boshlab mustaqil fan sifatida shakllana boshlagan?",
    options: [
      "XX asr boshlaridan",
      "XIX asrning ikkinchi yarmidan",
      "XXI asrdan",
      "XVIII asrdan"
    ],
    correctAnswer: "XIX asrning ikkinchi yarmidan"
  },
  {
    question: "Maxsus ta'limda 'korreksiya'ning asosiy maqsadi nima?",
    options: [
      "Bolalarni tezroq ishga yuborish",
      "Birlamchi va ikkilamchi rivojlanish nuqsonlarini tuzatish va kamaytirish",
      "Faqat ota-onalarni tinchlantirish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Birlamchi va ikkilamchi rivojlanish nuqsonlarini tuzatish va kamaytirish"
  },
  {
    question: "Imkoniyati cheklangan bolalarni ta'limga jalb qilishda qanday omil muhim?",
    options: [
      "Faqat maktab binosining kattaligi",
      "O'qituvchining maxsus tayyorgarligi va individual yondashuv",
      "Faqat bolalarning yoshi",
      "Faqat texnik jihozlar"
    ],
    correctAnswer: "O'qituvchining maxsus tayyorgarligi va individual yondashuv"
  },
  {
    question: "Tiflopedagogikada ko'rishida nuqsoni bor bolalarning qaysi qobiliyati yaxshi rivojlangan bo'ladi?",
    options: [
      "Ko'rish",
      "Eshitish, tuyish, hid bilish, xotira",
      "Faqat harakat",
      "Faqat nutq"
    ],
    correctAnswer: "Eshitish, tuyish, hid bilish, xotira"
  },
  {
    question: "Surdopedagogika fanining predmeti nima?",
    options: [
      "Aqliy rivojlanishda nuqsoni bor bolalar",
      "Ko'rishida nuqsoni bor bolalar",
      "Eshitishida nuqsoni bor bolalar",
      "Nutqida nuqsoni bor bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bor bolalar"
  },
  {
    question: "Oligofrenopedagogikada bolalarni mehnatga tayyorlash nechanchi sinfdan boshlanadi?",
    options: [
      "1-sinfdan",
      "4-5-sinfdan boshlab amaliy mehnat darslari kuchaytiriladi",
      "Faqat 11-sinfdan",
      "Faqat maktabgacha yoshdan"
    ],
    correctAnswer: "4-5-sinfdan boshlab amaliy mehnat darslari kuchaytiriladi"
  },
  {
    question: "Logopediya nutq nuqsonlarini qaysi mezonlarga ko'ra tasniflaydi?",
    options: [
      "Faqat sababiga ko'ra",
      "Klinik (tibbiy) va pedagogik (simptomatik) mezonlarga ko'ra",
      "Faqat yoshiga ko'ra",
      "Faqat jinsiga ko'ra"
    ],
    correctAnswer: "Klinik (tibbiy) va pedagogik (simptomatik) mezonlarga ko'ra"
  },
  {
    question: "Maxsus ta'lim sohasidagi xalqaro hujjatlardan biri?",
    options: [
      "BMTning Barcha bolalar uchun Ta'lim Deklaratsiyasi (Salmanka)",
      "Vashington konventsiyasi",
      "Kyoto protokoli",
      "Parij shartnomasi"
    ],
    correctAnswer: "BMTning Barcha bolalar uchun Ta'lim Deklaratsiyasi (Salmanka)"
  },
  {
    question: "Tiflopedagogikada o'qitishda qanday sezgi organlariga tayaniladi?",
    options: [
      "Faqat ko'rish",
      "Eshitish va tuyish (taktil sezgi)",
      "Faqat hid bilish",
      "Faqat ta'm bilish"
    ],
    correctAnswer: "Eshitish va tuyish (taktil sezgi)"
  },
  {
    question: "Surdopedagogikada nutq o'rgatishning asosiy usuli?",
    options: [
      "Faqat o'qish",
      "Og'zaki (oral) usul va daktilologiya",
      "Faqat yozish",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Og'zaki (oral) usul va daktilologiya"
  },
  {
    question: "Oligofrenopedagogikada o'qitishning asosiy tamoyili?",
    options: [
      "Abstrakt tushunchalarni o'rgatish",
      "Ko'rgazmalilik, amaliy yo'naltirilganlik, sekinlik va takrorlash",
      "Faqat mustaqil ish",
      "Faqat yozma ish"
    ],
    correctAnswer: "Ko'rgazmalilik, amaliy yo'naltirilganlik, sekinlik va takrorlash"
  },
  {
    question: "Maxsus pedagogikada 'psixologik-pedagogik tashxis' nima?",
    options: [
      "Faqat kasallikni aniqlash",
      "Bolaning rivojlanish darajasi, nuqsonning tuzilishi va ta'lim ehtiyojini aniqlash",
      "Faqat ota-onalarni baholash",
      "Faqat yoshini aniqlash"
    ],
    correctAnswer: "Bolaning rivojlanish darajasi, nuqsonning tuzilishi va ta'lim ehtiyojini aniqlash"
  },
  {
    question: "Inklyuziv ta’lim sharoitida maxsus pedagogning roli?",
    options: [
      "Faqat sinfni boshqarish",
      "Oddiy o'qituvchiga uslubiy yordam berish va bolaga individual korreksion ish olib borish",
      "Faqat tibbiy yordam ko'rsatish",
      "Faqat dars jadvalini tuzish"
    ],
    correctAnswer: "Oddiy o'qituvchiga uslubiy yordam berish va bolaga individual korreksion ish olib borish"
  },
  {
    question: "Tiflopedagogikada 'Oq tayoq' nima uchun ishlatiladi?",
    options: [
      "O'qish uchun",
      "Ko'zi ojizlarning atrofda harakatlanishi va xavfni sezishi uchun",
      "Yozish uchun",
      "Faqat rasm chizish uchun"
    ],
    correctAnswer: "Ko'zi ojizlarning atrofda harakatlanishi va xavfni sezishi uchun"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday vosita muhim?",
    options: [
      "Brayl mashinasi",
      "Eshitish apparatlari va koxlear implantatsiya",
      "Faqat yozma kitoblar",
      "Faqat oq tayoq"
    ],
    correctAnswer: "Eshitish apparatlari va koxlear implantatsiya"
  },
  {
    question: "Oligofrenopedagogikada bolalarning o'qish qiyinchiligiga asosiy sabab nima?",
    options: [
      "Ko'rish nuqsoni",
      "Buzilgan abstrakt tafakkur va xotira, diqqat beqarorligi",
      "Eshitish nuqsoni",
      "Faqat yomon ko'rish"
    ],
    correctAnswer: "Buzilgan abstrakt tafakkur va xotira, diqqat beqarorligi"
  },
  {
    question: "Maxsus pedagogika fanining bo`limlari qaysi to'g'ri ko'rsatilgan?",
    options: [
      "Oftalmologiya, Otorinoloringologiya, Nevrologiya, Psixiatriya",
      "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika",
      "Dermotologiya, Anatomiy, Fiziologiya, Patologiya",
      "Surdologiya, Tiflologiya, Oligofreniya, Patologiya"
    ],
    correctAnswer: "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Surdopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Tiflopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Tayanch harakatida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Ko`rishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Oligofrenopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Aqliy rivojlanishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Logopediya fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Aqliy nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Nutqida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Maxsus pedagogika qaysi yordamga muhtoj bolalarning ijtimoiy moslashuvi, reabilitatsiyasi, kompensatsiyasini amalga oshirishdan iborat?",
    options: [
      "Faqat sog'lom bolalarning",
      "Maxsus yordamga muxtoj bolalarning",
      "Faqat voyaga yetganlarning",
      "Faqat qariyalarning"
    ],
    correctAnswer: "Maxsus yordamga muxtoj bolalarning"
  },
  {
    question: "Inklyuziv ta`limning asosiy tamoyili nima?",
    options: [
      "Barcha bolalarni ajratish",
      "Har bir bolaning teng ishtirok etishini ta'minlash",
      "Faqat sog'lom bolalarga ta'lim berish",
      "Ta'limda qat'iy standartlarga amal qilish"
    ],
    correctAnswer: "Har bir bolaning teng ishtirok etishini ta'minlash"
  },
  {
    question: "Maxsus pedagogikaga bog`liq fanlarni ko`rsating?",
    options: [
      "Anatomiya, Fiziologiya, Patologiya, Psixologiya, Neorofiziologiya",
      "Astronomiya, Geografiya, Kimyo, Fizika",
      "Botologiya, Zoologiya, Gidrobiologiya, Genetika",
      "San`atshunoslik, Arxeologiya, Geologiya, Filologiya"
    ],
    correctAnswer: "Anatomiya, Fiziologiya, Patologiya, Psixologiya, Neorofiziologiya"
  },
  {
    question: "Tiflopedagogikaning asosiy vazifasi?",
    options: [
      "Nutq nuqsonlarini tuzatish",
      "Aqliy rivojlanishda nuqsoni bo'lgan bolalarni o'qitish",
      "Ko'rishida nuqsoni bo'lgan bolalarni o'qitish va ijtimoiy moslashtirish",
      "Eshitishida nuqsoni bo'lgan bolalarni o'qitish"
    ],
    correctAnswer: "Ko'rishida nuqsoni bo'lgan bolalarni o'qitish va ijtimoiy moslashtirish"
  },
  {
    question: "Surdopedagogika kimlar bilan ishlaydi?",
    options: [
      "Karlar va zaif eshituvchilar",
      "Ko'zi ojizlar va zaif ko'ruvchilar",
      "Aqli zaiflar",
      "Nutqida nuqsoni borlar"
    ],
    correctAnswer: "Karlar va zaif eshituvchilar"
  },
  {
    question: "Oligofrenopedagogika qaysi nuqsonli bolalar bilan ishlaydi?",
    options: [
      "Ko'rish nuqsoni",
      "Aqliy rivojlanishda nuqson",
      "Nutq nuqsoni",
      "Eshitish nuqsoni"
    ],
    correctAnswer: "Aqliy rivojlanishda nuqson"
  },
  {
    question: "Logopediya qanday nuqsonlarni o'rganadi?",
    options: [
      "Ko'rish nuqsonlari",
      "Eshitish nuqsonlari",
      "Nutq nuqsonlari",
      "Tayanch-harakat nuqsonlari"
    ],
    correctAnswer: "Nutq nuqsonlari"
  },
  {
    question: "Inklyuziv ta`lim nima?",
    options: [
      "Maxsus muassasalarda ta'lim berish",
      "Imkoniyati cheklangan bolalarni umumiy ta'lim jarayoniga qo'shish",
      "Faqat uyda o'qitish",
      "Bolalarni bir-biridan ajratish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarni umumiy ta'lim jarayoniga qo'shish"
  },
  {
    question: "Kompensatsiya nima?",
    options: [
      "Nuqsonni yo'qotish",
      "Nuqson natijasida buzilgan funksiyalarni boshqa sog'lom funksiyalar orqali qoplash",
      "Nuqsonni kuchaytirish",
      "Faqat dorilar bilan davolash"
    ],
    correctAnswer: "Nuqson natijasida buzilgan funksiyalarni boshqa sog'lom funksiyalar orqali qoplash"
  },
  {
    question: "Maxsus ta'limda reabilitatsiya nimani anglatadi?",
    options: [
      "Bemor bolani davolash",
      "Ijtimoiy, mehnatga va o'qishga qayta moslashtirish (tiklash)",
      "Faqat fizioterapiya",
      "Nuqsonni tashxislash"
    ],
    correctAnswer: "Ijtimoiy, mehnatga va o'qishga qayta moslashtirish (tiklash)"
  },
  {
    question: "Integratsiya ta'limi nima?",
    options: [
      "Maxsus bolalarni umumiy maktablarga qisman moslashtirish",
      "Faqat maxsus sinflar yaratish",
      "Barcha bolalarni aralashtirish",
      "Faqat ota-onalar bilan ishlash"
    ],
    correctAnswer: "Maxsus bolalarni umumiy maktablarga qisman moslashtirish"
  },
  {
    question: "Defektologiya atamasi qaysi fan bilan sinonim?",
    options: [
      "Psixologiya",
      "Maxsus pedagogika",
      "Tibbiyot",
      "Sotsiologiya"
    ],
    correctAnswer: "Maxsus pedagogika"
  },
  {
    question: "Maxsus pedagogika asosiy tushunchalari qaysi javobda to'g'ri ko'rsatilgan?",
    options: [
      "Nuqson, kompensatsiya, reabilitatsiya, integratsiya, inklyuziya",
      "Diagnostika, ta'lim, tarbiya, shaxs, jamiyat",
      "O'qitish, rivojlantirish, moslashtirish, baholash",
      "Tibbiy, pedagogik, ijtimoiy yordam"
    ],
    correctAnswer: "Nuqson, kompensatsiya, reabilitatsiya, integratsiya, inklyuziya"
  },
  {
    question: "Nutqida nuqson bo`lgan bolalar keltirilgan qatorni ko`rsating?",
    options: [
      "Karlar, zaif eshituvchilar, eshitishda kech qolgan bolalar",
      "Alaliya, afaziya, rinolaliya, duduqlanish",
      "Ko`zi ojizlar, zaif ko`ruvchilar, ko`rishda kech qolganlar",
      "Aqli zaiflar, aqliy rivojlanishda kech qolganlar"
    ],
    correctAnswer: "Alaliya, afaziya, rinolaliya, duduqlanish"
  },
  {
    question: "Tiflopedagogika fanining predmeti nima?",
    options: [
      "Aqliy rivojlanishda nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Ko'rishida nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Eshitishida nuqsoni bor bolalarning ta`lim-tarbiyasi",
      "Nutqida nuqsoni bor bolalarning ta`lim-tarbiyasi"
    ],
    correctAnswer: "Ko'rishida nuqsoni bor bolalarning ta`lim-tarbiyasi"
  },
  {
    question: "Oligofrenopedagogika fanining asosiy metodi?",
    options: [
      "Kuzatish, eksperiment, faoliyat mahsulini o'rganish",
      "Faqat tibbiy davolash",
      "Faqat dorilar berish",
      "Faqat ota-onalar bilan suhbat"
    ],
    correctAnswer: "Kuzatish, eksperiment, faoliyat mahsulini o'rganish"
  },
  {
    question: "Surdopedagogika o'rganadigan asosiy vosita?",
    options: [
      "Brayl yozuvi",
      "Eshitish apparatlari va og'zaki nutqni rivojlantirish usullari",
      "Ijtimoiy moslashish usullari",
      "Faqat jismoniy tarbiya"
    ],
    correctAnswer: "Eshitish apparatlari va og'zaki nutqni rivojlantirish usullari"
  },
  {
    question: "Maxsus ta'lim muassasalarining asosiy maqsadi?",
    options: [
      "Bolalarni faqat tibbiy davolash",
      "Nuqsonli bolalarni o'qitish, tarbiyalash va ijtimoiy hayotga tayyorlash",
      "Faqat ularni ajratib turish",
      "Faqat ota-onalarni o'qitish"
    ],
    correctAnswer: "Nuqsonli bolalarni o'qitish, tarbiyalash va ijtimoiy hayotga tayyorlash"
  },
  {
    question: "Karlar ta'limida qaysi usuldan foydalaniladi?",
    options: [
      "Brayl usuli",
      "Daktilologiya va imo-ishora tili",
      "Faqat og'zaki nutq",
      "Faqat yozma nutq"
    ],
    correctAnswer: "Daktilologiya va imo-ishora tili"
  },
  {
    question: "Ko'zi ojizlar ta'limida asosiy yozuv turi nima?",
    options: [
      "Lotin yozuvi",
      "Brayl yozuvi",
      "Kirill yozuvi",
      "Imo-ishora tili"
    ],
    correctAnswer: "Brayl yozuvi"
  },
  {
    question: "Oligofrenopedagogika ta'limida darslarning asosiy xususiyati?",
    options: [
      "Yuqori tempda o'tish",
      "Oddiylashtirilgan, amaliy yo'naltirilgan va sekin o'tadigan darslar",
      "Faqat nazariy bilim berish",
      "Faqat o'yin bilan o'tish"
    ],
    correctAnswer: "Oddiylashtirilgan, amaliy yo'naltirilgan va sekin o'tadigan darslar"
  },
  {
    question: "Logopediya nutq nuqsonlarini qaysi jihatdan o'rganadi?",
    options: [
      "Faqat tibbiy jihatdan",
      "Pedagogik, psixologik va tibbiy jihatdan kompleks yondashuv",
      "Faqat sotsiologik jihatdan",
      "Faqat iqtisodiy jihatdan"
    ],
    correctAnswer: "Pedagogik, psixologik va tibbiy jihatdan kompleks yondashuv"
  },
  {
    question: "Tiflopedagogikada yordamchi vositalar qaysilar?",
    options: [
      "Eshitish apparatlari",
      "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar",
      "Faqat qalam",
      "Faqat loy"
    ],
    correctAnswer: "Brayl mashinasi, maxsus kattalashtiruvchi optik vositalar, 'gapiruvchi' kitoblar"
  },
  {
    question: "Surdopedagogikada 'Vizual qabul' nima?",
    options: [
      "Ovozni qabul qilish",
      "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish",
      "Brayl yozuvini qabul qilish",
      "Faqat hidni qabul qilish"
    ],
    correctAnswer: "Nutqni o'qish (labdan o'qish) va imo-ishoralarni qabul qilish"
  },
  {
    question: "Oligofrenopedagogikada asosiy ta'lim vazifasi?",
    options: [
      "Oliy matematika o'qitish",
      "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish",
      "Faqat tarix o'qitish",
      "Faqat chet tili o'qitish"
    ],
    correctAnswer: "Ijtimoiy-maishiy va oddiy mehnat ko'nikmalarini shakllantirish"
  },
  {
    question: "Logopedik mashg'ulotlarning asosiy maqsadi?",
    options: [
      "Faqat grammatika o'rgatish",
      "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish",
      "Faqat o'qishni o'rgatish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Nutq nuqsonini bartaraf etish va nutqning barcha tomonlarini rivojlantirish"
  },
  {
    question: "Maxsus pedagogika fanining asosiy vazifasi?",
    options: [
      "Nuqsonli bolalarni ajratish",
      "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish",
      "Faqat sog'lom bolalarni o'qitish",
      "Faqat tibbiy tashxis qo'yish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarga yordam berishning nazariy asoslari va amaliy usullarini ishlab chiqish"
  },
  {
    question: "Maxsus pedagogika nechanchi yildan boshlab mustaqil fan sifatida shakllana boshlagan?",
    options: [
      "XX asr boshlaridan",
      "XIX asrning ikkinchi yarmidan",
      "XXI asrdan",
      "XVIII asrdan"
    ],
    correctAnswer: "XIX asrning ikkinchi yarmidan"
  },
  {
    question: "Maxsus ta'limda 'korreksiya'ning asosiy maqsadi nima?",
    options: [
      "Bolalarni tezroq ishga yuborish",
      "Birlamchi va ikkilamchi rivojlanish nuqsonlarini tuzatish va kamaytirish",
      "Faqat ota-onalarni tinchlantirish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Birlamchi va ikkilamchi rivojlanish nuqsonlarini tuzatish va kamaytirish"
  },
  {
    question: "Imkoniyati cheklangan bolalarni ta'limga jalb qilishda qanday omil muhim?",
    options: [
      "Faqat maktab binosining kattaligi",
      "O'qituvchining maxsus tayyorgarligi va individual yondashuv",
      "Faqat bolalarning yoshi",
      "Faqat texnik jihozlar"
    ],
    correctAnswer: "O'qituvchining maxsus tayyorgarligi va individual yondashuv"
  },
  {
    question: "Tiflopedagogikada ko'rishida nuqsoni bor bolalarning qaysi qobiliyati yaxshi rivojlangan bo'ladi?",
    options: [
      "Ko'rish",
      "Eshitish, tuyish, hid bilish, xotira",
      "Faqat harakat",
      "Faqat nutq"
    ],
    correctAnswer: "Eshitish, tuyish, hid bilish, xotira"
  },
  {
    question: "Surdopedagogika fanining predmeti nima?",
    options: [
      "Aqliy rivojlanishda nuqsoni bor bolalar",
      "Ko'rishida nuqsoni bor bolalar",
      "Eshitishida nuqsoni bor bolalar",
      "Nutqida nuqsoni bor bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bor bolalar"
  },
  {
    question: "Oligofrenopedagogikada bolalarni mehnatga tayyorlash nechanchi sinfdan boshlanadi?",
    options: [
      "1-sinfdan",
      "4-5-sinfdan boshlab amaliy mehnat darslari kuchaytiriladi",
      "Faqat 11-sinfdan",
      "Faqat maktabgacha yoshdan"
    ],
    correctAnswer: "4-5-sinfdan boshlab amaliy mehnat darslari kuchaytiriladi"
  },
  {
    question: "Logopediya nutq nuqsonlarini qaysi mezonlarga ko'ra tasniflaydi?",
    options: [
      "Faqat sababiga ko'ra",
      "Klinik (tibbiy) va pedagogik (simptomatik) mezonlarga ko'ra",
      "Faqat yoshiga ko'ra",
      "Faqat jinsiga ko'ra"
    ],
    correctAnswer: "Klinik (tibbiy) va pedagogik (simptomatik) mezonlarga ko'ra"
  },
  {
    question: "Maxsus ta'lim sohasidagi xalqaro hujjatlardan biri?",
    options: [
      "BMTning Barcha bolalar uchun Ta'lim Deklaratsiyasi (Salmanka)",
      "Vashington konventsiyasi",
      "Kyoto protokoli",
      "Parij shartnomasi"
    ],
    correctAnswer: "BMTning Barcha bolalar uchun Ta'lim Deklaratsiyasi (Salmanka)"
  },
  {
    question: "Tiflopedagogikada o'qitishda qanday sezgi organlariga tayaniladi?",
    options: [
      "Faqat ko'rish",
      "Eshitish va tuyish (taktil sezgi)",
      "Faqat hid bilish",
      "Faqat ta'm bilish"
    ],
    correctAnswer: "Eshitish va tuyish (taktil sezgi)"
  },
  {
    question: "Surdopedagogikada nutq o'rgatishning asosiy usuli?",
    options: [
      "Faqat o'qish",
      "Og'zaki (oral) usul va daktilologiya",
      "Faqat yozish",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Og'zaki (oral) usul va daktilologiya"
  },
  {
    question: "Oligofrenopedagogikada o'qitishning asosiy tamoyili?",
    options: [
      "Abstrakt tushunchalarni o'rgatish",
      "Ko'rgazmalilik, amaliy yo'naltirilganlik, sekinlik va takrorlash",
      "Faqat mustaqil ish",
      "Faqat yozma ish"
    ],
    correctAnswer: "Ko'rgazmalilik, amaliy yo'naltirilganlik, sekinlik va takrorlash"
  },
  {
    question: "Maxsus pedagogikada 'psixologik-pedagogik tashxis' nima?",
    options: [
      "Faqat kasallikni aniqlash",
      "Bolaning rivojlanish darajasi, nuqsonning tuzilishi va ta'lim ehtiyojini aniqlash",
      "Faqat ota-onalarni baholash",
      "Faqat yoshini aniqlash"
    ],
    correctAnswer: "Bolaning rivojlanish darajasi, nuqsonning tuzilishi va ta'lim ehtiyojini aniqlash"
  },
  {
    question: "Inklyuziv ta’lim sharoitida maxsus pedagogning roli?",
    options: [
      "Faqat sinfni boshqarish",
      "Oddiy o'qituvchiga uslubiy yordam berish va bolaga individual korreksion ish olib borish",
      "Faqat tibbiy yordam ko'rsatish",
      "Faqat dars jadvalini tuzish"
    ],
    correctAnswer: "Oddiy o'qituvchiga uslubiy yordam berish va bolaga individual korreksion ish olib borish"
  },
  {
    question: "Tiflopedagogikada 'Oq tayoq' nima uchun ishlatiladi?",
    options: [
      "O'qish uchun",
      "Ko'zi ojizlarning atrofda harakatlanishi va xavfni sezishi uchun",
      "Yozish uchun",
      "Faqat rasm chizish uchun"
    ],
    correctAnswer: "Ko'zi ojizlarning atrofda harakatlanishi va xavfni sezishi uchun"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday vosita muhim?",
    options: [
      "Brayl mashinasi",
      "Eshitish apparatlari va koxlear implantatsiya",
      "Faqat yozma kitoblar",
      "Faqat oq tayoq"
    ],
    correctAnswer: "Eshitish apparatlari va koxlear implantatsiya"
  },
  {
    question: "Oligofrenopedagogikada bolalarning o'qish qiyinchiligiga asosiy sabab nima?",
    options: [
      "Ko'rish nuqsoni",
      "Buzilgan abstrakt tafakkur va xotira, diqqat beqarorligi",
      "Eshitish nuqsoni",
      "Faqat yomon ko'rish"
    ],
    correctAnswer: "Buzilgan abstrakt tafakkur va xotira, diqqat beqarorligi"
  },
  {
    question: "Maxsus ta'limda 'integratsiya' nima?",
    options: [
      "Nuqsonli bolalarni doimiy ravishda ajratib o'qitish",
      "Nuqsonli bolalarni umumiy ta'lim muassasalariga qisman yoki to'liq qo'shish",
      "Faqat uyda ta'lim berish",
      "Faqat o'qituvchilarni o'qitish"
    ],
    correctAnswer: "Nuqsonli bolalarni umumiy ta'lim muassasalariga qisman yoki to'liq qo'shish"
  },
  {
    question: "Logopedik amaliyotda 'massaj' nima uchun ishlatiladi?",
    options: [
      "Bolaning qo'lini massaj qilish",
      "Nutq apparati (til, lablar, larinx) mushak tonusini normallashtirish uchun",
      "Oyoqlarini massaj qilish",
      "Faqat dam olish uchun"
    ],
    correctAnswer: "Nutq apparati (til, lablar, larinx) mushak tonusini normallashtirish uchun"
  },
  {
    question: "Tiflopedagogika fanining asoschisi kim?",
    options: [
      "L.S. Vygotskiy",
      "Valentin Gayui",
      "I.A. Sokolyanskiy",
      "Mariya Montessori"
    ],
    correctAnswer: "Valentin Gayui"
  },
  {
    question: "Surdopedagogikada o'qitishning asosiy tamoyili?",
    options: [
      "Nutqni rivojlantirmaslik",
      "Eshitish qoldig'iga tayanib, nutqni uzluksiz rivojlantirish",
      "Faqat imo-ishorani o'rgatish",
      "Faqat yozma nutqni rivojlantirish"
    ],
    correctAnswer: "Eshitish qoldig'iga tayanib, nutqni uzluksiz rivojlantirish"
  },
  {
    question: "Oligofrenopedagogikada korreksiya ishining asosiy yo'nalishi?",
    options: [
      "Faqat tibbiy davolash",
      "Aqliy, shaxsiy va ijtimoiy-mehnat rivojlanishini korreksiya qilish",
      "Faqat jismoniy tarbiya",
      "Faqat rasm chizish"
    ],
    correctAnswer: "Aqliy, shaxsiy va ijtimoiy-mehnat rivojlanishini korreksiya qilish"
  },
  {
    question: "Maxsus maktabgacha ta'lim muassasalarining maqsadi?",
    options: [
      "Bolalarni faqat uyda saqlash",
      "Bolalarni erta yoshdan tashxislash va korreksion-pedagogik yordam ko'rsatish",
      "Faqat ovqatlantirish",
      "Faqat dam olishni tashkil etish"
    ],
    correctAnswer: "Bolalarni erta yoshdan tashxislash va korreksion-pedagogik yordam ko'rsatish"
  },
  {
    question: "Nutq nuqsonlaridan biri bo'lgan **Dislaliya** nima?",
    options: [
      "Nutqning butunlay yo'qolishi",
      "Talaffuzning buzilishi (ayrim tovushlarni noto'g'ri aytish)",
      "Duduqlanish",
      "Yozma nutqning buzilishi"
    ],
    correctAnswer: "Talaffuzning buzilishi (ayrim tovushlarni noto'g'ri aytish)"
  },
  {
    question: "Tiflopedagogikada maktab o'quvchilarining maxsus jihozlangan xonasi qanday nomlanadi?",
    options: [
      "Sport zali",
      "Tiflokabinet (maxsus xona)",
      "Oshxona",
      "Tibbiyot punkti"
    ],
    correctAnswer: "Tiflokabinet (maxsus xona)"
  },
  {
    question: "Surdopedagogikada **Qoldiq eshitish** tushunchasi nimani anglatadi?",
    options: [
      "Eshitishning to'liq yo'qolishi",
      "Karlar va zaif eshituvchilarda saqlanib qolgan eshitish qobiliyati",
      "Nutq qobiliyati",
      "Ko'rish qobiliyati"
    ],
    correctAnswer: "Karlar va zaif eshituvchilarda saqlanib qolgan eshitish qobiliyati"
  },
  {
    question: "Aqli zaif bolalarda **tafakkur**ning asosiy kamchiligi?",
    options: [
      "Tez fikrlash",
      "Abstrakt-mantiqiy tafakkurning zaifligi, konkret (aniq) tafakkur ustunligi",
      "Faqat xayolparastlik",
      "Faqat xotira buzilishi"
    ],
    correctAnswer: "Abstrakt-mantiqiy tafakkurning zaifligi, konkret (aniq) tafakkur ustunligi"
  },
  {
    question: "Logopediya fanining eng qadimgi yo'nalishi qaysi?",
    options: [
      "Surdopedagogika",
      "Duduqlanishni tuzatish",
      "Oligofrenopedagogika",
      "Tiflopedagogika"
    ],
    correctAnswer: "Duduqlanishni tuzatish"
  },
  {
    question: "Maxsus ta'limda **Individual ta'lim rejasi (ITR)** nima uchun kerak?",
    options: [
      "Barcha bolalarni bir xil o'qitish",
      "Har bir nuqsonli bolaning ehtiyojiga mos ta'lim dasturini tuzish",
      "Faqat o'qituvchining ishini yengillashtirish",
      "Faqat baholash uchun"
    ],
    correctAnswer: "Har bir nuqsonli bolaning ehtiyojiga mos ta'lim dasturini tuzish"
  },
  {
    question: "Tiflopedagogikada ko'zi ojiz bolalarni o'qitishdagi asosiy metodika?",
    options: [
      "Faqat eshitish",
      "Og'zaki va taktil-kinestetik (tuyish va harakat) metodikalar",
      "Faqat ko'rgazmali qurollar",
      "Faqat jismoniy mashqlar"
    ],
    correctAnswer: "Og'zaki va taktil-kinestetik (tuyish va harakat) metodikalar"
  },
  {
    question: "Surdopedagogikada 'Lip-reading' (Labdan o'qish) nima?",
    options: [
      "Yozuvni o'qish",
      "So'zlovchining lab harakatiga qarab nutqni tushunish",
      "Imo-ishora tili",
      "Brayl yozuvini o'qish"
    ],
    correctAnswer: "So'zlovchining lab harakatiga qarab nutqni tushunish"
  },
  {
    question: "Aqliy rivojlanishning kechikishi (ARK) holatida qanday yordam ko'rsatiladi?",
    options: [
      "Faqat maxsus maktabda o'qitish",
      "Korreksion-rivojlantiruvchi ta'lim orqali tengdoshlar darajasiga yaqinlashtirish",
      "Faqat uyda ta'lim berish",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Korreksion-rivojlantiruvchi ta'lim orqali tengdoshlar darajasiga yaqinlashtirish"
  },
  {
    question: "Logopediya nutq nuqsonlarini qaysi usullar bilan tuzatadi?",
    options: [
      "Faqat dori vositalari",
      "Logopedik mashg'ulotlar, artikulyatsion gimnastika, nutq massaji, nafas mashqlari",
      "Faqat jismoniy mashqlar",
      "Faqat o'qish"
    ],
    correctAnswer: "Logopedik mashg'ulotlar, artikulyatsion gimnastika, nutq massaji, nafas mashqlari"
  },
  {
    question: "Maxsus ta'lim tizimida **Tibbiy-pedagogik-psixologik komissiya (TPPK)**ning vazifasi?",
    options: [
      "Faqat bolalarni baholash",
      "Bolaning rivojlanish nuqsonini aniqlash va unga mos ta'lim shaklini tavsiya etish",
      "Faqat o'qituvchilarni ishga olish",
      "Faqat maktab binosini qurish"
    ],
    correctAnswer: "Bolaning rivojlanish nuqsonini aniqlash va unga mos ta'lim shaklini tavsiya etish"
  },
  {
    question: "Tiflopedagogikada Brail alifbosidagi harflar qanday elementlardan tashkil topgan?",
    options: [
      "Chiziqlar",
      "6 nuqtadan iborat kombinatsiyalar",
      "Ranglar",
      "Raqamlar"
    ],
    correctAnswer: "6 nuqtadan iborat kombinatsiyalar"
  },
  {
    question: "Surdopedagogikada eshitish apparatlari nima uchun ishlatiladi?",
    options: [
      "Ko'rishni yaxshilash",
      "Qoldiq eshitishni maksimal darajada oshirish va nutqni qabul qilishga yordam berish",
      "Harakatni yaxshilash",
      "Aql darajasini oshirish"
    ],
    correctAnswer: "Qoldiq eshitishni maksimal darajada oshirish va nutqni qabul qilishga yordam berish"
  },
  {
    question: "Oligofrenopedagogikada mehnatga tayyorlashning maqsadi?",
    options: [
      "Oliy ma'lumot olish",
      "Ijtimoiy-foydali mehnat ko'nikmalarini shakllantirish va mustaqil yashashga tayyorlash",
      "Faqat sport bilan shug'ullanish",
      "Faqat musiqa o'rganish"
    ],
    correctAnswer: "Ijtimoiy-foydali mehnat ko'nikmalarini shakllantirish va mustaqil yashashga tayyorlash"
  },
  {
    question: "Nutq nuqsonlaridan biri bo'lgan **Rinolaliya** nima?",
    options: [
      "Duduqlanish",
      "Burun rezonansining buzilishi bilan bog'liq talaffuz nuqsoni (dimog'da gapirish)",
      "Eshitishning buzilishi",
      "Ko'rishning buzilishi"
    ],
    correctAnswer: "Burun rezonansining buzilishi bilan bog'liq talaffuz nuqsoni (dimog'da gapirish)"
  },
  {
    question: "Inklyuziv ta'lim sharoitida o'qituvchi oldidagi eng katta qiyinchiliklardan biri?",
    options: [
      "Darsliklarning yo'qligi",
      "Turli ehtiyojli bolalar uchun dars jarayonini moslashtirish va individual yondashuvni ta'minlash",
      "Maktabning uzoqligi",
      "Ota-onalarning aralashmasligi"
    ],
    correctAnswer: "Turli ehtiyojli bolalar uchun dars jarayonini moslashtirish va individual yondashuvni ta'minlash"
  },
  {
    question: "Tiflopedagogikada ko'zi ojiz bolalarning **fazoviy orientatsiyasi** qanday rivojlantiriladi?",
    options: [
      "Faqat ko'rish orqali",
      "Eshitish, tuyish va harakat (kinestetik) sezgilarni rivojlantirish orqali",
      "Faqat yozish orqali",
      "Faqat ovqatlanish orqali"
    ],
    correctAnswer: "Eshitish, tuyish va harakat (kinestetik) sezgilarni rivojlantirish orqali"
  },
  {
    question: "Surdopedagogikada **Imo-ishora tili** nima?",
    options: [
      "Yozma nutq",
      "Karlar jamoasida muloqot qilishning asosiy vizual-harakat usuli",
      "Og'zaki nutq",
      "Brayl yozuvi"
    ],
    correctAnswer: "Karlar jamoasida muloqot qilishning asosiy vizual-harakat usuli"
  },
  {
    question: "Oligofrenopedagogikada darslik materiallari qanday tuziladi?",
    options: [
      "Murakkab va abstrakt",
      "Oddiy, aniq, hayotiy misollar va takroriy mashqlar asosida",
      "Faqat nazariy",
      "Faqat rasmlardan iborat"
    ],
    correctAnswer: "Oddiy, aniq, hayotiy misollar va takroriy mashqlar asosida"
  },
  {
    question: "Logopediya nutq nuqsonlarini oldini olishda qanday ishlar muhim?",
    options: [
      "Faqat maktabda o'qitish",
      "Erta yoshdagi bolalar nutqini rivojlantirish va ota-onalarni ma'rifatli qilish",
      "Faqat dori berish",
      "Faqat sport bilan shug'ullanish"
    ],
    correctAnswer: "Erta yoshdagi bolalar nutqini rivojlantirish va ota-onalarni ma'rifatli qilish"
  },
  {
    question: "Maxsus ta'limda **Reabilitatsiya**ning ijtimoiy jihati?",
    options: [
      "Faqat tibbiy davolash",
      "Shaxsni jamiyatda to'laqonli ishtirok etishga (ish, muloqot, hordiq) qayta tayyorlash",
      "Faqat o'qitish",
      "Faqat uyda saqlash"
    ],
    correctAnswer: "Shaxsni jamiyatda to'laqonli ishtirok etishga (ish, muloqot, hordiq) qayta tayyorlash"
  },
  {
    question: "Tiflopedagogikada maktab yoshidagi bolalarni o'qitishda qaysi fan muhim?",
    options: [
      "Badiiy adabiyot",
      "Harakatlanish va orientatsiya (yo'nalish olish)",
      "Oliy matematika",
      "Astronomiya"
    ],
    correctAnswer: "Harakatlanish va orientatsiya (yo'nalish olish)"
  },
  {
    question: "Surdopedagogikada karlar ta'limining birinchi bosqichi nima?",
    options: [
      "Yozma nutqni o'rgatish",
      "Dastlabki nutq va elementar lug'atni shakllantirish, eshitish qoldig'ini faollashtirish",
      "Faqat imo-ishorani o'rgatish",
      "Faqat darslik o'qitish"
    ],
    correctAnswer: "Dastlabki nutq va elementar lug'atni shakllantirish, eshitish qoldig'ini faollashtirish"
  },
  {
    question: "Oligofrenopedagogikada yengil darajadagi aqli zaiflik (debility) qanday o'qitiladi?",
    options: [
      "Oliy maktabda",
      "Maxsus maktabning yengil dasturi bo'yicha yoki inkluziv sinflarda",
      "Faqat uyda",
      "Faqat kasalxonada"
    ],
    correctAnswer: "Maxsus maktabning yengil dasturi bo'yicha yoki inkluziv sinflarda"
  },
  {
    question: "Nutq nuqsonlaridan biri bo'lgan **Afaziya** nima?",
    options: [
      "Nutq tovushlarining buzilishi",
      "Bosh miyaning nutq markazlari zararlanishi natijasida nutqning to'liq yoki qisman yo'qolishi",
      "Duduqlanish",
      "Yozma nutqning buzilishi"
    ],
    correctAnswer: "Bosh miyaning nutq markazlari zararlanishi natijasida nutqning to'liq yoki qisman yo'qolishi"
  },
  {
    question: "Inklyuziv ta'limning asosiy afzalligi nima?",
    options: [
      "Faqat pul tejash",
      "Nuqsonli bolalarning ijtimoiy moslashuvi va sog'lom bolalarda tolerantlikni rivojlantirish",
      "Faqat o'qituvchilarning bilimini oshirish",
      "Faqat darsliklarni yangilash"
    ],
    correctAnswer: "Nuqsonli bolalarning ijtimoiy moslashuvi va sog'lom bolalarda tolerantlikni rivojlantirish"
  },
  {
    question: "Tiflopedagogikada **kattalashtiruvchi optik vositalar** kimlar uchun qo'llaniladi?",
    options: [
      "Ko'zi ojizlar uchun",
      "Zaif ko'ruvchilar uchun",
      "Eshitishida nuqsoni borlar uchun",
      "Aqli zaiflar uchun"
    ],
    correctAnswer: "Zaif ko'ruvchilar uchun"
  },
  {
    question: "Surdopedagogikada karlarda nutqning buzilishiga asosiy sabab nima?",
    options: [
      "Aqliy zaiflik",
      "Eshitish analizatorining buzilishi tufayli og'zaki nutq namunalarini qabul qila olmaslik",
      "Ko'rish buzilishi",
      "Harakat buzilishi"
    ],
    correctAnswer: "Eshitish analizatorining buzilishi tufayli og'zaki nutq namunalarini qabul qila olmaslik"
  },
  {
    question: "Oligofrenopedagogikada o'qitishning eng muhim sharti?",
    options: [
      "Bolalarni faqat tanqid qilish",
      "Korrektsion-rivojlantiruvchi muhit yaratish va individual rivojlanish zonasiga tayanib ishlash",
      "Faqat darslikdan o'qish",
      "Faqat og'zaki tushuntirish"
    ],
    correctAnswer: "Korrektsion-rivojlantiruvchi muhit yaratish va individual rivojlanish zonasiga tayanib ishlash"
  },
  {
    question: "Nutq nuqsonlaridan biri bo'lgan **Dizartriya** nima?",
    options: [
      "Yozma nutqning buzilishi",
      "Nutq mushaklarining innervatsiyasi buzilishi natijasida talaffuzning qisman buzilishi",
      "Duduqlanish",
      "Nutqning yo'qligi"
    ],
    correctAnswer: "Nutq mushaklarining innervatsiyasi buzilishi natijasida talaffuzning qisman buzilishi"
  },
  {
    question: "Integratsiya va inklyuziya o'rtasidagi asosiy farq?",
    options: [
      "Farqi yo'q",
      "Integratsiya bolani tizimga moslashtirishni talab qilsa, inklyuziya tizimni bolaga moslashtirishni talab qiladi",
      "Integratsiya faqat uyda o'qitadi",
      "Inklyuziya faqat maxsus maktabda o'qitadi"
    ],
    correctAnswer: "Integratsiya bolani tizimga moslashtirishni talab qilsa, inklyuziya tizimni bolaga moslashtirishni talab qiladi"
  },
  {
    question: "Tiflopedagogikada zaif ko'ruvchilarning ta'limi qaysi usulga asoslanadi?",
    options: [
      "Faqat Brayl yozuvi",
      "Kattalashtirilgan yozuv, maxsus optika va qoldiq ko'rishga tayanib ishlash",
      "Faqat eshitish",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Kattalashtirilgan yozuv, maxsus optika va qoldiq ko'rishga tayanib ishlash"
  },
  {
    question: "Surdopedagogikada **Bilingual ta'lim** deganda nima tushuniladi?",
    options: [
      "Ikki xorijiy tilni o'rganish",
      "Imo-ishora tili va og'zaki nutqni birgalikda o'qitish",
      "Faqat yozma nutqni o'rgatish",
      "Faqat matematika o'rgatish"
    ],
    correctAnswer: "Imo-ishora tili va og'zaki nutqni birgalikda o'qitish"
  },
  {
    question: "Oligofrenopedagogikada tarbiya ishining muhim yo'nalishi?",
    options: [
      "Faqat ilm o'rganish",
      "Ijtimoiy-axloqiy va mehnat tarbiyasiga asosiy e'tibor berish",
      "Faqat sport bilan shug'ullanish",
      "Faqat san'at o'rganish"
    ],
    correctAnswer: "Ijtimoiy-axloqiy va mehnat tarbiyasiga asosiy e'tibor berish"
  },
  {
    question: "Logopediya fanining asoschisi kim hisoblanadi?",
    options: [
      "L.S. Vygotskiy",
      "I.A. Sokolyanskiy",
      "Y.A. Freyd",
      "A. Luriya"
    ],
    correctAnswer: "A. Luriya"
  },
  {
    question: "Maxsus pedagogikaning asosiy tamoyillaridan biri – **Ontogenezning birligi** tamoyili nima?",
    options: [
      "Nuqsonli bolalarni ajratish",
      "Oddiy va nuqsonli rivojlanish qonuniyatlari o'xshashligini hisobga olish",
      "Faqat tibbiy davolash",
      "Faqat jismoniy tarbiya"
    ],
    correctAnswer: "Oddiy va nuqsonli rivojlanish qonuniyatlari o'xshashligini hisobga olish"
  },
  {
    question: "Tiflopedagogikada **Brayl yozuvi**ni kim ixtiro qilgan?",
    options: [
      "I.A. Sokolyanskiy",
      "Lui Brayl",
      "Mariya Montessori",
      "V. Gayui"
    ],
    correctAnswer: "Lui Brayl"
  },
  {
    question: "Surdopedagogikada **Artikulyatsion gimnastika** nima uchun kerak?",
    options: [
      "Ko'rishni yaxshilash",
      "Nutq organlari (til, lablar) harakatini rivojlantirish va talaffuzni shakllantirish",
      "Eshitishni yaxshilash",
      "Oyoq harakatini yaxshilash"
    ],
    correctAnswer: "Nutq organlari (til, lablar) harakatini rivojlantirish va talaffuzni shakllantirish"
  },
  {
    question: "Oligofrenopedagogikada og'ir darajadagi aqli zaiflik (idiotiya, imbecility) holatida qanday yordam ko'rsatiladi?",
    options: [
      "Oliy ta'lim",
      "Asosan parvarish va elementar o'z-o'ziga xizmat ko'nikmalarini shakllantirish",
      "Faqat mehnat darslari",
      "Faqat uyda ta'lim"
    ],
    correctAnswer: "Asosan parvarish va elementar o'z-o'ziga xizmat ko'nikmalarini shakllantirish"
  },
  {
    question: "Logopediya fanida **Nutq analizatori** deganda nima tushuniladi?",
    options: [
      "Faqat til",
      "Nutqning idrok etilishi va hosil bo'lishini ta'minlovchi markaziy asab tizimi qismlari",
      "Faqat eshitish",
      "Faqat larinx"
    ],
    correctAnswer: "Nutqning idrok etilishi va hosil bo'lishini ta'minlovchi markaziy asab tizimi qismlari"
  },
  {
    question: "Maxsus pedagogika fanining bo`limlari qaysi to'g'ri ko'rsatilgan?",
    options: [
      "Oftalmologiya, Otorinoloringologiya, Nevrologiya, Psixiatriya",
      "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika",
      "Dermotologiya, Anatomiy, Fiziologiya, Patologiya",
      "Surdologiya, Tiflologiya, Oligofreniya, Patologiya"
    ],
    correctAnswer: "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Surdopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Tiflopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Tayanch harakatida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Ko`rishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Oligofrenopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Aqliy rivojlanishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Logopediya fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Aqliy nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Nutqida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Maxsus pedagogika fanining asosiy metodi?",
    options: [
      "Faqat testlash",
      "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa",
      "Faqat o'lchash",
      "Faqat davolash"
    ],
    correctAnswer: "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa"
  },
  {
    question: "Tiflopedagogikada Brayl yozuvining ahamiyati?",
    options: [
      "Muloqot qilish",
      "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita",
      "Harakatni o'rganish",
      "Faqat rasm chizish"
    ],
    correctAnswer: "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday usul muhim?",
    options: [
      "Faqat yozma nutq",
      "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish",
      "Faqat Brayl yozuvi",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish"
  },
  {
    question: "Aqliy zaiflikning (oligofreniya) asosiy belgisi?",
    options: [
      "Ko'rlik",
      "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi",
      "Duduqlanish",
      "Karnilik"
    ],
    correctAnswer: "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi"
  },
  {
    question: "Logopedik korreksiya qaysi yoshdan boshlanishi samarali?",
    options: [
      "Faqat maktab yoshidan",
      "Erta yoshdan (maktabgacha yosh)",
      "Faqat o'smirlikdan",
      "Faqat katta yoshdan"
    ],
    correctAnswer: "Erta yoshdan (maktabgacha yosh)"
  },
  {
    question: "Korreksion-pedagogik yordam nima uchun kerak?",
    options: [
      "Nuqsonli bolalarni ajratish uchun",
      "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun",
      "Faqat jazolash uchun",
      "Faqat dars berish uchun"
    ],
    correctAnswer: "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun"
  },
  {
    question: "Tiflopedagogikada 'Oriyentatsiya' nima?",
    options: [
      "Faqat o'qish",
      "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi",
      "Faqat nutq",
      "Faqat yozish"
    ],
    correctAnswer: "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi"
  },
  {
    question: "Surdopedagogikada 'Koxlear implantatsiya' qanday ahamiyatga ega?",
    options: [
      "Ko'rishni yaxshilash",
      "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish",
      "Aql darajasini oshirish",
      "Harakatni yaxshilash"
    ],
    correctAnswer: "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish"
  },
  {
    question: "Aqli zaif bolalarni mehnatga tayyorlashda asosiy maqsad?",
    options: [
      "Oliy ma'lumot berish",
      "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish",
      "Faqat nazariy bilim berish",
      "Faqat uyda qoldirish"
    ],
    correctAnswer: "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish"
  },
  {
    question: "Logopedik tashxis nima uchun kerak?",
    options: [
      "Bolaning sog'lomligini aniqlash",
      "Nutq nuqsonining turi, darajasi va sababini aniqlash",
      "Faqat aql darajasini o'lchash",
      "Faqat eshitishni tekshirish"
    ],
    correctAnswer: "Nutq nuqsonining turi, darajasi va sababini aniqlash"
  },
  {
    question: "Maxsus pedagogika boshqa fanlar bilan qanday bog'liq?",
    options: [
      "Faqat tibbiyot bilan",
      "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan",
      "Faqat adabiyot bilan",
      "Faqat fizika bilan"
    ],
    correctAnswer: "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan"
  },
  {
    question: "Maxsus pedagogikada **ta'lim-tarbiya jarayoni**ning muhim tamoyili nima?",
    options: [
      "Faqat jazolash",
      "Korreksiyaviy yo'nalish va individual yondashuv",
      "Faqat o'qitish",
      "Faqat nazorat"
    ],
    correctAnswer: "Korreksiyaviy yo'nalish va individual yondashuv"
  },
  {
    question: "Ko'zi ojiz bolalar uchun matematikani o'qitishda qanday vositalar ishlatiladi?",
    options: [
      "Rangli rasmlar",
      "Maxsus relyefli (taktil) geometrik shakllar va Abak",
      "Eshitish apparatlari",
      "Imo-ishora tili"
    ],
    correctAnswer: "Maxsus relyefli (taktil) geometrik shakllar va Abak"
  },
  {
    question: "Karlar ta'limida eshitish apparatlari qoldiq eshitishni qanday oshiradi?",
    options: [
      "Ovozni butunlay yo'q qiladi",
      "Ovozni kuchaytiradi va uni farqlash imkoniyatini beradi",
      "Faqat lab harakatini ko'rsatadi",
      "Faqat imo-ishorani tushuntiradi"
    ],
    correctAnswer: "Ovozni kuchaytiradi va uni farqlash imkoniyatini beradi"
  },
  {
    question: "Oligofrenopedagogikada bolaning **motivatsiyasi**ni rivojlantirish nima uchun kerak?",
    options: [
      "Bolani qo'rqitish uchun",
      "O'qish va mehnatga qiziqish uyg'otish, shaxsiy faolligini oshirish uchun",
      "Faqat baho olish uchun",
      "Faqat dam olish uchun"
    ],
    correctAnswer: "O'qish va mehnatga qiziqish uyg'otish, shaxsiy faolligini oshirish uchun"
  },
  {
    question: "Logopedik amaliyotda **Talaffuz buzilishi**ning eng keng tarqalgan turi?",
    options: [
      "Afaziya",
      "Dislaliya",
      "Duduqlanish",
      "Alaliya"
    ],
    correctAnswer: "Dislaliya"
  },
  {
    question: "Maxsus pedagogikaning **ijtimoiy yondashuvi** nimani anglatadi?",
    options: [
      "Faqat tibbiy muammoni hal qilish",
      "Nuqsonni shaxsning emas, balki jamiyatning (muhitning) moslashuvchanligi bilan bog'liq deb qarash",
      "Faqat ta'lim berish",
      "Faqat oilani o'rganish"
    ],
    correctAnswer: "Nuqsonni shaxsning emas, balki jamiyatning (muhitning) moslashuvchanligi bilan bog'liq deb qarash"
  },
  {
    question: "Ko'rishida nuqsoni bor bolalarning ta'limida qaysi ko'nikmalar ustuvor?",
    options: [
      "Faqat ko'rish",
      "O'z-o'ziga xizmat qilish, orientatsiya va harakat ko'nikmalari",
      "Faqat ovozli nutq",
      "Faqat yugurish"
    ],
    correctAnswer: "O'z-o'ziga xizmat qilish, orientatsiya va harakat ko'nikmalari"
  },
  {
    question: "Surdopedagogikada **maxsus texnik vositalar** qaysilar?",
    options: [
      "Brayl mashinasi",
      "Eshitish apparatlari, Koxlear implantlar, nutqni vizuallashtiruvchi kompyuter dasturlari",
      "Faqat oddiy qalam",
      "Faqat mikroskop"
    ],
    correctAnswer: "Eshitish apparatlari, Koxlear implantlar, nutqni vizuallashtiruvchi kompyuter dasturlari"
  },
  {
    question: "Aqli zaif bolalarda **xotira**ning asosiy kamchiligi?",
    options: [
      "Faqat yaxshi eslab qolish",
      "Mexanik xotiraning ustunligi, mantiqiy xotiraning zaifligi",
      "Faqat yaxshi eslash",
      "Faqat diqqatning barqarorligi"
    ],
    correctAnswer: "Mexanik xotiraning ustunligi, mantiqiy xotiraning zaifligi"
  },
  {
    question: "Logopediya fanida **Duduqlanish**ning asosiy sabablari?",
    options: [
      "Faqat noto'g'ri nafas olish",
      "Nutq faoliyatini boshqaruvchi markaziy asab tizimi faoliyatidagi buzilishlar (nevroz, nevrozga o'xshash holatlar)",
      "Faqat tilning kalta bo'lishi",
      "Faqat eshitishning buzilishi"
    ],
    correctAnswer: "Nutq faoliyatini boshqaruvchi markaziy asab tizimi faoliyatidagi buzilishlar (nevroz, nevrozga o'xshash holatlar)"
  },
  {
    question: "Inklyuziv ta'limning O'zbekistonda joriy etilishi qaysi yildan boshlangan?",
    options: [
      "1991 yil",
      "2000-yillarning boshidan boshlab bosqichma-bosqich",
      "1950 yil",
      "2020 yil"
    ],
    correctAnswer: "2000-yillarning boshidan boshlab bosqichma-bosqich"
  },
  {
    question: "Tiflopedagogikada **ko'rgazmalilik tamoyili** qanday amalga oshiriladi?",
    options: [
      "Faqat rangli rasmlar",
      "Taktil (tuyish), ovozli va harakatli ko'rgazmali qurollar orqali",
      "Faqat yozuv orqali",
      "Faqat yorug'lik orqali"
    ],
    correctAnswer: "Taktil (tuyish), ovozli va harakatli ko'rgazmali qurollar orqali"
  },
  {
    question: "Surdopedagogikada **L.S. Vygotskiy**ning 'Rivojlanishning ijtimoiy nazariyasi' qanday ahamiyatga ega?",
    options: [
      "Eshitishning fiziologiyasini o'rgatadi",
      "Nutq va aqlning rivojlanishi faqat ijtimoiy muloqot orqali mumkinligini isbotlaydi",
      "Faqat jismoniy tarbiyani o'rgatadi",
      "Faqat genetik omillarni o'rganadi"
    ],
    correctAnswer: "Nutq va aqlning rivojlanishi faqat ijtimoiy muloqot orqali mumkinligini isbotlaydi"
  },
  {
    question: "Oligofrenopedagogikada **ta'limiy o'yinlar** nima uchun ishlatiladi?",
    options: [
      "Faqat dam olish uchun",
      "Diqqat, xotira, mayda motorikani rivojlantirish va o'quv materialini o'zlashtirish uchun",
      "Faqat yugurish uchun",
      "Faqat rasm chizish uchun"
    ],
    correctAnswer: "Diqqat, xotira, mayda motorikani rivojlantirish va o'quv materialini o'zlashtirish uchun"
  },
  {
    question: "Logopediya fanida **Nutq ritmi va sur'ati buzilishi** qaysi nuqsonga kiradi?",
    options: [
      "Dislaliya",
      "Duduqlanish",
      "Afaziya",
      "Alaliya"
    ],
    correctAnswer: "Duduqlanish"
  },
  {
    question: "Maxsus ta'lim tizimida **erta yordam** nima?",
    options: [
      "Faqat maktab yoshida yordam",
      "3 yoshgacha bo'lgan bolalarni tashxislash va korreksion yordam ko'rsatish",
      "Faqat 10 yoshdan keyin yordam",
      "Faqat ota-onalarga yordam"
    ],
    correctAnswer: "3 yoshgacha bo'lgan bolalarni tashxislash va korreksion yordam ko'rsatish"
  },
  {
    question: "Tiflopedagogikada **Maxsus jismoniy tarbiya**ning maqsadi?",
    options: [
      "Faqat sport musobaqalari",
      "Harakatlarni muvofiqlashtirishni, fazoviy orientatsiyani yaxshilash va jismoniy rivojlanishdagi ikkilamchi buzilishlarning oldini olish",
      "Faqat ovqatlanishni o'rgatish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Harakatlarni muvofiqlashtirishni, fazoviy orientatsiyani yaxshilash va jismoniy rivojlanishdagi ikkilamchi buzilishlarning oldini olish"
  },
  {
    question: "Surdopedagogikada **surdologiya** nima?",
    options: [
      "Ko'rishni o'rganadigan fan",
      "Eshitishning buzilishlarini, ularning sabablari, tashxisi va oldini olishni o'rganadigan tibbiy-biologik fan",
      "Aql darajasini o'rganadigan fan",
      "Nutqni o'rganadigan fan"
    ],
    correctAnswer: "Eshitishning buzilishlarini, ularning sabablari, tashxisi va oldini olishni o'rganadigan tibbiy-biologik fan"
  },
  {
    question: "Oligofrenopedagogikada bolalarning **diqqati**ning asosiy xususiyati?",
    options: [
      "Juda barqaror",
      "Beqaror, tez charchaydigan, e'tiborni qiyinlik bilan jamlaydigan",
      "Juda keng",
      "Juda tor"
    ],
    correctAnswer: "Beqaror, tez charchaydigan, e'tiborni qiyinlik bilan jamlaydigan"
  },
  {
    question: "Logopediya fanida **Alaliya** nima?",
    options: [
      "Talaffuz buzilishi",
      "Nutq markazlarining organik shikastlanishi natijasida nutqning yo'qligi yoki rivojlanmasligi",
      "Duduqlanish",
      "Yozma nutqning buzilishi"
    ],
    correctAnswer: "Nutq markazlarining organik shikastlanishi natijasida nutqning yo'qligi yoki rivojlanmasligi"
  },
  {
    question: "Inklyuziv ta'limning asosiy tamoyillaridan biri?",
    options: [
      "Faqat sog'lom bolalarni o'qitish",
      "Ta'limning moslashuvchanligi va har bir bolaning qadr-qimmati",
      "Faqat ajratilgan ta'lim",
      "Faqat tibbiy parvarish"
    ],
    correctAnswer: "Ta'limning moslashuvchanligi va har bir bolaning qadr-qimmati"
  },
  {
    question: "Tiflopedagogikada **tuyish orqali idrok**ning (taktil sezgi) ahamiyati?",
    options: [
      "Hech qanday ahamiyati yo'q",
      "Ko'zi ojiz bolalar uchun ob'ektlar shakli va xususiyatlarini bilishning asosiy usuli",
      "Faqat eshitishni rivojlantirish",
      "Faqat yurishni o'rgatish"
    ],
    correctAnswer: "Ko'zi ojiz bolalar uchun ob'ektlar shakli va xususiyatlarini bilishning asosiy usuli"
  },
  {
    question: "Surdopedagogikada **maxsus ta'lim dasturi** nima uchun kerak?",
    options: [
      "Faqat sog'lom bolalar uchun",
      "Eshitish nuqsoniga moslashtirilgan o'quv materiallari va o'qitish metodikasini ta'minlash",
      "Faqat yugurishni o'rgatish",
      "Faqat rasm chizishni o'rgatish"
    ],
    correctAnswer: "Eshitish nuqsoniga moslashtirilgan o'quv materiallari va o'qitish metodikasini ta'minlash"
  },
  {
    question: "Oligofrenopedagogikada **ijtimoiy moslashuv**ning maqsadi?",
    options: [
      "Faqat uyda o'tirish",
      "Mustaqil hayot kechirish, jamiyatga integratsiyalashish va o'ziga xizmat ko'rsatishni o'rganish",
      "Faqat sport bilan shug'ullanish",
      "Faqat chet tili o'rganish"
    ],
    correctAnswer: "Mustaqil hayot kechirish, jamiyatga integratsiyalashish va o'ziga xizmat ko'rsatishni o'rganish"
  },
  {
    question: "Logopediya fanida **Grafiya buzilishi (disgrafiya)** nima?",
    options: [
      "Talaffuz buzilishi",
      "Yozma nutqning buzilishi (xat yozishdagi xatolar)",
      "Duduqlanish",
      "Nutqning yo'qligi"
    ],
    correctAnswer: "Yozma nutqning buzilishi (xat yozishdagi xatolar)"
  },
  {
    question: "Maxsus pedagogika fanining bo`limlari qaysi to'g'ri ko'rsatilgan?",
    options: [
      "Oftalmologiya, Otorinoloringologiya, Nevrologiya, Psixiatriya",
      "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika",
      "Dermotologiya, Anatomiy, Fiziologiya, Patologiya",
      "Surdologiya, Tiflologiya, Oligofreniya, Patologiya"
    ],
    correctAnswer: "Logopediya, Tiflopedagogika, Surdopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Surdopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Eshitishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Tiflopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Nutqida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Tayanch harakatida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Ko`rishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Oligofrenopedagogika fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Ko`rishida nuqsoni bo`lgan bolalar",
      "Aqliy rivojlanishida nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Aqliy rivojlanishida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Logopediya fani kimlar ta`lim tarbiyasi bilan shug`ullanadi?",
    options: [
      "Aqliy nuqsoni bo`lgan bolalar",
      "Eshitishida nuqsoni bo`lgan bolalar",
      "Nutqida nuqsoni bo`lgan bolalar",
      "Ko`rishida nuqsoni bo`lgan bolalar"
    ],
    correctAnswer: "Nutqida nuqsoni bo`lgan bolalar"
  },
  {
    question: "Maxsus pedagogika fanining asosiy metodi?",
    options: [
      "Faqat testlash",
      "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa",
      "Faqat o'lchash",
      "Faqat davolash"
    ],
    correctAnswer: "Kuzatish, eksperiment, faoliyat mahsulini o'rganish, anketa"
  },
  {
    question: "Tiflopedagogikada Brayl yozuvining ahamiyati?",
    options: [
      "Muloqot qilish",
      "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita",
      "Harakatni o'rganish",
      "Faqat rasm chizish"
    ],
    correctAnswer: "Ko'zi ojizlarga o'qish va yozishni o'rgatish uchun asosiy vosita"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday usul muhim?",
    options: [
      "Faqat yozma nutq",
      "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish",
      "Faqat Brayl yozuvi",
      "Faqat imo-ishora"
    ],
    correctAnswer: "Og'zaki nutqni akustik, vizual-tebranma usullar orqali shakllantirish"
  },
  {
    question: "Aqliy zaiflikning (oligofreniya) asosiy belgisi?",
    options: [
      "Ko'rlik",
      "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi",
      "Duduqlanish",
      "Karnilik"
    ],
    correctAnswer: "Tafakkur jarayonlarining doimiy buzilishi va aqliy rivojlanishning kechikishi"
  },
  {
    question: "Logopedik korreksiya qaysi yoshdan boshlanishi samarali?",
    options: [
      "Faqat maktab yoshidan",
      "Erta yoshdan (maktabgacha yosh)",
      "Faqat o'smirlikdan",
      "Faqat katta yoshdan"
    ],
    correctAnswer: "Erta yoshdan (maktabgacha yosh)"
  },
  {
    question: "Korreksion-pedagogik yordam nima uchun kerak?",
    options: [
      "Nuqsonli bolalarni ajratish uchun",
      "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun",
      "Faqat jazolash uchun",
      "Faqat dars berish uchun"
    ],
    correctAnswer: "Rivojlanishdagi ikkilamchi nuqsonlarning oldini olish va bartaraf etish uchun"
  },
  {
    question: "Tiflopedagogikada 'Oriyentatsiya' nima?",
    options: [
      "Faqat o'qish",
      "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi",
      "Faqat nutq",
      "Faqat yozish"
    ],
    correctAnswer: "Ko'zi ojizlarning atrof-muhitda yo'nalish olishi va harakatlanishi"
  },
  {
    question: "Surdopedagogikada 'Koxlear implantatsiya' qanday ahamiyatga ega?",
    options: [
      "Ko'rishni yaxshilash",
      "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish",
      "Aql darajasini oshirish",
      "Harakatni yaxshilash"
    ],
    correctAnswer: "Karlar uchun eshitishni tiklash va og'zaki nutqni o'rganish imkonini berish"
  },
  {
    question: "Aqli zaif bolalarni mehnatga tayyorlashda asosiy maqsad?",
    options: [
      "Oliy ma'lumot berish",
      "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish",
      "Faqat nazariy bilim berish",
      "Faqat uyda qoldirish"
    ],
    correctAnswer: "Ularni oddiy, o'z kuchi yetadigan kasblarga ijtimoiy moslashtirish"
  },
  {
    question: "Logopedik tashxis nima uchun kerak?",
    options: [
      "Bolaning sog'lomligini aniqlash",
      "Nutq nuqsonining turi, darajasi va sababini aniqlash",
      "Faqat aql darajasini o'lchash",
      "Faqat eshitishni tekshirish"
    ],
    correctAnswer: "Nutq nuqsonining turi, darajasi va sababini aniqlash"
  },
  {
    question: "Maxsus pedagogika boshqa fanlar bilan qanday bog'liq?",
    options: [
      "Faqat tibbiyot bilan",
      "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan",
      "Faqat adabiyot bilan",
      "Faqat fizika bilan"
    ],
    correctAnswer: "Psixologiya, tibbiyot, ijtimoiy ish kabi fanlar bilan uzviy bog'langan"
  },
  {
    question: "Maxsus pedagogikada **ta'lim-tarbiya jarayoni**ning muhim tamoyili nima?",
    options: [
      "Faqat jazolash",
      "Korreksiyaviy yo'nalish va individual yondashuv",
      "Faqat o'qitish",
      "Faqat nazorat"
    ],
    correctAnswer: "Korreksiyaviy yo'nalish va individual yondashuv"
  },
  {
    question: "Ko'zi ojiz bolalar uchun matematikani o'qitishda qanday vositalar ishlatiladi?",
    options: [
      "Rangli rasmlar",
      "Maxsus relyefli (taktil) geometrik shakllar va Abak",
      "Eshitish apparatlari",
      "Imo-ishora tili"
    ],
    correctAnswer: "Maxsus relyefli (taktil) geometrik shakllar va Abak"
  },
  {
    question: "Karlar ta'limida eshitish apparatlari qoldiq eshitishni qanday oshiradi?",
    options: [
      "Ovozni butunlay yo'q qiladi",
      "Ovozni kuchaytiradi va uni farqlash imkoniyatini beradi",
      "Faqat lab harakatini ko'rsatadi",
      "Faqat imo-ishorani tushuntiradi"
    ],
    correctAnswer: "Ovozni kuchaytiradi va uni farqlash imkoniyatini beradi"
  },
  {
    question: "Oligofrenopedagogikada bolaning **motivatsiyasi**ni rivojlantirish nima uchun kerak?",
    options: [
      "Bolani qo'rqitish uchun",
      "O'qish va mehnatga qiziqish uyg'otish, shaxsiy faolligini oshirish uchun",
      "Faqat baho olish uchun",
      "Faqat dam olish uchun"
    ],
    correctAnswer: "O'qish va mehnatga qiziqish uyg'otish, shaxsiy faolligini oshirish uchun"
  },
  {
    question: "Logopedik amaliyotda **Talaffuz buzilishi**ning eng keng tarqalgan turi?",
    options: [
      "Afaziya",
      "Dislaliya",
      "Duduqlanish",
      "Alaliya"
    ],
    correctAnswer: "Dislaliya"
  },
  {
    question: "Maxsus pedagogikaning **ijtimoiy yondashuvi** nimani anglatadi?",
    options: [
      "Faqat tibbiy muammoni hal qilish",
      "Nuqsonni shaxsning emas, balki jamiyatning (muhitning) moslashuvchanligi bilan bog'liq deb qarash",
      "Faqat ta'lim berish",
      "Faqat oilani o'rganish"
    ],
    correctAnswer: "Nuqsonni shaxsning emas, balki jamiyatning (muhitning) moslashuvchanligi bilan bog'liq deb qarash"
  },
  {
    question: "Ko'rishida nuqsoni bor bolalarning ta'limida qaysi ko'nikmalar ustuvor?",
    options: [
      "Faqat ko'rish",
      "O'z-o'ziga xizmat qilish, orientatsiya va harakat ko'nikmalari",
      "Faqat ovozli nutq",
      "Faqat yugurish"
    ],
    correctAnswer: "O'z-o'ziga xizmat qilish, orientatsiya va harakat ko'nikmalari"
  },
  {
    question: "Surdopedagogikada **maxsus texnik vositalar** qaysilar?",
    options: [
      "Brayl mashinasi",
      "Eshitish apparatlari, Koxlear implantlar, nutqni vizuallashtiruvchi kompyuter dasturlari",
      "Faqat oddiy qalam",
      "Faqat mikroskop"
    ],
    correctAnswer: "Eshitish apparatlari, Koxlear implantlar, nutqni vizuallashtiruvchi kompyuter dasturlari"
  },
  {
    question: "Aqli zaif bolalarda **xotira**ning asosiy kamchiligi?",
    options: [
      "Faqat yaxshi eslab qolish",
      "Mexanik xotiraning ustunligi, mantiqiy xotiraning zaifligi",
      "Faqat yaxshi eslash",
      "Faqat diqqatning barqarorligi"
    ],
    correctAnswer: "Mexanik xotiraning ustunligi, mantiqiy xotiraning zaifligi"
  },
  {
    question: "Logopediya fanida **Duduqlanish**ning asosiy sabablari?",
    options: [
      "Faqat noto'g'ri nafas olish",
      "Nutq faoliyatini boshqaruvchi markaziy asab tizimi faoliyatidagi buzilishlar (nevroz, nevrozga o'xshash holatlar)",
      "Faqat tilning kalta bo'lishi",
      "Faqat eshitishning buzilishi"
    ],
    correctAnswer: "Nutq faoliyatini boshqaruvchi markaziy asab tizimi faoliyatidagi buzilishlar (nevroz, nevrozga o'xshash holatlar)"
  },
  {
    question: "Inklyuziv ta'limning O'zbekistonda joriy etilishi qaysi yildan boshlangan?",
    options: [
      "1991 yil",
      "2000-yillarning boshidan boshlab bosqichma-bosqich",
      "1950 yil",
      "2020 yil"
    ],
    correctAnswer: "2000-yillarning boshidan boshlab bosqichma-bosqich"
  },
  {
    question: "Tiflopedagogikada **ko'rgazmalilik tamoyili** qanday amalga oshiriladi?",
    options: [
      "Faqat rangli rasmlar",
      "Taktil (tuyish), ovozli va harakatli ko'rgazmali qurollar orqali",
      "Faqat yozuv orqali",
      "Faqat yorug'lik orqali"
    ],
    correctAnswer: "Taktil (tuyish), ovozli va harakatli ko'rgazmali qurollar orqali"
  },
  {
    question: "Surdopedagogikada **L.S. Vygotskiy**ning 'Rivojlanishning ijtimoiy nazariyasi' qanday ahamiyatga ega?",
    options: [
      "Eshitishning fiziologiyasini o'rgatadi",
      "Nutq va aqlning rivojlanishi faqat ijtimoiy muloqot orqali mumkinligini isbotlaydi",
      "Faqat jismoniy tarbiyani o'rgatadi",
      "Faqat genetik omillarni o'rganadi"
    ],
    correctAnswer: "Nutq va aqlning rivojlanishi faqat ijtimoiy muloqot orqali mumkinligini isbotlaydi"
  },
  {
    question: "Oligofrenopedagogikada **ta'limiy o'yinlar** nima uchun ishlatiladi?",
    options: [
      "Faqat dam olish uchun",
      "Diqqat, xotira, mayda motorikani rivojlantirish va o'quv materialini o'zlashtirish uchun",
      "Faqat yugurish uchun",
      "Faqat rasm chizish uchun"
    ],
    correctAnswer: "Diqqat, xotira, mayda motorikani rivojlantirish va o'quv materialini o'zlashtirish uchun"
  },
  {
    question: "Logopediya fanida **Nutq ritmi va sur'ati buzilishi** qaysi nuqsonga kiradi?",
    options: [
      "Dislaliya",
      "Duduqlanish",
      "Afaziya",
      "Alaliya"
    ],
    correctAnswer: "Duduqlanish"
  },
  {
    question: "Maxsus ta'lim tizimida **erta yordam** nima?",
    options: [
      "Faqat maktab yoshida yordam",
      "3 yoshgacha bo'lgan bolalarni tashxislash va korreksion yordam ko'rsatish",
      "Faqat 10 yoshdan keyin yordam",
      "Faqat ota-onalarga yordam"
    ],
    correctAnswer: "3 yoshgacha bo'lgan bolalarni tashxislash va korreksion yordam ko'rsatish"
  },
  {
    question: "Tiflopedagogikada **Maxsus jismoniy tarbiya**ning maqsadi?",
    options: [
      "Faqat sport musobaqalari",
      "Harakatlarni muvofiqlashtirishni, fazoviy orientatsiyani yaxshilash va jismoniy rivojlanishdagi ikkilamchi buzilishlarning oldini olish",
      "Faqat ovqatlanishni o'rgatish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Harakatlarni muvofiqlashtirishni, fazoviy orientatsiyani yaxshilash va jismoniy rivojlanishdagi ikkilamchi buzilishlarning oldini olish"
  },
  {
    question: "Surdopedagogikada **surdologiya** nima?",
    options: [
      "Ko'rishni o'rganadigan fan",
      "Eshitishning buzilishlarini, ularning sabablari, tashxisi va oldini olishni o'rganadigan tibbiy-biologik fan",
      "Aql darajasini o'rganadigan fan",
      "Nutqni o'rganadigan fan"
    ],
    correctAnswer: "Eshitishning buzilishlarini, ularning sabablari, tashxisi va oldini olishni o'rganadigan tibbiy-biologik fan"
  },
  {
    question: "Oligofrenopedagogikada bolalarning **diqqati**ning asosiy xususiyati?",
    options: [
      "Juda barqaror",
      "Beqaror, tez charchaydigan, e'tiborni qiyinlik bilan jamlaydigan",
      "Juda keng",
      "Juda tor"
    ],
    correctAnswer: "Beqaror, tez charchaydigan, e'tiborni qiyinlik bilan jamlaydigan"
  },
  {
    question: "Logopediya fanida **Alaliya** nima?",
    options: [
      "Talaffuz buzilishi",
      "Nutq markazlarining organik shikastlanishi natijasida nutqning yo'qligi yoki rivojlanmasligi",
      "Duduqlanish",
      "Yozma nutqning buzilishi"
    ],
    correctAnswer: "Nutq markazlarining organik shikastlanishi natijasida nutqning yo'qligi yoki rivojlanmasligi"
  },
  {
    question: "Inklyuziv ta'limning asosiy tamoyillaridan biri?",
    options: [
      "Faqat sog'lom bolalarni o'qitish",
      "Ta'limning moslashuvchanligi va har bir bolaning qadr-qimmati",
      "Faqat ajratilgan ta'lim",
      "Faqat tibbiy parvarish"
    ],
    correctAnswer: "Ta'limning moslashuvchanligi va har bir bolaning qadr-qimmati"
  },
  {
    question: "Tiflopedagogikada **tuyish orqali idrok**ning (taktil sezgi) ahamiyati?",
    options: [
      "Hech qanday ahamiyati yo'q",
      "Ko'zi ojiz bolalar uchun ob'ektlar shakli va xususiyatlarini bilishning asosiy usuli",
      "Faqat eshitishni rivojlantirish",
      "Faqat yurishni o'rgatish"
    ],
    correctAnswer: "Ko'zi ojiz bolalar uchun ob'ektlar shakli va xususiyatlarini bilishning asosiy usuli"
  },
  {
    question: "Surdopedagogikada **maxsus ta'lim dasturi** nima uchun kerak?",
    options: [
      "Faqat sog'lom bolalar uchun",
      "Eshitish nuqsoniga moslashtirilgan o'quv materiallari va o'qitish metodikasini ta'minlash",
      "Faqat yugurishni o'rgatish",
      "Faqat rasm chizishni o'rgatish"
    ],
    correctAnswer: "Eshitish nuqsoniga moslashtirilgan o'quv materiallari va o'qitish metodikasini ta'minlash"
  },
  {
    question: "Oligofrenopedagogikada **ijtimoiy moslashuv**ning maqsadi?",
    options: [
      "Faqat uyda o'tirish",
      "Mustaqil hayot kechirish, jamiyatga integratsiyalashish va o'ziga xizmat ko'rsatishni o'rganish",
      "Faqat sport bilan shug'ullanish",
      "Faqat chet tili o'rganish"
    ],
    correctAnswer: "Mustaqil hayot kechirish, jamiyatga integratsiyalashish va o'ziga xizmat ko'rsatishni o'rganish"
  },
  {
    question: "Logopediya fanida **Grafiya buzilishi (disgrafiya)** nima?",
    options: [
      "Talaffuz buzilishi",
      "Yozma nutqning buzilishi (xat yozishdagi xatolar)",
      "Duduqlanish",
      "Nutqning yo'qligi"
    ],
    correctAnswer: "Yozma nutqning buzilishi (xat yozishdagi xatolar)"
  },
  {
    question: "Inklyuziv ta’lim deganda nimani tushunasiz?",
    options: [
      "Bolalarni bir-biridan ajratib o'qitish",
      "Imkoniyati cheklangan bolalarning umumiy ta'lim muassasalarida sog'lom tengdoshlari bilan birga o'qitish",
      "Faqat maxsus maktabda o'qitish",
      "Faqat uyda o'qitish"
    ],
    correctAnswer: "Imkoniyati cheklangan bolalarning umumiy ta'lim muassasalarida sog'lom tengdoshlari bilan birga o'qitish"
  },
  {
    question: "Inklyuziv ta’limning asosiy maqsadi nima?",
    options: [
      "Faqat o'qituvchini baholash",
      "Barcha bolalarning ta'lim olish huquqini ta'minlash va ularni jamiyatga to'la integratsiyalash",
      "Faqat tibbiy parvarish",
      "Faqat ota-onalarni tinchlantirish"
    ],
    correctAnswer: "Barcha bolalarning ta'lim olish huquqini ta'minlash va ularni jamiyatga to'la integratsiyalash"
  },
  {
    question: "Inklyuziv ta’limning asosiy tamoyili qaysi?",
    options: [
      "Faoliyatning cheklanishi",
      "Barchaning tengligi va qadr-qimmati, individual ehtiyojlarga moslashuvchanlik",
      "Faqat ajratilganlik",
      "Faqat nazorat"
    ],
    correctAnswer: "Barchaning tengligi va qadr-qimmati, individual ehtiyojlarga moslashuvchanlik"
  },
  {
    question: "Inklyuziv muhitni yaratishda maktab infratuzilmasiga qo'yiladigan asosiy talablar?",
    options: [
      "Faqat binoning kattaligi",
      "Pandyuslar, liftlar, maxsus hojatxonalar va kirish yo'laklari (Accessible environment)",
      "Faqat yorug'lik",
      "Faqat sport zali"
    ],
    correctAnswer: "Pandyuslar, liftlar, maxsus hojatxonalar va kirish yo'laklari (Accessible environment)"
  },
  {
    question: "Inklyuziv ta’limda **Maxsus pedagog**ning roli?",
    options: [
      "Faqat binoni tozalash",
      "Oddiy o'qituvchiga uslubiy yordam berish, ITR (Individual ta'lim rejasi)ni ishlab chiqish va korreksion mashg'ulotlar o'tkazish",
      "Faqat tibbiy xizmat",
      "Faqat ovqatlantirish"
    ],
    correctAnswer: "Oddiy o'qituvchiga uslubiy yordam berish, ITR (Individual ta'lim rejasi)ni ishlab chiqish va korreksion mashg'ulotlar o'tkazish"
  },
  {
    question: "Inklyuziv ta’limda **ITR (Individual ta'lim rejasi)** nima uchun kerak?",
    options: [
      "Faqat sog'lom bolalar uchun",
      "Nuqsonli bolaning shaxsiy ehtiyojlariga mos o'quv dasturi va maqsadlarni belgilash",
      "Faqat sinfni baholash",
      "Faqat sport darsini rejalashtirish"
    ],
    correctAnswer: "Nuqsonli bolaning shaxsiy ehtiyojlariga mos o'quv dasturi va maqsadlarni belgilash"
  },
  {
    question: "Inklyuziv ta’limning afzalligi (nuqsonli bola uchun)?",
    options: [
      "Faqat maxsus maktabda o'qish",
      "Ijtimoiy moslashuv, muloqot ko'nikmalarini rivojlantirish va tengdoshlaridan o'rnak olish",
      "Faqat uyda yashash",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Ijtimoiy moslashuv, muloqot ko'nikmalarini rivojlantirish va tengdoshlaridan o'rnak olish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining vazifasi**?",
    options: [
      "Faqat darslikni o'qish",
      "Dars jarayonini har bir bolaning ehtiyojiga qarab moslashtirish va qo'llab-quvvatlash",
      "Faqat jazolash",
      "Faqat baholash"
    ],
    correctAnswer: "Dars jarayonini har bir bolaning ehtiyojiga qarab moslashtirish va qo'llab-quvvatlash"
  },
  {
    question: "Inklyuziv ta’limdagi **hamkorlik** qaysi subyektlar orasida bo'ladi?",
    options: [
      "Faqat maktab va hokimiyat",
      "Bola, ota-onalar, sinf o'qituvchisi, maxsus pedagog, psixolog va tibbiyot xodimi",
      "Faqat sportchilar",
      "Faqat olimlar"
    ],
    correctAnswer: "Bola, ota-onalar, sinf o'qituvchisi, maxsus pedagog, psixolog va tibbiyot xodimi"
  },
  {
    question: "Inklyuziv ta’limda **«Universal dizayn»** nima?",
    options: [
      "Faqat kiyim dizayni",
      "Ta'lim muhitini barcha (jumladan nuqsonli) bolalar uchun maksimal darajada qulay qilish",
      "Faqat kitob dizayni",
      "Faqat sport dizayni"
    ],
    correctAnswer: "Ta'lim muhitini barcha (jumladan nuqsonli) bolalar uchun maksimal darajada qulay qilish"
  },
  {
    question: "Integratsiyalashgan ta’lim va Inklyuziv ta’lim o'rtasidagi asosiy farq?",
    options: [
      "Faqat yoshdagi farq",
      "Integratsiya bolani tizimga moslashtirishni talab qilsa, inklyuziya tizimni bolaga moslashtirishni talab qiladi",
      "Faqat davolash usulidagi farq",
      "Faqat o'qituvchining yoshi"
    ],
    correctAnswer: "Integratsiya bolani tizimga moslashtirishni talab qilsa, inklyuziya tizimni bolaga moslashtirishni talab qiladi"
  },
  {
    question: "Inklyuziv ta’limda **psixologik yordam**ning asosiy maqsadi?",
    options: [
      "Faqat jismoniy tarbiya",
      "Bolaning ruhiy holatini, o'zini o'zi anglashini va stressga chidamliligini oshirish",
      "Faqat matematika o'qitish",
      "Faqat uyda qoldirish"
    ],
    correctAnswer: "Bolaning ruhiy holatini, o'zini o'zi anglashini va stressga chidamliligini oshirish"
  },
  {
    question: "Inklyuziv sinfda **adaptatsiya (moslashuv)** nima?",
    options: [
      "Faqat jazolash",
      "O'quv jarayonini bolaning individual imkoniyatiga moslashtirish (masalan, topshiriqni soddalashtirish)",
      "Faqat o'qituvchini o'zgartirish",
      "Faqat baholash"
    ],
    correctAnswer: "O'quv jarayonini bolaning individual imkoniyatiga moslashtirish (masalan, topshiriqni soddalashtirish)"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining tayyorgarligi** qanday bo'lishi kerak?",
    options: [
      "Faqat bitta fanni bilish",
      "Maxsus pedagogik bilimlar, inklyuziv metodikalar va individual yondashuvni qo'llay olish",
      "Faqat jismoniy jihatdan kuchli bo'lish",
      "Faqat nazariy bilimlar"
    ],
    correctAnswer: "Maxsus pedagogik bilimlar, inklyuziv metodikalar va individual yondashuvni qo'llay olish"
  },
  {
    question: "Inklyuziv ta’limda **Tibbiy-pedagogik-psixologik komissiya (TPPK)** ning roli?",
    options: [
      "Faqat tibbiy davolash",
      "Bolaning rivojlanish nuqsonini tashxislash va inklyuziv ta'lim uchun tavsiya berish",
      "Faqat dars jadvalini tuzish",
      "Faqat maktabni boshqarish"
    ],
    correctAnswer: "Bolaning rivojlanish nuqsonini tashxislash va inklyuziv ta'lim uchun tavsiya berish"
  },
  {
    question: "Inklyuziv sinfda bolalarni **baholash** qanday amalga oshiriladi?",
    options: [
      "Faqat standart testlar orqali",
      "Individual ta'lim rejasiga asoslangan holda, uning o'zlashtirish darajasi va rivojlanish dinamikasi bo'yicha",
      "Faqat jazolash orqali",
      "Faqat og'zaki so'rov orqali"
    ],
    correctAnswer: "Individual ta'lim rejasiga asoslangan holda, uning o'zlashtirish darajasi va rivojlanish dinamikasi bo'yicha"
  },
  {
    question: "Inklyuziv ta’limning O'zbekistondagi huquqiy asosi (asosiy hujjatlardan biri)?",
    options: [
      "Faqat Konstitutsiya",
      "Ta'lim to'g'risidagi qonun va BMTning Nogironlar huquqlari to'g'risidagi Konventsiyasi",
      "Faqat Jismoniy tarbiya qonuni",
      "Faqat Yer kodeksi"
    ],
    correctAnswer: "Ta'lim to'g'risidagi qonun va BMTning Nogironlar huquqlari to'g'risidagi Konventsiyasi"
  },
  {
    question: "Inklyuziv ta’limda **tayanch harakatida nuqsoni bor bolalar** uchun qanday yordam kerak?",
    options: [
      "Faqat Brayl yozuvi",
      "Maxsus kreslolar, tutqichlar, pandyuslar va yordamchi shaxs (assistiv texnologiyalar)",
      "Faqat eshitish apparatlari",
      "Faqat ovozli kitoblar"
    ],
    correctAnswer: "Maxsus kreslolar, tutqichlar, pandyuslar va yordamchi shaxs (assistiv texnologiyalar)"
  },
  {
    question: "Inklyuziv ta’limdagi **ijtimoiy-emosional rivojlanish** nima uchun muhim?",
    options: [
      "Faqat dars o'qish uchun",
      "Bolaning his-tuyg'ularini boshqarish, do'stlashish va nizolarni hal qilishni o'rganish uchun",
      "Faqat yozish uchun",
      "Faqat o'qish uchun"
    ],
    correctAnswer: "Bolaning his-tuyg'ularini boshqarish, do'stlashish va nizolarni hal qilishni o'rganish uchun"
  },
  {
    question: "Inklyuziv ta’limda **Ota-onalarning ishtiroki** qanday bo'lishi kerak?",
    options: [
      "Faqat baholashda",
      "ITRni ishlab chiqishda, uy vazifalarini bajarishda va maktabdagi tadbirlarda faol ishtirok etish",
      "Faqat masofadan turib ishtirok etish",
      "Faqat pul yig'ish"
    ],
    correctAnswer: "ITRni ishlab chiqishda, uy vazifalarini bajarishda va maktabdagi tadbirlarda faol ishtirok etish"
  },
  {
    question: "Inklyuziv ta’limda **Tiflopedagog** qanday vazifani bajaradi?",
    options: [
      "Eshitishni o'rgatish",
      "Ko'rishida nuqsoni bor bolalarga Brayl, orientatsiya va maxsus optika yordamida ta'lim berish",
      "Nutqni tuzatish",
      "Aql darajasini oshirish"
    ],
    correctAnswer: "Ko'rishida nuqsoni bor bolalarga Brayl, orientatsiya va maxsus optika yordamida ta'lim berish"
  },
  {
    question: "Inklyuziv ta’limda **Surdopedagog** qanday vazifani bajaradi?",
    options: [
      "Ko'rishni o'rgatish",
      "Eshitishida nuqsoni bor bolalarga nutqni vizual, og'zaki va eshitish apparatlari yordamida rivojlantirish",
      "Aql darajasini oshirish",
      "Jismoniy tarbiya"
    ],
    correctAnswer: "Eshitishida nuqsoni bor bolalarga nutqni vizual, og'zaki va eshitish apparatlari yordamida rivojlantirish"
  },
  {
    question: "Inklyuziv ta’limda **Oligofrenopedagog** qanday vazifani bajaradi?",
    options: [
      "Ko'rishni o'rgatish",
      "Aqliy rivojlanishda nuqsoni bor bolalarga hayotiy va mehnat ko'nikmalarini korreksion usullar bilan o'rgatish",
      "Nutqni tuzatish",
      "Eshitishni o'rgatish"
    ],
    correctAnswer: "Aqliy rivojlanishda nuqsoni bor bolalarga hayotiy va mehnat ko'nikmalarini korreksion usullar bilan o'rgatish"
  },
  {
    question: "Inklyuziv ta’limda **Logoped** qanday vazifani bajaradi?",
    options: [
      "Faqat o'qituvchini o'qitish",
      "Nutq nuqsonlarini tashxislash, korreksiyalash va nutq apparati rivojlanishiga yordam berish",
      "Faqat tibbiy davolash",
      "Faqat jismoniy mashqlar"
    ],
    correctAnswer: "Nutq nuqsonlarini tashxislash, korreksiyalash va nutq apparati rivojlanishiga yordam berish"
  },
  {
    question: "Inklyuziv ta’limda **Sinf rahbari**ning asosiy vazifasi?",
    options: [
      "Faqat dars o'tish",
      "Inklyuziv sinfda ijtimoiy-emosional muhitni shakllantirish va tengdoshlar o'rtasida o'zaro tushunishni ta'minlash",
      "Faqat ota-onalarni tekshirish",
      "Faqat pul yig'ish"
    ],
    correctAnswer: "Inklyuziv sinfda ijtimoiy-emosional muhitni shakllantirish va tengdoshlar o'rtasida o'zaro tushunishni ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda **resurs markazi** nima uchun kerak?",
    options: [
      "Faqat sport uchun",
      "Maxsus o'quv qurollari, texnik vositalar va korreksion mutaxassislar yordamidan foydalanish",
      "Faqat ovqatlanish uchun",
      "Faqat dam olish uchun"
    ],
    correctAnswer: "Maxsus o'quv qurollari, texnik vositalar va korreksion mutaxassislar yordamidan foydalanish"
  },
  {
    question: "Inklyuziv ta’limda **o'qitish metodlari** qanday bo'lishi kerak?",
    options: [
      "Faqat og'zaki tushuntirish",
      "Vizual, taktil, audial, harakatli (multisensor) metodlarni aralashtirib qo'llash",
      "Faqat yozma topshiriq",
      "Faqat bir xil usul"
    ],
    correctAnswer: "Vizual, taktil, audial, harakatli (multisensor) metodlarni aralashtirib qo'llash"
  },
  {
    question: "Inklyuziv ta’limda **individualizatsiya** nimani anglatadi?",
    options: [
      "Faqat bir kishiga dars berish",
      "Har bir bolaning o'zlashtirish tezligi, uslubi va ehtiyojiga mos ta'lim berish",
      "Faqat uy vazifasi berish",
      "Faqat guruhda ishlash"
    ],
    correctAnswer: "Har bir bolaning o'zlashtirish tezligi, uslubi va ehtiyojiga mos ta'lim berish"
  },
  {
    question: "Inklyuziv ta’limda **qo'llab-quvvatlovchi jamoa** kimlardan iborat?",
    options: [
      "Faqat o'quvchilar",
      "Boshqaruv, o'qituvchilar, maxsus pedagoglar, psixolog, tibbiyot xodimlari, ota-onalar",
      "Faqat ota-onalar",
      "Faqat direktor"
    ],
    correctAnswer: "Boshqaruv, o'qituvchilar, maxsus pedagoglar, psixolog, tibbiyot xodimlari, ota-onalar"
  },
  {
    question: "Inklyuziv ta’limda **muvaffaqiyat garovi** nima?",
    options: [
      "Faqat pul",
      "Tizimning moslashuvchanligi, xodimlar tayyorgarligi va hamkorlik",
      "Faqat darslik",
      "Faqat texnika"
    ],
    correctAnswer: "Tizimning moslashuvchanligi, xodimlar tayyorgarligi va hamkorlik"
  },
  {
    question: "Inklyuziv ta’limning eng muhim sharti?",
    options: [
      "Faqat yuqori baho",
      "Ta'lim olish huquqiga hurmat va barcha bolalarni qabul qilish",
      "Faqat sport yutug'i",
      "Faqat yaxshi uy vazifasi"
    ],
    correctAnswer: "Ta'lim olish huquqiga hurmat va barcha bolalarni qabul qilish"
  },
  {
    question: "Inklyuziv ta’limda **Diskalkuliya** nima?",
    options: [
      "O'qish buzilishi",
      "Matematik ko'nikmalarni egallashdagi qiyinchilik",
      "Yozish buzilishi",
      "Nutq buzilishi"
    ],
    correctAnswer: "Matematik ko'nikmalarni egallashdagi qiyinchilik"
  },
  {
    question: "Inklyuziv ta’limda **Disleksiya** nima?",
    options: [
      "Matematik ko'nikmalar buzilishi",
      "O'qish jarayonini o'zlashtirishdagi qiyinchilik",
      "Yozish buzilishi",
      "Nutq buzilishi"
    ],
    correctAnswer: "O'qish jarayonini o'zlashtirishdagi qiyinchilik"
  },
  {
    question: "Inklyuziv ta’limda **Disgrafiya** nima?",
    options: [
      "Nutq buzilishi",
      "Yozma nutq (xat yozish) ko'nikmasini egallashdagi qiyinchilik",
      "O'qish buzilishi",
      "Matematik ko'nikmalar buzilishi"
    ],
    correctAnswer: "Yozma nutq (xat yozish) ko'nikmasini egallashdagi qiyinchilik"
  },
  {
    question: "Inklyuziv ta’limda **Autizm spektridagi buzilishlar** bilan ishlashda qanday yondashuv muhim?",
    options: [
      "Faqat og'zaki tushuntirish",
      "Strukturaviy ta'lim, vizual yordam va ijtimoiy ko'nikmalarni o'rgatish",
      "Faqat jazolash",
      "Faqat mustaqil ish"
    ],
    correctAnswer: "Strukturaviy ta'lim, vizual yordam va ijtimoiy ko'nikmalarni o'rgatish"
  },
  {
    question: "Inklyuziv ta’limda **Axloqiy qoidalar buzilishi (AQB)** bo'lgan bolalar bilan ishlashda nima muhim?",
    options: [
      "Faqat izolyatsiya",
      "Aniqlangan chegara, xatti-harakatni tuzatish va ijobiy mustahkamlash (Positive reinforcement)",
      "Faqat jazolash",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "Aniqlangan chegara, xatti-harakatni tuzatish va ijobiy mustahkamlash (Positive reinforcement)"
  },
  {
    question: "Inklyuziv ta’limda **diqqatni jamlash buzilishi (DDB/ADHD)** bo'lgan bolalar uchun qanday yordam kerak?",
    options: [
      "Faqat uyda qoldirish",
      "Qisqa topshiriqlar, dars jarayonida harakat imkoniyatini berish va diqqatni jalb qiluvchi usullar",
      "Faqat uzun ma'ruzalar",
      "Faqat yozma ishlar"
    ],
    correctAnswer: "Qisqa topshiriqlar, dars jarayonida harakat imkoniyatini berish va diqqatni jalb qiluvchi usullar"
  },
  {
    question: "Inklyuziv ta’limda **o'quv materialini moslashtirish** nima?",
    options: [
      "Faqat uni tashlab yuborish",
      "Materialni osonlashtirish, qisqartirish, vizualizatsiya qilish yoki qo'shimcha yordamchi vositalarni qo'shish",
      "Faqat murakkablashtirish",
      "Faqat og'zaki berish"
    ],
    correctAnswer: "Materialni osonlashtirish, qisqartirish, vizualizatsiya qilish yoki qo'shimcha yordamchi vositalarni qo'shish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining yordamchisi (assistent)** ning roli?",
    options: [
      "Faqat dars o'tish",
      "Maxsus ehtiyojli bolaga shaxsiy yordam ko'rsatish va uning ta'lim jarayonida ishtirok etishini ta'minlash",
      "Faqat sinfni boshqarish",
      "Faqat baholash"
    ],
    correctAnswer: "Maxsus ehtiyojli bolaga shaxsiy yordam ko'rsatish va uning ta'lim jarayonida ishtirok etishini ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda **sinf muhiti** qanday bo'lishi kerak?",
    options: [
      "Faqat qattiq tartibli",
      "Qulay, xavfsiz, qabul qiluvchi, moslashuvchan va barcha uchun qulay (universal dizayn)",
      "Faqat o'qituvchi uchun qulay",
      "Faqat jazolovchi"
    ],
    correctAnswer: "Qulay, xavfsiz, qabul qiluvchi, moslashuvchan va barcha uchun qulay (universal dizayn)"
  },
  {
    question: "Inklyuziv ta’limda **ta'lim texnologiyalari**ning ahamiyati?",
    options: [
      "Faqat yozish uchun",
      "Bolaning qobiliyatini oshirish, o'qitish jarayonini moslashtirish va mustaqilligini ta'minlash",
      "Faqat jazolash uchun",
      "Faqat kitob o'qish uchun"
    ],
    correctAnswer: "Bolaning qobiliyatini oshirish, o'qitish jarayonini moslashtirish va mustaqilligini ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda **ixtisoslashtirilgan o'quv qurollari** qaysilar?",
    options: [
      "Oddiy daftar va qalam",
      "Brayl kitoblari, kattalashtiruvchi optik vositalar, eshitish apparatlari, imo-ishora tiliga oid materiallar",
      "Faqat rangli qalamlar",
      "Faqat televizor"
    ],
    correctAnswer: "Brayl kitoblari, kattalashtiruvchi optik vositalar, eshitish apparatlari, imo-ishora tiliga oid materiallar"
  },
  {
    question: "Inklyuziv ta’limdagi **Individual rivojlanish zonasi (IRZ)** nima?",
    options: [
      "Faqat uyda ta'lim",
      "Bolaning mustaqil qila oladigan va ozgina yordam bilan qila oladigan vazifalari oralig'i (Vygotskiy nazariyasi)",
      "Faqat o'qituvchining bilimi",
      "Faqat baholash"
    ],
    correctAnswer: "Bolaning mustaqil qila oladigan va ozgina yordam bilan qila oladigan vazifalari oralig'i (Vygotskiy nazariyasi)"
  },
  {
    question: "Inklyuziv ta’limda **o'quv faoliyatini boshqarish** nima?",
    options: [
      "Faqat jazolash",
      "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish",
      "Faqat darslikni o'qish",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish"
  },
  {
    question: "Inklyuziv ta’limning muammolaridan biri?",
    options: [
      "Faqat ota-onalarning faolligi",
      "O'qituvchilarning maxsus tayyorgarligi yetishmasligi va resurslar (mutaxassislar, texnika)ning cheklanganligi",
      "Faqat maktabning katta binosi",
      "Faqat yuqori baholar"
    ],
    correctAnswer: "O'qituvchilarning maxsus tayyorgarligi yetishmasligi va resurslar (mutaxassislar, texnika)ning cheklanganligi"
  },
  {
    question: "Inklyuziv ta’limda **Tolerantlik** nima?",
    options: [
      "Faqat ajratish",
      "Har bir insonning o'ziga xosligini qabul qilish va ularning huquqlarini hurmat qilish",
      "Faqat o'qituvchini hurmat qilish",
      "Faqat o'quvchidan talab qilish"
    ],
    correctAnswer: "Har bir insonning o'ziga xosligini qabul qilish va ularning huquqlarini hurmat qilish"
  },
  {
    question: "Inklyuziv ta’limda **Integratsiya turlari** qaysilar?",
    options: [
      "Faqat rasmiy",
      "Qisman, to'liq, doimiy, vaqtinchalik",
      "Faqat uyda",
      "Faqat maxsus"
    ],
    correctAnswer: "Qisman, to'liq, doimiy, vaqtinchalik"
  },
  {
    question: "Inklyuziv ta’limda **sotsializatsiya** nima?",
    options: [
      "Faqat yozishni o'rganish",
      "Bolaning jamiyat qoidalari, qadriyatlari va xulq-atvor normalarini o'zlashtirishi",
      "Faqat o'qishni o'rganish",
      "Faqat chizishni o'rganish"
    ],
    correctAnswer: "Bolaning jamiyat qoidalari, qadriyatlari va xulq-atvor normalarini o'zlashtirishi"
  },
  {
    question: "Inklyuziv ta’limda **maxsus maktab**ning roli?",
    options: [
      "Faqat ajratish",
      "Inklyuziv maktablarga uslubiy yordam berish, tashxislash va murakkab holatlar uchun ta'limni ta'minlash",
      "Faqat jazolash",
      "Faqat nazorat"
    ],
    correctAnswer: "Inklyuziv maktablarga uslubiy yordam berish, tashxislash va murakkab holatlar uchun ta'limni ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchilar uchun kasbiy rivojlanish** qanday bo'lishi kerak?",
    options: [
      "Faqat nazariy kurslar",
      "Inklyuziv pedagogika, diffrensial o'qitish va individual yordam usullari bo'yicha amaliy treninglar",
      "Faqat sport mashg'ulotlari",
      "Faqat kitob o'qish"
    ],
    correctAnswer: "Inklyuziv pedagogika, diffrensial o'qitish va individual yordam usullari bo'yicha amaliy treninglar"
  },
  {
    question: "Inklyuziv ta’limda **O'zbekistonda yuridik asos** qaysi hujjatlarda mustahkamlangan?",
    options: [
      "Faqat Vazirlar Mahkamasi qarorlari",
      "O'zbekiston Respublikasi Konstitutsiyasi, Ta'lim to'g'risidagi qonun va Prezident qarorlari",
      "Faqat Mahalliy hokimiyat qarorlari",
      "Faqat ota-onalar talabi"
    ],
    correctAnswer: "O'zbekiston Respublikasi Konstitutsiyasi, Ta'lim to'g'risidagi qonun va Prezident qarorlari"
  },
  {
    question: "Inklyuziv ta’limda **maxsus ehtiyojli bolaning darsda o'zlashtirishini kuzatish** nima uchun muhim?",
    options: [
      "Faqat baho berish uchun",
      "ITRni doimiy ravishda moslashtirish, muammolarni aniqlash va korreksiya ishini o'zgartirish uchun",
      "Faqat o'qituvchiga bosim o'tkazish uchun",
      "Faqat jazolash uchun"
    ],
    correctAnswer: "ITRni doimiy ravishda moslashtirish, muammolarni aniqlash va korreksiya ishini o'zgartirish uchun"
  },
  {
    question: "Inklyuziv ta’limda **o'quv jarayonini moslashtirish** necha darajada bo'ladi?",
    options: [
      "Faqat bitta daraja",
      "Minimal (muhit), o'rtacha (metodika), maksimal (dastur va ITR)",
      "Faqat ikki daraja",
      "Faqat besh daraja"
    ],
    correctAnswer: "Minimal (muhit), o'rtacha (metodika), maksimal (dastur va ITR)"
  },
  {
    question: "Inklyuziv ta’limning **afzalligi (sog'lom bola uchun)** nima?",
    options: [
      "Faqat tezroq o'qish",
      "Tolerantlik, hamdardlik, farqlarni qabul qilish va o'zaro yordam tuyg'ularini rivojlantirish",
      "Faqat yaxshi baho",
      "Faqat uy vazifasining yo'qligi"
    ],
    correctAnswer: "Tolerantlik, hamdardlik, farqlarni qabul qilish va o'zaro yordam tuyg'ularini rivojlantirish"
  },
  {
    question: "Inklyuziv ta’limda **maxsus yordamga muhtoj bola** uchun asosiy huquq nima?",
    options: [
      "Faqat uyda qolish",
      "Ta'lim olish, shaxsiy rivojlanish, jamiyatda ishtirok etish va kamsitilmaslik",
      "Faqat tibbiy davolanish",
      "Faqat o'qituvchini tanlash"
    ],
    correctAnswer: "Ta'lim olish, shaxsiy rivojlanish, jamiyatda ishtirok etish va kamsitilmaslik"
  },
  {
    question: "Inklyuziv ta’limda **Vizual yordam vositalari** qaysilar?",
    options: [
      "Faqat ovozli kitoblar",
      "Jadval, rasmlar, sxemalar, harakatlar ketma-ketligini ko'rsatuvchi kartalar",
      "Faqat Brayl yozuvi",
      "Faqat eshitish apparatlari"
    ],
    correctAnswer: "Jadval, rasmlar, sxemalar, harakatlar ketma-ketligini ko'rsatuvchi kartalar"
  },
  {
    question: "Inklyuziv ta’limda **Diffrensial yondashuv** nimani anglatadi?",
    options: [
      "Barcha bolalarni bir xil o'qitish",
      "Har bir o'quvchiga uning ehtiyojlari, qiziqishlari va qobiliyatlariga mos ravishda turli usul va topshiriqlarni berish",
      "Faqat jazolash",
      "Faqat baholash"
    ],
    correctAnswer: "Har bir o'quvchiga uning ehtiyojlari, qiziqishlari va qobiliyatlariga mos ravishda turli usul va topshiriqlarni berish"
  },
  {
    question: "Inklyuziv ta’limda **o'quvchilar o'rtasida hamkorlik**ni rivojlantirishning asosiy usuli?",
    options: [
      "Faqat raqobat",
      "Guruhli ish, juftlikdagi topshiriqlar va o'zaro yordam",
      "Faqat jazolash",
      "Faqat mustaqil ish"
    ],
    correctAnswer: "Guruhli ish, juftlikdagi topshiriqlar va o'zaro yordam"
  },
  {
    question: "Inklyuziv ta’limda **Maxsus ta'lim ehtiyojlari (MTE)** nima?",
    options: [
      "Faqat tibbiy davolash",
      "Bolaning ta'lim olishi uchun maxsus sharoit, metodika va yordam zarurati",
      "Faqat uyda qolish",
      "Faqat jismoniy tarbiya"
    ],
    correctAnswer: "Bolaning ta'lim olishi uchun maxsus sharoit, metodika va yordam zarurati"
  },
  {
    question: "Inklyuziv ta’limda **sog'lom bolalarga tushuntirish** nima uchun muhim?",
    options: [
      "Faqat o'qituvchiga yordam berish",
      "Tolerantlikni oshirish, maxsus ehtiyojli bolani qabul qilish va kamsitishni oldini olish",
      "Faqat dars o'tish",
      "Faqat uy vazifasini berish"
    ],
    correctAnswer: "Tolerantlikni oshirish, maxsus ehtiyojli bolani qabul qilish va kamsitishni oldini olish"
  },
  {
    question: "Inklyuziv ta’limda **O'quv muhitini moslashtirish** nima?",
    options: [
      "Faqat stol stulni almashtirish",
      "Fizik muhit (joylashuv, shovqin), dars jadvali va o'qitish usullarini bolaga moslashtirish",
      "Faqat rangni o'zgartirish",
      "Faqat o'qituvchini almashtirish"
    ],
    correctAnswer: "Fizik muhit (joylashuv, shovqin), dars jadvali va o'qitish usullarini bolaga moslashtirish"
  },
  {
    question: "Inklyuziv ta’limda **kamsitish (diskriminatsiya)** nima?",
    options: [
      "Faqat yaxshi munosabat",
      "Bolani uning nuqsoni tufayli ta'lim olish huquqidan mahrum qilish yoki yomon munosabatda bo'lish",
      "Faqat yordam berish",
      "Faqat baholash"
    ],
    correctAnswer: "Bolani uning nuqsoni tufayli ta'lim olish huquqidan mahrum qilish yoki yomon munosabatda bo'lish"
  },
  {
    question: "Inklyuziv ta’limda **pedagogik tashxis**ning asosiy maqsadi?",
    options: [
      "Faqat kasallikni aniqlash",
      "Bolaning bilish jarayonlari, ko'nikmalari va o'zlashtirish darajasini aniqlash",
      "Faqat ota-onani baholash",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Bolaning bilish jarayonlari, ko'nikmalari va o'zlashtirish darajasini aniqlash"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining samarali muloqoti** nima uchun muhim?",
    options: [
      "Faqat ovozni balandlatish",
      "Bola va ota-onalar bilan ishonchli munosabat o'rnatish, ta'lim maqsadlarini aniq tushuntirish",
      "Faqat jazolash",
      "Faqat kitob o'qish"
    ],
    correctAnswer: "Bola va ota-onalar bilan ishonchli munosabat o'rnatish, ta'lim maqsadlarini aniq tushuntirish"
  },
  {
    question: "Inklyuziv ta’limda **nutq buzilishi bor bolalar** uchun qanday yordam muhim?",
    options: [
      "Faqat Brayl yozuvi",
      "Logopedik mashg'ulotlar, vizual yordamlar, nutqni mustahkamlovchi mashqlar",
      "Faqat eshitish apparatlari",
      "Faqat jismoniy mashqlar"
    ],
    correctAnswer: "Logopedik mashg'ulotlar, vizual yordamlar, nutqni mustahkamlovchi mashqlar"
  },
  {
    question: "Inklyuziv ta’limda **o'quv materialini o'zlashtirishdagi to'siqlar** qaysilar?",
    options: [
      "Faqat yorug'lik",
      "Darslikning murakkabligi, o'qitish usulining yagonaligi, o'quv muhitining moslashmaganligi",
      "Faqat ovqatlanish",
      "Faqat baland musiqa"
    ],
    correctAnswer: "Darslikning murakkabligi, o'qitish usulining yagonaligi, o'quv muhitining moslashmaganligi"
  },
  {
    question: "Inklyuziv ta’limda **o'quvchilarning faol ishtiroki**ni ta'minlash nima uchun kerak?",
    options: [
      "Faqat baho berish uchun",
      "Bolaning o'ziga ishonchini oshirish, o'rganishga motivatsiyasini kuchaytirish va ijtimoiy bog'lanishni ta'minlash",
      "Faqat jazolash uchun",
      "Faqat uy vazifasini berish uchun"
    ],
    correctAnswer: "Bolaning o'ziga ishonchini oshirish, o'rganishga motivatsiyasini kuchaytirish va ijtimoiy bog'lanishni ta'minlash"
  },
  {
    question: "Inklyuziv ta’limda **Tarbiyaviy ishlar** nima uchun muhim?",
    options: [
      "Faqat ilm o'rgatish",
      "Ijtimoiy-axloqiy ko'nikmalarni rivojlantirish, o'zini nazorat qilish va mas'uliyatni oshirish",
      "Faqat sport o'rgatish",
      "Faqat chizishni o'rgatish"
    ],
    correctAnswer: "Ijtimoiy-axloqiy ko'nikmalarni rivojlantirish, o'zini nazorat qilish va mas'uliyatni oshirish"
  },
  {
    question: "Inklyuziv ta’limda **maktab kutubxonasi** qanday moslashtirilishi kerak?",
    options: [
      "Faqat ko'p kitob bo'lishi",
      "Brayl kitoblari, ovozli kitoblar, kattalashtirilgan yozuvli kitoblar va qulay kirish (pandyus, keng yo'laklar)",
      "Faqat o'qituvchi kitoblari",
      "Faqat rangli devorlar"
    ],
    correctAnswer: "Brayl kitoblari, ovozli kitoblar, kattalashtirilgan yozuvli kitoblar va qulay kirish (pandyus, keng yo'laklar)"
  },
  {
    question: "Inklyuziv ta’limda **ta'lim natijalari**ni baholashning asosiy maqsadi?",
    options: [
      "Faqat jazolash",
      "Bolaning rivojlanishidagi o'sishni, ITRning samaradorligini va keyingi qadamlarni aniqlash",
      "Faqat o'qituvchini baholash",
      "Faqat maktabni baholash"
    ],
    correctAnswer: "Bolaning rivojlanishidagi o'sishni, ITRning samaradorligini va keyingi qadamlarni aniqlash"
  },
  {
    question: "Inklyuziv ta’limda **psixologik-pedagogik kuzatuv** nima?",
    options: [
      "Faqat baho qo'yish",
      "Bolaning ta'lim jarayonida o'zini tutishi, o'zlashtirishi va ijtimoiy munosabatlarini doimiy o'rganish",
      "Faqat ovqatlantirishni kuzatish",
      "Faqat uy vazifasini tekshirish"
    ],
    correctAnswer: "Bolaning ta'lim jarayonida o'zini tutishi, o'zlashtirishi va ijtimoiy munosabatlarini doimiy o'rganish"
  },
  {
    question: "Inklyuziv ta’limda **Maxsus pedagogik diagnostika**ning asosiy usuli?",
    options: [
      "Faqat tibbiy analizlar",
      "Kuzatuv, testlash (individual), faoliyat mahsullarini o'rganish va suhbat",
      "Faqat uxlashni kuzatish",
      "Faqat sport musobaqasi"
    ],
    correctAnswer: "Kuzatuv, testlash (individual), faoliyat mahsullarini o'rganish va suhbat"
  },
  {
    question: "Inklyuziv ta’limda **pedagogik korreksiya** nima?",
    options: [
      "Faqat jazolash",
      "Nuqsonli rivojlanishning ikkilamchi kamchiliklarini tuzatishga, bilim, ko'nikma va malakalarni shakllantirishga yo'naltirilgan ish",
      "Faqat tibbiy davolash",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "Nuqsonli rivojlanishning ikkilamchi kamchiliklarini tuzatishga, bilim, ko'nikma va malakalarni shakllantirishga yo'naltirilgan ish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining yordamchisi (assistent)** kim?",
    options: [
      "Faqat o'qituvchining o'zi",
      "Asosiy o'qituvchiga maxsus ehtiyojli bolalar bilan ishlashda yordam beruvchi shaxs",
      "Faqat maktab direktori",
      "Faqat ota-ona"
    ],
    correctAnswer: "Asosiy o'qituvchiga maxsus ehtiyojli bolalar bilan ishlashda yordam beruvchi shaxs"
  },
  {
    question: "Inklyuziv ta’limning **Salmanka Deklaratsiyasi**dagi asosiy g'oyasi?",
    options: [
      "Faqat maxsus maktablar",
      "Barcha bolalar maktabga borishi va ta'lim olishi kerak",
      "Faqat uyda ta'lim",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Barcha bolalar maktabga borishi va ta'lim olishi kerak"
  },
  {
    question: "Inklyuziv ta’limda **maxsus pedagogik tadbirlar**ga qaysilar kiradi?",
    options: [
      "Faqat oddiy darslar",
      "Logopedik, psixologik-korreksion, harakatni rivojlantirish mashg'ulotlari",
      "Faqat sport musobaqalari",
      "Faqat konsertlar"
    ],
    correctAnswer: "Logopedik, psixologik-korreksion, harakatni rivojlantirish mashg'ulotlari"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchilarning diffrensial baholashga tayyorgarligi** nima uchun muhim?",
    options: [
      "Faqat o'qituvchini jazolash",
      "Har bir bolani uning ITR maqsadlariga va imkoniyatiga qarab adolatli baholash",
      "Faqat standart baholash",
      "Faqat baho qo'ymaslik"
    ],
    correctAnswer: "Har bir bolani uning ITR maqsadlariga va imkoniyatiga qarab adolatli baholash"
  },
  {
    question: "Inklyuziv ta’limda **yordamchi texnologiyalar**ning asosiy maqsadi?",
    options: [
      "Faqat o'qituvchini ishdan bo'shatish",
      "Maxsus ehtiyojli bolaning o'zlashtirishini, mustaqilligini va ta'lim jarayonida ishtirokini oshirish",
      "Faqat uy vazifasini berish",
      "Faqat maktabni bezash"
    ],
    correctAnswer: "Maxsus ehtiyojli bolaning o'zlashtirishini, mustaqilligini va ta'lim jarayonida ishtirokini oshirish"
  },
  {
    question: "Inklyuziv ta’limda **ixtisoslashgan yordam** kim tomonidan beriladi?",
    options: [
      "Faqat ota-onalar",
      "Maxsus pedagoglar, logopedlar, psixologlar, surdopedagoglar, tiflopedagoglar",
      "Faqat oddiy o'qituvchilar",
      "Faqat sinf rahbari"
    ],
    correctAnswer: "Maxsus pedagoglar, logopedlar, psixologlar, surdopedagoglar, tiflopedagoglar"
  },
  {
    question: "Inklyuziv ta’limda **ko'zi ojiz bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat eshitish apparatlari",
      "Brayl yozuvi, taktil xaritalar, ovozli kompyuter dasturlari va xavfsiz harakatlanish muhiti",
      "Faqat baland ovoz",
      "Faqat katta yozuv"
    ],
    correctAnswer: "Brayl yozuvi, taktil xaritalar, ovozli kompyuter dasturlari va xavfsiz harakatlanish muhiti"
  },
  {
    question: "Inklyuziv ta’limda **kar bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat Brayl yozuvi",
      "Imo-ishora tarjimoni, nutqni vizuallashtiruvchi vositalar, yozma matnlar, eshitish apparatlari/implantlar",
      "Faqat ovozli kitoblar",
      "Faqat taktil yozuv"
    ],
    correctAnswer: "Imo-ishora tarjimoni, nutqni vizuallashtiruvchi vositalar, yozma matnlar, eshitish apparatlari/implantlar"
  },
  {
    question: "Inklyuziv ta’limda **Aqliy rivojlanishida nuqsoni bor bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat murakkab topshiriqlar",
      "Oddiy, aniq va hayotga yo'naltirilgan dasturlar, takrorlash, amaliy mashqlar va ITR",
      "Faqat tezkor o'qitish",
      "Faqat nazariy ma'ruzalar"
    ],
    correctAnswer: "Oddiy, aniq va hayotga yo'naltirilgan dasturlar, takrorlash, amaliy mashqlar va ITR"
  },
  {
    question: "Inklyuziv ta’limda **moslashuvchan ta'lim muhiti** nima?",
    options: [
      "Faqat chiroyli bo'lish",
      "Har bir bolaning ehtiyojiga mos ravishda o'zgartirilishi mumkin bo'lgan jismoniy va o'quv muhiti",
      "Faqat katta xonalar",
      "Faqat o'qituvchi xonasi"
    ],
    correctAnswer: "Har bir bolaning ehtiyojiga mos ravishda o'zgartirilishi mumkin bo'lgan jismoniy va o'quv muhiti"
  },
  {
    question: "Inklyuziv ta’limda **o'zaro hurmat**ni rivojlantirish nima uchun muhim?",
    options: [
      "Faqat yaxshi baho",
      "Kamsitish, zo'ravonlik va ajratishni oldini olish, do'stona va qabul qiluvchi sinf muhitini yaratish",
      "Faqat uy vazifasini kamaytirish",
      "Faqat sport musobaqasi"
    ],
    correctAnswer: "Kamsitish, zo'ravonlik va ajratishni oldini olish, do'stona va qabul qiluvchi sinf muhitini yaratish"
  },
  {
    question: "Inklyuziv ta’limning **afzalligi (maktab uchun)** nima?",
    options: [
      "Faqat pul tejash",
      "Barcha bolalar ehtiyojiga javob bera oladigan yuqori malakali va moslashuvchan o'qituvchilarni shakllantirish",
      "Faqat binoni ta'mirlash",
      "Faqat ta'limni tezlashtirish"
    ],
    correctAnswer: "Barcha bolalar ehtiyojiga javob bera oladigan yuqori malakali va moslashuvchan o'qituvchilarni shakllantirish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchi-maxsus pedagog hamkorligi**ning asosiy maqsadi?",
    options: [
      "Faqat yig'ilish o'tkazish",
      "Maxsus ehtiyojli bolaning ta'limini rejalashtirish, darslarni moslashtirish va ITRni samarali amalga oshirish",
      "Faqat tibbiy davolash",
      "Faqat uy vazifasini berish"
    ],
    correctAnswer: "Maxsus ehtiyojli bolaning ta'limini rejalashtirish, darslarni moslashtirish va ITRni samarali amalga oshirish"
  },
  {
    question: "Inklyuziv ta’limdagi **Psixologik xavfsizlik** nima?",
    options: [
      "Faqat jismoniy xavfsizlik",
      "Bolaning sinf muhitida o'zini qo'rqmasdan, kamsitilmasdan va hurmat qilinib his etishi",
      "Faqat uyda bo'lish",
      "Faqat baho qo'yish"
    ],
    correctAnswer: "Bolaning sinf muhitida o'zini qo'rqmasdan, kamsitilmasdan va hurmat qilinib his etishi"
  },
  {
    question: "Inklyuziv ta’limda **Ota-onalarni o'qitish (ma'rifat ishlari)** nima uchun kerak?",
    options: [
      "Faqat pul to'plash",
      "Ular o'z farzandlariga uyda korreksion yordam bera olishlari va maktab bilan hamkorlikni kuchaytirishlari uchun",
      "Faqat uy vazifasini berish",
      "Faqat nazorat"
    ],
    correctAnswer: "Ular o'z farzandlariga uyda korreksion yordam bera olishlari va maktab bilan hamkorlikni kuchaytirishlari uchun"
  },
  {
    question: "Inklyuziv ta’limda **kuzatuv usuli** qanday qo'llaniladi?",
    options: [
      "Faqat jazolashda",
      "Bolaning xulq-atvori, o'zlashtirishi va ijtimoiy munosabatlarini belgilangan mezonlar bo'yicha doimiy qayd etish",
      "Faqat baho qo'yishda",
      "Faqat og'zaki so'rovda"
    ],
    correctAnswer: "Bolaning xulq-atvori, o'zlashtirishi va ijtimoiy munosabatlarini belgilangan mezonlar bo'yicha doimiy qayd etish"
  },
  {
    question: "Inklyuziv ta’limda **ta'lim olishga tayyorgarlik** nima?",
    options: [
      "Faqat maktabga borish",
      "Bilish, nutq, ijtimoiy-emosional va harakat ko'nikmalarining ta'lim jarayonida ishtirok etishga yetarli darajasi",
      "Faqat jismoniy kuch",
      "Faqat yozish"
    ],
    correctAnswer: "Bilish, nutq, ijtimoiy-emosional va harakat ko'nikmalarining ta'lim jarayonida ishtirok etishga yetarli darajasi"
  },
  {
    question: "Inklyuziv ta’limda **o'qitish va tarbiyalashning birligi** tamoyili nima?",
    options: [
      "Faqat dars berish",
      "Ta'lim jarayonida ham bilim berish, ham shaxsning ijtimoiy-axloqiy rivojlanishiga e'tibor qaratish",
      "Faqat uy vazifasi",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonida ham bilim berish, ham shaxsning ijtimoiy-axloqiy rivojlanishiga e'tibor qaratish"
  },
  {
    question: "Inklyuziv ta’limda **Maxsus pedagogning faoliyati** qanday xarakterlanadi?",
    options: [
      "Faqat nazorat",
      "Tuzatish, kompensatsiya, rivojlantirish va maslahat berish",
      "Faqat tibbiy davolash",
      "Faqat jazolash"
    ],
    correctAnswer: "Tuzatish, kompensatsiya, rivojlantirish va maslahat berish"
  },
  {
    question: "Inklyuziv ta’limda **ta'limni yakunlash** qanday amalga oshiriladi?",
    options: [
      "Faqat standart imtihon",
      "Umumiy ta'lim diplomi yoki ITRga asoslangan maxsus sertifikat berish",
      "Faqat tibbiy ko'rik",
      "Faqat kasalxonada"
    ],
    correctAnswer: "Umumiy ta'lim diplomi yoki ITRga asoslangan maxsus sertifikat berish"
  },
  {
    question: "Inklyuziv ta’limda **ko'zi ojiz bolalar**ning o'qish tezligini oshirish uchun nima kerak?",
    options: [
      "Faqat yugurish",
      "Brayl yozuvini tez o'qishni, taktil idrokni va eshitish xotirasini rivojlantirish",
      "Faqat chizish",
      "Faqat ovozni eshitish"
    ],
    correctAnswer: "Brayl yozuvini tez o'qishni, taktil idrokni va eshitish xotirasini rivojlantirish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchining yordamchisi (assistent)** kim?",
    options: [
      "Faqat o'qituvchining o'zi",
      "Asosiy o'qituvchiga maxsus ehtiyojli bolalar bilan ishlashda yordam beruvchi shaxs",
      "Faqat maktab direktori",
      "Faqat ota-ona"
    ],
    correctAnswer: "Asosiy o'qituvchiga maxsus ehtiyojli bolalar bilan ishlashda yordam beruvchi shaxs"
  },
  {
    question: "Inklyuziv ta’limning **Salmanka Deklaratsiyasi**dagi asosiy g'oyasi?",
    options: [
      "Faqat maxsus maktablar",
      "Barcha bolalar maktabga borishi va ta'lim olishi kerak",
      "Faqat uyda ta'lim",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Barcha bolalar maktabga borishi va ta'lim olishi kerak"
  },
  {
    question: "Inklyuziv ta’limda **maxsus pedagogik tadbirlar**ga qaysilar kiradi?",
    options: [
      "Faqat oddiy darslar",
      "Logopedik, psixologik-korreksion, harakatni rivojlantirish mashg'ulotlari",
      "Faqat sport musobaqalari",
      "Faqat konsertlar"
    ],
    correctAnswer: "Logopedik, psixologik-korreksion, harakatni rivojlantirish mashg'ulotlari"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchilarning diffrensial baholashga tayyorgarligi** nima uchun muhim?",
    options: [
      "Faqat o'qituvchini jazolash",
      "Har bir bolani uning ITR maqsadlariga va imkoniyatiga qarab adolatli baholash",
      "Faqat standart baholash",
      "Faqat baho qo'ymaslik"
    ],
    correctAnswer: "Har bir bolani uning ITR maqsadlariga va imkoniyatiga qarab adolatli baholash"
  },
  {
    question: "Inklyuziv ta’limda **yordamchi texnologiyalar**ning asosiy maqsadi?",
    options: [
      "Faqat o'qituvchini ishdan bo'shatish",
      "Maxsus ehtiyojli bolaning o'zlashtirishini, mustaqilligini va ta'lim jarayonida ishtirokini oshirish",
      "Faqat uy vazifasini berish",
      "Faqat maktabni bezash"
    ],
    correctAnswer: "Maxsus ehtiyojli bolaning o'zlashtirishini, mustaqilligini va ta'lim jarayonida ishtirokini oshirish"
  },
  {
    question: "Inklyuziv ta’limda **ixtisoslashgan yordam** kim tomonidan beriladi?",
    options: [
      "Faqat ota-onalar",
      "Maxsus pedagoglar, logopedlar, psixologlar, surdopedagoglar, tiflopedagoglar",
      "Faqat oddiy o'qituvchilar",
      "Faqat sinf rahbari"
    ],
    correctAnswer: "Maxsus pedagoglar, logopedlar, psixologlar, surdopedagoglar, tiflopedagoglar"
  },
  {
    question: "Inklyuziv ta’limda **ko'zi ojiz bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat eshitish apparatlari",
      "Brayl yozuvi, taktil xaritalar, ovozli kompyuter dasturlari va xavfsiz harakatlanish muhiti",
      "Faqat baland ovoz",
      "Faqat katta yozuv"
    ],
    correctAnswer: "Brayl yozuvi, taktil xaritalar, ovozli kompyuter dasturlari va xavfsiz harakatlanish muhiti"
  },
  {
    question: "Inklyuziv ta’limda **kar bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat Brayl yozuvi",
      "Imo-ishora tarjimoni, nutqni vizuallashtiruvchi vositalar, yozma matnlar, eshitish apparatlari/implantlar",
      "Faqat ovozli kitoblar",
      "Faqat taktil yozuv"
    ],
    correctAnswer: "Imo-ishora tarjimoni, nutqni vizuallashtiruvchi vositalar, yozma matnlar, eshitish apparatlari/implantlar"
  },
  {
    question: "Inklyuziv ta’limda **Aqliy rivojlanishida nuqsoni bor bolalar** uchun qanday moslashuv kerak?",
    options: [
      "Faqat murakkab topshiriqlar",
      "Oddiy, aniq va hayotga yo'naltirilgan dasturlar, takrorlash, amaliy mashqlar va ITR",
      "Faqat tezkor o'qitish",
      "Faqat nazariy ma'ruzalar"
    ],
    correctAnswer: "Oddiy, aniq va hayotga yo'naltirilgan dasturlar, takrorlash, amaliy mashqlar va ITR"
  },
  {
    question: "Inklyuziv ta’limda **moslashuvchan ta'lim muhiti** nima?",
    options: [
      "Faqat chiroyli bo'lish",
      "Har bir bolaning ehtiyojiga mos ravishda o'zgartirilishi mumkin bo'lgan jismoniy va o'quv muhiti",
      "Faqat katta xonalar",
      "Faqat o'qituvchi xonasi"
    ],
    correctAnswer: "Har bir bolaning ehtiyojiga mos ravishda o'zgartirilishi mumkin bo'lgan jismoniy va o'quv muhiti"
  },
  {
    question: "Inklyuziv ta’limda **o'zaro hurmat**ni rivojlantirish nima uchun muhim?",
    options: [
      "Faqat yaxshi baho",
      "Kamsitish, zo'ravonlik va ajratishni oldini olish, do'stona va qabul qiluvchi sinf muhitini yaratish",
      "Faqat uy vazifasini kamaytirish",
      "Faqat sport musobaqasi"
    ],
    correctAnswer: "Kamsitish, zo'ravonlik va ajratishni oldini olish, do'stona va qabul qiluvchi sinf muhitini yaratish"
  },
  {
    question: "Inklyuziv ta’limning **afzalligi (maktab uchun)** nima?",
    options: [
      "Faqat pul tejash",
      "Barcha bolalar ehtiyojiga javob bera oladigan yuqori malakali va moslashuvchan o'qituvchilarni shakllantirish",
      "Faqat binoni ta'mirlash",
      "Faqat ta'limni tezlashtirish"
    ],
    correctAnswer: "Barcha bolalar ehtiyojiga javob bera oladigan yuqori malakali va moslashuvchan o'qituvchilarni shakllantirish"
  },
  {
    question: "Inklyuziv ta’limda **o'qituvchi-maxsus pedagog hamkorligi**ning asosiy maqsadi?",
    options: [
      "Faqat yig'ilish o'tkazish",
      "Maxsus ehtiyojli bolaning ta'limini rejalashtirish, darslarni moslashtirish va ITRni samarali amalga oshirish",
      "Faqat tibbiy davolash",
      "Faqat uy vazifasini berish"
    ],
    correctAnswer: "Maxsus ehtiyojli bolaning ta'limini rejalashtirish, darslarni moslashtirish va ITRni samarali amalga oshirish"
  },
  {
    question: "Inklyuziv ta’limdagi **Psixologik xavfsizlik** nima?",
    options: [
      "Faqat jismoniy xavfsizlik",
      "Bolaning sinf muhitida o'zini qo'rqmasdan, kamsitilmasdan va hurmat qilinib his etishi",
      "Faqat uyda bo'lish",
      "Faqat baho qo'yish"
    ],
    correctAnswer: "Bolaning sinf muhitida o'zini qo'rqmasdan, kamsitilmasdan va hurmat qilinib his etishi"
  },
  {
    question: "Inklyuziv ta’limda **Ota-onalarni o'qitish (ma'rifat ishlari)** nima uchun kerak?",
    options: [
      "Faqat pul to'plash",
      "Ular o'z farzandlariga uyda korreksion yordam bera olishlari va maktab bilan hamkorlikni kuchaytirishlari uchun",
      "Faqat uy vazifasini berish",
      "Faqat nazorat"
    ],
    correctAnswer: "Ular o'z farzandlariga uyda korreksion yordam bera olishlari va maktab bilan hamkorlikni kuchaytirishlari uchun"
  },
  {
    question: "Inklyuziv ta’limda **kuzatuv usuli** qanday qo'llaniladi?",
    options: [
      "Faqat jazolashda",
      "Bolaning xulq-atvori, o'zlashtirishi va ijtimoiy munosabatlarini belgilangan mezonlar bo'yicha doimiy qayd etish",
      "Faqat baho qo'yishda",
      "Faqat og'zaki so'rovda"
    ],
    correctAnswer: "Bolaning xulq-atvori, o'zlashtirishi va ijtimoiy munosabatlarini belgilangan mezonlar bo'yicha doimiy qayd etish"
  },
  {
    question: "Inklyuziv ta’limda **ta'lim olishga tayyorgarlik** nima?",
    options: [
      "Faqat maktabga borish",
      "Bilish, nutq, ijtimoiy-emosional va harakat ko'nikmalarining ta'lim jarayonida ishtirok etishga yetarli darajasi",
      "Faqat jismoniy kuch",
      "Faqat yozish"
    ],
    correctAnswer: "Bilish, nutq, ijtimoiy-emosional va harakat ko'nikmalarining ta'lim jarayonida ishtirok etishga yetarli darajasi"
  },
  {
    question: "Inklyuziv ta’limda **o'qitish va tarbiyalashning birligi** tamoyili nima?",
    options: [
      "Faqat dars berish",
      "Ta'lim jarayonida ham bilim berish, ham shaxsning ijtimoiy-axloqiy rivojlanishiga e'tibor qaratish",
      "Faqat uy vazifasi",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonida ham bilim berish, ham shaxsning ijtimoiy-axloqiy rivojlanishiga e'tibor qaratish"
  },
  {
    question: "Inklyuziv ta’limda **Maxsus pedagogning faoliyati** qanday xarakterlanadi?",
    options: [
      "Faqat nazorat",
      "Tuzatish, kompensatsiya, rivojlantirish va maslahat berish",
      "Faqat tibbiy davolash",
      "Faqat jazolash"
    ],
    correctAnswer: "Tuzatish, kompensatsiya, rivojlantirish va maslahat berish"
  },
  {
    question: "Inklyuziv ta’limda **ta'limni yakunlash** qanday amalga oshiriladi?",
    options: [
      "Faqat standart imtihon",
      "Umumiy ta'lim diplomi yoki ITRga asoslangan maxsus sertifikat berish",
      "Faqat tibbiy ko'rik",
      "Faqat kasalxonada"
    ],
    correctAnswer: "Umumiy ta'lim diplomi yoki ITRga asoslangan maxsus sertifikat berish"
  },
  {
    question: "Inklyuziv ta’limda **ko'zi ojiz bolalar**ning o'qish tezligini oshirish uchun nima kerak?",
    options: [
      "Faqat yugurish",
      "Brayl yozuvini tez o'qishni, taktil idrokni va eshitish xotirasini rivojlantirish",
      "Faqat chizish",
      "Faqat ovozni eshitish"
    ],
    correctAnswer: "Brayl yozuvini tez o'qishni, taktil idrokni va eshitish xotirasini rivojlantirish"
  },
  {
    question: "Ko'zi ojiz bolalar uchun qaysi yozuv tizimi asosiy hisoblanadi?",
    options: [
      "Lotin yozuvi",
      "Brayl yozuvi",
      "Imo-ishora yozuvi",
      "Kattalashtirilgan yozuv"
    ],
    correctAnswer: "Brayl yozuvi"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarga nutqni o'rgatish bilan shug'ullanadigan maxsus pedagogika tarmog'i?",
    options: [
      "Logopediya",
      "Surdopedagogika",
      "Tiflopedagogika",
      "Oligofrenopedagogika"
    ],
    correctAnswer: "Surdopedagogika"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bor bolalar uchun ta'lim-tarbiya berish yo'nalishi?",
    options: [
      "Tiflopedagogika",
      "Surdopedagogika",
      "Oligofrenopedagogika",
      "Logopediya"
    ],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Nutq nuqsonlarini tuzatish, oldini olish va o'rganish bilan shug'ullanadigan fan?",
    options: [
      "Tiflologiya",
      "Surdologiya",
      "Logopediya",
      "Pediatriya"
    ],
    correctAnswer: "Logopediya"
  },
  {
    question: "Ko'rishida nuqsoni bor bolalarni o'rganish, o'qitish va tarbiyalash bilan shug'ullanadigan fan?",
    options: [
      "Tiflopedagogika",
      "Oligofrenopedagogika",
      "Surdopedagogika",
      "Logopediya"
    ],
    correctAnswer: "Tiflopedagogika"
  },
  {
    question: "Inklyuziv ta'limda Individual ta'lim rejasini (ITR) kim ishlab chiqadi?",
    options: [
      "Faqat maktab direktori",
      "Ota-ona",
      "O'qituvchilar, maxsus pedagog, psixolog va ota-onadan iborat jamoa",
      "Faqat bola"
    ],
    correctAnswer: "O'qituvchilar, maxsus pedagog, psixolog va ota-onadan iborat jamoa"
  },
  {
    question: "Tayanch-harakat a'zolari buzilishida eng ko'p uchraydigan nuqson?",
    options: [
      "Ko'rlik",
      "Karnik",
      "Bolalar serebral falaji (BSF / DCR)",
      "Disleksiya"
    ],
    correctAnswer: "Bolalar serebral falaji (BSF / DCR)"
  },
  {
    question: "Aqliy zaiflikning eng yengil darajasi?",
    options: [
      "Idiotik",
      "Imbetsillik",
      "Debillik",
      "Eshaklik"
    ],
    correctAnswer: "Debillik"
  },
  {
    question: "Nutqning to'liq yo'qligi yoki uni tushunishning buzilishi (nutqiy faoliyatning to'liq buzilishi)?",
    options: [
      "Dizartriya",
      "Rinolaliya",
      "Alaliya",
      "Dudqlanish"
    ],
    correctAnswer: "Alaliya"
  },
  {
    question: "Nutq apparatining innervatsiyasi buzilishi natijasida nutq artikulyatsiyasining buzilishi?",
    options: [
      "Affaziya",
      "Dizartriya",
      "Logonevroz",
      "Disleksiya"
    ],
    correctAnswer: "Dizartriya"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarni eshitmaydiganlar va qisman eshitadiganlarga ajratgan olim?",
    options: [
      "L.S. Vygotskiy",
      "R. M. Boskis",
      "J. Itard",
      "P. P. Blonskiy"
    ],
    correctAnswer: "R. M. Boskis"
  },
  {
    question: "O'zbekistonda maxsus pedagogika va inklyuziv ta'limni rivojlantirishga qaratilgan asosiy normativ hujjat?",
    options: [
      "Adabiyot darsligi",
      "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi qonuni va Vazirlar Mahkamasi qarorlari",
      "Sport nizomi",
      "Qurilish kodeksi"
    ],
    correctAnswer: "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi qonuni va Vazirlar Mahkamasi qarorlari"
  },
  {
    question: "Ko'rish qobiliyati past, ammo maxsus optik vositalar bilan o'qiy oladigan bolalar guruhi?",
    options: [
      "To'liq ko'rlar",
      "Zaiyf ko'ruvchilar",
      "Amblioplar",
      "Karlar"
    ],
    correctAnswer: "Zaiyf ko'ruvchilar"
  },
  {
    question: "Oligofrenopedagogikada o'quv jarayonining asosiy vazifasi nima?",
    options: [
      "Faqat oliy matematika o'rgatish",
      "Hayotga va mehnatga tayyorlash, ijtimoiy moslashuvni shakllantirish",
      "Faqat Brayl yozuvini o'rgatish",
      "Faqat musiqa o'rgatish"
    ],
    correctAnswer: "Hayotga va mehnatga tayyorlash, ijtimoiy moslashuvni shakllantirish"
  },
  {
    question: "Nutqning maromi va sur'ati buzilishi (tutqanoq, talaffuzdagi takrorlanishlar) bilan xarakterlanadigan nuqson?",
    options: [
      "Rinolaliya",
      "Disleksiya",
      "Dudqlanish (logonevroz)",
      "Alaliya"
    ],
    correctAnswer: "Dudqlanish (logonevroz)"
  },
  {
    question: "Inklyuziv ta'limda psixologning vazifasi?",
    options: [
      "Faqat dars o'tish",
      "Bolaning ruhiy-emosional holatini, bilish jarayonlarini diagnostika qilish va korreksion ishlar o'tkazish",
      "Faqat tibbiy davolash",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Bolaning ruhiy-emosional holatini, bilish jarayonlarini diagnostika qilish va korreksion ishlar o'tkazish"
  },
  {
    question: "Maxsus pedagogika fanining nazariy asosi hisoblangan tamoyil?",
    options: [
      "Alohida ajratish tamoyili",
      "Rivojlanish va tarbiyalashning birligi tamoyili",
      "Faqat bir xil yondashuv tamoyili",
      "Nazorat tamoyili"
    ],
    correctAnswer: "Rivojlanish va tarbiyalashning birligi tamoyili"
  },
  {
    question: "Inklyuziv sinfda eng ko'p moslashtirishni talab qiladigan narsa?",
    options: [
      "Maktab devori rangi",
      "O'quv dasturi va o'qitish metodlari",
      "O'qituvchining kiyimi",
      "Partalar soni"
    ],
    correctAnswer: "O'quv dasturi va o'qitish metodlari"
  },
  {
    question: "Inklyuziv ta'limda Bolaning ijtimoiy moslashuvi (sotsializatsiya) uchun nima muhim?",
    options: [
      "Faqat uyda qolish",
      "Tengdoshlar bilan muntazam muloqot va ijtimoiy ko'nikmalarni o'rgatish",
      "Faqat kitob o'qish",
      "Faqat baho olish"
    ],
    correctAnswer: "Tengdoshlar bilan muntazam muloqot va ijtimoiy ko'nikmalarni o'rgatish"
  },
  {
    question: "Maxsus ehtiyojli bolalar ta'lim-tarbiyasi va rivojlanishi qonuniyatlarini o'rganadigan fan?",
    options: [
      "Umumiy pedagogika",
      "Maxsus pedagogika (Defektologiya)",
      "Tibbiyot",
      "San'atshunoslik"
    ],
    correctAnswer: "Maxsus pedagogika (Defektologiya)"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalarni ta'lim muassasalariga joylashtirishda kim qaror qabul qiladi?",
    options: [
      "Faqat Ota-ona",
      "Mahalla qo'mitasi",
      "Tibbiy-pedagogik-psixologik komissiya (TPPK)",
      "Maktab farroshi"
    ],
    correctAnswer: "Tibbiy-pedagogik-psixologik komissiya (TPPK)"
  },
  {
    question: "Inklyuziv ta'lim muhitida xalqaro tajribaga ko'ra, **yordamchi shaxs (assistent)** kimga biriktiriladi?",
    options: [
      "Faqat o'qituvchiga",
      "Jiddiy nuqsoni bor va o'ziga xizmat ko'rsata olmaydigan o'quvchiga",
      "Faqat sog'lom bolaga",
      "Faqat psixologga"
    ],
    correctAnswer: "Jiddiy nuqsoni bor va o'ziga xizmat ko'rsata olmaydigan o'quvchiga"
  },
  {
    question: "Nutq tovushlarini talaffuz qilishdagi buzilish (nutqning fonetik tomonidagi nuqson)?",
    options: [
      "Logonevroz",
      "Dudqlanish",
      "Dislaliya",
      "Alaliya"
    ],
    correctAnswer: "Dislaliya"
  },
  {
    question: "Ko'zi ojiz bolalar uchun matematik, ilmiy, musiqa yozuvlarini yozishga imkon beruvchi belgi tizimi?",
    options: [
      "Brayl yozuvi",
      "Matematik yozuv (nem. nemeth code)",
      "Kattalashtirilgan shrift",
      "Taktil sxemalar"
    ],
    correctAnswer: "Brayl yozuvi"
  },
  {
    question: "Surdopedagogikada asosiy korreksion vosita?",
    options: [
      "Brayl yozuvi",
      "Eshitish apparatlari va imo-ishora tili",
      "Aqliy mashqlar",
      "Maxsus kreslo"
    ],
    correctAnswer: "Eshitish apparatlari va imo-ishora tili"
  },
  {
    question: "Inklyuziv ta'limda **ITR**ning majburiy tarkibiy qismlari?",
    options: [
      "Faqat jazolash usullari",
      "Bolaning hozirgi rivojlanish darajasi, yillik maqsadlar, xizmatlar va baholash usullari",
      "Faqat o'qituvchining rejalari",
      "Faqat ota-onalarning shikoyatlari"
    ],
    correctAnswer: "Bolaning hozirgi rivojlanish darajasi, yillik maqsadlar, xizmatlar va baholash usullari"
  },
  {
    question: "Maxsus pedagogikaning asosiy g'oyasi – kompensatsiya nima?",
    options: [
      "Pul to'lash",
      "Buzilgan funksiya o'rnini saqlanib qolgan funksiyalar yordamida qoplash (o'rnini to'ldirish)",
      "Jazolash",
      "Faqat tibbiy davolash"
    ],
    correctAnswer: "Buzilgan funksiya o'rnini saqlanib qolgan funksiyalar yordamida qoplash (o'rnini to'ldirish)"
  },
  {
    question: "Jismoniy va/yoki ruhiy rivojlanishda nuqsoni bo'lgan bolalarni bir-biridan ajratib o'qitish tizimi?",
    options: [
      "Inklyuziv ta'lim",
      "Segregatsion ta'lim (Maxsus ta'lim tizimi)",
      "Integratsiyalashgan ta'lim",
      "Masofaviy ta'lim"
    ],
    correctAnswer: "Segregatsion ta'lim (Maxsus ta'lim tizimi)"
  },
  {
    question: "Eng ko'p ishlatiladigan korreksion-pedagogik yordam vositasi?",
    options: [
      "Kitoblar",
      "Maxsus pedagogik diagnostika",
      "Televizor",
      "Sport anjomlari"
    ],
    correctAnswer: "Maxsus pedagogik diagnostika"
  },
  {
    question: "Bolalar serebral falaji (BSF) bo'lgan bolalar uchun eng muhim dars?",
    options: [
      "Qo'shiq darsi",
      "Jismoniy tarbiya (harakatni korreksiyalash) va mehnat darslari",
      "Matematika",
      "Astronomiya"
    ],
    correctAnswer: "Jismoniy tarbiya (harakatni korreksiyalash) va mehnat darslari"
  },
  {
    question: "Ko'rish a'zosining nuqsoni tufayli yuzaga keladigan ikkilamchi rivojlanish nuqsonlari?",
    options: [
      "Nutq buzilishi",
      "Harakatlanish va orientatsiyaning buzilishi",
      "Eshitish buzilishi",
      "Diskalkuliya"
    ],
    correctAnswer: "Harakatlanish va orientatsiyaning buzilishi"
  },
  {
    question: "Maxsus pedagogika tarixida nuqsonli bolalarni ilmiy o'rganishni boshlagan olim?",
    options: [
      "J. Piaget",
      "L. S. Vygotskiy",
      "A. A. Leontev",
      "J. Itard"
    ],
    correctAnswer: "J. Itard"
  },
  {
    question: "BMTning qaysi Konvensiyasi maxsus ehtiyojli shaxslarning huquqlarini himoya qiladi?",
    options: [
      "Bolalar huquqlari to'g'risida",
      "Nogironlar huquqlari to'g'risidagi Konvensiya",
      "Ayollar huquqlari to'g'risida",
      "Erkinlik to'g'risida"
    ],
    correctAnswer: "Nogironlar huquqlari to'g'risidagi Konvensiya"
  },
  {
    question: "Inklyuziv ta'limda sinf o'qituvchisi va maxsus pedagogning birgalikda dars o'tishi?",
    options: [
      "Individual yondashuv",
      "Team-teaching (Hamkorlikda o'qitish)",
      "Masofaviy ta'lim",
      "Uyda o'qitish"
    ],
    correctAnswer: "Team-teaching (Hamkorlikda o'qitish)"
  },
  {
    question: "Aqliy rivojlanishida nuqsoni bor bolalarning o'qishini baholashdagi asosiy mezon?",
    options: [
      "O'qish tezligi",
      "O'zlashtirish tezligi emas, balki erishilgan amaliy ko'nikmalar darajasi",
      "Faqat yozma ishlar",
      "Faqat og'zaki nutq"
    ],
    correctAnswer: "O'zlashtirish tezligi emas, balki erishilgan amaliy ko'nikmalar darajasi"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarga nutqni o'rgatishda asosiy usul nima?",
    options: [
      "Faqat kitob o'qish",
      "Audio-vizual usul (lablardan o'qish, barmoq alifbosi, eshitish apparatlari)",
      "Faqat yugurish",
      "Faqat yozish"
    ],
    correctAnswer: "Audio-vizual usul (lablardan o'qish, barmoq alifbosi, eshitish apparatlari)"
  },
  {
    question: "L. S. Vygotskiy tomonidan maxsus pedagogikada ilgari surilgan asosiy g'oya?",
    options: [
      "Faqat tibbiy davolash",
      "Nuqsonning ikkilamchi rivojlanishga ta'siri va ijtimoiy muhitning muhimligi",
      "Faqat genetik omillar",
      "Faqat izolyatsiya"
    ],
    correctAnswer: "Nuqsonning ikkilamchi rivojlanishga ta'siri va ijtimoiy muhitning muhimligi"
  },
  {
    question: "Inklyuziv ta'limning asosiy shiori nima?",
    options: [
      "Hamma bir xil bo'lsin",
      "Barcha bolalar maktabga borish huquqiga ega",
      "Faqat eng kuchlilar o'qisin",
      "Faqat olimlar ta'lim bersin"
    ],
    correctAnswer: "Barcha bolalar maktabga borish huquqiga ega"
  },
  {
    question: "Maxsus pedagogikada **korreksiya** nima?",
    options: [
      "Buzilgan a'zoni olib tashlash",
      "Rivojlanishdagi kamchiliklarni tuzatishga, bartaraf etishga qaratilgan pedagogik ta'sir",
      "Faqat jazolash",
      "Faqat dars o'tish"
    ],
    correctAnswer: "Rivojlanishdagi kamchiliklarni tuzatishga, bartaraf etishga qaratilgan pedagogik ta'sir"
  },
  {
    question: "Ko'zi ojiz bolalar uchun orientatsiya va harakatlanishni o'rgatishda nima muhim?",
    options: [
      "Faqat eshitish",
      "Oq hassa, taktil xaritalar va eshitishga asoslangan texnikalar",
      "Faqat ko'rish",
      "Faqat yozish"
    ],
    correctAnswer: "Oq hassa, taktil xaritalar va eshitishga asoslangan texnikalar"
  },
  {
    question: "**Maxsus ta'lim ehtiyojlari** qaysi bolalarda paydo bo'ladi?",
    options: [
      "Faqat sog'lom bolalarda",
      "Jismoniy va/yoki ruhiy rivojlanishda nuqsoni bor bolalarda",
      "Faqat sportchilarda",
      "Faqat o'qituvchilarda"
    ],
    correctAnswer: "Jismoniy va/yoki ruhiy rivojlanishda nuqsoni bor bolalarda"
  },
  {
    question: "Inklyuziv ta'limda ta'lim sifatini oshirish uchun nima kerak?",
    options: [
      "Faqat pul",
      "O'qituvchilarning malakasini oshirish va maxsus resurslar bilan ta'minlash",
      "Faqat katta sinf xonasi",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "O'qituvchilarning malakasini oshirish va maxsus resurslar bilan ta'minlash"
  },
  {
    question: "Nutqning to'g'ri fonetik (tovush) tomonini shakllantirish bilan shug'ullanadigan logopediya bo'limi?",
    options: [
      "Leksika",
      "Artikulyatsiya",
      "Fonetika-fonematika",
      "Grammatika"
    ],
    correctAnswer: "Fonetika-fonematika"
  },
  {
    question: "Oligofrenopedagogikada o'quv faoliyatining asosiy xususiyati nima?",
    options: [
      "Faqat tezkor o'qitish",
      "Amaliy yo'naltirilganlik, takrorlash va sekin o'zlashtirish",
      "Faqat nazariy ma'lumot",
      "Faqat murakkab topshiriqlar"
    ],
    correctAnswer: "Amaliy yo'naltirilganlik, takrorlash va sekin o'zlashtirish"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolaning ota-onasi qanday huquqlarga ega?",
    options: [
      "Faqat maktabni tanlash",
      "Farzandining ITRini ishlab chiqishda ishtirok etish, qo'shimcha yordam talab qilish",
      "Faqat dars o'tish",
      "Faqat jazolash"
    ],
    correctAnswer: "Farzandining ITRini ishlab chiqishda ishtirok etish, qo'shimcha yordam talab qilish"
  },
  {
    question: "Inklyuziv ta'limning O'zbekistondagi huquqiy asosi (asosiy hujjatlardan biri)?",
    options: [
      "Faqat Konstitutsiya",
      "Ta'lim to'g'risidagi qonun va BMTning Nogironlar huquqlari to'g'risidagi Konventsiyasi",
      "Faqat Jismoniy tarbiya qonuni",
      "Faqat Yer kodeksi"
    ],
    correctAnswer: "Ta'lim to'g'risidagi qonun va BMTning Nogironlar huquqlari to'g'risidagi Konventsiyasi"
  },
  {
    question: "Inklyuziv ta'limda bolalarni baholashning asosiy sharti?",
    options: [
      "Faqat standart baho",
      "Individual ta'lim rejasiga va shaxsiy rivojlanish dinamikasiga asoslangan baholash",
      "Faqat yozma ish",
      "Faqat og'zaki so'rov"
    ],
    correctAnswer: "Individual ta'lim rejasiga va shaxsiy rivojlanish dinamikasiga asoslangan baholash"
  },
  {
    question: "Maxsus pedagogikada **rivojlanishning birligi** nima?",
    options: [
      "Faqat jismoniy rivojlanish",
      "Bolaning jismoniy, aqliy, ijtimoiy va nutqiy rivojlanishining bir-biri bilan bog'liqligi",
      "Faqat yozish",
      "Faqat o'qish"
    ],
    correctAnswer: "Bolaning jismoniy, aqliy, ijtimoiy va nutqiy rivojlanishining bir-biri bilan bog'liqligi"
  },
  {
    question: "Tiflopedagogikada o'quvchilar uchun asosiy sensor baza?",
    options: [
      "Ko'rish",
      "Eshitish, hidlash va teri sezgisi (taktil sezgi)",
      "Nutq",
      "Harakat"
    ],
    correctAnswer: "Eshitish, hidlash va teri sezgisi (taktil sezgi)"
  },
  {
    question: "Logopediyada **umumiy nutqiy rivojlanishning orqada qolishi (UNRO)** nima?",
    options: [
      "Faqat yozish buzilishi",
      "Nutqning barcha tarkibiy qismlarining (fonetika, leksika, grammatika) yoshiga nisbatan orqada qolishi",
      "Faqat o'qish buzilishi",
      "Faqat jismoniy buzilish"
    ],
    correctAnswer: "Nutqning barcha tarkibiy qismlarining (fonetika, leksika, grammatika) yoshiga nisbatan orqada qolishi"
  },
  {
    question: "Inklyuziv ta'limda pedagogik yordamning asosiy shakli?",
    options: [
      "Faqat dars berish",
      "Individual va kichik guruhli korreksion mashg'ulotlar",
      "Faqat jazolash",
      "Faqat nazorat"
    ],
    correctAnswer: "Individual va kichik guruhli korreksion mashg'ulotlar"
  },
  {
    question: "Aqliy zaiflikning sabablari qaysilar?",
    options: [
      "Faqat to'g'ri ovqatlanish",
      "Homiladorlikdagi patologiyalar, tug'ruqdagi travmalar, irsiy omillar, miya infeksiyalari",
      "Faqat sport bilan shug'ullanish",
      "Faqat yozish"
    ],
    correctAnswer: "Homiladorlikdagi patologiyalar, tug'ruqdagi travmalar, irsiy omillar, miya infeksiyalari"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning ta'limida **imo-ishora tili**ning roli?",
    options: [
      "Faqat rasm chizish",
      "Asosiy muloqot vositasi, bilimlarni yetkazish va sotsializatsiya",
      "Faqat yozish",
      "Faqat o'qish"
    ],
    correctAnswer: "Asosiy muloqot vositasi, bilimlarni yetkazish va sotsializatsiya"
  },
  {
    question: "O'zbekiston Respublikasida maxsus ta'lim muassasalarining asosiy turi?",
    options: [
      "Faqat uyda ta'lim",
      "Ixtisoslashtirilgan maktab-internatlar va uyda ta'lim",
      "Faqat oddiy maktablar",
      "Faqat sport zallari"
    ],
    correctAnswer: "Ixtisoslashtirilgan maktab-internatlar va uyda ta'lim"
  },
  {
    question: "Inklyuziv ta'limda ta'lim muhitini Universal Dizayn (UDL) bo'yicha tashkil qilishning asosiy maqsadi?",
    options: [
      "Faqat qimmat jihozlar sotib olish",
      "Barcha talabalar, ularning imkoniyatlaridan qat'i nazar, ta'limdan foydalana olishi",
      "Faqat tezroq o'qitish",
      "Faqat darslikni o'zgartirish"
    ],
    correctAnswer: "Barcha talabalar, ularning imkoniyatlaridan qat'i nazar, ta'limdan foydalana olishi"
  },
  {
    question: "Maxsus pedagogika fanining tadqiqot metodlari qaysilar?",
    options: [
      "Faqat tibbiy ko'rik",
      "Kuzatuv, eksperiment, faoliyat mahsullarini o'rganish, anketa va suhbat",
      "Faqat sport musobaqasi",
      "Faqat yugurish"
    ],
    correctAnswer: "Kuzatuv, eksperiment, faoliyat mahsullarini o'rganish, anketa va suhbat"
  },
  {
    question: "Korreksion-rivojlantiruvchi ta'limning asosiy maqsadi nima?",
    options: [
      "Faqat jazolash",
      "Rivojlanish nuqsonini tuzatish, ikkilamchi kamchiliklarning oldini olish va kompensatsiya qilish",
      "Faqat o'qish tezligini oshirish",
      "Faqat darslikni yodlash"
    ],
    correctAnswer: "Rivojlanish nuqsonini tuzatish, ikkilamchi kamchiliklarning oldini olish va kompensatsiya qilish"
  },
  {
    question: "Inklyuziv ta'limda pedagogik diffrensiallash nima?",
    options: [
      "Faqat sinfni bo'lish",
      "O'quv materialini va o'qitish usullarini har bir bolaning ehtiyojiga qarab moslashtirish",
      "Faqat bir xil dars berish",
      "Faqat nazorat qilish"
    ],
    correctAnswer: "O'quv materialini va o'qitish usullarini har bir bolaning ehtiyojiga qarab moslashtirish"
  },
  {
    question: "Maxsus ta'limda **reabilitatsiya** nima?",
    options: [
      "Faqat tibbiy davolash",
      "Bolaning jismoniy va aqliy funksiyalarini tiklashga qaratilgan kompleks chora-tadbirlar",
      "Faqat uyda o'tirish",
      "Faqat o'yin o'ynash"
    ],
    correctAnswer: "Bolaning jismoniy va aqliy funksiyalarini tiklashga qaratilgan kompleks chora-tadbirlar"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalar uchun **kasbiy yo'nalish**ning ahamiyati?",
    options: [
      "Faqat oliy ma'lumot olish",
      "Kelajakda mustaqil yashash, mehnat faoliyatiga tayyorlash va jamiyatga integratsiya",
      "Faqat sportchilik",
      "Faqat musiqa"
    ],
    correctAnswer: "Kelajakda mustaqil yashash, mehnat faoliyatiga tayyorlash va jamiyatga integratsiya"
  },
  {
    question: "Logopedik mashg'ulotlarda nutqni to'g'rilashning asosiy bosqichlari?",
    options: [
      "Faqat dars berish",
      "Tovushni qo'yish, uni avtomatlashtirish va nutqga kiritish",
      "Faqat yugurish",
      "Faqat yozish"
    ],
    correctAnswer: "Tovushni qo'yish, uni avtomatlashtirish va nutqga kiritish"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bor bolalarning xotirasi qanday?",
    options: [
      "Juda kuchli",
      "Xotira hajmi va mustahkamligi past, ayniqsa mantiqiy xotira zaif",
      "Juda tezkor",
      "Faqat vizual xotira kuchli"
    ],
    correctAnswer: "Xotira hajmi va mustahkamligi past, ayniqsa mantiqiy xotira zaif"
  },
  {
    question: "Tiflopedagogikada darsliklarni moslashtirish qanday amalga oshiriladi?",
    options: [
      "Faqat rangini o'zgartirish",
      "Brayl yozuviga, kattalashtirilgan shriftga o'tkazish, taktil illyustratsiyalar qo'shish",
      "Faqat og'zaki tushuntirish",
      "Faqat rasmlarni olib tashlash"
    ],
    correctAnswer: "Brayl yozuviga, kattalashtirilgan shriftga o'tkazish, taktil illyustratsiyalar qo'shish"
  },
  {
    question: "Inklyuziv ta'limda **ta'lim olishga tayyorgarlik darajasini aniqlash** nima uchun kerak?",
    options: [
      "Faqat jazolash uchun",
      "Bolani ITRga kiritish, mos dasturni tanlash va ta'lim shaklini belgilash uchun",
      "Faqat uy vazifasi berish",
      "Faqat nazorat"
    ],
    correctAnswer: "Bolani ITRga kiritish, mos dasturni tanlash va ta'lim shaklini belgilash uchun"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday mashqlar muhim?",
    options: [
      "Faqat yugurish",
      "Eshitish qoldig'ini rivojlantirish, labdan o'qish, artikulyatsion mashqlar",
      "Faqat yozish",
      "Faqat chizish"
    ],
    correctAnswer: "Eshitish qoldig'ini rivojlantirish, labdan o'qish, artikulyatsion mashqlar"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalar uchun **ijobiy motivatsiya** nima uchun muhim?",
    options: [
      "Faqat pul berish",
      "O'ziga ishonchni oshirish, qiyinchiliklarni yengishga undash va ta'limga qiziqishni orttirish",
      "Faqat jazolash",
      "Faqat uyda qolish"
    ],
    correctAnswer: "O'ziga ishonchni oshirish, qiyinchiliklarni yengishga undash va ta'limga qiziqishni orttirish"
  },
  {
    question: "Inklyuziv ta'limda **ota-ona bilan hamkorlik**ning asosiy maqsadi?",
    options: [
      "Faqat uy vazifasini tekshirish",
      "Bolaning ta'limini uzluksiz ta'minlash, ITRni uy sharoitida qo'llab-quvvatlash va birgalikda muammolarni hal qilish",
      "Faqat nazorat",
      "Faqat yig'ilish o'tkazish"
    ],
    correctAnswer: "Bolaning ta'limini uzluksiz ta'minlash, ITRni uy sharoitida qo'llab-quvvatlash va birgalikda muammolarni hal qilish"
  },
  {
    question: "**Maxsus pedagogika** umumiy pedagogikadan qaysi jihatlari bilan farq qiladi?",
    options: [
      "Faqat dars berish usuli",
      "Korreksion yo'naltirilganlik, maxsus didaktik prinsiplar va alohida ehtiyojli bolaga moslashuv",
      "Faqat kitoblar",
      "Faqat sinf xonasi"
    ],
    correctAnswer: "Korreksion yo'naltirilganlik, maxsus didaktik prinsiplar va alohida ehtiyojli bolaga moslashuv"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalarga yordam beruvchi mutaxassis?",
    options: [
      "Faqat oddiy o'qituvchi",
      "Maxsus pedagog (defektolog), logoped, surdopedagog, tiflopedagog, psixolog",
      "Faqat tibbiyot xodimi",
      "Faqat haydovchi"
    ],
    correctAnswer: "Maxsus pedagog (defektolog), logoped, surdopedagog, tiflopedagog, psixolog"
  },
  {
    question: "Inklyuziv ta'limning asosiy tamoyillaridan biri: **individualizatsiya** nimani anglatadi?",
    options: [
      "Faqat bitta bola bilan ishlash",
      "Ta'lim jarayonini har bir o'quvchining shaxsiy ehtiyojlari va imkoniyatlariga moslashtirish",
      "Faqat uy vazifasi berish",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonini har bir o'quvchining shaxsiy ehtiyojlari va imkoniyatlariga moslashtirish"
  },
  {
    question: "Karnik (eshitishning to'liq yo'qligi) bilan tug'ilgan bolalarda nutq rivojlanishining buzilishi?",
    options: [
      "Dislaliya",
      "Alaliya",
      "Mutizm (nutqsizlik)",
      "Rinolaliya"
    ],
    correctAnswer: "Mutizm (nutqsizlik)"
  },
  {
    question: "Maxsus pedagogikada **rivojlanish diagnostikasi**ning maqsadi?",
    options: [
      "Faqat jazolash",
      "Bolaning kuchli va zaif tomonlarini, nuqsonining tuzilishini va ta'lim ehtiyojlarini aniqlash",
      "Faqat baholash",
      "Faqat dars o'tish"
    ],
    correctAnswer: "Bolaning kuchli va zaif tomonlarini, nuqsonining tuzilishini va ta'lim ehtiyojlarini aniqlash"
  },
  {
    question: "O'zbekistonda maxsus ta'lim muassasalariga bolalarni qabul qilish qaysi hujjat asosida amalga oshiriladi?",
    options: [
      "Faqat tug'ilganlik haqidagi guvohnoma",
      "Tibbiy-pedagogik-psixologik komissiya (TPPK) xulosasi",
      "Faqat maktab direktori buyrug'i",
      "Faqat ota-ona talabi"
    ],
    correctAnswer: "Tibbiy-pedagogik-psixologik komissiya (TPPK) xulosasi"
  },
  {
    question: "Inklyuziv ta'limda **tizimli moslashuv** nima?",
    options: [
      "Faqat binoni ta'mirlash",
      "Maktabning barcha darajalarini (infratuzilma, o'quv reja, o'qituvchilar tayyorlash) maxsus ehtiyojlarga moslashtirish",
      "Faqat o'qituvchini almashtirish",
      "Faqat darslikni almashtirish"
    ],
    correctAnswer: "Maktabning barcha darajalarini (infratuzilma, o'quv reja, o'qituvchilar tayyorlash) maxsus ehtiyojlarga moslashtirish"
  },
  {
    question: "Nutqning leksik-grammatik tomonidagi buzilish (so'z boyligi va gap tuzish qoidalarining buzilishi)?",
    options: [
      "Disleksiya",
      "Agrammatizm",
      "Dislaliya",
      "Dizartriya"
    ],
    correctAnswer: "Agrammatizm"
  },
  {
    question: "Tiflopedagogikada **taktil (teri) sezgisini** rivojlantirish nima uchun muhim?",
    options: [
      "Faqat chiroyli yozish",
      "Brayl yozuvini o'qish, atrof-muhitni o'rganish va amaliy ko'nikmalarni shakllantirish uchun",
      "Faqat sportchilik",
      "Faqat eshitishni yaxshilash"
    ],
    correctAnswer: "Brayl yozuvini o'qish, atrof-muhitni o'rganish va amaliy ko'nikmalarni shakllantirish uchun"
  },
  {
    question: "Maxsus ta'limda **erkin faoliyat** nima uchun muhim?",
    options: [
      "Faqat vaqt o'tkazish",
      "Bolaning qiziqishlarini, ijtimoiy ko'nikmalarini va ijodkorligini rivojlantirish uchun",
      "Faqat dars o'tish",
      "Faqat uy vazifasi berish"
    ],
    correctAnswer: "Bolaning qiziqishlarini, ijtimoiy ko'nikmalarini va ijodkorligini rivojlantirish uchun"
  },
  {
    question: "Maxsus ta'limda **moslashuv (adaptatsiya)** nima?",
    options: [
      "Faqat tibbiy davolash",
      "Ta'lim jarayonini bolaning shaxsiy imkoniyatlari va ehtiyojlariga moslashtirish",
      "Faqat jazolash",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonini bolaning shaxsiy imkoniyatlari va ehtiyojlariga moslashtirish"
  },
  {
    question: "Inklyuziv ta'limning ijtimoiy ahamiyati nima?",
    options: [
      "Faqat pul tejash",
      "Barcha fuqarolarning teng imkoniyatlari va jamiyatga to'liq integratsiyasini ta'minlash",
      "Faqat sportni rivojlantirish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Barcha fuqarolarning teng imkoniyatlari va jamiyatga to'liq integratsiyasini ta'minlash"
  },
  {
    question: "Maxsus ta'limda **maxsus didaktik prinsiplar** qaysilar?",
    options: [
      "Faqat nazariy bilim",
      "Korreksion-rivojlantiruvchi ta'lim, kompensatsiya, rivojlanishning birligi, individual yondashuv",
      "Faqat bir xil usul",
      "Faqat jazolash"
    ],
    correctAnswer: "Korreksion-rivojlantiruvchi ta'lim, kompensatsiya, rivojlanishning birligi, individual yondashuv"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning bilish faoliyatidagi asosiy xususiyat?",
    options: [
      "Faqat yozish",
      "Nutqiy-mantiqiy fikrlashning vizual-obrazli fikrlashga nisbatan qiyin kechishi",
      "Faqat sport",
      "Faqat o'qish"
    ],
    correctAnswer: "Nutqiy-mantiqiy fikrlashning vizual-obrazli fikrlashga nisbatan qiyin kechishi"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bor bolalarni o'qitishda qanday turdagi o'quv qo'llanmalari afzal?",
    options: [
      "Faqat nazariy kitoblar",
      "Amaliy harakatlar, ko'rgazmali va rangli materiallar, predmetli rasmlar",
      "Faqat Brayl yozuvi",
      "Faqat audio kitoblar"
    ],
    correctAnswer: "Amaliy harakatlar, ko'rgazmali va rangli materiallar, predmetli rasmlar"
  },
  {
    question: "Inklyuziv ta'limda **o'qituvchining professional kompetensiyasi** nima?",
    options: [
      "Faqat dars o'tish",
      "Inklyuziv sinfda ishlash uchun maxsus bilim, ko'nikma, qobiliyat va etika",
      "Faqat jazolash",
      "Faqat sportchilik"
    ],
    correctAnswer: "Inklyuziv sinfda ishlash uchun maxsus bilim, ko'nikma, qobiliyat va etika"
  },
  {
    question: "Maxsus ta'limda **o'quv faoliyatining boshqarilishi** nima?",
    options: [
      "Faqat jazolash",
      "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish",
      "Faqat darslikni o'qish",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish"
  },
  {
    question: "Maxsus ta'limda **ixtisoslashtirilgan o'quv xonalari** nima uchun kerak?",
    options: [
      "Faqat oddiy dars o'tish",
      "Korreksion mashg'ulotlar, yordamchi texnologiyalardan foydalanish va shaxsiy ehtiyojlarga mos muhit yaratish",
      "Faqat dam olish",
      "Faqat ovqatlanish"
    ],
    correctAnswer: "Korreksion mashg'ulotlar, yordamchi texnologiyalardan foydalanish va shaxsiy ehtiyojlarga mos muhit yaratish"
  },
  {
    question: "Inklyuziv ta'limning eng muhim sharti?",
    options: [
      "Faqat yuqori baho",
      "Ta'lim olish huquqiga hurmat va barcha bolalarni qabul qilish",
      "Faqat sport yutug'i",
      "Faqat yaxshi uy vazifasi"
    ],
    correctAnswer: "Ta'lim olish huquqiga hurmat va barcha bolalarni qabul qilish"
  },
  {
    question: "Logopediyada **Artikulyatsion apparat** qaysi organlardan tashkil topgan?",
    options: [
      "Faqat quloq",
      "Lablar, til, jag'lar, yumshoq va qattiq tanglay",
      "Faqat burun",
      "Faqat ko'z"
    ],
    correctAnswer: "Lablar, til, jag'lar, yumshoq va qattiq tanglay"
  },
  {
    question: "Maxsus ta'limda **rivojlanishning birligi** nima?",
    options: [
      "Faqat jismoniy rivojlanish",
      "Bolaning jismoniy, aqliy, ijtimoiy va nutqiy rivojlanishining bir-biri bilan bog'liqligi",
      "Faqat yozish",
      "Faqat o'qish"
    ],
    correctAnswer: "Bolaning jismoniy, aqliy, ijtimoiy va nutqiy rivojlanishining bir-biri bilan bog'liqligi"
  },
  {
    question: "Tiflopedagogikada o'quvchilar uchun asosiy sensor baza?",
    options: [
      "Ko'rish",
      "Eshitish, hidlash va teri sezgisi (taktil sezgi)",
      "Nutq",
      "Harakat"
    ],
    correctAnswer: "Eshitish, hidlash va teri sezgisi (taktil sezgi)"
  },
  {
    question: "Logopediyada **umumiy nutqiy rivojlanishning orqada qolishi (UNRO)** nima?",
    options: [
      "Faqat yozish buzilishi",
      "Nutqning barcha tarkibiy qismlarining (fonetika, leksika, grammatika) yoshiga nisbatan orqada qolishi",
      "Faqat o'qish buzilishi",
      "Faqat jismoniy buzilish"
    ],
    correctAnswer: "Nutqning barcha tarkibiy qismlarining (fonetika, leksika, grammatika) yoshiga nisbatan orqada qolishi"
  },
  {
    question: "Inklyuziv ta'limda pedagogik yordamning asosiy shakli?",
    options: [
      "Faqat dars berish",
      "Individual va kichik guruhli korreksion mashg'ulotlar",
      "Faqat jazolash",
      "Faqat nazorat"
    ],
    correctAnswer: "Individual va kichik guruhli korreksion mashg'ulotlar"
  },
  {
    question: "Aqliy zaiflikning sabablari qaysilar?",
    options: [
      "Faqat to'g'ri ovqatlanish",
      "Homiladorlikdagi patologiyalar, tug'ruqdagi travmalar, irsiy omillar, miya infeksiyalari",
      "Faqat sport bilan shug'ullanish",
      "Faqat yozish"
    ],
    correctAnswer: "Homiladorlikdagi patologiyalar, tug'ruqdagi travmalar, irsiy omillar, miya infeksiyalari"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning ta'limida **imo-ishora tili**ning roli?",
    options: [
      "Faqat rasm chizish",
      "Asosiy muloqot vositasi, bilimlarni yetkazish va sotsializatsiya",
      "Faqat yozish",
      "Faqat o'qish"
    ],
    correctAnswer: "Asosiy muloqot vositasi, bilimlarni yetkazish va sotsializatsiya"
  },
  {
    question: "O'zbekiston Respublikasida maxsus ta'lim muassasalarining asosiy turi?",
    options: [
      "Faqat uyda ta'lim",
      "Ixtisoslashtirilgan maktab-internatlar va uyda ta'lim",
      "Faqat oddiy maktablar",
      "Faqat sport zallari"
    ],
    correctAnswer: "Ixtisoslashtirilgan maktab-internatlar va uyda ta'lim"
  },
  {
    question: "Inklyuziv ta'limda ta'lim muhitini Universal Dizayn (UDL) bo'yicha tashkil qilishning asosiy maqsadi?",
    options: [
      "Faqat qimmat jihozlar sotib olish",
      "Barcha talabalar, ularning imkoniyatlaridan qat'i nazar, ta'limdan foydalana olishi",
      "Faqat tezroq o'qitish",
      "Faqat darslikni o'zgartirish"
    ],
    correctAnswer: "Barcha talabalar, ularning imkoniyatlaridan qat'i nazar, ta'limdan foydalana olishi"
  },
  {
    question: "Maxsus pedagogika fanining tadqiqot metodlari qaysilar?",
    options: [
      "Faqat tibbiy ko'rik",
      "Kuzatuv, eksperiment, faoliyat mahsullarini o'rganish, anketa va suhbat",
      "Faqat sport musobaqasi",
      "Faqat yugurish"
    ],
    correctAnswer: "Kuzatuv, eksperiment, faoliyat mahsullarini o'rganish, anketa va suhbat"
  },
  {
    question: "Korreksion-rivojlantiruvchi ta'limning asosiy maqsadi nima?",
    options: [
      "Faqat jazolash",
      "Rivojlanish nuqsonini tuzatish, ikkilamchi kamchiliklarning oldini olish va kompensatsiya qilish",
      "Faqat o'qish tezligini oshirish",
      "Faqat darslikni yodlash"
    ],
    correctAnswer: "Rivojlanish nuqsonini tuzatish, ikkilamchi kamchiliklarning oldini olish va kompensatsiya qilish"
  },
  {
    question: "Inklyuziv ta'limda pedagogik diffrensiallash nima?",
    options: [
      "Faqat sinfni bo'lish",
      "O'quv materialini va o'qitish usullarini har bir bolaning ehtiyojiga qarab moslashtirish",
      "Faqat bir xil dars berish",
      "Faqat nazorat qilish"
    ],
    correctAnswer: "O'quv materialini va o'qitish usullarini har bir bolaning ehtiyojiga qarab moslashtirish"
  },
  {
    question: "Maxsus ta'limda **reabilitatsiya** nima?",
    options: [
      "Faqat tibbiy davolash",
      "Bolaning jismoniy va aqliy funksiyalarini tiklashga qaratilgan kompleks chora-tadbirlar",
      "Faqat uyda o'tirish",
      "Faqat o'yin o'ynash"
    ],
    correctAnswer: "Bolaning jismoniy va aqliy funksiyalarini tiklashga qaratilgan kompleks chora-tadbirlar"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalar uchun **kasbiy yo'nalish**ning ahamiyati?",
    options: [
      "Faqat oliy ma'lumot olish",
      "Kelajakda mustaqil yashash, mehnat faoliyatiga tayyorlash va jamiyatga integratsiya",
      "Faqat sportchilik",
      "Faqat musiqa"
    ],
    correctAnswer: "Kelajakda mustaqil yashash, mehnat faoliyatiga tayyorlash va jamiyatga integratsiya"
  },
  {
    question: "Logopedik mashg'ulotlarda nutqni to'g'rilashning asosiy bosqichlari?",
    options: [
      "Faqat dars berish",
      "Tovushni qo'yish, uni avtomatlashtirish va nutqga kiritish",
      "Faqat yugurish",
      "Faqat yozish"
    ],
    correctAnswer: "Tovushni qo'yish, uni avtomatlashtirish va nutqga kiritish"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bor bolalarning xotirasi qanday?",
    options: [
      "Juda kuchli",
      "Xotira hajmi va mustahkamligi past, ayniqsa mantiqiy xotira zaif",
      "Juda tezkor",
      "Faqat vizual xotira kuchli"
    ],
    correctAnswer: "Xotira hajmi va mustahkamligi past, ayniqsa mantiqiy xotira zaif"
  },
  {
    question: "Tiflopedagogikada darsliklarni moslashtirish qanday amalga oshiriladi?",
    options: [
      "Faqat rangini o'zgartirish",
      "Brayl yozuviga, kattalashtirilgan shriftga o'tkazish, taktil illyustratsiyalar qo'shish",
      "Faqat og'zaki tushuntirish",
      "Faqat rasmlarni olib tashlash"
    ],
    correctAnswer: "Brayl yozuviga, kattalashtirilgan shriftga o'tkazish, taktil illyustratsiyalar qo'shish"
  },
  {
    question: "Inklyuziv ta'limda **ta'lim olishga tayyorgarlik darajasini aniqlash** nima uchun kerak?",
    options: [
      "Faqat jazolash uchun",
      "Bolani ITRga kiritish, mos dasturni tanlash va ta'lim shaklini belgilash uchun",
      "Faqat uy vazifasi berish",
      "Faqat nazorat"
    ],
    correctAnswer: "Bolani ITRga kiritish, mos dasturni tanlash va ta'lim shaklini belgilash uchun"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning nutqini rivojlantirishda qanday mashqlar muhim?",
    options: [
      "Faqat yugurish",
      "Eshitish qoldig'ini rivojlantirish, labdan o'qish, artikulyatsion mashqlar",
      "Faqat yozish",
      "Faqat chizish"
    ],
    correctAnswer: "Eshitish qoldig'ini rivojlantirish, labdan o'qish, artikulyatsion mashqlar"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalar uchun **ijobiy motivatsiya** nima uchun muhim?",
    options: [
      "Faqat pul berish",
      "O'ziga ishonchni oshirish, qiyinchiliklarni yengishga undash va ta'limga qiziqishni orttirish",
      "Faqat jazolash",
      "Faqat uyda qolish"
    ],
    correctAnswer: "O'ziga ishonchni oshirish, qiyinchiliklarni yengishga undash va ta'limga qiziqishni orttirish"
  },
  {
    question: "Inklyuziv ta'limda **ota-ona bilan hamkorlik**ning asosiy maqsadi?",
    options: [
      "Faqat uy vazifasini tekshirish",
      "Bolaning ta'limini uzluksiz ta'minlash, ITRni uy sharoitida qo'llab-quvvatlash va birgalikda muammolarni hal qilish",
      "Faqat nazorat",
      "Faqat yig'ilish o'tkazish"
    ],
    correctAnswer: "Bolaning ta'limini uzluksiz ta'minlash, ITRni uy sharoitida qo'llab-quvvatlash va birgalikda muammolarni hal qilish"
  },
  {
    question: "**Maxsus pedagogika** umumiy pedagogikadan qaysi jihatlari bilan farq qiladi?",
    options: [
      "Faqat dars berish usuli",
      "Korreksion yo'naltirilganlik, maxsus didaktik prinsiplar va alohida ehtiyojli bolaga moslashuv",
      "Faqat kitoblar",
      "Faqat sinf xonasi"
    ],
    correctAnswer: "Korreksion yo'naltirilganlik, maxsus didaktik prinsiplar va alohida ehtiyojli bolaga moslashuv"
  },
  {
    question: "Maxsus ta'lim ehtiyojli bolalarga yordam beruvchi mutaxassis?",
    options: [
      "Faqat oddiy o'qituvchi",
      "Maxsus pedagog (defektolog), logoped, surdopedagog, tiflopedagog, psixolog",
      "Faqat tibbiyot xodimi",
      "Faqat haydovchi"
    ],
    correctAnswer: "Maxsus pedagog (defektolog), logoped, surdopedagog, tiflopedagog, psixolog"
  },
  {
    question: "Inklyuziv ta'limning asosiy tamoyillaridan biri: **individualizatsiya** nimani anglatadi?",
    options: [
      "Faqat bitta bola bilan ishlash",
      "Ta'lim jarayonini har bir o'quvchining shaxsiy ehtiyojlari va imkoniyatlariga moslashtirish",
      "Faqat uy vazifasi berish",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonini har bir o'quvchining shaxsiy ehtiyojlari va imkoniyatlariga moslashtirish"
  },
  {
    question: "Karnik (eshitishning to'liq yo'qligi) bilan tug'ilgan bolalarda nutq rivojlanishining buzilishi?",
    options: [
      "Dislaliya",
      "Alaliya",
      "Mutizm (nutqsizlik)",
      "Rinolaliya"
    ],
    correctAnswer: "Mutizm (nutqsizlik)"
  },
  {
    question: "Maxsus pedagogikada **rivojlanish diagnostikasi**ning maqsadi?",
    options: [
      "Faqat jazolash",
      "Bolaning kuchli va zaif tomonlarini, nuqsonining tuzilishini va ta'lim ehtiyojlarini aniqlash",
      "Faqat baholash",
      "Faqat dars o'tish"
    ],
    correctAnswer: "Bolaning kuchli va zaif tomonlarini, nuqsonining tuzilishini va ta'lim ehtiyojlarini aniqlash"
  },
  {
    question: "O'zbekistonda maxsus ta'lim muassasalariga bolalarni qabul qilish qaysi hujjat asosida amalga oshiriladi?",
    options: [
      "Faqat tug'ilganlik haqidagi guvohnoma",
      "Tibbiy-pedagogik-psixologik komissiya (TPPK) xulosasi",
      "Faqat maktab direktori buyrug'i",
      "Faqat ota-ona talabi"
    ],
    correctAnswer: "Tibbiy-pedagogik-psixologik komissiya (TPPK) xulosasi"
  },
  {
    question: "Inklyuziv ta'limda **tizimli moslashuv** nima?",
    options: [
      "Faqat binoni ta'mirlash",
      "Maktabning barcha darajalarini (infratuzilma, o'quv reja, o'qituvchilar tayyorlash) maxsus ehtiyojlarga moslashtirish",
      "Faqat o'qituvchini almashtirish",
      "Faqat darslikni almashtirish"
    ],
    correctAnswer: "Maktabning barcha darajalarini (infratuzilma, o'quv reja, o'qituvchilar tayyorlash) maxsus ehtiyojlarga moslashtirish"
  },
  {
    question: "Nutqning leksik-grammatik tomonidagi buzilish (so'z boyligi va gap tuzish qoidalarining buzilishi)?",
    options: [
      "Disleksiya",
      "Agrammatizm",
      "Dislaliya",
      "Dizartriya"
    ],
    correctAnswer: "Agrammatizm"
  },
  {
    question: "Tiflopedagogikada **taktil (teri) sezgisini** rivojlantirish nima uchun muhim?",
    options: [
      "Faqat chiroyli yozish",
      "Brayl yozuvini o'qish, atrof-muhitni o'rganish va amaliy ko'nikmalarni shakllantirish uchun",
      "Faqat sportchilik",
      "Faqat eshitishni yaxshilash"
    ],
    correctAnswer: "Brayl yozuvini o'qish, atrof-muhitni o'rganish va amaliy ko'nikmalarni shakllantirish uchun"
  },
  {
    question: "Maxsus ta'limda **erkin faoliyat** nima uchun muhim?",
    options: [
      "Faqat vaqt o'tkazish",
      "Bolaning qiziqishlarini, ijtimoiy ko'nikmalarini va ijodkorligini rivojlantirish uchun",
      "Faqat dars o'tish",
      "Faqat uy vazifasi berish"
    ],
    correctAnswer: "Bolaning qiziqishlarini, ijtimoiy ko'nikmalarini va ijodkorligini rivojlantirish uchun"
  },
  {
    question: "Maxsus ta'limda **moslashuv (adaptatsiya)** nima?",
    options: [
      "Faqat tibbiy davolash",
      "Ta'lim jarayonini bolaning shaxsiy imkoniyatlari va ehtiyojlariga moslashtirish",
      "Faqat jazolash",
      "Faqat baholash"
    ],
    correctAnswer: "Ta'lim jarayonini bolaning shaxsiy imkoniyatlari va ehtiyojlariga moslashtirish"
  },
  {
    question: "Inklyuziv ta'limning ijtimoiy ahamiyati nima?",
    options: [
      "Faqat pul tejash",
      "Barcha fuqarolarning teng imkoniyatlari va jamiyatga to'liq integratsiyasini ta'minlash",
      "Faqat sportni rivojlantirish",
      "Faqat yozishni o'rgatish"
    ],
    correctAnswer: "Barcha fuqarolarning teng imkoniyatlari va jamiyatga to'liq integratsiyasini ta'minlash"
  },
  {
    question: "Maxsus ta'limda **maxsus didaktik prinsiplar** qaysilar?",
    options: [
      "Faqat nazariy bilim",
      "Korreksion-rivojlantiruvchi ta'lim, kompensatsiya, rivojlanishning birligi, individual yondashuv",
      "Faqat bir xil usul",
      "Faqat jazolash"
    ],
    correctAnswer: "Korreksion-rivojlantiruvchi ta'lim, kompensatsiya, rivojlanishning birligi, individual yondashuv"
  },
  {
    question: "Eshitishida nuqsoni bor bolalarning bilish faoliyatidagi asosiy xususiyat?",
    options: [
      "Faqat yozish",
      "Nutqiy-mantiqiy fikrlashning vizual-obrazli fikrlashga nisbatan qiyin kechishi",
      "Faqat sport",
      "Faqat o'qish"
    ],
    correctAnswer: "Nutqiy-mantiqiy fikrlashning vizual-obrazli fikrlashga nisbatan qiyin kechishi"
  },
  {
    question: "Aqliy rivojlanishda nuqsoni bor bolalarni o'qitishda qanday turdagi o'quv qo'llanmalari afzal?",
    options: [
      "Faqat nazariy kitoblar",
      "Amaliy harakatlar, ko'rgazmali va rangli materiallar, predmetli rasmlar",
      "Faqat Brayl yozuvi",
      "Faqat audio kitoblar"
    ],
    correctAnswer: "Amaliy harakatlar, ko'rgazmali va rangli materiallar, predmetli rasmlar"
  },
  {
    question: "Inklyuziv ta'limda **o'qituvchining professional kompetensiyasi** nima?",
    options: [
      "Faqat dars o'tish",
      "Inklyuziv sinfda ishlash uchun maxsus bilim, ko'nikma, qobiliyat va etika",
      "Faqat jazolash",
      "Faqat sportchilik"
    ],
    correctAnswer: "Inklyuziv sinfda ishlash uchun maxsus bilim, ko'nikma, qobiliyat va etika"
  },
  {
    question: "Maxsus ta'limda **o'quv faoliyatining boshqarilishi** nima?",
    options: [
      "Faqat jazolash",
      "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish",
      "Faqat darslikni o'qish",
      "Faqat uy vazifasi"
    ],
    correctAnswer: "Bolaning diqqatini, motivatsiyasini, topshiriqni bajarish tezligini va o'z-o'zini nazorat qilishni rivojlantirish"
  },
  {
    question: "Maxsus ta'limda **ixtisoslashtirilgan o'quv xonalari** nima uchun kerak?",
    options: [
      "Faqat oddiy dars o'tish",
      "Korreksion mashg'ulotlar, yordamchi texnologiyalardan foydalanish va shaxsiy ehtiyojlarga mos muhit yaratish",
      "Faqat dam olish",
      "Faqat ovqatlanish"
    ],
    correctAnswer: "Korreksion mashg'ulotlar, yordamchi texnologiyalardan foydalanish va shaxsiy ehtiyojlarga mos muhit yaratish"
  }
];

// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = '🎉 Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = '🎉';
    } else {
        modalVerdict.textContent = '😔 Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = '😔';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    
    if (isAuthenticated === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    } else {
        document.body.classList.add('login-active');
        document.getElementById('loginScreen').style.display = 'flex';
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '⚠️ Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '✓ Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '❌ Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        location.reload();
    }
}

console.log('%c💡 Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}