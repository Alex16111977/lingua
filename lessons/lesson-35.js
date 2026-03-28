// Lesson 35: Der Umzug (A2)
// Source: https://lingua.com/de/deutsch/lesen/der-umzug/

const LESSON_35 = {
  id: 'lesson-35',
  number: 35,
  title: 'Der Umzug',
  subtitle: 'Meine beste Freundin Victoria und ich sind schon seit dem Kindergarten befreundet',
  level: 'A2',
  section: 'premium',
  topics: ['freundschaft', 'umzug', 'gefuehle', 'futur', 'konjunktiv'],
  source: 'Lingua.com',
  url: 'https://lingua.com/de/deutsch/lesen/der-umzug/',

  // ─── ORIGINAL TEXT ───
  text: `Meine beste Freundin Victoria und ich sind schon seit dem Kindergarten befreundet. Wir kennen uns nun schon seit sieben Jahren und machen alles zusammen. Wir sind wie Schwestern.

Jetzt muss Victoria aber in eine andere Stadt umziehen, weil ihre Mutter einen anderen Job bekommen hat. Victorias Eltern verkaufen ihr Haus und kaufen sich ein anderes Haus in der anderen Stadt. Ich werde sie nicht wieder sehen.

Ich sitze auf meinem Bett und weine. Ich werde Victoria schrecklich vermissen. Sie ist schließlich meine beste Freundin.

Dann kommt meine Mutter ins Zimmer und tröstet mich. "Wir können Victoria ja mal besuchen", sagt sie. Das würde mich sehr freuen.`,

  // ─── VOCABULARY (A2-B1, 22 words) ───
  vocabulary: [
    { de: 'die Freundin', ru: 'подруга', gender: 'feminin', example: 'Meine beste Freundin Victoria.' },
    { de: 'der Kindergarten', ru: 'детский сад', gender: 'maskulin', example: 'Wir sind seit dem Kindergarten befreundet.' },
    { de: 'befreundet', ru: 'дружен / знакомый', example: 'Wir sind schon seit dem Kindergarten befreundet.' },
    { de: 'die Schwester', ru: 'сестра', gender: 'feminin', example: 'Wir sind wie Schwestern.' },
    { de: 'der Umzug', ru: 'переезд', gender: 'maskulin', example: 'Victoria muss umziehen.' },
    { de: 'umziehen', ru: 'переезжать', example: 'Victoria muss in eine andere Stadt umziehen.' },
    { de: 'der Job', ru: 'работа / должность', gender: 'maskulin', example: 'Ihre Mutter hat einen anderen Job bekommen.' },
    { de: 'verkaufen', ru: 'продавать', example: 'Victorias Eltern verkaufen ihr Haus.' },
    { de: 'kaufen', ru: 'покупать', example: 'Sie kaufen sich ein anderes Haus.' },
    { de: 'das Bett', ru: 'кровать', gender: 'neutrum', example: 'Ich sitze auf meinem Bett.' },
    { de: 'weinen', ru: 'плакать', example: 'Ich sitze auf meinem Bett und weine.' },
    { de: 'vermissen', ru: 'скучать (по кому-то)', example: 'Ich werde Victoria schrecklich vermissen.' },
    { de: 'schrecklich', ru: 'ужасно / страшно', example: 'Ich werde Victoria schrecklich vermissen.' },
    { de: 'schließlich', ru: 'в конце концов / ведь', example: 'Sie ist schließlich meine beste Freundin.' },
    { de: 'trösten', ru: 'утешать', example: 'Meine Mutter tröstet mich.' },
    { de: 'besuchen', ru: 'навестить / посетить', example: 'Wir können Victoria ja mal besuchen.' },
    { de: 'sich freuen', ru: 'радоваться', example: 'Das würde mich sehr freuen.' },
    { de: 'zusammen', ru: 'вместе', example: 'Wir machen alles zusammen.' },
    { de: 'wieder', ru: 'снова / опять', example: 'Ich werde sie nicht wieder sehen.' },
    { de: 'das Haus', ru: 'дом', gender: 'neutrum', example: 'Victorias Eltern verkaufen ihr Haus.' },
    { de: 'das Zimmer', ru: 'комната', gender: 'neutrum', example: 'Meine Mutter kommt ins Zimmer.' },
    { de: 'die Eltern', ru: 'родители', gender: 'feminin', example: 'Victorias Eltern verkaufen ihr Haus.' },
  ],

  // ─── GRAMMAR FOCUS ───
  grammarFocus: [
    'Futur I (werden + Infinitiv): Ich werde sie nicht wieder sehen, Ich werde Victoria vermissen',
    'Konjunktiv II (würde): Das würde mich sehr freuen',
    'weil-Satz: weil ihre Mutter einen anderen Job bekommen hat (Perfekt im Nebensatz)',
  ],

  // ─── QUESTIONS ───
  questions: [
    { q: 'Seit wann kennen sich die Mädchen?', a: 'Seit dem Kindergarten, seit sieben Jahren.' },
    { q: 'Warum muss Victoria umziehen?', a: 'Weil ihre Mutter einen anderen Job bekommen hat.' },
    { q: 'Was machen Victorias Eltern mit ihrem Haus?', a: 'Sie verkaufen es und kaufen ein anderes.' },
    { q: 'Wie fühlt sich die Erzählerin?', a: 'Sie ist traurig und weint.' },
    { q: 'Wer tröstet die Erzählerin?', a: 'Ihre Mutter.' },
  ],

  // ─── SENTENCE TRANSLATIONS ───
  sentenceTranslations: {
    'Meine beste Freundin Victoria und ich sind schon seit dem Kindergarten befreundet.': 'Моя лучшая подруга Виктория и я дружим с детского сада.',
    'Wir kennen uns nun schon seit sieben Jahren und machen alles zusammen.': 'Мы знаем друг друга уже семь лет и делаем всё вместе.',
    'Wir sind wie Schwestern.': 'Мы как сёстры.',
    'Jetzt muss Victoria aber in eine andere Stadt umziehen, weil ihre Mutter einen anderen Job bekommen hat.': 'Но теперь Виктории нужно переехать в другой город, потому что её мама получила другую работу.',
    'Victorias Eltern verkaufen ihr Haus und kaufen sich ein anderes Haus in der anderen Stadt.': 'Родители Виктории продают свой дом и покупают другой дом в другом городе.',
    'Ich werde sie nicht wieder sehen.': 'Я больше не увижу её.',
    'Ich sitze auf meinem Bett und weine.': 'Я сижу на своей кровати и плачу.',
    'Ich werde Victoria schrecklich vermissen.': 'Я буду ужасно скучать по Виктории.',
    'Sie ist schließlich meine beste Freundin.': 'В конце концов, она моя лучшая подруга.',
    'Dann kommt meine Mutter ins Zimmer und tröstet mich.': 'Потом моя мама заходит в комнату и утешает меня.',
    '"Wir können Victoria ja mal besuchen", sagt sie.': '«Мы можем когда-нибудь навестить Викторию», — говорит она.',
    'Das würde mich sehr freuen.': 'Это бы меня очень обрадовало.',
  },

  // ─── COMPREHENSION QUIZ ───
  comprehensionQuiz: [
    {
      question: 'Wie heißt die beste Freundin der Erzählerin?',
      options: ['Victoria', 'Veronika', 'Vicky', 'Valerie'],
      correct: 'Victoria',
    },
    {
      question: 'Wie lange kennen sich die Mädchen schon?',
      options: ['Drei Jahre', 'Sechs Jahre', 'Sieben Jahre', 'Fünf Jahre'],
      correct: 'Sieben Jahre',
    },
    {
      question: 'Wer hat einen anderen Job bekommen?',
      options: ['Die Erzählerin', 'Victorias Mutter', 'Victorias Vater', 'Die Lehrerin'],
      correct: 'Victorias Mutter',
    },
    {
      question: 'Was verkaufen Victorias Eltern?',
      options: ['Ihr Puppenhaus', 'Ihr Haus', 'Ihr Auto', 'Ihren Hund'],
      correct: 'Ihr Haus',
    },
    {
      question: 'Wer tröstet die Erzählerin?',
      options: ['Victoria', 'Ihr Vater', 'Ihre Schwester', 'Ihre Mutter'],
      correct: 'Ihre Mutter',
    },
  ],

  // ─── FILL-IN STORY ───
  fillStory: {
    title: 'ПОДРУГА ПЕРЕЕЗЖАЕТ',
    text: 'Моя лучшая {0} Виктория и я дружим с {1}. Мы знаем друг друга уже {2} лет и делаем всё {3}. Мы как {4}.\n\nНо теперь Виктории нужно {5} в другой город, потому что её мама получила другой {6}. Родители Виктории {7} свой дом и {8} другой дом. Я больше не увижу её.\n\nЯ сижу на своей {9} и {10}. Я буду {11} скучать по Виктории. {12} она моя лучшая подруга.\n\nПотом мама заходит в {13} и {14} меня. «Мы можем {15} Викторию», — говорит она. Это бы меня очень {16}.',
    blanks: [
      { answer: 'Freundin', hint: 'подруга (die Freundin)' },
      { answer: 'dem Kindergarten', hint: 'детский сад (der Kindergarten, Dat.)' },
      { answer: 'sieben', hint: 'семь' },
      { answer: 'zusammen', hint: 'вместе' },
      { answer: 'Schwestern', hint: 'сёстры (die Schwester, Pl.)' },
      { answer: 'umziehen', hint: 'переехать (umziehen)' },
      { answer: 'Job', hint: 'работа (der Job)' },
      { answer: 'verkaufen', hint: 'продают (verkaufen)' },
      { answer: 'kaufen', hint: 'покупают (kaufen)' },
      { answer: 'dem Bett', hint: 'кровать (das Bett, Dat.)' },
      { answer: 'weine', hint: 'плачу (weinen)' },
      { answer: 'schrecklich', hint: 'ужасно' },
      { answer: 'Schließlich', hint: 'в конце концов' },
      { answer: 'das Zimmer', hint: 'комната (das Zimmer)' },
      { answer: 'tröstet', hint: 'утешает (trösten)' },
      { answer: 'besuchen', hint: 'навестить (besuchen)' },
      { answer: 'freuen', hint: 'обрадовало (sich freuen)' },
    ],
  },

  // ═══════════════════════════════════════════════
  // 7 PROMPT TYPES
  // ═══════════════════════════════════════════════

  prompts: {

    exercises: {
      title: 'Интерактивные упражнения',
      icon: '🏋',
      instruction: 'Тренируйте словарь, артикли и грамматику прямо на сайте — без AI.',
      promptText: null,
    },

    original: {
      title: 'Оригинальный текст',
      icon: '📖',
      instruction: 'Прочитайте текст. Нажмите на незнакомое слово, чтобы увидеть перевод.',
      promptText: null,
    },

    grammar: {
      title: 'Перевод + грамматика',
      icon: '📝',
      instruction: 'Скопируйте промт в AI-чат. AI покажет как работать с текстом, разберёт первое предложение как образец, потом вы переводите по одному.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок перевода текста по предложениям с разбором грамматики.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Der Umzug" (A2) · Тема: Дружба / Переезд / Чувства
Источник: https://lingua.com/de/deutsch/lesen/der-umzug/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ-СПРАВОЧНИК:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
СТАРТ:
━━━━━━━━━━━━━━━━━━━━━━━

«Привет! Переводим "Der Umzug" — грустную историю про переезд подруги.

Как работаем: я даю предложение → ты переводишь → я помогаю.
Сначала — образец!»

━━━━━━━━━━━━━━━━━━━━━━━
ОБРАЗЕЦ:
━━━━━━━━━━━━━━━━━━━━━━━

«Первое предложение:

  "Meine beste Freundin Victoria und ich sind schon seit dem Kindergarten befreundet."

По словам:
  • Meine beste Freundin — моя лучшая подруга (Superlativ: gut → beste)
  • Victoria und ich — Виктория и я
  • sind ... befreundet — дружим (Partizip как прилагательное!)
  • schon seit dem Kindergarten — уже с детского сада (seit + Dativ!)

Почему "dem Kindergarten" а не "der"?
  "seit" требует Dativ! der Kindergarten → dem Kindergarten.
  В русском: "с детскОГО садА" — тоже не именительный!

Перевод: "Моя лучшая подруга Виктория и я дружим с детского сада."

Теперь ты!»

━━━━━━━━━━━━━━━━━━━━━━━
УЧЕНИК ПЕРЕВОДИТ:
━━━━━━━━━━━━━━━━━━━━━━━

Правильно → макс. 2 строки. Ошибка → макс. 4 строки.

Мини-уроки:
  • После абзаца 1: seit + Dativ, Superlativ (beste)
  • После абзаца 2: weil-Satz (Perfekt в придаточном: bekommen hat), Futur I (werde sehen)
  • После абзаца 3-4: Futur I (werde vermissen), Konjunktiv II (würde freuen)

Интересные факты:
  «"Kindergarten" — немецкое слово, которое мир заимствовал! Буквально: Kinder (дети) + Garten (сад).»
  «"umziehen" = um (вокруг/пере-) + ziehen (тянуть). Перетягивать вещи = переезжать!»

━━━━━━━━━━━━━━━━━━━━━━━
ИТОГ:
━━━━━━━━━━━━━━━━━━━━━━━

«Молодец!
📌 Что узнал:
  • Futur I: werde + Infinitiv (Ich werde vermissen)
  • Konjunktiv II: würde + Infinitiv (Das würde mich freuen)
  • weil + Perfekt в придаточном: weil sie einen Job bekommen HAT
  • seit + Dativ: seit dem Kindergarten, seit sieben Jahren
📝 Ошибки: [2-3]
🏆 Трогательный текст — и ты его покорил!»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Русский для общения. Немецкий — примеры.
• Образец → ученик переводит. Одно предложение за раз.
• 1 поправка за предложение. Темп > идеальность.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Покажи образец. Дай второе предложение.`,
    },

    vocabulary: {
      title: 'Словарь + упражнения',
      icon: '📚',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт урок словаря в 5 этапов.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю текста "Der Umzug".

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Der Umzug" (A2) · Тема: Дружба / Переезд
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
5 ЭТАПОВ: Знакомство → Викторина → Перевод → Контекст → Пересказ
━━━━━━━━━━━━━━━━━━━━━━━

СТАРТ:
«Привет! Учим слова текста "Der Umzug" — дружба, переезд, чувства.»

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 1 — ЗНАКОМСТВО:
━━━━━━━━━━━━━━━━━━━━━━━

Группа 1 — "Дружба":
  🔵 die Freundin — подруга
  🔵 befreundet — дружен
  🔵 der Kindergarten — детский сад
  🔵 die Schwester — сестра
  🔵 zusammen — вместе

Группа 2 — "Переезд":
  der Umzug, umziehen, verkaufen, kaufen, der Job

Группа 3 — "Чувства":
  weinen, vermissen, schrecklich, trösten, sich freuen

Группа 4 — "Дом":
  das Haus, das Bett, das Zimmer, besuchen, die Eltern

📌 «"Kindergarten" — слово, которое мир заимствовал из немецкого! Kinder + Garten = детский сад.»

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 2 — ВИКТОРИНА (8 вопросов):
━━━━━━━━━━━━━━━━━━━━━━━

Чередуй DE→RU и RU→DE. Быстрый темп.

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 3 — ПЕРЕВОД (10 слов):
━━━━━━━━━━━━━━━━━━━━━━━

С артиклями! «Переезд → ?» → «der Umzug»

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 4 — КОНТЕКСТ (5 заданий):
━━━━━━━━━━━━━━━━━━━━━━━

1. Victoria muss in eine andere Stadt _______. → umziehen
2. Ich sitze auf meinem Bett und _______. → weine
3. Ich werde Victoria schrecklich _______. → vermissen
4. Meine Mutter _______ mich. → tröstet
5. Victorias Eltern _______ ihr Haus. → verkaufen

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 5 — ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Используй: Freundin, Kindergarten, umziehen, vermissen, trösten, besuchen.
Начни: "Victoria ist meine beste Freundin. Aber jetzt muss sie..."»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Этап 1 = показ. • Темп быстрый. • Артикли обязательны.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп / повторить

СТАРТ: Поприветствуй. Объясни этапы. Покажи группу 1.`,
    },

    dialogue: {
      title: 'Диалог-тренажёр',
      icon: '🎭',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт разговорную тренировку по теме дружбы и переезда.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по теме "Der Umzug".
Главная цель — РАЗГОВОРИТЬ ученика.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ-ОСНОВА: "Der Umzug" (A2)
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
4 ФАЗЫ: Повторение → Викторина → Достройка → Свободный диалог
━━━━━━━━━━━━━━━━━━━━━━━

СТАРТ:
«Привет! Сегодня говорим по-немецки о дружбе и переезде.»

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 1 — ПОВТОРЕНИЕ (5 фраз):
━━━━━━━━━━━━━━━━━━━━━━━

1. "Meine beste Freundin heißt Victoria." (Мою лучшую подругу зовут Виктория)
2. "Wir kennen uns seit sieben Jahren." (Мы знаем друг друга семь лет)
3. "Victoria muss umziehen." (Виктории нужно переехать)
4. "Ich werde sie sehr vermissen." (Я буду очень по ней скучать)
5. "Wir können sie mal besuchen." (Мы можем как-нибудь её навестить)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 2 — ВИКТОРИНА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

1. «Hast du eine beste Freundin / einen besten Freund?
  A) Ja, mein bester Freund heißt...
  B) Nein, ich habe keine Freunde. (ooh 😢)
  C) Ja, ich habe einen Hund. (Hunde sind auch Freunde! 🐕)»

