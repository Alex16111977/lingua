// Lesson 39: Die Weihnachtsfeier (A2)
// Source: https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/
// NOTE: Overlaps lesson-21 (Christmas). Uses NEW vocabulary not found in lesson-21!

const LESSON_39 = {
  id: 'lesson-39',
  number: 39,
  title: 'Die Weihnachtsfeier',
  subtitle: 'In der Weihnachtszeit macht meine Firma immer eine tolle Weihnachtsfeier',
  level: 'A2',
  section: 'premium',
  topics: ['christmas', 'work', 'food', 'colleagues', 'akkusativ'],
  source: 'Lingua.com',
  url: 'https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/',

  // ─── ORIGINAL TEXT ───
  text: `In der Weihnachtszeit macht meine Firma immer eine tolle Weihnachtsfeier. Wir sind nur ein kleines Unternehmen. Wir sind insgesamt nur 15 Mitarbeiter und deswegen ist die Firma wie eine kleine Familie.

Dieses Jahr machen wir auch eine Weihnachtsfeier und reservieren dafür einen Platz in einem guten Restaurant. Alle Kollegen und auch die Chefs kommen. Wir essen und trinken. Ich esse leckere Käsespätzle und trinke einen guten Hollundersaft.

Danach gibt es Nachspeise. Fast alle essen Eis, aber ich esse einen kleinen Kaiserschmarrn mit Apfelmus.

Dann bekommt jeder ein kleines Geschenk. Die Chefs haben sie vorbereitet. Darin sind ein bisschen Schokolade und ein netter, persönlicher Brief. Die Chefs bekommen von uns natürlich auch ein Geschenk.`,

  // ─── VOCABULARY (A2-B1, 25 words) ───
  // NOTE: New words not in lesson-21! Avoid: Weihnachten, Adventskranz, Kerze, Tannenbaum, Weihnachtsmann, Christkind, Plätzchen, schmücken, anzünden, etc.
  vocabulary: [
    { de: 'die Firma', ru: 'фирма / компания', gender: 'feminin', example: 'Meine Firma macht immer eine tolle Weihnachtsfeier.' },
    { de: 'das Unternehmen', ru: 'предприятие / компания', gender: 'neutrum', example: 'Wir sind nur ein kleines Unternehmen.' },
    { de: 'der Mitarbeiter', ru: 'сотрудник', gender: 'maskulin', example: 'Wir sind insgesamt nur 15 Mitarbeiter.' },
    { de: 'der Kollege', ru: 'коллега', gender: 'maskulin', example: 'Alle Kollegen kommen.' },
    { de: 'der Chef', ru: 'начальник / шеф', gender: 'maskulin', example: 'Auch die Chefs kommen.' },
    { de: 'die Weihnachtsfeier', ru: 'рождественская вечеринка', gender: 'feminin', example: 'Meine Firma macht eine tolle Weihnachtsfeier.' },
    { de: 'das Restaurant', ru: 'ресторан', gender: 'neutrum', example: 'Wir reservieren einen Platz in einem guten Restaurant.' },
    { de: 'die Nachspeise', ru: 'десерт', gender: 'feminin', example: 'Danach gibt es Nachspeise.' },
    { de: 'der Kaiserschmarrn', ru: 'кайзершмаррн (австрийский десерт)', gender: 'maskulin', example: 'Ich esse einen kleinen Kaiserschmarrn.' },
    { de: 'das Apfelmus', ru: 'яблочное пюре', gender: 'neutrum', example: 'Kaiserschmarrn mit Apfelmus.' },
    { de: 'die Käsespätzle', ru: 'сырные шпецле (немецкая паста)', gender: 'feminin', example: 'Ich esse leckere Käsespätzle.' },
    { de: 'der Hollundersaft', ru: 'бузиновый сок', gender: 'maskulin', example: 'Ich trinke einen guten Hollundersaft.' },
    { de: 'die Schokolade', ru: 'шоколад', gender: 'feminin', example: 'Darin sind ein bisschen Schokolade.' },
    { de: 'der Brief', ru: 'письмо', gender: 'maskulin', example: 'Ein netter, persönlicher Brief.' },
    { de: 'das Geschenk', ru: 'подарок', gender: 'neutrum', example: 'Jeder bekommt ein kleines Geschenk.' },
    { de: 'reservieren', ru: 'бронировать / резервировать', example: 'Wir reservieren einen Platz im Restaurant.' },
    { de: 'vorbereiten', ru: 'подготавливать', example: 'Die Chefs haben die Geschenke vorbereitet.' },
    { de: 'lecker', ru: 'вкусный', example: 'Ich esse leckere Käsespätzle.' },
    { de: 'persönlich', ru: 'личный / персональный', example: 'Ein netter, persönlicher Brief.' },
    { de: 'insgesamt', ru: 'всего / в целом', example: 'Wir sind insgesamt nur 15 Mitarbeiter.' },
    { de: 'deswegen', ru: 'поэтому / из-за этого', example: 'Deswegen ist die Firma wie eine kleine Familie.' },
    { de: 'natürlich', ru: 'конечно / естественно', example: 'Die Chefs bekommen natürlich auch ein Geschenk.' },
    { de: 'darin', ru: 'в этом / внутри', example: 'Darin sind Schokolade und ein Brief.' },
    { de: 'ein bisschen', ru: 'немножко / чуть-чуть', example: 'Darin sind ein bisschen Schokolade.' },
    { de: 'toll', ru: 'классный / замечательный', example: 'Eine tolle Weihnachtsfeier.' },
  ],

  // ─── GRAMMAR FOCUS ───
  grammarFocus: [
    'Akkusativ: einen Platz, einen Kaiserschmarrn, einen guten Hollundersaft',
    'Perfekt: haben vorbereitet (haben + Partizip II)',
    'Unpersönliches "es gibt": es gibt Nachspeise, es gibt Eis',
    'Konjunktion deswegen: ...und deswegen ist die Firma wie eine Familie',
  ],

  // ─── QUESTIONS ───
  questions: [
    { q: 'Wie viele Mitarbeiter hat die Firma?', a: 'Insgesamt 15 Mitarbeiter.' },
    { q: 'Wo findet die Weihnachtsfeier statt?', a: 'In einem guten Restaurant.' },
    { q: 'Was isst der Erzähler?', a: 'Leckere Käsespätzle und einen Kaiserschmarrn mit Apfelmus.' },
    { q: 'Was ist in den Geschenken?', a: 'Ein bisschen Schokolade und ein netter, persönlicher Brief.' },
    { q: 'Bekommen die Chefs auch ein Geschenk?', a: 'Ja, natürlich bekommen sie auch ein Geschenk.' },
  ],

  // ─── SENTENCE TRANSLATIONS ───
  sentenceTranslations: {
    'In der Weihnachtszeit macht meine Firma immer eine tolle Weihnachtsfeier.': 'В рождественское время моя компания всегда устраивает замечательную рождественскую вечеринку.',
    'Wir sind nur ein kleines Unternehmen.': 'Мы всего лишь маленькая компания.',
    'Wir sind insgesamt nur 15 Mitarbeiter und deswegen ist die Firma wie eine kleine Familie.': 'Нас всего 15 сотрудников, и поэтому компания как маленькая семья.',
    'Dieses Jahr machen wir auch eine Weihnachtsfeier und reservieren dafür einen Platz in einem guten Restaurant.': 'В этом году мы тоже устраиваем рождественскую вечеринку и бронируем место в хорошем ресторане.',
    'Alle Kollegen und auch die Chefs kommen.': 'Приходят все коллеги и начальство.',
    'Wir essen und trinken.': 'Мы едим и пьём.',
    'Ich esse leckere Käsespätzle und trinke einen guten Hollundersaft.': 'Я ем вкусные сырные шпецле и пью хороший бузиновый сок.',
    'Danach gibt es Nachspeise.': 'После этого десерт.',
    'Fast alle essen Eis, aber ich esse einen kleinen Kaiserschmarrn mit Apfelmus.': 'Почти все едят мороженое, а я ем маленький кайзершмаррн с яблочным пюре.',
    'Dann bekommt jeder ein kleines Geschenk.': 'Затем каждый получает маленький подарок.',
    'Die Chefs haben sie vorbereitet.': 'Их подготовили начальники.',
    'Darin sind ein bisschen Schokolade und ein netter, persönlicher Brief.': 'Внутри немного шоколада и милое, личное письмо.',
    'Die Chefs bekommen von uns natürlich auch ein Geschenk.': 'Конечно, начальники тоже получают от нас подарок.',
  },

  // ─── COMPREHENSION QUIZ ───
  comprehensionQuiz: [
    {
      question: 'Wie viele Mitarbeiter sind insgesamt in der Firma?',
      options: ['13', '25', '15', '14'],
      correct: '15',
    },
    {
      question: 'Wo reservieren sie einen Platz?',
      options: ['im Restaurant', 'in der Firma', 'im Taxi', 'im Theater'],
      correct: 'im Restaurant',
    },
    {
      question: 'Was isst der Erzähler als Hauptgericht?',
      options: ['Pommes', 'Schweinsbraten', 'Käsespätzle', 'Currywurst'],
      correct: 'Käsespätzle',
    },
    {
      question: 'Was trinkt der Erzähler?',
      options: ['Apfelsaft', 'Hollundersaft', 'Orangensaft', 'Wasser'],
      correct: 'Hollundersaft',
    },
    {
      question: 'Was ist außer Schokolade noch in den Geschenken?',
      options: ['Blumen', 'Geld', 'Socken', 'persönlicher Brief'],
      correct: 'persönlicher Brief',
    },
  ],

  // ─── FILL-IN STORY ───
  fillStory: {
    title: 'РОЖДЕСТВЕНСКАЯ ВЕЧЕРИНКА НА РАБОТЕ',
    text: 'В рождественское время моя {0} устраивает замечательную {1}. Мы маленькое {2}. Нас {3} только 15 {4}, и {5} компания — как семья.\n\nМы бронируем место в хорошем {6}. Приходят все {7} и {8}. Я ем вкусные {9} и пью {10}.\n\nПотом десерт — {11}. Почти все едят мороженое, а я ем {12} с {13}.\n\nЗатем каждый получает маленький {14}. Внутри {15} шоколада и {16}, {17} письмо.',
    blanks: [
      { answer: 'Firma', hint: 'фирма (die Firma)' },
      { answer: 'Weihnachtsfeier', hint: 'рождественская вечеринка (die Weihnachtsfeier)' },
      { answer: 'Unternehmen', hint: 'предприятие (das Unternehmen)' },
      { answer: 'insgesamt', hint: 'всего (insgesamt)' },
      { answer: 'Mitarbeiter', hint: 'сотрудники (der Mitarbeiter, Pl.)' },
      { answer: 'deswegen', hint: 'поэтому (deswegen)' },
      { answer: 'Restaurant', hint: 'ресторан (das Restaurant)' },
      { answer: 'Kollegen', hint: 'коллеги (der Kollege, Pl.)' },
      { answer: 'die Chefs', hint: 'начальники (der Chef, Pl.)' },
      { answer: 'Käsespätzle', hint: 'сырные шпецле (die Käsespätzle)' },
      { answer: 'Hollundersaft', hint: 'бузиновый сок (der Hollundersaft)' },
      { answer: 'die Nachspeise', hint: 'десерт (die Nachspeise)' },
      { answer: 'einen Kaiserschmarrn', hint: 'кайзершмаррн (der Kaiserschmarrn, Akk.)' },
      { answer: 'Apfelmus', hint: 'яблочное пюре (das Apfelmus)' },
      { answer: 'das Geschenk', hint: 'подарок (das Geschenk)' },
      { answer: 'ein bisschen', hint: 'немножко (ein bisschen)' },
      { answer: 'ein netter', hint: 'милое (nett)' },
      { answer: 'persönlicher', hint: 'личное (persönlich)' },
    ],
  },

  // ═══════════════════════════════════════════════
  // 7 PROMPT TYPES
  // ═══════════════════════════════════════════════

  prompts: {

    // ─── TYPE 0: INTERACTIVE EXERCISES ───
    exercises: {
      title: 'Интерактивные упражнения',
      icon: '🏋',
      instruction: 'Тренируйте словарь, артикли и грамматику прямо на сайте — без AI.',
      promptText: null,
    },

    // ─── TYPE 1: ORIGINAL TEXT ───
    original: {
      title: 'Оригинальный текст',
      icon: '📖',
      instruction: 'Прочитайте текст. Нажмите на незнакомое слово, чтобы увидеть перевод.',
      promptText: null,
    },

    // ─── TYPE 2: GRAMMAR + TRANSLATION ───
    grammar: {
      title: 'Перевод + грамматика',
      icon: '📝',
      instruction: 'Скопируйте промт в AI-чат. AI покажет образец разбора первого предложения, потом вы переводите по одному.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок перевода текста по предложениям с разбором грамматики.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Die Weihnachtsfeier" (A2) · Тема: Работа / Рождество / Еда
Источник: https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ-СПРАВОЧНИК:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
ПРИНЦИП: СНАЧАЛА ПОКАЖИ КАК — ПОТОМ ПРОСИ
━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━
СТАРТ:
━━━━━━━━━━━━━━━━━━━━━━━

«Привет! Переводим "Die Weihnachtsfeier" — текст про рождественскую вечеринку на работе.

Разберём первое предложение ВМЕСТЕ.»

━━━━━━━━━━━━━━━━━━━━━━━
ОБРАЗЕЦ:
━━━━━━━━━━━━━━━━━━━━━━━

«"In der Weihnachtszeit macht meine Firma immer eine tolle Weihnachtsfeier."

По словам:
  • In der Weihnachtszeit — в рождественское время (Dativ после "in" — ГДЕ/КОГДА?)
  • macht — устраивает (от "machen", здесь = организовать)
  • meine Firma — моя фирма
  • immer — всегда
  • eine tolle Weihnachtsfeier — замечательную рождественскую вечеринку (Akk.)

📌 "Weihnachtsfeier" = Weihnacht (Рождество) + s + Feier (праздник).
  Составные слова — конёк немецкого!

Перевод: "В рождественское время моя фирма всегда устраивает замечательную рождественскую вечеринку."

Теперь ты!»

━━━━━━━━━━━━━━━━━━━━━━━
ДАЛЕЕ — УЧЕНИК ПЕРЕВОДИТ САМ:
━━━━━━━━━━━━━━━━━━━━━━━

ПРАВИЛЬНО → «Genau!» + дальше (2 строки макс.)
ОШИБКА → ❌ → ✓ + почему (4 строки макс.)
ЗАТРУДНЕНИЕ → разбей на части

━━━━━━━━━━━━━━━━━━━━━━━
МИНИ-УРОКИ:
━━━━━━━━━━━━━━━━━━━━━━━

  • После абзаца 1: Vergleich mit "wie" (wie eine Familie)
  • После абзаца 2: Akkusativ (einen Platz, leckere Käsespätzle, einen Hollundersaft)
  • После абзаца 3: "es gibt" + Akkusativ (es gibt Nachspeise)
  • После абзаца 4: Perfekt (haben vorbereitet), darin (в этом)

ДЕЛАЙ ЖИВЫМ:
• «"Käsespätzle" = Käse (сыр) + Spätzle (маленькие клёцки). Schwäbisches Nationalgericht!»
• «"Kaiserschmarrn" = Kaiser (император) + Schmarrn (ерунда). Десерт императора!»
• «"Hollundersaft" = Hollunder (бузина) + Saft (сок). Типичный немецкий напиток.»

━━━━━━━━━━━━━━━━━━━━━━━
ИТОГ:
━━━━━━━━━━━━━━━━━━━━━━━

«Молодец!

📌 Что узнал:
  • Akkusativ: einen Platz, einen Kaiserschmarrn
  • "es gibt" + Akk.: es gibt Nachspeise
  • Perfekt: haben vorbereitet
  • Составные слова: Weihnachtsfeier, Käsespätzle, Kaiserschmarrn, Hollundersaft
  • Vergleich mit "wie": wie eine Familie»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ВСЁ на русском. Немецкий — только из текста.
• ОБРАЗЕЦ → ученик → мини-урок.
• Максимум 1 поправка. Темп важен.

⏸ WAIT-РЕЖИМ: жди ответа.

💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Покажи образец. Дай второе предложение.`,
    },

    // ─── TYPE 3: VOCABULARY + EXERCISES ───
    vocabulary: {
      title: 'Словарь + упражнения',
      icon: '📚',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт урок словаря в 5 этапов.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю текста "Die Weihnachtsfeier".

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Die Weihnachtsfeier" (A2) · Тема: Работа / Рождество / Еда
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ УРОКА:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
5 ЭТАПОВ: Знакомство → Викторина → Перевод → Контекст → Пересказ
━━━━━━━━━━━━━━━━━━━━━━━

СТАРТ:
«Привет! Учим словарь "Die Weihnachtsfeier" — рабочий праздник, еда, коллеги.»

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 1 — ЗНАКОМСТВО:
━━━━━━━━━━━━━━━━━━━━━━━

Группа 1 — "На работе":
  🔵 die Firma — фирма
  🔵 das Unternehmen — предприятие
  🔵 der Mitarbeiter — сотрудник
  🔵 der Kollege — коллега
  🔵 der Chef — начальник

  📌 "Firma" и "Unternehmen" — почти синонимы!
  📌 DER Chef — мужской род, даже если начальник — женщина (die Chefin)

Группа 2 — "Еда и напитки":
  🔵 die Käsespätzle — сырные шпецле
  🔵 der Hollundersaft — бузиновый сок
  🔵 die Nachspeise — десерт
  🔵 der Kaiserschmarrn — кайзершмаррн
  🔵 das Apfelmus — яблочное пюре

Группа 3 — "Праздник":
  🔵 die Weihnachtsfeier — рождественская вечеринка
  🔵 das Geschenk — подарок
  🔵 der Brief — письмо
  🔵 reservieren — бронировать
  🔵 vorbereiten — подготавливать

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 2 — ВИКТОРИНА (8 вопросов):
━━━━━━━━━━━━━━━━━━━━━━━

DE→RU и RU→DE. Быстрый темп.

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 3 — ПЕРЕВОД (10 слов):
━━━━━━━━━━━━━━━━━━━━━━━

Артикли обязательны!

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 4 — КОНТЕКСТ (5 заданий):
━━━━━━━━━━━━━━━━━━━━━━━

1. Wir _______ einen Platz im Restaurant. → reservieren
2. Alle _______ und auch die Chefs kommen. → Kollegen
3. Danach gibt es _______. → Nachspeise
4. Jeder bekommt ein kleines _______. → Geschenk
5. Die Chefs haben sie _______. → vorbereitet

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 5 — МИНИ-ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Перескажи 3-4 предложениями. Слова: Firma, Weihnachtsfeier, Kollegen, Restaurant, Geschenk.

Начни: "Meine Firma macht eine..."»

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• СНАЧАЛА ПОКАЖИ. Артикли обязательны!
• Интересные факты:
  «"Kaiserschmarrn" — по легенде, любимый десерт императора Франца-Иосифа!»
  «"Spätzle" — от швабского "Spatz" (воробышек). Маленькие как воробушки!»

⏸ WAIT-РЕЖИМ.

💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 5 этапов. Начни Этап 1.`,
    },

    // ─── TYPE 4: DIALOGUE TRAINER ───
    dialogue: {
      title: 'Диалог-тренажёр',
      icon: '🎭',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт разговорную тренировку по теме рабочих праздников и еды.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по теме "Die Weihnachtsfeier".
Главная цель — РАЗГОВОРИТЬ ученика.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ-ОСНОВА: "Die Weihnachtsfeier" (A2)
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 1 — ПОВТОРЕНИЕ (5 фраз):
━━━━━━━━━━━━━━━━━━━━━━━

1. "Wir machen eine Weihnachtsfeier." (Мы устраиваем рождественскую вечеринку)
2. "Wir reservieren einen Platz im Restaurant." (Мы бронируем место в ресторане)
3. "Ich esse leckere Käsespätzle." (Я ем вкусные сырные шпецле)
4. "Jeder bekommt ein Geschenk." (Каждый получает подарок)
5. "Meine Firma ist wie eine Familie." (Моя фирма — как семья)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 2 — ВИКТОРИНА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1:
«Was macht die Firma in der Weihnachtszeit? (Что делает фирма на Рождество?)
  A) Sie macht eine Weihnachtsfeier.
  B) Sie macht Überstunden. (сверхурочные 😄)
  C) Sie schließt für immer.
