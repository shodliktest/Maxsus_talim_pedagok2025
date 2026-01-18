// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiLz_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====

const questionsData = [
  {
    question: "Qanday so'zlar gapdagi boshqa so'zlardan vergul bilan ajratib yoziladi?",
    options: ["yuklama", "bog'lovchi", "modal so'zlar", "taqlid so'zlar"],
    correctAnswer: "modal so'zlar"
  },
  {
    question: "Qaysi gapda kelishik qo'shimchasini qo'llash bilan bog'liq xatoga yo'l qo'yilgan?",
    options: [
      "Bilimdon o'zining bilimi tufayli ofatlardan omon qoladi.",
      "O'zining qadrini bilmagan o'zganing qadrini ne bilsin?",
      "Kechasi Saidiyning hujrasiga Kozimbek bilan muxbir A'zamjon keldi.",
      "Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor edi."
    ],
    correctAnswer: "Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor edi."
  },
  {
    question: "Samoning zangorisimon sahnida to'lishmagan qandaydir beshakl oy xira, rangsiz yaltiraydi. Gapda qo'llangan yasama so'zlar vazifasini toping.",
    options: ["1,2,3", "1,2,4", "1,3,4", "2,3,4"],
    correctAnswer: "1,2,4"
  },
  {
    question: "Qaysi gapda otlashgan sifat(lar) qo'llanmagan?",
    options: [
      "Yaxshidan bog' qoladi, yomondan -- dog'.",
      "Ilg'orlarga mukofot topshirildi.",
      "Sinfimizda a'lochi o'quvchilar ko'p.",
      "Yoshlar olovga yaqinroq, keksalar esa uzoqroq o'tirishdi."
    ],
    correctAnswer: "Sinfimizda a'lochi o'quvchilar ko'p."
  },
  {
    question: "-imtir qo'shimchasi yordamida qaysi sifatlarning ozaytirma darajasini hosil qilish mumkin?",
    options: ["1,2,5", "1,3,4,5", "1,2,3,4,5", "1,2,5,6"],
    correctAnswer: "1,2,5"
  },
  {
    question: "So'zlovchi, tinglovchi va o'zgaga ishora qiladigan olmosh turini toping.",
    options: ["kishilik", "so'roq", "ko'rsatish", "belgilash"],
    correctAnswer: "kishilik"
  },
  {
    question: "Qanday olmoshlar egalik qo'shimchalari bilan turlanmaydi.",
    options: ["kishilik", "o'zlik", "so'roq", "bo'lishsizlik"],
    correctAnswer: "bo'lishsizlik"
  },
  {
    question: "Sonning qaysi turi chiqish kelishigi qo'shimchasi bilan qo'llanib, fikrning ahamiyatlilik darajasini ifodalaydigan modal so'z vazifasida qo'llanadi.",
    options: ["chama son", "dona son", "jamlovchi son", "tartib son"],
    correctAnswer: "tartib son"
  },
  {
    question: "-ov, -ala, -ovlon qo'shimchalari yordamida sonning qaysi ma'no turi hosil qilinadi.",
    options: ["chama son", "jamlovchi son", "tartib son", "taqsim son"],
    correctAnswer: "jamlovchi son"
  },
  {
    question: "Do'mbirachi qadimiy qozoq hayotidan dostonlar kuylamoqda. Ushbu gapda nechta so'z yasovchi qo'shimcha qo'llangan.",
    options: ["4 ta", "3 ta", "2 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Qaysi gapda nisbiy sifat qo'llangan.",
    options: [
      "Uning jussasi kichkina bo'lsa ham, yuzlari jiddiy, boqishlari o'tkir, ovozi esa jarangdor.",
      "Hovlimizga ko'cha eshikdan kirishda kichkina, g'ishtin uycha bor.",
      "U oltmishlarga borib qolgan bo'lsa ham, yoshlardek ikki yuzi qip-qizil, serg'ayrat va tavakkalchi odam edi.",
      "Temur yuksak insoniylikka ega bo'lgan buyuk shaxs edi."
    ],
    correctAnswer: "Hovlimizga ko'cha eshikdan kirishda kichkina, g'ishtin uycha bor."
  },
  {
    question: "Qaysi gapda butun miqdorning qismini ifodalovchi son qo'llangan.",
    options: ["1,2,3,4", "1,2,4", "1,2,3", "1,3,4"],
    correctAnswer: "1,2,3,4"
  },
  {
    question: "Qaysi gapda son otlashmagan.",
    options: [
      "Oltovlon ola bo'lsa, og'zidagin oldirar.",
      "Ikkala jamoa ham musobaqaga jiddiy tayyorgarlik ko'rgan ekan.",
      "Shunday qilib, to'rtovlari ham piyoda yo'lga chiqishibdi.",
      "Ikkinchisi ham uyg'onib ketdi, shekilli, qo'shilishib yig'lashga tushdi."
    ],
    correctAnswer: "Ikkala jamoa ham musobaqaga jiddiy tayyorgarlik ko'rgan ekan."
  },
  {
    question: "Jonivorlarni chaqirish va haydash, yurgizish va to'xtatish uchun qo'llanadigan so'zlar qanday nomlanadi.",
    options: ["undov so'zlar", "modal so'zlar", "taqlid so'zlar", "yuklamalar"],
    correctAnswer: "undov so'zlar"
  },
  {
    question: "So'zlarni va gaplarni teng va tobe bog'lash uchun xizmat qiluvchi so'zlar qanday nomlanadi.",
    options: ["bog'lovchi", "ko'makchi", "yuklama", "olmosh"],
    correctAnswer: "bog'lovchi"
  },
  {
    question: "So'zlarga va gaplarga qo'shimcha ma'no yuklash uchun xizmat qiluvchi yordamchilar qanday nomlanadi.",
    options: ["bog'lovchi", "ko'makchi", "yuklama", "modal so'z"],
    correctAnswer: "yuklama"
  },
  {
    question: "O'rin ravishlari qayd etilgan javobni belgilang.",
    options: [
      "ichkari, tashqari, olg'a",
      "ko'cha, bog', guzar",
      "ichki, tashqi, sirtqi",
      "ichra, uzra, ora"
    ],
    correctAnswer: "ichkari, tashqari, olg'a"
  },
  {
    question: "Qaysi gapda ravish qo'llanmagan.",
    options: [
      "Ikki oshna kechki salqin bilan piyoda yo'lga tushishdi.",
      "Orqasiga qarasa, uzoqdan bir ho'kiz uni to'xtovsiz chaqirib kelyapti.",
      "Keksa kishilar katta hayotiy tajribaga ega bo'ladilar.",
      "Abdishukur bu yerdan tezda chiqib ketish payiga tushdi."
    ],
    correctAnswer: "Keksa kishilar katta hayotiy tajribaga ega bo'ladilar."
  },
  {
    question: "O'xshatish, inkor, ayiruv, kuchaytirish kabi ma'nolar qanday so'zlar orqali ifodalanadi.",
    options: ["ko'makchi", "bog'lovchi", "yuklama", "modal so'zlar"],
    correctAnswer: "yuklama"
  },
  {
    question: "Qaysi gapda hol vazifasida qo'llangan holatga taqlid so'z berilgan.",
    options: [
      "Dupur-dupur ot keldi, Ko'chaga qarang, kim keldi.",
      "Omon g'azabi oshib, dag'-dag' qaltiray boshladi.",
      "To'rtta savag'ich bilan tap-tap urib, par singari qilib titibdi.",
      "Osmonda yombi oltinday yaraqlagan oy, yakkam-dukkam milt-milt yulduzlar uyg'oq edi."
    ],
    correctAnswer: "Omon g'azabi oshib, dag'-dag' qaltiray boshladi."
  },
  {
    question: "Qaysi gapda aniqlovchi vazifasida qo'llangan tovushga taqlid so'z berilgan.",
    options: [
      "Yetti qaroqchi yulduzi tik kelganda g'o'ng'ir-g'o'ng'ir ovozdan uyg'onib ketdim.",
      "Vujudini tutgan qalt-qalt titroqni bosib hazilomuz qichqirdi.",
      "Allakim ship-ship qadam bosib, ayvon labiga kelayotganday bo'lardi.",
      "Boshidagi toj yal-yal yonarmish."
    ],
    correctAnswer: "Yetti qaroqchi yulduzi tik kelganda g'o'ng'ir-g'o'ng'ir ovozdan uyg'onib ketdim."
  },
  {
    question: "Qaysi gapda modal so'z qo'llangan.",
    options: [
      "Bo'ron bo'lish ehtimoli bor, qizim.",
      "Istamning chamasi to'g'ri chiqdi.",
      "Uning 'ko'cha bolasi' ekanligini aftidan bilib olish qiyin emas edi.",
      "To'g'ri, yo'llarda mashaqqatlar ko'p."
    ],
    correctAnswer: "To'g'ri, yo'llarda mashaqqatlar ko'p."
  },
  {
    question: "Qaysi gapda buyruq-xitobni ifodalovchi undov so'z qo'llangan.",
    options: [
      "Men yetim o'sganman, oh u yetimlik.",
      "Qo'y, yig'lama ey baxshi.",
      "Iya, bularni nima qilasan?",
      "O! Ho'kiz yo'q, og'il ko'cha tomondan teshilgan."
    ],
    correctAnswer: "Qo'y, yig'lama ey baxshi."
  },
  {
    question: "Qaysi javobda alohida olingan so'zlar berilgan.",
    options: ["hamda, uchun, nahot", "shoyad, obbo, gumbur", "daftar, eski, beshta", "men, shu, yalpi"],
    correctAnswer: "shoyad, obbo, gumbur"
  },
  {
    question: "Moslashuvli so'z birikmasi berilgan javobni toping.",
    options: ["o'rik sharbati", "tarix darsi", "rasm daftari", "kitob do'koni"],
    correctAnswer: "o'rik sharbati"
  },
  {
    question: "Qaysi qo'shimcha yordamida umumlashtirish, kuchaytirish, hurmat kabi uslubiy ma'nolarni ifodalash mumkin.",
    options: ["-cha", "-lar", "-xon", "-gina"],
    correctAnswer: "-lar"
  },
  {
    question: "Shaxs, narsa, belgi, harakat kabilarni jamlab ifodalaydigan olmosh qaysi gapda qo'llangan.",
    options: [
      "Bog'imizda uzumning hamma xilidan bor.",
      "Har kim ekkanini o'radi.",
      "Shorahim ko'z yoshidan hech nimani ko'rmay allanimalar deb g'udrandi.",
      "Kim shaxmat to'garagiga qatnashadi."
    ],
    correctAnswer: "Bog'imizda uzumning hamma xilidan bor."
  },
  {
    question: "Qaysi gapda olmoshning ma'nosiga ko'ra uch turi qo'llangan.",
    options: [
      "Xayolchan g'udranib, o'z-o'zini koyidi.",
      "Ichkaridan kimlardir chiqib, u turgan tomonga kelaverdi.",
      "Qayerda bo'shliq paydo bo'lsa, uni kimdir to'ldirishga harakat qiladi.",
      "Siz hayotda qanday insonlarga havas qilasiz."
    ],
    correctAnswer: "Qayerda bo'shliq paydo bo'lsa, uni kimdir to'ldirishga harakat qiladi."
  },
  {
    question: "Qaysi javobda sof ko'makchilar berilgan.",
    options: [
      "kabi, uzra, tufayli",
      "ost, ust, yon",
      "avval, keyin, so'ng",
      "bo'ylab, qarab, atab"
    ],
    correctAnswer: "kabi, uzra, tufayli"
  },
  {
    question: "Qaysi gapda so'zlarni va gaplarni bir-biriga bog'lash uchun xizmat qilmaydigan yordamchi so'z qo'llangan.",
    options: [
      "Yurt farovonligi uchun qayg'uradi.",
      "Andishali bo'l, biroq shijoatsiz bo'lm.",
      "Bu yerda na ofat, na kulfat, na g'am.",
      "O'shanda dadam ham frontda edilar."
    ],
    correctAnswer: "O'shanda dadam ham frontda edilar."
  },
  {
    question: "Qaysi gapda balki so'zi bog'lovchi vazifasida qo'llanmagan.",
    options: [
      "Mevani gullata bilishgina emas, balki undan mo'l va shirin hosil yetkaza bilish san'atdir.",
      "Taraqqiyot tasodif emas, balki zaruratdir.",
      "Hayronman, balki, siz haqdirsiz.",
      "nafaqat kattalarga, balki kichiklarga ham shunday muomalada bo'lar edi."
    ],
    correctAnswer: "Hayronman, balki, siz haqdirsiz."
  },
  {
    question: "Qanday fe'llar holat fe'llari sanaladi.",
    options: ["1,2,3", "1,2", "1,3", "2,3"],
    correctAnswer: "2,3"
  },
  {
    question: "O'timli fe'llar berilgan javobni toping.",
    options: ["o'qimoq, yozmoq", "kulmoq, yig'lamoq", "yurmoq, yugurmoq", "o'tirmoq, turmoq"],
    correctAnswer: "o'qimoq, yozmoq"
  },
  {
    question: "Bajaruvchining o'z ustida amalga oshadigan harakat-holatini ifodalaydigan fe'l nisbati qanday ataladi.",
    options: ["aniq nisbat", "birgalik nisbat", "majhul nisbat", "o'zlik nisbat"],
    correctAnswer: "o'zlik nisbat"
  },
  {
    question: "Har ikki qismi ot turkumiga mansub so'zlar bilan ifodalangan bitishuvli so'z birikmasi berilgan javobni aniqlang.",
    options: ["nordon anor", "tilla soat", "quyosh nuri", "kimyoviy jarayon"],
    correctAnswer: "tilla soat"
  },
  {
    question: "Qaysi javobda ot, sifat, fe'l yasovchi shakldosh(omonim) qo'shimchalar qayd etilgan.",
    options: ["-ik, -iq, -a", "-ma, -qi, -la", "-ay, -oq, -cha", "-ar, -gi, -k"],
    correctAnswer: "-ik, -iq, -a"
  },
  {
    question: "Qaysi javobda ot va sifat yasovchi shakldosh(omonim) qo'shimchalar juftligi berilmagan.",
    options: ["qalamdon--qadrdon", "aravakash--mehnatkash", "ekin--erkin", "ko'rik--chirik"],
    correctAnswer: "aravakash--mehnatkash"
  },
  {
    question: "Sodda tub otlarni toping.",
    options: ["qirqim, o'rim", "chopiq, tortiq", "yutuq, buyruq", "beshik, o'rik"],
    correctAnswer: "beshik, o'rik"
  },
  {
    question: "Qaysi gapda fe'lning otga xoslangan shakli qo'llangan.",
    options: [
      "Chiroyli yozishni o'rgan.",
      "Bolalar qorbo'ron o'ynashmoqd.",
      "Shu payt boshimiz ustida chaqmoq chaqdi.",
      "Singilcham quymoqni juda yaxshi ko'radi."
    ],
    correctAnswer: "Chiroyli yozishni o'rgan."
  },
  {
    question: "Qaysi javobda ravishdosh shakllari berilmagan.",
    options: ["-ib(-b, -a(-y)", "-gach, -guncha", "-gan, -ar", "-gani, -gancha"],
    correctAnswer: "-gan, -ar"
  },
  {
    question: "Qaysi gapda olmoq fe'li qo'shma fe'l tarkibida qo'llangan.",
    options: [
      "Ma'ruf toshni o'n marta ko'tara oldi.",
      "Kasalligi tufayli o'n yildan beri ukol olib kelmoqd.",
      "Kecha Sharifadan xat oldik.",
      "Shoikrom ukasidan xabar oldi."
    ],
    correctAnswer: "Kasalligi tufayli o'n yildan beri ukol olib kelmoqd."
  },
  {
    question: "Qaysi gapda asosida fonetik o'zgarish sodir bo'lgan yasama fe'l(lar) qo'llangan.",
    options: [
      "Gapirganda ovozi xuddi ichidan chiqqanday guldurab, jaranglab eshitiladi.",
      "Ichkarida chaqaloq yig'ladi, beshikning g'ichirlagani ishitildi.",
      "Yuragim hayajondan gupullab ura boshladi.",
      "Usta temirni cho'g'ga solib bolg'alaydi, cho'zadi, yassilaydi, yana olovga soladi."
    ],
    correctAnswer: "Ichkarida chaqaloq yig'ladi, beshikning g'ichirlagani ishitildi."
  },
  {
    question: "Turli gap bo'laklari vazifasida kelish uchun xoslangan fe'l shakllari bu...",
    options: ["vazifa shakllari", "munosabat shakllari", "nisbat shakllari", "bo'lishsizlik shakllari"],
    correctAnswer: "vazifa shakllari"
  },
  {
    question: "Qaysi nisbat qo'shimchalari bir fe'lga birin-ketin bir necha marotaba qo'shilishi mumkin.",
    options: ["o'zlik nisbat", "majhul nisbat", "birgalik nisbat", "orttirma nisbat"],
    correctAnswer: "orttirma nisbat"
  },
  {
    question: "Quyida berilgan yasama fe'llarning nechtasi tarkibida tovush o'zgarishi sodir bo'lgan.",
    options: ["19 ta", "17 ta", "15 ta", "13 ta"],
    correctAnswer: "15 ta"
  },
  {
    question: "Bir turdagi shaxs va narsalarning umumiy otini yoki ulardan birining nomini ifodalashiga ko'ra otlar qanday turlarga bo'linadi.",
    options: [
      "atoqli va turdosh otlar",
      "aniq va mavhum otlar",
      "sanaladigan va sanalmaydigan otlar",
      "yakka va to'da otlar"
    ],
    correctAnswer: "atoqli va turdosh otlar"
  },
  {
    question: "Qaysi javobda tarkibi asos=ot yasovchi=ot yasovchi shaklida bo'lgan yasama ot berilgan.",
    options: ["temirchilik", "terimchilik", "dehqonchilik", "suvoqchilik"],
    correctAnswer: "temirchilik"
  },
  {
    question: "Til oldi unlilar berilgan javobni toping.",
    options: ["a, e, i", "o, a", "o, a, u", "o, a, i"],
    correctAnswer: "a, e, i"
  },
  {
    question: "Ochiq bo'g'indan birida faqat til undoshi berilgan so'zni toping.",
    options: ["mamnun", "bahona", "vafodor", "faqat"],
    correctAnswer: "bahona"
  },
  {
    question: "Yam-yashil so'zida nechta unli va nechta undosh tovush bor.",
    options: [
      "3 ta unli, 3 ta undosh",
      "5 ta unli, 5 ta undosh",
      "3 ta unli, 5 ta undosh",
      "4 ta unli, 4 ta undosh"
    ],
    correctAnswer: "3 ta unli, 5 ta undosh"
  },
  {
    question: "Qaysi qatorda lab undoshlari berilgan.",
    options: ["x, g", "j, k", "b, m", "h, ng"],
    correctAnswer: "b, m"
  },
  {
    question: "Lab undoshlari ishtirok etgan yasama so'zni toping.",
    options: ["savlat", "gulzor", "oshiq", "ommabop"],
    correctAnswer: "ommabop"
  },
  {
    question: "Qaysi so'z tarkibida portlovchi undosh mavjud.",
    options: ["suvsiz", "sababsiz", "yuzsiz", "foizsiz"],
    correctAnswer: "sababsiz"
  },
  {
    question: "Qaysi jarangli undosh o'z jarangsiz jufti bilan birga sirg'aluvchi tovushlarga mansub bo'ladi.",
    options: ["b", "d", "z", "k"],
    correctAnswer: "z"
  },
  {
    question: "t va h tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: [
      "jarangli va jarangsizligiga ko'ra",
      "lab yoki tish undoshlariga oidligiga ko'ra",
      "portlovchi yoki sirg'aluvchiligiga ko'ra",
      "tilning qayerida paydo bo'lishiga ko'ra"
    ],
    correctAnswer: "jarangli va jarangsizligiga ko'ra"
  },
  {
    question: "f undoshi til undoshlarining qaysi turiga mansub.",
    options: [
      "til oldi undosh",
      "lab-tish undoshi",
      "sayoz til oldi undoshi",
      "chuqur til orqa undoshi"
    ],
    correctAnswer: "lab-tish undoshi"
  },
  {
    question: "Qaysi jarangli undoshlar sirg'aluvchilarga mansub emas.",
    options: ["k, t", "v, z", "b, n", "j, g'"],
    correctAnswer: "b, n"
  },
  {
    question: "Berilgan jarangli undoshlardan qaysilari sirg'aluvchilarga mansub.",
    options: ["k, q", "f, s", "j, b", "r, z"],
    correctAnswer: "r, z"
  },
  {
    question: "Qaysi so'z talaffuzida jarangsiz tovush o'zidan keyingi jarangli tovushni o'ziga moslashtiradi.",
    options: ["zarur", "ketdi", "o'qibdi", "maqsad"],
    correctAnswer: "ketdi"
  },
  {
    question: "Jarangsiz undoshlar ishtirok etmagan yasama so'zni toping.",
    options: ["bejirim", "gulsiz", "lolazor", "yolg'ondakam"],
    correctAnswer: "lolazor"
  },
  {
    question: "Portlovchi undoshlar yonma-yon kelgan so'zni toping.",
    options: ["iqtisod", "nashriyot", "qing'ir", "hamfikr"],
    correctAnswer: "iqtisod"
  },
  {
    question: "Qaysi yasama so'z tarkibida sirg'aluvchi tovush mavjud.",
    options: ["kechikmoq", "shoshilmoq", "ulg'aymoq", "changimoq"],
    correctAnswer: "ulg'aymoq"
  },
  {
    question: "b va k tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: [
      "jarangli yoki jarangsizligiga ko'ra",
      "lab yoki tish undoshlariga oidligiga ko'ra",
      "tilning qayerida paydo bo'lishiga ko'ra",
      "portlovchi yoki sirg'aluvchiligiga ko'ra"
    ],
    correctAnswer: "portlovchi yoki sirg'aluvchiligiga ko'ra"
  },
  {
    question: "Metateza hodisasi qaysi qatordagi so'zda kuzatiladi.",
    options: ["zarar-zaral", "tuproq-turpoq", "yurakka-yurakga", "tuzsiz-tussiz"],
    correctAnswer: "tuproq-turpoq"
  },
  {
    question: "Faqat jarangsiz undoshlar qatnashgan so'zlar qatorini toping.",
    options: [
      "daromad, jamoat, hushyor",
      "taxta, soat, sukut, toqat",
      "muhabbat, vafo, sadoqat",
      "tosh, shikoyat, kitob, mulk"
    ],
    correctAnswer: "taxta, soat, sukut, toqat"
  },
  {
    question: "Urg'usi oxirgi bo'g'inga tushmagan so'zlar qatorini toping.",
    options: [
      "bog'lar, olma, novcha",
      "yangicha, qishgacha, o'zgacha",
      "qishloqcha, yigitcha, uycha",
      "qazilma, qotishma, burama"
    ],
    correctAnswer: "qazilma, qotishma, burama"
  },
  {
    question: "Qaysi javobda tovush o'zgarishlari yuz bergan?",
    options: ["1, 2, 4", "2, 3, 5", "2, 3", "4, 3, 6"],
    correctAnswer: "2, 3"
  },
  {
    question: "Qaysi javobda so'z ko'chirish qoidasi to'g'ri ko'rsatilmagan.",
    options: ["mat-ba-a", "mu-do-faa", "si-ngil", "tran-sport"],
    correctAnswer: "mat-ba-a"
  },
  {
    question: "Yigirmata so'zida urg'u qaysi bo'g'inga qo'yilgan.",
    options: ["1 ga", "3 ga", "2 ga", "4 ga"],
    correctAnswer: "3 ga"
  },
  {
    question: "Qaysi qatordagi so'zlarning ma'nosi urg'u yordamida farqlanadi.",
    options: [
      "xiyla, ariya, belcha, beshala",
      "bolada, qo'lla, axil",
      "bog'lar, ishlar, qishloqcha",
      "burun, gajim, uylar"
    ],
    correctAnswer: "bog'lar, ishlar, qishloqcha"
  },
  {
    question: "ayir so'ziga quyidagi qaysi qo'shimchalar qo'shilsa tovush tushishi vujudga keladi.",
    options: ["1,2,4,5", "2,3,4,5", "2,4,5", "1,2,4"],
    correctAnswer: "1,2,4,5"
  },
  {
    question: "Rotalarni zudlik bilan o'rnidan ko'chirish haqida og'zaki buyruq berildi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["2 so'zda", "1 so'zda", "3 so'zda", "4 so'zda"],
    correctAnswer: "3 so'zda"
  },
  {
    question: "Og'zaki nutqda qaysi so'z tarkibidagi portlovchi tovush ba'zan sirg'aluvchi tovush tarzida talaffuz qilinadi.",
    options: ["maktab", "taqsim", "boribdi", "xohish"],
    correctAnswer: "taqsim"
  },
  {
    question: "Qaysi jumlada gap urg'usi muzeyga so'ziga tushgan.",
    options: [
      "O'qituvchimiz bizni muzeyga dam olish kuni olib boradi.",
      "Bizni dam olish kuni muzeyga o'qituvchimiz olib boradi.",
      "Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi.",
      "Muzeyga bizni dam olish kuni o'qituvchimiz olib boradi."
    ],
    correctAnswer: "Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi."
  },
  {
    question: "Urg'u ma'no farqlash vazifasini bajargan so'zlarni belgilang.",
    options: ["1, 3, 4, 5", "1, 3, 4", "1, 2, 3, 4, 5", "2, 4"],
    correctAnswer: "1, 2, 3, 4, 5"
  },
  {
    question: "Qaysi so'zlarning o'zak-negizida tovush almashishi yuz bergan.",
    options: ["1, 2, 3, 4, 5, 6", "2, 4, 6", "1, 4, 5, 6", "1, 2, 4, 6"],
    correctAnswer: "1, 4, 5, 6"
  },
  {
    question: "Qaysi so'zlarda urg'u yordamida ma'noni farqlash mumkin.",
    options: ["1, 2, 3, 4, 5", "3, 4, 5", "1, 3, 5", "1, 3, 4, 5"],
    correctAnswer: "1, 3, 4, 5"
  },
  {
    question: "Malika opaning ikkala o'g'li shaharda o'qib, ulg'ayib yana bag'riga qaytdi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["1 so'zda", "2 so'zda", "3 so'zda", "4 so'zda"],
    correctAnswer: "4 so'zda"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda lab-lab undoshi sifatida talaffuz qilinadi.",
    options: ["shanba", "ichdim", "borib", "taqsim"],
    correctAnswer: "shanba"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda boshqa til oldi undoshi sifatida talaffuz qilinadi.",
    options: ["to'qson", "tubsiz", "tanob", "uchta"],
    correctAnswer: "uchta"
  },
  {
    question: "Yonma-yon kelgan tovushlarning o'rin almashishi tilshunoslikda qanday ataladi.",
    options: ["assimilatsiya", "dissimilatsiya", "metateza", "tovush almashishi"],
    correctAnswer: "metateza"
  },
  {
    question: "So'z tarkibidagi tovushlarning ajratib yoki cho'ziqroq talaffuz qilinishini ko'rsatuvchi ishora qanday ataladi.",
    options: ["vergul", "tutuq belgisi", "so'z urg'usi", "urg'u"],
    correctAnswer: "tutuq belgisi"
  },
  {
    question: "Og'zaki nutqning tovush tizimini yozma nutqda qanday berilishini o'rganuvchi tilshunoslik bo'limi qanday nomlanadi.",
    options: ["orfografiya", "orfoepiya", "grafika", "fonetika"],
    correctAnswer: "orfografiya"
  },
  {
    question: "Olimlar haddan ziyod saodatga intilish saodatni qo'lga kiritishga to'sqinlik qilishini aytganlar. Ushbu gapda nechta so'z yasovchi qo'shimcha mavjud.",
    options: ["3 ta", "2 ta", "4 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Morfem tarkibi asos = so'z yasovchi = lug'aviy shakl yasovchi = sintaktik shakl yasovchi qolipidagi so'zni toping.",
    options: ["tokzorlarda", "ipakchilikdan", "sizlamoq", "turmushimizni"],
    correctAnswer: "tokzorlarda"
  },
  {
    question: "Qaysi javobda zid ma'noli qo'shimchalar berilmagan.",
    options: ["-li/-siz", "ser-/-mand", "bo-/be-", "no-/-li"],
    correctAnswer: "ser-/-mand"
  },
  {
    question: "Qaysi javobda morfemalari ushbu tartib asosida joylashgan so'z berilgan.",
    options: ["isitkichlarni", "anglamadi", "hamkasblarimga", "isitmalamoq"],
    correctAnswer: "anglamadi"
  },
  {
    question: "Qaysi javobda tub so'z berilgan.",
    options: ["ko'chki", "turtki", "tulki", "tepki"],
    correctAnswer: "tulki"
  },
  {
    question: "Qaysi javobda morfemalarga bo'linmaydigan so'z berilgan.",
    options: ["yutuq", "huquq", "buyruq", "uzuq"],
    correctAnswer: "huquq"
  },
  {
    question: "Xatosi o'ziga ayon bo'lgach, gapira olmay g'uldirab javob berdi. Berilgan gapdagi yasama so'zlar miqdorini aniqlang.",
    options: ["2 ta", "3 ta", "4 ta", "5 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Osmon go'zal oyi, quyoshi bilan, Inson go'zal mardlik, bardoshi bilan. Fazilati, odobi, xulqi bilan, Chin xislati -- noyob qalb mulki bilan. Ushbu gapda nechta ot so'z turkumiga mansub so'zlar mavjud.",
    options: ["13 ta", "12 ta", "11 ta", "14 ta"],
    correctAnswer: "12 ta"
  },
  {
    question: "Sen yig'layver, go'zal bo'lasan, Dard chekaver husning ortadi. Senga yarashmaydi tabassum, Qiyofangga og'ir botadi. Ushbu gapda ot so'z turkumiga mansub nechta so'z qatnashgan.",
    options: ["6 ta", "5 ta", "3 ta", "4 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Yasama mavhum ot qatnashgan gapni toping.",
    options: [
      "Aziz shaharda qib qaytdi.",
      "Kezib-kezib topganlarim sog'inch bo'ldi.",
      "Toshkentlik mehmonga Registon juda yoqdi.",
      "Hasad -- yurakning zanglashi."
    ],
    correctAnswer: "Kezib-kezib topganlarim sog'inch bo'ldi."
  },
  {
    question: "Bo'gin ko'chirish qoidasi buzilmagan qatorni toping.",
    options: ["de-ngiz", "den-giz", "ing-liz", "kong-ress"],
    correctAnswer: "de-ngiz"
  },
  {
    question: "Tutuq belgisi qaysi qatorda unlining undoshdan ajratib talaffuz etilishini talab qiladi.",
    options: ["ma'no", "ra'no", "a'zo", "san'at"],
    correctAnswer: "san'at"
  },
  {
    question: "Kishilik olmoshi va o'zlik olmoshi birga qo'llansa, qanday uslubiy ma'no ifodalanadi.",
    options: ["hurmat", "ta'kid", "kinoya", "inkor"],
    correctAnswer: "hurmat"
  },
  {
    question: "O'lchov so'z(numerativ)lar haqida bildirilgan qaysi fikr to'g'ri emas.",
    options: [
      "O'lchov so'zlar sanoq son bilan o'lchanayotgan narsaning orasida qo'llanadi.",
      "O'zidan oldingi sanoq son bilan bitta so'roqqa javob bo'lsa-da, bitta sintaktik vazifa bajarmaydi.",
      "Otning va fe'lning o'lchovini ifodalaydi.",
      "Ayrim o'lchov so'zlar alohida olinganda narsa(predmet) ma'nosini ifodalaydi."
    ],
    correctAnswer: "Otning va fe'lning o'lchovini ifodalaydi."
  },
  {
    question: "So'zlarga va gaplarga qo'shimcha ma'no yuklash uchun xizmat qiluvchi yordamchilar qanday nomlanadi.",
    options: ["bog'lovchi", "ko'makchi", "yuklama", "modal so'z"],
    correctAnswer: "yuklama"
  },
  {
    question: "Quyida berilganlardan ham bog'lovchi, ham yuklama vazifasida qo'llanuvchi so'zni aniqlang.",
    options: ["bilan", "balki", "ham", "deb"],
    correctAnswer: "ham"
  },
  {
    question: "Qaysi javobda sof modal so'zlar berilgan.",
    options: [
      "aftidan, chamasi, taxminan",
      "umuman, balki, ehtimol",
      "avvalo, afsuski, albatta",
      "shubhasiz, to'g'ri, o'z-o'zidan"
    ],
    correctAnswer: "avvalo, afsuski, albatta"
  },
  {
    question: "Ravish yasovchi shakldosh(omonim) qo'shimchalar berilgan javobni aniqlang.",
    options: ["-lab, -larcha", "-ona, -siga", "-lay, -ligicha", "-chasiga, -layin"],
    correctAnswer: "-lab, -larcha"
  },
  {
    question: "Baqqol amaki pakana, yuzi katta, peshonasi keng, soqoli siyrak, burni puchuq, iyagi kalta odam edi. Mazkur gapning necha o'rnida sifat qo'llangan.",
    options: ["6 ta", "5 ta", "4 ta", "3 ta"],
    correctAnswer: "6 ta"
  },
  {
    question: "Qaysi gapda ikki usulda yasalgan ikki yasama sifat qo'llangan.",
    options: [
      "Oldimizda mevali va mevasiz daraxtlari ko'p bo'lgan o'rmon.",
      "Nodon, kaltafahm odamdan yaxshi gap chiqmaydi.",
      "Mehnatsevar, zahmatkash insonlar odamlarning ko'rkidir.",
      "Sofdil va jonkuyar odamlar bilan bu dunyo oboddir."
    ],
    correctAnswer: "Mehnatsevar, zahmatkash insonlar odamlarning ko'rkidir."
  },
  {
    question: "Gumon, ishonch, quvonch, tasdiq kabi ma'nolar qanday so'zlar orqali ifodalanadi.",
    options: ["ko'makchi", "bog'lovchi", "yuklama", "modal so'zlar"],
    correctAnswer: "modal so'zlar"
  },
  {
    question: "Qaysi kelishik shaklidagi so'zlar to'ldiruvchi vazifasida qo'llanadi.",
    options: ["qaratqich", "tushum", "jo'nalish", "o'rin-payt"],
    correctAnswer: "jo'nalish"
  },
  {
    question: "Shu sevinch ikkovlariga ham kuch-g'ayrat, dadillik baxsh etgandek bo'ldi. Gapda qo'llangan yasama mavhum otlar miqdorini aniqlang.",
    options: ["1 ta", "2 ta", "3 ta", "4 ta"],
    correctAnswer: "2 ta"
  },
  {
    question: "Bo'lishsizlik olmoshlari haqida aytilgan qaysi fikr to'g'ri emas.",
    options: [
      "So'roq olmoshlari oldidan hech so'zining qo'llanishi natijasida bo'lishsizlik olmoshlari hosil bo'ladi.",
      "Hech so'zini bir, narsa, vaqt, jon, kishi, kimsa, banda kabi so'zlar bilan qo'llash natijasida bo'lishsizlik olmoshlari hosil bo'ladi.",
      "Bo'lishsizlik olmoshlari qatnashgan gapning kesimi tasdiq shaklida bo'ladi.",
      "Bo'lishsizlik olmoshlari ko'plik qo'shimchasi bilan qo'llanmaydi."
    ],
    correctAnswer: "Bo'lishsizlik olmoshlari qatnashgan gapning kesimi tasdiq shaklida bo'ladi."
  },
  {
    question: "To'pdan ajratilgan shaxs, narsa, belgi kabilarni bildirgan olmoshlar qanday ataladi.",
    options: ["belgilash olmoshlari", "bo'lishsizlik olmoshlari", "o'zlik olmoshi", "ko'rsatish olmoshlari"],
    correctAnswer: "belgilash olmoshlari"
  },
  {
    question: "Qaysi fe'l fe'lning barcha nisbat shakllarida ham qo'llana oladi.",
    options: ["o'qimoq", "yodlamoq", "so'ramoq", "kiymoq"],
    correctAnswer: "kiymoq"
  },
  {
    question: "Qaysi gapda 2 ta fe'lli, 1 ta otli so'z birikmasi qatnashgan.",
    options: [
      "Hasan tezda hunarmandchilik sirlarini o'rganib oldi.",
      "Tog' qishloqlaridan birini kuchli sel bosibdi.",
      "Humo qushi odamlarga baxt keltirar ekan.",
      "Zargarov sahrodagi ishlarning miqyosini yaxshi tasvirlab berdi."
    ],
    correctAnswer: "Hasan tezda hunarmandchilik sirlarini o'rganib oldi."
  },
  {
    question: "Qaysi qatorda boshqaruv munosabatli fe'lli so'z birikmasi bor?",
    options: [
      "tezda gapirmoq, dehqonchasiga ishlamoq",
      "qiyinchilikni yenggan, kitobni o'qigan",
      "maqtanganning uyiga, kerilganning to'yiga",
      "oqar suv, qizargan olma"
    ],
    correctAnswer: "qiyinchilikni yenggan, kitobni o'qigan"
  },
  {
    question: "Qaysi qatorda ko'makchi vositasida bog'langan boshqaruvli otli so'z birikmasi bor?",
    options: ["kitob haqida suhbat", "hafta ichida", "eng oliy baxt", "qunt bilan tinglamoq"],
    correctAnswer: "kitob haqida suhbat"
  },
  {
    question: "Mashina uchun ehtiyot qismlar birikmasidagi hokim so'zni aniqlang.",
    options: ["qismlar", "ehtiyot", "mashina uchun", "ehtiyot qismlar"],
    correctAnswer: "qismlar"
  },
  {
    question: "Quyida berilgan gapda nechta so'z mavjud? Tebranib yonayotgan sham zo'r mo'jizaday hammaning diqqatini jalb qilgandi.",
    options: ["9 ta", "8 ta", "7 ta", "6 ta"],
    correctAnswer: "9 ta"
  },
  {
    question: "Qaysi qatorda berilgan so'z birikmalarini gapga aylantirish mumkin?",
    options: [
      "qiziqarli mashg'ulot, oydin kecha, maqola o'qimoq",
      "berilgan topshiriq, o'qishli asar, g'azal yodlamoq",
      "qattiq sovuq, shirin qovun, chiroyli gul",
      "samarali ishlamoq, ko'chat o'tqazish, barqaror tinchlik"
    ],
    correctAnswer: "qattiq sovuq, shirin qovun, chiroyli gul"
  },
  {
    question: "Muzaffarning lo'ppi yuzidagi achinish alomati xushnud tabassum bilan almashdi. Ushbu gapda otli so'z birikmalari soni nechta?",
    options: ["5 ta", "6 ta", "4 ta", "7 ta"],
    correctAnswer: "5 ta"
  },
  {
    question: "Qaysi gapda moslashuv va boshqaruv aloqasi mavjud?",
    options: [
      "Umidsizlik uyin buzsang, umidingga yetarsan.",
      "O'zingni er bilsang, o'zgani sher bil.",
      "Biz rostgo'ylik va halollikni hamisha ulug'laymiz.",
      "Yillar mana shu xilda osoyishta o'tar edi."
    ],
    correctAnswer: "Umidsizlik uyin buzsang, umidingga yetarsan."
  },
  {
    question: "Kelishik qo'shimchalari yordamida birikkan so'z birikmalari qaysi javobda berilgan?",
    options: [
      "Moviy osmon, Zuxro yulduz",
      "Tog' cho'qqisi, kitob o'qimoq",
      "yoqimli kuy, dala yumushlari",
      "a'lochi o'quvchilar, kitobsevarlar uyushmasi"
    ],
    correctAnswer: "a'lochi o'quvchilar, kitobsevarlar uyushmasi"
  },
  {
    question: "O'zbek tili qaysi til oilasiga mansub?",
    options: [
      "Xind -- evropa tillari oilasi.",
      "Oltoy tillar oilasi",
      "Fin -- ugor tillar oilasi",
      "Som-xom tillar oilasi"
    ],
    correctAnswer: "Oltoy tillar oilasi"
  },
  {
    question: "Qaysi qatordagi gapda ega olmosh bilan ifodalangan?",
    options: [
      "Undan yoqimli va shirin xid kelardi.",
      "Iste'dodli adib ko'p nasriy asarlar yozdi.",
      "Ularning munozarasi yangi buyruq kelishi bilan yakunlandi.",
      "U biz bilan ketishi lozim."
    ],
    correctAnswer: "U biz bilan ketishi lozim."
  },
  {
    question: "Belgisiz qaratqich aniqlovchili so'z birikmalari qaysi javobda berilgan?",
    options: [
      "Shaffof suv, nafis gullar",
      "Oy shu'lasi, institut binosi",
      "navbahor kezlari, oydin kechalar",
      "g'ayrat bilan ishlamoq"
    ],
    correctAnswer: "Oy shu'lasi, institut binosi"
  },
  {
    question: "Faqat ergashtiruvchi bog'lovchilardan iborat qatorni aniqlang.",
    options: [
      "-kim, agar, chunki, basharti, shuning uchun",
      "shuning uchun, va, lekin",
      "-mi, -yu, -ku, -da",
      "sari, -dek, -gacha, toki"
    ],
    correctAnswer: "-kim, agar, chunki, basharti, shuning uchun"
  },
  {
    question: "Qo'shma gap berilgan javobni toping.",
    options: [
      "Biz kitobni o'qib, muxokama qildik.",
      "Kun botib, qorong'ulik cho'kdi",
      "Atrof yorishdi, biz yo'lga otlandik",
      "Men ishdan charchab keldim va miriqib dam oldim"
    ],
    correctAnswer: "Men ishdan charchab keldim va miriqib dam oldim"
  },
  {
    question: "Teng bog'lovchili qo'shma gapni aniqlang.",
    options: [
      "Ma'rifatli jamiyatda sog'lom aql-idrok, sog'lom fikr va adolat ustivorlik qiladi.",
      "G'ildiraklar ovozsiz shirillaydi va chang ko'tariladi.",
      "Azimboy shunday zulm o'tkazdiki, xalqning sabr kosasi to'ldi.",
      "Mingboshi uchun Miryoqubdan boshqa chin ko'ngildan kuyadigan odam yo'qligini u yaxshi bilardi."
    ],
    correctAnswer: "G'ildiraklar ovozsiz shirillaydi va chang ko'tariladi."
  },
  {
    question: "Zidlov bog'lovchili gap berilgan qatorni aniqlang.",
    options: [
      "O'ktam mevalarni saralaydi, xidlaydi, biroq egisi kelmaydi.",
      "G'ildiraklar ovozsiz shirillaydi va chang ko'tariladi.",
      "Goh Kimsan akamga ko'z solaman, goh oyimga qarayman.",
      "Nazarimda, u negadir jilmayayotganga o'xshaydi."
    ],
    correctAnswer: "O'ktam mevalarni saralaydi, xidlaydi, biroq egisi kelmaydi."
  },
  {
    question: "Biriktiruv bog'lovchili qo'shma gapni toping.",
    options: [
      "O'ktam xovlida yurib ro'zg'origa razm soldi.",
      "Nodonlik va xurofot xukmron bo'ldimi, jaxolat avj oladi.",
      "G'ildiraklar ovozsiz shirillaydi va chang ko'tariladi.",
      "Gox yuradi, gox to'xtab dam oladi."
    ],
    correctAnswer: "G'ildiraklar ovozsiz shirillaydi va chang ko'tariladi."
  },
  {
    question: "Nisbiy so'zli gapni aniqlang.",
    options: [
      "Nima eksang, shuni o'rasan",
      "Intizom buzildimi, ishda unum bo'lmaydi.",
      "Astrobod xavosi qiziq: gox yomg'ir yogadi, gox quyosh chiqadi",
      "Farzand guldir, ona bir bo'ston"
    ],
    correctAnswer: "Farzand guldir, ona bir bo'ston"
  },
  {
    question: "Tobe gap tarkibida keladigan bog'lovchilar qaysi qatorda?",
    options: [
      "Shuning uchun, shu bois, oqibatda, -ki, -kim.",
      "Agar, chunki, shuning uchun.",
      "Agar, agarda, chunki, go'yo, bamisoli, zero, deb, toki, zotan.",
      "Shu bois, natijada, chunki, agar, deb"
    ],
    correctAnswer: "Agar, agarda, chunki, go'yo, bamisoli, zero, deb, toki, zotan."
  },
  {
    question: "To'ldiruvchili so'z birikmalarini aniqlang.",
    options: [
      "Kitobni o'qimoq, ukasiga bermoq, onasi uchun olmoq.",
      "Uchta o'quvchi, tunuka tom, istiqlol odimlari",
      "Uyga qaytmoq, qishloqda yashamoq.",
      "Xududiy bo'lim, oltin soat, maktab bog'i."
    ],
    correctAnswer: "Kitobni o'qimoq, ukasiga bermoq, onasi uchun olmoq."
  },
  {
    question: "Dangasa bahona izlaydi, chunki mehnat unga yoqmaydi. Berilgan gapning turini aniqlang.",
    options: [
      "Maqsad tobe gapli qo'shma gap.",
      "Sabab tobe gapli qo'shma gap.",
      "Teng bog'lovchili qo'shma gap.",
      "Oxang yordamida bog'langan qo'shma gap."
    ],
    correctAnswer: "Sabab tobe gapli qo'shma gap."
  },
  {
    question: "Maqsad tobe gapli qo'shma gapni toping.",
    options: [
      "Ukam o'qisin deb, 'Oygul bilan Baxtiyor' kitobchasini oldim.",
      "O'rtoqlarim kelishdi deb, ko'chaga chiqdim.",
      "Baxtim borki, ko'zimga har narsa go'zal",
      "Sinfimizda xamma axil, inoq."
    ],
    correctAnswer: "Ukam o'qisin deb, 'Oygul bilan Baxtiyor' kitobchasini oldim."
  },
  {
    question: "Qo'shma gapni aniqlang.",
    options: [
      "Azimboy shunday zulm o'tkazdiki, oqibatda xalqning sabr-kosasi to'ldi.",
      "Azimboy xalqning sabr-kosasini to'ldiradigan zulm o'tkazdi.",
      "Sinf raxbarimiz qizlarga ham, yigitlarga ham ishonardi.",
      "Botirjon ham, Xakimjon ham a'lochi."
    ],
    correctAnswer: "Azimboy shunday zulm o'tkazdiki, oqibatda xalqning sabr-kosasi to'ldi."
  },
  {
    question: "Tushirib qoldirilgan bog'lovchini nuqtalar o'rniga qo'ying: ... shu ko'rganlarini hikoya qilib bersa, ular ishonmasliklari mumkin.",
    options: ["Garchi.", "Agar", "Modomiki", "Balki"],
    correctAnswer: "Modomiki"
  },
  {
    question: "Birin-ketin sodir bo'ladigan ish-harakatlarni bildiruvchi, biror narsaning tavsifini beruvchi qo'shma gaplar yozuvda ... bilan ajratiladi.",
    options: ["Vergul", "Nuqtali vergul", "Tire", "Ikki nuqta"],
    correctAnswer: "Nuqtali vergul"
  },
  {
    question: "Osmon ko'm-ko'k, havo esa toza, sof; go'yo uni dengiz shamoli supurgan, dengiz to'lqinlari yuvgan. Yuqoridagi gap turini aniqlang.",
    options: [
      "Murakkab sodda gap",
      "Bog'langan qo'shma gap",
      "Teng bog'lovchili qo'shma gap",
      "Murakkab qo'shma gap"
    ],
    correctAnswer: "Murakkab sodda gap"
  },
  {
    question: "Ega tobe gapli qo'shma gapni toping.",
    options: [
      "Kimki bardosh bersa, kurashsa, u baxtga etadi.",
      "Yutug'imiz shundaki, xar bir ishni o'z vaqtida bajardik.",
      "Qachon so'rasangiz, darrov javob beradi.",
      "Hali kamchiliklarimiz ko'p, bundan ko'z yumib bo'lmaydi."
    ],
    correctAnswer: "Yutug'imiz shundaki, xar bir ishni o'z vaqtida bajardik."
  },
  {
    question: "Harakat nomi bilan ifodalangan ega qaysi qatorda berilgan?",
    options: [
      "Oyni etak bilan yopib bo'lmaydi.",
      "Ko'chat ekish oyligi baxorda o'tkaziladi.",
      "Ilmli ming yashar, ilmsiz bir yashar",
      "A'lo o'qish -- asosiy maqsadim."
    ],
    correctAnswer: "A'lo o'qish -- asosiy maqsadim."
  },
  {
    question: "Teng bog'lovchilar berilgan qatorni toping.",
    options: [
      "Sababli, natijada, va, lekin.",
      "Ammo, biroq, balki, agar",
      "Va, ham, ammo, lekin.",
      "yoki, zeroki"
    ],
    correctAnswer: "Va, ham, ammo, lekin."
  },
  {
    question: "Uyushiq bo'lakli gap berilgan qatorni aniqlang.",
    options: [
      "Birni birov beradi, ko'pni mexnat.",
      "Butun zamin larzaga keldi.",
      "Tashqaridan allakimning ovozi eshitildi.",
      "Saida goh afsuslanib, goh kuyunib, goh kulib gapirib berdi."
    ],
    correctAnswer: "Saida goh afsuslanib, goh kuyunib, goh kulib gapirib berdi."
  },
  {
    question: "Qo'shma gap qismlarini bog'lovchi vositalar to'liq ko'rsatilgan qatorni belgilang.",
    options: [
      "Teng bog'lovchilar, ergashtiruvchi bog'lovchilar",
      "Nisbiy so'zlar, oxang",
      "Bog'lovchi yuklamalar",
      "Teng bog'lovchilar, ergashtiruvchi bog'lovchilar, nisbiy so'zlar, bog'lovchi yuklamalar, ohang."
    ],
    correctAnswer: "Teng bog'lovchilar, ergashtiruvchi bog'lovchilar, nisbiy so'zlar, bog'lovchi yuklamalar, ohang."
  },
  {
    question: "Teng bog'lovchilarga nimalar kiradi?",
    options: [
      "Biriktiruv, zidlov, ayiruv bog'lovchilari.",
      "Ergashtiruv boglovchilari",
      "Nisbiy so'zlar",
      "Bog'lovchi yuklamalar"
    ],
    correctAnswer: "Biriktiruv, zidlov, ayiruv bog'lovchilari."
  },
  {
    question: "Ayiruv bog'lovchi yordamida bog'langan qo'shma gaplarni toping.",
    options: [
      "Inson esa olamaro olamdir.",
      "Ba'zan oftob ham charaqlayveradi, jala ham quyaveradi.",
      "Inson yaralibdiki, hamisha olamni anglashga intiladi.",
      "Jaxolat zo'r keldimi, taraqqiyot bo'lmaydi."
    ],
    correctAnswer: "Ba'zan oftob ham charaqlayveradi, jala ham quyaveradi."
  },
  {
    question: "Nisbiy so'zli gap qaysi qatorda berilgan?",
    options: [
      "Intizom buzildimi ishda unum bo'lmaydi.",
      "Qoyaga qancha yaqin yursang, xavf shuncha kam.",
      "Yo siz keling, yo men boray.",
      "Gox yomg'ir yog'adi, gox quyosh chiqadi."
    ],
    correctAnswer: "Qoyaga qancha yaqin yursang, xavf shuncha kam."
  },
  {
    question: "Aniqlovchili so'z birikmasini toping.",
    options: [
      "Uyga qaytmoq, qishloqda yashamoq.",
      "Kitobni o'qimoq, ukasiga bermoq.",
      "Uchta uquvchi, tunuka tom, istiqlol odimlari, ukasini ko'rish.",
      "Huquqiy bilim, oltin soat, katta bino"
    ],
    correctAnswer: "Huquqiy bilim, oltin soat, katta bino"
  },
  {
    question: "Qaysi javobda qo'shma gap berilgan.",
    options: [
      "Onasi qiziga ham, o'g'liga ham ishonadi.",
      "Botirjon ham, Raximjon ham a'lochi.",
      "Azimboy shunday zulm o'tkazdiki, oqibatda xalqning sabr kosasi to'ldi.",
      "Azimboy xalqning sabr-kosasini to'ldiradigan zulm o'tkazdi."
    ],
    correctAnswer: "Azimboy shunday zulm o'tkazdiki, oqibatda xalqning sabr kosasi to'ldi."
  },
  {
    question: "Berilgan gapda tushirilgan tinish belgilarni qo'ying. Faqat bitta iltimos bir bayt o'qiyman shuni yaxshilab eshiting.",
    options: ["Tire", "Ikki nuqta", "Nuqtali vergul", "Ikki nuqta va vergul"],
    correctAnswer: "Ikki nuqta va vergul"
  },
  {
    question: "Istiqlol keldi o'zligimizni angladik. Tinish belgini to'g'ri qo'ying.",
    options: ["Vergul", "Ikki nuqta", "Nuqta", "Tire"],
    correctAnswer: "Vergul"
  },
  {
    question: "Berilgan qo'shma gapning turini aniqlang. Oqsoqol o'tirdi, kotib unga choy uzatdi va o'zi Xolmurod bergan qog'ozni o'qimoqchi bo'ldi.",
    options: [
      "Bog'langan qo'shma gap",
      "Teng bog'lovchili qo'shma gap",
      "Sodda gap",
      "Murakkab qo'shma gap"
    ],
    correctAnswer: "Murakkab qo'shma gap"
  },
  {
    question: "Kesim tobe gapli qo'shma gapni toping.",
    options: [
      "Eshitdimki, kecha kelibsiz.",
      "Yaxshi odatingiz shuki, barvaqt turasiz.",
      "Qachon so'rasangiz, darrov javob beradi.",
      "Kim testni bir daqiqada echsa, 5 ball oladi."
    ],
    correctAnswer: "Eshitdimki, kecha kelibsiz."
  },
  {
    question: "Tabiat bilan tanishtirish metodlari",
    options: [
      "Suhbat, ko'rgazmali, ekskursiya",
      "Ekskursiya, og'zaki nutq, amaliy",
      "Amaliy, ko'rgazmali suhbat",
      "Ko'rgazmali, amaliy, og'zaki metod"
    ],
    correctAnswer: "Ko'rgazmali, amaliy, og'zaki metod"
  },
  {
    question: "Tabiat bilan tanishtirish ish shakllari.",
    options: [
      "Barglar, urug'lar ildiz, meva, sabzavot",
      "Mashgulot, ekskursiya, sayr",
      "Belkurak, ketmon, xaskash",
      "Meva, sabzavot, barg, hayvonlar."
    ],
    correctAnswer: "Mashgulot, ekskursiya, sayr"
  },
  {
    question: "Ekskursiyada qaysi metod qo'llaniladi.",
    options: [
      "Mashg'ulot, og'zaki.",
      "Hikoya, suhbat, amaliy",
      "Sayr, ekskursiya, mehnat",
      "Kuzatish, og'zaki"
    ],
    correctAnswer: "Kuzatish, og'zaki"
  },
  {
    question: "Ekologiya faniga xissa qo'shgan Markaziy Osiyo olimlari",
    options: [
      "Al-Fargoniy, Ibn-Sino, Al-Xorazmiy",
      "Beruniy, Ibn-Sino, Farobiy, Al-Xorazmiy",
      "Forobiy, Navoiy ,Samarkandiy",
      "Navoiy, Beruniy, Bobur."
    ],
    correctAnswer: "Beruniy, Ibn-Sino, Farobiy, Al-Xorazmiy"
  },
  {
    question: "Uzoq muddatli kuzatishlar qaysi javobda to'g'ri ko'rsatilgan.",
    options: [
      "Gallazorni kuzatish, maydonchalardagi o'simliklarni kuzatish , dala maydonlarini kuzatish",
      "Baqani rivojlanishini kuzatish, o'simlikni kuzatish",
      "O'simlikni urug'idan urug'igacha bo'lgan jarayonni kuzatish. Baqani rivojlanishini kuzatish, o'simlikni yil fasllaridagi o'zgarishlarini kuzatish",
      "O'simlikni yil fasllarda o'zgarishini kuzatish"
    ],
    correctAnswer: "O'simlikni urug'idan urug'igacha bo'lgan jarayonni kuzatish. Baqani rivojlanishini kuzatish, o'simlikni yil fasllaridagi o'zgarishlarini kuzatish"
  },
  {
    question: "Tabiat bilan tanishtirish dasturini tuzilishi",
    options: [
      "Jonli-jonsiz tabiat, o'simlik dunyosi va hayvonot olami, kishilarning tabiatdagi mehnati",
      "Jonsiz tabiat bilan tanishtirish, ensiklopedik bilim berish",
      "fasllar bilan tanishtirish ,qushlar olami, o'simliklar dunyosi",
      "Kishilarning tabiatdagi mehnati, o'simliklar va hayvonot olami"
    ],
    correctAnswer: "Jonli-jonsiz tabiat, o'simlik dunyosi va hayvonot olami, kishilarning tabiatdagi mehnati"
  },
  {
    question: "Tabiatshunoslikning bosh yo'nalishi to'g'ri yozilgan qatorni belgilang.",
    options: [
      "Juda kichkinani o'rganish. Juda murakkabni o'rganish. Juda katta, kengni o'rganish.",
      "Juda katta, kengni o'rganish. Juda kichkinani o'rganish. Juda murakkabni o'rganish.",
      "Juda murakkabni o'rganish. Juda katta, kengni o'rganish. Juda kichkinani o'rganish.",
      "Juda kichkinani o'rganish. Juda katta, kengni o'rganish. Juda murakkabni o'rganish."
    ],
    correctAnswer: "Juda katta, kengni o'rganish. Juda kichkinani o'rganish. Juda murakkabni o'rganish."
  },
  {
    question: "Tabiatshunoslikning maqsadi ......",
    options: [
      "Tabiat hodisalarning mohiyatini aniqlashdan iborat",
      "Tabiat qonuniyatlarni bilishdan iborat",
      "Tabiat hodisalarning mohiyatini aniqlash, tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat",
      "Tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat"
    ],
    correctAnswer: "Tabiat hodisalarning mohiyatini aniqlash, tabiat qonuniyatlarni bilish hamda ulardan amalda foydalanish imkoniyatlarni ochib berishdan iborat"
  },
  {
    question: "Tabiatshunoslikda ilmiy tadqiqotlar natijalari nazariya, qonunlar, modellar, gipotezalar va tamoyillar majmuasi bu...",
    options: ["tabiat qonunlari", "tabiat haqidagi nizom", "tabiyat haqida ma'lumot", "tabiat konsepsiyasi"],
    correctAnswer: "tabiat konsepsiyasi"
  },
  {
    question: "'Tabishunoslik va uni o'qitish metodikasi' fanning vazifasi",
    options: [
      "Amaliy fanlarda empirik kuzatishlar orqali inson tafakkuri doirasidagi bilimlarni o'rganish, aniq xulosalar chiqarish va ilmiy xulosalardan insonlarning ijtimoiy turmush tarzini yaxshilash yo'lida foydalanish.",
      "Tabiatshunoslik va uni o'qitish metodikasi bo'lg'usi boshlang'ich sinf o'qituvchilariga tarbiyalovchi taiim tizimini tushunib olish, tabiatshunoslikni o'qitish asoslarini, uning uchun xos bo'lgan shakl, metod va uslublarini, o'quvchilaming bilish faoliyatlariga rahbarlik qilishni o'rganib olishlariga yordam qilish kabi amaliy masalalarini o'z ichida.",
      "yer,quyosh,yulduzlar,suv,havo,tosh,tuproq haqida tushunchalar berish",
      "Yashab turgan dunyomizda voqelik to'g'risidagi amaliy bilimlarni o'rganish, ushbu voqelikni kuzatish va, bu jarayonda olingan natijalarni ilmiy jihatdan bir tizimga solishdan iborat."
    ],
    correctAnswer: "Tabiatshunoslik va uni o'qitish metodikasi bo'lg'usi boshlang'ich sinf o'qituvchilariga tarbiyalovchi taiim tizimini tushunib olish, tabiatshunoslikni o'qitish asoslarini, uning uchun xos bo'lgan shakl, metod va uslublarini, o'quvchilaming bilish faoliyatlariga rahbarlik qilishni o'rganib olishlariga yordam qilish kabi amaliy masalalarini o'z ichida."
  },
  {
    question: "Jonsiz tabiatga kiruvchi jism va narsalarni toping.",
    options: [
      "yer,quyosh,yulduzlar,suv, baliq",
      "yulduzlar,suv,havo,tosh,tuproq, quyon",
      "yer,quyosh,yulduzlar,suv,havo,tosh,tuproq.",
      "odam,xayvon,toshlar"
    ],
    correctAnswer: "yer,quyosh,yulduzlar,suv,havo,tosh,tuproq."
  },
  {
    question: "Jonli tabiatga kiruvchi jism va narsalarni toping.",
    options: [
      "o'simlik,hayvonlar,mikroarganizm,odamlar.",
      "o'simlik,hayvonlar,mikroarganizm, toshlar",
      "mikroarganizm,odamlar, qumlar",
      "odamlar, qumlar, toshlar"
    ],
    correctAnswer: "o'simlik,hayvonlar,mikroarganizm,odamlar."
  },
  {
    question: "Jonsiz tabiat o'ziga xos xususiyati bu...",
    options: [
      "jonsiz tabiat bir turdan boshqa turga almashina oladi",
      "jonsiz tabiat deyilishiga sabab, ular oziqlanmaydi, o'smaydi, ko'paymaydi, rivojlanmaydi, Masalan toshni olsak, unga suv ham havo ham kerak emas.",
      "ular o'sish va rivolanish xususiyatiga ega",
      "ular o'sadi oziqlanmaydi"
    ],
    correctAnswer: "jonsiz tabiat deyilishiga sabab, ular oziqlanmaydi, o'smaydi, ko'paymaydi, rivojlanmaydi, Masalan toshni olsak, unga suv ham havo ham kerak emas."
  },
  {
    question: "Jonli tabiat o'ziga xos xususiyati bu...",
    options: [
      "jonli tabiatga kiruvchilar oziqlanadilar, nafas oladilar ,o'sadilar,ko'payadilar,.jonli tabiat vakillari o'simlik va ozuqa bo'lmasa yashay olmaydilar.",
      "jonli tabiat deyilishiga sabab,ular oziqlanmaydi, o'smaydi, ko'paymaydi, rivojlanmaydi, Masalan toshni olsak,unga suv ham havo ham kerak emas",
      "jonli tabiat bir turdan boshqa turga almashina oladi",
      "o'ziga xos xusisiyati ko'p oziqlanadi,ko'paymaydi,rivojlanadi"
    ],
    correctAnswer: "jonli tabiatga kiruvchilar oziqlanadilar, nafas oladilar ,o'sadilar,ko'payadilar,.jonli tabiat vakillari o'simlik va ozuqa bo'lmasa yashay olmaydilar."
  },
  {
    question: "'Saydana', 'Mineralogiya', 'Qadimgi avlodlardan qolgan yodgorliklar', 'Hindiston', 'Geodeziya' kabi asarlar muallifi qaysi mutaffakir bo'lgan",
    options: [
      "Abu Rayxon Beruniy",
      "Abu Nasr Farobiy",
      "Muhammad al Xorazmiy",
      "Ibn Sino"
    ],
    correctAnswer: "Abu Rayxon Beruniy"
  },
  {
    question: "'Yer yuzida chang va tutun bo'lmasa, inson ming yil yashar edi' degan iboraning muallifi kim",
    options: [
      "Abu Rayxon Beruniy",
      "Abu Ali Ibn Sino",
      "Muhammad al Xorazmiy",
      "Yusuf xos Xojib 'Qutadg'u bilib'"
    ],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "Kasallikni davolashda 'suvni tozalashga oid tavsiyalar' qaysi alloma tomonidan bayon etilgan",
    options: [
      "Abu Ali Ibn Sino",
      "Abu Rayxon Beruniy",
      "Muhammad al Xorazmiy",
      "Abu Nosir Farobiy"
    ],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "Qaysi alloma o'z qarashlarida 'suvni isrof qilish -- nonni isrof qilishdek gunoh ekanligini, hovuz, quduq, sardoba suvini toza saqlash hamma uchun ham savob, ham farz ekanligini' tushuntirilgan",
    options: ["Alisher navoiy.", "Ibn Sino", "Al Xorazmiy", "Al Beruniy"],
    correctAnswer: "Alisher navoiy."
  },
  {
    question: "'Boburnoma'da tabiat haqida nimalar ko'proq bayon etilgan",
    options: [
      "Unda yer, suv, havo turli tabiiy hodisalarga tegishli xalq so'zlari ko'plab topiladi. o'lkamiz tarixi, geografiyasi, tabiati, etnografiyasi, madaniyati to'g'risidagi.",
      "Unda madanlar va dorivor giyohlar haqida ma'lumotlar keltirilgan",
      "Hayvonlarning emigratsiyasi haqida qaydlar mavjud",
      "Qushlar haqida ma'lumotlar keltirilgan"
    ],
    correctAnswer: "Unda yer, suv, havo turli tabiiy hodisalarga tegishli xalq so'zlari ko'plab topiladi. o'lkamiz tarixi, geografiyasi, tabiati, etnografiyasi, madaniyati to'g'risidagi."
  },
  {
    question: "Quyosh asosan qaysi moddalardan tashkil topgan",
    options: ["vodorod, geliy.", "azot, natriy", "magniy, rux", "kaliy natriy"],
    correctAnswer: "vodorod, geliy."
  },
  {
    question: "Quyosh nuri yerga qancha vaqtda yetib keladi",
    options: [
      "9-minut 18-sekund",
      "7-minut 19-sekund",
      "8-minut 18-sekund.",
      "10-minut 18-sekunt"
    ],
    correctAnswer: "8-minut 18-sekund."
  },
  {
    question: "Galaktika tushunchasi qaysi javobda to'g'ri ko'rsatilgan",
    options: [
      "yulduzlararo fazodan iborat sistemadir.",
      "oy sistemasidan va 150 mlrd yulduz hamda yulduzlararo fazodan iborat sistemadir.",
      "quyosh sistemasidan va 150 mlrd yulduz hamda yulduzlararo fazodan iborat sistemadir,",
      "oy yulduzlardan iborat fazodan iborat sistema"
    ],
    correctAnswer: "quyosh sistemasidan va 150 mlrd yulduz hamda yulduzlararo fazodan iborat sistemadir,"
  },
  {
    question: "Quyosh sistemasidagi sayyoralar ikki guruhga bo'linadi",
    options: ["ichki va tashqi.", "ustki va ostki", "oldi va yoni", "katta va kichik"],
    correctAnswer: "ichki va tashqi."
  },
  {
    question: "Quyoshdan Yergacha bo'lgan masofa o'rta hisobda qancha",
    options: ["149,6 mln.km.", "123,6 mln.km", "113,9 mln.km", "150 mln.km"],
    correctAnswer: "149,6 mln.km."
  },
  {
    question: "Yer Quyosh sistemasidagi qanday sayyora",
    options: [
      "suv mavjud bo'lmagan sayyora",
      "hayot mavjud bo'lmagan sayyora",
      "organik hayot mavjud bo'lgan sayyora.",
      "havo mavjud bo'magan sayyora"
    ],
    correctAnswer: "organik hayot mavjud bo'lgan sayyora."
  },
  {
    question: "Biosfera yerning qanday qobig'i",
    options: ["hayot qobig'i.", "suv qobig'i", "azon qatlami qobig'i", "litosfera sirtqi qobig'i"],
    correctAnswer: "hayot qobig'i."
  },
  {
    question: "Quyosh markazida tempuratura necha darajada bo'ladi",
    options: ["50 mln", "30 mln", "20 mln.", "40 mln"],
    correctAnswer: "20 mln."
  },
  {
    question: "Qadimgi grek olimlaridan kimlar dunyoning atomlardan tuzilganligi haqida farazni bildirishdi",
    options: ["Aristotel, Gippokrat", "Gippokrat, Kongle", "Disterveg,Gippokrat", "Demakrit, Epikyur"],
    correctAnswer: "Demakrit, Epikyur"
  },
  {
    question: "Qadimgi grek olimidan ushbu fikr muallifini toping. 'Sababsiz hech narcha hosil bo'lmaydi va hech narsa izsiz yo'qolib ketmaydi'.",
    options: ["Demakrit", "Empedokl", "Gippokrat", "Aristotel"],
    correctAnswer: "Empedokl"
  },
  {
    question: "Qaysi grek olimi anatomiya, botanika, sistematika va hayvonlar embriologiyasini ilmiy asosladi",
    options: ["Gippokrat", "Empedokl", "Aristotel", "Demakrit"],
    correctAnswer: "Aristotel"
  },
  {
    question: "Qaysi grek olimi yerning dumaloqligini isbotlaydigan geografik karta tuzdi",
    options: ["Ptolomey", "Aristotel", "Empedokl", "Gippokrat"],
    correctAnswer: "Ptolomey"
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
    const savedPool = localStorage.getItem(QUESTION_POOL_KEY);
    
    if (savedPool) {
        availableQuestionIndices = JSON.parse(savedPool);
    }

    // Agar xotira bo'sh bo'lsa yoki savollar tugagan bo'lsa -> Yangidan to'ldiramiz
    if (!availableQuestionIndices || availableQuestionIndices.length === 0) {
        // Indekslar ro'yxatini tuzamiz [0, 1, 2, ... 449]
        availableQuestionIndices = Array.from(questionsData.keys());
        
        // Ularni yaxshilab aralashtiramiz
        shuffleArray(availableQuestionIndices);
        
        // Xotiraga saqlaymiz
        savePoolProgress();
    }
}

function savePoolProgress() {
    localStorage.setItem(QUESTION_POOL_KEY, JSON.stringify(availableQuestionIndices));
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



