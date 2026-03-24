// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quimaerkerz_remaining_indices';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====

const questionsData = [
  {
    question: "Berilgan jarayonni amalga oshirish uchun qaysi elementar ishlarni va qaysi ketmaketlikda bajarish lozimIigini ko'rsatuvchi buyruq … deb ataladi.",
    options: ["ko’paytirish", "ayirma", "algoritm", "integral"],
    correctAnswer: "algoritm"
  },
  {
    question: "Tenglamani yeching: (4 · ? − 2) : 5 + 48 : 12 = 45 : 9 + 5",
    options: ["8", "4", "7", "5"],
    correctAnswer: "8"
  },
  {
    question: "Eng katta ikki xonali natural son bilan eng kichik ikki xonali natural sonning yig’indisini toping.",
    options: ["90", "99", "100", "109"],
    correctAnswer: "109"
  },
  {
    question: "Bolalar bog’chasiga sovg’a tayyorlash uchun 62 ta banan, 93 ta mandarin olib kelishdi. Har bir sovg’adagi banan va mandarinlar soni teng bo’lsa, bog’cha bolalari sonini toping.",
    options: ["31", "29", "30", "32"],
    correctAnswer: "31"
  },
  {
    question: "Uchburchakning tomonlari 5 см, 4см va 6 см bo’lsa, perimetrini toping.",
    options: ["17", "12", "15", "14"],
    correctAnswer: "15"
  },
  {
    question: "6 ta bir xil albom 480 so’m turadi. 12 ta shunday albom necha so’m turadi?",
    options: ["160", "960", "460", "80"],
    correctAnswer: "960"
  },
  {
    question: "Agar Umarning tomiri bir minutda 60 marta ursa, 4 minutda necha marta uradi?",
    options: ["220", "200", "240", "201"],
    correctAnswer: "240"
  },
  {
    question: "Hisoblang: 6∙8-72:8",
    options: ["30", "39", "38", "41"],
    correctAnswer: "39"
  },
  {
    question: "Tenglamani yeching: x + 573 = 681",
    options: ["200", "105", "108", "102"],
    correctAnswer: "108"
  },
  {
    question: "Poyezdda 112 ta yo’lovchi bor. Birinchi bekatda 18 kishi tushib, 4 kishi poyezdga chiqdi. Poyezdda nechta yo’lovchi bo’lgan?",
    options: ["101", "97", "100", "98"],
    correctAnswer: "98"
  },
  {
    question: "Akmal bilan Madina qiziqarli masalalar yechishdi.  Akmal: “Men Madina yechgan masalalarning yarmini va yana 10 ta masala yechdim”, deb javob berdi. Madina: “Men Akmal nechta masala yechgan bo’lsa, shuncha va yana 20 ta  Akmal nechta masala yechgan?",
    options: ["40", "60", "80", "100"],
    correctAnswer: "40"
  },
  {
    question: "Ikki ketma-ket kelgan sonning yig’indisi 123 ga teng. Ulardan keyingi sonni toping",
    options: ["62", "63", "60", "61"],
    correctAnswer: "62"
  },
  {
    question: "Chet eldan kelgan 70 ta turisrlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Agar har bir turist kamida 1 ta tilni biladi desak, faqat ingliz tilini biladigan turistlar nechta?",
    options: ["43", "40", "41", "42"],
    correctAnswer: "41"
  },
  {
    question: "Navoiyga “Afrosiyob” poyezdidda tez yetib olish mumkin. Arzon chipta 145 ming so’m turadi, qimmati esa undan 125 ming so’m ortiq. Ikkita qimmat chipta uchun qancha to’lash kerak bo’ladi?",
    options: ["580", "540", "290", "270"],
    correctAnswer: "540"
  },
  {
    question: "Eng katta uch xonali sondan eng kichik ikki xonali sonning ayirmasining toping.",
    options: ["89", "99", "989", "990"],
    correctAnswer: "989"
  },
  {
    question: "Bog’ga 170 tup oq olma,2 marta ortiq qizil olma,oq va qizil olmalar birgalikda nechta bo’lsa, ulardan 190 tup ortiq nok o’tqazildi. Necha tup nok o’tqazilgan?",
    options: ["740", "510", "700", "340"],
    correctAnswer: "700"
  },
  {
    question: "Otasi 52 yoshda, o’g’li 32 yoshda. Necha yil oldin otasi o’g’lidan 2 marta katta bo’lgan?",
    options: ["10", "12", "9", "18"],
    correctAnswer: "12"
  },
  {
    question: "Sxemadan foydalanib x ni toping (10408, 8293)",
    options: ["705", "700", "706", "710"],
    correctAnswer: "705"
  },
  {
    question: "Hisoblang: 2/5 + 1/10 =",
    options: ["1/ 2", "3/ 15", "3/ 50", "5 /20"],
    correctAnswer: "1/ 2"
  },
  {
    question: "O‘quvchilar tafakkurini charxlashga yonaltirilgan masala turi?",
    options: ["soda", "murakkab", "ikki va undan ortiq usulli masala", "mantiqiy"],
    correctAnswer: "mantiqiy"
  },
  {
    question: "To‘g‘rivoy va egrivoy doskada yozilgan son haqida fikr bildirmoqda. To‘g‘rivoy: “Bu ikki xonali sonning birlar xona raqami 3 dan kichik va 9 uning qo‘shnisi emas”. Egrivoy: “Bu toq son”. Shu sonni toping.",
    options: ["13", "14", "11", "12"],
    correctAnswer: "11"
  },
  {
    question: "Butunning bir yoki bir nechta teng ulushlaridan tuzilgan son ______ deyiladi?",
    options: ["Bir xil maxrajli son deyiladi", "O’nli son deyiladi", "Bir xil suratli son deyiladi", "Kasr deyiladi"],
    correctAnswer: "Kasr deyiladi"
  },
  {
    question: "Butunni uning tashkil etuvchi qismlariga ajratishga yo'naltirilgan fikrlash (tafakkur) usuli qanday ataladi.",
    options: ["sintez", "birlamchi", "analiz", "ikkilik"],
    correctAnswer: "analiz"
  },
  {
    question: "Matematika so'zining lug'aviy ma'nosi nima?",
    options: ["Lotincha \"mathem\" so'zidan olingan bo’lib, \"fikrlash\" demakdir", "Grekcha \"mathema\" so' zidan olingan bo’lib, \"tushunish\" demakdir", "Grekcha \"mathema\" so'zidan olingan bo’lib, \"qiziqish\" demakdir", "Grekcha \"mathema\" so'zidan olingan bo'lib ,\"fanlarni bilish\" demakdir"],
    correctAnswer: "Grekcha \"mathema\" so' zidan olingan bo’lib, \"tushunish\" demakdir"
  },
  {
    question: "Sinfda jami 36 nafar o‘quvchi bo‘lib, qiz bolalar o‘g‘il bolalarga qaraganda ikki marta ko‘p. Sinfda nechta o‘g‘il bola bor?",
    options: ["20", "12", "18", "24"],
    correctAnswer: "12"
  },
  {
    question: "Tashkilot printer va kompyuter sotib oldi. Kompyuter printerdan 5 barobar qimmat. Kompyuter va printer birgalikda 5mln 700ming so’m bo’lsa, printerning narxi qancha?",
    options: ["950 ming", "920 ming", "900 ming", "850 ming"],
    correctAnswer: "950 ming"
  },
  {
    question: "Binoning 5-qavatigach bo’lgan masofa, 2-qavatigacha bo’lgan masofadan necha marta uzun?",
    options: ["6", "5", "4", "3"],
    correctAnswer: "4"
  },
  {
    question: "Sfera deb nimaga aytiladi?",
    options: ["Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni", "Ikki tomonidan nuqta bilan chegaralangan to’g’ri chiziq bo’lagi", "Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni", "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl"],
    correctAnswer: "Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni"
  },
  {
    question: "To’g’ri to’rtburchakning tomonlari mos ravishda 12 va 5 ga teng bo’lsa uning perimetrini toping.",
    options: ["60", "17", "13", "34"],
    correctAnswer: "34"
  },
  {
    question: "Agar avtomobil har 100 km masofaga 8 litr benzin sarflasa, 350km masofaga borish uchun qancha benzin zarur bo’ladi?",
    options: ["28", "25", "27", "26"],
    correctAnswer: "28"
  },
  {
    question: "Qovunning massasi 6 kg, handalakning massasi undan 4 kg kam. Qovunning massasi handalaknikidan necha marta ortiq?",
    options: ["3", "5", "1", "2"],
    correctAnswer: "3"
  },
  {
    question: "Didaktika qadimgi yunoncha so’z bo’lib, … ma’noni anglatadi.",
    options: ["birlashtiruvchi", "ayiruvchi", "o’rgatuvchi, ta’lim beruvchi", "izlovchi"],
    correctAnswer: "o’rgatuvchi, ta’lim beruvchi"
  },
  {
    question: "Butunni uning tashkil etuvchi qismlariga ajratishga yo'naltirilgan fikrlash (tafakkur) usuli ... deb ataladi.",
    options: ["ikkilik", "sintez", "birlamchi", "analiz"],
    correctAnswer: "analiz"
  },
  {
    question: "Eng katta 4 xonali sonni eng katta 2 xonali songa bo’lsa nechchi hosil bo’ladi?",
    options: ["101", "99", "11", "100"],
    correctAnswer: "101"
  },
  {
    question: "Ali va Vali yoshlari yig’indisi 10 ga teng. Lekin 1 yildan so’ng Ali Validan 2 barobar katta bo’ladi. Vali xozirda necha yoshda?",
    options: ["3", "4", "7", "5"],
    correctAnswer: "3"
  },
  {
    question: "4 ta banan va 3 ta apelsin 7200 so’m, 4 ta apelsin va 5 ta limon 8800 so’m, 3 ta banan va 2 ta limon 5000 so’m turadi. 1 ta banan, 1 ta limon va 1 ta apelsin birgalikda qancha turadi?",
    options: ["7500", "8000", "4200", "3000"],
    correctAnswer: "3000"
  },
  {
    question: "Xususiy xulosalardan umumiy xulosaga olib boruvchi metod …. deyiladi.",
    options: ["reproduktiv", "induksiya", "algoritm", "deduksiya"],
    correctAnswer: "induksiya"
  },
  {
    question: "Aylana deb nimaga aytiladi?",
    options: ["Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl", "Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni", "Ikki tomonidan nuqta bilan chegaralangan to’g’ri chiziq bo’lagi", "Fazoda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni"],
    correctAnswer: "Tekislikda berilgan nuqtadan bir xil masofada yotuvchi nuqtalarning geometrik o’rni"
  },
  {
    question: "Maktab ustaxonasiga 32 dona kulrang karton, undan 14 dona kam oq karton bor edi. Oq kartondan har biriga 6 donadan sarflab albomlar tayyorlandi. Nechta albomlar tayyorlangan?",
    options: ["18", "2", "6", "3"],
    correctAnswer: "3"
  },
  {
    question: "Tarvuz narxi 200 so’m va yana yarim tarvuz narxiga teng. Tarvuz qancha turadi?",
    options: ["400", "380", "350", "410"],
    correctAnswer: "400"
  },
  {
    question: "Daraxtda 12 ta qush bor. Ovchi ulardan birini urib tushirdi. Daraxtda qolgan qushlarning soni qancha?",
    options: ["11", "9", "0", "10"],
    correctAnswer: "0"
  },
  {
    question: "To’g’ri to’rtburchak qo’shni tomonlari yig’indisi 15 bo’lsa, uning perimetrini toping.",
    options: ["40", "44", "50", "30"],
    correctAnswer: "30"
  },
  {
    question: "Kasrning maxraji nimani bildiradi?",
    options: ["Chiziq ostiga yozilgan son kasrning maxraji deyilib, butun narsa nechaga teng bo`lishini ifodalaydi", "Kasrning ustiga yozilga kasrning maxraji deyiladi", "Ikkalasi ham kasrning mahraji hisoblanadi", "Chiziq ostiga yozilgan son surati deyiladi"],
    correctAnswer: "Chiziq ostiga yozilgan son kasrning maxraji deyilib, butun narsa nechaga teng bo`lishini ifodalaydi"
  },
  {
    question: "Eng katta 4 xonali sonni eng katta 2 xonali songa bo’lsa bo’lsa nechchi hosil bo’ladi?",
    options: ["101", "100", "11", "99"],
    correctAnswer: "101"
  },
  {
    question: "Avtomashina bakida 45 litr benzin bor. Samarqandga borish uchun 4/9 qismi, Navoiyga borish uchun qolgan benzinning 4/5 qismi sarflandi. Avtomobil bakida qancha litr benzin qolgan?",
    options: ["3", "5", "6", "4"],
    correctAnswer: "5"
  },
  {
    question: "Uchburchak tomonlariga ko’ra nechta turga bo’linadi ?",
    options: ["2", "5", "3", "4"],
    correctAnswer: "3"
  },
  {
    question: "Berilgan sonlar ichidan eng kichigini toping.",
    options: ["4050", "4500", "4005", "5004"],
    correctAnswer: "4005"
  },
  {
    question: "Sonning ikkidan bir qismi 18 bo’lsa, uning uchdan bir qismi nechchi bo’ladi?",
    options: ["18", "12", "15", "16"],
    correctAnswer: "12"
  },
  {
    question: "5dm3cm necha mm?",
    options: ["530", "53000", "53", "5300"],
    correctAnswer: "530"
  },
  {
    question: "Kubning hajmi 343 mm3 bo‘lsa, uning tomonini toping.",
    options: ["11", "7", "9", "3"],
    correctAnswer: "7"
  },
  {
    question: "Berilgan sonni rim raqamlarida ifodalang: 183",
    options: ["LDIX", "CDIII", "CLXXXIII", "XDIII"],
    correctAnswer: "CLXXXIII"
  },
  {
    question: "Nodiraning bo’yi Feruzaning bo’yidan 12 sm past, ammo Azizaning bo’yidan 10 sm baland. Feruza Azizadan necha sm baland?",
    options: ["2sm", "20 sm", "22 sm", "12sm"],
    correctAnswer: "22 sm"
  },
  {
    question: "Asqar 20 yoshida, Sobir uning yoshini yarmiga teng edi. Hozir Asqar 50 yosh bo’lsa Sobir necha yoshda?",
    options: ["40", "30", "70", "45"],
    correctAnswer: "40"
  },
  {
    question: "Quyidagi qatorlardan qaysi birida uzunlik o’lchov birliklari berilgan?",
    options: ["Millimetr (mm), Santimetr (cm), Detsimetr (dm), Metr (m), Kilometr (km).", "Gramm (g), Kilogramm (kg), Sentner (s), Tonna (t)", "Sekund, Minut, Soat, Sutka, Hafta, Oy, Yil, Asr", "Litr, Sotix, Gektar"],
    correctAnswer: "Millimetr (mm), Santimetr (cm), Detsimetr (dm), Metr (m), Kilometr (km)."
  },
  {
    question: "Agar birinchi son 25 ga ortsa, ikkinchi son 15 ga kamaytirilsa yig’indi qanday o’zgaradi",
    options: ["o’zgarmaydi", "10 ga kamayadi", "10 ga ortadi", "10 foizga ortadi"],
    correctAnswer: "10 foizga ortadi"
  },
  {
    question: "Amallarni bajaring. 180 ∙ 30 + 2960 − 5511",
    options: ["1599", "3257", "2849", "2859"],
    correctAnswer: "2849"
  },
  {
    question: "7 ga bo’lganda qoldiq 9 bo’lishi mumkinmi?",
    options: ["mumkin emas", "8 bo’ladi", "7dan katta son bo’ladi", "mumkin"],
    correctAnswer: "mumkin emas"
  },
  {
    question: "O’nta tuxum sotib oldim. 2 ta tuxumni to’rt pishirish uchun singlimga berdim. Ikkita tuxumni qovurdim. Ikkita tuxumni yedim. Nechta tuxum qoldi.",
    options: ["0", "6", "4", "8"],
    correctAnswer: "6"
  },
  {
    question: "56 ??? Matematika fanining o'rganadigan obyekti … iboratdir.",
    options: ["to’g’ri javob berilmagan", "integralni hisoblashdan", "fazoviy shakllar va ular orasidagi miqdoriy munosabatlardan", "sonning kvadratini topishdan"],
    correctAnswer: "fazoviy shakllar va ular orasidagi miqdoriy munosabatlardan"
  },
  {
    question: "Mashina 50 km/h tezlik bilan 8 soat yurdi. Mashina shu masofani 5 soatda bosib otish uchun qanday tezlikda yurishi kerak?",
    options: ["100km/h", "90 km/h", "120km/h", "80km/h"],
    correctAnswer: "80km/h"
  },
  {
    question: "Umumiy qoidalardan xususiy misollarga va konkret qoidalarga olib boruvchi metod … deyiladi.",
    options: ["deduksiya", "induksiya", "statsionar", "reproduktiv"],
    correctAnswer: "deduksiya"
  },
  {
    question: "Uchburchakning asosi 20 ga va asosiga tushirilgan balandligi 15 ga teng. Uning yuzini toping.",
    options: ["200", "150", "160", "140"],
    correctAnswer: "150"
  },
  {
    question: "Algoritm bu - …",
    options: ["Berilgan masalani yechish uchun bajarilishi lozim bo’lgan amallar to’plami", "Berilgan masalani yechish uchun bajarilishi lozim bo’lgan amallarning qat’iy ketmaketligi", "Berilgan masalani yechishda foydalaniladigan amallar ketma-ketligi majmui", "Berilgan masalani yechishda foydalaniladigan amallar to’plami"],
    correctAnswer: "Berilgan masalani yechish uchun bajarilishi lozim bo’lgan amallarning qat’iy ketmaketligi"
  },
  {
    question: "Fermadagi quyonlar soni 159 ta bo‘lib, ular fermadagi qo‘ylar sonidan 23 taga ortiq, lekin sigirlar sonidan 23 taga kam. Fermadagi jami uy hayvonlari soni topilsin.",
    options: ["477", "450", "182", "464"],
    correctAnswer: "477"
  },
  {
    question: "Berilgan ifodaning qiymatini toping. 42 · (18 + 82) : (8745 – 8724)",
    options: ["420", "201", "200", "190"],
    correctAnswer: "200"
  },
  {
    question: "Hisoblang: 3/4 + 1/2 =",
    options: ["4/ 6", "1", "4 /5", "5 /4"],
    correctAnswer: "5 /4"
  },
  {
    question: "Santimetr va millimetrda ifodalang: 12 dm 5cm 7 mm=",
    options: ["1257 cm", "125 cm 7mm", "1257mm", "12 dm 57 cm"],
    correctAnswer: "125 cm 7mm"
  },
  {
    question: "Samolyotda 84 ta o‘rindiq bor. 59 ta yo‘lovchi chiqdi. Bo‘sh o‘rindiqlar soni yo‘lovchilar sonidan nechta kam?",
    options: ["34", "35", "30", "25"],
    correctAnswer: "34"
  },
  {
    question: "Aylana markazida o’tuvchi vatar … deyiladi.",
    options: ["Kesma", "Nur", "Radius", "Diametr"],
    correctAnswer: "Diametr"
  },
  {
    question: "To’g’ri to’rtburchakning tomonlari mos ravishda 6 va 8 ga teng bo’lsa uning dioganalining uzunligining toping.",
    options: ["28", "5", "10", "48"],
    correctAnswer: "10"
  },
  {
    question: "Eng katta 2 xonali tub son nechchi?",
    options: ["99", "97", "91", "93"],
    correctAnswer: "97"
  },
  {
    question: "Akmal bilan Madina qiziqarli masalalar yechishdi. Bolalardan ular nechta masala yechganligi so’ralganda, Akmal: “Men Madina yechgan masalalarning yarmini va yana 10 ta Madina: “Men Akmal  shuncha va yana 20 ta Ular jami nechta masala yechganlar?",
    options: ["80", "60", "40", "100"],
    correctAnswer: "100"
  },
  {
    question: "Uchburchak deb nimaga aytiladi?",
    options: ["Tekislikda berilgan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik shakl", "Bitta umumiy nuqtadan chiquvchi ikkita nur hosil qilgan geometrik shakl", "Ikki tomonidan nuqta bilan chegaralangan to’g’", "Bir to’g’ri chiziqda yotmagan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik sha"],
    correctAnswer: "Bir to’g’ri chiziqda yotmagan uchta nuqtani ketma-ket tutashtirishdan hosil qilingan geometrik sha"
  },
  {
    question: "Tekislikning aylana bilan chegaralangan qismi … deyiladi.",
    options: ["Doira", "Radius", "Diametr", "Sfera"],
    correctAnswer: "Doira"
  },
  {
    question: "To’g’ri tenglik hosil bo’lishi bo’lishi uchun x o’rniga qanday sonni qo’yish kerak: 12-6:3+2·x=20",
    options: ["8", "4", "5", "6"],
    correctAnswer: "5"
  },
  {
    question: "\"Metodika\" grekcha so'z bo'lib, … ma'nosini anglatadi.",
    options: ["uchburchak", "kvadrat", "yo’l", "bir"],
    correctAnswer: "yo’l"
  },
  {
    question: "Noma`lum bo`luvchi qanday topiladi?",
    options: ["Ko`paytuvchi bo`linuvchiga bo`linadi", "Bo`linuvchi bo`linmaga bo`linadi.", "Bo`linuvchi bo`linmaga ko`paytirib topiladi", "Bo`luvchi bolinuvchiga kopaytiriladi"],
    correctAnswer: "Bo`linuvchi bo`linmaga bo`linadi."
  },
  {
    question: "“7 – 4 = ?” ifodaning matematik ma’nosi qanday?",
    options: ["Son o’qida 7 sonidan 4 birlik chapga ko’chirilsa qanday natija hosil bo’ladi?", "Son o’qida 4 sonidan 7 birlik chapga ko’chirilsa qanday natija hosil bo’ladi?", "Son o’qida 4 sonidan 7 birlik o’ngga ko’chirilsa qanday nati", "Son o’qida 7 sonidan 4 birlik o’ngga ko’chirilsa qanday natija hosil bo’ladi?"],
    correctAnswer: "Son o’qida 7 sonidan 4 birlik chapga ko’chirilsa qanday natija hosil bo’ladi?"
  },
  {
    question: "Chet eldan kelgan 70 ta turisrlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Agar har bir turist kamida 1 ta tilni biladi desak, 2 ta tilni biladigan turistlar nechta?",
    options: ["15", "14", "16", "17"],
    correctAnswer: "16"
  },
  {
    question: "Kitobning sahifalari tartiblab chiqildi. Birinchi sahifa 1 va 2 sonlari bilan, ikkinchi sahifa esa 3 va 4 sonlari bilan va hokazo. 200 betlik kitob taxminan ochilganda siz ko‘rib turgan betlar yig‘indisi quyidagilardan qaysi biri bo‘lishi mumkin?",
    options: ["110", "90", "73", "42"],
    correctAnswer: "73"
  },
  {
    question: "Ilyos bog‘dan 24 ta olma uzdi. Ashraf esa undan 17 ta ko‘p olma uzdi. Aka-ukalar bog‘dan jami nechta olma uzgan?",
    options: ["63", "64", "41", "65"],
    correctAnswer: "65"
  },
  {
    question: "Tenglamani yeching: 20∙x+45=85",
    options: ["2", "1", "0", "3"],
    correctAnswer: "2"
  },
  {
    question: "Chet eldan kelgan 70 ta turisrlarning 57 tasi ingliz tilini, 29 tasi fransuz tilini biladi. Agar har bir turist kamida 1 ta tilni biladi desak, faqat fransuz tilini biladigan turistlar nechta?",
    options: ["12", "15", "13", "14"],
    correctAnswer: "13"
  },
  {
    question: "Ali doskaga ikki xonali son yozdi. Vali esa shu sondan 16 ga kattaroq sonni yozdi. Agar Ali yozgan son ketma-ket yozilsa, 1100 dan kichik son hosil bo‘ladi. Vali yozgan sonni toping.",
    options: ["28", "27", "26", "25"],
    correctAnswer: "26"
  },
  {
    question: "Agar mototsiklchi 30 km/h tezlik bilan yursa, u 3 h da qancha masofani bosib o’tadi?",
    options: ["90", "30", "120", "60"],
    correctAnswer: "90"
  },
  {
    question: "Uchburchakning asosi 16 ga va asosiga tushirilgan balandligi 12 ga teng. Uning yuzini toping.",
    options: ["96", "60", "52", "86"],
    correctAnswer: "96"
  },
  {
    question: "724 sonida nechta yuzlik mavjud?",
    options: ["24", "7", "4", "72"],
    correctAnswer: "7"
  },
  {
    question: "220 metr matodan 25 ta bir xil xalat va bir nechta bir xil ko’ylak tikildi. Xalatga 4 m, ko’ylakka undan 1 m kam mato ishlatilda. Nechta ko’ylak tikilgan?",
    options: ["41", "50", "25", "40"],
    correctAnswer: "40"
  },
  {
    question: "Bitta olma bitta nokdan 5 g og‘irroq. Agar pallali tarozining bir pallasiga 49 ta olma ikkinchi pallasiga esa 49 ta nok va X g og‘irlikdagi tosh qo‘yilsa, tarozi muvozanatda bo‘ladi. X topilsin.",
    options: ["250", "245", "225", "300"],
    correctAnswer: "245"
  },
  {
    question: "Tenglamani yeching: ? ∙ 144 − 25 ∙ 4 = 132",
    options: ["4", "3", "5", "2"],
    correctAnswer: "3"
  },
  {
    question: "To‘g‘ri chiziqda bir nechta nuqta belgilandi. Keyin har ikki nuqta orasiga bitta nuqta qo‘yildi. So‘ng bu yana uch marta takrorlandi. Natijada 81 ta nuqta hosil bo‘ldi. To‘g‘ri chiziqda dastlab nechta nuqta belgilangan edi?",
    options: ["5", "6", "11", "21"],
    correctAnswer: "6"
  },
  {
    question: "5 metrli yog‘ochni uzunligi 1 metrlik bo‘laklarga ajratish uchun uning necha joyidan arralash kerak?",
    options: ["6", "5", "4", "3"],
    correctAnswer: "4"
  },
  {
    question: "Tomoni 4 cm bo‘lgan kubning hajmi tomoni 2 cm bo‘lgan kubning hajmidan necha marta katta?",
    options: ["8", "2", "4", "16"],
    correctAnswer: "8"
  },
  {
    question: "To’rtburchak deb nimaga aytiladi?",
    options: ["Bir tekislikda yotuvchi ixtiyoriy uchtasi bir to’g’ri chiziqda yotmagan to’rtta nuqtani o’zaro kesis", "Bir tekislikda yotmagan, ixtiyoriy uchtasi bir to’g’ri chiziqda yotmagan to’rtta nuqtani o’za...", "Bir tekislikda yotuvchi to’rtta nuqtani o’zaro kesishmaydigan kesmalar....", "Bir tekislikda yotuvchi, ixtiyoriy uchtasi bir to’g’ri chiziqda yotmagan to’rtta nuqtani...."],
    correctAnswer: "Bir tekislikda yotuvchi ixtiyoriy uchtasi bir to’g’ri chiziqda yotmagan to’rtta nuqtani o’zaro kesis"
  },
  {
    question: "Zavodda 1 soatda 16 ta mashina ishlab chiqarilsa, 9 soatda nechta mashina ishlab chiqariladi?",
    options: ["140", "134", "144", "169"],
    correctAnswer: "144"
  },
  {
    question: "Hisoblang: 3/4 + 5/8 =",
    options: ["8 /12", "44 /8", "15 /32", "11 /8"],
    correctAnswer: "11 /8"
  },
  {
    question: "Uchburchakning asosi 6 ga va asosiga tushirilgan balandligi 14 ga teng. Uning yuzini toping.",
    options: ["32", "26", "48", "42"],
    correctAnswer: "42"
  },
  {
    question: "Ko’paytma qachon o’zgarmaydi?",
    options: ["bo’linuvchi va bo’luvchi o’rni almashsa", "bo’linma va bo’linuvchi o’rni almashsa", "qo’shiluvchilar o’rni almashsa", "ko’paytiruvchining o’rnini almashtirsak"],
    correctAnswer: "ko’paytiruvchining o’rnini almashtirsak"
  },
  {
    question: "Rim raqamlarni bilan Berilgan sonni oddiy ko’rinishda yozing: CDXV",
    options: ["408", "401", "509", "415"],
    correctAnswer: "415"
  },
  {
    question: "Mening buvim 75 yoshda. Onam buvimdan 21 yosh kichik. Men esa onamdan 6 marta kichikman. Buvim mendan necha yosh katta?",
    options: ["60", "66", "64", "65"],
    correctAnswer: "66"
  },
  {
    question: "Amallarni bajaring. 150 ∙ 22 + 5800 − 2023",
    options: ["2849", "1599", "7077", "2859"],
    correctAnswer: "7077"
  },
  {
    question: "Ko’prikning ustuni suv tubidagi loyda suvda va havoda turibdi. Uning uzunligi 130 m suvdagi qismi 33 m loydagi qismi 55 m bo’lsa havodagi qismining uzunligining toping.",
    options: ["52", "32", "42", "62"],
    correctAnswer: "42"
  },
  {
    question: "724 sonida nechta o’nlik mavjud?",
    options: ["724", "720", "20", "72"],
    correctAnswer: "72"
  },
  {
    question: "Qanday sonni 7 ga bo’lsa ham, 8 ga bo’lganda ham 2 qoldiq qoladi?",
    options: ["57", "58", "55", "56"],
    correctAnswer: "58"
  },
  {
    question: "Agar avtobus har bir bekat oralig’i uchun 3 minut vaqt sarflansa, 15-bekatga borish uchun qancha vaqt sarflaydi?",
    options: ["40", "45", "41", "42"],
    correctAnswer: "42"
  },
  {
    question: "Ikki sonning yig’indisi 50 ga teng, ular 2:3 nisbatda bo’lsa bu sonlarni toping.",
    options: ["20, 30", "35, 20", "11, 44", "22, 33"],
    correctAnswer: "20, 30"
  },
  {
    question: "Santimetr va millimetrda ifodalang: 12 dm 5sm 7 mm=",
    options: ["1257sm", "12dm 57sm", "125sm 7mm", "1257mm"],
    correctAnswer: "125sm 7mm"
  },
  {
    question: "O‘quvchilar tafakkurini charxlashga yonaltirilgan masala turi?",
    options: ["soda", "ikki va undan ortiq usulli masala", "murakkab", "mantiqiy"],
    correctAnswer: "mantiqiy"
  },
  {
    question: "Aylanadan uning markazigacha bo’lgan masofa … deyiladi.",
    options: ["Radius", "Diametr", "Markazi", "Vatar"],
    correctAnswer: "Radius"
  },
  {
    question: "Tenglamani yeching (7521+x)*24:20=9438",
    options: ["345", "346", "344", "347"],
    correctAnswer: "344"
  },
  {
    question: "Kubning tomoni 7 cm bo’lsa, uning hajmini toping.",
    options: ["343", "21", "334", "49"],
    correctAnswer: "343"
  },
  {
    question: "Mashina 60 km/h tezlik bilan 4 soat yurdi. Mashina shu masofani 3 soatda bosib otish uchun qanday tezlikda yurishi kerak?",
    options: ["100 km/h", "50 km/h", "120 km/h", "80 km/h"],
    correctAnswer: "80 km/h"
  },
  {
    question: "Berilgan kasrlardan eng kattasini toping.",
    options: ["3/15,", "3/10", "1/5,", "5/6,"],
    correctAnswer: "5/6,"
  },
  {
    question: "13 kishi bir-biri bilan salomlashganda, qo’l berib ko’rishishlar soni qancha bo’ladi?",
    options: ["86", "78", "84", "82"],
    correctAnswer: "78"
  },
  {
    question: "Qushlar galasi uchub ketmoqda. Oldinda 1 ta qush, uning orqasida 2 ta qush. Orqada 1 ta qush, uning oldida 2 ta qush. O‘rtada 1 ta qush, uning oldida 1 ta qush, orqasida 1 ta qush. Qushlar galasida nechta qush borligini aniqlang?",
    options: ["16", "3", "9", "10"],
    correctAnswer: "3"
  },
  {
    question: "Ali va Vali yoshlari yig’indisi 10 ga teng. Lekin 1 yildan so’ng Ali Validan 2 barobar katta bo’ladi. Ali xozirda necha yoshda?",
    options: ["5", "7", "8", "6"],
    correctAnswer: "7"
  },
  {
    question: "O’quvchi 290 betli sarguzasht kitobni o’qib chiqmoqchi. U bir kunda 50 bet kitob o’qiy oladi, lekin har safar voqealarni eslash uchun oxirgi 10 betni qayta o’qib chiqadi. U kitobni necha kunda o’qib tugatadi?",
    options: ["9 kun", "6 kun", "7 kun", "8 kun"],
    correctAnswer: "7 kun"
  },
  {
    question: "Bitta guldonga 7 ta gul sig’adi. 181 ta gulni guldonlarga joylansa, nechta guldon kerak bo’ladi va nechta gul ortib qoladi.",
    options: ["25 ta guldon va 6 ta gul ortib qoladi.", "23 ta guldon va 5 ta gul ortib qoladi.", "24 ta guldon va 6 ta gul ortib qoladi", "25 ta guldon va 5 ta gul ortib qoladi."],
    correctAnswer: "25 ta guldon va 6 ta gul ortib qoladi."
  },
  {
    question: "Santimetr va millimetrda ifodalang: 17 dm 8 cm 9 mm=",
    options: ["17 dm 89cm", "178 cm 9mm", "189 mm", "1789 cm"],
    correctAnswer: "178 cm 9mm"
  },
  {
    question: "Muzeyda 47 ta qoraqalpoq rassomlari va ulardan ikki marta ko’p o’zbek rassomlarining asarlari to’plangan. Agar muzeyda jami 235 ta asar bo’lsa, rus rassomlarining nechta asari joy olgan?",
    options: ["94", "47", "188", "141"],
    correctAnswer: "94"
  },
  {
    question: "Hisoblang: 7∙8-40:8",
    options: ["38", "30", "41", "51"],
    correctAnswer: "51"
  },
  {
    question: "“4 + 1 = ?” ifodaning matematik ma’nosi qanday?",
    options: ["Son o’qida 4 sonidan 1 birlik o’ngga ko’chirilsa qanday natija hosil bo’ladi?", "Son o’qida 1 sonidan 4 birlik chapga ko’chirilsa qanday natija hosil bo’ladi?", "Son o’qida 4 sonidan 1 birlik chapga ko’chirilsa qanday natija hosil bo’ladi?", "Son o’qida 1 sonidan 4 birlik o’ngga ko’chirilsa qanday nati"],
    correctAnswer: "Son o’qida 4 sonidan 1 birlik o’ngga ko’chirilsa qanday natija hosil bo’ladi?"
  },
  {
    question: "Ota ayiq ikki kunda 8 kg asal yeydi. Ona ayiq esa uch kunda 9 kg asal yeydi. Ikkita kichkina ayiqcha uch kunda 3 kg asal yeydi. To‘rtta kichkina ayiqchasi bor ota-ona ayiqlar 30 kun uchun kamida qancha asal g‘amlashi kerak?",
    options: ["330", "300", "270", "240"],
    correctAnswer: "270"
  },
  {
    question: "Kitob daftardan 5 marta yoki 1500 so’m qimmat turadi. Daftarning narxi qancha so’m?",
    options: ["375", "370", "380", "382"],
    correctAnswer: "375"
  },
  {
    question: "Uchburchakning tomonlari 5 см, 8см va 9 см bo’lsa, uning perimetrini toping.",
    options: ["17", "25", "22", "24"],
    correctAnswer: "22"
  },
  {
    question: "Agar elektir hisoblagich 1-yanvar kuni 39503 ni ko’rsatsa va fevral oxirida borib 41213 ni ko’rsatsa, agar 1 kilovatt energiya uchun 300 so’m sarflansa, shu 2 oy davomida elektr toki uchun qancha mablag’ sarflanadi?",
    options: ["484 000", "390 400", "500 000", "513 000"],
    correctAnswer: "513 000"
  },
  {
    question: "7 tonnani kilogrammlarda ifodalang.",
    options: ["7000", "70", "700", "7"],
    correctAnswer: "7000"
  },
  {
    question: "Uchburchak ichki burchaklari yig’indisi … ga teng. Nuqtalar o’rniga mos keluvchi sonni toping.",
    options: ["180 gradus", "270 gradus", "360 gradus", "90 gradus"],
    correctAnswer: "180 gradus"
  },
  {
    question: "Havo harorati ertalab 180 C, tushlikka kelib 320 C va tushda 310 C ni tashkil etdi. O’rtacha haroratni toping.",
    options: ["260 C", "270 C", "250 C", "280 C"],
    correctAnswer: "270 C"
  },
  {
    question: "Fazoning sfera bilan chegaralangan qismi … deyiladi.",
    options: ["Sfera", "Shar", "Doira", "Diametr"],
    correctAnswer: "Shar"
  },
  {
    question: "Ulushlar deb nimaga aytiladi?",
    options: ["Hammasi to`g`ri", "Bir ikki uch ulush deyiladi", "yarmi teng bo’laklari", "Butunning teng bo’laklari"],
    correctAnswer: "Butunning teng bo’laklari"
  },
  {
    question: "Son bilan yozing: Yerdan Oygacha eng yaqin masofa uch yuz ellik olti ming to‘rt yuz to‘qqiz km.",
    options: ["356 409", "300 56 409", "300 560 409", "460 740"],
    correctAnswer: "356 409"
  },
  {
    question: "Uch xonali natural sonlar nechta?",
    options: ["100", "1000", "900", "999"],
    correctAnswer: "900"
  },
  {
    question: "Sinfda jami 42 nafar o’quvchi bo’lib, qiz bolalar o’g’il bolalarga qaraganda ikki marta ko'p. Sinfda nechta o'g'il bola bor?",
    options: ["28", "24", "15", "14"],
    correctAnswer: "14"
  },
  {
    question: "Aylananing ixtiyoriy ikkita nuqtasini tutashtiruvchi kesma … deyiladi.",
    options: ["Diametr", "Radius", "Vatar", "Markazi"],
    correctAnswer: "Vatar"
  },
  {
    question: "Tashkilot printer va kompyuter sotib oldi. Kompyuter printerdan 5 barobar qimmat. Kompyuter va printer birgalikda 5mln 700ming so’m bo’lsa, kompyuterning narxi qancha?",
    options: ["4 mln 500ming", "4 mln 650ming", "4 mln 750ming", "4 mln 800ming"],
    correctAnswer: "4 mln 750ming"
  },
  {
    question: "Rim raqamlarni bilan Berilgan sonni oddiy ko’rinishda yozing: XCIX",
    options: ["119", "109", "99", "101"],
    correctAnswer: "99"
  },
  {
    question: "Ilyos bog‘dan 30 ta olma uzdi. Ashraf esa undan 12 ta ko‘p olma uzdi. Aka-ukalar bog‘dan jami nechta olma uzgan?",
    options: ["65", "64", "72", "63"],
    correctAnswer: "72"
  },
  {
    question: "Bir xil tushunchaga kiruvchi narsalar tasvirlangan qatorni toping?",
    options: ["Kub, shar, to`rtburchak, shkaf", "Daftar, qalam, ruchka, kitob", "Quyon, shar, o`yinchoq, qoshiq, kub", "Palka, qalamdon, shar"],
    correctAnswer: "Daftar, qalam, ruchka, kitob"
  },
  {
    question: "Uchta tokchada 384 ta kitob bor. Birinchi tokchadagi kitoblar ikkinchi tokchadagidan 2 marta ko’p, uchinchi tokchadagi kitoblar esa ikkinchi tokchadagidan 3 marta ko’p. Har qaysi tokchada nechta kitob bor ?",
    options: ["128, 64, 192;", "128, 60, 196;", "130, 64, 190;", "126, 62, 198;"],
    correctAnswer: "128, 64, 192;"
  },
  {
    question: "Ta`lim tizimidagi har bir o`quv fanining mazmuni va o`tilish tartibi, o`quvchilar tomonidan o`zlashtirilishi lozim bo`lgan bilim hamda ko`nikmalar hajmini belgilab beradigan rasmiy hujjat qaysi",
    options: ["dastur", "o`quv dasturi", "mualliflik o`quv dasturlari", "darslik"],
    correctAnswer: "o`quv dasturi"
  },
  {
    question: "O‘quvchilar haftaning 3 kunida kollejda nazariy bilim oladi, 3 kunida korxonaning o‘zida, biriktirilgan usta, master rahbarligida ish o‘rnida amaliyot o‘taydi. Bu qaysi davlatda",
    options: ["Germaniyada", "Koreyada", "Amerikada", "Fransiyada"],
    correctAnswer: "Germaniyada"
  },
  {
    question: "Ishlab chiqarishdan ajralgan holda ta'lim olish ta'limning qanday shakli hisoblanadi +kunduzgi ta’lim",
    options: ["dual ta’lim", "kechki ta’lim", "sirtqi ta’lim", "kunduzgi ta’lim"],
    correctAnswer: "kunduzgi ta’lim"
  },
  {
    question: "Maktabda dars jarayoni asosan necha daqiqa bo’ladi? +45 daqiqa",
    options: ["45 daqiqa", "80 daqiqa", "90 daqiqa", "40 daqiqa"],
    correctAnswer: "45 daqiqa"
  },
  {
    question: "2022-yilda o‘quvchilarni kreativ fikrlashlarini baholashga qaratilgan xalqaro baholash dasturi qaysi?",
    options: ["TALIS", "PISA", "TIMSS", "PIRLS"],
    correctAnswer: "PISA"
  },
  {
    question: "Standart so‘zining ma’nosi nima",
    options: ["shakl me`yor =", "muhr tamg`a", "tafovut andoza", "me’yor, namuna, andoza"],
    correctAnswer: "me’yor, namuna, andoza"
  },
  {
    question: "Pedagog uchun eng zarur nutq madaniyatini belgilang?",
    options: ["Keng fikrlilik, tinglovchini zeriktirmaydigan muloqot o’rnatish", "Tinglay olish, qo’llab-quvvatlash", "Tanqidiy nuqtai nazar, o’z fikrini himoya qilish", "Nutqning grammatik to’g’riligi, uning leksik boyligi, aniq va ravshan ifodalanganligi"],
    correctAnswer: "Nutqning grammatik to’g’riligi, uning leksik boyligi, aniq va ravshan ifodalanganligi"
  },
  {
    question: "Pedagogik diagnostika nima?",
    options: ["talimdagi kamchiliklarni bartaraf qilish", "bilish sifatini takomilashtirish", "ta’lim tarbiya jarayonini chuqur taxlil qilish uning samaradorligini to‘g‘ri baholash ta’lim dar...", "talimni takomilashtirish"],
    correctAnswer: "ta’lim tarbiya jarayonini chuqur taxlil qilish uning samaradorligini to‘g‘ri baholash ta’lim dar..."
  },
  {
    question: "Pedagogik tizim nimalardan iborat?",
    options: ["o’quvchilarning bilish faoliyatini rivojlantirish", "gaplarni yozib, saqlab olish, ijodiy yondashuv, bilim berishdan", "tanqidiy-ijodiy yondashuv, o’zaro ta’sirlar", "pedagogik jarayonning obg’ektlari va sub’ektlari, shakl - usullari, ular o’rtasidagi munosabatla..."],
    correctAnswer: "pedagogik jarayonning obg’ektlari va sub’ektlari, shakl - usullari, ular o’rtasidagi munosabatla..."
  },
  {
    question: "Jamiyatdan, jamoadan ajralib kamol topgan bola baxtsiz bo’lib qoladir\". Bu qaysi allomaning pedagogik qarashi:",
    options: ["A.Temur", "AAvloniy", "Abu Ali Ibn sino", "Al Xorazmiy"],
    correctAnswer: "Abu Ali Ibn sino"
  },
  {
    question: "Pedagogika qanday fan?",
    options: ["Pedagogika ta’lim jarayonining mazmuni, qonuniyatlari, metodlarini o‘rganuvchi....", "Pedagogik tarbiya jarayonining qonuniyatlari, prinsiplari, shakl va metodlari haqidagi gumanitar", "Pedagogika tarbiyaning nazariy asoslarini tadqiq etuvchi ijtimoiy- gumanitar fan", "Pedagogika ta’lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlar.. ijtimoiy, umumkasbiy fan."],
    correctAnswer: "Pedagogika ta’lim-tarbiya jarayonining mohiyati, mazmuni, qonuniyatlar.. ijtimoiy, umumkasbiy fan."
  },
  {
    question: "Bir va bir necha oygacha ishlab chiqiladigan ta`lim loyihalari turini ayting",
    options: ["Amaliy loyihalar", "Uzoq muddatli loyiha", "Axborotli loyihalar", "O‘rta muddatli loyiha"],
    correctAnswer: "Uzoq muddatli loyiha"
  },
  {
    question: ". Kishining doimiy mashg'ulot turi, muayyan ish turini malakali bajarishga imkon beradigan bilim, mahorat tajribani talab etadi.",
    options: ["Malaka", "Bilim", "Ish faoliyati", "Kasb"],
    correctAnswer: "Kasb"
  },
  {
    question: "Ta`lim metodlari qanday ma’noni anglatadi?",
    options: ["o‘quvchilarga bilim berishning yo`llari va usullarini ifodalaydi", "o‘qituvchining talabchanligini taminlaydi", "o‘quvchilarni bilimli qilishni tamoyillarini bildiradi", "ta`limning asosiy tartibi xisoblanadi"],
    correctAnswer: "o‘quvchilarga bilim berishning yo`llari va usullarini ifodalaydi"
  },
  {
    question: "Umumiy o‘rta va o’rta maxsus ta’lim bosqichi hamda oliy ta’lim bosqichlarining oralig‘ida qanday nomdagi ta’lim turini olish mumkin?",
    options: ["oliy ta’limdan keyingi ta’lim", "professional ta’lim", "maktabgacha ta’lim", "boshlang‘ich ta’lim"],
    correctAnswer: "professional ta’lim"
  },
  {
    question: "Kompetensiya so‘zining lug‘aviy ma’nosi",
    options: ["bajaraman, to‘g‘rilayman", "uyushtiraman", "loyiqman, munosibman", "tashkil etaman"],
    correctAnswer: "loyiqman, munosibman"
  },
  {
    question: "15 yoshli o‘quvchilarni matematika, o‘qish savodxonligi hamda tabiiy fanlar bo‘yicha ko‘nikmalarini baholaydigan xalqaro baholash dasturi qaysi?",
    options: ["PIRLS", "TIMSS", "PISA", "EGMA"],
    correctAnswer: "PISA"
  },
  {
    question: "O‘qituvchining pedagogik faoliyati turlari qaysilar?",
    options: ["Shakllantiruvchi va rivojlantiruvchi", "Ta’lim beruvchi, tarbiyalovchi, rivojlantiruvchi", "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik", "o‘quvchi faoliyatini tashkil etish va boshqarish"],
    correctAnswer: "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik"
  },
  {
    question: "4-8-sinf o‘quvchilarini matematika va tabiiy fanlardan bilim darajasini baholaydigan xalqaro baholash dasturi qaysi?",
    options: ["PISA", "EGMA", "PIRLS", "TIMSS"],
    correctAnswer: "TIMSS"
  },
  {
    question: "“pedagogika bola tarbiyasining fani demakdir” ta’rif kim tomonidan berilgan?",
    options: ["H.H.Niyoziy", "Abduqodir Shakuriy", "Abdulla Avloniy", "Ishoqxon Ibrat"],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "O‘zbekiston 2022-yilda o‘tkazilgan PISA xalqaro baholash dasturining tabiiy-ilmiy savodxonligi sohasi bo‘yicha nechanchi o‘rinni egallagan?",
    options: ["72", "85", "80", "30"],
    correctAnswer: "80"
  },
  {
    question: "Qachon “Professional ta’lim tizimini yanada takomillashtirish to‘g‘risida”gi farmon qabul qilindi",
    options: ["2019-yil, 6-sentyabr", "1997 y 29 avgust", "2021 y 23 oktyabr +", "2020y 23 sentyabr"],
    correctAnswer: "2019-yil, 6-sentyabr"
  },
  {
    question: "Loyihaga kirishish, loyiha faoliyatini tashkil etish va rejalashtirish – auditoriya ishini qaysi bosqichini o`z ichiga qamrab oladi",
    options: ["Tayyorgarlik bosqichi", "qaytuvchi bosqich", "Loyihani bajarish bosqichi", "Yakunlovchi bosqich"],
    correctAnswer: "Tayyorgarlik bosqichi"
  },
  {
    question: "Inson 70% bilimlarni necha yoshgacha o’zlashtiradi.",
    options: ["6", "9", "7", "10"],
    correctAnswer: "7"
  },
  {
    question: "“Bolalar bilan muomalada bosiq, jiddiy bo‘lish” ushbu fikr muallif kim",
    options: ["AAvloniy", "Abu Ali Ibn sino", "A.Temur", "Al Xorazmiy"],
    correctAnswer: "Abu Ali Ibn sino"
  },
  {
    question: "Yan Amos Komenskiy an'anaviy talimni nechanchi asrda tashkil etgan. +17 asrda",
    options: ["16 asrda", "15 asrda", "17 asrda", "13 asrda"],
    correctAnswer: "17 asrda"
  },
  {
    question: "Finlandiya maktablarida boshlangich ta’lim necha yil davom etadi",
    options: ["6 yil", "5 yil", "4 yil", "7 yil"],
    correctAnswer: "6 yil"
  },
  {
    question: "Noan'anaviy darslarda o‘qituvchining roli qanday o‘zgaradi?",
    options: ["O‘qituvchi o‘quvchilarga yo‘l-yo‘riq ko‘rsatib, muammolarni yechishda yordam beradi", "O‘qituvchi barcha darslarni faqat nazariy bilimlarga asoslaydi", "O‘qituvchi sinfda faqat nazorat qiladi", "O‘qituvchi faqat ma'lumot beradi, boshqa ishtirok etmaydi"],
    correctAnswer: "O‘qituvchi o‘quvchilarga yo‘l-yo‘riq ko‘rsatib, muammolarni yechishda yordam beradi"
  },
  {
    question: "O’quvchilarning kasbiy mahoratini takomillashtirish tog’risida fikr bildirgan Evropa olimlari qaysi qatorda to’g’ri ko’rsatilgan.",
    options: ["Y.A.Komenskiy, Demosfen", "Lokk, Ushiniskiy", "Y.A.Komenskiy, Lokk, Pestalotsi, Destverg, Ushinskiy", "Platon, Sitseron"],
    correctAnswer: "Y.A.Komenskiy, Lokk, Pestalotsi, Destverg, Ushinskiy"
  },
  {
    question: "«Buyuk didaktika» asarini kim yozgan?",
    options: ["Arastu", "Ya.A.Komenskiy", "J.J.Russo", "Suqrot"],
    correctAnswer: "Ya.A.Komenskiy"
  },
  {
    question: "O‘quv dasturini ishlab chiqishda nimalar hisobga olinadi?",
    options: ["Darslarning vaqt jadvali", "Faqat o‘qituvchining ehtiyojlari", "Faqat maktabning byudjeti", "O‘quvchilarning ta’lim olishga bo‘lgan qiziqishlari va ehtiyojlari"],
    correctAnswer: "O‘quvchilarning ta’lim olishga bo‘lgan qiziqishlari va ehtiyojlari"
  },
  {
    question: "STEAM” dasturida “M” qisartmasida qaysi fan mazmuni aks etgan",
    options: ["san'at", "texnologiya", "muhandislik", "matematika"],
    correctAnswer: "matematika"
  },
  {
    question: "«Tizim» so’zining ma’nosi ko’rsatilgan qatorni belgilang?",
    options: ["qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa =", "ijodiy yondashuv", "o’quvchilarning bilish faoliyatini rivojlantirish", "gaplarni yozib, saqlab olish"],
    correctAnswer: "qismlardan tuzilgan, birikkan yaxlit narsa yoki hodisa ="
  },
  {
    question: "Yetim bolalarni va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalarni o‘qitish va ularning to‘liq ta’minoti kimning zimmasida bo‘ladi",
    options: ["Ota onalar tomonidan", "O‘zbekiston Respublikasi Davlat byudjeti mablag‘lari hisobidan", "Tashkilot hisobidan", "Homiylik hisobidan"],
    correctAnswer: "O‘zbekiston Respublikasi Davlat byudjeti mablag‘lari hisobidan"
  },
  {
    question: "Sinf so‘ziga to‘g‘ri ta’rif berilgan qatorni toping.",
    options: ["tarbiyalanuvchilarning yosh, psixologik xususiyatiga kо‘ra shakllantirilgan yoki о‘rta maxsus ....", "ijtimoiy ahamiyatga ega umumiy maqsad asosida bir necha о‘quvchilardan tashkil topgan guruh.", "yig‘ilma, omma, birgalikdagi majlis, birlashma, guruh.", "yoshi va bilimi jihatidan bir xil bо‘lgan muayyan о‘quvchilar guruhi"],
    correctAnswer: "yoshi va bilimi jihatidan bir xil bо‘lgan muayyan о‘quvchilar guruhi"
  },
  {
    question: "Malaka nima?",
    options: ["malaka to’plangan tajribadir", "malaka bilan bir xil ongli xatti xarakatlarning ko`p marta takrorlanishi asosida xosil bo’ladigan...", "malaka bir xil xatti xarakatlarning ko’p marta takrorlanishi  =", "malaka bu odatiy harakatlar"],
    correctAnswer: "malaka bilan bir xil ongli xatti xarakatlarning ko`p marta takrorlanishi asosida xosil bo’ladigan..."
  },
  {
    question: "«Didaktika» termini yunoncha «didaktikos» degan so‘zdan olingan bo‘lib, qanday ma'noda tarjima qilinadi?",
    options: ["Ta’lim oluvchi", "Ta’lim berish va o‘qitish", "Ta’lim beruvchi va ta’lim oluvchi", "O‘qituvchi"],
    correctAnswer: "Ta’lim berish va o‘qitish"
  },
  {
    question: "Sharq uyg‘onish davri baholash mezonini belgilang",
    options: ["barakallo, tasanno, ofarin", "yaxshi, o`rta a`lo", "12345", "“juda yomon”, “yomon”, “o‘rta”, “yaxshi”, “a’lo”"],
    correctAnswer: "barakallo, tasanno, ofarin"
  },
  {
    question: "Yaponiyada bolalar boshlang’ich sinfga necha yoshdan boradilar",
    options: ["6 yoshdan", "8 yoshdan", "7 yoshdan", "5yoshdan"],
    correctAnswer: "6 yoshdan"
  },
  {
    question: "Loyihaviy ta`lim qancha vaqtdan buyon pedagogikada foydalanib kelinmoqda",
    options: ["200 yildan ortiq vaqt", "300 yildan ortiq vaqt", "50 yildan ortiq", "2005-yildan beri"],
    correctAnswer: "300 yildan ortiq vaqt"
  },
  {
    question: "Nutq nech xil bo'ladi",
    options: ["4xil", "3xil", "5xil", "2xil"],
    correctAnswer: "2xil"
  },
  {
    question: "Zardushtiylik axloqining asosi bu…..",
    options: ["Falsafa, kalom, fikr", "Falsafa ilm", "Ezgu fikr, ezgu kalom va ezgu amal", "ezgu fikr, kalom"],
    correctAnswer: "Ezgu fikr, ezgu kalom va ezgu amal"
  },
  {
    question: "STEAM texnologiyasi qachondan shakllana boshlagan",
    options: ["2000 yil", "2005yildan", "1990 yildan", "1998 yildan"],
    correctAnswer: "1990 yildan"
  },
  {
    question: "O‘quv dasturi va o‘quv rejalari orasidagi farq nima?",
    options: ["O‘quv reja faqat ma'ruzalar va darslar bilan cheklangan", "O‘quv dasturi uzoq muddatli maqsadlarni ko‘zlaydi, o‘quv reja esa qisqa muddatli", "O‘quv dasturi faqat darsliklardan iborat", "O‘quv dasturi faqat maktab ichidagi faoliyatni o‘z ichiga oladi"],
    correctAnswer: "O‘quv dasturi uzoq muddatli maqsadlarni ko‘zlaydi, o‘quv reja esa qisqa muddatli"
  },
  {
    question: "Qadimgi Yunonistonda bolalarga bilim berish kimga yuklatilgan",
    options: ["Choparlarga", "Pedagoglarga", "Vazirlarga", "Faylasuflarga"],
    correctAnswer: "Faylasuflarga"
  },
  {
    question: "“Ta’lim to‘g‘risidagi qonun” qachon qabul qilingan qayta taxrirdan o`tkazilgani qachon qabul qilingan?",
    options: ["1993 yil, 11 avgust", "2020 yil, 29 iyul", "2019 yil, 12 avgust =", "2020 yil 23 sentabr"],
    correctAnswer: "2020 yil 23 sentabr"
  },
  {
    question: "DTS qanday ta’lim turlari uchun joriy etiladi",
    options: ["umumiy o‘rta, maktabdan tashqari ta’lim, oliy ta’lim =", "Ta`limning barcha bosqichlari uchun", "umumiy o‘rta ta’lim, oliy ta’lim", "maktabgacha, umumiy o‘rta, o‘rta maxsus"],
    correctAnswer: "Ta`limning barcha bosqichlari uchun"
  },
  {
    question: "Talabalarga muayyan mavzular bo`yicha o`z bilimlari darajasini baholay olish imkonini beradigan grafik organayzer qanday nomlanadi?",
    options: ["Suhbat", "“Bilaman. Bilishni xohlayman. Bilib oldim” (BBB)", "Zina", "FSMU"],
    correctAnswer: "“Bilaman. Bilishni xohlayman. Bilib oldim” (BBB)"
  },
  {
    question: "“Ta’lim to’g’risidagi qonun” 2 chi bor qachon qabul qilingan",
    options: ["1997 yil, 29 avgust", "1993 yil, 11 avgust", "1992 yil, 12 avgust", "1997 yil, 29 iyul"],
    correctAnswer: "1997 yil, 29 avgust"
  },
  {
    question: "Pedagogning kommunikativ madaniyati deganda…",
    options: ["o‘quvchi va jamoaning faolligini", "pedagogning o‘quvchilar va atrofdagilar bilan qisqa muddatda muloqot o‘rnatishga bo‘lgan doimiy...", "pedagogik jarayonni bilish, uni tashkil eta olish.", "pedagogning dunyoga, pedagogik voqelikka va pedagogik jarayonga bo‘lgan intellektual va hissiy ..."],
    correctAnswer: "pedagogning o‘quvchilar va atrofdagilar bilan qisqa muddatda muloqot o‘rnatishga bo‘lgan doimiy..."
  },
  {
    question: "Qanday xalqaro baholash dasturlari mavjud",
    options: ["TIMSS, TALIS, PIRLS, PISA", "PISA, PIRLS STEAM", "STIM DTS", "IVIC"],
    correctAnswer: "TIMSS, TALIS, PIRLS, PISA"
  },
  {
    question: "……ta’lim sifatini nazorat qilish va samarali boshqarish maqsadida qo‘llaniladi. Bunda turli darajadagi testlar, muammoli vaziyatlarni hal qilish (keyslarni yechish) asosida shaxsning kreativlik sifatlari va ijodiy faoliyatni tashkil eta olish ko‘nikm..",
    options: ["Pedagogik kvalimetriya", "pedagogik maxorat", "pedagogik madaniyat", "pedagogik takt"],
    correctAnswer: "Pedagogik kvalimetriya"
  },
  {
    question: "…..bu o‘quvchilar tomonidan mazkur fanning muayyan bob yoki bo‘limlarining o‘zlashtirilganini tekshirish. Nuqtalar o`rnini to`ldiring",
    options: ["tashkiliy", "oraliq nazorat", "joriy", "yakuniy"],
    correctAnswer: "oraliq nazorat"
  },
  {
    question: "Umumiy maqsad yo‘lida shaxslarning o‘zaro munosabatlari, tashkiliyligi va intilishlari bilan bir-biriga monand turg‘un sotsial (ijtimoiy) uyushmani nima deb yuritiladi?",
    options: ["Jamoa", "guruh", "jamiyat", "konformlilik"],
    correctAnswer: "Jamoa"
  },
  {
    question: "Oliy ta’lim nechta bosqichdan iborat?",
    options: ["5", "2", "4", "3"],
    correctAnswer: "2"
  },
  {
    question: "Imidj so'zining ma'nosi nima.",
    options: ["Forscha: insonning ichki qiyofasi", "Lotincha: obraz, xarakter, qiyofa", "Gregcha: jozibali, latofatli", "Yunoncha: tashqi ko'rinish, qiyofa"],
    correctAnswer: "Lotincha: obraz, xarakter, qiyofa"
  },
  {
    question: "Fransuzcha so`zidan olingan bo`lib, mashg`ulotlarda biror-bir mavzu yuzasidan talabalar o`rtasida o`zaro bahs uyushtirish, ularning o`zaro fikr almashishlarini ta’minlashga xizmat qiladigan texnologiya (interfaol metod) qanday nomlanadi?",
    options: ["so`rov", "“Debat”", "aqliy hujum", "ajurli arra"],
    correctAnswer: "“Debat”"
  },
  {
    question: "Pedagokika faning otasi kim",
    options: ["Godnin", "Kuznin", "Yan Amos Komenskiy", "Aristotel"],
    correctAnswer: "Yan Amos Komenskiy"
  },
  {
    question: "“Fan va aql-zakovat” asarining muallifi kim?",
    options: ["Ahmad Yugnakiy", "Al- Farg‘oniy", "Abu Ali Ibn Sino", "Al-Farobiy"],
    correctAnswer: "Al-Farobiy"
  },
  {
    question: "Jamoa so‘ziga to‘g‘ri ta’rif toping",
    options: ["Lotincha “projectus”- oldinga tashlangan", "lotincha “kollektivus” – yig‘ilma, omma, birgalikdagi majlis, birlashma, guruh.", "lotincha qurish", "inglizcha qayta ishlash"],
    correctAnswer: "lotincha “kollektivus” – yig‘ilma, omma, birgalikdagi majlis, birlashma, guruh."
  },
  {
    question: "Jismoniy va aqliy sensor yoki ruhiy nuqsonlari bo’lgan shuningdek uzoq vaqt davolanishda bo’lgan bolalar ta’lim tashkilotlarida qanday shaklda ta’lim olish huquqiga ega",
    options: ["masofaviy", "jamoaviy", "inklyuziv", "eksternat"],
    correctAnswer: "inklyuziv"
  },
  {
    question: "STEAM dasturi bõyicha õqitish bolada kõproq qaysi qobiliyatni oshishiga yordam beradi",
    options: ["Ijodkorligi", "qiziquvchanlik", "Chiqishuvchanlik", "STEAM dasturi bolalar uchun emas"],
    correctAnswer: "Ijodkorligi"
  },
  {
    question: "Ta’lim to‘grisidagi qonunda “Dual ta’lim” nechanchi moddada ko’rsatilgan?",
    options: ["65 modda", "17 modda", "21 modda", "29 modda"],
    correctAnswer: "17 modda"
  },
  {
    question: "Maktabga tayyorlanayotgan bola qanday ijtimoiy ko‘nikmalarni rivojlantirishi kerak?",
    options: ["Boshqalar bilan muloqot qilish, jamoada ishlash", "Faqat o‘z-o‘zini boshqarish", "Faqat shaxsiy faoliyatni rivojlantirish", "Faqat yolg‘iz ishlash"],
    correctAnswer: "Boshqalar bilan muloqot qilish, jamoada ishlash"
  },
  {
    question: "Umumiy o‘rta ta’lim nechanchi sinflarni o‘z ichiga oladi",
    options: ["1-8 sinflarni", "1-11-sinflarni", "5-9 sinflarni", "1-9 sinflarni"],
    correctAnswer: "1-11-sinflarni"
  },
  {
    question: "O‘zbekiston 2022-yilda o‘tkazilgan PISA xalqaro baholash dasturining o‘qish savodxonligi sohasi bo‘yicha nechanchi o‘rinni egallagan?",
    options: ["80", "85", "72", "30"],
    correctAnswer: "80"
  },
  {
    question: "Yomon o‘qituvchi haqiqatni aytib berib qo‘ya qoladi, yaxshi o‘qituvchi esa haqiqatni topishiga o‘rgatadi” ushbu fikrni aytgan g‘arblik pedagog kim",
    options: ["L.Xey", "A. Disterverg", "F.Fexner", "O. Kont"],
    correctAnswer: "A. Disterverg"
  },
  {
    question: "STEAM” dasturida “T” qisartmasida qaysi fan mazmuni aks etgan",
    options: ["texnologiya", "san'at", "matematika", "tabiiy fanlar"],
    correctAnswer: "texnologiya"
  },
  {
    question: "Maktabda ta’lim sifatini ta'minlash uchun mas'ul bo‘lgan tashkilot qanday nomlanadi?",
    options: ["Ta’lim tizimini nazorat qilish qo‘mitasi", "Maktab direktori", "Maktab kengashi", "Ta’lim inspeksiyasi"],
    correctAnswer: "Ta’lim inspeksiyasi"
  },
  {
    question: "Sinf-dars tizimi asoschisi…..?",
    options: ["Yan Amos Komenskiy", "K.D.Ushinskiy", "A.S.Makarenko", "A.Avloniy"],
    correctAnswer: "Yan Amos Komenskiy"
  },
  {
    question: "6 yil bepul haftasiga 6 kun o‘qish. 6-aprelda o‘quv yili boshlanadi. Ushbu davlat nomini belgilang",
    options: ["Hindiston", "Litviya", "Yaponiya", "Germaniya"],
    correctAnswer: "Yaponiya"
  },
  {
    question: "Bolalarni majburiy boshlang’ich ta’limga tayyorlash nechi yoshdan boshlanadi",
    options: ["6-10 yoshdan", "6-7 yoshdan", "7-8 yoshdan", "6-8 yoshdan"],
    correctAnswer: "6-7 yoshdan"
  },
  {
    question: "Metod bu……..",
    options: ["Pedagogik texnalogiyalarning tarkibiy qismi", "Lotinch so’zdan olingan bo’lib “axborot uzatish “  degan ma’noni bildiradi", "Bu yunoncha “yo’l yo’riq usul orqali maqsadga erishishdir”", "Yunoncha axborotni uzatish"],
    correctAnswer: "Bu yunoncha “yo’l yo’riq usul orqali maqsadga erishishdir”"
  },
  {
    question: "Inglizcha so`zdan olingan bo`lib, berilgan savollarga qisqa, aniq va lo`nda javob qaytarilishini taqozo etadigan metod qanday nomlanadi?",
    options: ["loyiha", "intervyu", "nilufar guli", "Blits-so`rov”;"],
    correctAnswer: "Blits-so`rov”;"
  },
  {
    question: "Umumiy o‘rta va o’rta maxsus ta’lim bosqichida o‘qish muddati necha yil",
    options: ["9yil", "7 yil", "11 yil", "4 yil"],
    correctAnswer: "11 yil"
  },
  {
    question: "Innovatsiya pedagogik termin sifatida nechanchi asrda va qayerda paydo bo’lgan",
    options: ["XX asrning 60-yillarida Garbiy Yevropa va AQSh", "XIX asrning 60-yillarida Germaniyada.", "XX asrning 50-yillarida Yaponiyada", "XIX asrning 80-yillarida Germaniyada"],
    correctAnswer: "XX asrning 60-yillarida Garbiy Yevropa va AQSh"
  },
  {
    question: "O‘qituvchining pedagogik faoliyati turlari - bu ...",
    options: ["Ta’lim beruvchi, tarbiyalovchi, rivojlantiruvchi", "Shakllantiruvchi va rivojlantiruvchi", "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik", "o‘quvchi faoliyatini tashkil etish va boshqarish"],
    correctAnswer: "Konstruktiv, tadqiqotchilik, kommunikativ, tashkilotchilik, gnostik"
  },
  {
    question: "Pedagogikada jazolash usuli qanday amalga oshiriladi?",
    options: ["Tushuntirish, tanbeh berish, ogohlantirish, qattiq ogohlantirish, uyaltirish.", "Haqorat qilib.", "Tanbeh berib", "Kaltaklab, urib, haqorat qilib."],
    correctAnswer: "Tushuntirish, tanbeh berish, ogohlantirish, qattiq ogohlantirish, uyaltirish."
  },
  {
    question: "Shaxs kamolotiga qanday omillar ta’sir etadi?",
    options: ["biologik omil, ijtimoiy omil va tarbiya ta’sir etadi.", "odamlarning munosabati.", "bola shaxsining rivojlanishiga muhit va tarbiya kabi omillar.", "shaxsning kamol topishida ijtimoiy va biologik omillar ta’sir etadi."],
    correctAnswer: "biologik omil, ijtimoiy omil va tarbiya ta’sir etadi."
  },
  {
    question: "“Pedagogika bola tarbiyasining fani demakdir”. Ta’rif kim tomonidan berilgan?",
    options: ["H.H.niyoziy", "Ishoqxon Ibrat", "Abduqodir Shakuriy", "Abdulla Avloniy"],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Pedagogning umumiy madaniyati nimalardan iborat?",
    options: ["Ijtimoiy madaniyat", "Bilimi, ishonchi, qobiliyati va xulqi", "Kasbiy ahamiyatli madaniyat", "Kasbiy faoliyatda yetukligi"],
    correctAnswer: "Bilimi, ishonchi, qobiliyati va xulqi"
  },
  {
    question: "STEAM” dasturida “E” qisartmasida qaysi fan mazmuni aks etgan +muhandislik",
    options: ["san'at", "muhandislik", "Etimologiya", "mehnat"],
    correctAnswer: "muhandislik"
  },
  {
    question: "Qaysi davlat bogchalarida bolalarni 8 kishilik xanlarga bo’lib ta’lim beradilar. +Yaponiya",
    options: ["Germaniya", "Yaponiya", "Xitoy", "Koreya"],
    correctAnswer: "Yaponiya"
  },
  {
    question: "Nuqtalar o‘rniga mos javobni qoying. ............... ya’ni elementar o‘qish va yozishga o‘rgatish bolalarga savod o‘rgatish pedagogikadagina emas balki ijtimoiy hayotda ham juda jiddiy qo‘yilgan holatdir",
    options: ["Nutqni o‘stirish metodikasi", "Savod o‘rgatish metodikasi", "Imlo metodikasi", "O‘qitish metodikasi"],
    correctAnswer: "Savod o‘rgatish metodikasi"
  },
  {
    question: "Nutq e’tikasi bu…",
    options: ["fikrni ravon ifodalash", "juda ham jiddiy so‘zlarni qamrab oladi.", "mustaqil gaplar.", "sodda va ravon so‘zlardan foydalana olish."],
    correctAnswer: "sodda va ravon so‘zlardan foydalana olish."
  },
  {
    question: "Iqtisod deb pul va Mol kabi ne'matlarning qadrini bilmakka aytilur.Quydagi gapga kim tarif bergan.",
    options: ["Alisher Navoiy", "Amir Temur", "Abdurauf Fitrat", "Abdulla Avloniy"],
    correctAnswer: "Abdulla Avloniy"
  },
  {
    question: "Qonun hujjatlari asosida maktabdagi ta’lim jarayonini tartibga soluvchi hujjat nima deb ataladi?",
    options: ["Maktabning ichki tartib-qoidalari", "Ta’lim dasturi", "O‘quv rejasi", "O‘qituvchilarga oid ko‘rsatmalar"],
    correctAnswer: "O‘quv rejasi"
  },
  {
    question: "Noan'anaviy darsning afzalliklaridan biri nima?",
    options: ["Darsning an'anaviy shakllarini saqlash", "O‘qituvchi o‘z bilimini o‘quvchilarga faqat nazariy tarzda etkazadi", "O‘quvchilarni passiv holatda qoldirish", "O‘quvchilarning ijodiy va tanqidiy fikrlash qobiliyatlarini rivojlantirish"],
    correctAnswer: "O‘quvchilarning ijodiy va tanqidiy fikrlash qobiliyatlarini rivojlantirish"
  },
  {
    question: "Mashg‘ulotlarga qo‘yiladigan maqsadlar qaysilar?",
    options: ["tarbiyaviy, didaktik, muloqot", "tarbiyaviy, didaktik, ijtimoiy-g‘oyaviy", "ijtimoiy-g‘oyaviy, aksiologik, didaktik", "ta’limiy, tarbiyaviy, rivojlantiruvchi"],
    correctAnswer: "ta’limiy, tarbiyaviy, rivojlantiruvchi"
  },
  {
    question: "Nutq texnikasi nima",
    options: ["Intonatsiya, oxang", "Pauza, urg’u, ovoz", "nafas olish, ovoz diksiya", "nafas olish, qayta xikoyalash"],
    correctAnswer: "nafas olish, ovoz diksiya"
  },
  {
    question: "Empatiya deganda nimani tushunasiz?",
    options: ["Xotira obrazlarini solishtirish", "Boshqa odamlarning psixik holatlarini tushunish va ularga hamdardlik qilish", "O’qituvchining o’z ishini rejalashtiraolishidir.", "Kishining ta’lim beraolish qobiliyatidir."],
    correctAnswer: "Boshqa odamlarning psixik holatlarini tushunish va ularga hamdardlik qilish"
  },
  {
    question: "Pantomimika bu …",
    options: ["Yuz muskullari", "Oyoqlar holati, harakati", "Yuz ifodasi va harakatlari", "Oyoqlar, gаvdа, qo‘l orqali fikrni ifodalash"],
    correctAnswer: "Oyoqlar, gаvdа, qo‘l orqali fikrni ifodalash"
  },
  {
    question: "Didaktik qobiliyatga to‘g’ri ta'rifni toping.",
    options: ["qisqa daqiqalarda auditoriya (sinf) holatini idrok qila olish fazilati.", "oson yo‘l bilan murakkab bilimlarni o‘quvchilarga tushuntira olish", "barcha fanlar yuzasidan muayyan bilimga ega bo‘lishlik.", "sinf guruhini uyushtirish va boshqarish iste'dodi"],
    correctAnswer: "oson yo‘l bilan murakkab bilimlarni o‘quvchilarga tushuntira olish"
  },
  {
    question: "Muammoning asosiy to`rt jihatini yoritishga xizmat qilib, unga ko`ra talabalar mavzuning mazmuniga mos muammolarni atroflicha o`rganish orqali mohiyatini yoritish, ularni keltirib chiqaruvchi omillarni izlash, hal qilish imkoniyatlariga egaqanday....",
    options: ["muammo", "nima uchun", "muloqot", "“SWOT-tahlil”"],
    correctAnswer: "“SWOT-tahlil”"
  },
  {
    question: "Uzluksiz ta’lim turlari necha bosqichni o‘z ichiga oladi",
    options: ["9", "8", "6", "7"],
    correctAnswer: "7"
  },
  {
    question: "Tayanch kompetensiyalar necha turga bo‘linishini aniqlang",
    options: ["5 ta", "7 ta", "4 ta", "6 ta"],
    correctAnswer: "6 ta"
  },
  {
    question: "Nima uchun maktabga bolalarni 7 yoshdan olinadi?",
    options: ["7 yoshda Chap miyya yarimsharlarida bilish tuyg'ulari ochiladi", "O'ng miyya yarimsharlarida bilish tuyg'ulari ochiladi", "o'qish ishtiyoqi shu yoshda shakllanadi", "Aqliy rivojlanish paydo bo'ladi"],
    correctAnswer: "7 yoshda Chap miyya yarimsharlarida bilish tuyg'ulari ochiladi"
  },
  {
    question: "Fanning mohiyatini ochib beruvchi eng muhim asosiy tushuncha bu...",
    options: ["Rivojlanish", "Ta’lim", "Tarbiya", "Kategoriya"],
    correctAnswer: "Kategoriya"
  },
  {
    question: "Noan'anaviy darsning asosiy maqsadi nima?",
    options: ["O‘quvchilarni an'anaviy metodlar bilan ta’lim berish", "O‘quvchilarga faqat nazariy bilimlarni yetkazish", "O‘qituvchining faqat ma'ruzalari orqali bilim berish", "O‘quvchilarga o‘z fikrlarini erkin ifoda etish imkonini yaratish"],
    correctAnswer: "O‘quvchilarga o‘z fikrlarini erkin ifoda etish imkonini yaratish"
  },
  {
    question: "Ta’lim turlari ketma ketligi 1) professional ta’lim; 2) maktabdan tashqari ; 3) umumiy o‘rta va o‘rta maxsus t; 4) oliy ta’limdan keyingi  5) kadrlarni qayta tayyorlash va ularning malakasini oshirish; 6) maktabgacha ta’lim va tarbiya; 7) oliy ta’lim.",
    options: ["1, 4, 5, 7, 3, 2", "6, 2, 3, 5, 7, 4", "1, 2, 3, 5, 4, 7, 6", "6, 3, 1, 7, 4, 5, 2"],
    correctAnswer: "6, 3, 1, 7, 4, 5, 2"
  },
  {
    question: "Ilk bolalalik qaysi yosh davrlarini o’z ichiga oladi",
    options: ["1 yoshdan 3 yoshgacha", "1 yoshdan 2 yoshgacha", "2yoshdan 5 besh yoshgacha", "3 yoshdan 4 yoshgacha"],
    correctAnswer: "1 yoshdan 3 yoshgacha"
  },
  {
    question: "Pedagogik adabiyotlar va maktab amaliyotida o‘quvchilar o‘quv faoliyatini tashkil etishning qanday asosiy shakli qabul qilingan?",
    options: ["tabaqalashgan, individual, ommaviy", "ommaviy, guruhli, individua", "integratsiyalashgan, yakka, guruhiy", "yakka-guruhiy, ommaviy, individual"],
    correctAnswer: "ommaviy, guruhli, individua"
  },
  {
    question: "PISA tadqiqotida 2022-yilda qaysi soha asosiy soha sifatida belgilandi?",
    options: ["kreativ fikrlash", "o‘qish savodxonligi", "matematika", "tabiiy fanlar"],
    correctAnswer: "matematika"
  },
  {
    question: "”Pedagog oldida bolalarga so‘zlardagi tovushlarni sof, toza talaffuz qilish ularda ifodali nutqni tarbiyalash vazifalari turadi\" ushbu so‘zlar muallifi kim?",
    options: ["L.V.SHerva", "F.A.Soxin", "M.Sh.Popova", "O.I.Soloveva"],
    correctAnswer: "O.I.Soloveva"
  },
  {
    question: "Abu Ali Ibn Sinoning ta’lim-tarbiya haqidagi fikrlari.",
    options: ["Bolaga jamoada ta’lim berish afzalligi.", "Tarbiya bu najot.", "Tarbiya yagona jarayon.", "6 yoshdan bolani muallimga topshirish."],
    correctAnswer: "Bolaga jamoada ta’lim berish afzalligi."
  },
  {
    question: "Ta’lim olish shaklidan qat’iy nazar bitiruvchilar erishishlari kerak bo‘lgan ta’lim darajasini belgilovchi asosiy hujjat bu...",
    options: ["STEAM", "PISA", "PIRLS", "DTS"],
    correctAnswer: "DTS"
  },
  {
    question: "STEAM” dasturida “A” qisartmasida qaysi fan mazmuni aks etgan",
    options: ["matematika", "san'at", "texnologiya", "tabiiy fanlar"],
    correctAnswer: "san'at"
  },
  {
    question: "Ta’lim olish huquqi “Ta’lim tog‘risida”gi qonunning nechanchi moddasida keltirilgan?",
    options: ["5 modasida", "7 modasida", "55 modasida", "23 modasida"],
    correctAnswer: "5 modasida"
  },
  {
    question: "Pedagogik muloqot uslublari to’g’ri keltirilgan qatorni toping",
    options: ["Avtoritar, Demokratik", "Liberal, Demokratik, Trening", "Demokratik, Intelektual.", "Avtoritar, Liberal, Demokratik"],
    correctAnswer: "Avtoritar, Liberal, Demokratik"
  },
  {
    question: "Pedagogik jarayonda shaxslararo munosabatlarning keskinlashuvi natijasi sifatida yuzaga keluvchi muammoli jarayon-bu...",
    options: ["pedagogik munozara", "pedagogik usul", "pedagogik odob", "pedagogik konflikt"],
    correctAnswer: "pedagogik konflikt"
  },
  {
    question: "Diksiya nima?",
    options: ["Tovush rangdorligi, yorqinligi, uning yumshoqligi va alohidaligi.", "So‘zlarni aniq, ravshan talaffuz etish, so‘zlash usuli.", "Tovush hajmi, uning chegarasi", "So‘zlayotganda obrazga kirish, ovozni kerakli joyda pastlatish, ohista gapirish."],
    correctAnswer: "So‘zlarni aniq, ravshan talaffuz etish, so‘zlash usuli."
  },
  {
    question: "Aniq maqsad asosida kishi ongini ma’naviy axloqiy qadriyatlarni shakllantirishga qaratilgan tizimli jarayonga nima deyiladi?",
    options: ["ijtimoiy muhit", "ma’lumot", "tarbiya", "ta’lim"],
    correctAnswer: "tarbiya"
  },
  {
    question: "Maktabga tayyorlashda bola qanday bilimlarni egallashi kerak?",
    options: ["Faqat matematikani o‘rganish", "Faqat o‘qish va yozish", "O‘qish, yozish va hisoblash ko‘nikmalari", "Faqat tabiiy fanlar"],
    correctAnswer: "O‘qish, yozish va hisoblash ko‘nikmalari"
  },
  {
    question: "Tarbiyaning asosiy vazifasi nima?",
    options: ["Odamlarning dunyo bilan munosabatlarining bir butun sistemasini ta'minlovchi, vosita", "Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e’tiqodini...", "Odamning jamiyat a'zosi sifatida o‘z-o‘zini anglash va tafakkurini, faoljyatining ob'yektivligini..", "Zarurat, ehtiyojlilik-qandaydir bir vosi"],
    correctAnswer: "Tarbiya yosh avlodni jamiyatimizda qabul qilingan odob-axloq qoidalariga mos keladigan e’tiqodini..."
  },
  {
    question: "Kasb so'zi qaysi so'zdan olingan bo'lib rasimiy ko'rsatilgan mashg'ulot, ixtisoslik, shaxsning mehnat faoliyati degan ma'nolarni anglatadi.",
    options: ["Forscha", "Lotincha", "Yunoncha", "Gregcha"],
    correctAnswer: "Lotincha"
  },
  {
    question: "Nutq uslublari nechta",
    options: ["6 ta", "5 ta", "7 ta", "4 ta"],
    correctAnswer: "5 ta"
  },
  {
    question: "Optimallashtirish deganda nimani tushunasiz?",
    options: ["Ta’lim berib, o‘qitish nazariyasi", "Muammoli o‘qitish", "Ta’limda fanlararo o‘qitish nazariyasi", "Ko‘p sonli imkoniyatlardan eng qulayini tanlab olish  ="],
    correctAnswer: "Ko‘p sonli imkoniyatlardan eng qulayini tanlab olish  ="
  },
  {
    question: "PISA xalqaro baholash tizimi qachon birinchi marta qo'llanilgan",
    options: ["2000-yilda", "2005-yilda", "1995-yilda", "1997- yilda"],
    correctAnswer: "2000-yilda"
  },
  {
    question: "Davlat ta’lim standartlarini bajarish O’zbekiston Respublikasining barcha ta’lim muassasalari uchun …… dir.",
    options: ["Majburiy", "Erkin", "Ochiq", "Ixtiyoriy"],
    correctAnswer: "Majburiy"
  },
  {
    question: "4-sinf o‘quvchilarini o‘qish savodxonligini baholashdigan xalqaro baholash dasturi qaysi?",
    options: ["PISA", "TIMSS", "PIRLS", "EGMA"],
    correctAnswer: "PIRLS"
  },
  {
    question: "Texnologiya so'zining ma'nosi",
    options: ["Xarakat qilmoq", "Maxorat sa'nat", "Ijtimoiy munosabat", "Raqs harakat"],
    correctAnswer: "Maxorat sa'nat"
  },
  {
    question: "Boshlangich sinflarda o’rganiladigan asosiy miqdorlarni belgilang",
    options: ["uzunlik , massa , narx , baxo, masofa , vaqt , tezlik", "masofa , narx , vaqt , tezlik", "Baxo , narx , vaqt", "uzunlik , massa, narx"],
    correctAnswer: "uzunlik , massa , narx , baxo, masofa , vaqt , tezlik"
  },
  {
    question: "Ta’limning demokratlashuvini qanday izohlaysiz?",
    options: ["Ta’limda shaxsga nisbatan hurmat", "Ta’lim – tarbiya uslublarining erkin tanlanishi", "Ta’limda erkinlik", "Ta’lim – tarbiya uslublarini tanlashda o‘quv yurtlarining mustaqilligi"],
    correctAnswer: "Ta’limda erkinlik"
  },
  {
    question: "Og‘zaki ta’lim metodlari qaysilar?",
    options: ["Hikoya, suhbat, mashq", "Hikoya, suhbat, ma’ruza", "Ma’ruza, seminar, laboratoriya ishi", "Hikoya, mashq"],
    correctAnswer: "Hikoya, suhbat, ma’ruza"
  },
  {
    question: "Pedagogik takt nima?",
    options: ["har bir ta’lim oluvchi va jamoaning faolligini pedagogik jihatdan ta'minlash uchun zarur bo‘lgan ...", "pedagogning yutuqlariga kafolat beradigan aniq ishlab chiqilgan va qat'iy ilmiy loyihalashtirilg...", "har bir ta’lim oluvchiga va jamoaga pedagogik ta’sir o‘tkazishni samarali qo‘llash uchun zarur ...", "o‘qituvchi kasbiy mahoratining asosi bo‘lib, o‘quvchilarga barcha demokratik talablar asosida ...."],
    correctAnswer: "o‘qituvchi kasbiy mahoratining asosi bo‘lib, o‘quvchilarga barcha demokratik talablar asosida ...."
  },
  {
    question: "Ta’lim to‘g‘risidagi Qonunga necha marotaba o‘zgartirish kiritilgan",
    options: ["2 marotaba", "1 marotaba", "4 marotaba", "3 marotaba"],
    correctAnswer: "3 marotaba"
  },
  {
    question: "Yan Amos Komenskiyning qaysi asarida bolani dastlab oilada tarbiyalash va rivojlantirish gʻoyalari bugungi kunda ham o‘z kuchini yo‘qotmagan?",
    options: ["”Bolalar dunyosi\"", "\"Onalar maktabi”", "”Ona tili\"", "\"Buyuk didaktika”"],
    correctAnswer: "\"Onalar maktabi”"
  },
  {
    question: "Umumiy o‘rta va o‘rta maxsus ta’lim muassasalari reytingini aniqlash chora-tadbirlari to‘g‘risida O‘zbekiston Respublikasi Vazirlar Mahkamasining, 345-sonli qarori qachon kuchga kirgan",
    options: ["04.06.2021", "03.06.2021", "23.09.2020", "09.12.1985"],
    correctAnswer: "04.06.2021"
  },
  {
    question: "O‘zbekiston 2024-yilga qadar qanday xalqaro baholash dasturlarida ishtirok etdi?",
    options: ["STEAM, STEM, PISA, PIRLS", "PISA, STEAM, PIRLS, ICILS", "ICILS, TIMSS, EGRA, TALIS", "PISA, PIRLS, TIMSS, TALIS"],
    correctAnswer: "PISA, PIRLS, TIMSS, TALIS"
  },
  {
    question: "STEAM dasturining mazmuni qaysi qatorda to`g`ri ko`rsatilgan",
    options: ["matematika musiqa tabiiy fanlar muhandislik san`at fanlari uyg`unligi", "matematika musiqa muhandislik san`at texnologiya fanlari uyg`unligi", "matematika tabiiy fanlar muhandislik san`at texnologiya fanlari uyg`unligi", "matematika musiqa tabiiy fanlar muhandislik fanlari uyg`unligi"],
    correctAnswer: "matematika tabiiy fanlar muhandislik san`at texnologiya fanlari uyg`unligi"
  },
  {
    question: "Nechanchi yildan boshlab besh ballik baholar raqamlarda ya’ni, 1,2,3,4,5 raqamlarda ifoda etish joriy qilingan",
    options: ["1950 yildan", "1990 yildan", "622 yildan", "1944-yildan"],
    correctAnswer: "1944-yildan"
  },
  {
    question: "” Takrorlash bilim onasidir “ushbu ibora qaysi pedagogi olimning fikriga mansub",
    options: ["Shakuriy", "Xamza", "Kamenskiy", "Ushinskiy"],
    correctAnswer: "Ushinskiy"
  },
  {
    question: "O‘quv yilining davomiyligi 1-sinflar uchun necha hafta",
    options: ["36 hafta", "33 hafta", "35 hafta", "37 hafta"],
    correctAnswer: "33 hafta"
  },
  {
    question: "Fransuz tilidan tarjima qiliganda “5 qator” ma’nosini bildiruvchi usul",
    options: ["Insert", "Aqliy hujum", "Sinkveyn", "Klaster"],
    correctAnswer: "Sinkveyn"
  },
  {
    question: "O‘zbekiston 2022-yilda o‘tkazilgan PISA xalqaro baholash dasturining matematika sohasi bo‘yicha necha ball to‘plagan?",
    options: ["336", "364", "600", "575"],
    correctAnswer: "364"
  },
  {
    question: "An’anaviy yondashuvning asosiy xususiyati nimada?",
    options: ["gapirib berish, tushuntirish, talaba esa bu axborotni xotirada saqlaydi", "o’zaro ta’sirlar", "nazorat turlari (joriy, oraliq, yakuniy)", "ijodiy yondashuv"],
    correctAnswer: "gapirib berish, tushuntirish, talaba esa bu axborotni xotirada saqlaydi"
  },
  {
    question: "”Pedagog”so’zining  ma’nosi nima?",
    options: ["xunar o’rgatuvchi", "O’rgatuvchi", "bola yetaklovchi", "Bilim beruvchi"],
    correctAnswer: "bola yetaklovchi"
  },
  {
    question: "STEAM dasturi qaysi fanlarni o’z ichiga olgan",
    options: ["muhandislik ,ona tili", "Tabiiy fanlar, matematika, sanat, texnologiya, muhandislik", "tabiat, matematika, san’at musiqa, chizmachilik", "Geogarafiya,musiqa"],
    correctAnswer: "Tabiiy fanlar, matematika, sanat, texnologiya, muhandislik"
  },
  {
    question: "O‘zbekiston Respublikasining “Ta’lim to‘g‘risida”gi qonuniga muvofiq kimlar pedagogik faoliyat bilan shug‘ullanish huquqiga egalar?",
    options: ["kasbiy bilim, ko‘nikma va malaka, shuningdek, ta’lim muassasalarida ishlash tajribasiga ega shaxsla", "faoliyat jarayonida ta’lim oluvchilarning yosh va psixologik xususiyatlarini biladigan shaxslar", "oliy pedagogik ma’lumot hamda 5 yillik pedagogik stajga ega shaxslar", "tegishli ma’lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo‘lgan shaxslar"],
    correctAnswer: "tegishli ma’lumoti, kasbiy tayyorgarligi bor va yuksak axloqiy fazilatlarga ega bo‘lgan shaxslar"
  },
  {
    question: "O‘zbekiston 2022-yilda o‘tkazilgan PISA xalqaro baholash dasturining matematika sohasi bo‘yicha nechanchi o‘rinni egallagan?",
    options: ["85", "80", "72", "30"],
    correctAnswer: "72"
  },
  {
    question: "Kompetensiya so‘zining lug‘aviy ma’nosi",
    options: ["tashkil etaman", "bajaraman, to‘g‘rilayman", "uyushtiraman", "loyiqman, munosibman"],
    correctAnswer: "loyiqman, munosibman"
  },
  {
    question: "2020-yil 23-sentabrda qabul qilingan O‘zbekiston Respublikasi ta’lim to‘g‘risidagi qonuni necha bob va necha moddadan iborat",
    options: ["11 bob 74 modda", "5 bob 34 modda", "11 ta bob, 75 ta modda", "8 bob 75 modda"],
    correctAnswer: "11 ta bob, 75 ta modda"
  },
  {
    question: "Noverbal nutq turlari to’g’ri keltirilgan qatorni toping?",
    options: ["Mimika, pantomimika nutq, signifikatsiya, daktilogik nutq, Morze alifbosi", "Og’zaki va yozma nutq.", "Mimika, fantomimika, og’zaki nutq.", "So’z mimika aks sado axborot"],
    correctAnswer: "Mimika, pantomimika nutq, signifikatsiya, daktilogik nutq, Morze alifbosi"
  },
  {
    question: "Didaktika – bu:",
    options: ["O‘quv tillarini tashkil etishning formalarini takomillashtirish.", "Ta’lim nazariyasi.", "Ta’lim qonuniyatlari, prinsiplarini va mohiyatini tadqiq etadi.", "Ilmiy fan bo‘lib, ta’limning nazariy asoslarini o‘rgatadi."],
    correctAnswer: "Ta’lim nazariyasi."
  },
  {
    question: "STEAM” dasturida “S” qisartmasida qaysi fan mazmuni aks etgan",
    options: ["texnologiya", "matematika", "tabiiy fanlar", "san'at"],
    correctAnswer: "tabiiy fanlar"
  },
  {
    question: "O‘qituvchining o‘quvchilarni boshqarish uslublari",
    options: ["avtoritar uslub, demokratik uslub, liberal uslub.", "avtoritar uslub, liberal uslub, muloqot - qo‘rqitish uslubi", "demokratik uslub, liberal uslub, muloqot – masofa uslubi.", "demokratik uslub, avtoritar uslub, hazil – mutoyiba uslubi."],
    correctAnswer: "avtoritar uslub, demokratik uslub, liberal uslub."
  },
  {
    question: "“Klaster “so‘zining ma’nosi",
    options: ["yangilik", "o‘ziga xoslik", "alohida", "bog‘lam"],
    correctAnswer: "bog‘lam"
  },
  {
    question: "«Texnologiya» so‘zi haqida tushuncha?",
    options: ["«texne» - mahorat, san’at, «logos» - tushuncha ta’limot", "«texne» - mehnat, san’at, «logos» - tushuncha bilim", "«texne» - qobiliyat, san’at, «logos» - tushuncha ta’lim", "«texne» - san’at, «logos» – tushuncha o‘qitish"],
    correctAnswer: "«texne» - mahorat, san’at, «logos» - tushuncha ta’limot"
  },
  {
    question: "davlat ta’lim standartlari nima",
    options: ["umumiy o‘rta, o‘rta maxsus, kasb-hunar va oliy ta’lim mazmuniga hamda sifatiga qo‘yiladigan ...", "o‘quv jadvalining tarkibiy elementlarini aks ettiruvchi manba, shakl va metodlari to‘g‘risida", "ta’lim jarayonining samarali tashkil etish yo‘llari, shakl va metodlari to‘g‘r", "o‘quv yuklamlari hajmini aniqlashga xizmat qiladigan, shakl va metodlari to‘g‘risida mezonlar...."],
    correctAnswer: "umumiy o‘rta, o‘rta maxsus, kasb-hunar va oliy ta’lim mazmuniga hamda sifatiga qo‘yiladigan ..."
  },
  {
    question: "Ta`lim tizimidagi har bir o`quv fanining mazmuni va o`tilish tartibi, o`quvchilar tomonidan o`zlashtirilishi lozim bo`lgan bilim hamda ko`nikmalar hajmini belgilab beradigan rasmiy hujjat qaysi",
    options: ["dastur", "o`quv dasturi", "mualliflik o`quv dasturlari", "darslik"],
    correctAnswer: "o`quv dasturi"
  },
  {
    question: "Qaysi so‘zlarda urg‘u yordamida ma’noni farqlash mumkin. 1.~surma; 2.~mexanik; 3.~yo‘llar; 4.~yangi; 5.~bog‘cha",
    options: ["1, 2, 3, 4, 5", "1, 3, 4, 5", "3, 4, 5", "1, 3, 5"],
    correctAnswer: "1, 3, 4, 5"
  },
  {
    question: ". Nisbiy so’zli gap  qaysi qatorda berilgan?",
    options: ["Intizom buzildimi ishda unum bo’lmaydi.", "Gox yomg’ir yog’adi, gox quyosh chiqadi.", "Qoyaga qancha yaqin yursang, xavf shuncha kam.", "Yo siz keling, yo men boray."],
    correctAnswer: "Qoyaga qancha yaqin yursang, xavf shuncha kam."
  },
  {
    question: "Qaysi jarangli undoshlar sirg‘aluvchilarga mansub emas.",
    options: ["v, z", "k, t", "b, n", "j, g‘"],
    correctAnswer: "b, n"
  },
  {
    question: "Qaysi  javobda  qo’shma gap berilgan.",
    options: ["Azimboy xalqning sabr-kosasini  to’ldiradigan zulm o’tkazdi", "Azimboy shunday zulm o’tkazdiki, oqibatda xalqning sabr kosasi to’ldi.", "Onasi qiziga ham,  o’g’liga ham ishonadi.", "Botirjon ham, Raximjon ham a’lochi."],
    correctAnswer: "Azimboy shunday zulm o’tkazdiki, oqibatda xalqning sabr kosasi to’ldi."
  },
  {
    question: "Qaysi javobda morfemalarga bo’linmaydigan so’z berilgan.",
    options: ["uzuq", "buyruq", "huquq", "yutuq"],
    correctAnswer: "huquq"
  },
  {
    question: "Qaysi javobda sof modal so’zlar berilgan.",
    options: ["shubhasiz, to’g’ri, o’z-o’zidan", "umuman, balki, ehtimol", "avvalo, afsuski, albatta", "aftidan, chamasi, taxminan"],
    correctAnswer: "avvalo, afsuski, albatta"
  },
  {
    question: "Quyida berilganlardan ham bog’lovchi, ham yuklama vazifasida qo’llanuvchi so’zni aniqlang.",
    options: ["ham", "deb", "balki", "bilan"],
    correctAnswer: "ham"
  },
  {
    question: "Sodda tub otlarni toping.",
    options: ["qirqim, o’rim", "yutuq, buyruq", "chopiq, tortiq", "beshik, o’rik"],
    correctAnswer: "beshik, o’rik"
  },
  {
    question: "So’zlarni va gaplarni teng va tobe bog’lash uchun xizmat qiluvchi so’zlar qanday nomlanadi.",
    options: ["bog’lovchi", "ko’makchi", "yuklama", "olmosh"],
    correctAnswer: "bog’lovchi"
  },
  {
    question: "Qaysi javobda sof ko’makchilar berilgan.",
    options: ["ost, ust, yon", "bo’ylab, qarab, atab", "kabi, uzra, tufayli", "avval, keyin, so’ng"],
    correctAnswer: "avval, keyin, so’ng"
  },
  {
    question: "Samoning zangorisimon sahnida to’lishmagan qandaydir beshakl oy xira, rangsiz yaltiraydi. Gapda qo’llangan yasama so’zlar vazifasini toping. 1) aniqlovchi   2) hol   3) to’ldiruvchi   4) kesim",
    options: ["2,3,4", "1,2,4", "1,2,3", "1,3,4"],
    correctAnswer: "1,3,4"
  },
  {
    question: "Harakat nomi bilan ifodalangan ega qaysi qatorda berilgan?",
    options: ["Oyni etak bilan yopib bo’lmaydi.", "Ilmli ming yashar, ilmsiz bir yashar", "A’lo o’qish – asosiy maqsadim.", "Ko’chat ekish  oyligi baxorda o’tkaziladi."],
    correctAnswer: "A’lo o’qish – asosiy maqsadim."
  },
  {
    question: "---t--- va ---h--- tovushlari qaysi xususiyatlariga ko‘ra bir guruhga mansub bo‘ladi.",
    options: ["portlovchi yoki sirg‘aluvchiligiga ko‘ra", "jarangli va jarangsizligiga ko‘ra", "lab yoki tish undoshlariga oidligiga ko‘ra", "tilning qayerida paydo bo‘lishiga ko‘ra"],
    correctAnswer: "jarangli va jarangsizligiga ko‘ra"
  },
  {
    question: "Birin-ketin sodir bo’ladigan ish-harakatlarni bildiruvchi, biror narsaning tavsifini  beruvchi qo’shma gaplar yozuvda  …  bilan ajratiladi.",
    options: ["Nuqtali vergul", "Tire", "Ikki  nuqta", "Vergul"],
    correctAnswer: "Vergul"
  },
  {
    question: "Har ikki qismi ot turkumiga mansub so’zlar bilan ifodalangan bitishuvli so’z birikmasi berilgan javobni aniqlang.",
    options: ["kimyoviy jarayon", "nordon anor", "quyosh nuri", "tilla soat"],
    correctAnswer: "tilla soat"
  },
  {
    question: "Qaysi gapda asosida fonetik o’zgarish sodir bo’lgan yasama fe’l(lar) qo’llangan.",
    options: ["Yuragim hayajondan gupullab ura boshladi.", "Ichkarida chaqaloq yig’ladi, beshikning g’ichirlagani ishitildi.", "Usta temirni cho’g’ga solib bolg’alaydi, cho’zadi, yassilaydi, yana olov", "Gapirganda ovozi xuddi ichidan chiqqanday guldurab, jaranglab eshitiladi."],
    correctAnswer: "Ichkarida chaqaloq yig’ladi, beshikning g’ichirlagani ishitildi."
  },
  {
    question: "Mashina uchun ehtiyot qismlar birikmasidagi hokim so’zni aniqlang.",
    options: ["mashina uchun", "qismlar", "ehtiyot qismlar", "ehtiyot"],
    correctAnswer: "ehtiyot qismlar"
  },
  {
    question: "Baqqol amaki pakana, yuzi katta, peshonasi keng, soqoli siyrak, burni puchuq, iyagi kalta odam edi. Mazkur gapning necha o’rnida sifat qo’llangan.",
    options: ["6 ta", "4 ta", "3 ta", "5 ta"],
    correctAnswer: "6 ta"
  },
  {
    question: "Jonivorlarni chaqirish va haydash, yurgizish va to’xtatish uchun qo’llanadigan so’zlar qanday nomlanadi.",
    options: ["taqlid so’zlar", "yuklamalar", "modal so’zlar", "undov so’zlar"],
    correctAnswer: "undov so’zlar"
  },
  {
    question: "Qaysi qatorda boshqaruv munosabatli fe’lli so’z birikmasi bor?",
    options: ["qiyinchilikni yenggan, kitobni o’qigan", "tezda gapirmoq, dehqonchasiga ishlamoq", "maqtanganning uyiga, kerilganning to’yiga", "oqar suv, qizargan olma"],
    correctAnswer: "tezda gapirmoq, dehqonchasiga ishlamoq"
  },
  {
    question: "O’timli fe’llar berilgan javobni toping.",
    options: ["kulmoq, yig’lamoq", "o’qimoq, yozmoq", "o’tirmoq, turmoq", "yurmoq, yugurmoq"],
    correctAnswer: "o’qimoq, yozmoq"
  },
  {
    question: "Qo’shma gap qismlarini bog’lovchi vositalar to’liq ko’rsatilgan qatorni belgilang.",
    options: ["Teng  bog’lovchilar,  ergashtiruvchi bog’lovchilar", "Nisbiy so’zlar, oxang", "Teng bog’lovchilar, ergashtiruvchi bog’lovchilar, nisbiy so’zlar, bog’lovchi yuklamalar, ohang.", "Bog’lovchi yuklamalar"],
    correctAnswer: "Teng bog’lovchilar, ergashtiruvchi bog’lovchilar, nisbiy so’zlar, bog’lovchi yuklamalar, ohang."
  },
  {
    question: "Qaysi gapda ravish qo’llanmagan.",
    options: ["Orqasiga qarasa, uzoqdan bir ho’kiz uni to’xtovsiz chaqirib kelyapti.", "Ikki oshna kechki salqin bilan piyoda yo’lga tushishdi.", "Keksa kishilar katta hayotiy tajribaga ega bo’ladilar.", "Abdishukur bu yerdan tezda chiqib ketish payiga tushdi."],
    correctAnswer: "Keksa kishilar katta hayotiy tajribaga ega bo’ladilar."
  },
  {
    question: "Faqat ergashtiruvchi bog’lovchilardan iborat  qatorni aniqlang.",
    options: ["–mi, -yu, -ku, -da", "sari, -dek, -gacha, toki", "–kim, agar, chunki, basharti, shuning uchun", "shuning uchun, va, lekin"],
    correctAnswer: "–kim, agar, chunki, basharti, shuning uchun"
  },
  {
    question: "So’zlovchi, tinglovchi va o’zgaga ishora qiladigan olmosh turini toping.",
    options: ["so’roq", "ko’rsatish", "belgilash", "kishilik"],
    correctAnswer: "kishilik"
  },
  {
    question: "Qaysi qatorda berilgan so’z birikmalarini gapga aylantirish mumkin?",
    options: ["qiziqarli mashg’ulot, oydin kecha, maqola o’qimoq", "qattiq sovuq, shirin qovun, chiroyli gul", "samarali ishlamoq, ko’chat o’tqazish, barqaror tinchlik", "berilgan topshiriq, o’qishli asar, g’azal yodlamoq"],
    correctAnswer: "qattiq sovuq, shirin qovun, chiroyli gul"
  },
  {
    question: "Osmon go’zal oyi, quyoshi bilan, Inson go’zal mardlik, bardoshi bilan. Fazilati, odobi, xulqi bilan, Chin xislati – noyob qalb mulki bilan. Ushbu gapda nechta ot so’z turkumiga mansub so’zlar mavju=",
    options: ["11 ta", "12 ta", "14 ta", "13 ta"],
    correctAnswer: "12 ta"
  },
  {
    question: "Qaysi so‘z tarkibida portlovchi undosh mavju=",
    options: ["foizsiz", "sababsiz", "yuzsiz", "suvsiz"],
    correctAnswer: "sababsiz"
  },
  {
    question: "Zidlov bog’lovchili  gap  berilgan qatorni aniqlang.",
    options: ["G’ildiraklar ovozsiz shirillaydi va chang ko’tariladi.", "O’ktam mevalarni saralaydi, xidlaydi, biroq egisi kelmaydi.", "Goh Kimsan akamga  ko’z  solaman, goh oyimga  qarayman. =", "Nazarimda, u negadir  jilmayayotganga  o’xshaydi."],
    correctAnswer: "O’ktam mevalarni saralaydi, xidlaydi, biroq egisi kelmaydi."
  },
  {
    question: "Qaysi gapda nisbiy sifat qo’llangan. + =  =",
    options: ["Uning jussasi kichkina bo’lsa ham, yuzlari jiddiy, boqishlari o’tkir, ovozi esa jarangdor", "U oltmishlarga borib qolgan bo’lsa ham, yoshlardek ikki yuzi qip-qizil, serg’ayrat va tavakkalc,,,,", "Temur yuksak insoniylikka ega bo’l", "Hovlimizga ko’cha eshikdan kirishda kichkina, g’ishtin uycha bor."],
    correctAnswer: "Hovlimizga ko’cha eshikdan kirishda kichkina, g’ishtin uycha bor."
  },
  {
    question: "Bo’lishsizlik olmoshlari haqida aytilgan qaysi fikr to’g’ri emas.",
    options: ["Bo’lishsizlik olmoshlari ko’plik qo’shimchasi bilan qo’llanmaydi.", "Hech so’zini bir, narsa, vaqt, jon, kishi, kimsa, banda kabi so’zlar bilan qo’llash natijasida .....", "So’roq olmoshlari oldidan hech so’zining qo’llanishi natijasida bo’lishsizlik olmoshlari hosil...", "Bo’lishsizlik olmoshlari qatnashgan gapning kesimi tasdiq shaklida bo’ladi."],
    correctAnswer: "Bo’lishsizlik olmoshlari qatnashgan gapning kesimi tasdiq shaklida bo’ladi."
  },
  {
    question: "Qaysi jumlada gap urg‘usi ---muzeyga--- so‘ziga tushgan.",
    options: ["O‘qituvchimiz bizni muzeyga dam olish kuni olib boradi.", "Muzeyga bizni dam olish kuni o‘qituvchimiz olib boradi.", "Bizni dam olish kuni muzeyga o‘qituvchimiz olib boradi.", "Dam olish kuni o‘qituvchimiz bizni muzeyga olib boradi."],
    correctAnswer: "Dam olish kuni o‘qituvchimiz bizni muzeyga olib boradi."
  },
  {
    question: "Ravish yasovchi shakldosh(omonim) qo’shimchalar berilgan javobni aniqlang.",
    options: ["–ona, -siga", "–lab, -larcha", "chasiga, -layin", "–lay, -ligicha"],
    correctAnswer: "–lab, -larcha"
  },
  {
    question: "O’rin ravishlari qayd etilgan javobni belgilang.",
    options: ["ichra, uzra, ora", "ichki, tashqi, sirtqi", "ko’cha, bog’, guzar", "ichkari, tashqari, olg’a"],
    correctAnswer: "ichkari, tashqari, olg’a"
  },
  {
    question: "Ma’lumki, odatdagi tartib bo’yicha so’zning ma’noli qismlari asos+so’z yasovchi+lug’aviy shakl yasovchi+sintaktik shakl yasovchi shaklida o’rinlashadi. Qaysi javobda morfemalari ushbu tartib asosida joylashgan so’z berilgan.",
    options: ["hamkasblarimga", "isitmalamoq", "isitkichlarni", "anglamadi"],
    correctAnswer: "anglamadi"
  },
  {
    question: "Nisbiy so’zli gapni aniqlang.",
    options: ["Astrobod xavosi qiziq: gox yomg’ir yogadi, gox quyosh chiqadi", "Nima  eksang, shuni  o’rasan", "Intizom  buzildimi, ishda  unum bo’lmaydi.", "Farzand  guldir, ona bir bo’ston"],
    correctAnswer: "Nima  eksang, shuni  o’rasan"
  },
  {
    question: "To’pdan ajratilgan shaxs, narsa, belgi kabilarni bildirgan olmoshlar qanday ataladi.",
    options: ["belgilash olmoshlari", "bo’lishsizlik olmoshlari", "ko’rsatish olmoshlari", "o’zlik olmoshi"],
    correctAnswer: "belgilash olmoshlari"
  },
  {
    question: "Qaysi gapda 2 ta fe’lli, 1 ta otli so’z birikmasi qatnashgan?",
    options: ["Zargarov sahrodagi ishlarning miqyosini yaxshi tasvirlab berdi", "Tog’ qishloqlaridan birini kuchli sel bosibdi", "Hasan tezda  hunarmandchilik sirlarini o’rganib oldi", "Humo qushi odamlarga baxt keltirar ekan"],
    correctAnswer: "Hasan tezda  hunarmandchilik sirlarini o’rganib oldi"
  },
  {
    question: "Og‘zaki nutqda qaysi so‘z tarkibidagi portlovchi tovush ba’zan sirg‘aluvchi tovush tarzida talaffuz qilinadi.",
    options: ["boribdi", "maktab", "xohish", "taqsim"],
    correctAnswer: "taqsim"
  },
  {
    question: "Jarangsiz undoshlar ishtirok etmagan yasama so‘zni toping.",
    options: ["gulsiz", "bejirim", "yolg‘ondakam", "lolazor"],
    correctAnswer: "lolazor"
  },
  {
    question: "Gumon, ishonch, quvonch, tasdiq kabi ma’nolar qanday so’zlar orqali ifodalanadi.",
    options: ["modal so’zlar", "ko’makchi", "bog’lovchi", "yuklama"],
    correctAnswer: "modal so’zlar"
  },
  {
    question: "Teng bog’lovchilar berilgan qatorni toping.",
    options: ["Va, ham, ammo, lekin.", "Ammo, biroq, balki, agar", "yoki, zeroki", "Sababli, natijada, va, lekin."],
    correctAnswer: "Va, ham, ammo, lekin."
  },
  {
    question: "Ega tobe gapli qo’shma gapni toping.",
    options: ["Kimki bardosh bersa, kurashsa, u baxtga etadi.", "Hali kamchiliklarimiz ko’p, bundan ko’z yumib bo’lmaydi.", "Qachon so’rasangiz,  darrov javob beradi.", "Yutug’imiz shundaki, xar bir ishni o’z vaqtida bajardik."],
    correctAnswer: "Kimki bardosh bersa, kurashsa, u baxtga etadi."
  },
  {
    question: "Aniqlovchili   so’z birikmasini toping.",
    options: ["Uchta uquvchi, tunuka tom, istiqlol odimlari, ukasini ko’rish.", "Uyga qaytmoq, qishloqda yashamoq.", "Kitobni o’qimoq, ukasiga bermoq.", "Huquqiy  bilim, oltin soat, katta bino"],
    correctAnswer: "Huquqiy  bilim, oltin soat, katta bino"
  },
  {
    question: "–zor, -loq, -goh kabilar qanday qo’shimchalar sanaladi.",
    options: ["o’rin-joy oti yasovchi", "faoliyat-jarayon oti yasovchi", "narsa oti yasovchi", "shaxs oti yasovchi"],
    correctAnswer: "o’rin-joy oti yasovchi"
  },
  {
    question: "Berilgan gapda tushirilgan tinish belgilarni qo’ying.   Faqat bitta iltimos bir bayt o’qiyman shuni yaxshilab eshiting.",
    options: ["Nuqtali vergul", "Ikki nuqta", "Ikki nuqta va vergul", "Tire"],
    correctAnswer: "Ikki nuqta"
  },
  {
    question: "Sen yig’layver, go’zal bo’lasan, Dard chekaver husning ortadi. Senga yarashmaydi tabassum, Qiyofangga og’ir botadi. Ushbu gapda ot so’z turkumiga mansub nechta so’z qatnashgan.",
    options: ["3 ta", "5 ta", "4 ta", "6 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Tutuq belgisi qaysi qatorda unlining undoshdan ajratib talaffuz etilishini talab qiladi.",
    options: ["a’zo", "san’at", "ma’no", "ra’no"],
    correctAnswer: "san’at"
  },
  {
    question: "---ayir--- so‘ziga quyidagi qaysi qo‘shimchalar qo‘shilsa tovush tushishi vujudga keladi.",
    options: ["2,3,4,5", "2,4,5", "1,2,4,5", "1,2,4"],
    correctAnswer: "1,2,4,5"
  },
  {
    question: "Qaysi javobda tub so’z berilgan.",
    options: ["tulki", "ko’chki", "tepki", "turtki"],
    correctAnswer: "tulki"
  },
  {
    question: "Kesim tobe gapli qo’shma gapni toping.",
    options: ["Qachon so’rasangiz, darrov javob beradi.", "Kim testni bir daqiqada  echsa,  5 ball oladi.", "Eshitdimki, kecha kelibsiz.", "Yaxshi  odatingiz shuki, barvaqt turasiz."],
    correctAnswer: "Yaxshi  odatingiz shuki, barvaqt turasiz."
  },
  {
    question: "Qaysi nisbat qo’shimchalari bir fe’lga birin-ketin bir necha marotaba qo’shilishi mumkin.",
    options: ["orttirma nisbat", "birgalik nisbat", "majhul nisbat", "o’zlik nisbat"],
    correctAnswer: "orttirma nisbat"
  },
  {
    question: "Qaysi gapda otlashgan sifat(lar) qo’llanmagan.",
    options: ["Yaxshidan bog’ qoladi, yomondan – dog’.", "Ilg’orlarga mukofot topshirildi.", "Yoshlar olovga yaqinroq, keksalar esa uzoqroq o’tirishdi", "Sinfimizda a’lochi o’quvchilar ko’p."],
    correctAnswer: "Sinfimizda a’lochi o’quvchilar ko’p."
  },
  {
    question: "Qaysi fe’l fe’lning barcha nisbat shakllarida ham qo’llana oladi.",
    options: ["so’ramoq", "yodlamoq", "o’qimoq", "kiymoq"],
    correctAnswer: "kiymoq"
  },
  {
    question: "Teng bog’lovchilarga nimalar kiradi?",
    options: ["Biriktiruv, zidlov, ayiruv bog’lovchilari.", "Nisbiy so’zlar", "Ergashtiruv boglovchilari", "Bog’lovchi yuklamalar"],
    correctAnswer: "Biriktiruv, zidlov, ayiruv bog’lovchilari."
  },
  {
    question: "Maqsad tobe  gapli qo’shma gapni toping.",
    options: ["Sinfimizda xamma axil, inoq.", "Baxtim borki, ko’zimga har narsa go’zal", "Ukam  o’qisin  deb, «Oygul bilan Baxtiyor» kitobchasini oldim.", "O’rtoqlarim kelishdi deb, ko’chaga chiqdim."],
    correctAnswer: "Ukam  o’qisin  deb, «Oygul bilan Baxtiyor» kitobchasini oldim."
  },
  {
    question: "Qaysi gapda butun miqdorning qismini ifodalovchi son qo’llangan. 1) Bolalar eshaklarga yem berib, o’zlari ham oz-ozdan yem yeb olishguncha yarim soatcha vaqt o’tdi.   2) O’zbekiston Respublikasi maydonining qariyb beshdan to’rt qismi tekisliklarda....",
    options: ["1,3,4", "1,2,3", "1,2,4", "1,2,3,4"],
    correctAnswer: "1,2,3,4"
  },
  {
    question: "Qaysi gapda balki so’zi bog’lovchi vazifasida qo’llanmagan.",
    options: ["Mevani gullata bilishgina emas, balki undan mo’l va shirin hosil yetkaza bilish san’atdir.", "Taraqqiyot tasodif emas, balki zaruratdir.", "nafaqat kattalarga, balki kichiklarga ham shunday muomalada bo’lar edi.", "Hayronman, balki, siz haqdirsiz."],
    correctAnswer: "Hayronman, balki, siz haqdirsiz."
  },
  {
    question: "Qo’shma gapni aniqlang.",
    options: ["Botirjon xam, Xakimjon xam  a’lochi", "Sinf raxbarimiz qizlarga ham, yigitlarga ham ishonardi.", "Azimboy  xalqning sabr-kosasini to’ldiradigan zulm o’tkazdi.", "Azimboy shunday zulm o’tkazdiki, oqibatda xalqning sabr-kosasi to’ldi."],
    correctAnswer: "Azimboy shunday zulm o’tkazdiki, oqibatda xalqning sabr-kosasi to’ldi."
  },
  {
    question: "Yonma-yon kelgan tovushlarning o‘rin almashishi tilshunoslikda qanday ataladi.",
    options: ["assimilatsiya", "tovush almashishi", "dissimilatsiya", "metateza"],
    correctAnswer: "metateza"
  },
  {
    question: "Qaysi gapda ikki usulda yasalgan ikki yasama sifat qo’llangan.",
    options: ["Mehnatsevar, zahmatkash insonlar odamlarning ko’rkidir.", "Sofdil va jonkuyar odamlar bilan bu dunyo oboddir.", "Nodon, kaltafahm odamdan yaxshi gap chiqmaydi.", "Oldimizda mevali va mevasiz daraxtlari ko’p bo’lgan o’rmon."],
    correctAnswer: "Mehnatsevar, zahmatkash insonlar odamlarning ko’rkidir."
  },
  {
    question: "Ochiq bo‘g‘indan birida faqat til undoshi berilgan so‘zni toping.",
    options: ["bahona", "mamnun", "vafodor", "faqat"],
    correctAnswer: "bahona"
  },
  {
    question: "Qaysi gapda olmoq fe’li qo’shma fe’l tarkibida qo’llangan.",
    options: ["Kasalligi tufayli o’n yildan beri ukol olib kelmoqd", "Shoikrom ukasidan xabar oldi.", "Kecha Sharifadan xat oldik.", "Ma’ruf toshni o’n marta ko’tara oldi."],
    correctAnswer: "Kasalligi tufayli o’n yildan beri ukol olib kelmoqd"
  },
  {
    question: "Portlovchi undoshlar yonma-yon kelgan so‘zni toping.",
    options: ["hamfikr", "qing‘ir", "iqtisod", "nashriyot"],
    correctAnswer: "iqtisod"
  },
  {
    question: "Do’mbirachi qadimiy qozoq hayotidan dostonlar kuylamoqda= Ushbu gapda nechta so’z yasovchi qo’shimcha qo’llangan.",
    options: ["1 ta", "2 ta", "3 ta", "4 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "O’xshatish, inkor, ayiruv, kuchaytirish kabi ma’nolar qanday so’zlar orqali ifodalanadi.",
    options: ["bog’lovchi", "modal so’zlar", "ko’makchi", "yuklama"],
    correctAnswer: "yuklama"
  },
  {
    question: "Faqat jarangsiz undoshlar qatnashgan so‘zlar qatorini toping.",
    options: ["daromad, jamoat, hushyor", "muhabbat, vafo, sadoqat", "taxta, soat, sukut, toqat", "tosh, shikoyat, kitob, mulk"],
    correctAnswer: "taxta, soat, sukut, toqat"
  },
  {
    question: "Metateza hodisasi qaysi qatordagi so‘zda kuzatiladi. + = =",
    options: ["tuzsiz-tussiz", "yurakka-yurakga", "tuproq-turpoq", "zarar-zaral"],
    correctAnswer: "tuproq-turpoq"
  },
  {
    question: "Qaysi javobda ot va sifat yasovchi shakldosh(omonim) qo’shimchalar juftligi berilmagan.",
    options: ["ko’rik–chirik", "qalamdon–qadrdon", "ekin–erkin", "aravakash–mehnatkash"],
    correctAnswer: "aravakash–mehnatkash"
  },
  {
    question: "Qanday fe’llar holat fe’llari sanaladi. 1) shaxs va narsalarning jismoniy faoliyati natijasida yuz bergan harakatni ifodalovchi fe’llar;  2) shaxslarning ichki kechinmalarini ifodalovchi fe’llar; 3) narsalarning bir holatdan ikkinchi holat....",
    options: ["1,3", "2,3", "1,2,3", "1,2"],
    correctAnswer: "2,3"
  },
  {
    question: "Urg‘u ma’no farqlash vazifasini bajargan so‘zlarni belgilang.    1)~hozir; 2)~qurilma; 3)~yo‘llar; 4)~ko‘chirma; 5)~yangi",
    options: ["1, 2, 3, 4, 5", "1, 3, 4, 5", "1, 3, 4", "2, 4"],
    correctAnswer: "1, 2, 3, 4, 5"
  },
  {
    question: "Bajaruvchining o’z ustida amalga oshadigan harakat-holatini ifodalaydigan fe’l nisbati qanday ataladi.",
    options: ["o’zlik nisbat", "birgalik nisbat", "majhul nisbat", "aniq nisbat"],
    correctAnswer: "o’zlik nisbat"
  },
  {
    question: "Qaysi javobda tovush o‘zgarishlari yuz bergan?    1.~ulug‘; 2.~taroq; 3.~tirnoq; 4.~bilak; 5.~yurak; 6.~buyrak",
    options: ["4, 3, 6", "1, 2, 4", "2, 3, 5", "2, 3,"],
    correctAnswer: "2, 3,"
  },
  {
    question: "Qaysi so‘zdagi til oldi undoshi og‘zaki nutqda boshqa til oldi undoshi sifatida talaffuz qilinadi.",
    options: ["to‘qson", "uchta", "tubsiz", "tanob"],
    correctAnswer: "uchta"
  },
  {
    question: "O’lchov so’z(numerativ)lar haqida bildirilgan qaysi fikr to’g’ri emas.",
    options: ["O’zidan oldingi sanoq son bilan bitta so’roqqa javob bo’lsa-da, bitta sintaktik vazifa bajarmaydi.", "Ayrim o’lchov so’zlar alohida olinganda narsa(predmet) ma", "Otning va fe’lning o’lchovini ifodalaydi.", "O’lchov so’zlar sanoq son bilan o’lchanayotgan narsaning orasida qo’llanadi."],
    correctAnswer: "Otning va fe’lning o’lchovini ifodalaydi."
  },
  {
    question: "Qaysi javobda so‘z ko‘chirish qoidasi to‘g‘ri ko‘rsatilmagan.",
    options: ["tran-sport", "mat-ba-a", "mu-do-faa", "si-ngil"],
    correctAnswer: "mat-ba-a"
  },
  {
    question: "Qaysi gapda son otlashmagan.",
    options: ["Ikkala jamoa ham musobaqaga jiddiy tayyorgarlik ko’rgan ekan.", "Ikkinchisi ham uyg’onib ketdi, shekilli, qo’shilishib yig’lashga tushdi.", "Shunday qilib, to’rtovlari ham piyoda yo’lga chiqishibdi.", "Oltovlon ola bo’lsa, og’zidagin oldirar."],
    correctAnswer: "Ikkala jamoa ham musobaqaga jiddiy tayyorgarlik ko’rgan ekan."
  },
  {
    question: "Bir turdagi shaxs va narsalarning umumiy otini yoki ulardan birining nomini ifodalashiga ko’ra otlar qanday turlarga bo’linadi.",
    options: ["sanaladigan va sanalmaydigan otlar", "yakka va to’da otlar", "atoqli va turdosh otlar", "aniq va mavhum otlar"],
    correctAnswer: "atoqli va turdosh otlar"
  },
  {
    question: "Qaysi qatordagi  gapda ega olmosh bilan ifodalangan?",
    options: ["Iste’dodli adib ko’p nasriy asarlar yozdi.", "Undan yoqimli va shirin xid kelardi.", "U biz bilan ketishi lozim", "Ularning munozarasi yangi buyruq kelishi bilan yakunlandi."],
    correctAnswer: "U biz bilan ketishi lozim"
  },
  {
    question: "O’zbek tili  qaysi til oilasiga mansub?",
    options: ["Oltoy tillar oilasi", "Xind – evropa tillari oilasi.", "Som-xom  tillar oilasi", "Fin – ugor tillar oilasi"],
    correctAnswer: "Oltoy tillar oilasi"
  },
  {
    question: "Qaysi kelishik shaklidagi so’zlar to’ldiruvchi vazifasida qo’llanadi.",
    options: ["jo’nalish", "tushum", "qaratqich", "o’rin-payt"],
    correctAnswer: "tushum"
  },
  {
    question: "Qaysi javobda tarkibi asos+ot yasovchi+ot yasovchi shaklida bo’lgan yasama ot berilgan.",
    options: ["suvoqchilik", "temirchilik", "terimchilik", "dehqonchilik"],
    correctAnswer: "temirchilik"
  },
  {
    question: "Morfem tarkibi asos + so’z yasovchi + lug’aviy shakl yasovchi + sintaktik shakl yasovchi qolipidagi so’zni toping.",
    options: ["ipakchilikdan", "sizlamoq", "tokzorlarda", "turmushimizni"],
    correctAnswer: "tokzorlarda"
  },
  {
    question: "Qaysi gapda olmoshning ma’nosiga ko’ra uch turi qo’llangan.",
    options: ["Ichkaridan kimlardir chiqib, u turgan tomonga kelaverdi.", "Siz hayotda qanday insonlarga havas qilasiz.", "Qayerda bo’shliq paydo bo’lsa, uni kimdir to’ldirishga harakat qiladi.    =", "Xayolchan g’udranib, o’z-o’zini koyidi."],
    correctAnswer: "Qayerda bo’shliq paydo bo’lsa, uni kimdir to’ldirishga harakat qiladi.    ="
  },
  {
    question: "~qiyna; 2.~tuzum; 3.~yuvundi; 4.~uyum; 5.~unum; 6.~bo‘yoq",
    options: ["1, 2, 3, 4, 5, 6", "1, 4, 5, 6", "1, 2, 4, 6", "2, 4, 6"],
    correctAnswer: "1, 4, 5, 6"
  },
  {
    question: "Berilgan jarangli  undoshlardan qaysilari sirg‘aluvchilarga mansu=",
    options: ["r, z", "f, s", "j, b", "k, q"],
    correctAnswer: "r, z"
  },
  {
    question: "---f--- undoshi til undoshlarining qaysi turiga mansu=",
    options: ["til oldi undosh", "lab-tish undoshi", "chuqur til orqa undoshi", "sayoz til oldi undoshi"],
    correctAnswer: "lab-tish undoshi"
  },
  {
    question: "Yasama mavhum ot qatnashgan gapni toping.",
    options: ["Toshkentlik mehmonga Registon juda yoqdi.", "Hasad – yurakning zanglashi.", "Aziz shaharda qib qaytdi.", "Kezib-kezib topganlarim sog’inch bo’ldi."],
    correctAnswer: "Kezib-kezib topganlarim sog’inch bo’ldi."
  },
  {
    question: "Qaysi qo’shimcha yordamida umumlashtirish, kuchaytirish, hurmat kabi uslubiy ma’nolarni ifodalash mumkin.",
    options: ["–lar", "–cha", "–gina", "–xon"],
    correctAnswer: "–lar"
  },
  {
    question: "Belgisiz qaratqich aniqlovchili so’z  birikmalari qaysi javobda berilgan?",
    options: ["g’ayrat bilan ishlamoq", "Shaffof suv, nafis gullar", "navbahor kezlari, oydin kechalar", "Oy shu’lasi, institut binosi"],
    correctAnswer: "Oy shu’lasi, institut binosi"
  },
  {
    question: "Moslashuvli so’z birikmasi berilgan javobni toping.",
    options: ["tarix darsi", "rasm daftari", "o’rik sharbati", "kitob do’koni"],
    correctAnswer: "o’rik sharbati"
  },
  {
    question: "Og‘zaki nutqning tovush tizimini yozma nutqda qanday berilishini o‘rganuvchi tilshunoslik bo‘limi qanday nomlanadi.",
    options: ["orfografiya", "grafika", "fonetika", "orfoepiya"],
    correctAnswer: "orfografiya"
  },
  {
    question: "Quyida berilgan yasama fe’llarning nechtasi tarkibida tovush o’zgarishi.. qona,ata, sana, yasha, qiyna, o’yna, o’rna, kengay, pasay, susay, ulg’ay, sarg’ay, gulla, yig’la, angla, egalla, yashar, ko’kar, oqar, qizar, uvullla, akilla, likilla, shovulla",
    options: ["19 ta", "15 ta", "13 ta", "17 ta"],
    correctAnswer: "15 ta"
  },
  {
    question: "Uyushiq bo’lakli  gap berilgan qatorni  aniqlang.",
    options: ["Saida goh afsuslanib, goh kuyunib, goh kulib gapirib berdi.", "Birni birov beradi, ko’pni mexnat.", "Butun zamin larzaga keldi.", "Tashqaridan allakimning ovozi eshitildi."],
    correctAnswer: "Saida goh afsuslanib, goh kuyunib, goh kulib gapirib berdi."
  },
  {
    question: "Tobe gap tarkibida keladigan bog’lovchilar qaysi qatorda?",
    options: ["Agar, agarda, chunki, go’yo, bamisoli, zero, deb, toki, zotan.", "Shuning uchun, shu bois, oqibatda, -ki, -kim.", "Agar, chunki, shuning uchun.", "Shu bois, natijada,  chunki, agar, de="],
    correctAnswer: "Agar, agarda, chunki, go’yo, bamisoli, zero, deb, toki, zotan."
  },
  {
    question: "Qaysi javobda alohida olingan so’zlar berilgan.",
    options: ["hamda, uchun, nahot", "shoyad, obbo, gumbur    =", "men, shu, yalpi", "daftar, eski, beshta"],
    correctAnswer: "shoyad, obbo, gumbur    ="
  },
  {
    question: "So‘z tarkibidagi tovushlarning ajratib yoki cho‘ziqroq talaffuz qilinishini ko‘rsatuvchi ishora qanday ataladi.",
    options: ["so‘z urg‘usi", "tutuq belgisi", "vergul", "urg‘u"],
    correctAnswer: "tutuq belgisi"
  },
  {
    question: "Teng bog’lovchili qo’shma gapni aniqlang.",
    options: ["Mingboshi uchun Miryoqubdan boshqa  chin ko’ngildan  kuyadigan odam  yo’qligini u yaxshi bilardi.", "Ma’rifatli jamiyatda sog’lom aql-idrok, sog’lom fikr va adolat  ustivorlik qiladi.", "Azimboy shunday zulm  o’tkazdiki, xalqning sabr kosasi to’ldi.", "G’ildiraklar ovozsiz shirillaydi va chang ko’tariladi."],
    correctAnswer: "G’ildiraklar ovozsiz shirillaydi va chang ko’tariladi."
  },
  {
    question: "Qaysi jarangli undosh o‘z jarangsiz jufti bilan birga sirg‘aluvchi tovushlarga mansub bo‘ladi.",
    options: ["b", "z", "d", "k"],
    correctAnswer: "z"
  },
  {
    question: "Tushirib qoldirilgan bog’lovchini nuqtalar o’rniga qo’ying:     … shu ko’rganlarini hikoya qilib bersa, ular ishonmasliklari mumkin.",
    options: ["Garchi.", "Modomiki", "Agar", "Balki"],
    correctAnswer: "Agar"
  },
  {
    question: "Qaysi gapda fe’lning otga xoslangan shakli qo’llangan.",
    options: ["Shu payt boshimiz ustida chaqmoq chaqdi.", "Chiroyli yozishni o’rgan.", "Singilcham quymoqni juda yaxshi ko’radi.", "Bolalar qorbo’ron o’ynashmoqd=    ="],
    correctAnswer: "Chiroyli yozishni o’rgan."
  },
  {
    question: "Muzaffarning lo’ppi yuzidagi achinish alomati xushnud tabassum bilan almashdi. Ushbu gapda otli so’z birikmalari soni nechta?",
    options: ["6 ta", "5 ta", "7 ta", "4 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Qaysi gapda buyruq-xitobni ifodalovchi undov so’z qo’llangan.",
    options: ["Iya, bularni nima qilasan?", "Qo’y, yig’lama ey baxshi.", "Men yetim o’sganman, oh u yetimlik.", "O! Ho’kiz yo’q, og’il ko’cha tomondan teshilgan."],
    correctAnswer: "Qo’y, yig’lama ey baxshi."
  },
  {
    question: "Kelishik qo’shimchalari yordamida birikkan so’z birikmalari qaysi javobda berilgan?",
    options: ["Moviy osmon, Zuxro yulduz", "a’lochi o’quvchilar, kitobsevarlar uyushmasi.", "Tog’ cho’qqisi, kitob o’qimoq", "yoqimli  kuy, dala yumushlari"],
    correctAnswer: "Tog’ cho’qqisi, kitob o’qimoq"
  },
  {
    question: "---b--- va ---k--- tovushlari qaysi xususiyatlariga ko‘ra bir guruhga mansub bo‘ladi.",
    options: ["lab yoki tish undoshlariga oidligiga ko‘ra", "portlovchi yoki sirg‘aluvchiligiga ko‘ra", "jarangli yoki jarangsizligiga ko‘ra", "tilning qayerida paydo bo‘lishiga ko‘ra"],
    correctAnswer: "portlovchi yoki sirg‘aluvchiligiga ko‘ra"
  },
  {
    question: "Qanday so’zlar gapdagi boshqa so’zlardan vergul bilan ajratib yoziladi.",
    options: ["bog’lovchi", "yuklama     =", "modal so’zlar", "taqlid so’zlar"],
    correctAnswer: "modal so’zlar"
  },
  {
    question: "Qaysi gapda so’zlarni va gaplarni bir-biriga bog’lash uchun xizmat qilmaydigan yordamchi so’z qo’llangan.",
    options: ["Yurt farovonligi uchun qayg’uradi.", "Andishali bo’l, biroq shijoatsiz bo’lm=", "O’shanda dadam ham frontda edilar.", "Bu yerda na ofat, na kulfat, na g’am."],
    correctAnswer: "O’shanda dadam ham frontda edilar."
  },
  {
    question: "Qaysi qatorda ko’makchi vositasida bog’langan boshqaruvli otli so’z birikmasi bor?",
    options: ["qunt bilan tinglamoq", "eng oliy baxt", "kitob haqida suhbat", "hafta ichida"],
    correctAnswer: "qunt bilan tinglamoq"
  },
  {
    question: "Qaysi so‘z talaffuzida jarangsiz tovush o‘zidan keyingi jarangli tovushni o‘ziga moslashtiradi.",
    options: ["ketdi", "maqsad", "o‘qibdi", "zarur"],
    correctAnswer: "ketdi"
  },
  {
    question: "Qanday olmoshlar egalik qo’shimchalari bilan turlanmaydi.",
    options: ["so’roq", "o’zlik", "bo’lishsizlik", "kishilik"],
    correctAnswer: "bo’lishsizlik"
  },
  {
    question: "So’zlarga va gaplarga qo’shimcha ma’no yuklash uchun xizmat qiluvchi yordamchilar qanday nomlanadi",
    options: ["yuklama", "bog’lovchi", "ko’makchi"],
    correctAnswer: "yuklama"
  },
  {
    question: "Urg‘usi oxirgi bo‘g‘inga tushmagan so‘zlar qatorini toping.",
    options: ["bog‘lar, olma, novcha", "qishloqcha, yigitcha, uycha", "yangicha, qishgacha, o‘zgacha", "qazilma, qotishma, burama"],
    correctAnswer: "qazilma, qotishma, burama"
  },
  {
    question: "–ov, -ala, -ovlon qo’shimchalari yordamida sonning qaysi ma’no turi hosil qilinadi.",
    options: ["chama son", "taqsim son", "jamlovchi son", "tartib son"],
    correctAnswer: "jamlovchi son"
  },
  {
    question: "Istiqlol keldi o’zligimizni angladik. Tinish belgini to’g’ri qo’ying.",
    options: ["Ikki nuqta", "Vergul", "Nuqta", "Tire"],
    correctAnswer: "Tire"
  },
  {
    question: "Olimlar haddan ziyod saodatga intilish saodatni qo’lga kiritishga to’sqinlik qilishini aytganlar. Ushbu gapda nechta so’z yasovchi qo’shimcha mavju=",
    options: ["4 ta", "3 ta", "2 ta", "1 ta"],
    correctAnswer: "3 ta"
  },
  {
    question: "Yigirmata so‘zida urg‘u qaysi bo‘g‘inga qo‘yilgan.",
    options: ["1 ga", "2 ga", "3 ga", "4 ga"],
    correctAnswer: "3 ga"
  },
  {
    question: "So’zlarga va gaplarga qo’shimcha ma’no yuklash uchun xizmat qiluvchi yordamchilar qanday nomlanadi.",
    options: ["yuklama", "modal so’z", "ko’makchi", "bog’lovchi"],
    correctAnswer: "yuklama"
  },
  {
    question: "Qo’shma gap berilgan  javobni toping.",
    options: ["Kun botib,  qorong’ulik cho’kdi", "Biz kitobni o’qib, muxokama qildik.", "Atrof yorishdi, biz yo’lga otlandik", "Men ishdan charchab keldim va miriqib dam oldim"],
    correctAnswer: "Atrof yorishdi, biz yo’lga otlandik"
  },
  {
    question: "Quyida berilgan gapda nechta so’z mavjud? Tebranib yonayotgan sham zo’r mo’jizaday hammaning diqqatini jalb qilgandi.",
    options: ["8 ta", "9 ta", "6 ta", "7 ta"],
    correctAnswer: "8 ta"
  },
  {
    question: "Qaysi gapda hol vazifasida qo’llangan holatga taqlid so’z berilgan.",
    options: ["Osmonda yombi oltinday yaraqlagan oy, yakkam-dukkam milt-milt yulduzlar uyg’oq edi.", "Dupur-dupur ot keldi, Ko’chaga qarang, kim keldi.", "Omon g’azabi oshib, dag’-dag’ qaltiray boshladi.", "To’rtta savag’ich bilan tap-tap urib, par singari qilib titibdi.    ="],
    correctAnswer: "Omon g’azabi oshib, dag’-dag’ qaltiray boshladi."
  },
  {
    question: "Qaysi javobda zid ma’noli qo’shimchalar berilmagan.",
    options: ["no-/-li", "bo-/be-", "-li/-siz", "ser-/-mand"],
    correctAnswer: "ser-/-mand"
  },
  {
    question: "Kishilik olmoshi va o’zlik olmoshi birga qo’llansa, qanday uslubiy ma’no ifodalanadi.",
    options: ["kinoya", "hurmat", "ta’kid", "inkor"],
    correctAnswer: "ta’kid"
  },
  {
    question: "Malika opaning ikkala o‘g‘li shaharda o‘qib, ulg‘ayib yana bag‘riga qaytdi.    Berilgan gap tarkibidagi necha so‘zda tovush tushishi hodisasi mavju=",
    options: ["4 so‘zda", "3 so‘zda", "2 so‘zda", "1 so‘zda"],
    correctAnswer: "4 so‘zda"
  },
  {
    question: "To’ldiruvchili so’z birikmalarini aniqlang.",
    options: ["Kitobni o’qimoq, ukasiga bermoq, onasi uchun olmoq.", "Uchta  o’quvchi, tunuka tom, istiqlol  odimlari", "Xududiy bo’lim, oltin soat, maktab bog’i.", "Uyga qaytmoq, qishloqda yashamoq."],
    correctAnswer: "Kitobni o’qimoq, ukasiga bermoq, onasi uchun olmoq."
  },
  {
    question: "Xatosi o’ziga ayon bo’lgach, gapira olmay g’uldirab javob berdi. Berilgan gapdagi yasama so’zlar miqdorini aniqlang.",
    options: ["2 ta", "4 ta", "3 ta", "5 ta"],
    correctAnswer: "4 ta"
  },
  {
    question: "Shu sevinch ikkovlariga ham kuch-g’ayrat, dadillik baxsh etgandek bo’ldi. Gapda qo’llangan yasama mavhum otlar miqdorini aniqlang.",
    options: ["1 ta", "4 ta", "3 ta", "2 ta"],
    correctAnswer: "2 ta"
  },
  {
    question: "Osmon ko’m-ko’k, havo esa toza, sof; go’yo uni dengiz shamoli supurgan, dengiz to’lqinlari yuvgan. Yuqoridagi gap turini aniqlang.",
    options: ["Bog’langan qo’shma gap", "Murakkab sodda gap", "Murakkab qo’shma gap", "Teng  bog’lovchili qo’shma gap"],
    correctAnswer: "Murakkab qo’shma gap"
  },
  {
    question: "Qaysi yasama so‘z tarkibida sirg‘aluvchi tovush mavju=",
    options: ["shoshilmoq", "ulg‘aymoq", "kechikmoq", "changimoq"],
    correctAnswer: "ulg‘aymoq"
  },
  {
    question: "Ayiruv bog’lovchi yordamida bog’langan qo’shma gaplarni toping.",
    options: ["Jaxolat  zo’r keldimi, taraqqiyot bo’lmaydi.", "Inson yaralibdiki, xamisha olamni  anglashga intiladi. =", "Inson esa olamaro olamdir.", "Ba’zan oftob xam charaqlayveradi, jala xam quyaveradi."],
    correctAnswer: "Ba’zan oftob xam charaqlayveradi, jala xam quyaveradi."
  },
  {
    question: "Qaysi gapda aniqlovchi vazifasida qo’llangan tovushga taqlid so’z berilgan.",
    options: ["Boshidagi toj yal-yal yonarmish", "Vujudini tutgan qalt-qalt titroqni bosib hazilomuz qichqirdi.", "Yetti qaroqchi yulduzi tik kelganda g’o’ng’ir-g’o’ng’ir ovozdan uyg’onib ketdim.", "Allakim ship-ship qadam bosib, ayvon labiga kelayotganday bo’lardi."],
    correctAnswer: "Yetti qaroqchi yulduzi tik kelganda g’o’ng’ir-g’o’ng’ir ovozdan uyg’onib ketdim."
  },
  {
    question: "Yam-yashil--- so‘zida nechta unli va nechta undosh tovush bor.",
    options: ["3 ta unli, 5 ta undosh", "3 ta unli, 3 ta undosh", "5 ta unli, 5 ta undosh", "4 ta unli, 4 ta undosh"],
    correctAnswer: "3 ta unli, 5 ta undosh"
  },
  {
    question: "Sonning qaysi turi chiqish kelishigi qo’shimchasi bilan qo’llanib, fikrning ahamiyatlilik darajasini ifodalaydigan modal so’z vazifasida qo’llanadi.",
    options: ["chama son", "jamlovchi son", "tartib son", "dona son"],
    correctAnswer: "tartib son"
  },
  {
    question: "Qaysi gapda kelishik qo’shimchasini qo’llash bilan bog’liq xatoga yo’l qo’yilgan.",
    options: ["Bilimdon o’zining bilimi tufayli ofatlardan omon qoladi.", "O’zining qadrini bilmagan o’zganing qadrini ne bilsin?", "Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor", "Kechasi Saidiyning hujrasiga Kozimbek bilan muxbir A’zamjon keldi."],
    correctAnswer: "Sohibqironni bunyodkorlik sohasidagi xizmatlaridan el-u yurt minnatdor"
  },
  {
    question: "Qaysi javobda ot, sifat, fe’l yasovchi shakldosh(omonim) qo’shimchalar qayd etilgan.",
    options: ["–ma, -qi, -la", "–ay, -oq, -cha", "–ar, -gi, -k", "–ik, -iq, -a"],
    correctAnswer: "–ik, -iq, -a"
  },
  {
    question: "Turli gap bo’laklari vazifasida kelish uchun xoslangan fe’l shakllari bu…",
    options: ["vazifa shakllari", "nisbat shakllari", "munosabat shakllari", "bo’lishsizlik shakllari"],
    correctAnswer: "vazifa shakllari"
  },
  {
    question: "Dangasa bahona izlaydi, chunki mehnat unga yoqmaydi. Berilgan gapning turini aniqlang.",
    options: ["Maqsad tobe  gapli qo’shma gap.", "Sabab tobe gapli qo’shma gap.", "Teng bog’lovchili qo’shma gap.", "Oxang yordamida bog’langan qo’shma gap."],
    correctAnswer: "Sabab tobe gapli qo’shma gap."
  },
  {
    question: "–imtir qo’shimchasi yordamida qaysi sifatlarning ozaytirma darajasini hosil qilish mumkin?  1) oq  2) qora  3) sariq  4) qizil  5) ko’k  6) yashil",
    options: ["1,2,5", "1,2,3,4,5", "1,3,4,5", "1,2,5,6"],
    correctAnswer: "1,2,5"
  },
  {
    question: "Shaxs, narsa, belgi, harakat kabilarni jamlab ifodalaydigan olmosh qaysi gapda qo’llangan.",
    options: ["Har kim ekkanini o’radi.", "Kim shaxmat to’garagiga qatnashadi.", "Shorahim ko’z yoshidan hech nimani ko’rmay allanimalar deb g’udrandi.", "Bog’imizda uzumning hamma xilidan bor."],
    correctAnswer: "Bog’imizda uzumning hamma xilidan bor."
  },
  {
    question: "Rotalarni zudlik bilan o‘rnidan ko‘chirish haqida og‘zaki buyruq berildi.    Berilgan gap tarkibidagi necha so‘zda tovush tushishi hodisasi mavju=",
    options: ["3 so‘zda", "1 so‘zda", "4 so‘zda", "2 so‘zda"],
    correctAnswer: "3 so‘zda"
  },
  {
    question: "Biriktiruv bog’lovchili qo’shma gapni toping.",
    options: ["Nodonlik va xurofot  xukmron bo’ldimi, jaxolat avj oladi.", "G’ildiraklar ovozsiz shirillaydi va chang  ko’tariladi.", "Gox yuradi,  gox to’xtab dam oladi.", "O’ktam xovlida  yurib ro’zg’origa razm soldi."],
    correctAnswer: "G’ildiraklar ovozsiz shirillaydi va chang  ko’tariladi."
  },
  {
    question: "Bo’gin ko’chirish qoidasi buzilmagan qatorni toping.",
    options: ["de-ngiz", "den-giz", "kong-ress", "ing-liz"],
    correctAnswer: "de-ngiz"
  },
  {
    question: "Qaysi gapda modal so’z qo’llangan.",
    options: ["To’g’ri, yo’llarda mashaqqatlar ko’p.", "Bo’ron bo’lish ehtimoli bor, qizim.", "Istamning chamasi to’g’ri chiqdi.", "Uning “ko’cha bolasi” ekanligini aftidan bilib olish qiyin emas edi."],
    correctAnswer: "To’g’ri, yo’llarda mashaqqatlar ko’p."
  },
  {
    question: "Lab undoshlari ishtirok etgan yasama so‘zni toping.",
    options: ["oshiq", "ommabop", "gulzor", "savlat"],
    correctAnswer: "ommabop"
  },
  {
    question: "Til oldi unlilar berilgan javobni toping.",
    options: ["o, a, u", "o, a", "a, e, i", "o, a, i"],
    correctAnswer: "a, e, i"
  },
  {
    question: "Berilgan qo’shma gapning turini aniqlang. Oqsoqol o’tirdi, kotib unga choy uzatdi va o’zi Xolmurod bergan qog’ozni  o’qimoqchi bo’ldi.",
    options: ["Murakkab  qo’shma gap", "Bog’langan qo’shma gap", "Teng bog’lovchili qo’shma gap", "Sodda  gap"],
    correctAnswer: "Murakkab  qo’shma gap"
  },
  {
    question: "Qaysi gapda moslashuv va boshqaruv aloqasi mavjud?",
    options: ["Biz rostgo’ylik va halollikni hamisha ulug’laymiz.", "O’zingni er bilsang,o’zgani sher bil.", "Yillar mana shu xilda osoyishta o’tar edi.", "Umidsizlik uyin buzsang, umidingga yetarsan."],
    correctAnswer: "Umidsizlik uyin buzsang, umidingga yetarsan."
  },
  {
    question: "Qaysi qatorda lab undoshlari berilgan.",
    options: ["j, k", "h, ng", "b, m", "x, g"],
    correctAnswer: "b, m"
  },
  {
    question: "Qaysi qatordagi so‘zlarning ma’nosi urg‘u yordamida farqlanadi.",
    options: ["bolada, qo‘lla, axil", "bog‘lar, ishlar, qishloqcha", "burun, gajim, uylar", "xiyla, ariya, belcha, beshala"],
    correctAnswer: "bog‘lar, ishlar, qishloqcha"
  },
  {
    question: "Qaysi javobda ravishdosh shakllari berilmagan.",
    options: ["–ib(-=, -a(-y)", "–gan, -ar", "gani, -gancha", "–gach, -guncha"],
    correctAnswer: "–gan, -ar"
  },
  {
    question: "Qaysi so‘zdagi til oldi undoshi og‘zaki nutqda lab-lab undoshi sifatida talaffuz qilinadi.",
    options: ["borib", "shanba", "taqsim", "ichdim"],
    correctAnswer: "shanba"
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