Скажи!»

ВОПРОС 2:
«Was isst du am liebsten als Nachspeise? (Что ты любишь на десерт?)
  A) Eis.
  B) Kaiserschmarrn mit Apfelmus.
  C) Pizza. (как десерт? 😂)
Выбери и скажи!»

ВОПРОС 3:
«Was ist in den Geschenken? (Что в подарках?)
  A) Schokolade und ein persönlicher Brief.
  B) Ein neues Auto.
  C) Nichts.
Скажи!»

ВОПРОС 4:
«Wie ist die Firma? (Какая фирма?)
  A) Groß und unpersönlich.
  B) Klein und wie eine Familie.
  C) Laut und chaotisch.
Выбери!»

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 3 — ДОСТРОЙКА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

1. «Bei der Weihnachtsfeier esse ich gern...» (На рождественской вечеринке я люблю есть...)
2. «Als Geschenk möchte ich...» (В подарок я хочу...)
3. «Meine Kollegen sind...» (Мои коллеги...)
4. «Am liebsten feiere ich Weihnachten mit...» (Больше всего я люблю праздновать Рождество с...)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Feierst du Weihnachten? Wie?»
   (Ты празднуешь Рождество? Как?)

2. «Was isst du am liebsten im Winter?»
   (Что ты любишь есть зимой?)

