// ===== PAROL TIZIMI =====
const AUTH_KEY = 'mahsusua_authenticated';
const VALID_CREDENTIALS = {
    username: 'Inavatsiya2025',
    password: 'test1221'
};

// ===== YANGI: SAVOLLAR TARIXINI SAQLASH KALITI =====
const QUESTION_POOL_KEY = 'quiiikkkz112mishsuzhzhzhsbsbsnsnsnndarkerbot_remaining_indices';
const STATS_KEY = 'quizmarkerbot_stats';

// ===== TEST SAVOLLARI (BU YERGA 450 TA SAVOLINGIZNI TASHLAISZ) =====
const questionsData = [
  {
    question: "Мой брат работает…",
    options: ["в университете", "на университете", "от университете", "для университете"],
    correctAnswer: "в университете"
  },
  {
    question: "Напишите, пожалуйста, … вашего общежития.",
    options: ["адрес", "дом", "время", "год"],
    correctAnswer: "адрес"
  },
  {
    question: "Мой брат живёт … Самарканде.",
    options: ["в", "на", "под", "за"],
    correctAnswer: "в"
  },
  {
    question: "Я … тебе хорошо отдохнуть.",
    options: ["желаю", "думаю", "ехать", "сказать"],
    correctAnswer: "желаю"
  },
  {
    question: "Моя мама доктор. Она работает…",
    options: ["в больнице", "в университете", "в школе", "на заводе"],
    correctAnswer: "в больнице"
  },
  {
    question: "Твой дядя сейчас … на ферме?",
    options: ["работает", "работала", "работаю", "работало"],
    correctAnswer: "работает"
  },
  {
    question: "Зимой ребята играют …",
    options: ["в снежки", "на санках", "на коньках", "на лыжах"],
    correctAnswer: "в снежки"
  },
  {
    question: "Пожалуйста, … книгу внимательно.",
    options: ["читайте", "отнесите", "положите", "не пачкайте"],
    correctAnswer: "читайте"
  },
  {
    question: "Вставьте нужное слово: Готовить домашние задания мне всегда помогает…",
    options: ["старший брат", "старшего брата", "старшему брату", "старшим братом"],
    correctAnswer: "старший брат"
  },
  {
    question: "Какой глагол необходимо поставить: Мой брат мечтает ... в университет.",
    options: ["поступить", "будет поступать", "поступил бы", "поступил"],
    correctAnswer: "поступить"
  },
  {
    question: "Какое слово можно заменить местоимением ОН?",
    options: ["кабинет", "парта", "окно", "дверь"],
    correctAnswer: "кабинет"
  },
  {
    question: "Студенты нашего факультета … на концерте в университете.",
    options: ["выступали", "поступали", "переступали", "наступали"],
    correctAnswer: "выступали"
  },
  {
    question: "Какое слово можно заменить местоимением ОНА?",
    options: ["рубашка", "порт", "окно", "вещи"],
    correctAnswer: "рубашка"
  },
  {
    question: "Какое местоимение необходимо поставить вместо точек: Мама, познакомьтесь. Это… друг Антон.",
    options: ["мой", "наши", "твоя", "она"],
    correctAnswer: "мой"
  },
  {
    question: "Это … рубашка?",
    options: ["чья?", "чьи?", "чей?", "чьё?"],
    correctAnswer: "чья?"
  },
  {
    question: "Я уже два года не … спортом.",
    options: ["занимаюсь", "играю", "делаю", "рисую"],
    correctAnswer: "занимаюсь"
  },
  {
    question: "Это чья кофта?",
    options: ["моя кофта", "мой кофта", "моё кофта", "мои кофта"],
    correctAnswer: "моя кофта"
  },
  {
    question: "Дедушка … телевизор.",
    options: ["смотрит", "читает", "говорит", "играет"],
    correctAnswer: "смотрит"
  },
  {
    question: "Как бегает Наташа?",
    options: ["быстро", "чистый", "добрый", "весёлый"],
    correctAnswer: "быстро"
  },
  {
    question: "Мы не можем вспомнить, где … этого человека.",
    options: ["видели", "смотрели", "думали", "говорили"],
    correctAnswer: "видели"
  },
  {
    question: "Диёра … в школу.",
    options: ["пришла", "пришли", "пришёл", "пришло"],
    correctAnswer: "пришла"
  },
  {
    question: "На уроке мы читали текст об истории…",
    options: ["Москвы", "Москвой", "Москва", "Москве"],
    correctAnswer: "Москвы"
  },
  {
    question: "Где висит пальто?",
    options: ["в шкафу", "на полу", "на диване", "на столе"],
    correctAnswer: "в шкафу"
  },
  {
    question: "Сапоги – это…",
    options: ["обувь", "овощи", "мебель", "фрукты"],
    correctAnswer: "обувь"
  },
  {
    question: "Местоимение – это…",
    options: ["самостоятельная часть речи", "служебная часть речи", "главный член предложения", "второстепенный член предложения"],
    correctAnswer: "самостоятельная часть речи"
  },
  {
    question: "Он поставил свою … на стоянку около магазина.",
    options: ["машину", "машина", "машиной", "машине"],
    correctAnswer: "машину"
  },
  {
    question: "Какая часть речи указывает на предмет, но не называет его?",
    options: ["Местоимение", "Имя существительное", "Имя прилагательное", "Глагол"],
    correctAnswer: "Местоимение"
  },
  {
    question: "В каком варианте даны только местоимения?",
    options: ["Я, вы, он", "И, а, но", "Нет, да, бы", "Ура, эх, ой"],
    correctAnswer: "Я, вы, он"
  },
  {
    question: "Укажите вариант с личными местоимениями.",
    options: ["Я, ты, он, она", "Это, тебе, вас", "Вот, мне, я", "Собой, тебя, ты"],
    correctAnswer: "Я, ты, он, она"
  },
  {
    question: "Как называется … станция метро?",
    options: ["эта", "этот", "этого", "это"],
    correctAnswer: "эта"
  },
  {
    question: "Найдите вариант со словами женского рода.",
    options: ["Мама, книга, парта", "Папа, дядя, сын", "Окно, море, облако", "Папа, дом, дерево"],
    correctAnswer: "Мама, книга, парта"
  },
  {
    question: "Я хочу купить … туфли.",
    options: ["эти", "этот", "это", "этого"],
    correctAnswer: "эти"
  },
  {
    question: "Сколько месяцев в году?",
    options: ["12", "11", "13", "10"],
    correctAnswer: "12"
  },
  {
    question: "Назовите главные члены предложения.",
    options: ["Подлежащее, сказуемое", "Определение, дополнение", "Определение, обстоятельство", "Дополнение, обстоятельство"],
    correctAnswer: "Подлежащее, сказуемое"
  },
  {
    question: "В каком варианте даны местоимения в единственном числе?",
    options: ["Я, ты, он, она", "Они, вы, мы", "Вы, ты, они", "Вот, они, вы"],
    correctAnswer: "Я, ты, он, она"
  },
  {
    question: "Улугбек … играет в футбол.",
    options: ["хорошо", "хороший", "хорошее", "хорошего"],
    correctAnswer: "хорошо"
  },
  {
    question: "В каком варианте даны местоимения во множественном числе?",
    options: ["Мы, вы, они, вас", "Тот, он, она, его", "Вот, ты, тебя, они", "я, ты, они"],
    correctAnswer: "Мы, вы, они, вас"
  },
  {
    question: "Найдите местоимение в предложении: Она любит слушать музыку.",
    options: ["Она", "Любит", "Слушать", "Музыку"],
    correctAnswer: "Она"
  },
  {
    question: "Пойдем в парк, сегодня очень … день.",
    options: ["хороший", "хорошая", "хорошее", "хорошие"],
    correctAnswer: "хороший"
  },
  {
    question: "Фильм начинается…",
    options: ["в семь часов", "семь часов назад", "седьмой час", "семеро"],
    correctAnswer: "в семь часов"
  },
  {
    question: "Что обозначает имя числительное?",
    options: ["Количество и счёт предметов.", "Действие предметов.", "Признак предметов.", "Отсутствие предметов."],
    correctAnswer: "Количество и счёт предметов."
  },
  {
    question: "Мой друг поступил в университет …",
    options: ["в прошлом году", "этого года", "эта год", "этим годом"],
    correctAnswer: "в прошлом году"
  },
  {
    question: "На какие вопросы отвечает имя числительное?",
    options: ["Сколько? Какой? Который?", "Кто? Что?", "Где? Куда?", "Что? Зачем?"],
    correctAnswer: "Сколько? Какой? Который?"
  },
  {
    question: "Найдите подходящее слово: Мне 22 …",
    options: ["года", "лет", "год", "годов"],
    correctAnswer: "года"
  },
  {
    question: "Укажите антоним к слову ГРУСТЬ.",
    options: ["радость", "дождь", "град", "снег"],
    correctAnswer: "радость"
  },
  {
    question: "Студенты начнут заниматься …",
    options: ["с третьего сентября", "третий сентябрь", "третья сентябрь", "третье сентябрь"],
    correctAnswer: "с третьего сентября"
  },
  {
    question: "Укажите антоним к слову ГРОМАДНЫЙ.",
    options: ["крошечный", "добрый", "весёлый", "хороший"],
    correctAnswer: "крошечный"
  },
  {
    question: "Укажите слова-антонимы.",
    options: ["большой, маленький", "великан, гигант", "бой, сражение", "жара, зной"],
    correctAnswer: "большой, маленький"
  },
  {
    question: "Найдите подходящее слово: Моему сыну 6 …",
    options: ["лет", "год", "года", "лета"],
    correctAnswer: "лет"
  },
  {
    question: "Найдите словосочетание мужского рода.",
    options: ["Один карандаш", "Одна ручка", "Одно окно", "Одни очки"],
    correctAnswer: "Один карандаш"
  },
  {
    question: "Я начну … русский язык.",
    options: ["изучать", "научить", "выучить", "отучить"],
    correctAnswer: "изучать"
  },
  {
    question: "Найдите словосочетание женского рода.",
    options: ["Две сумки", "Два друга", "Два шкафа", "Два окна"],
    correctAnswer: "Две сумки"
  },
  {
    question: "Сестра попросила меня … посуду после обеда.",
    options: ["вымыть", "мытая", "помытая", "вымою"],
    correctAnswer: "вымыть"
  },
  {
    question: "В каком варианте даны числительные мужского рода?",
    options: ["Первый, второй, третий", "Первая, вторая, третья", "Первое, второе, третье", "Первые, вторые, третьи"],
    correctAnswer: "Первый, второй, третий"
  },
  {
    question: "Найдите пословицу, где употребляется имя числительное.",
    options: ["Один в поле не воин.", "Лес рубят – щепки летят.", "Ученье – свет, а неученье – тьма.", "В здоровом теле – здоровый дух."],
    correctAnswer: "Один в поле не воин."
  },
  {
    question: "На уроке надо … только по-русски.",
    options: ["говорить", "сказать", "сказала", "скажет"],
    correctAnswer: "говорить"
  },
  {
    question: "Подберите нужное слово: Мадине исполнился 21 ...",
    options: ["год", "лет", "года", "лета"],
    correctAnswer: "год"
  },
  {
    question: "Нозиме исполнилось 26 ...",
    options: ["лет", "год", "года", "годов"],
    correctAnswer: "лет"
  },
  {
    question: "Какое местоимение пропущено в предложении: ... пишу письмо маме.",
    options: ["Я", "Ты", "Он", "Вы"],
    correctAnswer: "Я"
  },
  {
    question: "Выберите правильный ответ. В магазине «Фрукты» я покупаю…",
    options: ["яблоки", "мясо", "рис", "мебель"],
    correctAnswer: "яблоки"
  },
  {
    question: "Выберите правильный ответ. Обычно я … на остановку пешком.",
    options: ["иду", "еду", "пришёл", "ушёл"],
    correctAnswer: "иду"
  },
  {
    question: "Выберите правильный ответ. Скажите, … мы будем обедать?",
    options: ["когда", "откуда", "куда", "какой"],
    correctAnswer: "когда"
  },
  {
    question: "Выберите правильный ответ: Извините, я хочу … вопрос.",
    options: ["задать", "спросить", "сказать", "отдать"],
    correctAnswer: "задать"
  },
  {
    question: "Сестра любит … с подругами по телефону.",
    options: ["говорить", "разговор", "говорение", "говор"],
    correctAnswer: "говорить"
  },
  {
    question: "Выберите правильный ответ: Сейчас он … русский язык.",
    options: ["изучает", "занимается", "учится", "говорит"],
    correctAnswer: "изучает"
  },
  {
    question: "Вставьте подходящее по смыслу местоимение: Это Акмаль? – Да, это ....",
    options: ["он", "она", "оно", "они"],
    correctAnswer: "он"
  },
  {
    question: "Я всегда плохо … даты.",
    options: ["запоминаю", "помнить", "запомнить", "вспомнить"],
    correctAnswer: "запоминаю"
  },
  {
    question: "Вставьте подходящее по смыслу местоимение: Это Севара? – Да, это ...",
    options: ["она", "он", "оно", "они"],
    correctAnswer: "она"
  },
  {
    question: "Я надолго … нашу встречу.",
    options: ["запомню", "помнить", "память", "вспомнить"],
    correctAnswer: "запомню"
  },
  {
    question: "Вставьте подходящее по смыслу местоимение: Это Лола. ... студентка.",
    options: ["она", "он", "оно", "её"],
    correctAnswer: "она"
  },
  {
    question: "Я долго думал и, наконец, … задачу.",
    options: ["решил", "решение", "решать", "разрешить"],
    correctAnswer: "решил"
  },
  {
    question: "Замените существительное местоимением. Это рыба? – Да, это ___",
    options: ["она", "он", "оно", "они"],
    correctAnswer: "она"
  },
  {
    question: "Вставьте нужное слово: Моей бабушке скоро исполнится 80 ___.",
    options: ["лет", "год", "года", "годов"],
    correctAnswer: "лет"
  },
  {
    question: "Подберите нужный глагол: Я ____ карандашом.",
    options: ["рисую", "рисуешь", "рисует", "рисуете"],
    correctAnswer: "рисую"
  },
  {
    question: "Вчера он весь день …, куда пойти в воскресенье.",
    options: ["решал", "решение", "решать", "разрешать"],
    correctAnswer: "решал"
  },
  {
    question: "Подберите нужный глагол: Он _____ петь.",
    options: ["любит", "люблю", "любишь", "любите"],
    correctAnswer: "любит"
  },
  {
    question: "Найдите верное окончание прилагательного в словосочетании: яблоко спел…, румян…",
    options: ["ое", "ая", "ый", "ые"],
    correctAnswer: "ое"
  },
  {
    question: "Мы … в университет на такси.",
    options: ["поехали", "пошли", "ходить", "лететь"],
    correctAnswer: "поехали"
  },
  {
    question: "Найдите верное окончание прилагательного в словосочетании: книга интересн…",
    options: ["ая", "ый", "ой", "ое"],
    correctAnswer: "ая"
  },
  {
    question: "15 – какое это число?",
    options: ["пятнадцать", "пятьдесят", "пять", "пятьсот"],
    correctAnswer: "пятнадцать"
  },
  {
    question: "С какими прилагательными сочетается слово ГРУША?",
    options: ["сладкая, сочная", "сладкий, сочный", "сладкое, сочное", "сладкие, сочные"],
    correctAnswer: "сладкая, сочная"
  },
  {
    question: "Друзья весь день … по магазинам и покупали сувениры.",
    options: ["ходили", "летать", "ехать", "едет"],
    correctAnswer: "ходили"
  },
  {
    question: "С какими прилагательными сочетается слово МЯЧ?",
    options: ["круглый, большой, синий", "круглая, большая, синяя", "круглое, большое, синее", "круглые, большие, синие"],
    correctAnswer: "круглый, большой, синий"
  },
  {
    question: "Сегодня директора не будет: он … в банк.",
    options: ["пошёл", "ехать", "поехать", "пойти"],
    correctAnswer: "пошёл"
  },
  {
    question: "С каким прилагательным сочетается слово ПАЛЬТО?",
    options: ["тёплое", "тёплый", "тёплая", "тёплые"],
    correctAnswer: "тёплое"
  },
  {
    question: "Он пошел в аптеку, … у него болит голова.",
    options: ["потому что", "зачем", "как", "где"],
    correctAnswer: "потому что"
  },
  {
    question: "С каким прилагательным сочетается слово КОСТЮМ?",
    options: ["спортивный", "спортивная", "спортивное", "спортивные"],
    correctAnswer: "спортивный"
  },
  {
    question: "Я не понимаю, … они говорят.",
    options: ["что", "кого", "который", "кто"],
    correctAnswer: "что"
  },
  {
    question: "С каким прилагательным сочетается слово ЗИМА?",
    options: ["холодная", "холодный", "холодное", "холодные"],
    correctAnswer: "холодная"
  },
  {
    question: "Найдите подходящее местоимение: Чья это книга? Это ___ книга.",
    options: ["моя", "мой", "моё", "мои"],
    correctAnswer: "моя"
  },
  {
    question: "Я хочу купить … сумку.",
    options: ["большую", "большая", "большие", "большое"],
    correctAnswer: "большую"
  },
  {
    question: "Билол подарил … брату собаку.",
    options: ["младшему", "младший", "младшего", "младшим"],
    correctAnswer: "младшему"
  },
  {
    question: "Элбек работает …",
    options: ["журналистом", "журналисты", "журналисту", "журналы"],
    correctAnswer: "журналистом"
  },
  {
    question: "Сейчас он занимается …",
    options: ["бизнесом", "бизнеса", "бизнесу", "бизнес"],
    correctAnswer: "бизнесом"
  },
  {
    question: "Мы поздравили … с праздником.",
    options: ["учителя", "учителю", "учителем", "учитель"],
    correctAnswer: "учителя"
  },
  {
    question: "Найдите подходящее местоимение: Чьё это яблоко? Это ___ яблоко.",
    options: ["моё", "моя", "мой", "мои"],
    correctAnswer: "моё"
  },
  {
    question: "Вчера студенты…",
    options: ["отмечали праздник", "отмечают праздник", "будут отмечать", "отмечать праздник"],
    correctAnswer: "отмечали праздник"
  },
  {
    question: "Найдите правильный ответ: 61",
    options: ["шестьдесят один", "шестнадцать", "шестьсот", "шесть"],
    correctAnswer: "шестьдесят один"
  },
  {
    question: "Я весь вечер ждал звонка…",
    options: ["из Москвы", "от Москвы", "Москва", "Москвой"],
    correctAnswer: "из Москвы"
  },
  {
    question: "Найдите имя прилагательное.",
    options: ["красивая", "одиннадцать", "девочка", "бежать"],
    correctAnswer: "красивая"
  },
  {
    question: "Найдите глагол.",
    options: ["сидеть", "большой", "мячик", "его"],
    correctAnswer: "сидеть"
  },
  {
    question: "Какое имя прилагательное отвечает на вопрос КАКАЯ?",
    options: ["маленькая", "маленькое", "маленький", "маленькие"],
    correctAnswer: "маленькая"
  },
  {
    question: "Я не знал, что Хилола стала ….",
    options: ["артисткой", "артистка", "артистку", "артистов"],
    correctAnswer: "артисткой"
  },
  {
    question: "Раньше здесь не было …",
    options: ["остановки", "остановку", "на остановке", "за остановкой"],
    correctAnswer: "остановки"
  },
  {
    question: "Летом мы поедем ….",
    options: ["на озеро", "на озере", "озером", "озеро"],
    correctAnswer: "на озеро"
  },
  {
    question: "Как зовут …?",
    options: ["этого студента", "этому студенту", "этим студентом", "эти студенты"],
    correctAnswer: "этого студента"
  },
  {
    question: "На какой вопрос отвечают слова: зима, хлеб, университет?",
    options: ["что?", "сколько?", "что делать?", "какой?"],
    correctAnswer: "что?"
  },
  {
    question: "Найдите местоимение.",
    options: ["они", "спать", "два", "лиса"],
    correctAnswer: "они"
  },
  {
    question: "Найдите правильный ответ: Чьё это письмо? Это ___ письмо.",
    options: ["наше", "наша", "наш", "наши"],
    correctAnswer: "наше"
  },
  {
    question: "Найдите имена существительные среднего рода.",
    options: ["окно, небо", "шкаф, горшок", "кукла, обезьяна", "трамвай, муравей"],
    correctAnswer: "окно, небо"
  },
  {
    question: "Алишер очень любит …",
    options: ["русскую литературу", "русской литературы", "о русской литературе", "русская литература"],
    correctAnswer: "русскую литературу"
  },
  {
    question: "Сегодня я пригласила в гости …",
    options: ["друзей", "друзья", "друзьям", "друг"],
    correctAnswer: "друзей"
  },
  {
    question: "Антон приехал …",
    options: ["в пятницу", "пятница", "пятницы", "пятницей"],
    correctAnswer: "в пятницу"
  },
  {
    question: "Перерыв только 20 …",
    options: ["минут", "минута", "минуты", "по минутам"],
    correctAnswer: "минут"
  },
  {
    question: "Раньше Насиба … экскурсоводом.",
    options: ["работала", "работает", "будет работать", "работают"],
    correctAnswer: "работала"
  },
  {
    question: "Анвар недавно начал … русский язык.",
    options: ["изучать", "учил", "учит", "учила"],
    correctAnswer: "изучать"
  },
  {
    question: "На какие вопросы отвечают слова: играть, идти, учиться?",
    options: ["что делать?", "какие?", "что?", "как?"],
    correctAnswer: "что делать?"
  },
  {
    question: "Найдите правильное сочетание слов.",
    options: ["белый снег", "большая дом", "вкусный яблоко", "красивая мальчик"],
    correctAnswer: "белый снег"
  },
  {
    question: "На какой вопрос отвечает имя числительное?",
    options: ["сколько? который?", "что делать? что сделать?", "кто? что?", "где? кто?"],
    correctAnswer: "сколько? который?"
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







