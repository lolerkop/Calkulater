// Словари перевода результата — ИСТОЧНИК ПРАВДЫ, не клиентский модуль.
//
// В браузер этот файл не уезжает. Его читают трое: сборка страниц (`i18n`),
// генератор манифестов, который раздаёт фразы тем калькуляторам, которые их
// показывают, и тесты. Раньше он ехал в браузер целиком: каждая страница
// калькулятора везла фразы всех калькуляторов на всех локалях, а поиск и
// подборка платили за них, ни разу не показав ни одной.
//
// Русский ключ пишется один раз, переводы стоят рядом с ним.

import type { Locale } from './clientI18n';
import { localizeLabel, localizeText } from './resultText';

type ResultValueMap = Partial<Record<Locale, Record<string, string>>> & {
  en: Record<string, string>;
};

export const resultPhrases: Record<string, Partial<Record<Locale, string>>> = {
  'Введите положительные размеры и толщину': { en: 'Enter positive dimensions and thickness', de: 'Trage positive Maße und eine positive Dicke ein', uk: 'Введіть додатні розміри та товщину' },
  'Вес мешка должен быть больше нуля': { en: 'The bag weight must be greater than zero', de: 'Das Sackgewicht muss größer als null sein', uk: 'Вага мішка має бути більшою за нуль' },
  'Введите себестоимость больше нуля': { en: 'Enter a cost greater than zero', de: 'Trage Selbstkosten größer als null ein', uk: 'Введіть собівартість більшу за нуль' },
  'Маржа должна быть меньше 100%': { en: 'The margin must be below 100%', de: 'Die Marge muss unter 100 % liegen', uk: 'Маржа має бути меншою за 100%' },
  'Цена продажи ниже себестоимости, поэтому наценка и маржа отрицательные.': { en: 'The selling price is below the cost, so both markup and margin are negative.', de: 'Der Verkaufspreis liegt unter den Selbstkosten, deshalb sind Aufschlag und Marge negativ.', uk: 'Ціна продажу нижча за собівартість, тому націнка й маржа відʼємні.' },
  'Введите цену больше нуля': { en: 'Enter a price greater than zero', de: 'Trage einen Preis über null ein', uk: 'Введіть ціну більшу за нуль' },
  'Выберите исходную дату': { en: 'Select a start date', de: 'Wähle ein Ausgangsdatum', uk: 'Оберіть початкову дату', es: "Elige la fecha de partida" },
  'Интервал не может быть отрицательным': { en: 'The interval cannot be negative', de: 'Der Abstand kann nicht negativ sein', uk: 'Інтервал не може бути відʼємним', es: "El intervalo no puede ser negativo" },
  'Сумма кредита должна быть положительной': { en: 'The loan amount must be greater than zero', de: 'Der Darlehensbetrag muss größer als null sein', uk: 'Сума кредиту має бути більшою за нуль' },
  'Постоянные затраты не могут быть отрицательными': { en: 'Fixed costs cannot be negative', de: 'Die Fixkosten können nicht negativ sein', uk: 'Постійні витрати не можуть бути відʼємними' },
  'Цена продажи должна быть больше нуля': { en: 'The selling price must be greater than zero', de: 'Der Verkaufspreis muss größer als null sein', uk: 'Ціна продажу має бути більшою за нуль' },
  'Переменные затраты не могут быть отрицательными': { en: 'Variable costs cannot be negative', de: 'Die variablen Kosten können nicht negativ sein', uk: 'Змінні витрати не можуть бути відʼємними' },
  'Переменные затраты не ниже цены продажи, поэтому маржинальная прибыль не положительна. При таких условиях увеличение продаж не приводит к безубыточности: сначала нужно поднять цену или снизить переменные затраты.': { en: 'The variable cost is not below the selling price, so the contribution margin is not positive. Under these conditions selling more never reaches break-even: the price has to go up or the variable cost has to come down first.', de: 'Die variablen Kosten liegen nicht unter dem Verkaufspreis, deshalb ist der Deckungsbeitrag nicht positiv. Unter diesen Bedingungen führt mehr Absatz nie zur Gewinnschwelle: zuerst muss der Preis steigen oder die variablen Kosten müssen sinken.', uk: 'Змінні витрати не нижчі за ціну продажу, тому маржинальний прибуток не є додатним. За таких умов збільшення продажів не приводить до беззбитковості: спочатку потрібно підняти ціну або знизити змінні витрати.' },
  'Плановый объём меньше точки безубыточности, поэтому запас прочности отрицательный, а расчёт показывает убыток.': { en: 'The planned volume is below the break-even point, so the margin of safety is negative and the calculation shows a loss.', de: 'Die geplante Menge liegt unter der Gewinnschwelle, deshalb ist die Sicherheitsspanne negativ und die Rechnung weist einen Verlust aus.', uk: 'Плановий обсяг менший за точку беззбитковості, тому запас міцності відʼємний, а розрахунок показує збиток.' },
  'Обхваты, метод ВМС США': { en: 'U.S. Navy circumference method', de: 'Umfänge, Methode der US Navy', uk: 'Метод ВМС США за обхватами', es: "Perímetros, método de la Marina de EE. UU." },
  'Это оценка по обхватам, а не измерение. Погрешность метода составляет несколько процентных пунктов и растёт при неточных замерах ленты. Результат не является медицинским заключением.': { en: 'This is an estimate from circumferences, not a measurement. The method is accurate to within a few percentage points, and the error grows with imprecise tape work. The result is not a medical assessment.', de: 'Das ist eine Schätzung aus Umfängen und keine Messung. Die Methode trifft auf wenige Prozentpunkte genau, und der Fehler wächst bei ungenauem Anlegen des Maßbands. Das Ergebnis ist kein medizinischer Befund.', uk: 'Це оцінка за обхватами, а не вимірювання. Похибка методу становить кілька відсоткових пунктів і зростає за неточних замірів стрічкою. Результат не є медичним висновком.', es: "Es una estimación a partir de perímetros, no una medida. El error del método es de unos pocos puntos porcentuales y crece con mediciones imprecisas con la cinta. El resultado no es un diagnóstico médico." },
  'Обхват талии должен быть больше обхвата шеи': { en: 'The waist circumference must be larger than the neck circumference', de: 'Der Taillenumfang muss größer als der Halsumfang sein', uk: 'Обхват талії має бути більшим за обхват шиї', es: "El perímetro de la cintura debe ser mayor que el del cuello" },
  'Сумма обхватов талии и бёдер должна быть больше обхвата шеи': { en: 'Waist plus hip circumference must be larger than the neck circumference', de: 'Taillen- und Hüftumfang zusammen müssen größer als der Halsumfang sein', uk: 'Сума обхватів талії та стегон має бути більшою за обхват шиї', es: "La suma de los perímetros de cintura y cadera debe ser mayor que el del cuello" },
  'Сочетание обхватов выходит за пределы применимости метода — проверьте измерения': { en: 'This combination of circumferences falls outside the range where the method applies — check the measurements', de: 'Diese Kombination von Umfängen liegt außerhalb des Bereichs, in dem die Methode gilt — prüfe die Messungen', uk: 'Поєднання обхватів виходить за межі застосовності методу — перевірте виміри', es: "La combinación de perímetros queda fuera del rango en el que se aplica el método: revisa las medidas" },
  'Введите рост больше нуля': { en: 'Enter a height greater than zero', de: 'Trage eine Größe über null ein', uk: 'Введіть зріст більший за нуль', es: "Introduce una estatura mayor que cero" },
  'Введите обхват шеи больше нуля': { en: 'Enter a neck circumference greater than zero', de: 'Trage einen Halsumfang über null ein', uk: 'Введіть обхват шиї більший за нуль', es: "Introduce un perímetro de cuello mayor que cero" },
  'Введите обхват талии больше нуля': { en: 'Enter a waist circumference greater than zero', de: 'Trage einen Taillenumfang über null ein', uk: 'Введіть обхват талії більший за нуль', es: "Introduce un perímetro de cintura mayor que cero" },
  'Введите обхват бёдер больше нуля': { en: 'Enter a hip circumference greater than zero', de: 'Trage einen Hüftumfang über null ein', uk: 'Введіть обхват стегон більший за нуль', es: "Introduce un perímetro de cadera mayor que cero" },
  'Введите положительные размеры стены': { en: 'Enter positive wall dimensions', de: 'Trage positive Wandmaße ein', uk: 'Введіть додатні розміри стіни' },
  'Введите положительные размеры камня': { en: 'Enter positive unit dimensions', de: 'Trage positive Steinmaße ein', uk: 'Введіть додатні розміри каменю' },
  'Толщина шва не может быть отрицательной': { en: 'The mortar joint cannot be negative', de: 'Die Fugendicke kann nicht negativ sein', uk: 'Товщина шва не може бути відʼємною' },
  'Площадь проёмов не может быть отрицательной': { en: 'The area of openings cannot be negative', de: 'Die Fläche der Öffnungen kann nicht negativ sein', uk: 'Площа прорізів не може бути відʼємною' },
  'Запас не может быть отрицательным': { en: 'The waste allowance cannot be negative', de: 'Die Reserve kann nicht negativ sein', uk: 'Запас не може бути відʼємним' },
  'Проёмы занимают всю стену — кладка не требуется': { en: 'The openings fill the whole wall — there is nothing to build', de: 'Die Öffnungen füllen die ganze Wand — es ist nichts zu mauern', uk: 'Прорізи займають усю стіну — класти нічого' },
  'Расчёт выполнен для одного слоя кладки по видимой плоскости стены. Кладка в кирпич и толще, перевязка, простенки и доборные элементы не моделируются, поэтому перед закупкой сверьтесь с проектом.': { en: 'The calculation covers a single leaf of masonry measured on the visible face of the wall. Walls one brick thick or more, bonding patterns, piers and special units are not modelled, so check your drawings before ordering.', de: 'Gerechnet ist eine einschalige Wand, gemessen an der sichtbaren Wandfläche. Wände von einem Stein Dicke und mehr, Verband, Pfeiler und Ergänzungssteine werden nicht abgebildet, prüfe vor dem Einkauf also die Planung.', uk: 'Розрахунок виконано для одного шару кладки по видимій площині стіни. Кладка в цеглину й товща, перевʼязка, простінки та добірні елементи не моделюються, тому перед закупівлею звіртеся з проєктом.' },
  'официальный справочный': { en: 'official reference rate', de: 'amtlicher Referenzkurs', uk: 'офіційний довідковий' },
  'Это не курс в реальном времени. Используются официальные справочные курсы центральных банков на указанную дату. Банки и обменные пункты могут использовать другие курсы и комиссии.': { en: 'These are not real-time rates. The calculation uses official central-bank reference rates for the displayed date. Banks and exchange services may use different rates and fees.', de: 'Das sind keine Echtzeitkurse. Verwendet werden die amtlichen Referenzkurse der Zentralbanken zum angezeigten Datum. Banken und Wechselstuben können andere Kurse und Gebühren ansetzen.', uk: 'Це не курс у реальному часі. Розрахунок використовує офіційні довідкові курси центральних банків на вказану дату. Банки та обмінні сервіси можуть застосовувати інші курси й комісії.' },
  'Курсы успешно обновлены при последней сборке сайта.': { en: 'Rates were updated successfully during the latest site build.', de: 'Die Kurse wurden beim letzten Bau der Website erfolgreich aktualisiert.', uk: 'Курси успішно оновлено під час останнього складання сайту.' },
  'Дата курса старше четырёх дней. Данные могут быть устаревшими.': { en: 'The reference-rate date is more than four days old. The data may be stale.', de: 'Das Kursdatum liegt mehr als vier Tage zurück. Die Daten können veraltet sein.', uk: 'Дата довідкового курсу старша за чотири дні. Дані можуть бути застарілими.' },
  'Не удалось обновить курсы при последней сборке. Используются последние сохранённые данные.': { en: 'The latest build could not update the rates. The last saved data is being used.', de: 'Beim letzten Bau ließen sich die Kurse nicht aktualisieren. Verwendet werden die zuletzt gespeicherten Daten.', uk: 'Під час останнього складання не вдалося оновити курси. Використовуються останні збережені дані.' },
  'Европейский центральный банк': { en: 'European Central Bank', de: 'Europäische Zentralbank', uk: 'Європейський центральний банк' },
  'Национальный банк Украины': { en: 'National Bank of Ukraine', de: 'Nationalbank der Ukraine', uk: 'Національний банк України' },
  'Национальный банк Молдовы': { en: 'National Bank of Moldova', de: 'Nationalbank der Republik Moldau', uk: 'Національний банк Молдови' },
  'Exchange Rate API': { en: 'Exchange Rate API', de: 'Exchange Rate API', uk: 'Exchange Rate API' },
  'Резервный источник': { en: 'Fallback source', de: 'Ersatzquelle', uk: 'Резервне джерело' },
  'Основной источник был недоступен, курс получен из резервного.': { en: 'The primary source was unavailable, so this rate came from the fallback source.', de: 'Die Hauptquelle war nicht erreichbar, der Kurs stammt aus der Ersatzquelle.', uk: 'Основне джерело було недоступне, тому курс отримано з резервного.' },
  'Курсы обновлены при последней сборке; часть валют получена из резервного источника.': { en: 'Rates were updated during the latest build; some currencies came from the fallback source.', de: 'Die Kurse wurden beim letzten Bau aktualisiert; ein Teil der Währungen stammt aus der Ersatzquelle.', uk: 'Курси оновлено під час останнього складання; частину валют отримано з резервного джерела.' },
  'Доллар США': { en: 'US dollar', de: 'US-Dollar', uk: 'Долар США' },
  'Евро': { en: 'Euro', de: 'Euro', uk: 'Євро' },
  'Молдавский лей': { en: 'Moldovan leu', de: 'Moldauischer Leu', uk: 'Молдовський лей' },
  'Румынский лей': { en: 'Romanian leu', de: 'Rumänischer Leu', uk: 'Румунський лей' },
  'Гривна': { en: 'Ukrainian hryvnia', de: 'Hrywnja', uk: 'Українська гривня' },
  'Польский злотый': { en: 'Polish zloty', de: 'Polnischer Złoty', uk: 'Польський злотий' },
  'Фунт стерлингов': { en: 'Pound sterling', de: 'Pfund Sterling', uk: 'Фунт стерлінгів' },
  'Швейцарский франк': { en: 'Swiss franc', de: 'Schweizer Franken', uk: 'Швейцарський франк' },
  'Турецкая лира': { en: 'Turkish lira', de: 'Türkische Lira', uk: 'Турецька ліра' },
  'Норма': { en: 'Healthy range', de: 'Normalbereich', uk: 'Нормальний діапазон', es: "Normal" },
  'Недостаток веса': { en: 'Underweight', de: 'Untergewicht', uk: 'Недостатня вага', es: "Bajo peso" },
  'Выраженный дефицит': { en: 'Severely underweight', de: 'Starkes Untergewicht', uk: 'Виражений дефіцит ваги', es: "Delgadez severa" },
  'Избыточный вес': { en: 'Overweight', de: 'Übergewicht', uk: 'Надмірна вага', es: "Sobrepeso" },
  'Ожирение I степени': { en: 'Obesity class I', de: 'Adipositas Grad I', uk: 'Ожиріння I ступеня', es: "Obesidad de grado I" },
  'Ожирение II степени': { en: 'Obesity class II', de: 'Adipositas Grad II', uk: 'Ожиріння II ступеня', es: "Obesidad de grado II" },
  'Ожирение III степени': { en: 'Obesity class III', de: 'Adipositas Grad III', uk: 'Ожиріння III ступеня', es: "Obesidad de grado III" },
  'Поддерживайте текущий режим.': { en: 'Keep your current routine.', de: 'Behalte deine derzeitige Routine bei.', uk: 'Підтримуйте поточний режим.', es: "Mantén el ritmo actual." },
  'Стоит набрать немного массы.': { en: 'Consider gaining some weight.', de: 'Etwas zuzunehmen wäre sinnvoll.', uk: 'Варто трохи збільшити масу тіла.', es: "Conviene ganar algo de peso." },
  'Рекомендуется снизить вес.': { en: 'Consider reducing your weight.', de: 'Eine Gewichtsabnahme ist ratsam.', uk: 'Рекомендується знизити вагу.', es: "Se recomienda reducir peso." },
  'Обратитесь к специалисту.': { en: 'Consult a healthcare professional.', de: 'Wende dich an eine Fachkraft.', uk: 'Зверніться до фахівця.', es: "Consulta con un profesional." },
  'Необходима консультация врача.': { en: 'A medical consultation is recommended.', de: 'Eine ärztliche Beratung ist nötig.', uk: 'Рекомендована консультація лікаря.', es: "Es necesaria una consulta médica." },
  'Срочно к врачу.': { en: 'Seek medical advice promptly.', de: 'Suche zeitnah ärztlichen Rat.', uk: 'Якнайшвидше зверніться до лікаря.', es: "Acude al médico de inmediato." },
  'Срочно обратитесь к врачу.': { en: 'Seek medical advice promptly.', de: 'Suche zeitnah ärztlichen Rat.', uk: 'Якнайшвидше зверніться до лікаря.', es: "Acude al médico cuanto antes." },
  'Показан размер первого (наибольшего) платежа. Далее платёж снижается.': { en: 'The first and largest payment is shown. Later payments gradually decrease.', de: 'Gezeigt ist die erste und höchste Rate. Danach sinkt die Rate allmählich.', uk: 'Показано перший і найбільший платіж. Наступні платежі поступово зменшуються.' },
  'Показан размер первого (наибольшего) платежа.': { en: 'The first and largest payment is shown.', de: 'Gezeigt ist die erste und höchste Rate.', uk: 'Показано перший і найбільший платіж.' },
  'Точность формулы снижается при повторениях больше 10.': { en: 'The estimate becomes less accurate above 10 repetitions.', de: 'Über 10 Wiederholungen wird die Schätzung ungenauer.', uk: 'Точність оцінки знижується, якщо повторень більше 10.', es: "La exactitud de la fórmula baja con más de 10 repeticiones." },
  'ИМТ — ориентировочный показатель для взрослых. Он может быть менее точным для спортсменов, беременных и людей старшего возраста.': { en: 'BMI is a screening measure for adults. It can be less accurate for athletes, pregnant people, and older adults.', de: 'Der BMI ist ein Orientierungswert für Erwachsene. Bei Sportlern, Schwangeren und älteren Menschen kann er weniger genau sein.', uk: 'ІМТ є орієнтовним показником для дорослих. Він може бути менш точним для спортсменів, вагітних і людей старшого віку.', es: 'El IMC es un indicador orientativo para personas adultas. Puede ser menos preciso en deportistas, en el embarazo y en personas mayores.' },
  'Показаны первые 12 месяцев и последний платеж.': { en: 'The first 12 months and the final payment are shown.', de: 'Gezeigt sind die ersten 12 Monate und die letzte Rate.', uk: 'Показано перші 12 місяців і останній платіж.' },
  'Таблица предполагает равномерный темп на всей дистанции.': { en: 'The table assumes an even pace over the entire distance.', de: 'Die Tabelle setzt ein gleichmäßiges Tempo über die ganze Strecke voraus.', uk: 'Таблиця передбачає рівномірний темп на всій дистанції.', es: "La tabla supone un ritmo uniforme en toda la distancia." },
  'Получилось очень низкое значение калорий. Не используйте такой дефицит без консультации врача или диетолога.': { en: 'The calculated calorie target is very low. Do not use this deficit without advice from a doctor or registered dietitian.', de: 'Der berechnete Kalorienwert ist sehr niedrig. Nutze ein solches Defizit nicht ohne ärztlichen oder ernährungsfachlichen Rat.', uk: 'Розрахована калорійність дуже низька. Не використовуйте такий дефіцит без консультації лікаря або дієтолога.', es: "Ha salido un valor calórico muy bajo. No apliques un déficit así sin consultar a un médico o a un dietista." },
  'Расчёт служит стартовой оценкой. Корректируйте калорийность по динамике веса за 2–3 недели.': { en: 'Use this as a starting estimate and adjust calories based on your weight trend over 2–3 weeks.', de: 'Nimm das als Ausgangsschätzung und passe die Kalorien nach dem Gewichtsverlauf über 2–3 Wochen an.', uk: 'Використовуйте результат як початкову оцінку та коригуйте калорійність за динамікою ваги протягом 2–3 тижнів.', es: "El cálculo sirve como estimación de partida. Ajusta las calorías según la evolución del peso a lo largo de 2 o 3 semanas." },
  'Введите положительные значения': { en: 'Enter positive values', de: 'Trage positive Werte ein', uk: 'Введіть додатні значення', es: "Introduce valores positivos" },
  'Введите положительные размеры': { en: 'Enter positive dimensions', de: 'Trage positive Maße ein', uk: 'Введіть додатні розміри' },
  'Введите рост и вес': { en: 'Enter height and weight', de: 'Trage Größe und Gewicht ein', uk: 'Введіть зріст і вагу', es: "Introduce la estatura y el peso" },
  'Введите рост, вес и возраст': { en: 'Enter height, weight, and age', de: 'Trage Größe, Gewicht und Alter ein', uk: 'Введіть зріст, вагу та вік', es: "Introduce la estatura, el peso y la edad" },
  'Введите дистанцию и время': { en: 'Enter distance and time', de: 'Trage Strecke und Zeit ein', uk: 'Введіть дистанцію та час', es: "Introduce la distancia y el tiempo" },
  'Введите вес и количество повторений': { en: 'Enter weight and repetitions', de: 'Trage Gewicht und Wiederholungen ein', uk: 'Введіть вагу та кількість повторень', es: "Introduce el peso y el número de repeticiones" },
  'Выберите дату рождения': { en: 'Select a birth date', de: 'Wähle ein Geburtsdatum', uk: 'Оберіть дату народження' },
  'Выберите начало и конец': { en: 'Select start and end dates', de: 'Wähle Anfang und Ende', uk: 'Оберіть початкову та кінцеву дати', es: "Elige el inicio y el fin" },
  'Дата конца раньше начала': { en: 'The end date is before the start date', de: 'Das Enddatum liegt vor dem Anfangsdatum', uk: 'Кінцева дата передує початковій', es: "La fecha de fin es anterior a la de inicio" },
  'Дата расчёта раньше даты рождения': { en: 'The calculation date is before the birth date', de: 'Das Rechendatum liegt vor dem Geburtsdatum', uk: 'Дата розрахунку передує даті народження' },
  'Неизвестная валюта': { en: 'Unknown currency', de: 'Unbekannte Währung', uk: 'Невідома валюта' },
  'Целое не может быть равно нулю': { en: 'The whole value cannot be zero', de: 'Das Ganze kann nicht null sein', uk: 'Ціле значення не може дорівнювати нулю' },
  'Исходное значение не может быть равно нулю': { en: 'The starting value cannot be zero', de: 'Der Ausgangswert kann nicht null sein', uk: 'Початкове значення не може дорівнювати нулю' },
  'Процент от числа': { en: 'Percentage of a number', de: 'Prozent einer Zahl', uk: 'Відсоток від числа', es: "Porcentaje de un número" },
  'Часть от целого': { en: 'Part as a percentage of a whole', de: 'Anteil am Ganzen', uk: 'Частка від цілого у відсотках', es: "Parte del total" },
  'Прибавить процент': { en: 'Add a percentage', de: 'Prozent addieren', uk: 'Додати відсоток', es: "Sumar un porcentaje" },
  'Вычесть процент': { en: 'Subtract a percentage', de: 'Prozent abziehen', uk: 'Відняти відсоток', es: "Restar un porcentaje" },
  'Процентное изменение': { en: 'Percentage change', de: 'Prozentuale Änderung', uk: 'Відсоткова зміна', es: "Variación porcentual" },
  'Проценты': { en: 'Percentages', de: 'Prozent', uk: 'Відсотки' },
  'Воскресенье': { en: 'Sunday', de: 'Sonntag', uk: 'Неділя', es: "domingo" },
  'Понедельник': { en: 'Monday', de: 'Montag', uk: 'Понеділок', es: "lunes" },
  'Вторник': { en: 'Tuesday', de: 'Dienstag', uk: 'Вівторок', es: "martes" },
  'Среда': { en: 'Wednesday', de: 'Mittwoch', uk: 'Середа', es: "miércoles" },
  'Четверг': { en: 'Thursday', de: 'Donnerstag', uk: 'Четвер', es: "jueves" },
  'Пятница': { en: 'Friday', de: 'Freitag', uk: 'П’ятниця', es: "viernes" },
  'Суббота': { en: 'Saturday', de: 'Samstag', uk: 'Субота', es: "sábado" },
};