3. «Hast du nette Kollegen? Erzähl!»
   (У тебя хорошие коллеги? Расскажи!)

4. Бонус: «Was wäre das perfekte Weihnachtsgeschenk für dich?»
   (Какой был бы идеальный рождественский подарок для тебя?)

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• РАЗГОВОРИТЬ! Если ученик рассказал про свой праздник — поддержи!
• Юмор приветствуется.
• Темы: Рождество, еда, работа, коллеги, подарки.

⏸ WAIT-РЕЖИМ: жди ответа.

💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 4 фазы. Начни Фазу 1.`,
    },

    // ─── TYPE 5: SOCRATIC METHOD ───
    socratic: {
      title: 'Сократовский разбор',
      icon: '🏛',
      instruction: 'Скопируйте промт в AI-чат. AI задаёт вопросы, чтобы вы САМИ открыли грамматику.',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, уровень A2.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Die Weihnachtsfeier" (A2)
Источник: https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ГРАММАТИЧЕСКИЙ ФОКУС:
━━━━━━━━━━━━━━━━━━━━━━━
• Akkusativ: einen Platz, leckere Käsespätzle, einen guten Hollundersaft
• "es gibt" + Akkusativ
• Perfekt: haben vorbereitet
• Vergleich mit "wie": wie eine kleine Familie
• Konjunktion "deswegen": deswegen ist die Firma wie eine Familie

━━━━━━━━━━━━━━━━━━━━━━━
ПРЕДЛОЖЕНИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

ПРЕДЛОЖЕНИЕ 1: «Wir reservieren dafür einen Platz in einem guten Restaurant.»
  Цель: Akkusativ vs Dativ
  → «"einen Platz" — почему "einen" а не "ein"?»
  → «Бронировать ЧТО? — место. Akkusativ!»
  → «А "in einem Restaurant" — почему "einem"? ГДЕ? — Dativ!»
  → Ученик: Akkusativ = кого/что, Dativ = где/кому

ПРЕДЛОЖЕНИЕ 2: «Ich esse leckere Käsespätzle und trinke einen guten Hollundersaft.»
  Цель: Akkusativ с прилагательными
  → «"leckere Käsespätzle" — какое окончание у прилагательного? Почему "-e"?»
  → «Plural + Akkusativ = окончание "-e". А "einen guten" — мужской род + Akk. = "-en"!»
  → Ученик: Окончания прилагательных зависят от рода, числа и падежа

ПРЕДЛОЖЕНИЕ 3: «Danach gibt es Nachspeise.»
  Цель: "es gibt" + Akkusativ
  → «"es gibt" — что это за конструкция?»
  → «"es gibt" = "имеется / бывает". Что бывает? Nachspeise!»
  → «После "es gibt" ВСЕГДА Akkusativ: "es gibt EINEN Kaiserschmarrn"»
  → Ученик: es gibt + Akkusativ

ПРЕДЛОЖЕНИЕ 4: «Die Chefs haben sie vorbereitet.»
  Цель: Perfekt
  → «Это прошлое или настоящее?»
  → «"haben... vorbereitet" — два слова для прошедшего! Perfekt!»
  → «"vorbereiten" — vor + bereiten. Partizip II: vor-ge-bereitet? Нет! Просто "vorbereitet"!»
  → «Потому что "vor-" = неотделяемая? Нет, "vor-" отделяемая! Но в Partizip II "ge-" вставляется МЕЖДУ: "VOR-ge-bereitet"!»
  → Ученик: Trennbare Verben в Perfekt: приставка + ge + основа

ПРЕДЛОЖЕНИЕ 5: «Wir sind insgesamt nur 15 Mitarbeiter und deswegen ist die Firma wie eine kleine Familie.»
  Цель: Konjunktion "deswegen" + Vergleich mit "wie"
  → «"deswegen" — что это слово делает?»
  → «"deswegen" = "поэтому". А что после? "ist" — глагол! Сразу!»
  → «"wie eine kleine Familie" — что значит "wie" здесь?»
  → «"wie" = "как". Сравнение: фирма КАК семья.»
  → Ученик: deswegen + глагол; wie = как (сравнение)

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ВСЁ на русском. 1-2 вопроса за раз.
• При ошибке — уточняющий вопрос.
• После каждого предложения: «Сформулируй правило.»

⏸ WAIT-РЕЖИМ.

💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Первое предложение. Первый вопрос.`,
    },

    // ─── TYPE 6: SYNONYMIZATION ───
    synonyms: {
      title: 'Синонимизация',
      icon: '🔄',
      instruction: 'Скопируйте промт в AI-чат. Викторина: выберите правильный синоним из 3 вариантов.',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи "Синонимизацию" в формате ВИКТОРИНЫ.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Die Weihnachtsfeier" (A2)
Источник: https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
10 ВОПРОСОВ:
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1 — ЗАМЕНА ГЛАГОЛА
Оригинал: «Meine Firma macht eine tolle Weihnachtsfeier.»
  A) Meine Firma organisiert eine tolle Weihnachtsfeier. ✓ (organisieren = организовать)
  B) Meine Firma vergisst die Weihnachtsfeier. ✗ (vergessen = забыть!)
  C) Meine Firma verbietet die Weihnachtsfeier. ✗ (verbieten = запретить!)
