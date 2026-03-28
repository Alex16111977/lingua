// Lesson 41: Ein Bewerbungsgespräch (A2-B1)
// Source: https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/

const LESSON_41 = {
  id: 'lesson-41',
  number: 41,
  title: 'Ein Bewerbungsgespräch',
  subtitle: 'Ich sitze gerade mit meiner Mutter am Tisch und erzähle ihr von dem Bewerbungsgespräch',
  level: 'A2-B1',
  section: 'premium',
  topics: ['job', 'interview', 'career', 'indirekte-rede', 'perfekt', 'nebensatz-dass'],
  source: 'Lingua.com',
  url: 'https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/',

  // ─── ORIGINAL TEXT ───
  text: `Ich sitze gerade mit meiner Mutter am Tisch und erzähle ihr von dem Bewerbungsgespräch, das ich gestern hatte.

"Der Herr von der Personalabteilung war sehr nett. Er hat mir ein Glas Wasser angeboten und ist dann mit mir die Bewerbungsunterlagen durchgegangen", erzählte ich ihr.

Meine Mutter sagte dann: "Es ist gut, dass ich deine Bewerbung nochmal durchgelesen habe, bevor du sie abgeschickt hast. Ich habe zwei Rechtschreibfehler korrigiert." Meine Mutter lächelt.

"Ja! Danke, Mama", sagte ich. Dann erzählte ich weiter: "Er hat mich auch nach meinen Stärken gefragt. Ich habe gesagt, dass ich schon Erfahrungen in dem Beruf habe und sehr engagiert bin. Ich glaube, ich bekomme den Job!"`,

  // ─── VOCABULARY (A2-B1, 25 words) ───
  vocabulary: [
    { de: 'das Bewerbungsgespräch', ru: 'собеседование', gender: 'neutrum', example: 'Ich erzähle von dem Bewerbungsgespräch.' },
    { de: 'die Personalabteilung', ru: 'отдел кадров', gender: 'feminin', example: 'Der Herr von der Personalabteilung war sehr nett.' },
    { de: 'die Bewerbungsunterlagen', ru: 'документы для подачи заявки', gender: 'feminin', example: 'Er ist mit mir die Bewerbungsunterlagen durchgegangen.' },
    { de: 'die Bewerbung', ru: 'заявление / заявка на работу', gender: 'feminin', example: 'Ich habe deine Bewerbung nochmal durchgelesen.' },
    { de: 'der Rechtschreibfehler', ru: 'орфографическая ошибка', gender: 'maskulin', example: 'Ich habe zwei Rechtschreibfehler korrigiert.' },
    { de: 'die Stärke', ru: 'сильная сторона', gender: 'feminin', example: 'Er hat mich nach meinen Stärken gefragt.' },
    { de: 'die Erfahrung', ru: 'опыт', gender: 'feminin', example: 'Ich habe schon Erfahrungen in dem Beruf.' },
    { de: 'der Beruf', ru: 'профессия', gender: 'maskulin', example: 'Ich habe Erfahrungen in dem Beruf.' },
    { de: 'der Job', ru: 'работа / должность', gender: 'maskulin', example: 'Ich glaube, ich bekomme den Job!' },
    { de: 'das Glas', ru: 'стакан', gender: 'neutrum', example: 'Er hat mir ein Glas Wasser angeboten.' },
    { de: 'anbieten', ru: 'предлагать', example: 'Er hat mir ein Glas Wasser angeboten.' },
    { de: 'durchgehen', ru: 'просматривать / проходить', example: 'Er ist mit mir die Unterlagen durchgegangen.' },
    { de: 'durchlesen', ru: 'прочитать (полностью)', example: 'Ich habe deine Bewerbung nochmal durchgelesen.' },
    { de: 'abschicken', ru: 'отправлять', example: 'Bevor du sie abgeschickt hast.' },
    { de: 'korrigieren', ru: 'исправлять', example: 'Ich habe zwei Fehler korrigiert.' },
    { de: 'lächeln', ru: 'улыбаться', example: 'Meine Mutter lächelt.' },
    { de: 'fragen', ru: 'спрашивать', example: 'Er hat mich nach meinen Stärken gefragt.' },
    { de: 'glauben', ru: 'верить / считать', example: 'Ich glaube, ich bekomme den Job!' },
    { de: 'engagiert', ru: 'увлечённый / активный', example: 'Ich bin sehr engagiert.' },
    { de: 'nochmal', ru: 'ещё раз', example: 'Ich habe die Bewerbung nochmal durchgelesen.' },
    { de: 'bevor', ru: 'прежде чем / до того как', example: 'Bevor du sie abgeschickt hast.' },
    { de: 'gerade', ru: 'прямо сейчас / как раз', example: 'Ich sitze gerade am Tisch.' },
    { de: 'gestern', ru: 'вчера', example: 'Das Bewerbungsgespräch, das ich gestern hatte.' },
    { de: 'weiter', ru: 'дальше / далее', example: 'Dann erzählte ich weiter.' },
    { de: 'nett', ru: 'любезный / приятный', example: 'Der Herr war sehr nett.' },
  ],

  // ─── GRAMMAR FOCUS ───
  grammarFocus: [
    'Perfekt mit haben und sein: hat angeboten, ist durchgegangen, habe korrigiert, hast abgeschickt',
    'Nebensatz mit dass: Ich habe gesagt, dass ich Erfahrungen habe (глагол в конец!)',
    'Nebensatz mit bevor: bevor du sie abgeschickt hast',
    'Indirekte Rede / Redewiedergabe: Er hat gesagt, dass...',
    'Trennbare Verben im Perfekt: an-ge-boten, durch-ge-gangen, durch-ge-lesen, ab-ge-schickt',
  ],

  // ─── QUESTIONS ───
  questions: [
    { q: 'Wem erzählt der Sprecher vom Bewerbungsgespräch?', a: 'Seiner Mutter.' },
    { q: 'Aus welcher Abteilung war der Herr?', a: 'Aus der Personalabteilung.' },
    { q: 'Was hat der Herr dem Sprecher angeboten?', a: 'Ein Glas Wasser.' },
    { q: 'Wie viele Rechtschreibfehler hat die Mutter korrigiert?', a: 'Zwei Rechtschreibfehler.' },
    { q: 'Wonach hat der Herr gefragt?', a: 'Nach den Stärken des Sprechers.' },
  ],

  // ─── SENTENCE TRANSLATIONS ───
  sentenceTranslations: {
    'Ich sitze gerade mit meiner Mutter am Tisch und erzähle ihr von dem Bewerbungsgespräch, das ich gestern hatte.': 'Я сижу за столом с мамой и рассказываю ей о собеседовании, которое у меня было вчера.',
    'Der Herr von der Personalabteilung war sehr nett.': 'Мужчина из отдела кадров был очень любезен.',
    'Er hat mir ein Glas Wasser angeboten und ist dann mit mir die Bewerbungsunterlagen durchgegangen.': 'Он предложил мне стакан воды, а затем просмотрел со мной мои документы.',
    'Meine Mutter sagte dann: "Es ist gut, dass ich deine Bewerbung nochmal durchgelesen habe, bevor du sie abgeschickt hast."': 'Моя мама сказала: «Хорошо, что я ещё раз прочитала твою заявку перед тем, как ты её отправил.»',
    'Ich habe zwei Rechtschreibfehler korrigiert.': 'Я исправила две орфографические ошибки.',
    'Meine Mutter lächelt.': 'Моя мама улыбается.',
    'Ja! Danke, Mama.': 'Да! Спасибо, мама.',
    'Dann erzählte ich weiter: "Er hat mich auch nach meinen Stärken gefragt."': 'Затем я продолжил: «Он также спросил меня о моих сильных сторонах.»',
    'Ich habe gesagt, dass ich schon Erfahrungen in dem Beruf habe und sehr engagiert bin.': 'Я сказал, что у меня уже есть опыт в этой профессии и что я очень увлечён.',
    'Ich glaube, ich bekomme den Job!': 'Я думаю, я получу эту работу!',
  },

  // ─── COMPREHENSION QUIZ ───
  comprehensionQuiz: [
    {
      question: 'Wem erzählt der Sprecher vom Bewerbungsgespräch?',
      options: ['seiner Mutter', 'seiner Großmutter', 'seinem Vater', 'seiner Schwester'],
      correct: 'seiner Mutter',
    },
    {
      question: 'Wo sitzen sie?',
      options: ['auf dem Boden', 'auf dem Sofa', 'am Tisch', 'auf dem Bett'],
      correct: 'am Tisch',
    },
    {
      question: 'Aus welcher Abteilung war der Herr?',
      options: ['Rechtsabteilung', 'Schriftabteilung', 'Finanzabteilung', 'Personalabteilung'],
      correct: 'Personalabteilung',
    },
    {
      question: 'Wie viele Rechtschreibfehler hat die Mutter gefunden?',
      options: ['3', '1', '2', '4'],
      correct: '2',
    },
    {
      question: 'Wonach hat der Herr gefragt?',
      options: ['nach den Stärken', 'nach den Schwächen', 'nach dem Namen', 'nach dem Geburtsdatum'],
      correct: 'nach den Stärken',
    },
  ],

  // ─── FILL-IN STORY ───
  fillStory: {
    title: 'МОЁ СОБЕСЕДОВАНИЕ',
    text: 'Я сижу с мамой за столом и рассказываю ей о {0}, которое у меня было {1}.\n\nМужчина из {2} был очень {3}. Он предложил мне {4} воды, а затем просмотрел со мной {5}.\n\nМама сказала: «Хорошо, что я {6} твою {7}, {8} ты её отправил. Я {9} два {10}.» Мама {11}.\n\n«Он также спросил меня о моих {12}. Я сказал, что у меня уже есть {13} в этой {14} и что я очень {15}. Я думаю, я получу {16}!»',
    blanks: [
      { answer: 'dem Bewerbungsgespräch', hint: 'собеседование (das Bewerbungsgespräch, Dat.)' },
      { answer: 'gestern', hint: 'вчера (gestern)' },
      { answer: 'der Personalabteilung', hint: 'отдел кадров (die Personalabteilung, Dat.)' },
      { answer: 'nett', hint: 'любезный (nett)' },
      { answer: 'ein Glas', hint: 'стакан (das Glas, Akk.)' },
      { answer: 'die Bewerbungsunterlagen', hint: 'документы (die Bewerbungsunterlagen)' },
      { answer: 'durchgelesen', hint: 'прочитала (durchlesen, Partizip II)' },
      { answer: 'Bewerbung', hint: 'заявку (die Bewerbung)' },
      { answer: 'bevor', hint: 'прежде чем (bevor)' },
      { answer: 'korrigiert', hint: 'исправила (korrigieren, Partizip II)' },
      { answer: 'Rechtschreibfehler', hint: 'орфографические ошибки (der Rechtschreibfehler, Pl.)' },
      { answer: 'lächelt', hint: 'улыбается (lächeln)' },
      { answer: 'Stärken', hint: 'сильные стороны (die Stärke, Pl.)' },
      { answer: 'Erfahrungen', hint: 'опыт (die Erfahrung, Pl.)' },
      { answer: 'dem Beruf', hint: 'профессия (der Beruf, Dat.)' },
      { answer: 'engagiert', hint: 'увлечённый (engagiert)' },
      { answer: 'den Job', hint: 'работу (der Job, Akk.)' },
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
      instruction: 'Скопируйте промт в AI-чат. AI покажет образец, потом вы переводите по одному предложению.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2-B1).
Проведи урок перевода текста по предложениям с разбором грамматики.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Ein Bewerbungsgespräch" (A2-B1) · Тема: Работа / Собеседование / Карьера
Источник: https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ-СПРАВОЧНИК:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
ОБРАЗЕЦ:
━━━━━━━━━━━━━━━━━━━━━━━

«"Ich sitze gerade mit meiner Mutter am Tisch und erzähle ihr von dem Bewerbungsgespräch, das ich gestern hatte."

По словам:
  • Ich sitze — я сижу (Präsens, прямо сейчас)
  • gerade — как раз / прямо сейчас
  • mit meiner Mutter — с моей мамой (Dativ после "mit"!)
  • am Tisch — за столом (am = an dem, Dativ)
  • erzähle ihr — рассказываю ей (Dativ: ihr = ей)
  • von dem Bewerbungsgespräch — о собеседовании (Dativ после "von"!)
  • das ich gestern hatte — которое у меня было вчера (Relativsatz!)

📌 "Bewerbungsgespräch" = Bewerbung (заявка) + s + Gespräch (разговор).
  Буквально "разговор по заявке" = собеседование!
📌 "das ich gestern hatte" — относительное придаточное. "das" = "которое".

Перевод: "Я сижу за столом с мамой и рассказываю ей о собеседовании, которое у меня было вчера."»

━━━━━━━━━━━━━━━━━━━━━━━
МИНИ-УРОКИ:
━━━━━━━━━━━━━━━━━━━━━━━

  • После абзаца 1: Relativsatz (das ich gestern hatte)
  • После абзаца 2: Perfekt с sein и haben (hat angeboten, ist durchgegangen); trennbare глаголы в Perfekt
  • После абзаца 3: Nebensatz mit "dass" и "bevor" (глагол в конец!); Perfekt неправильных глаголов (durchgelesen, abgeschickt)
  • После абзаца 4: Indirekte Rede (Ich habe gesagt, dass...), Akkusativ (nach meinen Stärken)

ДЕЛАЙ ЖИВЫМ:
• «"Personalabteilung" = Personal (персонал) + Abteilung (отдел). 4 слога в одном слове!»
• «"Rechtschreibfehler" = Recht (право) + Schreib (писать) + Fehler (ошибка). Ошибка правописания = 3 слова в одном!»
• «"durchgehen" — hier: zusammen schauen. Как "пройтись по документам" в русском!»

━━━━━━━━━━━━━━━━━━━━━━━
ИТОГ:
━━━━━━━━━━━━━━━━━━━━━━━

«📌 Что узнал:
  • Perfekt с sein: ist durchgegangen (sein + Partizip II — для глаголов движения)
  • Trennbare Verben в Perfekt: an-ge-boten, durch-ge-gangen, durch-ge-lesen, ab-ge-schickt
  • Nebensatz mit "dass": dass ich Erfahrungen habe (глагол в конец!)
  • Nebensatz mit "bevor": bevor du sie abgeschickt hast
  • Составные слова: Bewerbungsgespräch, Personalabteilung, Bewerbungsunterlagen, Rechtschreibfehler»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ВСЁ на русском. ОБРАЗЕЦ → ученик. Макс. 1 поправка. Темп!
• Текст содержит прямую речь — объясни кавычки и структуру.

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Образец. Второе предложение.`,
    },

    // ─── TYPE 3: VOCABULARY ───
    vocabulary: {
      title: 'Словарь + упражнения',
      icon: '📚',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт урок словаря в 5 этапов — от знакомства до пересказа.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2-B1).
Проведи урок по словарю текста "Ein Bewerbungsgespräch".

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Ein Bewerbungsgespräch" (A2-B1) · Тема: Работа / Собеседование
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СЛОВАРЬ:
━━━━━━━━━━━━━━━━━━━━━━━
{vocabularyList}

━━━━━━━━━━━━━━━━━━━━━━━
5 ЭТАПОВ:
━━━━━━━━━━━━━━━━━━━━━━━

СТАРТ: «Учим словарь "Ein Bewerbungsgespräch" — профессиональная лексика: работа, собеседование, карьера.»

ЭТАП 1 — ЗНАКОМСТВО:

Группа 1 — "Собеседование":
  🔵 das Bewerbungsgespräch — собеседование
  🔵 die Personalabteilung — отдел кадров
  🔵 die Bewerbungsunterlagen — документы на работу
  🔵 die Bewerbung — заявка на работу
  🔵 der Beruf — профессия

  📌 Все эти слова связаны! "Bewerbung" = заявка. "Bewerbungs-gespräch" = разговор по заявке.
  📌 "Bewerbungs-unterlagen" = документы заявки. Один корень — три слова!

Группа 2 — "Качества":
  🔵 die Stärke — сильная сторона
  🔵 die Erfahrung — опыт
  🔵 engagiert — увлечённый / активный
  🔵 der Rechtschreibfehler — орфографическая ошибка
  🔵 nett — любезный

Группа 3 — "Действия":
  🔵 anbieten — предлагать
  🔵 durchgehen — просматривать
  🔵 durchlesen — прочитать целиком
  🔵 abschicken — отправлять
  🔵 korrigieren — исправлять

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 4 — КОНТЕКСТ:
━━━━━━━━━━━━━━━━━━━━━━━

1. Der Herr von der _______ war sehr nett. → Personalabteilung
2. Er hat mir ein Glas Wasser _______. → angeboten
3. Ich habe zwei _______ korrigiert. → Rechtschreibfehler
4. Er hat mich nach meinen _______ gefragt. → Stärken
5. Ich habe schon _______ in dem Beruf. → Erfahrungen

━━━━━━━━━━━━━━━━━━━━━━━
ЭТАП 5 — МИНИ-ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Слова: Bewerbungsgespräch, Personalabteilung, Bewerbungsunterlagen, Stärken, Erfahrung, engagiert.

Начни: "Gestern hatte ich ein Bewerbungsgespräch..."»

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• Интересные факты:
  «"Bewerbung" — от "werben" (рекламировать). Bewerbung = "само-реклама" на работу!»
  «"engagiert" — от французского "engager". Заимствование!»

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 5 этапов. Этап 1.`,
    },

    // ─── TYPE 4: DIALOGUE ───
    dialogue: {
      title: 'Диалог-тренажёр',
      icon: '🎭',
      instruction: 'Скопируйте промт в AI-чат. AI проведёт разговорную тренировку на тему собеседования и карьеры.',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2-B1).
Разговорная тренировка по теме "Ein Bewerbungsgespräch" — собеседование и карьера.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ-ОСНОВА: "Ein Bewerbungsgespräch" (A2-B1)
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 1 — ПОВТОРЕНИЕ (5 фраз):
━━━━━━━━━━━━━━━━━━━━━━━

1. "Ich hatte gestern ein Bewerbungsgespräch." (У меня вчера было собеседование)
2. "Der Herr war sehr nett." (Мужчина был очень любезен)
3. "Meine Stärke ist meine Erfahrung." (Моя сильная сторона — мой опыт)
4. "Ich bin sehr engagiert." (Я очень увлечённый)
5. "Ich glaube, ich bekomme den Job!" (Я думаю, я получу эту работу!)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 2 — ВИКТОРИНА (4 вопроса):
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1:
«Was machst du bei einem Bewerbungsgespräch? (Что ты делаешь на собеседовании?)
  A) Ich erzähle von meinen Stärken und Erfahrungen.
  B) Ich schlafe ein.
  C) Ich singe ein Lied. (😄)