// Подписи строк результата. Русский ключ пишется один раз, переводы стоят
// рядом с ним: три отдельные карты держали в файле три копии каждого ключа, и
// этот файл уезжает в браузер на каждой странице калькулятора.
//
// Пустая клетка означает, что для локали перевода нет: тогда работает хвост
// подстановок в localizedResultLabel, а не чужой язык.
// Экспортируется ради ворот от утечек: тест обязан отличать «перевода нет» от
// «перевод совпадает с русским». По выводу функции их не различить —
// «Запас» по-украински тоже «Запас», — а по факту объявления различить можно.
export const resultLabelPhrases: Record<string, Partial<Record<Locale, string>>> = {
  'Количество камней': { en: 'Units needed', uk: 'Кількість каменів', de: 'Anzahl der Steine' },
  'Площадь кладки': { en: 'Masonry area', uk: 'Площа кладки', de: 'Mauerwerksfläche' },
  'Площадь проёмов': { en: 'Openings area', uk: 'Площа прорізів' },
  'Камней без запаса': { en: 'Units without waste', uk: 'Каменів без запасу', de: 'Steine ohne Reserve' },
  'Расчётный модуль камня': { en: 'Working module per unit', uk: 'Розрахунковий модуль каменю', de: 'Rechenmodul des Steins' },
  'Камней на квадратный метр': { en: 'Units per square metre', uk: 'Каменів на квадратний метр', de: 'Steine je Quadratmeter' },
  'Процент жира': { en: 'Body fat percentage', uk: 'Відсоток жиру', de: 'Körperfettanteil', es: "Porcentaje de grasa" },
  'Метод расчёта': { en: 'Method', uk: 'Метод розрахунку', de: 'Rechenweg', es: "Método de cálculo" },
  'Обхват талии': { en: 'Waist circumference', uk: 'Обхват талії', de: 'Taillenumfang', es: "Perímetro de la cintura" },
  'Обхват шеи': { en: 'Neck circumference', uk: 'Обхват шиї', de: 'Halsumfang', es: "Perímetro del cuello" },
  'Обхват бёдер': { en: 'Hip circumference', uk: 'Обхват стегон', de: 'Hüftumfang', es: "Perímetro de la cadera" },
  'Талия минус шея': { en: 'Waist minus neck', uk: 'Талія мінус шия', de: 'Taille minus Hals', es: "Cintura menos cuello" },
  'Талия плюс бёдра минус шея': { en: 'Waist plus hips minus neck', uk: 'Талія плюс стегна мінус шия', de: 'Taille plus Hüfte minus Hals', es: "Cintura más cadera menos cuello" },
  'Точка безубыточности': { en: 'Break-even point', uk: 'Точка беззбитковості', de: 'Gewinnschwelle' },
  'Маржинальная прибыль с единицы': { en: 'Contribution margin per unit', uk: 'Маржинальний прибуток з одиниці', de: 'Deckungsbeitrag je Einheit' },
  'Коэффициент маржинальной прибыли': { en: 'Contribution margin ratio', uk: 'Коефіцієнт маржинального прибутку', de: 'Deckungsbeitragsquote' },
  'Расчётный объём без округления': { en: 'Calculated volume before rounding', uk: 'Розрахунковий обсяг без округлення', de: 'Rechnerische Menge ohne Rundung' },
  'Выручка при расчётном объёме': { en: 'Revenue at the calculated volume', uk: 'Виручка за розрахункового обсягу', de: 'Umsatz bei der rechnerischen Menge' },
  'Выручка при целом числе единиц': { en: 'Revenue at whole units', uk: 'Виручка за цілого числа одиниць', de: 'Umsatz bei ganzen Einheiten' },
  'Выручка при плане продаж': { en: 'Revenue at the planned volume', uk: 'Виручка за планового обсягу', de: 'Umsatz bei der geplanten Menge' },
  'Маржинальная прибыль при плане': { en: 'Contribution at the planned volume', uk: 'Маржинальний прибуток за планом', de: 'Deckungsbeitrag bei der geplanten Menge' },
  'Прибыль при плане': { en: 'Profit at the planned volume', uk: 'Прибуток за планом', de: 'Gewinn bei der geplanten Menge' },
  'Запас прочности': { en: 'Margin of safety', uk: 'Запас міцності', de: 'Sicherheitsspanne' },
  'Запас прочности, %': { en: 'Margin of safety, %', uk: 'Запас міцності, %', de: 'Sicherheitsspanne, %' },
  'Переменные затраты на единицу': { en: 'Variable cost per unit', uk: 'Змінні витрати на одиницю' },
  'Ежемесячный платеж': { en: 'Monthly payment', uk: 'Щомісячний платіж', de: 'Monatliche Rate' },
  'Общая сумма выплат': { en: 'Total repayment', uk: 'Загальна сума виплат', de: 'Summe aller Zahlungen' },
  'Переплата': { en: 'Overpayment', uk: 'Переплата', de: 'Mehrkosten' },
  'Сумма процентов': { en: 'Interest amount', uk: 'Сума відсотків', de: 'Zinsen insgesamt' },
  'Срок': { en: 'Term', uk: 'Строк', de: 'Laufzeit' },
  'Проверьте данные': { en: 'Check inputs', uk: 'Перевірте дані', de: 'Prüfe die Werte', es: "Revisa los datos" },
  'Введите положительные значения': { en: 'Enter positive values', es: "Introduce valores positivos" },
  'Итоговая сумма': { en: 'Final amount', uk: 'Підсумкова сума', de: 'Endbetrag' },
  'Начисленные проценты': { en: 'Interest earned', uk: 'Нараховані відсотки' },
  'Сумма пополнений': { en: 'Total contributions', uk: 'Сума поповнень' },
  'Внесённая сумма': { en: 'Invested amount', uk: 'Внесена сума', de: 'Eingezahlter Betrag' },
  'Прибыль': { en: 'Profit', uk: 'Прибуток', de: 'Gewinn' },
  'Сумма кредита': { en: 'Loan amount', uk: 'Сума кредиту', de: 'Darlehensbetrag' },
  'Общая стоимость с взносом': { en: 'Total cost with down payment', uk: 'Загальна вартість із внеском', de: 'Gesamtkosten samt Anzahlung' },
  'Общая стоимость': { en: 'Total cost', uk: 'Загальна вартість', de: 'Gesamtkosten' },
  'Цена со скидкой': { en: 'Discounted price', uk: 'Ціна зі знижкою', de: 'Preis nach Rabatt' },
  'Размер скидки': { en: 'Discount amount', uk: 'Розмір знижки', de: 'Rabattbetrag' },
  'Процент скидки': { en: 'Discount percentage', uk: 'Відсоток знижки', de: 'Rabatt in Prozent' },
  'Исходная цена': { en: 'Original price', uk: 'Початкова ціна', de: 'Ursprünglicher Preis' },
  'Результат': { en: 'Result', uk: 'Результат', de: 'Ergebnis', es: "Resultado" },
  'Курс': { en: 'Rate', uk: 'Курс', de: 'Wechselkurs' },
  'Из': { en: 'From', uk: 'З', de: 'Von' },
  'В': { en: 'To', uk: 'У', de: 'Nach' },
  'Тип курса': { en: 'Rate type', uk: 'Тип курсу', de: 'Art des Kurses' },
  'Дата курса': { en: 'Rate date', uk: 'Дата курсу', de: 'Kursdatum' },
  'Дата обновления': { en: 'Update date', uk: 'Дата оновлення', de: 'Stand vom' },
  'Статус обновления': { en: 'Update status', uk: 'Статус оновлення', de: 'Stand der Aktualisierung' },
  'Последняя попытка обновления': { en: 'Last update attempt', uk: 'Остання спроба оновлення', de: 'Letzter Aktualisierungsversuch' },
  'Источник': { en: 'Source', uk: 'Джерело', de: 'Quelle' },
  'ИМТ': { en: 'BMI', uk: 'ІМТ', de: 'BMI', es: "IMC" },
  'Категория': { en: 'Category', uk: 'Категорія', de: 'Kategorie', es: "Categoría" },
  'Комментарий': { en: 'Note', uk: 'Коментар', de: 'Hinweis', es: "Comentario" },
  'Рост': { en: 'Height', uk: 'Зріст', de: 'Körpergröße', es: "Estatura" },
  'Вес': { en: 'Weight', uk: 'Вага', de: 'Gewicht', es: "Peso" },
  'Дневная норма': { en: 'Daily target', uk: 'Добова норма', de: 'Tagesbedarf', es: "Ración diaria" },
  'Базовый обмен (BMR)': { en: 'Basal metabolic rate (BMR)', uk: 'Базовий обмін (BMR)', de: 'Grundumsatz (BMR)', es: "Metabolismo basal (TMB)" },
  'Белки': { en: 'Protein', uk: 'Білки', de: 'Eiweiß', es: "Proteínas" },
  'Жиры': { en: 'Fat', uk: 'Жири', de: 'Fett', es: "Grasas" },
  'Углеводы': { en: 'Carbs', uk: 'Вуглеводи', de: 'Kohlenhydrate', es: "Hidratos de carbono" },
  'Темп': { en: 'Pace', uk: 'Темп', de: 'Tempo', es: "Ritmo" },
  'Средняя скорость': { en: 'Average speed', uk: 'Середня швидкість', de: 'Durchschnittsgeschwindigkeit', es: "Velocidad media" },
  'Прогноз на 5 км': { en: '5K prediction', uk: 'Прогноз на 5 км', de: 'Prognose für 5 km', es: "Previsión para 5 km" },
  'Прогноз на 10 км': { en: '10K prediction', uk: 'Прогноз на 10 км', de: 'Prognose für 10 km', es: "Previsión para 10 km" },
  'Прогноз на полумарафон': { en: 'Half marathon prediction', uk: 'Прогноз на півмарафон', de: 'Prognose für den Halbmarathon', es: "Previsión para media maratón" },
  'Прогноз на марафон': { en: 'Marathon prediction', uk: 'Прогноз на марафон', de: 'Prognose für den Marathon', es: "Previsión para maratón" },
  'Примерный 1ПМ': { en: 'Estimated 1RM', uk: 'Орієнтовний 1ПМ', de: 'Geschätztes 1RM', es: "1RM aproximado" },
  'Количество плиток': { en: 'Tiles needed', uk: 'Кількість плиток', de: 'Anzahl der Fliesen', es: "Número de azulejos" },
  'Площадь': { en: 'Area', uk: 'Площа', de: 'Fläche', es: "Área" },
  'Площадь с запасом': { en: 'Area with reserve', uk: 'Площа із запасом', de: 'Fläche mit Reserve', es: "Área con reserva" },
  'Количество упаковок': { en: 'Packs needed', uk: 'Кількість упаковок', de: 'Anzahl der Pakete', es: "Número de paquetes" },
  'Примерный расход клея': { en: 'Approximate adhesive', uk: 'Орієнтовна витрата клею', de: 'Ungefährer Kleberbedarf', es: "Consumo aproximado de adhesivo" },
  'Количество рулонов': { en: 'Rolls needed', uk: 'Кількість рулонів', de: 'Anzahl der Rollen' },
  'Площадь стен': { en: 'Wall area', uk: 'Площа стін', de: 'Wandfläche' },
  'Периметр': { en: 'Perimeter', uk: 'Периметр', de: 'Umfang' },
  'Количество полотен': { en: 'Strips needed', uk: 'Кількість полотен', de: 'Anzahl der Bahnen' },
  'Полотен из рулона': { en: 'Strips per roll', uk: 'Полотен із рулону', de: 'Bahnen je Rolle' },
  'Запас': { en: 'Reserve', uk: 'Запас', de: 'Reserve' },
  'Заданный запас': { en: 'Added reserve', uk: 'Доданий запас', de: 'Gewählte Reserve' },
  'Остаток из-за целых банок': { en: 'Remainder from full cans', uk: 'Залишок через цілі банки', de: 'Rest durch ganze Dosen' },
  'Литры краски': { en: 'Paint liters', uk: 'Літри фарби', de: 'Farbe in Litern' },
  'Площадь окрашивания': { en: 'Paint area', uk: 'Площа фарбування', de: 'Zu streichende Fläche' },
  'Слоёв': { en: 'Coats', uk: 'Шарів', de: 'Anstriche' },
  'Количество банок': { en: 'Cans needed', uk: 'Кількість банок', de: 'Anzahl der Dosen' },
  'Площадь пола': { en: 'Floor area', uk: 'Площа підлоги', de: 'Bodenfläche' },
  'Площадь упаковки': { en: 'Pack coverage', uk: 'Площа упаковки', de: 'Fläche eines Pakets' },
  'Возраст': { en: 'Age', uk: 'Вік', de: 'Alter', es: "Edad" },
  'Полных лет': { en: 'Full years', uk: 'Повних років', de: 'Volle Jahre', es: "Años cumplidos" },
  'Месяцев (сверх лет)': { en: 'Months after years', uk: 'Місяців понад повні роки', de: 'Monate (über die Jahre hinaus)', es: "Meses (además de los años)" },
  'Месяцев': { en: 'Months', uk: 'Місяців', de: 'Monate', es: "Meses" },
  'Дней (сверх месяцев)': { en: 'Days after months', uk: 'Днів понад повні місяці', de: 'Tage (über die Monate hinaus)', es: "Días (además de los meses)" },
  'Дней': { en: 'Days', uk: 'Днів', de: 'Tage', es: "Días" },
  'Всего прожито дней': { en: 'Total days lived', uk: 'Усього прожито днів', de: 'Gelebte Tage insgesamt', es: "Días vividos en total" },
  'Рабочие дни': { en: 'Business days', uk: 'Робочі дні', de: 'Arbeitstage', es: "Días laborables" },
  'Календарные дни': { en: 'Calendar days', uk: 'Календарні дні', de: 'Kalendertage', es: "Días naturales" },
  'Итоговая дата': { en: 'Resulting date', uk: 'Підсумкова дата', de: 'Ergebnisdatum', es: "Fecha resultante" },
  'День недели': { en: 'Day of the week', uk: 'День тижня', de: 'Wochentag', es: "Día de la semana" },
  'Исходная дата': { en: 'Start date', uk: 'Початкова дата', de: 'Ausgangsdatum', es: "Fecha de partida" },
  'Всего календарных дней': { en: 'Total calendar days', uk: 'Усього календарних днів', de: 'Kalendertage insgesamt', es: "Días naturales en total" },
  'Номер дня в году': { en: 'Day of the year', uk: 'Номер дня в році', de: 'Tag des Jahres', es: "Número de día del año" },
  'Номер недели (ISO)': { en: 'ISO week number', uk: 'Номер тижня (ISO)', de: 'Kalenderwoche (ISO)', es: "Número de semana (ISO)" },
  'Объём раствора': { en: 'Mortar volume', uk: 'Об’єм розчину', de: 'Estrichvolumen' },
  'Толщина слоя': { en: 'Layer thickness', uk: 'Товщина шару', de: 'Schichtdicke' },
  'Сухая смесь': { en: 'Dry mix', uk: 'Суха суміш', de: 'Trockenmischung' },
  'Мешков': { en: 'Bags', uk: 'Мішків', de: 'Säcke' },
  'Стоимость смеси': { en: 'Dry mix cost', uk: 'Вартість суміші', de: 'Kosten der Trockenmischung' },
  'Цена продажи': { en: 'Selling price', uk: 'Ціна продажу', de: 'Verkaufspreis' },
  'Себестоимость': { en: 'Cost', uk: 'Собівартість', de: 'Selbstkosten' },
  'Прибыль с единицы': { en: 'Profit per unit', uk: 'Прибуток з одиниці', de: 'Gewinn je Einheit' },
  'Наценка': { en: 'Markup', uk: 'Націнка', de: 'Aufschlag' },
  'Маржа': { en: 'Margin', uk: 'Маржа', de: 'Marge' },
  'Прибыль за партию': { en: 'Profit for the batch', uk: 'Прибуток за партію', de: 'Gewinn der Partie' },
  'Выходные дни': { en: 'Weekend days', uk: 'Вихідні дні', de: 'Wochenendtage', es: "Días de fin de semana" },
  'Исключённые даты': { en: 'Excluded dates', uk: 'Виключені дати', de: 'Ausgeschlossene Daten', es: "Fechas excluidas" },
  'Режим': { en: 'Mode', uk: 'Режим', de: 'Aufgabe', es: "Modo" },
  'Значение A': { en: 'Value A', uk: 'Значення A', de: 'Wert A', es: "Valor A" },
  'Значение B': { en: 'Value B', uk: 'Значення B', de: 'Wert B', es: "Valor B" },
  'Подсказка': { en: 'Hint', uk: 'Підказка' },
  'Ошибка': { en: 'Error', uk: 'Помилка', de: 'Fehler', es: "Error" },
  'Абсолютная разница': { en: 'Absolute difference', uk: 'Абсолютна різниця', de: 'Absoluter Unterschied', es: "Diferencia absoluta" },
  'Изменение': { en: 'Change', uk: 'Зміна', de: 'Veränderung', es: "Variación" },
  'Налог': { en: 'Tax', uk: 'Податок' },
  'Начислено (до налога)': { en: 'Gross income', uk: 'Нараховано до оподаткування' },
  'На руки (после налога)': { en: 'Net income', uk: 'Сума після оподаткування' },
  'Эффективная ставка': { en: 'Effective rate', uk: 'Ефективна ставка' },
  'Сумма без НДС': { en: 'Amount before VAT', uk: 'Сума без ПДВ' },
  'Сумма с НДС': { en: 'Amount including VAT', uk: 'Сума з ПДВ' },
  '50% от 1ПМ': { en: '50% of 1RM', uk: '50% від 1ПМ', de: '50 % vom 1RM', es: "50 % del 1RM" },
  '60% от 1ПМ': { en: '60% of 1RM', uk: '60% від 1ПМ', de: '60 % vom 1RM', es: "60 % del 1RM" },
  '70% от 1ПМ': { en: '70% of 1RM', uk: '70% від 1ПМ', de: '70 % vom 1RM', es: "70 % del 1RM" },
  '80% от 1ПМ': { en: '80% of 1RM', uk: '80% від 1ПМ', de: '80 % vom 1RM', es: "80 % del 1RM" },
  '90% от 1ПМ': { en: '90% of 1RM', uk: '90% від 1ПМ', de: '90 % vom 1RM', es: "90 % del 1RM" },
  'Последний платеж': { en: 'Final payment', uk: 'Останній платіж', de: 'Letzte Rate' },
  'Средний платеж': { en: 'Average payment', uk: 'Середній платіж', de: 'Durchschnittliche Rate' },
  'Первоначальный взнос': { en: 'Down payment', uk: 'Перший внесок', de: 'Anzahlung' },
  'График первых платежей': { en: 'Payment schedule', uk: 'Графік платежів', de: 'Plan der ersten Raten' },
  'Месяц': { en: 'Month', uk: 'Місяць', de: 'Monat', es: "Mes" },
  'Платеж': { en: 'Payment', uk: 'Платіж', de: 'Rate' },
  'Основной долг': { en: 'Principal', uk: 'Основний борг', de: 'Tilgung' },
  'Проценты': { en: 'Interest', uk: 'Відсотки', de: 'Zinsen' },
  'Остаток': { en: 'Balance', uk: 'Залишок', de: 'Restschuld' },
  'Ориентир здорового веса': { en: 'Healthy weight reference', uk: 'Орієнтир здорової ваги', de: 'Richtwert für gesundes Gewicht', es: "Intervalo de peso saludable" },
  'Формула Бжицки': { en: 'Brzycki formula', uk: 'Формула Бжицького', de: 'Formel von Brzycki', es: "Fórmula de Brzycki" },
  'Формула Лэндера': { en: 'Lander formula', uk: 'Формула Лендера', de: 'Formel von Lander', es: "Fórmula de Lander" },
  'Средняя оценка': { en: 'Average estimate', uk: 'Середня оцінка', de: 'Mittelwert der Schätzungen', es: "Estimación media" },
  'Темп на милю': { en: 'Pace per mile', uk: 'Темп на милю', de: 'Tempo je Meile', es: "Ritmo por milla" },
  'Равномерные отрезки': { en: 'Even splits', uk: 'Рівномірні відрізки', de: 'Gleichmäßige Abschnitte', es: "Parciales uniformes" },
  'Дистанция': { en: 'Distance', uk: 'Дистанція', de: 'Strecke', es: "Distancia" },
  'Время': { en: 'Time', uk: 'Час', de: 'Zeit', es: "Tiempo" },
  'День недели рождения': { en: 'Birth weekday', uk: 'День тижня народження', de: 'Wochentag der Geburt', es: "Día de la semana del nacimiento" },
  'Следующий день рождения': { en: 'Next birthday', uk: 'Наступний день народження', de: 'Nächster Geburtstag', es: "Próximo cumpleaños" },
  'До дня рождения': { en: 'Days until birthday', uk: 'До дня народження', de: 'Bis zum Geburtstag', es: "Faltan para el cumpleaños" },
  'Стоимость плитки': { en: 'Tile cost', uk: 'Вартість плитки', de: 'Kosten der Fliesen', es: "Coste de los azulejos" },
  'Стоимость обоев': { en: 'Wallpaper cost', uk: 'Вартість шпалер', de: 'Kosten der Tapeten' },
  'Стоимость краски': { en: 'Paint cost', uk: 'Вартість фарби', de: 'Kosten der Farbe' },
  'Ориентировочная стоимость': { en: 'Estimated cost', uk: 'Орієнтовна вартість', de: 'Ungefähre Kosten' },
  'Плановый платеж с доплатой': { en: 'Planned payment with extra', uk: 'Плановий платіж із доплатою', de: 'Rate samt Sondertilgung' },
  'Разовая комиссия': { en: 'One-time fee', uk: 'Разова комісія', de: 'Einmalige Gebühr' },
  'Сокращение срока': { en: 'Term reduction', uk: 'Скорочення строку', de: 'Verkürzung der Laufzeit' },
  'Расход в месяц со страховкой': { en: 'Monthly cost with insurance', uk: 'Щомісячні витрати зі страхуванням', de: 'Monatliche Ausgabe samt Versicherung' },
  'Страховка и расходы за срок': { en: 'Insurance and costs over the term', uk: 'Страхування та витрати за весь строк', de: 'Versicherung und Kosten über die Laufzeit' },
  'Эффективная годовая ставка': { en: 'Effective annual rate', uk: 'Ефективна річна ставка' },
  'Динамика вклада': { en: 'Deposit growth', uk: 'Динаміка вкладу' },
  'Динамика по годам': { en: 'Year-by-year growth', uk: 'Динаміка за роками', de: 'Entwicklung nach Jahren' },
  'Год': { en: 'Year', uk: 'Рік', de: 'Jahr' },
  'Капитал': { en: 'Balance', uk: 'Капітал', de: 'Kapital' },
  'Внесено': { en: 'Contributed', uk: 'Внесено', de: 'Eingezahlt' },
  'Баланс': { en: 'Balance', uk: 'Баланс' },
  'Поддержание веса (TDEE)': { en: 'Weight maintenance (TDEE)', uk: 'Підтримання ваги (TDEE)', de: 'Gewicht halten (TDEE)', es: "Mantenimiento del peso (GET)" },
  'Дополнительная скидка': { en: 'Additional discount', uk: 'Додаткова знижка', de: 'Zusätzlicher Rabatt' },
  'Итого за товары': { en: 'Total for all items', uk: 'Разом за всі товари', de: 'Summe für die Artikel' },
  'Стоимость ламината': { de: 'Kosten des Laminats' },
  'Стоимость подложки': { de: 'Kosten der Trittschalldämmung' },
  'Стоимость камня': { de: 'Kosten der Steine' },
  'Ошибка формата': { de: 'Formatfehler', es: "Error de formato" },
};