Объяснение: «machen» = «organisieren» в контексте праздников.

ВОПРОС 2 — ЗАМЕНА СУЩЕСТВИТЕЛЬНОГО
Оригинал: «Wir sind nur ein kleines Unternehmen.»
  A) Wir sind nur eine kleine Firma. ✓ (Firma = Unternehmen)
  B) Wir sind nur eine große Fabrik. ✗ (groß ≠ klein, Fabrik = завод)
  C) Wir sind nur ein kleines Team. ✗ (Team ≈ команда, не компания)
Объяснение: «Unternehmen» = «Firma». Оба — «компания/предприятие».

ВОПРОС 3 — СИНОНИМ НАРЕЧИЯ
Оригинал: «Deswegen ist die Firma wie eine kleine Familie.»
  A) Deshalb ist die Firma wie eine kleine Familie. ✓ (deshalb = deswegen = поэтому)
  B) Trotzdem ist die Firma wie eine kleine Familie. ✗ (trotzdem = несмотря на это)
  C) Außerdem ist die Firma wie eine kleine Familie. ✗ (außerdem = кроме того)
Объяснение: «deswegen» = «deshalb». Оба — «поэтому».

ВОПРОС 4 — СИНОНИМ ГЛАГОЛА
Оригинал: «Wir reservieren einen Platz im Restaurant.»
  A) Wir buchen einen Tisch im Restaurant. ✓ (buchen = бронировать)
  B) Wir verlassen das Restaurant. ✗ (verlassen = покидать)
  C) Wir kochen im Restaurant. ✗ (kochen = готовить — другое!)
