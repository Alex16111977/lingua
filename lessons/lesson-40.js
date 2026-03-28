// Lesson 40: Dreck unter den Nägeln (A2)
// Source: https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/

const LESSON_40 = {
  id: 'lesson-40',
  number: 40,
  title: 'Dreck unter den Nägeln',
  subtitle: 'Heute habe ich mit meiner Schwester Susi viel im Garten draußen gespielt',
  level: 'A2',
  section: 'premium',
  topics: ['garden', 'family', 'playing', 'perfekt', 'imperativ'],
  source: 'Lingua.com',
  url: 'https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/',

  // ─── ORIGINAL TEXT ───
  text: `Heute habe ich mit meiner Schwester Susi viel im Garten draußen gespielt. Wir waren im Sandkasten und haben eine Sandburg gebaut. Dann waren wir auf der Schaukel. Danach haben wir Würmer im Gras gesucht. Das hat sehr viel Spaß gemacht.

Dann haben Susi und ich Blumen für meine Mutter gepflückt. Bald gibt es Mittagessen und wir wollen sie überraschen.

Meine Mutter ruft: "Mittagessen!" Susi und ich laufen los und geben ihr die Blumen. Meine Mutter freut sich sehr. Dann sieht sie aber unsere Hände und sagt: "Ihr habt ja viel Dreck unter den Fingernägeln! Geht schnell ins Bad und wascht euch eure Hände. Dann gibt es Mittagessen".`,

  // ─── VOCABULARY (A2-B1, 25 words) ───
  vocabulary: [
    { de: 'der Garten', ru: 'сад', gender: 'maskulin', example: 'Ich habe im Garten draußen gespielt.' },
    { de: 'der Sandkasten', ru: 'песочница', gender: 'maskulin', example: 'Wir waren im Sandkasten.' },
    { de: 'die Sandburg', ru: 'песочный замок', gender: 'feminin', example: 'Wir haben eine Sandburg gebaut.' },
    { de: 'die Schaukel', ru: 'качели', gender: 'feminin', example: 'Dann waren wir auf der Schaukel.' },
    { de: 'der Wurm', ru: 'червяк', gender: 'maskulin', example: 'Wir haben Würmer im Gras gesucht.' },
    { de: 'das Gras', ru: 'трава', gender: 'neutrum', example: 'Wir haben Würmer im Gras gesucht.' },
    { de: 'die Blume', ru: 'цветок', gender: 'feminin', example: 'Wir haben Blumen gepflückt.' },
    { de: 'das Mittagessen', ru: 'обед', gender: 'neutrum', example: 'Bald gibt es Mittagessen.' },
    { de: 'der Dreck', ru: 'грязь', gender: 'maskulin', example: 'Ihr habt viel Dreck unter den Fingernägeln!' },
    { de: 'der Fingernagel', ru: 'ноготь', gender: 'maskulin', example: 'Dreck unter den Fingernägeln.' },
    { de: 'das Bad', ru: 'ванная', gender: 'neutrum', example: 'Geht schnell ins Bad.' },
    { de: 'die Hand', ru: 'рука (кисть)', gender: 'feminin', example: 'Wascht euch eure Hände.' },
    { de: 'die Schwester', ru: 'сестра', gender: 'feminin', example: 'Ich habe mit meiner Schwester gespielt.' },
    { de: 'draußen', ru: 'на улице / снаружи', example: 'Im Garten draußen gespielt.' },
    { de: 'bauen', ru: 'строить', example: 'Wir haben eine Sandburg gebaut.' },
    { de: 'suchen', ru: 'искать', example: 'Wir haben Würmer gesucht.' },
    { de: 'pflücken', ru: 'срывать / собирать (цветы)', example: 'Wir haben Blumen gepflückt.' },
    { de: 'überraschen', ru: 'удивлять / делать сюрприз', example: 'Wir wollen sie überraschen.' },
    { de: 'rufen', ru: 'звать / кричать', example: 'Meine Mutter ruft: Mittagessen!' },
    { de: 'loslaufen', ru: 'побежать / рвануться', example: 'Susi und ich laufen los.' },
    { de: 'sich freuen', ru: 'радоваться', example: 'Meine Mutter freut sich sehr.' },
    { de: 'waschen', ru: 'мыть', example: 'Wascht euch eure Hände.' },
    { de: 'der Spaß', ru: 'веселье / удовольствие', gender: 'maskulin', example: 'Das hat sehr viel Spaß gemacht.' },
    { de: 'schnell', ru: 'быстро', example: 'Geht schnell ins Bad.' },
    { de: 'bald', ru: 'скоро', example: 'Bald gibt es Mittagessen.' },
  ],

  // ─── GRAMMAR FOCUS ───
  grammarFocus: [
    'Perfekt: habe gespielt, haben gebaut, haben gesucht, haben gepflückt (haben + Partizip II)',
    'Imperativ (ihr-Form): Geht! Wascht euch! (приказы/просьбы)',
    'Trennbare Verben: loslaufen → laufen los',
    'Reflexivverben: sich freuen, sich waschen',
  ],

  // ─── QUESTIONS ───
  questions: [
    { q: 'Wie heißt die Schwester?', a: 'Susi.' },
    { q: 'Was haben die Kinder im Sandkasten gebaut?', a: 'Eine Sandburg.' },
    { q: 'Was haben sie im Gras gesucht?', a: 'Würmer.' },
    { q: 'Warum haben sie Blumen gepflückt?', a: 'Um die Mutter zu überraschen.' },
    { q: 'Was sagt die Mutter über die Hände?', a: 'Dass sie viel Dreck unter den Fingernägeln haben und sich die Hände waschen sollen.' },
  ],

  // ─── SENTENCE TRANSLATIONS ───
  sentenceTranslations: {
    'Heute habe ich mit meiner Schwester Susi viel im Garten draußen gespielt.': 'Сегодня я много играла в саду со своей сестрой Сюзи.',
    'Wir waren im Sandkasten und haben eine Sandburg gebaut.': 'Мы были в песочнице и строили песочный замок.',
    'Dann waren wir auf der Schaukel.': 'Затем мы качались на качелях.',
    'Danach haben wir Würmer im Gras gesucht.': 'После этого мы искали червей в траве.',
    'Das hat sehr viel Spaß gemacht.': 'Это было очень весело.',
    'Dann haben Susi und ich Blumen für meine Mutter gepflückt.': 'Потом Сюзи и я нарвали цветов для моей мамы.',
    'Bald gibt es Mittagessen und wir wollen sie überraschen.': 'Скоро обед, и мы хотим её удивить.',
    'Meine Mutter ruft: "Mittagessen!"': 'Моя мама зовёт: «Обед!»',
    'Susi und ich laufen los und geben ihr die Blumen.': 'Сюзи и я бежим и дарим ей цветы.',
    'Meine Mutter freut sich sehr.': 'Моя мама очень рада.',
    'Dann sieht sie aber unsere Hände und sagt: "Ihr habt ja viel Dreck unter den Fingernägeln!"': 'Затем она видит наши руки и говорит: «У вас столько грязи под ногтями!»',
    'Geht schnell ins Bad und wascht euch eure Hände.': '«Быстро идите в ванную и помойте руки.»',
    'Dann gibt es Mittagessen.': '«Потом будет обед.»',
  },

  // ─── COMPREHENSION QUIZ ───
  comprehensionQuiz: [
    {
      question: 'Wie heißt die Schwester?',
      options: ['Susanne', 'Susi', 'Sophie', 'Susanna'],
      correct: 'Susi',
    },
    {
      question: 'Was haben die Kinder im Sandkasten gebaut?',
      options: ['einen Fluss', 'einen Berg', 'eine Sandburg', 'eine Stadt'],
      correct: 'eine Sandburg',
    },
    {
      question: 'Was haben sie im Gras gesucht?',
      options: ['Blumen', 'Würmer', 'Käfer', 'Schnecken'],
      correct: 'Würmer',
    },
    {
      question: 'Wo haben die Kinder Dreck?',
      options: ['unter den Augen', 'an den Füßen', 'an den Knien', 'unter den Fingernägeln'],
      correct: 'unter den Fingernägeln',
    },
    {
      question: 'Wo sollen die Kinder ihre Hände waschen?',
      options: ['im Wohnzimmer', 'im Bad', 'im Schlafzimmer', 'in der Küche'],
      correct: 'im Bad',
    },
  ],

  // ─── FILL-IN STORY ───
  fillStory: {
    title: 'ИГРЫ В САДУ И ГРЯЗНЫЕ РУКИ',
    text: 'Сегодня я много играла в {0} со своей {1} Сюзи. Мы были в {2} и построили {3}. Потом мы качались на {4}. После этого мы искали {5} в {6}. Это было очень {7}!\n\nПотом мы нарвали {8} для мамы. {9} обед, и мы хотим её {10}.\n\nМама зовёт: «{11}!» Мы бежим и дарим ей цветы. Мама очень {12}. Но потом она видит наши {13} и говорит: «У вас много {14} под ногтями! Идите {15} в {16} и помойте руки!»',
    blanks: [
      { answer: 'dem Garten', hint: 'сад (der Garten, Dat.)' },
      { answer: 'Schwester', hint: 'сестра (die Schwester)' },
      { answer: 'dem Sandkasten', hint: 'песочница (der Sandkasten, Dat.)' },
      { answer: 'eine Sandburg', hint: 'песочный замок (die Sandburg, Akk.)' },
      { answer: 'der Schaukel', hint: 'качели (die Schaukel, Dat.)' },
      { answer: 'Würmer', hint: 'черви (der Wurm, Pl.)' },
      { answer: 'dem Gras', hint: 'трава (das Gras, Dat.)' },
      { answer: 'viel Spaß', hint: 'весело (der Spaß)' },
      { answer: 'Blumen', hint: 'цветы (die Blume, Pl.)' },
      { answer: 'Bald', hint: 'скоро (bald)' },
      { answer: 'überraschen', hint: 'удивить (überraschen)' },
      { answer: 'Mittagessen', hint: 'обед (das Mittagessen)' },
      { answer: 'freut sich', hint: 'радуется (sich freuen)' },
      { answer: 'Hände', hint: 'руки (die Hand, Pl.)' },
      { answer: 'Dreck', hint: 'грязь (der Dreck)' },
      { answer: 'schnell', hint: 'быстро (schnell)' },
      { answer: 'das Bad', hint: 'ванная (das Bad)' },
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

    // ─── TYPE 2: GRAMMAR + TRANSLATION ───
    grammar: {
      title: 'Перевод + грамматика',
      icon: '📝',
      instruction: 'Скопируйте промт в AI-чат. AI покажет образец разбора, потом вы переводите по одному.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок перевода текста по предложениям с разбором грамматики.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Dreck unter den Nägeln" (A2) · Тема: Сад / Игры / Семья
Источник: https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ-СПРАВОЧНИК:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
ОБРАЗЕЦ:
━━━━━━━━━━━━━━━━━━━━━━━

«"Heute habe ich mit meiner Schwester Susi viel im Garten draußen gespielt."

По словам:
  • Heute — сегодня
  • habe... gespielt — играла (Perfekt! haben + Partizip II)
  • mit meiner Schwester — с моей сестрой (Dativ после "mit"!)
  • Susi — имя сестры
  • viel — много
  • im Garten — в саду (Dativ: im = in dem)
  • draußen — на улице

📌 Perfekt: "habe + ge-spiel-t" — правильные глаголы добавляют ge- и -t!
  spielen → ge-spiel-t. Как "играла" в русском — одно слово, а в немецком два!

Перевод: "Сегодня я много играла в саду со своей сестрой Сюзи."»

━━━━━━━━━━━━━━━━━━━━━━━
МИНИ-УРОКИ:
━━━━━━━━━━━━━━━━━━━━━━━

  • После абзаца 1: Perfekt — правильные (gespielt, gebaut, gesucht, gemacht) и неправильные (war = Präteritum от sein)
  • После абзаца 2: Modalverb wollen (хотеть), "es gibt" + Akk.
  • После абзаца 3: Imperativ ihr-Form (Geht! Wascht!), Reflexivverben (sich freuen, sich waschen)

ДЕЛАЙ ЖИВЫМ:
• «"Sandburg" = Sand (песок) + Burg (замок). Буквально "песочный замок"!»
• «"Fingernagel" = Finger (палец) + Nagel (гвоздь/ноготь). Ноготь = "гвоздь на пальце"!»
• «"loslaufen" = los (прочь, вперёд) + laufen (бежать). "Рвануть с места"!»

━━━━━━━━━━━━━━━━━━━━━━━
ИТОГ:
━━━━━━━━━━━━━━━━━━━━━━━

«📌 Что узнал:
  • Perfekt правильных глаголов: ge- + основа + -t (gespielt, gebaut, gesucht)
  • Imperativ ihr-Form: Geht! Wascht! (основа + -t)
  • Reflexivverben: sich freuen, sich waschen
  • Составные слова: Sandkasten, Sandburg, Fingernagel, Mittagessen»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ВСЁ на русском. ОБРАЗЕЦ → ученик → мини-урок.
• Максимум 1 поправка. Темп!

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Образец. Второе предложение.`,
    },

    // ─── TYPE 3: VOCABULARY ───
    vocabulary: {
      title: 'Словарь + упражнения',
      icon: '📚',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт урок словаря в 5 этапов.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю текста "Dreck unter den Nägeln".

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Dreck unter den Nägeln" (A2) · Тема: Сад / Игры / Семья
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
5 ЭТАПОВ:
━━━━━━━━━━━━━━━━━━━━━━━

СТАРТ: «Учим словарь "Dreck unter den Nägeln" — слова про сад, игры и природу.»

ЭТАП 1 — ЗНАКОМСТВО:

Группа 1 — "В саду":
  🔵 der Garten — сад
  🔵 der Sandkasten — песочница
  🔵 die Schaukel — качели
  🔵 das Gras — трава
  🔵 draußen — на улице

Группа 2 — "Что нашли":
  🔵 die Sandburg — песочный замок
  🔵 der Wurm — червяк
  🔵 die Blume — цветок
  🔵 der Dreck — грязь
  🔵 der Fingernagel — ноготь

Группа 3 — "Действия":
  🔵 bauen — строить
  🔵 suchen — искать
  🔵 pflücken — срывать (цветы)
  🔵 überraschen — удивлять
  🔵 waschen — мыть

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 4 — КОНТЕКСТ:
━━━━━━━━━━━━━━━━━━━━━━━

1. Wir waren im _______ und haben eine Sandburg gebaut. → Sandkasten
2. Wir haben _______ im Gras gesucht. → Würmer
3. Wir haben _______ für die Mutter gepflückt. → Blumen
4. Ihr habt viel _______ unter den Fingernägeln! → Dreck
5. _______ euch eure Hände! → Wascht

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 5 — МИНИ-ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Слова: Garten, Sandburg, Blumen, Dreck, waschen.
Начни: "Heute habe ich im Garten..."»

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• Интересные факты:
  «"Sandkasten" = Sand + Kasten (ящик). Буквально "ящик с песком"!»
  «"Schaukel" — от "schaukeln" (качаться). Качели = то, на чём качаются!»

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 5 этапов. Этап 1.`,
    },

    // ─── TYPE 4: DIALOGUE ───
    dialogue: {
      title: 'Диалог-тренажёр',
      icon: '🎭',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт разговорную тренировку по теме детских игр и семьи.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Разговорная тренировка по теме "Dreck unter den Nägeln" — детские игры, сад, семья.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ-ОСНОВА: "Dreck unter den Nägeln" (A2)
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 1 — ПОВТОРЕНИЕ (5 фраз):
━━━━━━━━━━━━━━━━━━━━━━━

1. "Ich spiele gern im Garten." (Я люблю играть в саду)
2. "Wir haben eine Sandburg gebaut." (Мы построили песочный замок)
3. "Ich habe Blumen für meine Mutter gepflückt." (Я нарвал цветов для мамы)
4. "Meine Hände sind schmutzig." (Мои руки грязные)
5. "Ich muss mir die Hände waschen." (Мне нужно помыть руки)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 2 — ВИКТОРИНА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1:
«Was hast du als Kind gern draußen gemacht? (Что ты любил делать в детстве на улице?)
  A) Ich habe im Sandkasten gespielt.
  B) Ich habe am Computer gespielt.
  C) Ich habe geschlafen. (😄)
Скажи!»

ВОПРОС 2:
«Was kann man im Garten machen? (Что можно делать в саду?)
  A) Blumen pflücken und im Gras spielen.
  B) Ein Auto reparieren.
  C) Fische fangen. (😂)
