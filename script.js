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
  },
  {
    question: "Yer shari o'z o'qi atrofida qaysi tomonga aylanadi",
    options: ["Shimoldan janubga", "Janubdan sharqqa", "Janubdan shimolga", "G'arbdan sharqqa"],
    correctAnswer: "G'arbdan sharqqa"
  },
  {
    question: "Sutka deb nimaga aytiladi",
    options: [
      "Yerning gorizontal xarakati",
      "Vaqtning qaytmas xususiyati",
      "Yerning o'z o'qi atrofida aylanib chiqish vaqti",
      "Yerning aylanma harakati"
    ],
    correctAnswer: "Yerning o'z o'qi atrofida aylanib chiqish vaqti"
  },
  {
    question: "Yer o'z o'qi atrofida qancha vaqtda bir marta to'liq aylanib chiqadi",
    options: [
      "21 soat 36 minut 8 sekund",
      "13 soat 51 minut 9 sekund",
      "23 soat 56 minut 4 sekund",
      "14 soat 30 minut 6 sekunt"
    ],
    correctAnswer: "23 soat 56 minut 4 sekund"
  },
  {
    question: "Yer sharida qanday qutblar bor",
    options: ["Shimoldan janubga", "Janubdan sharqqa", "G'arbiy va sharqiy", "Shimoliy va janubiy"],
    correctAnswer: "Shimoliy va janubiy"
  },
  {
    question: "Meridian chiziqlar deb nimaga aytiladi",
    options: [
      "ikki qutbning parallel chizig'i",
      "Ikki qutbni birlashtiruvchi chiziqlar",
      "ikki qutbning birlashmaydigan chizig'i",
      "ikki qutbning ajraladigan chizig'i"
    ],
    correctAnswer: "Ikki qutbni birlashtiruvchi chiziqlar"
  },
  {
    question: "Oy Yer atrofida qaysi tomonga qarab aylanadi",
    options: ["Shimoldan janubga", "G'arbdan sharqqa", "Janubdan sharqqa", "Sharqdan shimolga"],
    correctAnswer: "G'arbdan sharqqa"
  },
  {
    question: "Quyosh sistemasidagi yirik osmon jismlari nima deb ataladi",
    options: ["sayyoralar", "yulduzlar", "sun'iy yo'ldoshlar", "oy"],
    correctAnswer: "sayyoralar"
  },
  {
    question: "Sayyoralar atrofida doimiy aylanib turadigan osmon jismlari nima deb ataladi",
    options: ["yulduzlar", "sun'iy yo'ldoshlar", "tabiiy yo'ldoshlar", "sayyoralar"],
    correctAnswer: "tabiiy yo'ldoshlar"
  },
  {
    question: "Yer sharining kichraytirilgan tasviri ya'ni modeli nima deb ataladi",
    options: ["rebus", "yulduz", "quyosh", "globus"],
    correctAnswer: "globus"
  },
  {
    question: "Yer sharining yadrosi asosan qaysi moddalardan tashkil topgan",
    options: ["Temir, nikel", "Rux, mis", "Temir, uran", "Uran, temir"],
    correctAnswer: "Temir, nikel"
  },
  {
    question: "To'rt fasl ham o'z vaqtida bo'ladigan iqlim mintaqasi bu..",
    options: ["Kontinental iqlim", "Issiq iqlim", "Mo'tadil iqlim", "subtropik iqlim"],
    correctAnswer: "Mo'tadil iqlim"
  },
  {
    question: "Quyosh sistemasida Yer sayyorasi nechanchi o'rinda turadi",
    options: ["5 o'rinda", "6 o'rinda", "3 o'rinda", "4 o'rinda"],
    correctAnswer: "3 o'rinda"
  },
  {
    question: "Tekislikning yuzasi dengiz sathidan balandligi 200 m gacha bo'lsa qanday nom bilan ataladi",
    options: ["Past tekislik", "Yaylov", "Dala", "Chuqurlik"],
    correctAnswer: "Past tekislik"
  },
  {
    question: "Dengiz sathidan 500 m dan yuqori bo'lgan relef shaklga qaysi relef shakli kiradi",
    options: ["Yassitog'lik", "Yaylov", "Dala", "Past tekislik"],
    correctAnswer: "Yassitog'lik"
  },
  {
    question: "Qatorasiga tizilib ketgan tutash tog'lar nima deb ataladi",
    options: ["Yassitog'lik", "Past tekislik", "tog' tizmasi", "Dala"],
    correctAnswer: "tog' tizmasi"
  },
  {
    question: "Zilzilaning 1 ball xolati qanday bo'ladi",
    options: [
      "Yer tebranishini sezgir asboblar sezadi",
      "Juda kuchsiz,tinch turgan kishilar ba'zan biladi.",
      "Kuchsiz,tinch turgan kishilar ko'pchiligi sezishi mumkin",
      "Kuchli tebranish holati"
    ],
    correctAnswer: "Yer tebranishini sezgir asboblar sezadi"
  },
  {
    question: "Zilzilaning 4 ball xolati qanday bo'ladi",
    options: [
      "Kuchsiz,tinch turgan kishilar ko'pchiligi sezishi mumkin",
      "Yer tebranishini sezgir asboblar sezadi",
      "Kuchli kishilar sezadi",
      "O'rtacha kuchga ega bo'lib,deyarli hamma sezadi. Deraza oynalari,eshik dirillaydi"
    ],
    correctAnswer: "O'rtacha kuchga ega bo'lib,deyarli hamma sezadi. Deraza oynalari,eshik dirillaydi"
  },
  {
    question: "Zilzila necha ball sodir bo'lganda butun binolar qulaydi",
    options: ["6 ball", "12 ball", "11 ball", "13 ball"],
    correctAnswer: "11 ball"
  },
  {
    question: "Temperaturaning o'zgarib turishi oqibatida qanday nurash ro'y beradi",
    options: ["kimyoviy qulash", "biologik portlash", "fizik portlash", "fizik nurash"],
    correctAnswer: "fizik nurash"
  },
  {
    question: "Qaysi tabiiy omil - geomorfologik agent sifatida tog' jinslariga ta'sir etib, yemirish, uchirish va yotqizish kabi ishlarni bajaradi",
    options: ["yomg'ir", "qor", "shamol", "quyosh"],
    correctAnswer: "shamol"
  },
  {
    question: "Nurash jarayoni- o'zining xususiyatiga ko'ra qanday turlarga bo'linadi",
    options: ["biologic, kimyoviy", "fizik, biologik", "kimyoviy,fizik", "fizik,kimyoviy,organic"],
    correctAnswer: "fizik,kimyoviy,organic"
  },
  {
    question: "Planetamizdagi suv qobig'ini nima deb aytiladi",
    options: ["gidrosfera", "litosfera", "troposfera", "atmosfera"],
    correctAnswer: "gidrosfera"
  },
  {
    question: "Inson tomonidan qazilgan suv yo'li nima deb ataladi.",
    options: ["kanal", "ariq", "daryo", "soy"],
    correctAnswer: "kanal"
  },
  {
    question: "Tabiatda bir vaqtning ozida qattiq, suyuq va gaz (bug') holida uchraydigan yagona mineral bu...",
    options: ["tuproq", "havo", "suv", "yomg'ir"],
    correctAnswer: "suv"
  },
  {
    question: "Suv boshqa elementlardan asosan nimasi bilan ajralib turadi",
    options: [
      "eruvchanlik xususiyati (uglerod kislorod)",
      "yoqiluvchanlik xususiyati (kislarod)",
      "uchuvchanlik xususiyati (azot)",
      "yonish xususiyati(geliy)"
    ],
    correctAnswer: "eruvchanlik xususiyati (uglerod kislorod)"
  },
  {
    question: "Bir qancha miqdordagi suv nimaning ta'sirida bug'ga aylanib, yuqoriga, ko'tariladi va to'yinib kondensiyalanib, necha ming km yog'in bo'lib yana yerga tushadi",
    options: [
      "oy nuri ta'sirida, yer yuzasidan har yili 120 ming km suv",
      "quyosh nuri ta'sirida, yer yuzasidan har yili 820 ming km suv",
      "quyosh nuri ta'sirida, yer yuzasidan har yili 610 ming km suv",
      "quyosh nuri ta'sirida, yer yuzasidan har yili 520 ming km suv"
    ],
    correctAnswer: "quyosh nuri ta'sirida, yer yuzasidan har yili 520 ming km suv"
  },
  {
    question: "Suvning to'xtovsiz aylanishi natijasida ko'l suvlarining suvi qancha vaqtda aylanib yangilanib turadi",
    options: ["20 yilda bir marta", "5 yilda bir marta", "10 yilda bir marta", "7 yilda bir marta"],
    correctAnswer: "10 yilda bir marta"
  },
  {
    question: "Suvning to'xtovsiz aylanishi natijasida daryo suvlarining suvi qancha vaqtda aylanib yangilanib turadi.",
    options: ["9 sutkada", "12 sutkada", "13 sutkada", "15 sutkada"],
    correctAnswer: "12 sutkada"
  },
  {
    question: "18 yoshdan 50 yoshgacha bo'lgan kishilarning organizmida gavda og'irligining necha foizi suv tashkil qiladi.",
    options: ["61 %", "66%", "62%", "60%"],
    correctAnswer: "61 %"
  },
  {
    question: "Odam organizimida suv miqdorining necha foiz (% ) ga kamayishi esa kishini halok qilishga olib keladi",
    options: ["22-54%", "20-25%", "20-21%", "23-27 %"],
    correctAnswer: "20-25%"
  },
  {
    question: "Odam organizmi o'z hayotiy jarayonlarini amalga oshirishi uchun sutkasida o'rtacha qancha suvni qabul qiladi va uni o'z to'qimalaridan o'tkazib, chiqarib yuboradi",
    options: ["2.3litr", "2.6litr", "2.5 litr", "3.5 litr"],
    correctAnswer: "2.5 litr"
  },
  {
    question: "Integratsiya so'zining ma'nosi nima.",
    options: ["kesishtirish", "ayrish", "birlashtirish", "o'shish"],
    correctAnswer: "birlashtirish"
  },
  {
    question: "Qaysi yulduz joyidan siljimaydi.",
    options: ["yer", "osmon", "quyosh", "oy"],
    correctAnswer: "quyosh"
  },
  {
    question: "Xaritada baland tog'lar qanday rangda bo'ladi.",
    options: ["och yashil", "toq sariq", "to'q qizil", "to'q jigarrang"],
    correctAnswer: "to'q jigarrang"
  },
  {
    question: "O'zbekiston Respublikasi shimoliy qismida qaysi davlat bilan chegardosh",
    options: ["Qirg'iziston", "Turkmaniston", "Qozog'iston", "Tojikiston"],
    correctAnswer: "Qozog'iston"
  },
  {
    question: "O'zbekiston Respublikasi sharqiy qismida qaysi davlat bilan chegardosh",
    options: ["Qoraqolpog'iston", "Qirg'iziston", "O'zbekiston", "Turkmaniston"],
    correctAnswer: "Qirg'iziston"
  },
  {
    question: "O'zbekiston Respublikasi janubiy-g'arbiy qismida qaysi davlat bilan chegardosh.",
    options: ["Turkmaniston", "Tojikiston", "Afg'oniston", "Qirg'iziston"],
    correctAnswer: "Turkmaniston"
  },
  {
    question: "Afg'on shamoli asosan qaysi viloyatda sodir bo'ladi.",
    options: ["Sirdaryo", "Buxoro", "Surxondaryo", "Navoiy"],
    correctAnswer: "Surxondaryo"
  },
  {
    question: "Qo'qon shamoli qaysi faslda sodir bo'ladi.",
    options: ["yoz --kuz", "bahor -kuz", "kuz-qish", "bahor-qish"],
    correctAnswer: "bahor -kuz"
  },
  {
    question: "Yozda O'zbekistonga, qaysi tomondan shamollar ko'proq esadi",
    options: ["shimoldan va g'arbdan", "g'arbdan va sharqa", "shimoldan va sharqa", "janubdan sharqqa"],
    correctAnswer: "shimoldan va g'arbdan"
  },
  {
    question: "O'zbekistonning tekislik qismi bir yilda necha kun yog'inli bo'ladi.",
    options: ["35-40 kun", "45-50 kun", "48-50 kun", "43-50 km"],
    correctAnswer: "35-40 kun"
  },
  {
    question: "O'zbekiston janubida quyosh necha soat nur sochib turadi.",
    options: [
      "4000-31000soat",
      "2000-31000 soat",
      "3000-33000 soat",
      "3000-3100 soat"
    ],
    correctAnswer: "3000-3100 soat"
  },
  {
    question: "Quyosh nuri qaysi faslda tik tushadi.",
    options: ["yozda", "kuzda", "bahorda", "qishda"],
    correctAnswer: "yozda"
  },
  {
    question: "Tabiiy ravishda to'plangan suv havzasi nima deb ataladi.",
    options: ["daryo", "hovuz", "cho'l", "ko'l"],
    correctAnswer: "ko'l"
  },
  {
    question: "Suv tabiatda necha xil ko'rinishda uchraydi.",
    options: ["4-xil", "3-xil", "1-xil", "5-xil"],
    correctAnswer: "3-xil"
  },
  {
    question: "Planetamizni o'rab olgan havo qobig'iga nima deyiladi.",
    options: ["Biosfera", "Litosfera", "Atmosfera", "Gidrosfera"],
    correctAnswer: "Atmosfera"
  },
  {
    question: "Atmosferaning qalinligi necha ming km ga yetadi.",
    options: ["3000 km", "400 km", "500 km", "560 km"],
    correctAnswer: "3000 km"
  },
  {
    question: "Atmosferaning tarkibida necha foiz kislorod mavjud.",
    options: ["20.95%", "19.23%", "20.10%", "23.10%"],
    correctAnswer: "20.95%"
  },
  {
    question: "Atmosferaning tarkibida necha foiz argon gazi mavjud",
    options: ["0.85%", "0.90%", "0.80%", "0.93%"],
    correctAnswer: "0.93%"
  },
  {
    question: "Yonuvchi foydali qazilmalarga nimalar kiradi.",
    options: ["Ko'mir,neft,gaz,torf", "Gaz, ko'mir", "Neft ,gaz", "Ko'mir ,gaz,neft"],
    correctAnswer: "Ko'mir,neft,gaz,torf"
  },
  {
    question: "Havoning ma'lum vaqt va joydagi holatiga nima deyiladi",
    options: ["iqlim", "havo aylanishi", "ob-havo", "relyef"],
    correctAnswer: "ob-havo"
  },
  {
    question: "Amudaryoning uzunligi qancha.",
    options: ["2500 km", "2400 km", "2700 km", "2300 km"],
    correctAnswer: "2400 km"
  },
  {
    question: "Eng kichik sayyora",
    options: ["Merkuriy", "Yupiter", "Neptun", "Uran"],
    correctAnswer: "Merkuriy"
  },
  {
    question: "Havoda yonib, yorug' iz qoldiradigan osmon jismi nima deb ataladi.",
    options: ["Yulduz", "Oy", "Meteorit", "Quyosh"],
    correctAnswer: "Meteorit"
  },
  {
    question: "Fevral oyi 29 kunlik bo'lgan yil nomi nima deyiladi.",
    options: ["Oddiy yili", "Murakkab yil", "Takroriy yili", "Kabisa yili"],
    correctAnswer: "Kabisa yili"
  },
  {
    question: "Tabiiy boyliklar necha turga bo'linadi.",
    options: ["3 ta", "5 ta", "1 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Agar havoda chang va g'ubor, bo'lmaganda edi, inson ming yil umr ko'rgan bo'lar edi», - degan mashhur ibora kimga tegishli?",
    options: ["Al-Xorazmiy", "Termiziy", "Buxoriy", "Ibn Sino"],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Tabiatshunoslik darslariga qo'yiladigan umumiy talablarga qaysila kiradi?",
    options: [
      "Ta'lim-tarbiyaviy, didaktik, psixologik, gigiyenik",
      "Gigiyenik, umumiy, ijtimoiy, falsafiy",
      "Jismoniy, huquiy, umumiy, didaktik",
      "Didaktik, ijtimoiy, umumiy, gigiyenik"
    ],
    correctAnswer: "Ta'lim-tarbiyaviy, didaktik, psixologik, gigiyenik"
  },
  {
    question: "Jonsiz tabiiy tarqatma materiallarga nimalar kiradi?",
    options: [
      "O'simliklar, granit, kvarts",
      "Hayvonlar, temir, osh tuzi, loy",
      "Loy, qum, osh tuzi, temir, cho'yan, toshko'mir",
      "Hayvonlar va o'simliklar"
    ],
    correctAnswer: "Loy, qum, osh tuzi, temir, cho'yan, toshko'mir"
  },
  {
    question: "Yer bilan osmonning tutashgan joyi nima",
    options: ["Ufq", "Tog'lar deyiladi", "Tekisliklar", "Osmon"],
    correctAnswer: "Ufq"
  },
  {
    question: "Tabiatshunoslik darslarida kuzatish qaysi metodlar guruhiga kiradi?",
    options: [
      "Tabiatshunoslikning og'zaki metodi",
      "Tabiatshunoslikning amaliy metodi",
      "Tabiatshunoslikning ko'rgazmali metodi",
      "Tabiatshunoslikning nazariy metodi"
    ],
    correctAnswer: "Tabiatshunoslikning ko'rgazmali metodi"
  },
  {
    question: "Ekologiyaning tarifi qaysi qatorda to'g'ri ko'rsatilgan?",
    options: [
      "atmosferaning tozaligi",
      "organizmlarning yashash sharoiti",
      "tirik organizmlarning yashash sharoiti yoki tashqi muhit bilan o'zaro munosabati tashqi muxitning o'zaro munosabati",
      "organizimlarning tashqi muhitga ta'siri"
    ],
    correctAnswer: "tirik organizmlarning yashash sharoiti yoki tashqi muhit bilan o'zaro munosabati tashqi muxitning o'zaro munosabati"
  },
  {
    question: "....... fikricha inson tabiatning eng go'zal mavjudotidir. Inson tabiatga ergashib, hamma narsani bilib olishi mumkin. Bu kimning fikri?",
    options: ["Z.M.Bobur", "Ibn Sino", "Ya. A.Komenskiy", "Abu Nasr Farobiy"],
    correctAnswer: "Ya. A.Komenskiy"
  },
  {
    question: "Ekologiya tushunchasi qaysi so'zdan olingan , nima degan ma'noni bildiradi?",
    options: [
      "Lotincha «eko» --- makon va «logos» --- ilm",
      "Ruscha «eko» --- uy, makon va «logos» --- dars",
      "Inglizcha «eko» --- borliq, makon va «logos» --- fan",
      "Yunoncha «eko» --- tabiat, makon va «logos» --- fan"
    ],
    correctAnswer: "Yunoncha «eko» --- tabiat, makon va «logos» --- fan"
  },
  {
    question: "Ekologiya so'zining tarifi qaysi qatorda to'g'ri ko'rsatilgan?",
    options: [
      "tirik organizmlaming yashash sharoiti yoki tashqi muhit bilan o'zaro munosabati tashqi muhitning o'zaro munosabati",
      "atmosferaning tozaligi",
      "organizmlaming yashash sharoiti",
      "organizimlaming tashqi muhitga ta'siri"
    ],
    correctAnswer: "tirik organizmlaming yashash sharoiti yoki tashqi muhit bilan o'zaro munosabati tashqi muhitning o'zaro munosabati"
  },
  {
    question: "'Bilginki daryoning ko'zlari yoshlansa uning boshiga ham kulfat tushgan bo'ladi' bu so'zlar qaysi allomaning fikri?",
    options: [
      "Ekologiya tushunchasini fanga birinchi bo'lib kim tomondan kiritilgan.",
      "Ernest Gekkel",
      "Aristotel",
      "Platon",
      "Al-Xorazmiy",
      "Muxammad Muso-al Xorazmiy",
      "Abu Rayxon Beruniy, Abu-Nasr Forobiy, Alisher Navoiy",
      "Ya.A.Komenskiy",
      "Ibn Sino"
    ],
    correctAnswer: "Ibn Sino"
  },
  {
    question: "Beruniy 'Saydana' deb nomlangan asarida necha-xil dori darmonlarni tavsiflagan?",
    options: ["1116 ta", "1106 ta", "1016 ta", "1006 ta"],
    correctAnswer: "1116 ta"
  },
  {
    question: "Qaysi olimning 'Qadimgi avlodlardan qolgan yodgorliklar' va 'Hindiston' asarlarida o'simlik va hayvonlarning tuzilishi hamda ularning tashqi muhit bilan o'zaro aloqasi haqida ham qiziqarli ma'lumotlar keltirilgan?",
    options: [
      "Abu Rayhon Beruniy",
      "Muhammad al Xorazmiy",
      "Abu Ali Ibn sino",
      "Abu Nasr Farobiy"
    ],
    correctAnswer: "Abu Rayhon Beruniy"
  },
  {
    question: "Qaysi buyuk mutafakkirning yirik qomusiy olim sifatidatanilgan. Uning 450 ta asari mavjud boiib, bizgacha 240 tasi yetib kelgan?.",
    options: [
      "Abu Ali Ibn sino",
      "Muhammad al Xorazmiy",
      "Abu Rayhon Beruniy",
      "Abu Nasr Farobiy"
    ],
    correctAnswer: "Abu Ali Ibn sino"
  },
  {
    question: "Organizmlarning muhitga moslashishi nima deyiladi?",
    options: ["Adaptatsiya", "Yevribiont", "Stress", "Gomeostaz"],
    correctAnswer: "Adaptatsiya"
  },
  {
    question: "O'simliklarning hayotiy shakllari",
    options: [
      "Daraxt, buta, chala buta, o't o'simliklar",
      "Bir yillik, ikki yillik va ko'p yillik",
      "Chala buta, suv o'simliklari, yaylovlar",
      "Cho'l, tropik, tundra zonasi o'simliklari"
    ],
    correctAnswer: "Daraxt, buta, chala buta, o't o'simliklar"
  },
  {
    question: "O'zbekiston Respublikasi 'Osimliklar dunyosini muhofaza qilish va undan foydalanish to'g'risida' qonuni qachon qabul qilingan?",
    options: ["1997 yil", "1999 yil", "2001 yil", "2006 yil"],
    correctAnswer: "1997 yil"
  },
  {
    question: "Ekologik omillar nechta guruhga bo'linadi.",
    options: ["3 ta", "4 ta", "2 ta", "7 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Antropogen faktorlar bu ...",
    options: [
      "kishilarning o'simliklarga, o'simliklar qoplamiga va ular yashab turgan muhit sharoitiga turli shakldagi tasir faktorlari kiradi.",
      "tirik organizmlarni yashash muhitini o'zgartiradigan yoki u laming o'zlariga tasir etadigan inson faoliyatining ko'rinishi",
      "jonsiz va jonli tabiatni o'zaro munosabatlari va tasiri",
      "organizmlarni bir biriga bevosita yoki bilvosita turli xil ta'siri"
    ],
    correctAnswer: "kishilarning o'simliklarga, o'simliklar qoplamiga va ular yashab turgan muhit sharoitiga turli shakldagi tasir faktorlari kiradi."
  },
  {
    question: "Og'ir metallarni tuproqqa avtomobil gazlari bilan kelib tushishi tiriklikka qanday salbiy ta'sir qiladi?",
    options: [
      "Tuproqni ifloslantiradi",
      "O'simliklarga tasir qiladi",
      "Hayvonlarga tasir qiladi",
      "Tuproqdagi mikroorganizmlami o'ldirib tabiatdagi moddalarni aylanma harakatini to'xtatadi, o'simlik va hayvonlarga tasir qiladi"
    ],
    correctAnswer: "Tuproqdagi mikroorganizmlami o'ldirib tabiatdagi moddalarni aylanma harakatini to'xtatadi, o'simlik va hayvonlarga tasir qiladi"
  },
  {
    question: "Atmosfera qatlamlarining to'g'ri tartibini ajrating.",
    options: [
      "stratosfera, mezosfera, troposfera, ekzosfera, termosfera",
      "troposfera, stratosfera, mezosfera, termosfera, ekzosfera",
      "stratosfera, troposfera, termosfera, ekzosfera",
      "ekzosfera, termosfera, stratosfera, mezosfera, troposfera"
    ],
    correctAnswer: "troposfera, stratosfera, mezosfera, termosfera, ekzosfera"
  },
  {
    question: "Uzun kun o'simliklari qayerda uchraydi?",
    options: ["Ekvator", "Shimoliy rayonlarda", "O'rtacha kenglikda rayonlarda", "Janubiy rayonlarda"],
    correctAnswer: "Ekvator"
  },
  {
    question: "Ya.A.Komenskiy 'Onalar maktabi' da nechta fandan ma'lumot olishni tavsiya etgan?",
    options: ["18 ta", "17 ta", "12 ta", "13 ta"],
    correctAnswer: "18 ta"
  },
  {
    question: ".....--- tabiat jismlari va hodisalarning tabiiy sharoitlarda maqsadga yo'nalgan va bevosita shu hodisalarni borishiga aralashmagan holda sezgilan bilan qabul qilib olishdir",
    options: ["kuzatish", "taqqoslash", "qiyoslash", "solishtirish"],
    correctAnswer: "kuzatish"
  },
  {
    question: "Kuzatishlar davomiyligi va xarakteri bo'yicha qanday turlari bo'lishi mumkin?",
    options: [
      "qisqa muddatli va uzoq muddatli",
      "harakatli va harakatsiz",
      "uzlukli va uzluksiz",
      "solishtirma va qiyosiy"
    ],
    correctAnswer: "qisqa muddatli va uzoq muddatli"
  },
  {
    question: "O'simlik va hayvonlami o'sishi hamda rivojlanishi, tabiatdagi mavsumiy o'zgarishlar haqidagi bilimlarning jamg'arilishi uchun kuzatishning ancha murakkabroq turi --- ...dan foydalaniladi?",
    options: ["uzoq muddatli", "harakatli va harakatsiz", "uzlukli va uzluksiz", "solishtirma va qiyosiy"],
    correctAnswer: "uzoq muddatli"
  },
  {
    question: "Qanday kuzatishlar mazmuniga ko'ra murakkab bo'lganligi sababli, maktabgacha ta'limda o'rta hamda katta guruxlarda olib boriladi?",
    options: [
      "Solishtirma va uzoq muddatli",
      "Harakatli va harakatsiz",
      "Uzlukli va uzluksiz",
      "solishtirma va qiyosiy"
    ],
    correctAnswer: "Solishtirma va uzoq muddatli"
  },
  {
    question: "Kuzatishning bu turi bolalarda tabiat hodisalarini analiz qilish, ayrim ma'lumotlarni qiyoslash, soddaroq xulosalar chiqarish ko'nikmalarining hosil bolishiga yordam beradi",
    options: [
      "Solishtirma va uzoq muddatli",
      "Harakatli va harakatsiz",
      "Uzlukli va uzluksiz",
      "solishtirma va qiyosiy"
    ],
    correctAnswer: "Solishtirma va uzoq muddatli"
  },
  {
    question: "Tarqatma materiallardan foydalanib kuzatish qaysimetodga kiradi?",
    options: ["ko'rgazmali metod", "hikoya,mehnat", "amaliy metod", "suhbat, rasm"],
    correctAnswer: "ko'rgazmali metod"
  },
  {
    question: "O'yin, mehnat, kundalik kuzatish qaysi metodga kiradi?",
    options: ["amaliy metod", "oddiy tajribalar", "ko'rgazmali metod", "suhbatli, og'zaki nutq"],
    correctAnswer: "amaliy metod"
  },
  {
    question: "Ekskursiya turlari",
    options: [
      "tabiatshunoslik va qishloq xo'jalik",
      "hayvonot bogiga, mevazorga",
      "Dalaga, paxta maydonlariga",
      "qishloq xo'jaligi va dala maydonlariga"
    ],
    correctAnswer: "tabiatshunoslik va qishloq xo'jalik"
  },
  {
    question: "Predmetli o'yinlarga qaysilar kiradi?",
    options: [
      "domino, loto, zoologiya, botanika",
      "stol bosma o'yinlari, zoologiya lotosi.",
      "chumchuq va avtomobil, tovuq jo 'jalari bilan",
      "ajoyib xaltacha, uy hayvonlari solingan rasmlar"
    ],
    correctAnswer: "domino, loto, zoologiya, botanika"
  },
  {
    question: "Stol bosma o'yinlari qaysilar?",
    options: [
      "zoologiya lotosi, botanika lotosi, yilning turli fasli, mevalar, o'simliklar",
      "Domino, predmetli rasm, turli xil ildizlar",
      "tabiat materiallaridan turli narsalar yasash",
      "zoologiya lotosi, hayvonlar rasmi, o'simliklar rasmi"
    ],
    correctAnswer: "zoologiya lotosi, botanika lotosi, yilning turli fasli, mevalar, o'simliklar"
  },
  {
    question: "Ekskursiyada qaysi metod qo'llaniladi?",
    options: [
      "kuzatish, og'zaki",
      "mashgulot, og'zaki",
      "hikoya, suhbat, amaliy.",
      "sayr, ekskursiya, mehnat"
    ],
    correctAnswer: "kuzatish, og'zaki"
  },
  {
    question: "Yer maydonchasiga tavsiya etilgan gullar qaysilar?",
    options: [
      "gulbeor, qo'qongul, astra, romashka, piyongul, gulsapsar, lola",
      "astra, atirgul, piyongul, gvozdika, gladiolus, gulbiyorqo'qongul, lola",
      "atirgul, gulbiyor, lola, astra, gulbiyor",
      "romashka, atirgul, gulbiyor, lola, astra"
    ],
    correctAnswer: "gulbeor, qo'qongul, astra, romashka, piyongul, gulsapsar, lola"
  },
  {
    question: "Qisqa muddatli kuzatushga qaysilar kiradi?",
    options: [
      "qor yog'ishi, yomg'ir yog'ishi, kamalakni kuzatish",
      "qushlar va gullami kuzatish",
      "erta bahorgi gullami va kuzgi qushlami kuzatish qoryog' ish, yomg'ir yog'ishi, erta bahorgi gullarni kuzatish.",
      "yomg'ir yog'ishi, hashorotlarni, qushlarni kuzatish"
    ],
    correctAnswer: "qor yog'ishi, yomg'ir yog'ishi, kamalakni kuzatish"
  },
  {
    question: "Yerning ichki qismidagi erigan suyuq jisimlar hamda turli gazlarni yoriqlar orqali yeryuzaga otilib chiqishga nima deyiladi.",
    options: ["ko'lmak", "botqoqlik", "vulqon", "chuqurlik"],
    correctAnswer: "vulqon"
  },
  {
    question: "Qaysi modda eng ko'p issiqlik qabul qiluvchi hisoblanadi.",
    options: ["vulqon", "suv", "olov", "quruqlik"],
    correctAnswer: "suv"
  },
  {
    question: "Quruqlikda suv havzasini hosil qilgan va dengiz bilan bevosita tutashmagan chuqurliklariga nima deb ataladi.",
    options: ["daryo", "soy", "ko'l", "dengiz"],
    correctAnswer: "ko'l"
  },
  {
    question: "Tabiiy chuqurlikda xarakat qiladigan suv oqimiga nima deyiladi.",
    options: ["ko'lmak", "soy", "dengiz", "daryo"],
    correctAnswer: "daryo"
  },
  {
    question: "O'zbekistonda qor tog'larda necha kun saqlanib turadi.",
    options: ["85-100 kun", "90-100 kun", "95-100 kun", "75-100 kun"],
    correctAnswer: "90-100 kun"
  },
  {
    question: "O'zbekistonga yog'inlar asosan qaysi okeandan keladi.",
    options: ["Atlantika", "Hind", "Tinch", "Shimoliy"],
    correctAnswer: "Atlantika"
  },
  {
    question: "O'zbekistonda eng kam yillik yog'in miqdori qaysi xududlarda yog'adi",
    options: [
      "Ustyurt, Norin daryo, Qizilqum",
      "Ustyurt, Quyi Amudaryo, Qizilqum",
      "Qizilqum, Norin daryo, Ustyurt",
      "Ustyurt, Norin"
    ],
    correctAnswer: "Ustyurt, Norin daryo, Qizilqum"
  },
  {
    question: "Oyning massasi yernikidan necha marta kam.",
    options: ["80.4 marta", "81,3 marta", "52.1 marta", "63.1 marta"],
    correctAnswer: "81,3 marta"
  },
  {
    question: "Eng katta sayyora qaysi.",
    options: ["yupiter", "neptun", "uran", "merkuriy"],
    correctAnswer: "yupiter"
  },
  {
    question: "Sirdaryoning uzunligi qancha.",
    options: ["1122km", "2312km", "2412 km", "2212 km"],
    correctAnswer: "2212 km"
  },
  {
    question: "Ibn Sino qaysi ijtimoiy-falsafiy asarida tabiatga mehr-muruvvatli bo'lgan yoshlarni tarbiyalash kerak degan fikrlarni ilgari surgan?",
    options: ["Kitob bash shifo", "Tib qonunlari", "Kitob ul-qulanch", "Donishnoma"],
    correctAnswer: "Donishnoma"
  },
  {
    question: "Tabiatshunoslikni o'qitishda bolalarni har tomonlama tarbiyalashning mazmuni va metodlarini ochib beruvchi pedagogik fan nima deb nomlanadi?",
    options: [
      "Tabiatshunoslikning zamonaviy konseptsiyasi",
      "Tabiatshunoslik asoslari",
      "Tabiatshunoslik",
      "Tabiatshunoslik o'qitish metodikasi"
    ],
    correctAnswer: "Tabiatshunoslik o'qitish metodikasi"
  },
  {
    question: "Tabiatshunoslikda ko'rgazmali o'quv qurollari necha turga bo'linadi?",
    options: [
      "tabiiy jismlar va suratlar",
      "sathli, hajmli, tabiiy",
      "sathli va hajmli",
      "sahifali va hajmli"
    ],
    correctAnswer: "tabiiy jismlar va suratlar"
  },
  {
    question: "Tabiatshunoslik darslarida muammoli vaziyatda masalani hal qilishning birinchi bosqichi nimadan iborat?",
    options: [
      "masalani to'g'ri anglab olishdan iborat",
      "masala shartini yechishdan iborat",
      "masalaga yaqindan yondoshishdan iborat",
      "masala shartini, uni yechish uchun nima ma'lumligini aniqlashdan iborat"
    ],
    correctAnswer: "masala shartini, uni yechish uchun nima ma'lumligini aniqlashdan iborat"
  },
  {
    question: "Tabiatshunoslik darslarida hikoyaga qo'yiladigan talablarning ketma-ketligini to'g'ri belgilang:",
    options: [
      "ravonlik, ketma-ketlik, izchillik, taqqoslash, tasvirlash",
      "tasvirlash, rovonlik, ketma-ketlik taqqoslash, izchillik",
      "tasvirlash, taqqoslash, izchillik rovonlik, ketma-ketlik,",
      "tasvirlash, taqqoslash, rovonlik, ketma-ketlik, izchillik"
    ],
    correctAnswer: "ravonlik, ketma-ketlik, izchillik, taqqoslash, tasvirlash"
  },
  {
    question: "O'quvchilarning jonli tabiat burchagidagi mehnat turlari nimalardan iborat?",
    options: [
      "gullarni sug'orish va barglarini artish",
      "gullarni sug'orish va barglarini artish, hayvonlarni boqish va toza joyda saqlash",
      "hayvonlarni boqish va toza joyda saqlash",
      "maktab uchastkasida ishlash, hayvonlarni boqish va toza joyda saqlash"
    ],
    correctAnswer: "gullarni sug'orish va barglarini artish, hayvonlarni boqish va toza joyda saqlash"
  },
  {
    question: "Tabiatshunoslik va atrofimizdagi olam predmeti qanday fanlarga zamin yaratadi?",
    options: ["Astronomiya , geometriya", "Kimyo, algebra", "Georgafiya, lingvistika", "Botanika, geografiya"],
    correctAnswer: "Botanika, geografiya"
  },
  {
    question: "Dunyoda shunday ko'l borki, 'bu ko'lning suviga ruchka yoki qalamni botirib bemalol qog'ozga yozsa ham bo'ladi. Bu yozuvni esa keyin hech qachon o'chirib bo'lmaydi'. Ushbu ko'l qaysi davlatda.",
    options: ["Misrda", "Amerikada", "Afrikada", "Jazoirda"],
    correctAnswer: "Jazoirda"
  },
  {
    question: "Dunyoda «Tabiatshunoslik» fanining rivojlanishiga turtki bo'lgan asarlar",
    options: [
      "Yevklidning «Boshlanish»i va Ptolomeyning «Buyuk qurilish» asarlari;",
      "Sofiya Kovalevskaya, Mariya Kyuri tabiatshunoslikka oid asarlari;",
      "Abu Ali ibn Sino va Zahiriddin Muhammad Bobur tabiat va uning tirik mavjudotlariga doir asarlari",
      "Abu Nasr Farobiy 'Fozil odamlar shahri' asari"
    ],
    correctAnswer: "Yevklidning «Boshlanish»i va Ptolomeyning «Buyuk qurilish» asarlari;"
  },
  {
    question: "Talabalarni tabiatshunoslik muammolariga bag'ishlangan maqolalar, adabiyotlarga taqriz, annotatsiya yozishga o'rgatish bu....",
    options: ["fanning asosiy maqsadi", "fanning asosiy vazifasi.", "fanning asosiy prinsiplari", "fanning asosiy predmeti"],
    correctAnswer: "fanning asosiy vazifasi."
  },
  {
    question: "Yerlarni o'zlashtirishda 'Birinchi yili undan hech narsa olmasinlar, ikkinchi yili raiyat o'z roziligi bilan berganni olsinlar, uchinchi yili esa qonun-qoidaga muvofiq xiroj yig'ilsin' deb aytilgan g'oya muallifi kim va asari nomi.",
    options: [
      "Abu Ali Ibn Sino 'Hindiston'",
      "Al Beruniy 'Kobul devoni'",
      "Soxibqiron Amir Temur 'Temur tuziklari'.",
      "Yusuf xos Xojib 'Qutadg'u bilib'"
    ],
    correctAnswer: "Soxibqiron Amir Temur 'Temur tuziklari'."
  },
  {
    question: "Quyosh atmosferasi qaysi qatlamalardan iborat",
    options: [
      "xromosfera, quyosh toji",
      "quyosh toji",
      "fotosfera, xromosfera, quyosh toji",
      "fotosfera"
    ],
    correctAnswer: "fotosfera, xromosfera, quyosh toji"
  },
  {
    question: "Ichki guruh sayyoralarga qaysi sayyoralar kiradi",
    options: [
      "Yer, Uran, Pluton",
      "Merkuriy,Venera, Yer, Mars.",
      "Mars, Neptun,Oy",
      "Neptun,Yer, Venera"
    ],
    correctAnswer: "Merkuriy,Venera, Yer, Mars."
  },
  {
    question: "Yerning geosferalari qaysi javobda ko'rsatilgan",
    options: [
      "suv qatlami-gidrosfera, qattiq qatlam-litosfera",
      "troposfera-xavo qatlami, suv qatlami-gidrosfera, qattiq qatlam-litosfera",
      "yerning tirik organizmlari",
      "havo qatlami-atmasfera, suv qatlami-gidrosfera, qattiq qatlam-litosfera"
    ],
    correctAnswer: "havo qatlami-atmasfera, suv qatlami-gidrosfera, qattiq qatlam-litosfera"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishi 1 bosqichi qaysi davrlarni o'z ichiga oladi",
    options: [
      "2-bosqich eramizgacha bo'lgan 5-6 asrlargacha",
      "1-bosqich eramizgacha bo'lgan 8-6 asrlargacha",
      "3-bosqich eramizgacha bo'lgan 4-6 asrlargacha",
      "2-bosqich eramizgacha bo'lgan 8-5 asrgacha"
    ],
    correctAnswer: "1-bosqich eramizgacha bo'lgan 8-6 asrlargacha"
  },
  {
    question: "Qadimgi grek olimlaridan Pifagor va Eratosfen tabiatshunoslik bo'yicha kashfiyotlaridan nimalarni aniqladi",
    options: [
      "Eratosfen esa yerning radiusini aniqladi",
      "Aristotel g'arb va sharqning tomonlarini belgiladi",
      "Pifagor dunyoning sharsimon ekanligini, Eratosfen esa yerning radiusini aniqladi",
      "Empedokl janubiy va shimoliy tomonini aniqladi"
    ],
    correctAnswer: "Pifagor dunyoning sharsimon ekanligini, Eratosfen esa yerning radiusini aniqladi"
  },
  {
    question: "Tabiatshunoslikning nechta bosh yo'nalishi bor",
    options: ["5ta", "7ta", "3ta", "6ta"],
    correctAnswer: "3ta"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishi 3-bosqichi qaysi davrlarni o'z ichiga oladi",
    options: ["9-11 asr", "5-7 asr", "8-12 asr", "4-6 asr"],
    correctAnswer: "8-12 asr"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishining qaysi bosqichda 'tabiatni o'rganuvchilar' atamasi kirib keldi",
    options: [
      "5 bosqich 16-15 asrlar",
      "2 bosqich 14-16 asrlar",
      "4 bosqich 15-18 asrlar",
      "3 bosqich 19-20 asrlar"
    ],
    correctAnswer: "4 bosqich 15-18 asrlar"
  },
  {
    question: "«Tabiatshunoslik» fani rivojlanishining qaysi bosqichida hujayra kashf qilindi",
    options: [
      "4 bosqich XV-XVIII asrlar",
      "5 bosqich XIX asrlar",
      "5 bosqich XVI-XVII asrlar",
      "3 bosqich X-XIV asrlar"
    ],
    correctAnswer: "5 bosqich XVI-XVII asrlar"
  },
  {
    question: "Biotexnologiya, sinergitika, kibernetika kabi fanlar «Tabiatshunoslik» fani rivojlanishining qaysi bosqichiga to'g'ri keladi",
    options: ["6-bosqich", "5-bosqich", "2-bosqich", "4-bosqich"],
    correctAnswer: "6-bosqich"
  },
  {
    question: "Yer aylanishining burchak hisobidagi tezligi bir soat vaqt ichida necha gradusga siljiydi",
    options: ["25 gradus", "15 gradus", "11 gradus", "23 gradus"],
    correctAnswer: "15 gradus"
  },
  {
    question: "Relef so'zining lug'aviy ma'nosi toping",
    options: [
      "(lotincha,relief,lot.relevo) ko'taraman",
      "(frans,relief,lot.relevo) ko'taraman",
      "(yunoncha,relief,lot.relevo) ko'taraman",
      "(inglizcha,relief,lot.relevo) ko'taraman"
    ],
    correctAnswer: "(frans,relief,lot.relevo) ko'taraman"
  },
  {
    question: "Zilzila necha balli sodir bo'lganda xom g'ishtli binolar qulaydi.Pishiq g'isht binolarda yoriqlar paydo bo'ladi",
    options: ["8 ball", "4 ball", "6 ball", "9 ball"],
    correctAnswer: "8 ball"
  },
  {
    question: "Gidrosfera suv hajmining katta qismi qaysi tabiiy ob'ektlarga to'g'ri keladi",
    options: [
      "5 mlrd 390 mln.km.kub okean va dengizlarga",
      "1 mlrd 370 mln.km.kub okean va dengizlarga",
      "3mlrd 170 mln.km.kub okean va dengizlarga",
      "4 mlrd 142 mln.km.kub okean va dengizlarga"
    ],
    correctAnswer: "1 mlrd 370 mln.km.kub okean va dengizlarga"
  },
  {
    question: "Gidrosfera suv hajmining eng kichik qismi qaysi tabiiy ob'ektlarga to'g'ri keladi",
    options: [
      "2.3 ming km.kub daryolarga",
      "1,2 ming km.kub daryolarga",
      "6.1 ming km.kub daryolarga",
      "4.1 ming km. kub daryo"
    ],
    correctAnswer: "1,2 ming km.kub daryolarga"
  },
  {
    question: "Inson muskulining necha foizi suvdan iborat",
    options: ["73%", "76%", "70%", "75 %"],
    correctAnswer: "75 %"
  },
  {
    question: "Fotosintez jarayonida suv qanday moddalarga ajraladi.",
    options: [
      "vodorod & kislorod",
      "vodorod & azot",
      "vodorod & xlorid",
      "kislorod & azot"
    ],
    correctAnswer: "vodorod & kislorod"
  },
  {
    question: "Suvning issiqlik sig'imi yog'ochnikidan necha baravar yuqori",
    options: ["4barobar", "6 barobar", "5 barobar", "2 baravar"],
    correctAnswer: "2 baravar"
  },
  {
    question: "Suvning issiqlik sig'imi qumnikidan necha baravar yuqori",
    options: ["5 baravar", "3 barobar", "6 barobar", "4barobar"],
    correctAnswer: "5 baravar"
  },
  {
    question: "Tabiatda tarqalgan 107 xil kimyoviy elementlarning nechtasi suv tarkibida uchraydi",
    options: ["62 ta", "60 ta", "56 ta", "54 ta"],
    correctAnswer: "62 ta"
  },
  {
    question: "Eng sersuv mahsulot bu tarvuzdir. Tarvuzning necha foiz qismi suvdan iborat bo'ladi.",
    options: ["95%", "93 %", "89%", "87%"],
    correctAnswer: "93 %"
  },
  {
    question: "Inson miyasining o'rtacha necha foizi suvdan iborat.",
    options: ["83 %", "89%", "90 %", "75 %"],
    correctAnswer: "90 %"
  },
  {
    question: "Inson qonining necha foizi suvdan iborat",
    options: ["83 %", "82%", "73%", "68 %"],
    correctAnswer: "83 %"
  },
  {
    question: "Odam tanasidagi suv miqdori 5-8 foizga kamaysa qanday xolat ro'y beradi",
    options: [
      "Og'iz quruqshaydi,teri bujmayadi,ong o'tmaslashadi,ko'zga xar hil narsalar ko'rina boshlaydi (10-13 %dan 15-17 % yetsa o'ladi.)",
      "Og'iz quruqshaydi,teri bujmayadi,ong o'tmaslashadi,ko'zga xar hil narsalar ko'rina boshlaydi, hushdan ketadi (5-8 %dan 14-15 % yetsa o'ladi.)",
      "Og'iz quruqshaydi,teri bujmayadi, ko'zga xar hil narsalar ko'rina boshlaydi, hushdan ketadi (10-12 %dan 3-9 % yetsa o'ladi.)",
      "Og'izquruqshaydi, ong o'tmaslashadi,ko'zga xar hil narsalar ko'rina boshlaydi, hushdan ketadi (11-12 %dan 3-10% yetsa o'ladi.)"
    ],
    correctAnswer: "Og'iz quruqshaydi,teri bujmayadi,ong o'tmaslashadi,ko'zga xar hil narsalar ko'rina boshlaydi, hushdan ketadi (5-8 %dan 14-15 % yetsa o'ladi.)"
  },
  {
    question: "Gorizont so'zining lug' aviy ma'nosi nima deb ataladi.",
    options: ["yunoncha tomon", "yunoncha burchak", "italyancha yon", "inglizcha burchak"],
    correctAnswer: "yunoncha tomon"
  },
  {
    question: "Zilzila o'chog'i nima deb ataladi.",
    options: ["yer plitasi", "yer g'ovagi", "perisentr", "epitsentr"],
    correctAnswer: "epitsentr"
  },
  {
    question: "Atmosferada eng ko'p bo'ladigan modda..",
    options: ["azot", "kislorod", "vodorod", "kaliy"],
    correctAnswer: "azot"
  },
  {
    question: "Atmosferaning eng pastki qatlami...",
    options: ["litosfesa", "troposfera", "gidrosfera", "atmosfera"],
    correctAnswer: "troposfera"
  },
  {
    question: "Farg'ona viloyati qaysi viloyatlar bilan chegaradosh.",
    options: ["Buxoro,Andijon", "Andijin Farg'ona", "Namangan,Andijon", "Buxoro, Farg'ona"],
    correctAnswer: "Namangan,Andijon"
  },
  {
    question: "Aydarko'l qaysi viloyatlar xududida joylashgan",
    options: ["Navoiy,Jizzax", "Navoiy,Andijon", "Andijon,Farg'ona", "Farg'ona,Namangan"],
    correctAnswer: "Navoiy,Jizzax"
  },
  {
    question: "O'zbekistonda yozda eng yuqori harorat Termizda necha gradus bo'ladi.",
    options: ["50 C", "32 C", "46 C", "43 C"],
    correctAnswer: "50 C"
  },
  {
    question: "Fransuz tilidan tarjima qilganda '5 qator' ma'nosini bildiruvchi usul",
    options: ["Sinkveyn", "Klaster", "Aqliy hujum", "Insert"],
    correctAnswer: "Sinkveyn"
  },
  {
    question: "Pedagogik jarayonda shaxslararo munosabatlarning keskinlashuvi natijasi sifatida yuzaga keluvchi muammoli jarayon-bu...",
    options: ["pedagogik konflikt", "pedagogik munozara", "pedagogik odob", "pedagogik usul"],
    correctAnswer: "pedagogik konflikt"
  },
  {
    question: "«Didaktika» termini yunoncha «didaktikos» degan so'zdan olingan bo'lib, qanday ma'noda tarjima qilinadi?",
    options: [
      "Ta'lim berish va o'qitish",
      "O'qituvchi",
      "Ta'lim beruvchi va ta'lim oluvchi",
      "Ta'lim oluvchi"
    ],
    correctAnswer: "Ta'lim beruvchi va ta'lim oluvchi"
  },
  {
    question: "«Buyuk didaktika» asarini kim yozgan?",
    options: ["Ya.A.Komenskiy", "Suqrot", "Arastu", "J.J.Russo"],
    correctAnswer: "Ya.A.Komenskiy"
  },
  {
    question: "Pedagogika qanday fan?",
    options: [
      "Pedagogika ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy, umumkasbiy fan.",
      "Pedagogika tarbiyaning nazariy asoslarini tadqiq etuvchi ijtimoiy-gumanitar fan",
      "Pedagogika tarbiya jarayonining qonuniyatlari, prinsiplari, shakl va metodlari haqidagi gumanitar fan.",
      "Pedagogika ta'lim jarayonining mazmuni, qonuniyatlari, metodlarini o'rganuvchi, ijtimoiy, umumkasbiy fan."
    ],
    correctAnswer: "Pedagogika ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy, umumkasbiy fan."
  },
  {
    question: "Tarbiyaning asosiy vazifasi nima?",
    options: [
      "Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e'tiqodini, axloqiy ko'nikma va malakalarini, extiyoji va intilishlarini tarkib toptirishdan iborat",
      "Odamlarning dunyo bilan munosabatlarining bir butun sistemasini ta'minlovchi, vosita",
      "Zarurat, ehtiyojlilik-qandaydir bir vosita, o'zga narsaga javob berish, insonning ruhiy holatini to'g'rilovchi omil.",
      "Odamning jamiyat a'zosi sifatida o'z-o'zini anglash va tafakkurini, faoljyatining ob'yektivligini biluvchanlik tushunchasidir"
    ],
    correctAnswer: "Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e'tiqodini, axloqiy ko'nikma va malakalarini, extiyoji va intilishlarini tarkib toptirishdan iborat"
  },
  {
    question: "Shaxs kamolotiga qanday omillar ta'sir etadi?",
    options: [
      "biologik omil, ijtimoiy omil va tarbiya ta'sir etadi.",
      "bola shaxsining rivojlanishiga muhit va tarbiya kabi omillar.",
      "shaxsning kamol topishida ijtimoiy va biologik omillar ta'sir etadi.",
      "odamlarning munosabati."
    ],
    correctAnswer: "biologik omil, ijtimoiy omil va tarbiya ta'sir etadi."
  },
  {
    question: "Abu Ali Ibn Sinoning ta'lim-tarbiya haqidagi fikrlari.",
    options: [
      "Bolaga jamoada ta'lim berish afzalligi.",
      "Tarbiya yagona jarayon.",
      "6 yoshdan bolani muallimga topshirish.",
      "Tarbiya bu najot."
    ],
    correctAnswer: "Bolaga jamoada ta'lim berish afzalligi."
  },
  {
    question: "Pedagogik diagnostika nima?",
    options: [
      "ta'lim tarbiya jarayonini chuqur taxlil qilish uning samaradorligini to'g'ri baholash ta'lim darajasini aniqlash",
      "bilish sifatini takomilashtirish",
      "talimni takomilashtirish",
      "talimdagi kamchiliklarni bartaraf qilish"
    ],
    correctAnswer: "ta'lim tarbiya jarayonini chuqur taxlil qilish uning samaradorligini to'g'ri baholash ta'lim darajasini aniqlash"
  },
  {
    question: "Nuqtalar o'rniga mos javobni qoying. ...... ya'ni elementar o'qish va yozishga o'rgatish bolalarga savod o'rgatish pedagogikadagina emas balki ijtimoiy hayotda ham juda jiddiy qo'yilgan holatdir",
    options: ["Savod o'rgatish metodikasi", "Nutqni o'stirish metodikasi", "Imlo metodikasi", "O'qitish metodikasi"],
    correctAnswer: "Savod o'rgatish metodikasi"
  },
  {
    question: "Ta'lim metodlari qanday ma'noni anglatadi?",
    options: [
      "o'quvchilarga bilim berishning yo'llari va usullarini ifodalaydi",
      "o'quvchilarni bilimli qilishni tamoyillarini bildiradi",
      "ta'limning asosiy tartibi xisoblanadi",
      "o'qituvchining talabchanligini taminlaydi"
    ],
    correctAnswer: "o'quvchilarga bilim berishning yo'llari va usullarini ifodalaydi"
  },
  {
    question: "Malaka nima?",
    options: [
      "malaka bilan bir xil ongli xatti xarakatlarning ko'p marta takrorlanishi asosida xosil bo'ladigan avtomatik jarayon",
      "malaka to'plangan tajribadir",
      "malaka bir xil xatti xarakatlarning ko'p marta takrorlanishi",
      "malaka bu odatiy harakatlar"
    ],
    correctAnswer: "malaka bilan bir xil ongli xatti xarakatlarning ko'p marta takrorlanishi asosida xosil bo'ladigan avtomatik jarayon"
  },
  {
    question: "Ta'lim olish huquqi 'Ta'lim tog'risida'gi qonunning nechanchi moddasida keltirilgan?",
    options: ["5 modasida", "23 modasida", "7 modasida", "55 modasida"],
    correctAnswer: "5 modasida"
  },
  {
    question: "«Texnologiya» so'zi haqida tushuncha?",
    options: [
      "«texne» - mahorat, san'at, «logos» - tushuncha ta'limot",
      "«texne» - mehnat, san'at, «logos» - tushuncha bilim",
      "«texne» - qobiliyat, san'at, «logos» - tushuncha ta'lim",
      "«texne» - san'at, «logos» -- tushuncha o'qitish"
    ],
    correctAnswer: "«texne» - mahorat, san'at, «logos» - tushuncha ta'limot"
  },
  {
    question: "Pedagogning umumiy madaniyati nimalardan iborat?",
    options: [
      "Bilimi, ishonchi, qobiliyati va xulqi",
      "Ijtimoiy madaniyat",
      "Kasbiy ahamiyatli madaniyat",
      "Kasbiy faoliyatda yetukligi"
    ],
    correctAnswer: "Bilimi, ishonchi, qobiliyati va xulqi"
  },
  {
    question: "O'qituvchining pedagogik faoliyati turlari qaysilar?",
    options: [
      "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostic",
      "Ta'lim beruvchi, tarbiyalovchi, rivojlantiruvchi",
      "o'quvchi faoliyatini tashkil etish va boshqarish",
      "Shakllantiruvchi va rivojlantiruvchi"
    ],
    correctAnswer: "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostic"
  },
  {
    question: "Jamoa so'ziga to'g'ri ta'rif toping",
    options: [
      "latincha 'kollektivus' -- yig'ilma, omma, birgalikdagi majlis, birlashma, guruh.",
      "Lotincha 'projectus'- oldinga tashlangan",
      "inglizcha qayta ishlash",
      "lotincha qurish"
    ],
    correctAnswer: "latincha 'kollektivus' -- yig'ilma, omma, birgalikdagi majlis, birlashma, guruh."
  },
  {
    question: "Sinf so'ziga to'g'ri ta'rif berilgan qatorni toping.",
    options: [
      "yoshi va bilimi jihatidan bir xil bо'lgan muayyan о'quvchilar guruhi",
      "tarbiyalanuvchilarning yosh, psixologik xususiyatiga kо'ra shakllantirilgan yoki о'rta maxsus va oliy ta'lim muassasalari ta'lim oluvchilarining akademik jamoasi.",
      "yig'ilma, omma, birgalikdagi majlis, birlashma, guruh.",
      "ijtimoiy ahamiyatga ega umumiy maqsad asosida bir necha о'quvchilardan tashkil topgan guruh."
    ],
    correctAnswer: "yoshi va bilimi jihatidan bir xil bо'lgan muayyan о'quvchilar guruhi"
  },
  {
    question: "Umumiy maqsad yo'lida shaxslarning o'zaro munosabatlari, tashkiliyligi va intilishlari bilan bir-biriga monand turg'un sotsial (ijtimoiy) uyushmani nima deb yuritiladi?",
    options: ["Jamoa", "guruh", "jamiyat", "konformlilik"],
    correctAnswer: "Jamoa"
  },
  {
    question: "Og'zaki ta'lim metodlari qaysilar?",
    options: [
      "Hikoya, suhbat, ma'ruza",
      "Hikoya, suhbat, mashq",
      "Hikoya, mashq",
      "Ma'ruza, seminar, laboratoriya ishi"
    ],
    correctAnswer: "Hikoya, suhbat, ma'ruza"
  },
  {
    question: "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi qonuniga muvofiq kimlar pedagogik faoliyat bilan shug'ullanish huquqiga egalar?",
    options: [
      "tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo'lgan shaxslar",
      "kasbiy bilim, ko'nikma va malaka, shuningdek, ta'lim muassasalarida ishlash tajribasiga ega shaxslar",
      "oliy pedagogik ma'lumot hamda 5 yillik pedagogik stajga ega shaxslar",
      "faoliyat jarayonida ta'lim oluvchilarning yosh va psixologik xususiyatlarini biladigan shaxslar"
    ],
    correctAnswer: "tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo'lgan shaxslar"
  },
  {
    question: "Nutq e'tikasi bu...",
    options: [
      "sodda va ravon so'zlardan foydalana olish.",
      "fikrni ravon ifodalash",
      "mustaqil gaplar.",
      "juda ham jiddiy so'zlarni qamrab oladi."
    ],
    correctAnswer: "sodda va ravon so'zlardan foydalana olish."
  },
  {
    question: "Inson 70% bilimlarni necha yoshgacha o'zlashtiradi.",
    options: ["7", "6", "10", "9"],
    correctAnswer: "7"
  },
  {
    question: "'Ta'lim to'g'risidagi qonun' qachon qabul qilingan qayta taxrirdan o'tkazilgani qachon qabul qilingan?",
    options: ["2020 yil 23 sentabr", "2020 yil, 29 iyul", "2019 yil, 12 avgust", "1993 yil, 11 avgust"],
    correctAnswer: "2020 yil 23 sentabr"
  },
  {
    question: "'Pedagogika bola tarbiyasining fani demakdir'. Ta'rif kim tomonidan berilgan?",
    options: ["Abdulla Avloniy", "H.H.niyoziy", "Abduqodir Shakuriy", "Ishoqxon Ibrat"],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Pedagokika faning otasi kim",
    options: ["Yan Amos Komenskiy", "Godnin", "Kuznin", "Aristotel"],
    correctAnswer: "Yan Amos Komenskiy"
  },
  {
    question: "Innovatsiya pedagogik termin sifatida nechanchi asrda va qayerda paydo bo'lgan",
    options: [
      "XX asrning 60-yillarida Garbiy Yevropa va AQSh",
      "XX asrning 50-yillarida Yaponiyada",
      "XIX asrning 60-yillarida Germaniyada.",
      "XIX asrning 80-yillarida Germaniyada"
    ],
    correctAnswer: "XX asrning 60-yillarida Garbiy Yevropa va AQSh"
  },
  {
    question: "6 yil bepul haftasiga 6 kun o'qish. 6-aprelda o'quv yili boshlanadi. Ushbu davlat nomini belgilang",
    options: ["Germaniya", "Yaponiya", "Hindiston", "litviya"],
    correctAnswer: "Yaponiya"
  },
  {
    question: "Kompetensiya so'zining lug'aviy ma'nosi",
    options: ["loyiqman, munosibman", "bajaraman, to'g'rilayman", "tashkil etaman", "uyushtiraman"],
    correctAnswer: "loyiqman, munosibman"
  },
  {
    question: "'Klaster 'so'zining ma'nosi",
    options: ["bog'lam", "alohida", "yangilik", "o'ziga xoslik"],
    correctAnswer: "bog'lam"
  },
  {
    question: "'Fan va aql-zakovat' asarining muallifi kim?",
    options: ["Al-Farobiy", "Al- Farg'oniy", "Abu Ali Ibn Sino", "Ahmad Yugnakiy"],
    correctAnswer: "Al-Farobiy"
  },
  {
    question: "Loyihaviy ta'lim qancha vaqtdan buyon pedagogikada foydalanib kelinmoqda",
    options: ["300 yildan ortiq vaqt", "200 yildan ortiq vaqt", "50 yildan ortiq", "2005-yildan beri"],
    correctAnswer: "300 yildan ortiq vaqt"
  },
  {
    question: "Bir va bir necha oygacha ishlab chiqiladigan ta'lim loyihalari turini ayting",
    options: ["Uzoq muddatli loyiha", "O'rta muddatli loyiha", "Axborotli loyihalar", "Amaliy loyihalar"],
    correctAnswer: "Uzoq muddatli loyiha"
  },
  {
    question: "Loyihaga kirishish, loyiha faoliyatini tashkil etish va rejalashtirish -- auditoriya ishini qaysi bosqichini o'z ichiga qamrab oladi",
    options: [
      "Tayyorgarlik bosqichi",
      "Loyihani bajarish bosqichi",
      "Yakunlovchi bosqich",
      "qaytuvchi bosqich"
    ],
    correctAnswer: "Tayyorgarlik bosqichi"
  },
  {
    question: "......ta'lim sifatini nazorat qilish va samarali boshqarish maqsadida qo'llaniladi. Bunda turli darajadagi testlar, muammoli vaziyatlarni hal qilish (keyslarni yechish) asosida shaxsning kreativlik sifatlari va ijodiy faoliyatni tashkil eta olish ko'nikmalariga egaligi baholanadi. Nuqtalar o'rnini to'ldiring",
    options: ["Pedagogik kvalimetriya", "pedagogik maxorat", "pedagogik madaniyat", "pedagogik takt"],
    correctAnswer: "Pedagogik kvalimetriya"
  },
  {
    question: "Sharq uyg'onish davri baholash mezonini belgilang",
    options: ["barakallo, tasanno, ofarin", "12345", "yaxshi, o'rta a'lo", "'juda yomon', 'yomon', 'o'rta', 'yaxshi', 'a'lo'"],
    correctAnswer: "barakallo, tasanno, ofarin"
  },
  {
    question: "Nechanchi yildan boshlab besh ballik baholar raqamlarda ya'ni, 1,2,3,4,5 raqamlarda ifoda etish joriy qilingan",
    options: ["1944-yildan", "1990 yildan", "1950 yildan", "622 yildan"],
    correctAnswer: "1944-yildan"
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim muassasalari reytingini aniqlash chora-tadbirlari to'g'risida O'zbekiston Respublikasi Vazirlar Mahkamasining, 345-sonli qarori qachon kuchga kirgan",
    options: ["04.06.2021", "03.06.2021", "23.09.2020", "09.12.1985"],
    correctAnswer: "04.06.2021"
  },
  {
    question: ".....bu o'quvchilar tomonidan mazkur fanning muayyan bob yoki bo'limlarining o'zlashtirilganini tekshirish. Nuqtalar o'rnini to'ldiring",
    options: ["oraliq nazorat", "yakuniy", "joriy", "tashkiliy"],
    correctAnswer: "oraliq nazorat"
  },
  {
    question: "Optimallashtirish deganda nimani tushunasiz?",
    options: [
      "Ko'p sonli imkoniyatlardan eng qulayini tanlab olish",
      "Ta'limda fanlararo o'qitish nazariyasi",
      "Ta'lim berib, o'qitish nazariyasi",
      "Muammoli o'qitish"
    ],
    correctAnswer: "Ko'p sonli imkoniyatlardan eng qulayini tanlab olish"
  },
  {
    question: "Pedagogik takt nima?",
    options: [
      "o'qituvchi kasbiy mahoratining asosi bo'lib, o'quvchilarga barcha demokratik talablar asosida pedagogik ta'sir o'tkazish, muloqotni insonparvarlik tuyg'ulari asosida o'rnatish o'lchovi, o'quvchilarda mustaqil fikr yuritishni hamda ongli intizomni tarkib toptirish ko'nikmalarini hosil qilish shaklidir.",
      "har bir ta'lim oluvchi va jamoaning faolligini pedagogik jihatdan ta'minlash uchun zarur bo'lgan malaka va ko'nikmalar.",
      "har bir ta'lim oluvchiga va jamoaga pedagogik ta'sir o'tkazishni samarali qo'llash uchun zarur bo'lgan malaka va ko'nikmalar majmuasi",
      "pedagogning yutuqlariga kafolat beradigan aniq ishlab chiqilgan va qat'iy ilmiy loyihalashtirilgan pedagogik harakat."
    ],
    correctAnswer: "o'qituvchi kasbiy mahoratining asosi bo'lib, o'quvchilarga barcha demokratik talablar asosida pedagogik ta'sir o'tkazish, muloqotni insonparvarlik tuyg'ulari asosida o'rnatish o'lchovi, o'quvchilarda mustaqil fikr yuritishni hamda ongli intizomni tarkib toptirish ko'nikmalarini hosil qilish shaklidir."
  },
  {
    question: "Pedagogning kommunikativ madaniyati deganda...",
    options: [
      "pedagogning o'quvchilar va atrofdagilar bilan qisqa muddatda muloqot o'rnatishga bo'lgan doimiy intilishi.",
      "pedagogning dunyoga, pedagogik voqelikka va pedagogik jarayonga bo'lgan intellektual va hissiy munosabati.",
      "pedagogik jarayonni bilish, uni tashkil eta olish.",
      "o'quvchi va jamoaning faolligini pedagogik jihatdan ta'minlash uchun zarur bo'lgan malaka va ko'nikmalar"
    ],
    correctAnswer: "pedagogning o'quvchilar va atrofdagilar bilan qisqa muddatda muloqot o'rnatishga bo'lgan doimiy intilishi."
  },
  {
    question: "Diksiya nima?",
    options: [
      "So'zlarni aniq, ravshan talaffuz etish, so'zlash usuli.",
      "Tovush hajmi, uning chegarasi",
      "Tovush rangdorligi, yorqinligi, uning yumshoqligi va alohidaligi.",
      "So'zlayotganda obrazga kirish, ovozni kerakli joyda pastlatish, ohista gapirish."
    ],
    correctAnswer: "So'zlarni aniq, ravshan talaffuz etish, so'zlash usuli."
  },
  {
    question: "Pantomimika bu ...",
    options: [
      "Oyoqlar, gavda, qo'l orqali fikrni ifodalash",
      "Yuz ifodasi va harakatlari",
      "Oyoqlar holati, harakati",
      "Yuz muskullari"
    ],
    correctAnswer: "Oyoqlar, gavda, qo'l orqali fikrni ifodalash"
  },
  {
    question: "O'qituvchining o'quvchilarni boshqarish uslublari berilgan javobni toping.",
    options: [
      "avtoritar uslub, demokratik uslub, liberal uslub.",
      "demokratik uslub, liberal uslub, muloqot -- masofa uslubi.",
      "demokratik uslub, avtoritar uslub, hazil -- mutoyiba uslubi.",
      "avtoritar uslub, liberal uslub, muloqot - qo'rqitish uslubi."
    ],
    correctAnswer: "avtoritar uslub, demokratik uslub, liberal uslub."
  },
  {
    question: "Pedagogik adabiyotlar va maktab amaliyotida o'quvchilar o'quv faoliyatini tashkil etishning qanday asosiy shakli qabul qilingan?",
    options: [
      "ommaviy, guruhli, individual",
      "tabaqalashgan, individual, ommaviy",
      "yakka-guruhiy, ommaviy, individual",
      "integratsiyalashgan, yakka, guruhiy"
    ],
    correctAnswer: "ommaviy, guruhli, individual"
  },
  {
    question: "Oliy ta'lim nechta bosqichdan iborat?",
    options: ["2", "4", "3", "5"],
    correctAnswer: "3"
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim bosqichida o'qish muddati necha yil",
    options: ["11 yil", "4 yil", "9yil", "7 yil"],
    correctAnswer: "11 yil"
  },
  {
    question: "Aniq maqsad asosida kishi ongini ma'naviy axloqiy qadriyatlarni shakllantirishga qaratilgan tizimli jarayonga nima deyiladi?",
    options: ["ta'lim", "tarbiya", "ma'lumot", "ijtimoiy muhit"],
    correctAnswer: "tarbiya"
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim bosqichi hamda oliy ta'lim bosqichlarining oralig'ida qanday nomdagi ta'lim turini olish mumkin?",
    options: [
      "maktabgacha ta'lim",
      "oliy ta'limdan keyingi ta'lim",
      "boshlang'ich ta'lim",
      "professional ta'lim"
    ],
    correctAnswer: "professional ta'lim"
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