Скажи по-немецки!»

ВОПРОС 2:
«Was ist deine Stärke? (Какая твоя сильная сторона?)
  A) Ich bin engagiert und habe Erfahrung.
  B) Ich bin immer müde.
  C) Ich komme immer zu spät.
Выбери и скажи!»

ВОПРОС 3:
«Was hat der Herr dem Sprecher angeboten?
  A) Ein Glas Wasser.
  B) Ein Stück Kuchen.
  C) Einen neuen Computer.
Скажи!»

ВОПРОС 4:
«Was hat die Mutter in der Bewerbung korrigiert?
  A) Zwei Rechtschreibfehler.
  B) Den ganzen Text.
  C) Nichts.
Выбери!»

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 3 — ДОСТРОЙКА:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Bei einem Bewerbungsgespräch muss man...» (На собеседовании нужно...)
2. «Meine größte Stärke ist...» (Моя главная сильная сторона...)
3. «Bevor man eine Bewerbung abschickt, sollte man...» (Прежде чем отправлять заявку, нужно...)
4. «Ich möchte gern als ... arbeiten, weil...» (Я хотел бы работать ..., потому что...)

━━━━━━━━━━━━━━━━━━━━━━━
ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ:
━━━━━━━━━━━━━━━━━━━━━━━

1. «Hattest du schon mal ein Bewerbungsgespräch? Wie war es?»
   (У тебя было собеседование? Как прошло?)