2. «Warum muss Victoria umziehen?
  A) Weil ihre Mutter einen anderen Job bekommen hat.
  B) Weil sie eine neue Schule sucht.
  C) Weil sie das Meer liebt.»

3. «Was machst du, wenn du traurig bist?
  A) Ich weine und meine Mutter tröstet mich.
  B) Ich esse Schokolade. (auch eine gute Methode! 😄)
  C) Ich tanze. (warum nicht!)»

4. «Wie kann man eine Freundin trösten?
  A) Man kann sie besuchen und mit ihr reden.
  B) Man vergisst sie.
  C) Man zieht auch um.»

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 3 — ДОСТРОЙКА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

1. «Mein bester Freund / meine beste Freundin heißt...» → имя
2. «Wenn mein Freund umzieht, werde ich...» → traurig sein / ihn vermissen
3. «Ich tröste meine Freunde, indem ich...» → mit ihnen rede / sie besuche
4. «Das Wichtigste in einer Freundschaft ist...» → Vertrauen / zusammen sein

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Erzähl mir von deinem besten Freund / deiner besten Freundin.»
   Если молчит: «Mein bester Freund heißt... Wir kennen uns seit...»

2. «Bist du schon mal umgezogen? Wie war das?»
   Если молчит: «Ja, ich bin umgezogen nach... / Nein, ich wohne seit... in...»