Объяснение: «reservieren» = «buchen». Оба — «бронировать».

ВОПРОС 5 — AKTIV → PASSIV
Оригинал: «Die Chefs haben die Geschenke vorbereitet.»
  A) Die Geschenke wurden von den Chefs vorbereitet. ✓ (Passiv Perfekt!)
  B) Die Chefs haben die Geschenke vergessen. ✗ (vergessen = забыть!)
  C) Die Geschenke haben die Chefs bekommen. ✗ (наоборот!)
Объяснение: Passiv Perfekt: «wurden + Partizip II».

ВОПРОС 6 — WEIL
Оригинал: «Wir sind nur 15 Mitarbeiter. Die Firma ist wie eine Familie.»
  A) Die Firma ist wie eine Familie, weil wir nur 15 Mitarbeiter sind. ✓
  B) Die Firma ist wie eine Familie, aber wir sind nur 15 Mitarbeiter. ✗ (aber = но)
  C) Die Firma ist wie eine Familie, obwohl wir viele Mitarbeiter sind. ✗ (obwohl + viele = противоречие)
Объяснение: «weil» = «потому что». Глагол «sind» в конец!

ВОПРОС 7 — DESHALB
Оригинал: «Alle Kollegen kommen. Es wird eine tolle Feier.»
  A) Alle Kollegen kommen, deshalb wird es eine tolle Feier. ✓
  B) Alle Kollegen kommen, trotzdem wird es langweilig. ✗ (trotzdem + langweilig — другой смысл)
  C) Kein Kollege kommt, deshalb wird es toll. ✗ (kein = никто — противоположное)