// Плоский вид на локаль собирается один раз и запоминается: к нему обращается
// и генератор по каждому калькулятору, и сборка по каждой строке результата.
const phrasesByLocale = new Map<Locale, Record<string, string>>();
const labelsByLocale = new Map<Locale, Record<string, string>>();

function flatten(
  source: Record<string, Partial<Record<Locale, string>>>,
  locale: Locale,
  cache: Map<Locale, Record<string, string>>,
): Record<string, string> {
  const cached = cache.get(locale);
  if (cached) return cached;
  const flat: Record<string, string> = {};
  for (const [key, byLocale] of Object.entries(source)) {
    const value = byLocale[locale] ?? byLocale.en;
    if (value) flat[key] = value;
  }
  cache.set(locale, flat);
  return flat;
}

export function sharedPhrases(locale: Locale): Record<string, string> {
  return flatten(resultPhrases, locale, phrasesByLocale);
}

// Подписи, в отличие от значений, на английский не откатываются: неизвестная
// локаль получает правила, а не чужой перевод.
export function sharedLabels(locale: Locale): Record<string, string> {
  const cached = labelsByLocale.get(locale);
  if (cached) return cached;
  const flat: Record<string, string> = {};
  for (const [key, byLocale] of Object.entries(resultLabelPhrases)) {
    const value = byLocale[locale];
    if (value) flat[key] = value;
  }
  labelsByLocale.set(locale, flat);
  return flat;
}

export function localizedResultText(
  value: string,
  locale: Locale,
  ownPhrases?: Readonly<Record<string, string>>,
): string {
  const shared = sharedPhrases(locale);
  return localizeText(value, locale, ownPhrases ? { ...shared, ...ownPhrases } : shared);
}

export function localizedResultLabel(label: string, locale: Locale): string {
  return localizeLabel(label, locale, sharedLabels(locale));
}