2. «Was ist dein Traumberuf? Warum?»
   (Какая твоя профессия мечты? Почему?)

3. «Was sind deine Stärken und Schwächen?»
   (Какие твои сильные и слабые стороны?)

4. Бонус: «Stell dir vor: Du bist der Chef. Was fragst du den Bewerber?»
   (Представь: ты начальник. О чём спросишь кандидата?)

━━━━━━━━━━━━━━━━━━━━━━━
ИНСТРУКЦИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

• РАЗГОВОРИТЬ! Тема карьеры — взрослая, ученику есть что сказать!
• Если рассказал про свою работу → поддержи!
• Темы: работа, собеседование, карьера, профессия, навыки.

⏸ WAIT-РЕЖИМ.
💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. 4 фазы. Фаза 1.`,
    },

    // ─── TYPE 5: SOCRATIC ───
    socratic: {
      title: 'Сократовский разбор',
      icon: '🏛',
      instruction: 'Скопируйте промт в AI-чат. AI задаёт вопросы, чтобы вы САМИ открыли грамматику.',
      promptText: `Ты — терпеливый преподаватель немецкого по сократовскому методу.
Ученик — русскоязычный, уровень A2-B1.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Ein Bewerbungsgespräch" (A2-B1)
Источник: https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
ГРАММАТИЧЕСКИЙ ФОКУС:
━━━━━━━━━━━━━━━━━━━━━━━
• Perfekt с sein: ist durchgegangen (для глаголов движения/изменения)
• Trennbare Verben im Perfekt: an-ge-boten, durch-ge-gangen, durch-ge-lesen, ab-ge-schickt
• Nebensatz mit dass: Ich habe gesagt, dass ich Erfahrungen habe
• Nebensatz mit bevor: bevor du sie abgeschickt hast
• Relativsatz: das Bewerbungsgespräch, das ich gestern hatte