Объяснение: «deshalb» = «поэтому».

ВОПРОС 8 — ПЕРЕФРАЗИРОВАНИЕ
Оригинал: «Jeder bekommt ein kleines Geschenk.»
  A) Alle bekommen kleine Geschenke. ✓ (jeder = alle)
  B) Niemand bekommt ein Geschenk. ✗ (niemand = никто — наоборот!)
  C) Nur die Chefs bekommen Geschenke. ✗ (nur die Chefs — не все!)
Объяснение: «jeder» = «alle». Каждый = все.

ВОПРОС 9 — ПРИДАТОЧНОЕ
Оригинал: «Ein netter, persönlicher Brief.»
  A) Ein Brief, der nett und persönlich ist. ✓
  B) Ein Brief, der langweilig ist. ✗ (langweilig = скучный)
  C) Kein Brief. ✗ (kein = нет)
Объяснение: Прилагательное → придаточное с «der...ist».

ВОПРОС 10 — СИНОНИМ ВЫРАЖЕНИЯ
Оригинал: «Darin sind ein bisschen Schokolade und ein Brief.»
  A) Im Geschenk findet man etwas Schokolade und einen Brief. ✓ (darin = im Geschenk)
  B) Das Geschenk ist leer. ✗ (leer = пустой — наоборот!)
  C) Darin ist nur ein Brief. ✗ (nur = только — не хватает шоколада)