3. «Stell dir vor: Dein bester Freund zieht in eine andere Stadt. Was machst du?»
   Если молчит: «Ich würde ihn besuchen. Ich würde ihm schreiben...»

4. (Бонус): «Wie bleibt man mit Freunden in Kontakt, wenn sie weit weg wohnen?»

━━━━━━━━━━━━━━━━━━━━━━━
ИТОГ:
━━━━━━━━━━━━━━━━━━━━━━━

«Супер!
🎯 Ты умеешь: описать друга, говорить о чувствах, утешить кого-то.
📝 Ошибки: [2-3]
💪 Отличный прогресс!»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Русский — объяснения. Немецкий — вопросы.
• 4 фазы постепенно. Молчит → варианты.
• 1 исправление. Юмор приветствуется.
• Темы: дружба, переезд, чувства, семья.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 4 фазы. Начни Фазу 1.`,
    },

    socratic: {
      title: 'Сократовский разбор',
      icon: '🏛',
      instruction: 'Скопируйте промт в AI-чат. AI задаёт цепочку вопросов, чтобы вы САМИ открыли грамматическое правило.',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, уровень A2.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Der Umzug" (A2) · Тема: Дружба / Переезд
Источник: https://lingua.com/de/deutsch/lesen/der-umzug/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ГРАММАТИЧЕСКИЙ ФОКУС:
━━━━━━━━━━━━━━━━━━━━━━━
• Futur I: werde + Infinitiv (Ich werde vermissen)
• Konjunktiv II: würde + Infinitiv (Das würde mich freuen)
• weil-Satz с Perfekt: weil ihre Mutter einen Job bekommen hat
• seit + Dativ: seit dem Kindergarten, seit sieben Jahren
• Trennbare Verben: umziehen → muss umziehen

━━━━━━━━━━━━━━━━━━━━━━━
ПРЕДЛОЖЕНИЯ ДЛЯ РАЗБОРА:
━━━━━━━━━━━━━━━━━━━━━━━

ПРЕДЛОЖЕНИЕ 1: «Wir sind schon seit dem Kindergarten befreundet.»
  Цель: seit + Dativ
  → «"seit dem Kindergarten" — переведи. С каких пор?»
  → «"dem" — какой падеж? Почему не "der"?»
  → «"seit" всегда требует Dativ! der Kindergarten → dem Kindergarten.»
  → «В русском: "с детскОГО садА" — родительный. В немецком — Dativ.»

ПРЕДЛОЖЕНИЕ 2: «Victoria muss in eine andere Stadt umziehen, weil ihre Mutter einen anderen Job bekommen hat.»
  Цель: weil-Satz с Perfekt (два глагола в конце!)
  → «Найди глаголы после "weil". Сколько их?»
  → «"bekommen hat" — ДВА глагола в конце! Это Perfekt в придаточном.»
  → «В главном: "hat bekommen". В придаточном: "bekommen HAT" — порядок меняется!»

ПРЕДЛОЖЕНИЕ 3: «Ich werde sie nicht wieder sehen.»
  Цель: Futur I (werden + Infinitiv)
  → «"werde ... sehen" — какое время? Настоящее, прошедшее, будущее?»
  → «Будущее! "werden + Infinitiv" = Futur I.»
  → «В русском: "Я НЕ УВИЖУ её" — будущее. "werde + sehen" = "увижу".»
  → «А "nicht wieder" — больше не. Грустно!»

ПРЕДЛОЖЕНИЕ 4: «Ich werde Victoria schrecklich vermissen.»
  Цель: Ещё один Futur I + порядок слов
  → «Снова "werde + Infinitiv". Где стоит "werde"? Где "vermissen"?»
  → «"werde" — на 2 месте. "vermissen" — в КОНЦЕ. Рамочная конструкция!»
  → «Всё между "werde" и "vermissen" — это "рамка": Victoria schrecklich.»

ПРЕДЛОЖЕНИЕ 5: «Das würde mich sehr freuen.»
  Цель: Konjunktiv II (würde)
  → «"würde" — это "werde" или что-то другое?»
  → «"würde" = Konjunktiv II. Это "бы"! "Это БЫ меня обрадовало."»
  → «В русском: "обрадовало БЫ" — частица "бы" = Konjunktiv.»
  → «Futur: "wird freuen" (обрадует). Konjunktiv: "würde freuen" (обрадовало бы).»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Русский. 1-2 вопроса за раз. Жди ответ.
• Ошибка → вопрос, не исправление.
• 3 неудачи → подсказка.
• После каждого предложения — правило своими словами.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Первое предложение. Первый вопрос.`,
    },

    synonyms: {
      title: 'Синонимизация',
      icon: '🔄',
      instruction: 'Скопируйте промт в AI-чат. AI покажет предложение и 3 варианта — вы выбираете правильный синоним.',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи упражнение "Синонимизация" в формате ВИКТОРИНЫ.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Der Umzug" (A2) · Тема: Дружба / Переезд
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
10 ВОПРОСОВ:
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1 — ЗАМЕНА ГЛАГОЛА
Оригинал: «Wir kennen uns seit sieben Jahren.»
  A) Wir sind seit sieben Jahren befreundet. ✓
  B) Wir sehen uns seit sieben Jahren nicht. ✗ (nicht sehen = не видеться!)
  C) Wir streiten uns seit sieben Jahren. ✗ (streiten = ссориться!)
