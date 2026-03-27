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
    question: "Amallarni bajaring. 180 · 30 + 2960 − 5511",
    options: ["2849", "2859", "1599", "3257"],
    correctAnswer: "2849"
  },
  {
    question: "Amallarni bajaring. 150 · 22 + 5800 − 2023",
    options: ["2849", "2859", "1599", "7077"],
    correctAnswer: "7077"
  },
  {
    question: "Santimetr va millimetrda ifodalang: 12 dm 5cm 7 mm =",
    options: ["12 dm 57 cm", "125 cm 7mm", "1257 cm", "1257 mm"],
    correctAnswer: "125 cm 7mm"
  },
  {
    question: "Santimetr va millimetrda ifodalang: 17 dm 8 cm 9 mm =",
    options: ["17 dm 89 cm", "178 cm 9mm", "1789 cm", "189 mm"],
    correctAnswer: "178 cm 9mm"
  },
  {
    question: "Akmal bilan Madina qiziqarli masalalar yechishdi. Akmal: \"Men Madina yechgan masalalarning yarmini va yana 10 ta masala yechdim\", Madina: \"Men Akmal nechta masala yechgan bo'lsa, shuncha va yana 20 ta masala yechdim\". Ular jami nechta masala yechganlar?",
    options: ["40", "60", "80", "100"],
    correctAnswer: "100"
  },
  {
    question: "Akmal bilan Madina qiziqarli masalalar yechishdi. Akmal: \"Men Madina yechgan masalalarning yarmini va yana 10 ta masala yechdim\", Madina: \"Men Akmal nechta masala yechgan bo'lsa, shuncha va yana 20 ta masala yechdim\". Akmal nechta masala yechgan?",
    options: ["40", "60", "80", "100"],
    correctAnswer: "40"
  },
  {
    question: "Tomonlariga ko'ra berilgan uchburchak turini aniqlang. (tomonlari: 3, 4, 5)",
    options: ["teng tomonli", "turli tomonli", "teng yonli", "o'tkir burchakli"],
    correctAnswer: "turli tomonli"
  },
  {
    question: "Tomonlariga ko'ra berilgan uchburchak turini aniqlang. (tomonlari: 3, 3, 3)",
    options: ["teng tomonli", "turli tomonli", "teng yonli", "o'tkir burchakli"],
    correctAnswer: "teng tomonli"
  },
  {
    question: "Tomonlariga ko'ra berilgan uchburchak turini aniqlang. (tomonlari: 5, 5, 2)",
    options: ["teng tomonli", "turli tomonli", "teng yonli", "o'tkir burchakli"],
    correctAnswer: "teng yonli"
  },
  {
    question: "Rasmdagi uchburchak perimetrini aniqlang. (tomonlari: 25, 12, 16)",
    options: ["P = 48", "P = 52", "P = 55", "P = 53"],
    correctAnswer: "P = 53"
  },
  {
    question: "Berilgan uchburchak noma'lum burchagini toping. (teng yonli, yuqori burchak 30°)",
    options: ["75°", "70°", "72,5°", "90°"],
    correctAnswer: "75°"
  },
  {
    question: "Berilgan uchburchak noma'lum burchagini toping. (ikki burchak 45°, 45°)",
    options: ["75°", "70°", "72,5°", "90°"],
    correctAnswer: "90°"
  },
  {
    question: "Uchburchak ichki burchaklari yig'indisi … ga teng. Nuqtalar o'rniga mos keluvchi sonni toping.",
    options: ["360°", "180°", "90°", "270°"],
    correctAnswer: "180°"
  },
  {
    question: "Son bilan yozing: Yerdan Oygacha eng yaqin masofa uch yuz ellik olti ming to'rt yuz to'qqiz km.",
    options: ["300 56 409", "300 560 409", "356 409", "460 740"],
    correctAnswer: "356 409"
  },
  {
    question: "O'quvchi 290 betli sarguzasht kitobni o'qib chiqmoqchi. U bir kunda 50 bet kitob o'qiy oladi, lekin har safar voqealarni eslash uchun oxirgi 10 betni qayta o'qib chiqadi. U kitobni necha kunda o'qib tugatadi?",
    options: ["8 kun", "9 kun", "7 kun", "6 kun"],
    correctAnswer: "7 kun"
  },
  {
    question: "Berilgan kasrlardan eng kattasini toping: 1/2, 5/6, 3/15, 3/10",
    options: ["5/6", "3/15", "1/2", "3/10"],
    correctAnswer: "5/6"
  },
  {
    question: "Berilgan ifodaning qiymatini toping. 42 · (18 + 82) : (8745 – 8724)",
    options: ["201", "190", "200", "420"],
    correctAnswer: "200"
  },
  {
    question: "Asqar 20 yoshida, Sobir uning yoshini yarmiga teng edi. Hozir Asqar 50 yosh bo'lsa Sobir necha yoshda?",
    options: ["40", "45", "30", "70"],
    correctAnswer: "40"
  },
  {
    question: "Ilyos bog'dan 24 ta olma uzdi. Ashraf esa undan 17 ta ko'p olma uzdi. Aka-ukalar bog'dan jami nechta olma uzgan?",
    options: ["41", "64", "63", "65"],
    correctAnswer: "65"
  },
  {
    question: "Ilyos bog'dan 30 ta olma uzdi. Ashraf esa undan 12 ta ko'p olma uzdi. Aka-ukalar bog'dan jami nechta olma uzgan?",
    options: ["72", "64", "63", "65"],
    correctAnswer: "72"
  },
  {
    question: "Sinfda jami 36 nafar o'quvchi bo'lib, qiz bolalar o'g'il bolalarga qaraganda ikki marta ko'p. Sinfda nechta o'g'il bola bor?",
    options: ["24", "12", "18", "20"],
    correctAnswer: "12"
  },
  {
    question: "Sinfda jami 36 nafar o'quvchi bo'lib, qiz bolalar o'g'il bolalarga qaraganda ikki marta ko'p. Sinfda nechta qiz bola bor?",
    options: ["24", "12", "18", "20"],
    correctAnswer: "24"
  },
  {
    question: "Hisoblang: 3/4 + 1/2 =",
    options: ["4/6", "5/4", "4/5", "1"],
    correctAnswer: "5/4"
  },
  {
    question: "Hisoblang: 2/5 + 1/10 =",
    options: ["3/15", "3/50", "1/2", "5/20"],
    correctAnswer: "1/2"
  },
  {
    question: "Hisoblang: 3/4 + 5/8 =",
    options: ["11/8", "8/12", "15/32", "44/8"],
    correctAnswer: "11/8"
  },
  {
    question: "Tomoni 4 cm bo'lgan kubning hajmi tomoni 2 cm bo'lgan kubning hajmidan necha marta katta?",
    options: ["8", "16", "4", "2"],
    correctAnswer: "8"
  },
  {
    question: "Kubning hajmi 343 mm³ bo'lsa, uning tomonini toping.",
    options: ["9", "7", "3", "11"],
    correctAnswer: "7"
  },
  {
    question: "Mening buvim 75 yoshda. Onam buvimdan 21 yosh kichik. Men esa onamdan 6 marta kichikman. Buvim mendan necha yosh katta?",
    options: ["65", "64", "66", "60"],
    correctAnswer: "65"
  },
  {
    question: "Tenglamani yeching: x + 573 = 681",
    options: ["200", "102", "105", "108"],
    correctAnswer: "108"
  },
  {
    question: "Tenglamani yeching: x · (144 − 25 · 4) = 132",
    options: ["3", "4", "5", "2"],
    correctAnswer: "3"
  },
  {
    question: "Rim raqamlari bilan berilgan sonni oddiy ko'rinishda yozing: XCIX",
    options: ["99", "119", "109", "101"],
    correctAnswer: "99"
  },
  {
    question: "Rim raqamlari bilan berilgan sonni oddiy ko'rinishda yozing: CDXV",
    options: ["415", "408", "509", "401"],
    correctAnswer: "415"
  },
  {
    question: "Berilgan sonni rim raqamlarida ifodalang: 183",
    options: ["CDIII", "CLXXXIII", "LDIX", "XDIII"],
    correctAnswer: "CLXXXIII"
  },
  {
    question: "Butunning bir yoki bir nechta teng ulushlaridan tuzilgan son ______ deyiladi?",
    options: ["Kasr deyiladi", "O'nli son deyiladi", "Bir xil maxrajli son deyiladi", "Bir xil suratli son deyiladi"],
    correctAnswer: "Kasr deyiladi"
  },
  {
    question: "Kasrning maxraji nimani bildiradi?",
    options: ["Chiziq ostiga yozilgan son kasrning maxraji deyilib, butun narsa nechaga teng bo'lishini ifodalaydi.", "Chiziq ostiga yozilgan son surati deyiladi", "Kasrning ustiga yozilgan kasrning maxraji deyiladi", "Ikkalasi ham kasrning maxraji hisoblanadi"],
    correctAnswer: "Chiziq ostiga yozilgan son kasrning maxraji deyilib, butun narsa nechaga teng bo'lishini ifodalaydi."
  },
  {
    question: "Ulushlar deb nimaga aytiladi?",
    options: ["Butunning teng bo'laklari", "Yarmi teng bo'laklari", "Bir ikki uch ulush deyiladi", "Hammasi to'g'ri"],
    correctAnswer: "Butunning teng bo'laklari"
  },
  {
    question: "Ko'paytma qachon o'zgarmaydi?",
    options: ["Ko'paytiruvchining o'rnini almashtirsak", "Qo'shiluvchilar o'rni almashsa", "Bo'linuvchi va bo'luvchi o'rni almashsa", "Bo'linma va bo'linuvchi o'rni almashsa"],
    correctAnswer: "Ko'paytiruvchining o'rnini almashtirsak"
  },
  {
    question: "Agar mototsiklchi 30 km/h tezlik bilan yursa, u 3 soatda qancha masofani bosib o'tadi?",
    options: ["30", "60", "90", "120"],
    correctAnswer: "90"
  },
  {
    question: "Bog'ga 170 tup oq olma, 2 marta ortiq qizil olma, oq va qizil olmalar birgalikda nechta bo'lsa, ulardan 190 tup ortiq nok o'tqazildi. Necha tup nok o'tqazilgan?",
    options: ["340", "510", "700", "740"],
    correctAnswer: "700"
  },
  {
    question: "Maktab ustaxonasiga 32 dona kulrang karton, undan 14 dona kam oq karton bor edi. Oq kartondan har biriga 6 donadan sarflab albomlar tayyorlandi. Nechta albom tayyorlangan?",
    options: ["18", "6", "3", "2"],
    correctAnswer: "3"
  },
  {
    question: "6 ta bir xil albom 480 so'm turadi. 12 ta shunday albom necha so'm turadi?",
    options: ["80", "160", "460", "960"],
    correctAnswer: "960"
  },
  {
    question: "7 tonnani kilogrammlarda ifodalang.",
    options: ["700", "70", "7000", "7"],
    correctAnswer: "7000"
  },
  {
    question: "7 ga bo'lganda qoldiq 9 bo'lishi mumkinmi?",
    options: ["mumkin", "mumkin emas", "7dan katta son bo'ladi", "8 bo'ladi"],
    correctAnswer: "mumkin emas"
  },
  {
    question: "Qovunning massasi 6 kg, handalakning massasi undan 4 kg kam. Qovunning massasi handalaknikidan necha marta ortiq?",
    options: ["5", "3", "2", "1"],
    correctAnswer: "3"
  },
  {
    question: "220 metr matodan 25 ta bir xil xalat va bir nechta bir xil ko'ylak tikildi. Xalatga 4 m, ko'ylakka undan 1 m kam mato ishlatildi. Nechta ko'ylak tikilgan?",
    options: ["41", "50", "25", "40"],
    correctAnswer: "41"
  },
  {
    question: "Kitobning sahifalari tartiblab . Birinchi sahifa 1 va 2 sonlari bilan, ikkinchi sahifa esa 3 va 4 sonlari bilan va hokazo. 200 betlik kitob taxminan ochilganda siz ko'rib turgan betlar yig'indisi quyidagilardan qaysi biri bo'lishi mumkin?",
    options: ["90", "110", "73", "42"],
    correctAnswer: "110"
  },
  {
    question: "Ali doskaga ikki xonali son yozdi. Vali esa shu sondan 16 ga kattaroq sonni yozdi. Agar Ali yozgan son ketma-ket yozilsa, 1100 dan kichik son hosil bo'ladi. Vali yozgan sonni toping.",
    options: ["27", "25", "26", "28"],
    correctAnswer: "26"
  },
  {
    question: "Fermadagi quyonlar soni 159 ta bo'lib, ular fermadagi qo'ylar sonidan 23 taga ortiq, lekin sigirlar sonidan 23 taga kam. Fermadagi jami uy hayvonlari soni topilsin.",
    options: ["477", "182", "450", "464"],
    correctAnswer: "477"
  },
  {
    question: "Bitta olma bitta nokdan 5 g og'irroq. Pallali tarozining bir pallasiga 49 ta olma, ikkinchi pallasiga esa 49 ta nok va X g og'irlikdagi tosh qo'yilsa, tarozi muvozanatda bo'ladi. X topilsin.",
    options: ["250", "245", "300", "225"],
    correctAnswer: "245"
  },
  {
    question: "Ota ayiq ikki kunda 8 kg asal yeydi. Ona ayiq esa uch kunda 9 kg asal yeydi. Ikkita kichkina ayiqcha uch kunda 3 kg asal yeydi. To'rtta kichkina ayiqchasi bor ota-ona ayiqlar 30 kun uchun kamida qancha asal g'amlashi kerak?",
    options: ["270", "300", "240", "330"],
    correctAnswer: "270"
  },
  {
    question: "To'g'ri chiziqda bir nechta nuqta belgilandi. Keyin har ikki nuqta orasiga bitta nuqta qo'yildi. So'ng bu yana uch marta takrorlandi. Natijada 81 ta nuqta hosil bo'ldi. To'g'ri chiziqda dastlab nechta nuqta belgilangan edi?",
    options: ["5", "6", "11", "21"],
    correctAnswer: "6"
  },
  {
    question: "Mashina 60 km/h tezlik bilan 4 soat yurdi. Mashina shu masofani 3 soatda bosib o'tish uchun qanday tezlikda yurishi kerak?",
    options: ["100 km/h", "120 km/h", "80 km/h", "50 km/h"],
    correctAnswer: "80 km/h"
  },
  {
    question: "Mashina 50 km/h tezlik bilan 8 soat yurdi. Mashina shu masofani 5 soatda bosib o'tish uchun qanday tezlikda yurishi kerak?",
    options: ["100 km/h", "80 km/h", "90 km/h", "120 km/h"],
    correctAnswer: "80 km/h"
  },
  {
    question: "Muzeyda 47 ta qoraqalpoq rassomlari va ulardan ikki marta ko'p o'zbek rassomlarining asarlari to'plangan. Agar muzeyda jami 235 ta asar bo'lsa, rus rassomlarining nechta asari joy olgan?",
    options: ["47", "94", "141", "188"],
    correctAnswer: "94"
  },
  {
    question: "Navoiyga \"Afrosiyob\" poyezdida tez yetib olish mumkin. Arzon chipta 145 ming so'm turadi, qimmati esa undan 125 ming so'm ortiq. Ikkita qimmat chipta uchun qancha to'lash kerak bo'ladi?",
    options: ["270", "290", "580", "540"],
    correctAnswer: "580"
  },
  {
    question: "To'g'rivoy va egrivoy doskada yozilgan son haqida fikr bildirmoqda. To'g'rivoy: \"Bu ikki xonali sonning birlar xona raqami 3 dan kichik va 9 uning qo'shnisi emas\". Egrivoy: \"Bu toq son\". Shu sonni toping.",
    options: ["11", "12", "13", "14"],
    correctAnswer: "11"
  },
  {
    question: "Agar birinchi son 25 ga ortsa, ikkinchi son 15 ga kamaytirilsa yig'indi qanday o'zgaradi?",
    options: ["10 ga kamayadi", "10 ga ortadi", "o'zgarmaydi", "10 foizga ortadi"],
    correctAnswer: "10 foizga ortadi"
  },
  {
    question: "Eng katta 4 xonali sonni eng katta 2 xonali songa bo'lsa nechchi hosil bo'ladi?",
    options: ["11", "100", "99", "101"],
    correctAnswer: "101"
  },
  {
    question: "Qanday sonni 7 ga bo'lsa ham, 8 ga bo'lganda ham 2 qoldiq qoladi?",
    options: ["57", "55", "58", "56"],
    correctAnswer: "58"
  },
  {
    question: "Ikki ketma-ket kelgan sonning yig'indisi 123 ga teng. Ulardan keyingi sonni toping.",
    options: ["60", "61", "62", "63"],
    correctAnswer: "63"
  },
  {
    question: "Binoning 5-qavatigacha bo'lgan masofa, 2-qavatigacha bo'lgan masofadan necha marta uzun?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5"
  },
  {
    question: "Avtomashina bakida 45 litr benzin bor. Samarqandga borish uchun 4/9 qismi, Navoiyga borish uchun qolgan benzinning 4/5 qismi sarflandi. Avtomobil bakida qancha litr benzin qoldi?",
    options: ["3", "5", "4", "6"],
    correctAnswer: "5"
  },
  {
    question: "13 kishi bir-biri bilan salomlashganda, qo'l berib ko'rishishlar soni qancha bo'ladi?",
    options: ["78", "84", "82", "86"],
    correctAnswer: "78"
  },
  {
    question: "Ikki sonning yig'indisi 50 ga teng, ular 2:3 nisbatda bo'lsa bu sonlarni toping.",
    options: ["11, 44", "20, 30", "22, 33", "35, 20"],
    correctAnswer: "20, 30"
  },
  {
    question: "Otasi 52 yoshda, o'g'li 32 yoshda. Necha yil oldin otasi o'g'lidan 2 marta katta bo'lgan?",
    options: ["10", "18", "12", "9"],
    correctAnswer: "10"
  },
  {
    question: "Poyezdda 112 ta yo'lovchi bor. Birinchi bekatda 18 kishi tushib, 4 kishi poyezdga chiqdi. Poyezdda nechta yo'lovchi bo'ldi?",
    options: ["100", "98", "97", "101"],
    correctAnswer: "98"
  },
  {
    question: "4 ta banan va 3 ta apelsin 7200 so'm, 4 ta apelsin va 5 ta limon 8800 so'm, 3 ta banan va 2 ta limon 5000 so'm turadi. 1 ta banan, 1 ta limon va 1 ta apelsin birgalikda qancha turadi?",
    options: ["8000", "7500", "3000", "4200"],
    correctAnswer: "3000"
  },
  {
    question: "Sxemadan foydalanib x ni toping. (10408 = x + 8293)",
    options: ["700", "706", "705", "710"],
    correctAnswer: "705"
  },
  {
    question: "Tenglamani yeching: (7521 + x) · 24 : 20 = 9438",
    options: ["344", "345", "346", "347"],
    correctAnswer: "344"
  },
  {
    question: "Xususiy xulosalardan umumiy xulosaga olib boruvchi metod … deyiladi.",
    options: ["induksiya", "deduksiya", "reproduktiv", "algoritm"],
    correctAnswer: "induksiya"
  },
  {
    question: "Umumiy qoidalardan xususiy misollarga va konkret qoidalarga olib boruvchi metod … deyiladi.",
    options: ["deduksiya", "induksiya", "reproduktiv", "statsionar"],
    correctAnswer: "deduksiya"
  },
  {
    question: "724 sonida nechta o'nlik mavjud?",
    options: ["20", "72", "720", "724"],
    correctAnswer: "72"
  },
  {
    question: "724 sonida nechta yuzlik mavjud?",
    options: ["7", "72", "4", "24"],
    correctAnswer: "7"
  },
  {
    question: "Sonning ikkidan bir qismi 18 bo'lsa, uning uchdan bir qismi nechchi bo'ladi?",
    options: ["12", "16", "15", "18"],
    correctAnswer: "12"
  },
  {
    question: "To'g'ri to'rtburchak qo'shni tomonlari yig'indisi 15 bo'lsa, uning perimetrini toping.",
    options: ["30", "40", "50", "44"],
    correctAnswer: "30"
  },
  {
    question: "Tashkilot printer va kompyuter sotib oldi. Kompyuter printerdan 5 barobar qimmat. Kompyuter va printer birgalikda 5 mln 700 ming so'm bo'lsa, printerning narxi qancha?",
    options: ["950 ming", "900 ming", "850 ming", "920 ming"],
    correctAnswer: "950 ming"
  },
  {
    question: "Tashkilot printer va kompyuter sotib oldi. Kompyuter printerdan 5 barobar qimmat. Kompyuter va printer birgalikda 5 mln 700 ming so'm bo'lsa, kompyuterning narxi qancha?",
    options: ["4 mln 750 ming", "4 mln 650 ming", "4 mln 500 ming", "4 mln 800 ming"],
    correctAnswer: "4 mln 750 ming"
  },
  {
    question: "Eng katta 2 xonali tub son nechchi?",
    options: ["97", "93", "91", "99"],
    correctAnswer: "97"
  },
  {
    question: "Zavodda 1 soatda 16 ta mashina ishlab chiqarilsa, 9 soatda nechta mashina ishlab chiqariladi?",
    options: ["144", "134", "140", "169"],
    correctAnswer: "144"
  },
  {
    question: "Berilgan sonlar ichidan eng kichigini toping: 4050, 4005, 4500, 5004",
    options: ["4050", "4005", "4500", "5004"],
    correctAnswer: "4005"
  },
  {
    question: "Ali va Vali yoshlari yig'indisi 10 ga teng. 1 yildan so'ng Ali Validan 2 barobar katta bo'ladi. Ali hozirda necha yoshda?",
    options: ["6", "7", "5", "8"],
    correctAnswer: "7"
  },
  {
    question: "Ali va Vali yoshlari yig'indisi 10 ga teng. 1 yildan so'ng Ali Validan 2 barobar katta bo'ladi. Vali hozirda necha yoshda?",
    options: ["3", "7", "5", "4"],
    correctAnswer: "3"
  },
  {
    question: "Agar Umarning tomiri bir minutda 60 marta ursa, 4 minutda necha marta uradi?",
    options: ["200", "240", "220", "201"],
    correctAnswer: "240"
  },
  {
    question: "Chet eldan kelgan 70 ta turistlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Har bir turist kamida 1 ta tilni biladi desak, faqat ingliz tilini biladigan turistlar nechta?",
    options: ["41", "40", "42", "43"],
    correctAnswer: "41"
  },
  {
    question: "Chet eldan kelgan 70 ta turistlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Har bir turist kamida 1 ta tilni biladi desak, faqat fransuz tilini biladigan turistlar nechta?",
    options: ["12", "15", "13", "14"],
    correctAnswer: "12"
  },
  {
    question: "Chet eldan kelgan 70 ta turistlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Har bir turist kamida 1 ta tilni biladi desak, 2 ta tilni biladigan turistlar nechta?",
    options: ["15", "14", "16", "17"],
    correctAnswer: "16"
  },
  {
    question: "Tarvuz narxi 200 so'm va yana yarim tarvuz narxiga teng. Tarvuz qancha turadi?",
    options: ["400", "350", "380", "410"],
    correctAnswer: "400"
  },
  {
    question: "Kitob daftardan 5 marta yoki 1500 so'm qimmat turadi. Daftarning narxi qancha so'm?",
    options: ["370", "380", "375", "382"],
    correctAnswer: "375"
  },
  {
    question: "Bolalar bog'chasiga sovg'a tayyorlash uchun 62 ta banan, 93 ta mandarin olib kelishdi. Har bir sovg'adagi banan va mandarinlar soni teng bo'lsa, bog'cha bolalari sonini toping.",
    options: ["30", "29", "31", "32"],
    correctAnswer: "31"
  },
  {
    question: "Havo harorati ertalab 18°C, tushlikka kelib 32°C va tushda 31°C ni tashkil etdi. O'rtacha haroratni toping.",
    options: ["25°C", "27°C", "26°C", "28°C"],
    correctAnswer: "27°C"
  },
  {
    question: "To'g'ri tenglik hosil bo'lishi uchun x o'rniga qanday sonni qo'yish kerak: 12 - 6 : 3 + 2 · x = 20",
    options: ["6", "5", "4", "8"],
    correctAnswer: "5"
  },
  {
    question: "Agar avtobus har bir bekat oralig'i uchun 3 minut vaqt sarflansa, 15-bekatga borish uchun qancha vaqt sarflaydi?",
    options: ["40", "41", "42", "45"],
    correctAnswer: "42"
  },
  {
    question: "Agar avtomobil har 100 km masofaga 8 litr benzin sarflasa, 350 km masofaga borish uchun qancha benzin zarur bo'ladi?",
    options: ["25", "26", "28", "27"],
    correctAnswer: "28"
  },
  {
    question: "Agar elektr hisoblagich 1-yanvar kuni 39503 ni ko'rsatsa va fevral oxirida 41213 ni ko'rsatsa, 1 kilovatt energiya uchun 300 so'm sarflansa, shu 2 oy davomida elektr toki uchun qancha mablag' sarflanadi?",
    options: ["500 000", "484 000", "513 000", "390 400"],
    correctAnswer: "513 000"
  },
  {
    question: "To'g'ri to'rtburchakning tomonlari mos ravishda 6 va 8 ga teng bo'lsa, uning diagonalining uzunligini toping.",
    options: ["10", "48", "28", "5"],
    correctAnswer: "10"
  },
  {
    question: "To'g'ri to'rtburchakning tomonlari mos ravishda 12 va 5 ga teng bo'lsa, uning perimetrini toping.",
    options: ["34", "13", "60", "17"],
    correctAnswer: "34"
  },
  {
    question: "Bitta guldonga 7 ta gul sig'adi. 181 ta gulni guldonlarga joylansa, nechta guldon kerak bo'ladi va nechta gul ortib qoladi?",
    options: ["25 ta guldon va 6 ta gul ortib qoladi.", "23 ta guldon va 5 ta gul ortib qoladi.", "26 ta guldon va 0 ta gul ortib qoladi.", "24 ta guldon va 6 ta gul ortib qoladi."],
    correctAnswer: "25 ta guldon va 6 ta gul ortib qoladi."
  },
  {
    question: "Ko'prikning ustuni suv tubidagi loyda, suvda va havoda turibdi. Uning uzunligi 130 m, suvdagi qismi 33 m, loydagi qismi 55 m bo'lsa, havodagi qismining uzunligini toping.",
    options: ["42", "32", "52", "62"],
    correctAnswer: "42"
  },
  {
    question: "Santimetr va millimetrda ifodalang: 12 dm 5 sm 7 mm =",
    options: ["12 dm 57 sm", "125 sm 7 mm", "1257 sm", "1257 mm"],
    correctAnswer: "125 sm 7 mm"
  },
  {
    question: "Samolyotda 84 ta o'rindiq bor. 59 ta yo'lovchi chiqdi. Bo'sh o'rindiqlar soni yo'lovchilar sonidan nechta kam?",
    options: ["25", "34", "30", "35"],
    correctAnswer: "34"
  },
  {
    question: "Sinfda jami 36 nafar o'quvchi bo'lib, qiz bolalar o'g'il bolalarga qaraganda ikki marta ko'p. Sinfda nechta o'g'il bola bor?",
    options: ["12", "24", "18", "20"],
    correctAnswer: "12"
  },
  {
    question: "Hisoblang: 6 · 8 - 72 : 8",
    options: ["30", "39", "41", "38"],
    correctAnswer: "39"
  },
  {
    question: "Tenglamani yeching: 20 · x + 45 = 85",
    options: ["2", "3", "1", "0"],
    correctAnswer: "2"
  },
  {
    question: "5 metrli yog'ochni uzunligi 1 metrlik bo'laklarga ajratish uchun uning necha joyidan arralash kerak?",
    options: ["5", "4", "3", "6"],
    correctAnswer: "4"
  },
  {
    question: "Matematika so'zining lug'aviy ma'nosi nima?",
    options: ["Grekcha \"mathema\" so'zidan olingan bo'lib, \"tushunish\" demakdir", "Lotincha \"mathem\" so'zidan olingan bo'lib, \"fikrlash\" demakdir", "Grekcha \"mathema\" so'zidan olingan bo'lib, \"qiziqish\" demakdir", "Grekcha \"mathema\" so'zidan olingan bo'lib, \"fanlarni bilish\" demakdir"],
    correctAnswer: "Grekcha \"mathema\" so'zidan olingan bo'lib, \"tushunish\" demakdir"
  },
  {
    question: "Noma'lum bo'luvchi qanday topiladi?",
    options: ["Bo'linuvchi bo'linmaga bo'linadi.", "Bo'linuvchi bo'linmaga ko'paytirib topiladi", "Ko'paytuvchi bo'linuvchiga bo'linadi", "Bo'luvchi bo'linuvchiga ko'paytiriladi"],
    correctAnswer: "Bo'linuvchi bo'linmaga bo'linadi."
  },
  {
    question: "O'quvchilar tafakkurini charxlashga yo'naltirilgan masala turi?",
    options: ["mantiqiy", "soda", "murakkab", "ikki va undan ortiq usulli masala"],
    correctAnswer: "mantiqiy"
  },
  {
    question: "Sonlarni yozish uchun belgi bu …?",
    options: ["raqam", "to'plam", "tenglama", "masala"],
    correctAnswer: "raqam"
  },
  {
    question: "Bir xil tushunchaga kiruvchi narsalar tasvirlangan qatorni toping.",
    options: ["Daftar, qalam, ruchka, kitob", "Palka, qalamdon, shar", "Kub, shar, to'rtburchak, shkaf", "Quyon, shar, o'yinchoq, qoshiq, kub"],
    correctAnswer: "Daftar, qalam, ruchka, kitob"
  },
  {
    question: "Algoritm bu — …",
    options: ["Berilgan masalani yechish uchun bajarilishi lozim bo'lgan amallarning qat'iy ketma-ketligi", "Berilgan masalani yechish uchun bajarilishi lozim bo'lgan amallar to'plami", "Berilgan masalani yechishda foydalaniladigan amallar to'plami", "Berilgan masalani yechishda foydalaniladigan amallar ketma-ketligi majmui"],
    correctAnswer: "Berilgan masalani yechish uchun bajarilishi lozim bo'lgan amallarning qat'iy ketma-ketligi"
  },
  {
    question: "Uchburchak deb nimaga aytiladi?",
    options: ["Bir to'g'ri chiziqda yotmagan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik shakl", "Tekislikda berilgan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik shakl", "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl", "Ikki tomonidan nuqta bilan chegaralangan to'g'ri chiziq bo'lagi"],
    correctAnswer: "Bir to'g'ri chiziqda yotmagan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik shakl"
  },
  {
    question: "To'rtburchak deb nimaga aytiladi?",
    options: ["Bir tekislikda yotuvchi, ixtiyoriy uchtasi bir to'g'ri chiziqda yotmagan to'rtta nuqtani o'zaro kesishmaydigan kesmalar yordamida ketma-ket tutashtirishdan hosil bo'lgan geometrik shakl", "Bir tekislikda yotmagan, ixtiyoriy uchtasi bir to'g'ri chiziqda yotmagan to'rtta nuqtani o'zaro kesishmaydigan kesmalar yordamida ketma-ket tutashtirishdan hosil bo'lgan geometrik shakl", "Bir tekislikda yotuvchi to'rtta nuqtani o'zaro kesishmaydigan kesmalar yordamida ketma-ket tutashtirishdan hosil bo'lgan geometrik shakl", "Bir tekislikda yotuvchi, ixtiyoriy uchtasi bir to'g'ri chiziqda yotmagan to'rtta nuqtani kesmalar yordamida ketma-ket tutashtirishdan hosil bo'lgan geometrik shakl"],
    correctAnswer: "Bir tekislikda yotuvchi, ixtiyoriy uchtasi bir to'g'ri chiziqda yotmagan to'rtta nuqtani o'zaro kesishmaydigan kesmalar yordamida ketma-ket tutashtirishdan hosil bo'lgan geometrik shakl"
  },
  {
    question: "Aylana deb nimaga aytiladi?",
    options: ["Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni", "Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni", "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl", "Ikki tomonidan nuqta bilan chegaralangan to'g'ri chiziq bo'lagi"],
    correctAnswer: "Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni"
  },
  {
    question: "Aylanadan uning markazigacha bo'lgan masofa … deyiladi.",
    options: ["Radius", "Vatar", "Diametr", "Markazi"],
    correctAnswer: "Radius"
  },
  {
    question: "Aylananing ixtiyoriy ikkita nuqtasini tutashtiruvchi kesma … deyiladi.",
    options: ["Vatar", "Radius", "Diametr", "Markazi"],
    correctAnswer: "Vatar"
  },
  {
    question: "Aylana markazidan o'tuvchi vatar … deyiladi.",
    options: ["Diametr", "Radius", "Kesma", "Nur"],
    correctAnswer: "Diametr"
  },
  {
    question: "Tekislikning aylana bilan chegaralangan qismi … deyiladi.",
    options: ["Doira", "Radius", "Diametr", "Sfera"],
    correctAnswer: "Doira"
  },
  {
    question: "Sfera deb nimaga aytiladi?",
    options: ["Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni", "Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni", "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl", "Ikki tomonidan nuqta bilan chegaralangan to'g'ri chiziq bo'lagi"],
    correctAnswer: "Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o'rni"
  },
  {
    question: "Fazoning sfera bilan chegaralangan qismi … deyiladi.",
    options: ["Shar", "Doira", "Diametr", "Sfera"],
    correctAnswer: "Shar"
  },
  {
    question: "\"7 – 4 = ?\" ifodaning matematik ma'nosi qanday?",
    options: ["Son o'qida 7 sonidan 4 birlik chapga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 7 sonidan 4 birlik o'ngga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 4 sonidan 7 birlik chapga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 4 sonidan 7 birlik o'ngga ko'chirilsa qanday natija hosil bo'ladi?"],
    correctAnswer: "Son o'qida 7 sonidan 4 birlik chapga ko'chirilsa qanday natija hosil bo'ladi?"
  },
  {
    question: "\"4 + 1 = ?\" ifodaning matematik ma'nosi qanday?",
    options: ["Son o'qida 4 sonidan 1 birlik o'ngga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 4 sonidan 1 birlik chapga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 1 sonidan 4 birlik chapga ko'chirilsa qanday natija hosil bo'ladi?", "Son o'qida 1 sonidan 4 birlik o'ngga ko'chirilsa qanday natija hosil bo'ladi?"],
    correctAnswer: "Son o'qida 4 sonidan 1 birlik o'ngga ko'chirilsa qanday natija hosil bo'ladi?"
  },
  {
    question: "Quyidagi qatorlardan qaysi birida uzunlik o'lchov birliklari berilgan?",
    options: ["Millimetr (mm), Santimetr (cm), Detsimetr (dm), Metr (m), Kilometr (km).", "Gramm (g), Kilogramm (kg), Sentner (s), Tonna (t)", "Sekund, Minut, Soat, Sutka, Hafta, Oy, Yil, Asr", "Litr, Sotix, Gektar"],
    correctAnswer: "Millimetr (mm), Santimetr (cm), Detsimetr (dm), Metr (m), Kilometr (km)."
  },
  {
    question: "Kubning tomoni 7 cm bo'lsa, uning hajmini toping.",
    options: ["218", "343", "49", "334"],
    correctAnswer: "343"
  },
  {
    question: "O'nta tuxum sotib oldim. 2 ta tuxumni qovurilgan tuxum uchun singlimga berdim. Ikkita tuxumni qovurdim. Ikkita tuxumni yedim. Nechta tuxum qoldi?",
    options: ["0", "4", "6", "8"],
    correctAnswer: "4"
  },
  {
    question: "Nodiraning bo'yi Feruzaning bo'yidan 12 sm past, ammo Azizaning bo'yidan 10 sm baland. Feruza Azizadan necha sm baland?",
    options: ["2 sm", "12 sm", "20 sm", "22 sm"],
    correctAnswer: "22 sm"
  },
  {
    question: "Uchta tokchada 384 ta kitob bor. Birinchi tokchadagi kitoblar ikkinchi tokchadagidan 2 marta ko'p, uchinchi tokchadagi kitoblar esa ikkinchi tokchadagidan 3 marta ko'p. Har qaysi tokchada nechta kitob bor?",
    options: ["130, 64, 190", "128, 64, 192", "128, 60, 196", "126, 62, 198"],
    correctAnswer: "128, 64, 192"
  },
  {
    question: "Uchburchakning tomonlari 5 sm, 8 sm va 9 sm bo'lsa, uning perimetrini toping.",
    options: ["22", "25", "24", "17"],
    correctAnswer: "22"
  },
  {
    question: "Eng katta ikki xonali natural son bilan eng kichik ikki xonali natural sonning yig'indisini toping.",
    options: ["109", "99", "90", "100"],
    correctAnswer: "109"
  },
  {
    question: "Qushlar galasi uchib ketmoqda. Oldinda 1 ta qush, uning orqasida 2 ta qush. Orqada 1 ta qush, uning oldida 2 ta qush. O'rtada 1 ta qush, uning oldida 1 ta qush, orqasida 1 ta qush. Qushlar galasida nechta qush borligini aniqlang?",
    options: ["3", "16", "9", "10"],
    correctAnswer: "3"
  },
  {
    question: "Daraxtda 12 ta qush bor. Ovchi ulardan birini urib tushirdi. Daraxtda qolgan qushlarning soni qancha?",
    options: ["0", "11", "10", "9"],
    correctAnswer: "0"
  },
  {
    question: "Butunni uning tashkil etuvchi qismlariga ajratishga yo'naltirilgan fikrlash (tafakkur) usuli qanday ataladi?",
    options: ["birlamchi", "ikkilik", "sintez", "analiz"],
    correctAnswer: "analiz"
  },
  {
    question: "Uchburchakning asosi 6 ga va asosiga tushirilgan balandligi 14 ga teng. Uning yuzini toping.",
    options: ["26", "42", "32", "48"],
    correctAnswer: "42"
  },
  {
    question: "Uchburchakning asosi 20 ga va asosiga tushirilgan balandligi 15 ga teng. Uning yuzini toping.",
    options: ["160", "140", "150", "200"],
    correctAnswer: "150"
  },
  {
    question: "Uchburchakning asosi 16 ga va asosiga tushirilgan balandligi 12 ga teng. Uning yuzini toping.",
    options: ["60", "52", "96", "86"],
    correctAnswer: "96"
  },
  {
    question: "Sinfda jami 42 nafar o'quvchi bo'lib, qiz bolalar o'g'il bolalarga qaraganda ikki marta ko'p. Sinfda nechta o'g'il bola bor?",
    options: ["28", "14", "15", "24"],
    correctAnswer: "14"
  },
  {
    question: "Hisoblang: 7 · 8 - 40 : 8",
    options: ["51", "30", "41", "38"],
    correctAnswer: "51"
  },
  {
    question: "Eng katta uch xonali sondan eng kichik ikki xonali sonning ayirmasini toping.",
    options: ["989", "89", "990", "99"],
    correctAnswer: "989"
  },
  {
    question: "5 dm 3 cm necha mm?",
    options: ["530", "53", "5300", "53000"],
    correctAnswer: "530"
  },
  {
    question: "Eng katta 4 xonali sonni eng katta 2 xonali songa bo'lsa nechchi hosil bo'ladi?",
    options: ["11", "100", "99", "101"],
    correctAnswer: "101"
  },
  {
    question: "Qaysi sonni 7 ga bo'lsa ham, 8 ga bo'lganda ham 2 qoldiq qoladi?",
    options: ["57", "55", "58", "56"],
    correctAnswer: "58"
  },
  {
    question: "Matematika fanining o'rganadigan obyekti … iboratdir.",
    options: ["fazoviy shakllar va ular orasidagi miqdoriy munosabatlardan", "sonning kvadratini topishdan", "integralni hisoblashdan", "to'g'ri javob berilmagan"],
    correctAnswer: "fazoviy shakllar va ular orasidagi miqdoriy munosabatlardan"
  },
  {
    question: "\"Metodika\" grekcha so'z bo'lib, … ma'nosini anglatadi.",
    options: ["kvadrat", "yo'l", "uchburchak", "bir"],
    correctAnswer: "yo'l"
  },
  {
    question: "Didaktika qadimgi yunoncha so'z bo'lib, … ma'noni anglatadi.",
    options: ["ayiruvchi", "izlovchi", "o'rgatuvchi, ta'lim beruvchi", "birlashtiruvchi"],
    correctAnswer: "o'rgatuvchi, ta'lim beruvchi"
  },
  {
    question: "Berilgan jarayonni amalga oshirish uchun qaysi elementar ishlarni va qaysi ketma-ketlikda bajarish lozimligini ko'rsatuvchi buyruq … deb ataladi.",
    options: ["algoritm", "integral", "ayirma", "ko'paytirish"],
    correctAnswer: "algoritm"
  },
  {
    question: "Uch xonali natural sonlar nechta?",
    options: ["999", "900", "1000", "100"],
    correctAnswer: "900"
  },
  {
    question: "Uchburchak tomonlariga ko'ra nechta turga bo'linadi?",
    options: ["4", "3", "5", "2"],
    correctAnswer: "3"
  },
  {
    question: "Uchburchakning tomonlari 5 sm, 4 sm va 6 sm bo'lsa, perimetrini toping.",
    options: ["12", "14", "15", "17"],
    correctAnswer: "15"
  },
  {
    question: "Butunni uning tashkil etuvchi qismlariga ajratishga yo'naltirilgan fikrlash (tafakkur) usuli … deb ataladi.",
    options: ["birlamchi", "ikkilik", "sintez", "analiz"],
    correctAnswer: "analiz"
  },
  {
    question: "Tenglamani yeching: (4 · x − 2) : 5 + 48 : 12 = 45 : 9 + 5",
    options: ["8", "5", "4", "7"],
    correctAnswer: "7"
  },
  {
    question: "Qanday so'zlar gapdagi boshqa so'zlardan vergul bilan ajratib yoziladi.",
    options: ["modal so'zlar", "yuklama", "bog'lovchi", "taqlid so'zlar"],
    correctAnswer: "modal so'zlar"
  },
  {
    question: "Qaysi gapda kelishik qo'shimchasini qo'llash bilan bog'liq xatoga yo'l qo'yilgan.",
    options: ["Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor edi.", "Bilimdon o'zining bilimi tufayli ofatlardan omon qoladi.", "O'zining qadrini bilmagan o'zganing qadrini ne bilsin?", "Kechasi Saidiyning hujrasiga Kozimbek bilan muxbir A'zamjon keldi."],
    correctAnswer: "Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor edi."
  },
  {
    question: "Samoning zangorisimon sahnida to'lishmagan qandaydir beshakl oy xira, rangsiz yaltiraydi. Gapda qo'llangan yasama so'zlar vazifasini toping. 1\\) aniqlovchi 2) hol 3) to'ldiruvchi 4) kesim",
    options: ["1,3,4", "1,2,3", "1,2,4", "2,3,4"],
    correctAnswer: "1,3,4"
  },
  {
    question: "Qaysi gapda otlashgan sifat(lar) qo'llanmagan.",
    options: ["Sinfimizda a'lochi o'quvchilar ko'p.", "Yaxshidan bog' qoladi, yomondan -- dog'.", "Ilg'orlarga mukofot topshirildi.", "Yoshlar olovga yaqinroq, keksalar esa uzoqroq o'tirishdi."],
    correctAnswer: "Sinfimizda a'lochi o'quvchilar ko'p."
  },
  {
    question: "--imtir qo'shimchasi yordamida qaysi sifatlarning ozaytirma darajasini hosil qilish mumkin? 1) oq 2) qora 3) sariq 4) qizil 5) ko'k 6) yashil",
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
    options: ["bo'lishsizlik", "kishilik", "o'zlik", "so'roq"],
    correctAnswer: "bo'lishsizlik"
  },
  {
    question: "Sonning qaysi turi chiqish kelishigi qo'shimchasi bilan qo'llanib, fikrning ahamiyatlilik darajasini ifodalaydigan modal so'z vazifasida qo'llanadi.",
    options: ["tartib son", "chama son", "dona son", "jamlovchi son"],
    correctAnswer: "tartib son"
  },
  {
    question: "--ov, -ala, -ovlon qo'shimchalari yordamida sonning qaysi ma'no turi hosil qilinadi.",
    options: ["jamlovchi son", "chama son", "tartib son", "taqsim son"],
    correctAnswer: "jamlovchi son"
  },
  {
    question: "Do'mbirachi qadimiy qozoq hayotidan dostonlar kuylamoqda. Ushbu gapda nechta so'z yasovchi qo'shimcha qo'llangan.",
    options: ["3 ta", "4 ta", "2 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Qaysi gapda nisbiy sifat qo'llangan.",
    options: ["Hovlimizga ko'cha eshikdan kirishda kichkina, g'ishtin uycha bor.", "Uning jussasi kichkina bo'lsa ham, yuzlari jiddiy, boqishlari o'tkir, ovozi esa jarangdor.", "U oltmishlarga borib qolgan bo'lsa ham, yoshlardek ikki yuzi qip-qizil, serg'ayrat va tavakkalchi odam edi.", "Temur yuksak insoniylikka ega bo'lgan buyuk shaxs edi."],
    correctAnswer: "Hovlimizga ko'cha eshikdan kirishda kichkina, g'ishtin uycha bor."
  },
  {
    question: "Qaysi gapda butun miqdorning qismini ifodalovchi son qo'llangan. 1) Bolalar eshaklarga yem berib, o'zlari ham oz-ozdan yem yeb olishguncha yarim soatcha vaqt o'tdi. 2) O'zbekiston Respublikasi maydonining qariyb beshdan to'rt qismi tekisliklardan iborat. 3) Yo'lning kengligi 10,5 metrni tashkil qiladi. 4) Rejaning uchdan ikki qismi bajarildi.",
    options: ["1,2,3,4", "1,2,4", "1,2,3", "1,3,4"],
    correctAnswer: "1,2,3,4"
  },
  {
    question: "Qaysi gapda son otlashmagan.",
    options: ["Ikkala jamoa ham musobaqaga jiddiy tayyorgarlik ko'rgan ekan.", "Oltovlon ola bo'lsa, og'zidagin oldirar.", "Shunday qilib, to'rtovlari ham piyoda yo'lga chiqishibdi.", "Ikkinchisi ham uyg'onib ketdi, shekilli, qo'shilishib yig'lashga tushdi."],
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
    options: ["yuklama", "bog'lovchi", "ko'makchi", "modal so'z"],
    correctAnswer: "yuklama"
  },
  {
    question: "O'rin ravishlari qayd etilgan javobni belgilang.",
    options: ["ichkari, tashqari, olg'a", "ko'cha, bog', guzar", "ichki, tashqi, sirtqi", "ichra, uzra, ora"],
    correctAnswer: "ichkari, tashqari, olg'a"
  },
  {
    question: "Qaysi gapda ravish qo'llanmagan.",
    options: ["Keksa kishilar katta hayotiy tajribaga ega bo'ladilar.", "Ikki oshna kechki salqin bilan piyoda yo'lga tushishdi.", "Orqasiga qarasa, uzoqdan bir ho'kiz uni to'xtovsiz chaqirib kelyapti.", "Abdishukur bu yerdan tezda chiqib ketish payiga tushdi."],
    correctAnswer: "Keksa kishilar katta hayotiy tajribaga ega bo'ladilar."
  },
  {
    question: "O'xshatish, inkor, ayiruv, kuchaytirish kabi ma'nolar qanday so'zlar orqali ifodalanadi.",
    options: ["yuklama", "ko'makchi", "bog'lovchi", "modal so'zlar"],
    correctAnswer: "yuklama"
  },
  {
    question: "Gumon, ishonch, quvonch, tasdiq kabi ma'nolar qanday so'zlar orqali ifodalanadi.",
    options: ["modal so'zlar", "ko'makchi", "bog'lovchi", "yuklama"],
    correctAnswer: "modal so'zlar"
  },
  {
    question: "Qaysi gapda hol vazifasida qo'llangan holatga taqlid so'z berilgan.",
    options: ["Omon g'azabi oshib, dag'-dag' qaltiray boshladi.", "Dupur-dupur ot keldi, Ko'chaga qarang, kim keldi.", "To'rtta savag'ich bilan tap-tap urib, par singari qilib titibdi.", "Osmonda yombi oltinday yaraqlagan oy, yakkam-dukkam milt-milt yulduzlar uyg'oq edi."],
    correctAnswer: "Omon g'azabi oshib, dag'-dag' qaltiray boshladi."
  },
  {
    question: "Qaysi gapda aniqlovchi vazifasida qo'llangan tovushga taqlid so'z berilgan.",
    options: ["Yetti qaroqchi yulduzi tik kelganda g'o'ng'ir-g'o'ng'ir ovozdan uyg'onib ketdim.", "Vujudini tutgan qalt-qalt titroqni bosib hazilomuz qichqirdi.", "Allakim ship-ship qadam bosib, ayvon labiga kelayotganday bo'lardi.", "Boshidagi toj yal-yal yonarmish."],
    correctAnswer: "Yetti qaroqchi yulduzi tik kelganda g'o'ng'ir-g'o'ng'ir ovozdan uyg'onib ketdim."
  },
  {
    question: "Qaysi gapda modal so'z qo'llangan.",
    options: ["To'g'ri, yo'llarda mashaqqatlar ko'p.", "Bo'ron bo'lish ehtimoli bor, qizim.", "Istamning chamasi to'g'ri chiqdi.", "Uning \"ko'cha bolasi\" ekanligini aftidan bilib olish qiyin emas edi."],
    correctAnswer: "To'g'ri, yo'llarda mashaqqatlar ko'p."
  },
  {
    question: "Qaysi gapda buyruq-xitobni ifodalovchi undov so'z qo'llangan.",
    options: ["Qo'y, yig'lama ey baxshi.", "Men yetim o'sganman, oh u yetimlik.", "Iya, bularni nima qilasan?", "O! Ho'kiz yo'q, og'il ko'cha tomondan teshilgan."],
    correctAnswer: "Qo'y, yig'lama ey baxshi."
  },
  {
    question: "Qaysi javobda alohida olingan so'zlar berilgan.",
    options: ["shoyad, obbo, gumbur", "hamda, uchun, nahot", "daftar, eski, beshta", "men, shu, yalpi"],
    correctAnswer: "shoyad, obbo, gumbur"
  },
  {
    question: "Qaysi kelishik shaklidagi so'zlar to'ldiruvchi vazifasida qo'llanadi.",
    options: ["tushum", "qaratqich", "jo'nalish", "o'rin-payt"],
    correctAnswer: "tushum"
  },
  {
    question: "Moslashuvli so'z birikmasi berilgan javobni toping.",
    options: ["o'rik sharbati", "tarix darsi", "rasm daftari", "kitob do'koni"],
    correctAnswer: "o'rik sharbati"
  },
  {
    question: "Qaysi qo'shimcha yordamida umumlashtirish, kuchaytirish, hurmat kabi uslubiy ma'nolarni ifodalash mumkin.",
    options: ["--lar", "--cha", "--xon", "--gina"],
    correctAnswer: "--lar"
  },
  {
    question: "Shaxs, narsa, belgi, harakat kabilarni jamlab ifodalaydigan olmosh qaysi gapda qo'llangan.",
    options: ["Bog'imizda uzumning hamma xilidan bor.", "Har kim ekkanini o'radi.", "Shorahim ko'z yoshidan hech nimani ko'rmay allanimalar deb g'udrandi.", "Kim shaxmat to'garagiga qatnashadi."],
    correctAnswer: "Bog'imizda uzumning hamma xilidan bor."
  },
  {
    question: "To'pdan ajratilgan shaxs, narsa, belgi kabilarni bildirgan olmoshlar qanday ataladi.",
    options: ["belgilash olmoshlari", "bo'lishsizlik olmoshlari", "o'zlik olmoshi", "ko'rsatish olmoshlari"],
    correctAnswer: "belgilash olmoshlari"
  },
  {
    question: "Qaysi gapda olmoshning ma'nosiga ko'ra uch turi qo'llangan.",
    options: ["Qayerda bo'shliq paydo bo'lsa, uni kimdir to'ldirishga harakat qiladi.", "Xayolchan g'udranib, o'z-o'zini koyidi.", "Ichkaridan kimlardir chiqib, u turgan tomonga kelaverdi.", "Siz hayotda qanday insonlarga havas qilasiz."],
    correctAnswer: "Qayerda bo'shliq paydo bo'lsa, uni kimdir to'ldirishga harakat qiladi."
  },
  {
    question: "Qaysi javobda sof ko'makchilar berilgan.",
    options: ["avval, keyin, so'ng", "kabi, uzra, tufayli", "ost, ust, yon", "bo'ylab, qarab, atab"],
    correctAnswer: "avval, keyin, so'ng"
  },
  {
    question: "Qaysi gapda so'zlarni va gaplarni bir-biriga bog'lash uchun xizmat qilmaydigan yordamchi so'z qo'llangan.",
    options: ["O'shanda dadam ham frontda edilar.", "Yurt farovonligi uchun qayg'uradi.", "Andishali bo'l, biroq shijoatsiz bo'lma.", "Bu yerda na ofat, na kulfat, na g'am."],
    correctAnswer: "O'shanda dadam ham frontda edilar."
  },
  {
    question: "Qaysi gapda balki so'zi bog'lovchi vazifasida qo'llanmagan.",
    options: ["Hayronman, balki, siz haqdirsiz.", "Mevani gullata bilishgina emas, balki undan mo'l va shirin hosil yetkaza bilish san'atdir.", "Taraqqiyot tasodif emas, balki zaruratdir.", "nafaqat kattalarga, balki kichiklarga ham shunday muomalada bo'lar edi."],
    correctAnswer: "Hayronman, balki, siz haqdirsiz."
  },
  {
    question: "Qanday fe'llar holat fe'llari sanaladi. 1\\) shaxs va narsalarning jismoniy faoliyati natijasida yuz bergan harakatni ifodalovchi fe'llar; 2) shaxslarning ichki kechinmalarini ifodalovchi fe'llar; 3\\) narsalarning bir holatdan ikkinchi holatga o'tish jarayonini ifodalovchi fe'llar.",
    options: ["2,3", "1,2,3", "1,2", "1,3"],
    correctAnswer: "2,3"
  },
  {
    question: "O'timli fe'llar berilgan javobni toping.",
    options: ["o'qimoq, yozmoq", "kulmoq, yig'lamoq", "yurmoq, yugurmoq", "o'tirmoq, turmoq"],
    correctAnswer: "o'qimoq, yozmoq"
  },
  {
    question: "Bajaruvchining o'z ustida amalga oshadigan harakat-holatini ifodalaydigan fe'l nisbati qanday ataladi.",
    options: ["o'zlik nisbat", "aniq nisbat", "birgalik nisbat", "majhul nisbat"],
    correctAnswer: "o'zlik nisbat"
  },
  {
    question: "Har ikki qismi ot turkumiga mansub so'zlar bilan ifodalangan bitishuvli so'z birikmasi berilgan javobni aniqlang.",
    options: ["tilla soat", "nordon anor", "quyosh nuri", "kimyoviy jarayon"],
    correctAnswer: "tilla soat"
  },
  {
    question: "--zor, -loq, -goh kabilar qanday qo'shimchalar sanaladi.",
    options: ["o'rin-joy oti yasovchi", "shaxs oti yasovchi", "narsa oti yasovchi", "faoliyat-jarayon oti yasovchi"],
    correctAnswer: "o'rin-joy oti yasovchi"
  },
  {
    question: "Qaysi javobda ot, sifat, fe'l yasovchi shakldosh(omonim) qo'shimchalar qayd etilgan.",
    options: ["--ik, -iq, -a", "--ma, -qi, -la", "--ay, -oq, -cha", "--ar, -gi, -k"],
    correctAnswer: "--ik, -iq, -a"
  },
  {
    question: "Qaysi javobda ot va sifat yasovchi shakldosh(omonim) qo'shimchalar juftligi berilmagan.",
    options: ["aravakash--mehnatkash", "qalamdon--qadrdon", "ekin--erkin", "ko'rik--chirik"],
    correctAnswer: "aravakash--mehnatkash"
  },
  {
    question: "Sodda tub otlarni toping.",
    options: ["beshik, o'rik", "qirqim, o'rim", "chopiq, tortiq", "yutuq, buyruq"],
    correctAnswer: "beshik, o'rik"
  },
  {
    question: "Qaysi gapda fe'lning otga xoslangan shakli qo'llangan.",
    options: ["Chiroyli yozishni o'rgan.", "Bolalar qorbo'ron o'ynashmoqda.", "Shu payt boshimiz ustida chaqmoq chaqdi.", "Singilcham quymoqni juda yaxshi ko'radi."],
    correctAnswer: "Chiroyli yozishni o'rgan."
  },
  {
    question: "Qaysi javobda ravishdosh shakllari berilmagan.",
    options: ["--gan, -ar", "--ib(-b), -a(-y)", "--gach, -guncha", "--gani, -gancha"],
    correctAnswer: "--gan, -ar"
  },
  {
    question: "Qaysi gapda olmoq fe'li qo'shma fe'l tarkibida qo'llangan.",
    options: ["Kasalligi tufayli o'n yildan beri ukol olib kelmoqda.", "Ma'ruf toshni o'n marta ko'tara oldi.", "Kecha Sharifadan xat oldik.", "Shoikrom ukasidan xabar oldi."],
    correctAnswer: "Kasalligi tufayli o'n yildan beri ukol olib kelmoqda."
  },
  {
    question: "Qaysi gapda asosida fonetik o'zgarish sodir bo'lgan yasama fe'l(lar) qo'llangan.",
    options: ["Ichkarida chaqaloq yig'ladi, beshikning g'ichirlagani ishitildi.", "Gapirganda ovozi xuddi ichidan chiqqanday guldurab, jaranglab eshitiladi.", "Yuragim hayajondan gupullab ura boshladi.", "Usta temirni cho'g'ga solib bolg'alaydi, cho'zadi, yassilaydi, yana olovga soladi."],
    correctAnswer: "Ichkarida chaqaloq yig'ladi, beshikning g'ichirlagani ishitildi."
  },
  {
    question: "Turli gap bo'laklari vazifasida kelish uchun xoslangan fe'l shakllari bu...",
    options: ["vazifa shakllari", "munosabat shakllari", "nisbat shakllari", "bo'lishsizlik shakllari"],
    correctAnswer: "vazifa shakllari"
  },
  {
    question: "Qaysi nisbat qo'shimchalari bir fe'lga birin-ketin bir necha marotaba qo'shilishi mumkin.",
    options: ["orttirma nisbat", "o'zlik nisbat", "majhul nisbat", "birgalik nisbat"],
    correctAnswer: "orttirma nisbat"
  },
  {
    question: "Quyida berilgan yasama fe'llarning nechtasi tarkibida tovush o'zgarishi sodir bo'lgan. qona,ata, sana, yasha, qiyna, o'yna, o'rna, kengay, pasay, susay, ulg'ay, sarg'ay, gulla, yig'la, angla, egalla, yashar, ko'kar, oqar, qizar, uvullla, akilla, likilla, shovulla",
    options: ["15 ta", "19 ta", "17 ta", "13 ta"],
    correctAnswer: "15 ta"
  },
  {
    question: "Bir turdagi shaxs va narsalarning umumiy otini yoki ulardan birining nomini ifodalashiga ko'ra otlar qanday turlarga bo'linadi.",
    options: ["atoqli va turdosh otlar", "aniq va mavhum otlar", "sanaladigan va sanalmaydigan otlar", "yakka va to'da otlar"],
    correctAnswer: "atoqli va turdosh otlar"
  },
  {
    question: "Qaysi javobda tarkibi asos+ot yasovchi+ot yasovchi shaklida bo'lgan yasama ot berilgan.",
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
    options: ["bahona", "mamnun", "vafodor", "faqat"],
    correctAnswer: "bahona"
  },
  {
    question: "Yam-yashil\\-\\-- so'zida nechta unli va nechta undosh tovush bor.",
    options: ["3 ta unli, 5 ta undosh", "3 ta unli, 3 ta undosh", "5 ta unli, 5 ta undosh", "4 ta unli, 4 ta undosh"],
    correctAnswer: "3 ta unli, 5 ta undosh"
  },
  {
    question: "Qaysi qatorda lab undoshlari berilgan.",
    options: ["b, m", "x, g", "j, k", "h, ng"],
    correctAnswer: "b, m"
  },
  {
    question: "Lab undoshlari ishtirok etgan yasama so'zni toping.",
    options: ["ommabop", "savlat", "gulzor", "oshiq"],
    correctAnswer: "ommabop"
  },
  {
    question: "Qaysi so'z tarkibida portlovchi undosh mavjud.",
    options: ["sababsiz", "suvsiz", "yuzsiz", "foizsiz"],
    correctAnswer: "sababsiz"
  },
  {
    question: "Qaysi jarangli undosh o'z jarangsiz jufti bilan birga sirg'aluvchi tovushlarga mansub bo'ladi.",
    options: ["z", "b", "d", "k"],
    correctAnswer: "z"
  },
  {
    question: "\\-\\--t\\-\\-- va \\-\\--h\\-\\-- tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: ["jarangli va jarangsizligiga ko'ra", "lab yoki tish undoshlariga oidligiga ko'ra", "portlovchi yoki sirg'aluvchiligiga ko'ra", "tilning qayerida paydo bo'lishiga ko'ra"],
    correctAnswer: "jarangli va jarangsizligiga ko'ra"
  },
  {
    question: "\\-\\--f\\-\\-- undoshi til undoshlarining qaysi turiga mansub.",
    options: ["lab-tish undoshi", "til oldi undosh", "sayoz til oldi undoshi", "chuqur til orqa undoshi"],
    correctAnswer: "lab-tish undoshi"
  },
  {
    question: "Qaysi jarangli undoshlar sirg'aluvchilarga mansub emas.",
    options: ["b, n", "k, t", "v, z", "j, g'"],
    correctAnswer: "b, n"
  },
  {
    question: "Berilgan jarangli undoshlardan qaysilari sirg'aluvchilarga mansub.",
    options: ["r, z", "k, q", "f, s", "j, b"],
    correctAnswer: "r, z"
  },
  {
    question: "Qaysi so'z talaffuzida jarangsiz tovush o'zidan keyingi jarangli tovushni o'ziga moslashtiradi.",
    options: ["ketdi", "zarur", "o'qibdi", "maqsad"],
    correctAnswer: "ketdi"
  },
  {
    question: "Jarangsiz undoshlar ishtirok etmagan yasama so'zni toping.",
    options: ["lolazor", "bejirim", "gulsiz", "yolg'ondakam"],
    correctAnswer: "lolazor"
  },
  {
    question: "Portlovchi undoshlar yonma-yon kelgan so'zni toping.",
    options: ["iqtisod", "nashriyot", "qing'ir", "hamfikr"],
    correctAnswer: "iqtisod"
  },
  {
    question: "Qaysi yasama so'z tarkibida sirg'aluvchi tovush mavjud.",
    options: ["ulg'aymoq", "kechikmoq", "shoshilmoq", "changimoq"],
    correctAnswer: "ulg'aymoq"
  },
  {
    question: "\\-\\--b\\-\\-- va \\-\\--k\\-\\-- tovushlari qaysi xususiyatlariga ko'ra bir guruhga mansub bo'ladi.",
    options: ["portlovchi yoki sirg'aluvchiligiga ko'ra", "jarangli yoki jarangsizligiga ko'ra", "lab yoki tish undoshlariga oidligiga ko'ra", "tilning qayerida paydo bo'lishiga ko'ra"],
    correctAnswer: "portlovchi yoki sirg'aluvchiligiga ko'ra"
  },
  {
    question: "Metateza hodisasi qaysi qatordagi so'zda kuzatiladi.",
    options: ["tuproq-turpoq", "zarar-zaral", "yurakka-yurakga", "tuzsiz-tussiz"],
    correctAnswer: "tuproq-turpoq"
  },
  {
    question: "Faqat jarangsiz undoshlar qatnashgan so'zlar qatorini toping.",
    options: ["taxta, soat, sukut, toqat", "daromad, jamoat, hushyor", "muhabbat, vafo, sadoqat", "tosh, shikoyat, kitob, mulk"],
    correctAnswer: "taxta, soat, sukut, toqat"
  },
  {
    question: "Urg'usi oxirgi bo'g'inga tushmagan so'zlar qatorini toping.",
    options: ["qazilma, qotishma, burama", "bog'lar, olma, novcha", "yangicha, qishgacha, o'zgacha", "qishloqcha, yigitcha, uycha"],
    correctAnswer: "qazilma, qotishma, burama"
  },
  {
    question: "Qaysi javobda tovush o'zgarishlari yuz bergan? 1.\\~ulug'; 2.\\~taroq; 3.\\~tirnoq; 4.\\~bilak; 5.\\~yurak; 6.\\~buyrak",
    options: ["2, 3,", "1, 2, 4", "2, 3, 5", "4, 3, 6"],
    correctAnswer: "2, 3,"
  },
  {
    question: "Qaysi javobda so'z ko'chirish qoidasi to'g'ri ko'rsatilmagan.",
    options: ["mat-ba-a", "mu-do-faa", "si-ngil", "tran-sport"],
    correctAnswer: "mat-ba-a"
  },
  {
    question: "Yigirmata so'zida urg'u qaysi bo'g'inga qo'yilgan.",
    options: ["3 ga", "1 ga", "2 ga", "4 ga"],
    correctAnswer: "3 ga"
  },
  {
    question: "Qaysi qatordagi so'zlarning ma'nosi urg'u yordamida farqlanadi.",
    options: ["bog'lar, ishlar, qishloqcha", "xiyla, ariya, belcha, beshala", "bolada, qo'lla, axil", "burun, gajim, uylar"],
    correctAnswer: "bog'lar, ishlar, qishloqcha"
  },
  {
    question: "\\-\\--ayir\\-\\-- so'ziga quyidagi qaysi qo'shimchalar qo'shilsa tovush tushishi vujudga keladi. 1.\\~-ish; 2.\\~-il; 3.\\~-ma; 4.\\~-i; 5.\\~-im",
    options: ["1,2,4,5", "2,3,4,5", "2,4,5", "1,2,4"],
    correctAnswer: "1,2,4,5"
  },
  {
    question: "Rotalarni zudlik bilan o'rnidan ko'chirish haqida og'zaki buyruq berildi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["3 so'zda", "2 so'zda", "1 so'zda", "4 so'zda"],
    correctAnswer: "3 so'zda"
  },
  {
    question: "Og'zaki nutqda qaysi so'z tarkibidagi portlovchi tovush ba'zan sirg'aluvchi tovush tarzida talaffuz qilinadi.",
    options: ["taqsim", "maktab", "boribdi", "xohish"],
    correctAnswer: "taqsim"
  },
  {
    question: "Qaysi jumlada gap urg'usi \\-\\--muzeyga\\-\\-- so'ziga tushgan.",
    options: ["Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi.", "O'qituvchimiz bizni muzeyga dam olish kuni olib boradi.", "Bizni dam olish kuni muzeyga o'qituvchimiz olib boradi.", "Muzeyga bizni dam olish kuni o'qituvchimiz olib boradi."],
    correctAnswer: "Dam olish kuni o'qituvchimiz bizni muzeyga olib boradi."
  },
  {
    question: "Urg'u ma'no farqlash vazifasini bajargan so'zlarni belgilang. 1)\\~hozir; 2)\\~qurilma; 3)\\~yo'llar; 4)\\~ko'chirma; 5)\\~yangi",
    options: ["1, 2, 3, 4, 5", "1, 3, 4, 5", "1, 3, 4", "2, 4"],
    correctAnswer: "1, 2, 3, 4, 5"
  },
  {
    question: "Qaysi so'zlarning o'zak-negizida tovush almashishi yuz bergan. 1.\\~qiyna; 2.\\~tuzum; 3.\\~yuvundi; 4.\\~uyum; 5.\\~unum; 6.\\~bo'yoq",
    options: ["1, 4, 5, 6", "1, 2, 3, 4, 5, 6", "2, 4, 6", "1, 2, 4, 6"],
    correctAnswer: "1, 4, 5, 6"
  },
  {
    question: "Qaysi so'zlarda urg'u yordamida ma'noni farqlash mumkin. 1.\\~surma; 2.\\~mexanik; 3.\\~yo'llar; 4.\\~yangi; 5.\\~bog'cha",
    options: ["1, 3, 4, 5", "1, 2, 3, 4, 5", "3, 4, 5", "1, 3, 5"],
    correctAnswer: "1, 3, 4, 5"
  },
  {
    question: "Malika opaning ikkala o'g'li shaharda o'qib, ulg'ayib yana bag'riga qaytdi. Berilgan gap tarkibidagi necha so'zda tovush tushishi hodisasi mavjud.",
    options: ["4 so'zda", "1 so'zda", "2 so'zda", "3 so'zda"],
    correctAnswer: "4 so'zda"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda lab-lab undoshi sifatida talaffuz qilinadi.",
    options: ["shanba", "ichdim", "borib", "taqsim"],
    correctAnswer: "shanba"
  },
  {
    question: "Qaysi so'zdagi til oldi undoshi og'zaki nutqda boshqa til oldi undoshi sifatida talaffuz qilinadi.",
    options: ["uchta", "to'qson", "tubsiz", "tanob"],
    correctAnswer: "uchta"
  },
  {
    question: "Yonma-yon kelgan tovushlarning o'rin almashishi tilshunoslikda qanday ataladi.",
    options: ["metateza", "assimilatsiya", "dissimilatsiya", "tovush almashishi"],
    correctAnswer: "metateza"
  },
  {
    question: "So'z tarkibidagi tovushlarning ajratib yoki cho'ziqroq talaffuz qilinishini ko'rsatuvchi ishora qanday ataladi.",
    options: ["tutuq belgisi", "vergul", "so'z urg'usi", "urg'u"],
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
    question: "Morfem tarkibi asos + so'z yasovchi + lug'aviy shakl yasovchi + sintaktik shakl yasovchi qolipidagi so'zni toping.",
    options: ["tokzorlarda", "ipakchilikdan", "sizlamoq", "turmushimizni"],
    correctAnswer: "tokzorlarda"
  },
  {
    question: "Qaysi javobda zid ma'noli qo'shimchalar berilmagan.",
    options: ["ser-/-mand", "-li/-siz", "bo-/be-", "no-/-li"],
    correctAnswer: "ser-/-mand"
  },
  {
    question: "Ma'lumki, odatdagi tartib bo'yicha so'zning ma'noli qismlari asos+so'z yasovchi+lug'aviy shakl yasovchi+sintaktik shakl yasovchi shaklida o'rinlashadi. Qaysi javobda morfemalari ushbu tartib asosida joylashgan so'z berilgan.",
    options: ["anglamadi", "isitkichlarni", "hamkasblarimga", "isitmalamoq"],
    correctAnswer: "anglamadi"
  },
  {
    question: "Qaysi javobda tub so'z berilgan.",
    options: ["tulki", "ko'chki", "turtki", "tepki"],
    correctAnswer: "tulki"
  },
  {
    question: "Qaysi javobda morfemalarga bo'linmaydigan so'z berilgan.",
    options: ["huquq", "yutuq", "buyruq", "uzuq"],
    correctAnswer: "huquq"
  },
  {
    question: "Xatosi o'ziga ayon bo'lgach, gapira olmay g'uldirab javob berdi. Berilgan gapdagi yasama so'zlar miqdorini aniqlang.",
    options: ["4 ta", "2 ta", "3 ta", "5 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Osmon go'zal oyi, quyoshi bilan, Inson go'zal mardlik, bardoshi bilan. Fazilati, odobi, xulqi bilan, Chin xislati -- noyob qalb mulki bilan. Ushbu gapda nechta ot so'z turkumiga mansub so'zlar mavjud.",
    options: ["12 ta", "13 ta", "11 ta", "14 ta"],
    correctAnswer: "12 ta"
  },
  {
    question: "Sen yig'layver, go'zal bo'lasan, Dard chekaver husning ortadi. Senga yarashmaydi tabassum, Qiyofangga og'ir botadi. Ushbu gapda ot so'z turkumiga mansub nechta so'z qatnashgan.",
    options: ["4 ta", "6 ta", "5 ta", "3 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Yasama mavhum ot qatnashgan gapni toping.",
    options: ["Kezib-kezib topganlarim sog'inch bo'ldi.", "Aziz shaharda qib qaytdi.", "Toshkentlik mehmonga Registon juda yoqdi.", "Hasad -- yurakning zanglashi."],
    correctAnswer: "Kezib-kezib topganlarim sog'inch bo'ldi."
  },
  {
    question: "Bo'gin ko'chirish qoidasi buzilmagan qatorni toping.",
    options: ["de-ngiz", "den-giz", "ing-liz", "kong-ress"],
    correctAnswer: "de-ngiz"
  },
  {
    question: "Berilgan so'zlardan qaysi biri qo'shib yoziladi.",
    options: ["bug'doy rang", "dardi bedavo", "tim qora", "ota ona"],
    correctAnswer: "bug'doy rang"
  },
  {
    question: "Tutuq belgisi qaysi qatorda unlining undoshdan ajratib talaffuz etilishini talab qiladi.",
    options: ["san'at", "ma'no", "ra'no", "a'zo"],
    correctAnswer: "san'at"
  },
  {
    question: "Kishilik olmoshi va o'zlik olmoshi birga qo'llansa, qanday uslubiy ma'no ifodalanadi.",
    options: ["ta'kid", "hurmat", "kinoya", "inkor"],
    correctAnswer: "ta'kid"
  },
  {
    question: "O'lchov so'z(numerativ)lar haqida bildirilgan qaysi fikr to'g'ri emas.",
    options: ["Otning va fe'lning o'lchovini ifodalaydi.", "O'lchov so'zlar sanoq son bilan o'lchanayotgan narsaning orasida qo'llanadi.", "O'zidan oldingi sanoq son bilan bitta so'roqqa javob bo'lsa-da, bitta sintaktik vazifa bajarmaydi.", "Ayrim o'lchov so'zlar alohida olinganda narsa(predmet) ma'nosini ifodalaydi."],
    correctAnswer: "Otning va fe'lning o'lchovini ifodalaydi."
  },
  {
    question: "Quyida berilganlardan ham bog'lovchi, ham yuklama vazifasida qo'llanuvchi so'zni aniqlang.",
    options: ["ham", "bilan", "balki", "deb"],
    correctAnswer: "ham"
  },
  {
    question: "Qaysi javobda sof modal so'zlar berilgan.",
    options: ["avvalo, afsuski, albatta", "aftidan, chamasi, taxminan", "umuman, balki, ehtimol", "shubhasiz, to'g'ri, o'z-o'zidan"],
    correctAnswer: "avvalo, afsuski, albatta"
  },
  {
    question: "Baqqol amaki pakana, yuzi katta, peshonasi keng, soqoli siyrak, burni puchuq, iyagi kalta odam edi. Mazkur gapning necha o'rnida sifat qo'llangan.",
    options: ["6 ta", "5 ta", "4 ta", "3 ta"],
    correctAnswer: "6 ta"
  },
  {
    question: "Qaysi gapda ikki usulda yasalgan ikki yasama sifat qo'llangan.",
    options: ["Mehnatsevar, zahmatkash insonlar odamlarning ko'rkidir.", "Oldimizda mevali va mevasiz daraxtlari ko'p bo'lgan o'rmon.", "Nodon, kaltafahm odamdan yaxshi gap chiqmaydi.", "Sofdil va jonkuyar odamlar bilan bu dunyo oboddir."],
    correctAnswer: "Mehnatsevar, zahmatkash insonlar odamlarning ko'rkidir."
  },
  {
    question: "Qaysi fe'l fe'lning barcha nisbat shakllarida ham qo'llana oladi.",
    options: ["kiymoq", "o'qimoq", "yodlamoq", "so'ramoq"],
    correctAnswer: "kiymoq"
  },
  {
    question: "Qaysi qatorda bosh harflar imlosi bilan bog'liq xatoga yo'l qo'yilgan.",
    options: ["Favqulodda Vaziyatlar Vazirligi", "Buxoro viloyati hokimligi", "Samarqand chinni zavodi", "O'zbekiston Respublikasi Oliy Sudi"],
    correctAnswer: "Favqulodda Vaziyatlar Vazirligi"
  },
  {
    question: "Morfem tarkibi asos + sz yasovchi + lugaviy shakl yasovchi + sinataktik shakl yasovchi qolipidagi so'zni toping.",
    options: ["tokzorlarda", "ipakchilikdan", "sizlamoq", "turmushimizni"],
    correctAnswer: "tokzorlarda"
  },
  {
    question: "Quyida berilgan gapda nechta shaxs oti qatnashgan? Bahor oxirlab qolayotgan kunlarda shahzoda Abusaid qirq yigiti bilan ovga chiqdi.",
    options: ["2 ta", "1 ta", "3 ta", "4 ta"],
    correctAnswer: "2 ta"
  },
  {
    question: "Bo'g'in ko'chirish haqidagi noto'gri hukmni toping.",
    options: ["harfdan iborat shartli belgisi tegishli raqamdan ajratib ko'chiriladi", "bir tovushni ko'rsatuvchi harf birikmasi birgalikda ko'chiriladi", "bosh harflardan yoki bginga teng qism va bosh harflardan iborat qisqartmalar, shuningdek, ko'p xonali raqamlar satrdan satrga bo'lib ko'chirilmaydi", "atoqli ot tarkibiga kiradigan raqam nomdan ajratilgan holda ajratib ko'chirilmaydi"],
    correctAnswer: "harfdan iborat shartli belgisi tegishli raqamdan ajratib ko'chiriladi"
  },
  {
    question: "Qaysi qatordagi so'z ajratib yoziladi.",
    options: ["qaykuni", "birpas", "biroz", "biratla"],
    correctAnswer: "qaykuni"
  },
  {
    question: "Berilgan so'zlardan qaysi biri ajratib yoziladi.",
    options: ["so\`zboshi", "bodomqovoq", "temireshik", "qiymataxta"],
    correctAnswer: "so\\`zboshi"
  },
  {
    question: "Berilgan so'zlardan qaysi biri qo\\`shib yoziladi.",
    options: ["lang ochiq", "tim qora", "nim qorong'i", "to'q qizil"],
    correctAnswer: "lang ochiq"
  },
  {
    question: "Bosh harflar imlosi noto'gri berilgan qatorni toping.",
    options: ["Sogiiqni saqlash vazirligi", "O'zbekiston Qahramoni", "Fanlar Akademiyasi", "Toshkent davlat tibbiyot instituti"],
    correctAnswer: "Sogiiqni saqlash vazirligi"
  },
  {
    question: "Qo'shib yozilishi kerak bo'lgan so\\`zlar qatorini toping.",
    options: ["mirza terak, o'zbek film", "Oltin kon, temir yo\`l", "Bek obod, Katta Fargona kanali", "So\`z boshi, liq to\`la"],
    correctAnswer: "mirza terak, o'zbek film"
  },
  {
    question: "Noto\\`gri yozilgan paronimlarni toping.",
    options: ["tif, tip", "sof, sop", "xiyla, hiyla", "asr, asir"],
    correctAnswer: "tif, tip"
  },
  {
    question: "«O'zbektilining asosiy imlo qoidalari» necha banddan iborat.",
    options: ["82 banddan", "80 banddan", "84 banddan", "72 banddan"],
    correctAnswer: "82 banddan"
  },
  {
    question: "Qaysi qatordagi so'z to'gri yozilgan.",
    options: ["tatbiq", "muomila", "avf", "tomasha"],
    correctAnswer: "tatbiq"
  },
  {
    question: "To'gri yozilgan so'zni toping.",
    options: ["afv", "muvafaqiyat", "taqazo", "hashorat"],
    correctAnswer: "afv"
  },
  {
    question: "Qaysi qatorda hokim so'z sifat bilan ifodalangan?",
    options: ["voqeadan xabardor", "shunday o'lka", "halol ishlamoq", "kuzgi bug'doy"],
    correctAnswer: "voqeadan xabardor"
  },
  {
    question: "Boshqaruv yo'li bilan hosil bo'lgan so'z birikmasini ko'rsating.",
    options: ["opasi bilan ko'rishmoq", "navbatchining vazifasi", "zimdan kuzatmoq", "shahar ko'chalari"],
    correctAnswer: "opasi bilan ko'rishmoq"
  },
  {
    question: "Quyidagilarning qaysi biri qaratqichli birikma hisoblanadi.",
    options: ["yigit husni", "oltin soat", "uzum yedi", "yog'och ko'prik"],
    correctAnswer: "yigit husni"
  },
  {
    question: "Lug'atlarda so'zning ma'nosini ochib berishda qanday birliklardan foydalaniladi.",
    options: ["so'z birikmalaridan", "so'zlardan", "gaplardan", "iboralardan"],
    correctAnswer: "so'z birikmalaridan"
  },
  {
    question: "Otli birikma deb qanday so'z birikmasiga aytiladi.",
    options: ["hokim so'z ot va otlashgan so'zlar bilan ifodalangan birikma", "hokim so'z fe'l bilan ifodalangan birikma", "hokim so'z ot bilan ifodalangan birikma", "hokim va tobe so'z bilan ifodalangan birikma"],
    correctAnswer: "hokim so'z ot va otlashgan so'zlar bilan ifodalangan birikma"
  },
  {
    question: "Qizingizning ko'zlari yaxshi ko'radi. Tagiga chizilgan birlik haqidagi to'g'ri hukmni toping.",
    options: ["so'z birikmasi", "so'z qo'shilmasi", "qo'shma so'z", "turg'un bo'glanma"],
    correctAnswer: "so'z birikmasi"
  },
  {
    question: "Paxta gulli chinni piyola so'z birikmasi zanjirida nechta so'z birikmasi bor?",
    options: ["3 ta", "1 ta", "2 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Vatan -- ona allasi taralgan, beshiging izlari chizilgan zamin. Ushbu gapdagi moslashuvli so'z birikmalari miqdorini toping.",
    options: ["2 ta", "1 ta", "3 ta", "4 ta"],
    correctAnswer: "2 ta"
  },
  {
    question: "Bu masalani tezda yechish kerak. Ushbu gapda nechta so'z birikmasi zanjiri bor?",
    options: ["3 ta", "1 ta", "2 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "O'zbek tilidagi qo'shimchalarning vazifalari nechta?",
    options: ["3 ta", "5 ta", "2 ta", "10 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Fonetika bo'limining o'rganilish obyekti nima?",
    options: ["Fonema", "Morfema", "Leksema", "Semema"],
    correctAnswer: "Fonema"
  },
  {
    question: "Leksikologiya bo'limining o'rganilish obyekti nima?",
    options: ["Leksema", "Morfema", "Fonema", "Semema"],
    correctAnswer: "Leksema"
  },
  {
    question: "Morfemika bo'limining o'rganilish obyekti nima?",
    options: ["Morfema", "Leksema", "Fonema", "Semema"],
    correctAnswer: "Morfema"
  },
  {
    question: "O'zbek tilida nechta so'z turkumi bor?",
    options: ["12 ta", "6 ta", "5 ta", "9 ta"],
    correctAnswer: "12 ta"
  },
  {
    question: "O'zbek tilida so'z turkumlari nechta guruhga bo'linadi?",
    options: ["3 ta", "4 ta", "6 ta", "12 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Mustaqil so'z turkumlari nechta?",
    options: ["6 ta", "12 ta", "5 ta", "3 ta"],
    correctAnswer: "6 ta"
  },
  {
    question: "Yordamchi so'z turkumlari to'g'ri ko'rsatilgan qatorni toping.",
    options: ["Bog'lovchi, Ko'makchi, Yuklama", "Undov, Modal, Taqlid so'zlar", "Ot, Sifat, Son, Fe'l, Olmosh, Ravish", "Bog'lovchi, Sifat, Fe'l, Ot, Ko'makchi, Yuklama"],
    correctAnswer: "Bog'lovchi, Ko'makchi, Yuklama"
  },
  {
    question: "Alohida olingan guruh so'z turkumlari ko'rsatilgan qatorni belgilang 1.Ot 2. Bog'lovchi 3. Son 4. Yuklama 5. Olmosh 6. Ravish 7. Sifat 8. Fe'l 9. Undov 10. Modal 11. Ko'makchi 12 Taqlid so'zlar",
    options: ["9, 10, 12", "4, 6, 11", "10, 11, 6", "1, 5, 7"],
    correctAnswer: "9, 10, 12"
  },
  {
    question: "Mustaqil so'z turkumlari ko'rsatilgan qatorni belgilang 1.Ot 2. Bog'lovchi 3. Son 4. Yuklama 5. Olmosh 6. Ravish 7. Sifat 8. Fe'l 9. Undov 10. Modal 11. Ko'makchi 12 Taqlid so'zlar",
    options: ["1, 3, 5, 6, 7, 8,", "1, 3, 9, 10, 11, 12", "2, 4, 6, 7, 8, 11", "1, 5, 7, 10, 11, 12"],
    correctAnswer: "1, 3, 5, 6, 7, 8,"
  },
  {
    question: "Uch-to\\'rttasi xumning chetiga, Nasriddinning egniga ham o\\'tirdi. Gapdagi ega qaysi so'z turkumi bilan ifodalangan?",
    options: ["uch-to\'rttasi", "ega qo'llanmagan", "Nasriddinning", "xumning"],
    correctAnswer: "uch-to\\'rttasi"
  },
  {
    question: "Hafsalasi pir bo'lganini u ko'zidan bilintirib turardi. Ushbu gapda ega qanday so'z bilan ifodalangan?",
    options: ["olmosh bilan", "ot bilan", "otlashgan ibora bilan", "ibora bilan"],
    correctAnswer: "olmosh bilan"
  },
  {
    question: "Vositasiz to'ldiruvchini toping.",
    options: ["To'g'ri so'z tosh yoradi, egri so'z bosh yoradi.", "Inson go'zalikka intiladi.", "Yomon bilan yo'ldosh bo'lma.", "Bu roman Pirimqul Qodirov tomonidan yozilgan."],
    correctAnswer: "To'g'ri so'z tosh yoradi, egri so'z bosh yoradi."
  },
  {
    question: "Kesimi majhul nisbatdagi fe'l bilan ifodalangan gapni toping.",
    options: ["Doklad uchun Ziyodaxonga so'z berildi.", "Kamchiliklarni ro'y-rost ochib tashlashdi.", "Ayvon yonidagi o'choqqa o't qaladi.", "Atayin ho'l sochiq bilan artindi."],
    correctAnswer: "Doklad uchun Ziyodaxonga so'z berildi."
  },
  {
    question: "Ibora bilan ifodalangan murakkab kesim qaysi javobda berilgan?",
    options: ["U birdaniga to'nini teskari kiyib oldi.", "Dadam qo'li ochiq odam edilar.", "Respublikamizda-gi eng nufuzli bilim dargohi O'zbekiston Milliy universitetidir.", "Toshkent -- O'zbekiston Respublikasi-ning poytaxtidir."],
    correctAnswer: "U birdaniga to'nini teskari kiyib oldi."
  },
  {
    question: "Vositasiz to'ldiruvchi berilmagan qatorni aniqlang.",
    options: ["Boshliq ilg'or ishchilarga mukofot topshirdi.", "Zebi onasining beradigan javobiini ilgaridan bilardi.", "Chaqmoqning yalt-yultidan bola qo'rqdi.", "Kelinlari aytadi alla, qo'shiqchisi kuylaydi yalla."],
    correctAnswer: "Boshliq ilg'or ishchilarga mukofot topshirdi."
  },
  {
    question: "\"Nima\" so'rog'iga javob bo'ladigan so'z bilan ifodalangan sifatlovchi aniqlovchi qaysi javobda berilgan?",
    options: ["Kumush qishdan, zumrad bahordan qolishmaydi kuzning ziynati", "Bir kishi ariq qaziydi, ming kishi suv ichadi.", "Bu yilgi bahorning kech kelishi odamlarning tinka-madorini quritdi.", "Shu payt ichkaridan ship-ship qadam tovushi eshitildi."],
    correctAnswer: "Kumush qishdan, zumrad bahordan qolishmaydi kuzning ziynati"
  },
  {
    question: "Gaplarni sodda va qo\\'shma gaplarga ajratishga nima asos bo\\'ladi?",
    options: ["kesimlik belgisining miqdori.", "sodda gapning mavjudligi", "egalik belgisining miqdori", "gap talaffuzidagi to\`xtamlar miqdori"],
    correctAnswer: "kesimlik belgisining miqdori."
  },
  {
    question: "His-hayajon gap qaysi qatorda berilmagan?",
    options: ["Yaxshilik qil, bolam, yomonlikni ot.", "Eh, qanday go'zal bu yoshlik!", "Yoshlik, qanday beg'ubor faslsan!", "Naqadar baxtlidir ona bechora!"],
    correctAnswer: "Yaxshilik qil, bolam, yomonlikni ot."
  },
  {
    question: "So'roq olmoshi yordamida tuzilgan so'roq gapni aniqlang.",
    options: ["-- Nega bo'lmasa dudmol qilyapsiz?", "-- Havo bosimi odamga ta'sir qilmaydimi?", "-- Demak, sizga astoydil tayansak bo'ladi?", "-- Arzingiz bor ekan deb eshitdim?"],
    correctAnswer: "-- Nega bo'lmasa dudmol qilyapsiz?"
  },
  {
    question: "Ritorik so'roq gap qaysi qatorda berilgan?",
    options: ["Mehr-muhabbatga to'yarmi inson?", "Bugungi ishni ertaga qo'yma.", "Naqadar jasur va quvnoq edik!", "Opam keldimi?"],
    correctAnswer: "Mehr-muhabbatga to'yarmi inson?"
  },
  {
    question: "Fransuz tilidan tarjima qiliganda \"5 qator\" ma'nosini bildiruvchi usul:",
    options: ["Aqliy hujum", "Klaster", "Insert", "Sinkveyn"],
    correctAnswer: "Sinkveyn"
  },
  {
    question: "Pedagogik jarayonda shaxslararo munosabatlarning keskinlashuvi natijasi sifatida yuzaga keluvchi muammoli jarayon — bu...",
    options: ["Pedagogik odob", "Pedagogik konflikt", "Pedagogik munozara", "Pedagogik usul"],
    correctAnswer: "Pedagogik konflikt"
  },
  {
    question: "«Didaktika» termini yunoncha «didaktikos» degan so'zdan olingan bo'lib, qanday ma'noda tarjima qilinadi?",
    options: ["Ta'lim beruvchi va ta'lim oluvchi", "O'qituvchi", "Ta'lim berish va o'qitish", "Ta'lim oluvchi"],
    correctAnswer: "Ta'lim berish va o'qitish"
  },
  {
    question: "«Buyuk didaktika» asarini kim yozgan?",
    options: ["Ya.A.Komenskiy", "Arastu", "J.J.Russo", "Suqrot"],
    correctAnswer: "Ya.A.Komenskiy"
  },
  {
    question: "Pedagogika qanday fan?",
    options: ["Pedagogika tarbiya jarayonining qonuniyatlari, prinsiplari, shakl va metodlari haqidagi gumanitar fan.", "Pedagogika tarbiyaning nazariy asoslarini tadqiq etuvchi ijtimoiy-gumanitar fan.", "Pedagogika ta'lim jarayonining mazmuni, qonuniyatlari, metodlarini o'rganuvchi, ijtimoiy, umumkasbiy fan.", "Pedagogika ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy, umumkasbiy fan."],
    correctAnswer: "Pedagogika ta'lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlari, metodlarini o'rganuvchi ijtimoiy, umumkasbiy fan."
  },
  {
    question: "Tarbiyaning asosiy vazifasi nima?",
    options: ["Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e'tiqodini, axloqiy ko'nikma va malakalarini, ehtiyoji va intilishlarini tarkib toptirishdan iborat.", "Odamning jamiyat a'zosi sifatida o'z-o'zini anglash va tafakkurini, faoliyatining ob'yektivligini biluvchanlik tushunchasidir.", "Odamlarning dunyo bilan munosabatlarining bir butun sistemasini ta'minlovchi vosita.", "Zarurat, ehtiyojlilik — qandaydir bir vosita, o'zga narsaga javob berish, insonning ruhiy holatini to'g'rilovchi omil."],
    correctAnswer: "Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e'tiqodini, axloqiy ko'nikma va malakalarini, ehtiyoji va intilishlarini tarkib toptirishdan iborat."
  },
  {
    question: "Shaxs kamolotiga qanday omillar ta'sir etadi?",
    options: ["Bola shaxsining rivojlanishiga muhit va tarbiya kabi omillar.", "Odamlarning munosabati.", "Biologik omil, ijtimoiy omil va tarbiya ta'sir etadi.", "Shaxsning kamol topishida ijtimoiy va biologik omillar ta'sir etadi."],
    correctAnswer: "Biologik omil, ijtimoiy omil va tarbiya ta'sir etadi."
  },
  {
    question: "Abu Ali Ibn Sinoning ta'lim-tarbiya haqidagi fikrlari:",
    options: ["Tarbiya bu najot.", "6 yoshdan bolani muallimga topshirish.", "Bolaga jamoada ta'lim berish afzalligi.", "Tarbiya yagona jarayon."],
    correctAnswer: "Bolaga jamoada ta'lim berish afzalligi."
  },
  {
    question: "Pedagogik diagnostika nima?",
    options: ["Bilish sifatini takomillashtirish.", "Ta'lim-tarbiya jarayonini chuqur tahlil qilish, uning samaradorligini to'g'ri baholash, ta'lim darajasini aniqlash.", "Ta'limni takomillashtirish.", "Ta'limdagi kamchiliklarni bartaraf qilish."],
    correctAnswer: "Ta'lim-tarbiya jarayonini chuqur tahlil qilish, uning samaradorligini to'g'ri baholash, ta'lim darajasini aniqlash."
  },
  {
    question: "Nuqtalar o'rniga mos javobni qoying: \"............... ya'ni elementar o'qish va yozishga o'rgatish bolalarga savod o'rgatish pedagogikadagina emas balki ijtimoiy hayotda ham juda jiddiy qo'yilgan holatdir.\"",
    options: ["Nutqni o'stirish metodikasi", "Savod o'rgatish metodikasi", "Imlo metodikasi", "O'qitish metodikasi"],
    correctAnswer: "Savod o'rgatish metodikasi"
  },
  {
    question: "Ta'lim metodlari qanday ma'noni anglatadi?",
    options: ["O'quvchilarga bilim berishning yo'llari va usullarini ifodalaydi.", "O'qituvchining talabchanligini ta'minlaydi.", "Ta'limning asosiy tartibi hisoblanadi.", "O'quvchilarni bilimli qilishning tamoyillarini bildiradi."],
    correctAnswer: "O'quvchilarga bilim berishning yo'llari va usullarini ifodalaydi."
  },
  {
    question: "Malaka nima?",
    options: ["Malaka — harakatlarning ko'p marta takrorlanishi asosida hosil bo'ladigan avtomatik jarayon.", "Malaka to'plangan tajribadir.", "Malaka bir xil xatti-harakatlarning ko'p marta takrorlanishi.", "Malaka bu odatiy harakatlar."],
    correctAnswer: "Malaka — harakatlarning ko'p marta takrorlanishi asosida hosil bo'ladigan avtomatik jarayon."
  },
  {
    question: "Ta'lim olish huquqi \"Ta'lim to'g'risida\"gi qonunning nechanchi moddasida keltirilgan?",
    options: ["23-moddada", "5-moddada", "55-moddada", "7-moddada"],
    correctAnswer: "5-moddada"
  },
  {
    question: "Pedagogning umumiy madaniyati nimalardan iborat?",
    options: ["Bilimi, ishonchi, qobiliyati va xulqi.", "Kasbiy faoliyatda yetukligi.", "Kasbiy ahamiyatli madaniyat.", "Ijtimoiy madaniyat."],
    correctAnswer: "Bilimi, ishonchi, qobiliyati va xulqi."
  },
  {
    question: "O'qituvchining pedagogik faoliyati turlari qaysilar?",
    options: ["Shakllantiruvchi va rivojlantiruvchi.", "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik.", "O'quvchi faoliyatini tashkil etish va boshqarish.", "Ta'lim beruvchi, tarbiyalovchi, rivojlantiruvchi."],
    correctAnswer: "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik."
  },
  {
    question: "Jamoa so'ziga to'g'ri ta'rif toping:",
    options: ["Lotincha \"kollektivus\" — yig'ilma, omma, birgalikdagi majlis, birlashma, guruh.", "Inglizcha qayta ishlash.", "Lotincha \"projectus\" — oldinga tashlangan.", "Lotincha qurish."],
    correctAnswer: "Lotincha \"kollektivus\" — yig'ilma, omma, birgalikdagi majlis, birlashma, guruh."
  },
  {
    question: "Sinf so'ziga to'g'ri ta'rif berilgan qatorni toping:",
    options: ["Ijtimoiy ahamiyatga ega umumiy maqsad asosida bir necha o'quvchilardan tashkil topgan guruh.", "Tarbiyalanuvchilarning yosh, psixologik xususiyatiga ko'ra shakllantirilgan yoki o'rta maxsus va oliy ta'lim muassasalari ta'lim oluvchilarining akademik jamoasi.", "Yoshi va bilimi jihatidan bir xil bo'lgan muayyan o'quvchilar guruhi.", "Yig'ilma, omma, birgalikdagi majlis, birlashma, guruh."],
    correctAnswer: "Yoshi va bilimi jihatidan bir xil bo'lgan muayyan o'quvchilar guruhi."
  },
  {
    question: "Umumiy maqsad yo'lida shaxslarning o'zaro munosabatlari, tashkiliyligi va intilishlari bilan bir-biriga monand turg'un sotsial (ijtimoiy) uyushmani nima deb yuritiladi?",
    options: ["Guruh", "Jamoa", "Ommaviylik", "Jamiyat"],
    correctAnswer: "Jamoa"
  },
  {
    question: "Og'zaki ta'lim metodlari qaysilar?",
    options: ["Hikoya, mashq.", "Ma'ruza, seminar, laboratoriya ishi.", "Hikoya, suhbat, mashq.", "Hikoya, suhbat, ma'ruza."],
    correctAnswer: "Hikoya, suhbat, ma'ruza."
  },
  {
    question: "O'zbekiston Respublikasining \"Ta'lim to'g'risida\"gi qonuniga muvofiq kimlar pedagogik faoliyat bilan shug'ullanish huquqiga egalar?",
    options: ["Tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo'lgan shaxslar.", "Kasbiy bilim, ko'nikma va malaka, shuningdek, ta'lim muassasalarida ishlash tajribasiga ega shaxslar.", "Oliy pedagogik ma'lumot hamda 5 yillik pedagogik stajga ega shaxslar.", "Faoliyat jarayonida ta'lim oluvchilarning yosh va psixologik xususiyatlarini biladigan shaxslar."],
    correctAnswer: "Tegishli ma'lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo'lgan shaxslar."
  },
  {
    question: "Nutq etikasi bu…",
    options: ["Mustaqil gaplar.", "Fikrni ravon ifodalash.", "Juda ham jiddiy so'zlarni qamrab oladi.", "Sodda va ravon so'zlardan foydalana olish."],
    correctAnswer: "Sodda va ravon so'zlardan foydalana olish."
  },
  {
    question: "Inson 70% bilimlarni necha yoshgacha o'zlashtiradi?",
    options: ["6", "7", "10", "9"],
    correctAnswer: "7"
  },
  {
    question: "\"Ta'lim to'g'risidagi qonun\" qachon qabul qilingan va qayta tahriridan o'tkazilgani qachon qabul qilingan?",
    options: ["1993 yil, 11 avgust", "2020 yil, 29 iyul", "2019 yil, 12 avgust", "2020 yil 23 sentabr"],
    correctAnswer: "2020 yil 23 sentabr"
  },
  {
    question: "\"Pedagogika bola tarbiyasining fani demakdir\". Ta'rif kim tomonidan berilgan?",
    options: ["Ishoqxon Ibrat", "Abduqodir Shakuriy", "H.H.Niyoziy", "Abdulla Avloniy"],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Pedagogika fanining otasi kim?",
    options: ["Kuznin", "Godnin", "Yan Amos Komenskiy", "Aristotel"],
    correctAnswer: "Yan Amos Komenskiy"
  },
  {
    question: "Innovatsiya pedagogik termin sifatida nechanchi asrda va qayerda paydo bo'lgan?",
    options: ["XX asrning 60-yillarida G'arbiy Yevropa va AQShda.", "XIX asrning 60-yillarida Germaniyada.", "XIX asrning 80-yillarida Germaniyada.", "XX asrning 50-yillarida Yaponiyada."],
    correctAnswer: "XX asrning 60-yillarida G'arbiy Yevropa va AQShda."
  },
  {
    question: "6 yil bepul, haftasiga 6 kun o'qish. 6-aprelda o'quv yili boshlanadi. Ushbu davlat nomini belgilang:",
    options: ["Germaniya", "Litva", "Hindiston", "Yaponiya"],
    correctAnswer: "Yaponiya"
  },
  {
    question: "Kompetensiya so'zining lug'aviy ma'nosi:",
    options: ["Tashkil etaman.", "Bajaraman, to'g'rilayman.", "Uyushtiraman.", "Loyiqman, munosibman."],
    correctAnswer: "Loyiqman, munosibman."
  },
  {
    question: "\"Klaster\" so'zining ma'nosi:",
    options: ["Alohida.", "Bog'lam.", "Yangilik.", "O'ziga xoslik."],
    correctAnswer: "Bog'lam."
  },
  {
    question: "\"Fan va aql-zakovat\" asarining muallifi kim?",
    options: ["Ahmad Yugnakiy", "Abu Ali Ibn Sino", "Al-Farobiy", "Al-Farg'oniy"],
    correctAnswer: "Al-Farobiy"
  },
  {
    question: "Loyihaviy ta'lim qancha vaqtdan buyon pedagogikada foydalanib kelinmoqda?",
    options: ["200 yildan ortiq vaqt.", "2005-yildan beri.", "50 yildan ortiq.", "300 yildan ortiq vaqt."],
    correctAnswer: "300 yildan ortiq vaqt."
  },
  {
    question: "Bir va bir necha oygacha ishlab chiqiladigan ta'lim loyihalari turini ayting:",
    options: ["O'rta muddatli loyiha.", "Uzoq muddatli loyiha.", "Amaliy loyihalar.", "Axborotli loyihalar."],
    correctAnswer: "O'rta muddatli loyiha."
  },
  {
    question: "Loyihaga kirishish, loyiha faoliyatini tashkil etish va rejalashtirish — auditoriya ishining qaysi bosqichini o'z ichiga qamrab oladi?",
    options: ["Qaytuvchi bosqich.", "Loyihani bajarish bosqichi.", "Tayyorgarlik bosqichi.", "Yakunlovchi bosqich."],
    correctAnswer: "Tayyorgarlik bosqichi."
  },
  {
    question: "Sharq uyg'onish davri baholash mezonini belgilang:",
    options: ["\"Juda yomon\", \"yomon\", \"o'rta\", \"yaxshi\", \"a'lo\".", "Barakallo, tasanno, ofarin.", "Yaxshi, o'rta, a'lo.", "12345."],
    correctAnswer: "Barakallo, tasanno, ofarin."
  },
  {
    question: "Nechanchi yildan boshlab besh ballik baholar raqamlarda, ya'ni 1, 2, 3, 4, 5 raqamlarda ifoda etish joriy qilingan?",
    options: ["1990 yildan.", "622 yildan.", "1944-yildan.", "1950 yildan."],
    correctAnswer: "1944-yildan."
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim muassasalari reytingini aniqlash chora-tadbirlari to'g'risida O'zbekiston Respublikasi Vazirlar Mahkamasining 345-sonli qarori qachon kuchga kirgan?",
    options: ["09.12.1985", "03.06.2021", "04.06.2021", "23.09.2020"],
    correctAnswer: "04.06.2021"
  },
  {
    question: "\"…bu o'quvchilar tomonidan mazkur fanning muayyan bob yoki bo'limlarining o'zlashtirilganini tekshirish.\" Nuqtalar o'rnini to'ldiring:",
    options: ["Yakuniy.", "Oraliq nazorat.", "Joriy.", "Tashkiliy."],
    correctAnswer: "Oraliq nazorat."
  },
  {
    question: "Optimallashtirish deganda nimani tushunasiz?",
    options: ["Ta'limda fanlararo o'qitish nazariyasi.", "Ta'lim berib, o'qitish nazariyasi.", "Muammoli o'qitish.", "Ko'p sonli imkoniyatlardan eng qulayini tanlab olish."],
    correctAnswer: "Ko'p sonli imkoniyatlardan eng qulayini tanlab olish."
  },
  {
    question: "Pedagogik takt nima?",
    options: ["Har bir ta'lim oluvchi va jamoaning faolligini pedagogik jihatdan ta'minlash uchun zarur bo'lgan malaka va ko'nikmalar.", "Pedagogning yutuqlariga kafolat beradigan aniq ishlab chiqilgan va qat'iy ilmiy loyihalashtirilgan pedagogik harakat.", "Har bir ta'lim oluvchiga va jamoaga pedagogik ta'sir o'tkazishni samarali qo'llash uchun zarur bo'lgan malaka va ko'nikmalar majmuasi.", "O'qituvchi kasbiy mahoratining asosi bo'lib, o'quvchilarga barcha demokratik talablar asosida pedagogik ta'sir o'tkazish, muloqotni insonparvarlik tuyg'ulari asosida o'rnatish o'lchovi, o'quvchilarda mustaqil fikr yuritishni hamda ongli intizomni tarkib toptirish ko'nikmalarini hosil qilish shaklidir."],
    correctAnswer: "O'qituvchi kasbiy mahoratining asosi bo'lib, o'quvchilarga barcha demokratik talablar asosida pedagogik ta'sir o'tkazish, muloqotni insonparvarlik tuyg'ulari asosida o'rnatish o'lchovi, o'quvchilarda mustaqil fikr yuritishni hamda ongli intizomni tarkib toptirish ko'nikmalarini hosil qilish shaklidir."
  },
  {
    question: "Pedagogning kommunikativ madaniyati deganda…",
    options: ["Pedagogning o'quvchilar va atrofdagilar bilan qisqa muddatda muloqot o'rnatishga bo'lgan doimiy intilishi.", "Pedagogning dunyoga, pedagogik voqelikka va pedagogik jarayonga bo'lgan intellektual va hissiy munosabati.", "O'quvchi va jamoaning faolligini pedagogik jihatdan ta'minlash uchun zarur bo'lgan malaka va ko'nikmalar.", "Pedagogik jarayonni bilish, uni tashkil eta olish."],
    correctAnswer: "Pedagogning o'quvchilar va atrofdagilar bilan qisqa muddatda muloqot o'rnatishga bo'lgan doimiy intilishi."
  },
  {
    question: "Diksiya nima?",
    options: ["So'zlayotganda obrazga kirish, ovozni kerakli joyda pastlatish, ohista gapirish.", "Tovush rangdorligi, yorqinligi, uning yumshoqligi va alohidaligi.", "Tovush hajmi, uning chegarasi.", "So'zlarni aniq, ravshan talaffuz etish, so'zlash usuli."],
    correctAnswer: "So'zlarni aniq, ravshan talaffuz etish, so'zlash usuli."
  },
  {
    question: "Pantomimika bu…",
    options: ["Oyoqlar holati, harakati.", "Yuz ifodasi va harakatlari.", "Oyoqlar, gavda, qo'l orqali fikrni ifodalash.", "Yuz muskullari."],
    correctAnswer: "Oyoqlar, gavda, qo'l orqali fikrni ifodalash."
  },
  {
    question: "O'qituvchining o'quvchilarni boshqarish uslublari berilgan javobni toping:",
    options: ["Demokratik uslub, avtoritar uslub, hazil-mutoyiba uslubi.", "Avtoritar uslub, liberal uslub, muloqot-qo'rqitish uslubi.", "Avtoritar uslub, demokratik uslub, liberal uslub.", "Demokratik uslub, liberal uslub, muloqot-masofa uslubi."],
    correctAnswer: "Avtoritar uslub, demokratik uslub, liberal uslub."
  },
  {
    question: "Pedagogik adabiyotlar va maktab amaliyotida o'quvchilar o'quv faoliyatini tashkil etishning qanday asosiy shakli qabul qilingan?",
    options: ["Yakka-guruhiy, ommaviy, individual.", "Integratsiyalashgan, yakka, guruhiy.", "Tabaqalashgan, individual, ommaviy.", "Ommaviy, guruhli, individual."],
    correctAnswer: "Ommaviy, guruhli, individual."
  },
  {
    question: "Oliy ta'lim nechta bosqichdan iborat?",
    options: ["4", "3", "5", "2"],
    correctAnswer: "2"
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim bosqichida o'qish muddati necha yil?",
    options: ["11 yil", "4 yil", "7 yil", "9 yil"],
    correctAnswer: "11 yil"
  },
  {
    question: "Aniq maqsad asosida kishi ongini ma'naviy axloqiy qadriyatlarni shakllantirishga qaratilgan tizimli jarayonga nima deyiladi?",
    options: ["Tarbiya", "Ta'lim", "Ijtimoiy muhit", "Ma'lumot"],
    correctAnswer: "Tarbiya"
  },
  {
    question: "Umumiy o'rta va o'rta maxsus ta'lim bosqichi hamda oliy ta'lim bosqichlarining oralig'ida qanday nomdagi ta'lim turini olish mumkin?",
    options: ["Boshlang'ich ta'lim.", "Maktabgacha ta'lim.", "Professional ta'lim.", "Oliy ta'limdan keyingi ta'lim."],
    correctAnswer: "Professional ta'lim."
  },
  {
    question: "Jismoniy va aqliy sensor yoki ruhiy nuqsonlari bo'lgan, shuningdek uzoq vaqt davolanishda bo'lgan bolalar ta'lim tashkilotlarida qanday shaklda ta'lim olish huquqiga ega?",
    options: ["Eksternat.", "Jamoaviy.", "Masofaviy.", "Inklyuziv."],
    correctAnswer: "Inklyuziv."
  },
  {
    question: "Uzluksiz ta'lim turlari necha bosqichni o'z ichiga oladi?",
    options: ["9", "8", "7", "6"],
    correctAnswer: "8"
  },
  {
    question: "Ta'lim tizimidagi har bir o'quv fanining mazmuni va o'tilish tartibi, o'quvchilar tomonidan o'zlashtirilishi lozim bo'lgan bilim hamda ko'nikmalar hajmini belgilab beradigan rasmiy hujjat qaysi?",
    options: ["Mualliflik o'quv dasturlari.", "Dastur.", "O'quv dasturi.", "Darslik."],
    correctAnswer: "O'quv dasturi."
  },
  {
    question: "STEAM dasturining mazmuni qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Matematika, musiqa, muhandislik, san'at, texnologiya fanlari uyg'unligi.", "Matematika, musiqa, tabiiy fanlar, muhandislik fanlari uyg'unligi.", "Matematika, musiqa, tabiiy fanlar, muhandislik, san'at fanlari uyg'unligi.", "Matematika, tabiiy fanlar, muhandislik, san'at, texnologiya fanlari uyg'unligi."],
    correctAnswer: "Matematika, tabiiy fanlar, muhandislik, san'at, texnologiya fanlari uyg'unligi."
  },
  {
    question: "Ta'lim turlarini ketma-ketlik bilan qo'yib chiqing:",
    options: ["1, 4, 5, 7, 3, 2", "1, 2, 3, 5, 4, 7, 6", "6, 2, 3, 5, 7, 4", "6, 3, 1, 7, 4, 5, 2"],
    correctAnswer: "1, 2, 3, 5, 4, 7, 6"
  },
  {
    question: "Yetim bolalarni va ota-onasining yoki boshqa qonuniy vakillarining qaramog'idan mahrum bo'lgan bolalarni o'qitish va ularning to'liq ta'minoti kimning zimmasida bo'ladi?",
    options: ["Homiylik hisobidan.", "O'zbekiston Respublikasi Davlat byudjeti mablag'lari hisobidan.", "Tashkilot hisobidan.", "Ota-onalar tomonidan."],
    correctAnswer: "O'zbekiston Respublikasi Davlat byudjeti mablag'lari hisobidan."
  },
  {
    question: "2020-yil 23-sentabrda qabul qilingan O'zbekiston Respublikasi ta'lim to'g'risidagi qonuni necha bob va necha moddadan iborat?",
    options: ["11 bob, 74 modda.", "11 bob, 75 modda.", "8 bob, 75 modda.", "5 bob, 34 modda."],
    correctAnswer: "11 bob, 75 modda."
  },
  {
    question: "O'quv yilining davomiyligi 1-sinflar uchun necha hafta?",
    options: ["35 hafta.", "36 hafta.", "33 hafta.", "37 hafta."],
    correctAnswer: "36 hafta."
  },
  {
    question: "Ta'lim olish shaklidan qat'iy nazar bitiruvchilar erishishlari kerak bo'lgan ta'lim darajasini belgilovchi asosiy hujjat bu...",
    options: ["PIRLS", "PISA", "STEAM", "DTS"],
    correctAnswer: "DTS"
  },
  {
    question: "Ta'lim to'g'risidagi Qonunga necha marotaba o'zgartirish kiritilgan?",
    options: ["4 marotaba.", "1 marotaba.", "3 marotaba.", "2 marotaba."],
    correctAnswer: "2 marotaba."
  },
  {
    question: "Qachon \"Professional ta'lim tizimini yanada takomillashtirish to'g'risida\"gi farmon qabul qilindi?",
    options: ["2021 y. 23 oktyabr.", "2019-yil, 6-sentyabr.", "2020 y. 23 sentyabr.", "1997 y. 29 avgust."],
    correctAnswer: "2019-yil, 6-sentyabr."
  },
  {
    question: "Tayanch kompetensiyalar necha turga bo'linishini aniqlang:",
    options: ["5 ta.", "7 ta.", "4 ta.", "6 ta."],
    correctAnswer: "6 ta."
  },
  {
    question: "Umumiy o'rta ta'lim nechanchi sinflarni o'z ichiga oladi?",
    options: ["5-9 sinflarni.", "1-11-sinflarni.", "1-8 sinflarni.", "1-9 sinflarni."],
    correctAnswer: "1-11-sinflarni."
  },
  {
    question: "Standart so'zining ma'nosi nima?",
    options: ["Muhr, tamg'a.", "Tafovut, andoza.", "Me'yor, namuna, andoza.", "Shakl, me'yor."],
    correctAnswer: "Me'yor, namuna, andoza."
  },
  {
    question: "O'quvchilar haftaning 3 kunida kollejda nazariy bilim oladi, 3 kunida korxonaning o'zida, biriktirilgan usta, master rahbarligida ish o'rnida amaliyot o'taydi. Bu qaysi davlatda?",
    options: ["Fransiyada.", "Koreyada.", "Germaniyada.", "Amerikada."],
    correctAnswer: "Germaniyada."
  },
  {
    question: "Ta'lim to'g'risidagi qonunda \"Dual ta'lim\" nechanchi moddada ko'rsatilgan?",
    options: ["17-modda.", "65-modda.", "21-modda.", "29-modda."],
    correctAnswer: "17-modda."
  },
  {
    question: "Qonun hujjatlari asosida maktabdagi ta'lim jarayonini tartibga soluvchi hujjat nima deb ataladi?",
    options: ["O'qituvchilarga oid ko'rsatmalar.", "Ta'lim dasturi.", "O'quv rejasi.", "Maktabning ichki tartib-qoidalari."],
    correctAnswer: "O'quv rejasi."
  },
  {
    question: "O'quv dasturi va o'quv rejalari orasidagi farq nima?",
    options: ["O'quv dasturi faqat darsliklardan iborat.", "O'quv dasturi faqat maktab ichidagi faoliyatni o'z ichiga oladi.", "O'quv dasturi uzoq muddatli maqsadlarni ko'zlaydi, o'quv reja esa qisqa muddatli.", "O'quv reja faqat ma'ruzalar va darslar bilan cheklangan."],
    correctAnswer: "O'quv dasturi uzoq muddatli maqsadlarni ko'zlaydi, o'quv reja esa qisqa muddatli."
  },
  {
    question: "O'quv dasturini ishlab chiqishda nimalar hisobga olinadi?",
    options: ["Faqat maktabning byudjeti.", "O'quvchilarning ta'lim olishga bo'lgan qiziqishlari va ehtiyojlari.", "Faqat o'qituvchining ehtiyojlari.", "Darslarning vaqt jadvali."],
    correctAnswer: "O'quvchilarning ta'lim olishga bo'lgan qiziqishlari va ehtiyojlari."
  },
  {
    question: "Noan'anaviy darsning asosiy maqsadi nima?",
    options: ["O'quvchilarni an'anaviy metodlar bilan ta'lim berish.", "O'quvchilarga o'z fikrlarini erkin ifoda etish imkonini yaratish.", "O'quvchilarga faqat nazariy bilimlarni yetkazish.", "O'qituvchining faqat ma'ruzalari orqali bilim berish."],
    correctAnswer: "O'quvchilarga o'z fikrlarini erkin ifoda etish imkonini yaratish."
  },
  {
    question: "Noan'anaviy darsning afzalliklaridan biri nima?",
    options: ["O'quvchilarning ijodiy va tanqidiy fikrlash qobiliyatlarini rivojlantirish.", "Darsning an'anaviy shakllarini saqlash.", "O'qituvchi o'z bilimini o'quvchilarga faqat nazariy tarzda etkazadi.", "O'quvchilarni passiv holatda qoldirish."],
    correctAnswer: "O'quvchilarning ijodiy va tanqidiy fikrlash qobiliyatlarini rivojlantirish."
  },
  {
    question: "Noan'anaviy darslarda o'qituvchining roli qanday o'zgaradi?",
    options: ["O'qituvchi o'quvchilarga yo'l-yo'riq ko'rsatib, muammolarni yechishda yordam beradi.", "O'qituvchi sinfda faqat nazorat qiladi.", "O'qituvchi faqat ma'lumot beradi, boshqa ishtirok etmaydi.", "O'qituvchi barcha darslarni faqat nazariy bilimlarga asoslaydi."],
    correctAnswer: "O'qituvchi o'quvchilarga yo'l-yo'riq ko'rsatib, muammolarni yechishda yordam beradi."
  },
  {
    question: "O'qituvchining pedagogik faoliyati turlari — bu...",
    options: ["Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik.", "Shakllantiruvchi va rivojlantiruvchi.", "O'quvchi faoliyatini tashkil etish va boshqarish.", "Ta'lim beruvchi, tarbiyalovchi, rivojlantiruvchi."],
    correctAnswer: "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik."
  },
  {
    question: "Darslarga qo'yiladigan maqsadlar qaysilar?",
    options: ["Ta'limiy, tarbiyaviy, rivojlantiruvchi.", "Ijtimoiy-g'oyaviy, aksiologik, didaktik.", "Tarbiyaviy, didaktik, ijtimoiy-g'oyaviy.", "Tarbiyaviy, didaktik, muloqot."],
    correctAnswer: "Ta'limiy, tarbiyaviy, rivojlantiruvchi."
  },
  {
    question: "Talabalarga muayyan mavzular bo'yicha o'z bilimlari darajasini baholay olish imkonini beradigan grafik organayzer qanday nomlanadi?",
    options: ["Suhbat.", "FSMU.", "\"Bilaman. Bilishni xohlayman. Bilib oldim\" (BBB).", "Zina."],
    correctAnswer: "\"Bilaman. Bilishni xohlayman. Bilib oldim\" (BBB)."
  },
  {
    question: "Inglizcha so'zdan olingan bo'lib, berilgan savollarga qisqa, aniq va lo'nda javob qaytarilishini taqozo etadigan metod qanday nomlanadi?",
    options: ["Nilufar guli.", "Loyiha.", "Intervyu.", "\"Blits-so'rov\"."],
    correctAnswer: "\"Blits-so'rov\"."
  },
  {
    question: "Fransuzcha so'zidan olingan bo'lib, mashg'ulotlarda biror-bir mavzu yuzasidan talabalar o'rtasida o'zaro bahs uyushtirish, ularning o'zaro fikr almashishlarini ta'minlashga xizmat qiladigan texnologiya (interfaol metod) qanday nomlanadi?",
    options: ["So'rov.", "Aqliy hujum.", "\"Debat\".", "Ajurli arra."],
    correctAnswer: "\"Debat\"."
  },
  {
    question: "Muammoning asosiy to'rt jihatini yoritishga xizmat qilib, unga ko'ra talabalar mavzuning mazmuniga mos muammolarni atroflicha o'rganish orqali mohiyatini yoritish, ularni keltirib chiqaruvchi omillarni izlash, hal qilish imkoniyatlariga ega bo'ladigan strategiyasi qanday nomlanadi?",
    options: ["Muammo.", "Nima uchun.", "\"SWOT-tahlil\".", "Muloqot."],
    correctAnswer: "\"SWOT-tahlil\"."
  },
  {
    question: "Didaktik qobiliyatga to'g'ri ta'rifni toping:",
    options: ["Barcha fanlar yuzasidan muayyan bilimga ega bo'lishlik.", "Oson yo'l bilan murakkab bilimlarni o'quvchilarga tushuntira olish.", "Sinf guruhini uyushtirish va boshqarish iste'dodi.", "Qisqa daqiqalarda auditoriya (sinf) holatini idrok qila olish fazilati."],
    correctAnswer: "Oson yo'l bilan murakkab bilimlarni o'quvchilarga tushuntira olish."
  },
  {
    question: "Fanning mohiyatini ochib beruvchi eng muhim asosiy tushuncha bu...",
    options: ["Tarbiya.", "Ta'lim.", "Rivojlanish.", "Kategoriya."],
    correctAnswer: "Kategoriya."
  },
  {
    question: "Maktabga tayyorlanayotgan bola qanday ijtimoiy ko'nikmalarni rivojlantirishi kerak?",
    options: ["Faqat yolg'iz ishlash.", "Boshqalar bilan muloqot qilish, jamoada ishlash.", "Faqat o'z-o'zini boshqarish.", "Faqat shaxsiy faoliyatni rivojlantirish."],
    correctAnswer: "Boshqalar bilan muloqot qilish, jamoada ishlash."
  },
  {
    question: "Maktabga tayyorlashda bola qanday bilimlarni egallashi kerak?",
    options: ["O'qish, yozish va hisoblash ko'nikmalari.", "Faqat o'qish va yozish.", "Faqat tabiiy fanlar.", "Faqat matematikani o'rganish."],
    correctAnswer: "O'qish, yozish va hisoblash ko'nikmalari."
  },
  {
    question: "Ta'limning demokratlashuvini qanday izohlaysiz?",
    options: ["Ta'limda erkinlik.", "Ta'lim-tarbiya uslublarining erkin tanlanishi.", "Ta'lim-tarbiya uslublarini tanlashda o'quv yurtlarining mustaqilligi.", "Ta'limda shaxsga nisbatan hurmat."],
    correctAnswer: "Ta'lim-tarbiya uslublarini tanlashda o'quv yurtlarining mustaqilligi."
  },
  {
    question: "Yan Amos Komenskiyning qaysi asarida bolani dastlab oilada tarbiyalash va rivojlantirish g'oyalari bugungi kunda ham o'z kuchini yo'qotmagan?",
    options: ["\"Onalar maktabi\".", "\"Ona tili\".", "\"Bolalar dunyosi\".", "\"Buyuk didaktika\"."],
    correctAnswer: "\"Onalar maktabi\"."
  },
  {
    question: "O'zbekiston 2024-yilga qadar qanday xalqaro baholash dasturlarida ishtirok etdi?",
    options: ["ICILS, TIMSS, EGRA, TALIS.", "PISA, STEAM, PIRLS, ICILS.", "PISA, PIRLS, TIMSS, TALIS.", "STEAM, STEM, PISA, PIRLS."],
    correctAnswer: "PISA, PIRLS, TIMSS, TALIS."
  },
  {
    question: "4-sinf o'quvchilarini o'qish savodxonligini baholaydigan xalqaro baholash dasturi qaysi?",
    options: ["TIMSS.", "PISA.", "EGMA.", "PIRLS."],
    correctAnswer: "PIRLS."
  },
  {
    question: "4-8-sinf o'quvchilarini matematika va tabiiy fanlardan bilim darajasini baholaydigan xalqaro baholash dasturi qaysi?",
    options: ["EGMA.", "PISA.", "PIRLS.", "TIMSS."],
    correctAnswer: "TIMSS."
  },
  {
    question: "15 yoshli o'quvchilarni matematika, o'qish savodxonligi hamda tabiiy fanlar bo'yicha ko'nikmalarini baholaydigan xalqaro baholash dasturi qaysi?",
    options: ["EGMA.", "TIMSS.", "PISA.", "PIRLS."],
    correctAnswer: "PISA."
  },
  {
    question: "2022-yilda o'quvchilarni kreativ fikrlashlarini baholashga qaratilgan xalqaro baholash dasturi qaysi?",
    options: ["PIRLS.", "TALIS.", "TIMSS.", "PISA."],
    correctAnswer: "PISA."
  },
  {
    question: "PISA tadqiqotida 2022-yilda qaysi soha asosiy soha sifatida belgilandi?",
    options: ["Tabiiy fanlar.", "Matematika.", "Kreativ fikrlash.", "O'qish savodxonligi."],
    correctAnswer: "Kreativ fikrlash."
  },
  {
    question: "O'zbekiston 2022-yilda o'tkazilgan PISA xalqaro baholash dasturining matematika sohasi bo'yicha nechanchi o'rinni egallagan?",
    options: ["80", "85", "30", "72"],
    correctAnswer: "80"
  },
  {
    question: "O'zbekiston 2022-yilda o'tkazilgan PISA xalqaro baholash dasturining o'qish savodxonligi sohasi bo'yicha nechanchi o'rinni egallagan?",
    options: ["85", "30", "80", "72"],
    correctAnswer: "80"
  },
  {
    question: "O'zbekiston 2022-yilda o'tkazilgan PISA xalqaro baholash dasturining tabiiy-ilmiy savodxonligi sohasi bo'yicha nechanchi o'rinni egallagan?",
    options: ["80", "72", "30", "85"],
    correctAnswer: "72"
  },
  {
    question: "O'zbekiston 2022-yilda o'tkazilgan PISA xalqaro baholash dasturining matematika sohasi bo'yicha necha ball to'plagan?",
    options: ["336", "600", "575", "364"],
    correctAnswer: "364"
  },
  {
    question: "\"Bolalar bilan muomalada bosiq, jiddiy bo'lish\" ushbu fikr muallifi kim?",
    options: ["A.Temur", "Abu Ali Ibn Sino", "A.Avloniy", "Al-Xorazmiy"],
    correctAnswer: "A.Temur"
  },
  {
    question: "\"Yomon o'qituvchi haqiqatni aytib berib qo'ya qoladi, yaxshi o'qituvchi esa haqiqatni topishiga o'rgatadi\" ushbu fikrni aytgan g'arblik pedagog kim?",
    options: ["A.Disterverg", "F.Fexner", "L.Xey", "O.Kont"],
    correctAnswer: "A.Disterverg"
  },
  {
    question: "\"Jamiyatdan, jamoadan ajralib kamol topgan bola baxtsiz bo'lib qoladir\". Bu qaysi allomaning pedagogik qarashi?",
    options: ["A.Avloniy", "Abu Ali Ibn Sino", "A.Temur", "Al-Xorazmiy"],
    correctAnswer: "A.Avloniy"
  },
  {
    question: "Kasb so'zi qaysi so'zdan olingan bo'lib, rasmiy ko'rsatilgan mashg'ulot, ixtisoslik, shaxsning mehnat faoliyati degan ma'nolarni anglatadi?",
    options: ["Grekcha.", "Forscha.", "Yunoncha.", "Lotincha."],
    correctAnswer: "Lotincha."
  },
  {
    question: "Kishining doimiy mashg'ulot turi, muayyan ish turini malakali bajarishga imkon beradigan bilim, mahorat, tajribani talab etadi — bu nima?",
    options: ["Kasb.", "Malaka.", "Bilim.", "Ish faoliyati."],
    correctAnswer: "Kasb."
  },
  {
    question: "Imidj so'zining ma'nosi nima?",
    options: ["Forscha: insonning ichki qiyofasi.", "Yunoncha: tashqi ko'rinish, qiyofa.", "Gregcha: jozibali, latofatli.", "Lotincha: obraz, xarakter, qiyofa."],
    correctAnswer: "Lotincha: obraz, xarakter, qiyofa."
  },
  {
    question: "\"STEAM\" dasturida \"S\" qisqartmasida qaysi fan mazmuni aks etgan?",
    options: ["Matematika.", "San'at.", "Tabiiy fanlar.", "Texnologiya."],
    correctAnswer: "Tabiiy fanlar."
  },
  {
    question: "\"STEAM\" dasturida \"T\" qisqartmasida qaysi fan mazmuni aks etgan?",
    options: ["San'at.", "Matematika.", "Tabiiy fanlar.", "Texnologiya."],
    correctAnswer: "Texnologiya."
  },
  {
    question: "\"STEAM\" dasturida \"A\" qisqartmasida qaysi fan mazmuni aks etgan?",
    options: ["San'at.", "Matematika.", "Texnologiya.", "Tabiiy fanlar."],
    correctAnswer: "San'at."
  },
  {
    question: "\"STEAM\" dasturida \"M\" qisqartmasida qaysi fan mazmuni aks etgan?",
    options: ["Matematika.", "Muhandislik.", "San'at.", "Texnologiya."],
    correctAnswer: "Matematika."
  },
  {
    question: "\"STEAM\" dasturida \"E\" qisqartmasida qaysi fan mazmuni aks etgan?",
    options: ["Muhandislik.", "Etimologiya.", "Mehnat.", "San'at."],
    correctAnswer: "Muhandislik."
  },
  {
    question: "Finlandiya maktablarida boshlang'ich ta'lim necha yil davom etadi?",
    options: ["5 yil.", "6 yil.", "7 yil.", "4 yil."],
    correctAnswer: "6 yil."
  },
  {
    question: "Boshlang'ich sinflarda o'rganiladigan asosiy miqdorlarni belgilang:",
    options: ["Uzunlik, massa, narx.", "Uzunlik, massa, narx, baho, masofa, vaqt, tezlik.", "Baho, narx, vaqt.", "Masofa, narx, vaqt, tezlik."],
    correctAnswer: "Uzunlik, massa, narx, baho, masofa, vaqt, tezlik."
  },
  {
    question: "Nutq texnikasi nima?",
    options: ["Nafas olish, ovoz, diksiya.", "Intonatsiya, ohang.", "Nafas olish, qayta hikoyalash.", "Pauza, urg'u, ovoz."],
    correctAnswer: "Nafas olish, ovoz, diksiya."
  },
  {
    question: "\"Takrorlash bilim onasidir\" ushbu ibora qaysi pedagog olimning fikriga mansub?",
    options: ["Hamza.", "Ushinskiy.", "Shakuriy.", "Komenskiy."],
    correctAnswer: "Ushinskiy."
  },
  {
    question: "Zardushtiylik axloqining asosi bu…",
    options: ["Ezgu fikr, ezgu kalom va ezgu amal.", "Falsafa, ilm.", "Ezgu fikr, kalom.", "Falsafa, kalom, fikr."],
    correctAnswer: "Ezgu fikr, ezgu kalom va ezgu amal."
  },
  {
    question: "Ilk bolalalik qaysi yosh davrlarini o'z ichiga oladi?",
    options: ["3 yoshdan 4 yoshgacha.", "1 yoshdan 3 yoshgacha.", "2 yoshdan 5 yoshgacha.", "1 yoshdan 2 yoshgacha."],
    correctAnswer: "1 yoshdan 3 yoshgacha."
  },
  {
    question: "Metod bu……..",
    options: ["Pedagogik texnologiyalarning tarkibiy qismi.", "Bu yunoncha \"yo'l, yo'riq, usul orqali maqsadga erishish\" demakdir.", "Yunoncha axborotni uzatish.", "Lotincha so'zdan olingan bo'lib \"axborot uzatish\" degan ma'noni bildiradi."],
    correctAnswer: "Bu yunoncha \"yo'l, yo'riq, usul orqali maqsadga erishish\" demakdir."
  },
  {
    question: "Yaponiyada bolalar boshlang'ich sinfga necha yoshdan boradilar?",
    options: ["5 yoshdan.", "6 yoshdan.", "7 yoshdan.", "8 yoshdan."],
    correctAnswer: "6 yoshdan."
  },
  {
    question: "Qadimgi Yunonistonda bolalarga bilim berish kimga yuklatilgan?",
    options: ["Choparlarga.", "Faylasuflarga.", "Vazirlarga.", "Pedagoglarga."],
    correctAnswer: "Faylasuflarga."
  },
  {
    question: "\"Pedagog\" so'zining ma'nosi nima?",
    options: ["Bola yetaklovchi.", "O'rgatuvchi.", "Bilim beruvchi.", "Hunar o'rgatuvchi."],
    correctAnswer: "Bola yetaklovchi."
  },
  {
    question: "Yan Amos Komenskiy an'anaviy ta'limni nechanchi asrda tashkil etgan?",
    options: ["13-asrda.", "17-asrda.", "15-asrda.", "16-asrda."],
    correctAnswer: "17-asrda."
  },
  {
    question: "Qaysi davlat bog'chalarida bolalarni 8 kishilik xonalarga bo'lib ta'lim beradilar?",
    options: ["Xitoy.", "Yaponiya.", "Koreya.", "Germaniya."],
    correctAnswer: "Yaponiya."
  },
  {
    question: "STEAM texnologiyasi qachondan shakllana boshlagan?",
    options: ["1990 yildan.", "1998 yildan.", "2000 yildan.", "2005 yildan."],
    correctAnswer: "2000 yildan."
  },
  {
    question: "STEAM dasturi qaysi fanlarni o'z ichiga olgan?",
    options: ["Geografiya, musiqa.", "Tabiiy fanlar, matematika, san'at, texnologiya, muhandislik.", "Tabiat, matematika, san'at, musiqa, chizmachilik.", "Muhandislik, ona tili."],
    correctAnswer: "Tabiiy fanlar, matematika, san'at, texnologiya, muhandislik."
  },
  {
    question: "STEAM dasturi bo'yicha o'qitish bolada ko'proq qaysi qobiliyatni oshishiga yordam beradi?",
    options: ["Chiqishuvchanlik.", "Qiziquvchanlik.", "STEAM dasturi bolalar uchun emas.", "Ijodkorligi."],
    correctAnswer: "Ijodkorligi."
  },
  {
    question: "Qanday xalqaro baholash dasturlari mavjud?",
    options: ["IVIC.", "STIM, DTS.", "PISA, PIRLS, STEAM.", "TIMSS, TALIS, PIRLS, PISA."],
    correctAnswer: "TIMSS, TALIS, PIRLS, PISA."
  },
  {
    question: "PISA xalqaro baholash tizimi qachon birinchi marta qo'llanilgan?",
    options: ["2000-yilda.", "2005-yilda.", "1997-yilda.", "1995-yilda."],
    correctAnswer: "2000-yilda."
  },
  {
    question: "Nima uchun maktabga bolalarni 7 yoshdan olinadi?",
    options: ["O'ng miya yarimsharlarida bilish tuyg'ulari ochiladi.", "7 yoshda chap miya yarimsharlarida bilish tuyg'ulari ochiladi.", "Aqliy rivojlanish paydo bo'ladi.", "O'qish ishtiyoqi shu yoshda shakllanadi."],
    correctAnswer: "7 yoshda chap miya yarimsharlarida bilish tuyg'ulari ochiladi."
  },
  {
    question: "Texnologiya so'zining ma'nosi:",
    options: ["Ijtimoiy munosabat.", "Raqs, harakat.", "Harakat qilmoq.", "Mahorat, san'at."],
    correctAnswer: "Mahorat, san'at."
  },
  {
    question: "\"Pedagogika bola tarbiyasining fani demakdir\" ta'rif kim tomonidan berilgan?",
    options: ["Abdulla Avloniy.", "H.H.Niyoziy.", "Ishoqxon Ibrat.", "Abduqodir Shakuriy."],
    correctAnswer: "Abdulla Avloniy."
  },
  {
    question: "DTS qanday ta'lim turlari uchun joriy etiladi?",
    options: ["Umumiy o'rta, maktabdan tashqari ta'lim, oliy ta'lim.", "Ta'limning barcha bosqichlari uchun.", "Umumiy o'rta ta'lim, oliy ta'lim.", "Maktabgacha, umumiy o'rta, o'rta maxsus."],
    correctAnswer: "Ta'limning barcha bosqichlari uchun."
  },
  {
    question: "\"Ta'lim to'g'risidagi qonun\" 2-chi bor qachon qabul qilingan?",
    options: ["1997 yil 29 iyul.", "1993 yil 11 avgust.", "1997 yil 29 avgust.", "1992 yil 12 avgust."],
    correctAnswer: "1997 yil 29 avgust."
  },
  {
    question: "Bolalarni majburiy boshlang'ich ta'limga tayyorlash necha yoshdan boshlanadi?",
    options: ["6-8 yoshdan.", "6-10 yoshdan.", "6-7 yoshdan.", "7-8 yoshdan."],
    correctAnswer: "6-7 yoshdan."
  },
  {
    question: "Ishlab chiqarishdan ajralgan holda ta'lim olish ta'limning qanday shakli hisoblanadi?",
    options: ["Kechki ta'lim.", "Kunduzgi ta'lim.", "Sirtqi ta'lim.", "Dual ta'lim."],
    correctAnswer: "Kunduzgi ta'lim."
  },
  {
    question: "Davlat ta'lim standartlarini bajarish O'zbekiston Respublikasining barcha ta'lim muassasalari uchun …… dir.",
    options: ["Majburiy.", "Erkin.", "Ochiq.", "Ixtiyoriy."],
    correctAnswer: "Majburiy."
  },
  {
    question: "Maktabda dars jarayoni asosan necha daqiqa bo'ladi?",
    options: ["40 daqiqa.", "45 daqiqa.", "80 daqiqa.", "90 daqiqa."],
    correctAnswer: "45 daqiqa."
  },
  {
    question: "Sinf-dars tizimi asoschisi…..?",
    options: ["K.D.Ushinskiy.", "A.S.Makarenko.", "Yan Amos Komenskiy.", "A.Avloniy."],
    correctAnswer: "Yan Amos Komenskiy."
  },
  {
    question: "Nutq uslublari nechta?",
    options: ["5 ta.", "6 ta.", "4 ta.", "7 ta."],
    correctAnswer: "5 ta."
  },
  {
    question: "Nutq nech xil bo'ladi?",
    options: ["2 xil.", "4 xil.", "5 xil.", "3 xil."],
    correctAnswer: "3 xil."
  },
  {
    question: "Pedagogik muloqot uslublari to'g'ri keltirilgan qatorni toping:",
    options: ["Demokratik, intellektual.", "Avtoritar, liberal, demokratik.", "Avtoritar, demokratik.", "Liberal, demokratik, trening."],
    correctAnswer: "Avtoritar, liberal, demokratik."
  },
  {
    question: "Noverbal nutq turlari to'g'ri keltirilgan qatorni toping:",
    options: ["Mimika, fantomimika, og'zaki nutq.", "Og'zaki va yozma nutq.", "Mimika, pantomimika, nutq, signifikatsiya, daktilogik nutq, Morze alifbosi.", "So'z, mimika, aks-sado, axborot."],
    correctAnswer: "Mimika, pantomimika, nutq, signifikatsiya, daktilogik nutq, Morze alifbosi."
  },
  {
    question: "An'anaviy yondashuvning asosiy xususiyati nimada?",
    options: ["Gapirib berish, tushuntirish, talaba esa bu axborotni xotirada saqlaydi.", "Ijodiy yondashuv.", "Nazorat turlari (joriy, oraliq, yakuniy).", "O'zaro ta'sirlar."],
    correctAnswer: "Gapirib berish, tushuntirish, talaba esa bu axborotni xotirada saqlaydi."
  },
  {
    question: "«Tizim» so'zining ma'nosi ko'rsatilgan qatorni belgilang:",
    options: ["Gaplarni yozib, saqlab olish.", "Qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa.", "O'quvchilarning bilish faoliyatini rivojlantirish.", "Ijodiy yondashuv."],
    correctAnswer: "Qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa."
  },
  {
    question: "Pedagogik tizim nimalardan iborat?",
    options: ["Gaplarni yozib, saqlab olish, ijodiy yondashuv, bilim berishdan.", "Pedagogik jarayonning ob'ektlari va sub'ektlari, shakl-usullari, ular o'rtasidagi munosabatlar, o'zaro ta'sirlar hamda ularni boshqarishdan.", "Tanqidiy-ijodiy yondashuv, o'zaro ta'sirlar.", "O'quvchilarning bilish faoliyatini rivojlantirish."],
    correctAnswer: "Pedagogik jarayonning ob'ektlari va sub'ektlari, shakl-usullari, ular o'rtasidagi munosabatlar, o'zaro ta'sirlar hamda ularni boshqarishdan."
  },
  {
    question: "Empatiya deganda nimani tushunasiz?",
    options: ["Xotira obrazlarini solishtirish.", "Boshqa odamlarning psixik holatlarini tushunish va ularga hamdardlik qilish.", "Kishining ta'lim bera olish qobiliyatidir.", "O'qituvchining o'z ishini rejalashtira olishidir."],
    correctAnswer: "Boshqa odamlarning psixik holatlarini tushunish va ularga hamdardlik qilish."
  },
  {
    question: "Pedagog uchun eng zarur nutq madaniyatini belgilang:",
    options: ["Tinglay olish, qo'llab-quvvatlash.", "Keng fikrlilik, tinglovchini zeriktirmaydigan muloqot o'rnatish.", "Tanqidiy nuqtai nazar, o'z fikrini himoya qilish.", "Nutqning grammatik to'g'riligi, uning leksik boyligi, aniq va ravshan ifodalanganligi."],
    correctAnswer: "Nutqning grammatik to'g'riligi, uning leksik boyligi, aniq va ravshan ifodalanganligi."
  },
  {
    question: "O'quvchilarning kasbiy mahoratini takomillashtirish to'g'risida fikr bildirgan Yevropa olimlari qaysi qatorda to'g'ri ko'rsatilgan?",
    options: ["Y.A.Komenskiy, Demosfen.", "Y.A.Komenskiy, Lokk, Pestalotsi, Disterverg, Ushinskiy.", "Lokk, Ushinskiy.", "Platon, Sitseron."],
    correctAnswer: "Y.A.Komenskiy, Lokk, Pestalotsi, Disterverg, Ushinskiy."
  },
  {
    question: "Didaktika — bu:",
    options: ["Ta'lim nazariyasi.", "Ta'lim qonuniyatlari, prinsiplari va mohiyatini tadqiq etadi.", "O'quv tillarini tashkil etishning formalarini takomillashtirish.", "Ilmiy fan bo'lib, ta'limning nazariy asoslarini o'rgatadi."],
    correctAnswer: "Ilmiy fan bo'lib, ta'limning nazariy asoslarini o'rgatadi."
  },
  {
    question: "«Buyuk didaktika» asari qaysi pedagog olim tomonidan yozilgan?",
    options: ["Pestalotsi.", "Yan Amos Komenskiy.", "Abu Rayhon Beruniy.", "Abu Ali Ibn Sino."],
    correctAnswer: "Yan Amos Komenskiy."
  },
  {
    question: "Pedagogikada jazolash usuli qanday amalga oshiriladi?",
    options: ["Tanbeh berib.", "Haqorat qilib.", "Kaltaklab, urib, haqorat qilib.", "Tushuntirish, tanbeh berish, ogohlantirish, qattiq ogohlantirish, uyaltirish."],
    correctAnswer: "Tushuntirish, tanbeh berish, ogohlantirish, qattiq ogohlantirish, uyaltirish."
  },
  {
    question: "O'qituvchilarning shaxsiy va kasbiy fazilatlarini belgilovchi xususiyat bo'lib, o'qituvchilarning ta'lim-tarbiyaviy faoliyatida yuqori darajaga erishishini, kasbiy mahoratini doimiy takomillashtirib borish imkoniyatini ta'minlovchi jarayon bu...",
    options: ["Pedagogik usul.", "Pedagogik mahorat.", "Pedagogik odob.", "Pedagogik qobiliyat."],
    correctAnswer: "Pedagogik mahorat."
  },
  {
    question: "\"…- bu o'z oldiga ta'lim shakllarini optimallashtirish vazifasini qo'yuvchi, butun o'qitish va bilimlarni o'zlashtirish jarayonini texnik resurslar va odamlarning o'zaro munosabatlarini hisobga olgan holda yaratish, qo'llash va aniqlashning tizimli metodidir.\" Nuqtalar o'rniga kerakli so'z birikmasini qo'ying:",
    options: ["Pedagogik texnologiya.", "Pedagogik aloqadorlik.", "Pedagogik etika.", "Pedagogik estetika."],
    correctAnswer: "Pedagogik texnologiya."
  },
  {
    question: "\"…-talaba shaxsining ijobiy sifatlarini, ayrim sohalardagi bilimlarini, o'quv motivatsiyasini, bilish ehtiyojlarini va ijodiy qobiliyatlarini rivojlantirish texnologiyalari\". Nuqtalar o'rnini to'ldiring:",
    options: ["Didaktik ta'lim texnologiyalari.", "Maxsus ta'lim texnologiyalari.", "Rivojlantiruvchi ta'lim texnologiyalari.", "Inklyuziv ta'lim texnologiyalari."],
    correctAnswer: "Rivojlantiruvchi ta'lim texnologiyalari."
  },
  {
    question: "Pedagogik muloqot nima?",
    options: ["O'quv-tarbiya hamkorligi.", "O'zaro munosabatlar, ta'sirlar, ularning aloqalarini amalga oshirishdir.", "Jamoa guruhlarning hamkorligi, ularning shaxsga ta'siri.", "O'quv-tarbiya jarayoni davomida o'qituvchining o'quvchilar bilan kasbiy munosabati."],
    correctAnswer: "O'quv-tarbiya jarayoni davomida o'qituvchining o'quvchilar bilan kasbiy munosabati."
  },
  {
    question: "Davlat ta'lim standartlari nima?",
    options: ["O'quv yuklamlari hajmini aniqlashga xizmat qiladigan, shakl va metodlari to'g'risida mezonlar yig'indisi.", "Ta'lim jarayonining samarali tashkil etish yo'llari, shakl va metodlari to'g'risida ma'lumotlardan iborat yo'riqnoma.", "Umumiy o'rta, o'rta maxsus, kasb-hunar va oliy ta'lim mazmuniga hamda sifatiga qo'yiladigan talablarni belgilaydigan me'yoriy hujjat.", "O'quv jadvalining tarkibiy elementlarini aks ettiruvchi manba, shakl va metodlari to'g'risida."],
    correctAnswer: "Umumiy o'rta, o'rta maxsus, kasb-hunar va oliy ta'lim mazmuniga hamda sifatiga qo'yiladigan talablarni belgilaydigan me'yoriy hujjat."
  },
  {
    question: "Pedagogik muhit nima?",
    options: ["Shaxslararo munosabatning doirasi kabi omillarning bir-birini boyituvchi.", "Pedagogik maqsadlarga muvofiq ravishda maxsus tuzilgan shaxslararo munosabatlar tizimi.", "Inson shaxsini shakllantiruvchi tabiat, ijtimoiy munosabatlarning sistemasidir.", "Bir butun o'quv-jarayonni tashkil etishning asosiy shaklidir."],
    correctAnswer: "Pedagogik maqsadlarga muvofiq ravishda maxsus tuzilgan shaxslararo munosabatlar tizimi."
  },
  {
    question: "Darsda o'quvchilarning ehtiyojlari va qobiliyatlarini hisobga olish uchun qaysi metodlar qo'llaniladi?",
    options: ["Darsni faqat umumiy yondashuv asosida o'tkazish.", "Individual va differensiyalashgan yondashuvlar.", "Sinfda barchaga bir xil talablar qo'yish.", "Faqat o'quvchilarning xatolarini tahlil qilish."],
    correctAnswer: "Individual va differensiyalashgan yondashuvlar."
  },
  {
    question: "Noan'anaviy darsda eng ko'p qo'llaniladigan metodlardan biri nima?",
    options: ["Faoliyatga asoslangan darslar.", "Mavzuni o'qituvchining bir tomonlama ta'limi.", "Sinfda faqat yozma ishlar amalga oshirilishi.", "O'quvchilarning guruhlarga bo'linib ishlashi."],
    correctAnswer: "Faoliyatga asoslangan darslar."
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







