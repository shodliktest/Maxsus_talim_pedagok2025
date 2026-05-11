// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quizmarkerbot_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "” Imij” qaysi tildan olingan",
    options: ["fransuz", "ingliz", "koreys", "yunoncha"],
    correctAnswer: "ingliz"
  },
  {
    question: "“ Imij” so’zi o’zbek tiliga qanday tarjima qilinadi",
    options: ["omma, birlashma", "yangilik", "qiyofa ,tasvir", "ommaviylik"],
    correctAnswer: "qiyofa ,tasvir"
  },
  {
    question: "Imij turlari ko’rsatilgan qatorni toping",
    options: ["korporativ imij", "individual imij va korporative imij", "individual va guruhli imij", "ommaviy imij"],
    correctAnswer: "individual va guruhli imij"
  },
  {
    question: "F.Jevkinz imijning nechta turini taklif qilgan",
    options: ["5ta", "6ta", "4ta", "7ta"],
    correctAnswer: "6ta"
  },
  {
    question: "F.Jevkinz ta’rifi bo’yicha “ chetdan tashlangan nazarga xos bo’lgan imij” qaysi javobda to’g’ri keltirilgan",
    options: ["ko’zgusimon imij", "maqbul imij", "joriy imij", "korporative imiji"],
    correctAnswer: "ko’zgusimon imij"
  },
  {
    question: "F.Jevkinz ta’rifi bo’yicha “bizning o’zimiz haqimizdagi tasavvurimizga xos bo’lgan imij” qaysi javobda to’g’ri keltirilgan",
    options: ["ko’zgusimon imij", "maqbul imij", "joriy imij", "korporative imiji"],
    correctAnswer: "ko’zgusimon imij"
  },
  {
    question: "F.Jevkinz ta’rifi bo’yicha “shaxs nimaga intilayotganini aks ettiradigan imij” qaysi javobda to’g’ri keltirilgan",
    options: ["ko’zgusimon imij", "maqbul imij", "joriy imij", "korporative imiji"],
    correctAnswer: "maqbul imij"
  },
  {
    question: "F.Jevkinz ta’rifi bo’yicha “tashkilotning ayrim bo’linmalari yoki uning ish natijalariga emas,balki umuman tashkilotning imiji ” qaysi javobda to’g’ri keltirilgan",
    options: ["ko’zgusimon imij", "maqbul imij", "joriy imij", "korporative imiji"],
    correctAnswer: "korporative imiji"
  },
  {
    question: "F.Jevkinz ta’rifi bo’yicha “yagona korporotsiya o’rnida bir qancha mustaqil tuzilmalar mavjud bo’lgan holda yuzaga keladigan imij ” qaysi javobda to’g’ri keltirilgan",
    options: ["ko’zgusimon imij", "maqbul imij", "joriy imij", "ko’p sonli imij"],
    correctAnswer: "ko’p sonli imij"
  },
  {
    question: "Ingliz olimasi E.Sempson shaxsiy imij to’g’risida so’z yuritar ekan,tashqi va ichki omillar uyg’unligiga qarab, imijni necha turga ajratadi",
    options: ["2ta", "3ta", "4ta", "5ta"],
    correctAnswer: "3ta"
  },
  {
    question: "Qaysi boshqaruv turida “tashabbuskorlik, yuqori kasbiy tayyorgarlik, tashkilotchilik va ishchanlik” asosiy o’rinni egallaydi",
    options: ["Amerikacha boshqaruv", "Yaponcha boshqaruv", "Fransuzcha boshqaruv", "Koreyscha boshqaruv"],
    correctAnswer: "Amerikacha boshqaruv"
  },
  {
    question: "Qaysi boshqaruv turida “ har bir hodimga g’amxo’rlik, ishlab chiqarishning ijtimoiy xavfsizligi” asosiy o’rinni egallaydi",
    options: ["Amerikacha boshqaruv", "Yaponcha boshqaruv", "Fransuzcha boshqaruv", "Koreyscha boshqaruv"],
    correctAnswer: "Yaponcha boshqaruv"
  },
  {
    question: "Qaysi boshqaruv turida “boshqaruv tizimini shakllantirish uchun insoniy madaniyat, milliy , tarixiy an’ana usullari” asosiy o’rinni egallaydi",
    options: ["Amerikacha boshqaruv", "Yaponcha boshqaruv", "Fransuzcha boshqaruv", "Koreyscha boshqaruv"],
    correctAnswer: "Koreyscha boshqaruv"
  },
  {
    question: "Nodavlat MTTlarining faoliyatini litsenziyalash kim organ tomonidan amalga oshiriladi?",
    options: ["Davlat inspeksiyasi tomonidan", "Vazirlar Mahkamasi tomonidan", "Maktabgacha ta’lim vazirligi tomonidan", "Sog‘liqni saqlash vazirligi tomonidan"],
    correctAnswer: "Maktabgacha ta’lim vazirligi tomonidan"
  },
  {
    question: "MTTda kimlar uslubchi bo’lishi mumkin? pedagoglik ish stajiga ega bo’lganlar.",
    options: ["oliy pedagogik ma’lumotga (maktabgacha ta’lim yo’nalishi) ega bo’lgan kamida 3 yil", "oliy pedagogik ma’lumotga (maktabgacha ta’lim yo’nalishi) ega bo’lganlar", "o’rta maxsus ma’lumotga ega bo’lganlar", "kamida 3 yil pedagoglik ish stajiga ega bo’lganlar."],
    correctAnswer: "oliy pedagogik ma’lumotga (maktabgacha ta’lim yo’nalishi) ega bo’lgan kamida 3 yil"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi uch yoshdan yetti yoshgacha bo‘lgan bolalar guruhlari qancha miqdordagi bolalarni qamrab oladi?",
    options: ["ko‘pi bilan yigirma besh nafar bola", "ko‘pi bilan o‘ttiz nafar bola", "ko‘pi bilan o’n sakkiz nafar bola", "ko‘pi bilan o‘ttiz besh nafar bola"],
    correctAnswer: "ko‘pi bilan yigirma besh nafar bola"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi bolalar qisqa vaqt bo‘ladigan guruhlar qancha miqdordagi bolalarni qamrab oladi?",
    options: ["ko‘pi bilan yigirma besh nafar bola", "ko‘pi bilan o’n sakkiz nafar bola", "ko‘pi bilan o‘ttiz nafar bola", "ko‘pi bilan o‘ttiz besh nafar bola"],
    correctAnswer: "ko‘pi bilan yigirma besh nafar bola"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi turli yoshdagilar guruhlarida qancha miqdordagi bolalar qamrab olinadi?",
    options: ["ko‘pi bilan o‘ttiz nafar bola", "ko‘pi bilan yigirma besh nafar bola", "ko‘pi bilan o’n sakkiz nafar bola", "ko‘pi bilan o‘ttiz besh nafar bola"],
    correctAnswer: "ko‘pi bilan o’n sakkiz nafar bola"
  },
  {
    question: "O‘zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuni nechta bob, nechta moddadan iborat?",
    options: ["11 bob, 58 moddadan iborat", "11 bob, 75 moddadan iborat", "12 bob, 58 moddadan iborat", "11 bob, 60 moddadan iborat"],
    correctAnswer: "11 bob, 58 moddadan iborat"
  },
  {
    question: "O‘zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonunda “Maktabgacha bo‘lgan yosh” tushunchasiga berilgan ta’rifni toping. o‘rta ta’lim tashkilotlarida ta’lim berish boshlangan paytga qadar bo‘lgan yoshi. individual imkoniyatlarini hisobga olgan holda ta’lim va tarbiya olishi uchun teng imkoniyatlarni ta’minlaydigan jarayon huquqi amalga oshirilishini ta’minlovchi yosh davri.",
    options: ["maktabgacha bo‘lgan yosh - bolalarning tug‘ilgan paytidan etti yoshgacha, to ularga umumiy", "maktabgacha bo‘lgan yosh - bolalarning alohida ta’lim olishga bo‘lgan ehtiyojlarini hamda", "maktabgacha bo‘lgan yosh - bolalarga ta’lim va tarbiya berishga, ularni intellektual, ma’naviyaxloqiy, etik, estetik va jismoniy jihatdan rivojlantirish ko‘zda tutilgan yosh davri.", "maktabgacha bo‘lgan yosh - har bir bolaning maktabgacha ta’lim va tarbiya olishga bo‘lgan"],
    correctAnswer: "maktabgacha bo‘lgan yosh - bolalarning tug‘ilgan paytidan etti yoshgacha, to ularga umumiy"
  },
  {
    question: "Aniq maqsadli hamda ijtimoiy-tarixiy tajriba asosida yosh avlodni har tomonlama kamol toptirishga, ularning ongini, ma’naviy-axloqiy qadriyatlar va dunyoqarashini shakllantirishga qaratilgan tizimli jarayon?",
    options: ["Tarbiya", "Malaka", "Mutaxassislik", "Ta’lim"],
    correctAnswer: "Tarbiya"
  },
  {
    question: "Ta’lim oluvchilarga chuqur nazariy bilim, malakalar va amaliy ko‘nikmalar berishga, shuningdek ularning umumta’lim va kasbiy bilim, malaka hamda ko‘nikmalarini shakllantirishga, qobiliyatini rivojlantirishga qaratilgan tizimli jarayon?",
    options: ["Tarbiya", "Ta’lim", "Malaka", "Mutaxassislik"],
    correctAnswer: "Ta’lim"
  },
  {
    question: "Yagona hududda birlashtirilgan o‘quv binolarini, ilmiy-tadqiqot institutlarini (markazlarini), ishlab chiqarish majmualari va texnoparklarni, ta’lim-tarbiya jarayoni ishtirokchilarining vaqtincha yashash joylarini, laboratoriyalarni, axborot-resurs markazlarini (kutubxonalarni), sport inshootlarini, umumiy ovqatlanish obyektlarini o‘z ichiga olgan binolar hamda inshootlar majmuidan iborat bo‘lgan, o‘quv jarayoni, ma’naviy-axloqiy tarbiyaning yuqori samaradorligini ta’minlaydigan ta’lim-tarbiya muhiti?",
    options: ["Malaka", "Ta’lim kampusi", "Tarbiya", "Ta’lim"],
    correctAnswer: "Ta’lim kampusi"
  },
  {
    question: "Ta’lim oluvchilar, voyaga yetmagan ta’lim oluvchilarning ota-onalari yoki boshqa qonuniy vakillari, pedagog xodimlar va ularning vakillari kimlar?",
    options: ["Nodavlat ta’lim tashkiloti", "Ta’lim-tarbiya jarayoni ishtirokchilari", "Davlat ta’lim muassasasi", "Xususiy ta’lim muassasasi"],
    correctAnswer: "Ta’lim-tarbiya jarayoni ishtirokchilari"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuni qachondan boshlab kuchga kirishi belgilangan?",
    options: ["Ushbu Qonun imzolangan kundan e’tiboran kuchga kiradi", "Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran olti oy o‘tgach kuchga kiradi", "Qonunchilik palatasi tomonidan qabul qilingan kundan e’tiboran kuchga kiradi", "Senat tomonidan ma’qullangan kundan e’tiboran kuchga kiradi"],
    correctAnswer: "Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran olti oy o‘tgach kuchga kiradi"
  },
  {
    question: "Ta’lim sohasida davlat va xususiy sheriklarning muayyan muddatga yuridik jihatdan rasmiylashtirilgan, davlat-xususiy sheriklik loyihasini amalga oshirish uchun o‘z resurslarini birlashtirishiga asoslangan hamkorlik qanday nomlanadi?",
    options: ["Uyushgan faoliyat", "Birgalikda faoliyat yuritish", "Ta’lim sohasidagi davlat-xususiy sheriklik", "Konsensus"],
    correctAnswer: "Ta’lim sohasidagi davlat-xususiy sheriklik"
  },
  {
    question: "Ta’lim sohasidagi davlat-xususiy sheriklik qaysi me’yoriy-huquqiy hujjat prinsiplari, normalari va qoidalariga muvofiq amalga oshiriladi?",
    options: ["“Ta’lim to’g’risida”gi O‘zbekiston Respublikasi Qonuni", "“Davlat-xususiy sheriklik to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni", "O’zbekiston Respublikasining Byudjet Kodeksi", "O’zbekiston Respublikasining Yer kodeksi"],
    correctAnswer: "“Davlat-xususiy sheriklik to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni"
  },
  {
    question: "MTTda kim pedagogik kengash raisi hisoblanadi?",
    options: ["Direktor", "Tarbiyachi", "Uslubchi", "Xo‘jalik ishlari bo‘yicha mudira o‘rinbosari"],
    correctAnswer: "Direktor"
  },
  {
    question: "Boshqaruv uslubining tanlanishi qanday omillarga bog'liq?",
    options: ["Faqat rahbarning shaxsiy xohishiga.", "Tashkilotning madaniyati va faoliyatining xususiyatlariga.", "Xodimlar o'rtasidagi munosabatlarga", "Individual maqsadlarga"],
    correctAnswer: "Tashkilotning madaniyati va faoliyatining xususiyatlariga."
  },
  {
    question: "Qaysi boshqaruv uslubi ko'proq xodimlar o'rtasidagi erkin fikr almashinuvi va qaror qabul qilishda jamoaviy yondashuvni rag'batlantiradi?",
    options: ["Avtoritar boshqaruv.", "Demokratik boshqaruv.", "Liberal boshqaruv.", "Moslashuvchan boshqaruv"],
    correctAnswer: "Demokratik boshqaruv."
  },
  {
    question: "\"Qattiq ierarxiya, buyruqlarni amalga oshirishga qat'iy rioya qilish\" xususiyatiga qaysi boshqaruv uslubi mos keladi?",
    options: ["Avtoritar boshqaruv.", "Demokratik boshqaruv.", "Liberal boshqaruv.", "Moslashuvchan boshqaruv"],
    correctAnswer: "Avtoritar boshqaruv."
  },
  {
    question: "Qaysi boshqaruv uslubi xodimlar va rahbarlar o'rtasida ochiq muloqot va samarali hamkorlikni ta'minlaydi?",
    options: ["Avtoritar boshqaruv.", "Demokratik boshqaruv.", "Liberal boshqaruv.", "Moslashuvchan"],
    correctAnswer: "Demokratik boshqaruv."
  },
  {
    question: "Boshqaruvning qanday uslubi xodimlarning mustaqilligi va erkinligini maksimal darajada oshirishga qaratilgan?",
    options: ["Moslashuvchan boshqaruv", "Avtoritar boshqaruv.", "Demokratik boshqaruv", "Liberal boshqaruv."],
    correctAnswer: "Liberal boshqaruv."
  },
  {
    question: "Rahbarlar jamoaga faqat yo'l-yo'riq ko'rsatadi va qarorlarni xodimlar bilan birgalikda qabul qilishadi, bu qanday boshqaruv uslubiga tegishli?",
    options: ["Avtoritar boshqaruv.", "Demokratik boshqaruv.", "Liberal boshqaruv.", "Moslashuvchan boshqaruv"],
    correctAnswer: "Demokratik boshqaruv."
  },
  {
    question: "\"Rahbarlar faqat ko'rsatma beradi va barcha qarorlarni yakka-hukmron ravishda qabul qiladi\" uslubi qaysi boshqaruv uslubiga tegishli?",
    options: ["Avtoritar boshqaruv.", "Demokratik boshqaruv.", "Moslashuvchan boshqaruv", "Liberal boshqaruv."],
    correctAnswer: "Avtoritar boshqaruv."
  },
  {
    question: "Tashkilotda barcha xodimlar o'z ishlarini o'zi tanlaydi va rahbar faqat jarayonni kuzatib boradi. Bu qanday boshqaruv uslubiga mos keladi?",
    options: ["Avtoritar boshqaruv.", "Moslashuvchan boshqaruv", "Demokratik boshqaruv.", "Liberal boshqaruv."],
    correctAnswer: "Liberal boshqaruv."
  },
  {
    question: "Demokratik boshqaruvda qarorlar qanday qabul qilinadi?",
    options: ["Hamma o’z bilgan ishini qiladi", "Faoliyatni faqat rahbarlar boshqaradi.", "Qarorlar xodimlar va rahbarlar o'rtasida muhokama qilinadi va jamoaviy qaror qabul qilinadi.", "Qarorlar xodimlar tomonidan yakka o'zi qabul qilinadi."],
    correctAnswer: "Qarorlar xodimlar va rahbarlar o'rtasida muhokama qilinadi va jamoaviy qaror qabul qilinadi."
  },
  {
    question: "Xodimlarning shaxsiy va moddiy manfaatlarini nazarda tutgan holda, boshqaruvning qaysi usulidan foydalanish ish samaradorligini oshirishga ta’sir ko‘rsatadi?",
    options: ["Uning yaxshi xususiyatlarini aytib maqtash", "Iqtisodiy usul", "Maqtov yorlig’i taqdim etish", "Salomatligi bilan qiziqish"],
    correctAnswer: "Iqtisodiy usul"
  },
  {
    question: "Rahbarlik uslublariga ko‘ra rahbarlar qanday turlarga ajratiladi?",
    options: ["Liberal, demokratik", "Avtokratik, liberal, demokratik", "Avtoritar, demokratik", "Demokratik, uslubiy"],
    correctAnswer: "Avtokratik, liberal, demokratik"
  },
  {
    question: "\"...-bu tanlov, qaror qabul qilish va uning bajarilishini nazorat qilish jarayonidir\". Nuqtalar o‘rniga mos keluvchi to‘g‘ri javobni toping.",
    options: ["Buxgalter", "Boshqaruv", "Faylasuf", "Tashkilotchi"],
    correctAnswer: "Boshqaruv"
  },
  {
    question: "Jamoada sog‘lom ruhiy iqlim yaratish uchun rahbar xodimning xususiyatlari borasida nimaga e’tibor qaratishi lozim?",
    options: ["Xodimning kiyinish uslubiga", "Yoshi, qobiliyati, malakasi, iste’dodiga", "Korxonaning tashqi qarzlariga", "Inflyatsiya darajasiga"],
    correctAnswer: "Yoshi, qobiliyati, malakasi, iste’dodiga"
  },
  {
    question: "Boshqaruv uslubining ta’rifi qaysi? usullari, yo‘llari majmuasi",
    options: ["...-bu alohida shaxslar va guruhlarning tashkilot muvaffaqiyatiga ta’siri", "tashkiliy xulq-atvorni boshqarish jarayonida yuzaga chiqadigan muammolarni hal qilish", "...-bu tashkilotning maksimal foyda olishi", "...-bu xodimlar o‘rtasidagi kelishmovchiliklar"],
    correctAnswer: "tashkiliy xulq-atvorni boshqarish jarayonida yuzaga chiqadigan muammolarni hal qilish"
  },
  {
    question: "Boshqaruv jarayonida u yoki bu masalani hal qilishda rahbarning o‘ziga xos yondoshishi qanday ataladi?",
    options: ["Boshqaruv usuli", "Rahbarning ish uslubi", "Boshqaruv funksiyalari", "Boshqaruv vazifalari"],
    correctAnswer: "Rahbarning ish uslubi"
  },
  {
    question: "Rahbarning ish uslubi deb nimaga aytiladi?",
    options: ["Boshqaruv jarayonida u yoki bu masalani hal qilishda rahbarning o‘ziga xos yondashishiga", "Alohida shaxslar va guruhlarning tashkilot muvaffaqiyatiga ta’siriga", "Tashkilotning maksimal foyda olishiga", "Xodimlar o‘rtasidagi kelishmovchiliklarga"],
    correctAnswer: "Boshqaruv jarayonida u yoki bu masalani hal qilishda rahbarning o‘ziga xos yondashishiga"
  },
  {
    question: "Avtokratik rahbarlarga xos birinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? fikrini hisobga olmaydi",
    options: ["Boshqarish funksiyalarini jamoa fikri bilan hisoblashib amalga oshiradi", "Buyruq chiqarish, qaror qabul qilish, xodimlarga jazo berish yoki rag‘batdantirishda jamoa", "Irodasiz, tashabbussiz bo‘ladi", "O‘z zimmasiga mas’uliyat olishni yoqtirmaydi"],
    correctAnswer: "Buyruq chiqarish, qaror qabul qilish, xodimlarga jazo berish yoki rag‘batdantirishda jamoa"
  },
  {
    question: "Korxonada avtokratik rahbarlarga xos rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? qo‘yadi ular bilan maslahatlashadi, ijobiy tomonlarini inobatga oladi",
    options: ["Irodasiz, tashabbussiz bo‘ladi", "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab", "O‘z zimmasiga mas’uliyat olishni yoqtirmaydi", "Ishlab chiqarishni boshqarishga xodimlarni jalb qiladi, ularning bildirgan fikriga quloq soladi,"],
    correctAnswer: "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab"
  },
  {
    question: "Avtokratik rahbarlarga xos rahbarlik uslubi quyidagi qaysi javobda to‘g‘ri berilgan?",
    options: ["Ishni o‘z holiga tashlab qo‘yadi", "Barcha bilan barobar va samimiy munosabatda bo‘ladi, ustunligini bildirmaydi", "Irodasiz, tashabbussiz bo‘ladi", "O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi"],
    correctAnswer: "O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida avtokratik rahbarlarga xos rahbarlik uslubi to‘g‘ri berilgan?",
    options: ["Idoraga nisbatan qat’iy bo‘lishdan hayiqadi", "O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi", "Buyruq berish yo‘li bilan emas, balki ishontirish uslubida ish tutadi", "Irodasiz, tashabbussiz bo‘ladi"],
    correctAnswer: "O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi"
  },
  {
    question: "Avtokratik rahbarlarga muvofiq keluvchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? va ishchan muhitni yaratadi",
    options: ["O‘zini haddan tashqari ehtiyot qiladi", "Bo‘ysunuvchilarning shaxsiy tashabbusini, ijodiy faoliyatini rivojlantiradi va jamoada o‘rtoqlik", "Muttasil buyruq berishga, hammani o‘z istaklariga so‘zsiz bo‘ysundirishga intiladi", "Irodasiz, tashabbussiz bo‘ladi"],
    correctAnswer: "Muttasil buyruq berishga, hammani o‘z istaklariga so‘zsiz bo‘ysundirishga intiladi"
  },
  {
    question: "Avtokratik rahbarlarga xos ikkinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? rahbarlik g‘ururi balandligi, o‘zini katta tutishi sezilib turadi",
    options: ["Biron xodim bilan ham aloqani buzishni istamaydi", "Ko‘p gapirishni yoqtirmaydi, lekin bo‘ysunuvchilari bilan muomalada bo‘lganda uning", "Suiste’mollarga bevosita yo‘l qo‘ymasa ham o‘zini bilmaslikka soladi", "Irodasiz, tashabbussiz bo‘ladi"],
    correctAnswer: "Ko‘p gapirishni yoqtirmaydi, lekin bo‘ysunuvchilari bilan muomalada bo‘lganda uning"
  },
  {
    question: "Avtokratik rahbarlarga xos uchinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan?",
    options: ["Talabchan emas, sust nazorat qiladi", "O‘ziga bo‘ysunuvchilari oldida qovog‘i solingan kayfiyatda bo‘ladi", "Biron xodim bilan ham aloqani buzishni istamaydi", "Irodasiz, tashabbussiz bo‘ladi"],
    correctAnswer: "O‘ziga bo‘ysunuvchilari oldida qovog‘i solingan kayfiyatda bo‘ladi"
  },
  {
    question: "Liberal rahbarlarga xos birinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? fikrini hisobga olmaydi hisoblashib amalga oshiradi qo‘yadi",
    options: ["Buyruq chiqarish, qaror qabul qilish, xodimlarga jazo berish yoki rag‘batdantirishda jamoa", "Boshqarish funksiyalarini jamoa fikri bilan", "Irodasiz, tashabbussiz bo‘ladi", "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab"],
    correctAnswer: "Irodasiz, tashabbussiz bo‘ladi"
  },
  {
    question: "Liberal rahbarlarga xos ikkinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? qo‘yadi ular bilan maslahatlashadi, ijobiy tomonlarini inobatga oladi",
    options: ["O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab", "O‘z zimmasiga mas’uliyat olishni yoqtirmaydi", "Ishlab chiqarishni boshqarishga xodimlarni jalb qiladi, ularning bildirgan fikriga quloq soladi,", "O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi"],
    correctAnswer: "O‘z zimmasiga mas’uliyat olishni yoqtirmaydi"
  },
  {
    question: "Liberal rahbarlarga xos uchinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan?",
    options: ["O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi", "Barcha bilan barobar va samimiy munosabatda bo‘ladi, ustunligini bildirmaydi", "Ishni o‘z holiga tashlab qo‘yadi", "O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi"],
    correctAnswer: "Ishni o‘z holiga tashlab qo‘yadi"
  },
  {
    question: "Liberal rahbarlarga xos to’rtinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan?",
    options: ["O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi", "Idoraga nisbatan qat’iy bo‘lishdan hayiqadi", "Buyruq berish yo‘li bilan emas, balki ishontirish uslubida ish tutadi", "Muttasil buyruq berishga, hammani o‘z istaklariga so‘zsiz bo‘ysundirishga intiladi"],
    correctAnswer: "Idoraga nisbatan qat’iy bo‘lishdan hayiqadi"
  },
  {
    question: "Liberal rahbarlarga xos beshinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? va ishchan muhitni yaratadi rahbarlik g‘ururi balandligi, o‘zini katta tutishi sezilib turadi",
    options: ["Muttasil buyruq berishga, hammani o‘z istaklariga so‘zsiz bo‘ysundirishga intiladi", "Bo‘ysunuvchilarning shaxsiy tashabbusini, ijodiy faoliyatini rivojlantiradi va jamoada o‘rtoqlik", "O‘zini haddan tashqari ehtiyot qiladi", "Ko‘p gapirishni yoqtirmaydi, lekin bo‘ysunuvchilari bilan muomalada bo‘lganda uning"],
    correctAnswer: "O‘zini haddan tashqari ehtiyot qiladi"
  },
  {
    question: "Liberal rahbarlarga xos oltinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? rahbarlik g‘ururi balandligi, o‘zini katta tutishi sezilib turadi qo‘yadi",
    options: ["Ko‘p gapirishni yoqtirmaydi, lekin bo‘ysunuvchilari bilan muomalada bo‘lganda uning", "Biron xodim bilan ham aloqani buzishni istamaydi", "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab", "O‘ziga bo‘ysunuvchilari oldida qovog‘i solingan kayfiyatda bo‘ladi"],
    correctAnswer: "Biron xodim bilan ham aloqani buzishni istamaydi"
  },
  {
    question: "Liberal rahbarlarga xos yettinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? qo‘yadi",
    options: ["O‘ziga bo‘ysunuvchilari oldida qovog‘i solingan kayfiyatda bo‘ladi", "Talabchan emas, sust nazorat qiladi", "O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi", "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab"],
    correctAnswer: "Talabchan emas, sust nazorat qiladi"
  },
  {
    question: "Liberal rahbarlarga xos sakkizinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? qo‘yadi",
    options: ["O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab", "O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi", "Suiste’mollarga bevosita yo‘l qo‘ymasa ham o‘zini bilmaslikka soladi", "O‘ziga bo‘ysunuvchilari oldida qovog‘i solingan kayfiyatda bo‘ladi"],
    correctAnswer: "Suiste’mollarga bevosita yo‘l qo‘ymasa ham o‘zini bilmaslikka soladi"
  },
  {
    question: "Demokratik rahbarlarga xos birinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? fikrini hisobga olmaydi",
    options: ["Irodasiz, tashabbussiz bo‘ladi", "Idoraga nisbatan qat’iy bo‘lishdan hayiqadi", "Boshqarish funksiyalarini jamoa fikri bilan hisoblashib amalga oshiradi", "Buyruq chiqarish, qaror qabul qilish, xodimlarga jazo berish yoki rag‘batdantirishda jamoa"],
    correctAnswer: "Boshqarish funksiyalarini jamoa fikri bilan hisoblashib amalga oshiradi"
  },
  {
    question: "Demokratik rahbarlarga xos ikkinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? ular bilan maslahatlashadi, ijobiy tomonlarini inobatga oladi qo‘yadi",
    options: ["O‘z zimmasiga mas’uliyat olishni yoqtirmaydi", "Ishlab chiqarishni boshqarishga xodimlarni jalb qiladi, ularning bildirgan fikriga quloq soladi,", "O‘zini haddan tashqari ehtiyot qiladi", "O‘zini jamoadan uzoq tutadi, jamoa a’zolarini bevosita muloqotda bo‘lishini chegaralab"],
    correctAnswer: "Ishlab chiqarishni boshqarishga xodimlarni jalb qiladi, ularning bildirgan fikriga quloq soladi,"
  },
  {
    question: "Demokratik rahbarlarga xos uchinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan?",
    options: ["Ishni o‘z holiga tashlab qo‘yadi", "Barcha bilan barobar va samimiy munosabatda bo‘ladi, ustunligini bildirmaydi", "Biron xodim bilan ham aloqani buzishni istamaydi", "O‘zining noo‘rin harakatlarining tanqid qilinishiga chiday olmaydi"],
    correctAnswer: "Barcha bilan barobar va samimiy munosabatda bo‘ladi, ustunligini bildirmaydi"
  },
  {
    question: "Demokratik rahbarlarga xos to’rtinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan?",
    options: ["Idoraga nisbatan qat’iy bo‘lishdan hayiqadi", "Buyruq berish yo‘li bilan emas, balki ishontirish uslubida ish tutadi", "Talabchan emas, sust nazorat qiladi", "O‘ziga bo‘ysunuvchilarning harakatlarini keskin ravishda tanqid qilishni yaxshi ko‘radi"],
    correctAnswer: "Buyruq berish yo‘li bilan emas, balki ishontirish uslubida ish tutadi"
  },
  {
    question: "Demokratik rahbarlarga xos beshinchi rahbarlik uslubi qaysi javobda to‘g‘ri berilgan? va ishchan muhitni yaratadi",
    options: ["O‘zini haddan tashqari ehtiyot qiladi", "Suiste’mollarga bevosita yo‘l qo‘ymasa ham o‘zini bilmaslikka soladi", "Bo‘ysunuvchilarning shaxsiy tashabbusini, ijodiy faoliyatini rivojlantiradi va jamoada o‘rtoqlik", "Muttasil buyruq berishga, hammani o‘z istaklariga so‘zsiz bo‘ysundirishga intiladi"],
    correctAnswer: "Bo‘ysunuvchilarning shaxsiy tashabbusini, ijodiy faoliyatini rivojlantiradi va jamoada o‘rtoqlik"
  },
  {
    question: "Byurokrat rahbar hulq-atvoriga xos bo‘lgan birinchi xususiyatni aniqlang? nog‘ora qiladi deb biladi rahbarlik bilan kelishib olishga intiladi",
    options: ["O‘zining kichkina, ko‘zga ilg‘amas muvaffaqiyatini bo‘rttirib ko‘rsatadi, shov-shuv ko‘tarib", "Ishlab chiqilgan qoida, qo‘llanmalar doirasidan chiqmaydi, uni o‘zining birdan-bir maqsadi", "Uncha murakkab bo‘lmagan masalalarni ham mustaqil hal eta olmaydi, yuqori turuvchi", "Tilga tushishni, matbuotda yozishlarini, televizordan ko‘rinishni istaydi"],
    correctAnswer: "Ishlab chiqilgan qoida, qo‘llanmalar doirasidan chiqmaydi, uni o‘zining birdan-bir maqsadi"
  },
  {
    question: "Byurokrat rahbar hulq-atvoriga xos bo‘lgan ikkinchi xususiyatni aniqlang? tashkil etishga intiladi",
    options: ["Yuqori organlardan maqtov eshitishni yoqtiradi", "Odamlarga hukmronlarcha munosabatda bo‘ladi, har bir ishni hujjat bilan xal etishga urunadi", "Har ishda sustkashlik qiladi", "Soxta tashabbuslar atrofida shov-shuv ko‘tarishga, ijodiy izlanish o‘rniga ishni xo‘jako‘rsinga"],
    correctAnswer: "Odamlarga hukmronlarcha munosabatda bo‘ladi, har bir ishni hujjat bilan xal etishga urunadi"
  },
  {
    question: "Byurokrat rahbar hulq-atvoriga xos bo‘lgan uchinchi xususiyatni aniqlang?",
    options: ["Tilga tushishni, matbuotda yozishlarini, televizordan ko‘rinishni istaydi", "Qog‘ozbozlikni avj oldiradi", "Kabinetda o‘ralashib, qog‘ozbozlik bilan band bo‘ladi", "Ishchanlik o‘rniga ko‘zbo‘yamachilik va qo‘shib yozish bilan shug‘ullanadi"],
    correctAnswer: "Qog‘ozbozlikni avj oldiradi"
  },
  {
    question: "Byurokrat rahbar hulq-atvoriga xos bo‘lgan beshinchi xususiyatni aniqlang? tashkil etishga intiladi",
    options: ["Ishchanlik o‘rniga ko‘zbo‘yamachilik va qo‘shib yozish bilan shug‘ullanadi", "Har ishda sustkashlik qiladi", "Ish mohiyatini rasmiyatchilik bilan ko‘mib tashlaydi", "Soxta tashabbuslar atrofida shov-shuv ko‘tarishga, ijodiy izlanish o‘rniga ishni xo‘jako‘rsinga"],
    correctAnswer: "Ish mohiyatini rasmiyatchilik bilan ko‘mib tashlaydi"
  },
  {
    question: "Dunyodagi birinchi ustoz kim?",
    options: ["Platon", "Arastu", "Dekart", "Pifagor"],
    correctAnswer: "Arastu"
  },
  {
    question: "Insoniyatning birinchi ustozi Arastu qayerda tavallud topgan?",
    options: ["Prussiyada", "Yunonistonda", "Vyetnamda", "Kalkuttada"],
    correctAnswer: "Yunonistonda"
  },
  {
    question: "Aristotelning “Metafizika”, “Ritorika”, “Etika” va “Sofistika” asarlariga sharh yozgani uchun qaysi alloma dunyodagi ikkinchi muallim hisoblanadi?",
    options: ["Navoiy", "Farobiy", "Mirzo Ulug’bek", "Amir Temur"],
    correctAnswer: "Farobiy"
  },
  {
    question: "“Metafizika”, “Ritorika”, “Etika” va “Sofistika” asarlarining muallifi kim?",
    options: ["Navoiy", "Mirzo Ulug’bek", "Aristotel", "Amir Temur"],
    correctAnswer: "Aristotel"
  },
  {
    question: "Ilmiy adabiyotlarda, odatda iqtisodiyotga rahbarlik qilishda asoslaniladigan asosiy qoida, yo’lyo’riq, xulq me’yorlari deganda nima tushuniladi?",
    options: ["Kommunikatsiya", "Boshqaruv tamoyili", "Konstitutsiyalar", "Repertuar"],
    correctAnswer: "Boshqaruv tamoyili"
  },
  {
    question: "Amal qilish davriga ko’ra boshqaruv qarorlarining turlari qaysi qatorda to’g’ri ko’rsatilgan?",
    options: ["Operativ (tezkor) qarorlar", "Strategik qarorlar", "Texnikaviy qarorlar", "An’anaviy qarorlar"],
    correctAnswer: "Operativ (tezkor) qarorlar"
  },
  {
    question: "Axborot bilan ta’minlanganlik darajasiga ko’ra boshqaruv qarorlari qaysi qatorda to’g’ri berilgan?",
    options: ["Ringi usuli asosida qabul qilingan qarorlar", "Aniq qarorlar", "Tashabbusli qarorlar", "Taktik qarorlar"],
    correctAnswer: "Aniq qarorlar"
  },
  {
    question: "Yuqori boshqaruv organlari tomonidan tub va istiqbolli dasturlarni ishlab chiqish maqsadida qabul qilingan qarorlarning turlari qaysi qatorda to’g’ri ko’rsatilgan?",
    options: ["Texnikaviy qarorlar", "Strategik qarorlar", "An’anaviy qarorlar", "Operativ (tezkor) qarorlar"],
    correctAnswer: "Strategik qarorlar"
  },
  {
    question: "Bir xil muammoga daxldor bo’lib, barcha bo’g’inlar uchun birdek amal qiladigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Umumiy qarorlar", "Strategik qarorlar", "Operativ (tezkor) qarorlar", "Taktik qarorlar"],
    correctAnswer: "Umumiy qarorlar"
  },
  {
    question: "Tor doiradagi muammoga taalluqli bo’lib, korxonaning muayyan bir bo’limi yoki bir guruh xodimlari yuzasidan qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Strategik qarorlar", "Maxsus qarorlar", "Operativ (tezkor) qarorlar"],
    correctAnswer: "Maxsus qarorlar"
  },
  {
    question: "Qat’iy yo’riqnomalar, me’yoriy hujjatlar asosida qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Stereotip qarorlar", "Operativ (tezkor) qarorlar", "Strategik qarorlar"],
    correctAnswer: "Stereotip qarorlar"
  },
  {
    question: "Tavsifiga ko’ra novatorlik, tasnifiga ko’ra istiqbolni nazarda tutadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Operativ (tezkor) qarorlar", "Tashabbusli qarorlar", "An’anaviy qarorlar", "Taktik qarorlar"],
    correctAnswer: "Tashabbusli qarorlar"
  },
  {
    question: "Odatiy vaziyatlarda qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Tashabbusli qarorlar", "An’anaviy qarorlar", "Strategik qarorlar", "Taktik qarorlar"],
    correctAnswer: "An’anaviy qarorlar"
  },
  {
    question: "Korxona faoliyatini yaxshilash borasidagi tavsiyalarni o’zida aks ettirgan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Tashabbusli qarorlar", "Tavsiyali qarorlar", "Taktik qarorlar", "Ringi usuli asosida qabul qilingan qarorlar"],
    correctAnswer: "Tavsiyali qarorlar"
  },
  {
    question: "Tavakkalchilikka asoslanib qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Noaniq qarorlar", "Tashabbusli qarorlar", "Ringi usuli asosida qabul qilingan qarorlar"],
    correctAnswer: "Noaniq qarorlar"
  },
  {
    question: "Doimiy qaror qabul qilingunga qadar amal qiladigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Ringi usuli asosida qabul qilingan qarorlar", "Taktik qarorlar", "Vaqtinchalik qarorlar", "Strategik qarorlar"],
    correctAnswer: "Vaqtinchalik qarorlar"
  },
  {
    question: "Ijrosini kechiktirish mumkin bo’lmagan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Strategik qarorlar", "Taktik qarorlar", "Operativ (tezkor) qarorlar", "Ringi usuli asosida qabul qilingan qarorlar"],
    correctAnswer: "Operativ (tezkor) qarorlar"
  },
  {
    question: "Har zamonda bir paydo bo’lib qoladigan muammolarni xal etish yuzasidan qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Ringi usuli asosida qabul qilingan qarorlar", "Vaqti-vaqti bilan qabul qilinadigan qarorlar", "Strategik qarorlar"],
    correctAnswer: "Vaqti-vaqti bilan qabul qilinadigan qarorlar"
  },
  {
    question: "O’zboshimchalik bilan qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Yakkaboshchilik prinsipi asosida qabul qilinadigan qarorlar", "Tashabbusli qarorlar", "Strategik qarorlar"],
    correctAnswer: "Yakkaboshchilik prinsipi asosida qabul qilinadigan qarorlar"
  },
  {
    question: "Maxsus kelishuvlarga ko’ra ko’pchilik bilan qabul qilinadigan qarorlar qaysi qatorda to’g’ri berilgan?",
    options: ["Taktik qarorlar", "Strategik qarorlar", "Kollegiallik asosida qabul qilingan qarorlar", "Tashabbusli qarorlar"],
    correctAnswer: "Kollegiallik asosida qabul qilingan qarorlar"
  },
  {
    question: "Ilgari surilayotgan fikrni so’zsiz qo’llab-quvvatlash maqsadida qabul qilinadigan qarorlari qaysi qatorda to’g’ri berilgan?",
    options: ["Muntazam qarorlar", "Tashabbusli qarorlar", "Yakdillik prinsipi asosida qabul qilingan qarorlar", "Strategik qarorlar"],
    correctAnswer: "Yakdillik prinsipi asosida qabul qilingan qarorlar"
  },
  {
    question: "Bir maqsadlar bilan ularga erishish yo’lidagi vositalarning grafik tasviri?",
    options: ["Pirovard maqsadlar", "Maqsadlar shajarasi", "Oraliq maqsadlar", "Bir martalik maqsadlar"],
    correctAnswer: "Maqsadlar shajarasi"
  },
  {
    question: "Yangi texnologiyani joriy qilish bo’yicha qo’yiladigan maqsad turi qaysi qatorda to’g’ri berilgan?",
    options: ["Oraliq maqsadlar", "Innovatsion maqsadlar", "Bir martalik maqsadlar", "Pirovard maqsadlar"],
    correctAnswer: "Innovatsion maqsadlar"
  },
  {
    question: "U yoki bu niyatga erishmoq uchun ko’zda tutilgan orzu nima?",
    options: ["Ertak", "Maqsad", "Qaror", "Tilak"],
    correctAnswer: "Maqsad"
  },
  {
    question: "Bajarilishi lozim bo’lgan ishninq aniq bir yo’lini tanlab olish?",
    options: ["Tilak", "Qaror", "Maqsad", "Ertak"],
    correctAnswer: "Qaror"
  },
  {
    question: "Kishilar oʻrtasidagi oʻzaro axborot almashinuvi qanday nomlanadi?",
    options: ["Axborot tizimi", "Kommunikatsion siyosat", "Kommunikatsiya", "Axborot manbalari"],
    correctAnswer: "Kommunikatsiya"
  },
  {
    question: "Eshitganga, oʻqiganga yoki koʻrganga tan aks taʼsir yoki taʼsirlanish tayanchi?",
    options: ["Anglab bo’lmas aloqa", "Teskari aloqa", "Toʻgʻri aloqa", "Notoʻgʻri aloqa"],
    correctAnswer: "Teskari aloqa"
  },
  {
    question: "A.Maslou boʻyicha birinchi oʻrindagi bazis ehtiyojlarga qaysilar kiradi?",
    options: ["Hurmatga boʻlgan ehtiyojlar", "Fiziologik ehtiyojlar", "Yashashni taʼminlash uchun zarur boʻlgan va xavfsizlikni taʼminlovchi ehtiyojlar", "Fiziologik va hurmatga boʻlgan ehtiyojlar"],
    correctAnswer: "Fiziologik ehtiyojlar"
  },
  {
    question: "Motivlashtirishning nechta modeli mavjud?",
    options: ["Mavjud emas", "3 ta", "2 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Motivlashtirishning birinchi modeli qanday nomlanadi?",
    options: ["Raqobat modeli", "Kompleks motivlashtirish modeli", "Oqilona (ratsional) model", "Insoniy munosabatlarni motivlashtirish modeli"],
    correctAnswer: "Oqilona (ratsional) model"
  },
  {
    question: "Motivlashtirishning ikkinchi modeli qanday nomlanadi?",
    options: ["Oqilona (ratsional) model", "Insoniy munosabatlarni motivlashtirish modeli", "Kompleks motivlashtirish modeli", "Raqobat modeli"],
    correctAnswer: "Insoniy munosabatlarni motivlashtirish modeli"
  },
  {
    question: "Motivlashtirishning uchinchi modeli qanday nomlanadi?",
    options: ["Insoniy munosabatlarni motivlashtirish modeli", "Raqobat modeli", "Kompleks motivlashtirish modeli", "Oqilona (ratsional) model"],
    correctAnswer: "Kompleks motivlashtirish modeli"
  },
  {
    question: "“Shirin kulcha” va “qamchi” taktikasi motivlashtirishning qaysi modelida qoʻllaniladi?",
    options: ["Kompleks motivlashtirish modeli", "Raqobat modeli", "Oqilona (ratsional) model", "Insoniy munosabatlarni motivlashtirish modeli"],
    correctAnswer: "Oqilona (ratsional) model"
  },
  {
    question: "Insoniy munosabatlarni motivlashtirish modeli muallifi kim?",
    options: ["Abraxam Maslou", "Adam Smit", "Jan Batist Sey", "Emerson Mayo"],
    correctAnswer: "Emerson Mayo"
  },
  {
    question: "Oʻz-oʻzini mukammallashtirish motivlashtirish modeli asoschilari kim?",
    options: ["Amir Temur", "Chingizxon", "Maslou va Xesberg", "Sergey Yesenin"],
    correctAnswer: "Maslou va Xesberg"
  },
  {
    question: "Motivlashtirishning ragʻbatlantirish va jazo strategayasi mohiyati qanday?",
    options: ["Kishilar ishdan qochish uchun ishlaydilar", "Kishilar bekorchilikdan ishlaydilar", "Kishilar mukofot olish uchun ishlaydilar", "Kishilar jazo olish uchun ishlaydilar"],
    correctAnswer: "Kishilar mukofot olish uchun ishlaydilar"
  },
  {
    question: "Xodimga uni qoniqtiradigan ishni berish motivlashtirishning qaysi strategik yondashuvini ifodalaydi?",
    options: ["Kompleks motivlashtirish modelini", "Ish orqali motivlashtirish yondashuvini", "Raqobat modelini", "Oqilona (ratsional) modelini"],
    correctAnswer: "Ish orqali motivlashtirish yondashuvini"
  },
  {
    question: "Motivlashtirishning qanday usullari samarali?",
    options: ["Jazolash usuli", "Oqilona (ratsional) modeli", "Guruh mehnatini mukofatlash va ragʻbatlantirish usuli", "Kompleks motivlashtirish modeli"],
    correctAnswer: "Guruh mehnatini mukofatlash va ragʻbatlantirish usuli"
  },
  {
    question: "Ehtiyojlar ustunligi nazariyasining muallifi kim?",
    options: ["Adam Smit", "Jan Batist Sey", "Abraxam Maslou", "Emerson Mayo"],
    correctAnswer: "Abraxam Maslou"
  },
  {
    question: "Ehtiyojlar ustunligi nazariyasi qachon yaratilgan?",
    options: ["XIV asrning 30-yillarida", "XII asrning 20-yillarida", "XI asrning 10-yillarida", "XX asrning 40-yillarida"],
    correctAnswer: "XX asrning 40-yillarida"
  },
  {
    question: "A.Maslou taʼbiriga koʻra qonmagan ehtiyojlarini qondirishga intiluvchi “ochkoʻz maxluq” lar kimlar?",
    options: ["Xayvonlar", "Yirtqichlar", "Odamlar", "Ahmoqlar"],
    correctAnswer: "Odamlar"
  },
  {
    question: "Asosida qoniqish keltiruvchi mehnat ruhiy sogʻlom boʻlishga ham hamkorlik koʻrsatadi degan fikr yotuvchi motivatsiya nazariyasi qanday nomlanadi?",
    options: ["Kutish nazariyasi", "Ehtiyojlar ustunligi nazariyasi", "Boisiy tozalanish nazariyasi deb nomlanadi", "Adolatlilik nazariyasi"],
    correctAnswer: "Boisiy tozalanish nazariyasi deb nomlanadi"
  },
  {
    question: "Boisiy tozalanish nazariyasining muallifi kim?",
    options: ["Alisher Navoiy", "Frederik Gersberg", "Abraxam Maslou", "Berdaq"],
    correctAnswer: "Frederik Gersberg"
  },
  {
    question: "Kutish nazariyasining muallifi kim?",
    options: ["F.Gersberg", "V.Vrum", "E.Mayo", "A.Maslou"],
    correctAnswer: "V.Vrum"
  },
  {
    question: "Kutish nazariyasi qachon yaratilgan?",
    options: ["1563", "1964", "1662", "1461"],
    correctAnswer: "1964"
  },
  {
    question: "Kutish nazariyasida nechta omil asosiy ahamiyat kasb etadi?",
    options: ["2 ta", "1 ta", "3 ta", "mavjud emas"],
    correctAnswer: "3 ta"
  },
  {
    question: "Adolatlilik nazariyasining mohiyati qanday? xohishga ham bogʻliq ragʻbat darajasi bilan qiyosiy taqqoslaydi fikr yotadi",
    options: ["Motivatsiya nafaqat ehtiyojni qondirishga, shuningdek maqsadga erishish uchun tanlangan", "Kishilar oʻzlari erishgan ragʻbat darajasini shu tizimda band boʻlgan boshqa kishilar erishgan", "Asosida qoniqish keltiruvchi mehnat ruhiy sogʻlom boʻlishga ham hamkorlik koʻrsatadi degan", "“Shirin kulcha” va “qamchi” taktikasi"],
    correctAnswer: "Kishilar oʻzlari erishgan ragʻbat darajasini shu tizimda band boʻlgan boshqa kishilar erishgan"
  },
  {
    question: "X (iks) va U (igrek) nazariyalari muallifi kim?",
    options: ["F.Gersberg", "E.Mayo", "D. Mak Gregor", "V.Vrum"],
    correctAnswer: "D. Mak Gregor"
  },
  {
    question: "X (iks) va U (igrek) nazariyalari mazmuni nimani ifodalaydi? xohishga ham bogʻliq fikr yotadi ragʻbat darajasi bilan qiyosiy taqqoslaydi",
    options: ["Motivatsiya nafaqat ehtiyojni qondirishga, shuningdek mahsadga erishish uchun tanlangan", "Asosida qoniqish keltiruvchi mehnat ruhiy sogʻlom boʻlishga ham hamkorlik koʻrsatadi degan", "Boshqaruvchi va xodimlarning mehnatga boʻlgan munosabatini ifodalaydi", "Kishilar oʻzlari erishgan ragʻbat darajasini shu tizimda band boʻlgan boshqa kishilar erishgan"],
    correctAnswer: "Boshqaruvchi va xodimlarning mehnatga boʻlgan munosabatini ifodalaydi"
  },
  {
    question: "X (iks) nazariyasi boʻyicha ishchilar qanday xususiyatda namoyon boʻladilar? ragʻbat darajasi bilan qiyosiy taqqoslaydi",
    options: ["Kishilar oʻzlari erishgan ragʻbat darajasini shu tizimda band boʻlgan boshqa kishilar erishgan", "Guruh mehnatini mukofatlash va ragʻbatlantirishga moyil boʻladilar", "Ishlashni xohlamaydi, javobgarlikdan qochadi, ular tabiatan yalqov, ishyoqmas boʻladilar", "Kishilar mukofot olish uchun ishlaydilar"],
    correctAnswer: "Ishlashni xohlamaydi, javobgarlikdan qochadi, ular tabiatan yalqov, ishyoqmas boʻladilar"
  },
  {
    question: "U (ngrek) nazariyasida ishchilar qanday xususiyatda namoyon boʻladilar? his qilishsa, ishdan qoniqish hosil qilishsa, shundagina korxonaga katta foyda keltirish mumkin",
    options: ["Ishlashni xohlamaydi, javobgarliqdan qochadi, ular tabiatan yalqov, ishyoqmas boʻladilar", "Kishilarga ishonib, qobiliyatlarini rivojlantirib, ular oʻzlarining foydaliligi va muhimliklarini", "Guruh mehnatini mukofatlash va ragʻbatlantirishga moyil boʻladilar", "Kishilar mukofot olish uchun ishlaydilar"],
    correctAnswer: "Kishilarga ishonib, qobiliyatlarini rivojlantirib, ular oʻzlarining foydaliligi va muhimliklarini"
  },
  {
    question: "Motivatsiya regulyatorlari nechta turga boʻlinadi?",
    options: ["5", "6", "4", "3"],
    correctAnswer: "5"
  },
  {
    question: "Motivlashtirishga teskari harakat qilish, imkon boricha bilar-bilmas holda xodimlarning tashabbusini boʻgʻish, ular bilan hisoblashmaslik, ularni doimo qoʻrquv va ikkilanish holatida oʻzini tutishga majbur etish kabi nomaqbul xatti-harakatlar majmuasi?",
    options: ["motivlashtirish", "kutish", "demotivlashtirish omili", "jazolash"],
    correctAnswer: "demotivlashtirish omili"
  },
  {
    question: "Quyida keltirilgan ehtiyojlarning qaysi biri birlamchi ehtiyojlarga kiradi?",
    options: ["sotsial ehtiyojlar", "maʼrifatga boʻlgan ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar", "fiziologik ehtiyojlar"],
    correctAnswer: "fiziologik ehtiyojlar"
  },
  {
    question: "Amerikalik ruhshunos Abraxam Maslouning motivatsiya nazariyasi?",
    options: ["“gigiyenik omillar” nazariyasi", "ehtiyojlar ustunligi nazariyasi", "boisiy tozalanish nazariyasi", "adolatlilik nazariyasi"],
    correctAnswer: "ehtiyojlar ustunligi nazariyasi"
  },
  {
    question: "Frederik Gersbergning motivatsiya nazariyasi?",
    options: ["ehtiyojlar ustunligi nazariyasi", "adolatlilik nazariyasi", "boisiy tozalanish nazariyasi", "kutish nazariyasi"],
    correctAnswer: "boisiy tozalanish nazariyasi"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi birinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "mehnatni tashkil qilishdagi kamchiliklar", "shovqinning past boʻlishi", "ergonomika, dizayn holati"],
    correctAnswer: "mehnatni tashkil qilishdagi kamchiliklar"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi ikkinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "haq toʻlashning takomillashtirilmagani", "shovqinning past boʻlishi", "ergonomika, dizayn holati"],
    correctAnswer: "haq toʻlashning takomillashtirilmagani"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi uchinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "yomon mehnat sharoitlari", "shovqinning past boʻlishi", "ergonomika, dizayn holati"],
    correctAnswer: "yomon mehnat sharoitlari"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi to’rtinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "shovqinning past boʻlishi", "mehnat haqidagi qonunlarni buzish", "ergonomika, dizayn holati"],
    correctAnswer: "mehnat haqidagi qonunlarni buzish"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi beshinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "shovqinning past boʻlishi", "rahbarlikning qoniqarsiz saviyasi", "ergonomika, dizayn holati"],
    correctAnswer: "rahbarlikning qoniqarsiz saviyasi"
  },
  {
    question: "Nizoli vaziyatlarni vujudga keltiruvchi oltinchi sababni aniqlang?",
    options: ["ixcham ish joyi", "oʻzaro munosabatlar madaniyatining past saviyasi", "shovqinning past boʻlishi", "ergonomika, dizayn holati"],
    correctAnswer: "oʻzaro munosabatlar madaniyatining past saviyasi"
  },
  {
    question: "Kanadalik buyuk fiziolog Gans Sels taʼbiriga muvofiq stress nechta bosqichda oʻrganilishi mumkin?",
    options: ["2", "3", "1", "oʻrganilmaydi"],
    correctAnswer: "3"
  },
  {
    question: "Muloqot va guruhiy jarayonlarning egasi?",
    options: ["tashkilot", "alohida shaxs, konkret odam", "boshliq", "obyekt"],
    correctAnswer: "alohida shaxs, konkret odam"
  },
  {
    question: "U yoki bu xulq-atvorning sababiga nima deyiladi?",
    options: ["jarayon", "natija", "ragʻbat", "motiv"],
    correctAnswer: "motiv"
  },
  {
    question: "Jamiyatning oʻz aʼzolari xulq-atvoriga nisbatan ishlab chiqqan va koʻpchilik tomonidan eʼtirof etilgan harakatlar, talablar?",
    options: ["ijtimoiy sanksiya", "ijtimoiy rol", "ijtimoiy norma", "ijtimoiylashuv"],
    correctAnswer: "ijtimoiy norma"
  },
  {
    question: "Normalarning shaxs xulqida namoyon boʻlishini nazorat qilivchi jazo va ragʻbatlantirish mehanizmlari",
    options: ["ijtimoiy rol", "ijtimoiy sanksiya", "ijtimoiylashuv", "ijtimoiy norma"],
    correctAnswer: "ijtimoiy sanksiya"
  },
  {
    question: "Shaxsning konkret hayotiy vaziyatlardagi huquq va burchlaridan iborat harakatlari majmui?",
    options: ["ijtimoiylashuv", "ijtimoiy norma", "ijtimoiy rol", "ijtimoiy sanksiya"],
    correctAnswer: "ijtimoiy rol"
  },
  {
    question: "Inson tomonidan ijtimoiy tajribani egallash hamda hayot faoliyat jarayonida uni faol tarzda oʻzlashtirish jarayoni?",
    options: ["ijtimoiy norma", "ijtimoiylashuv", "ijtimoiy sanksiya", "ijtimoiy rol"],
    correctAnswer: "ijtimoiylashuv"
  },
  {
    question: "Oʻta muloqotga kirishuvchan, oʻzini odamlar guruhisiz tasavvur qila olmaydigan shaxslar?",
    options: ["introvert", "sangvinik", "ekstrovert", "melanxolik"],
    correctAnswer: "ekstrovert"
  },
  {
    question: "Ichki dialog formasidagi muloqotni afzal koʻruvchi, yolgʻizlikka moyil shaxslar?",
    options: ["introvert", "sangvinik", "melanxolik", "ekstrovert"],
    correctAnswer: "introvert"
  },
  {
    question: "Har qanday ish bilan mashgʻul boʻlgan sharoitda juda tez muloqotga kirishuvchan, lekin boshqa narsalarga ham diqqatini tez koʻchira oladigan shaxslar?",
    options: ["ekstrovert", "mobil", "introvert", "sangvinik"],
    correctAnswer: "mobil"
  },
  {
    question: "Bir faoliyat turidan ikkinchisiga koʻchishi qiyin boʻlgan, qatʼiyatli shaxslar?",
    options: ["mobil", "rigid", "ekstrovert", "introvert"],
    correctAnswer: "rigid"
  },
  {
    question: "Muloqot jarayonida boshqalardan ustun boʻlishga intiluvchi shaxslar?",
    options: ["rigid", "dominant", "mobil", "ekstrovert"],
    correctAnswer: "dominant"
  },
  {
    question: "Suhbatdoshining qarashlariga tez moslashuvchi, doimo yon berishga tayyor shaxslar?",
    options: ["dominant", "rigid", "tobe", "mobil"],
    correctAnswer: "tobe"
  },
  {
    question: "…-bu ruhiy omil boʻlib, shaxs faoliyatining manbai, sababi, dalili va har xil turli ehtimollaridir. (soʻz nima haqida boryapti?)",
    options: ["nizo", "stress", "motivatsiya", "tuygʻu"],
    correctAnswer: "motivatsiya"
  },
  {
    question: "Motivlashtirish-bu …?",
    options: ["ragʻbatlantirish", "jazolash", "kishilar faoliyatini ruhiy yoʻllar bilan maqsadga muvofiq yoʻnaltirish", "ishdan mosuvo etish"],
    correctAnswer: "kishilar faoliyatini ruhiy yoʻllar bilan maqsadga muvofiq yoʻnaltirish"
  },
  {
    question: "Odamlarni harakatga intiltiruvchi, qoʻzgʻatuvchi motiv?",
    options: ["ragʻbatlantirish", "jazolash", "ehtiyoj", "ishdan mosuvo etish"],
    correctAnswer: "ehtiyoj"
  },
  {
    question: "Oʻz ahamiyatiga koʻra ehtiyojlar nechta turga boʻlinadi?",
    options: ["fiziologik ehtiyojlarga", "sotsial ehtiyojlarga", "birlamchi va yuqori darajadagi ehtiyojlarga", "oʻzlikni anglashga boʻlgan ehtiyojlarga"],
    correctAnswer: "birlamchi va yuqori darajadagi ehtiyojlarga"
  },
  {
    question: "Birlamchi ehtiyojlarga qanday turdagi ehtiyojlar mansubdir?",
    options: ["sotsial ehtiyojlar", "fiziologik ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar", "maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar"],
    correctAnswer: "fiziologik ehtiyojlar"
  },
  {
    question: "Yuqori darajadagi ehtiyojlarga qanday turdagi ehtiyojlar mansubdir? ehtiyojlar",
    options: ["fiziologik ehtiyojlar", "sotsial ehtiyojlar, oʻzlikni anglashga boʻlgan ehtiyojlar, maʼrifat va maʼnaviyatga boʻlgan", "oʻzlikni anglashga boʻlgan ehtiyojlar", "maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar"],
    correctAnswer: "sotsial ehtiyojlar, oʻzlikni anglashga boʻlgan ehtiyojlar, maʼrifat va maʼnaviyatga boʻlgan"
  },
  {
    question: "Oziq-ovqatga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["sotsial ehtiyojlar", "fiziologik ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar", "maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar"],
    correctAnswer: "fiziologik ehtiyojlar"
  },
  {
    question: "Kiyim-kechakka boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["ijtimoiy ehtiyojlar", "fiziologik ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar", "maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar"],
    correctAnswer: "fiziologik ehtiyojlar"
  },
  {
    question: "Uy-joyga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["sotsial ehtiyojlar", "fiziologik ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar", "maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar"],
    correctAnswer: "fiziologik ehtiyojlar"
  },
  {
    question: "Sotsial ehtiyojlar, oʻzlikni anglashga boʻlgan ehtiyojlar, maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["fiziologik ehtiyojlar", "yuqori darajadagi ehtiyojlar", "birlamchi", "oʻzlikni anglashga boʻlgan ehtiyojlar"],
    correctAnswer: "yuqori darajadagi ehtiyojlar"
  },
  {
    question: "Sotsial ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["fiziologik ehtiyojlar", "sotsial ehtiyojlar", "yuqori darajadagi ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar"],
    correctAnswer: "yuqori darajadagi ehtiyojlar"
  },
  {
    question: "Maʼrifat va maʼnaviyatga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["fiziologik ehtiyojlar", "yuqori darajadagi ehtiyojlar", "sotsial ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar"],
    correctAnswer: "yuqori darajadagi ehtiyojlar"
  },
  {
    question: "Oʻzlikni anglashga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["fiziologik ehtiyojlar", "sotsial ehtiyojlar", "yuqori darajadagi ehtiyojlar", "birlamchi ehtiyojlar"],
    correctAnswer: "yuqori darajadagi ehtiyojlar"
  },
  {
    question: "Xurmatga, muhabbatga, eʼtiqodga boʻlgan ehtiyojlar qaysi toifa ehtiyojlariga mansubdir?",
    options: ["birlamchi ehtiyojlar", "sotsial ehtiyojlar", "fiziologik ehtiyojlar", "oʻzlikni anglashga boʻlgan ehtiyojlar"],
    correctAnswer: "sotsial ehtiyojlar"
  },
  {
    question: "Tabaqalanishiga koʻra ehtiyojlar nechta turga boʻlinadi?",
    options: ["4 ta", "5 ta", "3 ta", "2 ta"],
    correctAnswer: "2 ta"
  },
  {
    question: "Tarixiyligiga koʻra ehtiyojlar nechta turga boʻlinadi?",
    options: ["2 ta", "1 ta", "3 ta", "guruhlanmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Tarixiyligiga koʻra ehtiyojlar qaysi turlarga boʻlinadi?",
    options: ["oʻtkinchi", "hozirgi", "oʻtkinchi, hozirgi, kelajakdagi", "kelajakdagi"],
    correctAnswer: "oʻtkinchi, hozirgi, kelajakdagi"
  },
  {
    question: "Qoniqish darajasiga koʻra ehtiyojlar nechta turga boʻlinadi?",
    options: ["2 ta", "3 ta", "1 ta", "guruhlanmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Qoniqish darajasiga koʻra ehtiyojlar qaysi turlarga boʻlinadi?",
    options: ["toʻla qoniqtirgan", "toʻla qoniqtirgan, qisman qoniqtirgan, umuman qoniqtirmagan", "qisman qoniqtirgan", "umuman qoniqtirmagan"],
    correctAnswer: "toʻla qoniqtirgan, qisman qoniqtirgan, umuman qoniqtirmagan"
  },
  {
    question: "Tarqalish darajasiga koʻra ehtiyojlar qaysi turlarga boʻlinadi?",
    options: ["toʻla qoniqtirgan", "geografik, sotsial", "qisman qoniqtirgan", "umuman qoniqtirmagan"],
    correctAnswer: "geografik, sotsial"
  },
  {
    question: "Shakllanishiga qarab ehtiyojlar qaysi turlarga boʻlinadi?",
    options: ["toʻla qoniqtirgan", "asosiy, ikkilamchi, bilvosita", "qisman qoniqtirgan", "umuman qoniqtirmagan"],
    correctAnswer: "asosiy, ikkilamchi, bilvosita"
  },
  {
    question: "Shakllanishiga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["2 ta", "1 ta", "3 ta", "guruhlanmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Qaytalanishiga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["2 ta", "1 ta", "3 ta", "guruhlanmaydi"],
    correctAnswer: "2 ta"
  },
  {
    question: "Qoʻllanilishiga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["2 ta", "1 ta", "3 ta", "guruhlanmaydi"],
    correctAnswer: "2 ta"
  },
  {
    question: "Qaytalanishiga qarab ehtiyojlar qaysi turlarga boʻlinadi? zarur boʻlgan",
    options: ["asosiy, ikkilamchi, bilvosita", "qisman qoniqtirgan", "faqat bir sohada qoʻllaniladigan, bir nechta sohada qoʻllaniladigan yoki barcha sohalar uchun", "bir martalik boʻlgan, vaqti-vaqti bilan davriy takrorlanib turadigan, doimiy"],
    correctAnswer: "bir martalik boʻlgan, vaqti-vaqti bilan davriy takrorlanib turadigan, doimiy"
  },
  {
    question: "Jamiyatning munosabatiga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["2 ta", "1 ta", "3 ta", "guruhlanmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Jamiyatning munosabatiga qarab ehtiyojlar qaysi turlarga boʻlinadi? zarur boʻlgan",
    options: ["asosy, ikkilamchi, bilvosita", "faqat bir sohada qoʻllaniladigan, bir nechta sohada qoʻllaniladigan yoki barcha sohalar uchun", "salbiy, neytral-turgʻun, ijobiy", "bir martalik boʻlgan, vaqti-vaqti bilan davriy takrorlanib turadigan, doimiy"],
    correctAnswer: "salbiy, neytral-turgʻun, ijobiy"
  },
  {
    question: "Isteʼmol qilish usuliga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["2 ta", "3 ta", "1 ta", "guruhlanmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Isteʼmol qilish usuliga qarab ehtiyojlar qaysi turlarga boʻlinadi? zarur boʻlgan",
    options: ["salbiy, neytral, turgʻun, ijobiy", "faqat bir sohada qoʻllaniladigan, bir nechta sohada qoʻllaniladigan yoki barcha sohalar uchun", "yakka, guruhiy, ijtimoiy isteʼmolga moʻljallangan", "bir martalik boʻlgan, vaqti-vaqti bilan davriy takrorlanib turadigan, doimiy"],
    correctAnswer: "yakka, guruhiy, ijtimoiy isteʼmolga moʻljallangan"
  },
  {
    question: "Yoshi va daromad darajasiga qarab ehtiyojlar nechta turlarga boʻlinadi?",
    options: ["baʼzan 2 ta bazan 1 ta", "2 ta", "1 ta", "guruhlanmaydi"],
    correctAnswer: "2 ta"
  },
  {
    question: "Yoshi va daromad darajasiga qarab ehtiyojlar qaysi turlarga boʻlinadi? zarur boʻlgan",
    options: ["salbiy, neytral, turgʻun, ijobiy", "elastikligi boʻsh boʻlgan yoki elastikligi yuqori boʻlgan", "faqat bir sohada qoʻllaniladigan, bir nechta sohada qoʻllaniladigan yoki barcha sohalar uchun", "bir martalik boʻlgan, vaqti-vaqti bilan davriy takrorlanib turadigan, doimiy"],
    correctAnswer: "elastikligi boʻsh boʻlgan yoki elastikligi yuqori boʻlgan"
  },
  {
    question: "Motivatsiyaning nechta nazariyasi mavjud?",
    options: ["3 ta", "5 ta", "2 ta", "1 ta"],
    correctAnswer: "5 ta"
  },
  {
    question: "Menejer boshqaruv pogʻonasiga binoan nechta toifaga boʻlinadi?",
    options: ["baʼzan 2 ta baʼzan esa 3 ta", "2 ta", "3 ta", "boʻlinmaydi"],
    correctAnswer: "3 ta"
  },
  {
    question: "Firma istiqbolini belgilash, uning kelajagi uchun ahamiyatli chora-tadbirlarni ishlab chiqish bilan shugʻullanuvchi menejerlar qaysi pogʻona menejerlari?",
    options: ["oʻrta", "quyi", "yuqori", "oraliq"],
    correctAnswer: "yuqori"
  },
  {
    question: "Firma faoliyatining ayrim tomonlarini, chunonchi, ishlab chiqarish, tovarlarni sotish, narx belgilash, , moliya faoliyati, yangi tovarlarni oʻzlashtirish, texnologiyani qoʻllash, mehnatni tashkil etish kabilarni boshqarish bilan shugʻullanuvchi menejerlar qaysi pogʻonaga mansub?",
    options: ["yuqori", "oʻrta", "quyi", "oraliq"],
    correctAnswer: "oʻrta"
  },
  {
    question: "Boʻlim, brigada doirasida ishni tashkil etish, kunlik, xaftalik, oylik ish topshiriqlarining bajarilishini boshqarib borish bilan shugʻullanuvchi menejerlar qaysi pogʻonaga mansub?",
    options: ["oraliq", "oʻrta", "quyi", "yuqori"],
    correctAnswer: "quyi"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq nogironligi bo‘lganidan yoki bo‘lmasligidan qat’i nazar, oila, pedagoglar, mutaxassislar, jamiyat va davlatning alohida e’tiboriga muhtoj bo‘lgan individual ehtiyojlarga ega bolalar rasman qanday ataladi?",
    options: ["sog’lom bolalar", "inklyuziv ta’lim va tarbiya", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar", "maktabgacha bo‘lgan yosh bolalar"],
    correctAnswer: "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq davlat tomonidan moliyalashtiriladigan va boshqariladigan hamda maktabgacha ta’lim va tarbiyaning davlat standartiga muvofiq maktabgacha ta’lim va tarbiya xizmatlari ko‘rsatuvchi tashkilot rasman qanday ataladi?",
    options: ["inklyuziv ta’lim va tarbiya", "maktabgacha bo‘lgan yosh", "davlat maktabgacha ta’lim tashkiloti", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar"],
    correctAnswer: "davlat maktabgacha ta’lim tashkiloti"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq bolalarning alohida ta’lim olishga bo‘lgan ehtiyojlarini hamda individual imkoniyatlarini hisobga olgan holda ta’lim va tarbiya olishi uchun teng imkoniyatlarni ta’minlaydigan jarayon rasman qanday ataladi?",
    options: ["davlat maktabgacha ta’lim tashkiloti", "inklyuziv ta’lim va tarbiya jarayoni", "maktabgacha bo‘lgan yosh", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar"],
    correctAnswer: "inklyuziv ta’lim va tarbiya jarayoni"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq bolalarning tug‘ilgan paytidan yetti yoshgacha, to ularga umumiy o‘rta ta’lim tashkilotlarida ta’lim berish boshlangan paytga qadar bo‘lgan yoshi rasman qanday ataladi?",
    options: ["ilk bolalik davri", "o’rta yosh davri", "maktabgacha bo‘lgan yosh", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar"],
    correctAnswer: "maktabgacha bo‘lgan yosh"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq bolalarga ta’lim va tarbiya berishga, ularni intellektual, ma’naviy-axloqiy, etik, estetik va jismoniy jihatdan rivojlantirishga, shuningdek bolalarni umumiy o‘rta ta’limga tayyorlashga qaratilgan uzluksiz ta’lim turi rasman qanday ataladi?",
    options: ["umumiy o’rta va o’rta maxsus ta’lim", "maktabgacha ta’lim va tarbiya", "inklyuziv ta’lim va tarbiya", "professional ta’lim"],
    correctAnswer: "maktabgacha ta’lim va tarbiya"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq ta’lim-tarbiya jarayonining hajmiga, mazmuniga va sifatiga, maktabgacha ta’lim tashkilotini qurish va jihozlashga, shuningdek maktabgacha yoshdagi bolalarning sog‘lom ovqatlanishini va xavfsizligini tashkil etishga doir majburiy talablar majmui qanday ataladi?",
    options: ["Ilk qadam davlat o’quv dasturi", "inklyuziv ta’lim va tarbiya", "maktabgacha ta’lim va tarbiyaning davlat standarti", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar dasturi"],
    correctAnswer: "maktabgacha ta’lim va tarbiyaning davlat standarti"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq bola tomonidan o‘zlashtirilishi lozim bo‘lgan asosiy bilimlarning, mahorat va ko‘nikmalarning hajmini hamda mazmunini belgilovchi, shuningdek ta’lim va tarbiya mazmunining o‘ziga xosligini, ta’lim-tarbiya jarayonini tashkil etishning o‘ziga xos xususiyatlarini tavsiflovchi hujjat qanday ataladi?",
    options: ["Ilk qadam davlat o’quv dasturi", "inklyuziv ta’lim va tarbiya dasturi", "maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar dasturi"],
    correctAnswer: "maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq maktabgacha ta’lim va tarbiya sohasida ta’lim va tarbiya xizmatlari ko‘rsatuvchi davlat va nodavlat tashkiloti qanday ataladi?",
    options: ["davlat maktabgacha ta’lim tashkiloti", "maktabgacha ta’lim tashkiloti", "nodavlat ta’lim tashkiloti", "umumiy o’rta ta’lim maktabi"],
    correctAnswer: "maktabgacha ta’lim tashkiloti"
  },
  {
    question: "O’zbekiston Respublikasining “Maktabgacha ta’lim va tarbiya to‘g‘risida”gi Qonuniga muvofiq nodavlat ta’lim xizmatlarini ko‘rsatish sohasidagi faoliyatni amalga oshirishga doir litsenziya asosida maktabgacha ta’lim va tarbiya sohasida ta’lim va tarbiya xizmatlarini ko‘rsatuvchi yuridik shaxs kim?",
    options: ["davlat maktabgacha ta’lim tashkiloti", "umumiy o’rta ta’lim maktabi", "nodavlat maktabgacha ta’lim tashkiloti", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar maktabi"],
    correctAnswer: "nodavlat maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning nechta asosiy prinsiplari mavjud?",
    options: ["6 ta", "7 ta", "9 ta", "8 ta"],
    correctAnswer: "8 ta"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning birinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "har bir bola uchun maktabgacha ta’lim va tarbiya olish imkoniyatining mavjudligi", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "har bir bola uchun maktabgacha ta’lim va tarbiya olish imkoniyatining mavjudligi"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning ikkinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "har bir bolaning iste’dodi nishonalarini, ishtiyoqlari va qobiliyatlarini rivojlantirish uchun shartsharoitlar tengligi", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "har bir bolaning iste’dodi nishonalarini, ishtiyoqlari va qobiliyatlarini rivojlantirish uchun shartsharoitlar tengligi"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning uchinchi asosiy prinsipi ifodalangan? oila hamda maktabgacha ta’lim tashkiloti tarbiyaviy ta’sirining birligi",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "maktabgacha bo‘lgan yoshdagi bolalarga ta’lim, tarbiya berish va ularni sog‘lomlashtirishning,", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "maktabgacha bo‘lgan yoshdagi bolalarga ta’lim, tarbiya berish va ularni sog‘lomlashtirishning,"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning to’rtinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "maktabgacha bo‘lgan yoshdagi bolalarga ta’lim va tarbiya berish uyg‘unligi", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "maktabgacha bo‘lgan yoshdagi bolalarga ta’lim va tarbiya berish uyg‘unligi"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning beshinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "bolaning shaxsini rivojlantirishga yo‘naltirilgan shaxsiy yondashuv", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "bolaning shaxsini rivojlantirishga yo‘naltirilgan shaxsiy yondashuv"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning oltinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "maktabgacha va umumiy o‘rta ta’limning izchilligi hamda uzluksizligi", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "maktabgacha va umumiy o‘rta ta’limning izchilligi hamda uzluksizligi"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning yettinchi asosiy prinsipi ifodalangan?",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "ta’lim va tarbiyaning demokratik hamda dunyoviy xususiyatga egaligi", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "ta’lim va tarbiyaning demokratik hamda dunyoviy xususiyatga egaligi"
  },
  {
    question: "Quyidagi javoblarning qaysi birida maktabgacha ta’lim va tarbiyaning sakkizinchi asosiy prinsipi ifodalangan? yoshdagi bolalarning rivojlanish xususiyatlariga hamda sog‘lig‘i holatiga muvofiqligi",
    options: ["pedagogning kasbiy standarti", "maktabgacha bo‘lgan yoshdagi o’ziga xoslik", "maktabgacha ta’lim va tarbiya mazmuni, darajasi hamda hajmining maktabgacha bo‘lgan", "davlat maktabgacha ta’lim tashkiloti"],
    correctAnswer: "maktabgacha ta’lim va tarbiya mazmuni, darajasi hamda hajmining maktabgacha bo‘lgan"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotini boshqarishni amalga oshiruvchi boshqaruv apparati qaysi?",
    options: ["pedagogning kasbiy standartini tasdiqlovchi kengash", "kuzatuv kengashi", "pedagogik kengash", "davlat maktabgacha ta’lim tashkiloti kengashi"],
    correctAnswer: "pedagogik kengash"
  },
  {
    question: "Quyidagilardan qaysi biri davlat maktabgacha ta’lim tashkilotini boshqarishni amalga oshiradi?",
    options: ["kuzatuv kengashi", "pedagogik kengash", "o’zaro kengash", "davlat maktabgacha ta’lim tashkiloti kengashi"],
    correctAnswer: "davlat maktabgacha ta’lim tashkiloti kengashi"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida davlat maktabgacha ta’lim tashkilotini boshqarishni amalga oshiruvchining nomi to’g’ri ko’rsatilgan?",
    options: ["davlat maktabgacha ta’lim tashkiloti rahbari", "davlat maktabgacha ta’lim tashkiloti metodisti", "davlat maktabgacha ta’lim tashkiloti defektologi", "davlat maktabgacha ta’lim tashkiloti psixologi"],
    correctAnswer: "davlat maktabgacha ta’lim tashkiloti rahbari"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining birinchi yo‘nalishining nomi to’g’ri ko’rsatilgan? ta’minlash",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "har bir bolaning maktabgacha ta’lim va tarbiya olishga bo‘lgan huquqi amalga oshirilishini", "davlat maktabgacha ta’lim tashkilotining ustavi"],
    correctAnswer: "har bir bolaning maktabgacha ta’lim va tarbiya olishga bo‘lgan huquqi amalga oshirilishini"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining ikkinchi yo‘nalishining nomi to’g’ri ko’rsatilgan?",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "bolalarning maktabgacha ta’lim va tarbiyaga to‘liq qamrab olinishini ta’minlash uchun shartsharoitlar yaratish", "davlat maktabgacha ta’lim tashkilotining ustavi"],
    correctAnswer: "bolalarning maktabgacha ta’lim va tarbiyaga to‘liq qamrab olinishini ta’minlash uchun shartsharoitlar yaratish"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining uchinchi yo‘nalishining nomi to’g’ri ko’rsatilgan? ko‘rsatish",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "bolaning rivojlanishida, maktabgacha ta’lim va tarbiya olishida oilaga har tomonlama yordam", "davlat maktabgacha ta’lim tashkilotining ustavi"],
    correctAnswer: "bolaning rivojlanishida, maktabgacha ta’lim va tarbiya olishida oilaga har tomonlama yordam"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining to’rtinchi yo‘nalishining nomi to’g’ri ko’rsatilgan? maktabgacha ta’lim va tarbiya olishi uchun shart-sharoitlar yaratish",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "bolalarning, shu jumladan alohida ta’lim olish ehtiyojlari bo‘lgan bolalarning sifatli", "davlat maktabgacha ta’lim tashkiloti ustavi"],
    correctAnswer: "bolalarning, shu jumladan alohida ta’lim olish ehtiyojlari bo‘lgan bolalarning sifatli"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining beshinchi yo‘nalishining nomi to’g’ri ko’rsatilgan?",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "ta’lim va tarbiya berishning muqobil shakllarini yaratish hamda rivojlantirish", "davlat maktabgacha ta’lim tashkiloti ustavi"],
    correctAnswer: "ta’lim va tarbiya berishning muqobil shakllarini yaratish hamda rivojlantirish"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining oltinchi yo‘nalishining nomi to’g’ri ko’rsatilgan?",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "maktabgacha ta’lim va tarbiyani rivojlantirishni davlat tomonidan qo‘llab-quvvatlash", "davlat maktabgacha ta’lim tashkiloti ustavi"],
    correctAnswer: "maktabgacha ta’lim va tarbiyani rivojlantirishni davlat tomonidan qo‘llab-quvvatlash"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining yettinchi yo‘nalishining nomi to’g’ri ko’rsatilgan? mexanizmlarini joriy etish va rivojlantirish",
    options: ["pedagogning kasbiy standartini tasdiqlash", "maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "maktabgacha ta’lim tashkilotlari tarmog‘ini kengaytirishga qaratilgan davlat-xususiy sheriklik", "davlat maktabgacha ta’lim tashkiloti ustavi"],
    correctAnswer: "maktabgacha ta’lim tashkilotlari tarmog‘ini kengaytirishga qaratilgan davlat-xususiy sheriklik"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining sakkizinchi yo‘nalishining nomi to’g’ri ko’rsatilgan? innovatsion va axborot-kommunikatsiya texnologiyalarini joriy etish",
    options: ["maktabgacha bo‘lgan yoshdagi bolalarning o’ziga xosligi", "maktabgacha bo‘lgan yoshdagi bolalarni har tomonlama rivojlantirish maqsadida zamonaviy", "davlat maktabgacha ta’lim tashkiloti ustavi", "pedagogning kasbiy standartini tasdiqlash"],
    correctAnswer: "maktabgacha bo‘lgan yoshdagi bolalarni har tomonlama rivojlantirish maqsadida zamonaviy"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining to’qqizinchi yo‘nalishining nomi to’g’ri ko’rsatilgan?",
    options: ["pedagogning kasbiy standartini tasdiqlash", "xalqaro hamkorlikni rivojlantirish", "davlat maktabgacha ta’lim tashkiloti ustavi", "maktabgacha bo‘lgan yoshdagi bolalar rivojlanishi"],
    correctAnswer: "xalqaro hamkorlikni rivojlantirish"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining ro‘yobga chiqarilishini amalga oshiruvchi yuqori organ nomi quyidagi qatorlarning qaysi birida to’g’ri ko’rsatilgan?",
    options: ["O‘zbekiston Respublikasi Vazirlar Mahkamasi", "Qurilish vazirligi", "Energetika vazirligi", "Uy-joy kommunal xizmat koʻrsatish vazirligi"],
    correctAnswer: "O‘zbekiston Respublikasi Vazirlar Mahkamasi"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining ro‘yobga chiqarilishini amalga oshiruvchi inspeksiya nomi quyidagi qatorlarning qaysi birida to’g’ri ko’rsatilgan? inspeksiyasi",
    options: ["Qurilish vazirligi", "Energetika vazirligi", "Uy-joy kommunal xizmat koʻrsatish vazirligi", "O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat"],
    correctAnswer: "O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya sohasidagi davlat siyosatining ro‘yobga chiqarilishini amalga oshiruvchi maxsus vazirlik nomi quyidagi qatorlarning qaysi birida to’g’ri ko’rsatilgan?",
    options: ["O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi", "Qurilish vazirligi", "Energetika vazirligi", "Uy-joy kommunal xizmat koʻrsatish vazirligi"],
    correctAnswer: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligining maktabgacha ta’lim va tarbiya sohasidagi birinchi vakolati to’g’ri aks ettirilgan? malakali tibbiy yordam ko‘rsatilishini ta’minlash oshirish",
    options: ["davlat maktabgacha ta’lim tashkilotlarini tashkil etadi, qayta tashkil etadi va tugatish", "maktabgacha ta’lim tashkilotlarining faoliyatiga uslubiy jihatdan rahbarlikni amalga oshirish", "maktabgacha bo‘lgan yoshdagi bolalarga davlat tomonidan kafolatlangan hajm doirasida bepul", "maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturini ishlab chiqadi, tasdiqlaydi va amalga"],
    correctAnswer: "maktabgacha bo‘lgan yoshdagi bolalarga davlat tomonidan kafolatlangan hajm doirasida bepul"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligining maktabgacha ta’lim va tarbiya sohasidagi uchinchi vakolati to’g’ri aks ettirilgan? oshirish",
    options: ["davlat maktabgacha ta’lim tashkilotlarini tashkil etadi, qayta tashkil etadi va tugatish", "maktabgacha ta’lim tashkilotlarining faoliyatiga uslubiy jihatdan rahbarlikni amalga oshirish", "alohida ta’lim olish ehtiyojlari bo‘lgan bolalarni sog‘lomlashtirishga qaratilgan davolashsog‘lomlashtirish, reabilitatsiya, sanitariya-gigiyena va profilaktika tadbirlarini o‘tkazish", "maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturini ishlab chiqadi, tasdiqlaydi va amalga"],
    correctAnswer: "alohida ta’lim olish ehtiyojlari bo‘lgan bolalarni sog‘lomlashtirishga qaratilgan davolashsog‘lomlashtirish, reabilitatsiya, sanitariya-gigiyena va profilaktika tadbirlarini o‘tkazish"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligining maktabgacha ta’lim va tarbiya sohasidagi to’rtinchi vakolati to’g’ri aks ettirilgan? oshirish",
    options: ["maktabgacha ta’lim tashkilotlari xodimlarining tibbiy tekshiruvdan o‘tkazilishini tashkil etish", "davlat maktabgacha ta’lim tashkilotlarini tashkil etadi, qayta tashkil etadi va tugatish", "maktabgacha ta’lim tashkilotlarining faoliyatiga uslubiy jihatdan rahbarlikni amalga oshirish", "maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturini ishlab chiqadi, tasdiqlaydi va amalga"],
    correctAnswer: "maktabgacha ta’lim tashkilotlari xodimlarining tibbiy tekshiruvdan o‘tkazilishini tashkil etish"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim tashkilotining birinchi turi to’g’ri aks ettirilgan?",
    options: ["tog’ yon-bag’rida joylashgan maktabgacha ta’lim tashkiloti", "umumiy turdagi maktabgacha ta’lim tashkiloti", "yaylovlarda joylashgan maktabgacha ta’lim tashkiloti", "shahar hududida joylashgan maktabgacha ta’lim tashkiloti"],
    correctAnswer: "umumiy turdagi maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim tashkilotining ikkinchi turi to’g’ri aks ettirilgan?",
    options: ["tog’ yon-bag’rida joylashgan maktabgacha ta’lim tashkiloti", "yaylovlarda joylashgan maktabgacha ta’lim tashkiloti", "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti", "shahar hududida joylashgan maktabgacha ta’lim tashkiloti"],
    correctAnswer: "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim tashkilotining uchinchi turi to’g’ri aks ettirilgan?",
    options: ["tog’ yon-bag’rida joylashgan maktabgacha ta’lim tashkiloti", "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti", "yaylovlarda joylashgan maktabgacha ta’lim tashkiloti", "shahar hududida joylashgan maktabgacha ta’lim tashkiloti"],
    correctAnswer: "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Quyidagi qatorlarning qaysi birida maktabgacha ta’lim tashkilotining to’rtinchi turi to’g’ri aks ettirilgan?",
    options: ["tog’ yon-bag’rida joylashgan maktabgacha ta’lim tashkiloti", "yaylovlarda joylashgan maktabgacha ta’lim tashkiloti", "qo‘shma turdagi maktabgacha ta’lim tashkiloti", "shahar hududida joylashgan maktabgacha ta’lim tashkiloti"],
    correctAnswer: "qo‘shma turdagi maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim tashkilotining umumiy rivojlantirish yo‘nalishidagi guruhlarida maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi amalga oshirilishini ta’minlovchi turi qaysi javob variantida to’g’ri ifodalangan?",
    options: ["ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti", "umumiy turdagi maktabgacha ta’lim tashkiloti", "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti", "qo‘shma turdagi maktabgacha ta’lim tashkiloti"],
    correctAnswer: "umumiy turdagi maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim tashkilotining rivojlanishida jismoniy yoki ruhiy nuqsonlari bo‘lgan bolalar uchun maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi amalga oshirilishini ta’minlanuvchi turi qaysi javob variantida to’g’ri ifodalangan?",
    options: ["umumiy turdagi maktabgacha ta’lim tashkiloti", "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti", "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti", "qo‘shma turdagi maktabgacha ta’lim tashkiloti"],
    correctAnswer: "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim tashkilotining bolalarning alohida ta’lim olish ehtiyojlari va individual imkoniyatlarini hisobga olgan holda, ularni sog‘lom muhitga uyg‘unlashtirish orqali ta’lim va tarbiya olishi uchun teng imkoniyatlar ta’minlanuvchi turi qaysi javob variantida to’g’ri ifodalangan?",
    options: ["umumiy turdagi maktabgacha ta’lim tashkiloti", "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti", "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti", "qo‘shma turdagi maktabgacha ta’lim tashkiloti"],
    correctAnswer: "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim tashkilotining rivojlanishida jismoniy yoki ruhiy nuqsonlari bo‘lgan bolalarning va rivojlanishida nuqsonlari bo‘lmagan bolalarning bitta tashkilotda alohida guruhlarda, shuningdek inklyuziv guruhlarda birgalikda o‘qishini hamda tarbiyalanishini tashkil etishga qaratilgan maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi amalga oshirilishi ta’minlanuvchi turi qaysi javob variantida to’g’ri ifodalangan?",
    options: ["umumiy turdagi maktabgacha ta’lim tashkiloti", "ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkiloti", "inklyuziv guruhlarga ega maktabgacha ta’lim tashkiloti", "qo‘shma turdagi maktabgacha ta’lim tashkiloti"],
    correctAnswer: "qo‘shma turdagi maktabgacha ta’lim tashkiloti"
  },
  {
    question: "Maktabgacha ta’lim tashkiloti tashkil etishga ehtiyoj paydo qiluvchi birinchi sabab qaysi javob variantida to’g’ri ifodalangan?",
    options: ["hududda mavjud bo’lgan maktabgacha ta’lim tashkiloti aholini qoniqtirmay qo’yishi", "shaharlar, shaharchalar va boshqa aholi punktlari tashkil etilishi", "irqiy tabaqalanish paydo bo’lishi", "iqtisodiy yoki siyosiy noqulay vaziyatlar vujudga kelishi"],
    correctAnswer: "shaharlar, shaharchalar va boshqa aholi punktlari tashkil etilishi"
  },
  {
    question: "Maktabgacha ta’lim tashkiloti tashkil etishga ehtiyoj paydo qiluvchi ikkinchi sabab qaysi javob variantida to’g’ri ifodalangan?",
    options: ["hududda mavjud bo’lgan maktabgacha ta’lim tashkiloti aholini qoniqtirmay qo’yishi", "irqiy tabaqalanish paydo bo’lishi", "iqtisodiy yoki siyosiy noqulay vaziyatlar vujudga kelishi", "turar joy majmualari qurilishi"],
    correctAnswer: "turar joy majmualari qurilishi"
  },
  {
    question: "Maktabgacha ta’lim tashkiloti tashkil etishga ehtiyoj paydo qiluvchi uchinchi sabab qaysi javob variantida to’g’ri ifodalangan? cheklangan soni oshib ketishi",
    options: ["hududda mavjud bo’lgan maktabgacha ta’lim tashkiloti aholini qoniqtirmay qo’yishi", "irqiy tabaqalanish paydo bo’lishi", "tegishli hududda maktabgacha bo‘lgan yoshdagi bolalarning qonunchilikda belgilangan", "iqtisodiy yoki siyosiy noqulay vaziyatlar vujudga kelishi"],
    correctAnswer: "tegishli hududda maktabgacha bo‘lgan yoshdagi bolalarning qonunchilikda belgilangan"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan birinchi vazifa qaysi qatorda to’g’ri keltirilgan?",
    options: ["bolani bir amallab maktab yoshigacha band qilinishi", "bolaning bilim jihatidan va intellektual rivojlanishi", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolani chiniqtirish"],
    correctAnswer: "bolaning bilim jihatidan va intellektual rivojlanishi"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan ikkinchi vazifa qaysi qatorda to’g’ri keltirilgan?",
    options: ["bolani bir amallab maktab yoshigacha band qilinishi", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolaning qonuniy vakillari bilan hamkorlik", "bolani chiniqtirish"],
    correctAnswer: "bolaning qonuniy vakillari bilan hamkorlik"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan uchinchi vazifa qaysi qatorda to’g’ri keltirilgan? millatlar va elatlarning urf-odatlari va an’analari bilan tanishtirishni",
    options: ["bolani bir amallab maktab yoshigacha band qilinishi", "bolalarni milliy hamda umuminsoniy qadriyatlar, O‘zbekiston Respublikasida yashovchi", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolani chiniqtirish"],
    correctAnswer: "bolalarni milliy hamda umuminsoniy qadriyatlar, O‘zbekiston Respublikasida yashovchi"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan to’rtinchi vazifa qaysi qatorda to’g’ri keltirilgan?",
    options: ["bolaning ijtimoiy moslashuvini taminlash", "bolani bir amallab maktab yoshigacha band qilinishi", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolani chiniqtirish"],
    correctAnswer: "bolaning ijtimoiy moslashuvini taminlash"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan beshinchi vazifa qaysi qatorda to’g’ri keltirilgan? tibbiy-psixologik ishlar amalga oshirilishini",
    options: ["alohida ta’lim olish ehtiyojlari bo‘lgan bolalar bilan pedagogik-tuzatish (korreksiyalash) va", "bolani bir amallab maktab yoshigacha band qilinishi", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolani chiniqtirish"],
    correctAnswer: "alohida ta’lim olish ehtiyojlari bo‘lgan bolalar bilan pedagogik-tuzatish (korreksiyalash) va"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturi orqali ro’yobga chiqarish ta’minlanishi zarur bo’lgan oltinchi vazifa qaysi qatorda to’g’ri keltirilgan?",
    options: ["bolani maktab yoshigacha band qilinishi", "bolalarni umumiy o‘rta ta’limga tayyorlash", "bolaga mustaqil ovqatlanishni o’rgatishni ta’minlash", "bolani chiniqtirish"],
    correctAnswer: "bolalarni umumiy o‘rta ta’limga tayyorlash"
  },
  {
    question: "Maktabgacha ta’lim tashkilotlarida o‘quv yili qaysi davrni o‘z ichiga oladi?",
    options: ["joriy yilning 2-sentabridan keyingi yilning 31-mayigacha bo‘lgan davrni", "joriy yilning 2-sentabridan keyingi yilning 31-avgustigacha bo‘lgan davrni", "joriy yilning 30-avgustidan keyingi yilning 31-mayigacha bo‘lgan davrni", "joriy yilning 5-sentabridan keyingi yilning 31-mayigacha bo‘lgan davrni"],
    correctAnswer: "joriy yilning 2-sentabridan keyingi yilning 31-mayigacha bo‘lgan davrni"
  },
  {
    question: "Maktabgacha ta’lim tashkilotlarida yozgi sog‘lomlashtirish davri qaysi davrni o‘z ichiga oladi?",
    options: ["joriy yilning 2-sentabridan keyingi yilning 31-avgustigacha bo‘lgan davrni", "joriy yilning 1-iyunidan 31-avgustigacha bo‘lgan davrni", "joriy yilning 30-avgustidan keyingi yilning 31-mayigacha bo‘lgan davrni", "joriy yilning 5-sentabridan keyingi yilning 31-mayigacha bo‘lgan davrni"],
    correctAnswer: "joriy yilning 1-iyunidan 31-avgustigacha bo‘lgan davrni"
  },
  {
    question: "Maktabgacha ta’lim tashkilotlaridagi bolalar qisqa vaqt bo‘ladigan guruhlarda bolalarning bo‘lishi davomiyligi necha soatni tashkil qiladi?",
    options: ["kuniga 9, 10,5 va 12 soat", "kuniga 5-7 soat", "kuniga 3-4 soat", "kuniga 1 va 2 soat"],
    correctAnswer: "kuniga 3-4 soat"
  },
  {
    question: "Maktabgacha ta’lim tashkilotlaridagi to‘liq kunli guruhlarda bolalarning bo‘lishi davomiyligi necha soatni tashkil qiladi?",
    options: ["kuniga 3-4 soat", "kuniga 9, 10,5 va 12 soat", "kuniga 5-7 soat", "kuniga 1 va 2 soat"],
    correctAnswer: "kuniga 9, 10,5 va 12 soat"
  },
  {
    question: "Quyidagi jumlada nuqtalar o’rnini mos javob bilan to’ldiring: Maktabgacha ta’lim tashkilotlarining bolalar 3-4 soat bo‘ladigan guruhlarida – … kerak bo‘lishi kerak",
    options: ["kunduzgi uyqu tashkil etilmaydi va bir martalik ovqatlantirish tashkil etilishi mumkin", "uch martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan bo‘lishi", "to‘rt martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan", "bolalarni ovqatlantirish mutlaqo shart emas"],
    correctAnswer: "kunduzgi uyqu tashkil etilmaydi va bir martalik ovqatlantirish tashkil etilishi mumkin"
  },
  {
    question: "Quyidagi jumlada nuqtalar o’rnini mos javob bilan to’ldiring: Maktabgacha ta’lim tashkilotlarining bolalar 9 — 10,5 soat bo‘ladigan guruhlarida – … kerak bo‘lishi kerak",
    options: ["kunduzgi uyqu tashkil etilmaydi va bir martalik ovqatlantirish tashkil etilishi mumkin", "uch martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan bo‘lishi", "to‘rt martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan", "bolalarni ovqatlantirish mutlaqo shart emas"],
    correctAnswer: "uch martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan bo‘lishi"
  },
  {
    question: "Quyidagi jumlada nuqtalar o’rnini mos javob bilan to’ldiring: Maktabgacha ta’lim tashkilotlarining bolalar 12 soat bo‘ladigan guruhlarida – … kerak bo‘lishi kerak",
    options: ["kunduzgi uyqu tashkil etilmaydi va bir martalik ovqatlantirish tashkil etilishi mumkin", "uch martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan bo‘lishi", "to‘rt martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan", "bolalarni ovqatlantirish mutlaqo shart emas"],
    correctAnswer: "to‘rt martalik ovqatlantirish tashkil etilishi va kunduzgi uyqu uchun sharoitlar yaratilgan"
  },
  {
    question: "Maktabgacha ta’lim yoshidagi bolaning go’daklik davri qaysi davrlarni qamrab oladi?",
    options: ["bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha", "tug‘ilganidan bir yoshgacha", "to‘rt yoshdan besh yoshgacha"],
    correctAnswer: "tug‘ilganidan bir yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim yoshidagi bolaning ilk bolalik davri qaysi davrlarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha", "to‘rt yoshdan besh yoshgacha"],
    correctAnswer: "bir yoshdan uch yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim yoshidagi bolaning maktabgacha bo‘lgan kichik yosh davri qaysi davrlarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha", "to‘rt yoshdan besh yoshgacha"],
    correctAnswer: "uch yoshdan to‘rt yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim yoshidagi bolaning maktabgacha bo‘lgan o‘rtacha yosh davri qaysi davrlarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "to‘rt yoshdan besh yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha"],
    correctAnswer: "to‘rt yoshdan besh yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim yoshidagi bolaning maktabgacha bo‘lgan katta yosh davri qaysi davrlarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "besh yoshdan olti yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha"],
    correctAnswer: "besh yoshdan olti yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi guruhlar yoshga doir toifalar yoki yoshga doir bo‘lmagan toifalar bo‘yicha to‘ldirilganda ilk rivojlanish guruhi necha yoshdagi bolalarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha", "besh yoshdan yetti yoshgacha"],
    correctAnswer: "tug‘ilganidan bir yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi guruhlar yoshga doir toifalar yoki yoshga doir bo‘lmagan toifalar bo‘yicha to‘ldirilganda kichik guruh necha yoshdagi bolalarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "uch yoshdan to‘rt yoshgacha", "besh yoshdan yetti yoshgacha"],
    correctAnswer: "uch yoshdan to‘rt yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi guruhlar yoshga doir toifalar yoki yoshga doir bo‘lmagan toifalar bo‘yicha to‘ldirilganda o‘rta guruh necha yoshdagi bolalarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "to‘rt yoshdan besh yoshgacha", "besh yoshdan yetti yoshgacha"],
    correctAnswer: "to‘rt yoshdan besh yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi guruhlar yoshga doir toifalar yoki yoshga doir bo‘lmagan toifalar bo‘yicha to‘ldirilganda katta guruh necha yoshdagi bolalarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "besh yoshdan olti yoshgacha", "bir yoshdan uch yoshgacha", "besh yoshdan yetti yoshgacha"],
    correctAnswer: "besh yoshdan olti yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi guruhlar yoshga doir toifalar yoki yoshga doir bo‘lmagan toifalar bo‘yicha to‘ldirilganda maktabga tayyorlov guruhi necha yoshdagi bolalarni qamrab oladi?",
    options: ["tug‘ilganidan bir yoshgacha", "bir yoshdan uch yoshgacha", "olti yoshdan yetti yoshgacha", "besh yoshdan yetti yoshgacha"],
    correctAnswer: "olti yoshdan yetti yoshgacha"
  },
  {
    question: "Maktabgacha ta’lim tashkilotidagi bolalar kechayu kunduz bo‘ladigan guruhlarda qancha miqdordagi bolalar qamrab olinadi?",
    options: ["ko‘pi bilan olti nafar bola", "ko‘pi bilan o’n nafar bola", "ko‘pi bilan besh nafar bola", "ko‘pi bilan to‘qq iz nafar bola"],
    correctAnswer: "ko‘pi bilan olti nafar bola"
  },
  {
    question: "Nodavlat maktabgacha ta’lim tashkilotlarida guruhlarni to‘ldirish tartibi kim tomonidan belgilanadi?",
    options: ["O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi", "davlat maktabgacha ta’lim tashkiloti mudirasi", "ushbu tashkilot muassisi", "MTT metodisti"],
    correctAnswer: "ushbu tashkilot muassisi"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining nutqida og‘ir nuqsonlari bo‘lgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan o’n nafar bola", "ko‘pi bilan to’qqiz nafar bola"],
    correctAnswer: "ko‘pi bilan o’n bir nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining kar bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan sakkiz nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining yaxshi eshitmaydigan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o’n bir nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining ko‘zi ojiz bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan sakkiz nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining ko‘zi yaxshi ko‘rmaydigan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o’n bir nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining tayanch-harakat apparati buzilgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan o’n sakkiz nafar bola", "ko‘pi bilan o’n besh nafar bola"],
    correctAnswer: "ko‘pi bilan o’n bir nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining gemiparez, monoparez, plegiya asoratlari bo‘lgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o’n bir nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining tserebral falaji sindromi asoratlari bo‘lgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan sakkiz nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining yengil darajada aqli zaif bo‘lgan aqliy nuqsonlari bor bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan besh nafar bola", "ko‘pi bilan o‘n ikki nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n ikki nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining o‘rtamiyona va o‘rtacha darajada aqli zaif bo‘lgan aqliy nuqsonlari bor bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining autizmga chalingan uch yoshdan katta bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining aqliy rivojlanishi kechikayotgan uch yoshdan katta bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o’n bir nafar bola", "ko‘pi bilan o‘n nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n ikki nafar bola"
  },
  {
    question: "Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotining murakkab nuqsonlari (ikki va undan ortiq nuqsoni) bo‘lgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "Inklyuziv guruhlarga ega maktabgacha ta’lim tashkilotining uch yoshgacha bo‘lgan bolalar uchun guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan yigirma besh nafar", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan to’qqiz nafar bola"
  },
  {
    question: "Inklyuziv guruhlarga ega maktabgacha ta’lim tashkilotining 25 nafar boladan iborat tarkibdagi uch yoshdan katta guruhida rivojlanishida jismoniy yoki ruhiy nuqsonlari bo‘lgan (yaxshi ko‘ra olmaydigan yoki yaxshi eshita olmaydigan yoki tayanch-harakat apparatida nuqsonlari bo‘lgan) bolalar qancha miqdordan oshmasligi lozim?",
    options: ["ko‘pi bilan uch nafar", "ko‘pi bilan bir nafar", "ko‘pi bilan ikki nafar bola", "bunday bolalar maktabgacha ta’lim tashkilotiga qabul qilinmaydi"],
    correctAnswer: "ko‘pi bilan uch nafar"
  },
  {
    question: "Inklyuziv guruhlarga ega maktabgacha ta’lim tashkilotining 25 nafar boladan iborat tarkibdagi uch yoshdan katta guruhida rivojlanishida jismoniy yoki ruhiy nuqsonlari bo‘lgan (ko‘rish ambliopiyasiga chalingan, ko‘zi g‘ilay yoki nutqida og‘ir nuqsonlari bo‘lgan yoki autizmga chalingan) bolalar qancha miqdordan oshmasligi lozim?",
    options: ["ko‘pi bilan bir nafar", "bu bolalar shifoxonaga yotqiziladi", "ko‘pi bilan ikki nafar bola", "bunday bolalar maktabgacha ta’lim tashkilotiga qabul qilinmaydi"],
    correctAnswer: "ko‘pi bilan ikki nafar bola"
  },
  {
    question: "Inklyuziv guruhlarga ega maktabgacha ta’lim tashkilotining 25 nafar boladan iborat tarkibdagi uch yoshdan katta guruhida nutqida og‘ir nuqsonlari bo‘lgan bolalar qancha miqdordan oshmasligi lozim?",
    options: ["ko‘pi bilan bir nafar", "ko‘pi bilan uch nafar", "ko‘pi bilan ikki nafar bola", "bunday bolalar maktabgacha ta’lim tashkilotiga qabul qilinmaydi"],
    correctAnswer: "ko‘pi bilan ikki nafar bola"
  },
  {
    question: "Inklyuziv guruhlarga ega maktabgacha ta’lim tashkilotining 25 nafar boladan iborat tarkibdagi uch yoshdan katta guruhida ruhiy rivojlanishida kechikayotgan bolalar qancha miqdordan oshmasligi lozim?",
    options: ["ko‘pi bilan bir nafar", "ko‘pi bilan uch nafar", "ko‘pi bilan ikki nafar bola", "bunday bolalar maktabgacha ta’lim tashkilotiga qabul qilinmaydi"],
    correctAnswer: "ko‘pi bilan ikki nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining qulog‘i kar bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola", "ko‘pi bilan o‘n nafar bola"],
    correctAnswer: "ko‘pi bilan sakkiz nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining qulog‘i yaxshi eshitmaydigan bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n ikki nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining ko‘zi ojiz bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola", "ko‘pi bilan o‘n nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining ko‘zi yaxshi ko‘rmaydigan bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola", "ko‘pi bilan o‘n ikki nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n ikki nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining tayanch-harakat apparati buzilgan bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan o‘n sakkiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n sakkiz nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining gemiparez, monoparez, plegiya asoratlari bo‘lgan bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n ikki nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan o‘n ikki nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining bolalar tserebral falaji sindromi asoratlari bor bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan to’qqiz nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining autizmga chalingan uch yoshdan katta bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "Qo‘shma turdagi maktabgacha ta’lim tashkilotining murakkab nuqsonlari (ikki va undan ortiq nuqsoni) bo‘lgan bolalar guruhlarida qancha miqdorda bolalar qamrab olingan bo’ladi?",
    options: ["ko‘pi bilan to’qqiz nafar bola", "ko‘pi bilan sakkiz nafar bola", "ko‘pi bilan o‘n nafar bola", "ko‘pi bilan besh nafar bola"],
    correctAnswer: "ko‘pi bilan besh nafar bola"
  },
  {
    question: "XIX asrning oxiri va XX asrning boshlarida Amerikada shakllangan “Ilmiy menejment” maktabi namoyandasi F.Teylor tamoyiliga binoan rahbar va mutaxassislarni kam malaka talab qiladigan ijrochilik mehnatidan va ularga xos bo‘lmagan vazifalardan ozod qilinishi talab etilgan bo‘lsa, ishchilarga nisbatan qanday talablar qo‘yilar edi? tashabbus ko‘rsatmasdan aniq hamda tez bajarish",
    options: ["Boshliqlarning barcha buyruqlarini xech qanday mulohaza yuritmasdan, biror bir shaxsiy", "Faoliyat jarayonidagi itoaktkorlik", "Tashabbus ko‘rsatmaslik", "Faqat o‘z funksional vazifalariniga ado etish"],
    correctAnswer: "Boshliqlarning barcha buyruqlarini xech qanday mulohaza yuritmasdan, biror bir shaxsiy"
  },
  {
    question: "Quyi pog‘ona menejerlari hamda yuqori pog‘ona menejerlari (top menejer) dan farqli o‘laroq, shu tashkiliy tuzilmaning bir nechta quyi pog‘onalarini funksional vazifalar asosida bog‘lab turuvchi menejerlar qanday nomlanadi?",
    options: ["O’rta pog‘ona ishchilari", "Oraliq pog‘ona menejerlari", "Yuqori va quyi pog‘onalarga xos bo‘lmagan menejerlar", "Brigada boshliqlari"],
    correctAnswer: "Oraliq pog‘ona menejerlari"
  },
  {
    question: "”Taym-menejment” tizimida qaysi aniq faktorlar hisobga olinmaydi?",
    options: ["Vaqt omillar", "Vaqt va xarajat omillar", "Hissiy, aqliy va quvvat omillari", "Miqdor va natija omillari"],
    correctAnswer: "Hissiy, aqliy va quvvat omillari"
  },
  {
    question: "”Taym-menejment” tizimi bo‘yicha faoliyatni rejalashtirish jarayonida qaysi omil vaqt omiliga teskari proporsional ravishda bo‘ladi?",
    options: ["Hissiy va aqliy omil", "Quvvat omili", "Qobiliyatlilik darajasi", "Imkoniyat"],
    correctAnswer: "Qobiliyatlilik darajasi"
  },
  {
    question: "Guruhlararo nizoning birinchi turini ko‘rsating?",
    options: ["shaxs bilan shaxs o‘rtasidagi", "ma’muriyat bilan shaxs o‘rtasidagi", "bo‘limlar bilan bo‘limlar o‘rtasidagi", "bo‘limlar bilan xodim o‘rtasidagi"],
    correctAnswer: "bo‘limlar bilan bo‘limlar o‘rtasidagi"
  },
  {
    question: "Guruhlararo nizoning ikkinchi turini ko‘rsating?",
    options: ["shaxs bilan shaxs o‘rtasidagi", "ma’muriyat bilan shaxs o‘rtasidagi", "bo‘limlar bilan xodim o‘rtasidagi", "ma’muriyat bilan kasaba uyushmasi o‘rtasidagi"],
    correctAnswer: "ma’muriyat bilan kasaba uyushmasi o‘rtasidagi"
  },
  {
    question: "Guruhlararo nizoning uchinchi turini ko‘rsating?",
    options: ["shaxs bilan shaxs o‘rtasidagi", "bo‘limlar bilan ma’muriyat o‘rtasidagi", "ma’muriyat bilan shaxs o‘rtasidagi", "bo‘limlar bilan xodim o‘rtasidagi"],
    correctAnswer: "bo‘limlar bilan ma’muriyat o‘rtasidagi"
  },
  {
    question: "Guruhlararo nizoning to’rtinchi turini ko‘rsating?",
    options: ["shaxs bilan shaxs o‘rtasidagi", "bo‘limlar bilan kasaba uyushmasi o‘rtasidagi", "ma’muriyat bilan shaxs o‘rtasidagi", "bo‘limlar bilan xodim o‘rtasidagi"],
    correctAnswer: "bo‘limlar bilan kasaba uyushmasi o‘rtasidagi"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya tizimini ilmiy-uslubiy jihatdan ta’minlashning birinchi vazifasi qaysi javobda keltirilgan? pul ajratilishini ta’minlash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "ta’lim-tarbiya jarayoniga ilg‘or pedagogik va axborot texnologiyalarini joriy etish", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "ta’lim-tarbiya jarayoniga ilg‘or pedagogik va axborot texnologiyalarini joriy etish"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya tizimini ilmiy-uslubiy jihatdan ta’minlashning ikkinchi vazifasi qaysi javobda keltirilgan? pul ajratilishini ta’minlash ishlab chiqarish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim tashkilotlari uchun o‘quv-uslubiy va didaktik materiallar ishlab chiqish va", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "maktabgacha ta’lim tashkilotlari uchun o‘quv-uslubiy va didaktik materiallar ishlab chiqish va"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya tizimini ilmiy-uslubiy jihatdan ta’minlashning uchinchi vazifasi qaysi javobda keltirilgan? pul ajratilishini ta’minlash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya sohasida ilmiy tadqiqotlar olib borish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "maktabgacha ta’lim va tarbiya sohasida ilmiy tadqiqotlar olib borish"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya tizimini ilmiy-uslubiy jihatdan ta’minlashning to’rtinchi vazifasi qaysi javobda keltirilgan? pul ajratilishini ta’minlash etish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish", "maktabgacha ta’lim va tarbiyani boshqarishning zamonaviy uslublarini ishlab chiqish va joriy"],
    correctAnswer: "maktabgacha ta’lim va tarbiyani boshqarishning zamonaviy uslublarini ishlab chiqish va joriy"
  },
  {
    question: "Maktabgacha ta’lim va tarbiya tizimini ilmiy-uslubiy jihatdan ta’minlashning beshinchi vazifasi qaysi javobda keltirilgan? samaradorligini tahlil qilish hamda baholash pul ajratilishini ta’minlash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya tizimiga joriy etiladigan ta’lim uslublari va dasturlari", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "maktabgacha ta’lim va tarbiya tizimiga joriy etiladigan ta’lim uslublari va dasturlari"
  },
  {
    question: "Quyidagi tashkilotlardan qaysi biri maktabgacha ta’lim va tarbiya tizimining ilmiy-uslubiy ta’minotini amalga oshiradi? ularning malakasini oshirish institutlari (kurslari)",
    options: ["Maktabgacha ta’lim va tarbiya tizimining rahbar va pedagog kadrlarini qayta tayyorlash hamda", "Toshkent Fond birjasi", "Birlashgan Millatlar tashkiloti", "Yevropa Tiklanish va Taraqqiyot banki"],
    correctAnswer: "Maktabgacha ta’lim va tarbiya tizimining rahbar va pedagog kadrlarini qayta tayyorlash hamda"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkiloti direktorining huquq va majburiyatlari qaysi normativ hujjat bilan belgilanadi? hujjatlar, davlat maktabgacha ta’lim tashkilotining ustavi, shuningdek mehnat shartnomasida",
    options: ["O‘zbekiston Respublikasining Konstitutsiyasida", "Davlat maktabgacha ta’lim tashkiloti direktorining huquq va majburiyatlari normativ-huquqiy", "Byudjet Kodeksida", "O‘zbekiston Respublikasining “Davlat tili” haqidagi Qonunida"],
    correctAnswer: "Davlat maktabgacha ta’lim tashkiloti direktorining huquq va majburiyatlari normativ-huquqiy"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining rahbari kim?",
    options: ["Xalq ta’limi vaziri", "Metodist", "Direktor", "Maktabgacha ta’lim vaziri"],
    correctAnswer: "Direktor"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan birinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash takomillashtirish masalalarini ko‘rib chiqish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "davlat maktabgacha ta’lim tashkilotida ta’lim-tarbiya jarayonini tashkil etish va", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish"],
    correctAnswer: "davlat maktabgacha ta’lim tashkilotida ta’lim-tarbiya jarayonini tashkil etish va"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan ikkinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash yuklamasini belgilash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "davlat maktabgacha ta’lim tashkilotining ish rejasini va pedagog xodimlarning pedagogik", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "davlat maktabgacha ta’lim tashkilotining ish rejasini va pedagog xodimlarning pedagogik"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan uchinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish", "davlat maktabgacha ta’lim tashkilotining ta’lim dasturini amalga oshirish natijalarini baholash"],
    correctAnswer: "davlat maktabgacha ta’lim tashkilotining ta’lim dasturini amalga oshirish natijalarini baholash"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan to’rtinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash tartibini belgilash",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "davlat maktabgacha ta’lim tashkilotining bolaning qonuniy vakillari bilan o‘zaro munosabatlari", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "davlat maktabgacha ta’lim tashkilotining bolaning qonuniy vakillari bilan o‘zaro munosabatlari"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan beshinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash ijodiy tashabbuskorligini rivojlantirish, ta’lim va tarbiya jarayoniga ilm-fan yutuqlarini va ilg‘or pedagogik tajribani joriy etish masalalarini muhokama qilish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "davlat maktabgacha ta’lim tashkiloti pedagog xodimlarining malakasini oshirish, ularning", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "davlat maktabgacha ta’lim tashkiloti pedagog xodimlarining malakasini oshirish, ularning"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan oltinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash masalalarini ko‘rib chiqish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "davlat maktabgacha ta’lim tashkilotining xodimlarini ma’naviy va moddiy rag‘batlantirish", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish"],
    correctAnswer: "davlat maktabgacha ta’lim tashkilotining xodimlarini ma’naviy va moddiy rag‘batlantirish"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotining pedagogik kengashi amalga oshirishi lozim bo’lgan yettinchi vazifa qaysi javobda keltirilgan? pul ajratilishini ta’minlash eshitish",
    options: ["maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish", "maktabgacha ta’lim va tarbiya muassasalarini yangitdan barpo qilish uchun davlat byudjetidan", "maktabgacha ta’lim va tarbiya muassasalarini bir hududdan boshqa hududga ko’chirish", "davlat maktabgacha ta’lim tashkiloti rahbarining va pedagog xodimlarining hisobotlarini"],
    correctAnswer: "davlat maktabgacha ta’lim tashkiloti rahbarining va pedagog xodimlarining hisobotlarini"
  },
  {
    question: "Jismoniy yoki ruhiy rivojlanishida turli nuqsonlar bo‘lgan bolalarga qarab turish qaysi mablag’lar hisobidan amalga oshiriladi?",
    options: ["homiylar mablag’lari asosida amalga oshiriladi", "qisman yoki to‘liq davlat ta’minoti asosida amalga oshiriladi", "vasiylar mablag’lari asosida amalga oshiriladi", "nogiron bolaning merosi hisobidan amalga oshiriladi"],
    correctAnswer: "qisman yoki to‘liq davlat ta’minoti asosida amalga oshiriladi"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotlarining xodimlari uchun belgilanadigan ikkinchi malaka toifasi qaysi javobda to’g’ri berilgan? olingan oliy ma’lumotga ega mutaxassis",
    options: ["o’rta malaka", "bakalavr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy etilguniga qadar", "quyi malaka toifasi", "eng yuqori malaka toifasi"],
    correctAnswer: "bakalavr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy etilguniga qadar"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotlarining xodimlari uchun belgilanadigan uchinchi malaka toifasi qaysi javobda to’g’ri berilgan? etilguniga qadar olingan oliy ma’lumotga ega ikkinchi toifali mutaxassis",
    options: ["o’rta malaka", "quyi malaka toifasi", "eng yuqori malaka toifasi", "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy"],
    correctAnswer: "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotlarining xodimlari uchun belgilanadigan to’rtinchi malaka toifasi qaysi javobda to’g’ri berilgan? etilguniga qadar olingan oliy ma’lumotga ega birinchi toifali mutaxassis",
    options: ["o’rta malaka", "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy", "quyi malaka toifasi", "eng yuqori malaka toifasi"],
    correctAnswer: "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy"
  },
  {
    question: "Davlat maktabgacha ta’lim tashkilotlarining xodimlari uchun belgilanadigan beshinchi malaka toifasi qaysi javobda to’g’ri berilgan? etilguniga qadar olingan oliy ma’lumotga ega oliy toifali mutaxassis",
    options: ["o’rta malaka", "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy", "quyi malaka toifasi", "eng yuqori malaka toifasi"],
    correctAnswer: "bakalavr, magistr darajasiga yoki oliy ta’lim darajasi bo‘yicha akademik darajalar joriy"
  },
  {
    question: "Motivatsiya regulyatorlari nechta turga bo‘linadi?",
    options: ["5", "4", "6", "3"],
    correctAnswer: "5"
  },
  {
    question: "Motivatsiyaning qiziqish va undash regulyatoriga xos bo‘lgan omilni aniqlang?",
    options: ["qiziq, zavqli ish", "ixcham ish joyi", "shovqinning past bo‘lishi", "ergonomika, dizayn holati"],
    correctAnswer: "qiziq, zavqli ish"
  },
  {
    question: "Motivatsiyaning rag‘batlantirish regulyatoriga xos bo‘lgan omilni aniqlang?",
    options: ["mukofot, dividendlarni berib turish", "oshxonaning mavjudligi", "toza, ozodalik darajasi", "shovqinning past bo‘lishi"],
    correctAnswer: "mukofot, dividendlarni berib turish"
  },
  {
    question: "Motivatsiyaning xavfsizlik regulyatoriga xos bo‘lgan omilni aniqlang?",
    options: ["toza, ozodalik darajasi", "oshxonaning mavjudligi", "shovqinning past bo‘lishi", "hurmat, kasbdoshlar va rahbarlar tomonidan tan olinishi"],
    correctAnswer: "hurmat, kasbdoshlar va rahbarlar tomonidan tan olinishi"
  },
  {
    question: "Motivatsiyaning shaxsiy o‘sish, yuksalish regulyatoriga xos bo‘lgan omilni aniqlang?",
    options: ["tashabbus, o‘zini ko‘rsatish va sinash imkoniyati", "ixcham ish joyi", "shovqinning past bo‘lishi", "ergonomika, dizayn holati"],
    correctAnswer: "tashabbus, o‘zini ko‘rsatish va sinash imkoniyati"
  },
  {
    question: "Davlat hokimiyati va boshqaruvi organlari tomonidan davlat mulki bo‘lgan mol-mulk negizida tashkil etilgan, davlat ta’lim standartlariga va davlat ta’lim talablariga muvofiq ta’lim beradigan muassasa nima?",
    options: ["Davlat ta’lim muassasasi", "Xususiy ta’lim muassasasi", "Aralash tipdagi muassasa", "Aksiyadorlik jamiyati"],
    correctAnswer: "Davlat ta’lim muassasasi"
  },
  {
    question: "Davlat tomonidan ta’limning mazmuni va sifatiga nisbatan belgilanadigan talablar majmui?",
    options: ["Davlat ta’lim muassasasi", "Davlat ta’lim standartlari", "Xususiy ta’lim muassasasi", "Aralash tipdagi muassasa"],
    correctAnswer: "Davlat ta’lim standartlari"
  },
  {
    question: "Ta’limning tuzilmasiga, mazmuniga va uni amalga oshirish shart-sharoitlariga, shuningdek ta’lim oluvchilarning jismoniy, shaxsiy, intellektual, ilmiy hamda kasbiy sifatlariga qo‘yiladigan majburiy talablar?",
    options: ["Davlat ta’lim talablari", "Davlat ta’lim standartlari", "Davlat ta’lim muassasasi", "Xususiy ta’lim muassasasi"],
    correctAnswer: "Davlat ta’lim talablari"
  },
  {
    question: "Shaxsning kasbiy faoliyatning muayyan turini bajarishga tayyorgarligini ifodalaydigan, ma’lumot to‘g‘risidagi tegishli hujjat bilan tasdiqlanadigan bilim, qobiliyat, mahorat va ko‘nikmalar darajasi?",
    options: ["Tarbiya", "Ta’lim", "Ta’lim kampusi", "Malaka"],
    correctAnswer: "Malaka"
  },
  {
    question: "Malaka berish bilan yakunlanadigan muayyan kasbiy tayyorgarlik turining nomi?",
    options: ["Mutaxassislik", "Malaka", "Tarbiya", "Ta’lim"],
    correctAnswer: "Mutaxassislik"
  },
  {
    question: "Davlat ta’lim standartlari, davlat ta’lim talablari va o‘quv dasturlariga muvofiq ta’lim xizmatlari ko‘rsatish faoliyatini amalga oshirish huquqini beradigan litsenziya asosida ta’lim xizmatlari ko‘rsatuvchi yuridik shaxs?",
    options: ["Nodavlat ta’lim tashkiloti", "Davlat ta’lim muassasasi", "Xususiy ta’lim muassasasi", "Aralash tipdagi muassasa"],
    correctAnswer: "Nodavlat ta’lim tashkiloti"
  },
  {
    question: "M.Smit tomonidan ishlab chiqilgan ijtimoiy ustanovkalar strukturasi nechta komponentdan tashkil topgan?",
    options: ["3 ta", "2 ta", "1 ta", "ba’zan 1, ba’zan 2 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Ijtimoiy ustanovkalarning 3 komponentli strukturasi kim tomonidan ishlab chiqilgan?",
    options: ["M.Smit", "A.Fayol", "F.Teylor", "A.Maslou"],
    correctAnswer: "M.Smit"
  },
  {
    question: "Yaponlarda bolalarni necha kishilik kichik guruhlarga bo’linadi",
    options: ["8 kishilik", "9 kishilik", "6 kishilik", "7 kishilik"],
    correctAnswer: "6 kishilik"
  },
  {
    question: "Talim jarayonini oqilona rivojlantirish va odilona tashkil etish uchun tarbiyachi qanday fikirlashi kerak",
    options: ["Konstruktiv", "Analitik", "Ijodiy", "Nutqiy"],
    correctAnswer: "Konstruktiv"
  },
  {
    question: "“Maktabgacha ta’lim” atamasi qachon va qaysi tashkilot tomonidan qabul qilingan",
    options: ["1997 yil YUNESKO;", "1999 yil YUNESEF;", "1997 yil Xalq Ta’limi Bo’limlari;", "1998 yil Xalq Ta’limi Vazirligi;"],
    correctAnswer: "1997 yil YUNESKO;"
  },
  {
    question: "Pedagogik boshqaruv uslublari to’g’ri keltirilgan qatorni toping.",
    options: ["Avtoritar, Demokratik, Liberal", "Liberal va demokratik", "boshqaruv uslublari sinf jmoasiga qarab shakllantiriladi", "do’stlik, hamkasblik, bir-biriga mehr muhabbat"],
    correctAnswer: "Avtoritar, Demokratik, Liberal"
  },
  {
    question: "Maktabgacha ta’lim va tarbiyaning Davlat ta‘lim standartlari qanday talablarni belgilaydi",
    options: ["Majburiy", "Ixtiyoriy", "Qat‘iy", "Erkin-ijodiy"],
    correctAnswer: "Majburiy"
  },
  {
    question: "Tashkilotchilik qobiliyatini aniqlang?",
    options: ["Irodaviy ta’sir ko‘rsatish", "O‘z mahoratlarini ko‘ra bilish", "Diqqatni safarband qilish", "Jamoani uyushtirish va ruhlantirish"],
    correctAnswer: "Jamoani uyushtirish va ruhlantirish"
  },
  {
    question: "Pedagogik texnika vositalari nimalardan iborat?",
    options: ["Sanat va muloqat", "Nutq va sanat", "Nutq va muloqat", "Maxotar va muloqat."],
    correctAnswer: "Nutq va muloqat"
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