Объяснение: «sich kennen» ≈ «befreundet sein». Оба — «знать друг друга / дружить».

ВОПРОС 2 — ЗАМЕНА СУЩЕСТВИТЕЛЬНОГО
Оригинал: «Victoria muss in eine andere Stadt umziehen.»
  A) Victoria muss in einen anderen Ort umziehen. ✓ (Ort = место/город)
  B) Victoria muss in ein anderes Land umziehen. ✗ (Land = страна — масштаб другой!)
  C) Victoria bleibt in der gleichen Stadt. ✗ (bleibt = остаётся — противоположное!)
Объяснение: «Stadt» ≈ «Ort». Оба — «город / населённый пункт».

ВОПРОС 3 — ЗАМЕНА ГЛАГОЛА + ПРЕДЛОГА
Оригинал: «Ihre Mutter hat einen anderen Job bekommen.»
  A) Ihre Mutter hat eine neue Stelle gefunden. ✓ (Stelle finden = найти должность)
  B) Ihre Mutter hat ihren Job verloren. ✗ (verlieren = потерять!)
  C) Ihre Mutter arbeitet nicht mehr. ✗ (nicht mehr = больше не работает!)
Объяснение: «einen Job bekommen» = «eine Stelle finden». Оба — «получить работу».

ВОПРОС 4 — СИНОНИМ ГЛАГОЛА
Оригинал: «Ich werde Victoria schrecklich vermissen.»
  A) Victoria wird mir schrecklich fehlen. ✓ (fehlen = не хватать)
  B) Ich werde Victoria schrecklich vergessen. ✗ (vergessen = забыть!)
  C) Ich werde Victoria schrecklich schreiben. ✗ (schreiben = писать — другое!)
