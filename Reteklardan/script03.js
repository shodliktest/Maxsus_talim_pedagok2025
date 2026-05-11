// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'qjjjjuiiikkkz1hhg1jnvhh2mishsuzhzhzhsbsbsnsnsnndarkerbot_remaining_indices';
const STATS_KEY = 'quizmarkerbot_stats';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Ontogenez rivojlanishning qanday zonasini tashkil etadi",
    options: ["Insonning tug'ilganidan umrining oxirigacha bo'lgan taraqqiyot davri", "Organizmning vujudga kelgan davri", "Organizmning vujudga kelgandan keyingi rivojlanishi", "Organizmning individual rivojlanish yo'li"],
    correctAnswer: "Organizmning individual rivojlanish yo'li"
  },
  {
    question: "Rivojlanish psixologiyasining to'liq ta'rifi qaysi bandda to'g'ri berilgan?",
    options: ["Inson psixikasining rivojlanish qonuniyatlari va xususiyatlari hamda shu rivojlanishning bosqichlari to'g'risidagi fandir", "O'smirlar va o'spirinlarning ruhiy rivojlanishini o'rganadigan fan", "Maktabgacha yoshdagi bolalarni psixo-fiziologik xususiyatlarini va rivojlanishini o'rganadigan fan", "Kichik maktab yoshi va keksalarning rivojlanish xususiyatlarini o'rganadigan fan"],
    correctAnswer: "Inson psixikasining rivojlanish qonuniyatlari va xususiyatlari hamda shu rivojlanishning bosqichlari to'g'risidagi fandir"
  },
  {
    question: "Rivojlanish psixologiyasini asosiy vazifasi qaysi bandda to'g'ri ko'rsatilgan?",
    options: ["Shaxsning kamol topish qonuniyatlari va turli yosh davridagi odamlarda vujudga keladigan psixik faoliyat, xolat va shart-sharoitlarning o'zaro ta'siri xususiyatlarini aniqlashdan iboratdir", "Bolalar psixologiyasining o'ziga xos xususiyatlarini o'rganish", "Inson psixikasini rivojlanish jarayonini o'rganish", "Insonlarning aqliy va jismoniy imkoniyatlarini qidirish, ishlab chiqarish samaradorligini oshirish"],
    correctAnswer: "Shaxsning kamol topish qonuniyatlari va turli yosh davridagi odamlarda vujudga keladigan psixik faoliyat, xolat va shart-sharoitlarning o'zaro ta'siri xususiyatlarini aniqlashdan iboratdir"
  },
  {
    question: "Senzitiv davr - bu",
    options: ["Senzitiv davr – biror psixik funksiya yoki xususiyatning rivojlanishidagi eng qulay davr", "Senzitiv davr – biror psixik funksiyaning namayon bo`lishi", "Senzitiv davr – biror psixik funksiya yoki xususiyatning namayon bo`lishi", "Senzitiv davr – bolalar psixologiyasining o'ziga xos xususiyatlari"],
    correctAnswer: "Senzitiv davr – biror psixik funksiya yoki xususiyatning rivojlanishidagi eng qulay davr"
  },
  {
    question: "Shaxsning shakllanishi va rivojlanishi qonuniyatlarini qaysi fan o'rganadi?",
    options: ["psixologiya", "etika", "odam anatomiyasi", "pedagogika"],
    correctAnswer: "psixologiya"
  },
  {
    question: "Inson ruhiyatining rivojlanish davrlarini aniqlash shu sohadagi ma'lumotlarni to'plash va ilmiy tadqiq etishni psixologiyaning qaysi sohasi o'rganadi?",
    options: ["yosh psixologiyasi", "ijtimoiy psixologiya", "oila psixologiyasi", "bolalar psixologiyasi"],
    correctAnswer: "yosh psixologiyasi"
  },
  {
    question: "Yosh davrlari psixologiyasi fanida psixikani o'rganish metodlarini 4 guruhga ajratib o'rgangan rus psixologi kim?",
    options: ["B.G.Ananev", "A.Lazurskiy", "A.Bine", "A.Simon"],
    correctAnswer: "B.G.Ananev"
  },
  {
    question: "Qiyoslash longidyud (uzluksiz) kompleks (ko'pyoqlama) metodlari qaysi metodlar guruhiga taaluqli?",
    options: ["tashkiliy", "empirik", "natijalarni qayta ishlash", "natijalarni sharxlash"],
    correctAnswer: "tashkiliy"
  },
  {
    question: "Shaxsning fanlar bo'yicha umumiy bilimdonlik darajasini asosan psixologiyaning qaysi metodi aniqlab beradi?",
    options: ["test", "anketa", "intervyu", "biografiya"],
    correctAnswer: "test"
  },
  {
    question: "O'quvchi shaxsini o'rganishda xatlar, kundaliklar, sinf jurnallari va tavsif nomasiga asoslanish psixologiyaning qaysi metodikasiga tegishli?",
    options: ["biografiya", "kuzatish", "intervyu", "test"],
    correctAnswer: "biografiya"
  },
  {
    question: "Bir yoki bir necha sinaluvchilar uzoq muddat xatto o'n yillab tekshirilishi qaysi metodikaga taaluqli?",
    options: ["longityud", "suxbat", "anketa", "sotsiometriya"],
    correctAnswer: "longityud"
  },
  {
    question: "Tabiiy eksperiment metodiga birinchi bo'lib kim asos solgan?",
    options: ["A.Lazurskiy", "A.Bine", "A.Simon", "B.G.Ananev"],
    correctAnswer: "A.Lazurskiy"
  },
  {
    question: "Ontogenezni filogenezning qisqa shaklda takrorlanishi deb tushuntiradigan ta'limot - bu?",
    options: ["Rekapitulyatsiya", "Psixoanaliz", "Genetik epistemologiya", "Tarixiy-madaniy konsepsiya"],
    correctAnswer: "Rekapitulyatsiya"
  },
  {
    question: "Quyidagi asarlarning qaysi biri Ibn Sinoning inson shaxsini shakllantirish to'g'risidagi jiddiy asar hisoblanadi?",
    options: ["Odob haqida", "Tib qonunlari", "Hikmat ma'nolari", "O'tmish yodgorliklari"],
    correctAnswer: "Odob haqida"
  },
  {
    question: "Inson va uning psixikasi haqidagi axloqiy-falsafiy mushohadalar yuritilgan \"Fozil odamlar shahri\" asarining muallifini toping",
    options: ["Abu Nasr Forobiyning", "Abu Rayhon Beruniy", "Yusuf Xos Hojib", "A.Navoiy"],
    correctAnswer: "Abu Nasr Forobiyning"
  },
  {
    question: "Dastlabki pedagogik-psixologik mazmundagi asarlarning yozilishi to`g`ri ko`rsatilgan qatorni toping",
    options: ["XVII-XVIII", "XI-XII", "XIII-XV", "XII-XV"],
    correctAnswer: "XVII-XVIII"
  },
  {
    question: "Nechanchi asrdan boshlab bolalar psixologiyasi bo'yicha muayyan tartibga, yo'nalishga va uslubga ega bo'lgan ilmiy fikrlar vujudga keldi",
    options: ["XVIII asrdan", "XV asrda", "XIII asrdan", "X asrdan"],
    correctAnswer: "XVIII asrdan"
  },
  {
    question: "\"Fanlar va bilim yurtlarining foydasi to'g'risida suhbat\" kitob muallifini toping",
    options: ["V.N.Tatishchev", "I.P.Volkov", "N.I.Novikov", "A.N.Radishchev"],
    correctAnswer: "V.N.Tatishchev"
  },
  {
    question: "\"Inson tarbiya predmeti\" asar muallifini toping",
    options: ["K.D.Ushinskiyning", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "K.D.Ushinskiyning"
  },
  {
    question: "Psixikaning reflektor xususiyatini aniqlagan olimni nomini toping",
    options: ["I.M.Sechenov", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "I.M.Sechenov"
  },
  {
    question: "Biogenetik qonunni kashf qilgan olimlar",
    options: ["F.Myuller va E.Gekkel", "I.M.Sechenov va A.P.Nechayev", "I.A.Sikorskiy", "K.D.Ushinskiy"],
    correctAnswer: "F.Myuller va E.Gekkel"
  },
  {
    question: ".......fikricha, chaqaloq (yangi tug'ilgan bola) hali odam hisoblanmaydi, balki faqat sut emizuvchi hayvondir; olti oylikdan oshgach, u psixik rivoji jihatidan faqat maymunlar darajasiga tenglashadi, ikki yoshida oddiy odam holiga keladi, besh yoshlarida ibtidoiy gala holidagi odamlar darajasiga yetadi, maktabga kirganidan boshlab ibtidoiy davrni boshidan kechiradi, kichik maktab yoshida uning ongi o'rta asr kishilari darajasiga, nihoyat, yetuklik davri (16-18 yoshlari)dagina hozirgi zamon kishilarining madaniy darajasiga erishadi. Ushbu fikr muallifini toping",
    options: ["V.Shtern", "I.M.Sechenov va A.P.Nechayev", "I.A.Sikorskiy", "K.D.Ushinskiy"],
    correctAnswer: "V.Shtern"
  },
  {
    question: "\"Rekapitulyatsiya qonuni\"ni (filogenezni qisqacha takrorlashni) psixologik o'sishning bosh qonuni deb hisoblaydi. Ushbu fikr qaysi olimga tegishli",
    options: ["S.Xoll", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "S.Xoll"
  },
  {
    question: "Bu nazariyada shaxsda ro'y beradigan o'zgarishlarni jamiyatning tuzilishi, ijtimoiylashish (sotsializatsiya) usullari, atrofdagi odamlar bilan o'zaro munosabat vositalari asosida tushuntiriladi",
    options: ["Sotsiogenetik", "Biogenetik", "Ijtimoiy", "Irsiy"],
    correctAnswer: "Sotsiogenetik"
  },
  {
    question: "Psixik jarayonlarning rivojlanishini birinchi darajali ahamiyatga ega deb hisoblaydigan oqim",
    options: ["Psixogenetik", "Biogenetik", "Sotsiogenetik", "Ijtimoiy"],
    correctAnswer: "Psixogenetik"
  },
  {
    question: "Go'daklikda tashqi dunyoga ongsiz \"ishonch\" tuyg'usi vujudga keladi. Buning bosh sababi ota-onaning mehr-muhabbati, g'amxo'rligi va jonkuyarligidir. Agar go'dakda ishonchning negizi paydo bo'lmay, borliqqa ishonchsizlik hissi tug'ilsa, voyaga yetgan odamlarda mahdudlik, umidsizlik vujudga kelishi shubhasizdir. Ushbu nazariyaning muallifi",
    options: ["E.Erikson", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "E.Erikson"
  },
  {
    question: "Insonning umrini o'ziga xos betakror xususiyatlarga molik 8 ta davrga ajratgan olimning nomini toping",
    options: ["E.Erikson", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "E.Erikson"
  },
  {
    question: "\"O'spirinlik davri psixologiyasi\" nomli asari muallifini toping",
    options: ["E.Shpranger", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "E.Shpranger"
  },
  {
    question: "Necha kunlik embrionda orqa miya shakllanishi",
    options: ["21 kunlik", "22 kunlik", "18 kunlik", "19 kunlik"],
    correctAnswer: "21 kunlik"
  },
  {
    question: "Inson rivojlanishining bosqichlariga shaxs sifatida tarkib topishini olti davrga ajratgan olimning nomini toping",
    options: ["R.Zazzo", "G.Grimm", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "R.Zazzo"
  },
  {
    question: "Ontogenezda insonning kamolotini o'n bir (11) davrlarga ajratishni lozim topgan olimni nomini to'g'ri ko'rsating",
    options: ["G.Grimm", "I.A.Sikorskiy", "A.P.Nechayev", "A.F.Lazurskiy"],
    correctAnswer: "G.Grimm"
  },
  {
    question: "Psixologiyada XX asrni yirik namoyandasi Z.Freyd qaysi nazariyaning vakili?",
    options: ["biogenetik-psixoanalitik", "sotsiogenetik", "psixogenetik", "kognetivistik"],
    correctAnswer: "biogenetik-psixoanalitik"
  },
  {
    question: "Psixogenetik nazariyaning namoyandasi E.Erikson \"Inson umrini o'ziga xos betakror xususiyatlarga molik\" nechta davrga ajratadi?",
    options: ["8 ta", "11 ta", "10 ta", "9 ta"],
    correctAnswer: "8 ta"
  },
  {
    question: "Biogenetik nazariyaning namoyandalari qaysi bandda to'g'ri ko'rsatilgan?",
    options: ["F.Myuller, E.Gekkel, V.Shtern, S.Xoll, E.Krechmer", "K.Levin, V.Vallon, J.Piaje", "Ch.Darvin, E.Torndayk, P.Jane", "K.Ushinskiy, P.Lesgaft, A.Lazurskiy"],
    correctAnswer: "F.Myuller, E.Gekkel, V.Shtern, S.Xoll, E.Krechmer"
  },
  {
    question: "\"Birinchi chaqoloqlik davri inqirozi\" - deb boshlanadigan davrlashtirish qaysi rus psixologiga tegishli?",
    options: ["L.Vigotskiy", "D.Elkonin", "B.Ananev", "P.Blonskiy"],
    correctAnswer: "L.Vigotskiy"
  },
  {
    question: "Go'dakda ijtimoiy ta'sirlanish ortib borishini atroflicha tadqiq qilgan frantsuz olimi?",
    options: ["Anri Vallon", "N.L.Figurin", "Z.Freyd", "Sh.Bvuler"],
    correctAnswer: "Anri Vallon"
  },
  {
    question: "O'sishning xususiyati bilan insonning tana tuzilishi tipi o'rtasida uzviy bog'liqlik mavjud - bu taxmin kim tomonidan ilgari surilgan?",
    options: ["E.Krechmer", "Anri Vallon", "N.L.Figurin", "Z.Freyd"],
    correctAnswer: "E.Krechmer"
  },
  {
    question: "Ta'lim va psixik o'sish bir-biridan mustaqildir\"-degan nazariya asoschisi kim?",
    options: ["Bine va Simon", "E.Krechmer", "Anri Vallon", "N.L.Figurin"],
    correctAnswer: "Bine va Simon"
  },
  {
    question: "Tug'ilgan chaqaloqning vazni tez kamaya boradi, sababini toping",
    options: ["Buning sababi undan suyuqlik moddasining chiqib ketishi, vaznsizlik holatidan atmosfera bosimiga, quyosh nuriga, turli xususiyatli moddalar ta'siriga, o'zgaruvchan havo haroratiga moslashish davrida ko'p kuch-quvvat sarflanishidir", "Buning sababi undan suyuqlik moddasining chiqib ketishi, vaznsizlik holatidan turli xususiyatli moddalar ta'siriga, o'zgaruvchan havo haroratiga moslashish davrida ko'p kuch-quvvat sarflanishidir", "Buning sababi undan suyuqlik moddasining chiqib ketishi, vaznsizlik holatidan atmosfera bosimiga, quyosh nuriga, turli xususiyatli moddalar ta'siriga", "Quyosh nuriga, turli xususiyatli moddalar ta'siriga, o'zgaruvchan havo haroratiga moslashish davrida ko'p kuch-quvvat sarflanishidir"],
    correctAnswer: "Buning sababi undan suyuqlik moddasining chiqib ketishi, vaznsizlik holatidan atmosfera bosimiga, quyosh nuriga, turli xususiyatli moddalar ta'siriga, o'zgaruvchan havo haroratiga moslashish davrida ko'p kuch-quvvat sarflanishidir"
  },
  {
    question: "Bosh suyaklari bolaning necha oyligida o'zaro qo'shib ketadi",
    options: ["Ikki oyligida", "Uch oyligida", "To'rt oyligida", "Besh oyligida"],
    correctAnswer: "Ikki oyligida"
  },
  {
    question: "Bosh suyakning peshona va tepa qismlari o'rtasida ........ deb ataladigan qalin parda va teri bilan qoplangan oraliq mavjud bo'ladi",
    options: ["Liqildoq", "Oraliq miya", "Orqa miya", "Uzunchoq miya"],
    correctAnswer: "Liqildoq"
  },
  {
    question: "Chaqaloqning miyasining og'irligi necha grammni tashkil qiladi",
    options: ["300-350", "350-400", "450-500", "600-700"],
    correctAnswer: "300-350"
  },
  {
    question: "Chaqaloqlik davrining kuchli jihatlari qay holatlarda ko'rinadi",
    options: ["Organizmidagi o'sish quvvatining tezligi", "Harakatchanligi", "Ko'p uxlashi", "Yig'lashi"],
    correctAnswer: "Organizmidagi o'sish quvvatining tezligi"
  },
  {
    question: "Chaqaloqlik davrida o'sishning normal holati",
    options: ["Har oyda ikki sm dan o'sadi", "Har oyda uch sm dan o'sadi", "Har oyda besh sm o'sadi", "Har oyda yetti sm o'sadi"],
    correctAnswer: "Har oyda ikki sm dan o'sadi"
  },
  {
    question: "Uning og'irligi har kuni necha gramdan ortib boradi",
    options: ["1,6-2 grammdan ortib boradi", "1,6-3 grammdan ortib boradi", "1,6-5 grammdan ortib boradi", "1,6-7 grammdan ortib boradi"],
    correctAnswer: "1,6-2 grammdan ortib boradi"
  },
  {
    question: "N.L.Figurin va M.P.Denisovalarning fikricha bolaning psixik dunyosida tetiklik, his-tuyg'usida esa atrof-muhitdan ta'sirlanish o'z aksini topadi, bolaning katta yoshdagi odamlarga o'z munosabatini bildirishi uning bundan keyingi o'sishini belgilovchi bosqich vazifasini o'taydi. Ushbu holatni qanday nomlagan",
    options: ["Jonlanish", "Harakatlanish", "Qo'zg'alish", "Emaklash"],
    correctAnswer: "Jonlanish"
  },
  {
    question: "L.S.Vigotskiy qaysi asarida bolaning voqelikka munosabati dastlab ijtimoiy munosabatdek tuyulishini, ana shu jihatdan uni ijtimoiy jonzot deyish mumkinligini uqtirdi.",
    options: ["\"Go'daklik davri\"", "\"Chaqaloqlik davri\"", "\"Ilk bolalik davri\"", "\"Yoshlik davri\""],
    correctAnswer: "\"Go'daklik davri\""
  },
  {
    question: "S.Fayans tajribasida go'dakka chiroyli va jozibador o'yinchoqlar necha sm masofadan ko'rsatilganda u butun vujudi bilan ularga intilgan",
    options: ["9 sm", "20 sm", "50 sm", "60 sm"],
    correctAnswer: "9 sm"
  },
  {
    question: "M.Yu.Kistyakovskaya fikricha, 3 oylikdan 6 oylikkacha bolada katta yoshdagi odamlar bilan qanday munosabatda bo'lish vujudga keladi. Qanday munosabat ko'zda tutilgan",
    options: ["Tanlab", "Eshitib", "Ko'rib", "Harakatlanib"],
    correctAnswer: "Tanlab"
  },
  {
    question: "Bolalar qaysi psixik jarayonlar orqali tevarak atrofdagi narsalarning shaklini katta-kichikligi va rangini bilib oladilar",
    options: ["Sezgi va idrok", "Tafakkur", "Tafakkur va hayol", "Xotira va hayol"],
    correctAnswer: "Sezgi va idrok"
  },
  {
    question: "Go'dak muomala qilayotgan notanish shaxsga bir oz tikiladi, keyin yo kulimsiraydi yoki undan yuzini o'giradi, hatto, qo'rqib yig'lab yuboradi. Bolada o'zini parvarish qilayotgan, boqayotgan yaqin kishilarga bog'lanib qolish sodir bo'ladi. Ushbu jarayon necha oylikda uchraydi",
    options: ["5-6 oylikda", "6-7 oylikda", "7-8 oylikda", "9-10 oylikda"],
    correctAnswer: "5-6 oylikda"
  },
  {
    question: "Go'dak necha oyligidan kattalar bilan dastlabki o'yin faoliyatini boshlaydi.",
    options: ["8-9 oylikdan", "9-10 oylikdan", "10-11 oylikda", "11-12 oylikda"],
    correctAnswer: "8-9 oylikdan"
  },
  {
    question: "Go'daklik davrida kattalar bilan faol aloqaga kirishish ehtiyoji tug'iladi va bu aloqa ...... davrigacha muloqotning o'ziga xos yangi shakli sifatida bolaning o'sishida muhim rol o'ynaydi.",
    options: ["Nutq", "Harakat", "O'yin", "Gapirishi"],
    correctAnswer: "Nutq"
  },
  {
    question: "Necha oylikdan bolada narsani idrok qilish va ushlab olish harakati o'rtasida uzviy aloqa vujudga keladi",
    options: ["7 oylikdan", "8 oylikdan", "9 oylikdan", "10 oylikdan"],
    correctAnswer: "7 oylikdan"
  },
  {
    question: "Go'dak necha oylik bo'lguncha g'udurlashni o'rganadi?",
    options: ["Ikki oylik", "Uch oylik", "To'rt oylik", "Besh oylik"],
    correctAnswer: "Ikki oylik"
  },
  {
    question: "Necha yoshda, inson zotiga xos eng muhim sifatlar, xarakter xislati, atrof-muhitga, o'zgalarga munosabat, xulq-atvor, tafakkur va ong kabi psixik aks ettirishning turli ko'rinishlari shakllanadi",
    options: ["1 yoshdan 3 yoshgacha", "2 yoshdan 3 yoshgacha", "3 yoshda", "4 yoshdan 5 yoshgacha"],
    correctAnswer: "1 yoshdan 3 yoshgacha"
  },
  {
    question: "Bir yoshli va bir yoshu ikki oylik bolada jismlar bilan muayyan harakatni amalga oshirishning nisbatan barqaror usullari shakllana boradi. Shunday harakatlar tobora ortadi va murakkablashadi, ularning mohiyati borgan sari chuqurlashadi, ko'lami esa kengayadi. Ushbu fikr muallifini toping.",
    options: ["R.Ya.Abramovich-Lextmanning", "D.B.Elkonin", "T.E.Konnikova", "N.A.Menchinskaya"],
    correctAnswer: "R.Ya.Abramovich-Lextmanning"
  },
  {
    question: "Bolalarda keng ko'lamli va ko'p miqdordagi predmetlarni tanish, idrok qilish, ularning xususiyatlarini o'zlashtirish ehtiyojining ortishi katta yoshdagi odamlar bilan muloqotga kirishish mayli, tuyg'usi va istagini kuchaytiradi. Ushbu fikr muallifini toping",
    options: ["D.B.Elkonin", "T.E.Konnikova", "N.A.Menchinskaya", "R.Ya.Abramovich-Lextmanning"],
    correctAnswer: "D.B.Elkonin"
  },
  {
    question: "Kattalar bolaning xohish-istaklarini tushunmasligi, imo-ishorasi va yuz-chehra harakatlariga pantomimikasiga (yuz bilan tana harakatlari qo'shilishi) e'tiborsizligi, bolaning ixtiyorsiz xatti-harakatiga batamom qarshilik ko'rsatishi, shuningdek, uning talabini bajarmasligi, qoniqtirmasligi, boladagi o'zgarishlarga oid bilimlardan bexabarligi, bu o'zgarishlarni oldindan seza olmasligi, bolalarda \"portlash\", \"lov etish\" kabi qanday ruhiy holatlarga olib keladi?",
    options: ["Affekt holatiga", "Qo'rquv holatiga", "Ishonchsizlik holatiga", "Qaysarlik holatiga"],
    correctAnswer: "Affekt holatiga"
  },
  {
    question: "F.I.Fradkina ilmiy-amaliy ahamiyatga molik ko'p ma'lumotlar to'plagan. Uning tajribasida ilk bolalik davrida tabiiy muloqot paytida bola biror so'zni necha kunda o'zlashtirgan",
    options: ["Bir kunda", "Ikki kunda", "Uch kunda", "Bir haftada"],
    correctAnswer: "Bir kunda"
  },
  {
    question: "F.I.Fradkina ilmiy-amaliy ahamiyatga molik ma'lumotlariga asosan biroq sun'iy sharoitda esa necha kun davomida o'sha so'z bildirgan predmetning timsolini ko'rsatish imkoniyatiga ega bo'lgan",
    options: ["10-11 kun davomida", "12-14 kun davomida", "20-25 kun davomida", "30 kun davomida"],
    correctAnswer: "10-11 kun davomida"
  },
  {
    question: "F.I.Fradkinaning ma'lumotiga ko'ra bolaning nutq boyligi 10 oylikda nechta so'zni tashkil etadi",
    options: ["1 tadan 5 tagacha", "3 tadan 6 tagacha", "4 tadan 7 tagacha", "7 tadan 8 tagacha"],
    correctAnswer: "1 tadan 5 tagacha"
  },
  {
    question: "F.I.Fradkinaning ma'lumotiga ko'ra bolaning nutq boyligi 11 oylikda nechta so'zni tashkil etadi",
    options: ["3 tadan 8 tagacha", "9 tadan 10 tagacha", "10 tadan 11 tagacha", "12 tadan 14 tagacha"],
    correctAnswer: "3 tadan 8 tagacha"
  },
  {
    question: "F.I.Fradkinaning ma'lumotiga ko'ra bolaning nutq boyligi 12 oylikda nechta so'zni tashkil etadi",
    options: ["7 tadan 16 tagacha", "10 tadan 15 tagacha", "11 tadan 16 tagacha", "16 tadan 18 tagacha"],
    correctAnswer: "7 tadan 16 tagacha"
  },
  {
    question: "Tushunishning eng qulay (senzitiv) davri necha yoshga to'g'ri keladi.",
    options: ["Bir yoshdan bir yarim yoshgacha", "Bir yoshdan ikki yarim yoshgacha", "Bir yoshdan ikki yoshgacha", "Bir yoshdan uch yoshgacha"],
    correctAnswer: "Bir yoshdan bir yarim yoshgacha"
  },
  {
    question: "Bola tilining grammatik qoidalariga muvofiq gap tuzishga necha yoshda harakat qiladi",
    options: ["Ikki yoshga to'lganda", "Uch yoshga to'lganda", "Ikki yarim yoshga to'lganda", "Uch yarim yoshga to'lganda"],
    correctAnswer: "Ikki yoshga to'lganda"
  },
  {
    question: "........fikricha, noqulay sharoitda bolaga tarbiyaviy ta'sir ko'rsatish unda o'jarlikni paydo qiladi. Ushbu fikr muallifini toping.",
    options: ["A.N.Golubevaning", "N.A.Menchinskaya", "A.P.Larinning", "D.B.Elkoninning"],
    correctAnswer: "A.N.Golubevaning"
  },
  {
    question: "Mazkur davrda nutq mazmunliroq, nutq faoliyati esa grammatik, morfologik va sintaksistik nuqtai nazardan to'g'ri tuzilishga ega bo'la boradi, bolaning bu boradagi faolligi mislsiz darajada o'zgaradi. Necha yosh ko'zda tutilgan",
    options: ["Uch yosh", "To'rt yosh", "Uch yarim yosh", "To'rt yarim yosh"],
    correctAnswer: "Uch yosh"
  },
  {
    question: "O'zining kattalar orasidagi o'rnini topish istagi, hissi \"Men davri\"ni vujudga keltiradi. Bolaning yangi ehtiyoj va intilishlari kattalar tomonidan g'ayritabiiy qabul qilinishi ular o'rtasida \"anglashilmovchilik\"ni keltirib chiqaradi. Necha yoshga to'g'ri keladi.",
    options: ["Uch yosh", "Olti yosh", "To'rt yosh", "Besh yosh"],
    correctAnswer: "Uch yosh"
  },
  {
    question: "........ davrida bolaning kattalarga qarshilik ko'rsatishi ham turli ko'rinishlarga ega bo'lib, ular o'tkinchi psixologik holat va hodisaga o'xshaydi.",
    options: ["Inqiroz davrida", "Otish davrida", "Farqlash davrida", "Harakat davrida"],
    correctAnswer: "Inqiroz davrida"
  },
  {
    question: "Shu davrda uning ruhiy dunyosida sifat va miqdor jihatdan turli o'zgarishlar ro'y beradi",
    options: ["3 yoshiga to'g'ri keladi", "3,5 yoshiga to'g'ri keladi", "4 yoshiga to'g'ri keladi", "4,5 yoshiga to'g'ri keladi"],
    correctAnswer: "3 yoshiga to'g'ri keladi"
  },
  {
    question: "Mazkur yoshdagi bola ba'zan o'ziga aytilgan so'zning mohiyatini tushunmasligi, anglab yetmasligi, goho o'yinga haddan tashqari berilib ketib, kattalarning ovozini eshitmay qolishi mumkin",
    options: ["3 yoshda", "3,5 yoshda", "4 yoshda", "4,5 yoshda"],
    correctAnswer: "3 yoshda"
  },
  {
    question: "........ faoliyatini vujudga keltiruvchi eng zarur omillardan biri - bolada o'z xatti-harakatini kattalar xatti-harakati bilan solishtirish, undan nusxa olish, aynan unga o'xshatish tuyg'usining mavjudligidir. Ushbu faoliyat turini aniqlang",
    options: ["Rolli o'yin", "Predmetli o'yin", "Harakatli o'yin", "Sport o'yinlari"],
    correctAnswer: "Rolli o'yin"
  },
  {
    question: "N.M.Aksarinaning ta'kidlashicha, o'yin o'z-o'zidan vujudga kelmaydi, buning uchun kamida uchta sharoit mavjud bo'lishi kerak. Aynan to'g'ri javobni toping",
    options: ["Bolaning ongida uni qurshab turgan voqelik to'g'risidagi xilma-xil taassurotlar tarkib topishi, har xil ko'rinishdagi o'yinchoqlar va tarbiyaviy ta'sir vositalarining muhayyoligi, bolaning kattalar bilan tez-tez muomala va muloqotga kirishuvi. Bunda kattalarning bolaga bevosita ta'sir ko'rsatish uslubi hal qiluvchi rol o'ynaydi", "Bolaning ongida uni qurshab turgan voqelik to'g'risidagi taassurotlar tarkib topishi, o'yinchoqlar va tarbiyaviy ta'sir vositalarining muhayyoligi, tez-tez muomala va muloqotga kirishuvi. Bunda kattalarning bolaga bevosita ta'sir ko'rsatish uslubi hal qiluvchi rol o'ynaydi", "Har xil ko'rinishdagi o'yinchoqlar va tarbiyaviy ta'sir vositalarining muhayyoligi, bolaning kattalar bilan tez-tez muomala va muloqotga kirishuvi. Bunda kattalarning bolaga bevosita ta'sir ko'rsatish uslubi hal qiluvchi rol o'ynaydi", "Bolaning ongida uni qurshab turgan voqelik to'g'risidagi xilma-xil taassurotlar tarkib topishi, har xil ko'rinishdagi o'yinchoqlar va tarbiyaviy ta'sir vositalarining muhayyoligi, bolaning kattalar bilan tez-tez muomala va muloqotga kirishuvi"],
    correctAnswer: "Bolaning ongida uni qurshab turgan voqelik to'g'risidagi xilma-xil taassurotlar tarkib topishi, har xil ko'rinishdagi o'yinchoqlar va tarbiyaviy ta'sir vositalarining muhayyoligi, bolaning kattalar bilan tez-tez muomala va muloqotga kirishuvi. Bunda kattalarning bolaga bevosita ta'sir ko'rsatish uslubi hal qiluvchi rol o'ynaydi"
  },
  {
    question: "Psixolog A.Arkin o'yinlarning nechta tavsifini tavsiya qiladi?",
    options: ["4 ta", "5 ta", "6 ta", "7 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Psixolog A.Arkin tavsifi bo'yicha \"ishlab chiqarishga, texnikaga doir\" o'yinlar tarkibiga kiradi?",
    options: ["qurilish, kasb-hunar, qishloq xo'jaligiga oid o'yinlar", "ro'zg'or, bog'cha, maktab, kundalik turmushga oid o'yinlar", "urush-urush o'yinlari", "kino, spektakl va boshqalarga oid"],
    correctAnswer: "qurilish, kasb-hunar, qishloq xo'jaligiga oid o'yinlar"
  },
  {
    question: "Psixolog A.Arkin tavsifi bo'yicha \"maishiy va ijtimoiy siyosatga doir\" o'yinlar tarkibiga kiradi?",
    options: ["ro'zg'or, bog'cha, maktab, kundalik turmushga oid o'yinlar", "qurilish, kasb-hunar, qishloq xo'jaligiga oid o'yinlar", "urush-urush o'yinlari", "kino, spektakl va boshqalarga oid o'yinlar"],
    correctAnswer: "ro'zg'or, bog'cha, maktab, kundalik turmushga oid o'yinlar"
  },
  {
    question: "Psixolog A.Arkin tavsifi bo'yicha \"dramalashtirilgan\" o'yinlar tarkibiga kiradi?",
    options: ["kino, spektakl va boshqalarga oid o'yinlar", "qurilish, kasb-hunar, qishloq xo'jaligiga oid o'yinlar", "urush-urush o'yinlari", "ro'zg'or, bog'cha, maktab, kundalik turmushga oid o'yinlar"],
    correctAnswer: "kino, spektakl va boshqalarga oid o'yinlar"
  },
  {
    question: "A.P.Usovaning ma'lumotiga ko'ra, 3-4 yoshli bolalarning o'yin faoliyati necha daqiqani tashkil etishi mumkin",
    options: ["10-15 daqiqani", "10-20 daqiqani", "10-25 daqiqani", "10-30 daqiqani"],
    correctAnswer: "10-15 daqiqani"
  },
  {
    question: "A.P.Usovaning ma'lumotiga ko'ra, 4-5 yoshli bolalarning o'yin faoliyati necha daqiqani tashkil etishi mumkin",
    options: ["40-50 daqiqa", "40-55 daqiqa", "50-55 daqiqa", "55-60 daqiqa"],
    correctAnswer: "40-50 daqiqa"
  },
  {
    question: "Kichik maktab yoshi necha yoshni tashkil etadi",
    options: ["6 yoshdan 10 (11) yoshgacha", "6 yoshdan 9 yoshgacha", "6 yoshdan 8 (11) yoshgacha", "6 yoshdan 7 (11) yoshgacha"],
    correctAnswer: "6 yoshdan 10 (11) yoshgacha"
  },
  {
    question: "Maktab ta'limiga tayyorlik ko'rayotgan bolada diqqat nisbatan qanday ko'rinishga ega deb hisoblash mumkin?",
    options: ["Bolada diqqat nisbatan uzoq muddatli va shartli ravishda barqaror ko'rinishga ega, deb hisoblash mumkin", "Bolada diqqat nisbatan barqaror ko'rinishga ega, deb hisoblash mumkin", "bolada xotira uzoq muddatli deb hisoblash mumkin", "bolaning ob'ektiv va sub'ektiv jihatdan maktab talabiga munosibligi nazarda tutiladi"],
    correctAnswer: "Bolada diqqat nisbatan uzoq muddatli va shartli ravishda barqaror ko'rinishga ega, deb hisoblash mumkin"
  },
  {
    question: "Kichik maktab yoshida diqqatning xususiyatlari (taqsimlanishi, ko'chishi, kuchi, barqarorligi, bo'linishi, tebranishi va boshqalar) qachon namoyon bo'ladigan to'g'ri javobni toping?",
    options: ["Bolaning rolli va syujetli o'yin faoliyatlarida, rasm chizish va ko'rish, yasash mashg'ulotlarida, loy hamda plastilindan narsa yasashda, katta yoshdagilar va tengqurlari nutqini idrok qilish va tushunishda, matematik amallarni bajarishda, hikoya tinglash hamda shaxsan o'zi ham tuzishda bevosita namoyon bo'ladi", "Bolaning rasm chizish va ko'rish, yasash mashg'ulotlarida, loy hamda plastilindan narsa yasashda, katta yoshdagilar va tengqurlari nutqini idrok qilish va tushunishda, matematik amallarni bajarishda, hikoya tinglash hamda shaxsan o'zi ham tuzishda bevosita namoyon bo'ladi", "Bolaning rolli va syujetli o'yin faoliyatlarida, rasm chizish va ko'rish, yasash mashg'ulotlarida, loy hamda plastilindan narsa yasashda, katta yoshdagilar va tengqurlari nutqini idrok qilish va tushunishda, matematik amallarni bajarishda", "Bolaning rolli va syujetli o'yin faoliyatlarida, rasm chizish va ko'rish, yasash mashg'ulotlarida, loy hamda plastilindan narsa yasashda, hikoya tinglash hamda shaxsan o'zi ham tuzishda bevosita namoyon bo'ladi"],
    correctAnswer: "Bolaning rolli va syujetli o'yin faoliyatlarida, rasm chizish va ko'rish, yasash mashg'ulotlarida, loy hamda plastilindan narsa yasashda, katta yoshdagilar va tengqurlari nutqini idrok qilish va tushunishda, matematik amallarni bajarishda, hikoya tinglash hamda shaxsan o'zi ham tuzishda bevosita namoyon bo'ladi"
  },
  {
    question: "Kichik maktab yoshidagi bolaning nutqining tuzilishi qanday bo'ladi",
    options: ["Bola nutqining tuzilishi milliy til grammatikasi qoidalariga mos, mantiqan izchil, ifodali, rang-barang tushunchalarga boy, miqdor va ko'lam jihatdan har qanday odam bilan fikr almashish, muloqotga kirishish uchun mutlaqo yetarlidir", "Bola nutqining tuzilishi mantiqan izchil, ifodali, rang-barang tushunchalarga boy, miqdor va ko'lam jihatdan har qanday odam bilan muloqotga kirishish uchun yetarlidir", "Bola nutqining tuzilishi milliy til grammatikasi qoidalariga mos, mantiqan izchil, tushunchalarga boy, miqdor va ko'lam jihatdan har qanday odam bilan fikr almashish, muloqotga kirishish uchun mutlaqo yetarlidir", "Bola nutqining tuzilishi milliy til grammatikasi qoidalariga mos, mantiqan izchil, ifodali, rang-barang tushunchalarga boy, odam bilan fikr almashish, muloqotga kirishish uchun mutlaqo yetarlidir"],
    correctAnswer: "Bola nutqining tuzilishi milliy til grammatikasi qoidalariga mos, mantiqan izchil, ifodali, rang-barang tushunchalarga boy, miqdor va ko'lam jihatdan har qanday odam bilan fikr almashish, muloqotga kirishish uchun mutlaqo yetarlidir"
  },
  {
    question: "Yirik psixologlarning tadqiqotlariga qaraganda oqilona tashkil qilingan ta'lim jarayoni mazkur yoshdagi bolalarning _____ jadal rivojlantiradi?",
    options: ["tafakkurini", "hissiyotini", "o'sishini", "xarakterini"],
    correctAnswer: "tafakkurini"
  },
  {
    question: "Olti yoshli bolaning ta'limga psixologik tayyorgarligi deganda nimani nazarda tutamiz?",
    options: ["Olti yoshli bolaning ta'limga psixologik tayyorgarligi to'g'risida fikr yuritganimizda, biz muayyan reja asosida tartibli, ko'p qirrali, maqsadga yo'naltirilgan, o'zaro bog'liq va mantiqiy ketma-ketlikka ega bo'lgan boshlang'ich ta'lim uchun zamin vazifasini o'tuvchi ruhiy taraqqiyotning zarur ko'rsatkichi va darajasini nazarda tutamiz", "Ta'limga psixologik tayyorgarligi to'g'risida fikr yuritganimizda, biz muayyan ko'p qirrali, maqsadga yo'naltirilgan, o'zaro bog'liq va mantiqiy ketma-ketlikka ega bo'lgan boshlang'ich ta'lim uchun zamin vazifasini o'tuvchi ruhiy taraqqiyotning zarur ko'rsatkichi va darajasini nazarda tutamiz", "Bolaning ta'limga psixologik tayyorgarligi to'g'risida fikr yuritganimizda, boshlang'ich ta'lim uchun zamin vazifasini o'tuvchi ruhiy taraqqiyotning zarur ko'rsatkichi va darajasini nazarda tutamiz", "Olti yoshli bolaning ta'limga psixologik tayyorgarligi to'g'risida fikr yuritganimizda, zarur ko'rsatkichi va darajasini nazarda tutamiz"],
    correctAnswer: "Olti yoshli bolaning ta'limga psixologik tayyorgarligi to'g'risida fikr yuritganimizda, biz muayyan reja asosida tartibli, ko'p qirrali, maqsadga yo'naltirilgan, o'zaro bog'liq va mantiqiy ketma-ketlikka ega bo'lgan boshlang'ich ta'lim uchun zamin vazifasini o'tuvchi ruhiy taraqqiyotning zarur ko'rsatkichi va darajasini nazarda tutamiz"
  },
  {
    question: "Bolani maktab ta'limiga psixologik tayyorlanishining sub'ektiv tomoniga............?",
    options: ["uning maktabda o'qish xohishi, intilishi, predmetlarga qiziqishi, katta yoshdagi odamlar bilan muloqotga kirishish istagi bilan uzviy bog'liqligi kiradi", "reja asosida, tartibli, maqsadga yo'naltirilgan, bola turmushi va faoliyatining tafovutlari, sharoitlari bilan uzviy bog'liqligi kiradi", "So'z-mantiq xotirasining mavjudligi ma'nosini tushunib esda olib qolish jarayonining samaradorligi bilan uzviy bog'liqligi kiradi", "idrokining o'tkirligi, ravshanligi, sofligi, aniqligi, o'zining qiziquvchanligi, dilkashligi, xayrixohligi, ishonuvchanligi, xayolining yorqinligi, xotirasining kuchliligi, tafakkurining yaqqolligi bilan uzviy bog'liqligi kiradi"],
    correctAnswer: "uning maktabda o'qish xohishi, intilishi, predmetlarga qiziqishi, katta yoshdagi odamlar bilan muloqotga kirishish istagi bilan uzviy bog'liqligi kiradi"
  },
  {
    question: "O'qishga salbiy munosabatni keltirib chiqaruvchi holatlar asosan............?",
    options: ["kattalarning qo'rqitishlari", "o'quv qurollarining yo'qligi", "turli kasalliklar", "chin yetimligi"],
    correctAnswer: "kattalarning qo'rqitishlari"
  },
  {
    question: "Kichik maktab yoshida miyaning og'irligi necha grammni tashkil etadi",
    options: ["1250-1400 grammni tashkil etadi", "1255-1400 grammni tashkil etadi", "1260-1400 grammni tashkil etadi", "1300-1400 grammni tashkil etadi"],
    correctAnswer: "1250-1400 grammni tashkil etadi"
  },
  {
    question: "Kichik maktab yoshidagi o'quvchidan ta'lim ................ talab qiladi?",
    options: ["muayyan darajadagi uyushqoqlikni, intizomlikni, irodaviy zo'r berishlikni, faollikni, maqsadga yo'naltirilgan faoliyatni", "o'ziga xoslikni, uning sihat-salomatligini", "fizika, matematikaga doir tushunchalarni o'zlashtirganligini", "syujetli o'yinlarni, rasm chizish va qurish-yasash mashg'ulotlarini o'zlashtirganligini"],
    correctAnswer: "muayyan darajadagi uyushqoqlikni, intizomlikni, irodaviy zo'r berishlikni, faollikni, maqsadga yo'naltirilgan faoliyatni"
  },
  {
    question: "Psixolog L.S.Slavina tadqiqotiga ko'ra boshlang'ich sinflarda.............................. oldini olish mumkin?",
    options: ["o'qish va o'yin faoliyatlarida ularni fikr va mulohaza yuritishga o'rgata borish natijasida muvaqqat turg'unlikning oldini olish mumkin", "maktab ta'limiga psixologik tayyorlanishining sub'ektiv tomonini oldini olish mumkin", "maktabda o'qish xohishi, intilishini oldini olish mumkin", "maktab ta'limiga nisbatan bo'lgan bunday salbiy munosabatning oldini olish mumkin"],
    correctAnswer: "o'qish va o'yin faoliyatlarida ularni fikr va mulohaza yuritishga o'rgata borish natijasida muvaqqat turg'unlikning oldini olish mumkin"
  },
  {
    question: "O'qituvchining .............. oldida ota-onalar, oilaning boshqa a'zolari, qarindosh-urug'lari, tanish-bilishlarining nufuzi keskin pasayadi?",
    options: ["obro'si", "bilimi", "mehnati", "madaniyati"],
    correctAnswer: "obro'si"
  },
  {
    question: "Yirik pedagog va psixolog olimlar ........................ va ularning shogirdlari kichik maktab yoshidagi o'quvchilarni baholash salbiy oqibatlarga olib kelish nuqtai nazarini yoqlaganlar",
    options: ["B.A.Suxomlinskiy, Sh.A.Amonashvili", "L.S.Slavina, N.M.Aksarina", "D.B.Elkonin, E.A.Arkin", "P.Usova, V.Zaporojets"],
    correctAnswer: "B.A.Suxomlinskiy, Sh.A.Amonashvili"
  },
  {
    question: "..................................... psixologiya faniga inson kamolotining \"Eng yaqin taraqqiyot zonasi\" va \"aktual faoliyat zonasi\" deb nomlangan tushunchalarni olib kirdi",
    options: ["L.S.Vigotskiy", "N.M.Aksarina", "D.B.Elkonin", "V.Zaporojets"],
    correctAnswer: "L.S.Vigotskiy"
  },
  {
    question: "Rus psixologi L.S.Vigotskiy, frantsuz psixologi J.Piajening qaysi kontseptsiyasini qattiq tanqid qiladi?",
    options: ["egotsentrik", "intellektual", "konkret operatsiyalar", "abstraktsiyalashtirish"],
    correctAnswer: "egotsentrik"
  },
  {
    question: "Kichik maktab yoshidagi o'quvchilarning aqliy analiz qilishlari nechta bosqichni bosib o'tadi?",
    options: ["ikkita bosqichni", "uchta bosqichni", "to'rtta bosqichni", "beshta bosqichni"],
    correctAnswer: "ikkita bosqichni"
  },
  {
    question: "............................ operatsiyasining muhim sharti narsa va hodisalar o'rtasidagi umumiylik, o'xshashlik, o'ziga xos xususiyat, bog'lanish va o'zaro munosabatlarning muhim belgilarini topish - bu?",
    options: ["Umumlashtirish", "aqliy analiz", "konkretlashtirish", "taqqoslash"],
    correctAnswer: "Umumlashtirish"
  },
  {
    question: "Gruzin psixologi ..................................... tadqiqotlarining ko'rsatishiga qaraganda, kichik maktab yoshidagi o'quvchilar kit va delfinni baliq deb hisoblaganlar?",
    options: ["R.G.Natadze", "N.Uznadze", "D.B.Elkonin", "V.Zaporojets"],
    correctAnswer: "R.G.Natadze"
  },
  {
    question: "...................................... tafakkurning shunday jarayonidirki, kishi bilish faoliyatining dastlabki bosqichi hisoblanadi.",
    options: ["Taqqoslash", "Umumlashtirish", "Mavhumlashtirish", "Yaqqollashtirish"],
    correctAnswer: "Taqqoslash"
  },
  {
    question: "O'qituvchiga yuksak ishonch, unga bevosita taqlid insonni inson tomonidan idrok qilinishi ..............?",
    options: ["Identifikatsiya bosqichiga o'xshab ketadi", "Pedagogik nazokat (takt) bosqichiga o'xshab ketadi", "Konkret ko'rsatmalar bosqichiga o'xshab ketadi", "Axloqiy mulohazalar bosqichiga o'xshab ketadi"],
    correctAnswer: "Identifikatsiya bosqichiga o'xshab ketadi"
  },
  {
    question: "O'qituvchi o'quvchilarning ...... xususiyatlarini qanchalik chuqur o'rgangan bo'lsa, ularga shunchalik ta'sir o'tkazish kuchi sezilarli va samarali bo'ladi",
    options: ["individual-tipologik", "tasavvur va mulohaza", "xarakterologik", "nerv sistemasini"],
    correctAnswer: "individual-tipologik"
  },
  {
    question: "N.A.Menchinskaya, Yu.K.Babanskiy kabi olimlarning ilmiy tekshirish ishlarining ko'rsatishicha, o'zlashtirmovchi o'quvchilarni keltirib chiqaruvchi sabablar quyidagilardan iboratdir?",
    options: ["Pedagogik, psixologik, neyrofiziologik kamchiliklar", "Individual-tipologik kamchiliklar", "Tasavvur va mulohazaviy kamchiliklar", "Xarakterologik kamchiliklar"],
    correctAnswer: "Pedagogik, psixologik, neyrofiziologik kamchiliklar"
  },
  {
    question: "O'quv faoliyatining past darajada olib borilishi, o'z faoliyatidagi mahsuldorlikning yo'qligi, darslarning ko'p qoldirilganligi - davomatning pastligi; ta'limda individual munosabatning joriy yetilmaganligi, ota-onalar va oila a'zolari tomonidan o'quvchilarni nazoratdan chetda qoldirilganlik va g'amxo'rlik qilishning zaifligi - quyidagi o'zlashtirmovchi o'quvchilarni keltirib chiqaruvchi sabablarni mazmuniga tegishli?",
    options: ["Pedagogik kamchiliklar", "Psixologik kamchiliklar", "Neyrofiziologik kamchiliklar", "Individual-tipologik kamchiliklar"],
    correctAnswer: "Pedagogik kamchiliklar"
  },
  {
    question: "O'quv faoliyati motivlarining tarkib topmaganligi va xulq beqarorligi, intizomning yo'qligi, ta'limda emotsional va irodaviy zo'r berishlikning rivojlanmaganligi, o'quvchining bilim tizimida ko'plab uzilishlarining mavjudligi, bilim olish uchun zarur o'quv ko'nikmalari va malakalarining shakllanmaganligi; o'quvchining bilish qobiliyati, aqliy imkoniyati darajasining pastligi - quyidagi o'zlashtirmovchi o'quvchilarni keltirib chiqaruvchi sabablarni mazmuniga tegishli?",
    options: ["Psixologik kamchiliklar", "Pedagogik kamchiliklar", "Neyrofiziologik kamchiliklar", "Individual-tipologik kamchiliklar"],
    correctAnswer: "Psixologik kamchiliklar"
  },
  {
    question: "O'quvchi organizmida umumiy susayishning kuchayganligi, ko'rish, eshitish, artikulyatsiya, nutq apparatining buzilganligi, bosh miya yarim sharlari po'stlog'ining biron qismida yuz beradigan barqaror yoki muvaqqat tormozlanish hodisasining yuzaga kelganligi - quyidagi o'zlashtirmovchi o'quvchilarni keltirib chiqaruvchi sabablarni mazmuniga tegishli?",
    options: ["Neyrofiziologik kamchiliklar", "Pedagogik kamchiliklar", "Psixologik kamchiliklar", "Individual-tipologik kamchiliklar"],
    correctAnswer: "Neyrofiziologik kamchiliklar"
  },
  {
    question: "N.A.Menchinskaya, Yu.K.Babanskiy kabi olimlarning ilmiy tekshirish ishlarining ko'rsatishicha, o'zlashtirmovchi o'quvchilarni keltirib chiqaruvchi sabablar nechta?",
    options: ["3 ta", "5 ta", "6 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Hozirgi ...... o'tmishdoshlariga nisbatan jismoniy, aqliy va siyosiy jihatdan birmuncha ustunlikka ega?",
    options: ["O'smirlar", "O'spirinlar", "Ilk o'spirinlar", "Go'daklar"],
    correctAnswer: "O'smirlar"
  },
  {
    question: "...................... va uning shogirdlari o'smirlik davrini baholashda insonga azaldan berilgan qandaydir ilk mayl nishonasi sifatida vujudga keladigan o'z mavqeini belgilashga ongsiz intilishni eng muhim asos deb hisoblaydilar?",
    options: ["Z.Freyd", "R.Kulen", "A.Markosyan", "S.Makarenko"],
    correctAnswer: "Z.Freyd"
  },
  {
    question: "...................... Z.Freyd nazariyasini mutlaqo asossizligini ta'kidlab, o'smirda imkoniyat bilan talabchanlik o'rtasidagi kelishmovchilik, o'zini ko'rsatishga moyillik va o'z ichki dunyosiga qiziqishning namoyon bo'lishi bilan xarakterlanishini asoslab berdilar?",
    options: ["Rus psixologlari", "Amerikalik psixologlar", "Nemis psixologlari", "Fransuz psixologlari"],
    correctAnswer: "Rus psixologlari"
  },
  {
    question: "Amerikalik psixolog ...................... o'smirlik davri haqidagi biogenetik nazariyani qattiq tanqid qilib, o'smirlik davri ijtimoiy-axloqiy kategoriyadir, degan g'oyani olg'a suradi?",
    options: ["R.Kulen", "Z.Freyd", "D.Moreno", "Z.Ayzenk"],
    correctAnswer: "R.Kulen"
  },
  {
    question: "Amerikalik psixolog R.Kulen fikricha, o'smirlik davrida asosiy ijtimoiy axloqiy kategoriyalar nechta?",
    options: ["3 ta", "4 ta", "5 ta", "6 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "O'smirlik davrida bo'y bilan tana nomutanosib ravishda o'sadi, natijada ...................?",
    options: ["oriq, nimjon va uzun bo'yli bo'lib ko'rinadilar", "yurakning hajmi va tiriklik sig'imi har yili 25 foiz kattalashadi", "qon bosimi birmuncha oshadi", "Bu davrda tana intensiv o'sadi"],
    correctAnswer: "oriq, nimjon va uzun bo'yli bo'lib ko'rinadilar"
  },
  {
    question: "Bu paytda yurak hajmi jihatidan ancha kattalashadi, anchagina baquvvatlashadi, ancha kuchli ishlay boshlaydi, ammo ..................?",
    options: ["Qon tomirlarining diametri bo'lsa taraqqiyotdan orqada qoladi", "Qon aylanishi vaqtincha buziladi", "Qon bosimini ko'tariladi", "Zaiflik, nisbatan tez toliqish holatlari vujudga keladi"],
    correctAnswer: "Qon tomirlarining diametri bo'lsa taraqqiyotdan orqada qoladi"
  },
  {
    question: "Qaysi yoshda o'smirning ichki sekretsiya bezlari qayta quriladi?",
    options: ["11-12 yoshda", "11-13 yoshda", "12-13 yoshda", "13-14 yoshda"],
    correctAnswer: "11-12 yoshda"
  },
  {
    question: "O'smirlarda gipofizning o'rta qismi kuchayishi sababli pigmentlar almashinishi o'zgaradi, natijada ...............?",
    options: ["soch qorayishi, yuzlarning oqarishi namoyon bo'ladi", "asabiy bo'lib qoladilar", "jinsiy yetilish kuchayadi", "organizm jo'shqin o'sadi"],
    correctAnswer: "soch qorayishi, yuzlarning oqarishi namoyon bo'ladi"
  },
  {
    question: "Mazkur yosh davrida jinsiy bezlar faoliyati kuchayadi?",
    options: ["O'smirlik", "O'spirinlik", "Talabalik", "Yetuklik"],
    correctAnswer: "O'smirlik"
  },
  {
    question: "O'smirlar jinsiy yetilish sirlarining necha foizini ota-onadan oladi?",
    options: ["17 foizini", "27 foizini", "37 foizini", "47 foizini"],
    correctAnswer: "17 foizini"
  },
  {
    question: "Akseleratsiya jarayoni quyosh nurining ta'siri natijasida sodir bo'ladi - bu g'oya qaysi nazariyaga taaluqli?",
    options: ["geliogen", "geteroziya", "nutritiv", "urbanizatsiya"],
    correctAnswer: "geliogen"
  },
  {
    question: "Geliogen nazariyasi ...................... yilda chet el olimlari tomonidan yaratilgan?",
    options: ["1936", "1946", "1970", "1982"],
    correctAnswer: "1936"
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







