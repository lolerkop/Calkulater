import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Берёт объём — заданный напрямую или посчитанный по размерам прямоугольной либо круглой чаши, — переводит его в литры и делит на расход. Поддержаны ровно три формы, те, что встречаются на практике; произвольная чаша сюда не поместится, и делать вид, что помещается, калькулятор не станет.",
    "howToUse": [
      "Выберите, знаете вы объём или размеры.",
      "Введите значения для этой формы.",
      "Укажите расход воды и его единицу."
    ],
    "howItWorks": "Известный объём V вводится в м³; прямоугольная чаша V=L×B×h, круглая цилиндрическая V=π×(D/2)²×h. Расход переводится в л/мин: л/ч÷60, м³/ч×1000÷60. Время t=1000 V/F минут, часы t/60. Для строки «часы и минуты» сначала округляется общее t до минуты, затем выделяются часы и остаток 0..59. Глубина нужна только для двух режимов размеров.",
    "example": "Бассейн 32 м³ при 20 литрах в минуту наполняется 1600 минут, то есть около 26,7 часа. Объём 0,596 м³ при 10 л/мин даёт 59,6 мин; округлённая строка —1 ч 0 мин.",
    "faq": [
      {
        "q": "Где взять расход воды?",
        "a": "Наполните ведро известного объёма и засеките время. Садовый шланг и магистраль различаются в разы, и замер надёжнее догадки."
      },
      {
        "q": "Измерять глубину по факту наполнения?",
        "a": "Да. Бассейны редко наполняют до краёв, и объём определяет именно уровень воды."
      },
      {
        "q": "Поддерживаются ли другие формы?",
        "a": "Нет, только известный объём, прямоугольник и круг. Овальная или произвольная чаша потребовала бы геометрии, которой у калькулятора нет."
      },
      {
        "q": "Держится ли расход постоянным на практике?",
        "a": "Не обязательно: давление, шланг и другие потребители могут менять расход. Формула предполагает постоянный введённый поток и не учитывает испарение, утечки или дополнительные источники. Полученное время может оказаться как меньше, так и больше фактического."
      }
    ]
  },
  "en": {
    "longDescription": "Takes the volume — given directly, or from the dimensions of a rectangular or round pool — converts it to litres and divides by the flow. Exactly three shapes are supported, the ones that actually come up; an arbitrary basin will not fit here, and the calculator does not pretend otherwise.",
    "howToUse": [
      "Choose whether you know the volume or the dimensions.",
      "Enter the figures for that shape.",
      "Enter the flow rate and pick its unit."
    ],
    "howItWorks": "Known volume V is in m³; rectangular basin V=L×B×h and cylindrical round basin V=π×(D/2)²×h. Convert flow to L/min: L/h÷60, m³/h×1000÷60. Time t=1000 V/F minutes; hours=t/60. The hours/minutes row rounds total t first, then splits whole hours and remainder 0..59. Depth is active only for the two dimension modes.",
    "example": "A 32 m³ pool at 20 litres per minute takes 1600 minutes, or about 26.7 hours. 0.596 m³ at 10 L/min takes 59.6 min; the rounded row is 1 h 0 min.",
    "faq": [
      {
        "q": "Where do I find the flow rate?",
        "a": "Fill a bucket of known volume and time it. A garden hose and a mains supply differ by several times, so measuring beats guessing."
      },
      {
        "q": "Should I measure the depth I actually fill to?",
        "a": "Yes. Pools are rarely filled to the brim, and the water line is what determines the volume."
      },
      {
        "q": "Are other shapes supported?",
        "a": "No, only a known volume, a rectangle and a circle. An oval or freeform basin would need a geometry the calculator does not have."
      },
      {
        "q": "Does the flow stay constant in practice?",
        "a": "Not necessarily: pressure, hose and other users can change flow. The formula assumes the constant entered rate and omits evaporation, leaks and additional sources. Its time may be below or above the actual duration."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Час наповнення басейну рахується просто, а от результат зазвичай виявляється несподіваним: басейн на 32 кубометри від звичайного шланга наповнюється більше доби. Саме тому перед наповненням варто перевірити й фактичну витрату, і те, чи витримає її водопровід.",
    "howToUse": [
      "Оберіть відомий об’єм, прямокутну або круглу чашу.",
      "Введіть лише розміри обраної форми; глибина — фактична висота наливу.",
      "Виміряйте подачу об’ємом за час і виберіть л/хв, л/год або м³/год."
    ],
    "howItWorks": "Відомий V вводиться в м³; прямокутна чаша V=L×B×h, кругла циліндрична V=π×(D/2)²×h. Витрата в л/хв: л/год÷60, м³/год×1000÷60. Час t=1000 V/F хвилин, години t/60. Рядок «години й хвилини» спершу округлює загальне t до хвилини, далі виділяє години та залишок 0..59. Глибина активна лише у двох режимах розмірів.",
    "example": "Басейн 32 м³ за 20 літрів на хвилину наповнюється 1600 хвилин, тобто близько 26,7 години. 0,596 м³ за 10 л/хв дає 59,6 хв; округлений рядок —1 год 0 хв.",
    "faq": [
      {
        "q": "Як виміряти реальну витрату?",
        "a": "Наповніть ємність відомого об’єму та виміряйте час: літри поділіть на хвилини. Використовуйте той самий шланг і режим подачі, що для басейну. Сам діаметр труби не визначає витрату."
      },
      {
        "q": "Чому наповнення триває так довго?",
        "a": "Кубометр — це 1000 літрів. За сталої подачі 20 л/хв об’єм 32 м³ вимагає 1600 хвилин, тобто 26 год 40 хв. Зміна подачі змінює час обернено пропорційно лише в цій моделі."
      },
      {
        "q": "Чи можна прискорити наповнення?",
        "a": "Збільшити виміряну чисту подачу: перевірте дозволені умови підключення й обладнання. Два шланги не обов’язково подвоюють потік, якщо користуються спільним обмеженим джерелом. Виміряйте їх сумарну подачу."
      },
      {
        "q": "Чи враховано випаровування?",
        "a": "Ні. Модель ділить початково порожній об’єм на постійну подачу без випаровування, течі чи інших джерел. За потреби оцінюйте чисту подачу з вимірювань; результат не є гарантованою нижньою межею."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Nimmt das Volumen — unmittelbar angegeben oder aus den Maßen eines rechteckigen oder runden Beckens —, rechnet es in Liter um und teilt es durch den Durchfluss. Unterstützt werden genau drei Formen, die, die tatsächlich vorkommen; ein beliebig geformtes Becken passt hier nicht hinein, und der Rechner tut nicht so, als wäre es anders.",
    "howToUse": [
      "Wähle, ob du das Volumen oder die Maße kennst.",
      "Trage die Zahlen für diese Form ein.",
      "Trage den Durchfluss ein und wähle seine Einheit."
    ],
    "howItWorks": "Bekanntes V wird in m³ eingegeben; rechteckig V=L×B×h, rund zylindrisch V=π×(D/2)²×h. Durchfluss in l/min: l/h÷60, m³/h×1000÷60. Zeit t=1000 V/F Minuten, Stunden=t/60. Für Stunden/Minuten wird zuerst die Gesamtzeit gerundet, dann in Stunden und Rest 0..59 geteilt. Tiefe ist nur in den beiden Maßmodi aktiv.",
    "example": "Ein Becken mit 32 m³ braucht bei 20 Litern je Minute 1600 Minuten, also rund 26,7 Stunden. 0,596 m³ bei 10 l/min ergeben 59,6 min; gerundet 1 h 0 min.",
    "faq": [
      {
        "q": "Woher bekomme ich den Durchfluss?",
        "a": "Füll einen Eimer bekannten Inhalts und stopp die Zeit. Ein Gartenschlauch und ein Hausanschluss unterscheiden sich um ein Mehrfaches, Messen schlägt also Schätzen."
      },
      {
        "q": "Soll ich die Tiefe messen, bis zu der ich tatsächlich fülle?",
        "a": "Ja. Becken werden selten bis zum Rand gefüllt, und der Wasserstand bestimmt das Volumen."
      },
      {
        "q": "Werden andere Formen unterstützt?",
        "a": "Nein, nur ein bekanntes Volumen, ein Rechteck und ein Kreis. Ein ovales oder frei geformtes Becken bräuchte eine Geometrie, die der Rechner nicht hat."
      },
      {
        "q": "Bleibt der Durchfluss in der Praxis gleich?",
        "a": "Nicht zwingend: Druck, Schlauch und andere Verbraucher können den Durchfluss ändern. Die Formel nimmt konstanten eingegebenen Zufluss an, ohne Verdunstung, Lecks oder weitere Quellen. Die Zeit kann kürzer oder länger als tatsächlich sein."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Toma el volumen —dado directamente, o a partir de las dimensiones de una piscina rectangular o redonda—, lo convierte a litros y lo divide entre el caudal. Se admiten exactamente tres formas, las que de verdad aparecen; un vaso de forma libre no encaja aquí, y la calculadora no finge lo contrario.",
    "howToUse": [
      "Elige si conoces el volumen o las dimensiones.",
      "Introduce las cifras de esa forma.",
      "Introduce el caudal y elige su unidad."
    ],
    "howItWorks": "V conocido se introduce en m³; vaso rectangular V=L×B×h y circular cilíndrico V=π×(D/2)²×h. Caudal en l/min: l/h÷60, m³/h×1000÷60. Tiempo t=1000 V/F minutos, horas=t/60. La fila de horas/minutos redondea primero el total y luego separa horas y resto 0..59. La profundidad solo está activa en los dos modos de dimensiones.",
    "example": "Una piscina de 32 m³ con 20 litros por minuto tarda 1600 minutos, unas 26,7 horas. 0,596 m³ a 10 l/min dan 59,6 min; fila redondeada 1 h 0 min.",
    "faq": [
      {
        "q": "¿De dónde saco el caudal?",
        "a": "Llena un cubo de volumen conocido y cronométralo. Una manguera de jardín y una toma de red se diferencian en varias veces, así que medir gana a estimar."
      },
      {
        "q": "¿Debo medir la profundidad hasta donde lleno de verdad?",
        "a": "Sí. Las piscinas rara vez se llenan hasta el borde, y es la línea del agua la que determina el volumen."
      },
      {
        "q": "¿Se admiten otras formas?",
        "a": "No, solo volumen conocido, rectángulo y círculo. Un vaso ovalado o de forma libre exigiría una geometría que la calculadora no tiene."
      },
      {
        "q": "¿El caudal se mantiene constante en la práctica?",
        "a": "No necesariamente: presión, manguera y otros consumos pueden cambiarlo. Se supone el caudal introducido constante, sin evaporación, fugas ni otras fuentes. El tiempo puede ser menor o mayor que el real."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