Объяснение: «darin» = «im Geschenk». «ein bisschen» = «etwas» (немного).

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Один вопрос за раз. Жди.
• Объяснение + пара синонимов после каждого.
• Мини-итоги каждые 3 вопроса.

СТАРТ: Поприветствуй. Формат. Вопрос 1.`,
    },

    // ─── TYPE 7: LEFEBVRE RETELLING ───
    lefebvre: {
      title: 'Пересказ по Лефевру',
      icon: '🪞',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт рефлексивный пересказ текста по методу Лефевра.',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи рефлексивный пересказ "Die Weihnachtsfeier" по методу В.А. Лефевра.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Die Weihnachtsfeier" (A2)
Источник: https://lingua.com/de/deutsch/lesen/die-weihnachtsfeier/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 1 — ОБРАЗЕЦ (абзац 1):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  КТО? → Meine Firma (моя фирма)
  ЧТО? → macht Weihnachtsfeier (устраивает вечеринку)
  КАКАЯ ФИРМА? → klein, 15 Mitarbeiter, wie eine Familie
  КОГДА? → in der Weihnachtszeit

Пересказ:
  "Meine Firma ist klein — nur 15 Mitarbeiter.
   In der Weihnachtszeit machen wir eine tolle Feier.
   Die Firma ist wie eine Familie."»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 2 — ВМЕСТЕ (абзац 2 — ресторан):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  ГДЕ? → ... (подскажи: im Restaurant)
  КТО ПРИХОДИТ? → ... (подскажи: alle Kollegen und Chefs)
  ЧТО ЕДЯТ? → ... (подскажи: Käsespätzle, Hollundersaft)

Перескажи! Начни: "Dieses Jahr reservieren wir..."»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (абзацы 3-4):
━━━━━━━━━━━━━━━━━━━━━━━

«Десерт и подарки — попробуй сам:
  ЧТО НА ДЕСЕРТ? ЧТО В ПОДАРКАХ? КТО ПОДГОТОВИЛ?»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 4 — ПОЛНЫЙ ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Весь текст 5-6 предложениями:
  1) Фирма: маленькая → как семья
  2) Ресторан: коллеги → еда → десерт
  3) Подарки: шоколад + письмо → и для шефов тоже

Начинай!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 5 — РЕФЛЕКСИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

«Подумай:
  • Была ли у тебя такая вечеринка на работе?
  • Попробуй: "Bei meiner Arbeit feiern wir..." или "Ich mag Weihnachten, weil..."»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• СНАЧАЛА ОБРАЗЕЦ. Если молчит — начало предложения.

⏸ WAIT-РЕЖИМ. 💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Объясни метод. Образец на абзаце 1.`,
    },

  }, // end prompts
};

// Register lesson in global array
LESSONS.push(LESSON_39);