Объяснение: «vermissen» = «fehlen» (но с разным подлежащим!).
  «Ich vermisse Victoria» = «Victoria fehlt mir». Оба — «скучать».

ВОПРОС 5 — AKTIV → PASSIV
Оригинал: «Victorias Eltern verkaufen ihr Haus.»
  A) Das Haus wird von Victorias Eltern verkauft. ✓ (Passiv!)
  B) Victorias Eltern kaufen ein Haus. ✗ (kaufen = покупать — другое!)
  C) Das Haus verkauft Victorias Eltern. ✗ (дом продаёт родителей — абсурд!)
Объяснение: Aktiv → Passiv: «verkaufen» → «wird verkauft».

ВОПРОС 6 — ДВА → ОДНО С «WEIL»
Оригинал: «Ich weine. Victoria zieht um.»
  A) Ich weine, weil Victoria umzieht. ✓
  B) Ich weine, obwohl Victoria umzieht. ✗ (obwohl = хотя)
  C) Ich weine, deshalb zieht Victoria um. ✗ (я плачу, поэтому она переезжает — нелогично!)
Объяснение: «weil» = «потому что». Глагол в конец: «weil Victoria UMZIEHT.»

ВОПРОС 7 — КОННЕКТОР «DESHALB»
Оригинал: «Victorias Mutter hat einen neuen Job. Victoria muss umziehen.»
  A) Victorias Mutter hat einen neuen Job, deshalb muss Victoria umziehen. ✓
  B) Victorias Mutter hat einen neuen Job, trotzdem muss Victoria umziehen. ✗ (trotzdem = несмотря на)
  C) Victoria muss umziehen, deshalb hat ihre Mutter einen neuen Job. ✗ (причина и следствие перепутаны!)