Выбери!»

ВОПРОС 3:
«Was sagt deine Mutter, wenn deine Hände schmutzig sind?
  A) "Wasch dir die Hände!"
  B) "Gut gemacht!"
  C) "Lass die Hände so!"
Скажи!»

ВОПРОС 4:
«Warum haben die Kinder Blumen gepflückt?
  A) Um die Mutter zu überraschen.
  B) Um sie zu verkaufen.
  C) Um sie zu essen.
Выбери!»

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 3 — ДОСТРОЙКА:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Als Kind habe ich gern...» (В детстве я любил...)
2. «Im Garten kann man...» (В саду можно...)
3. «Meine Mutter sagt immer...» (Моя мама всегда говорит...)
4. «Wenn es draußen warm ist, möchte ich...» (Когда на улице тепло, я хочу...)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Erzähl mir von deiner Kindheit. Was hast du gern gemacht?»
2. «Hast du einen Garten? Was machst du dort?»
3. «Hast du Geschwister? Was macht ihr zusammen?»
4. Бонус: «Was war das Lustigste, was du als Kind gemacht hast?»

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• РАЗГОВОРИТЬ! Если ученик рассказал про детство → поддержи!
• Темы: детские игры, сад, природа, семья, воспоминания.

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 4 фазы. Фаза 1.`,
    },

    // ─── TYPE 5: SOCRATIC ───
    socratic: {
      title: 'Сократовский разбор',
      icon: '🏛',
      instruction: 'Скопируйте промт в AI-чат. AI задаёт вопросы, чтобы вы САМИ открыли грамматику.',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, уровень A2.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Dreck unter den Nägeln" (A2)
Источник: https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ГРАММАТИЧЕСКИЙ ФОКУС:
━━━━━━━━━━━━━━━━━━━━━━━
• Perfekt правильных глаголов: habe gespielt, haben gebaut, haben gesucht, haben gepflückt
• Imperativ ihr-Form: Geht! Wascht euch!
• Trennbare Verben: loslaufen → laufen los
• Reflexivverben: sich freuen, sich waschen

━━━━━━━━━━━━━━━━━━━━━━━
ПРЕДЛОЖЕНИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

ПРЕДЛОЖЕНИЕ 1: «Heute habe ich mit meiner Schwester Susi viel im Garten draußen gespielt.»
  Цель: Perfekt
  → «Это прошлое. Какие ДВА слова создают прошедшее?»
  → «"habe" и "gespielt". Откуда взялось "ge-" в начале?»
  → «spielen → ge-spiel-t. Формула: ge- + основа + -t = Perfekt правильных глаголов!»
  → «В русском: "играла" — одно слово. В немецком — два!»
  → Ученик: Perfekt = haben + ge- + основа + -t

ПРЕДЛОЖЕНИЕ 2: «Wir waren im Sandkasten und haben eine Sandburg gebaut.»
  Цель: Perfekt (gebaut) + waren (Präteritum von sein)
  → «"haben gebaut" — ещё один Perfekt. Какая формула?»
  → «А "waren" — это что? Тоже прошлое?»
  → «"waren" = прошлое от "sein" (быть). Но это НЕ Perfekt, а Präteritum!»
  → «Почему "sein" в Präteritum? Потому что "sein" и "haben" чаще используют Präteritum, чем Perfekt»
  → Ученик: sein → war/waren (Präteritum); остальные глаголы → Perfekt

ПРЕДЛОЖЕНИЕ 3: «Susi und ich laufen los und geben ihr die Blumen.»
  Цель: Trennbare Verben (loslaufen)
  → «"laufen los" — что произошло с глаголом?»
  → «"loslaufen" = los + laufen. Приставка "los" убежала в конец!»
  → «В русском: "по-бежать" — приставка в начале. В немецком — в конце!»
  → Ученик: отделяемые приставки уходят в конец

ПРЕДЛОЖЕНИЕ 4: «Meine Mutter freut sich sehr.»
  Цель: Reflexivverb (sich freuen)
  → «"freut sich" — что означает "sich"?»
  → «"sich freuen" = "радоватьСЯ". "-ся" = "sich" = "себя"!»
  → Ученик: sich = -ся в русском, возвратное местоимение

ПРЕДЛОЖЕНИЕ 5: «Geht schnell ins Bad und wascht euch eure Hände.»
  Цель: Imperativ ihr-Form
  → «Кто это говорит? Мама! К кому? К ДВУМ детям!»
  → «"Geht!" — это не описание, это ПРИКАЗ! Как это называется?»
  → «Imperativ! Для "ihr": основа + -t. gehen → Geht! waschen → Wascht!»
  → «"euch" — почему не "sich"? Потому что мама говорит "вам" (ihr → euch)!»
  → Ученик: Imperativ ihr-Form = основа + -t; euch = возвратное местоимение для "ihr"

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• 1-2 вопроса за раз. Жди.
• При ошибке — уточняющий вопрос.
• После каждого: «Сформулируй правило.»

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
"Синонимизация" в формате ВИКТОРИНЫ.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Dreck unter den Nägeln" (A2)
Источник: https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
10 ВОПРОСОВ:
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1 — ЗАМЕНА ГЛАГОЛА
Оригинал: «Wir haben eine Sandburg gebaut.»
  A) Wir haben eine Sandburg errichtet. ✓ (errichten = воздвигнуть/построить)
  B) Wir haben eine Sandburg zerstört. ✗ (zerstören = разрушить!)
  C) Wir haben eine Sandburg gesehen. ✗ (sehen = видеть ≠ строить)
Объяснение: «bauen» = «errichten». Оба — «строить».

ВОПРОС 2 — ЗАМЕНА СУЩЕСТВИТЕЛЬНОГО
Оригинал: «Das hat sehr viel Spaß gemacht.»
  A) Das war sehr lustig. ✓ (lustig = весело)
  B) Das war sehr langweilig. ✗ (langweilig = скучно — наоборот!)
  C) Das war sehr traurig. ✗ (traurig = грустно!)
Объяснение: «Spaß machen» = «lustig sein». Оба — «было весело».

ВОПРОС 3 — СИНОНИМ ГЛАГОЛА
Оригинал: «Wir haben Würmer im Gras gesucht.»
  A) Wir haben nach Würmern im Gras geschaut. ✓ (nach etwas schauen = искать)
  B) Wir haben Würmer im Gras gefunden. ✗ (finden = найти ≠ искать)
  C) Wir haben Würmer im Gras gegessen. ✗ (essen = есть! 😂)
Объяснение: «suchen» ≈ «nach etwas schauen/gucken». Искать.

ВОПРОС 4 — СИНОНИМ
Оригинал: «Wir wollen sie überraschen.»
  A) Wir möchten ihr eine Freude machen. ✓ (eine Freude machen = доставить радость)
  B) Wir möchten sie erschrecken. ✗ (erschrecken = напугать!)
  C) Wir möchten sie ärgern. ✗ (ärgern = злить!)
Объяснение: «überraschen» ≈ «eine Freude machen». Приятный сюрприз.

ВОПРОС 5 — AKTIV → PASSIV
Оригинал: «Susi und ich haben Blumen gepflückt.»
  A) Die Blumen wurden von Susi und mir gepflückt. ✓ (Passiv!)
  B) Die Blumen haben uns gepflückt. ✗ (бессмыслица!)
  C) Susi und ich haben die Blumen gegossen. ✗ (gießen = поливать — другое!)
Объяснение: Passiv Perfekt: «wurden + Partizip II».

ВОПРОС 6 — WEIL
Оригинал: «Die Kinder pflücken Blumen. Sie wollen die Mutter überraschen.»
  A) Die Kinder pflücken Blumen, weil sie die Mutter überraschen wollen. ✓
  B) Die Kinder pflücken Blumen, aber sie wollen die Mutter überraschen. ✗ (aber — нет противоречия)
  C) Die Kinder pflücken Blumen, obwohl sie die Mutter überraschen wollen. ✗ (obwohl — нет уступки)
Объяснение: «weil» = «потому что». «wollen» уходит в конец!

ВОПРОС 7 — DESHALB
Оригинал: «Die Hände sind schmutzig. Die Mutter schickt die Kinder ins Bad.»
  A) Die Hände sind schmutzig, deshalb schickt die Mutter sie ins Bad. ✓
  B) Die Hände sind sauber, deshalb schickt sie sie ins Bad. ✗ (sauber = чистые — нет причины!)
  C) Die Hände sind schmutzig, trotzdem gehen sie nicht ins Bad. ✗ (trotzdem — другая логика)
Объяснение: «deshalb» = «поэтому». Грязные руки → ванная.

ВОПРОС 8 — ПЕРЕФРАЗИРОВАНИЕ
Оригинал: «Meine Mutter freut sich sehr.»
  A) Meine Mutter ist sehr glücklich. ✓ (glücklich = счастливый)
  B) Meine Mutter ist sehr traurig. ✗ (traurig = грустный — наоборот!)
  C) Meine Mutter schläft. ✗ (другое!)
Объяснение: «sich freuen» = «glücklich sein». Радоваться = быть счастливым.

ВОПРОС 9 — ПРИДАТОЧНОЕ
Оригинал: «Ihr habt schmutzige Hände.»
  A) Ihr habt Hände, die schmutzig sind. ✓
  B) Ihr habt Hände, die sauber sind. ✗ (sauber = чистые — наоборот!)
  C) Ihr habt keine Hände. ✗ (😂)
Объяснение: Прилагательное → придаточное: «schmutzige Hände» → «Hände, die schmutzig sind».

ВОПРОС 10 — СИНОНИМ ВЫРАЖЕНИЯ
Оригинал: «Bald gibt es Mittagessen.»
  A) In Kürze gibt es etwas zu essen. ✓ (in Kürze = скоро)
  B) Es gibt nie Mittagessen. ✗ (nie = никогда — наоборот!)
  C) Das Mittagessen ist schon vorbei. ✗ (vorbei = закончилось!)
Объяснение: «bald» = «in Kürze». Оба — «скоро».

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• Один вопрос за раз. Объяснение + пара синонимов.
• Мини-итоги каждые 3 вопроса.

СТАРТ: Поприветствуй. Формат. Вопрос 1.`,
    },

    // ─── TYPE 7: LEFEBVRE ───
    lefebvre: {
      title: 'Пересказ по Лефевру',
      icon: '🪞',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт рефлексивный пересказ по методу Лефевра.',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Рефлексивный пересказ "Dreck unter den Nägeln" по методу В.А. Лефевра.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Dreck unter den Nägeln" (A2)
Источник: https://lingua.com/de/deutsch/lesen/dreck-unter-den-naegeln/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 1 — ОБРАЗЕЦ (абзац 1):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  КТО? → Ich und Schwester Susi (я и сестра Сюзи)
  ГДЕ? → im Garten draußen (в саду)
  ЧТО ДЕЛАЛИ? → gespielt, Sandburg gebaut, Schaukel, Würmer gesucht
  КАК БЫЛО? → viel Spaß! (было очень весело)

Пересказ:
  "Heute habe ich mit meiner Schwester Susi im Garten gespielt.
   Wir haben eine Sandburg gebaut und Würmer gesucht.
   Das hat viel Spaß gemacht!"»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 2 — ВМЕСТЕ (абзац 2):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  ЧТО СДЕЛАЛИ? → ... (подскажи: Blumen gepflückt — нарвали цветов)
  ДЛЯ КОГО? → ... (подскажи: für die Mutter)
  ЗАЧЕМ? → ... (подскажи: überraschen — удивить)

Перескажи! Начни: "Dann haben wir..."»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (абзац 3):
━━━━━━━━━━━━━━━━━━━━━━━

«Что мама? Что увидела? Что сказала?»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 4 — ПОЛНЫЙ ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Весь текст 5-6 предложениями:
  1) Сад: играли → песочный замок → качели → черви
  2) Цветы: для мамы → сюрприз
  3) Мама: радуется → грязные руки → мыть!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 5 — РЕФЛЕКСИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

«Было ли у тебя похожее? Попробуй:
"Als Kind habe ich gern..." или "Meine Mutter hat immer gesagt..."»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ОБРАЗЕЦ первым. Если молчит — начало предложения.

⏸ WAIT-РЕЖИМ. 💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Метод. Образец абзац 1.`,
    },

  }, // end prompts
};

LESSONS.push(LESSON_40);