━━━━━━━━━━━━━━━━━━━━━━━
ПРЕДЛОЖЕНИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

ПРЕДЛОЖЕНИЕ 1: «Er hat mir ein Glas Wasser angeboten und ist dann mit mir die Bewerbungsunterlagen durchgegangen.»
  Цель: Perfekt с haben VS sein
  → «Здесь ДВА Perfekt. Найди оба!»
  → «"hat angeboten" и "ist durchgegangen". Заметил разницу?»
  → «Один с "hat", другой с "ist"! Почему?»
  → «"anbieten" → hat angeboten (предлагать — НЕ движение, haben)»
  → «"durchgehen" → ist durchgegangen (пройти — ДВИЖЕНИЕ, sein)»
  → Ученик: Глаголы движения/изменения → sein; остальные → haben

ПРЕДЛОЖЕНИЕ 2: «Es ist gut, dass ich deine Bewerbung nochmal durchgelesen habe, bevor du sie abgeschickt hast.»
  Цель: Nebensatz с dass + bevor + trennbare Verben в Perfekt
  → «Сколько здесь придаточных? Найди "dass" и "bevor"!»
  → «После "dass" где глагол? "habe" — в КОНЦЕ!»
  → «А после "bevor"? "hast" — тоже в конце!»
  → «"durchgelesen" — от "durchlesen". Где "ge-"? МЕЖДУ приставкой и основой!»
  → «"abgeschickt" — от "abschicken". Тот же принцип: ab-ge-schickt!»
  → Ученик: Trennbare Verben в Partizip II: приставка + ge + основа

