// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'qjjjjuiiikkkz112mishsuzhzhzhsbsbsnsnsnndarkerbot_remaining_indices';
const STATS_KEY = 'quizmarkerbot_stats';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Syujetli hikoya qilishga o'rgatish usullari qaysi?",
    options: ["Predmetli va syujetli suratlar", "Namuna ko'rsatish va baholash", "Aniq ifodali so'zlashga o'rgatish", "Surat mazmunini tushuntirishga yo'naltirilgan savollar, namuna ko'rsatish va baholash"],
    correctAnswer: "Surat mazmunini tushuntirishga yo'naltirilgan savollar, namuna ko'rsatish va baholash"
  },
  {
    question: "Og'zaki nutqning uslublarini toping.",
    options: ["Ichki va tashqi nutq", "Og'zaki va yozma nutq", "Og'zaki va yozma nutq", "So'zlashuv uslubi, motor nutq"],
    correctAnswer: "So'zlashuv uslubi, motor nutq"
  },
  {
    question: "Maktabgacha tarbiya yoshidagi bolaning nutqi tashqi olam bilan bog'langan holda nechta vazifani bajaradi va to'g'ri ketma-ketlikni toping.",
    options: ["3ta kommunikativ, bilish, tartibga solish", "3ta bilish, tartibga solish, kommunikativ", "3ta tartibga solish, bilish, kommunikativ", "3ta kommunikativ, tartibga solish, bilish"],
    correctAnswer: "3ta bilish, tartibga solish, kommunikativ"
  },
  {
    question: "Og'zaki nutqning qonun va qoidalari tilshunoslikning qaysi bo'limida o'rganiladi?",
    options: ["Orfografiya", "Grafika", "Orfoepiya", "Fonetika"],
    correctAnswer: "Orfoepiya"
  },
  {
    question: "\"Yaxshiroq\" so'zida nechta unli va nechta undosh tovush bor?",
    options: ["5ta undosh va 3ta unli", "4ta unli va 4ta undosh", "3ta undosh va 5ta unli", "6ta undosh va 3ta unli"],
    correctAnswer: "5ta undosh va 3ta unli"
  },
  {
    question: "\"Til bilgan — el biladi.\" Ushbu maqoldagi barcha unli fonemalar qanday xususiyatiga ko'ra birlashtiruvchi belgiga ega? (1-lablarning ishtirokiga ko'ra; 2-og'izning ochilish darajasiga ko'ra; 3-tilning gorizontal holatiga ko'ra)",
    options: ["1, 2", "1, 3", "2, 3", "1, 2, 3"],
    correctAnswer: "1, 2"
  },
  {
    question: "Tarkibida undosh tovushlardan faqat sonorlar ishtirok etgan so'zni toping.",
    options: ["Misol", "Lola", "Makon", "Ashula"],
    correctAnswer: "Lola"
  },
  {
    question: "Qaysi qatorda lab undoshlari berilgan?",
    options: ["h, ng", "p, v", "n, y", "d, t"],
    correctAnswer: "p, v"
  },
  {
    question: "Portlovchilar guruhiga mansub bo'lmagan jarangli undoshlarni toping.",
    options: ["v, h, t, k", "z, k, s, j", "v, z, l, y", "b, m, sh, l"],
    correctAnswer: "v, z, l, y"
  },
  {
    question: "Jarangli jufti bo'lgan til oldi jarangsiz undoshlarini aniqlang.",
    options: ["t, s, ch, sh", "z, j, d", "t, p, s, m", "x, h, l, b"],
    correctAnswer: "z, j, d"
  },
  {
    question: "Qaysi so'zning yopiq bo'g'ini unli va jarangli undoshdan iborat?",
    options: ["yo-qim-li", "qad-ri-yat", "iz-ti-rob", "a-shu-la"],
    correctAnswer: "iz-ti-rob"
  },
  {
    question: "Faqat mustaqil so'z turkumlari berilgan qatorni toping.",
    options: ["Ot, sifat, son, ravish", "Ravish, bog'lovchi, ot", "Son, ravish, ko'makchi", "Olmosh, yuklama, sifat"],
    correctAnswer: "Ot, sifat, son, ravish"
  },
  {
    question: "Juft otlar berilgan qatorni aniqlang.",
    options: ["Ota–ona, kiyim–kechak, baland–past", "Katta–kichik, oq–qora, yam-yashil", "O'g'il–qiz, ota–ona, qo'y–qo'zi", "Uzun-qisqa, yaxshi-yomon, keldi-ketdi"],
    correctAnswer: "O'g'il–qiz, ota–ona, qo'y–qo'zi"
  },
  {
    question: "\"Ko'k… boqma, ko'p… boq.\" Nuqtalar o'rniga qaysi kelishik qo'shimchasini qo'yish mumkin?",
    options: ["Jo'nalish kelishigi", "Tushum kelishigi", "Chiqish kelishigi", "Qaratqich kelishigi"],
    correctAnswer: "Jo'nalish kelishigi"
  },
  {
    question: "Bir yoshgacha bo'lgan bolada nutqqa tayyorgarlik davri nechta bosqichdan iborat?",
    options: ["2 bosqichdan", "3 bosqichdan", "4 bosqichdan", "1 bosqichdan"],
    correctAnswer: "2 bosqichdan"
  },
  {
    question: "Davlat tili to'g'risidagi Qonun qachon qabul qilingan?",
    options: ["1993-yil 2-sentabrda", "1995-yil 24-avgust", "1995-yil 21-dekabrda", "1989-yil 21-oktabrda"],
    correctAnswer: "1989-yil 21-oktabrda"
  },
  {
    question: "Sinonim (ma'nodosh) so'zlar berilgan qatorni toping.",
    options: ["Shoh-shox, chopon-cho'pon", "Kasal, bemor, xasta", "Oq-qora, uzoq-yaqin", "Katta-kichik"],
    correctAnswer: "Kasal, bemor, xasta"
  },
  {
    question: "MTTda lug'at ishining vazifalari haqida ma'lumotlar to'g'ri berilgan qatorni toping.",
    options: ["Bolalar faol lug'atini ularga notanish yoki qiyin so'zlar hisobiga rejali kengaytirish", "Narsa–buyumlarning qismlarini, ranglarini, hajmini farqlashga o'rgatish", "Nutq tovush tomonining to'g'riligi", "Adabiy til me'yorlariga muvofiq to'g'ri talaffuz"],
    correctAnswer: "Bolalar faol lug'atini ularga notanish yoki qiyin so'zlar hisobiga rejali kengaytirish"
  },
  {
    question: "Tarbiyachi o'z nutqida mahalliy so'zlarni ishlatmasligi, so'zlarda urg'uni to'g'ri ishlatishi lozimligiga oid pedagogik talab qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Nutq tovush tomonining to'g'riligi", "Adabiy til me'yorlariga muvofiq to'g'ri talaffuz", "Tarbiyachi lug'atining boy bo'lishi", "Tarbiyachi nutqining jo'shqin, intonatsiyaga boy bo'lishi"],
    correctAnswer: "Adabiy til me'yorlariga muvofiq to'g'ri talaffuz"
  },
  {
    question: "Diksiya deganda nima tushuniladi?",
    options: ["Sof, aniq, ravshan nutq, to'g'ri tovush talaffuzi", "Mazmuniga qarab nutqning tezlashishi yoki sekinlashishi", "Urg'uli va urg'usiz bo'g'inlarning teng tarzda navbatlashib turishi", "Tarbiyachi lug'atining boy bo'lishi"],
    correctAnswer: "Sof, aniq, ravshan nutq, to'g'ri tovush talaffuzi"
  },
  {
    question: "Urg'uni ko'chirish natijasida yangi ma'no anglatuvchi so'zlar qatorini toping.",
    options: ["Bola, mehr", "Qo'llar, ko'zlar", "Odam, qadr", "Dala, vazn"],
    correctAnswer: "Qo'llar, ko'zlar"
  },
  {
    question: "Qaysi qatordagi so'zda ikkita burun undoshi qatnashgan?",
    options: ["Musaffo", "Hosil", "Nutq", "Mangu"],
    correctAnswer: "Mangu"
  },
  {
    question: "Grammatika ikki qismdan iborat…",
    options: ["Morfologiya va sintaksis", "Fonetika va grafika", "Orfografiya va orfoepiya", "Morfemika va leksikologiya"],
    correctAnswer: "Morfologiya va sintaksis"
  },
  {
    question: "\"Bolalar bilan so'zlashish — dialog nutqni shakllantirishning asosiy uslubi\" mavzusi qaysi bobda o'rganiladi?",
    options: ["Nutqni grammatik jihatdan shakllantirish uslubiyoti", "Bolalarni bog'lanishli nutqqa o'rgatish uslubiyoti", "Bolalarni badiiy adabiyot bilan tanishtirish", "Bolalar nutqining tovush madaniyatini tarbiyalash uslubiyoti"],
    correctAnswer: "Bolalarni bog'lanishli nutqqa o'rgatish uslubiyoti"
  },
  {
    question: "\"Nutqni o'stirish metodikasi\" fanining maqsadi to'g'ri ko'rsatilgan qatorni toping.",
    options: ["Bitiruvchilarni maktabgacha yoshdagi bolalarda og'zaki nutqni shakllantirishga doir faoliyatga tayyorlash hamda kasbiy ta'limni ikkinchi bosqich – magistraturada davom ettirish uchun zamin yaratishdan iborat", "Turli yosh bosqichlarida bo'lgan maktabgacha yoshdagi bolalar nutqini rivojlantirish xususiyatlarini ko'ra olish va tushunish qobiliyatini shakllantirish", "Metodik qo'llanmalarni tanqidiy tahlil qilishga tayangan holda o'zining original usullari va yo'llarini yaratishga intilishni rag'batlantirish", "Bolaning qadr-qimmatini va uning o'ziga xosligini tushunish, bola nutqini \"yaqin rivojlanishi hududi\"ga qarab rivojlantirish"],
    correctAnswer: "Bitiruvchilarni maktabgacha yoshdagi bolalarda og'zaki nutqni shakllantirishga doir faoliyatga tayyorlash hamda kasbiy ta'limni ikkinchi bosqich – magistraturada davom ettirish uchun zamin yaratishdan iborat"
  },
  {
    question: "Ikki tillilik va ko'p tillilik muammosini hal etishda turli xil yondashuvlar to'g'ri ko'rsatilgan qatorni toping.",
    options: ["Lingvistik, falsafiy, psixologik, pedagogik, sotsiologik va sotsiolingvistik", "So'zlash predmeti fikr bo'lib, u \"nimani nima bilandir birlashtirishga\" intiladi", "\"Nutq mexanizmi – bu jonli, doimo moslashib va takomillashib boradigan mexanizmdir\"", "So'zlardan ibora tuzish bo'g'inlari birligi sifatida belgilanadigan anglash, esda saqlab qolish jarayonlari ro'y beradi"],
    correctAnswer: "Lingvistik, falsafiy, psixologik, pedagogik, sotsiologik va sotsiolingvistik"
  },
  {
    question: "\"Nutqni o'stirish metodikasi\" fanining vazifalari qaysi bandda to'g'ri ko'rsatilgan?",
    options: ["Yoshlarni oilaviy hayotga tayyorlash", "Bolalar tarbiyasiga oid umuminsoniy qadriyatlarni yoshlarga yetkazish", "Ilmiy-pedagogik asosda nutqni rivojlantirishning eng samarali vositalari, metodlari va usullarini ishlab chiqish, ular bilan tarbiyachilarini qurollantirishdan iboratdir", "Bolalar nutqini rivojlantirish korreksiyalash"],
    correctAnswer: "Ilmiy-pedagogik asosda nutqni rivojlantirishning eng samarali vositalari, metodlari va usullarini ishlab chiqish, ular bilan tarbiyachilarini qurollantirishdan iboratdir"
  },
  {
    question: "\"Tilga qobiliyat\", \"til jarayoni\" va \"til standarti\"ni ajratgan — bu kimning fikri?",
    options: ["L.V.Sherba", "A.A.Leontyev", "V.A.Zveginsev", "K.Obuxovskiy"],
    correctAnswer: "A.A.Leontyev"
  },
  {
    question: "Yangi til materialiga ko'chirib o'tkazilishi lozim bo'lgan ona tilidagi nutq ko'nikmalari haqidagi qarash kimniki?",
    options: ["L.V.Sherba", "A.N.Leontyev", "V.A.Zveginsev", "K.Obuxovskiy"],
    correctAnswer: "A.N.Leontyev"
  },
  {
    question: "\"Ta'lim to'g'risida\"gi yangi Qonun qachon qabul qilingan?",
    options: ["1992-yil", "1994-yil", "1997-yil", "2020-yil"],
    correctAnswer: "2020-yil"
  },
  {
    question: "\"Chet tilini o'zlashtirish ona tili rivojlanayotgan yo'lga qarama-qarshi yo'ldan boradi…\" — bu kimning fikri?",
    options: ["K.Obuxovskiy", "A.A.Leontyev", "V.A.Zveginsev", "L.S.Vigotskiy"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Barcha nutq mexanizmlarining ikki bo'g'inli va butlovchi ekanligini ta'kidlagan — bu kimning pedagogik qarashi?",
    options: ["YE.N.Vodovozova", "N.I.Jinkin", "Y.A.Komenskiy", "L.V.Sherba"],
    correctAnswer: "N.I.Jinkin"
  },
  {
    question: "O'zbek tilidagi yangi so'zlar, shu jumladan rus tilidan o'zlashtirilgan so'zlar haqidagi pedagogik qarash kimniki?",
    options: ["YE.N.Vodovozova", "N.I.Jinkin", "Y.A.Komenskiy", "M.X.To'xtaxo'jayeva"],
    correctAnswer: "M.X.To'xtaxo'jayeva"
  },
  {
    question: "\"Insonning yana bir o'ziga xos xususiyati — boshqa odamlar bilan muloqotga ehtiyojmandlik\" — bu kimning qarashi?",
    options: ["L.V.Sherba", "A.A.Leontyev", "V.A.Zveginsev", "K.Obuxovskiy"],
    correctAnswer: "K.Obuxovskiy"
  },
  {
    question: "Interferensiya — bu nima?",
    options: ["Ikki (va undan ortiq) tillar nutqiy \"mexanizmlarining\" o'zaro hamkorligida ohangdagi o'zgarishlar, bo'g'inga ajratish, nutqdagi o'ziga xosliklarning kuzatilishi", "Dastlabki ta'limda ona tilini o'qitish \"bosh, markaziy predmetni tashkil etishi\"", "Har qanday til chet tilidagi so'zlarni o'zlashtirar ekan, deyarli hamma vaqt ularni u yoki bu o'zgarishlar bilan qabul qiladi", "O'quvchilarda kuzatiladigan nutqdagi kamchiliklarni bartaraf etish"],
    correctAnswer: "Ikki (va undan ortiq) tillar nutqiy \"mexanizmlarining\" o'zaro hamkorligida ohangdagi o'zgarishlar, bo'g'inga ajratish, nutqdagi o'ziga xosliklarning kuzatilishi"
  },
  {
    question: "\"Tilning uch sifati\" (tajribani jamlash va sintez qilish – fikrga jamlash – muloqotni amalga oshirish) haqida — bu kimning pedagogik qarashi?",
    options: ["L.V.Sherba", "A.A.Leontyev", "V.A.Zveginsev", "K.Obuxovskiy"],
    correctAnswer: "V.A.Zveginsev"
  },
  {
    question: "\"Muloqot — bolada so'zning paydo bo'lishi, nutqning vujudga kelish muddatlari va sur'atini belgilovchi hal qiluvchi shartdir\" — bu kimning pedagogik qarashi?",
    options: ["Ye.A.Flerina", "M.I.Lisina", "O.I.Solovyev", "A.N.Govzdev"],
    correctAnswer: "M.I.Lisina"
  },
  {
    question: "\"So'zlash va tushunish hodisalarining umumiyligi\" — bu kimning fikri?",
    options: ["K.Obuxovskiy", "A.A.Leontyev", "V.A.Zveginsev", "L.V.Sherba"],
    correctAnswer: "L.V.Sherba"
  },
  {
    question: "Ona tilini birlamchi o'qitishning uchta asosiy maqsadini shakllantirgan — bu kimning pedagogik qarashi?",
    options: ["Ye.N.Vodovozova", "K.Ushinskiy", "Y.A.Komenskiy", "L.V.Sherba"],
    correctAnswer: "K.Ushinskiy"
  },
  {
    question: "\"Maktabgacha tarbiya muassasalarida jonli so'z\" asarining muallifi kim?",
    options: ["Ye.A.Flerina", "Ye.I.Tixeyeva", "O.I.Solovyev", "A.N.Govzdev"],
    correctAnswer: "Ye.A.Flerina"
  },
  {
    question: "Bolalarning ilk yoshdan boshlab grammatik tuzilishni o'zlashtirib olishlarining qonuniyatlarini ochib bergan pedagog olim kim?",
    options: ["Ye.A.Flerina", "Ye.I.Tixeyeva", "O.I.Solovyev", "A.N.Govzdev"],
    correctAnswer: "A.N.Govzdev"
  },
  {
    question: "\"U bolalarni ilk yoshidan boshlab tarbiyalash tizimi xalq nutqi, xalq qo'shiqlari, topishmoqlari, ertaklari va o'yinlaridan foydalanish asosiga qurilishi lozim\" — degan pedagog kim?",
    options: ["Y.N.Vodovozova", "K.Ushinskiy", "Y.A.Komenskiy", "L.V.Sherba"],
    correctAnswer: "Y.N.Vodovozova"
  },
  {
    question: "\"Ona tili va uni rivojlantirish yo'llari\" asarining muallifi kim?",
    options: ["Y.A.Flerina", "Y.I.Tixeyeva", "O.I.Solovyev", "A.N.Govzdev"],
    correctAnswer: "Y.I.Tixeyeva"
  },
  {
    question: "Bolalarning tilning tovush tizimini o'zlashtirishlari ustida tadqiqot olib borgan pedagoglar to'g'ri berilgan qatorni toping.",
    options: ["F.A.Soxin, A.V.Zaxarova, O.I.Solovyeva, V.I.Yashenko va boshq.", "G.M.Lyamina, YE.I.Radina, A.M.Maksakov, M.G.Gening, N.A.German", "A.G.Tambovseva, A.Kostandyan", "M.Leushina, S.L.Rubinshteyn, F.A.Soxin, D.B.Elkonin"],
    correctAnswer: "G.M.Lyamina, YE.I.Radina, A.M.Maksakov, M.G.Gening, N.A.German"
  },
  {
    question: "\"Nutqni muntazam o'rgatish, nutq va tilni metodik rivojlantirish bolalar bog'chasidagi butun tarbiya ishlarining asosini tashkil qilmog'i lozim\" — bu kimning fikri?",
    options: ["Y.A.Flerina", "Y.I.Tixeyeva", "O.I.Solovyev", "A.N.Govzdev"],
    correctAnswer: "Y.I.Tixeyeva"
  },
  {
    question: "O'zbek tilida ta'lim beriladigan maktabgacha ta'lim muassasalarida necha yoshda bolalarga o'zga tilda so'zlashuv nutqini o'rgatishni tavsiya etadilar?",
    options: ["3–4 yosh", "4–5 yosh", "5–6 yosh", "6–7 yosh"],
    correctAnswer: "5–6 yosh"
  },
  {
    question: "Ilk yosh: 1–3 yoshgacha bo'lgan bolaning nutqining rivojlanishi to'g'ri berilgan qatorni toping.",
    options: ["Emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi", "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni va o'yin harakatlarini turli xil tovushlar bilan kuzatib borishni qo'llab-quvvatlash", "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat", "Bolalarning o'z tashabbusiga ko'ra yoki kattalarning taklifiga ko'ra hikoya qilib berishga qiziqishini qo'llab-quvvatlash"],
    correctAnswer: "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni va o'yin harakatlarini turli xil tovushlar bilan kuzatib borishni qo'llab-quvvatlash"
  },
  {
    question: "Maktabgacha davrdagi kichik yosh (3–5 yosh) yoshdagi bolaning nutqiy rivojlanishi to'g'ri berilgan qatorni toping.",
    options: ["Emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi", "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni qo'llab-quvvatlash", "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat", "Bolalarning o'z tashabbusiga ko'ra hikoya qilib berishga qiziqishini qo'llab-quvvatlash"],
    correctAnswer: "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat"
  },
  {
    question: "Y.A.Komenskiyning nutq o'stirish metodikasi to'g'risidagi pedagogik qarashlari to'g'ri berilgan qatorni toping.",
    options: ["Dastlabki ta'limda ona tilini o'qitish \"bosh, markaziy predmetni tashkil etishi\"", "Bolalar bog'chasida tarbiyalash ishlari tizimining asosini birinchi yoshdan boshlab ona tilini muntazam o'qitib borishni tashkil qilmog'i lozim", "Bolalar bilan baqirmasdan xotirjamlik bilan suhbatlashish zarurligini uqtirgan", "Bola nutq tufayli o'z fikrlarini ifodalaydi va atrofidagi kishilar bilan muloqotga kirishadi, nutqni egallab olish orqali u atrof olamni anglaydi"],
    correctAnswer: "Bola nutq tufayli o'z fikrlarini ifodalaydi va atrofidagi kishilar bilan muloqotga kirishadi, nutqni egallab olish orqali u atrof olamni anglaydi"
  },
  {
    question: "Maktabgacha yoshdagi katta bolalarning dialogik nutqi negizida qanday nutq rivojlanadi?",
    options: ["Emotsional-erkin muloqot", "Lug'at", "Ravon nutq", "Monologik"],
    correctAnswer: "Monologik"
  },
  {
    question: "Tayyorlov guruhida mashg'ulot necha daqiqa davomida o'tkazish tavsiya qilinadi?",
    options: ["15–20 daqiqa", "20–25 daqiqa", "25–30 daqiqa", "30–35 daqiqa"],
    correctAnswer: "30–35 daqiqa"
  },
  {
    question: "Qaysi davrda emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi?",
    options: ["Go'daklik yoshi: 0–1", "Ilk yosh: 1–3", "Maktabgacha davrdagi kichik yosh (3–5 yosh)", "Maktabgacha davrdagi katta yosh (5–7 yosh)"],
    correctAnswer: "Go'daklik yoshi: 0–1"
  },
  {
    question: "Ilk yosh: 1–3 yoshgacha bo'lgan bolaning nutqiy rivojlanishi to'g'ri berilgan qatorni toping.",
    options: ["Emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi", "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni va o'yin harakatlarini turli xil tovushlar bilan kuzatib borishni qo'llab-quvvatlash", "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat", "Bolalarning o'z tashabbusiga ko'ra hikoya qilib berishga qiziqishini qo'llab-quvvatlash"],
    correctAnswer: "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni va o'yin harakatlarini turli xil tovushlar bilan kuzatib borishni qo'llab-quvvatlash"
  },
  {
    question: "Maktabgacha davrdagi kichik yosh (3–5 yosh) yoshdagi bolaning nutqiy rivojlanishi to'g'ri berilgan qatorni toping.",
    options: ["Emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi", "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni qo'llab-quvvatlash", "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat", "Bolalarning o'z tashabbusiga ko'ra hikoya qilib berishga qiziqishini qo'llab-quvvatlash"],
    correctAnswer: "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi, ijtimoiy aloqalar va atrofdagilarga ta'siridan iborat"
  },
  {
    question: "Katta guruhlarda mashg'ulot necha daqiqa davomida o'tkazish tavsiya qilinadi?",
    options: ["15–20 daqiqa", "20–25 daqiqa", "25–30 daqiqa", "30–35 daqiqa"],
    correctAnswer: "20–25 daqiqa"
  },
  {
    question: "Hafta davomida 3 yoshli bola nechta so'zlarni o'zlashtirishlari mumkin?",
    options: ["15 ta so'z", "3 ta so'z", "10 ta so'z", "5 ta so'z"],
    correctAnswer: "5 ta so'z"
  },
  {
    question: "Yangi so'zlar birlamchi o'rganilganidan so'ng bolalar xotirasida saqlab qolish, leksikani faollashtirish va nutqiy mahoratni rivojlantirishga yordam beruvchi o'yinlar necha bosqichda amalga oshiriladi?",
    options: ["5 bosqichda", "4 bosqichda", "3 bosqichda", "2 bosqichda"],
    correctAnswer: "3 bosqichda"
  },
  {
    question: "Idrok — bu?",
    options: ["Aniq maqsadga yo'naltirilgan anglash jarayoni", "Shaxsning o'ziga xos xususiyatlari", "Savol va javob shaklidagi dialogik ta'lim metodi", "Ongli xatti-harakatning avtomatlashtirilgan tarkibiy qismi"],
    correctAnswer: "Aniq maqsadga yo'naltirilgan anglash jarayoni"
  },
  {
    question: "1 yoshdan 3 yoshgacha bo'lgan bolalar nutqini rivojlantirishga doir mashg'ulotlar turlari to'g'ri berilgan qatorni toping.",
    options: ["Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli", "Ko'rgazmaviylik, o'yin usullari va didaktik o'yinlar", "Bilimlarni umumlashtirish va tizimlashtirishga oid mashg'ulotlar", "Bilimlar, mahorat va ko'nikmalar mustahkamlashga oid mashg'ulotlar"],
    correctAnswer: "Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli"
  },
  {
    question: "Maktabgacha yoshdagi katta bolalarni nutqiy rivojlantirishga doir vazifalar to'g'ri berilgan qatorni toping.",
    options: ["Emotsional-erkin muloqot – yetakchi faoliyat turi hisoblanadi", "Tovushga taqlid qilishga oid so'zlardagi tovushlar bilan mustaqil o'yinlarni qo'llab-quvvatlash", "Nutqning asosiy irsiy vazifasi – aloqa funksiyasi", "Til voqeligini eng oddiy anglashni rivojlantirish, bolalarni \"tovush\", \"so'z\", \"gap\" atamalari bilan tanishtirish"],
    correctAnswer: "Til voqeligini eng oddiy anglashni rivojlantirish, bolalarni \"tovush\", \"so'z\", \"gap\" atamalari bilan tanishtirish"
  },
  {
    question: "Bolalarda artikulatsiya apparatining harakatchanligini rivojlantirish, bo'g'inlardagi, so'zlardagi tovushlarni o'zga tilining orfoyepik qoidalariga mos ravishda sof, tushunarli ifodalashni shakllantirish nimaga ta'rif berilgan?",
    options: ["Ravon nutq", "Lug'at", "To'g'ri talaffuz", "Grammatika"],
    correctAnswer: "To'g'ri talaffuz"
  },
  {
    question: "Ikki yoshga kelib bolaning lug'at zaxirasi nechta so'zga yetadi?",
    options: ["100–200 ta so'z", "200–300 ta so'z", "100–150 ta so'z", "300–400 ta so'z"],
    correctAnswer: "200–300 ta so'z"
  },
  {
    question: "Tayyorlash guruhi bolalari nechta iboradan tarkib topgan ravon hikoya tuza oladi?",
    options: ["5–7 ta ibora", "8–10 ta ibora", "10–12 ta ibora", "8–12 ta ibora"],
    correctAnswer: "8–12 ta ibora"
  },
  {
    question: "Necha oydan boshlab bolada nutqiy taqlid va ovoz ifodaliligi rivojlanadi?",
    options: ["9 oy", "12 oy", "8 oy", "10 oy"],
    correctAnswer: "9 oy"
  },
  {
    question: "Bolalar nutqini tadqiq etish chog'ida maktabgacha yoshda so'z ustida ishlashni bolalar nutqi tuzilmasini rivojlantirishning muhim sharti deb hisoblagan olim kim?",
    options: ["F.A.Soxin", "O.S.Ushakova", "A.G.Tambovseva", "M.Leushina"],
    correctAnswer: "O.S.Ushakova"
  },
  {
    question: "1 yoshdan 3 yoshgacha bo'lgan bolalar nutqini rivojlantirishga doir mashg'ulot turlari to'g'ri berilgan qatorni toping.",
    options: ["Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli", "Ko'rgazmaviylik, o'yin usullari va didaktik o'yinlar", "Bilimlarni umumlashtirish va tizimlashtirishga oid mashg'ulotlar", "Bilimlar, mahorat va ko'nikmalar mustahkamlashga oid mashg'ulotlar"],
    correctAnswer: "Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli"
  },
  {
    question: "Nutqni ilk rivojlantirish ikki davrga bo'linadi, bular qaysilar?",
    options: ["Birinchisi – tayyorgarlik, ikkinchisi – mustaqil nutqni rasmiylashtirish", "Birinchisi – tayyorgarlik, ikkinchisi – tashkiliy", "Birinchisi – tashkiliy, ikkinchisi – mustaqil nutqni rasmiylashtirish", "Birinchisi – tayyorgarlik, ikkinchisi – mustaqil"],
    correctAnswer: "Birinchisi – tayyorgarlik, ikkinchisi – mustaqil nutqni rasmiylashtirish"
  },
  {
    question: "Ta'lim metodlari to'g'ri berilgan qatorni toping.",
    options: ["Ko'rgazmalilik, og'zaki bayon qilish, amaliy metod", "Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli", "Ko'rgazmalilik, didaktik, amaliy metod", "Ko'rgazmalilik, sahna ko'rinishlari shakli"],
    correctAnswer: "Ko'rgazmalilik, og'zaki bayon qilish, amaliy metod"
  },
  {
    question: "Predmetli-nutqiy muhitning bola rivojlanishining keyingi bosqichiga o'tishida uning imkoniyatlariga mos kelishi — qaysi olimning pedagogik qarashi?",
    options: ["F.A.Soxin", "O.S.Ushakova", "L.S.Vigotskiy", "M.Leushina"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Nutqiy namuna — bu?",
    options: ["Bilimlarni biridan ikkinchisiga berish maqsadida o'qituvchi va o'quvchi tomonidan amalga oshirilayotgan harakat", "Bolalarga qanday harakat qilish, qanday qilib natijaga erishish mumkinligi tushuntiriladi", "Bu tarbiyachining to'g'ri, ilgaridan mashq qilingan nutqiy faoliyatidir", "O'rgatuvchi usul bo'lib, unda bolaning javobi yoki hikoyasi haqida asoslangan mulohaza bildiriladi"],
    correctAnswer: "Bu tarbiyachining to'g'ri, ilgaridan mashq qilingan nutqiy faoliyatidir"
  },
  {
    question: "Dialog — bu?",
    options: ["Bir shaxsning ravon nutqi", "Ikki yoki bir necha kishining suhbati", "Sabab-oqibatli munosabatlarda bo'lgan faktlar haqidagi xabarlar", "Birinchisi – tayyorgarlik, ikkinchisi – mustaqil"],
    correctAnswer: "Ikki yoki bir necha kishining suhbati"
  },
  {
    question: "\"…ta'lim metodikasi sifatida — bu tarbiyachining bolalar guruhi bilan aniq maqsadga yo'naltirilgan, muayyan mavzuda oldindan tayyorlangan so'zlashuvi\" — bu qaysi metod?",
    options: ["Monolog", "Amaliy", "Suhbat", "Rivojlantirish"],
    correctAnswer: "Suhbat"
  },
  {
    question: "Shaxs rivojlanishiga ta'sir etuvchi omillarni ko'rsating.",
    options: ["Faoliyat, jamoat, axborot", "Tarbiya, ta'lim, ma'lumot", "Irsiyat, muhit, ta'lim-tarbiya", "Bilim, ko'nikma, malaka"],
    correctAnswer: "Irsiyat, muhit, ta'lim-tarbiya"
  },
  {
    question: "Dastlabki yetti yilda bolada kattalar bilan muloqotga ehtiyoj rivojlanishining nechta bosqichi ro'y beradi?",
    options: ["2 ta bosqichi", "3 ta bosqichi", "4 ta bosqichi", "5 ta bosqichi"],
    correctAnswer: "4 ta bosqichi"
  },
  {
    question: "Hafta davomida 5 yoshli bola nechta miqdordagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["15 ta so'z", "25 ta so'z", "20 ta so'z", "10 ta so'z"],
    correctAnswer: "15 ta so'z"
  },
  {
    question: "Kishilarning muloqotini va o'zaro bir-birlarini tushunishlarini ta'minlovchi mazmunan keng yoyilgan fikr nimaga ta'rif berilgan?",
    options: ["Ravon nutq", "Lug'at", "To'g'ri talaffuz", "Grammatika"],
    correctAnswer: "Ravon nutq"
  },
  {
    question: "Bolalarga monologik nutqni muntazam o'qitish taxminan necha yoshdan boshlanadi?",
    options: ["To'rt yoshdan", "Besh yoshdan", "Uch yoshdan", "Olti yoshdan"],
    correctAnswer: "Besh yoshdan"
  },
  {
    question: "Qayta hikoya qilishga ta'rif qaysi qatorda to'g'ri berilgan?",
    options: ["Nutqning tovush madaniyatini tarbiyalash ham til voqeligini eng oddiy tarzda anglashni shakllantirish bilan o'zaro bog'liqdir", "Maktabgacha davrdagi katta yoshda nutqning grammatik jihatdan to'g'riligini shakllantirish nutqqa nisbatan tanqidiy munosabatning paydo bo'lganligi", "Lug'atni rivojlantirishda uning sifat jihatidan takomillashtirilishi oldingi o'ringa chiqadi", "Eshitilgan badiiy asarni ravon, ifodali aytib berish"],
    correctAnswer: "Eshitilgan badiiy asarni ravon, ifodali aytib berish"
  },
  {
    question: "Hafta davomida 4 yoshli bola nechta miqdordagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["20 ta so'z", "10 ta so'z", "15 ta so'z", "30 ta so'z"],
    correctAnswer: "10 ta so'z"
  },
  {
    question: "Maktabgacha yoshdagi bolalar uchun hikoyalarning necha turga bo'linadi?",
    options: ["To'rt", "Besh", "Uch", "Olti"],
    correctAnswer: "Uch"
  },
  {
    question: "Predmetlarni ko'zdan kechirish mashg'ulotlarini asosan qaysi yoshdagi bolalar bilan o'tkaziladi?",
    options: ["3–5 yoshli", "2–5 yoshli", "5–7 yoshli", "4–6 yoshli"],
    correctAnswer: "3–5 yoshli"
  },
  {
    question: "Ilk turdagi nutqiy rivojlanishda maxsus tayyorgarliksiz hikoya qilib berish necha yoshdan boshlanadi?",
    options: ["3–4 yoshdan", "4–5 yoshdan", "2–3 yoshdan", "5–6 yoshdan"],
    correctAnswer: "4–5 yoshdan"
  },
  {
    question: "O'zlashtirilgan til materialini mustahkamlashda bolalarga ijobiy mashq sifatida xizmat qiladi. Bolalar o'z oldiga muayyan hayotiy vaziyatlarda kattalardan eshitgan nutqini yoki ertak qahramoni nutqini aniq berishni maqsad qiladilar. Bu qanday o'yin turiga kiradi?",
    options: ["Rolli o'yin", "\"Rejissyorlik\" o'yin", "Sahnalashtirish o'yin", "Syujetli o'yin"],
    correctAnswer: "Syujetli o'yin"
  },
  {
    question: "Necha yoshidan boshlab bolalarga hikoya qilishda tarbiyachi yo'naltiruvchi savollar va aytib turuvchi savollar bilan yordam beradi?",
    options: ["To'rt yoshdan", "Besh yoshdan", "Uch yoshdan", "Olti yoshdan"],
    correctAnswer: "To'rt yoshdan"
  },
  {
    question: "6 yoshga kelib bolaning faol lug'ati necha mingta so'z biladi?",
    options: ["2–3 mingtagacha so'z", "3–3,5 mingtagacha so'z", "3–4 mingtagacha so'z", "4–4,5 mingtagacha so'z"],
    correctAnswer: "3–3,5 mingtagacha so'z"
  },
  {
    question: "Voqealarni biron-bir qahramon bilan birgalikda vaqt bo'yicha ketma-ketlikda aytish — qanday hikoya turiga kiradi?",
    options: ["Tavsifiy", "Didaktik", "Syujetli", "Dialog"],
    correctAnswer: "Syujetli"
  },
  {
    question: "Lug'atni egallash jarayoni tushunchalar bilan uzviy bog'liq va shu tufayli u nechta xususiyatga bo'linadi?",
    options: ["To'rt", "Besh", "Uch", "Olti"],
    correctAnswer: "Uch"
  },
  {
    question: "Lug'atni boyitish metodlari to'g'ri berilgan qatorni toping.",
    options: ["Ko'rgazmalilik, og'zaki bayon qilish, amaliy metod", "Didaktik o'yinlar, ermak o'yinlar, sahna ko'rinishlari shakli", "Ko'rgazmalilik, didaktik, badiiy asarlarni o'qish", "Atrof-olamni bevosita kuzatish, mazmuni bolalarga notanish bo'lgan suratlarni ko'rsatish; badiiy asarlarni o'qish"],
    correctAnswer: "Atrof-olamni bevosita kuzatish, mazmuni bolalarga notanish bo'lgan suratlarni ko'rsatish; badiiy asarlarni o'qish"
  },
  {
    question: "Lug'atni egallash jarayonining o'ziga xos xususiyatlari qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Nutqning tovush madaniyatini tarbiyalash ham til voqeligini anglashni shakllantirish bilan o'zaro bog'liqdir", "Maktabgacha davrdagi katta yoshda nutqning grammatik jihatdan to'g'riligini shakllantirish", "Nutqning barcha turlari va shakllari til shaxsining takrorlanmas individual qiyofasini yaratgan holda mavjud bo'ladi", "Bolalar lug'atining mazmuni va so'zning ma'nosi, mazmun mohiyatini asta-sekin egallashi"],
    correctAnswer: "Maktabgacha davrdagi katta yoshda nutqning grammatik jihatdan to'g'riligini shakllantirish"
  },
  {
    question: "Hafta davomida 3 yoshli bola nechta miqdordagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["5 ta so'z", "6 ta so'z", "7 ta so'z", "10 ta so'z"],
    correctAnswer: "6 ta so'z"
  },
  {
    question: "Bola o'ziga tanish ertak qahramonlaridan biri rolini o'ynaydi, o'yin jarayonida u qahramon so'zlarini takrorlaydi. Bu qanday o'yin turiga kiradi?",
    options: ["Rolli o'yin", "\"Rejissyorlik\" o'yin", "Sahnalashtirish o'yin", "Syujetli o'yin"],
    correctAnswer: "Sahnalashtirish o'yin"
  },
  {
    question: "Hafta davomida 5 yoshli bola nechta turdagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["10 ta so'z", "15 ta so'z", "20 ta so'z", "25 ta so'z"],
    correctAnswer: "25 ta so'z"
  },
  {
    question: "O'yinida bola o'ziga rol olmaydi, aksincha u ushbu syujetda rollarni o'yinchoqlar o'rtasida taqsimlaydi. Bu qanday o'yin turiga kiradi?",
    options: ["Rolli o'yin", "\"Rejissyorlik\" o'yin", "Sahnalashtirish o'yin", "Syujetli o'yin"],
    correctAnswer: "\"Rejissyorlik\" o'yin"
  },
  {
    question: "Hafta davomida 7 yoshli bola nechta turdagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["10 ta so'z", "15 ta so'z", "20 ta so'z", "30 ta so'z"],
    correctAnswer: "10 ta so'z"
  },
  {
    question: "O'zlashtirilgan til materialini mustahkamlashda bolalarga ajoyib mashq sifatida xizmat qiladi. Bolalar kattalardan eshitgan nutqini yoki ertak qahramoni nutqini aniq berishni maqsad qiladilar. Bu qanday o'yin turiga kiradi?",
    options: ["Rolli o'yin", "\"Rejissyorlik\" o'yin", "Sahnalashtirish o'yin", "Syujetli o'yin"],
    correctAnswer: "Sahnalashtirish o'yin"
  },
  {
    question: "Nutq o'stirishda ta'limiy o'yinlarda qoidalarga amal qilish qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Navbatma-navbat ta'sir ko'rsatish, so'ralganda javob berish, o'rtoqlar fikrini eshita olish, o'yin davomida boshqalarga halaqit bermaslik, o'yin qoidasini bajarish, o'z xatosini tan olish", "So'ralganda javob berish, hamkorlikda ishlash, o'yin qoidasini bajarish", "O'rtoqlar fikrini hurmat qilish, o'yin qoidasini bajarish, xatosini tan olish", "Navbatma-navbat ta'sir ko'rsatish, o'rtoqlar fikrini eshita olish, o'yin davomida boshqalarga halaqit bermaslik, o'yin qoidasini bajarish"],
    correctAnswer: "Navbatma-navbat ta'sir ko'rsatish, so'ralganda javob berish, o'rtoqlar fikrini eshita olish, o'yin davomida boshqalarga halaqit bermaslik, o'yin qoidasini bajarish, o'z xatosini tan olish"
  },
  {
    question: "Ijodiy o'yinlar nech turga bo'linadi?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3"
  },
  {
    question: "Ijodiy o'yinlar qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Syujetli-rolli, sahnalashtirilgan, qurilish-yasash o'yinlar", "Mantiqiy o'yinlar, rasm chizish", "Sahnalashtiruvchi, harakatli, mantiqiy", "Qurilish-yasash, harakatli, faollashtiruvchi o'yinlar"],
    correctAnswer: "Syujetli-rolli, sahnalashtirilgan, qurilish-yasash o'yinlar"
  },
  {
    question: "\"…ta'limning dialogik metodi bo'lib, savol-javob o'tkazish, o'z nuqtai nazarini ifodalashni talab etadi\" — bu qaysi metod?",
    options: ["Suhbat", "Kuzatuv", "Test", "Analiz va sintez qilish"],
    correctAnswer: "Suhbat"
  },
  {
    question: "Suhbat mazmuniga ko'ra 2 turga farqlanadi, bular…",
    options: ["Axloqiy va bilishga doir mavzudagi", "Sifatli va ideal mavzudagi", "Verbal va noverbal", "Aniqlik va ilmiylik mavzudagi"],
    correctAnswer: "Axloqiy va bilishga doir mavzudagi"
  },
  {
    question: "Bolalarga to'g'ri talaffuzga o'rgatish nech bosqichda amalga oshadi?",
    options: ["3 bosqichda", "4 bosqichda", "5 bosqichda", "6 bosqichda"],
    correctAnswer: "3 bosqichda"
  },
  {
    question: "Tovush hosil qilishda qaysi tovush a'zolari juda katta ahamiyat kasb etadi?",
    options: ["Nafas, bo'g'iz (hiqildoq), og'iz bo'shlig'i (til, tish, lablar), burun bo'shlig'i", "Og'iz bo'shlig'i, nafas, lablar", "Tish, lab, hiqildoq", "Nafas, til, o'pka"],
    correctAnswer: "Nafas, bo'g'iz (hiqildoq), og'iz bo'shlig'i (til, tish, lablar), burun bo'shlig'i"
  },
  {
    question: "Xalq ertaklari mazmunan nech turga bo'linadi?",
    options: ["3 turga", "4 turga", "5 turga", "6 turga"],
    correctAnswer: "3 turga"
  },
  {
    question: "Xalq ertaklari mazmunan 3 turga bo'linadi. Ular to'g'ri ko'rsatilgan qatorni ko'rsating.",
    options: ["Hayvonlar haqida, sehrli-fantastika, hayotiy-maishiy", "Anjomlar haqida, sarguzashtlar, qo'rqinchli", "Hayotiy, sarguzasht, uydirmali", "Hayvonlar haqida, sehr-jodu haqida, qo'rqinchli"],
    correctAnswer: "Hayvonlar haqida, sehrli-fantastika, hayotiy-maishiy"
  },
  {
    question: "Nutq o'stirish nazariyasi va metodikasi fani nimani o'rganadi?",
    options: ["Maktabgacha ta'lim-tarbiyaning umumiy qonuniyatlari, muayyan jamiyatda yagona ijtimoiy maqsadga muvofiq maktabgacha yoshdagi bolalarni tarbiyalash hamda unga ta'lim berishning mohiyati va muammolarini o'rganadi", "Muayyan jamiyatda yagona ijtimoiy maqsadga muvofiq maktabgacha yoshdagi bolalarni tarbiyalashni o'rganadi", "Unga ta'lim berishning mohiyati va muammolarini o'rganadigan fan", "Maktabgacha ta'lim-tarbiyaning umumiy qonuniyatlarini o'rganadi"],
    correctAnswer: "Maktabgacha ta'lim-tarbiyaning umumiy qonuniyatlari, muayyan jamiyatda yagona ijtimoiy maqsadga muvofiq maktabgacha yoshdagi bolalarni tarbiyalash hamda unga ta'lim berishning mohiyati va muammolarini o'rganadi"
  },
  {
    question: "Maktabgacha katta yoshdagi bolalar nutqini o'stirishda qaysi nutq turini rivojlantirishga alohida e'tibor berish kerak?",
    options: ["Monologik va dialogik nutq turini", "Dialogik nutq turini", "Suhbat nutq turini", "Monologik nutq turini"],
    correctAnswer: "Monologik va dialogik nutq turini"
  },
  {
    question: "Nutq o'stirishni ta'minlaydigan omillar to'g'ri yozilgan qatorni toping.",
    options: ["Maktabgacha katta yoshdagi bolalarning yosh xususiyatlari, nutqni rivojlantirishning o'sib boruvchi salohiyati, so'z zahirasi", "Nutqni rivojlantirishning o'sib boruvchi salohiyati", "So'z zahirasi", "Maktabgacha katta yoshdagi bolalarning yosh xususiyatlari"],
    correctAnswer: "Maktabgacha katta yoshdagi bolalarning yosh xususiyatlari, nutqni rivojlantirishning o'sib boruvchi salohiyati, so'z zahirasi"
  },
  {
    question: "Bolaning nutqi nimaning natijasida rivojlanadi?",
    options: ["Til qonuniyatlariga to'g'ri amal qilish, kattalar nutqini idrok etish va o'zining ijodiy faolligi natijasida rivojlanadi", "Kattalar nutqini idrok etish natijasida rivojlanadi", "O'zining ijodiy faolligi natijasida rivojlanadi", "Til qonuniyatlariga to'g'ri amal qilish natijasida rivojlanadi"],
    correctAnswer: "Til qonuniyatlariga to'g'ri amal qilish, kattalar nutqini idrok etish va o'zining ijodiy faolligi natijasida rivojlanadi"
  },
  {
    question: "Nutq madaniyati — bu…",
    options: ["To'g'ri so'zlay olish, ya'ni nutqiy muloqot shartlari va fikr bildirishdan ko'zlangan maqsadni hisobga olgan holda hamda barcha til vositalaridan foydalangan holda bayon qilinayotgan mazmunga mos holda gapirishdan iboratdir", "Fikr bildirishdan ko'zlangan maqsadni hisobga olgan holda hamda barcha til vositalaridan foydalangan holda bayon qilinayotgan mazmunga mos holda gapirishdan iboratdir", "Barcha til vositalaridan foydalangan holda bayon qilinayotgan mazmunga mos holda gapirishdan iboratdir", "To'g'ri so'zlay olish, ya'ni nutqiy muloqot shartlarini bajarishdan iboratdir"],
    correctAnswer: "To'g'ri so'zlay olish, ya'ni nutqiy muloqot shartlari va fikr bildirishdan ko'zlangan maqsadni hisobga olgan holda hamda barcha til vositalaridan foydalangan holda bayon qilinayotgan mazmunga mos holda gapirishdan iboratdir"
  },
  {
    question: "Kishilar muloqotining mazmunan keng yoritilgan shakli nima deyiladi?",
    options: ["Ravon nutq", "Nutq", "Suhbat", "Nutq va suhbat"],
    correctAnswer: "Ravon nutq"
  },
  {
    question: "Ravon nutq vazifalari nechta?",
    options: ["3", "4", "2", "5"],
    correctAnswer: "3"
  },
  {
    question: "Kattalar bilan muloqotga ega bo'lgan ehtiyoj necha bosqich bo'ladi?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3"
  },
  {
    question: "Bir kishining nutqi nima deyiladi?",
    options: ["Monolog", "Dialog", "Suhbat", "Nutq"],
    correctAnswer: "Monolog"
  },
  {
    question: "Ikki kishining suhbati nima deyiladi?",
    options: ["Dialog", "Monolog", "Suhbat", "Og'zaki nutq"],
    correctAnswer: "Dialog"
  },
  {
    question: "Nutqni rivojlantirishning muhim vositasi to'g'ri yozilgan qatorni toping.",
    options: ["Badiiy so'z, tasviriy san'at, bayramlar", "Tasviriy san'at", "Bayramlar", "Og'zaki nutq"],
    correctAnswer: "Badiiy so'z, tasviriy san'at, bayramlar"
  },
  {
    question: "Ovoz qanday vujudga keladi?",
    options: ["Ovoz naychalarining tebranilishi natijasida vujudga keladi", "Nafas organlari ishtiroki", "Jarangli, taroq ovozi", "Nafas artikulyatsiyasi"],
    correctAnswer: "Ovoz naychalarining tebranilishi natijasida vujudga keladi"
  },
  {
    question: "Tarbiyachi nutqiga qo'yiladigan pedagogik talablar to'g'ri yozilgan qatorni belgilang.",
    options: ["Nutq tovush tomonining to'g'riligi, adabiy til normalariga muvofiq to'g'ri talaffuz, nutqning intonatsion-ifodaviy vositalaridan to'g'ri foydalanish, lug'atining boy bo'lishi, nutqining samimiy bo'lishi", "Adabiy til normalariga muvofiq to'g'ri talaffuz", "Nutqining samimiy bo'lishi", "Nutqning intonatsion-ifodaviy vositalaridan to'g'ri foydalanish"],
    correctAnswer: "Nutq tovush tomonining to'g'riligi, adabiy til normalariga muvofiq to'g'ri talaffuz, nutqning intonatsion-ifodaviy vositalaridan to'g'ri foydalanish, lug'atining boy bo'lishi, nutqining samimiy bo'lishi"
  },
  {
    question: "Kattalar nutqidagi nuqsonlarni bartaraf etish mumkinmi?",
    options: ["Ha, mumkin", "Yo'q, mumkin emas", "Qisman mumkin", "Umuman mumkin emas"],
    correctAnswer: "Ha, mumkin"
  },
  {
    question: "Diksiya deganda —",
    options: ["Sof, aniq, ravshan nutqni, tovush talaffuzini tushunamiz", "Adabiy til normalariga muvofiq to'g'ri talaffuzni tushunamiz", "To'g'ri nafas olish va chiqarishni tushunamiz", "Nutqining samimiy bo'lishini tushunamiz"],
    correctAnswer: "Sof, aniq, ravshan nutqni, tovush talaffuzini tushunamiz"
  },
  {
    question: "Maktabgacha tarbiya yoshidagi bolaning nutqi qanday vazifalarni bajaradi?",
    options: ["Kommunikativ, bilim, tartibga solish", "Kommunikativ, bilish", "Bilish, tartibga solish", "Tartibga solish"],
    correctAnswer: "Kommunikativ, bilim, tartibga solish"
  },
  {
    question: "Inson til orqali…",
    options: ["Axborot beradi, axborot qabul qiladi", "Axborot beradi", "Axborot qabul qiladi", "Muomala, axborot beradi"],
    correctAnswer: "Axborot beradi, axborot qabul qiladi"
  },
  {
    question: "Nutq o'stirish metodikasi qanday fan?",
    options: ["Bolalar nutqini o'stiradi", "Nutq o'stirish metodlarini o'rganadi", "Nutq o'stirish uslubiyoti pedagogik fan", "Nutq o'stirish metodikasi maktabgacha yoshdagi bolalarda nutqni shakllantirishga qaratilgan pedagogik qonuniyatlar o'rganiladi"],
    correctAnswer: "Nutq o'stirish metodikasi maktabgacha yoshdagi bolalarda nutqni shakllantirishga qaratilgan pedagogik qonuniyatlar o'rganiladi"
  },
  {
    question: "Nutq o'stirish uslubiyotining maqsadi nimadan iborat?",
    options: ["Og'zaki nutqini shakllantiradi", "Bolalarning og'zaki nutqini rivojlantirish, nutqiy muloqotda ko'nikmalarini rivojlantirish", "Hikoya qilishga o'rgatadi", "Muomalaga o'rgatish"],
    correctAnswer: "Og'zaki nutqini shakllantiradi"
  },
  {
    question: "Nutqni tovush madaniyati nimaga asoslanadi?",
    options: ["Tovush tomoniga, ya'ni o'zbek tilining fonetikasiga va orfoepiyasiga", "O'zbek tilining fonetikasiga", "Orfoepiyasiga", "Urg'u, diqqatga"],
    correctAnswer: "Tovush tomoniga, ya'ni o'zbek tilining fonetikasiga va orfoepiyasiga"
  },
  {
    question: "Dialogik nutqni shakllantirish bu —",
    options: ["Boshqalarning nutqini tinglash, tushunish, so'zlashishni qo'llab-quvvatlash, savol berish", "Tinglash va tushunish", "Savol-javob qilish", "Lug'at boyligini o'stirish"],
    correctAnswer: "Boshqalarning nutqini tinglash, tushunish, so'zlashishni qo'llab-quvvatlash, savol berish"
  },
  {
    question: "Monologik nutq qaysi yoshdan shakllanadi?",
    options: ["5 yoshdan", "4 yoshdan", "3 yoshdan", "2 yoshdan"],
    correctAnswer: "5 yoshdan"
  },
  {
    question: "\"Nutq o'stirish dasturi\" nimaga asoslangan?",
    options: ["Og'zaki nutqini rivojlantirish va o'zlashtirish to'g'risidagi psixologiya fani ma'lumotlariga va bilish faoliyatining xususiyatlari to'g'risidagi nazariyaga asoslangan", "Psixologiyaga", "Pedagogikaga", "Bola shaxsini rivojlantirishga"],
    correctAnswer: "Og'zaki nutqini rivojlantirish va o'zlashtirish to'g'risidagi psixologiya fani ma'lumotlariga va bilish faoliyatining xususiyatlari to'g'risidagi nazariyaga asoslangan"
  },
  {
    question: "Ilk yoshgacha bo'lgan bolalar nutqining davrlarini belgilang.",
    options: ["Tayyorgarlik, nutqning mustaqil rivojlantirish davri", "Chinqirish, guvrash", "Nutqsiz taraqqiyot", "Til chiqarish davri"],
    correctAnswer: "Tayyorgarlik, nutqning mustaqil rivojlantirish davri"
  },
  {
    question: "Nutqqa tayyorgarlik davri necha bosqichdan iborat?",
    options: ["3 bosqich (chinqirish, guvrash, til chiqarish)", "2 bosqich (chinqirish, guvrash)", "4 bosqich (2,5–3 oy, 5–6 oy, 9–10 oy, 1 yosh)", "5 bosqich"],
    correctAnswer: "3 bosqich (chinqirish, guvrash, til chiqarish)"
  },
  {
    question: "Lug'atni boyitish ishlari necha yo'nalishda olib boriladi?",
    options: ["3 yo'nalishda", "2 yo'nalishda", "4 yo'nalishda", "5 yo'nalishda"],
    correctAnswer: "3 yo'nalishda"
  },
  {
    question: "Nutq o'stirish mashg'ulotlari necha qismdan iborat bo'ladi?",
    options: ["5 qismdan", "3 qismdan", "Asosiy va yakuniy qismdan", "Dastur mazmunidan"],
    correctAnswer: "5 qismdan"
  },
  {
    question: "Badiiy asarlarni tanishtirish orqali bolalarda qanday malakalar shakllanadi?",
    options: ["Tinglash va tushunish, axloqiy sifatlarni baholash, asar qahramonlarini baholash", "Badiiy asarni tinglash va tushunish", "Asar qahramonlari hatti-harakatlarini baholash", "Savollarga javob berish malakasi"],
    correctAnswer: "Tinglash va tushunish, axloqiy sifatlarni baholash, asar qahramonlarini baholash"
  },
  {
    question: "To'g'ri nutq bu —",
    options: ["To'g'ri talaffuz, so'zlarni ma'nosiga ko'ra to'g'ri ishlatish, grammatik qoidalarga asoslash", "Tovush va so'zlarni to'g'ri talaffuz qilish", "O'z fikrini to'g'ri va aniq ifodalay olish", "Mashg'ulot va mehnat jarayonida nutq"],
    correctAnswer: "To'g'ri talaffuz, so'zlarni ma'nosiga ko'ra to'g'ri ishlatish, grammatik qoidalarga asoslash"
  },
  {
    question: "Davlat talablarining qaysi sohasida nutq o'stirish ko'rsatilgan?",
    options: ["Nutq, muloqot, o'qish va yozish malakalarini rivojlanish sohasi", "Ijtimoiy-hissiy rivojlanish sohasi", "Ijodiy rivojlanish sohasi", "Bilish jarayonini rivojlanish sohasi"],
    correctAnswer: "Nutq, muloqot, o'qish va yozish malakalarini rivojlanish sohasi"
  },
  {
    question: "She'r yodlatishning asosiy maqsadi?",
    options: ["She'riyatga muhabbat, badiiy did, she'riyatni idrok etish", "She'riyatga bo'lgan muhabbatni o'yg'otish", "Badiiy didni tarbiyalash", "She'riyat namunalarini idrok etish"],
    correctAnswer: "She'riyatga muhabbat, badiiy did, she'riyatni idrok etish"
  },
  {
    question: "Suhbat necha qismdan iborat bo'ladi?",
    options: ["3 qismdan – suhbat boshlash, borishi, yakunlash", "2 qismdan – suhbatni borish, yakunlash", "1 qismdan – suhbatga mavzu tanlash", "Suhbat qismlardan iborat bo'lmaydi"],
    correctAnswer: "3 qismdan – suhbat boshlash, borishi, yakunlash"
  },
  {
    question: "Bolalarni erkin muomalaga o'rgatish qanday faoliyatlar jarayonida amalga oshiriladi?",
    options: ["O'yin jarayonida, maishiy faoliyatda, sayr vaqtida, mehnat jarayonida, tevarak–atrof bilan tanishda, boshqa mashqlarda", "Maishiy faoliyatda, sayr vaqtida", "Maxsus mashg'ulotlarda, kiyinish va ovqatlanish jarayonida", "Bilim, ko'nikma va malakalarni mustahkamlovchi mashg'ulotlarda"],
    correctAnswer: "O'yin jarayonida, maishiy faoliyatda, sayr vaqtida, mehnat jarayonida, tevarak–atrof bilan tanishda, boshqa mashqlarda"
  },
  {
    question: "O'qilgan asarlarni mustahkamlash usullari?",
    options: ["Takroriy o'qib berish, hikoya qilib berish, sahnalashtirish", "Ijodiy hikoya qilishga o'rgatish", "She'rlarni yod oldirish, hikoya qilib berish", "Badiiy asar instsenirovkasi"],
    correctAnswer: "Takroriy o'qib berish, hikoya qilib berish, sahnalashtirish"
  },
  {
    question: "She'r yod oldirishda tarbiyachi oldiga qo'yiladigan vazifalar?",
    options: ["Esda olib qolish, she'rga qiziqish, she'r mazmuni, ifodali o'qib berish", "Ifodali aytib berishga o'rgatish", "She'rdagi qiyin so'zlarning ma'nosini tushunish", "She'rga nisbatan muhabbat uyg'otish"],
    correctAnswer: "Esda olib qolish, she'rga qiziqish, she'r mazmuni, ifodali o'qib berish"
  },
  {
    question: "Asarni ifodali bayon etish necha yo'nalishda amalga oshiriladi?",
    options: ["5", "4", "3", "7"],
    correctAnswer: "3"
  },
  {
    question: "Og'zaki nutqning tovush tizimini o'rganuvchi bo'lim nima deb yuritiladi?",
    options: ["Grafika", "Sintaksis", "Fonetika", "Orfografiya"],
    correctAnswer: "Fonetika"
  },
  {
    question: "Qaysi maqolda antonim sifat berilgan?",
    options: ["Bilgan topib gapirar, bilmagan qopib", "Bir azobning bir rohati bor", "Uying tor bo'lsa ham, ko'ngling keng bo'lsin", "Ish bilganga bir tanga"],
    correctAnswer: "Uying tor bo'lsa ham, ko'ngling keng bo'lsin"
  },
  {
    question: "Bolalarning dialogik nutqini tarkib toptirishda qanday maxsus mashg'ulotlardan foydalanadi?",
    options: ["Suhbatlar, suratlarni ko'rib chiqish, ta'limiy o'yin", "Ta'limiy o'yin, qo'g'irchoqlarni tasvirlash", "Ma'lum mavzuga qaratilgan suhbat", "Dialogik nutq o'stiruvchi mashg'ulotlar"],
    correctAnswer: "Suhbatlar, suratlarni ko'rib chiqish, ta'limiy o'yin"
  },
  {
    question: "Bog'lanishli nutqqa o'rgatishning qanday vazifalarni hal qiladi?",
    options: ["Lug'at ishi, grammatik jihatdan shakllanganlik, tovush madaniyati", "Bolalarni badiiy adabiyot bilan tanishtirish", "Lug'at ishini", "Dialogik va monologik nutq"],
    correctAnswer: "Lug'at ishi, grammatik jihatdan shakllanganlik, tovush madaniyati"
  },
  {
    question: "Syujetli hikoya qilishga o'rgatish usullari.",
    options: ["Surat mazmunini tushuntirishga yo'naltirilgan savollar, namuna ko'rsatish va baholash", "Predmetli va syujetli suratlar", "Namuna ko'rsatish va baholash", "Aniq ifodali so'zlashga o'rgatish"],
    correctAnswer: "Surat mazmunini tushuntirishga yo'naltirilgan savollar, namuna ko'rsatish va baholash"
  },
  {
    question: "Nutq tembri nima?",
    options: ["So'zlarning tovlanishi, emotsional holatni anglatadi", "Quvnoqlikni, xafalikni anglatadi", "Intonatsiya", "Ifodali nutq"],
    correctAnswer: "So'zlarning tovlanishi, emotsional holatni anglatadi"
  },
  {
    question: "Intonatsiya bu —",
    options: ["Hamma ma'nodorlik vositalarini o'z ichiga qamrab olgan murakkab majmua", "Nutq mazmuni", "Nutqning ifodaviyligi", "Nutqning ohangdorligi"],
    correctAnswer: "Hamma ma'nodorlik vositalarini o'z ichiga qamrab olgan murakkab majmua"
  },
  {
    question: "Ohangdorlik —",
    options: ["Jumlalarni talaffuz etish vaqtida ovozni balandlatish yoki pastlashtirish", "Ruhiy kechinmalarni birlashtiruvchi", "Nutqning kuchi, surati", "Kuylovchi yumshoq ohangdagi nutq"],
    correctAnswer: "Jumlalarni talaffuz etish vaqtida ovozni balandlatish yoki pastlashtirish"
  },
  {
    question: "Nutq tempi —",
    options: ["Nutq mazmuniga qarab nutqning tezlashishi yoki sekinlashishi", "So'zlovchining irodasi, niyat bilan bog'liq", "Nutqqa turlicha ohang beradi", "Nutq mazmuniga qarab nutqning tezlashishi (faqat)"],
    correctAnswer: "Nutq mazmuniga qarab nutqning tezlashishi yoki sekinlashishi"
  },
  {
    question: "Ritm bu —",
    options: ["Urg'uli va urg'usiz bo'g'inlarning teng tarzda navbatlashib turishi", "Bo'g'inlarning qisqaligi va uzunligi", "Ovozni balandlatish va pastlatish", "Nutq tezligi va pastligi"],
    correctAnswer: "Urg'uli va urg'usiz bo'g'inlarning teng tarzda navbatlashib turishi"
  },
  {
    question: "Mazmunli hikoyalar nechiga bo'linadi?",
    options: ["Faktik va ijodiy hikoyalarga", "To'qima va qayta hikoya qilishga", "Mazmunli hikoya", "To'g'ri javob yo'q"],
    correctAnswer: "Faktik va ijodiy hikoyalarga"
  },
  {
    question: "Nutqning necha xil shakli mavjud?",
    options: ["Sensor va motor nutq", "Dialogik va monologik", "Og'zaki va tashqi nutq", "Ichki va tashqi nutq"],
    correctAnswer: "Sensor va motor nutq"
  },
  {
    question: "Shaxs rivojlanishiga ta'sir etuvchi omillar qaysilar?",
    options: ["Ijtimoiy muhit", "Irsiyat", "Irsiyat, muhit, tarbiya", "Biogenetik omillar"],
    correctAnswer: "Irsiyat, muhit, tarbiya"
  },
  {
    question: "O'yin faoliyatida maktabgacha yoshdagi bolalarning qanday faolligi rivojlanadi?",
    options: ["Ta'sirchanlik faoliyati", "Ijtimoiy bilish faolligi", "Mustaqilligi", "Muloqot faolligi"],
    correctAnswer: "Mustaqilligi"
  },
  {
    question: "Qaysi psixik jarayon yordamida bola o'z hissiyotlari va emotsiyalarini anglaydi va boshqaradi?",
    options: ["Nutq", "Xotira", "Sezgilar", "Idrok"],
    correctAnswer: "Nutq"
  },
  {
    question: "3 yoshdagi bolaning yosh inqirozi qanday hatti-harakatlarida ifodalanadi?",
    options: ["Bolaning shaxsiy individual harakatlaridan kelib chiqadi, u o'z harakatlarini to'g'ri baholay olmaydi", "Mustaqillikka intilish, o'z harakatlarini kattalar harakatlariga moslay olmaganligi", "Bola o'z harakatlarini nima yaxshi-yu, nima yomon degan tasavvurga moslay olishi", "Bola o'zini o'zgalardan ajrata olishi, muvaffaqiyatsizlikka uchraganda qaysarlik qilishi"],
    correctAnswer: "Bolaning shaxsiy individual harakatlaridan kelib chiqadi, u o'z harakatlarini to'g'ri baholay olmaydi"
  },
  {
    question: "Go'daklik davrida asosiy faoliyat turi?",
    options: ["Emotsional faoliyat", "Predmetli faoliyat", "Muloqot", "O'yin faoliyati"],
    correctAnswer: "Emotsional faoliyat"
  },
  {
    question: "Maktabgacha yoshdagi bolalar idrokining xarakterli xususiyatlari?",
    options: ["Bolalar narsalarni idrok etishda ko'zga tashlanib turgan belgilariga asoslanadilar", "Bolalar narsalarni idrok etishda mavhum tafakkurga asoslanadilar", "Bolalar narsalarni idrok etishda sezgilariga asoslanadilar", "Bolalar narsalarni idrok etishda ichki hissiyotlariga asoslanadilar"],
    correctAnswer: "Bolalar narsalarni idrok etishda ko'zga tashlanib turgan belgilariga asoslanadilar"
  },
  {
    question: "Maktabgacha yoshdagi bolalar jamoasining asosiy ishtirokchilari kimlar?",
    options: ["Tarbiyachi, tarbiyalanuvchi", "Bola va ona", "Ota va ona", "Bolalar"],
    correctAnswer: "Tarbiyachi, tarbiyalanuvchi"
  },
  {
    question: "\"Men\" konsepsiyasi qaysi sohaga tegishli?",
    options: ["\"Ijtimoiy-hissiy rivojlanish\" sohasiga", "O'qish malakalari", "\"Bilish jarayonining rivojlanishi\" sohasida", "\"Ijodiy rivojlanish\" sohasi"],
    correctAnswer: "\"Ijtimoiy-hissiy rivojlanish\" sohasiga"
  },
  {
    question: "Davlat talablari bo'yicha 6–7 yoshdan bolaning matematikaga oid egallashi zarur bo'lgan minimal talablaridan biri qaysi?",
    options: ["Birinchi o'nlikda har bir sonning qanday hosil bo'lishini bilish", "10 gacha sanashni bilish", "30 gacha sanashni bilish", "20 gacha sanashni bilish"],
    correctAnswer: "Birinchi o'nlikda har bir sonning qanday hosil bo'lishini bilish"
  },
  {
    question: "\"Sog'lom turmush tarzi va xavfsizlik\" qaysi sohaga tegishli?",
    options: ["\"Men\" konsepsiyasi sohasiga", "\"Jismoniy rivojlanish va sog'lom turmush tarzining shakllanishi\" sohasiga", "\"Bilish jarayonining rivojlanishi\" sohasida", "\"Ijodiy rivojlanish\" sohasi"],
    correctAnswer: "\"Jismoniy rivojlanish va sog'lom turmush tarzining shakllanishi\" sohasiga"
  },
  {
    question: "Davlat talablari bo'yicha atrof-olam to'g'risidagi bilimga ega bo'lish yo'nalishida bolalarga qanday bilimlar beriladi?",
    options: ["Ilk ekologik tushunchalar berish", "O'simliklar bilan tanishtirish", "Hayvonlar bilan tanishtirish", "Tirik jonzot va yer kurrasi to'g'risidagi tasavvurga ega bo'lish"],
    correctAnswer: "Tirik jonzot va yer kurrasi to'g'risidagi tasavvurga ega bo'lish"
  },
  {
    question: "\"Ilk qadam\" Maktabgacha ta'lim muassasasining Davlat o'quv dasturi necha bobdan iborat?",
    options: ["7", "4", "5", "3"],
    correctAnswer: "7"
  },
  {
    question: "Maktabgacha ta'lim muassasalarida asosiy rivojlantiruvchi-o'yin markazlarini belgilang.",
    options: ["Qurish-yasash va konstruktorlash, syujetli-rolli markazlari", "Qurish-yasash va konstruktorlash, syujetli-rolli, nutq va til, ilm-fan va tabiat, san'at, musiqa va ritmika markazlari", "Nutq va til, fan va tabiat, san'at, musiqa va ritmika markazlari", "Qurish-yasash va konstruktorlash, syujetli-rolli, nutq va til, fan va tabiat, san'at, musiqa va ritmika, matematika, jismoniy tarbiya markazlari"],
    correctAnswer: "Qurish-yasash va konstruktorlash, syujetli-rolli, nutq va til, ilm-fan va tabiat, san'at, musiqa va ritmika markazlari"
  },
  {
    question: "Hikoya, rivoyat, ertak, topishmoq va maqollar qaysi mashg'ulotda qo'llaniladi?",
    options: ["Tabiat bilan tanishtirish", "Nutq o'stirish", "Atrof olam", "Badiiy adabiyot"],
    correctAnswer: "Badiiy adabiyot"
  },
  {
    question: "Maktabgacha yoshdagi (6–7 yosh) bolaning umumiy muhim kompetensiyalari berilgan qatorni toping.",
    options: ["Kommunikativ kompetensiya, o'yin kompetensiyasi, ijtimoiy kompetensiya, bilish kompetensiyasi", "O'yin kompetensiyasi, ijtimoiy kompetensiya, bilish kompetensiyasi", "Kommunikativ kompetensiya, o'yin kompetensiyasi, ijtimoiy kompetensiya", "Faqat o'yin kompetensiyasi"],
    correctAnswer: "Kommunikativ kompetensiya, o'yin kompetensiyasi, ijtimoiy kompetensiya, bilish kompetensiyasi"
  },
  {
    question: "Maktabgacha ta'limning maqsadini ayting.",
    options: ["Maktabgacha ta'lim bola shaxsini sog'lom va yetuk, maktabda o'qishga tayyorlangan tarzda shakllantirish maqsadini ko'zlaydi", "Barkamol qilish", "Maktabga tayyorlash", "Barkamol qilish, ko'rganlarini hikoya qilish asosida maktabga tayyorlash"],
    correctAnswer: "Maktabgacha ta'lim bola shaxsini sog'lom va yetuk, maktabda o'qishga tayyorlangan tarzda shakllantirish maqsadini ko'zlaydi"
  },
  {
    question: "Ijtimoiy rivojlanishga tegishli bo'lgan qismlarni belgilang.",
    options: ["Kattalar va tengdoshlar bilan muloqot", "Ota-onalar bilan muloqot", "Aka-ukalar bilan muloqot", "Do'stlar bilan muloqot"],
    correctAnswer: "Kattalar va tengdoshlar bilan muloqot"
  },
  {
    question: "6–7 yoshli bolalarni atrof-olam haqidagi tushunchalarini shakllantirishda qanday bilimlarni egallashlari zarur?",
    options: ["Ona Vatan va atrof-olam, buyuk siymolar, bayramlar, mashhur sarkardalar, xalq amaliy san'ati", "Bayramlar, mashhur sarkardalar, xalq amaliy san'ati", "Ona Vatan va atrof-olam, buyuk siymolar", "Buyuk siymolar, bayramlar, mashhur sarkardalar, xalq amaliy san'ati"],
    correctAnswer: "Ona Vatan va atrof-olam, buyuk siymolar, bayramlar, mashhur sarkardalar, xalq amaliy san'ati"
  },
  {
    question: "Bolaning rivojlanishi va uning maktabga tayyorgarlik ko'rsatkichlari darajasi qanday?",
    options: ["Jismoniy, ijtimoiy, psixologik hamda shaxs sifatida tayyorgarlik", "Jismoniy, ijtimoiy, psixologik tayyorgarlik", "Psixologik, shaxs sifatida tayyorgarlik", "Ijtimoiy, psixologik, shaxs sifatida tayyorgarlik"],
    correctAnswer: "Jismoniy, ijtimoiy, psixologik hamda shaxs sifatida tayyorgarlik"
  },
  {
    question: "Mashg'ulotga tayyorlanish mazmuniga nimalar kiradi?",
    options: ["Mashg'ulot vaqtida pedagogik yangilikning vujudga kelishi, ularning jadal o'zlashtirilishi", "Mashg'ulotni rejalashtirish, kerakli jihozlarni oldindan tayyorlab qo'yish, bolalarni mashg'ulotga tayyorlash", "Kerakli jihozlarni oldindan tayyorlab qo'yish, to'g'ri o'tirish", "Faollik, didaktik o'yinlar, evristik, kreativ, muammoli, loyihalashtirish"],
    correctAnswer: "Mashg'ulotni rejalashtirish, kerakli jihozlarni oldindan tayyorlab qo'yish, bolalarni mashg'ulotga tayyorlash"
  },
  {
    question: "Ota-onalar qo'mitasining yig'ilishi qanday muddatda o'tkaziladi?",
    options: ["Har oyda 2 marta", "Ikki oyda bir marta", "Bir yilda ikki marta", "Uch oyda bir marta"],
    correctAnswer: "Bir yilda ikki marta"
  },
  {
    question: "Katta guruh bolalari nechta iboradan tarkib topgan ravon hikoya tuza oladi?",
    options: ["6–10 ta ibora", "5–7 ta ibora", "8–12 ta ibora", "10–12 ta ibora"],
    correctAnswer: "6–10 ta ibora"
  },
  {
    question: "Hafta davomida 3 yoshli bola nechta miqdordagi so'zlarni o'zlashtirishlari mumkin?",
    options: ["10 ta so'z", "5 ta so'z", "15 ta so'z", "3 ta so'z"],
    correctAnswer: "5 ta so'z"
  },
  {
    question: "Hikoya, suhbat, tushuntirish qaysi metodga kiradi?",
    options: ["Amaliy o'qitish metodi", "O'yin metodi", "Og'zaki metodi", "Xususiy metod"],
    correctAnswer: "Og'zaki metodi"
  },
  {
    question: "Nutq nima?",
    options: ["Nutq — aloqa vositasi", "Nutq ikki xil bo'ladi — ichki va tashqi", "Nutq ikkinchi signal tizimiga kiradi", "Nutq yakka shaxsga tegishli bo'lgan muloqot shakli"],
    correctAnswer: "Nutq yakka shaxsga tegishli bo'lgan muloqot shakli"
  },
  {
    question: "Nutq o'stirish metodikasi qanday fan?",
    options: ["Bolalar nutqini o'stiradi", "Nutq o'stirish metodlarini o'rganadi", "Nutq o'stirish uslubiyoti pedagogik fan", "Nutq o'stirish metodikasi maktabgacha yoshdagi bolalarda nutqni shakllantirishga qaratilgan pedagogik qonuniyatlar o'rganiladi"],
    correctAnswer: "Nutq o'stirish metodikasi maktabgacha yoshdagi bolalarda nutqni shakllantirishga qaratilgan pedagogik qonuniyatlar o'rganiladi"
  },
  {
    question: "Nutq o'stirish uslubiyoti fanining asosiy vazifasi nimadan iborat?",
    options: ["Nutq o'stirish uslubi va uslubiyotlarini ularning eng samarali vositalarini ilmiy-pedagogik asoslarda ishlab chiqish va bolalar bog'chalari tarbiyachilarini ular bilan ta'minlashdir", "Tarbiyachilar yordamida bolalarda kerakli nutqiy ko'nikmalarni shakllantirish", "Bolalar nutqini shakllantirish", "Maktabgacha tarbiya yoshidagi bolalarda dialogik nutqni shakllantirish"],
    correctAnswer: "Nutq o'stirish uslubi va uslubiyotlarini ularning eng samarali vositalarini ilmiy-pedagogik asoslarda ishlab chiqish va bolalar bog'chalari tarbiyachilarini ular bilan ta'minlashdir"
  },
  {
    question: "Ta'lim faoliyatini mavzuli rejalashtirish qo'llanmasida Nutq va til markazida tashkillashtiriladigan ta'limiy faoliyatlarning ishlanmalari berilgan?",
    options: ["Nutq o'stirish, atrof olam bilan tanishtirish", "Nutq o'stirish, badiiy adabiyot bilan tanishtirish", "Atrof olam bilan tanishtirish, badiiy adabiyot bilan tanishtirish", "Nutq o'stirish, atrof olam bilan tanishtirish, badiiy adabiyot bilan tanishtirish"],
    correctAnswer: "Nutq o'stirish, atrof olam bilan tanishtirish, badiiy adabiyot bilan tanishtirish"
  },
  {
    question: "O'qilgan asarlarni mustahkamlash usullari?",
    options: ["Ijodiy hikoya qilishga o'rgatish", "She'rlarni yod oldirish, hikoya qilib berish", "Badiiy asar instsenirovkasi", "Takroriy o'qib berish, hikoya qilib berish, sahnalashtirish"],
    correctAnswer: "Takroriy o'qib berish, hikoya qilib berish, sahnalashtirish"
  },
  {
    question: "She'r yodlatishning asosiy maqsadi?",
    options: ["She'riyatga bo'lgan muhabbatni o'yg'otish", "Badiiy didni tarbiyalash", "She'riyatga muhabbat, badiiy did, she'riyatni idrok etish", "She'riyat namunalarini idrok etish"],
    correctAnswer: "She'riyatga muhabbat, badiiy did, she'riyatni idrok etish"
  },
  {
    question: "She'r yod oldirishda tarbiyachi oldiga qo'yiladigan vazifalar?",
    options: ["Esda olib qolish, she'rga qiziqish, she'r mazmuni, ifodali o'qib berish", "Ifodali aytib berishga o'rgatish", "She'rdagi qiyin so'zlarning ma'nosini tushunish", "She'rga nisbatan muhabbat uyg'otish"],
    correctAnswer: "Esda olib qolish, she'rga qiziqish, she'r mazmuni, ifodali o'qib berish"
  },
  {
    question: "Asarni ifodali bayon etish necha yo'nalishda amalga oshiriladi?",
    options: ["5", "4", "3", "7"],
    correctAnswer: "3"
  },
  {
    question: "\"Ilk qadam\" Maktabgacha ta'lim muassasalarining davlat o'quv dasturining 3-bobi qanday nomlanadi?",
    options: ["Umumiy qoidalar", "Ilovalar", "Rivojlantiruvchi muhitni tashkil etish", "Maktabgacha yoshdagi bolalarga ta'lim berishda kompetensiyaviy yondashuv"],
    correctAnswer: "Maktabgacha yoshdagi bolalarga ta'lim berishda kompetensiyaviy yondashuv"
  },
  {
    question: "\"Ilk qadam\" Maktabgacha ta'lim muassasalarining davlat o'quv dasturining 1-bobi qanday nomlanadi?",
    options: ["Umumiy qoidalar", "MTMdagi ta'lim faoliyatining maqsad va tamoyillari", "O'quv-tarbiyaviy faoliyat", "Rivojlantiruvchi muhitni tashkil etish"],
    correctAnswer: "Umumiy qoidalar"
  },
  {
    question: "San'at faollik markazida guruhlarda o'tkaziladigan mashg'ulotlar qaysilar?",
    options: ["Rasm, loy ishi, applikatsiya, qurilish-yasash", "Rasm, nutq o'stirish, tabiat bilan tanishtirish", "Atrof olam bilan tanishtirish, loy ishi, badiiy adabiyot", "Qurilish-yasash, konstruksiyalash, matematika"],
    correctAnswer: "Rasm, loy ishi, applikatsiya, qurilish-yasash"
  },
  {
    question: "Qaysi dastur alohida ehtiyojiga ega bo'lgan bolalar uchun mo'ljallangan?",
    options: ["Variativ dastur", "Tayanch dastur", "\"Ilk qadam\" Davlat o'quv dasturi", "O'quv dastur"],
    correctAnswer: "\"Ilk qadam\" Davlat o'quv dasturi"
  },
  {
    question: "Qaysi guruhlarda bolalar tayyor shakllarni bir-biriga moslab yopishtiradilar?",
    options: ["Kichik guruhdan", "O'rta guruh", "Katta guruh", "Tayyorlov guruh"],
    correctAnswer: "Tayyorlov guruh"
  },
  {
    question: "Maktabgacha yoshdagi (6–7 yosh) bolaning tayanch kompetensiyalari nechta?",
    options: ["8", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "\"Ilk qadam\" maktabgacha ta'lim muassasasining davlat o'quv dasturida nechta rivojlantiruvchi kompetensiyaviy sohalar mavjud?",
    options: ["5", "4", "2", "6"],
    correctAnswer: "5"
  },
  {
    question: "\"Ilk qadam\" dasturida \"Jismoniy rivojlanish va sog'lom turmush tarzining shakllanishi\" kompetensiyasining nechta kichik sohasi bor?",
    options: ["7", "4", "2", "5"],
    correctAnswer: "7"
  },
  {
    question: "\"Ilk qadam\" dasturida \"Nutq, muloqot, o'qish va yozish malakalari\" nechta kichik sohaga bo'linadi?",
    options: ["4", "2", "3", "8"],
    correctAnswer: "8"
  },
  {
    question: "\"Ilk qadam\" dasturida \"Ijtimoiy-hissiy rivojlanish\" sohasi nechta kichik sohalarga bo'linadi?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "5"
  },
  {
    question: "\"Ilk qadam\" dasturida \"Ijodiy rivojlanish\" sohasi nechta kichik sohalarga bo'linadi?",
    options: ["2", "4", "3", "5"],
    correctAnswer: "5"
  },
  {
    question: "O'yin faoliyati kunduzgi uyquni hisobga olmagan holda necha % ni tashkil etadi?",
    options: ["15", "38", "20", "18"],
    correctAnswer: "38"
  },
  {
    question: "Ilk bolalik qaysi yosh davrlarni o'z ichiga oladi?",
    options: ["1 yoshdan 3 yoshgacha", "1 yoshdan 2 yoshgacha", "2 yoshdan 3 yoshgacha", "1 yoshdan 6 yoshgacha"],
    correctAnswer: "1 yoshdan 3 yoshgacha"
  },
  {
    question: "Bolalar ko'nikma va malakalarini shakllantirishda asosiy ko'nikma bu — …",
    options: ["Amaliy mashq", "Namoyish", "Suhbat", "Pedagogik kuzatish"],
    correctAnswer: "Amaliy mashq"
  },
  {
    question: "Shaxs rivojlanishiga qanday omillar ta'sir ko'rsatadi?",
    options: ["Irsiyat, muhit, tarbiya", "Tabiiy muhit, ijtimoiy munosabatlar", "Muhit, tarbiya, bilim", "Irsiyat, tarbiya"],
    correctAnswer: "Irsiyat, muhit, tarbiya"
  },
  {
    question: "\"Inson kamolotida 3 narsa — irsiyat, muhit va tarbiya muhim ro'l o'ynaydi\" degan fikrni ilk bor ilgari surgan sharq mutafakkiri kim?",
    options: ["Abu Rayhon Beruniy", "Abu Nasr Forobiy", "Abu Ali ibn Sino", "Yusuf Xos Xojib"],
    correctAnswer: "Abu Rayhon Beruniy"
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







