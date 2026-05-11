// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiiikkkzjkjh112mishsuzhzhzhsbsbsnsnsnndarkerbot_remaining_indices';
const STATS_KEY = 'quizmarkerbot_stats';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Maktabgacha yoshdagi bolalarni tabiat bilan tanishtirish vazifalari nimalardan iborat?",
    options: ["aqliy, axloqiy jismoniy ekologik tarbiya berish", "jismoniy, estetik", "ta’limiy, tarbiyaviy, jismoniy", "ma’naviy-ahloqiy"],
    correctAnswer: "aqliy, axloqiy jismoniy ekologik tarbiya berish"
  },
  {
    question: "Ekologiya so‘zining tarifi qaysi qatorda to‘g‘ri ko‘rsati!gan?",
    options: ["organizmlaming yashash sharoiti", "tirik organizmlaming yashash sharoiti yoki tashqi muhit bilan o‘zaro munosabati tashqi muhitning o‘zaro munosabati", "atmosferaning tozaligi", "organizimlaming tashqi muhitga ta’siri"],
    correctAnswer: "tirik organizmlaming yashash sharoiti yoki tashqi muhit bilan o‘zaro munosabati tashqi muhitning o‘zaro munosabati"
  },
  {
    question: "“Bilginki daryoning ko‘zlari yoshlansa uning boshiga ham kulfat tushgan bo‘Iadi” bu so‘z!ar qaysi allomaning fikri?",
    options: ["Muxammad Muso-al Xorazmiy", "Abu Rayxon Beruniy, Abu-Nasr Forobiy, Alisher Navoiy", "Ibn Sino", "Ya.A.Komenskiy"],
    correctAnswer: "Abu Rayxon Beruniy, Abu-Nasr Forobiy, Alisher Navoiy"
  },
  {
    question: "Beruniy “Saydana” deb nomlangan asarida necha-xil dori darmonlarni tavsiflagan?",
    options: ["1116 ta", "1006 ta", "1106 ta", "1016 ta"],
    correctAnswer: "1106 ta"
  },
  {
    question: "??Qaysi olimning “Qadimgi avlodlardan qolgan yodgorliklar” va “Hindiston” asarlarida o‘simlik va hayvonlarning tuzilishi hamda ularning tashqi muhit bilan o‘zaro aloqasi haqida ham qiziqarli ma’lumotlar keltirilgan?",
    options: ["Muhammad al Xorazmiy", "Abu Аli Ibn sino", "Abu Rayhon Beruniy", "Abu Nasr Farobiy"],
    correctAnswer: "Abu Rayhon Beruniy"
  },
  {
    question: "Qaysi buyuk mutafakkirning yirik qomusiy olim sifatidatanilgan. Uning 450 ta asari mavjud boiib, bizgacha 240 tasi yetib kelgan?.",
    options: ["Abu Ali Ibn sino", "Muhammad al Xorazmiy", "Abu Nasr Farobiy", "Abu Rayhon Beruniy"],
    correctAnswer: "Abu Rayhon Beruniy"
  },
  {
    question: "Organizmlarning muhitiga moslashishi nima deyiladi?",
    options: ["Gomeostaz", "Stress", "Yevribiont", "Adaptatsiya"],
    correctAnswer: "Adaptatsiya"
  },
  {
    question: "Produtsentlarning roli",
    options: ["Anorganik elementlar zaxirasini yaratadi", "Anorganik birikmalar hisobiga organik moddalar hosil qiladi", "O‘lik moddalami parchalaydi", "Tayyor organik moddalami parchalaydi"],
    correctAnswer: "Tayyor organik moddalami parchalaydi"
  },
  {
    question: "O‘simliklarning hayotiy shakllari",
    options: ["Cho‘l, tropik, tundra zonasi o‘simliklari", "Bir yillik, ikki yillik va ko‘p yillik", "Chala buta, suv o‘simliklari, yaylovlar", "Daraxt, buta, chala buta, o‘t o‘simliklar"],
    correctAnswer: "Daraxt, buta, chala buta, o‘t o‘simliklar"
  },
  {
    question: "O‘zbekiston Respublikasi “Osimliklar dunyosini muhofaza qilish va undan foydalanish to‘g‘risida” qonuni qachon qabul qilingan?",
    options: ["2006 yil", "1999 yil", "1997 yil", "2001 yil"],
    correctAnswer: "1999 yil"
  },
  {
    question: "Abiotik omillar - bu...",
    options: ["organizmga bevosita yoki bilvosita tasir etadigan jonsiz tabiatning omillari", "jonsiz va jonli tabiatni o‘zaro munosabatlari va tabsiri", "organizmlarni bir biriga bevosita yoki bilvosita turli xil tabsiri", "tirik organizmlarni yashash muhitini o‘zgartiradigan yoki ularning o‘zlariga ta’sir etadigan inson faoliyatining ko‘rinishi"],
    correctAnswer: "organizmga bevosita yoki bilvosita tasir etadigan jonsiz tabiatning omillari"
  },
  {
    question: "Ekologik omillar nechta guruhga boiinadi.",
    options: ["3 ta", "2 ta", "7 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Fitosenoz bu",
    options: ["organizmlarni atrof muhit bilan munosabatini o‘rganadigan fan organizmlar ekologiyasi", "o‘simliklarn guruxining mavsumiy rivojlanishi bilan bog‘liq holda ifodalanadigan o‘ziga xosligi tushuniladi", "malum biotonga xos o‘zaro va atrof muxit sharoitlari bilan murakkab funksional aloqadorlikdagi o‘simliklar turlarinig tabiy guruxi", "ayrim o‘simliklarning xududlarda uchrashi tuproqning xarakterini ko‘rsatadi"],
    correctAnswer: "malum biotonga xos o‘zaro va atrof muxit sharoitlari bilan murakkab funksional aloqadorlikdagi o‘simliklar turlarinig tabiy guruxi"
  },
  {
    question: "Antropogen faktorlar b u .......",
    options: ["jonsiz va jonli tabiatni o‘zaro munosabatlari va tasiri", "tirik organizmlarni yashash muhitini o'zgartiradigan yoki u laming o‘zlariga tasir etadigan inson faoliyatining ko‘rinishi", "kishilarning o‘simliklarga, o‘simliklar qoplamiga va ular yashab turgan muhit sharoitiga turli shakldagi tasir faktorlari kiradi.", "organizmlarni bir biriga bevosita yoki bilvosita turli xil ta’siri"],
    correctAnswer: "tirik organizmlarni yashash muhitini o'zgartiradigan yoki u laming o‘zlariga tasir etadigan inson faoliyatining ko‘rinishi"
  },
  {
    question: "Tana temperaturasi muxit temperaturasi o‘zgarishi bilan o‘zgarib turuvchi organizmlar nima deyiladi?",
    options: ["Mezofit", "Poykloterm", "Epifit", "Gomoterm"],
    correctAnswer: "Poykloterm"
  },
  {
    question: "Tana temperaturasi o‘zgarmas turlar nima deyiladi?",
    options: ["Epifit", "Mezofit", "Poykloterm", "Gomoterm"],
    correctAnswer: "Gomoterm"
  },
  {
    question: "Shovqin ekologik omili organizmlarga qanday ta’sir qiladi?",
    options: ["Ijobiy tasir qiladi", "salbiy tasir qiladi", "na salbiy na ijobiy", "Tasir qilmaydi"],
    correctAnswer: "Tasir qilmaydi"
  },
  {
    question: "??Og‘ir metallarni tuproqqa avtomobil gazlari bilan kelib tushishi tiriklikka qanday salbiy ta’sir qiladi?",
    options: ["Tuproqni ifloslantiradi", "Hayvonlarga tasir qiladi", "O‘simliklarga tasir qiladi", "Tuproqdagi mikroorganizmlami o’ldirib tabiatdagi moddalarni aylanma harakatini to‘xtatadi, o‘simlik va hayvonlarga tasir qiladi"],
    correctAnswer: "Tuproqdagi mikroorganizmlami o’ldirib tabiatdagi moddalarni aylanma harakatini to‘xtatadi, o‘simlik va hayvonlarga tasir qiladi"
  },
  {
    question: "Atmosfera qatlamlarining to‘g‘ri tartibini ajrating.",
    options: ["troposfera, stratosfera, mezosfera, termosfera, ekzosfera", "stratosfera, mezosfera, troposfera, ekzosfera, termosfera", "stratosfera, troposfera, termosfera, ekzosfera", "ekzosfera, termosfera, stratosfera, mezosfera, troposfera,"],
    correctAnswer: "troposfera, stratosfera, mezosfera, termosfera, ekzosfera"
  },
  {
    question: "Atmosfera tarkibida kislorod necha foiz boMadi?",
    options: ["18%", "21%", "10%", "15 %"],
    correctAnswer: "21%"
  },
  {
    question: "Tuproq qaysi ekologik omilga kiradi?",
    options: ["zoogin", "biotik", "abiotik", "fitogin"],
    correctAnswer: "abiotik"
  },
  {
    question: "Qumlik joylarda o‘suvchi o‘simliklar nima deyiladi?",
    options: ["Kserofit", "Psemofit", "Metofit", "Mezofit"],
    correctAnswer: "Psemofit"
  },
  {
    question: "??Uzun kun o‘simliklari qayerda uchraydi?",
    options: ["Janubiy rayonlarda", "Shimoliy rayonlarda", "Ekvator", "O‘rtacha kenglikda rayonlarda"],
    correctAnswer: "Janubiy rayonlarda"
  },
  {
    question: "Ya.A.Komenskiy “Onalar maktabi” da nechta fandan ma’lumot olishni tavsiya etgan?",
    options: ["12ta", "18ta", "13 ta", "17 ta"],
    correctAnswer: "12ta"
  },
  {
    question: "Qaysi buyuk mutafakkirning boshlang‘ich ta’lim xususiy metodikasining asosini yaratdi?",
    options: ["K.D.Ushinskiy", "Ya.A.Komenskiy", "l.G.Pestalossi", "S.A.Veretenikova"],
    correctAnswer: "Ya.A.Komenskiy"
  },
  {
    question: ".....— tabiat jismlari va hodisalarning tabiiy sharoitlarda maqsadga yo‘nalgan va bevosita shu hodisalarni borishiga aralashmagan holda sezgilan bilan qabul qilib olishdir",
    options: ["solishtirish", "taqqoslash", "kuzatish", "qiyoslash"],
    correctAnswer: "kuzatish"
  },
  {
    question: "Kuzatishlar davomiyligi va xarakteri bo‘yicha qanday turlari bo‘lishi mumkin?",
    options: ["qisqa muddatli va uzoq muddatli", "solishtirma va qiyosiy", "uzlukli va uzluksiz", "harakatli va harakatsiz"],
    correctAnswer: "qisqa muddatli va uzoq muddatli"
  },
  {
    question: "O‘simlik va hayvonlami o‘sishi hamda rivojlanishi, tabiatdagi mavsumiy o‘zgarishlar haqidagi bilimlarning jamg‘arilishi uchun kuzatishning ancha murakkabroq turi — ...dan foydalaniladi?",
    options: ["harakatli va harakatsiz", "uzlukli va uzluksiz", "solishtirma va qiyosiy", "uzoq muddatli"],
    correctAnswer: "uzoq muddatli"
  },
  {
    question: "Qanday kuzatishlar mazmuniga ko‘ra murakkab bo’lganligi sababli, maktabgacha ta’Iimda o‘rta hamda katta guruxlarda olib boriladi?",
    options: ["solishtirma va qiyosiy", "Uzlukli va uzluksiz", "Solishtirma va uzoq muddatli", "Harakatli va harakatsiz"],
    correctAnswer: "solishtirma va qiyosiy"
  },
  {
    question: "Kuzatishning bu turi bolalarda tabiat hodisalarini analiz qilish, ayrim ma’lumotlarni qiyoslash, soddaroq xulosalar chiqarish ko‘nikmalarining hosil boMishiga yordam beradi",
    options: ["Uzlukli va uzluksiz", "Harakatli va harakatsiz", "solishtirma va qiyosiy", "Solishtirma va uzoq muddatli"],
    correctAnswer: "solishtirma va qiyosiy"
  },
  {
    question: "Kimning ilmiy qarashlari, asosan, “Saydana”, “Minerologiya”, “Qadimgi avlodlardan qolgan yodgorliklar” asarlarida o‘z aksini topgan.Unda Eronning turii tropik o‘simIik va hayvonlarining tashqi muhit bilan aloqasi, ularning xulq atvori yil fasllarining o‘zgarishi bilan bog‘liqligi misollar bilan tushuntirilgan?",
    options: ["Farobiy", "Abu Ali Ibn Sino", "Muhammad al Xorazmiy", "Abu Rayhon Beruniy"],
    correctAnswer: "Abu Rayhon Beruniy"
  },
  {
    question: "Kichik guruxda istirohat bog‘ida sayr qilib yurganda nima topshiriq beriladi?",
    options: ["Gullarning barglarini to‘plash", "Yowoyi daraxtlaming bargini to‘plash", "Manzarali daraxtlaming bargi va mevalarini to‘plash", "Daraxt va gullaming meva va barglarini to‘plash"],
    correctAnswer: "Manzarali daraxtlaming bargi va mevalarini to‘plash"
  },
  {
    question: "Kichik guruxda yil fasllarining xususiyatlari qanday o‘rgatiIadi va ular to‘g‘risida tushuncha beriladi",
    options: ["Yozning issiq, qishning sovuq ekanligi", ") Yozning sovuq, qishning iliq ekanligi", "Yozning iliq, qishning sovuqroq ekanligi", "To‘g‘ri javob yo‘q"],
    correctAnswer: "Yozning issiq, qishning sovuq ekanligi"
  },
  {
    question: "Sabzavotlar (bodring, pomidor) va mevalar (olma, gilos, o‘rik) ning nomi, ta’mi, rangi va shaklini biiishga, o‘zaro farqlashga o‘rgatishda qaysi guruxda olib boriladi?",
    options: ["tayyorlov gurux (6-7yosh)", "katta gurux (5-6yosh)", "kichik gurux (3-4yosh)", "o‘rta gurux (4-5yosh) 35."],
    correctAnswer: "kichik gurux (3-4yosh)"
  },
  {
    question: "Bolani uy hayvonlari (mushuk, kuchuk, qo‘y va qo‘zichoq)va yovvoyi hayvonlar (quyon, ayiq), parrandalar (xo‘roz, tovuq, jo‘ja!ar) bilan tanishtirish qaysi guruxda olib boriladi.",
    options: ["o‘rta gurux (4-5yosh)", "katta gurux (5-6yosh)", "kichik gurux (3-4yosh)", "tayorlov gurux(6-7yosh)"],
    correctAnswer: "kichik gurux (3-4yosh)"
  },
  {
    question: "Kichik guruxda pasharotlardan qaysilari bilan tanishtiriladi va o‘rgatiladi?",
    options: ["chivin va pashsha", "chigirtka va asalari", "xonqizi va asalari", "pashsha va ninachi"],
    correctAnswer: "xonqizi va asalari"
  },
  {
    question: "Akvariumdagi baliqlar bilan tanishtirish,ularning hayot tarzi, nimalar bilan oziqlanishi haqida qisqacha ma’lumot berish qaysi guruxda amalga oshiriladi?",
    options: ["o‘rta gurux(4-5yosh)", "kichik gurux(3-4yosh)", "katta gurux(5-6yosh)", "tayorlov gurux(6-7yosh)"],
    correctAnswer: "o‘rta gurux(4-5yosh)"
  },
  {
    question: "Kichik guruxda sabzavotlardan qaysilarni va mevalardan qaysilarining nomi, ta’mi, rangi vashaklini bilishga, o‘zaro farqlashga o‘rgatishda davom etiladi?",
    options: ["qalampir baqlajon va shaftoli, gilos,o‘rik", "qalampir pomidor va shaftoli, olxori nok", "bodring, pomidor va olma,giIos,o‘rik", "baqlajon pomidor va shaftoli,gilos,nok"],
    correctAnswer: "qalampir baqlajon va shaftoli, gilos,o‘rik"
  },
  {
    question: "Kichik guruxda qaysi qushlar bilan tanishtiriladi Ularning nomini to‘g‘ri aytish, katta- kichikligiga e’tibor berish, tovushlaridan tanish va farqlashni o‘rgatiladi?",
    options: ["musicha, chumchuqva qaldirg‘och", "Zog‘cha, chumchuq va qaldirg‘och", "chumchuq va qaldirg‘och", "musicha, kabutar va qaldirg‘och"],
    correctAnswer: "chumchuq va qaldirg‘och"
  },
  {
    question: "Qaysi guruxda tog‘, o‘rmon, dengiz, daryo kabi atamaiarni solishtirish, farqini ajratish, ularda yashaydigan hayvonlar va o‘simlikIar haqida qisqacha ma’lumot berib boriladi?",
    options: ["tayyorlov gurux (6-7yosh)", "o‘rta gurux (4-5yosh)", "kichik gurux (3-4yosh)", "katta gurux (5-6yosh)"],
    correctAnswer: "katta gurux (5-6yosh)"
  },
  {
    question: "Yer maydonchasida qaysi oylarda jonli tabiat burchagi tashkil qilinadi?",
    options: ["qish va bahor oylarida", "yoz va kuz oylarida", "bahor va yoz oylarida", "bahor va kuz oylarida"],
    correctAnswer: "qish va bahor oylarida"
  },
  {
    question: "Katta gurux bolalarida gulzorni tashkil etishda bog‘chaning tabiiy sharoitini hisobga olgan xolda qanday o‘simliklar tanlanadi?",
    options: ["erta bahordan to yozgacha gullaydigan o‘simlmklar", "doimiy gullaydigan o‘simliklar", "erta bahordan to qishgacha gullaydigan o‘simliklar", "erta bahordan to kech kuzgacha gullaydigan o‘simliklar"],
    correctAnswer: "erta bahordan to kech kuzgacha gullaydigan o‘simliklar"
  },
  {
    question: "Qaysi guruxdan boshlab ilk ekologik madaniyatni tarbiyalab borish amalga oshiriladi?",
    options: ["o‘rta gurux (4-5 yosh)", "kichik gurux (3-4 yosh)", "tayorlov gurux (6-7 yosh)", "katta gurux (5-6 yosh)"],
    correctAnswer: "kichik gurux (3-4 yosh)"
  },
  {
    question: "O‘rta gurux bolalari nechi turdagi daraxtlar, nechi xil turdagi o‘simliklarning nomini ayta oladi",
    options: ["3-4 xil turdagi daraxtlar hamda 2-3 xil turdagi o‘simliklarning", "2-4 xil turdagi daraxtlar hamdal-4 xil turdagi daraxtlar", "3-5 xil turdagi daraxtlar hamda 3-4 xil turdagi daraxtlar", "2- 3 xil turdagi daraxtlar hamda 3-4 xil turdagi daraxtlar"],
    correctAnswer: "2- 3 xil turdagi daraxtlar hamda 3-4 xil turdagi daraxtlar"
  },
  {
    question: "O‘rta guruhda bolani sabzavotlar va mevalarning o‘ziga xos belgilari bilan qanday tanishtirib boriladi?",
    options: ["sabzavotlar polizda, mevalar esa bog‘da, daraxtda o‘sishi haqida", "sabzavotlar dalada mevalar esa bog‘da, yerda o‘sishi haqida", "sabzavotlar dalada mevalar esa polizda, yerda o‘sishi haqida", "sabzavotlar, yerda mevalar esa, polizda,o‘sishi haqida"],
    correctAnswer: "sabzavotlar polizda, mevalar esa bog‘da, daraxtda o‘sishi haqida"
  },
  {
    question: "Tabiat bilan tanishtirishnish shakllari qaysular?",
    options: ["barglar, urug‘larildiz, meva, sabzavot", "belkurak, ketmon,xaskash", "meva, sabzavot, barg, hayvonlar", "mashgulot, ekskursiya, sayr"],
    correctAnswer: "mashgulot, ekskursiya, sayr"
  },
  {
    question: "Sayr va uning turlari.",
    options: ["xiyobonga, hayvonot bog‘iga", "gallazorga, daraxtzorga", "maqsadli va maqsadsiz sayr", "ertalabki, kechki sayr"],
    correctAnswer: "maqsadli va maqsadsiz sayr"
  },
  {
    question: "Kuzatish va uning turlari.",
    options: ["laboratoriya, qisqa muddatli", "uzoq muddatli, qisqa muddatli, solishtirma", "obyektiv, subyektiv", "epizodik, tabiiy kuzatish"],
    correctAnswer: "uzoq muddatli, qisqa muddatli, solishtirma"
  },
  {
    question: "Tarqatma materiallardan foydalanib kuzatish qaysimetodga kiradi?",
    options: ["amaliy metod", "suhbat, rasm", "hikoya,mehnat", "ko‘rgazmali metod"],
    correctAnswer: "ko‘rgazmali metod"
  },
  {
    question: "Ekologiya tushunchasini fanga birinchi bo‘lib kim tomondan kiritilgan?",
    options: ["Al-Xorazmiy", "Aristotel", "Platon", "Ernest Gekkel"],
    correctAnswer: "Ernest Gekkel"
  },
  {
    question: "Tarqatma materiallardan foydalanib kuzatish qaysiguruhdan boshlab o‘tkaziladi.",
    options: ["o‘rta guruhdan boshlab", "tayyorlov guruhdan boshlab", "katta guruhdan boshlab", "kichik guruhdan boshlab"],
    correctAnswer: "o‘rta guruhdan boshlab"
  },
  {
    question: "O‘yin, mehnat, kundalik kuzatish qaysi metodga kiradi?",
    options: ["oddiy tajribalar", "ko‘rgazmali metod", "suhbatli, og‘zaki nutq", "amaliymetod"],
    correctAnswer: "amaliymetod"
  },
  {
    question: "Ekskursiya turlari",
    options: ["qishloq xo‘jaligi va dala maydonlariga", "Dalaga, paxta maydonlariga", "hayvonot bogiga, mevazorga", "tabiatshunoslik va qishloq xo‘jalik"],
    correctAnswer: "tabiatshunoslik va qishloq xo‘jalik"
  },
  {
    question: "Predmetli o‘yinlarga qaysilar kiradi?",
    options: ["domino, loto, zoologiya, botanika", "chumchuq va avtomobil, tovuq jo ‘jalari bilan", "stol bosma o‘yinlari, zoologiya lotosi.", "ajoyib xaltacha, uy hayvonlari solingan rasmlar"],
    correctAnswer: "ajoyib xaltacha, uy hayvonlari solingan rasmlar"
  },
  {
    question: "EkoIogiya so‘zining fanga nechanchi yildan kiritilgan?",
    options: ["1967yilda", "1968yilda", "1866yilda", "1930yilda"],
    correctAnswer: "1866yilda"
  },
  {
    question: "Stol bosma o‘yinlari qaysilar?",
    options: ["zoolgiya lotosi, hayvonlar rasmi, o‘simliklar rasmi", "tabiat materiallaridan turli narsalar yasash", "Domino, predmetli rasm, turli xil ildizlar", "zoologiya lotosi, botanika lotosi, yilning turli fasli, mevalar, o'simliklar"],
    correctAnswer: "zoologiya lotosi, botanika lotosi, yilning turli fasli, mevalar, o'simliklar"
  },
  {
    question: "Ekskursiyada qaysi metod qo‘llaniladi?",
    options: ["sayr, ekskursiya, mehnat", "mashgulot, og‘zaki", "hikoya, suhbat,amaliy.", "kuzatish,og‘zaki"],
    correctAnswer: "kuzatish,og‘zaki"
  },
  {
    question: "Mudiraning tabiat bilan tanishtirishishiga rahbarlik yo'nalishlari qaysi qatorda to‘g‘ri ko‘rsatilgan?",
    options: ["metodik, targ‘ibot ishlarini tashkil etish, ota-onalar bilanishlash", "ota-onalar bilan ishlash, tarbiyachilar bilan obodonlashtirishishi", "targ‘ibot ishlarini tashkil etish, metod xonani tashkil etish.", "xo‘jalik ishlariga rahbarlik, metodist ishiga raxbarlik."],
    correctAnswer: "metodik, targ‘ibot ishlarini tashkil etish, ota-onalar bilanishlash"
  },
  {
    question: "Yer maydonchasiga tavsiya etilgan gullar qaysilar?",
    options: ["atirgul,gulbiyor, lola, astra, gulbiyor", "romashka, atirgul, gulbiyor, lola, astra", "gulbiyor, qo‘qongul, astra, romashka, piyongul, gulsapsar, lola", "astra, atirgul, piyongul, gvozdika, gladiolus, gulbiyorqo‘qongul, lola"],
    correctAnswer: "astra, atirgul, piyongul, gvozdika, gladiolus, gulbiyorqo‘qongul, lola"
  },
  {
    question: "?Qisqa muddatli kuzatishga qaysilar kiradi?",
    options: ["yomg‘ir yog‘ishi, hashorotlarni, qushlarni kuzatish", "qor yog‘ishi, yomg‘ir yogishi, kamalakni kuzatish", "erta bahorgi gullami va kuzgi qushlami kuzatish qoryog‘ ish, yomg‘ir yog‘ishi, erta bahorgi gullarni kuzatish.", "qushlar va gullami kuzatish"],
    correctAnswer: "qor yog‘ishi, yomg‘ir yogishi, kamalakni kuzatish"
  },
  {
    question: "Tabiat bilan tanishtirish tamoyillari",
    options: ["Ilmiylik, bolalar yoshiga moslik o‘lkashunoslik,ensiklopedik, faolchilik,ko’rgazmalilik,o‘kashunoslik.", "O‘lkashunoslik, ko‘rgazmalilik, entiklopedik falschilik, ensiklopedik", "Ilmiylik, faslchilik, ko‘rgazmalilik va mashg’ulotlar o’tish", "O‘kashunoslik, ensiklopedik, faslchilik va mashg’ulotlar"],
    correctAnswer: "Ilmiylik, bolalar yoshiga moslik o‘lkashunoslik,ensiklopedik, faolchilik,ko’rgazmalilik,o‘kashunoslik."
  },
  {
    question: "Tabiat bilan tanishtirish metodlari",
    options: ["Suhbat, ko‘rgazmali, ekskursiya", "Ekskursiya, og`zaki nutq, amaliy", "Amaliy, ko‘rgazmali suhbat", "Ko‘rgazmali, amaliy, og‘zaki metod"],
    correctAnswer: "Ko‘rgazmali, amaliy, og‘zaki metod"
  },
  {
    question: "Tabiat bilan tanishtirish ish shakllari.",
    options: ["Mashgulot, ekskursiya, sayr", "Belkurak, ketmon, xaskash", "Meva, sabzavot, barg, hayvonlar.", "Barglar, urug‘lar ildiz, meva, sabzavot"],
    correctAnswer: "Mashgulot, ekskursiya, sayr"
  },
  {
    question: "Sayr va uning turlari",
    options: ["Gallazorga, daraxtzorga", "Xiyobonga, hayvonot bogiga", "Ertalabki, kechki sayr", "Maqsadli sayr maqsadsiz"],
    correctAnswer: "Maqsadli sayr maqsadsiz"
  },
  {
    question: "Ekologiya tushunchasini fanga birinchi bo‘lib kim tomondan kiritilgan.",
    options: ["Ernest Gekkel", "Aristotel", "Platon", "Al-Xorazmiy"],
    correctAnswer: "Ernest Gekkel"
  },
  {
    question: "Ekologiya so’zi fanga nechanchi yildan kiritilgan?",
    options: ["1967 yilda", "1930 yilda", "1866 yilda", "1968 yilda"],
    correctAnswer: "1866 yilda"
  },
  {
    question: "Ekskursiyada qaysi metod qo’llaniladi.",
    options: ["Kuzatish,ogzaki", "Hikoya, suhbat,amaliy", "Sayr, ekskursiya, mehnat", "Mashgulot,ogzaki."],
    correctAnswer: "Kuzatish,ogzaki"
  },
  {
    question: "Ekologiya faniga xissa qo’shgan Markaziy Osiyo olimlari",
    options: ["Forobiy, Navoiy ,Samarkandiy", "Al-Fargoniy, Ibn-Sino, Al-Xorazmiy", "Beruniy, Ibn-Sino,Farobiy,Al-Xorazmiy", "Navoiy, Beruniy, Bobur."],
    correctAnswer: "Beruniy, Ibn-Sino,Farobiy,Al-Xorazmiy"
  },
  {
    question: "Tabiat bilan tanishtirish ishiga raxbarlik yo’nalishlari qaysi qatorda to‘gri ko‘rsatilgan",
    options: ["Xo‘jalik ishlariga rahbarlik,metodist ishiga raxbarlik.metodist tarbiyachilar bilan ishlash", "Metodik, targ’ibot ishlarini tashkil etish, ota-onalar bilan ishlash", "Ota-onalar bilan ishlash,tarbiyachilar bilan obodonlashtirish ishi", "Targibot ishlarini tashkil etish,metod xonani tashkil etish."],
    correctAnswer: "Metodik, targ’ibot ishlarini tashkil etish, ota-onalar bilan ishlash"
  },
  {
    question: "Yer maydonchasiga tavsiya etilgan gullar",
    options: ["Romashka, atirgul, gulbiyor, lola, astra", "Astra, atirgul, piyongul, gvozdika,gladiolus, gulbiyor, qo‘qongul,lola", "Gulbiyor, qo‘qongul, astra, romashka, piyongul, gulsapsar, lola", "Atirgul, gulbiyor, lola, astra,gulbiyor"],
    correctAnswer: "Gulbiyor, qo‘qongul, astra, romashka, piyongul, gulsapsar, lola"
  },
  {
    question: "Uzoq muddatli kuzatishlar qaysi javobda to’g’ri ko’rsatilgan.",
    options: ["O‘simlikni urug‘idan urug‘igacha bo‘lgan. Baqani rivojlanishini kuzatish, o‘simlikni yil fasllaridagi o‘zgarishlarini kuzatish", "Baqani rivojlanishini kuzatish, o‘simlikni kuzatish", "Gallazorni kuzatish, maydonchalardagi o‘simliklarni kuzatish o‘simliklarni kuzatish, dala maydonlarini kuzatish, gallazorni", "O‘simlikni yil fasllarida o‘zgarishini kuzatish"],
    correctAnswer: "O‘simlikni urug‘idan urug‘igacha bo‘lgan. Baqani rivojlanishini kuzatish, o‘simlikni yil fasllaridagi o‘zgarishlarini kuzatish"
  },
  {
    question: "Tabiat bilan tanishtirish dasturini tuzilishi",
    options: ["Jonsiz tabiat bilan tanishtirish,ensiplopedik bilim berish", "Kishilarning tabiatdagi mehnati, o‘simliklar va hayvonot olami", "O‘simliklar va hayvonot dunyosi,fasllar bilan tanishtirish qushlar olami, hayvonot dunyosi, o‘simliklar dunyosi", "Jonli-jonsiz tabiat, o‘simlik dunyosi, hayvonot olami, kishilarning tabiatdagi mehnati"],
    correctAnswer: "Jonli-jonsiz tabiat, o‘simlik dunyosi, hayvonot olami, kishilarning tabiatdagi mehnati"
  },
  {
    question: "Tabiatshunoslikning nechta bosh yo‘nalishi bor",
    options: ["3ta", "7ta", "5ta", "6ta"],
    correctAnswer: "3ta"
  },
  {
    question: "Tabiatshunoslikning bosh yo‘nalishi to`g`ri yozilgan qatorni belgilang.",
    options: ["Juda kichkinani o‘rganish. Juda murakkabni o‘rganish. Juda katta, kengni o‘rganish.", "Juda kichkinani o‘rganish. Juda katta, kengni o‘rganish. Juda murakkabni o‘rganish.", "Juda murakkabni o‘rganish. Juda katta, kengni o‘rganish. Juda kichkinani o‘rganish.", "Juda katta, kengni o‘rganish. Juda kichkinani o‘rganish. Juda murakkabni o‘rganish."],
    correctAnswer: "Juda kichkinani o‘rganish. Juda murakkabni o‘rganish. Juda katta, kengni o‘rganish."
  },
  {
    question: "Tabiatshunoslikning maqsadi ……",
    options: ["Tabiat hodisalarning mohiyatini aniqlash, tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat", "Tabiat hodisalarning mohiyatini aniqlashdan iborat", "Tabiat qonuniyatlarni bilishdan iborat", "tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat"],
    correctAnswer: "Tabiat hodisalarning mohiyatini aniqlash, tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat"
  },
  {
    question: "«Tabiatshunoslik» fanining rivojlanish jarayoni necha bosqichga bo’linadi",
    options: ["5 bosqichga", "7 bosqichga", "6 bosqichga", "9 bosqichga"],
    correctAnswer: "5 bosqichga"
  },
  {
    question: "Tabiatshunoslikda ilmiy tadqiqotlar natijalari nazariya, qonunlar, modellar, gipotezalar va tamoyillar majmuasi bu...",
    options: ["tabiyat haqida ma’lumot", "tabiat qonunlari", "tabiat haqidagi nizom", "tabiat konsepsiyasi."],
    correctAnswer: "tabiat konsepsiyasi."
  },
  {
    question: "Dunyoda «Tabiatshunoslik» fanining rivojlanishiga turtki bo‘lgan",
    options: ["Abu Nasr Farobiy ”Fozil odamlar shahri”asari", "Sofiya Kovalevskaya, Mariya Kyuri tabiatshunoslikka oid asarlari;", "Yevklidning «Boshlanish»i va Ptolomeyning «Buyuk qurilish» asarlari;", "Abu Ali ibn Sino va Zahiriddin Muhammad Bobur tabiat va uning"],
    correctAnswer: "Yevklidning «Boshlanish»i va Ptolomeyning «Buyuk qurilish» asarlari;"
  },
  {
    question: "Talabalarni tabiatshunoslik muammolariga bag‘ishlangan maqolalar, adabiyotlarga taqriz, annotatsiya yozishga o‘rgatish bu...",
    options: ["fanning asosiy maqsadi", "fanning asosiy vazifasi.", "fanning asosiy prinsiplari", "fanning asosiy predmeti"],
    correctAnswer: "fanning asosiy vazifasi."
  },
  {
    question: "«Tabishunoslik va uni o‘qitish metodikasi» fanning vazifasi",
    options: ["yer,quyosh,yulduzlar,suv,havo,tosh,tuproq haqida tushunchalar berish", "Tabiatshunoslik va uni o‘qitish metodikasi bo‘lg‘usi boshlang‘ich sinf o‘qituvchilariga tarbiyalovchi taiim tizimini tushunib olish, tabiatshunoslikni o‘qitish asoslarini, uning uchun xos bo‘lgan shakl, metod va uslublarini, o‘quvchilaming bilish faoliyatlariga rahbarlik qilishni o‘rganib olishlariga yordam qilish kabi amaliy masalalarini o‘z ichadi.", "Amaliy fanlarda empirik kuzatishlar orqali inson tafakkuri doirasidagi bilimlarni o‘rganish, aniq xulosalar chiqarish va ilmiy xulosalardan insonlarning ijtimoiy turmush tarzini yaxshilash yo‘lida foydalanish.", "Yashab turgan dunyomizda voqelik to‘g‘risidagi amaliy bilimlamiбo‘rganish, ushbu voqelikni kuzatish va, bu jarayonda olingan natijalarni ilmiy jihatdan bir tizimga solishdan iborat."],
    correctAnswer: "Yashab turgan dunyomizda voqelik to‘g‘risidagi amaliy bilimlamiбo‘rganish, ushbu voqelikni kuzatish va, bu jarayonda olingan natijalarni ilmiy jihatdan bir tizimga solishdan iborat."
  },
  {
    question: "Jonsiz tabiatga kiruvchi jism va narsalarni toping.",
    options: ["yer,quyosh,yulduzlar,suv, baliq", "odam,xayvon,toshlar", "yulduzlar,suv,havo,tosh,tuproq, quyon", "yer,quyosh,yulduzlar,suv,havo,tosh,tuproq."],
    correctAnswer: "yer,quyosh,yulduzlar,suv,havo,tosh,tuproq."
  },
  {
    question: "Jonli tabiatga kiruvchi jism va narsalarni toping.",
    options: ["odamlar, qumlar, toshlar", "mikroarganizm,odamlar, qumlar", "o’simlik,hayvonlar,mikroarganizm, toshlar", "o’simlik,hayvonlar,mikroarganizm,odamlar."],
    correctAnswer: "mikroarganizm,odamlar, qumlar"
  },
  {
    question: "Jonsiz tabiat o‘ziga xos xususiyati bu...",
    options: ["ular o’sish va rivolanish xususiyatiga ega", "jonsiz tabiat deyilishiga sabab, ular oziqlanmaydi, o’smaydi,ko’paymaydi, rivojlanmaydi, Masalan toshni olsak, unga suv ham havo ham kerak emas.", "ular o’sadi oziqlanmaydi", "jonsiz tabiat bir turdan boshqa turga almashina oladi"],
    correctAnswer: "ular o’sish va rivolanish xususiyatiga ega"
  },
  {
    question: "Jonli tabiat o‘ziga xos xususiyati bu...",
    options: ["jonli tabiatga kiruvchi esa oziqlanadilar nafas oladilar o’sadilar,ko’payadilar,.jonli tabiat vakillari o’simlik va ozuqa bo’lmasa yashay olmaydilar.", "jonli tabiat deyilishiga sabab,ular oziqlanmaydi, o’smaydi, ko’paymaydi, rivojlanmaydi, Masalan toshni olsak,unga suv ham havo ham kerak emas", "d)o’ziga xos xusisiyati ko’p oziqlanadi,ko’paymaydi,rivojlanadi", "jonli tabiat bir turdan boshqa turga almashina oladi"],
    correctAnswer: "jonli tabiat bir turdan boshqa turga almashina oladi"
  },
  {
    question: "Ushbu fikr muallifi kim 'Biling-ki, daryoning ko‘zlari yoshlansa uning boshiga g‘am, kulfat tushgan bo‘ladi. Odamlar, daryodan mehringizni darig‘ tutmanglar'.",
    options: ["Al Buxoriy", "Al Xorazmiy", "Al Beruniy", "Muhammad al Xorazmiy."],
    correctAnswer: "Al Buxoriy"
  },
  {
    question: "Sharqda yozilgan 'Kitab surat al-arz' ('Yer tasviri') asar muallifi kim",
    options: ["Muhammad alXorazmiy.", "Abu Nasr Farobiy", "Al Beruniy", "At Termiziy"],
    correctAnswer: "Al Beruniy"
  },
  {
    question: "“Kitab surat al-arz' ('Yer tasviri') kitobida asosan qanday ma’lumotlar yoritilgan",
    options: ["hayvonat olam va ularning organizm", "dorivor o’simliklar haqida, madanlardan murakkab dorilar tayyorlash haqida ma’lumotlar berilgan", "637ta noyob tabiiy joylar 209 ta tog’ning geagrafik tafsilotini bergan.Shuningdek asar butun qit’alar ,okeanlar, qutblar,ekvator saxrolar,ko’llar, o’rmonlar, turli mamlakat o’lkalar u yerdagi hayvonoy,o’simlik dunyosi va boshqa tabiiy resurslar haqidagi ma’lumotlarni o’z ichiga oladi", "odam organizmida uchraydigan kasalliklar va ularni davolash"],
    correctAnswer: "odam organizmida uchraydigan kasalliklar va ularni davolash"
  },
  {
    question: "'Saydana', 'Mineralogiya', 'Qadimgi avlodlardan qolgan yodgorliklar', 'Hindiston', 'Geodeziya' kabi asarlar muallifi qaysi mutaffakir bo‘lgan",
    options: ["Ibn Sino", "Muhammad al Xorazmiy", "Abu Nasr Farobiy", "Abu Rayxon Beruniy"],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Beruniy qaysi asarida qushlarning tarqalishi, tashqi ko‘rinishi, xususiyatlariga batafsil to‘xtab o‘tilgan",
    options: ["Hindiston", "Xitoy", "Geodeziya", "Avstraliya"],
    correctAnswer: "Hindiston"
  },
  {
    question: "“Yer yuzida chang va tutun bo‘lmasa, inson ming yil yashar edi' degan iboraning muallifi kim",
    options: ["Abu Ali Ibn Sino", "Muhammad al Xorazmiy", "Yusuf xos Xojib “Qutadg’u bilib”", "Abu Rayxon Beruniy"],
    correctAnswer: "Muhammad al Xorazmiy"
  },
  {
    question: "Kasallikni davoloshda “suvni tozalashga oid tavsiyalar” qaysi alloma tomonidan bayon etilgan",
    options: ["Abu Rayxon Beruniy", "Abu Ali Ibn Sino", "Abu Nosir Farobiy", "Muhammad al Xorazmiy"],
    correctAnswer: "Abu Nosir Farobiy"
  },
  {
    question: "Yerlarni o‘zlashtirishda 'Birinchi yili undan hech narsa olmasinlar, ikkinchi yili raiyat o‘z roziligi bilan berganni olsinlar, uchinchi yili esa qonun-qoidaga muvofiq xiroj yig‘ilsin“ deb aytilgan g‘oya muallifi kim va asari nomi.",
    options: ["Al Beruniy “Kobul devoni”", "Abu Ali Ibn Sino “Hindiston”", "Soxibqiron Amir Temur “Temur tuziklari”.", "Yusuf xos Xojib “Qutadg’u bilib”"],
    correctAnswer: "Yusuf xos Xojib “Qutadg’u bilib”"
  },
  {
    question: "Qaysi alloma o‘z qarashlarida “suvni isrof qilish – nonni isrof qilishdek gunoh ekanligini, hovuz, quduq, sardoba suvini toza saqlash hamma uchun ham savob, ham farz ekanligini” tushuntirilgan",
    options: ["Al Xorzmiy", "Ibn Sino", "Al Beruniy", "Alisher navoiy."],
    correctAnswer: "Al Beruniy"
  },
  {
    question: "“Fuqorlalar atrof-tabiiy muhitga ehtiyotkorna munosabatda bo‘lishga majburdirlar” O‘zbekiston Respublikasi Konstutitsiyasining qaysi bob va moddasida aytilgan",
    options: ["III-bob 8-modda", "VI-bob 7-modda", "XI -bob 50 modda.", "V-bob 6-modda"],
    correctAnswer: "V-bob 6-modda"
  },
  {
    question: "'Boburnoma'da tabiat haqida nimalar ko‘proq bayon etilgan",
    options: ["Qushlar haqida ma’lumotlar keltirilgan", "Unda madanlar va dorivor giyohlar haqida ma’lumotlar keltirilgan", "Hayvonlarning emigratsiyasi haqida qaydlar mavjud", "Unda yer, suv, havo turli tabiiy hodisalarga tegishli xalq so'zlari ko'plab topiladi. o'lkamiz tarixi, geografiyasi, tabiati, etnografiyasi, madaniyati to'g'risidagi."],
    correctAnswer: "Qushlar haqida ma’lumotlar keltirilgan"
  },
  {
    question: "Quyoshning diametri Yernikidan necha marta katta",
    options: ["109 marta.", "120 martta", "50 martta", "100 martta"],
    correctAnswer: "50 martta"
  },
  {
    question: "Quyosh o‘z o‘qi atrofida sekin-asta muntazam ravishda qaysi tomonga qarab aylanadi",
    options: ["g’arbdan janubga", "shimoldan janubga", "sharqdan g’arbga.", "jabundan sharqqa"],
    correctAnswer: "shimoldan janubga"
  },
  {
    question: "Quyosh o‘z o‘qi atrofida o‘rtacha xisobda nechi sutkada bir marta aylanadi",
    options: ["15 sutkada", "27 sutkada.", "20 sutkada", "19 sutkada"],
    correctAnswer: "20 sutkada"
  },
  {
    question: "Quyosh asosan qaysi moddalardan tashkil topgan",
    options: ["azot, natriy", "kaliy natriy", "vodorod, geliy.", "magniy, rux"],
    correctAnswer: "kaliy natriy"
  },
  {
    question: "Quyosh - Quyosh sistemasining necha % tashkil qiladi",
    options: ["81,8%", "99,86%.", "36.6%", "78.8%"],
    correctAnswer: "99,86%."
  },
  {
    question: "Quyosh nuri yerga qancha vaqtda yetib keladi",
    options: ["9-minut 18-sekund", "8-minut 18-sekund.", "10-minut 18-sekunt", "7-minut 19-sekund"],
    correctAnswer: "10-minut 18-sekunt"
  },
  {
    question: "Quyosh tarkibida necha foiz vodrod va geliy mavjud",
    options: ["azot 15%, natriy 61%", "geliy 45%, azot 10%", "vadarod 54%, geliy 45%.", "magniy 86% , rux 92%"],
    correctAnswer: "magniy 86% , rux 92%"
  },
  {
    question: "Quyosh atmosferasi qaysi qatlamalardan iborat",
    options: ["quyosh toji", "fotosfera", "xromosfera, quyosh toji", "fotosfera, xromosfera, quyosh toji."],
    correctAnswer: "fotosfera, xromosfera, quyosh toji."
  },
  {
    question: "Galaktika tushunchasi qaysi javobda to‘g‘ri ko‘rsatilgan",
    options: ["yulduzlararo fazodan iborat sistemadir.", "oy yulduzlardan iborat fazodan iborat sistema", "oy sistemasidan va 150 mlrd yulduz hamda yulduzlararo fazodan iborat sistemadir.", "quyosh sistemasidan va 150 mlrd yulduz hamda yulduzlararo fazodan iborat sistemadir,"],
    correctAnswer: "oy yulduzlardan iborat fazodan iborat sistema"
  },
  {
    question: "Quyosh sistemasidagi sayyoralar ikki guruxga bo‘linadi",
    options: ["ustki va ostki", "ichki va tashqi.", "katta va kichik", "oldi va yoni"],
    correctAnswer: "ustki va ostki"
  },
  {
    question: "Ichki guruh sayyoralarga qaysi sayyoralar kiradi",
    options: ["merkuriy,venera, yer mars.", "mars, neptun,oy", "neptun,yer, venera", "yer, uran, platon"],
    correctAnswer: "mars, neptun,oy"
  },
  {
    question: "Quyoshdan Yergacha bo‘lgan masofa o‘rta hisobda qancha",
    options: ["150 mln.km", "149,6 mln.km.", "123,6 mln.km", "113,9 mln.km"],
    correctAnswer: "149,6 mln.km."
  },
  {
    question: "Yer Quyosh sistemasidagi qanday sayyora",
    options: ["suv mavjud bo’lmagan sayyora", "organik hayot mavjud bo’lgan sayyora.", "hayot mavjud bo’lgan sayyora", "havo mavjud bo’magan sayyora"],
    correctAnswer: "suv mavjud bo’lmagan sayyora"
  },
  {
    question: "Yerning geosferalari qaysi javobda ko‘rsatilgan",
    options: ["havo qatlami-atmasfera, suv qatlami-gidrosfera, qattiq qatlam-litosfera.", "suv qatlami-gidrosfera, qattiq qatlam-litosfera", "yerning tirik organizmlari", "troposfera-xavo qatlami, suv qatlami-gidrosfera, qattiq qatlam-litosfera"],
    correctAnswer: "troposfera-xavo qatlami, suv qatlami-gidrosfera, qattiq qatlam-litosfera"
  },
  {
    question: "Biosfera yerning qanday qobig‘i",
    options: ["azon qatlami qobig’i", "suv qobig’i", "litosfera sirtqi qobig’i", "hayot qobig’i."],
    correctAnswer: "hayot qobig’i."
  },
  {
    question: "Quyosh markazida tempuratura necha darajada bo‘ladi",
    options: ["40 mln", "50 mln", "20 mln", "20mln."],
    correctAnswer: "20 mln"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishi 1 bosqichi qaysi davrlarni o‘z ichiga oladi",
    options: ["2-bosqich eramizgacha bo`lgan 5-6 asrlargacha", "3-bosqich eramizgacha bo`lgan 4-6 asrlargacha", "1-bosqich eramizgacha bo`lgan 8-6 asrlargacha", "2-bosqich eramizgacha bo’lgan 8-5 asrgacha"],
    correctAnswer: "2-bosqich eramizgacha bo’lgan 8-5 asrgacha"
  },
  {
    question: "Qadimgi grek olimlaridan kimlar dunyoning atomlardan tuzilganligi haqida farazni bildirishdi",
    options: ["Aristotel, Gippokrat", "Distervega,Gippokrat", "Gippokrat, Kongle", "Demakrit, Epikyur"],
    correctAnswer: "Demakrit, Epikyur"
  },
  {
    question: "Qadimgi grek olimdan kim ushbu fikrni aytgan “Sababsiz hech narcha hosil bo‘lmasligini va hech narsa izsiz yo‘qolib ketmaydi”.",
    options: ["Empedokl", "Aristotel", "Gippokrat", "Demakrit"],
    correctAnswer: "Gippokrat"
  },
  {
    question: "Qaysi grek olimi anatomiya, botanika, sistematika va hayvonlar embriologiyasini ilmiy asosladi",
    options: ["Demakrit", "Gippokrat", "Aristotel", "Empedokl"],
    correctAnswer: "Empedokl"
  },
  {
    question: "Qaysi grek olimi yerning dumaloqligini isbotlaydigan geografik karta tuzdi",
    options: ["Gippokrat", "Empedokl", "Aristotel", "Ptolomey"],
    correctAnswer: "Empedokl"
  },
  {
    question: "Qaysi grek olimi yerdan Oygacha bo‘lgan masofani o‘lchadi",
    options: ["Ptolomey", "Giparx", "Aristotel", "Empedokl"],
    correctAnswer: "Ptolomey"
  },
  {
    question: "Qadimgi grek olimlaridan Pifagor va Eratosfen tabiatshunoslik bo‘yicha kashfiyotlaridan nimalarni aniqladi",
    options: ["Pifagor dunyoning sharsimon ekanligini, Eratosfen esa yerning radiusini aniqladi", "Aristotel g’arb va sharqning tomonlarini belgiladi", "Eratosfen esa yerning radiusini aniqladi", "Empedokl janubiy va shimoliy tomonini aniqladi"],
    correctAnswer: "Eratosfen esa yerning radiusini aniqladi"
  },
  {
    question: "M.Ulug‘bek davrida qaysi tabbiy fan rivojlandi",
    options: ["Gistalogiya", "Giodeziya", "Astronomiya", "Xronologiya"],
    correctAnswer: "Gistalogiya"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishi 3-bosqichi qaysi davrlarni o‘z ichiga oladi",
    options: ["8-12 asr", "5-7 asr", "4-6 asr", "9-11 asr"],
    correctAnswer: "8-12 asr"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishining qaysi bosqichda “tabiatni o‘rganuvchilar” atamasi kirib keldi",
    options: ["2 bosqich 14-16 asrlar", "5 bosqich 16-15 asrlar", "4 bosqich 15-18 asrlar", "3 bosqich 19-20 asrlar"],
    correctAnswer: "3 bosqich 19-20 asrlar"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishining qaysi bosqichida hujayra kashf qilindi",
    options: ["3 bosqich 10-14 asrlar", "5 bosqich 19 asr", "5 bosqich 16-15 asrlar", "4 bosqich 15-18 asrlar"],
    correctAnswer: "5 bosqich 19 asr"
  },
  {
    question: "Biotexnologiya, sinergitika, kibernetika kabi fanlar «Tabiatshunoslik» fani rivojlanishining qaysi bosqichiga to‘g‘ri keladi",
    options: ["6-bosqich", "4-bosqich", "5-bosqich", "2-bosqich"],
    correctAnswer: "6-bosqich"
  },
  {
    question: "Yer shari o‘z o‘qi atrofida qaysi tomonga aylanadi",
    options: ["G’arbdan sharqqa", "Janubdan shimolga", "Janubdan sharqqa", "Shimoldan janubga"],
    correctAnswer: "G’arbdan sharqqa"
  },
  {
    question: "Sutka deb nimaga aytiladi",
    options: ["Yerning o’z o’qi atrofida aylanib chiqish vaqti", "Yerning gorizontal xarakati", "Vaqtning qaytmas xususiyati", "Yerning aylanma harakati"],
    correctAnswer: "Yerning o’z o’qi atrofida aylanib chiqish vaqti"
  },
  {
    question: "Yer o‘z o‘qi atrofida qancha vaqtda bir marta to‘liq aylanib chiqadi",
    options: ["14 soat 30 minut 6 sekunt", "21 soat 36 minut 8 sekund", "23 soat 56 minut 4 sekund", "13 soat 51 minut 9 sekund"],
    correctAnswer: "23 soat 56 minut 4 sekund"
  },
  {
    question: "Yer aylanishining burchak hisobidagi tezligi bir soat vaqt ichida necha gradusga siljiydi",
    options: ["15 gradus", "25 gradus", "11 gradus", "23 gradus"],
    correctAnswer: "15 gradus"
  },
  {
    question: "Yer sharida qaysi qutblar bor",
    options: ["Shimoldan janubga", "G’arbiy va sharqiy", "Janubdan sharqqa", "shimoliy va janubiy"],
    correctAnswer: "shimoliy va janubiy"
  },
  {
    question: "Meridian chiziqlar deb nimaga aytiladi",
    options: ["ikki qutbning birlashmaydigan chizig’i", "Ikki qutbni birlashtiruvchi chiziqlar", "ikki qutbning parallel chizig’i", "ikki qutbning ajraladigan chizig’i"],
    correctAnswer: "Ikki qutbni birlashtiruvchi chiziqlar"
  },
  {
    question: "Yer Quyosh atrofida qancha tezlikda aylanadi",
    options: ["450 mln.km", "730 mln.km", "330 mln.km", "930 mln.km"],
    correctAnswer: "930 mln.km"
  },
  {
    question: "Yerning quyosh atrofida aylanishi xar yili qancha vaqt xato hisoblanadi",
    options: ["21 minut 16 sekund", "11 minut 14 sekund", "21 minut 53 sekund", "19 minut 64 sekund"],
    correctAnswer: "21 minut 53 sekund"
  },
  {
    question: "Yer quyosh atrofida aylanayotganda o‘z orbita tekisligiga qancha og‘ishgan",
    options: ["44-22-15 gradus.", "66-88-15 gradus .", "55-33-15 gradus .", "66-33-15 gradus ."],
    correctAnswer: "66-33-15 gradus ."
  },
  {
    question: "Oy Yer atrofida qaysi tomonga qarab aylanadi",
    options: ["G’arbdan sharqqa", "Janubdan sharqqa", "Sharqdan shimolga", "Shimoldan janubga"],
    correctAnswer: "G’arbdan sharqqa"
  },
  {
    question: "Quyosh sistemasidagi yirik osmon jismlari nima deb deb ataladi",
    options: ["yulduzlar", "oy", "sayyoralar", "sun’iy yo’ldoshlar"],
    correctAnswer: "sayyoralar"
  },
  {
    question: "Sayyoralar atrofida doimiy aylanib turadigan osmon jismlari nima deb ataladi",
    options: ["yulduzlar", "sun’iy yo’ldoshlar", "sayyoralar", "tabiiy yo’ldoshlar"],
    correctAnswer: "tabiiy yo’ldoshlar"
  },
  {
    question: "Yer sharining kichiraytirilgan tasviri ya’ni modeli nima deb ataladi",
    options: ["quyosh", "yulduz", "rebus", "globus"],
    correctAnswer: "globus"
  },
  {
    question: "Yer yadro markazida xarorat necha ming gradusni tashkil qiladi",
    options: ["500 C", "6000 C", "9000 C", "7000 C"],
    correctAnswer: "6000 C"
  },
  {
    question: "Yer sharning yadrosi asososan qaysi moddalardan tashkil topagan",
    options: ["Rux, mis", "Temir,nikel", "Uran, temir", "Temir, uran"],
    correctAnswer: "Temir,nikel"
  },
  {
    question: "Yer yuzidagi har bir nuqtaning kenglik va uzunligi nima deb ataladi",
    options: ["geografik koordinatasi", "biologic balansi", "geometrik balansi", "biologic nuqtasi"],
    correctAnswer: "geografik koordinatasi"
  },
  {
    question: "To‘rt fasl ham o‘z vaqtida bo‘ladigan iqlim mintaqasi bu..",
    options: ["Issiq iqlim", "Kontinental iqlim", "Mo’tadil iqlim", "sovuq iqlim"],
    correctAnswer: "Mo’tadil iqlim"
  },
  {
    question: "Quyosh sistemasida Yer sayyorasi nechanchi o‘rnida turadi",
    options: ["6 o’rinda", "3 o’rinda", "5 o’rinda", "4o’rinda"],
    correctAnswer: "3 o’rinda"
  },
  {
    question: "To‘rt yilda bir marta sodir bo‘ladigan xolat bu",
    options: ["kabisa yili", "odatiy yil", "oddiy yil", "xitoy yili"],
    correctAnswer: "kabisa yili"
  },
  {
    question: "Golfstrim oqimi qaysi okeanda vujudga keladi",
    options: ["Xitoy", "Atlantika", "Afrika", "Amerika"],
    correctAnswer: "Atlantika"
  },
  {
    question: "Sariq, Yapon, Sharqiy Xitoy dengizlari qaysi okeanga tegishli",
    options: ["Avstraliya okeani", "Hind okeani", "Afrika okean", "Tinch okean"],
    correctAnswer: "Tinch okean"
  },
  {
    question: "Seysmik mintaqa deb nimaga aytiladi",
    options: ["Litosfera plitalari doimo harakatda,ular bir-biri bilan o’zaro to’qnashib turadi", "2 ta litosfera plitasi to’qnashgan joylarda tez-tez vulkan va zilzilalar bo’ladi.", "Yer po’sti juda ulkan palaxsalardan ya’ni litosfera plitalaridan iborat.Bu litosfera plitalari doimo harakatda,ular bir-biri bilan o’zaro to’qnashib turadi. 2 ta litosfera plitasi to’qnashgan joylarda tez-tez vulkan va zilzilalar bo’ladi.", "Suv toshqini ko’p bo’ladigan hudud"],
    correctAnswer: "Yer po’sti juda ulkan palaxsalardan ya’ni litosfera plitalaridan iborat.Bu litosfera plitalari doimo harakatda,ular bir-biri bilan o’zaro to’qnashib turadi. 2 ta litosfera plitasi to’qnashgan joylarda tez-tez vulkan va zilzilalar bo’ladi."
  },
  {
    question: "Relef so‘zining lug‘aviy ma’nosi toping",
    options: ["( yunoncha,relief,lot.relevo) ko’taraman", "( lotincha,relief,lot.relevo) ko’taraman", "( frans,relief,lot.relevo) ko’taraman", "( inglizcha,relief,lot.relevo) ko’taraman"],
    correctAnswer: "( frans,relief,lot.relevo) ko’taraman"
  },
  {
    question: "Tekislikning yuzasi dengiz sathidan balandligi 200 m gacha bo‘lsa qanday nom bilan ataladi",
    options: ["Yaylov", "Dala", "Past tekislik", "Chuqurlik"],
    correctAnswer: "Past tekislik"
  },
  {
    question: "Dengiz sathidan 200 m dan 500 m gacha bo‘lgan relef shakilga qaysi relef shakli kiradi",
    options: ["dala", "Tog’", "Qir", "Yaylov"],
    correctAnswer: "Qir"
  },
  {
    question: "Dengiz sathidan 500 m dan yuqori bo‘lgan relef shakilga qaysi relef shakli kiradi",
    options: ["Yassitog’lik", "Past tekislik", "Yaylov", "Dala"],
    correctAnswer: "Yassitog’lik"
  },
  {
    question: "Qatorosiga tizilib ketgan tutash tog‘lar nima deb ataladi",
    options: ["Past tekislik", "tog’ tizmasi", "Yassitog’lik", "Dala"],
    correctAnswer: "tog’ tizmasi"
  },
  {
    question: "Zilzilaning 1 ball xolati qanday bo‘ladi",
    options: ["Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin", "Yer tebranishini sezgir asboblar sezadi", "Kuchli tebranish holati", "Juda kuchsiz,tinch turgan kishilar ba’zan biladi."],
    correctAnswer: "Yer tebranishini sezgir asboblar sezadi"
  },
  {
    question: "Zilzilaning 2 ball xolati qanday bo‘ladi",
    options: ["Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin", "Juda kuchsiz,tinch turgan kishilar ba’zan biladi.", "Yer tebranishini sezgir asboblar sezadi", "Kuchli kishilar sezadi"],
    correctAnswer: "Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin"
  },
  {
    question: "Zilzilaning 3 ball xolati qanday bo‘ladi",
    options: ["Yer tebranishini sezgir asboblar sezadi", "Kuchli kishilar sezadi", "Juda kuchsiz,tinch turgan kishilar ba’zan biladi.", "Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin"],
    correctAnswer: "Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin"
  },
  {
    question: "Zilzilaning 4 ball xolati qanday bo‘ladi",
    options: ["Yer tebranishini sezgir asboblar sezadi", "O’rtacha kuchga ega bo’lib,deyarli hamma sezadi. Deraza oynalari,eshik dirillaydi", "Kuchsiz,tinch turgan kishilar ko’pchiligi sezishi mumkin", "Kuchli kishilar sezadi"],
    correctAnswer: "O’rtacha kuchga ega bo’lib,deyarli hamma sezadi. Deraza oynalari,eshik dirillaydi"
  },
  {
    question: "Zilzilaning necha ballisida xom g‘ishtli binolar qulaydi.Pishik g‘isht binolarda yoriqlar paydo bo‘ladi",
    options: ["8 ball", "9 ball", "6 ball", "4 ball"],
    correctAnswer: "8 ball"
  },
  {
    question: "Zilzilaning necha ballisida butun binolar qulaydi",
    options: ["13 ball", "6 ball", "11 ball", "12 ball"],
    correctAnswer: "12 ball"
  },
  {
    question: "Tempuraturaning o‘zgarib turishi oqibatida qanday nurash ro‘y beradi",
    options: ["biologik portlash", "kimyoviy qulash", "fizik nurash", "fizik portlash"],
    correctAnswer: "fizik nurash"
  },
  {
    question: "Tog‘ jinslarni mikroorganizimlar ishi tufayli ko‘proq yemirilish qanday nurash hisoblanadi",
    options: ["kimyoviy nurash", "kimyoviy qulash", "organik nurash", "biologik portlash"],
    correctAnswer: "organik nurash"
  },
  {
    question: "Qaysi tabiiy omil - geomorfologik agent sifatida tog‘ jinslariga ta’sir etib, yemirish, uchrish va yotqizish kabi ishlarni bajaradi",
    options: ["yomg’ir", "quyosh", "qor", "shamol"],
    correctAnswer: "shamol"
  },
  {
    question: "Daryo suvlarning oqimi o‘z o‘zanini yuvish nima deb ataladi",
    options: ["karier", "eroziya", "transfuziya", "korroziya"],
    correctAnswer: "eroziya"
  },
  {
    question: "Daryo suvlari yuvilgan jinslarni oqizib ketish nima deb ataladi",
    options: ["karier", "ransportirovka", "eroziya", "transfuziya"],
    correctAnswer: "ransportirovka"
  },
  {
    question: "Daryo suvlari oqizib kelayotgan jinslarni cho‘ktrib yotqizish nima deb ataladi",
    options: ["ransportirovka", "transportirovka", "eroziya", "akkumulyatsiya"],
    correctAnswer: "akkumulyatsiya"
  },
  {
    question: "Nurash jarayoni- o‘zining xususiyatiga ko‘ra qanday turlarga bo‘linadi",
    options: ["fizik,kimyoviy,organic", "kimyoviy,fizik", "biologic, kimyoviy", "fizik, biologik"],
    correctAnswer: "fizik,kimyoviy,organic"
  },
  {
    question: "Planetamizdagi suv qobig’ini nima deb aytiladi",
    options: ["gidrosfera", "litosfera", "troposfera", "atmosfera"],
    correctAnswer: "gidrosfera"
  },
  {
    question: "Gidrosfera suv hajmining katta qismi qaysi tabiiy ob’ektlarga to‘g‘ri keladi",
    options: ["3mlrd 170 mln.km.kub ocean va dengizlarga", "4 mlrd 142 mln.km.kub ocean va dengizlar", "5 mlrd 390 mln.km.kub ocean va dengizlarga", "1 mlrd 370 mln.km.kub ocean va dengizlarga"],
    correctAnswer: "3mlrd 170 mln.km.kub ocean va dengizlarga"
  },
  {
    question: "Gidrosfera suv hajmining eng kichik qismi qaysi tabiiy ob’ektlarga to‘g‘ri keladi",
    options: ["2.3 ming km.kub daryolarga", "4.1 ming km. kub daryo", "6.1 ming km.kub daryolarga", "1,2 ming km.kub daryolarga"],
    correctAnswer: "2.3 ming km.kub daryolarga"
  },
  {
    question: "Inson tomonidan qazilgan suv yo‘li nima deb ataladi.",
    options: ["ariq", "kanal", "daryo", "soy"],
    correctAnswer: "kanal"
  },
  {
    question: "Tabiatda bir vaqtning ozida qattiq suyuq va gaz (bug`) holida uchraydigan yagona mineral bu...",
    options: ["yomg’ir", "tuproq", "suv", "xavo"],
    correctAnswer: "suv"
  },
  {
    question: "Suv boshqa elementlardan asosan nimasi bilan ajralib turadi",
    options: ["yonish xususiyati(geliy)", "yoqiluvchanlik xususiyati (kislarod)", "uchuvchanlik xususiyati (azot)", "eruvchanlik xususiyati (uglerod kislorod)"],
    correctAnswer: "eruvchanlik xususiyati (uglerod kislorod)"
  },
  {
    question: "Bir qancha miqdordagi suv bug‘ga aylanib, yuqoriga, ko‘tariladi va to‘yinib kondensiyalanib, yog‘in bo‘lib yana yerga tushadi",
    options: ["quyosh nuri ta’sirida, yer yuzasidan har yili 820 ming km suv", "quyosh nuri ta’sirida, yer yuzasidan har yili 610 ming km suv", "oy nuri ta’sirida, yer yuzasidan har yili 120 ming km suv", "quyosh nuri ta’sirida, yer yuzasidan har yili 520 ming km suv"],
    correctAnswer: "quyosh nuri ta’sirida, yer yuzasidan har yili 820 ming km suv"
  },
  {
    question: "Suvning to‘xtovsiz aylanishi natijasida dunyo okeanining suvi qancha vaqtda aylanib yangilanib turadi",
    options: ["2100-5000 yilda bir marta", "2400-8000 yilda bir marta", "2600-3000 yilda bir marta", "2300-7000 yilda bir marta"],
    correctAnswer: "2100-5000 yilda bir marta"
  },
  {
    question: "Suvning to‘xtovsiz aylanishi natijasida Arktika muzliklarining suvi qancha vaqtda aylanib yangilanib turadi",
    options: ["15000 yilda bir marta", "35000 yilda bir marta", "19000 yilda bir marta", "24000 yilda bir marta"],
    correctAnswer: "35000 yilda bir marta"
  },
  {
    question: "Suvning to‘xtovsiz aylanishi natijasida ko‘l suvlarining suvi qancha vaqtda aylanib yangilanib turadi",
    options: ["7 yilda bir marta", "20 yilda bir marta", "5 yilda bir marta", "10 yilda bir marta"],
    correctAnswer: "7 yilda bir marta"
  },
  {
    question: "Suvning to‘xtovsiz aylanishi natijasida daryo suvlarining suvi qancha vaqtda aylanib yangilanib turadi.",
    options: ["13 sutkada", "9 sutkada", "12 sutkada", "15 sutkada"],
    correctAnswer: "15 sutkada"
  },
  {
    question: "18 yoshdan 50 yoshgacha bo‘lgan kishilarning organizmida gavda og‘irligining necha foizi suv tashkil qiladi.",
    options: ["60%", "66%", "61 %", "62%"],
    correctAnswer: "60%"
  },
  {
    question: "Odam organizimida suv miqdorining necha foiz (% ) ga kamayishi esa kishini halok qilishga olib keladi",
    options: ["23-27 %", "20-25%", "20-21%", "22-54%"],
    correctAnswer: "23-27 %"
  },
  {
    question: "Odam organizmi o‘z hayotiy jarayonlarini amalga oshirishi uchun sutkasida o‘rtacha qancha suvni qabul qiladi va uni o‘z to‘qimalaridan o‘tkazib, chiqarib yuboradi",
    options: ["2.6litr", "2.5 litr", "2.3litr", "3.5 litr"],
    correctAnswer: "2.5 litr"
  },
  {
    question: "Inson miyasining o‘rtacha necha foizi suvdan iborat.",
    options: ["90 %", "83 %", "75 %", "89%"],
    correctAnswer: "90 %"
  },
  {
    question: "Inson qonining necha foizi suvdan iborat",
    options: ["83 %", "73%", "82%", "68 %"],
    correctAnswer: "83 %"
  },
  {
    question: "Inson muskulining necha foizi suvdan iborat",
    options: ["76%", "70%", "73%", "75 %"],
    correctAnswer: "76%"
  },
  {
    question: "Inson suyagida necha foiz suv mavjud",
    options: ["22%", "23%", "27%", "29%"],
    correctAnswer: "27%"
  },
  {
    question: "Odam va hayvon organizimida suvning endogen xususiyati bu..",
    options: ["2 qism suvni endogen yo’l bilan o’zi ishlab chiqish.", "1 qism suvni endogen yo’l bilan o’zi ishlab chiqaradi.", "4 qism suvni endogen yo’l bilan o’zi ishlab chiqaradi.", "3 qism suvni endogen yo’l bilan o’zi ishlab chiqish."],
    correctAnswer: "2 qism suvni endogen yo’l bilan o’zi ishlab chiqish."
  },
  {
    question: "Organizmdagi 100 g. yog‘ning parchalanishida qancha suv hosil bo‘ladi",
    options: ["103ml", "104 ml", "107 ml", "109ml"],
    correctAnswer: "107 ml"
  },
  {
    question: "Qaysi mintaqadagi qaysi hayvon endogen suv hisobida yashaydi.",
    options: ["Avstraliya sichqonlari", "Afrika tuyaqushi", "Amerika toshbaqasi", "Italiya mushugi"],
    correctAnswer: "Avstraliya sichqonlari"
  },
  {
    question: "Fotosintez jarayonida suv qanday moddalarga ajraladi.",
    options: ["vodorod & azot", "kislorod & azot", "vodorod & kislorod", "vodorod & xlorid"],
    correctAnswer: "vodorod & kislorod"
  },
  {
    question: "Suvning issiqlik sig‘imini yog‘ochnikidan necha baravar yuqori",
    options: ["5 barobar", "6 barobar", "4barobar", "2 baravar"],
    correctAnswer: "4barobar"
  },
  {
    question: "Suvning issiqlik sig‘imini qumnikidan necha baravar yuqori",
    options: ["4barobar", "3 barobar", "5 baravar", "6 barobar"],
    correctAnswer: "3 barobar"
  },
  {
    question: "Suvning issiqlik sig‘imini temirnikidan necha baravar yuqori",
    options: ["8 barobar", "2 barobar", "10 baravar", "1 barobar"],
    correctAnswer: "10 baravar"
  },
  {
    question: "Suvning issiqlik sig‘imini havonikidan necha baravar yuqori",
    options: ["1000 baravar", "2800 barobar", "3200 baravar", "1 barobar"],
    correctAnswer: "3200 baravar"
  },
  {
    question: "Tabiatda tarqalgan 107 xil kimyoviy elementlarning nechtasida suvda topilgan",
    options: ["54 ta", "62 ta", "56 ta", "60 ta"],
    correctAnswer: "62 ta"
  },
  {
    question: "Og‘iz suvining chuchukligiga sababi nimada.",
    options: ["Narsalarning ta’mini bir-biridan ajratib olish qobiliyatiga ega bo’lish uchun", "Narsalarning ta’mini ikkinchisidan ajratib olish qobiliyatiga ega bo’lish uchun", "Narsalarning ta’mini bir-biridan qo’shilish qobiliyatiga ega bo’lish uchun", "Narsalarning ta’mini bir-biridan ajralish qobiliyatiga ega bo’lish uchun"],
    correctAnswer: "Narsalarning ta’mini bir-biridan ajratib olish qobiliyatiga ega bo’lish uchun"
  },
  {
    question: "Eng sersuv mahsulot bu tarvuzdir. Tarvuzning necha foiz qismi suvdan iborat bo‘ladi.",
    options: ["89%", "87%", "95%", "93 %"],
    correctAnswer: "95%"
  },
  {
    question: "Tabiatda suvning necha turi mavjud.",
    options: ["1250 turi", "1450 turi", "1400 turi", "1330 turi"],
    correctAnswer: "1250 turi"
  },
  {
    question: "Odam tanasidagi suv miqdori 5-8 foizga kamaysa qanday xolat ro‘y beradi",
    options: ["Og’iz quruqshaydi,teri bujmayadi,ong o’tmaslashadi,ko’zga xar hil narsalar ko’rina boshlaydi, hushdan ketadi (10-12 %dan 3-9 % yetsa o’ladi.)", "Og’izquruqshaydi,teri bujmayadi,ong o’tmaslashadi,ko’zga xar hil narsalar ko’rina boshlaydi, hushdan ketadi (11-12 %dan 3-10% yetsa o’ladi.)", "Og’iz quruqshaydi,teri bujmayadi,ong o’tmaslashadi,ko’zga xar hil narsalar ko’rina boshlaydi, hushdan ketadi (10-13 %dan 15-17 % yetsa o’ladi.)", "Og’iz quruqshaydi,teri bujmayadi,ong o’tmaslashadi,ko’zga xar hil narsalar ko’rina boshlaydi, hushdan ketadi (5-8 %dan 14-15 % yetsa o’ladi.)"],
    correctAnswer: "Og’iz quruqshaydi,teri bujmayadi,ong o’tmaslashadi,ko’zga xar hil narsalar ko’rina boshlaydi, hushdan ketadi (10-12 %dan 3-9 % yetsa o’ladi.)"
  },
  {
    question: "Inson a’zosidagi eng sersuv suv qaysi a’zo hisoblanadi.",
    options: ["ko’z", "burun", "og’iz", "quloq"],
    correctAnswer: "ko’z"
  },
  {
    question: "Inson a’zosidagi eng suvi kam a’zo qaysi hisoblanadi.",
    options: ["milk", "ko’zlar", "so’lak", "tishlar"],
    correctAnswer: "tishlar"
  },
  {
    question: "Inson hayoti davomida o‘rtacha qancha suv ichadi",
    options: ["27 tonna", "35 tonna", "24 tonna", "37 tonna"],
    correctAnswer: "37 tonna"
  },
  {
    question: "Dunyoda shunday qo‘l borki, “bu ko‘lning suviga ruchka yoki qalamni botirib bemalol qog‘ozga yozsa ham bo‘ladi. Bu yozuvni esa keyin hech qachon o‘chirib bo‘lmaydi”. Ushbu ko‘l qaysi davlatda.",
    options: ["Misrda", "Amerikada", "Afrikada", "Jazoirda"],
    correctAnswer: "Jazoirda"
  },
  {
    question: "Odam tanasidagi suv miqdori atigi 2 foizga qisqarsa, aqliy imkoniyatlarimiz necha foizga qisqarib ketadi.",
    options: ["25%", "21%", "20 %", "23%"],
    correctAnswer: "25%"
  },
  {
    question: "Bir kub santimetr dengiz suvi tarkibida qanday qancha oqsil bor .",
    options: ["3.6 gr", "4.5 gr", "1.5 gr", "2.5 gr"],
    correctAnswer: "1.5 gr"
  },
  {
    question: "Odam orangizimidagi buyuraklar bir yilda o‘rtacha qancha suvni tozalab o‘tkazadi.",
    options: ["350 litr", "420 litr", "200litr", "700 litr"],
    correctAnswer: "700 litr"
  },
  {
    question: "Quyoshdan kelayotgan nurni aks ettiradigan sovuq jismlar nima deb ataladi.",
    options: ["Sayyoralar (tabiiy yo`ldosh)", "suniy yo’ldosh", "elektron yo’ldosh", "tabiiy yo’ldosh"],
    correctAnswer: "Sayyoralar (tabiiy yo`ldosh)"
  },
  {
    question: "Gorziont so‘zining lug‘ aviy ma’nosi nima deb ataladi.",
    options: ["italyancha yon", "yunoncha tomon", "yunoncha burchak", "inglizcha burchak"],
    correctAnswer: "yunoncha tomon"
  },
  {
    question: "Zilzila o‘chog‘i nima deb ataladi.",
    options: ["epitsentr", "yer g’ovagi", "perisentr", "yer plitasi"],
    correctAnswer: "epitsentr"
  },
  {
    question: "Yerning ichki qismidagi erigan suyuq jisimlar hamda turli gazlarni yoriqlar orqali yeryuzaga otilib chiqishga nima deyiladi.",
    options: ["ko’kmak", "chuqurlik", "botqoqlik", "vulqon"],
    correctAnswer: "vulqon"
  },
  {
    question: "Qaysi modda eng ko‘p issiqlik qabul qiluvchi hisoblanadi.",
    options: ["suv", "olov", "vulqon", "quruqlik"],
    correctAnswer: "suv"
  },
  {
    question: "Quruqlikda suv havzasini hosil qilgan va dengiz bilan bevosita tutashmagan chuqurliklariga nima deb ataladi.",
    options: ["soy", "dengiz", "ko’l", "daryo"],
    correctAnswer: "ko’l"
  },
  {
    question: "Tabiiy chuqurlikda xarakat qiladigan suv oqimiga nima.... deyiladi.",
    options: ["soy", "dengiz", "daryo", "ko’lmak"],
    correctAnswer: "daryo"
  },
  {
    question: "Atmosferada eng ko‘p bo‘ladigan modda..",
    options: ["vodorod", "kaliy", "kislorod", "azot"],
    correctAnswer: "azot"
  },
  {
    question: "Atmosferaning eng pastki qatlami...",
    options: ["atmosfera", "gidrosfera", "litosfesa", "troposfera"],
    correctAnswer: "troposfera"
  },
  {
    question: "Fluger qanday uskuna.",
    options: ["Shamol yo’nalishi va quyiligini aniqlaydigan asbob", "Shamol yo’nalishi va seginligini aniqlaydigan asbob", "Shamol yo’nalishi va suyuqligini aniqlaydigan asbob", "Shamol yo’nalishi va tezligini aniqlaydigan asbob"],
    correctAnswer: "Shamol yo’nalishi va tezligini aniqlaydigan asbob"
  },
  {
    question: "O‘rta Osiyo, Afg‘ oniston, Hindistonning tabiiy geografik joylashishi, o‘simlik va hayvonot dunyosi haqidagi mashhur biografik asar kim tomonidan yozilgan va qanday nomlanadi.",
    options: ["Kobul devoni", "Boburnoma", "Hind devoni", "Hindnoma"],
    correctAnswer: "Boburnoma"
  },
  {
    question: "Quyidagilarning qaysi biri geografik maydonchaga tegishli emas.",
    options: ["xarita", "landshaft", "mikroskop", "globus (mikroskop)"],
    correctAnswer: "mikroskop"
  },
  {
    question: "Integratsiya so`zining ma’nosi nima.",
    options: ["birlashtirish", "o’shish", "ayrish", "kesishtirish"],
    correctAnswer: "birlashtirish"
  },
  {
    question: "Qaysi yulduz joyidan siljimaydi.",
    options: ["oy", "yer", "osmon", "quyosh"],
    correctAnswer: "quyosh"
  },
  {
    question: "Xaritada baland tog‘lar qanday rangda bo‘ladi.",
    options: ["och yashil", "to’q qizil", "toq sariq", "to’q jigarrang"],
    correctAnswer: "to’q jigarrang"
  },
  {
    question: "O‘zbekiston Respublikasining shimoliy qismida qaysi davlat bilan chegardosh",
    options: ["Qirg’iziston", "Turkmaniston", "Tojikiston", "Qozog’iston"],
    correctAnswer: "Qozog’iston"
  },
  {
    question: "O‘zbekiston Respublikasining sharqiy qismida qaysi davlat bilan chegardosh",
    options: ["Turkmaniston", "Qoraqolpog’iston", "O’zbekiston", "Qirg’iziston"],
    correctAnswer: "Qirg’iziston"
  },
  {
    question: "O‘zbekiston Respublikasining janiubiy-g‘arbiy qismida qaysi davlat bilan chegardosh.",
    options: ["Afg’oniston", "Qirg’iziston", "Tojikiston", "Turkmaniston"],
    correctAnswer: "Turkmaniston"
  },
  {
    question: "Samarqand viloyati qaysi viloyatlar bilan chegaradosh",
    options: ["Namangan,Jizzax, Buxaro", "Jizzax, buxoro, Qarshi", "Guliston, Samarqand,Buxor", "Navoiy,Buxoro,Qashqadaryo,Jizzax"],
    correctAnswer: "Navoiy,Buxoro,Qashqadaryo,Jizzax"
  },
  {
    question: "Jizzax viloyati qaysi viloyatlar bilan chegaradosh",
    options: ["Sirdaryo,Samarqand,Navoiy", "Jizzax, Samarqand,Navoiy", "Sirdaryo,Jizzax, Navoiy", "Navoiy,buxoro,Sirdaryo"],
    correctAnswer: "Sirdaryo,Samarqand,Navoiy"
  },
  {
    question: "Namangan viloyati qaysi viloyatlar bilan chegaradosh.",
    options: ["Andijon, Buxaro", "Toshkent vil.Andijon,Farg’ona", "Farg’ona,Namangan, Buxoro", "Andijon Farg’ona, Guliston"],
    correctAnswer: "Toshkent vil.Andijon,Farg’ona"
  },
  {
    question: "Farg‘ona viloyati qaysi viloyatlar bilan chegaradosh.",
    options: ["Andijin farg’ona", "Buxoro, Farg’ona", "Namangan,Andijon", "Buxoro,Andijon"],
    correctAnswer: "Namangan,Andijon"
  },
  {
    question: "Aydarko‘l qaysi viloyatlar xududida joylashgan",
    options: ["Andijon,Farg’ona", "Farg’ona,Namangan", "Navoiy,Andijon", "Navoiy,Jizzax"],
    correctAnswer: "Navoiy,Jizzax"
  },
  {
    question: "O‘zbekistonning janubida qaysi viloyat joylashgan.",
    options: ["Navoiy", "Jizzax", "Surxondaryo", "Buxoro"],
    correctAnswer: "Surxondaryo"
  },
  {
    question: "Afg‘on shamoli qaysi viloyatda sodir bo‘ladi.",
    options: ["Sirdaryo", "Buxoro", "Surxondaryo", "Navoiy"],
    correctAnswer: "Surxondaryo"
  },
  {
    question: "Qo‘qon shamoli qaysi fasilda sodir bo‘ladi.",
    options: ["kuz-qish", "bahor-kuz", "baxor -kuz", "yoz –kuz"],
    correctAnswer: "kuz-qish"
  },
  {
    question: "Bekobod shamoli qancha tezlikda esadi.",
    options: ["17-40 km", "20-40 km", "30-40 km", "15-40 km"],
    correctAnswer: "30-40 km"
  },
  {
    question: "Tog‘-vodiy shamollari kunduzi qaysi tomonga esadi.",
    options: ["tog’dan vodiyga", "janubdan sharqqa", "janubga tog’ga", "vodiydan tog`ga"],
    correctAnswer: "vodiydan tog`ga"
  },
  {
    question: "Tog‘-vodiy shamollari kechasi qaysi tomonga esadi.",
    options: ["shimoldan tog’ga", "janubdan vodiyga", "tog`dan vodiyga", "vodiydan tog’ga"],
    correctAnswer: "tog`dan vodiyga"
  },
  {
    question: "Yozda O‘zbekistonga, qaysi tomondan shamollar esadi",
    options: ["shimoldan vasharqa", "shimoldan va g’arbdan", "g’arbdan va sharqa", "janubdan sharqqa"],
    correctAnswer: "shimoldan va g’arbdan"
  },
  {
    question: "O‘zbekistonda qorning o‘rtacha qalinligi tekislik qismida necha sm gacha bo‘ladi",
    options: ["1-2 sm", "2-3 sm", "1-8 sm", "1-6 sm"],
    correctAnswer: "1-6 sm"
  },
  {
    question: "O‘zbekistonda qor tog‘larda necha kun saqlanib turadi.",
    options: ["75-100 kun", "95-100 kun", "85-100 kun", "90-100 kun"],
    correctAnswer: "85-100 kun"
  },
  {
    question: "O‘zbekistonga yog‘inlar asosan qaysi okeandan keladi.",
    options: ["atlantika", "hind", "shimoliy", "tinch"],
    correctAnswer: "atlantika"
  },
  {
    question: "O‘zbekistonning tekislik qismida bir yilda necha kun yog‘inli bo‘ladi.",
    options: ["35-40 kun", "48-50 kun", "45-50 kun", "43-50 km"],
    correctAnswer: "45-50 kun"
  },
  {
    question: "O‘zbekistonda eng kam yillik yog‘in miqdori qaysi xududlarda yog‘adi",
    options: ["Ustyurt,Norin", "Ustyurt,Norin daryo,Qizikqum", "Qizilqum, Norin daryo,Ustyurt", "Ustyurt, Quyi Amudaryo, Qizilqum"],
    correctAnswer: "Ustyurt, Quyi Amudaryo, Qizilqum"
  },
  {
    question: "O‘zbekistonda qishda — (yanvar) o‘rtacha harorat Toshkentda necha gradus bo‘ladi.",
    options: ["0.7 C", "0.6 C", "0.5C", "0.9 C"],
    correctAnswer: "0.7 C"
  },
  {
    question: "O‘zbekistonda qishda — (yanvar) o‘rtacha harorat Termizda necha gradus bo‘ladi.",
    options: ["15C", "17 C", "19C", "16 C"],
    correctAnswer: "15C"
  },
  {
    question: "O‘zbekistonda yozda eng yuqori harorat Toshkentda necha gradus bo‘ladi.",
    options: ["35 C", "34 C", "44 C", "84 C"],
    correctAnswer: "44 C"
  },
  {
    question: "O‘zbekistonda yozda eng yuqori harorat Termizda necha gradus bo‘ladi .",
    options: ["50 C", "32 C", "46 C", "43 C"],
    correctAnswer: "46 C"
  },
  {
    question: "O‘zbekiston janubida quyosh necha soat nur sochib turadi.",
    options: ["4000-31000soat", "3000-33000 soat", "2000-31000 soat", "3000-3100 soat"],
    correctAnswer: "3000-3100 soat"
  },
  {
    question: "O‘zbekiston shimolida quyosh necha soat nur sochib turadi.",
    options: ["4-5 soat", "2500-2800 soat", "2500-2300 soat", "1-2 soat"],
    correctAnswer: "2500-2800 soat"
  },
  {
    question: "Oyning massasi yernikidan necha marta kam.",
    options: ["80.4 marta", "52.1 marta", "63.1 marta", "81,3 marta"],
    correctAnswer: "80.4 marta"
  },
  {
    question: "Quyosh nuri qaysi faslda tik tushadi .",
    options: ["qishda", "yozda", "kuzda", "baxorda"],
    correctAnswer: "yozda"
  },
  {
    question: "Tabiiy ravishda to‘plangan suv havzasi nima deb ataladi .",
    options: ["hovuz", "ko’l", "daryo", "cho’l"],
    correctAnswer: "ko’l"
  },
  {
    question: "Yer sharining kichraytirilgan model bu…",
    options: ["maket", "materik", "xarita", "globus"],
    correctAnswer: "globus"
  },
  {
    question: "Eng katta sayyora qaysi.",
    options: ["neptun", "yupiter", "merkuriy", "uran"],
    correctAnswer: "yupiter"
  },
  {
    question: "Suv tabiatda necha holatda uchraydi.",
    options: ["1-xil", "5-xil", "4-xil", "3-xil"],
    correctAnswer: "3-xil"
  },
  {
    question: "Cho‘llarda qum yuzasi necha gradusgacha qiziyd",
    options: ["45=85 C", "85=95 C", "35=70 C", "75 =80 C"],
    correctAnswer: "85=95 C"
  },
  {
    question: "Planetamizni o‘rab olgan havo qobig‘iga nima deyiladi.",
    options: ["Gidrosfera", "Biosfera", "Litosfera", "Atmosfera"],
    correctAnswer: "Atmosfera"
  },
  {
    question: "Atmosferaning qalinligi necha ming km ga yetadi.",
    options: ["500 km", "3000 km", "560 km", "400 km"],
    correctAnswer: "3000 km"
  },
  {
    question: "Atmosferaning massasi esa gidrosfera massasidan necha marta kam .",
    options: ["100 marta", "200 marta", "50 marta", "62 marta"],
    correctAnswer: "100 marta"
  },
  {
    question: "Atmosferaning tarkibi necha foiz kislorod mavjud.",
    options: ["20.95%", "23.10%", "20.10%", "19.23%"],
    correctAnswer: "20.95%"
  },
  {
    question: "Atmosferaning tarkibi necha foiz karbonat angidrid mavjud.",
    options: ["0.02 %", "0.05 %", "0.04%", "0.03 %"],
    correctAnswer: "0.03 %"
  },
  {
    question: "Atmosferaning tarkibi necha foiz argon gazi mavjud",
    options: ["0.93%", "0.90%", "0.80%", "0.85%"],
    correctAnswer: "0.93%"
  },
  {
    question: "Yer yuzasida 1 kubometr havoning ogirligi qanchaga to‘g‘ri keladi.",
    options: ["1kg 300 gr", "3kg 200gr", "2kg 300gr", "4 kg 200gr"],
    correctAnswer: "1kg 300 gr"
  },
  {
    question: "Yonuvchi foydali qazilmalarga nimalar kiradi.",
    options: ["Ko’mir ,gaz,neft", "Gaz, ko’mir", "Ko’mir,neft,gaz,torf", "Neft ,gaz"],
    correctAnswer: "Ko’mir,neft,gaz,torf"
  },
  {
    question: "Havoning ma’lum vaqt va joydagi holatiga nima deyiladi",
    options: ["iqlim", "relyef", "ob-havo", "havo aylanishi"],
    correctAnswer: "ob-havo"
  },
  {
    question: "Amudaryoning uzunligi qancha.",
    options: ["2700 km", "2300 km", "2400 km", "2500 km"],
    correctAnswer: "2700 km"
  },
  {
    question: "Sirdaryoning uzunligi qancha .",
    options: ["2212 km", "1122km", "2312km", "2412 km"],
    correctAnswer: "2312km"
  },
  {
    question: "Mamlakatimiz yer maydoni qancha .",
    options: ["225.356km2", "335.256km3", "435.265 km3", "448.978 km2"],
    correctAnswer: "225.356km2"
  },
  {
    question: "Eng kichik sayyora",
    options: ["Neptun", "Merkuriy", "Yupiter", "Uran"],
    correctAnswer: "Merkuriy"
  },
  {
    question: "Havoda yonib, yorug‘ iz qoldiradigan osmon jismi nima deb ataladi.",
    options: ["Quyosh", "Yulduz", "Meteorit", "Oy"],
    correctAnswer: "Meteorit"
  },
  {
    question: "Fevral oyi 29 kunlik bo‘lgan yil nomi nima deyiladi .",
    options: ["oddiy yili", "Takroriy yili", "Kabisa yili", "Murakkab yili"],
    correctAnswer: "Kabisa yili"
  },
  {
    question: "Tabiiy boyliklar necha turga bo‘linadi.",
    options: ["4 ta", "5 ta", "1 ta", "3 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Sardoba suv ombori qaysi viloyatda joylashgan.",
    options: ["nil daryosi", "sirdaryo", "amudaryo", "norin daryo"],
    correctAnswer: "sirdaryo"
  },
  {
    question: "Rangli metallar guruhi to‘g‘ri ko‘rstilgan qatorni toping.",
    options: ["Oltin,kumush,mis,alyuminiy,rux", "Oltin,kumush", "Alyumminiy, rux", "Rux mis"],
    correctAnswer: "Oltin,kumush,mis,alyuminiy,rux"
  },
  {
    question: "Suv necha xil ko’rinishda uchashi mumkin",
    options: ["2 xil", "1 xil", "4 xil", "3 xil"],
    correctAnswer: "3 xil"
  },
  {
    question: "Agar havoda chang va g'ubor, bo'lmaganda edi, inson ming yil umr ko'rgan bo'lar edi», - degan mashhur ibora kimga tegishli?",
    options: ["Termiziy", "Ibn Sino", "Buxoriy", "Al-Xorazmiy"],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Kimning fikricha, inson tabiatdan moddiy xayot manbalarinigina o'zlashtirib olmasdan, balki ruhiy quvvat ham oladi?",
    options: ["Ibn Sino", "Navoiy", "Beruniy", "Termiziy"],
    correctAnswer: "Navoiy"
  },
  {
    question: "Ibn Sino qaysi ijtimoiy-falsafiy asarida tabiatga mehr-muruwatli bo'lgan yoshlami tarbiyalash xaqida fikr yuritgan?",
    options: ["Kitob ul-qulanch", "Kitob bash shifo", "Donishnoma", "Tib qonunlari"],
    correctAnswer: "Donishnoma"
  },
  {
    question: "Ekologiya so'zi qaysi tildan olingan ?",
    options: ["yunoncha", "forscha", "lotincha", "arabcha"],
    correctAnswer: "yunoncha"
  },
  {
    question: "Ma'nosi tirik organizmlaming yashash sharoiti yoki tashqi muhit bilan o'zaro munosabatini biIdiruvchi so'zni toping?",
    options: ["Zoologiya", "Biologiya", "Ekologiya", "Tabiatshunoslik"],
    correctAnswer: "Ekologiya"
  },
  {
    question: "Tabiatshunoslikni o‘qitishda bolalarni har tomonlama tarbiyalashning",
    options: ["Tabiatshunoslik asoslari", "Tabiatshunoslik o‘qitish metodikasi", "Tabiatshunoslikning zamonaviy kontseptsiyasi", "Tabiatshunoslik"],
    correctAnswer: "Tabiatshunoslik o‘qitish metodikasi"
  },
  {
    question: "Tabiatshunoslik darslariga qo‘yiladigan umumiy talablarga qaysila kiradi?",
    options: ["Didaktik, ijtimoiy, umumiy, gigiyenik", "Ta’lim-tarbiyaviy, didaktik, psixologik, gigiyenik", "Gigiyenik, umumiy, ijtimoiy, falsafiy", "Jismoniy, huquiy, umumiy, didaktik"],
    correctAnswer: "Ta’lim-tarbiyaviy, didaktik, psixologik, gigiyenik"
  },
  {
    question: "Tabiatshunoslik o‘qitishda amaliy yoki nazariy maqsadlarga erishish",
    options: ["savol-javob", "muammoli yechim", "muammoli vaziyat", "aqliy hujum"],
    correctAnswer: "muammoli vaziyat"
  },
  {
    question: "Tabiatshunoslikda ko‘rgazmali o‘quv qurollari necha turga bo‘linadi?",
    options: ["sathli, hajmli, tabiiy", "sahifali va hajmli", "sathli va hajmli", "tabiiy jismlar va suratlar"],
    correctAnswer: "sathli, hajmli, tabiiy"
  },
  {
    question: "Jonsiz tabiiy tarqatma materiallarga nimalar kiradi?",
    options: ["O‘simliklar, granit, kvarts", "Loy, qum, osh tuzi, temir, cho‘yan, toshko‘mir", "Hayvonlar, temir, osh tuzi, loy", "Hayvonlar"],
    correctAnswer: "Loy, qum, osh tuzi, temir, cho‘yan, toshko‘mir"
  },
  {
    question: "Plan deganda nimani tushunasiz?",
    options: ["Kichik joyning yuqoridan ko‘rinishining qog‘ozdagi tasviri", "Narsaning yuqoridan ko‘rinishi", "Geografik kartaning o‘lchami", "Geografik kartaning masshtabi"],
    correctAnswer: "Kichik joyning yuqoridan ko‘rinishining qog‘ozdagi tasviri"
  },
  {
    question: "Yer bilan osmonning tutashgan joyi nima",
    options: ["Osmon", "Ufq", "Tog‘lar deyiladi", "Tekisliklar"],
    correctAnswer: "Ufq"
  },
  {
    question: "Ta’lim-tarbiya jarayoni nima?",
    options: ["o‘qituvchining o‘rgatuvchanlik faoliyati bilan o‘quvchilarning o‘qish", "o‘qituvchi va o‘quvchilarning o‘qish faoliyatining uyg‘unlashuvi", "o‘quvchilarning o‘qish faoliyatining faollashishi", "o‘qituvchining o‘rgatuvchanlik faoliyati"],
    correctAnswer: "o‘qituvchi va o‘quvchilarning o‘qish faoliyatining uyg‘unlashuvi"
  },
  {
    question: "Tabiatshunoslik darslarida muammoli vaziyatda masalani hal qilishning",
    options: ["masala shartini yechishdan iborat", "masalani to‘g‘ri anglab olishdan iborat", "masalaga yaqindan yondoshishdan iborat", "masala shartini, uni yechish uchun nima ma’lumligini aniqlashdan"],
    correctAnswer: "masala shartini, uni yechish uchun nima ma’lumligini aniqlashdan"
  },
  {
    question: "Tabiatshunoslik darslarida hikoyaga qo‘yiladigan talablarning ketma- ketligini to‘g‘ri belgilang:",
    options: ["ravonlik, ketma-ketlik, izchillik, taqqoslash, tasvirlash", "tasvirlash, taqqoslash, rovonlik, ketma-ketlik, izchillik", "tasvirlash, taqqoslash, izchillik rovonlik, ketma-ketlik,", "tasvirlash, rovonlik, ketma-ketlik taqqoslash, izchillik"],
    correctAnswer: "ravonlik, ketma-ketlik, izchillik, taqqoslash, tasvirlash"
  },
  {
    question: "Suhbat turlarini to‘g‘ri ko‘rsating:",
    options: ["kirish suhbati, takrorlovchi, bayon qiluvchi, yakunlovchi", "kirish suhbati, bayon qiluvchi, yakunlovchi", "takrorlovchi, bayon qiluvchi, yakunlovchi", "kirish suhbati, takrorlovchi, bayon qiluvchi"],
    correctAnswer: "kirish suhbati, takrorlovchi, bayon qiluvchi, yakunlovchi"
  },
  {
    question: "O‘qitish metodi deganda nimani tushunasiz?",
    options: ["o‘quvchining bilimlarni o‘zlashtirib olishi", "o‘qituvchining bilim berishi va o‘quvchining o‘zlashtirib olishi", "o‘qituvchining bilim berishi", "o‘qituvchining savol berishi va o‘quvchining o‘zlashtirib olishi"],
    correctAnswer: "o‘qituvchining bilim berishi va o‘quvchining o‘zlashtirib olishi"
  },
  {
    question: "O‘qitishning muntazamliligi tamoyili nimani nazarda tutadi?",
    options: ["Mantiqiy tafakkurni rivojlanishi", "Amaliy va mantiqiy tafakkurni rivojlanishi", "Amaliy faoliyatga tayyorlanish", "Bilimni bayon qilishda mayyan tizimga amal qilishdan tashqari"],
    correctAnswer: "Bilimni bayon qilishda mayyan tizimga amal qilishdan tashqari"
  },
  {
    question: "Tabitashunoslik kurslarining izchilligi nima bilan belgilanadi?",
    options: ["Nazariy tabaitshunoslik bilimlarini kuzatish va bilib olishga", "Maktaboldi maydonidagi ish va unumli mehnat bilan bog‘lanishni", "Mehnat ta’limi va ijtiomoiy qoydali mehnatni", "O‘quvchilarning yosh xususiyatlari, tayyorgarligi va rivojlanishi, shuningdek, mazmunga vorislikka rioya qilish zaruratiga qarab o‘quv"],
    correctAnswer: "O‘quvchilarning yosh xususiyatlari, tayyorgarligi va rivojlanishi, shuningdek, mazmunga vorislikka rioya qilish zaruratiga qarab o‘quv"
  },
  {
    question: "Nazariyani amaliyot bilan bog‘lashning ahamiyatini toping?",
    options: ["Amaliy masalalarni hal qilishda nazariyaning ahamiyatini", "Taqqoslash va xulosalash", "Mantiqiy fikrlash", "Xulosalash"],
    correctAnswer: "Amaliy masalalarni hal qilishda nazariyaning ahamiyatini"
  },
  {
    question: "O‘qituvchining sinf bilan olib boradigan ta’lim-tarbiya ishlarini tashkil",
    options: ["sinf", "dars", "sinf dars shakli", "maktab"],
    correctAnswer: "sinf dars shakli"
  },
  {
    question: "O‘quvchilarning jonli tabiat burchagidagi mehnat turlari nimalardan",
    options: ["maktab uchastkasida ishlash, hayvonlarni boqish va toza joyda saqlash", "gullarni sug‘orish va barglarini artish, hayvonlarni boqish va toza", "gullarni sug‘orish va barglarini artish", "hayvonlarni boqish va toza joyda saqlash"],
    correctAnswer: "gullarni sug‘orish va barglarini artish, hayvonlarni boqish va toza"
  },
  {
    question: "Ongliylik tamoyilini oliy shakli",
    options: ["Ijodiy faollik", "Yaxshi o`zlashtirish", "Nutq ravonligi", "Amaliy ko`nikmalarning shakllanganligi"],
    correctAnswer: "Ijodiy faollik"
  },
  {
    question: "Tabiatshunoslik darslarida kuzatish qaysi metodlar guruhiga kiradi?",
    options: ["Tabiatshunoslikning tamoyilaridan biri", "Tabiatshunoslikning ko`rgazmali metodi", "Tabiatshunoslikning og`zaki metodi", "Tabiatshunoslikning amaliy metodi"],
    correctAnswer: "Tabiatshunoslikning ko`rgazmali metodi"
  },
  {
    question: "Tabiatshunoslik va atrofimizdagi olam predmeti qanday fanlarga zamin",
    options: ["Astronomiya , geometriya", "Georgafiya, lingvistika", "Ximiya, algebra", "Botanika, geografiya"],
    correctAnswer: "Botanika, geografiya"
  },
  {
    question: "Jismoniy mehnat nima?",
    options: ["Insonni mehnat qilish faliyati", "Jismoniy harakat", "Insonning tana a’zolari orqali ongli ravishda faoliyat", "Mehnatning hamma turi jismoniy mehnatdir"],
    correctAnswer: "Insonning tana a’zolari orqali ongli ravishda faoliyat"
  },
  {
    question: "Hozirgi zamon savodga о‘rgatish metodining mohiyati nimada?",
    options: ["Bir vaqtning о‘zida va paralell ravishda yozuv hamda о‘qish malakalari shakllantiriladi", "Tovush taxlili va sintezi shakllantiriladi", "Avval о‘qishga, sо‘ngra yozishga о‘rgatiladi", "Fonematik idrok rivojlantiriladi"],
    correctAnswer: "Bir vaqtning о‘zida va paralell ravishda yozuv hamda о‘qish malakalari shakllantiriladi"
  },
  {
    question: "Quyosh sistemasidagi sayyoralar qanday guruxga bo‘linadi",
    options: ["katta va kichik", "oldi va yoni", "ichki va tashqi.", "ustki va ostki"],
    correctAnswer: "ichki va tashqi."
  },
  {
    question: "ichki guruh sayyoralar qatorini toping",
    options: ["merkuriy,venera, yer mars.", "yer, uran, platon", "mars, neptun,oy", "neptun,yer, venera"],
    correctAnswer: "merkuriy,venera, yer mars."
  },
  {
    question: "Yer Quyosh sistemasidagi qanday sayyora hisoblanadi?",
    options: ["suv mavjud bo’lmagan sayyora", "hayot mavjud bo’lgan sayyora", "havo mavjud bo’magan sayyora", "organik hayot mavjud bo’lgan sayyora."],
    correctAnswer: "organik hayot mavjud bo’lgan sayyora."
  },
  {
    question: "Yerning geosferalari to’g’ri ko‘rsatilgan javobni aniqlang.",
    options: ["yerning tirik organizmlari", "troposfera-xavo qatlami, suv qatlami-gidrosfera, qattiq qatlam-litosfera", "havo qatlami-atmasfera, suv qatlami-gidrosfera, qattiq qatlam-litosfera.", "suv qatlami-gidrosfera, qattiq qatlam-litosfera"],
    correctAnswer: "havo qatlami-atmasfera, suv qatlami-gidrosfera, qattiq qatlam-litosfera."
  },
  {
    question: "yerning Biosfera qatlami qanday qobig‘i",
    options: ["litosfera sirtqi qobig’i", "azon qatlami qobig’i", "suv qobig’i", "hayot qobig’i."],
    correctAnswer: "hayot qobig’i."
  },
  {
    question: "«Tabiatshunoslik» fanining rivojlanishini 1 bosqichi qaysi davrlarni o‘z ichiga oladi",
    options: ["2-bosqich eramizgacha bo’lgan 8-5 asrgacha", "2-bosqich eramizgacha bo`lgan 5-6 asrlargacha", "1-bosqich eramizgacha bo`lgan 8-6 asrlargacha", "3-bosqich eramizgacha bo`lgan 4-6 asrlargacha"],
    correctAnswer: "1-bosqich eramizgacha bo`lgan 8-6 asrlargacha"
  },
  {
    question: "Qaysi grek olimlaridan dunyoning atomlardan tuzilganligi haqida farazni bildirishdi",
    options: ["Distervega,Gippokrat", "Aristotel, Gippokrat", "Demakrit,Epikyur", "Gippokrat, Kongle"],
    correctAnswer: "Demakrit,Epikyur"
  },
  {
    question: "kim ushbu fikrni aytgan “Sababsiz hech narcha hosil bo‘lmasligini va hech narsa izsiz yo‘qolib ketmaydi”.",
    options: ["Aristotel", "Demakrit", "Empedokl", "Gippokrat"],
    correctAnswer: "Demakrit"
  }
];


// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

// YANGI: Savollar indeksi ro'yxati
let availableQuestionIndices = []; 
let currentQuestionObject = null;

let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ===== YANGI: SAVOLLAR HAVZASI (POOL) FUNKSIYALARI =====
function initQuestionPool() {
    // Statistikani tiklash
    const savedStats = localStorage.getItem(STATS_KEY);
    if (savedStats) {
        const stats = JSON.parse(savedStats);
        totalAttempts = stats.totalAttempts || 0;
        correctCount = stats.correctCount || 0;
    }

    const savedPool = localStorage.getItem(QUESTION_POOL_KEY);
    
    if (savedPool) {
        availableQuestionIndices = JSON.parse(savedPool);
    }

    // Agar xotira bo'sh bo'lsa yoki savollar tugagan bo'lsa -> Yangidan to'ldiramiz
    if (!availableQuestionIndices || availableQuestionIndices.length === 0) {
        // Indekslar ro'yxatini tuzamiz [0, 1, 2, ... 449]
        availableQuestionIndices = Array.from(questionsData.keys());
        
        // Xotiraga saqlaymiz
        savePoolProgress();
    }
}

function savePoolProgress() {
    localStorage.setItem(QUESTION_POOL_KEY, JSON.stringify(availableQuestionIndices));
    localStorage.setItem(STATS_KEY, JSON.stringify({ totalAttempts, correctCount }));
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

    // Savollar ro'yxatini tekshirish
    if (availableQuestionIndices.length === 0) {
        initQuestionPool(); // Tugagan bo'lsa qayta yuklaydi
    }

    // Navbatdagi savol indeksini olamiz (hali o'chirmaymiz)
    const questionIndex = availableQuestionIndices[0]; 
    
    // Agar savollar bazasi bo'sh bo'lsa yoki xato bo'lsa
    if (questionIndex === undefined || !questionsData[questionIndex]) {
        quizContainer.innerHTML = '<p>Savollar yuklanmadi. Iltimos sahifani yangilang.</p>';
        return;
    }

    currentQuestionObject = questionsData[questionIndex];
    const q = currentQuestionObject;
    
    // Savol blokini yaratish
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    // Statistika (Nechanchi savol ekanligi)
    const questionNumber = questionsData.length - availableQuestionIndices.length + 1;
    const infoText = document.createElement('small');
    infoText.style.color = '#666';
    infoText.style.display = 'block';
    infoText.style.marginBottom = '5px';
    infoText.textContent = `(Umumiy baza: ${questionNumber} / ${questionsData.length})`;
    questionBlock.appendChild(infoText);

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${questionNumber}-savol. ${q.question}`;
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
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = '✅ To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                label.classList.add('selected-wrong');

                // To'g'ri javobni topib ko'k fon bilan belgilash
                allLabels.forEach(lbl => {
                    if (lbl.textContent === q.correctAnswer) {
                        lbl.classList.add('selected-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = '❌ Xato!';
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
    // YANGI: Ishlatilgan savolni ro'yxatdan o'chiramiz
    if (availableQuestionIndices.length > 0) {
        availableQuestionIndices.shift(); // Birinchi elementni olib tashlash
        savePoolProgress(); // O'zgarishni saqlash
    }

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
    
    // Blok statistikasini tiklash (lekin umumiy test davom etadi)
    blockCorrectCount = 0;
    blockTotalCount = 0;
    
    // Modal yopilgach keyingi savolga o'tamiz
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    // Login o'chirilgan - to'g'ridan-to'g'ri test boshlanadi
    const loginScreen = document.getElementById('loginScreen');
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }
    
    document.body.classList.remove('login-active');
    startTimer();
    updateResults();
    loadQuestion();
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
        // Izoh: Savollar ketma-ketligini saqlab qolish uchun pool o'chirilmaydi
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