ПРЕДЛОЖЕНИЕ 3: «Ich erzähle ihr von dem Bewerbungsgespräch, das ich gestern hatte.»
  Цель: Relativsatz
  → «"das ich gestern hatte" — что это за часть предложения?»
  → «"das" = "которое". К чему относится? К "Bewerbungsgespräch"!»
  → «"Bewerbungsgespräch" — neutrum (das). Поэтому "DAS ich hatte"!»
  → Ученик: Relativsatz: das/die/der зависит от рода существительного

ПРЕДЛОЖЕНИЕ 4: «Ich habe gesagt, dass ich schon Erfahrungen in dem Beruf habe und sehr engagiert bin.»
  Цель: dass-Satz (косвенная речь)
  → «"Ich habe gesagt, dass..." — это пересказ своих слов. Косвенная речь!»
  → «После "dass" — где "habe" и "bin"?»
  → «В КОНЦЕ! Оба глагола в конце: "...habe und ...bin"»
  → «В русском: "Я сказал, ЧТО я ИМЕЮ опыт" — глагол на месте. В немецком — в конец!»
  → Ученик: После dass оба глагола в конце

ПРЕДЛОЖЕНИЕ 5: «Meine Mutter sagte dann: "Es ist gut, dass..."»
  Цель: Прямая vs косвенная речь + Präteritum sagte
  → «"sagte" — от какого глагола? "sagen"!»
  → «Почему "sagte" а не "hat gesagt"? Оба = прошлое!»
  → «"sagte" = Präteritum. Для "sagen" в повествовании часто Präteritum.»
  → Ученик: В повествовании/рассказах часто Präteritum вместо Perfekt

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
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2-B1).
"Синонимизация" в формате ВИКТОРИНЫ.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Ein Bewerbungsgespräch" (A2-B1)
Источник: https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
10 ВОПРОСОВ:
━━━━━━━━━━━━━━━━━━━━━━━

