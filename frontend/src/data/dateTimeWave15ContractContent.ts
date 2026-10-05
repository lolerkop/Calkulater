import type {CalculatorCopy} from '../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const dateTimeWave15ContractContent: Record<'ru'|'en'|'uk'|'de'|'es',Record<string,Body>> = {
  "ru": {
    "age-calculator": {
      "longDescription": "Калькулятор возраста считает полный возраст по дате рождения: годы, месяцы, дни и общее количество прожитых дней. Можно считать не только на сегодня, но и на любую выбранную дату, что удобно для анкет, документов, поздравлений и проверки будущего возраста.",
      "howToUse": [
        "Выберите дату рождения.",
        "Дата расчёта по умолчанию — сегодня, но её можно изменить.",
        "Посмотрите полный возраст и общее число дней.",
        "Для будущей даты укажите её вручную в поле расчёта."
      ],
      "howItWorks": "Возраст раскладывается от даты рождения вперёд: выбирается максимальное число полных календарных месяцев до даты расчёта, затем оставшиеся календарные дни. Месяцы делятся на полные годы и остаток. Если в месяце годовщины нет исходного числа, берётся последний день месяца. Поэтому 31 января → 28 февраля — полный месяц, а 29 февраля в обычном году имеет годовщину 28 февраля. Это правило данной модели, а не определение юридического дня рождения. Общее число дней — разница календарных дат, без часов и переходов на летнее время. Дата расчёта раньше рождения отклоняется; пустая дата расчёта означает сегодняшнюю дату устройства. Для воспроизводимого результата задайте обе даты явно. Даты принимаются в формате YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю без исторических переходов конкретной страны.",
      "example": "Родились 01.01.1990, сегодня 01.02.2026 → 36 лет 1 месяц.",
      "faq": [
        {
          "q": "Учитываются ли високосные годы?",
          "a": "Да, расчёт идёт по календарным датам с високосными годами."
        },
        {
          "q": "Когда считается день рождения 29 февраля?",
          "a": "В этой модели годовщина 29 февраля в обычном году — 28 февраля, а 1 марта уже следующий день. Юридическую дату совершеннолетия или другой официальный порог калькулятор не устанавливает."
        },
        {
          "q": "Можно ли посчитать сколько до дня рождения?",
          "a": "Да, строка «До дня рождения» уже показывает остаток от даты расчёта до ближайшей годовщины. Изменение даты расчёта показывает возраст на эту дату, а не интервал от сегодняшнего дня."
        },
        {
          "q": "Можно ли считать возраст на прошлую дату?",
          "a": "Да, укажите нужную дату расчёта в прошлом, и калькулятор покажет возраст на тот день."
        },
        {
          "q": "Почему возраст в месяцах и днях не равен простому делению?",
          "a": "Месяцы имеют разную длину, поэтому расчёт ведётся по календарю, а не через среднее число дней."
        },
        {
          "q": "Подходит ли калькулятор для документов?",
          "a": "Он помогает быстро проверить возраст, но для официальных документов всегда ориентируйтесь на требования конкретной организации."
        }
      ]
    },
    "working-days-calculator": {
      "longDescription": "Калькулятор рабочих дней считает календарные, рабочие и выходные дни между двумя датами. Он полезен для планирования задач, отпусков, сроков по договору и внутренних дедлайнов. Праздники и нестандартные нерабочие даты можно добавить вручную как исключения.",
      "howToUse": [
        "Выберите даты начала и окончания.",
        "Включите учёт выходных, если суббота и воскресенье считаются рабочими.",
        "Выберите исключаемую дату и нажмите «Добавить дату». Повторите для каждой даты.",
        "Проверьте результат с календарём вашей страны или компании."
      ],
      "howItWorks": "Обе границы входят в диапазон. По умолчанию рабочими считаются понедельник–пятница; переключатель рабочей субботы добавляет субботу, но не воскресенье. Если включены все выходные, субботний переключатель не влияет. В форме выберите одну дату и нажмите «Добавить дату»; следующие даты добавляйте по одной. Повторы учитываются один раз, даты вне диапазона не влияют, ошибочная дата отклоняет расчёт. Исключение имеет приоритет перед выходным: такой день входит в строку исключений, а не в строку выходных. Календарные дни равны рабочим + выходным + исключённым. Государственные праздники, переносы и производственный календарь не загружаются. Даты принимаются в формате YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю без исторических переходов конкретной страны.",
      "example": "01.02.2026 — 28.02.2026 → 28 календарных, 20 рабочих, 8 выходных.",
      "faq": [
        {
          "q": "Какие дни считаются выходными?",
          "a": "Суббота и воскресенье. Праздничные дни нужно указать вручную."
        },
        {
          "q": "Можно ли указать диапазон дат для исключения?",
          "a": "Сейчас нет — добавляйте каждую конкретную дату отдельно через кнопку «Добавить дату»."
        },
        {
          "q": "Включаются ли начальная и конечная даты?",
          "a": "Да, диапазон считается по календарным дням внутри выбранных дат. Если дата попадает под выходной или исключение, она не добавляется к рабочим."
        },
        {
          "q": "Можно ли считать шестидневную рабочую неделю?",
          "a": "Да. Включите режим рабочей субботы: воскресенье останется выходным, а суббота будет учитываться как рабочий день. Праздники и переносы добавляйте в исключённые даты."
        },
        {
          "q": "Подходит ли расчёт для юридических сроков?",
          "a": "Для предварительной оценки — да. Для официальных сроков сверяйте правила исчисления дней в договоре, законе или локальном календаре."
        }
      ]
    },
    "date-shift-calculator": {
      "longDescription": "Калькулятор дат прибавляет к выбранной дате или вычитает из неё интервал: годы, месяцы, недели и дни. Он отвечает на вопросы вида «какое число будет через 90 дней» и «какая дата была за 3 месяца до». Кроме самой даты калькулятор показывает день недели, общее смещение в календарных днях, номер дня в году и номер недели по ISO 8601.",
      "howToUse": [
        "Выберите исходную дату — по умолчанию подставляется сегодняшняя.",
        "Укажите направление: прибавить интервал к дате или отнять от неё.",
        "Заполните нужные поля интервала: годы, месяцы, недели, дни. Их можно комбинировать.",
        "Проверьте итоговую дату, день недели и общее смещение в календарных днях."
      ],
      "howItWorks": "Части интервала должны быть целыми и неотрицательными; направление задаётся отдельным переключателем. Годы и месяцы объединяются в один месячный сдвиг, применяются с усечением дня до конца целевого месяца; только затем прибавляются или вычитаются недели ×7 + дни. Пустая часть интервала означает 0. Сдвиг на месяцы не равен фиксированным 30 дням и может быть необратимым из-за усечения. Выход результата за поддерживаемый календарь даёт ошибку, а не неполную дату. Дни недели, день года и номер ISO-недели относятся к итоговой дате. Это календарная арифметика без праздников, часовых поясов и автоматического применения правил юридических сроков. Даты принимаются в формате YYYY-MM-DD, годы 0001–9999, по продолженному григорианскому календарю без исторических переходов конкретной страны.",
      "example": "01.01.2026 плюс 90 дней → 01.04.2026, среда. Смещение — 90 календарных дней, 91-й день года, 14-я неделя по ISO 8601.",
      "faq": [
        {
          "q": "Как считаются месяцы, если в них разное число дней?",
          "a": "Месяцы прибавляются по календарю, а не по 30 дней. Если в целевом месяце нужного числа нет, берётся последний день месяца: 31 января плюс месяц даёт 28 февраля."
        },
        {
          "q": "Почему прибавить месяц и потом отнять месяц не всегда возвращает исходную дату?",
          "a": "Из-за усечения. 31 января плюс месяц — это 28 февраля, а 28 февраля минус месяц — 28 января. Это обычное поведение календарной арифметики, а не ошибка расчёта."
        },
        {
          "q": "Что будет, если исходная дата — 29 февраля?",
          "a": "День усекается только если в целевом месяце нет исходного числа. Перенос в февраль обычного года даёт 28 февраля; но 29.02.2024 + 13 месяцев = 29.03.2025, потому что 29 марта существует. Дни и недели прибавляются после месячного сдвига."
        },
        {
          "q": "Считаются ли выходные и праздники?",
          "a": "Нет, здесь считаются календарные дни подряд. Если нужны только рабочие дни, воспользуйтесь калькулятором рабочих дней."
        },
        {
          "q": "Что такое номер недели по ISO 8601?",
          "a": "Это международный стандарт нумерации недель: неделя начинается с понедельника, а первой неделей года считается та, в которую попадает первый четверг. Поэтому 1 января иногда относится к последней неделе предыдущего года."
        },
        {
          "q": "Можно ли комбинировать годы, месяцы и дни?",
          "a": "Да. Сначала применяются годы и месяцы, затем недели и дни. Порядок важен: он влияет на результат, когда происходит усечение до конца месяца."
        }
      ]
    },
    "leap-year": {
      "longDescription": "Применяет григорианское правило: год, делящийся на четыре, високосный, кроме вековых, которые должны делиться ещё и на четыреста. Именно поэтому 1900 год был обычным, а 2000 — високосным.",
      "howToUse": [
        "Введите год.",
        "Прочитайте ответ.",
        "При необходимости посмотрите ближайшие високосные годы."
      ],
      "howItWorks": "Используется григорианское правило: год делится на 4 и одновременно либо не делится на 100, либо делится на 400. Это даёт 97 високосных лет за 400 лет. Год вводится целым числом; нулевой, дробный и некорректный ввод отклоняется. Соседние високосные годы ищутся строго до и после выбранного, поэтому для 2024 следующий — 2028. Для ранних лет применяется то же математическое правило, без восстановления исторического календаря конкретной страны. Високосная секунда относится к шкале времени и не меняет число дней февраля.",
      "example": "2024 год високосный, 1900 не был, а 2000 был — потому что делится на 400.",
      "faq": [
        {
          "q": "Зачем нужно вековое исключение?",
          "a": "Тропический год длится около 365,2422 суток — чуть меньше 365,25. Отбрасывание трёх високосных дней за четыре века удерживает календарь в согласии с временами года."
        },
        {
          "q": "Был ли 1900 год високосным?",
          "a": "Нет. Он делится на 100, но не на 400, поэтому февраль был из 28 дней."
        },
        {
          "q": "Как часто встречается високосный год?",
          "a": "Раз в четыре года, за вычетом вековых исключений — 97 високосных лет на каждые 400."
        },
        {
          "q": "Работает ли правило для старых дат?",
          "a": "Калькулятор применяет григорианское правило и к ранним годам. Оно не восстанавливает дату перехода конкретной страны с юлианского календаря, поэтому исторические документы требуют отдельной проверки."
        }
      ]
    },
    "sleep-time": {
      "longDescription": "Калькулятор складывает выбранное число условных 90-минутных блоков и время на засыпание, чтобы получить время подъёма или отхода ко сну. 90 минут — фиксированное допущение формулы: по введённым часам нельзя определить реальные фазы сна. Число блоков задаёт сценарий длительности, а не индивидуальную потребность во сне. Если ввести 5 блоков и 15 минут, расчёт занимает 465 минут в постели; строка 450 минут относится только к блокам. План полезен для сравнения вариантов расписания, но не гарантирует лёгкого пробуждения и не заменяет оценку качества сна.",
      "howToUse": [
        "Выберите, что вам известно: время отхода ко сну или будильник.",
        "Введите это время в часах и минутах.",
        "Задайте целое число блоков 1–12 как сценарий времени.",
        "Введите, сколько времени у вас обычно уходит на засыпание."
      ],
      "howItWorks": "Это арифметический план по фиксированным блокам 90 минут: время в постели = число блоков ×90 + введённые минуты на засыпание. Режим известного времени отхода ко сну прибавляет эту длительность, режим известного подъёма вычитает её. Часы 0–23, минуты 0–59 и число блоков 1–12 вводятся целыми; время на засыпание — целые неотрицательные минуты. Часы результата замыкаются в 24 часа и не содержат календарной даты или поправки на перевод часов. Строка «чистый сон» показывает только блоки ×90, а не измеренную длительность сна. Числовые примеры проверяют формулу, но не определяют фазу сна и не гарантируют бодрость.",
      "example": "Отход ко сну в 23:00 при пяти циклах и 15 минутах на засыпание даёт будильник на 06:45.",
      "faq": [
        {
          "q": "Цикл сна действительно длится 90 минут?",
          "a": "Нет,90 минут — фиксированный блок расчёта. NHLBI описывает переменную длительность циклов примерно 80–100 минут; по одному времени отхода ко сну фазу пробуждения вычислить нельзя."
        },
        {
          "q": "Сколько циклов выбирать?",
          "a": "Число 1–12 — техническая область модели, а не рекомендация. 5 и 6 блоков дают 7,5 и 9 часов по формуле. CDC для взрослых 18–60 лет указывает 7 часов или больше; меньший рассчитанный вариант не становится достаточным из-за попадания в условный конец цикла."
        },
        {
          "q": "Зачем прибавлять время на засыпание отдельно?",
          "a": "Время на засыпание увеличивает время в постели, но не блоки расчётного сна. Это введённое вами предположение, не измерение. Например 5 блоков и 15 минут дают 450 и 465 минут соответственно."
        },
        {
          "q": "Почему результат иногда приходится на следующий день?",
          "a": "Потому что часы сворачиваются через полночь. Лечь в 23:00 и проспать девять часов означает 08:00 следующего утра, а не 32:00."
        }
      ]
    },
    "time-duration": {
      "longDescription": "Считает, сколько времени проходит между двумя моментами, и во сколько получится время после прибавления или вычитания длительности. Переход через полночь обрабатывается как обычный случай, а не как ошибка.",
      "howToUse": [
        "Выберите, что нужно рассчитать.",
        "Введите время в часах и минутах.",
        "Прочитайте промежуток или получившееся время."
      ],
      "howItWorks": "В режиме разницы вычисляется (конец − начало) по кругу 1440 минут: одинаковые часы дают 0, более ранний конец означает следующую полночь. Даты не вводятся, поэтому несколько суток по двум часам не определяются. В режимах сложения и вычитания длительность может превышать сутки, но показываются только часы после замыкания в 24 часа. Все часы и минуты должны быть целыми в пределах полей: время 0–23/0–59, длительность 0–999 часов и 0–59 минут. Неверные значения отклоняются и больше не обрезаются молча. Расчёт не учитывает секунды, часовой пояс и перевод часов.",
      "example": "С 22:15 до 06:45 проходит 8 часов 30 минут.",
      "faq": [
        {
          "q": "Что если окончание раньше начала?",
          "a": "Это считается переходом через полночь — именно так работает ночная смена. Результат отмечается отдельной строкой."
        },
        {
          "q": "Может ли длительность превышать сутки?",
          "a": "Прибавляемая или вычитаемая длительность может быть больше 24 часов; получившееся время замыкается по кругу."
        },
        {
          "q": "Поддерживаются ли секунды?",
          "a": "Нет, расчёт идёт в целых минутах — этого достаточно для смен и расписаний."
        },
        {
          "q": "Что происходит со значениями вне диапазона?",
          "a": "Значения вне области и дробные части часов или минут отклоняются с ошибкой. Часы не заменяются ближайшей границей и минуты не усекаются; исправьте ввод до расчёта."
        }
      ]
    },
    "timezone-difference": {
      "longDescription": "Переводит время между двумя часовыми поясами, заданными смещениями UTC. Смещения вводятся числами, и это осознанное ограничение: калькулятор не знает базы часовых поясов, не выводит переход на летнее время и не хранит историю правил — он сравнивает ровно те смещения, которые вы указали. Дробные смещения поддерживаются: UTC+5:30 в Индии и UTC+5:45 в Непале не исключения, а действующие пояса, поэтому разница считается в минутах. Переход через полночь показан отдельной строкой, иначе время выглядело бы тем же календарным днём.",
      "howToUse": [
        "Введите смещение UTC того пояса, где известно время.",
        "Введите смещение UTC того пояса, в который переводите.",
        "Укажите часы и минуты исходного времени.",
        "Проверьте строку календарного дня: время могло уйти на соседние сутки."
      ],
      "howItWorks": "Сначала каждое смещение переводится из десятичных часов в целые минуты. Например 5,5 означает 5 часов 30 минут, а не 5 часов 50 минут. Принимаются смещения от−12 до+14 часов, точно задающие целые минуты; дробные минуты отклоняются. К исходному времени прибавляется (смещение назначения − исходное смещение) ×60. Сдвиг дня = целая часть вниз от суммы минут/1440; остаток задаёт часы назначения. Между крайними смещениями разница 26 часов, поэтому возможен сдвиг сразу на 2 дня. Это два фиксированных введённых смещения, без выбора города, календарной даты, IANA-правил и определения летнего времени.",
      "example": "14:30 при смещении UTC+3 соответствует 06:30 того же дня при смещении UTC−5.",
      "faq": [
        {
          "q": "Почему пояса вводятся числами, а не выбираются из списка?",
          "a": "Потому что список требует базы часовых поясов и её ежегодного обновления. Показывать устаревшее правило хуже, чем попросить смещение, которое вы можете проверить прямо сейчас."
        },
        {
          "q": "Учитывается ли переход на летнее время?",
          "a": "Нет. Если в одном из поясов действует летнее время, укажите смещение уже с его учётом — например UTC+2 вместо UTC+1."
        },
        {
          "q": "Поддерживаются ли получасовые пояса?",
          "a": "Да. Индия использует UTC+5:30, Непал — UTC+5:45, и такие смещения вводятся как 5,5 и 5,75."
        },
        {
          "q": "Что означает сдвиг суток?",
          "a": "Что переведённое время попало на соседний календарный день: плюс единица — следующие сутки, минус единица — предыдущие."
        },
        {
          "q": "Как узнать смещение нужного города?",
          "a": "Оно указано в настройках часового пояса на телефоне и компьютере рядом с названием города — обычно в виде UTC+3 или GMT+3."
        }
      ]
    },
    "work-hours": {
      "longDescription": "Считает фактически отработанные часы, а не рабочие дни календаря: из длины смены вычитается перерыв, а остаток умножается на число смен. Ночная смена обрабатывается отдельно — когда конец меньше начала, смена переходит через полночь, и прямая разность даёт отрицательное число. Прибавление суток здесь не поправка на удобство, а единственный способ получить восемь часов из «22:00 — 06:00» вместо минус шестнадцати. Перерыв длиннее смены отклоняется: отрицательного рабочего времени не бывает, и показать его значило бы выдать правдоподобную бессмыслицу.",
      "howToUse": [
        "Введите время начала смены в часах и минутах.",
        "Введите время окончания — если смена ночная, просто укажите утренний час.",
        "Укажите продолжительность перерыва в минутах.",
        "Задайте число смен в периоде и ставку за час."
      ],
      "howItWorks": "Все части времени и число смен должны быть целыми; часы 0–23, минуты 0–59. Если конец не позже начала, прибавляются 1440 минут: одинаковое начало и конец здесь означают полную 24-часовую смену. Перерыв задаётся целыми неотрицательными минутами и должен быть строго меньше смены; равный ей перерыв тоже отклоняется. Часы за период = (длина смены − перерыв)/60 × число смен. Заработок = часы × введённая ставка; ставка 0 допустима, отрицательная или нечисловая отклоняется. Валюта ставки и результата должна совпадать, конвертации нет. Оплачиваемость перерыва, сверхурочные, налоги, праздник и летнее время модель не определяет. Оплата обычно показана с двумя десятичными знаками. Малую положительную сумму ниже 0,005 денежной единицы показывают научной записью, чтобы не выдать её за ноль.",
      "example": "Смена 9:00–18:00 с часовым перерывом даёт 8 часов, а за 21 смену — 168 часов и 84 000 ₽ при ставке 500 ₽.",
      "faq": [
        {
          "q": "Как считается смена через полночь?",
          "a": "Если время окончания меньше времени начала, к разности прибавляются сутки. Смена 22:00–06:00 поэтому даёт восемь часов, а не минус шестнадцать."
        },
        {
          "q": "Почему перерыв длиннее смены не считается?",
          "a": "Перерыв должен быть строго короче смены. Равный ей тоже отклоняется, потому что модель требует положительных рабочих часов; нулевую смену здесь не рассчитывают."
        },
        {
          "q": "Чем это отличается от подсчёта рабочих дней?",
          "a": "Здесь считаются часы внутри смены, а не количество дней в календаре. Производственный календарь с праздниками считается отдельным калькулятором."
        },
        {
          "q": "Учитываются ли переработки по повышенной ставке?",
          "a": "Нет, ставка применяется ко всем часам одинаково. Для повышенных часов посчитайте их отдельной смены с другой ставкой."
        },
        {
          "q": "Что показывает длина смены до перерыва?",
          "a": "Полное время присутствия от начала до конца, включая перерыв. Оплачиваемое время — строкой выше, уже без него."
        }
      ]
    }
  },
  "en": {
    "age-calculator": {
      "longDescription": "Use this age calculator to find exact age on today or another target date.",
      "howToUse": [
        "Enter date of birth.",
        "Choose target date if needed.",
        "Review exact age and total days."
      ],
      "howItWorks": "Age is decomposed forward from the birth date: take the largest number of complete calendar months that fits before the reference date, then count the remaining calendar days. Complete months divide into years and a month remainder. If an anniversary month lacks the original day, its last day is used. Thus 31 January to 28 February is a complete month; a 29 February birth has a 28 February anniversary in a common year. This is this model’s convention, not a legal birthday rule. Total days compare calendar dates without elapsed hours or daylight-saving shifts. A reference date before birth is rejected. An empty reference date uses the device’s current date; enter both dates explicitly for a reproducible calculation. Dates use YYYY-MM-DD and years 0001–9999 under the proleptic Gregorian calendar, without country-specific historical changeovers.",
      "example": "From 1 January 1990 to 1 February 2026 the model gives 36 years,1 month and 0 days.",
      "faq": [
        {
          "q": "Which dates are compared for age?",
          "a": "Enter the date of birth and optionally a reference date. Without a reference date, the calculator uses today."
        },
        {
          "q": "How are years, months and days counted?",
          "a": "The calculation compares calendar dates, accounting for different month lengths and leap years rather than dividing elapsed milliseconds by 24 hours."
        },
        {
          "q": "What does total lived days mean?",
          "a": "It is the count of calendar days from the birth date to the reference date, independent of daylight-saving clock changes."
        },
        {
          "q": "How is a 29 February birthday treated in a common year?",
          "a": "This model uses 28 February when the anniversary month lacks day 29. That convention helps reproduce the arithmetic; it does not establish a legal birthday or an official age threshold."
        }
      ]
    },
    "working-days-calculator": {
      "longDescription": "Use this business days calculator to count weekdays, weekends and manually excluded dates between two dates.",
      "howToUse": [
        "Enter start and end dates.",
        "Choose whether weekends count as workdays.",
        "Choose an excluded date and click “Add date”; repeat for each date."
      ],
      "howItWorks": "Both endpoints are included. The default workweek is Monday–Friday; working Saturday adds Saturday but keeps Sunday excluded. When all weekends count as working, the Saturday switch has no effect. In the form, choose one date and click “Add date”; add further dates one at a time. Duplicates count once, dates outside the interval have no effect, and an invalid date rejects the calculation. An exclusion takes precedence over a weekend: it belongs to excluded dates rather than the weekend row. Calendar days equal working + weekend + excluded days. Public holidays, transferred workdays and a national employment calendar are not loaded. Dates use YYYY-MM-DD and years 0001–9999 under the proleptic Gregorian calendar, without country-specific historical changeovers.",
      "example": "From 1 to 28 February 2026 inclusive: 28 calendar days,20 Monday–Friday workdays and 8 weekend days, with no exclusions.",
      "faq": [
        {
          "q": "How are business days counted?",
          "a": "Both endpoints count. Full weeks and the remaining weekdays are counted under the selected weekend rules, then unique excluded dates are removed with priority over the weekend category."
        },
        {
          "q": "Can I change how weekends are treated?",
          "a": "Yes. Choose whether weekend days count as workdays before reading the total."
        },
        {
          "q": "Are public holidays excluded automatically?",
          "a": "No. Enter any holidays or other dates to exclude yourself; the calculator does not assume a country-specific holiday calendar."
        },
        {
          "q": "What happens when an excluded date is also a weekend?",
          "a": "It appears once as an excluded date, rather than in the weekend count. Duplicates and dates outside the selected interval do not reduce the total again."
        }
      ]
    },
    "date-shift-calculator": {
      "longDescription": "Use this date calculator to add an interval to a date or subtract one from it. It answers questions like \"what date is 90 days from today\" and also reports the weekday, the total shift in calendar days, the day of the year and the ISO 8601 week number.",
      "howToUse": [
        "Pick the start date — today is filled in by default.",
        "Choose whether to add the interval to the date or subtract it.",
        "Fill in the parts of the interval you need: years, months, weeks and days can be combined.",
        "Check the resulting date, its weekday and the total shift in calendar days."
      ],
      "howItWorks": "Interval components must be non-negative whole numbers; a separate switch supplies the direction. Years and months combine into one month shift, clamping the day to the end of the target month; only then are weeks ×7 + days added or subtracted. A blank component means 0. A calendar month is not a fixed 30 days, and clamping can make the operation irreversible. A result beyond the supported calendar produces an error rather than a partial date. Weekday, day of year and ISO week describe the resulting date. This is calendar arithmetic without holidays, time zones or automatic legal deadline rules. Dates use YYYY-MM-DD and years 0001–9999 under the proleptic Gregorian calendar, without country-specific historical changeovers.",
      "example": "1 January 2026 plus 90 days is 1 April 2026, a Wednesday — a shift of 90 calendar days, the 91st day of the year, ISO week 14.",
      "faq": [
        {
          "q": "How are months counted when they have different lengths?",
          "a": "Months are added by the calendar, not as 30 days. If the target month has no such day, the last day of that month is used: 31 January plus one month gives 28 February."
        },
        {
          "q": "Why does adding a month and then subtracting one not always return the original date?",
          "a": "Because of clamping. 31 January plus a month is 28 February, and 28 February minus a month is 28 January. That is normal calendar arithmetic, not a rounding error."
        },
        {
          "q": "What happens when the start date is 29 February?",
          "a": "The day is clamped only when the target month lacks that day. A move into February of a common year gives 28 February, but 29 February 2024 + 13 months gives 29 March 2025 because March has a day 29. Days and weeks are applied after the month shift."
        },
        {
          "q": "Does it skip weekends and holidays?",
          "a": "No, it counts consecutive calendar days. Use the business days calculator when you need working days only."
        },
        {
          "q": "What is the ISO 8601 week number?",
          "a": "It is the international standard for numbering weeks: a week starts on Monday, and the first week of a year is the one containing the first Thursday. That is why 1 January sometimes belongs to the last week of the previous year."
        },
        {
          "q": "Can I combine years, months and days?",
          "a": "Yes. Years and months are applied first, then weeks and days. The order matters whenever clamping to the end of a month happens."
        }
      ]
    },
    "leap-year": {
      "longDescription": "Applies the Gregorian rule: a year divisible by four is a leap year, except century years, which must also be divisible by four hundred. That is why 1900 was ordinary and 2000 was not.",
      "howToUse": [
        "Enter the year.",
        "Read the answer.",
        "Check the nearest leap years if you need them."
      ],
      "howItWorks": "The Gregorian rule requires divisibility by 4 and either non-divisibility by 100 or divisibility by 400. It produces 97 leap years per 400 years. Enter a whole year; zero, fractions and malformed values are rejected. Nearby leap years are strictly before and after the chosen year, so 2024 is followed by 2028. Early years use the same mathematical rule without reconstructing any country’s historical calendar. A leap second belongs to timekeeping and does not change the days in February.",
      "example": "2024 is a leap year, 1900 was not, and 2000 was — because it divides by 400.",
      "faq": [
        {
          "q": "Why is the century exception needed?",
          "a": "A tropical year is about 365.2422 days, slightly less than 365.25. Dropping three leap days every four centuries keeps the calendar aligned with the seasons."
        },
        {
          "q": "Was 1900 a leap year?",
          "a": "No. It divides by 100 but not by 400, so February had 28 days."
        },
        {
          "q": "How often does a leap year occur?",
          "a": "Every four years, apart from those century exceptions — 97 leap years in every 400."
        },
        {
          "q": "Does the rule work for old dates?",
          "a": "The calculator applies the Gregorian rule to early years too. It does not reconstruct when a country changed from the Julian calendar, so historical documents need a separate calendar check."
        }
      ]
    },
    "sleep-time": {
      "longDescription": "This calculator adds a selected number of assumed 90-minute blocks and time to fall asleep to find a wake-up time or bedtime. 90 minutes is a fixed formula assumption: entered clock times cannot identify actual sleep stages. Block count describes a duration scenario, not an individual sleep requirement. Five blocks plus 15 minutes mean 465 minutes in bed; the 450-minute row includes only the blocks. Use it to compare clock schedules, without a promise of easier waking or an assessment of sleep quality.",
      "howToUse": [
        "Choose whether you know your bedtime or your alarm.",
        "Enter that time in hours and minutes.",
        "Enter a whole count of 1–12 blocks as a time scenario.",
        "Enter how long you usually take to fall asleep."
      ],
      "howItWorks": "This is an arithmetic plan with fixed 90-minute blocks: time in bed = blocks ×90 + entered minutes to fall asleep. A known bedtime adds this duration; a known wake-up time subtracts it. Hours 0–23, minutes 0–59 and block count 1–12 must be whole numbers; sleep latency is a non-negative whole minute count. The result wraps into 24 hours without a calendar date or daylight-saving adjustment. The “sleep only” row means blocks ×90, not measured time asleep. Numerical examples verify this formula; they neither locate a sleep stage nor guarantee feeling rested.",
      "example": "Going to bed at 23:00 for five cycles with 15 minutes to fall asleep gives a 06:45 alarm.",
      "faq": [
        {
          "q": "Is a sleep cycle really 90 minutes?",
          "a": "No: 90 minutes is this calculation’s fixed block. NHLBI describes variable cycles of roughly 80–100 minutes; bedtime alone cannot predict the stage at waking."
        },
        {
          "q": "How many cycles should I aim for?",
          "a": "The 1–12 count is a technical domain, not advice. Five and six blocks equal 7.5 and 9 formula hours. CDC lists 7 or more hours for adults 18–60; a shorter result does not become sufficient by ending on an assumed cycle."
        },
        {
          "q": "Why add time to fall asleep separately?",
          "a": "Time to fall asleep increases time in bed, not the model’s sleep blocks. It is your entered assumption, not a measurement: five blocks plus 15 minutes give 450 and 465 minutes respectively."
        },
        {
          "q": "Why does the result sometimes fall on the next day?",
          "a": "Because the clock wraps around midnight. Going to bed at 23:00 and sleeping nine hours means 08:00 the next morning, not 32:00."
        }
      ]
    },
    "time-duration": {
      "longDescription": "Works out how long it is between two times, or what time it becomes after adding or subtracting a duration. Times that cross midnight are handled as a normal case rather than an error.",
      "howToUse": [
        "Choose what to calculate.",
        "Enter the times in hours and minutes.",
        "Read the duration or the resulting time."
      ],
      "howItWorks": "Difference mode calculates end minus start around a 1440-minute clock: identical times give 0; an earlier end crosses midnight. There are no dates, so two clock times cannot identify several elapsed days. Add and subtract modes accept a duration beyond one day but display the resulting 24-hour clock time. All parts must be whole numbers within their field bounds: time 0–23/0–59, duration 0–999 hours and 0–59 minutes. Invalid entries are rejected rather than silently clamped. Seconds, time zones and daylight-saving changes are not included.",
      "example": "From 22:15 to 06:45 is 8 hours 30 minutes.",
      "faq": [
        {
          "q": "What if the end time is earlier than the start?",
          "a": "It is treated as crossing midnight, which is what an overnight shift needs. The result is flagged on its own line."
        },
        {
          "q": "Can the duration be longer than a day?",
          "a": "Durations you add or subtract can exceed 24 hours; the resulting time wraps around the clock."
        },
        {
          "q": "Are seconds supported?",
          "a": "No. The calculator works in whole minutes, which is what shift and schedule arithmetic needs."
        },
        {
          "q": "What happens to out-of-range values?",
          "a": "Out-of-range or fractional clock parts are rejected. Hours are not replaced with a boundary and minutes are not truncated; correct the entry before calculating."
        }
      ]
    },
    "timezone-difference": {
      "longDescription": "Converts a time between two zones given as UTC offsets. The offsets are entered as numbers, and that is a deliberate limitation: this calculator holds no time-zone database, does not infer daylight saving and keeps no history of past rules — it compares exactly the offsets you supply. Fractional offsets work: India at UTC+5:30 and Nepal at UTC+5:45 are current zones rather than curiosities, so the difference is computed in minutes. A rollover past midnight is shown on its own row, since otherwise the time would appear to be the same calendar day.",
      "howToUse": [
        "Enter the UTC offset of the zone where the time is known.",
        "Enter the UTC offset of the zone you are converting to.",
        "Enter the hours and minutes of the source time.",
        "Check the calendar-day row: the time may have moved to an adjacent day."
      ],
      "howItWorks": "Each offset first converts from decimal hours to whole minutes: 5.5 means 5 hours 30 minutes, not 5 hours 50 minutes. Offsets from−12 to+14 hours are accepted only when they specify exact whole minutes; fractional minutes are rejected. Destination offset minus source offset is added to the source clock in minutes. Day shift is the floor of total minutes/1440; the remainder gives the destination clock. Extreme offsets differ by 26 hours, so a shift of 2 days is possible. These are two entered fixed offsets without city selection, a calendar date, IANA rules or automatic daylight-saving inference.",
      "example": "14:30 at UTC+3 corresponds to 06:30 on the same day at UTC−5.",
      "faq": [
        {
          "q": "Why are zones entered as numbers rather than picked from a list?",
          "a": "Because a list needs a time-zone database and yearly updates to it. Showing a stale rule is worse than asking for an offset you can verify right now."
        },
        {
          "q": "Is daylight saving taken into account?",
          "a": "No. If one of the zones is on summer time, enter the offset that already includes it — UTC+2 instead of UTC+1, for example."
        },
        {
          "q": "Are half-hour zones supported?",
          "a": "Yes. India uses UTC+5:30 and Nepal UTC+5:45; enter those as 5.5 and 5.75."
        },
        {
          "q": "What does the day shift mean?",
          "a": "That the converted time landed on a neighbouring calendar day: plus one is the next day, minus one the previous."
        },
        {
          "q": "How do I find a city's offset?",
          "a": "It is shown in the time-zone settings on your phone or computer next to the city name, usually as UTC+3 or GMT+3."
        }
      ]
    },
    "work-hours": {
      "longDescription": "Counts hours actually worked rather than working days on a calendar: the break is subtracted from the length of the shift, and what is left is multiplied by the number of shifts. Night shifts are handled separately — when the end is earlier than the start the shift crosses midnight, and a plain subtraction returns a negative number. Adding a day there is not a convenience fudge but the only way to get eight hours out of «22:00 — 06:00» instead of minus sixteen. A break longer than the shift is rejected: negative working time does not exist, and showing it would be plausible nonsense.",
      "howToUse": [
        "Enter the shift start time in hours and minutes.",
        "Enter the end time — for a night shift simply give the morning hour.",
        "Enter the length of the break in minutes.",
        "Set the number of shifts in the period and the hourly rate."
      ],
      "howItWorks": "Clock components and shift count must be whole numbers; hours 0–23 and minutes 0–59. When the end is not later than the start,1440 minutes are added: identical start and end mean a complete 24-hour shift here. A break is a non-negative whole minute count strictly shorter than the shift; an equal break is also rejected. Period hours = (shift length − break)/60 × shifts. Earnings = hours × entered rate; rate 0 is valid, negative or malformed rates are rejected. Rate and output must use the same currency, with no exchange conversion. Paid-break entitlement, overtime, tax, holidays and daylight-saving rules are not determined. Pay normally displays two decimal places. A positive amount below 0.005 currency units uses scientific notation so it is not mistaken for zero.",
      "example": "A 9:00–18:00 shift with an hour's break gives 8 hours — 168 hours over 21 shifts, or 84000 at a rate of 500.",
      "faq": [
        {
          "q": "How is a shift across midnight handled?",
          "a": "If the end time is earlier than the start time, a day is added to the difference. A 22:00–06:00 shift therefore gives eight hours rather than minus sixteen."
        },
        {
          "q": "Why is a break longer than the shift rejected?",
          "a": "The break must be strictly shorter than the shift. An equal break is also rejected because this model requires positive working hours."
        },
        {
          "q": "How is this different from counting working days?",
          "a": "This counts hours inside a shift, not days on a calendar. A working calendar with public holidays is a separate calculator."
        },
        {
          "q": "Is overtime at a higher rate included?",
          "a": "No, the rate applies to every hour equally. For premium hours, count them as a separate shift at a different rate."
        },
        {
          "q": "What does the shift length before the break show?",
          "a": "Total time on site from start to end, break included. Paid time is the row above, already without it."
        }
      ]
    }
  },
  "uk": {
    "age-calculator": {
      "longDescription": "Вік рахується не діленням днів на 365, а календарним відніманням: спершу роки, потім місяці, потім дні. Саме тому вік у роках і місяцях завжди точний, а перерахунок «у днях» дає інше число через високосні роки.",
      "howToUse": [
        "Введіть дату народження.",
        "Введіть дату, на яку рахувати вік.",
        "Прочитайте вік у роках, місяцях і днях."
      ],
      "howItWorks": "Вік розкладається вперед від народження: спочатку найбільше число повних календарних місяців до дати розрахунку, потім решта календарних днів. Повні місяці діляться на роки й залишок місяців. Якщо потрібного числа в місяці річниці немає, береться його останній день. Від 31 січня до 28 лютого тому минає повний місяць; для 29 лютого річниця у звичайному році — 28 лютого. Це правило моделі, а не юридичне визначення дня народження. Загальна кількість днів не залежить від переведення годинників. Дата розрахунку раніше народження відхиляється; порожня дата означає сьогоднішню дату пристрою. Для повторення результату задайте обидві дати. Дати мають формат YYYY-MM-DD і роки 0001–9999 за продовженим григоріанським календарем без історичних переходів окремої країни.",
      "example": "Народилися 01.01.1990, сьогодні 01.02.2026 — вийде 36 років 1 місяць.",
      "faq": [
        {
          "q": "Чому не можна поділити дні на 365?",
          "a": "Ділення на 365 дає наближення, а не повний календарний вік. Додаткові високосні дні можуть його завищити: від 01.01.2000 до 01.01.2004 минає 1461 день, тобто 1461/365 ≈ 4,00274, але повний вік становить 4 роки."
        },
        {
          "q": "Як рахується вік для народжених 29 лютого?",
          "a": "У цій моделі річниця 29 лютого у звичайному році — 28 лютого;1 березня вже наступний день. Юридичний день народження чи віковий поріг тут не встановлюється."
        },
        {
          "q": "Чому місяці рахуються по-різному?",
          "a": "Бо в них різна кількість днів. Місяць від 31 січня до 28 лютого — це повний місяць, хоча днів у ньому лише 28."
        },
        {
          "q": "Навіщо потрібен вік у днях?",
          "a": "Календарні дні можна використати для порівняння дат і планування. Медичну або юридичну придатність такого підрахунку треба перевіряти за правилами конкретної задачі."
        }
      ]
    },
    "working-days-calculator": {
      "longDescription": "Повні тижні рахуються блоками по сім днів, а решта дат — за днями тижня; унікальні виключення віднімаються окремо. Так враховуються неповні тижні на краях без перебору кожної дати довгого діапазону. Свята треба задавати самому — вони різні для кожної країни й року.",
      "howToUse": [
        "Введіть початкову й кінцеву дати.",
        "Виберіть виключену дату й натисніть «Додати дату»; повторіть для кожної дати.",
        "Прочитайте кількість календарних, робочих і вихідних днів."
      ],
      "howItWorks": "Обидві межі входять у діапазон. За замовчуванням робочими є понеділок–п’ятниця; робоча субота додає суботу, але не неділю. Якщо всі вихідні рахуються робочими, перемикач суботи не впливає. У формі виберіть одну дату й натисніть «Додати дату»; наступні дати додавайте по одній. Повтори враховуються один раз, дати поза діапазоном не впливають, помилкова дата відхиляє розрахунок. Виключення має пріоритет перед вихідним і потрапляє саме до рядка виключених дат. Календарні дні дорівнюють робочим + вихідним + виключеним. Державні свята, перенесення і виробничий календар не завантажуються. Дати мають формат YYYY-MM-DD і роки 0001–9999 за продовженим григоріанським календарем без історичних переходів окремої країни.",
      "example": "З 01.02.2026 по 28.02.2026 — 28 календарних днів, 20 робочих і 8 вихідних.",
      "faq": [
        {
          "q": "Чому не можна просто поділити на сім?",
          "a": "Через неповні тижні на краях. Діапазон із понеділка по понеділок містить не рівне число тижнів, і ділення дасть помилку в один-два дні."
        },
        {
          "q": "Чи враховуються свята?",
          "a": "Тільки ті, які ви ввели самі. Календар свят різний для кожної країни й змінюється рік до року, тому зашивати його в розрахунок було б хибно."
        },
        {
          "q": "Чи входять граничні дати в розрахунок?",
          "a": "Так, обидві. Діапазон з 1 по 28 лютого містить 28 днів, а не 27 — це важливо для строків договорів."
        },
        {
          "q": "Як рахувати перенесені вихідні?",
          "a": "Перемикач робочої суботи застосовується до всіх субот діапазону. Список виключень лише забирає дати й не може зробити одну неробочу суботу робочою. Для окремих перенесень скоригуйте календар поза цією моделлю."
        }
      ]
    },
    "date-shift-calculator": {
      "longDescription": "Додавання строку до дати не є простим додаванням днів: спершу застосовуються роки й місяці, потім тижні й дні. Ключове правило — якщо в цільовому місяці немає такого числа, дата усікається до останнього дня місяця.",
      "howToUse": [
        "Введіть початкову дату.",
        "Виберіть напрямок: додати чи відняти.",
        "Введіть роки, місяці, тижні й дні."
      ],
      "howItWorks": "Частини інтервалу мають бути цілими й невід’ємними; напрямок задає окремий перемикач. Роки й місяці об’єднуються в один місячний зсув із обмеженням числа останнім днем цільового місяця; лише потім додаються або віднімаються тижні ×7 + дні. Порожня частина означає 0. Календарний місяць не є фіксованими 30 днями, а обмеження дня може зробити операцію незворотною. Вихід за підтримуваний календар дає помилку. День тижня, день року й ISO-тиждень стосуються підсумкової дати. Свята, часові пояси та юридичні правила строків автоматично не застосовуються. Дати мають формат YYYY-MM-DD і роки 0001–9999 за продовженим григоріанським календарем без історичних переходів окремої країни.",
      "example": "31 січня плюс один місяць дає 28 лютого у звичайному році й 29 лютого — у високосному.",
      "faq": [
        {
          "q": "Чому 31 січня плюс місяць — це 28 лютого?",
          "a": "У цьому калькуляторі береться останній наявний день цільового місяця. Це прямо задане правило моделі, а не універсальне правило всіх бібліотек або юридичних строків."
        },
        {
          "q": "Чому порядок операцій має значення?",
          "a": "Місяці й дні мають різну семантику, тому результат залежить від порядку. Ця модель спершу об’єднує роки й місяці, потім додає тижні й дні; правила конкретного договору перевіряються окремо."
        },
        {
          "q": "Чи враховуються високосні роки?",
          "a": "Так, автоматично. Рік від 29 лютого 2024 дає 28 лютого 2025 — саме тому, що 29 лютого в невисокосному році немає."
        },
        {
          "q": "Чи можна відняти строк?",
          "a": "Так, виберіть напрямок «відняти». Правило усікання при цьому працює так само."
        }
      ]
    },
    "leap-year": {
      "longDescription": "Правило високосного року складніше за «кожні чотири роки»: рік має ділитися на 4 і при цьому або не ділитися на 100, або ділитися на 400. Саме тому 1900-й високосним не був, а 2000-й був — і саме ця деталь ламала програми на межі тисячоліття.",
      "howToUse": [
        "Введіть рік.",
        "Прочитайте відповідь і пояснення.",
        "Подивіться найближчі високосні роки."
      ],
      "howItWorks": "Григоріанське правило вимагає подільності на 4 і водночас або неподільності на 100, або подільності на 400. Воно дає 97 високосних років за 400 років. Вводиться цілий рік; нуль, дроби й помилкові записи відхиляються. Сусідні високосні роки шукаються строго до й після обраного: після 2024 наступним є 2028. Для ранніх років застосовується те саме математичне правило без відновлення історичного календаря країни. Високосна секунда стосується обліку часу й не змінює днів лютого.",
      "example": "2024 рік високосний, 1900 не був, а 2000 був — саме тому, що ділиться на 400.",
      "faq": [
        {
          "q": "Навіщо потрібне правило про 400?",
          "a": "Бо астрономічний рік триває близько 365,2422 доби, а не рівно 365,25. Просте правило чотирьох років давало б помилку в добу за 128 років — виняток для сотень і четвертих сотень її й прибирає."
        },
        {
          "q": "Чому 1900 не був високосним?",
          "a": "1900 ділиться на 100, але не на 400, тому не є високосним за григоріанським правилом. 2000 ділиться на 400 і є високосним."
        },
        {
          "q": "Наскільки точний григоріанський календар?",
          "a": "Правило дає 97 високосних років за 400 років і середні 365,2425 доби на календарний рік. Воно є календарною моделлю, а не точним вимірюванням змінної астрономічної тривалості року."
        },
        {
          "q": "Що таке високосна секунда?",
          "a": "Це зовсім інше: поправка на нерівномірність обертання Землі, яку додають до всесвітнього часу. З високосними роками вона не пов’язана."
        }
      ]
    },
    "sleep-time": {
      "longDescription": "Калькулятор додає обране число умовних 90-хвилинних блоків і час засинання, щоб отримати час підйому або відходу до сну. 90 хвилин — фіксоване припущення формули: покази годинника не визначають справжніх фаз сну. Число блоків задає сценарій тривалості, а не особисту потребу в сні. П’ять блоків і 15 хвилин означають 465 хвилин у ліжку;450 хвилин у рядку сну — лише блоки. Так можна порівняти варіанти розкладу без обіцянки легкого пробудження чи оцінки якості сну.",
      "howToUse": [
        "Введіть час відходу до сну або бажаний час підйому.",
        "Введіть ціле невід’ємне число хвилин на засинання: це ваше припущення для часу в ліжку.",
        "Задайте ціле число блоків 1–12 як часовий сценарій."
      ],
      "howItWorks": "Це арифметичний план за фіксованими блоками 90 хвилин: час у ліжку = блоки ×90 + введені хвилини засинання. До відомого часу відходу до сну ця тривалість додається, від відомого підйому — віднімається. Години 0–23, хвилини 0–59 і число блоків 1–12 мають бути цілими; засинання задається цілими невід’ємними хвилинами. Результат замикається у 24 години без календарної дати й переведення годинників. «Чистий сон» означає лише блоки ×90, а не виміряний сон. Приклади перевіряють формулу, але не визначають фазу сну й не гарантують бадьорості.",
      "example": "Відхід до сну о 23:00 за п’яти циклів і 15 хвилин на засинання дає будильник на 06:45.",
      "faq": [
        {
          "q": "Чому цикл саме 90 хвилин?",
          "a": "90 хвилин — фіксований блок формули для порівняння часових сценаріїв. NHLBI описує змінні справжні цикли приблизно 80–100 хвилин; один час відходу до сну не визначає фазу майбутнього пробудження."
        },
        {
          "q": "Чому прокидатися посеред циклу важче?",
          "a": "Цей калькулятор не знає стадії сну й не може порівняти легкість різних пробуджень. Кінець умовного 90-хвилинного блоку є арифметичним моментом, а не встановленою фазою."
        },
        {
          "q": "Скільки циклів потрібно?",
          "a": "Діапазон 1–12 є технічною областю, не порадою. 5 і 6 блоків дають 7,5 і 9 годин за формулою. CDC для дорослих 18–60 років указує 7 годин або більше; коротший результат не стає достатнім через умовний кінець циклу."
        },
        {
          "q": "Чи допоможе це, якщо лягати щоразу в різний час?",
          "a": "Це лише зміна арифметичного плану. CDC описує регулярний час відходу до сну й підйому як корисну звичку; калькулятор не оцінює режим, якість сну чи медичну причину втоми."
        }
      ]
    },
    "time-duration": {
      "longDescription": "Тривалість між двома моментами рахується переведенням у хвилини від опівночі — і саме тому коректно обробляється перехід через північ. Зміна з 22:15 до 06:45 триває вісім із половиною годин, а не мінус п’ятнадцять.",
      "howToUse": [
        "Введіть час початку.",
        "Введіть час закінчення.",
        "Прочитайте тривалість у годинах і хвилинах."
      ],
      "howItWorks": "У режимі різниці кінець мінус початок замикається у 1440 хвилин: однаковий час дає 0, раніший кінець означає перехід через північ. Без дат два покази годинника не визначають кілька діб. Додавання й віднімання приймають тривалість понад добу, але показують підсумковий 24-годинний час. Усі частини цілі: час 0–23/0–59, тривалість 0–999 годин і 0–59 хвилин. Некоректний ввід відхиляється, а не обмежується мовчки. Секунди, часові пояси й переведення годинників не враховуються.",
      "example": "З 22:15 до 06:45 минає 8 годин 30 хвилин.",
      "faq": [
        {
          "q": "Як обробляється перехід через північ?",
          "a": "До результату додається доба. Зміна з 22:15 до 06:45 дає 8 годин 30 хвилин, а не від’ємне значення — розрахунок розпізнає це автоматично."
        },
        {
          "q": "Чи можна порахувати тривалість понад добу?",
          "a": "Різниця між двома показами годинника лежить у межах доби: однаковий час дає 0. У режимах додавання й віднімання введена тривалість може перевищувати 24 години, але результат показує тільки час за модулем доби."
        },
        {
          "q": "Чому результат у годинах і хвилинах, а не в десяткових годинах?",
          "a": "Бо так зручніше читати. Для розрахунку оплати потрібні саме десяткові години: 8 годин 30 хвилин — це 8,5 години."
        },
        {
          "q": "Чи враховано перехід на літній час?",
          "a": "Ні. Якщо місцеве правило переводить годинник на одну годину, календарна доба може мати 23 або 25 фактичних годин; величина переведення залежить від місця й дати. Для точного часу потрібні дати й часовий пояс, яких ця модель не використовує."
        }
      ]
    },
    "timezone-difference": {
      "longDescription": "Різниця часових поясів рахується як різниця зсувів від UTC, і головна пастка тут — перехід через добу: 14:30 за UTC+3 у поясі UTC−5 припадає на 06:30 того самого дня. У цьому напрямку час від 00:00 до 07:59 переходить на попередню добу; вечірні 18:00 стають 10:00 того самого дня.",
      "howToUse": [
        "Введіть час і зсув вихідного поясу.",
        "Введіть зсув цільового поясу.",
        "Прочитайте час і зсув доби."
      ],
      "howItWorks": "Кожен зсув спершу переводиться з десяткових годин у цілі хвилини: 5,5 означає 5 годин 30 хвилин, а не 5 годин 50 хвилин. Межі від−12 до+14 годин, лише точні цілі хвилини; дробові хвилини відхиляються. До часу додається зсув призначення мінус вихідний зсув у хвилинах. Зсув дня — округлення вниз суми хвилин/1440, залишок визначає час. Крайні зсуви відрізняються на 26 годин, тому можливий перехід на 2 дні. Це фіксовані введені зсуви без міста, дати, правил IANA й автоматичного літнього часу.",
      "example": "14:30 за зсуву UTC+3 відповідає 06:30 того самого дня за зсуву UTC−5.",
      "faq": [
        {
          "q": "Чи враховано літній час?",
          "a": "Ні, ви задаєте зсуви самі. Це навмисно: правила переведення годинників різні в кожній країні й змінюються, тому надійніше вводити фактичний зсув на потрібну дату."
        },
        {
          "q": "Чому бувають зсуви з половиною години?",
          "a": "Бо частина країн обрала саме такі: Індія живе за UTC+5:30, Непал за UTC+5:45. Це політичне рішення, а не географічна необхідність."
        },
        {
          "q": "Як не переплутати напрямок?",
          "a": "Зсув показує, наскільки місцевий час випереджає UTC. Пояс UTC+3 попереду за UTC на три години, UTC−5 — позаду на п’ять; різниця між ними вісім годин."
        },
        {
          "q": "Що робити з міжнародними дзвінками?",
          "a": "Перевіряти не лише час, а й дату: різниця в 12 годин легко переносить зустріч на іншу добу — і саме тому позначка про зсув доби показується окремо."
        }
      ]
    },
    "work-hours": {
      "longDescription": "Облік робочих годин зводиться до різниці між кінцем і початком за вирахуванням перерви, але саме перерва й перехід через північ дають більшість помилок. Помножені на кількість змін, ці хвилини перетворюються на години розбіжності за місяць.",
      "howToUse": [
        "Введіть час початку й кінця зміни.",
        "Введіть тривалість перерви у хвилинах.",
        "Введіть кількість змін і ставку."
      ],
      "howItWorks": "Частини часу й число змін мають бути цілими: години 0–23, хвилини 0–59. Якщо кінець не пізніше початку, додаються 1440 хвилин: однакові початок і кінець тут означають повну 24-годинну зміну. Перерва — цілі невід’ємні хвилини, строго менші за зміну; рівна зміні перерва теж відхиляється. Години за період = (зміна − перерва)/60 × число змін. Заробіток = години × введена ставка;0 дозволено, від’ємні й помилкові ставки відхиляються. Валюта ставки й результату однакова, конвертації немає. Оплату перерви, надурочні, податки, свята й літній час модель не визначає. Оплата зазвичай має два десяткові знаки. Додатну суму меншу за 0,005 грошової одиниці показано науковим записом, щоб не видати її за нуль.",
      "example": "Зміна 9:00–18:00 з годинною перервою дає 8 годин, а за 21 зміну — 168 годин і 84 000 ₴ за ставки 500 ₴ на годину.",
      "faq": [
        {
          "q": "Чи оплачується обідня перерва?",
          "a": "Модель просто віднімає введені хвилини перерви. Вона не визначає, чи перерва оплачується: для розрахунку оплачуваних годин задайте лише ту частину, яку треба відняти за правилами вашої задачі."
        },
        {
          "q": "Як рахується нічна зміна?",
          "a": "До різниці додається доба. Зміна з 22:00 до 06:00 дає вісім годин; розрахунок розпізнає перехід через північ автоматично."
        },
        {
          "q": "Звідки береться норма 168 годин на місяць?",
          "a": "168 — це арифметичний приклад 21 ×8, а не встановлена норма кожного місяця. Число змін, норми часу й оплату визначайте за потрібним календарем і договором окремо."
        },
        {
          "q": "Чи враховано надурочні?",
          "a": "Ні, тут рахується проста сума. Для годин понад норму з підвищувальним коефіцієнтом потрібен окремий розрахунок надурочних."
        }
      ]
    }
  },
  "de": {
    "age-calculator": {
      "longDescription": "Zählt das Alter so, wie der Kalender es zählt, und nicht durch Teilen der Tage: zuerst volle Jahre, dann die vollen Monate darüber hinaus, dann die restlichen Tage. Genau daran scheitert die Näherung durch 365,25 — sie garantiert nicht, dass der volle Kalenderjahreswert genau am Geburtstag erreicht wird. Neben der Zerlegung stehen die insgesamt gelebten Tage, der Wochentag der Geburt und die Zeit bis zum nächsten Geburtstag; Schaltjahre ergeben sich von selbst, weil dem Kalender gefolgt wird.",
      "howToUse": [
        "Trage das Geburtsdatum ein.",
        "Lass das Rechendatum auf heute stehen oder wähle ein anderes.",
        "Lies das Alter in Jahren, Monaten und Tagen ab."
      ],
      "howItWorks": "Das Alter wird vom Geburtsdatum vorwärts zerlegt: zunächst die größte Anzahl vollständiger Kalendermonate bis zum Stichtag, dann die übrigen Kalendertage. Die Monate werden in Jahre und Restmonate geteilt. Fehlt der ursprüngliche Tag im Jubiläumsmonat, gilt dessen letzter Tag. Vom 31. Januar bis 28. Februar vergeht daher ein vollständiger Monat; ein 29. Februar wird im gewöhnlichen Jahr am 28. Februar behandelt. Das ist die Konvention dieses Modells, keine gesetzliche Geburtstagsregel. Die Gesamttage vergleichen Kalenderdaten ohne Sommerzeitstunden. Ein Stichtag vor der Geburt wird abgewiesen. Ein leerer Stichtag nutzt das heutige Datum des Geräts; für wiederholbare Ergebnisse beide Daten angeben. Daten verwenden YYYY-MM-DD und Jahre 0001–9999 im proleptischen gregorianischen Kalender ohne historische Landesumstellungen.",
      "example": "Wer am 15. März 1990 geboren wurde, ist am 29. August 2026 genau 36 Jahre, 5 Monate und 14 Tage alt.",
      "faq": [
        {
          "q": "Warum nicht einfach die Tage durch 365,25 teilen?",
          "a": "Weil das Alter am Geburtstag um eins steigt und nicht nach einer mittleren Jahreslänge. Die Näherung weicht je nach Lage der Schaltjahre um Tage ab."
        },
        {
          "q": "Wie wird der 29. Februar behandelt?",
          "a": "Dieses Modell behandelt den 29. Februar im gewöhnlichen Jahr am 28. Februar. Gesetzliche Geburtstags- oder Altersgrenzen legt es nicht fest."
        },
        {
          "q": "Kann ich das Alter zu einem anderen Datum berechnen?",
          "a": "Ja, das Rechendatum lässt sich frei setzen — auch in der Zukunft, etwa um das Alter zu einem Stichtag zu prüfen."
        },
        {
          "q": "Warum steht der Wochentag der Geburt dabei?",
          "a": "Weil er sich aus demselben Datum ergibt und häufig gesucht wird. Gerechnet wird er nach dem gregorianischen Kalender."
        }
      ]
    },
    "working-days-calculator": {
      "longDescription": "Zählt die Arbeitstage zwischen zwei Daten und überlässt die Regeln dir, statt einen Feiertagskalender vorzugeben: ob der Samstag als Arbeitstag zählt und welche einzelnen Tage entfallen, hängt vom Land, von der Branche und vom Vertrag ab. Feiertage werden nicht erraten, sondern als Liste eingetragen — ein fest eingebauter Kalender wäre für viele Leser die falsche Regel. Beide Grenztage zählen mit, und Kalendertage, Arbeitstage und Wochenendtage stehen getrennt.",
      "howToUse": [
        "Trage Anfangs- und Enddatum ein — beide Tage zählen mit.",
        "Stelle ein, ob Wochenenden als Arbeitstage gelten.",
        "Stelle gesondert ein, ob der Samstag ein Arbeitstag ist.",
        "Wähle ein auszuschließendes Datum und klicke auf „Datum hinzufügen“; wiederhole dies für jedes Datum."
      ],
      "howItWorks": "Beide Grenztage zählen mit. Standardmäßig gilt Montag–Freitag; ein arbeitender Samstag ergänzt den Samstag, jedoch nicht den Sonntag. Wenn alle Wochenenden als Arbeitstage zählen, wirkt der Samstagsschalter nicht. Wähle im Formular ein Datum und klicke auf „Datum hinzufügen“; füge weitere Daten einzeln hinzu. Doppelte Daten zählen einmal, Daten außerhalb des Intervalls wirken nicht, ungültige Daten verhindern die Rechnung. Eine Ausnahme hat Vorrang vor dem Wochenende und erscheint in der Ausnahmezeile. Kalendertage sind Arbeitstage + Wochenendtage + ausgeschlossene Tage. Feiertage, verlegte Arbeitstage und gesetzliche Arbeitskalender werden nicht geladen. Daten verwenden YYYY-MM-DD und Jahre 0001–9999 im proleptischen gregorianischen Kalender ohne historische Landesumstellungen.",
      "example": "Vom 1. bis 30. September 2026 liegen 30 Kalendertage, davon 22 Arbeitstage bei einer Fünftagewoche.",
      "faq": [
        {
          "q": "Warum sind keine Feiertage eingebaut?",
          "a": "Weil die benötigte Feiertags- und Ausnahmeliste zur konkreten Region und zum Zeitraum passen muss. Dieser Rechner lädt keinen solchen Kalender; du gibst die zu entfernenden Daten selbst ein."
        },
        {
          "q": "Zählen Anfangs- und Endtag mit?",
          "a": "Ja, beide. Für Kalendertage ohne den Anfangstag ist es ein Tag weniger. Bei Arbeitstagen wird nur dann einer abgezogen, wenn dieser Anfangstag nach den gewählten Regeln einschließlich Ausnahmen tatsächlich ein Arbeitstag ist."
        },
        {
          "q": "Was ist der Unterschied zwischen Arbeitstag und Werktag?",
          "a": "Hier folgt ein Arbeitstag ausschließlich den gewählten Wochenend- und Ausnahmeregeln. Welche Bedeutung ein Vertrag oder eine Frist den Begriffen Arbeitstag und Werktag gibt, wird nicht automatisch festgestellt; der Samstagsschalter legt nur dieses Rechenmodell fest."
        },
        {
          "q": "In welchem Format trage ich die freien Tage ein?",
          "a": "Wähle jedes Datum einzeln und klicke auf „Datum hinzufügen“. Tage außerhalb des Zeitraums bleiben ohne Wirkung."
        },
        {
          "q": "Taugt das für gesetzliche Fristen?",
          "a": "Als Schätzung. Fristen zählen je nach Gesetz in Kalendertagen, Werktagen oder Bankarbeitstagen, und die maßgebliche Regel steht im Vertrag oder Gesetz."
        }
      ]
    },
    "date-shift-calculator": {
      "longDescription": "Verschiebt ein Datum um Jahre, Monate, Wochen und Tage und folgt dabei dem Kalender statt einer festen Jahreslänge. Die Reihenfolge ist festgelegt: zuerst Jahre und Monate, danach Wochen und Tage. Ist der Zielmonat kürzer, wird auf seinen letzten Tag gekappt — der 31. Januar plus ein Monat ist der 28. Februar, im Schaltjahr der 29. Deshalb führt ein Monat vor und ein Monat zurück nicht immer auf dasselbe Datum, und das ist gewöhnliche Kalenderarithmetik und kein Rundungsfehler. Wochentag, Tag des Jahres und Kalenderwoche nach ISO 8601 stehen mit im Ergebnis.",
      "howToUse": [
        "Trage das Ausgangsdatum ein.",
        "Wähle, ob addiert oder abgezogen wird.",
        "Trage Jahre, Monate, Wochen und Tage ein — sie wirken zusammen.",
        "Lies Ergebnisdatum, Wochentag und Kalenderwoche ab."
      ],
      "howItWorks": "Intervallteile müssen nicht negative ganze Zahlen sein; die Richtung bestimmt ein eigener Schalter. Jahre und Monate ergeben eine gemeinsame Monatsverschiebung mit Kappung auf den letzten Tag des Zielmonats; danach folgen Wochen ×7 + Tage. Ein leerer Teil bedeutet 0. Ein Kalendermonat ist keine feste Dauer von 30 Tagen, und die Kappung kann die Umkehr verhindern. Ein Ergebnis außerhalb des unterstützten Kalenders erzeugt einen Fehler. Wochentag, Jahrestag und ISO-Woche beziehen sich auf das Ergebnisdatum. Feiertage, Zeitzonen und gesetzliche Fristenregeln werden nicht automatisch angewendet. Daten verwenden YYYY-MM-DD und Jahre 0001–9999 im proleptischen gregorianischen Kalender ohne historische Landesumstellungen.",
      "example": "Der 1. Januar 2026 plus 90 Tage ist der 1. April 2026, ein Mittwoch — der 91. Tag des Jahres in der Kalenderwoche 14.",
      "faq": [
        {
          "q": "Wie werden Monate verschiedener Länge gezählt?",
          "a": "Nach dem Kalender und nicht als 30 Tage. Gibt es den Tag im Zielmonat nicht, wird sein letzter Tag genommen: der 31. Januar plus ein Monat ist der 28. Februar."
        },
        {
          "q": "Warum führt ein Monat vor und zurück nicht immer zum Ausgangsdatum?",
          "a": "Wegen der Kappung. Der 31. Januar plus ein Monat ist der 28. Februar, und der 28. Februar minus ein Monat ist der 28. Januar."
        },
        {
          "q": "Was geschieht mit dem 29. Februar?",
          "a": "Der Tag wird nur gekürzt, wenn er im Zielmonat fehlt. Im Februar eines gewöhnlichen Jahres wird daraus der 28. Februar; 29.02.2024 + 13 Monate ergibt dagegen 29.03.2025, weil der März einen 29. Tag hat. Tage und Wochen folgen erst nach der Monatsverschiebung."
        },
        {
          "q": "Werden Wochenenden und Feiertage übersprungen?",
          "a": "Nein, gezählt werden zusammenhängende Kalendertage. Für Arbeitstage nimm den Arbeitstage-Rechner."
        },
        {
          "q": "Was ist die Kalenderwoche nach ISO 8601?",
          "a": "Die internationale Wochenzählung: eine Woche beginnt am Montag, und die erste Woche eines Jahres ist die mit dem ersten Donnerstag. Deshalb gehört der 1. Januar manchmal zur letzten Woche des Vorjahres."
        }
      ]
    },
    "leap-year": {
      "longDescription": "Wendet die gregorianische Regel an: Ein durch vier teilbares Jahr ist ein Schaltjahr, außer den vollen Jahrhunderten — die müssen zusätzlich durch vierhundert teilbar sein. Deshalb war 1900 ein gewöhnliches Jahr und 2000 nicht.",
      "howToUse": [
        "Trage das Jahr ein.",
        "Lies die Antwort ab.",
        "Sieh bei Bedarf die nächstgelegenen Schaltjahre nach."
      ],
      "howItWorks": "Die gregorianische Regel verlangt Teilbarkeit durch 4 und zugleich entweder keine Teilbarkeit durch 100 oder Teilbarkeit durch 400. Sie ergibt 97 Schaltjahre je 400 Jahre. Das Jahr muss ganzzahlig sein; null, Brüche und ungültige Eingaben werden abgewiesen. Benachbarte Schaltjahre liegen strikt vor beziehungsweise nach dem gewählten Jahr: auf 2024 folgt 2028. Für frühe Jahre gilt dieselbe mathematische Regel ohne Rekonstruktion eines historischen Landeskalenders. Eine Schaltsekunde betrifft die Zeitmessung und ändert die Februartage nicht.",
      "example": "2024 ist ein Schaltjahr, 1900 war keines, und 2000 war eines — weil es durch 400 teilbar ist.",
      "faq": [
        {
          "q": "Wozu die Ausnahme bei den Jahrhunderten?",
          "a": "Ein tropisches Jahr dauert rund 365,2422 Tage, etwas weniger als 365,25. Drei ausgelassene Schalttage je vier Jahrhunderte halten den Kalender mit den Jahreszeiten im Takt."
        },
        {
          "q": "War 1900 ein Schaltjahr?",
          "a": "Nein. Es ist durch 100 teilbar, aber nicht durch 400, deshalb hatte der Februar 28 Tage."
        },
        {
          "q": "Wie oft kommt ein Schaltjahr vor?",
          "a": "Alle vier Jahre, abgesehen von den Jahrhundertausnahmen — 97 Schaltjahre auf je 400 Jahre."
        },
        {
          "q": "Gilt die Regel auch für alte Daten?",
          "a": "Der Rechner wendet auch für frühe Jahre die gregorianische Regel an. Er rekonstruiert keine landesspezifische Umstellung vom julianischen Kalender; historische Dokumente benötigen eine eigene Kalenderprüfung."
        }
      ]
    },
    "sleep-time": {
      "longDescription": "Der Rechner addiert eine gewählte Zahl angenommener 90-Minuten-Blöcke und die Einschlafzeit, um Aufsteh- oder Zubettgehzeit zu bestimmen. 90 Minuten sind eine feste Formelannahme: Uhrzeiten erkennen keine tatsächlichen Schlafphasen. Die Blockzahl beschreibt eine Dauer, nicht den persönlichen Schlafbedarf. Fünf Blöcke plus 15 Minuten ergeben 465 Minuten Bettzeit;450 Minuten zählen nur die Blöcke. Damit lassen sich Uhrzeitpläne vergleichen, ohne leichteres Erwachen zu versprechen oder die Schlafqualität zu beurteilen.",
      "howToUse": [
        "Wähle, ob du deine Zubettgehzeit oder deinen Wecker kennst.",
        "Trage diese Zeit in Stunden und Minuten ein.",
        "Setze 1–12 ganze Blöcke als Zeitszenario.",
        "Trage ein, wie lange du gewöhnlich zum Einschlafen brauchst."
      ],
      "howItWorks": "Dies ist ein Rechenplan mit festen 90-Minuten-Blöcken: Bettzeit = Blöcke ×90 + eingegebene Einschlafminuten. Zur bekannten Zubettgehzeit wird die Dauer addiert, von der Aufstehzeit abgezogen. Stunden 0–23, Minuten 0–59 und Blockzahl 1–12 müssen ganzzahlig sein; Einschlafzeit sind nicht negative ganze Minuten. Das Ergebnis läuft im 24-Stunden-Kreis ohne Datum oder Sommerzeitkorrektur. „Reiner Schlaf“ bedeutet nur Blöcke ×90, keine gemessene Schlafdauer. Zahlenbeispiele prüfen die Formel, bestimmen aber keine Schlafphase und garantieren keine Erholung.",
      "example": "Um 23:00 ins Bett, fünf Zyklen, 15 Minuten zum Einschlafen — der Wecker steht auf 06:45.",
      "faq": [
        {
          "q": "Dauert ein Schlafzyklus wirklich 90 Minuten?",
          "a": "Nein: 90 Minuten sind der feste Rechenblock. NHLBI beschreibt variable Zyklen von ungefähr 80–100 Minuten; die Zubettgehzeit allein sagt die Phase beim Erwachen nicht voraus."
        },
        {
          "q": "Wie viele Zyklen sollte ich anstreben?",
          "a": "1–12 ist der technische Bereich, keine Empfehlung. Fünf und sechs Blöcke ergeben rechnerisch 7,5 und 9 Stunden. CDC nennt für Erwachsene 18–60 mindestens 7 Stunden; ein kürzeres Ergebnis wird durch ein angenommenes Zyklusende nicht ausreichend."
        },
        {
          "q": "Warum kommt die Einschlafdauer getrennt hinzu?",
          "a": "Einschlafzeit erhöht die Bettzeit, nicht die Schlafblöcke. Es ist deine eingegebene Annahme, keine Messung: fünf Blöcke plus 15 Minuten ergeben 450 beziehungsweise 465 Minuten."
        },
        {
          "q": "Warum liegt das Ergebnis manchmal am nächsten Tag?",
          "a": "Weil die Uhr über Mitternacht läuft. Um 23:00 ins Bett und neun Stunden Schlaf heißt 08:00 am nächsten Morgen und nicht 32:00."
        }
      ]
    },
    "time-duration": {
      "longDescription": "Rechnet aus, wie lang es zwischen zwei Uhrzeiten ist, oder welche Uhrzeit sich ergibt, wenn eine Dauer addiert oder abgezogen wird. Uhrzeiten, die über Mitternacht laufen, gelten als Normalfall und nicht als Fehler.",
      "howToUse": [
        "Wähle, was berechnet werden soll.",
        "Trage die Uhrzeiten in Stunden und Minuten ein.",
        "Lies die Dauer oder die sich ergebende Uhrzeit ab."
      ],
      "howItWorks": "Im Differenzmodus wird Ende minus Anfang auf einem 1440-Minuten-Kreis gerechnet: gleiche Zeiten ergeben 0, ein früheres Ende überschreitet Mitternacht. Ohne Daten beschreiben zwei Uhrzeiten keinen mehrtägigen Abstand. Addition und Subtraktion nehmen Dauern über einen Tag an, zeigen aber nur die resultierende 24-Stunden-Uhrzeit. Alle Teile sind ganzzahlig: Uhrzeit 0–23/0–59, Dauer 0–999 Stunden und 0–59 Minuten. Ungültige Eingaben werden abgewiesen statt still begrenzt. Sekunden, Zeitzonen und Sommerzeitwechsel werden nicht berücksichtigt.",
      "example": "Von 22:15 bis 06:45 sind es 8 Stunden 30 Minuten.",
      "faq": [
        {
          "q": "Was gilt, wenn die Endzeit vor der Startzeit liegt?",
          "a": "Das zählt als Übergang über Mitternacht, genau das braucht eine Nachtschicht. Das Ergebnis wird in einer eigenen Zeile ausgewiesen."
        },
        {
          "q": "Kann die Dauer länger als ein Tag sein?",
          "a": "Dauern, die du addierst oder abziehst, dürfen 24 Stunden überschreiten; die sich ergebende Uhrzeit läuft dann um die Uhr herum."
        },
        {
          "q": "Werden Sekunden unterstützt?",
          "a": "Nein. Der Rechner arbeitet in ganzen Minuten, und das ist es, was Schicht- und Terminrechnungen brauchen."
        },
        {
          "q": "Was passiert mit Werten außerhalb des Bereichs?",
          "a": "Werte außerhalb des Bereichs und Bruchteile werden abgewiesen. Stunden werden nicht auf eine Grenze gesetzt und Minuten nicht abgeschnitten; Eingabe zuerst korrigieren."
        }
      ]
    },
    "timezone-difference": {
      "longDescription": "Rechnet eine Uhrzeit zwischen zwei Zonen um, die als UTC-Abweichung angegeben werden. Die Abweichungen werden als Zahlen eingetragen, und das ist eine bewusste Einschränkung: dieser Rechner führt keine Zeitzonendatenbank, erschließt keine Sommerzeit und kennt keine Geschichte früherer Regeln — er vergleicht genau die Abweichungen, die du angibst. Halbe und viertelstündige Abweichungen funktionieren: Indien mit UTC+5:30 und Nepal mit UTC+5:45 sind gültige Zonen und keine Kuriositäten, deshalb wird der Unterschied in Minuten gerechnet. Ein Übergang über Mitternacht steht in einer eigenen Zeile, sonst sähe die Uhrzeit nach demselben Kalendertag aus.",
      "howToUse": [
        "Trage die UTC-Abweichung der Zone ein, in der die Uhrzeit bekannt ist.",
        "Trage die UTC-Abweichung der Zone ein, in die umgerechnet wird.",
        "Trage Stunden und Minuten der Ausgangszeit ein.",
        "Prüfe die Zeile zum Kalendertag: die Uhrzeit kann auf einen Nachbartag gerutscht sein."
      ],
      "howItWorks": "Jede Abweichung wird zuerst von Dezimalstunden in ganze Minuten umgerechnet: 5,5 bedeutet 5 Stunden 30 Minuten, nicht 5 Stunden 50 Minuten. Zulässig sind−12 bis+14 Stunden mit exakt ganzen Minuten; Bruchteile einer Minute werden abgewiesen. Zielabweichung minus Ausgangsabweichung wird in Minuten zur Uhrzeit addiert. Der Tagesversatz ist die abgerundete Summe/1440, der Rest die Zieluhrzeit. Die äußersten Abweichungen liegen 26 Stunden auseinander, daher sind 2 Tage Versatz möglich. Es sind feste eingegebene Abweichungen ohne Stadt, Datum, IANA-Regeln oder automatische Sommerzeitbestimmung.",
      "example": "14:30 bei UTC+3 entsprechen 06:30 am selben Tag bei UTC−5.",
      "faq": [
        {
          "q": "Warum werden Zonen als Zahl eingetragen statt aus einer Liste gewählt?",
          "a": "Weil eine Liste eine Zeitzonendatenbank braucht und jährliche Pflege dazu. Eine veraltete Regel anzuzeigen ist schlechter, als nach einer Abweichung zu fragen, die du jetzt gerade nachsehen kannst."
        },
        {
          "q": "Wird die Sommerzeit berücksichtigt?",
          "a": "Nein. Wenn eine der Zonen auf Sommerzeit läuft, trage die Abweichung ein, die sie schon enthält — also etwa UTC+2 statt UTC+1."
        },
        {
          "q": "Sind Zonen mit halben Stunden möglich?",
          "a": "Ja. Indien nutzt UTC+5:30 und Nepal UTC+5:45; trage sie als 5,5 und 5,75 ein."
        },
        {
          "q": "Was bedeutet der Tagesversatz?",
          "a": "Dass die umgerechnete Uhrzeit auf einem Nachbartag gelandet ist: plus eins ist der Folgetag, minus eins der Vortag."
        },
        {
          "q": "Wie finde ich die Abweichung einer Stadt?",
          "a": "Sie steht in den Zeitzoneneinstellungen deines Telefons oder Rechners neben dem Städtenamen, meist als UTC+3 oder GMT+3."
        }
      ]
    },
    "work-hours": {
      "longDescription": "Zählt tatsächlich geleistete Stunden und nicht Arbeitstage im Kalender: die Pause wird von der Schichtlänge abgezogen, und was bleibt, wird mit der Zahl der Schichten multipliziert. Nachtschichten werden gesondert behandelt — liegt das Ende vor dem Beginn, läuft die Schicht über Mitternacht, und ein schlichtes Abziehen liefert eine negative Zahl. Dort einen Tag zu addieren ist kein bequemer Kniff, sondern der einzige Weg, aus „22:00 — 06:00“ acht Stunden statt minus sechzehn zu bekommen. Eine Pause, die länger ist als die Schicht, wird abgewiesen: negative Arbeitszeit gibt es nicht, und sie anzuzeigen wäre plausibler Unsinn.",
      "howToUse": [
        "Trage den Schichtbeginn in Stunden und Minuten ein.",
        "Trage das Ende ein — bei einer Nachtschicht einfach die Morgenstunde.",
        "Trage die Länge der Pause in Minuten ein.",
        "Setze die Zahl der Schichten im Zeitraum und den Stundensatz."
      ],
      "howItWorks": "Uhrzeitteile und Schichtzahl sind ganzzahlig: Stunden 0–23, Minuten 0–59. Liegt das Ende nicht nach dem Beginn, kommen 1440 Minuten hinzu: gleiche Zeiten bedeuten hier eine vollständige 24-Stunden-Schicht. Pausen sind nicht negative ganze Minuten und strikt kürzer als die Schicht; gleiche Länge wird ebenfalls abgewiesen. Zeitraumstunden = (Schicht − Pause)/60 × Schichtzahl. Entgelt = Stunden × Satz; Satz 0 ist erlaubt, negative oder ungültige Sätze nicht. Satz und Ergebnis haben dieselbe Währung ohne Umrechnung. Bezahlte Pausen, Zuschläge, Steuern, Feiertage und Sommerzeitregeln bestimmt das Modell nicht. Die Vergütung wird normalerweise mit zwei Dezimalstellen gezeigt. Positive Beträge unter 0,005 Geldeinheiten erhalten wissenschaftliche Schreibweise statt eines falschen Nullwerts.",
      "example": "Eine Schicht von 9:00 bis 18:00 mit einer Stunde Pause ergibt 8 Stunden — bei 21 Schichten 168 Stunden, bei einem Stundensatz von 25 € also 4200 €.",
      "faq": [
        {
          "q": "Wie wird eine Schicht über Mitternacht behandelt?",
          "a": "Liegt die Endzeit vor der Startzeit, wird ein Tag zur Differenz addiert. Eine Schicht von 22:00 bis 06:00 ergibt deshalb acht Stunden statt minus sechzehn."
        },
        {
          "q": "Warum wird eine Pause abgewiesen, die länger als die Schicht ist?",
          "a": "Die Pause muss strikt kürzer als die Schicht sein. Auch gleiche Länge wird abgewiesen, weil dieses Modell positive Arbeitsstunden verlangt."
        },
        {
          "q": "Worin unterscheidet sich das vom Zählen der Arbeitstage?",
          "a": "Hier werden Stunden innerhalb einer Schicht gezählt und keine Tage im Kalender. Ein Arbeitskalender mit Feiertagen ist ein eigener Rechner."
        },
        {
          "q": "Sind Zuschläge für Überstunden enthalten?",
          "a": "Nein, der Satz gilt für jede Stunde gleich. Rechne Stunden mit Zuschlag als eigene Schicht zu einem anderen Satz."
        },
        {
          "q": "Was zeigt die Schichtlänge vor der Pause?",
          "a": "Die gesamte Anwesenheit von Beginn bis Ende, Pause eingeschlossen. Die bezahlte Zeit steht in der Zeile darüber, dort schon ohne sie."
        }
      ]
    }
  },
  "es": {
    "age-calculator": {
      "longDescription": "Calcula la edad exacta entre dos fechas en años, meses y días, no solo en años cumplidos. La cuenta sigue el calendario y no una media de días: los meses tienen distinta duración y los años bisiestos añaden un día, así que restar y dividir entre 365 da un resultado que se desvía. La fecha de referencia es hoy por defecto, pero puede cambiarse por cualquier otra, que es lo que se necesita para saber qué edad se tendrá en una fecha futura o qué edad se tenía en una pasada.",
      "howToUse": [
        "Introduce la fecha de nacimiento.",
        "Cambia la fecha de referencia si no quieres calcular la edad de hoy.",
        "Consulta la edad exacta, los días vividos y los días que faltan para el próximo cumpleaños."
      ],
      "howItWorks": "La edad se descompone avanzando desde el nacimiento: se toma el mayor número de meses naturales completos que cabe hasta la fecha de referencia y después los días restantes. Los meses se dividen en años y meses sobrantes. Si el mes del aniversario no tiene el día original, se utiliza su último día. Del 31 de enero al 28 de febrero cuenta un mes; para un nacimiento el 29 de febrero se usa el 28 de febrero en un año común. Es la convención de este modelo, no una regla legal de cumpleaños. Los días totales comparan fechas naturales sin horas ni cambios de horario. Se rechaza una referencia anterior al nacimiento. Una referencia vacía utiliza la fecha actual del dispositivo; fija ambas fechas para reproducir el resultado. Las fechas usan YYYY-MM-DD y años 0001–9999 del calendario gregoriano proléptico, sin transiciones históricas de cada país.",
      "example": "De una fecha de nacimiento del 31 de enero de 2000 al 1 de marzo de 2026 hay 26 años, 1 mes y 1 día.",
      "faq": [
        {
          "q": "¿Por qué no basta con restar los años?",
          "a": "Porque la edad solo aumenta cuando ya ha pasado el cumpleaños. De 2000 a 2026 hay 26 años en el calendario, pero si el cumpleaños aún no ha llegado, la edad cumplida son 25."
        },
        {
          "q": "¿Cómo se cuentan los años bisiestos?",
          "a": "Se cuentan solos: el cálculo recorre fechas reales del calendario y no una media de 365,25 días, así que un 29 de febrero se trata como el día que es."
        },
        {
          "q": "¿Qué edad tiene quien nació un 29 de febrero?",
          "a": "Este modelo sitúa el aniversario del 29 de febrero en el 28 de febrero de un año común. No establece cumpleaños legales ni umbrales jurídicos de edad."
        },
        {
          "q": "¿Puedo poner una fecha de referencia en el futuro?",
          "a": "Sí. Es justo para eso: saber qué edad tendrás en una fecha concreta, por ejemplo el día de un examen o de un trámite."
        },
        {
          "q": "¿Qué son los días vividos en total?",
          "a": "El número de días del calendario entre ambas fechas, bisiestos incluidos. Es una cifra distinta de la edad en años, meses y días, y suele sorprender."
        }
      ]
    },
    "working-days-calculator": {
      "longDescription": "Usa esta calculadora de días laborables para contar los días de diario, los fines de semana y las fechas excluidas a mano entre dos fechas.",
      "howToUse": [
        "Introduce la fecha de inicio y la de fin.",
        "Elige si los fines de semana cuentan como laborables.",
        "Elige una fecha excluida y pulsa «Añadir fecha»; repite para cada fecha."
      ],
      "howItWorks": "Se incluyen ambos extremos. Por defecto se trabaja de lunes a viernes; el sábado laborable añade el sábado, pero no el domingo. Si todos los fines de semana cuentan como laborables, el selector del sábado no cambia nada. En el formulario, elige una fecha y pulsa «Añadir fecha»; añade las siguientes de una en una. Los duplicados cuentan una vez, las fechas externas no influyen y una fecha inválida rechaza el cálculo. Una exclusión tiene prioridad sobre el fin de semana y figura en su propia fila. Días naturales = laborables + fin de semana + excluidos. No se cargan festivos nacionales, jornadas trasladadas ni calendarios laborales legales. Las fechas usan YYYY-MM-DD y años 0001–9999 del calendario gregoriano proléptico, sin transiciones históricas de cada país.",
      "example": "Del 1 al 28 de febrero de 2026, ambos incluidos: 28 días naturales,20 laborables de lunes a viernes y 8 de fin de semana, sin exclusiones.",
      "faq": [
        {
          "q": "¿Cómo se cuentan los días laborables?",
          "a": "Se incluyen ambos extremos. Se cuentan semanas completas y días restantes según la regla elegida; después se retiran fechas excluidas únicas, con prioridad sobre la categoría de fin de semana."
        },
        {
          "q": "¿Puedo cambiar el tratamiento de los fines de semana?",
          "a": "Sí. Elige si los días de fin de semana deben contar como laborables antes de consultar el total."
        },
        {
          "q": "¿Se excluyen los festivos automáticamente?",
          "a": "No. Introduce a mano los festivos u otras fechas que quieras excluir; no se presupone un calendario nacional."
        },
        {
          "q": "¿Qué pasa si una fecha excluida cae en fin de semana?",
          "a": "Se cuenta una vez como excluida, no también como fin de semana. Los duplicados y las fechas fuera del intervalo no vuelven a reducir el total."
        }
      ]
    },
    "date-shift-calculator": {
      "longDescription": "Usa esta calculadora de fechas para sumar un intervalo a una fecha o restárselo. Responde a preguntas como «qué fecha cae 90 días después de hoy» e indica además el día de la semana, el desplazamiento total en días naturales, el día del año y el número de semana ISO 8601.",
      "howToUse": [
        "Elige la fecha de partida: hoy viene puesta por defecto.",
        "Elige si quieres sumar el intervalo a la fecha o restárselo.",
        "Rellena las partes del intervalo que necesites: años, meses, semanas y días se pueden combinar.",
        "Consulta la fecha resultante, su día de la semana y el desplazamiento total en días naturales."
      ],
      "howItWorks": "Los componentes del intervalo deben ser enteros no negativos; un selector aparte fija la dirección. Años y meses forman un único desplazamiento mensual, ajustando el día al final del mes de destino; después se suman o restan semanas ×7 + días. Un componente vacío significa 0. Un mes natural no equivale a 30 días fijos y el ajuste puede impedir invertir la operación. Un resultado fuera del calendario admitido produce un error. El día de semana, día del año y semana ISO corresponden a la fecha final. No se aplican automáticamente festivos, husos ni reglas legales de plazos. Las fechas usan YYYY-MM-DD y años 0001–9999 del calendario gregoriano proléptico, sin transiciones históricas de cada país.",
      "example": "El 1 de enero de 2026 más 90 días es el 1 de abril de 2026, un miércoles: un desplazamiento de 90 días naturales, el día 91 del año, semana ISO 14.",
      "faq": [
        {
          "q": "¿Cómo se cuentan los meses si tienen distinta duración?",
          "a": "Los meses se suman por el calendario, no como 30 días. Si el mes de destino no tiene ese día, se usa el último día de ese mes: el 31 de enero más un mes da el 28 de febrero."
        },
        {
          "q": "¿Por qué sumar un mes y después restarlo no siempre devuelve la fecha original?",
          "a": "Por el ajuste al final de mes. El 31 de enero más un mes es el 28 de febrero, y el 28 de febrero menos un mes es el 28 de enero. Eso es aritmética de calendario normal, no un error de redondeo."
        },
        {
          "q": "¿Qué ocurre cuando la fecha de partida es el 29 de febrero?",
          "a": "Solo se limita el día cuando no existe en el mes de destino. Al pasar a febrero de un año común queda el 28 de febrero, pero 29.02.2024 + 13 meses da 29.03.2025 porque marzo tiene día 29. Días y semanas se aplican después del desplazamiento mensual."
        },
        {
          "q": "¿Se saltan los fines de semana y los festivos?",
          "a": "No, cuenta días naturales consecutivos. Usa la calculadora de días laborables cuando necesites solo días hábiles."
        },
        {
          "q": "¿Qué es el número de semana ISO 8601?",
          "a": "Es la norma internacional para numerar semanas: una semana empieza en lunes, y la primera semana del año es la que contiene el primer jueves. Por eso el 1 de enero pertenece a veces a la última semana del año anterior."
        },
        {
          "q": "¿Puedo combinar años, meses y días?",
          "a": "Sí. Primero se aplican los años y los meses, y después las semanas y los días. El orden importa siempre que haya un ajuste al final de mes."
        }
      ]
    },
    "leap-year": {
      "longDescription": "Aplica la regla gregoriana: un año divisible entre cuatro es bisiesto, salvo los años de fin de siglo, que además deben ser divisibles entre cuatrocientos. Por eso 1900 fue común y 2000 no lo fue.",
      "howToUse": [
        "Introduce el año.",
        "Consulta la respuesta.",
        "Comprueba los años bisiestos más cercanos si los necesitas."
      ],
      "howItWorks": "La regla gregoriana exige divisibilidad entre 4 y, además, no ser divisible entre 100 o sí serlo entre 400. Produce 97 años bisiestos por 400 años. Introduce un año entero; se rechazan cero, fracciones y entradas inválidas. Los bisiestos próximos se buscan estrictamente antes y después: a 2024 le sigue 2028. Los años antiguos usan la misma regla matemática sin reconstruir el calendario histórico de un país. Un segundo intercalar pertenece al cómputo del tiempo y no cambia los días de febrero.",
      "example": "2024 es bisiesto, 1900 no lo fue y 2000 sí, porque se divide entre 400.",
      "faq": [
        {
          "q": "¿Por qué hace falta la excepción de los siglos?",
          "a": "Un año trópico dura unos 365,2422 días, algo menos de 365,25. Suprimir tres días bisiestos cada cuatro siglos mantiene el calendario alineado con las estaciones."
        },
        {
          "q": "¿1900 fue bisiesto?",
          "a": "No. Se divide entre 100 pero no entre 400, así que febrero tuvo 28 días."
        },
        {
          "q": "¿Cada cuánto hay un año bisiesto?",
          "a": "Cada cuatro años, salvo esas excepciones de fin de siglo: 97 años bisiestos por cada 400."
        },
        {
          "q": "¿La regla vale para fechas antiguas?",
          "a": "La calculadora aplica también a los años antiguos la regla gregoriana. No reconstruye cuándo un país cambió del calendario juliano; los documentos históricos requieren comprobar su calendario."
        }
      ]
    },
    "sleep-time": {
      "longDescription": "La calculadora suma un número elegido de bloques supuestos de 90 minutos y tiempo para dormirse, obteniendo una hora de despertar o acostarse. 90 minutos es una hipótesis fija de la fórmula: las horas no identifican fases reales del sueño. Los bloques describen una duración, no la necesidad individual de dormir. Cinco bloques más 15 minutos son 465 minutos en cama; la fila 450 minutos incluye solo los bloques. Sirve para comparar horarios sin prometer despertar mejor ni evaluar la calidad del sueño.",
      "howToUse": [
        "Elige si conoces la hora de acostarte o la del despertador.",
        "Introduce esa hora en horas y minutos.",
        "Introduce 1–12 bloques enteros como escenario de tiempo.",
        "Introduce cuánto sueles tardar en dormirte."
      ],
      "howItWorks": "Es un plan aritmético con bloques fijos de 90 minutos: tiempo en cama = bloques ×90 + minutos introducidos para dormirse. Una hora conocida de acostarse suma la duración; una hora conocida de despertar la resta. Horas 0–23, minutos 0–59 y bloques 1–12 deben ser enteros; la latencia se expresa en minutos enteros no negativos. El resultado gira en 24 horas sin fecha ni corrección de horario de verano. «Sueño neto» significa solo bloques ×90, no sueño medido. Los ejemplos comprueban la fórmula, sin localizar una fase de sueño ni garantizar descanso.",
      "example": "Acostarse a las 23:00 para cinco ciclos con 15 minutos para dormirse da un despertador a las 06:45.",
      "faq": [
        {
          "q": "¿Un ciclo de sueño dura de verdad 90 minutos?",
          "a": "No: 90 minutos es el bloque fijo del cálculo. NHLBI describe ciclos variables de unos 80–100 minutos; la hora de acostarse sola no predice la fase al despertar."
        },
        {
          "q": "¿Cuántos ciclos debo buscar?",
          "a": "1–12 es el dominio técnico, no un consejo. Cinco y seis bloques son 7,5 y 9 horas de fórmula. CDC indica 7 horas o más para adultos 18–60; un resultado menor no se vuelve suficiente por terminar en un ciclo supuesto."
        },
        {
          "q": "¿Por qué se suma aparte el tiempo para dormirse?",
          "a": "Dormirse aumenta el tiempo en cama, no los bloques de sueño. Es tu hipótesis introducida, no una medición: cinco bloques y 15 minutos dan 450 y 465 minutos respectivamente."
        },
        {
          "q": "¿Por qué el resultado cae a veces al día siguiente?",
          "a": "Porque el reloj da la vuelta a la medianoche. Acostarse a las 23:00 y dormir nueve horas significa las 08:00 de la mañana siguiente, no las 32:00."
        }
      ]
    },
    "time-duration": {
      "longDescription": "Calcula cuánto hay entre dos horas, o qué hora resulta tras sumar o restar una duración. Las horas que cruzan la medianoche se tratan como un caso normal y no como un error.",
      "howToUse": [
        "Elige qué calcular.",
        "Introduce las horas en horas y minutos.",
        "Consulta la duración o la hora resultante."
      ],
      "howItWorks": "El modo diferencia calcula fin menos inicio en un reloj de 1440 minutos: horas iguales dan 0 y un fin anterior cruza medianoche. Sin fechas, dos horas no identifican varios días transcurridos. Suma y resta admiten más de un día de duración, pero muestran la hora final de 24 horas. Todos los componentes son enteros: hora 0–23/0–59, duración 0–999 horas y 0–59 minutos. Se rechazan valores inválidos en vez de recortarlos en silencio. No se incluyen segundos, husos ni cambios de horario.",
      "example": "De las 22:15 a las 06:45 hay 8 horas y 30 minutos.",
      "faq": [
        {
          "q": "¿Y si la hora de fin es anterior a la de inicio?",
          "a": "Se trata como un cruce de medianoche, que es lo que necesita un turno de noche. El resultado se señala en su propia línea."
        },
        {
          "q": "¿La duración puede pasar de un día?",
          "a": "Las duraciones que sumas o restas pueden superar las 24 horas; la hora resultante da la vuelta al reloj."
        },
        {
          "q": "¿Se admiten segundos?",
          "a": "No. La calculadora trabaja en minutos enteros, que es lo que necesita la aritmética de turnos y horarios."
        },
        {
          "q": "¿Qué ocurre con los valores fuera de rango?",
          "a": "Se rechazan valores fuera de rango y componentes fraccionarios. Las horas no se sustituyen por un extremo ni los minutos se truncan; corrige el valor antes de calcular."
        }
      ]
    },
    "timezone-difference": {
      "longDescription": "Convierte una hora entre dos husos dados como desfases UTC. Los desfases se introducen como números, y esa es una limitación deliberada: esta calculadora no incorpora ninguna base de datos de husos, no deduce el horario de verano y no guarda historial de reglas pasadas; compara exactamente los desfases que le des. Los desfases fraccionarios funcionan: la India en UTC+5:30 y Nepal en UTC+5:45 son husos actuales y no curiosidades, así que la diferencia se calcula en minutos. Un cambio de día se muestra en su propia fila, porque de lo contrario la hora parecería del mismo día del calendario.",
      "howToUse": [
        "Introduce el desfase UTC del huso en el que conoces la hora.",
        "Introduce el desfase UTC del huso al que conviertes.",
        "Introduce las horas y los minutos de la hora de origen.",
        "Comprueba la fila del día del calendario: la hora puede haber pasado a un día contiguo."
      ],
      "howItWorks": "Cada desfase pasa de horas decimales a minutos enteros: 5,5 significa 5 horas 30 minutos, no 5 horas 50 minutos. Se admiten−12 a+14 horas que indiquen minutos enteros exactos; se rechazan fracciones de minuto. Se suma a la hora el desfase de destino menos el de origen, en minutos. El cambio de día es el suelo del total/1440; el resto indica la hora final. Los extremos difieren 26 horas y pueden desplazar 2 días. Son desfases fijos introducidos, sin ciudad, fecha, reglas IANA ni deducción automática del horario de verano.",
      "example": "Las 14:30 en UTC+3 corresponden a las 06:30 del mismo día en UTC−5.",
      "faq": [
        {
          "q": "¿Por qué los husos se introducen como números en vez de elegirse de una lista?",
          "a": "Porque una lista exige una base de datos de husos y actualizarla cada año. Mostrar una regla caducada es peor que pedir un desfase que puedes comprobar ahora mismo."
        },
        {
          "q": "¿Se tiene en cuenta el horario de verano?",
          "a": "No. Si uno de los husos está en horario de verano, introduce el desfase que ya lo incluya: UTC+2 en lugar de UTC+1, por ejemplo."
        },
        {
          "q": "¿Se admiten husos de media hora?",
          "a": "Sí. La India usa UTC+5:30 y Nepal UTC+5:45; introdúcelos como 5,5 y 5,75."
        },
        {
          "q": "¿Qué significa el cambio de día?",
          "a": "Que la hora convertida cayó en un día del calendario contiguo: más uno es el día siguiente y menos uno, el anterior."
        },
        {
          "q": "¿Cómo encuentro el desfase de una ciudad?",
          "a": "Aparece en los ajustes de huso horario de tu teléfono u ordenador junto al nombre de la ciudad, normalmente como UTC+3 o GMT+3."
        }
      ]
    },
    "work-hours": {
      "longDescription": "Cuenta las horas realmente trabajadas y no los días laborables de un calendario: el descanso se resta de la duración del turno, y lo que queda se multiplica por el número de turnos. Los turnos de noche se tratan aparte: cuando el fin es anterior al inicio el turno cruza la medianoche, y una resta simple devuelve un número negativo. Sumar un día ahí no es un apaño de comodidad, sino la única manera de sacar ocho horas de un «22:00 — 06:00» en lugar de menos dieciséis. Un descanso más largo que el turno se rechaza: el tiempo de trabajo negativo no existe, y mostrarlo sería un disparate verosímil.",
      "howToUse": [
        "Introduce la hora de inicio del turno en horas y minutos.",
        "Introduce la hora de fin: para un turno de noche basta con dar la hora de la mañana.",
        "Introduce la duración del descanso en minutos.",
        "Fija el número de turnos del periodo y la tarifa por hora."
      ],
      "howItWorks": "Los componentes del reloj y el número de turnos son enteros: horas 0–23 y minutos 0–59. Si el fin no es posterior al inicio, se añaden 1440 minutos: horas iguales significan aquí un turno completo de 24 horas. El descanso son minutos enteros no negativos y estrictamente menos que el turno; también se rechaza uno igual al turno. Horas del periodo = (turno − descanso)/60 × turnos. Pago = horas × tarifa; tarifa 0 válida, negativas o inválidas rechazadas. La tarifa y el resultado usan la misma moneda sin conversión. El modelo no determina descansos pagados, horas extra, impuestos, festivos ni horario de verano. La remuneración normalmente muestra dos decimales. Un importe positivo menor que 0,005 unidades monetarias se muestra en notación científica para no confundirlo con cero.",
      "example": "Un turno de 9:00 a 18:00 con una hora de descanso da 8 horas: 168 horas en 21 turnos, o 84 000 con una tarifa de 500.",
      "faq": [
        {
          "q": "¿Cómo se trata un turno que cruza la medianoche?",
          "a": "Si la hora de fin es anterior a la de inicio, se suma un día a la diferencia. Un turno de 22:00 a 06:00 da por tanto ocho horas y no menos dieciséis."
        },
        {
          "q": "¿Por qué se rechaza un descanso más largo que el turno?",
          "a": "El descanso debe ser estrictamente menor que el turno. También se rechaza uno igual porque el modelo exige horas trabajadas positivas."
        },
        {
          "q": "¿En qué se diferencia de contar días laborables?",
          "a": "Esto cuenta horas dentro de un turno, no días en un calendario. Un calendario laboral con festivos es otra calculadora."
        },
        {
          "q": "¿Se incluyen las horas extra a tarifa mayor?",
          "a": "No, la tarifa se aplica por igual a todas las horas. Para las horas con recargo, cuéntalas como un turno aparte con otra tarifa."
        },
        {
          "q": "¿Qué indica la duración del turno antes del descanso?",
          "a": "El tiempo total de presencia desde el inicio hasta el fin, descanso incluido. El tiempo retribuido es la fila de encima, ya sin él."
        }
      ]
    }
  }
};
