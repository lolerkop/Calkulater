import type { CalculatorDef } from '../lib/types';
import type { EditorialSource } from './calculatorEditorial';

export type FitnessContentLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
export type FitnessContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorDef, 'shortDescription' | 'seoDescription'>>;

export const fitnessLegacyContractContent: Record<FitnessContentLocale, Record<string, FitnessContractCopy>> = {
  "ru": {
    "bmi-calculator": {
      "longDescription": "ИМТ связывает массу тела с квадратом роста и относит результат к взрослой скрининговой категории. Здесь границы рассчитаны для людей от 20 лет: показатель не отличает мышцы от жира, не оценивает распределение жира и не устанавливает диагноз. Диапазон веса — обратный расчёт для категории 18,5 ≤ ИМТ < 25, а не персональная цель.",
      "howToUse": [
        "Введите измеренный рост в сантиметрах и массу в килограммах, оба больше нуля.",
        "Используйте взрослые категории только с 20 лет; возраст здесь не проверяется полем формы.",
        "Прочитайте категорию вместе с ограничениями; она определяется по неокруглённому ИМТ.",
        "При значении рядом с границей учтите, что вывод округлён до десятых."
      ],
      "howItWorks": "ИМТ = масса, кг / (рост, см / 100)². Категория нормы: от 18,5 включительно до 25 без включения; далее границы 30, 35 и 40. Для данного роста нижний вес равен 18,5h², верхняя исключённая граница — 25h², где h в метрах.",
      "example": "При росте 175 см и массе 70 кг ИМТ = 70 / 1,75² = 22,857… → 22,9, категория «Норма». При 200 см и 99,99 кг результат округляется до 25,0, но исходные 24,9975 ещё ниже границы 25.",
      "faq": [
        {
          "q": "Какой интервал ИМТ считается нормой у взрослых?",
          "a": "18,5 ≤ ИМТ < 25. Запись «до 24,9» удобна для десятых, но не задаёт точную границу для неокруглённых значений."
        },
        {
          "q": "Почему ИМТ спортсмена бывает высоким?",
          "a": "Масса мышц входит в числитель так же, как масса жира. По одному ИМТ нельзя определить процент жира."
        },
        {
          "q": "Что ИМТ не говорит о здоровье?",
          "a": "Он не показывает распределение жира, состав тела и медицинские обстоятельства. Одинаковый ИМТ не означает одинаковое состояние здоровья."
        },
        {
          "q": "Подходят ли эти категории детям и подросткам?",
          "a": "Нет. Для возраста 2–19 лет применяются показатели с учётом возраста и пола, а не приведённые взрослые границы."
        },
        {
          "q": "Как понимать высокий ИМТ или диапазон веса?",
          "a": "Проверьте единицы и измерения. Категория — повод рассмотреть другие данные, а обратный диапазон веса не является назначением похудеть или набрать массу."
        }
      ],
      "disclaimer": "Взрослый скрининговый показатель, не диагноз и не индивидуальная цель веса; беременность, выраженная мускулатура и изменение состава тела требуют дополнительного контекста."
    },
    "calorie-calculator": {
      "longDescription": "Калькулятор оценивает расход энергии в покое по упрощённой формуле Миффлина—Сан Жеора и умножает его на выбранный коэффициент повседневной активности. Затем применяет ваш процент изменения и распределяет энергию между белками, жирами и углеводами. Это сравнение сценариев, а не доказанная потребность конкретного человека или обещание темпа изменения веса.",
      "howToUse": [
        "Введите пол формулы, возраст 19–78 лет, рост в сантиметрах и массу в килограммах.",
        "Выберите коэффициент, учитывая весь день: работу, передвижения и тренировки.",
        "Для снижения или набора задайте изменение 0–30%; для поддержания оно не используется.",
        "Задайте доли белков и жиров 10–60% каждая, в сумме не более 100%; углеводы получают остаток."
      ],
      "howItWorks": "Расход в покое: 10w + 6,25h − 5a + 5 для мужской формулы и −161 вместо +5 для женской; w в кг, h в см, a в годах. TDEE = расход × коэффициент. Цель = TDEE × (1 ± p/100). Граммы белков и углеводов = их ккал / 4, жиров = ккал / 9. REE — расход энергии в покое, оцениваемый здесь уравнением.",
      "example": "Мужская формула: 80 кг, 180 см, 30 лет → 1780 ккал в покое; ×1,55 = 2759 ккал. Изменение −20% даёт 2207,2 → 2207 ккал. При 35% белков и 25% жиров: 193 г белков, 61 г жиров, 221 г углеводов после округления.",
      "faq": [
        {
          "q": "Какой дефицит калорий выбрать в форме?",
          "a": "Поле позволяет сравнить 0–30%, с исходными 15%. Это настройки сценария, а не гарантия безопасности или определённого снижения массы."
        },
        {
          "q": "Оптимальны ли исходные доли БЖУ 30/25/45?",
          "a": "Они лишь стартовые настройки распределения энергии. Индивидуальные потребности из этой формулы не следуют; сумма белков и жиров выше 100% отклоняется."
        },
        {
          "q": "Почему фактическая масса не меняется по этому числу?",
          "a": "Расход и потребление оценены с ошибкой, а масса зависит также от воды и других факторов. Формула не моделирует динамику адаптации и не предсказывает килограммы за неделю."
        },
        {
          "q": "Как понимать коэффициенты активности?",
          "a": "Это принятые множители 1,2–1,9. Число тренировок само по себе не определяет весь суточный расход; исходная работа Mifflin не валидирует эти пять категорий."
        },
        {
          "q": "Кому не подходит этот сценарий питания?",
          "a": "Предел 19–78 лет выбран по возрасту исходной исследовательской группы. Беременность, грудное вскармливание, заболевания и назначенное питание требуют отдельной оценки; калькулятор её не выполняет."
        }
      ],
      "disclaimer": "Оценка расхода в покое и условный сценарий питания. Не индивидуальное назначение; коэффициенты активности и проценты изменения не прошли отдельную проверку на применимость к вам.",
      "shortDescription": "Оценка расхода энергии и сценария БЖУ по выбранной активности и цели.",
      "seoDescription": "Оцените расход энергии в покое по формуле Миффлина—Сан Жеора для 19–78 лет и сценарий калорий и БЖУ с выбранными множителями и процентами."
    },
    "body-fat-calculator": {
      "longDescription": "Оценка доли жира по росту и обхватам использует историческую модель типа Navy. Сантиметры переводятся в дюймы перед логарифмами: коэффициенты зависят от этого масштаба. Мужская ветка использует живот на уровне пупка и шею; женская — естественную талию, бёдра и шею. Это не современная проверка допуска к службе и не прямое измерение состава тела.",
      "howToUse": [
        "Выберите мужскую или женскую ветку, введите рост и обхват шеи в сантиметрах.",
        "Для мужской ветки измерьте живот через пупок; для женской — наиболее узкую естественную талию.",
        "В женской ветке добавьте обхват бёдер по наибольшему выступу ягодиц.",
        "Измеряйте без втягивания живота и перетягивания ленты; сравнивая даты, сохраняйте один протокол."
      ],
      "howItWorks": "После деления сантиметров на 2,54: мужская оценка = 86,010log10(A−N) − 70,041log10(H) + 36,76; женская = 163,205log10(W+P−N) − 97,684log10(H) − 78,387. H — рост, N — шея, A — живот, W — талия, P — бёдра, все в дюймах. Логарифмическая разность должна быть положительной; вывод допускается только при 0 < процент < 100.",
      "example": "Мужская ветка: рост 180 см, шея 38 см, живот 90 см → 19,927… → 19,9%. Женская: рост 165 см, шея 32 см, талия 72 см, бёдра 96 см → 26,679… → 26,7%.",
      "faq": [
        {
          "q": "Насколько точна оценка жира по обхватам?",
          "a": "Одна универсальная погрешность не установлена для всех посетителей. Лента, телосложение и соответствие модели влияют на результат; десятая процента обозначает формат вывода, а не точность."
        },
        {
          "q": "Где измерять живот, талию и бёдра?",
          "a": "В мужской ветке живот измеряют через пупок, в женской — естественную талию; женские бёдра — по наибольшему выступу ягодиц. Шея измеряется ниже гортани."
        },
        {
          "q": "Почему ветки для мужчин и женщин различаются?",
          "a": "Это разные регрессионные модели с разным набором обхватов. Переключение ветки меняет уравнение, а не только подпись."
        },
        {
          "q": "Зачем модели процента жира нужен рост?",
          "a": "Рост входит в логарифмический член регрессии. Одни обхваты без роста не воспроизводят эту модель."
        },
        {
          "q": "Когда расчёт доли жира отклоняется?",
          "a": "При неположительных измерениях, неизвестной ветке, неположительной разности A−N или W+P−N, либо оценке вне 0–100%. Для женщин условие W>N отдельно не требуется."
        },
        {
          "q": "Почему результат не показывает норму жира?",
          "a": "Возраст, цели и медицинский контекст здесь не оцениваются. Один универсальный порог здоровья по такому числу не выводится."
        },
        {
          "q": "Можно ли считать эту модель медицинской или современной военнослужебной нормой?",
          "a": "Нет. Это историческая оценка; актуальные служебные протоколы могут изменяться. По одному результату нельзя оценить здоровье или назначить питание."
        }
      ],
      "disclaimer": "Точные принятые коэффициенты опубликованы Армией США в 2019 году (с. 3, §f); их исходный вывод по полным оригиналам NHRC пока не проверен. Историческая модель по обхватам не является текущей оценкой Navy, измерением или медицинским заключением; универсальная точность для отдельного человека не гарантируется.",
      "shortDescription": "Историческая оценка доли жира по росту и обхватам с разным протоколом для двух формул.",
      "seoDescription": "Оцените долю жира по исторической модели Navy: живот у мужчин, естественная талия и бёдра у женщин. Единицы, формулы и ограничения оценки."
    },
    "running-pace-calculator": {
      "longDescription": "Средний темп — время на километр, скорость — расстояние за час. Эти арифметические показатели подходят и для ходьбы. Отдельные прогнозы на беговые дистанции используют степенную модель с показателем 1,06: они зависят от подготовки и условий и не превращают любой прогулочный результат в прогноз соревнования.",
      "howToUse": [
        "Введите положительную дистанцию и выберите километры или мили.",
        "Введите неотрицательные часы, минуты и секунды; суммарное время должно быть больше нуля.",
        "Сопоставьте темп на километр, темп на милю и скорость.",
        "Равномерные отрезки — распределение того же среднего темпа; прогнозы гонок — другая модель."
      ],
      "howItWorks": "Время t = 3600h + 60m + s; мили переводятся как 1 mi = 1,609344 км. Темп = t/D в секундах на км, скорость = 3600D/t в км/ч. Прогноз T₂ = t(D₂/D)^1,06 для 5 км, 10 км, 21,0975 км и 42,195 км. Время округляется до секунды.",
      "example": "5 км за 25 минут: 1500/5 = 300 с/км → 5:00/км и 12,00 км/ч; темп на милю 8:03. Модель для 10 км даёт 1500×2^1,06 ≈ 3127 с → 52:07, а равномерные 10 км при том же темпе — 50:00.",
      "faq": [
        {
          "q": "Что означает модель Riegel с показателем 1,06?",
          "a": "Это принятое степенное соотношение результатов на разных дистанциях. Показатель не является универсальным законом для любого бегуна."
        },
        {
          "q": "Можно ли посчитать здесь темп ходьбы?",
          "a": "Да, средний темп и скорость — арифметика расстояния и времени. Прогнозы беговых стартов отдельно не валидированы для ходьбы."
        },
        {
          "q": "Почему марафонский прогноз может быть слишком быстрым?",
          "a": "Модель не учитывает выносливость, питание, рельеф и погоду. В исследовании любителей 2016 года общая модель часто переоценивала скорость марафона."
        },
        {
          "q": "Как получить темп для целевого времени?",
          "a": "Введите плановую дистанцию и общее время. Полученный темп относится к равномерному прохождению, а не к прогнозу по степенной модели."
        },
        {
          "q": "Как связаны мин/км, км/ч и мили?",
          "a": "5:00/км означает 5 минут на километр и 12 км/ч. Милевой темп умножает время на 1,609344; прогнозные дистанции остаются в километрах."
        }
      ],
      "disclaimer": "Прогнозы соревнований приблизительны и не задают безопасную нагрузку или гарантированный результат; средний темп описывает только введённое расстояние и время."
    },
    "one-rep-max-calculator": {
      "longDescription": "Оцените одноповторный максимум по массе и целому числу повторений в выполненном подходе. Основной результат использует Эпли; Бжицки и Лэндер показаны отдельно, чтобы различия моделей были видны. Среднее арифметическое — не доверительный интервал и не гарантия, что такой вес можно поднять.",
      "howToUse": [
        "Введите общий рабочий вес в килограммах больше нуля.",
        "Введите целое число повторений от 1 до 12; дробные и более высокие значения отклоняются.",
        "Для интерпретации важно, насколько подход был близок к отказу и совпадала ли техника.",
        "Сравните модели; процентные строки — только доли основной оценки."
      ],
      "howItWorks": "При r=1 основной результат равен введённому весу w. При r>1 Эпли = w(1+r/30). Принятые варианты: Бжицки = 36w/(37−r), Лэндер = 100w/(101,3−2,67123r). Среднее = сумма трёх оценок / 3. Поддерживаемая область продукта — 1–12 повторений; она не доказывает точность на всём интервале.",
      "example": "100 кг × 5: Эпли 116,7 кг; Бжицки 112,5 кг; Лэндер 113,7 кг; среднее 114,3 кг. 80% основной оценки = 93,3 кг. При одном повторении основной результат 100 кг, но Лэндер всё ещё даёт модельную оценку около 101,4 кг.",
      "faq": [
        {
          "q": "До скольких повторений принимает калькулятор 1ПМ?",
          "a": "От 1 до 12 целых повторений; свыше 10 есть предупреждение. При большом числе повторений связь с максимумом слабее, а за полюсами других формул нельзя подставлять Эпли под их названиями."
        },
        {
          "q": "Можно ли оценить так становую тягу и другие упражнения?",
          "a": "Арифметически да, но исследования отдельных упражнений и групп не доказывают одинаковую ошибку для всех движений, тренажёров и людей."
        },
        {
          "q": "Нужно ли сразу проверять полученный максимум?",
          "a": "Расчёт не даёт разрешения на максимальную попытку и не убирает риск травмы. Число может служить лишь ориентиром при отдельно организованной тренировке."
        },
        {
          "q": "Почему три оценки и среднее различаются?",
          "a": "У моделей разная форма зависимости от повторений. Среднее просто объединяет их числа; оно не делает оценку автоматически точнее."
        },
        {
          "q": "Что означают строки 50–90% от 1ПМ?",
          "a": "Это арифметические доли результата Эпли, а не готовая программа подходов, повторений, восстановления или безопасных нагрузок."
        }
      ],
      "disclaimer": "Модельная оценка силы без универсальной гарантии точности. Она не подтверждает готовность к максимальной попытке и не заменяет оценку техники и условий тренировки.",
      "shortDescription": "Оценка 1ПМ по Эпли, сравнение Бжицки и Лэндера и арифметические доли результата.",
      "seoDescription": "Оцените 1ПМ по весу и 1–12 повторениям: Эпли, Бжицки и Лэндер. Процентные строки — доли оценки, не готовая программа нагрузок."
    }
  },
  "en": {
    "bmi-calculator": {
      "longDescription": "BMI relates body mass to height squared and assigns an adult screening category. These categories are for people aged 20 and over. BMI does not distinguish muscle from fat or describe fat distribution. The displayed weight interval reverses the category 18.5 ≤ BMI < 25; it is not an individual weight target.",
      "howToUse": [
        "Enter measured height in centimetres and weight in kilograms, both positive.",
        "Use these adult categories from age 20; this form does not check age.",
        "Read the category before making an interpretation: it uses BMI before rounding.",
        "Near a boundary, allow for the one-decimal display."
      ],
      "howItWorks": "BMI = weight in kg / (height in cm / 100)². The healthy category includes 18.5 and excludes 25; subsequent boundaries are 30, 35 and 40. For height h in metres, the corresponding lower weight is 18.5h² and the excluded upper boundary is 25h².",
      "example": "At 175 cm and 70 kg, BMI = 70 / 1.75² = 22.857… → 22.9, in the healthy category. At 200 cm and 99.99 kg, 24.9975 displays as 25.0 but remains below the category boundary of 25.",
      "faq": [
        {
          "q": "What is the adult healthy BMI interval?",
          "a": "18.5 ≤ BMI < 25. The shorthand 18.5–24.9 does not describe every value between tenths."
        },
        {
          "q": "Why can an athlete have a high BMI?",
          "a": "Muscle mass contributes to weight just as fat does. BMI alone cannot identify a body-fat percentage."
        },
        {
          "q": "What health information does BMI miss?",
          "a": "It does not describe fat distribution, body composition or medical circumstances. Equal BMI values do not imply equal health."
        },
        {
          "q": "Can children and teenagers use these categories?",
          "a": "No. Ages 2–19 require interpretation by age and sex rather than these adult cut-offs."
        },
        {
          "q": "How should I interpret a high BMI or the weight interval?",
          "a": "Check measurements and units first. Consider the category alongside other information; the reverse-calculated weight interval does not prescribe weight loss or gain."
        }
      ],
      "disclaimer": "Adult screening information, not a diagnosis or individual weight goal. Pregnancy, muscular build and changes in body composition need additional context."
    },
    "calorie-calculator": {
      "longDescription": "This tool estimates resting energy expenditure using the simplified Mifflin–St Jeor equation, applies a selected activity multiplier and then your calorie adjustment. Protein and fat percentages determine the remaining carbohydrate energy. It compares assumptions; it does not establish an individual dietary requirement or predict weight change.",
      "howToUse": [
        "Choose the formula sex and enter age 19–78, height in cm and weight in kg.",
        "Select activity using your whole day, including work, travel and exercise.",
        "For loss or gain, set an adjustment of 0–30%; maintenance ignores this field.",
        "Set protein and fat at 10–60% each, with a combined total no greater than 100%."
      ],
      "howItWorks": "Resting energy = 10w + 6.25h − 5a + 5 for the male equation, or −161 instead of +5 for the female equation. TDEE = resting energy × activity factor; the scenario target is TDEE × (1 ± p/100). Divide protein and carbohydrate calories by 4 and fat calories by 9 to obtain grams. REE means resting energy expenditure, estimated here with the equation.",
      "example": "Male equation, 80 kg, 180 cm and age 30: 1780 kcal at rest × 1.55 = 2759 kcal. A 20% reduction gives 2207.2 → 2207 kcal. With 35% protein and 25% fat, rounded totals are 193 g protein, 61 g fat and 221 g carbohydrate.",
      "faq": [
        {
          "q": "How should I choose a calorie reduction?",
          "a": "The 0–30% field, initially 15%, compares scenarios. It does not guarantee safety or a particular weight-loss rate."
        },
        {
          "q": "Are the default macro percentages optimal?",
          "a": "30/25/45 is a starting allocation of energy, not an individual prescription. A protein-plus-fat total above 100% is rejected instead of silently rescaled."
        },
        {
          "q": "Why can actual weight change differ?",
          "a": "Energy intake and expenditure are estimates, and body weight also reflects water and other changes. This static calculation does not model adaptation or kilograms per week."
        },
        {
          "q": "What do the activity multipliers represent?",
          "a": "They are adopted factors from 1.2 to 1.9. Workout counts alone do not establish daily expenditure; the original Mifflin study does not validate these five categories."
        },
        {
          "q": "Who is outside this nutrition scenario?",
          "a": "The product age range 19–78 follows the development cohort. Pregnancy, breastfeeding, illness and prescribed diets require separate assessment that this tool does not provide."
        }
      ],
      "disclaimer": "Estimated resting expenditure and a conditional food-energy scenario, not an individual prescription. Activity multipliers and adjustment percentages are assumptions."
    },
    "body-fat-calculator": {
      "longDescription": "This historical Navy-style model estimates body fat from height and circumferences. Centimetres are converted to inches before applying the logarithms. The male branch uses abdomen at the navel and neck; the female branch uses natural waist, hips and neck. It is neither a current military eligibility assessment nor a direct body-composition measurement.",
      "howToUse": [
        "Select the male or female branch and enter height and neck circumference in cm.",
        "For the male branch, measure the abdomen at the navel; for the female branch, use the narrowest natural waist.",
        "The female branch also needs hips around the greatest protrusion of the buttocks.",
        "Avoid pulling the tape tight or drawing in the abdomen; keep the measurement protocol consistent between dates."
      ],
      "howItWorks": "Convert cm to inches by dividing by 2.54. Male estimate = 86.010log10(A−N) − 70.041log10(H) + 36.76; female = 163.205log10(W+P−N) − 97.684log10(H) − 78.387. H is height, N neck, A abdomen, W waist and P hips, all in inches. The circumference difference must be positive; only percentages strictly between 0 and 100 are displayed.",
      "example": "Male branch: height 180 cm, neck 38 cm and abdomen 90 cm → 19.927… → 19.9%. Female branch: height 165 cm, neck 32 cm, waist 72 cm and hips 96 cm → 26.679… → 26.7%.",
      "faq": [
        {
          "q": "How accurate is the circumference body-fat estimate?",
          "a": "A universal error margin is not established for every visitor. Tape measurements, build and model applicability affect the result; a decimal place is display precision, not measurement accuracy."
        },
        {
          "q": "Where should abdomen, waist and hips be measured?",
          "a": "Male abdomen is measured at the navel; female waist at the natural waist and hips at the greatest buttock protrusion. Neck is measured below the larynx."
        },
        {
          "q": "Why do the two body-fat branches differ?",
          "a": "They are separate regression models with different circumference inputs. The selector changes the equation, not merely a label."
        },
        {
          "q": "Why does a body-fat percentage model require height?",
          "a": "Height enters the logarithmic regression term. Circumferences alone do not reproduce this model."
        },
        {
          "q": "When is this circumference calculation rejected?",
          "a": "For nonpositive measurements, an unknown branch, nonpositive A−N or W+P−N, or a percentage outside 0–100%. The female equation does not separately require W>N."
        },
        {
          "q": "Why is no healthy body-fat category displayed?",
          "a": "Age, individual goals and medical context are not assessed. A universal health cut-off cannot be inferred from this result."
        },
        {
          "q": "Is this a medical standard or a current Navy assessment?",
          "a": "No. It is a historical estimate; current military procedures can change. This number alone cannot determine health or prescribe a diet."
        }
      ],
      "disclaimer": "The adopted coefficients appear in the US Army's 2019 document (p. 3, §f); their derivation in the complete original NHRC reports remains unverified. This historical circumference model is neither a current Navy assessment nor a measurement or medical conclusion; no universal individual accuracy is promised.",
      "shortDescription": "Historical body-fat estimate from height and circumferences, using branch-specific measurement sites.",
      "seoDescription": "Estimate body fat with a historical Navy-style model: male abdomen or female natural waist and hips. See measurement sites, inch-based formulas and limits."
    },
    "running-pace-calculator": {
      "longDescription": "Average pace is time per kilometre; speed is distance per hour. Those arithmetic results also apply to walking. Separate race forecasts use a power law with exponent 1.06 and depend on endurance and conditions. A walking result is not thereby a validated running-race prediction.",
      "howToUse": [
        "Enter a positive distance and select kilometres or miles.",
        "Enter nonnegative hours, minutes and seconds with a positive total time.",
        "Compare pace per kilometre, pace per mile and average speed.",
        "Even splits distribute the same average pace; race forecasts use a separate model."
      ],
      "howItWorks": "Time t = 3600h + 60m + s; one mile is exactly 1.609344 km. Pace = t/D in seconds per km and speed = 3600D/t in km/h. Race forecast T₂ = t(D₂/D)^1.06 for 5 km, 10 km, 21.0975 km and 42.195 km. Times round to the nearest second.",
      "example": "5 km in 25 minutes gives 1500/5 = 300 s/km → 5:00/km and 12.00 km/h; mile pace is 8:03. The 10 km power-law forecast is 1500×2^1.06 ≈ 3127 s → 52:07, whereas 10 km at the same even pace takes 50:00.",
      "faq": [
        {
          "q": "What does the Riegel-style exponent 1.06 mean?",
          "a": "It is an adopted power-law relationship between results at different distances, not a universal law for every runner."
        },
        {
          "q": "Can I calculate walking pace here?",
          "a": "Yes, average pace and speed use only distance and time. The separate running forecasts are not validated for walking."
        },
        {
          "q": "Why might a marathon forecast be too fast?",
          "a": "The model omits endurance preparation, fuelling, terrain and weather. A 2016 recreational-runner study found frequent optimistic marathon predictions."
        },
        {
          "q": "How do I calculate pace for a target time?",
          "a": "Enter the planned distance and total time. That gives the even pace required, separately from power-law race predictions."
        },
        {
          "q": "How do min/km, km/h and miles relate?",
          "a": "5:00/km is five minutes per kilometre and 12 km/h. Multiply kilometre pace by 1.609344 for mile pace; forecast race distances remain in kilometres."
        }
      ],
      "disclaimer": "Race forecasts are approximate and do not prescribe a safe workload or guarantee performance. Average pace describes only the distance and time entered."
    },
    "one-rep-max-calculator": {
      "longDescription": "Estimate a one-repetition maximum from load and the whole-number repetitions completed in a set. Epley gives the primary result; Brzycki and Lander remain separate so their disagreement is visible. Their arithmetic mean is neither a confidence interval nor evidence that you can lift that load.",
      "howToUse": [
        "Enter the total working load in kilograms, greater than zero.",
        "Enter 1–12 whole repetitions; fractional and higher counts are rejected.",
        "Interpretation depends on proximity to fatigue and consistent technique.",
        "Compare the models; percentage rows are fractions of the primary estimate only."
      ],
      "howItWorks": "For r=1 the primary result equals entered load w. Otherwise Epley = w(1+r/30). Adopted variants: Brzycki = 36w/(37−r); Lander = 100w/(101.3−2.67123r). The mean sums the three estimates and divides by 3. The product range 1–12 does not establish accuracy across that entire interval.",
      "example": "100 kg × 5: Epley 116.7 kg, Brzycki 112.5 kg, Lander 113.7 kg and mean 114.3 kg. 80% of the primary estimate is 93.3 kg. At one repetition the primary result is 100 kg, while Lander remains a model estimate of about 101.4 kg.",
      "faq": [
        {
          "q": "How many repetitions does this 1RM tool accept?",
          "a": "1–12 whole repetitions, with a warning above 10. High-repetition sets weaken the link to maximal strength; another model is never silently replaced by Epley."
        },
        {
          "q": "Can I use this for deadlifts and other exercises?",
          "a": "The arithmetic applies, but studies of particular exercises and groups do not establish the same error for every movement, machine and person."
        },
        {
          "q": "Should I attempt the estimated maximum immediately?",
          "a": "The result is not clearance for a maximal lift and does not remove injury risk. It is only a reference within a separately planned training session."
        },
        {
          "q": "Why do the three estimates and their mean differ?",
          "a": "Each model represents repetitions differently. The mean merely combines their numbers; it does not automatically improve accuracy."
        },
        {
          "q": "What do the 50–90% rows prescribe?",
          "a": "They are arithmetic fractions of Epley’s estimate, not a programme of sets, repetitions, recovery or safe training loads."
        }
      ],
      "disclaimer": "Model-based strength estimate without a universal accuracy guarantee. It does not establish readiness for a maximal attempt or replace assessment of technique and training conditions."
    }
  },
  "uk": {
    "bmi-calculator": {
      "longDescription": "ІМТ співвідносить масу з квадратом зросту та визначає дорослу скринінгову категорію від 20 років. Він не відрізняє м’язи від жиру й не показує розподіл жиру. Інтервал маси — зворотний розрахунок для 18,5 ≤ ІМТ < 25, а не особиста ціль.",
      "howToUse": [
        "Введіть виміряний зріст у сантиметрах та масу в кілограмах, обидва додатні.",
        "Ці категорії призначені для віку від 20 років; форма не перевіряє вік.",
        "Категорія визначається до округлення ІМТ.",
        "Біля межі врахуйте округлення результату до десятих."
      ],
      "howItWorks": "ІМТ = маса, кг / (зріст, см / 100)². Нормальний інтервал включає 18,5 і не включає 25; наступні межі — 30, 35, 40. Для зросту h у метрах нижня маса дорівнює 18,5h², виключена верхня межа — 25h².",
      "example": "175 см і 70 кг: 70/1,75² = 22,857… → 22,9, категорія норми. За 200 см і 99,99 кг ІМТ 24,9975 відображається як 25,0, але ще належить до інтервалу нижче 25.",
      "faq": [
        {
          "q": "Який дорослий інтервал ІМТ є нормальним?",
          "a": "18,5 ≤ ІМТ < 25. Скорочення «до 24,9» не описує всі значення між десятими."
        },
        {
          "q": "Чому в атлета ІМТ може бути високим?",
          "a": "М’язи збільшують масу так само, як жир. Сам ІМТ не визначає відсоток жиру."
        },
        {
          "q": "Які відомості про здоров’я ІМТ пропускає?",
          "a": "Склад тіла, розподіл жиру та медичні обставини; однаковий ІМТ не означає однакове здоров’я."
        },
        {
          "q": "Чи підходять ці дорослі межі дітям?",
          "a": "Ні. Для 2–19 років потрібне тлумачення з урахуванням віку та статі."
        },
        {
          "q": "Як тлумачити високий ІМТ або інтервал маси?",
          "a": "Перевірте вимірювання й одиниці. Категорію слід розглядати разом з іншими даними; інтервал не призначає схуднення чи набір маси."
        }
      ],
      "disclaimer": "Дорослий скринінговий показник, не діагноз і не особиста ціль маси. Вагітність, розвинені м’язи та зміни складу тіла потребують додаткового контексту."
    },
    "calorie-calculator": {
      "longDescription": "Оцінка витрат енергії у спокої за спрощеною формулою Міффліна—Сан Жеора множиться на обраний коефіцієнт активності. Потім застосовується ваш відсоток зміни та розподіл БЖВ. Це порівняння припущень, а не встановлена індивідуальна потреба чи прогноз зміни маси.",
      "howToUse": [
        "Оберіть стать формули, введіть вік 19–78 років, зріст у см і масу в кг.",
        "Коефіцієнт активності має враховувати весь день, роботу й пересування.",
        "Для зниження чи набору задайте зміну 0–30%; підтримання ігнорує це поле.",
        "Білки й жири: по 10–60%, разом не більше 100%; вуглеводи отримують залишок."
      ],
      "howItWorks": "Енергія у спокої = 10w + 6,25h − 5a + 5 для чоловічої формули або −161 замість +5 для жіночої. TDEE = оцінка × коефіцієнт; сценарій = TDEE × (1 ± p/100). Грами білків і вуглеводів = їх ккал / 4, жирів = ккал / 9. REE — витрати енергії у спокої, оцінені тут за рівнянням.",
      "example": "Чоловіча формула: 80 кг, 180 см, 30 років → 1780 ккал × 1,55 = 2759 ккал. Зменшення на 20% → 2207,2 → 2207 ккал. За 35% білків і 25% жирів: 193 г білків, 61 г жирів, 221 г вуглеводів після округлення.",
      "faq": [
        {
          "q": "Який відсоток зменшення калорій обрати?",
          "a": "0–30%, початково 15%, — параметри сценарію, а не гарантія безпеки чи швидкості схуднення."
        },
        {
          "q": "Чи оптимальні початкові частки БЖВ?",
          "a": "30/25/45 — лише розподіл енергії за замовчуванням. Сума білків і жирів понад 100% відхиляється без прихованого перерахунку."
        },
        {
          "q": "Чому маса не змінюється за цією оцінкою?",
          "a": "Споживання і витрати мають похибку, а маса залежить і від води. Статична формула не моделює адаптацію чи кілограми за тиждень."
        },
        {
          "q": "Що означають коефіцієнти активності?",
          "a": "Це прийняті множники 1,2–1,9. Кількість тренувань сама не визначає добові витрати; оригінальна робота Міффліна не перевіряє ці п’ять категорій."
        },
        {
          "q": "Для кого цей сценарій харчування не підходить?",
          "a": "Діапазон 19–78 років відповідає віку вихідної групи. Вагітність, грудне вигодовування, хвороби й призначене харчування потребують окремої оцінки."
        }
      ],
      "disclaimer": "Оцінка енергії у спокої та умовний сценарій харчування, не індивідуальне призначення. Активність і відсотки зміни — припущення.",
      "shortDescription": "Оцінка витрат енергії та сценарію БЖВ за обраними активністю й метою.",
      "seoDescription": "Оцініть денні калорії, REE, білки, жири та вуглеводи безкоштовним калькулятором."
    },
    "body-fat-calculator": {
      "longDescription": "Історична модель типу Navy оцінює частку жиру за зростом та обхватами. Перед логарифмами сантиметри переводяться в дюйми. Чоловіча гілка використовує живіт через пупок і шию; жіноча — природну талію, стегна й шию. Це не сучасна перевірка військового допуску та не пряме вимірювання складу тіла.",
      "howToUse": [
        "Оберіть чоловічу чи жіночу гілку, введіть зріст і обхват шиї в см.",
        "Для чоловічої гілки виміряйте живіт через пупок; для жіночої — найвужчу природну талію.",
        "У жіночій гілці додайте стегна за найбільшим виступом сідниць.",
        "Не перетягуйте стрічку й не втягуйте живіт; для порівняння дат зберігайте протокол."
      ],
      "howItWorks": "Поділіть сантиметри на 2,54. Чоловіча оцінка = 86,010log10(A−N) − 70,041log10(H) + 36,76; жіноча = 163,205log10(W+P−N) − 97,684log10(H) − 78,387. H — зріст, N — шия, A — живіт, W — талія, P — стегна, у дюймах. Різниця має бути додатною; виводиться лише 0 < відсоток < 100.",
      "example": "Чоловіча гілка: 180 см, шия 38 см, живіт 90 см → 19,9%. Жіноча: 165 см, шия 32 см, талія 72 см, стегна 96 см → 26,7%.",
      "faq": [
        {
          "q": "Наскільки точна оцінка жиру за обхватами?",
          "a": "Універсальна похибка для всіх відвідувачів не встановлена. На результат впливають стрічка, статура і застосовність моделі; десята відсотка — формат, а не точність."
        },
        {
          "q": "Де вимірювати живіт, талію та стегна?",
          "a": "Чоловічий живіт — через пупок, жіночу талію — у природному найвужчому місці, стегна — за виступом сідниць. Шию вимірюють нижче гортані."
        },
        {
          "q": "Чому дві гілки оцінки жиру різні?",
          "a": "Це окремі регресії з різними обхватами. Перемикач змінює рівняння."
        },
        {
          "q": "Навіщо моделі частки жиру зріст?",
          "a": "Зріст входить у логарифмічний член; лише обхвати не відтворюють цю модель."
        },
        {
          "q": "Коли оцінка за обхватами відхиляється?",
          "a": "За недодатних вимірювань, невідомої гілки, недодатної різниці A−N або W+P−N чи відсотка поза 0–100%. Для жіночої гілки умова W>N окремо не потрібна."
        },
        {
          "q": "Чому немає здорової категорії жиру?",
          "a": "Вік, цілі й медичний контекст не оцінюються, тож універсальну межу здоров’я не виводимо."
        },
        {
          "q": "Це медичний стандарт чи актуальна військова норма?",
          "a": "Ні. Історична оцінка не замінює чинного протоколу; число не визначає здоров’я і не призначає дієту."
        }
      ],
      "disclaimer": "Точні прийняті коефіцієнти опубліковано Армією США у 2019 році (с. 3, §f); їхнє первинне виведення за повними оригіналами NHRC ще не перевірено. Історична модель обхватів не є чинною оцінкою Navy, вимірюванням чи медичним висновком; універсальна точність для окремої людини не гарантується.",
      "shortDescription": "Історична оцінка жиру за зростом та обхватами з різними місцями вимірювання для двох формул.",
      "seoDescription": "Оцініть жир за історичною моделлю Navy: живіт у чоловіків, природна талія й стегна у жінок. Місця вимірювання, формули та обмеження."
    },
    "running-pace-calculator": {
      "longDescription": "Середній темп — час на кілометр, швидкість — відстань за годину. Ця арифметика підходить і для ходьби. Окремі прогнози бігових дистанцій використовують степеневу модель 1,06; вони залежать від витривалості та умов, а не перетворюють прогулянку на перевірений прогноз змагання.",
      "howToUse": [
        "Введіть додатну дистанцію та оберіть кілометри або милі.",
        "Години, хвилини й секунди мають бути невід’ємними, загальний час — додатним.",
        "Порівняйте темп на кілометр, на милю та швидкість.",
        "Рівні відрізки розподіляють середній темп; прогнози стартів — інша модель."
      ],
      "howItWorks": "t = 3600h + 60m + s; 1 миля = 1,609344 км. Темп = t/D у с/км, швидкість = 3600D/t у км/год. T₂ = t(D₂/D)^1,06 для 5 км, 10 км, 21,0975 км і 42,195 км. Час округлюється до секунди.",
      "example": "5 км за 25 хв: 1500/5 = 300 с/км → 5:00/км, 12,00 км/год і 8:03 на милю. Модель 10 км: 1500×2^1,06 → 52:07; за тим самим рівним темпом 10 км зайняли б 50:00.",
      "faq": [
        {
          "q": "Що означає показник Рігеля 1,06?",
          "a": "Це прийняте степеневе співвідношення дистанцій, а не універсальний закон для кожного бігуна."
        },
        {
          "q": "Чи можна обчислити темп ходьби?",
          "a": "Так, темп і швидкість — арифметика відстані й часу. Окремі бігові прогнози для ходьби не перевірені."
        },
        {
          "q": "Чому прогноз марафону буває занадто швидким?",
          "a": "Модель не враховує витривалість, харчування, рельєф і погоду. Дослідження аматорів 2016 року виявило часті оптимістичні марафонські оцінки."
        },
        {
          "q": "Як обчислити темп для цільового часу?",
          "a": "Введіть заплановану дистанцію та повний час. Це необхідний рівномірний темп, окремо від степеневого прогнозу."
        },
        {
          "q": "Як пов’язані хв/км, км/год і милі?",
          "a": "5:00/км = 12 км/год. Для темпу милі помножте час на 1,609344; прогнозні дистанції залишаються кілометровими."
        }
      ],
      "disclaimer": "Прогнози стартів приблизні, не гарантують результат і не визначають безпечного навантаження. Середній темп описує введену дистанцію та час."
    },
    "one-rep-max-calculator": {
      "longDescription": "Оцініть одноповторний максимум за вагою й цілим числом виконаних повторень. Основний результат — Еплі, окремо показані Бжицькі та Ландер. Їхнє середнє — не довірчий інтервал і не підтвердження здатності підняти цю вагу.",
      "howToUse": [
        "Введіть повну робочу вагу в кг, більшу за нуль.",
        "Введіть ціле число повторень 1–12; дробові й більші значення відхиляються.",
        "Тлумачення залежить від близькості підходу до втоми та однакової техніки.",
        "Порівняйте моделі; відсоткові рядки — лише частки основної оцінки."
      ],
      "howItWorks": "За r=1 основний результат = w; інакше Еплі = w(1+r/30). Прийняті варіанти: Бжицькі = 36w/(37−r), Ландер = 100w/(101,3−2,67123r). Середнє — сума трьох оцінок / 3. Продукт приймає 1–12 повторень; це не доказ точності всього інтервалу.",
      "example": "100 кг × 5: Еплі 116,7 кг, Бжицькі 112,5 кг, Ландер 113,7 кг, середнє 114,3 кг; 80% основної оцінки — 93,3 кг. За одного повторення основна оцінка 100 кг, Ландер — приблизно 101,4 кг.",
      "faq": [
        {
          "q": "Скільки повторень приймає цей калькулятор 1ПМ?",
          "a": "Цілі 1–12, із попередженням понад 10. Високі повторення слабше пов’язані з максимумом; інші моделі не підмінюються Еплі."
        },
        {
          "q": "Чи підходить оцінка для тяги та інших вправ?",
          "a": "Арифметика працює, але дослідження окремих вправ і груп не доводять однакової похибки для всіх рухів і людей."
        },
        {
          "q": "Чи варто одразу перевіряти оцінений максимум?",
          "a": "Це не дозвіл на максимальну спробу й не усунення ризику травми; число лише орієнтир для окремо спланованого тренування."
        },
        {
          "q": "Чому три моделі та їхнє середнє відрізняються?",
          "a": "Вони по-різному описують повторення. Середнє лише об’єднує числа й не гарантує кращої точності."
        },
        {
          "q": "Що призначають рядки 50–90% від 1ПМ?",
          "a": "Лише арифметичні частки Еплі, а не готову програму підходів, відпочинку чи безпечних ваг."
        }
      ],
      "disclaimer": "Модельна оцінка сили без універсальної гарантії точності. Не підтверджує готовності до максимального підйому та не замінює оцінки техніки й умов."
    }
  },
  "de": {
    "bmi-calculator": {
      "longDescription": "Der BMI setzt Körpermasse zum Quadrat der Körpergröße ins Verhältnis. Die hier verwendeten Screening-Kategorien gelten ab 20 Jahren. Muskel- und Fettmasse werden nicht unterschieden. Das Gewichtsintervall wird aus 18,5 ≤ BMI < 25 zurückgerechnet und ist kein persönliches Zielgewicht.",
      "howToUse": [
        "Gemessene Größe in Zentimetern und Gewicht in Kilogramm eingeben, beide positiv.",
        "Diese Erwachsenen-Kategorien erst ab 20 Jahren verwenden; das Formular prüft das Alter nicht.",
        "Die Kategorie wird vor der Rundung des BMI bestimmt.",
        "An einer Grenze die Anzeige mit einer Nachkommastelle berücksichtigen."
      ],
      "howItWorks": "BMI = Gewicht in kg / (Größe in cm / 100)². Der Normalbereich schließt 18,5 ein und 25 aus; weitere Grenzen sind 30, 35 und 40. Bei Größe h in Metern ist die untere Gewichtsgrenze 18,5h² und die ausgeschlossene obere Grenze 25h².",
      "example": "175 cm und 70 kg: 70/1,75² = 22,857… → 22,9 im Normalbereich. Bei 200 cm und 99,99 kg werden 24,9975 als 25,0 angezeigt, bleiben aber unter der Grenze 25.",
      "faq": [
        {
          "q": "Welches BMI-Intervall gilt für Erwachsene als normal?",
          "a": "18,5 ≤ BMI < 25. Die Kurzform 18,5–24,9 beschreibt nicht alle Werte zwischen Zehnteln."
        },
        {
          "q": "Warum kann der BMI bei Sportlern hoch sein?",
          "a": "Muskeln tragen ebenso zur Masse bei wie Fett. Der BMI bestimmt keinen Körperfettanteil."
        },
        {
          "q": "Welche Gesundheitsinformationen fehlen im BMI?",
          "a": "Fettverteilung, Körperzusammensetzung und medizinische Umstände. Gleicher BMI bedeutet nicht gleiche Gesundheit."
        },
        {
          "q": "Gelten diese BMI-Kategorien für Kinder?",
          "a": "Nein. Für 2–19 Jahre ist eine alters- und geschlechtsbezogene Auswertung erforderlich."
        },
        {
          "q": "Wie interpretiere ich einen hohen BMI oder das Gewichtsintervall?",
          "a": "Zuerst Messungen und Einheiten prüfen. Die Kategorie braucht weitere Informationen; das Intervall verordnet weder Abnehmen noch Zunehmen."
        }
      ],
      "disclaimer": "Erwachsenen-Screening, keine Diagnose und kein individuelles Zielgewicht. Schwangerschaft, ausgeprägte Muskulatur und Änderungen der Körperzusammensetzung benötigen zusätzlichen Kontext."
    },
    "calorie-calculator": {
      "longDescription": "Die vereinfachte Mifflin–St-Jeor-Gleichung schätzt den Ruheenergieverbrauch. Ein gewählter Aktivitätsfaktor und eine prozentuale Änderung erzeugen ein Kalorienszenario; Protein und Fett bestimmen den verbleibenden Kohlenhydratanteil. Dies ermittelt keinen individuellen Ernährungsbedarf und prognostiziert keine Gewichtsänderung.",
      "howToUse": [
        "Formelgeschlecht, Alter 19–78, Größe in cm und Gewicht in kg eingeben.",
        "Aktivität anhand des ganzen Tages einschließlich Arbeit und Wege auswählen.",
        "Für Abnahme oder Zunahme 0–30% Änderung wählen; Erhaltung ignoriert dieses Feld.",
        "Protein und Fett jeweils 10–60%, zusammen höchstens 100%; Kohlenhydrate erhalten den Rest."
      ],
      "howItWorks": "Ruheenergie = 10w + 6,25h − 5a + 5 bei der männlichen Formel, sonst −161 statt +5. TDEE = Ruheenergie × Aktivitätsfaktor; Szenario = TDEE × (1 ± p/100). Protein- und Kohlenhydrat-kcal durch 4, Fett-kcal durch 9 teilen für Gramm. REE bezeichnet den Ruheenergieverbrauch, hier mit der Gleichung geschätzt.",
      "example": "Männliche Formel, 80 kg, 180 cm, 30 Jahre: 1780 kcal × 1,55 = 2759 kcal. Minus 20% ergibt 2207,2 → 2207 kcal. Bei 35% Protein und 25% Fett: gerundet 193 g Protein, 61 g Fett, 221 g Kohlenhydrate.",
      "faq": [
        {
          "q": "Wie wähle ich ein Kaloriendefizit im Formular?",
          "a": "0–30%, zunächst 15%, sind Szenarioparameter. Sie garantieren weder Sicherheit noch eine bestimmte Abnehmrate."
        },
        {
          "q": "Sind die voreingestellten Makroanteile optimal?",
          "a": "30/25/45 ist eine Startverteilung, keine persönliche Verordnung. Protein plus Fett über 100% wird abgelehnt, nicht heimlich angepasst."
        },
        {
          "q": "Warum verändert sich das Gewicht anders als erwartet?",
          "a": "Aufnahme und Verbrauch sind Schätzungen; Wasser beeinflusst das Gewicht ebenfalls. Das statische Modell berechnet weder Anpassung noch Kilogramm pro Woche."
        },
        {
          "q": "Was bedeuten die Aktivitätsfaktoren?",
          "a": "Angenommene Multiplikatoren von 1,2 bis 1,9. Trainingshäufigkeit allein bestimmt keinen Tagesverbrauch; die ursprüngliche Mifflin-Studie validiert diese fünf Kategorien nicht."
        },
        {
          "q": "Für wen ist dieses Ernährungsszenario ungeeignet?",
          "a": "19–78 Jahre entspricht der Entwicklungsgruppe. Schwangerschaft, Stillzeit, Erkrankungen und verordnete Ernährung benötigen eine separate Bewertung."
        }
      ],
      "disclaimer": "Geschätzter Ruheenergieverbrauch und bedingtes Ernährungsszenario, keine individuelle Verordnung. Aktivitätsfaktoren und Prozentänderungen sind Annahmen."
    },
    "body-fat-calculator": {
      "longDescription": "Dieses historische Navy-artige Modell schätzt Körperfett aus Größe und Umfängen. Zentimeter werden vor den Logarithmen in Zoll umgerechnet. Die männliche Formel nutzt den Bauch auf Nabelhöhe und den Hals; die weibliche nutzt natürliche Taille, Hüfte und Hals. Es ist weder eine aktuelle militärische Eignungsprüfung noch eine direkte Körperfettmessung.",
      "howToUse": [
        "Männliche oder weibliche Formel wählen, Größe und Halsumfang in cm eingeben.",
        "Männlich: Bauch auf Nabelhöhe; weiblich: schmalste natürliche Taille messen.",
        "Weiblich zusätzlich den Hüftumfang an der stärksten Gesäßwölbung eingeben.",
        "Maßband nicht festziehen oder Bauch einziehen; bei Vergleichen dasselbe Messverfahren verwenden."
      ],
      "howItWorks": "Zentimeter durch 2,54 teilen. Männlich = 86,010log10(A−N) − 70,041log10(H) + 36,76; weiblich = 163,205log10(W+P−N) − 97,684log10(H) − 78,387. H: Größe, N: Hals, A: Bauch, W: Taille, P: Hüfte, in Zoll. Die Umfangsdifferenz muss positiv sein; nur 0 < Prozent < 100 wird ausgegeben.",
      "example": "Männlich: Größe 180 cm, Hals 38 cm, Bauch 90 cm → 19,9%. Weiblich: Größe 165 cm, Hals 32 cm, Taille 72 cm, Hüfte 96 cm → 26,7%.",
      "faq": [
        {
          "q": "Wie genau ist die Körperfettschätzung aus Umfängen?",
          "a": "Eine universelle Fehlerspanne für alle Besucher ist nicht belegt. Messung, Körperbau und Modellpassung wirken mit; eine Dezimalstelle ist nur Anzeigepräzision."
        },
        {
          "q": "Wo messe ich Bauch, Taille und Hüfte?",
          "a": "Männlichen Bauch am Nabel, weibliche Taille an der natürlichen schmalsten Stelle, Hüfte an der stärksten Gesäßwölbung; Hals unterhalb des Kehlkopfs."
        },
        {
          "q": "Warum unterscheiden sich die Körperfettformeln?",
          "a": "Es sind getrennte Regressionen mit unterschiedlichen Eingaben. Der Schalter ändert die Gleichung."
        },
        {
          "q": "Warum braucht die Körperfettgleichung die Größe?",
          "a": "Die Größe steht im logarithmischen Regressionsterm. Umfänge allein bilden dieses Modell nicht ab."
        },
        {
          "q": "Wann wird die Umfangsrechnung abgelehnt?",
          "a": "Bei nichtpositiven Maßen, unbekannter Formel, A−N oder W+P−N ≤ 0 oder einem Ergebnis außerhalb 0–100%. Weiblich ist W>N nicht separat erforderlich."
        },
        {
          "q": "Warum erscheint keine gesunde Körperfettkategorie?",
          "a": "Alter, Ziele und medizinischer Kontext werden nicht erfasst; eine universelle Gesundheitsgrenze wird nicht abgeleitet."
        },
        {
          "q": "Ist das ein medizinischer Standard oder die aktuelle Navy-Prüfung?",
          "a": "Nein. Es ist eine historische Schätzung; heutige Dienstverfahren können sich ändern. Die Zahl bestimmt weder Gesundheit noch eine Diät."
        }
      ],
      "disclaimer": "Die übernommenen Koeffizienten stehen im Dokument der US Army von 2019 (S. 3, §f); ihre ursprüngliche Herleitung anhand vollständiger NHRC-Originalberichte bleibt ungeprüft. Dieses historische Umfangsmodell ist keine aktuelle Navy-Bewertung, Messung oder medizinische Schlussfolgerung; universelle Genauigkeit für Einzelpersonen wird nicht zugesichert.",
      "shortDescription": "Historische Körperfettschätzung aus Größe und Umfängen mit unterschiedlichen Messstellen je Formel.",
      "seoDescription": "Körperfett nach historischem Navy-Modell schätzen: männlicher Bauch oder weibliche Taille und Hüfte. Messstellen, Zollformeln und Grenzen erklärt."
    },
    "running-pace-calculator": {
      "longDescription": "Durchschnittstempo ist Zeit je Kilometer, Geschwindigkeit ist Strecke je Stunde. Diese Rechenwerte gelten auch fürs Gehen. Separate Laufprognosen verwenden ein Potenzmodell mit Exponent 1,06; Ausdauer und Bedingungen begrenzen die Übertragbarkeit. Ein Spaziergang wird damit nicht zur validierten Wettkampfprognose.",
      "howToUse": [
        "Positive Strecke und Kilometer oder Meilen wählen.",
        "Nichtnegative Stunden, Minuten und Sekunden mit positiver Gesamtzeit eingeben.",
        "Kilometer- und Meilentempo sowie Geschwindigkeit vergleichen.",
        "Gleichmäßige Zwischenzeiten verteilen das Durchschnittstempo; Wettkampfprognosen nutzen ein anderes Modell."
      ],
      "howItWorks": "Zeit t = 3600h + 60m + s; 1 Meile = 1,609344 km. Tempo = t/D in s/km, Geschwindigkeit = 3600D/t in km/h. Prognose T₂ = t(D₂/D)^1,06 für 5 km, 10 km, 21,0975 km und 42,195 km. Zeiten werden auf Sekunden gerundet.",
      "example": "5 km in 25 Minuten: 1500/5 = 300 s/km → 5:00/km, 12,00 km/h und 8:03 je Meile. Die 10-km-Prognose 1500×2^1,06 ergibt 52:07; beim selben gleichmäßigen Tempo wären es 50:00.",
      "faq": [
        {
          "q": "Was bedeutet der Riegel-artige Exponent 1,06?",
          "a": "Eine angenommene Potenzbeziehung zwischen Strecken, kein universelles Gesetz für jeden Läufer."
        },
        {
          "q": "Kann ich das Tempo beim Gehen berechnen?",
          "a": "Ja, Tempo und Geschwindigkeit sind Strecken-Zeit-Arithmetik. Die separaten Laufprognosen sind fürs Gehen nicht validiert."
        },
        {
          "q": "Warum kann die Marathonprognose zu schnell sein?",
          "a": "Ausdauertraining, Verpflegung, Steigung und Wetter fehlen. Eine Freizeitläuferstudie von 2016 fand häufig optimistische Marathonprognosen."
        },
        {
          "q": "Wie bekomme ich das Tempo für eine Zielzeit?",
          "a": "Geplante Strecke und Gesamtzeit eingeben. Das ergibt ein gleichmäßiges Zieltempo, getrennt von Potenzprognosen."
        },
        {
          "q": "Wie hängen min/km, km/h und Meilen zusammen?",
          "a": "5:00/km entspricht 12 km/h. Kilometertempo × 1,609344 ergibt Meilentempo; die prognostizierten Rennen bleiben Kilometerstrecken."
        }
      ],
      "disclaimer": "Ungefähre Wettkampfprognosen garantieren weder Leistung noch sichere Belastung. Durchschnittstempo beschreibt die eingegebene Strecke und Zeit."
    },
    "one-rep-max-calculator": {
      "longDescription": "Aus Last und ganzen Wiederholungen wird ein Einwiederholungsmaximum geschätzt. Epley liefert den Hauptwert, Brzycki und Lander erscheinen getrennt. Ihr arithmetisches Mittel ist kein Konfidenzintervall und kein Nachweis, dass die Last gehoben werden kann.",
      "howToUse": [
        "Gesamte Arbeitslast in Kilogramm größer als null eingeben.",
        "1–12 ganze Wiederholungen eingeben; Bruchteile und höhere Werte werden abgelehnt.",
        "Nähe zur Ermüdung und gleichbleibende Technik bei der Interpretation berücksichtigen.",
        "Modelle vergleichen; Prozentzeilen sind nur Anteile des Hauptwerts."
      ],
      "howItWorks": "Für r=1 ist der Hauptwert die eingegebene Last w; sonst Epley = w(1+r/30). Verwendete Varianten: Brzycki = 36w/(37−r), Lander = 100w/(101,3−2,67123r). Mittelwert = Summe / 3. Der Produktbereich 1–12 belegt keine Genauigkeit über diesen gesamten Bereich.",
      "example": "100 kg × 5: Epley 116,7 kg, Brzycki 112,5 kg, Lander 113,7 kg, Mittelwert 114,3 kg; 80% des Hauptwerts = 93,3 kg. Bei einer Wiederholung ist der Hauptwert 100 kg, Lander schätzt etwa 101,4 kg.",
      "faq": [
        {
          "q": "Wie viele Wiederholungen akzeptiert dieses 1RM-Werkzeug?",
          "a": "1–12 ganze Wiederholungen, mit Warnung oberhalb 10. Hohe Wiederholungszahlen schwächen den Bezug zum Maximum; kein Modell wird heimlich durch Epley ersetzt."
        },
        {
          "q": "Gilt die Schätzung für Kreuzheben und andere Übungen?",
          "a": "Rechnerisch ja; Studien bestimmter Übungen und Gruppen beweisen aber nicht denselben Fehler für jede Bewegung, Maschine oder Person."
        },
        {
          "q": "Soll ich das geschätzte Maximum sofort testen?",
          "a": "Die Zahl ist keine Freigabe zum Maximalversuch und beseitigt kein Verletzungsrisiko. Sie ist nur ein Bezugspunkt in einer separat geplanten Einheit."
        },
        {
          "q": "Warum unterscheiden sich die Modelle und ihr Mittelwert?",
          "a": "Sie bilden Wiederholungen unterschiedlich ab. Ein Mittelwert fasst Zahlen zusammen und garantiert keine bessere Genauigkeit."
        },
        {
          "q": "Was verordnen die Zeilen mit 50–90%?",
          "a": "Nur rechnerische Anteile der Epley-Schätzung, keinen Plan für Sätze, Erholung oder sichere Lasten."
        }
      ],
      "disclaimer": "Modellschätzung der Kraft ohne universelle Genauigkeitsgarantie. Sie bestätigt keine Bereitschaft zum Maximalversuch und ersetzt keine Bewertung von Technik und Bedingungen."
    }
  },
  "es": {
    "bmi-calculator": {
      "longDescription": "El IMC relaciona la masa con la estatura al cuadrado y asigna una categoría de cribado para adultos de 20 años o más. No distingue músculo y grasa ni describe su distribución. El intervalo de peso invierte la categoría 18,5 ≤ IMC < 25; no es una meta individual.",
      "howToUse": [
        "Introduce estatura medida en centímetros y peso en kilogramos, ambos positivos.",
        "Usa estas categorías desde los 20 años; el formulario no comprueba la edad.",
        "La categoría se elige antes de redondear el IMC.",
        "Cerca de un límite, ten en cuenta la visualización con un decimal."
      ],
      "howItWorks": "IMC = peso en kg / (estatura en cm / 100)². El intervalo normal incluye 18,5 y excluye 25; los límites siguientes son 30, 35 y 40. Con h en metros, el peso inferior es 18,5h² y el límite superior excluido, 25h².",
      "example": "175 cm y 70 kg: 70/1,75² = 22,857… → 22,9, categoría normal. Con 200 cm y 99,99 kg, 24,9975 se muestra como 25,0, pero sigue por debajo del límite 25.",
      "faq": [
        {
          "q": "¿Cuál es el intervalo normal de IMC adulto?",
          "a": "18,5 ≤ IMC < 25. La abreviatura 18,5–24,9 no describe todos los valores entre décimas."
        },
        {
          "q": "¿Por qué un deportista puede tener un IMC alto?",
          "a": "El músculo contribuye al peso igual que la grasa. El IMC no determina el porcentaje de grasa."
        },
        {
          "q": "¿Qué información sobre salud falta en el IMC?",
          "a": "Composición corporal, distribución de grasa y circunstancias médicas. El mismo IMC no implica la misma salud."
        },
        {
          "q": "¿Pueden los menores usar estas categorías de IMC?",
          "a": "No. Entre 2 y 19 años la interpretación considera edad y sexo."
        },
        {
          "q": "¿Cómo interpreto un IMC alto o el intervalo de peso?",
          "a": "Comprueba medidas y unidades. Considera la categoría junto con otros datos; el intervalo no prescribe adelgazar ni ganar peso."
        }
      ],
      "disclaimer": "Cribado adulto, no diagnóstico ni objetivo individual. El embarazo, la musculatura marcada y los cambios de composición requieren contexto adicional."
    },
    "calorie-calculator": {
      "longDescription": "La ecuación simplificada de Mifflin–St Jeor estima el gasto energético en reposo. Un factor de actividad y tu ajuste porcentual generan un escenario calórico; las proporciones de proteína y grasa dejan el resto para carbohidratos. No establece una necesidad individual ni predice el cambio de peso.",
      "howToUse": [
        "Elige el sexo de la fórmula, edad 19–78, estatura en cm y peso en kg.",
        "Selecciona actividad según todo el día, incluido trabajo y desplazamientos.",
        "Para pérdida o ganancia aplica 0–30%; mantenimiento ignora este campo.",
        "Proteína y grasa: 10–60% cada una y suma máxima 100%; los carbohidratos reciben el resto."
      ],
      "howItWorks": "Energía en reposo = 10w + 6,25h − 5a + 5 en la fórmula masculina, o −161 en vez de +5 en la femenina. TDEE = reposo × factor; escenario = TDEE × (1 ± p/100). Divide kcal de proteína y carbohidratos entre 4, y grasa entre 9, para gramos. REE es el gasto energético en reposo, estimado aquí mediante la ecuación.",
      "example": "Fórmula masculina, 80 kg, 180 cm, 30 años: 1780 kcal × 1,55 = 2759 kcal. Reducir 20% da 2207,2 → 2207 kcal. Con 35% proteína y 25% grasa: 193 g proteína, 61 g grasa y 221 g carbohidratos redondeados.",
      "faq": [
        {
          "q": "¿Cómo elijo una reducción calórica en el formulario?",
          "a": "0–30%, inicialmente 15%, son parámetros de escenario. No garantizan seguridad ni una tasa de pérdida de peso."
        },
        {
          "q": "¿Son óptimas las proporciones iniciales de macronutrientes?",
          "a": "30/25/45 es una distribución inicial, no una prescripción personal. Una suma de proteína y grasa superior a 100% se rechaza sin reajustarla ocultamente."
        },
        {
          "q": "¿Por qué el peso real cambia de otra forma?",
          "a": "Ingesta y gasto son estimaciones; el agua también modifica el peso. Este modelo estático no calcula adaptación ni kilos por semana."
        },
        {
          "q": "¿Qué significan los factores de actividad?",
          "a": "Son multiplicadores adoptados de 1,2 a 1,9. Contar entrenamientos no establece el gasto diario; el estudio original no valida estas cinco categorías."
        },
        {
          "q": "¿Quién queda fuera de este escenario nutricional?",
          "a": "El rango 19–78 sigue la cohorte de desarrollo. Embarazo, lactancia, enfermedades y dietas prescritas requieren una valoración independiente."
        }
      ],
      "disclaimer": "Estimación del gasto en reposo y escenario alimentario condicional, no prescripción individual. Actividad y ajustes porcentuales son supuestos."
    },
    "body-fat-calculator": {
      "longDescription": "Este modelo histórico de tipo Navy estima grasa con estatura y perímetros. Los centímetros se convierten a pulgadas antes de los logaritmos. La rama masculina usa abdomen al nivel del ombligo y cuello; la femenina, cintura natural, cadera y cuello. No es una evaluación militar vigente ni una medición directa de composición corporal.",
      "howToUse": [
        "Elige la rama masculina o femenina e introduce estatura y cuello en cm.",
        "Hombre: abdomen al nivel del ombligo; mujer: cintura natural más estrecha.",
        "En la rama femenina añade cadera por la máxima prominencia de los glúteos.",
        "No aprietes la cinta ni metas el abdomen; conserva el protocolo al comparar fechas."
      ],
      "howItWorks": "Divide cm entre 2,54. Masculina = 86,010log10(A−N) − 70,041log10(H) + 36,76; femenina = 163,205log10(W+P−N) − 97,684log10(H) − 78,387. H: estatura, N: cuello, A: abdomen, W: cintura, P: cadera, en pulgadas. La diferencia debe ser positiva; solo se muestra 0 < porcentaje < 100.",
      "example": "Rama masculina: 180 cm, cuello 38 cm y abdomen 90 cm → 19,9%. Femenina: 165 cm, cuello 32 cm, cintura 72 cm y cadera 96 cm → 26,7%.",
      "faq": [
        {
          "q": "¿Qué precisión tiene la estimación de grasa por perímetros?",
          "a": "No se ha establecido un error universal para todos. Influyen las medidas, la constitución y la aplicabilidad; un decimal indica formato, no exactitud."
        },
        {
          "q": "¿Dónde mido abdomen, cintura y cadera?",
          "a": "Abdomen masculino por el ombligo, cintura femenina en su zona natural más estrecha y cadera en la mayor prominencia glútea. Cuello bajo la laringe."
        },
        {
          "q": "¿Por qué difieren las ramas de grasa corporal?",
          "a": "Son regresiones distintas con entradas diferentes. El selector cambia la ecuación."
        },
        {
          "q": "¿Por qué una fórmula de porcentaje necesita estatura?",
          "a": "La estatura forma parte del término logarítmico; los perímetros solos no reproducen este modelo."
        },
        {
          "q": "¿Cuándo se rechaza el cálculo de perímetros?",
          "a": "Con medidas no positivas, rama desconocida, A−N o W+P−N ≤ 0 o resultado fuera de 0–100%. En mujeres no se exige W>N por separado."
        },
        {
          "q": "¿Por qué no aparece una categoría saludable de grasa?",
          "a": "No se evalúan edad, objetivos ni contexto médico; no se deduce un umbral universal de salud."
        },
        {
          "q": "¿Es un estándar médico o una evaluación Navy actual?",
          "a": "No. Es una estimación histórica y los procedimientos actuales pueden cambiar. El número no determina la salud ni prescribe una dieta."
        }
      ],
      "disclaimer": "Los coeficientes adoptados aparecen en el documento del Ejército de EE. UU. de 2019 (p. 3, §f); su derivación en los informes NHRC originales completos sigue sin verificarse. Este modelo histórico de perímetros no es una evaluación Navy vigente, una medición ni una conclusión médica; no se promete exactitud universal para cada persona.",
      "shortDescription": "Estimación histórica de grasa con estatura y perímetros, usando puntos de medida distintos por fórmula.",
      "seoDescription": "Estima grasa con un modelo Navy histórico: abdomen masculino o cintura natural y cadera femeninas. Puntos de medida, fórmulas en pulgadas y límites."
    },
    "running-pace-calculator": {
      "longDescription": "El ritmo medio es tiempo por kilómetro; la velocidad, distancia por hora. Estos resultados aritméticos sirven también para caminar. Las previsiones de carreras usan un modelo potencial con exponente 1,06, sujeto a resistencia y condiciones; no convierten un paseo en un pronóstico validado de competición.",
      "howToUse": [
        "Introduce distancia positiva y selecciona kilómetros o millas.",
        "Horas, minutos y segundos deben ser no negativos, con tiempo total positivo.",
        "Compara ritmo por kilómetro, por milla y velocidad.",
        "Los parciales uniformes reparten el mismo ritmo; las previsiones usan otro modelo."
      ],
      "howItWorks": "t = 3600h + 60m + s; 1 milla = 1,609344 km. Ritmo = t/D en s/km; velocidad = 3600D/t en km/h. T₂ = t(D₂/D)^1,06 para 5 km, 10 km, 21,0975 km y 42,195 km. Los tiempos se redondean al segundo.",
      "example": "5 km en 25 min: 1500/5 = 300 s/km → 5:00/km, 12,00 km/h y 8:03 por milla. La previsión de 10 km, 1500×2^1,06, da 52:07; al mismo ritmo uniforme serían 50:00.",
      "faq": [
        {
          "q": "¿Qué significa el exponente 1,06 tipo Riegel?",
          "a": "Una relación potencial adoptada entre distancias, no una ley universal para cada corredor."
        },
        {
          "q": "¿Puedo calcular el ritmo al caminar?",
          "a": "Sí, ritmo y velocidad son aritmética de distancia y tiempo. Las previsiones separadas de carreras no se han validado para caminar."
        },
        {
          "q": "¿Por qué la previsión de maratón puede ser demasiado rápida?",
          "a": "No contempla preparación de resistencia, alimentación, relieve y clima. Un estudio de aficionados de 2016 halló previsiones de maratón frecuentemente optimistas."
        },
        {
          "q": "¿Cómo calculo el ritmo para un tiempo objetivo?",
          "a": "Introduce distancia prevista y tiempo total. Obtienes el ritmo uniforme requerido, separado de las previsiones potenciales."
        },
        {
          "q": "¿Cómo se relacionan min/km, km/h y millas?",
          "a": "5:00/km equivale a 12 km/h. Multiplica el tiempo por 1,609344 para ritmo por milla; las distancias previstas siguen en kilómetros."
        }
      ],
      "disclaimer": "Pronósticos aproximados, sin garantía de rendimiento ni indicación de carga segura. El ritmo medio describe solo distancia y tiempo introducidos."
    },
    "one-rep-max-calculator": {
      "longDescription": "Estima el máximo de una repetición con la carga y el número entero de repeticiones realizadas. Epley es el resultado principal; Brzycki y Lander se muestran aparte. Su media aritmética no es un intervalo de confianza ni prueba que puedas levantar esa carga.",
      "howToUse": [
        "Introduce carga total de trabajo en kg mayor que cero.",
        "Introduce 1–12 repeticiones enteras; valores fraccionarios o mayores se rechazan.",
        "Considera la proximidad a la fatiga y la consistencia de la técnica.",
        "Compara modelos; las filas porcentuales son fracciones de la estimación principal."
      ],
      "howItWorks": "Para r=1 el principal es la carga w; si no, Epley = w(1+r/30). Versiones adoptadas: Brzycki = 36w/(37−r); Lander = 100w/(101,3−2,67123r). Media = suma / 3. El rango del producto 1–12 no acredita precisión en todo ese intervalo.",
      "example": "100 kg × 5: Epley 116,7 kg, Brzycki 112,5 kg, Lander 113,7 kg y media 114,3 kg. El 80% del principal son 93,3 kg. Con una repetición, principal 100 kg y Lander aproximadamente 101,4 kg.",
      "faq": [
        {
          "q": "¿Cuántas repeticiones admite esta herramienta de 1RM?",
          "a": "1–12 enteras, con aviso por encima de 10. Muchas repeticiones debilitan la relación con el máximo; no se sustituye otro modelo por Epley ocultamente."
        },
        {
          "q": "¿Sirve para peso muerto y otros ejercicios?",
          "a": "La aritmética funciona, pero estudios de ejercicios y grupos concretos no prueban el mismo error para todo movimiento, máquina o persona."
        },
        {
          "q": "¿Debo intentar inmediatamente el máximo estimado?",
          "a": "No autoriza una tentativa máxima ni elimina el riesgo de lesión. Solo es una referencia dentro de una sesión planificada aparte."
        },
        {
          "q": "¿Por qué difieren los tres modelos y su media?",
          "a": "Representan las repeticiones de forma distinta. La media combina cifras sin garantizar mayor precisión."
        },
        {
          "q": "¿Qué prescriben las filas del 50–90%?",
          "a": "Solo fracciones aritméticas de Epley, no un programa de series, recuperación ni cargas seguras."
        }
      ],
      "disclaimer": "Estimación de fuerza sin garantía universal de exactitud. No confirma preparación para un máximo ni sustituye valorar técnica y condiciones."
    }
  }
};