ВОПРОС 1 — ЗАМЕНА ГЛАГОЛА
Оригинал: «Er hat mir ein Glas Wasser angeboten.»
  A) Er hat mir ein Glas Wasser gebracht. ✓ (bringen ≈ anbieten в контексте)
  B) Er hat mir ein Glas Wasser weggenommen. ✗ (wegnehmen = забрать — наоборот!)
  C) Er hat das Wasser getrunken. ✗ (он сам выпил — другое!)
Объяснение: «anbieten» ≈ «bringen» в контексте гостеприимства.

ВОПРОС 2 — ЗАМЕНА СУЩЕСТВИТЕЛЬНОГО
Оригинал: «Der Herr von der Personalabteilung war sehr nett.»
  A) Der Mitarbeiter aus der Personalabteilung war sehr freundlich. ✓ (Mitarbeiter = сотрудник, freundlich = дружелюбный)
  B) Der Herr von der Personalabteilung war böse. ✗ (böse = злой — наоборот!)
  C) Der Chef hat mich nicht empfangen. ✗ (другой смысл)
Объяснение: «Herr» ≈ «Mitarbeiter», «nett» = «freundlich». Оба — «дружелюбный».

ВОПРОС 3 — СИНОНИМ ГЛАГОЛА
Оригинал: «Er ist mit mir die Bewerbungsunterlagen durchgegangen.»
  A) Er hat mit mir die Bewerbungsunterlagen besprochen. ✓ (besprechen = обсудить)
  B) Er hat die Bewerbungsunterlagen weggeworfen. ✗ (wegwerfen = выбросить!)
  C) Er hat die Bewerbungsunterlagen verloren. ✗ (verlieren = потерять!)
