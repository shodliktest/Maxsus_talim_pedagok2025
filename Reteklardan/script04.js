// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'qjjnnjjjidiiijjjjdjduiiikkkz1hhg1jnvhh2mishsuzhzhzhsbsbsnsnsnndarkerbot_remaining_indices';
const STATS_KEY = 'quizmarkerbot_stats';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Maxsus pedagogika fani qanday fan?",
    options: ["Ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan", "Jismoniy va ruhiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim-tarbiyasi bilan shug'ullanadigan fan", "Nutqida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan", "Eshitishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan"],
    correctAnswer: "Jismoniy va ruhiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim-tarbiyasi bilan shug'ullanadigan fan"
  },
  {
    question: "Fanning asosiy vazifalari nimalardan iborat?",
    options: ["Rivojlantirish diagnostikasi, tashxis qo'yishdan", "Bolaning ta'lim-tarbiyasi uchun zarur shart-sharoitni yaratish", "Maxsus yordamga muhtoj bolalarning ijtimoiy adaptatsiya, reabilitatsiya, kompensatsiyasini amalga oshirishdan", "Maxsus muassasalarga bolalarni saralash"],
    correctAnswer: "Bolaning ta'lim-tarbiyasi uchun zarur shart-sharoitni yaratish"
  },
  {
    question: "Maxsus pedagogika fanining qaysi yo'nalishlari mustaqil tarmoq sifatida ajralib chiqgan?",
    options: ["Oligofrenopedagogika, oftalmologiya, dermatologiya, logopediya", "Tiflopedagogika, otorinolaringologiya, rinoplastika, surdologiya", "Surdopedagogika, stomatologiya, fiziologiya, patologiya", "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"],
    correctAnswer: "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Eshitishida nuqson bo'lgan bolalar keltirilgan qatorni ko'rsating.",
    options: ["Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi", "Kech kar bo'lib qolgan bolalar", "Zaif eshituvchi, kar bolalar", "Kar, tangquloqlik"],
    correctAnswer: "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Korreksiya bu…?",
    options: ["Rivojlanishda nuqsoni bor bolalarni o'qitish", "Nuqsonlarni tuzatish, to'g'rilash", "Ta'lim-tarbiya olishning o'ziga xos tomonlari", "Bir analizator faoliyatini ikkinchisiga yuklatish"],
    correctAnswer: "Nuqsonlarni tuzatish, to'g'rilash"
  },
  {
    question: "Kompensatsiya bu…?",
    options: ["Bolalarni ijtimoiy adaptatsiyasini amalga oshirish", "Bir analizator faoliyatini ikkinchisiga yuklatishdir", "Bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi", "Nuqsonlarni tuzatish, bartaraf etish"],
    correctAnswer: "Bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi"
  },
  {
    question: "Adaptatsiya bu?",
    options: ["Yordamga muhtoj bolani ijtimoiy hayotga ko'niktirish", "Mustaqil, hamma qatori yashab ketishini ta'minlash", "Boladagi nuqsonni tuzatish jarayoni", "Bolalarni kelgusi turmush jarayonidagi ko'niktirish"],
    correctAnswer: "Yordamga muhtoj bolani ijtimoiy hayotga ko'niktirish"
  },
  {
    question: "Aqliy zaiflik o'zi nima?",
    options: ["Bosh miyani organik zararlanishi (tug'ma, orttirilgan)", "Ruhiy rivojlanishning orqada qolishi", "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi", "Nutqida nuqsoni bo'lishi tufayli gapira olmaslik"],
    correctAnswer: "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
  },
  {
    question: "Maxsus yordamga muhtoj bolalarni kasbga yo'llashda nimalarga e'tibor qaratishimiz kerak?",
    options: ["Xalq xo'jaligining eng muhim tarmoqlari bilan tanishtirishga", "Daromadli kasblardan birini tanlashga", "Hunarmandchilikni tavsiya etishga", "Nuqsonlarni hisobga olgan holda kasblardan birini tanlashga"],
    correctAnswer: "Nuqsonlarni hisobga olgan holda kasblardan birini tanlashga"
  },
  {
    question: "Aqliy zaiflikning eng og'ir darajasi nima deb ataladi?",
    options: ["Idiot", "Imbetsil", "Debil", "Organik demensiya"],
    correctAnswer: "Idiot"
  },
  {
    question: "Qaysi fan ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadi?",
    options: ["Surdopedagogika", "Tiflopedagogika", "Logopediya", "Oligofrenopedagogika"],
    correctAnswer: "Tiflopedagogika"
  },
  {
    question: "Oligofreniya nechta darajadan iborat?",
    options: ["3 ta", "5 ta", "4 ta", "2 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Nutqiy buzilishlar bolaning qanday rivojlanishiga ta'sir etadi?",
    options: ["Aqliy", "Fiziologik", "Ruhiy", "Axloqiy"],
    correctAnswer: "Ruhiy"
  },
  {
    question: "Defektologik faoliyat predmeti qanday fanlar bilan bog'liq?",
    options: ["Anatomiya, fiziologiya, gigiena, pedagogika, psixologiya, tibbiyot", "Astronomiya, kimyo, biologiya, anatomiya, tibbiyot", "Matematika, geometriya, tibbiyot, zoologiya, biologiya, tabobat", "Anatomiya, psixologiya, tibbiyot, fiziologiya, gigiena, matematika"],
    correctAnswer: "Anatomiya, fiziologiya, gigiena, pedagogika, psixologiya, tibbiyot"
  },
  {
    question: "Og'ir nutq nuqsonlari bor bolalar bilan qaysi fan shug'ullanadi?",
    options: ["Logopediya", "Surdopedagogika", "Oligofrenopedagogika", "Tiflopedagogika"],
    correctAnswer: "Logopediya"
  },
  {
    question: "Ijtimoiy reabilitatsiyaga ta'rif bering.",
    options: ["Rivojlanishida nuqsoni bo'lgan bolalarni jamiyatga moslashtirish jarayoni", "Nuqsonlarni kompensatsiyalash jarayoni", "Nuqsonlarni tuzatish, korreksiyalash jarayoni", "Alohida ko'makka muhtoj kishilarni sog'ligini tiklash"],
    correctAnswer: "Rivojlanishida nuqsoni bo'lgan bolalarni jamiyatga moslashtirish jarayoni"
  },
  {
    question: "Mujassam nuqsonli bolalar deb qanday bolalarga aytiladi?",
    options: ["Kech kar soqov", "Kar zaif eshituvchi", "Kar-ko'r-soqov, shol bolalar", "Ruhiy rivojlanishi sust bolalar"],
    correctAnswer: "Kar-ko'r-soqov, shol bolalar"
  },
  {
    question: "O'zaro muloqot vositasi bo'lib, insonlarda bir-birlari bilan muloqot, fikr almashish vazifalarini bajarish bu — … deyiladi.",
    options: ["Nutq", "Aloqa bog'lash", "Fikr yuritish", "Ta'lim berish"],
    correctAnswer: "Nutq"
  },
  {
    question: "Nutq asosan qanday paydo bo'ladi?",
    options: ["Tovushlarni qo'shilishidan", "Tarbiya ostida ongli nutq va fikrlash orqali", "Tovush birikmalarini talaffuz qilishdan", "Passiv va aktiv nutq birikishidan"],
    correctAnswer: "Tarbiya ostida ongli nutq va fikrlash orqali"
  },
  {
    question: "Nutq rivojlanishi jarayonida qanday qobiliyatlar shakllanadi?",
    options: ["Bilish faoliyatining oliy shakllari", "Tushunarli tafakkur qobiliyatlari", "So'z boyligi", "Kuchli xotira, sezgirlik"],
    correctAnswer: "Bilish faoliyatining oliy shakllari"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar asosan qayerda ta'lim olishi mumkin?",
    options: ["Akademik litseylarda", "Mehribonlik uylarida", "Texnikumlarda", "Maxsus guruh va sinflarda"],
    correctAnswer: "Maxsus guruh va sinflarda"
  },
  {
    question: "Qanday bolalar alohida ko'makka muhtoj bolalar deyiladi?",
    options: ["Ruhiy va jismoniy kamchiligi bor bolalar", "Kasallikka ko'p chalinuvchi bolalar", "Talaffuzida kamchiligi bor bolalar", "Immuniteti past bo'lgan bolalar"],
    correctAnswer: "Ruhiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "Insonning oliy nerv faoliyatini o'rgangan buyuk olim qaysi?",
    options: ["Abu Rayhon Beruniy", "Abu Ali Ibn Sino", "Amir Temur", "Mirzo Ulug'bek"],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "Aqli zaif bolalarning bilish faoliyati buzilsa qanday hodisa ro'y beradi?",
    options: ["Tevarak-atrof bilan munosabati qiyinlashadi", "Ko'rish qobiliyati qiyinlashadi", "Nuqsonlari ortib ketadi", "Eshitish jarayoni buziladi"],
    correctAnswer: "Tevarak-atrof bilan munosabati qiyinlashadi"
  },
  {
    question: "Surdopedagogika bu —…",
    options: ["Ko'zi ojiz bolalarni o'qitish va tarbiyalash", "Nuqsonli bolalarni o'qitish va tarbiyalash", "Aqli zaif bolalarni o'qitish va tarbiyalash", "Eshitishida nuqsoni bo'lgan bolalarni o'qitish va tarbiyalash"],
    correctAnswer: "Eshitishida nuqsoni bo'lgan bolalarni o'qitish va tarbiyalash"
  },
  {
    question: "Oligofrenopedagogika bu —…",
    options: ["Aqli zaif bolalarni o'qitish va tarbiyalash bilan shug'ullanuvchi soha", "Jismoniy zaif bolalarni o'qitish va tarbiyalash bilan shug'ullanuvchi soha", "Zaif eshituvchi bolalarni o'qitish va tarbiyalash bilan shug'ullanuvchi soha", "Ko'rishi zaif bo'lgan bolalarni o'qitish va tarbiyalash bilan shug'ullanuvchi soha"],
    correctAnswer: "Aqli zaif bolalarni o'qitish va tarbiyalash bilan shug'ullanuvchi soha"
  },
  {
    question: "Aqliy zaiflikning kelib chiqish sabablariga ko'ra turlari qaysilar?",
    options: ["Hayoti davomida orttirilgan", "Tug'ma", "Homiladorlikda ziyon yetgan", "Tug'ma va orttirilgan"],
    correctAnswer: "Tug'ma va orttirilgan"
  },
  {
    question: "Tiflopedagog kim?",
    options: ["Ko'zi ojiz va zaif ko'ruvchi bolalarni o'qituvchi mutaxassis", "Qulog'i zaif eshituvchi bolalarni o'qituvchi mutaxassis", "Gapirish qobiliyati yo'q bolalarni o'qituvchi mutaxassis", "Harflarni to'liq ayta olmaydigan bolalarni o'qituvchi mutaxassis"],
    correctAnswer: "Ko'zi ojiz va zaif ko'ruvchi bolalarni o'qituvchi mutaxassis"
  },
  {
    question: "Og'zaki nutq jarayonida artikulyasion apparati a'zolari muskullarining tortilishi nima deyiladi?",
    options: ["Dizartriya", "Duduqlanish", "Alaliya", "Nutqning yo'qolishi"],
    correctAnswer: "Dizartriya"
  },
  {
    question: "'Autizm' so'zining ma'nosi…",
    options: ["Grekcha 'autos' — ya'ni o'zim", "Fransuzcha 'autos' — ya'ni og'ir", "Lotincha 'autos' — ya'ni sezgi", "Grekcha 'autos' — ya'ni og'ir"],
    correctAnswer: "Grekcha 'autos' — ya'ni o'zim"
  },
  {
    question: "'Autizm'ga xos bo'lgan belgilar qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Reallikka qaytish, dunyo qarashni kengayish va tashqi olam bilan uyg'unlashish sindromi", "Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarning buzilish sindromi", "Muskullarning torayishi", "Markaziy asab tizimidagi funksional o'zgarishlar"],
    correctAnswer: "Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarning buzilish sindromi"
  },
  {
    question: "Izoterapiya nima?",
    options: ["Tasviriy san'at yordamida terapevtik ta'sir orqali rasm chizish, modellashtirish va test terapiyasi", "Test yordamida barmoq va qo'l harakatlarni o'rgatish orqali bola organizmiga ta'sir o'tkazish usuli", "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul", "Nutqidagi kamchiliklarini to'g'rilash va nutqini ravon qilish usuli"],
    correctAnswer: "Tasviriy san'at yordamida terapevtik ta'sir orqali rasm chizish, modellashtirish va test terapiyasi"
  },
  {
    question: "Shaxsning o'zini atrof-olamdan olib qochishi hamda o'zining ichki dunyosida yashashi bu —…",
    options: ["Gumanizm", "Demensiya", "Autizm", "Depressiya"],
    correctAnswer: "Autizm"
  },
  {
    question: "Taxilaliya nima?",
    options: ["Patologik tezlashtirilgan nutq tezligi, artikulyar nutq dasturini amalga oshirishda namoyon bo'ladi", "Nutq ravonligi", "Tovush talaffuzning normal eshitishda nuqsonlarning bo'lishi", "Nutqning yo'qolishi"],
    correctAnswer: "Patologik tezlashtirilgan nutq tezligi, artikulyar nutq dasturini amalga oshirishda namoyon bo'ladi"
  },
  {
    question: "Pedagog tushunchasi qanday ma'noni anglatadi?",
    options: ["Mohir tarbiyachi", "Bolani voyaga yetkazuvchi", "Mohir usta", "Bola yetaklovchi"],
    correctAnswer: "Bola yetaklovchi"
  },
  {
    question: "Nutq nima?",
    options: ["Murakkab ruhiy faoliyat", "Eshituv analizatori", "Tovushida kamchilikning borligi", "Psixik jarayon"],
    correctAnswer: "Murakkab ruhiy faoliyat"
  },
  {
    question: "Autizm kasalligining kelib chiqish sabablari nima?",
    options: ["Bosh miyaning kuchli jarohatlanishi", "Bosh miyaning infeksion kasalliklari", "Genetik omil", "Oqsillarning yetishmasligi, organizmda qo'rg'oshin va simobning ko'payishi"],
    correctAnswer: "Oqsillarning yetishmasligi, organizmda qo'rg'oshin va simobning ko'payishi"
  },
  {
    question: "Autizm so'zining ma'nosi?",
    options: ["Grekcha so'zdan olingan bo'lib 'o'zim' degan ma'noni anglatadi", "Lotincha so'zdan olingan bo'lib 'atrof' degan ma'noni bildiradi", "Fransuz tilidan olingan bo'lib 'yolg'iz' degan ma'noni bildiradi", "Yunon tilidan olingan bo'lib 'g'aroyib' degan ma'noni bildiradi"],
    correctAnswer: "Grekcha so'zdan olingan bo'lib 'o'zim' degan ma'noni anglatadi"
  },
  {
    question: "Yengil nutq nuqsonlariga qaysi nuqsonlar kiradi?",
    options: ["Afaziya", "Alaliya", "Dislaliya", "Dizartriya"],
    correctAnswer: "Dislaliya"
  },
  {
    question: "Defektologiya nima bilan shug'ullanuvchi soha?",
    options: ["Nuqsonlarni o'rganuvchi fan", "Ko'z kasalliklarini o'rganuvchi fan", "Karlikni o'rganuvchi fan", "Nutq nuqsonlarini o'rganuvchi fan"],
    correctAnswer: "Nuqsonlarni o'rganuvchi fan"
  },
  {
    question: "Oligofrenopedagogika fanining mavzu bahsini aniqlang.",
    options: ["Ko'rishida nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishi", "Eshitishida nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishi", "Nutqida nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishi", "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishi"],
    correctAnswer: "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishi"
  },
  {
    question: "Aqliy zaiflikning kelib chiqishiga ko'ra qanday sabablari mavjud?",
    options: ["Polimorf, monomorf", "Ijtimoiy, ekologik", "Sodda, murakkab", "Endogen, ekzogen"],
    correctAnswer: "Endogen, ekzogen"
  },
  {
    question: "Aqliy zaiflikni keltirib chiqaruvchi sabablarini aniqlang. (1-homiladorlikdagi infeksiya va intoksikatsiyalar; 2-tug'ilish davridagi jarohat; 3-kuchli qo'rquv; 4-asfiksiya; 5-tungi qo'rquv, enurez)",
    options: ["1, 2, 4", "1, 2, 4, 5", "3, 5", "1, 2, 3, 4"],
    correctAnswer: "1, 2, 4"
  },
  {
    question: "Aqli zaif bolalar ta'limi, tarbiyasi hamda ular taraqqiyotidagi ruhiy, jismoniy nuqsonlarni to'g'rilash haqidagi fan qaysi?",
    options: ["Tiflopedagogika", "Logopediya", "Oligofrenopedagogika", "Surdopedagogika"],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Aqliy qoloqlikning asosiy belgilari berilmagan qatorni ko'rsating.",
    options: ["Aqliy qobiliyat saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar", "Bosh miyada organik buzilishning mavjudligi", "Bilish faoliyatlarining umumiy, chuqur buzilganligi", "Bilish faoliyatlari buzilganligining turg'un xarakterdaligi"],
    correctAnswer: "Aqliy qobiliyat saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar"
  },
  {
    question: "Jismoniy yoki ruhiy rivojlanishida kamchiligi bo'lgan bolalarning rivojlanishidagi xususiyatlarini o'rganadigan, ularning ta'lim-tarbiyasi bilan shug'ullanadigan fan nomini toping.",
    options: ["Maxsus psixologiya", "Surdopsixologiya", "Psixologiya", "Maxsus pedagogika"],
    correctAnswer: "Maxsus pedagogika"
  },
  {
    question: "Akseleratsiya nima?",
    options: ["Bolalar va o'smirlarning somatik va fiziologik jihatdan tez yetilishi bo'lib, bu jarayon ularning qomat va tana og'irligini o'zgarishi, jinsiy jihatdan erta yetilishlarida ko'rinadi", "Insonning hayotida ro'y beradigan turli voqealarga moslashishga yordam beradigan xulq-atvor", "Atrof-muhit talablariga mos ravishda inson psixikasining stereotipar dinamikasini qayta qurish xususiyatlari", "Iroda va faoliyat nuqsonlari hamda shaxs motivatsiyasi sohasidagi buzilishlar"],
    correctAnswer: "Bolalar va o'smirlarning somatik va fiziologik jihatdan tez yetilishi bo'lib, bu jarayon ularning qomat va tana og'irligini o'zgarishi, jinsiy jihatdan erta yetilishlarida ko'rinadi"
  },
  {
    question: "Inklyuziv ta'lim bu nima?",
    options: ["Alohida yordamga muhtoj bolalarni alohidalash", "Alohida yordamga muhtoj va sog'lom bolalarni birgalikda o'qitish", "Sog'lom bolani alohidalash", "Bunday ta'lim turi mavjud emas"],
    correctAnswer: "Alohida yordamga muhtoj va sog'lom bolalarni birgalikda o'qitish"
  },
  {
    question: "Anomal rivojlanish qanday aniqlanadi?",
    options: ["Ikkilamchi nuqsonning kelib chiqish vaqti va uni ifodalanishining qay darajada og'irligi bilan aniqlanadi", "Perenatal rivojlanishdagi nuqsonlar bilan", "Birlamchi nuqsonning kelib chiqish vaqti va uni ifodalanishining qay darajada og'irligi bilan aniqlanadi", "Ikkilamchi nuqsonni kelib chiqish vaqti bilan"],
    correctAnswer: "Birlamchi nuqsonning kelib chiqish vaqti va uni ifodalanishining qay darajada og'irligi bilan aniqlanadi"
  },
  {
    question: "Homilaning ona qornida bo'lishi, tug'ilishda yoki ilk rivojlanish davrida markaziy nerv tizimining genetik buzilishlari, jarohatlar, asfiksiya, infeksiyalar, intoksikatsiyalar oqibatida tug'iladigan nuqsonli bola turini toping.",
    options: ["Aqli zaif bolalar", "Nutqida nuqsonli bolalar", "Eshitishida nuqsonli bolalar", "Ruhiy rivojlanishi sustlashgan bolalar"],
    correctAnswer: "Aqli zaif bolalar"
  },
  {
    question: "Murakkab nuqson (defekt) bu?",
    options: ["Jismoniy kamchiliklar majmui", "Psixik kamchiliklar majmui", "Jismoniy yoki psixik kamchiliklar majmui", "Og'ir nuqson"],
    correctAnswer: "Jismoniy yoki psixik kamchiliklar majmui"
  },
  {
    question: "Defektologiya so'zining ma'nosi nima?",
    options: ["Defectus — nuqson, kamchilik; logos — fan, ta'limot", "Defectus — buzilish; logos — ta'limot", "Defectus — birikish; logos — fan", "Defectus — birikish; logos — nutq"],
    correctAnswer: "Defectus — nuqson, kamchilik; logos — fan, ta'limot"
  },
  {
    question: "Korreksiya nima?",
    options: ["Correct — biriktirish", "Correctio — tashxislash", "Correct — moslashtirish", "Correctio — tuzatish"],
    correctAnswer: "Correctio — tuzatish"
  },
  {
    question: "Psixik sust rivojlanganlikning eng keng tarqalgan shakli?",
    options: ["Somatogen", "Psixogen", "Konstitutsional", "Serebral"],
    correctAnswer: "Serebral"
  },
  {
    question: "Disgrafiya so'zining ma'nosi?",
    options: ["Dis — buzilish; grafo — yozaman", "Dis — buzilish; grafo — o'qiyman", "Dis — buzilish; grafo — nutq", "Dis — yozaman; grafo — buzilish"],
    correctAnswer: "Dis — buzilish; grafo — yozaman"
  },
  {
    question: "Nutq nuqsonlarida asosan qanday kamchiliklar ikkilamchi nuqson sifatida kuzatiladi?",
    options: ["Ruhiy rivojlanishning sustlashuvi va asoratli nuqsonlar", "Aqli zaiflik va ruhiy rivojlanishning sustlashuvi", "Sensor apparat nuqsonlari", "Tayanch-harakat apparatidagi buzilishlar"],
    correctAnswer: "Ruhiy rivojlanishning sustlashuvi va asoratli nuqsonlar"
  },
  {
    question: "Impressiv va ekspressiv nutqning rivojlanmasligi nima sababdan bo'lishi mumkin?",
    options: ["Ko'ruv tizimining jarohatlanishi", "Eshituv tizimining jarohatlanishi", "Tayanch-harakat apparati tizimining jarohatlanishi", "Turli xil infeksion kasalliklar"],
    correctAnswer: "Eshituv tizimining jarohatlanishi"
  },
  {
    question: "Dizartriya nima?",
    options: ["So'zlarni to'la, ravon talaffuz qila olmaslik", "Yozishda ko'plab xatolarga yo'l qo'yish", "Ovoz buzilishi", "Nutq apparatining buzilishi (nutq-artikulyasion muskullarining parezi/falajlanishi)"],
    correctAnswer: "Nutq apparatining buzilishi (nutq-artikulyasion muskullarining parezi/falajlanishi)"
  },
  {
    question: "Dizartrik buzilishlarning sababi…",
    options: ["Homiladorlik va rivojlanishning ilk bosqichlarida salbiy ta'sir etish oqibatida markaziy nerv sistemasining organik jarohatlanishi", "Og'iz va burun bo'shlig'ida jarohatlanishlar yoki yumshoq tanglayning hayot davomida falajlanishi", "Ovoz apparatida anatomik o'zgarishlar yoki surunkali shamollash natijasida", "Qon tomir tizimidagi bosh miya qon tomirlarining yorilishi natijasida yuzaga keluvchi anevrizm, tromboemboliya, revmatizm natijasida paydo bo'ladigan yurak paroklari, miya-qobiq jarohatlari"],
    correctAnswer: "Homiladorlik va rivojlanishning ilk bosqichlarida salbiy ta'sir etish oqibatida markaziy nerv sistemasining organik jarohatlanishi"
  },
  {
    question: "Ijtimoiy adaptatsiya bu —…",
    options: ["Anomal bolalarni o'qitish", "Anomaliyalarni tuzatish, korreksiyalash", "Anomal bolalarni jamiyatga moslashtirish", "Anomaliyani kompensatsiya qilish"],
    correctAnswer: "Anomal bolalarni jamiyatga moslashtirish"
  },
  {
    question: "Ijtimoiy reabilitatsiya bu —…",
    options: ["Anomal kishilarni jamiyatga tiklash", "Anomal bolalarni jamiyatga moslashtirish", "Anomaliyani kompensatsiyalash", "Kasallik bilan kurashish"],
    correctAnswer: "Anomal kishilarni jamiyatga tiklash"
  },
  {
    question: "Tovush talaffuzidagi kamchiliklar bu?",
    options: ["Alaliya, afaziya", "Afoniya, disfoniya, fonosteniya", "Dislaliya, rinolaliya, dizartriya", "Disgrafiya, agrafiya, aleksiya"],
    correctAnswer: "Dislaliya, rinolaliya, dizartriya"
  },
  {
    question: "Anomal bolalar tashxisini qaysi tashkilot amalga oshiradi?",
    options: ["Kasb-hunarga yo'naltiruvchi tashxis markazi", "Karlar jamiyati", "Tibbiy-pedagogik-psixologik komissiya", "Ko'rlar jamiyati"],
    correctAnswer: "Tibbiy-pedagogik-psixologik komissiya"
  },
  {
    question: "Rinolaliyaning yopiq shaklining kelib chiqish sababi nima?",
    options: ["Burun bo'shlig'idagi organik o'zgarishlar yoki tanglay-halqum birlashishining funksional buzilishi", "Tanglaydagi ikki tomonlama yoriqlik", "Lablardagi yoriqlik", "Tanglay va lablardagi yoriqlik"],
    correctAnswer: "Burun bo'shlig'idagi organik o'zgarishlar yoki tanglay-halqum birlashishining funksional buzilishi"
  },
  {
    question: "Xeyloplastika nima?",
    options: ["Qattiq tanglay yorig'ini berkituvchi moslama", "Labdagi yoriqlikni bartaraf etishda qilinadigan operatsiya", "Qattiq tanglay yoriqligini bartaraf etish maqsadida qilinadigan operatsiya", "Yumshoq tanglay yorig'ini berkituvchi moslama"],
    correctAnswer: "Labdagi yoriqlikni bartaraf etishda qilinadigan operatsiya"
  },
  {
    question: "Rinolaliya nutq nuqsoniga ega bolalarda qanday kasalliklar ko'proq kuzatiladi?",
    options: ["Otit, yuqori nafas yo'llari kasalliklari", "Shizofreniya, meningit", "Nasliy omillar, enurez", "Glaukoma, otit"],
    correctAnswer: "Otit, yuqori nafas yo'llari kasalliklari"
  },
  {
    question: "Nutq apparatining anatomo-fiziologik buzilishi sababli ovoz tembri va tovushlar talaffuzidagi buzilish ta'rifi qaysi nutq kamchiligiga mos keladi?",
    options: ["Alaliya", "Dizartriya", "Rinolaliya", "Dislaliya"],
    correctAnswer: "Rinolaliya"
  },
  {
    question: "Ovoz chiqmasligi, gapira olmaslikdan iborat nutq buzilishi nima deyiladi?",
    options: ["Aleksiya", "Afaziya (afoniya)", "Demensiya", "Defekt"],
    correctAnswer: "Afaziya (afoniya)"
  },
  {
    question: "O'quvchilarni inklyuziv ta'lim sinflari va boshlang'ich tayanch korreksion sinflarga qabul qilish hamda chiqarish qanday tartibda amalga oshiriladi?",
    options: ["Hududiy xalq ta'limi boshqarmasi huzurida tashkil etilgan psixologik-tibbiy-pedagogik komissiya xulosasiga ko'ra, ota-onalar yoki ularning o'rnini bosuvchi shaxslar roziligi bilan amalga oshiriladi", "Ota-onalar yoki ularning o'rnini bosuvchi shaxslar roziligi bilan amalga oshiriladi", "Maktablardagi defektolog xulosasiga ko'ra", "Sog'liqni saqlash boshqarmasi tomonidan"],
    correctAnswer: "Hududiy xalq ta'limi boshqarmasi huzurida tashkil etilgan psixologik-tibbiy-pedagogik komissiya xulosasiga ko'ra, ota-onalar yoki ularning o'rnini bosuvchi shaxslar roziligi bilan amalga oshiriladi"
  },
  {
    question: "Inklyuziv ta'lim sinflariga qanday nutqiy nuqsonga ega bo'lgan bolalar qabul qilinmaydi?",
    options: ["Rinolaliya", "Alaliya", "Aqliy zaiflik bilan birga rivojlangan dislaliya", "Dizartriya"],
    correctAnswer: "Aqliy zaiflik bilan birga rivojlangan dislaliya"
  },
  {
    question: "Inklyuziv ta'limda logopedning kasbiy faoliyatiga qanday vazifalar kirmaydi?",
    options: ["Tashxislash", "Tashkiliy-metodik ishlar", "Umumta'lim fanlarini o'zlashtirishda yordam berish", "Profilaktik ishlar"],
    correctAnswer: "Umumta'lim fanlarini o'zlashtirishda yordam berish"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarni differensial tashxis qilishning murakkabligi nimaga bog'liq?",
    options: ["Afaziya va karlikdagi nutqiy hodisalarini tashqi o'xshashligiga", "Sensor alaliya va karlikning o'xshashligiga", "Nutq nuqsoni va karlikdagi nutqiy hodisalarini tashqi o'xshashligiga", "Alaliya va karlikdagi nutqiy hodisalarini tashqi o'xshashligiga"],
    correctAnswer: "Sensor alaliya va karlikning o'xshashligiga"
  },
  {
    question: "Rivojlanishida mujassam nuqsonga ega bo'lgan bolalarning o'quv-tarbiyaviy jarayonining asosiy qismi nimadan iborat?",
    options: ["Aniq fanlarni o'qitish", "Ijtimoiy-gumanitar fanlarni o'qitish", "Mehnat ta'limi", "Tabiiy fanlarni o'qitish"],
    correctAnswer: "Mehnat ta'limi"
  },
  {
    question: "Bola rivojlanishidagi muammolar yuzaga kelish sabablarini belgilang.",
    options: ["Perenatal davr, natal, postnatal davr va ijtimoiy-pedagogik qarovsizlik, hissiy zo'riqish va boshqalar", "Tug'ruq jarohatlari, noto'g'ri tarbiya, nosog'lom ijtimoiy muhit, ruhiy zo'riqish", "Perenatal davr, natal, postnatal davr, avtohalokatlar, hissiy zo'riqish va qo'rqitish", "Faqatgina tug'ruq jarayonida yuzaga kelishi aniqlandi"],
    correctAnswer: "Perenatal davr, natal, postnatal davr va ijtimoiy-pedagogik qarovsizlik, hissiy zo'riqish va boshqalar"
  },
  {
    question: "Mujassam nuqsonga ega bo'lgan bolalar bilan ishlash samaradorligi nimaga bog'liq?",
    options: ["Pedagog-defektologlarning yuqori kasbiy mahoratiga bog'liq", "Pedagog umumiy psixologiyaning barcha yo'nalishlarini yaxshi bilishi kerak", "Tibbiy fanlarning muammolaridan yetarlicha habardor bo'lishi kerak", "Bolalar bilan til topisha olishiga bog'liq"],
    correctAnswer: "Pedagog-defektologlarning yuqori kasbiy mahoratiga bog'liq"
  },
  {
    question: "Ko'rish va eshitish nuqsonlariga ega bo'lgan bolalarni o'qitishdagi muhim va murakkab vazifalardan biri…",
    options: ["Tayanch-harakat sistemasi bilan ishlash", "Intellekti bilan ishlash", "Yozma nutqi ustida ishlash", "Ularda og'zaki nutqni shakllantirish, rivojlantirish"],
    correctAnswer: "Ularda og'zaki nutqni shakllantirish, rivojlantirish"
  },
  {
    question: "Komplekslilik tamoyili bu —…",
    options: ["Shifokorlar, logopedlar, psixologlar ma'lumotini to'plash va tahlil qilish", "Shifokorlar, logopedlar va o'qituvchilarning ma'lumotini to'plash va tahlil qilish", "Logopedlar va o'qituvchilarning ma'lumotini to'plash va tahlil qilish", "Shifokorlar, logopedlar, o'qituvchilarning va psixologlarning ma'lumotini to'plash va tahlil qilish"],
    correctAnswer: "Shifokorlar, logopedlar, o'qituvchilarning va psixologlarning ma'lumotini to'plash va tahlil qilish"
  },
  {
    question: "Erta jarohatlanish qanday buzilishlarga olib keladi?",
    options: ["Butun psixik rivojlanish yo'lining buzilishiga", "Ko'rlikka", "Karlikka", "Mujassam nuqsonga"],
    correctAnswer: "Butun psixik rivojlanish yo'lining buzilishiga"
  },
  {
    question: "Nutq buzilishida nuqsonning keltirib chiqaruvchi sabablar?",
    options: ["Homiladorlik vaqtida onaning turli yuqumli kasalliklar bilan og'rishi, homiladorlikdagi infeksiyalar", "Chala tug'ilish, endokrin kasalliklar, irsiylik", "Tug'ruq jarohatlari, asfiksiya", "Homiladorlik vaqtida onaning yuqumli kasalliklar bilan og'rishi, homiladorlikdagi gipoksiya, tug'ruq jarohatlari, endokrin kasalliklar"],
    correctAnswer: "Homiladorlik vaqtida onaning yuqumli kasalliklar bilan og'rishi, homiladorlikdagi gipoksiya, tug'ruq jarohatlari, endokrin kasalliklar"
  },
  {
    question: "Bolaning psixik rivojlanishini belgilovchi muhim omillardan biri bu —…",
    options: ["Nuqsonning kelib chiqishi", "Ikkilamchi nuqsonning bo'lishi", "Nuqsonning namoyon bo'lish darajasi", "Uchlamchi nuqsonning bo'lishi"],
    correctAnswer: "Nuqsonning namoyon bo'lish darajasi"
  },
  {
    question: "Nuqsonga ega bo'lgan bolalarning psixik rivojlanishi haqidagi qarashlar kim tomonidan tavsiflangan?",
    options: ["L.S.Vigotskiy", "M.Y.Xvatsev", "G.P.Bertin", "M.S.Pevzner"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarni yozma nutqqa o'rgatish ishlari nimadan boshlanadi?",
    options: ["Harflarni o'rgatish", "Bo'g'inlab o'qishga o'rgatish", "So'zni butunligicha idrok etish", "Tovush usuliga o'rgatish"],
    correctAnswer: "So'zni butunligicha idrok etish"
  },
  {
    question: "Og'ir nutq nuqsonlariga ega bo'lgan bolalar kategoriyasini aniqlang.",
    options: ["Alaliya, dizartriya, rinolaliya, afaziya, yorqin ifodalangan duduqlanishga ega bolalar", "RRS, FFNRligiga ega bolalar", "Dislaliya, disgrafiya, alaliya, RRSligiga ega bolalar", "Disfagiya, alaliya, dizartriya, rinolaliyaga ega bolalar"],
    correctAnswer: "Alaliya, dizartriya, rinolaliya, afaziya, yorqin ifodalangan duduqlanishga ega bolalar"
  },
  {
    question: "Logopedik reabilitatsiyaning maqsadi?",
    options: ["Nutqiy jarayonni faollashtirish", "To'g'ri nutq mexanizmlarini shakllantirish", "Nutqiy rivojlanishni stimullash", "Bolani maktabga tayyorlash"],
    correctAnswer: "To'g'ri nutq mexanizmlarini shakllantirish"
  },
  {
    question: "Aqli zaif bolalarga qanday turdagi nuqsonlar xos?",
    options: ["Tovushlar talaffuzidagi nuqsonlar", "Ko'rishda nuqsonning bo'lishi", "Eshitishida nuqsonning bo'lishi", "Hid bilishdagi kamchiliklar"],
    correctAnswer: "Tovushlar talaffuzidagi nuqsonlar"
  },
  {
    question: "Insonning murakkab psixik faoliyati — bu …",
    options: ["Ko'rish", "Eshitish", "Bilish", "Nutq"],
    correctAnswer: "Nutq"
  },
  {
    question: "Sensor nuqsonli bolalar toifalari bu…",
    options: ["Hid bilish va tam bilishda nuqsoni bo'lgan bolalar toifalari", "Zaif eshituvchi va zaif ko'ruvchi bolalar toifalari", "Ko'rish va eshitishda nuqsoni bo'lgan bolalar toifalari", "Issiq va sovuqni sezmaydigan bolalar toifalari"],
    correctAnswer: "Ko'rish va eshitishda nuqsoni bo'lgan bolalar toifalari"
  },
  {
    question: "Nutq buzilishlarining tasnifi?",
    options: ["Organik, funksional", "Tibbiy-pedagogik, psixologik-pedagogik", "Tibbiy, ruhiy", "Markaziy, periferik"],
    correctAnswer: "Tibbiy-pedagogik, psixologik-pedagogik"
  },
  {
    question: "Eshitishida muammolari bo'lgan bolalar quyidagi toifalarga bo'linadi:",
    options: ["Zaif eshituvchilar, nutqi saqlangan kar bolalar", "Karlar, zaif eshituvchilar, kech kar bo'lgan bolalar", "Erta kar bo'lganlar, zaif eshituvchilar", "Aqli zaif kar bolalar, zaif eshituvchilar"],
    correctAnswer: "Karlar, zaif eshituvchilar, kech kar bo'lgan bolalar"
  },
  {
    question: "Aqliy rivojlanishida muammolari bo'lgan bolalar qanday toifalarga bo'linadilar?",
    options: ["Debil, imbetsil, idiot", "Dislaliya, rinolaliya, dizartriya", "Glaukoma, miopiya, katarakta", "Keratit, otit, nistagm"],
    correctAnswer: "Debil, imbetsil, idiot"
  },
  {
    question: "Tutqanoq kasalligi qanday nomlanadi?",
    options: ["Gidrotsifaliya", "Daun kasalligi", "Epilepsiya", "Litl kasalligi"],
    correctAnswer: "Epilepsiya"
  },
  {
    question: "Xromosoma kasalliklariga kiradigan kasallik turini aniqlang.",
    options: ["Daun sindromi", "Revmatizm", "Gepatit", "Oligofreniya"],
    correctAnswer: "Daun sindromi"
  },
  {
    question: "Rinolaliyani keltirib chiqaruvchi sabablar?",
    options: ["Ekologik omillar, rezus omil", "Psixologik holat", "Ekologik omillar, psixologik holat, bachadon ichi infeksiyalari", "Bachadon ichi infeksiyalari, rezus omil, ekologik omil"],
    correctAnswer: "Bachadon ichi infeksiyalari, rezus omil, ekologik omil"
  },
  {
    question: "Rinolaliya nutq nuqsonida qanday yoriqlik turlari kuzatiladi?",
    options: ["To'liq, qisman", "Ochiq", "Yopiq", "Aralash"],
    correctAnswer: "Aralash"
  },
  {
    question: "Asimmetriya bu —…",
    options: ["Tekislik", "Bir xillik", "Nomutanosib qism, simmetriyaning yo'qligi", "Yoriqlik"],
    correctAnswer: "Nomutanosib qism, simmetriyaning yo'qligi"
  },
  {
    question: "Rinolaliyada qaysi tovushlar buzulishi kam kuzatiladi?",
    options: ["M va N", "R va L", "S va Z", "Sh va Ch"],
    correctAnswer: "M va N"
  },
  {
    question: "Maxsus psixologiyaning ob'ekti to'g'ri yozilgan qatorni toping.",
    options: ["O'sishida kamchiligi bo'lganlar", "Rivojlanmayotgan bolalar", "Rivojlanishida nuqsoni bo'lganlar", "Sog'lom bolalar"],
    correctAnswer: "Rivojlanishida nuqsoni bo'lganlar"
  },
  {
    question: "Surdopsixologiya nimani o'rganadi?",
    options: ["Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini", "Ko'zi ojiz bolalarning psixologik xususiyatlarini", "Aqli zaif bolalarning psixologik xususiyatlarini", "Tayanch-harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"],
    correctAnswer: "Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Tiflopsixologiya nimani o'rganadi?",
    options: ["Aqli zaif bolalarning psixologik xususiyatlarini", "Ko'zi ojiz bolalarning psixologik xususiyatlarini", "Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini", "Tayanch-harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"],
    correctAnswer: "Ko'zi ojiz bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Oligofrenpsixologiya nimani o'rganadi?",
    options: ["Aqli zaif bolalarning psixologik xususiyatlarini", "Ko'zi ojiz bolalarning psixologik xususiyatlarini", "Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini", "Tayanch-harakat a'zolarida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini"],
    correctAnswer: "Aqli zaif bolalarning psixologik xususiyatlarini"
  },
  {
    question: "Maxsus pedagogikaning tarmoqlari to'g'ri berilgan qatorni toping.",
    options: ["Surdopedagogika, tiflopedagogika, maxsus pedagogika", "Surdopedagogika, tiflopedagogika, oligofrenopedagogika, logopediya", "Surdopedagogika, tiflopedagogika, oligofrenopedagogika", "Oligofrenopedagogika, tiflopedagogika, maxsus pedagogika"],
    correctAnswer: "Surdopedagogika, tiflopedagogika, oligofrenopedagogika, logopediya"
  },
  {
    question: "Kompensatsiya nima?",
    options: ["O'rnini bosish", "Rivojlantirish", "Aniqlash", "Bartaraf qilish"],
    correctAnswer: "O'rnini bosish"
  },
  {
    question: "Ko'rishida muammolari bo'lgan bolalar toifalari qaysi qatorda keltirilgan?",
    options: ["Ko'zi ojiz va aqli zaif ko'rlar", "Ko'zida muammolari bo'lgan bolalar", "Zaif ko'ruvchi va ko'zi ojiz", "Ko'r-kar-soqovlar, zaif ko'ruvchi va ko'zi ojiz bolalar"],
    correctAnswer: "Zaif ko'ruvchi va ko'zi ojiz"
  },
  {
    question: "Alaliya — nutqning qanday buzilishiga kiradi?",
    options: ["Nutqning tizimli rivojlanmay qolishi", "Nutqning qisman yoki to'liq yo'nalishi", "Nutqning to'liq yo'qolishi", "Tili chuchuklik"],
    correctAnswer: "Nutqning tizimli rivojlanmay qolishi"
  },
  {
    question: "Afaziya nutqning qanday buzilishiga kiradi?",
    options: ["O'qish jarayonining qisman buzilishi", "Yozish jarayonining buzilishi", "Tili chuchuklik", "Bosh miyaning muayyan joyi shikastlanishi bilan bog'liq holda nutqning to'liq yoki qisman yo'qolishi"],
    correctAnswer: "Bosh miyaning muayyan joyi shikastlanishi bilan bog'liq holda nutqning to'liq yoki qisman yo'qolishi"
  },
  {
    question: "Dislaliya nutq buzishning qanday turi?",
    options: ["Tovush talaffuz qilishning normal eshitish va nutq apparatining saqlangan innervatsiyasi paytida buzilishi", "Yozish jarayonning qisman buzilishi", "O'qish jarayonining buzilishi", "Bosh miyaning muayyan joyi shikastlanishi bilan bog'liq holda nutqning to'liq yoki qisman yo'qolishi"],
    correctAnswer: "Tovush talaffuz qilishning normal eshitish va nutq apparatining saqlangan innervatsiyasi paytida buzilishi"
  },
  {
    question: "Disgrafiya — qanday buzilish turiga kiradi?",
    options: ["O'qish jarayonining buzilishi", "Tili chuchuklik", "Eshitish organlarining buzilishi", "Yozish jarayonining buzilishi"],
    correctAnswer: "Yozish jarayonining buzilishi"
  },
  {
    question: "Surdopedagogika — qanday fan?",
    options: ["Eshitishda kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash", "Aqli zaif bolalarni o'qitish", "Bosh miya tizimidagi ma'lum bir psixik jarayonlar bilan aloqadorligini o'rganish", "Ko'rishida kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash"],
    correctAnswer: "Eshitishda kamchiligi bo'lgan bolalarni o'qitish va tarbiyalash"
  },
  {
    question: "Eshitishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan 'Maxsus psixologiya'ning bo'limi…",
    options: ["Oligofrenpsixologiya", "Tiflopsixologiya", "Ontogenez psixologiyasi", "Surdopsixologiya"],
    correctAnswer: "Surdopsixologiya"
  },
  {
    question: "Ko'rishida kamchiligi bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan 'Maxsus psixologiya'ning bo'limi…",
    options: ["Tiflopsixologiya", "Oligofrenpsixologiya", "Surdopsixologiya", "Ontogenez psixologiyasi"],
    correctAnswer: "Tiflopsixologiya"
  },
  {
    question: "Aqli zaif bo'lgan bolalarning psixologik xususiyatlarini o'rganadigan 'Maxsus psixologiya'ning bo'limi…",
    options: ["Tiflopsixologiya", "Surdopsixologiya", "Ontogenez psixologiyasi", "Oligofrenpsixologiya"],
    correctAnswer: "Oligofrenpsixologiya"
  },
  {
    question: "Rivojlanishida nuqsoni bo'lgan bolalarning psixologik xususiyatlarini o'rganuvchi psixologiyaning bo'limi…",
    options: ["Maxsus psixologiya", "Ontogenez psixologiyasi", "Etnopsixologiya", "Ijtimoiy psixologiya"],
    correctAnswer: "Maxsus psixologiya"
  },
  {
    question: "'Defekt va kompensatsiya' asarining muallifi?",
    options: ["A.A.Leont'ev", "T.V.Rebina", "L.S.Vigotskiy", "A.R.Luriya"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Muloqot nima?",
    options: ["Shaxsning muhim ehtiyoji", "Kishining boshqa odamlar bilan o'zaro munosabatda bo'lish shakli", "Kishi turmush tarzining faoliyatidan kam bo'lmagan bir tomoni", "Ikki yoki undan ortiq kishilarning axborot almashishdagi o'zaro ta'siridir"],
    correctAnswer: "Ikki yoki undan ortiq kishilarning axborot almashishdagi o'zaro ta'siridir"
  },
  {
    question: "Tarbiya metodlari qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va mashqlantiruvchi, rag'batlantiruvchi va jazolovchi", "Hikoya, ma'ruza, suhbat", "Pedagogik talab, mashqlantirish, rag'batlantiruvchi", "Rag'batlantiruvchi"],
    correctAnswer: "Ijtimoiy ongni shakllantiruvchi, odatlantiruvchi va mashqlantiruvchi, rag'batlantiruvchi va jazolovchi"
  },
  {
    question: "Adaptatsiya nima?",
    options: ["Qo'zg'ovchi ta'siri ostida sezgilarning o'zgarishi", "Kuchli qo'zg'ovchilar ta'siri ostida sezgilarning zaiflashishi", "Atrof-muhit o'zgarishlariga organizm yoki shaxsning moslashishi", "Yangi sharoitlarga ko'nikishni ta'minlovchi bilim, ko'nikma va malakalar"],
    correctAnswer: "Atrof-muhit o'zgarishlariga organizm yoki shaxsning moslashishi"
  },
  {
    question: "O'quv mashg'uloti jarayonida o'qituvchining suhbati ta'limning qaysi metodiga kiritiladi?",
    options: ["Og'zaki", "Amaliy", "Ko'rgazmali", "Mashq qilish"],
    correctAnswer: "Og'zaki"
  },
  {
    question: "O'qituvchilarning inklyuziv ta'lim muhitida ishlashga tayyorligining ikkita asosiy ko'rsatkichi bu —…",
    options: ["Kasbiy tayyorgarlik", "Psixologik tayyorgarlik", "Axborotga tayyorlik", "Fiziologik tayyorgarlik"],
    correctAnswer: "Psixologik tayyorgarlik"
  },
  {
    question: "Integratsiyalashgan ta'limning nazariy asoslanishi birinchi marta qaysi mahalliy olimning asarlarida bayon etilgan?",
    options: ["S.L.Rubinshteyn", "A.N.Leontiev", "A.N.Rau", "Vigotskiy"],
    correctAnswer: "Vigotskiy"
  },
  {
    question: "Inklyuziv ta'lim bu —…",
    options: ["Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning ta'lim olishi uchun maxsus muassasalarda ta'lim jarayonini tashkil etish", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning uy ta'limiga jalb etish", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning tibbiyot punktlariga jalb etish"],
    correctAnswer: "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi"
  },
  {
    question: "Inklyuziv so'zi ingliz tilidan olingan bo'lib inclusive, inclusion — … ma'nosini anglatadi.",
    options: ["O'rin almashmoq", "Uyg'unlashmoq (qamrab olish)", "Do'stlashmoq", "Imkoniyat bermoq"],
    correctAnswer: "Uyg'unlashmoq (qamrab olish)"
  },
  {
    question: "Inklyuziv ta'limning maqsadi nima?",
    options: ["O'quvchilarning ta'limdagi tenglik huquqini kafolatlash", "Nuqsonlarga e'tibor bermagan holda o'qitish", "Alohida yordamga muhtoj bolalarni ajratib olish", "O'quvchilarning ta'limiga alohida e'tibor qaratish"],
    correctAnswer: "O'quvchilarning ta'limdagi tenglik huquqini kafolatlash"
  },
  {
    question: "Inklyuziv ta'limning ob'ekti …",
    options: ["Aqli nuqsonli bolalar", "Kar va zaif eshituvchi bolalar", "Sog'lom va nuqsonli bolalar", "Ko'r va zaif ko'ruvchi bolalar"],
    correctAnswer: "Sog'lom va nuqsonli bolalar"
  },
  {
    question: "Inklyuziv ta'limga aqliy rivojlanishda ortda qolgan bolalarning qaysi darajasi jalb etiladi?",
    options: ["Yengil", "O'rta", "Og'ir", "Og'ir darajaning yengil formalari"],
    correctAnswer: "Yengil"
  },
  {
    question: "Aqli zaiflikning necha turi mavjud?",
    options: ["2 ta — katta va kichik", "2 ta — oddiy va murakkab", "4 ta — yengil, o'rta, og'ir, chuqur", "3 ta — yengil, o'rta, og'ir"],
    correctAnswer: "4 ta — yengil, o'rta, og'ir, chuqur"
  },
  {
    question: "Ko'rishda nuqsoni bo'lgan bolalar necha turga bo'linadi?",
    options: ["Ko'r va total ko'r", "G'ilaylik va ko'rlik", "Ko'r va zaif ko'ruvchi", "Zaif ko'ruvchi va g'ilaylik"],
    correctAnswer: "Ko'r va zaif ko'ruvchi"
  },
  {
    question: "Ko'rish qobiliyati to'liq rivojlanmagan bolalarning qaysi turi inklyuziv ta'limga jalb etiladi?",
    options: ["Barcha bolalar jalb etiladi", "Bunday nuqsonli bolalar ta'limga jalb etilmaydi", "Brayl alifbosida yoza oladigan va o'qish ko'nikmalari mavjud bolalar", "Eshitish qobiliyati kuchli bolalar"],
    correctAnswer: "Brayl alifbosida yoza oladigan va o'qish ko'nikmalari mavjud bolalar"
  },
  {
    question: "Eshitishda nuqsoni bo'lgan bolalar tengdoshlari bilan qanday muloqotga kirishadi?",
    options: ["Imo-ishora va labdan o'qish", "Imo-ishora", "Labdan o'qish", "Daktil alifbosi orqali"],
    correctAnswer: "Imo-ishora va labdan o'qish"
  },
  {
    question: "Zaif eshituvchi bolalar o'qituvchiga qancha masofada o'tirishi zarur?",
    options: ["4 metr", "5 metr", "Masofaning ahamiyati yo'q", "3 metr"],
    correctAnswer: "3 metr"
  },
  {
    question: "Ta'lim muassasasidagi inklyuziv sinf xonasi qayerda joylashishi kerak?",
    options: ["Maktabning tayanch va sokin tarafida", "Maktabning asosiy binosida", "Maktabning istalgan qismida", "Maktabdan chiqish qismining oldida"],
    correctAnswer: "Maktabning tayanch va sokin tarafida"
  },
  {
    question: "Agar bolaning nutqida nuqsoni bo'lsa muloqot uchun nimalardan foydalanadi?",
    options: ["Ishora orqali tushuntiradi", "Muloqotning yozma shaklidan foydalanadi", "Bunday bolalar muloqotga kirishi shart emas", "Shakllar, rasmlar va ramziy kartochkalar"],
    correctAnswer: "Shakllar, rasmlar va ramziy kartochkalar"
  },
  {
    question: "Inklyuziv ta'lim jarayonida sinfda aqliy rivojlanishida ortda qolgan bola mavjud bo'lsa o'qituvchi har bir dars davomida nimani o'tkazishi zarur?",
    options: ["Dam olish daqiqasi", "Jismoniy daqiqa", "Musiqiy daqiqa", "Hech qanday faoliyat shart emas"],
    correctAnswer: "Jismoniy daqiqa"
  },
  {
    question: "Aqliy rivojlanishda ortda qolgan o'quvchilarga topshiriqlar qanday beriladi?",
    options: ["Qismlarga ajratilib", "Topshiriq berilmaydi", "Yaxlit holatda", "Barcha o'quvchilarga bir xil topshiriq beriladi"],
    correctAnswer: "Qismlarga ajratilib"
  },
  {
    question: "Nutqida nuqsoni bo'lgan bolalarga inklyuziv ta'lim o'qituvchisi bilan birgalikda yana qanday mutaxassis mashg'ulot o'tishi zarur?",
    options: ["Surdopedagog", "Tiflopedagog", "Oligofrenopedagog", "Logoped"],
    correctAnswer: "Logoped"
  },
  {
    question: "Kar-soqov bolalarning necha foizida bu nuqson tug'ma bo'ladi?",
    options: ["25-30%", "25-35%", "30-40%", "20-30%"],
    correctAnswer: "25-35%"
  },
  {
    question: "Ko'zi ojiz bolalar bilan ishlaydigan mutaxassis nomi ko'rsating.",
    options: ["Surdopedagog", "Logoped", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Tiflopedagog"
  },
  {
    question: "Kar va soqov bolalar bilan ishlaydigan mutaxassis nomini ko'rsating.",
    options: ["Surdopedagog", "Tiflopedagog", "Logoped", "Oligofrenopedagog"],
    correctAnswer: "Surdopedagog"
  },
  {
    question: "Nutqida nuqsoni bo'lgan bolalar bilan faoliyat olib boruvchi mutaxassis nomini ko'rsating.",
    options: ["Logoped", "Surdopedagog", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Logoped"
  },
  {
    question: "Aqli rivojlanishida nuqsoni bo'lgan bolalar bilan faoliyat olib boruvchi mutaxassisni ko'rsating.",
    options: ["Logoped", "Surdopedagog", "Tiflopedagog", "Oligofrenopedagog"],
    correctAnswer: "Oligofrenopedagog"
  },
  {
    question: "Adaptatsiya —",
    options: ["Moslashish", "O'rnini to'ldirmoq", "Yumshatish", "O'xshatish"],
    correctAnswer: "Moslashish"
  },
  {
    question: "Kompensatsiya —",
    options: ["Yumshatish", "Moslashish", "O'rnini to'ldirmoq", "O'xshatish"],
    correctAnswer: "O'rnini to'ldirmoq"
  },
  {
    question: "Korreksiya —",
    options: ["Yumshatish (tuzatish)", "Moslashish", "O'xshatish", "O'rnini to'ldirmoq"],
    correctAnswer: "Yumshatish (tuzatish)"
  },
  {
    question: "Inklyuziv ta'lim amalga oshirayotgan umumta'lim maktabdagi sinflarda integratsiya qilingan o'quvchilar soni necha nafardan oshirilmaydi?",
    options: ["1-3 nafar", "2-3 nafar", "3-4 nafar", "4-5 nafar"],
    correctAnswer: "2-3 nafar"
  },
  {
    question: "Inklyuziv ta'lim amalga oshirayotgan umumta'lim maktabdagi sinflarda o'quvchilar soni necha nafardan oshirilmaydi?",
    options: ["25 nafar", "26 nafar", "30 nafar", "27 nafar"],
    correctAnswer: "25 nafar"
  },
  {
    question: "Nutqiy aloqa asosan nima orqali amalga oshiriladi?",
    options: ["Lab", "Idrok", "Xotira", "Til"],
    correctAnswer: "Til"
  },
  {
    question: "Odam nutqi tushunarli va ma'noli bo'lishi uchun nutq a'zolarining harakatlari qanday bo'lishi kerak?",
    options: ["Aniq va to'g'ri", "Sof adabiy", "Badiiy", "Grammatik"],
    correctAnswer: "Aniq va to'g'ri"
  },
  {
    question: "Duduqlanishning asosiy sabablari qanday guruhlarga ajratiladi?",
    options: ["Jismoniy va aqliy", "Moyillik va turtki", "Duduqlanishda faqat moyillik sabablari mavjud", "Duduqlanishda faqat turtki sabablari mavjud"],
    correctAnswer: "Moyillik va turtki"
  },
  {
    question: "Ota-onalarning nevropatik kasallanishi natijasida qaysi guruhga kiruvchi duduqlanish vujudga kelishi mumkin?",
    options: ["Moyillik", "Turtki", "Orttirilgan", "Travmalar"],
    correctAnswer: "Moyillik"
  },
  {
    question: "Debil bolalar uchun bir qator … yetishmasligi xarakterlidir.",
    options: ["Jismoniy faoliyat", "Ijtimoiy faoliyat", "Jinsiy faoliyat", "Fahm-farosat"],
    correctAnswer: "Fahm-farosat"
  },
  {
    question: "Sharqning mashhur allomalari … tarbiyaning maqsadlari har bir bola shaxsining rivojlanishiga ta'limning ta'siri to'g'risidagi qarashlari inklyuziv ta'lim rivojlanishining metodologik bazasi hisoblanadi.",
    options: ["Ibn Sino, Imom Buxoriy, Abu Nasr Forobiy, Alisher Navoiy, Abdulla Avloniylarning", "Ibn Sino, Imom Buxoriy, Abu Nasr Forobiy, Alisher Navoiy, Ushinskiylarning", "Ibn Sino, Imom Buxoriy, Abu Nasr Forobiy, Alisher Navoiy, Xudoyberdi To'xtaboyevlarning", "Ibn Sino, Imom Buxoriy, Abu Nasr Forobiy, Alisher Navoiy, Mashrablarning"],
    correctAnswer: "Ibn Sino, Imom Buxoriy, Abu Nasr Forobiy, Alisher Navoiy, Abdulla Avloniylarning"
  },
  {
    question: "… umumta'lim jarayonini rivojlantiradi va barcha bolalarga mos bo'lgan ta'limni joriy qiladi.",
    options: ["Maxsus ta'lim", "Inklyuziv ta'lim", "O'rta ta'lim", "Maktabgacha ta'lim"],
    correctAnswer: "Inklyuziv ta'lim"
  },
  {
    question: "Brayl alifbosidan qanday bolalar foydalanadi?",
    options: ["Ko'zi ojiz bolalar", "Nutqida nuqsoni bo'lgan bolalar", "Aqli rivojlanishdan ortda qolgan bolalar", "Kar va zaif eshituvchi bolalar"],
    correctAnswer: "Ko'zi ojiz bolalar"
  },
  {
    question: "Daktil alifbosidan qanday bolalar foydalanadi?",
    options: ["Ko'zi ojiz bolalar", "Nutqida nuqsoni bo'lgan bolalar", "Kar va zaif eshituvchi bolalar", "Aqli rivojlanishdan ortda qolgan bolalar"],
    correctAnswer: "Kar va zaif eshituvchi bolalar"
  },
  {
    question: "Nutqiy nuqsonni aniqlang.",
    options: ["Logonevroz", "Total ko'r", "Total kar", "Imbetsil"],
    correctAnswer: "Logonevroz"
  },
  {
    question: "Inklyuziv ta'limning asosiy maqsadi nimada?",
    options: ["O'quvchilarning ta'limdagi yangiliklarni o'rgatish", "O'quvchilarning ta'limdagi tenglik huquqini kafolatlash", "O'quvchilarning ta'limdagi metodlarni qo'llash", "O'quvchilarning jismoniy tengligini ta'minlash"],
    correctAnswer: "O'quvchilarning ta'limdagi tenglik huquqini kafolatlash"
  },
  {
    question: "Diskriminatsiya bu —",
    options: ["Odamlarni ajratish", "Odamlarga qo'shilish", "Odamlardan uzilish", "Qamrab olish"],
    correctAnswer: "Odamlarni ajratish"
  },
  {
    question: "Inklyuziv ta'limda zaif eshituvchi o'quvchi bo'lgan sinf o'qituvchisi qanday dars o'tishi lozim?",
    options: ["Alohida talablar mavjud emas", "Baqirib dars o'tishi kerak", "Umumiy va mayda motorikasiga ko'proq e'tibor beradi", "Sinf doskasiga yozilgan ma'lumotlarni baland ovozda o'qishi kerak"],
    correctAnswer: "Sinf doskasiga yozilgan ma'lumotlarni baland ovozda o'qishi kerak"
  },
  {
    question: "Ko'rishida nuqsoni bo'lgan bola ma'lumotlarni … sezgilari asosida egallaydiar.",
    options: ["Eshitish va taktil", "Eshitish orqali", "Taktil sezish orqali", "Suyak eshituv"],
    correctAnswer: "Eshitish va taktil"
  },
  {
    question: "Zaif eshituvchisi bor bo'lgan inklyuziv sinfda o'qituvchi aniq talaffuz va baland ovozda lekin … gapirishi talab etiladi.",
    options: ["Baqirib", "Baqirmasdan", "Past ovozda", "Pichirlab"],
    correctAnswer: "Baqirmasdan"
  },
  {
    question: "Inklyuziv ta'limda o'qituvchi qanday metodlardan maksimal foydalanmog'i zarur?",
    options: ["O'yin", "Kuzatish", "Suhbat", "Qiyosiy"],
    correctAnswer: "O'yin"
  },
  {
    question: "Nutq — …",
    options: ["Oddiy faoliyat", "Korreksion faoliyat", "Kompensatsion faoliyat", "Murakkab faoliyatdir"],
    correctAnswer: "Murakkab faoliyatdir"
  },
  {
    question: "Og'zaki nutqning shakllanishida nimalar ishtirok etadi?",
    options: ["Eshituv analizatori, nutqni harakatga keltiruvchi analizator ishtirok etadi", "Nutqni harakatga keltiruvchi analizator ishtirok etadi", "Eshituv analizatori ishtirok etadi", "Eshituv analizatori, harakat-tayanch analizatorlari, nutqni harakatga keltiruvchi analizator ishtirok etadi"],
    correctAnswer: "Eshituv analizatori, harakat-tayanch analizatorlari, nutqni harakatga keltiruvchi analizator ishtirok etadi"
  },
  {
    question: "Tug'ma yoki hali tili chiqmagan go'daklik davridan ikkala quloqning mutlaqo eshitmasligi … olib keladi.",
    options: ["Ko'rlikka", "Aqli zaiflikka", "Kar-soqovlikka", "Serebral falajlikka"],
    correctAnswer: "Kar-soqovlikka"
  },
  {
    question: "Turg'un eshitish nuqsonlari kelib chiqish sabablariga ko'ra … bo'lishi mumkin.",
    options: ["Tug'ma va orttirilgan", "Tug'ma holda", "Orttirilgan holda", "Organik holatda"],
    correctAnswer: "Tug'ma va orttirilgan"
  },
  {
    question: "Nutqi rivojlanib, shakllanib olgandan so'ng yaxshi eshitmaydigan bo'lib qolgan bolalar qanday guruhga kiradi?",
    options: ["Tug'ma kar bolalar", "Irsiy kasal bolalar", "Rinolalik bolalar", "'Qulog'i keyinchalik og'ir bo'lib qolganlar'"],
    correctAnswer: "'Qulog'i keyinchalik og'ir bo'lib qolganlar'"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarga xos bo'lmagan xususiyatlarni aniqlang.",
    options: ["Bunday bolalar eshitishida va ko'rishida nuqsoni bo'lgan bolalardir", "Bunday bolalarning so'z-mantiq tafakkuri yetarli rivojlanmagan bo'ladi", "Bunday bolalar nutqi normal bolalarga nisbatan rivojlanish, shakllanish nuqtai nazaridan birmuncha orqada qoladi", "Bunday bolalarda tashqi olam haqidagi tasavvur va bilimlarning yetarli bo'lmasligi bilan xarakterlidir"],
    correctAnswer: "Bunday bolalar eshitishida va ko'rishida nuqsoni bo'lgan bolalardir"
  },
  {
    question: "Sensor axborotlarni qabul qilish va qayta ishlash tezligi sekinlashganligi, idrok etishda fazoviy munosabatlarning yetarli bo'lmasligi, idrok etishning yomonlashuvi qanday nuqsonli bolalarga xosligini aniqlang.",
    options: ["Zaif eshituvchi bolalar", "Ko'rishida nuqsoni bo'lgan bolalar", "Ruhiy rivojlanishi sustlashgan bolalar", "Eshitishida nuqsoni bo'lgan bolalar"],
    correctAnswer: "Ruhiy rivojlanishi sustlashgan bolalar"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar aqliy darajasi jihatidan qanday turlarga bo'linadi?",
    options: ["Yengil nuqsoni bor bolalar va ruhiy rivojlanishda sezilarli orqada qolgan bolalar", "Tug'ma va orttirilgan", "Debil, imbetsil, idiot", "Yengil, o'rta, og'ir"],
    correctAnswer: "Yengil nuqsoni bor bolalar va ruhiy rivojlanishda sezilarli orqada qolgan bolalar"
  },
  {
    question: "Bolani har tomonlama erkalatish, yetarli mustaqil faoliyatga o'rgatmaslik, tashabbuskorlik, mas'uliyat hissini shakllantirmaslik, haddan tashqari uning ko'ngliga qarab ish qilish natijasida bolada qanday nuqson shakllanishi mumkin?",
    options: ["Autizm sindromi", "Ruhiy rivojlanishdan ortda qolish", "Aqliy rivojlanishdan ortda qolish", "Daun sindromi"],
    correctAnswer: "Ruhiy rivojlanishdan ortda qolish"
  },
  {
    question: "Ko'rishga aloqador nuqsonlarning kelib chiqish sabablariga ko'ra turlarini aniqlang.",
    options: ["Tug'ma va orttirilgan", "Zaif ko'ruvchi va total ko'rlar", "Katarakta, afaksiya", "Ko'ruvchilar va ko'rmaydiganlar"],
    correctAnswer: "Tug'ma va orttirilgan"
  },
  {
    question: "Tiflopedagogika fanining va ko'rishida nuqsoni bo'lgan shaxslarni o'qitishning asoschisi … hisoblanadi.",
    options: ["A.I.Litvak", "B.I.Kovalenko", "V.Fromm", "V.Gayui"],
    correctAnswer: "V.Gayui"
  },
  {
    question: "… — umumiy maqsadi muloqot va bilish subyekti sifatida eshitishida nuqsoni bo'lgan shaxslarning jismoniy, ruhiy va ijtimoiy sifatlarini rivojlantirishdir.",
    options: ["Surdopedagogikaning", "Tiflopedagogikaning", "Oligofrenopedagogikaning", "Umumiy pedagogikaning"],
    correctAnswer: "Surdopedagogikaning"
  },
  {
    question: "Rezus faktorning to'g'ri kelmasligi, xromosom kasalliklari, fenilketonuriya va shu kabilar oqibatida qanday nuqsonli bolalar tug'ilishi mumkin?",
    options: ["Tug'ma ko'r bolalar", "Eshitishida nuqsoni bo'lgan bolalar", "Tug'ma oligofren bolalar", "Kar-soqov bolalar"],
    correctAnswer: "Tug'ma oligofren bolalar"
  },
  {
    question: "Kam harakat, ko'zlari qisiq, burni puchuq, tili kalta, lablari qalin, shalpang-quloq, barmoqlari kalta va bir-biriga o'xshash bolalar — …",
    options: ["Daun sindromli bolalar", "Autizm bolalar", "Ruhiy rivojlanishi sustlashgan bolalar", "Harakat-tayanch a'zolari nuqsoni bo'lgan bolalar"],
    correctAnswer: "Daun sindromli bolalar"
  },
  {
    question: "Autizm atamasi ilk bor kim tomonidan kiritilgan?",
    options: ["Leo Kenner", "Jon Daun", "Evgen Bleyler", "Kris Bruk"],
    correctAnswer: "Evgen Bleyler"
  },
  {
    question: "Tashqi dunyodan ajralish, tashqi olam bilan kommunikativ funksiyaning buzilishi kabilarni o'z ichiga oluvchi sindrom bu …",
    options: ["Autizm sindromi", "Daun sindromi", "Serebral falaj", "Ruhiy rivojlanishning sustlashishi"],
    correctAnswer: "Autizm sindromi"
  },
  {
    question: "Bu holat shizofreniya kabi ruhiy kasallikda ko'proq namoyon bo'ladi. Bu yerda qaysi nuqson haqida gap ketyapti?",
    options: ["Daun", "Karlik", "Autizm", "Nutq nuqsonlari"],
    correctAnswer: "Autizm"
  },
  {
    question: "Bolaning ota-onasi bilan bo'lishni yoqtirmasligi, uch yoshgacha nutqining rivojlanmaganligi yoki bolani ko'zingizga qaramasligi kabi belgilar orqali bolalarda qanday nuqsonni aniqlash mumkin?",
    options: ["Autizm", "Aqli zaiflik", "Ruhiy rivojlanish sustlashishi", "Nutq nuqsonlari"],
    correctAnswer: "Autizm"
  },
  {
    question: "Ilk yoshdagi bolalar autizmi bolaning necha yoshgacha bo'lgan davrini o'z ichiga oladi?",
    options: ["Chaqaloqlik davri", "2 yoshgacha bo'lgan davri", "3 yoshgacha bo'lgan davri", "5 yoshgacha bo'lgan davri"],
    correctAnswer: "3 yoshgacha bo'lgan davri"
  },
  {
    question: "Serebral falajlangan bolalarning rivojlanishidagi psixo-jismoniy nuqsonlar avvalo … bilan bog'liqdir.",
    options: ["Harakat, sensor va nutqiy kamchiliklar", "Tayanch-harakat", "Nutqiy kamchiliklar", "Eshitish bilan bog'liq kamchiliklar"],
    correctAnswer: "Harakat, sensor va nutqiy kamchiliklar"
  },
  {
    question: "Ko'pchiligida miya falaji kuzatilishi bilan bog'liq nuqson qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Ruhiy rivojlanishdan ortda qolish nuqsoni", "Aqliy rivojlanishdan ortda qolish nuqsoni", "Nutq buzilishlari nuqsoni", "Harakat-tayanch a'zolari nuqsoni"],
    correctAnswer: "Harakat-tayanch a'zolari nuqsoni"
  },
  {
    question: "Bolaning kutilmaganda tanasining qotib qolishi, tananing bo'shashishi, sekin va sust ovqatlanish, boladagi noodatiy hatti-harakatlar qanday nuqsonning belgisi bo'lishi mumkin?",
    options: ["Bolalar serebral falajining", "Autizmning", "Aqli zaiflikning", "Eshitish bilan bog'liq nuqsonlarning"],
    correctAnswer: "Bolalar serebral falajining"
  },
  {
    question: "Bola 6 oylik bo'lganida boshini ko'tara olmasligi, beli bukilgan holatda bo'lishi, qo'llarining bukilmasligi, kaftining musht bo'lishi, oyoqlarining bukilmasligi va qaychidek ustma-ust bo'lishi qaysi nuqsonning belgilari hisoblanadi?",
    options: ["Autizmning", "Aqli zaiflikning", "Bolalar serebral falajining", "Eshitish bilan bog'liq nuqsonlarning"],
    correctAnswer: "Bolalar serebral falajining"
  },
  {
    question: "Kar-ko'r-soqov bolalar qanday nuqsonli bolalar hisoblanadi?",
    options: ["Mujassam nuqsonli bolalar", "Aqli zaif bolalar", "Ruhiy rivojlanishi sustlashgan bolalar", "Autizm bolalar"],
    correctAnswer: "Mujassam nuqsonli bolalar"
  },
  {
    question: "… orqali bolalar shaxsining o'ziga xos psixologik xususiyatlari rivojlantiriladi.",
    options: ["Korreksiya", "Adaptatsiya", "Ijtimoiy reabilitatsiya", "Art terapiya"],
    correctAnswer: "Art terapiya"
  },
  {
    question: "'Muruvvat' uylariga bolalar necha yoshdan qabul qilinadi?",
    options: ["18 yoshdan", "5 yoshdan", "5-7 yoshdan", "Maktabgacha ta'limni tamomlagandan so'ng"],
    correctAnswer: "5-7 yoshdan"
  },
  {
    question: "Logopediyaning ob'ekti nima?",
    options: ["Aqli nuqsonlari bo'lgan shaxslar", "Ko'rish nuqsonlari bo'lgan shaxslar", "Nutq nuqsoniga ega bo'lgan shaxslar", "Autizm bolalar"],
    correctAnswer: "Nutq nuqsoniga ega bo'lgan shaxslar"
  },
  {
    question: "Bolaga har tomonlama ta'sir ko'rsatishni ko'zlab ta'lim-tarbiya jarayonida ham pedagogik, psixologik, meditsina metodlarini qo'llash jarayoni qanday yondashuv deyiladi?",
    options: ["Kompleks yondashuv", "Ijtimoiy adaptatsiya", "Pedagogik o'zaro ta'sir ko'rsatish", "Kompensatsiya"],
    correctAnswer: "Kompleks yondashuv"
  },
  {
    question: "Psixodiagnostika nima?",
    options: ["Stressni yo'qotish jarayoni", "Insonning o'zini ruhiy holatini boshqarishga qaratilgan ongli harakatlar", "Shaxs va psixika rivojlanishining potensial xususiyatlarini aniqlashga qaratilgan muolaja", "O'zi anglagan va anglamagan holda psixikaning ko'ngilsizlikni kutish holati"],
    correctAnswer: "Shaxs va psixika rivojlanishining potensial xususiyatlarini aniqlashga qaratilgan muolaja"
  },
  {
    question: "… tiflopedagogika fanining va ko'rishida nuqsoni bo'lgan shaxslarni o'qitishning asoschisi hisoblanadi.",
    options: ["V.Gayui", "D.Didro", "V.Fromm", "A.I.Litvak"],
    correctAnswer: "V.Gayui"
  },
  {
    question: "Yozuvning olti nuqtali tizimdan iborat bo'lishi qanday alifbo turida mavjud?",
    options: ["Daktil alifbosida", "O'zbek alifbosida", "Gayui alifbosida", "Brayl alifbosida"],
    correctAnswer: "Brayl alifbosida"
  },
  {
    question: "L.Brayl tomonidan yaratilgan alifbo qanday nuqsonli shaxslar uchun yaratilgan?",
    options: ["Ko'zi ojizlar uchun", "Gapirishida nuqsoni bo'lganlar uchun", "Aqli zaiflar uchun", "Ruhiy rivojlanishi sustlashganlar uchun"],
    correctAnswer: "Ko'zi ojizlar uchun"
  },
  {
    question: "Maktablarda past o'zlashtiruvchi, ulgurmaovchi o'quvchilar o'rtasida qanday nuqsonli bolalar uchrab turadi?",
    options: ["Ko'rishida nuqsoni bo'lgan bolalar", "Ruhiy rivojlanishi sustlashgan bolalar", "Tayanch-harakat a'zolarida nuqsoni bo'lgan bolalar", "Nutqida nuqsoni bo'lgan bolalar"],
    correctAnswer: "Ruhiy rivojlanishi sustlashgan bolalar"
  },
  {
    question: "Orttirilgan aqli zaiflik nima deb yuritiladi?",
    options: ["Demensiya", "Autizm", "Oligofreniya", "Abuliya"],
    correctAnswer: "Demensiya"
  },
  {
    question: "Intellektida nuqsoni bo'lgan bolalarning rivojlanishi, ta'limi va tarbiyasi bilan shug'ullanuvchi pedagogikaning sohasi nima deb ataladi?",
    options: ["Surdopedagogika", "Tiflopedagogika", "Oligofrenopedagogika", "Yosh pedagogikasi"],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Dimoqdan, dimoq bilan gapirish, tovushlar talaffuzi va ovoz tembrining nutq apparatidagi anatomik-fiziologik kamchiliklari, o'zgarishi natijasida buzib aytilishi nima deb yuritiladi?",
    options: ["Rinolaliya", "Anartriya", "Dizartriya", "Dislaliya"],
    correctAnswer: "Rinolaliya"
  },
  {
    question: "Daun sindromi nima?",
    options: ["Xromosoma mutatsiyasi tufayli yuzaga keladigan rivojlanish buzilishi", "Faqat ko'rish bilan bog'liq kasallik", "Ruhiy holatni buzilishi", "Faqat aqliy qobiliyatlarni pasaytiradigan kasallik"],
    correctAnswer: "Xromosoma mutatsiyasi tufayli yuzaga keladigan rivojlanish buzilishi"
  },
  {
    question: "Daun sindromi bilan tug'ilgan bolalar qanday umumiy xususiyatlarga ega bo'ladi?",
    options: ["Jismoniy o'sishning sekinlashishi", "Tez o'sish va yuqori bo'y", "Yuqori aqliy qobiliyat", "Yuzdagi o'zgarishlar va past bo'y"],
    correctAnswer: "Yuzdagi o'zgarishlar va past bo'y"
  },
  {
    question: "Daun sindromli bolalarda qanday muammolar ko'proq uchraydi?",
    options: ["Ko'rish va eshitish muammolari", "Yuz, bo'y va tana tuzilishi", "Emotsional va aqliy rivojlanishdagi kechikishlar", "Yuqori bo'y va normal rivojlanish"],
    correctAnswer: "Emotsional va aqliy rivojlanishdagi kechikishlar"
  },
  {
    question: "Daun sindromli bolalar uchun qanday maxsus yordam ko'rsatiladi?",
    options: ["Faqat tibbiy yordam", "Psixologik yordam, ta'lim va jismoniy terapiya", "Faqat jismoniy terapiya", "Faqat o'qish uchun maxsus materiallar"],
    correctAnswer: "Psixologik yordam, ta'lim va jismoniy terapiya"
  },
  {
    question: "Daun sindromi bilan bog'liq aqliy qobiliyat qanday bo'ladi?",
    options: ["Aqliy rivojlanish normal darajada bo'ladi", "Aqliy qobiliyatlar past bo'ladi, lekin o'rganishga qiziqish bo'ladi", "Aqliy qobiliyatlar yuqori bo'ladi", "Aqliy qobiliyatlar faqat ba'zi bolalarda o'zgaradi"],
    correctAnswer: "Aqliy qobiliyatlar past bo'ladi, lekin o'rganishga qiziqish bo'ladi"
  },
  {
    question: "Daun sindromi qanday holatlarda tashxis qilinadi?",
    options: ["Tashxis faqat tug'ilishdan so'ng aniqlanadi", "Tashxis homiladorlik davrida genetik testlar yordamida aniqlanishi mumkin", "Tashxis faqat o'rta yoshga yetganda qo'yiladi", "Tashxis faqat jismoniy tekshiruvlar orqali aniqlanadi"],
    correctAnswer: "Tashxis homiladorlik davrida genetik testlar yordamida aniqlanishi mumkin"
  },
  {
    question: "Daun sindromli bolalar uchun reabilitatsiya jarayonida qanday o'zgartirishlar kiritilishi mumkin?",
    options: ["O'quv jarayonini faqat tezlashtirish", "Maxsus treninglar, psixoterapiya va jismoniy faoliyatni o'z ichiga olgan kompleks yondashuv", "Faqat aqliy mashqlar", "Hech qanday maxsus yondashuvlar kerak emas"],
    correctAnswer: "Maxsus treninglar, psixoterapiya va jismoniy faoliyatni o'z ichiga olgan kompleks yondashuv"
  },
  {
    question: "Daun sindromi bilan tug'ilgan bolalar o'qish va ijtimoiy hayotda qanday imkoniyatlarga ega bo'lishi mumkin?",
    options: ["Faqat oddiy ishlarni bajarish", "Maxsus o'qish va rivojlanish dasturlari yordamida o'qish va ijtimoiy faoliyatda ishtirok etish", "Ijtimoiy hayotga kira olishmaydi", "Faqat o'qish va bilim olishga qodir emaslar"],
    correctAnswer: "Maxsus o'qish va rivojlanish dasturlari yordamida o'qish va ijtimoiy faoliyatda ishtirok etish"
  },
  {
    question: "Daun sindromining yana bir nomi?",
    options: ["Trisomiya", "Ensefalit", "Aqli zaif", "Imbetsil"],
    correctAnswer: "Trisomiya"
  },
  {
    question: "Metod so'zining ma'nosi?",
    options: ["Grekcha — usul, yo'l", "Yunoncha — kam", "Lotincha — farq qiluvchi", "Ruscha — xarakter"],
    correctAnswer: "Grekcha — usul, yo'l"
  },
  {
    question: "Qaysi bir metodda bola sharoitdan ajraladi va u yoki bu ta'sir, boshqa sharoit unga tushunarli bo'lib qoladi?",
    options: ["Eksperiment", "Kuzatish", "So'rovnoma", "Tahlil"],
    correctAnswer: "Eksperiment"
  },
  {
    question: "Qaysi bir metodda o'rnatilgan qoidalarning buzilish sabablari haqidagi hukm va baholar aniqlanadi?",
    options: ["Suhbat", "Kuzatuv", "Eksperiment", "Tajriba"],
    correctAnswer: "Suhbat"
  },
  {
    question: "Bosh miya kasalliklarini kelib chiqish sababiga ko'ra nechta turga bo'lamiz?",
    options: ["2", "3", "5", "4"],
    correctAnswer: "3"
  },
  {
    question: "Yordamchi maktablarda asosan aqli zaiflikning qaysi darajasi ta'lim oladi?",
    options: ["Debil", "Idiot", "Imbetsil", "Ta'lim olmaydi"],
    correctAnswer: "Debil"
  },
  {
    question: "G.Ye.Suxareva oligofreniyaning nechta shaklini aniqlagan?",
    options: ["3", "5", "7", "2"],
    correctAnswer: "5"
  },
  {
    question: "M.S.Pevzner oligofreniyaning nechta asosiy turini aniqlagan?",
    options: ["5", "2", "3", "4"],
    correctAnswer: "5"
  },
  {
    question: "Salbiy ta'sirlarning bola organizmiga 2 yoshdan keyingi ta'siridan kelib chiqadigan oligofreniya nima deb ataladi?",
    options: ["Demensiya", "Idiot", "Imbetsil", "Debil"],
    correctAnswer: "Demensiya"
  },
  {
    question: "Epilepsiya nima?",
    options: ["Tutqanoq", "Aqli zaiflik", "Qoloqlik", "Ruhiy buzilish"],
    correctAnswer: "Tutqanoq"
  },
  {
    question: "F-72 bunday shartli belgi aqli zaiflikning qaysi turiga mansub?",
    options: ["Idiot", "Imbetsil", "Debil", "Demensiya"],
    correctAnswer: "Imbetsil"
  },
  {
    question: "U maxsus tashkil etilgan bilish faoliyati bo'lib, kishilik jamiyatining turli sohada tajriba egallashiga xizmat qiladi.",
    options: ["Ta'lim", "Tarbiya", "Bilim", "Xotira"],
    correctAnswer: "Ta'lim"
  },
  {
    question: "Albinizm qanday kasallik?",
    options: ["Odamlarning terisida, sochida, ko'zida pigmentlarning yetishmasligi", "Gavharning loyqalanishi", "Ko'zga parda tushishi", "Ko'zdan yiring ajrab chiqishi"],
    correctAnswer: "Odamlarning terisida, sochida, ko'zida pigmentlarning yetishmasligi"
  },
  {
    question: "Zaif eshituvchilar nechta darajaga bo'linadi?",
    options: ["4", "2", "5", "3"],
    correctAnswer: "4"
  },
  {
    question: "'Nafas qo'shiq aytishni emas, balki qo'shiq aytish nafasning to'g'ri rivojlanishiga olib keladi' — bu fikr qaysi olimga tegishli?",
    options: ["Neyman", "L.Mo'minova", "U.Fayziyeva", "F.Rau"],
    correctAnswer: "Neyman"
  },
  {
    question: "O'zbekistonda maxsus ta'limni rivojlantirishda o'z hissalarini qo'shgan olimlardan kimlarni bilasiz?",
    options: ["L.Mo'minova, A.S.Aytmetova", "I.M.Salovev, A.S.Vigotskiy", "Q.Abdullaeva, S.Eshonto'raeva", "M.Qahramonova; S.Mikoyan"],
    correctAnswer: "L.Mo'minova, A.S.Aytmetova"
  },
  {
    question: "Glaukoma nima?",
    options: ["Ko'z ichki bosimining ko'tarilishi", "Ko'z qorachig'ini kichrayishi", "Ko'z qorachig'ini kattalashishi", "Ko'z bosimini pasayib ketishi"],
    correctAnswer: "Ko'z ichki bosimining ko'tarilishi"
  },
  {
    question: "Oligofren bolalar aqliy rivojlanmaganligi natijasida qaysi darajalarga ajratib o'rganiladi?",
    options: ["Debil, imbetsil, idiot", "Debil, psixik rivojlanishi sust", "Imbetsil, idiot, kar", "Nutqi rivojlanmagan, nevroz"],
    correctAnswer: "Debil, imbetsil, idiot"
  },
  {
    question: "Bolalardagi me'yoriy ko'rish imkoniyatining rivojlanishi necha yoshga kelib chiqadi?",
    options: ["8 yoshdan 5 yoshgacha", "10 yoshdan 7 yoshgacha", "3 yoshdan 6 yoshgacha", "4 yoshdan 7 yoshgacha"],
    correctAnswer: "3 yoshdan 6 yoshgacha"
  },
  {
    question: "Nutq apparati o'zaro chambarchas bog'langan ikki qismdan tashkil topgan. Bular:",
    options: ["Boshqaruvchi va bajaruvchi", "Organik va periferik", "Afferent va efferent", "Markaziy va organik"],
    correctAnswer: "Boshqaruvchi va bajaruvchi"
  },
  {
    question: "Artikulyatsiya bo'limining a'zosi?",
    options: ["Til", "Hiqildoq", "Og'iz bo'shlig'i", "Ovoz boylamlari"],
    correctAnswer: "Til"
  },
  {
    question: "Ovozni hosil qilish qaysi tovushdan boshlanadi?",
    options: ["A tovushidan", "S tovushidan", "R tovushidan", "M tovushidan"],
    correctAnswer: "A tovushidan"
  },
  {
    question: "Nutq buzilishlar tahlilini Levina nechta tamoyilga ajratadi?",
    options: ["3", "4", "5", "2"],
    correctAnswer: "3"
  },
  {
    question: "Bola hayotining nechanchi yilida nutq rivojlanishini stimullovchi, kattalar bilan predmetli harakat muloqoti yetakchi rol hisoblanadi?",
    options: ["Ikkinchi yilda", "Birinchi yili", "Uchinchi yil", "To'rtinchi yili"],
    correctAnswer: "Birinchi yili"
  },
  {
    question: "Oligo so'zi qanday ma'noni bildiradi?",
    options: ["Kam", "Kar", "Ko'r", "Ko'p"],
    correctAnswer: "Kam"
  },
  {
    question: "Ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanuvchi mutaxassis?",
    options: ["Surdopedagog", "Logoped", "Oligofrenopedagog", "Tiflopedagog"],
    correctAnswer: "Tiflopedagog"
  },
  {
    question: "Zaif ko'ruvchilar internat maktabida ko'rish qobiliyati necha foizga teng bo'lgan bolalarni qabul qiladi?",
    options: ["0,05 — 0,4", "0,2%", "0,3%", "0,1%"],
    correctAnswer: "0,05 — 0,4"
  },
  {
    question: "Ko'rlar maktabida nechta bo'lim mavjud?",
    options: ["4 ta", "2 ta", "3 ta", "5 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Imkoniyati cheklangan bolalarni maxsus ta'lim muassasalariga necha yoshdan tarbiya berish uchun olinadi?",
    options: ["3 yoshdan", "6-7 yoshdan", "4-5 yoshdan", "7-8 yoshdan"],
    correctAnswer: "4-5 yoshdan"
  },
  {
    question: "Maxsus ta'lim muassasalarining har bir guruhiga necha nafardan bola qabul qilinishi mo'ljallangan?",
    options: ["4-8 nafar", "2-3 nafar", "10-12 nafar", "10-11 nafar"],
    correctAnswer: "4-8 nafar"
  },
  {
    question: "Ko'rishida nuqsoni bor bolalarni necha guruhga ajratish mumkin?",
    options: ["2 ga", "1 ga", "3 ga", "4 ga"],
    correctAnswer: "2 ga"
  },
  {
    question: "Toshkentda zaif ko'ruvchilar uchun 20 o'quvchidan iborat maktab nechanchi yil ochilgan?",
    options: ["1925 yil", "1922 yil", "1930 yil", "1924 yil"],
    correctAnswer: "1925 yil"
  },
  {
    question: "Yozma nutqni egallashda bosh miyaning qaysi qismi muhim rol o'ynaydi?",
    options: ["Bosh miya qobig'i orqa tomoni", "Vernike markazi", "Bosh miya qobig'i chakka qismi", "Bosh miya qobig'i tepa qismi"],
    correctAnswer: "Bosh miya qobig'i tepa qismi"
  },
  {
    question: "'Alohida ta'limga ehtiyoji bo'lgan bolalarga ta'lim berishga oid normativ-huquqiy hujjatlarni tasdiqlash' to'g'risidagi 638-sonli qonun nechanchi yil hukumat tomonidan ishlab chiqildi?",
    options: ["2002 yil", "2000 yil", "2021 yil", "1998 yil"],
    correctAnswer: "2021 yil"
  },
  {
    question: "Ta'lim turlari to'g'ri ko'rsatilgan qatorni belgilang.",
    options: ["An'anaviy, masofaviy, maxsus", "An'anaviy ta'lim", "Maxsus ta'lim", "Rivojlanish ta'limi"],
    correctAnswer: "An'anaviy, masofaviy, maxsus"
  },
  {
    question: "Qaysi ta'lim turi nogironligi bo'lgan shaxslar uchun katta imkoniyatlar beradi?",
    options: ["An'anaviy", "Rivojlanish", "Masofaviy", "Maxsus"],
    correctAnswer: "Maxsus"
  },
  {
    question: "Xalq ta'limi vazirligi O'zbekistonda nechanchi yilgacha inklyuziv (integratsiyalashgan) ta'limni rivojlantirish konsepsiyasini muhokamaga qo'ydi?",
    options: ["2030 yilgacha", "2025 yilgacha", "2031 yilgacha", "2028 yilgacha"],
    correctAnswer: "2030 yilgacha"
  },
  {
    question: "Nechanchi yildan buyon maxsus ehtiyojli bolalarni umumta'lim muassasalari tizimida o'qitish borasida bir qancha jahon miqyosida deklaratsiyalar va qarorlar qabul qilindi?",
    options: ["1990 yildan", "1981 yildan", "1992 yildan", "1998 yildan"],
    correctAnswer: "1990 yildan"
  },
  {
    question: "Alohida yordamga muhtoj bolalarni ta'limga jalb qilishning nechta asosiy omili bor?",
    options: ["3 ta", "5 ta", "4 ta", "2 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Qaysi chex pedagogi tarixda birinchi bo'lib maktab ta'limida sinf-dars tizimini yaratdi?",
    options: ["Ya.A.Komenskiy", "Dalton", "Volter", "Lunin"],
    correctAnswer: "Ya.A.Komenskiy"
  },
  {
    question: "Qaysi tashkilot Xalq ta'limi vazirligining defektolog va psixologlarining inklyuziv ta'limdagi roli to'g'risidagi nizomlarni ishlab chiqishga ko'maklashadi?",
    options: ["BMT", "UNICEF", "UNESCO", "Oliy majlis"],
    correctAnswer: "UNICEF"
  },
  {
    question: "Zaif ko'ruvchilar ko'rish o'tkirligiga ko'ra necha turga bo'linadi?",
    options: ["3", "4", "5", "7"],
    correctAnswer: "3"
  },
  {
    question: "Albinizm so'zining ma'nosi?",
    options: ["Ko'ruv nervi miyaga ma'lumotni beradi", "Odamlarning terisida, ko'zda, sochda rang pigmentining bo'lmasligi bilan tug'ilishi", "Bu ko'z linzalarining xiralashuvi oqibatida yorqinni ko'rishni qiyinlashtiradi", "O'zini o'zi boshqarolmaslik"],
    correctAnswer: "Odamlarning terisida, ko'zda, sochda rang pigmentining bo'lmasligi bilan tug'ilishi"
  },
  {
    question: "Afaksiya so'zining ma'nosi nima?",
    options: ["Gavharning yo'qligi", "Ko'zi ojiz", "Ko'z bosimining ortishi", "Qon bosimining oshib ketishi"],
    correctAnswer: "Gavharning yo'qligi"
  },
  {
    question: "Glaukoma so'zining ma'nosi?",
    options: ["Ko'z olmasining kichrayishi", "To'r pardalarda pigment yetishmasligi", "Ko'z ichki bosimining ko'tarilishi", "Ko'rmay qolish"],
    correctAnswer: "Ko'z ichki bosimining ko'tarilishi"
  },
  {
    question: "Mikroftalm qanday kasallik?",
    options: ["Ko'z olmasining kichrayishi", "Ko'rish qobiliyati keskin kamayishi", "Ko'rmay qolish", "Ko'z ichki bosimining oshib ketishi"],
    correctAnswer: "Ko'z olmasining kichrayishi"
  },
  {
    question: "L.V.Neyman tadqiqotlariga ko'ra eshitishida nuqsoni bo'lgan bolalarning necha foizida eshitish nuqsonlari tug'ma bo'ladi?",
    options: ["28-31", "25-30", "40-45", "50-55"],
    correctAnswer: "28-31"
  },
  {
    question: "Kech kar bo'lganlar deb qanday bolalarga aytiladi?",
    options: ["Nutqni egallagandan keyin ya'ni 2-3 yoshda qandaydir kasallik yoki jarohat oqibatida eshitish qobiliyatini yo'qotgan bolalar", "Eshitishning mutlaqo yo'qligi, mutlaqo eshitmaslik", "Har ikkala quloq bilan eshitishning pasayishi, unda nutqni idrok etishda qiyinchiliklar yuzaga keladi", "16 yoshdan keyin kar bo'lganlar"],
    correctAnswer: "Nutqni egallagandan keyin ya'ni 2-3 yoshda qandaydir kasallik yoki jarohat oqibatida eshitish qobiliyatini yo'qotgan bolalar"
  },
  {
    question: "Angliyada og'ir darajadagi bolalar nechanchi yildan beri maxsus ta'lim tizimiga kiritilganlar?",
    options: ["1975", "1976", "1980", "1970"],
    correctAnswer: "1975"
  },
  {
    question: "Eshitish qobiliyati turg'un pasayishi qanday holda amalga oshishi mumkin?",
    options: ["Karikal", "Tug'ma va orttirilgan", "Orttirilgan", "Zaif eshituvchilar"],
    correctAnswer: "Tug'ma va orttirilgan"
  },
  {
    question: "Agar nutqni rivojlantirish ustida ish olib borilmasa necha yoshida eshitish qobiliyatini yo'qotgan bolalar maktab yoshiga yetganda gapirmaydilar?",
    options: ["4-5 yoshda", "3-4 yoshda", "5-6 yoshda", "8-9 yoshda"],
    correctAnswer: "4-5 yoshda"
  },
  {
    question: "Aqliy zaiflik o'zi nima?",
    options: ["Bosh miyani organik zararlanishi (tug'ma, orttirilgan)", "Ruhiy rivojlanishning orqada qolishi", "Nutqida nuqsoni bo'lishi tufayli gapira olmaslik", "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"],
    correctAnswer: "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
  },
  {
    question: "Maxsus yordamga muhtoj bolalarni kasbga yo'llash bu?",
    options: ["Xalq xo'jaligining eng muhim tarmoqlari bilan tanishtirish", "Daromadli kasblardan birini tanlash", "Nuqsonlarni hisobga olgan holda kasblarni birini tanlash", "Hunarmandchilikni tavsiya etish"],
    correctAnswer: "Nuqsonlarni hisobga olgan holda kasblarni birini tanlash"
  },
  {
    question: "Kelib chiqish sabablariga ko'ra eshitish nuqsonlari?",
    options: ["Organik va funksional", "Tug'ma va orttirilgan", "Tug'ma va orttirilgan, organik hamda funksional", "Hayot davomida orttirilgan"],
    correctAnswer: "Tug'ma va orttirilgan, organik hamda funksional"
  },
  {
    question: "Nutq qanday vazifani bajaradi?",
    options: ["Aloqa bog'lash", "Fikr yuritish", "O'zaro muloqot vositasi bo'lib, insonlarda bir-birlari bilan muloqot, fikr almashish vazifalarini bajaradi", "Kommunikativ"],
    correctAnswer: "O'zaro muloqot vositasi bo'lib, insonlarda bir-birlari bilan muloqot, fikr almashish vazifalarini bajaradi"
  },
  {
    question: "Inklyuziv ta'lim bu:",
    options: ["IChB uchun uyg'unlashgan ta'lim tizimi", "IChB uchun tashkil etilgan differensial ta'lim tizimi", "Korreksion ta'lim tizimi", "Tabaqalashtirilgan ta'lim tizimi"],
    correctAnswer: "IChB uchun uyg'unlashgan ta'lim tizimi"
  },
  {
    question: "Nutq qanday paydo bo'ladi?",
    options: ["Tovush birikmalarini talaffuz qilishdan", "Tovushlar qo'shilishidan", "Tarbiya ostida ongli nutq va fikrlash orqali", "Passiv va aktiv nutq birikishidan"],
    correctAnswer: "Tarbiya ostida ongli nutq va fikrlash orqali"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalar qayerda ta'lim olishi mumkin?",
    options: ["Internatlarda", "Maxsus guruh va sinflarda", "Mehribonlik uylarida", "Akademik litseylarda"],
    correctAnswer: "Maxsus guruh va sinflarda"
  },
  {
    question: "Gipoksiya nima?",
    options: ["Kislorodning yetishmasligi", "Bosh miya shikastlanishi", "Bosh miyada suv to'planib qolishi", "Orqa miyani urilishi"],
    correctAnswer: "Kislorodning yetishmasligi"
  },
  {
    question: "'Autizm' so'zining ma'nosi nima?",
    options: ["Inglizcha 'autos' — og'ir", "Lotincha 'autos' — sezgi", "Grekcha 'autos' — o'zim", "Grekcha 'autos' — og'ir"],
    correctAnswer: "Grekcha 'autos' — o'zim"
  },
  {
    question: "'Autizm' belgilari qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarni buzilish sindromi", "Reallikka qaytish, dunyo qarashi kengayish va tashqi olam bilan uyg'unlashish sindromi", "Muskullarning torayishi", "Markaziy asab tizimidagi funksional o'zgarishlar"],
    correctAnswer: "Reallikdan uzoqlashish, dunyodan ajralish va tashqi olam bilan kommunikativ funksiyalarni buzilish sindromi"
  },
  {
    question: "Nutq harakat analizatori faoliyatining buzulishi alaliyaning qaysi shakliga kiradi?",
    options: ["Motor", "Sensor", "Retorik", "Ichki va tashqi"],
    correctAnswer: "Motor"
  },
  {
    question: "Nutq eshitish analizatorlarining buzilishi alaliyaning qanday buzilish shakliga mansub?",
    options: ["Motor", "Sensor", "Ichki va tashqi", "Retorik"],
    correctAnswer: "Sensor"
  },
  {
    question: "Nechinchi yilda UNESCO 'Hamma uchun' ta'lim dasturini qabul qildi?",
    options: ["2001", "2000", "2002", "2003"],
    correctAnswer: "2000"
  },
  {
    question: "Bolalarda nerv sistemasining yallig'li holatlari qanday kasalliklarga sabab bo'lishi mumkin?",
    options: ["Traxoma", "Sil", "Qizamiq", "Meningit, meningoensefalit"],
    correctAnswer: "Meningit, meningoensefalit"
  },
  {
    question: "Kar-soqov bolalarning eshitish nuqsonlari necha foizi tug'ma bo'ladi?",
    options: ["30-35%", "25-35%", "25-30%", "35-40%"],
    correctAnswer: "25-35%"
  },
  {
    question: "Zaif ko'ruvchi bolalarda ko'rish o'tkirligi nechigacha bo'lishi mumkin?",
    options: ["0,05 — 0,4", "0,04 — 0,03", "0,03 — 0,02", "0,05 — 0,04"],
    correctAnswer: "0,05 — 0,4"
  },
  {
    question: "Nutq kamchiliklari kelib chiqish sabablariga ko'ra logopediya fani necha turga bo'linadi?",
    options: ["3 tur", "4 tur", "5 tur", "2 tur"],
    correctAnswer: "2 tur"
  },
  {
    question: "Dizartriya qaysi so'zdan olingan va ma'nosi?",
    options: ["Lotincha birikish", "Yunoncha — talaffuzning buzilishi", "Arabcha parchalash", "Fransuzcha parchalash"],
    correctAnswer: "Yunoncha — talaffuzning buzilishi"
  },
  {
    question: "Sistemali nutq buzilishiga qaysilar kiradi?",
    options: ["Demensiya", "Alaliya, afaziya", "Daun sindromi", "Taxilaliya"],
    correctAnswer: "Alaliya, afaziya"
  },
  {
    question: "Daun sindromi kimning nomiga atab qo'yilgan?",
    options: ["Kru Bruk nomiga", "Pablo Pineda", "S.Vigotskiy", "Ingliz vrachi Jon Daun nomiga atab qo'yilgan"],
    correctAnswer: "Ingliz vrachi Jon Daun nomiga atab qo'yilgan"
  },
  {
    question: "Daun sindromi nomini ingliz vrachi Jon Daun sharafiga nechanchi yil qo'yilgan?",
    options: ["1866", "1880", "1980", "1860"],
    correctAnswer: "1866"
  },
  {
    question: "Ruhiy rivojlanishning susayish muammosi O'zbekistonda nechanchi yilda o'rganilgan?",
    options: ["1940 oxiri 1980-yillarda", "1960 oxiri 1970-yillarda", "1890 oxiri 1960-yillarda", "1990 oxiri 1993-yillarda"],
    correctAnswer: "1960 oxiri 1970-yillarda"
  },
  {
    question: "Ruhiy rivojlanishi sustlashgan bolalarni xotira jarayonlarining xususiyatlariga ko'ra necha guruhga bo'linadi?",
    options: ["3", "11", "10", "4"],
    correctAnswer: "3"
  },
  {
    question: "Autizm qaysi so'zdan olingan?",
    options: ["Yunoncha", "Inglizcha", "Grekcha", "Lotincha"],
    correctAnswer: "Grekcha"
  },
  {
    question: "Autizm so'zining ma'nosi?",
    options: ["Grekcha — o'zim degan ma'noni anglatadi", "Inglizcha o'zim degan ma'noni anglatadi", "Fransuzcha o'zim degan ma'noni anglatadi", "Yunoncha o'zim degan ma'noni anglatadi"],
    correctAnswer: "Grekcha — o'zim degan ma'noni anglatadi"
  },
  {
    question: "Suhbat metodi haqidagi to'g'ri fikrni aniqlang.",
    options: ["Savol-javob, so'zlashish, so'zlab berish", "Tushuntirish, bayon qilish, hikoya qilish", "Savollarga javob berish, o'qib berish", "Mavzuga doir savol-javobdan iborat bo'lgan dialogik nutq"],
    correctAnswer: "Mavzuga doir savol-javobdan iborat bo'lgan dialogik nutq"
  },
  {
    question: "Suhbat metodini tavsiya etgan buyuk mutafakkirlarni aniqlang.",
    options: ["Abu Rayhon Beruniy, Ibn Sino", "Ibn Sino, A.Navoiy, Z.Bobur", "Burhoniddin Zarnuji, Ibn Sino, Forobiy", "Forobiy, Al-Xorazmiy"],
    correctAnswer: "Burhoniddin Zarnuji, Ibn Sino, Forobiy"
  },
  {
    question: "Ilk yosh guruhida bolalarni nutqqa o'rgatish bosqichining asosiy metodlarini aniqlang.",
    options: ["Tushuntirish, suhbat", "Ovutmachoq o'yin", "Suhbat, didaktik o'yin", "Ko'rsatish, o'yin"],
    correctAnswer: "Ko'rsatish, o'yin"
  },
  {
    question: "Adaptatsiya so'zining ma'nosi nima?",
    options: ["Moslashuvchanlik", "Ko'nikuvchanlik", "Idrokning shakllanishi", "Biror bir tashkilotga ko'nikish"],
    correctAnswer: "Moslashuvchanlik"
  },
  {
    question: "Disgrafiya qaysi so'zdan olingan?",
    options: ["Yunoncha", "Grekcha", "Fransuzcha", "Lotincha"],
    correctAnswer: "Grekcha"
  },
  {
    question: "Aqli zaif bolalar necha tizim bo'yicha savolga javob bera oladi?",
    options: ["1", "8", "7", "3"],
    correctAnswer: "1"
  },
  {
    question: "Oligofren bolalar qayerda ta'lim olishi kerak?",
    options: ["Ulgurmaovchi o'quvchilarga ixtisoslashtirilgan ta'lim muassasalarida", "Umumiy o'rta ta'lim maktablarining maxsus sinflarida", "Maxsus sinf xonalarda", "Maxsus bolalar internatlari, yordamchi maktablarda"],
    correctAnswer: "Maxsus bolalar internatlari, yordamchi maktablarda"
  },
  {
    question: "Yordamchi mehnat ta'limi maktabida kimlar ta'lim oladi?",
    options: ["Debil bolalar", "BSF bolalar", "Rivojlanishida nuqsoni bo'lgan bolalar", "Oligofren bolalar"],
    correctAnswer: "Debil bolalar"
  },
  {
    question: "Ko'rlar maktabida birinchi bo'limida necha yillik ta'lim beriladi?",
    options: ["4 yillik", "5 yillik", "10 yillik", "11 yillik"],
    correctAnswer: "4 yillik"
  },
  {
    question: "Ko'rishda nuqsoni bo'lgan bolalar uchun bog'chalar faoliyatida nechta asosiy vazifani belgilash mumkin?",
    options: ["4 ta", "1 ta", "3 ta", "5 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Ko'rlar uchun alohida moslashtirilgan internat maktabi nechanchi yil ochilgan?",
    options: ["1940 yil", "1945 yil", "1933 yil", "1935 yil"],
    correctAnswer: "1945 yil"
  },
  {
    question: "O'quv reja, dastur va darsliklar maxsus ehtiyojli bolalarning imkoniyatlariga moslashuvchan bo'lishi kerak. Bu qaysi tamoyil?",
    options: ["Inklyuziv ta'limda moslashuvchanlik tamoyili", "Markazlashtirilmagan bo'lishi tamoyili", "Asosiy tamoyillar", "Taxminiy"],
    correctAnswer: "Inklyuziv ta'limda moslashuvchanlik tamoyili"
  },
  {
    question: "Eshitishda nuqson bo'lgan bolalar tasniflangan qatorni ko'rsating.",
    options: ["Kech kar bo'lib qolgan bolalar", "Zaif eshituvchi, kar bolalar", "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi", "Kar, tangquloqlik"],
    correctAnswer: "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Tibbiy atamalarda simptom nima?",
    options: ["Belgi", "Kasallik", "Ruhiy holat", "Og'riq"],
    correctAnswer: "Belgi"
  },
  {
    question: "Rinolaliyaning belgisi?",
    options: ["Duduqlanib gapirish", "Harflarning tushib qolishi", "Tovushning yo'qligi", "Dimog'ida gapirish"],
    correctAnswer: "Dimog'ida gapirish"
  },
  {
    question: "Nutq eshitish analizatorlarining buzilishi alaliyaning qanday buzilish shakliga mansub?",
    options: ["Sensor", "Motor", "Ichki va tashqi", "Retorik"],
    correctAnswer: "Sensor"
  },
  {
    question: "Tibbiy-pedagogik komissiyada necha nafar mutaxassis ishtirok etadi?",
    options: ["7 nafar", "5 nafar", "6 nafar", "3 nafar"],
    correctAnswer: "7 nafar"
  },
  {
    question: "Ko'rishda nuqsoni bor bolalarga qanday yordam berish mumkin?",
    options: ["Bir xil yordam ko'rsatish", "Maxsus maktablarda", "Alohida yordam ko'rsatish", "Ovqatlanishiga yordam berish kerak"],
    correctAnswer: "Maxsus maktablarda"
  },
  {
    question: "Nutq buzilishlar bolaning qanday rivojlanishiga ta'sir etadi?",
    options: ["Ruhiy", "Aqliy", "Fiziologik", "Axloqiy (barcha sohalarga, lekin asosiy — ruhiy va aqliy; fandagi to'g'ri javob: ruhiy)"],
    correctAnswer: "Axloqiy (barcha sohalarga, lekin asosiy — ruhiy va aqliy; fandagi to'g'ri javob: ruhiy)"
  },
  {
    question: "Defektologik faoliyat predmeti qanday fanlar bilan bog'liq?",
    options: ["Astronomiya, kimyo, biologiya", "Matematika, geometriya, tibbiyot", "Tarix, geografiya", "Anatomiya, fiziologiya, gigiena, pedagogika, psixologiya, tibbiyot"],
    correctAnswer: "Anatomiya, fiziologiya, gigiena, pedagogika, psixologiya, tibbiyot"
  },
  {
    question: "Og'ir nutq nuqsonlari bor bolalarning ta'limi bilan qaysi fan shug'ullanadi?",
    options: ["Logopediya", "Surdopedagogika", "Oligofrenopedagogika", "Tiflopedagogika"],
    correctAnswer: "Logopediya"
  },
  {
    question: "Ijtimoiy reabilitatsiya nima?",
    options: ["Nuqsonlarni kompensatsiyalash", "Nuqsonlarni tuzatish, korreksiyalash", "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash", "Rivojlanishida nuqsoni bo'lgan bolalarni jamiyatga moslashtirish"],
    correctAnswer: "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash"
  },
  {
    question: "Kim ichki nutqni chuqur tahlil qildi, uning o'ziga xos xususiyatlarini ochib berdi?",
    options: ["A.A.Leontiev", "T.B.Rebina", "L.S.Vigotskiy", "A.R.Luriya"],
    correctAnswer: "A.R.Luriya"
  },
  {
    question: "'Logopediya' terminining ma'nosi nima?",
    options: ["Ta'lim beruvchi", "O'qitaman", "Tarbiyalovchi", "Nutqni tarbiyalash"],
    correctAnswer: "Nutqni tarbiyalash"
  },
  {
    question: "Qanday bolalar alohida ko'makka muhtoj bolalar deyiladi?",
    options: ["Ruhiy va jismoniy kamchiligi bor bolalar", "Kasallikka ko'p chalinuvchi bolalar", "Talaffuzida kamchiligi bor bolalar", "RRS bolalar"],
    correctAnswer: "Ruhiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "M.S.Pevzner oligofreniyani nechta asosiy turga ajratgan?",
    options: ["8", "4", "6", "5"],
    correctAnswer: "5"
  },
  {
    question: "Didaktik o'yinlarning qimmati nimada?",
    options: ["An'anaviy darslarda qo'llaniladi", "Bolaning tarbiyasiga ta'sir qiladi", "O'quvchi o'zi bilmagan holda ko'pdan ko'p harakatlar qiladi", "Bolani beparvolikka o'rgatadi"],
    correctAnswer: "O'quvchi o'zi bilmagan holda ko'pdan ko'p harakatlar qiladi"
  },
  {
    question: "Yordamchi maktablarda dars qanday tuzilgan?",
    options: ["O'yin tarzda", "Ilmiy tarzda", "Jismoniy tarzda", "Hammasi to'g'ri"],
    correctAnswer: "O'yin tarzda"
  },
  {
    question: "Yordamchi maktab o'quvchilarini o'rganishda qaysi metoddan foydalanamiz?",
    options: ["Taqqoslash", "Tajriba", "Kuzatish", "Suhbat"],
    correctAnswer: "Kuzatish"
  },
  {
    question: "Qaysi olim fikricha bolani maksimal darajadagi mavjudot deb atashgan?",
    options: ["A.S.Vigotskiy", "S.S.Nudelman", "M.M.Nudelman", "A.A.Burakov"],
    correctAnswer: "S.S.Nudelman"
  },
  {
    question: "Odamning oliy nerv faoliyatini o'rgangan buyuk olim qaysi?",
    options: ["Al-Xorazmiy", "Amir Temur", "Abu Ali Ibn Sino", "Mirzo Ulug'bek"],
    correctAnswer: "Abu Ali Ibn Sino"
  },
  {
    question: "O'quvchilarda estetik irodani rivojlantirish uchun qanday usullardan foydalaniladi?",
    options: ["Turli xil vosita usullaridan", "Aqlini rivojlantiruvchi", "Ruhiy tayyorlovchi", "Intellektni oshiruvchi"],
    correctAnswer: "Turli xil vosita usullaridan"
  },
  {
    question: "Germaniyada nechinchi yilda karlar uchun institut ochilgan?",
    options: ["XV asr", "XIX asr", "XX asr", "XVII asr"],
    correctAnswer: "XIX asr"
  },
  {
    question: "Rossiyada nechinchi yilda karlar maktabi ochilgan?",
    options: ["1784", "1795", "1798", "1999"],
    correctAnswer: "1795"
  },
  {
    question: "Markaziy asab tizimidagi funksional o'zgarishlar bilan bog'liq nutq buzilishlarini toping.",
    options: ["Rinolaliya, mutizm, kekelema", "Mexanik, disaliya, alaliya", "Mutizm, surdomutizm", "Alaliya, disaliya, surdomutizm"],
    correctAnswer: "Mutizm, surdomutizm"
  },
  {
    question: "Izoterapiya bu…",
    options: ["Tasviriy san'at yordamida terapevtik ta'sir orqali rasm chizish, modellashtirish va test terapiyasi", "Test yordamida barmoq va qo'l harakatlarni o'rgatish orqali bola organizmiga ta'sir o'tkazish usuli", "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul", "Nutqidagi kamchiliklarini to'g'rilash va nutqini ravon qilish usuli"],
    correctAnswer: "Ichki dunyosini ranglarda aks ettirishga va unga tashqi tomondan qarashga imkon beradigan usul"
  },
  {
    question: "Agar nutq tinglovchi ongining ko'p tomonlarini egallab olib, uni so'zlovchiga tobe qilib qo'ysa bunday nutq qanday nutq hisoblanadi?",
    options: ["Obrazli nutq", "Qisqa nutq", "Ta'sirli nutq", "Nutq emas"],
    correctAnswer: "Ta'sirli nutq"
  },
  {
    question: "Bolalarda nutq buzilishini boshqa guruhlarga qarab tasniflashni taklif qilgan olim?",
    options: ["L.O.Badalyan", "E.P.Neyman", "K.D.Ushinskiy", "V.N.Luiy"],
    correctAnswer: "L.O.Badalyan"
  },
  {
    question: "Taxilaliya nima?",
    options: ["Nutq ravonligi", "Tovush talaffuzning normal eshitish", "Nutqning yo'qolishi", "Patologik tezlashtirilgan nutq tezligi, artikulyar nutq dasturini amalga oshirishda namoyon bo'ladi"],
    correctAnswer: "Patologik tezlashtirilgan nutq tezligi, artikulyar nutq dasturini amalga oshirishda namoyon bo'ladi"
  },
  {
    question: "Pedagog tushunchasi qanday ma'noni anglatadi?",
    options: ["Bola yetaklovchi", "Tarbiyachi", "Bolani voyaga yetkazuvchi", "Murabbiy"],
    correctAnswer: "Bola yetaklovchi"
  },
  {
    question: "Sinf-dars sistemasi birinchi bo'lib kim tomonidan ishlab chiqilgan?",
    options: ["Makarenko", "Jon Dyum", "Ya.Komenskiy", "K.Ushinskiy"],
    correctAnswer: "Ya.Komenskiy"
  },
  {
    question: "Art terapiya nima?",
    options: ["Hissiyotlarni chiqazish", "Nutq buzilishi", "Ko'zning ko'rmay qolishi", "Ruhiy holatning buzilishi"],
    correctAnswer: "Hissiyotlarni chiqazish"
  },
  {
    question: "Zaif ko'ruvchilar ko'rish o'tkirligiga ko'ra necha turga bo'linadi?",
    options: ["3", "4", "6", "2"],
    correctAnswer: "3"
  },
  {
    question: "Nutq nuqsonlari bu…",
    options: ["Murakkab ruhiy faoliyat", "Nutq tovushlarini hosil qilishda ishtirok etadigan nutq organlari tizimining normada emasligi", "Adabiy tilda qabul qilingan nutq normasidan biroz bo'lsa ham chetga chiqish", "Nutqiy faoliyat turlarining bir-biriga mos emasligi"],
    correctAnswer: "Nutq tovushlarini hosil qilishda ishtirok etadigan nutq organlari tizimining normada emasligi"
  },
  {
    question: "Rinolaliya bu?",
    options: ["Nutq apparatining anatomik va fiziologik kamchiliklari sababli ovoz tembri va tovushlar talaffuzidagi buzilishdir", "Nutq apparati innervatsiyasining organik buzilishi sababli nutqning talaffuz tomonidan buzilishidir", "Nutq tovushlarini hosil qilishda ishtirok etadigan nutq organlari buzilishi", "Bu markaziy xarakterdagi organik nutq buzilishidir"],
    correctAnswer: "Nutq apparatining anatomik va fiziologik kamchiliklari sababli ovoz tembri va tovushlar talaffuzidagi buzilishdir"
  },
  {
    question: "Fonetik-fonematik komponent — bu…",
    options: ["Tovushlar talaffuzi, ovoz, nutq tezligi, idrok", "Grammatik jihatdan mukammal bo'lgan nutq", "Aktiv va passiv lug'at", "Nutqning funksional tezligi"],
    correctAnswer: "Tovushlar talaffuzi, ovoz, nutq tezligi, idrok"
  },
  {
    question: "Tovushlar talaffuzidagi kamchiliklar bu?",
    options: ["Alaliya, afaziya", "Afoniya, disfoniya", "Dislaliya, rinolaliya", "Disgrafiya, agrafiya, aleksiya"],
    correctAnswer: "Dislaliya, rinolaliya"
  },
  {
    question: "Ovoz kamchiliklari bu…",
    options: ["Afoniya, disfoniya", "Alaliya, afaziya", "Dislaliya, rinolaliya", "Disgrafiya, agrafiya, aleksiya"],
    correctAnswer: "Afoniya, disfoniya"
  },
  {
    question: "O'qish va yozuvdagi kamchiliklar bu…",
    options: ["Alaliya, afaziya", "Dislaliya, rinolaliya", "Afoniya, disfoniya", "Disgrafiya, agrafiya, aleksiya"],
    correctAnswer: "Disgrafiya, agrafiya, aleksiya"
  },
  {
    question: "Aqli zaiflik o'zi nima?",
    options: ["Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi", "Bosh miyani organik zararlanishi (tug'ma, orttirilgan)", "Ruhiy rivojlanishning orqada qolishi", "Nutqida nuqsoni bo'lishi tufayli gapira olmaslik"],
    correctAnswer: "Bosh miyaning organik zararlanishi natijasida bilish faoliyatining turg'un buzilishi"
  },
  {
    question: "Maxsus yordamga muhtoj bolalarni kasbga yo'llash bu?",
    options: ["Xalq xo'jaligining eng muhim tarmoqlari bilan tanishtirish", "Anomaliyalarini hisobga olgan holda kasblarni birini tanlash", "Daromadli kasblardan birini tanlash", "Hunarmandchilikni tavsiya etish"],
    correctAnswer: "Anomaliyalarini hisobga olgan holda kasblarni birini tanlash"
  },
  {
    question: "Maxsus pedagogika fani qanday fan?",
    options: ["Jismoniy va ruhiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim-tarbiyasi bilan shug'ullanadigan fan", "Ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan", "Nutqida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan", "Eshitishida nuqsoni bo'lgan bolalar bilan shug'ullanadigan fan"],
    correctAnswer: "Jismoniy va ruhiy rivojlanishda nuqsoni bo'lgan bolalar ta'lim-tarbiyasi bilan shug'ullanadigan fan"
  },
  {
    question: "Fanning asosiy vazifalari nimalardan iborat?",
    options: ["Bolaning ta'lim-tarbiyasi uchun zarur shart-sharoitni yaratish", "Rivojlantirish diagnostikasi, tashxis qo'yishdan", "Maxsus yordamga muhtoj bolalarning ijtimoiy adaptatsiya, reabilitatsiya, kompensatsiyasini amalga oshirish", "Maxsus muassasalarga bolalarni saralash"],
    correctAnswer: "Bolaning ta'lim-tarbiyasi uchun zarur shart-sharoitni yaratish"
  },
  {
    question: "Maxsus pedagogika fanining qaysi yo'nalishlari mustaqil ajrab chiqgan?",
    options: ["Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika", "Oligofrenopedagogika, oftalmologiya, dermatologiya, logopediya", "Tiflopedagogika, otorinolaringologiya, rinoplastika, surdologiya", "Surdopedagogika, stomatologiya, fiziologiya, patologiya"],
    correctAnswer: "Logopediya, Surdopedagogika, Tiflopedagogika, Oligofrenopedagogika"
  },
  {
    question: "Eshitishda nuqson bo'lgan bolalar tasniflangan qatorni ko'rsating.",
    options: ["Kech kar bo'lib qolgan bolalar", "Zaif eshituvchi, kar bolalar", "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi", "Kar, tangquloqlik"],
    correctAnswer: "Karlik, orttirilgan karlik, zaif eshituvchi, orttirilgan zaif eshituvchi"
  },
  {
    question: "Korreksiya bu:",
    options: ["Nuqsonlarni tuzatish, to'g'rilash", "Rivojlanishda nuqsoni bor bolalarni o'qitish", "Ta'lim-tarbiya olish", "Bir analizator faoliyatini ikkinchisiga yuklatish"],
    correctAnswer: "Nuqsonlarni tuzatish, to'g'rilash"
  },
  {
    question: "Kompensatsiya bu:",
    options: ["Bolalarni ijtimoiy adaptatsiyasini amalga oshirish", "Bir analizator faoliyatini ikkinchisiga yuklatish", "Bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi", "Nuqsonlarni tuzatish, bartaraf etish"],
    correctAnswer: "Bir analizator faoliyatini ikkinchisi bajarishi yoki to'ldirishi"
  },
  {
    question: "Aqliy zaiflikning eng og'ir darajasi bu?",
    options: ["Idiot", "Imbetsil", "Debil", "Organik demensiya"],
    correctAnswer: "Idiot"
  },
  {
    question: "Qaysi fan ko'rishida nuqsoni bo'lgan bolalar bilan shug'ullanadi?",
    options: ["Surdopedagogika", "Logopediya", "Tiflopedagogika", "Oligofrenopedagogika"],
    correctAnswer: "Tiflopedagogika"
  },
  {
    question: "Aqli zaif bolalar ta'limi, tarbiyasi hamda ular taraqqiyotidagi ruhiy, jismoniy nuqsonlarni to'g'rilovchi fan qaysi?",
    options: ["Oligofrenopedagogika", "Tiflopedagogika", "Logopediya", "Surdopedagogika"],
    correctAnswer: "Oligofrenopedagogika"
  },
  {
    question: "Oligofrenopedagogika fani mavzu bahsini aniqlang.",
    options: ["Ko'rishda nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir", "Eshitishda nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir", "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishidir", "Nutqida nuqsoni bor bolalar ta'lim-tarbiyasi va rivojlanishidir"],
    correctAnswer: "Aqlan nuqsonli bolalar ta'lim-tarbiyasi va rivojlanishidir"
  },
  {
    question: "Aqli zaiflikni kelib chiqishiga ko'ra qanday sabablari mavjud?",
    options: ["Endogen, ekzogen", "Polimorf, monomorf", "Ijtimoiy, ekologik", "Sodda, murakkab"],
    correctAnswer: "Endogen, ekzogen"
  },
  {
    question: "Aqliy qoloqlikning asosiy belgilari berilmagan qatorni toping.",
    options: ["Bosh miyada organik buzilishning mavjudligi", "Bilish faoliyatlarining umumiy, chuqur buzilganligi", "Bilish faoliyatlari buzilganligining turg'un xarakterdaligi", "Aqliy jihatdan saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar"],
    correctAnswer: "Aqliy jihatdan saqlangan bo'lib, chuqur nutq kamchiliklari bo'lgan bolalar"
  },
  {
    question: "Salbiy ta'sirlarning bola organizmiga ikki yoshidan keyingi ta'siridan kelib chiqadigan oligofreniya _______ deb yuritiladi.",
    options: ["Demensiya", "Aqliy qoloqlik", "Karlik", "Ruhiy rivojlanishi sustlashgan"],
    correctAnswer: "Demensiya"
  },
  {
    question: "Ta'lim to'g'risidagi qonunning qaysi moddasi IChBga qaratilgan?",
    options: ["68-moddasi", "23-moddasi", "41-moddasi", "55-moddasi"],
    correctAnswer: "23-moddasi"
  },
  {
    question: "Inklyuziv ta'lim bu…",
    options: ["Uyg'unlashgan ta'lim", "Integratsiyalashgan ta'lim", "Tabaqalashgan ta'lim", "Ijtimoiylashgan ta'lim"],
    correctAnswer: "Integratsiyalashgan ta'lim"
  },
  {
    question: "Ta'lim to'g'risidagi qonunning qaysi moddasida ijtimoiy reabilitatsiyaga muhtoj bo'lgan bolalarni (shaxslarni) o'qitish va tarbiyalashga qaratilgan?",
    options: ["56-moddasi", "66-moddasi", "36-moddasi", "46-moddasi"],
    correctAnswer: "66-moddasi"
  },
  {
    question: "Ta'lim to'g'risidagi qonunning qaysi moddasi inklyuziv ta'limga qaratilgan?",
    options: ["21-moddasi", "22-moddasi", "23-moddasi", "20-moddasi"],
    correctAnswer: "23-moddasi"
  },
  {
    question: "Korreksiya bu:",
    options: ["Nuqsonlarni tuzatish, yumshatish, qisqartirish", "Rivojlanishda nuqsoni bo'lgan bolalarni o'qitish usuli", "Ta'lim-tarbiya olish ishlari", "Bir analizator faoliyatini ikkinchisiga yuklatish"],
    correctAnswer: "Nuqsonlarni tuzatish, yumshatish, qisqartirish"
  },
  {
    question: "O'zbekistonda defektolog mutaxassislarini tayyorlash ishlari nechanchi yildan boshlanadi?",
    options: ["1984 yildan", "1967 yildan", "1998 yildan", "2000 yildan"],
    correctAnswer: "1984 yildan"
  },
  {
    question: "Hozirgi kunda anomal bolalar qanday atamalar bilan nomlanadi?",
    options: ["Imkoniyati cheklangan bolalar", "Imkoniyati cheklanmagan bolalar", "Alohida ehtiyojmand bolalar", "Maxsus yordamga muhtoj bolalar"],
    correctAnswer: "Imkoniyati cheklangan bolalar"
  },
  {
    question: "Salamanka deklaratsiyasi qaysi mamlakatda bo'lib o'tgan?",
    options: ["Italiyada", "Angliyada", "Fransiyada", "Ispaniyada"],
    correctAnswer: "Ispaniyada"
  },
  {
    question: "Ijtimoiy reabilitatsiya bu nima?",
    options: ["Rivojlanishida nuqsoni bo'lgan bolalarni jamiyatga moslashtirish", "Nuqsonlarni kompensatsiyalash", "Nuqsonlarni tuzatish, korreksiyalash", "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash"],
    correctAnswer: "Alohida ko'makka muhtoj kishilarni jamiyatga tiklash"
  },
  {
    question: "Pedagogik deontologiyaning muhim sharti qanday munosabatlardan iborat?",
    options: ["Logoped va MTM vrachi, logoped va tarbiyachi, pedagog va logoped o'rtasida o'rnatiladigan o'zaro to'g'ri munosabatlarga", "Tibbiyot hamshirasi va pedagogga", "Pedagog, tarbiyachi va enagaga", "Mudira, hamshira, pedagogga"],
    correctAnswer: "Logoped va MTM vrachi, logoped va tarbiyachi, pedagog va logoped o'rtasida o'rnatiladigan o'zaro to'g'ri munosabatlarga"
  },
  {
    question: "Ta'limda integratsiya bu…",
    options: ["Ta'lim jarayonlarini tabaqalashtirish", "Ta'lim jarayonlarini uyg'unlashtirish", "Ta'lim jarayonlarini takomillashtirish", "Ta'lim jarayonlarini bog'lash"],
    correctAnswer: "Ta'lim jarayonlarini uyg'unlashtirish"
  },
  {
    question: "Nutqning to'g'ri shakllanishi nimalarga bog'liq?",
    options: ["Atrofdagilar nutqiga, tajribaga, to'g'ri nutq muhitiga, ta'lim-tarbiyaga", "Jismoniy rivojlanishga, harakatlanishga", "Axloqiy, aqliy rivojlanishga", "Tug'ma qobiliyatga"],
    correctAnswer: "Atrofdagilar nutqiga, tajribaga, to'g'ri nutq muhitiga, ta'lim-tarbiyaga"
  },
  {
    question: "O'zbekistonda Defektologiya fakulteti qaysi pedagogika institutida birinchi bo'lib tashkil etilgan?",
    options: ["Samarqand pedagogika institutida", "Namangan pedagogika institutida", "Nizomiy nomli TDPUda", "Qo'qon pedagogika institutida"],
    correctAnswer: "Nizomiy nomli TDPUda"
  },
  {
    question: "Defektologik faoliyat fanining tarmoqlari bu…",
    options: ["Surdopedagogika, tiflopedagogika, oligofrenopedagogika, logopediya", "Pedagogika, falsafa, botanika, genetika", "Psixologiya, psixokorreksiya", "Anatomiya, diagnostika, neyropatologiya"],
    correctAnswer: "Surdopedagogika, tiflopedagogika, oligofrenopedagogika, logopediya"
  },
  {
    question: "O'zbekistonda defektologiya fanini rivojlantirishda o'z hissalarini qo'shgan olimlardan qaysilarini bilasiz?",
    options: ["I.M.Salovev, A.S.Vigotskiy", "Q.Abdullaeva, S.Eshonto'raeva", "L.Mo'minova, A.S.Aytmetova", "M.Qahramonova; S.Mikoyan"],
    correctAnswer: "L.Mo'minova, A.S.Aytmetova"
  },
  {
    question: "Qanday bolalarni alohida ko'makka muhtoj bolalar deyiladi?",
    options: ["Ruhiy va jismoniy kamchiligi bor bolalar", "Kasallikka ko'p chalinuvchi bolalar", "Talaffuzida kamchiligi bor bolalar", "RRS bolalar"],
    correctAnswer: "Ruhiy va jismoniy kamchiligi bor bolalar"
  },
  {
    question: "Murakkab nuqson bu…",
    options: ["Ikki va undan ortiq nuqsonlarning birgalikda kuzatilishi", "Kar, ko'r, oligofren", "BSF, raxit, anartriya", "Markaziy va organik xarakterdagi nutq buzilishidir"],
    correctAnswer: "Ikki va undan ortiq nuqsonlarning birgalikda kuzatilishi"
  },
  {
    question: "Reabilitatsiya bu…",
    options: ["Qayta davolash", "Qayta tuzatish", "Qayta tiklash", "Qayta tarbiyalash"],
    correctAnswer: "Qayta tiklash"
  },
  {
    question: "Bolaning nutqni o'zlashtirishi unga qanday imkoniyatlar beradi?",
    options: ["Ongli harakat qilishni", "Xatti-harakatlarni tartibga solish", "To'g'ri yozishni", "To'g'ri tushunishni"],
    correctAnswer: "Ongli harakat qilishni"
  },
  {
    question: "IChB va o'smirlar logopedi qanday reabilitatsiya ishini olib boradi?",
    options: ["Tibbiy reabilitatsiya", "Psixologik reabilitatsiya", "Ijtimoiy reabilitatsiya", "Logopedik reabilitatsiya"],
    correctAnswer: "Logopedik reabilitatsiya"
  },
  {
    question: "Kompleks reabilitatsiya bu…",
    options: ["Tibbiy-pedagogik-psixologik", "Logopedik-ijtimoiy-psixologik", "Pedagogik-psixologik", "Tibbiy-ijtimoiy"],
    correctAnswer: "Tibbiy-pedagogik-psixologik"
  },
  {
    question: "Alohida yordamga muhtoj bolalarning nechta toifasi mavjud?",
    options: ["7 ta toifasi", "6 ta toifasi", "5 ta toifasi", "4 ta toifasi"],
    correctAnswer: "7 ta toifasi"
  },
  {
    question: "Oligofreniyaning nechta darajasi mavjud?",
    options: ["2 ta (orttirilgan va irsiy)", "1 ta (organik demensiya)", "3 ta (debil, imbetsil, idiot)", "Darajalari mavjud emas"],
    correctAnswer: "3 ta (debil, imbetsil, idiot)"
  },
  {
    question: "Oligofreniyaning yengil darajasi bu…",
    options: ["Debillik", "Imbetsillik", "Idiotizm", "Shizofreniya"],
    correctAnswer: "Debillik"
  },
  {
    question: "Oligofreniyaning o'rta darajasi bu…",
    options: ["Debillik", "Idiotizm", "Shizofreniya", "Imbetsillik"],
    correctAnswer: "Imbetsillik"
  },
  {
    question: "Oligofreniyaning og'ir darajasi bu…",
    options: ["Idiotizm", "Imbetsillik", "Shizofreniya", "Debillik"],
    correctAnswer: "Idiotizm"
  },
  {
    question: "Karlik bu…",
    options: ["Bosh miyaning organik jarohatlanishi natijasida eshitish faoliyatining turg'un buzilishi", "Ichki quloq patologiyasi", "Tashqi quloq patologiyasi", "Broka va Vernike zonalarining zararlanishi"],
    correctAnswer: "Bosh miyaning organik jarohatlanishi natijasida eshitish faoliyatining turg'un buzilishi"
  },
  {
    question: "Inklyuziv ta'limning nechta printsipi mavjud?",
    options: ["7 prinsipi", "6 prinsipi", "8 prinsipi", "5 prinsipi"],
    correctAnswer: "7 prinsipi"
  },
  {
    question: "Aqli zaiflikning eng og'ir darajasi bu:",
    options: ["Idiot", "Imbetsillik", "Debil", "Ruhiy rivojlanishi sust"],
    correctAnswer: "Idiot"
  },
  {
    question: "Ruhiy rivojlanishi sust bolaning eng og'ir shakli qaysi?",
    options: ["Somatogen", "Serebral", "Konstitutsional", "Psixogen"],
    correctAnswer: "Serebral"
  },
  {
    question: "Hozirgi kunda anomal bolalar qanday atamalar bilan nomlanadi?",
    options: ["IChB, alohida ehtiyojli, maxsus yordamga muhtoj bolalar", "Astenik va isterik, psixogen bolalar", "Maxsus yordamga muhtoj anomal bolalar", "Indigo va mundirkin bolalar"],
    correctAnswer: "IChB, alohida ehtiyojli, maxsus yordamga muhtoj bolalar"
  },
  {
    question: "Psixik jarayonlar — nutq ishtirokida shakllanadi degan fikr muallifi?",
    options: ["A.R.Luriya", "L.S.Vigotskiy", "N.A.Rau tomonidan", "T.A.Vlasova tomonidan"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Nutq buzilishlarining dastlabki tasnifini ishlab chiqqan muallif bu…",
    options: ["L.S.Vigotskiy", "N.A.Rau", "A.Kussmaul", "T.A.Vlasova"],
    correctAnswer: "A.Kussmaul"
  },
  {
    question: "Logopsixologiyaning nazariy asoslari qaysi olim tadqiqotlariga asoslanadi?",
    options: ["L.S.Vigotskiy", "N.A.Rau", "T.A.Vlasova", "E.I.Leongard"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Mujassam nuqsonlar ichida eng ko'p tarqalgan nuqson bu…",
    options: ["Nutqiy nuqson", "Sensor nuqson", "Aqliy nuqson", "BSF"],
    correctAnswer: "Sensor nuqson"
  },
  {
    question: "Inklyuziv ta'lim joriy qilingan maktablarda kimlar faoliyat yuritadi?",
    options: ["Logoped-defektolog, ortaped, tyutor o'qituvchilar", "Logoped-defektolog, pediatr, tyutor o'qituvchilar", "Logoped-defektolog, psixolog, tyutor o'qituvchilar", "Logoped-defektolog, lingvist, tyutor o'qituvchilar"],
    correctAnswer: "Logoped-defektolog, psixolog, tyutor o'qituvchilar"
  },
  {
    question: "Logopedning kasbiy faoliyatiga…",
    options: ["Tashxis qilish, korreksion-rivojlantiruvchi ish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi", "Tashxis qilish, korreksion-rivojlantiruvchi ishlar kiradi", "Tashxis qilish, korreksion-rivojlantiruvchi ish, maslahat ishlari kiradi", "Tashxis qilish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi"],
    correctAnswer: "Tashxis qilish, korreksion-rivojlantiruvchi ish, tashkiliy-metodik, maslahat va profilaktik ishlar kiradi"
  },
  {
    question: "'Aqliy me'yorida bo'lmagan bolalarning tarbiyasi, gigienasi va axloqiy davosi' asarining muallifi…",
    options: ["E.Segen", "B.Mennel", "A.Fuks", "R.Vays"],
    correctAnswer: "E.Segen"
  },
  {
    question: "'Ehtimol, insoniyat ertami-kechmi ko'rlik, karlik, aqli zaiflikni yengadi. Ammo ularni biologik va tibbiyot tomonidan ko'ra, ijtimoiy va pedagogik tomondan ancha ilgari yengadi' — deb ta'kidlaydi…",
    options: ["A.N.Graborov", "M.Montessori", "L.S.Vigotskiy", "G.I.Rossolimo"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "'O'zbekiston Respublikasining nogironlarni reabilitatsiya qilish bo'yicha 1996-2000-yillarga mo'ljallangan davlat dasturi' qachon qabul qilingan?",
    options: ["1995 yil 11-noyabrda qabul qilingan", "1995 yil 12-noyabrda qabul qilingan", "1995 yil 13-noyabrda qabul qilingan", "1995 yil 17-noyabrda qabul qilingan"],
    correctAnswer: "1995 yil 11-noyabrda qabul qilingan"
  },
  {
    question: "Davlat statistika ma'lumotlariga ko'ra 2015 yilda 31 million aholining necha foizida nogironlik qayd etilgan?",
    options: ["1,89%", "1,23%", "1,88%", "1,98%"],
    correctAnswer: "1,88%"
  },
  {
    question: "Diskriminatsiya nima?",
    options: ["Ruhiy charchoq", "Shol bo'lib qolish", "Charchoq", "Odamlarni ajratish"],
    correctAnswer: "Odamlarni ajratish"
  },
  {
    question: "Markazlashtirilmagan bo'lishi tamoyillarining mazmuni nechta aspekt yordamida ifodalanadi?",
    options: ["2 ta", "1 ta", "7 ta", "5 ta"],
    correctAnswer: "5 ta"
  },
  {
    question: "Garchi nogironlarni ijtimoiy himoya qilish tizimi ushbu qonunlar qabul qilinishidan oldin mavjud bo'lsa-da, tizim faqat nechanchi yilda rasmiylashtiriladi?",
    options: ["1995 yil", "1997 yil", "1996 yil", "2000 yil"],
    correctAnswer: "1995 yil"
  },
  {
    question: "Kar bolalar kim tomonidan guruhlarga bo'lib o'qitish tavsiya etilgan?",
    options: ["Samuel Geynike", "Sharl Mishel Epe", "V.Boskis", "Gerolamo Kardano"],
    correctAnswer: "Sharl Mishel Epe"
  },
  {
    question: "'Biz nuqsonni emas, balki u yoki bu nuqsonli bolani o'rganishimiz kerak' — ushbu so'zlar kimga tegishli?",
    options: ["Lev Semyonovich Vigotskiy", "Alisher Navoiy", "Abu Rayhon Muhammad ibn Ahmad al-Beruniy", "Najmiddin Kubro"],
    correctAnswer: "Lev Semyonovich Vigotskiy"
  },
  {
    question: "Inklyuziv ta'lim bu —",
    options: ["Rivojlanishida nuqsoni mavjud bo'lgan bolalarning ta'lim olishi uchun maxsus muassasalarda ta'lim jarayonini tashkil etish", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning uy ta'limiga jalb etish", "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning tibbiyot punktlariga jalb etish"],
    correctAnswer: "Rivojlanishida nuqsoni mavjud bo'lgan bolalarning sog'lom tengdoshlari bilan bir qatorda ta'lim olishi"
  },
  {
    question: "Inklyuziv so'zi ingliz tilidan olingan bo'lib inclusive, inclusion — ya'ni … ma'nosini anglatadi.",
    options: ["Uyg'unlashmoq", "O'rin almashmoq", "Do'stlashmoq", "Imkoniyat bermoq"],
    correctAnswer: "Uyg'unlashmoq"
  },
  {
    question: "Inklyuziv ta'limning birinchi tamoyilini ko'rsating.",
    options: ["Inklyuziv ta'limning e'tirof etilishi", "Inklyuziv ta'limning barcha uchun ochiq bo'lishi tamoyili", "Bog'lanishning mavjud bo'lishi tamoyili", "Markazlashtirilmagan bo'lishi tamoyili"],
    correctAnswer: "Inklyuziv ta'limning barcha uchun ochiq bo'lishi tamoyili"
  },
  {
    question: "Inklyuziv ta'limning ikkinchi tamoyilini ko'rsating.",
    options: ["Inklyuziv ta'limning barcha uchun ochiq bo'lishi tamoyili", "Bog'lanishning mavjud bo'lishi tamoyili", "Markazlashtirilmagan bo'lishi tamoyili", "Inklyuziv ta'limning e'tirof etilishi"],
    correctAnswer: "Inklyuziv ta'limning barcha uchun ochiq bo'lishi tamoyili"
  },
  {
    question: "Inklyuziv ta'limning uchinchi tamoyilini ko'rsating.",
    options: ["Bog'lanishning mavjud bo'lishi tamoyili", "Inklyuziv ta'limda moslashuvchanlik tamoyili", "Malakaviylik tamoyili", "Inklyuziv ta'limning e'tirof etilishi tamoyili"],
    correctAnswer: "Bog'lanishning mavjud bo'lishi tamoyili"
  },
  {
    question: "Inklyuziv ta'limning to'rtinchi tamoyilini ko'rsating.",
    options: ["Markazlashtirilmagan bo'lishi tamoyili", "Inklyuziv ta'limda kompleks yondashishi tamoyili", "Inklyuziv ta'limda moslashuvchanlik tamoyili", "Malakaviylik tamoyili"],
    correctAnswer: "Inklyuziv ta'limda kompleks yondashishi tamoyili"
  },
  {
    question: "Inklyuziv ta'limning beshinchi tamoyilini ko'rsating.",
    options: ["Inklyuziv ta'limda kompleks yondashishi tamoyili", "Inklyuziv ta'limning e'tirof etilishi", "Inklyuziv ta'limning barcha uchun ochiq bo'lishi tamoyili", "Bog'lanishning mavjud bo'lishi tamoyili"],
    correctAnswer: "Inklyuziv ta'limda kompleks yondashishi tamoyili"
  },
  {
    question: "Inklyuziv ta'limning oltinchi tamoyilini ko'rsating.",
    options: ["Inklyuziv ta'limda moslashuvchanlik tamoyili", "Bog'lanishning mavjud bo'lishi tamoyili", "Markazlashtirilmagan bo'lishi tamoyili", "Inklyuziv ta'limda kompleks yondashishi tamoyili"],
    correctAnswer: "Inklyuziv ta'limda moslashuvchanlik tamoyili"
  },
  {
    question: "… umumta'lim jarayonini rivojlantiradi va barcha bolalarga mos bo'lgan ta'limni joriy qiladi.",
    options: ["Inklyuziv ta'lim", "Maxsus ta'lim", "O'rta ta'lim", "Maktabgacha ta'lim"],
    correctAnswer: "Inklyuziv ta'lim"
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