// Sources support the stated model/context, not clinician review or universal
// applicability. Army2019 documents adopted coefficients; their derivation in
// the original NHRC reports remains a recorded gap, as do current Navy rules.
const methodLinks = {
  bmi: 'https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html',
  mifflin: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
  nutritionScope: 'https://www.niddk.nih.gov/health-information/weight-management/body-weight-planner',
  navyHistorical: 'https://www.mynavyhr.navy.mil/Portals/55/Support/Culture%20Resilience/Physical/AMDR%20Training_FEB%202025_v4.pdf?ver=uLCWsmsHugcKUXNubKZ3aA%3D%3D',
  armyHistoricalCoefficients: 'https://api.army.mil/e2/c/downloads/566092.pdf#page=3',
  race: 'https://pubmed.ncbi.nlm.nih.gov/27570626/',
  oneRm: 'https://paulogentil.com/pdf/The%20Accuracy%20of%20Prediction%20Equations%20for%20Estimating%201-RM%20Performance%20in%20the%20Bench%20Press,%20Squat,%20and%20Deadlift.pdf',
  oneRmRange: 'https://pubmed.ncbi.nlm.nih.gov/16937972/',
  bar: 'https://iwf.sport/weightlifting_/equipment/',
  tyreSizes: 'https://www.schwalbe.com/en/technology-faq/tire-sizes/',
  rollout: 'https://www.schwalbe.com/en/technology-faq/tire-dimensions/',
  hub: 'https://productinfo.shimano.com/pdfs/product/latest/Specifications_en.pdf',
} as const;
type MethodKey = keyof typeof methodLinks;
const methodsById: Record<string, MethodKey[]> = {
  'bmi-calculator': ['bmi'], 'calorie-calculator': ['mifflin', 'nutritionScope'],
  'body-fat-calculator': ['navyHistorical', 'armyHistoricalCoefficients'], 'running-pace-calculator': ['race'],
  'one-rep-max-calculator': ['oneRm', 'oneRmRange'], 'barbell-plates': ['bar'],
  'bike-gear-ratio': ['rollout', 'hub'], 'bike-wheel-size': ['tyreSizes', 'rollout'],
};
const methodLabels: Record<FitnessContentLocale, Record<MethodKey, string>> = {
  ru: {
    bmi: 'CDC: взрослые категории ИМТ от 20 лет и границы без округления',
    mifflin: 'Mifflin и соавторы, 1990: уравнение энергии в покое, группа 19–78 лет',
    nutritionScope: 'NIDDK: ограничения взрослого планирования питания; не проверка нашего статического сценария',
    navyHistorical: 'ВМС США, февраль 2025: исторические места измерения обхватов; не текущая норма допуска',
    armyHistoricalCoefficients: 'Армия США, 26 марта 2019, с. 3, §f: историческое использование точных коэффициентов в дюймах',
    race: 'Vickers и Vertosick, 2016: проверка прогнозов любителей и ограничения марафонского переноса',
    oneRm: 'LeSuer и соавторы, 1997: сравнение моделей 1ПМ; таблица округлённых вариантов коэффициентов',
    oneRmRange: 'Reynolds и соавторы, 2006: повторения и ошибка оценки в жиме и жиме ногами',
    bar: 'IWF: массы соревновательных грифов и двух замков, не любого инвентаря зала',
    tyreSizes: 'Schwalbe: значения ETRTO и неоднозначность дюймовых названий',
    rollout: 'Schwalbe: зависимость проката от конструкции, обода, давления и нагрузки',
    hub: 'Shimano, спецификации 2026–2027: дополнительные внутренние отношения втулок',
  },
  en: {
    bmi: 'CDC: adult BMI categories from age 20 and unrounded cut-offs',
    mifflin: 'Mifflin et al., 1990: resting energy equation, development cohort aged 19–78',
    nutritionScope: 'NIDDK: adult nutrition-planning limitations, not validation of this static scenario',
    navyHistorical: 'US Navy, February 2025: historical circumference measurement sites, not current eligibility rules',
    armyHistoricalCoefficients: 'US Army, 26 March 2019, p. 3, §f: historical use of the exact inch-based coefficients',
    race: 'Vickers and Vertosick, 2016: recreational race predictions and marathon-transfer limitations',
    oneRm: 'LeSuer et al., 1997: 1RM model comparison and rounded coefficient variants in Table 1',
    oneRmRange: 'Reynolds et al., 2006: repetition ranges and prediction error in bench and leg presses',
    bar: 'IWF: competition bar and collar masses, not all gym equipment',
    tyreSizes: 'Schwalbe: ETRTO dimensions and ambiguous inch labels',
    rollout: 'Schwalbe: construction, rim, pressure and load affect rollout',
    hub: 'Shimano 2026–2027 specifications: additional internal hub gear ratios',
  },
  uk: {
    bmi: 'CDC: дорослі категорії ІМТ від 20 років і неокруглені межі',
    mifflin: 'Mifflin та співавтори, 1990: енергія у спокої, група 19–78 років',
    nutritionScope: 'NIDDK: обмеження планування харчування дорослих, не перевірка нашого сценарію',
    navyHistorical: 'ВМС США, лютий 2025: історичні місця вимірювання обхватів, не чинні норми допуску',
    armyHistoricalCoefficients: 'Армія США, 26 березня 2019, с. 3, §f: історичне використання точних коефіцієнтів у дюймах',
    race: 'Vickers і Vertosick, 2016: прогнози аматорів та обмеження перенесення на марафон',
    oneRm: 'LeSuer та співавтори, 1997: порівняння 1ПМ та округлені коефіцієнти таблиці 1',
    oneRmRange: 'Reynolds та співавтори, 2006: повторення і похибка в жимі лежачи та ногами',
    bar: 'IWF: маси змагальних грифів і замків, не всього інвентарю залу',
    tyreSizes: 'Schwalbe: розміри ETRTO та неоднозначні дюймові назви',
    rollout: 'Schwalbe: вплив конструкції, обода, тиску та навантаження на прокат',
    hub: 'Shimano, специфікації 2026–2027: додаткові внутрішні відношення втулок',
  },
  de: {
    bmi: 'CDC: BMI-Kategorien ab 20 und ungerundete Grenzen',
    mifflin: 'Mifflin et al., 1990: Ruheenergiegleichung, Entwicklungsgruppe von 19–78 Jahren',
    nutritionScope: 'NIDDK: Grenzen der Ernährungsplanung für Erwachsene, keine Prüfung dieses statischen Szenarios',
    navyHistorical: 'US Navy, Februar 2025: historische Umfangsmessstellen, keine aktuellen Eignungsregeln',
    armyHistoricalCoefficients: 'US Army, 26. März 2019, S. 3, §f: historische Verwendung der exakten Zollkoeffizienten',
    race: 'Vickers und Vertosick, 2016: Freizeitlaufprognosen und Grenzen beim Marathon',
    oneRm: 'LeSuer et al., 1997: 1RM-Modellvergleich und gerundete Koeffizienten in Tabelle 1',
    oneRmRange: 'Reynolds et al., 2006: Wiederholungen und Schätzfehler bei Bank- und Beinpresse',
    bar: 'IWF: Masse von Wettkampfstangen und Verschlüssen, nicht aller Studiogeräte',
    tyreSizes: 'Schwalbe: ETRTO-Maße und mehrdeutige Zollnamen',
    rollout: 'Schwalbe: Einfluss von Bauart, Felge, Druck und Last auf den Abrollumfang',
    hub: 'Shimano-Spezifikationen 2026–2027: zusätzliche interne Nabenübersetzungen',
  },
  es: {
    bmi: 'CDC: categorías de IMC desde los 20 años y límites sin redondear',
    mifflin: 'Mifflin y colaboradores, 1990: gasto en reposo, cohorte de 19–78 años',
    nutritionScope: 'NIDDK: límites de planificación adulta, no validación de este escenario estático',
    navyHistorical: 'US Navy, febrero de 2025: puntos históricos de perímetro, no reglas vigentes de acceso',
    armyHistoricalCoefficients: 'Ejército de EE. UU., 26 de marzo de 2019, p. 3, §f: uso histórico de los coeficientes exactos en pulgadas',
    race: 'Vickers y Vertosick, 2016: previsiones de aficionados y límites del maratón',
    oneRm: 'LeSuer y colaboradores, 1997: comparación de 1RM y coeficientes redondeados en tabla 1',
    oneRmRange: 'Reynolds y colaboradores, 2006: repeticiones y error en press de banca y piernas',
    bar: 'IWF: masas de barras y collarines de competición, no de todo gimnasio',
    tyreSizes: 'Schwalbe: medidas ETRTO y nombres ambiguos en pulgadas',
    rollout: 'Schwalbe: construcción, llanta, presión y carga afectan al rodamiento',
    hub: 'Especificaciones Shimano 2026–2027: relaciones adicionales de bujes internos',
  },
};
export function getFitnessMethodSources(id: string, locale: FitnessContentLocale): EditorialSource[] {
  return (methodsById[id] ?? []).map((key) => ({ label: methodLabels[locale][key], href: methodLinks[key] }));
}