Объяснение: «durchgehen» ≈ «besprechen» / «zusammen anschauen». Просмотреть = обсудить.

ВОПРОС 4 — СИНОНИМ
Оригинал: «Ich habe schon Erfahrungen in dem Beruf.»
  A) Ich kenne mich in dem Beruf schon aus. ✓ (sich auskennen = разбираться)
  B) Ich habe keine Ahnung von dem Beruf. ✗ (keine Ahnung = понятия не имею — наоборот!)
  C) Ich habe den Beruf vergessen. ✗ (vergessen = забыл!)
Объяснение: «Erfahrungen haben» = «sich auskennen». Иметь опыт = разбираться.

ВОПРОС 5 — AKTIV → PASSIV
Оригинал: «Meine Mutter hat zwei Fehler korrigiert.»
  A) Zwei Fehler wurden von meiner Mutter korrigiert. ✓ (Passiv!)
  B) Meine Mutter hat neue Fehler gemacht. ✗ (gemacht = сделала — наоборот!)
  C) Die Fehler haben sich selbst korrigiert. ✗ (бессмыслица)
Объяснение: Passiv: «wurden + Partizip II».

ВОПРОС 6 — WEIL
Оригинал: «Die Mutter hat die Bewerbung durchgelesen. Sie hat Fehler gefunden.»
  A) Die Mutter hat die Bewerbung durchgelesen, weil sie Fehler finden wollte. ✓
  B) Die Mutter hat die Bewerbung durchgelesen, aber sie hat nichts gefunden. ✗ (aber — и она нашла!)
  C) Die Mutter hat die Bewerbung nicht gelesen, weil es keine Fehler gab. ✗ (nicht gelesen — наоборот!)
Объяснение: «weil» = «потому что». «wollte» в конец!

ВОПРОС 7 — DESHALB
Оригинал: «Ich bin engagiert. Ich glaube, ich bekomme den Job.»
  A) Ich bin engagiert, deshalb glaube ich, dass ich den Job bekomme. ✓
  B) Ich bin engagiert, trotzdem bekomme ich den Job nicht. ✗ (trotzdem = несмотря на это — другая логика)
  C) Ich bin faul, deshalb bekomme ich den Job. ✗ (faul = ленивый — противоречие)
Объяснение: «deshalb» = «поэтому». Увлечённость → уверенность в работе.

ВОПРОС 8 — ПЕРЕФРАЗИРОВАНИЕ
Оригинал: «Ich glaube, ich bekomme den Job!»
  A) Ich bin mir sicher, dass ich die Stelle bekomme! ✓ (sich sicher sein = быть уверенным, Stelle = место)
  B) Ich weiß, dass ich den Job nicht bekomme. ✗ (nicht — наоборот!)
  C) Mir ist es egal, ob ich den Job bekomme. ✗ (egal = всё равно — безразличие!)