Объяснение: «deshalb» = «поэтому». Причина → следствие.

ВОПРОС 8 — ПЕРЕФРАЗИРОВАНИЕ
Оригинал: «Meine Mutter tröstet mich.»
  A) Meine Mutter macht mir Mut. ✓ (Mut machen = ободрить, утешить)
  B) Meine Mutter schimpft mit mir. ✗ (schimpfen = ругать!)
  C) Meine Mutter lässt mich allein. ✗ (allein lassen = оставить одного!)
Объяснение: «trösten» ≈ «Mut machen». Оба — «утешать / подбадривать».

ВОПРОС 9 — ПРИЛАГАТЕЛЬНОЕ → ПРИДАТОЧНОЕ
Оригинал: «Meine beste Freundin Victoria.»
  A) Victoria, die meine beste Freundin ist. ✓
  B) Victoria, die ich nicht kenne. ✗ (nicht kenne = не знаю — противоположное!)
  C) Victoria, die meine Schwester ist. ✗ (Schwester = сестра — не то!)
Объяснение: «beste Freundin» → «die meine beste Freundin IST».

ВОПРОС 10 — СИНОНИМ ВЫРАЖЕНИЯ
Оригинал: «Wir machen alles zusammen.»
  A) Wir unternehmen alles gemeinsam. ✓ (unternehmen = делать, gemeinsam = вместе)
  B) Wir machen nichts zusammen. ✗ (nichts = ничего — противоположное!)
  C) Wir sehen uns nie. ✗ (nie = никогда — противоположное!)