// Root integrates these explicit result phrases into the existing client maps.
export const fitnessResultPhrases = {
  "en": {
    "Категория ИМТ не определяет диагноз или необходимое лечение.": "A BMI category does not determine a diagnosis or required treatment.",
    " и < ": " and < ",
    "Взрослые категории рассчитаны для возраста от 20 лет. Категория выбирается до округления ИМТ; границы диапазона веса округлены. ИМТ не измеряет состав тела и не задаёт индивидуальную цель веса.": "Adult categories apply from age 20. The category uses BMI before rounding; weight interval boundaries are rounded. BMI does not measure body composition or set an individual weight goal.",
    "Выберите мужскую или женскую формулу": "Select the male or female equation",
    "Выберите цель расчёта": "Select a calculation goal",
    "Введите возраст от 19 до 78 лет, конечные рост и вес больше нуля": "Enter age 19–78 and finite positive height and weight",
    "Выберите коэффициент активности из списка": "Select an activity multiplier from the list",
    "Изменение калорий должно быть от 0 до 30 процентов": "Calorie adjustment must be 0–30 percent",
    "Доли белков и жиров должны быть от 10 до 60 процентов каждая и в сумме не больше 100": "Protein and fat must each be 10–60 percent and sum to no more than 100",
    "Результат выходит за числовой диапазон": "The result exceeds the numeric range",
    "Это сценарий оценки расхода и распределения энергии. Коэффициент активности, процент изменения и доли БЖУ — выбранные допущения, а не индивидуальное назначение или прогноз скорости изменения веса.": "This scenario estimates energy expenditure and allocation. Activity, adjustment and macro percentages are chosen assumptions, not an individual prescription or weight-change-rate forecast.",
    "Историческая оценка по обхватам. У мужчин измеряют живот на уровне пупка, у женщин — естественную талию. Универсальная погрешность не гарантируется; результат не является медицинским заключением.": "Historical circumference estimate. Measure male abdomen at the navel and female natural waist. No universal error margin is guaranteed; the result is not a medical conclusion.",
    "Выберите километры или мили": "Select kilometres or miles",
    "Введите конечную дистанцию больше нуля и неотрицательные часы, минуты и секунды": "Enter a finite positive distance and nonnegative hours, minutes and seconds",
    "Прогнозы используют степенную модель с показателем 1,06. Они не учитывают подготовку, рельеф и погоду; перенос на марафон может существенно завышать скорость.": "Forecasts use a power law with exponent 1.06. They omit preparation, terrain and weather; marathon transfer can substantially overestimate speed.",
    "Введите конечный вес больше нуля и целое число повторений от 1 до 12": "Enter a finite positive load and 1–12 whole repetitions"
  },
  "uk": {
    "Категория ИМТ не определяет диагноз или необходимое лечение.": "Категорія ІМТ не визначає діагнозу чи потрібного лікування.",
    " и < ": " і < ",
    "Взрослые категории рассчитаны для возраста от 20 лет. Категория выбирается до округления ИМТ; границы диапазона веса округлены. ИМТ не измеряет состав тела и не задаёт индивидуальную цель веса.": "Дорослі категорії від 20 років. Категорія визначається до округлення ІМТ; межі маси округлені. ІМТ не вимірює склад тіла й не задає особисту ціль маси.",
    "Выберите мужскую или женскую формулу": "Оберіть чоловічу або жіночу формулу",
    "Выберите цель расчёта": "Оберіть мету розрахунку",
    "Введите возраст от 19 до 78 лет, конечные рост и вес больше нуля": "Введіть вік 19–78, скінченні додатні зріст і масу",
    "Выберите коэффициент активности из списка": "Оберіть коефіцієнт активності зі списку",
    "Изменение калорий должно быть от 0 до 30 процентов": "Зміна калорій має бути 0–30 відсотків",
    "Доли белков и жиров должны быть от 10 до 60 процентов каждая и в сумме не больше 100": "Білки й жири мають бути по 10–60 відсотків і разом не більше 100",
    "Результат выходит за числовой диапазон": "Результат виходить за числовий діапазон",
    "Это сценарий оценки расхода и распределения энергии. Коэффициент активности, процент изменения и доли БЖУ — выбранные допущения, а не индивидуальное назначение или прогноз скорости изменения веса.": "Сценарій оцінки витрат і розподілу енергії. Активність, зміна та частки БЖВ — обрані припущення, не призначення чи прогноз швидкості зміни маси.",
    "Историческая оценка по обхватам. У мужчин измеряют живот на уровне пупка, у женщин — естественную талию. Универсальная погрешность не гарантируется; результат не является медицинским заключением.": "Історична оцінка обхватів. Чоловічий живіт вимірюють через пупок, жіночу природну талію. Універсальна похибка не гарантується; це не медичний висновок.",
    "Выберите километры или мили": "Оберіть кілометри або милі",
    "Введите конечную дистанцию больше нуля и неотрицательные часы, минуты и секунды": "Введіть скінченну додатну дистанцію й невід’ємні години, хвилини та секунди",
    "Прогнозы используют степенную модель с показателем 1,06. Они не учитывают подготовку, рельеф и погоду; перенос на марафон может существенно завышать скорость.": "Прогнози використовують степеневу модель 1,06 без підготовки, рельєфу й погоди; перенесення на марафон може суттєво завищувати швидкість.",
    "Введите конечный вес больше нуля и целое число повторений от 1 до 12": "Введіть скінченну додатну вагу й 1–12 цілих повторень"
  },
  "de": {
    "Категория ИМТ не определяет диагноз или необходимое лечение.": "Eine BMI-Kategorie bestimmt weder Diagnose noch erforderliche Behandlung.",
    " и < ": " und < ",
    "Взрослые категории рассчитаны для возраста от 20 лет. Категория выбирается до округления ИМТ; границы диапазона веса округлены. ИМТ не измеряет состав тела и не задаёт индивидуальную цель веса.": "Erwachsenen-Kategorien gelten ab 20. Die Kategorie wird vor BMI-Rundung gewählt; Gewichtsgrenzen sind gerundet. BMI misst keine Körperzusammensetzung und setzt kein persönliches Ziel.",
    "Выберите мужскую или женскую формулу": "Männliche oder weibliche Formel wählen",
    "Выберите цель расчёта": "Berechnungsziel auswählen",
    "Введите возраст от 19 до 78 лет, конечные рост и вес больше нуля": "Alter 19–78 und endliche positive Größe und Masse eingeben",
    "Выберите коэффициент активности из списка": "Aktivitätsfaktor aus der Liste auswählen",
    "Изменение калорий должно быть от 0 до 30 процентов": "Kalorienänderung muss 0–30 Prozent betragen",
    "Доли белков и жиров должны быть от 10 до 60 процентов каждая и в сумме не больше 100": "Protein und Fett jeweils 10–60 Prozent, zusammen höchstens 100",
    "Результат выходит за числовой диапазон": "Das Ergebnis überschreitet den Zahlenbereich",
    "Это сценарий оценки расхода и распределения энергии. Коэффициент активности, процент изменения и доли БЖУ — выбранные допущения, а не индивидуальное назначение или прогноз скорости изменения веса.": "Szenario für Energieverbrauch und Verteilung. Aktivität, Änderung und Makroanteile sind Annahmen, keine persönliche Verordnung oder Prognose der Gewichtsänderungsrate.",
    "Историческая оценка по обхватам. У мужчин измеряют живот на уровне пупка, у женщин — естественную талию. Универсальная погрешность не гарантируется; результат не является медицинским заключением.": "Historische Umfangsschätzung. Männlichen Bauch am Nabel, weibliche natürliche Taille messen. Keine universelle Fehlerspanne; keine medizinische Schlussfolgerung.",
    "Выберите километры или мили": "Kilometer oder Meilen auswählen",
    "Введите конечную дистанцию больше нуля и неотрицательные часы, минуты и секунды": "Endliche positive Strecke und nichtnegative Stunden, Minuten und Sekunden eingeben",
    "Прогнозы используют степенную модель с показателем 1,06. Они не учитывают подготовку, рельеф и погоду; перенос на марафон может существенно завышать скорость.": "Prognosen nutzen ein Potenzmodell 1,06 ohne Vorbereitung, Gelände und Wetter; Marathonübertragung kann die Geschwindigkeit deutlich überschätzen.",
    "Введите конечный вес больше нуля и целое число повторений от 1 до 12": "Endliche positive Last und 1–12 ganze Wiederholungen eingeben"
  },
  "es": {
    "Категория ИМТ не определяет диагноз или необходимое лечение.": "Una categoría de IMC no determina diagnóstico ni tratamiento necesario.",
    " и < ": " y < ",
    "Взрослые категории рассчитаны для возраста от 20 лет. Категория выбирается до округления ИМТ; границы диапазона веса округлены. ИМТ не измеряет состав тела и не задаёт индивидуальную цель веса.": "Categorías adultas desde 20 años. Se eligen antes de redondear IMC; límites de peso redondeados. El IMC no mide composición ni fija meta personal.",
    "Выберите мужскую или женскую формулу": "Selecciona fórmula masculina o femenina",
    "Выберите цель расчёта": "Selecciona un objetivo",
    "Введите возраст от 19 до 78 лет, конечные рост и вес больше нуля": "Introduce edad 19–78 y estatura y peso finitos positivos",
    "Выберите коэффициент активности из списка": "Elige factor de actividad de la lista",
    "Изменение калорий должно быть от 0 до 30 процентов": "El ajuste calórico debe ser 0–30 por ciento",
    "Доли белков и жиров должны быть от 10 до 60 процентов каждая и в сумме не больше 100": "Proteína y grasa deben ser 10–60 por ciento cada una y sumar como máximo 100",
    "Результат выходит за числовой диапазон": "El resultado excede el rango numérico",
    "Это сценарий оценки расхода и распределения энергии. Коэффициент активности, процент изменения и доли БЖУ — выбранные допущения, а не индивидуальное назначение или прогноз скорости изменения веса.": "Escenario de gasto y reparto energético. Actividad, ajuste y macros son supuestos, no prescripción personal ni pronóstico de ritmo de cambio de peso.",
    "Историческая оценка по обхватам. У мужчин измеряют живот на уровне пупка, у женщин — естественную талию. Универсальная погрешность не гарантируется; результат не является медицинским заключением.": "Estimación histórica por perímetros. Abdomen masculino al ombligo y cintura natural femenina. Sin error universal garantizado; no es conclusión médica.",
    "Выберите километры или мили": "Selecciona kilómetros o millas",
    "Введите конечную дистанцию больше нуля и неотрицательные часы, минуты и секунды": "Introduce distancia finita positiva y horas, minutos y segundos no negativos",
    "Прогнозы используют степенную модель с показателем 1,06. Они не учитывают подготовку, рельеф и погоду; перенос на марафон может существенно завышать скорость.": "Pronósticos con modelo potencial 1,06 sin preparación, relieve ni clima; transferir a maratón puede sobreestimar mucho la velocidad.",
    "Введите конечный вес больше нуля и целое число повторений от 1 до 12": "Introduce carga finita positiva y 1–12 repeticiones enteras"
  }
};