Объяснение: «glauben» ≈ «sich sicher sein». «Job» = «Stelle». Верить ≈ быть уверенным.

ВОПРОС 9 — ПРИДАТОЧНОЕ
Оригинал: «Der Herr war ein netter Mann.»
  A) Der Herr war ein Mann, der nett war. ✓
  B) Der Herr war ein Mann, der böse war. ✗ (böse = злой!)
  C) Es gab keinen Herrn. ✗ (нет смысла)
Объяснение: «netter Mann» → «Mann, DER nett war». Maskulin → «der».

ВОПРОС 10 — СИНОНИМ ВЫРАЖЕНИЯ
Оригинал: «Meine Mutter hat die Bewerbung nochmal durchgelesen.»
  A) Meine Mutter hat die Bewerbung noch einmal überprüft. ✓ (überprüfen = проверить)
  B) Meine Mutter hat die Bewerbung zum ersten Mal gelesen. ✗ (zum ersten Mal = впервые ≠ nochmal)
  C) Meine Mutter hat die Bewerbung weggeworfen. ✗ (wegwerfen = выбросить!)
Объяснение: «nochmal durchlesen» = «noch einmal überprüfen». Ещё раз прочитать = перепроверить.

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
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2-B1).
Рефлексивный пересказ "Ein Bewerbungsgespräch" по методу В.А. Лефевра.

━━━━━━━━━━━━━━━━━━━━━━━
ТЕКСТ: "Ein Bewerbungsgespräch" (A2-B1)
Источник: https://lingua.com/de/deutsch/lesen/ein-bewerbungsgespraech/
━━━━━━━━━━━━━━━━━━━━━━━

{lessonText}

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 1 — ОБРАЗЕЦ (начало текста):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  КТО? → Ich und meine Mutter (я и мама)
  ГДЕ? → am Tisch (за столом)
  ЧТО ДЕЛАЮТ? → erzählen (рассказывают)
  О ЧЁМ? → über das Bewerbungsgespräch gestern (о вчерашнем собеседовании)

Пересказ:
  "Ich sitze mit meiner Mutter am Tisch.
   Ich erzähle ihr von meinem Bewerbungsgespräch.
   Es war gestern."

3 предложения — вся вводная часть!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 2 — ВМЕСТЕ (собеседование):
━━━━━━━━━━━━━━━━━━━━━━━

«Карта:
  КТО БЫЛ? → ... (подскажи: der Herr von der Personalabteilung)
  КАК БЫЛ? → ... (подскажи: sehr nett)
  ЧТО ПРЕДЛОЖИЛ? → ... (подскажи: ein Glas Wasser)
  ЧТО ДЕЛАЛИ? → ... (подскажи: Bewerbungsunterlagen durchgegangen)

Перескажи! Начни: "Der Herr war..."»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (мама + стрengths):
━━━━━━━━━━━━━━━━━━━━━━━

«Что сделала мама? О чём спрашивали? Что ответил?»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 4 — ПОЛНЫЙ ПЕРЕСКАЗ:
━━━━━━━━━━━━━━━━━━━━━━━

«Весь текст 5-6 предложениями:
  1) Ситуация: сижу с мамой → рассказываю
  2) Собеседование: нетт Herr → Wasser → Unterlagen
  3) Мама: проверила Bewerbung → нашла Fehler
  4) Вопросы: Stärken → Erfahrung → engagiert → bekomme den Job!»

━━━━━━━━━━━━━━━━━━━━━━━
СТУПЕНЬ 5 — РЕФЛЕКСИЯ:
━━━━━━━━━━━━━━━━━━━━━━━

«Подумай:
  • Было ли у тебя собеседование?
  • Что бы ты сказал о своих Stärken?
  • Попробуй: "Meine Stärke ist..." или "Ich habe Erfahrung in..."»

━━━━━━━━━━━━━━━━━━━━━━━
ПРАВИЛА:
━━━━━━━━━━━━━━━━━━━━━━━

• ОБРАЗЕЦ первым. Если молчит — начало предложения.
• Текст с прямой речью — помоги отделить кто что говорит.

⏸ WAIT-РЕЖИМ. 💡 КОМАНДЫ: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Метод. Образец.`,
    },

  }, // end prompts
};

LESSONS.push(LESSON_41);