Объяснение: «zusammen» = «gemeinsam». «machen» = «unternehmen». Оба — «делать вместе».

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Русский. Один вопрос. Жди ответ.
• Объяснение + пара синонимов. Мини-итоги каждые 3 вопроса.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Объясни формат. Вопрос 1.`,
    },

    lefebvre: {
      title: 'Пересказ по Лефевру',
      icon: '🪞',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт рефлексивный пересказ текста по методу В.А. Лефевра.',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи рефлексивный пересказ текста по методу В.А. Лефевра.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Der Umzug" (A2) · Тема: Дружба / Переезд
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СТАРТ:
━━━━━━━━━━━━━━━━━━━━━━━

«Привет! Пересказываем "Der Umzug" — историю о дружбе и расставании.

Метод:
ШАГ 1 — КАРТА: Кто? Что? Где? Почему?
ШАГ 2 — СТРУКТУРА: 3 фазы
ШАГ 3 — ПЕРЕСКАЗ

Покажу!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 1 — ОБРАЗЕЦ (абзац 1):
━━━━━━━━━━━━━━━━━━━━━━━

«Вот начало:
"Meine beste Freundin Victoria und ich..."

Карта:
  КТО? → Ich und Victoria
  С КАКИХ ПОР? → seit dem Kindergarten, seit 7 Jahren
  КАК? → wie Schwestern, machen alles zusammen

Пересказ:
  "Victoria ist meine beste Freundin.
   Wir kennen uns seit dem Kindergarten und sind wie Schwestern."

Два предложения — и всё ясно!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 2 — ВМЕСТЕ (абзац 2):
━━━━━━━━━━━━━━━━━━━━━━━

«Дальше: "Jetzt muss Victoria umziehen..."

Карта вместе:
  ЧТО ПРОИСХОДИТ? → Victoria muss umziehen
  ПОЧЕМУ? → ... (Mutter hat neuen Job)
  ЧТО С ДОМОМ? → ... (verkaufen, kaufen)
  КАК Я СЕБЯ ЧУВСТВУЮ? → ... (werde sie nicht sehen)

Перескажи!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (абзацы 3-4):
━━━━━━━━━━━━━━━━━━━━━━━

«Теперь сам: "Ich sitze auf meinem Bett... Dann kommt meine Mutter..."

Карта: КАК СЕБЯ ЧУВСТВУЮ? КТО ПОМОГАЕТ? ЧТО ПРЕДЛАГАЕТ?
Перескажи!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 4 — ПОЛНЫЙ ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Весь текст — 5 предложений.

Структура:
  1) Дружба: знакомы с детского сада, как сёстры
  2) Переезд: мама получила работу, продают дом
  3) Грусть: плачу, буду скучать
  4) Утешение: мама предлагает навестить

Начинай!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 5 — РЕФЛЕКСИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

«Подумаем:
  • У тебя переезжал друг? Как это было?
  • "Mein Freund ist umgezogen nach..." или "Ich würde meinen Freund besuchen..."»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Русский. Покажи образец. Молчит → начало предложения. 1 поправка.

⏸ WAIT-РЕЖИМ: жди ответа.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Покажи образец. НЕ спрашивай сразу.`,
    },

  }, // end prompts
};

// Register lesson in global array
LESSONS.push(LESSON_35);
