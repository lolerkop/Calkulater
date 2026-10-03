// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Находит показатель степени, в которую нужно возвести основание, чтобы получить число. Все три режима считаются одной формулой — натуральный логарифм числа, делённый на натуральный логарифм основания, — а результат сопровождается проверкой возведением в степень.",
    "howToUse": [
      "Выберите десятичный, натуральный логарифм или произвольное основание.",
      "Введите положительное число; в произвольном режиме задайте положительное основание, не равное единице.",
      "Прочитайте показатель степени и приближённую проверку; в фиксированных режимах поле основания не используется."
    ],
    "howItWorks": "log_b(x) = ln x ÷ ln b; десятичный и натуральный режимы лишь фиксируют основание. Число положительное, основание положительное и не равно 1; основания между 0 и 1 допустимы. Обычный дробный вывод округляется до шести разрядов; очень малые числа показаны в научной записи, проверка приближённая.",
    "example": "Для x = 1024 и основания 2 результат 10. Для x = 4 и основания 0,5 результат −2, поскольку 0,5⁻² = 4. Для x = 1 логарифм равен нулю при любом допустимом основании; x = 0 недопустим.",
    "faq": [
      {
        "q": "Почему число должно быть положительным?",
        "a": "Никакая степень положительного основания не даёт нуля или отрицательного числа, поэтому логарифм там не определён."
      },
      {
        "q": "Почему основание не может быть единицей?",
        "a": "Единица в любой степени остаётся единицей, и у уравнения нет единственного ответа."
      },
      {
        "q": "Что такое e?",
        "a": "Основание натуральных логарифмов, примерно 2,71828. Оно появляется везде, где рост непрерывен."
      },
      {
        "q": "Зачем строка проверки?",
        "a": "Она подставляет округлённый показатель в степень. Из-за вычислений с плавающей точкой и округления это приближённая проверка, а не доказательство точного равенства. Для целых степеней вроде 2¹⁰ = 1024 совпадение обычно точное."
      }
    ],
    "disclaimer": "Работает с действительными конечными числами. Комплексные логарифмы не поддерживаются; результат и проверка округлены."
  },
  "en": {
    "longDescription": "Finds the exponent to which the base must be raised to give the number. All three modes use one formula, ln x divided by ln b, and the result comes with a check by exponentiation.",
    "howToUse": [
      "Choose common, natural or custom-base logarithm.",
      "Enter a positive number; for a custom base enter a positive base other than one.",
      "Read the exponent and approximate check; fixed-base modes ignore the base field."
    ],
    "howItWorks": "log_b(x) = ln x ÷ ln b; the common and natural modes only fix the base. The number is positive and the base positive and not 1; bases between 0 and 1 are valid. Ordinary decimal output is rounded to six places; very small numbers use scientific notation and the check is approximate.",
    "example": "For x = 1024 and base 2 the result is 10. For x = 4 and base 0.5 the result is −2, since 0.5⁻² = 4. For x = 1 the logarithm is zero for every valid base; x = 0 is invalid.",
    "faq": [
      {
        "q": "Why must the number be positive?",
        "a": "No power of a positive base ever gives zero or a negative number, so the logarithm has no value there."
      },
      {
        "q": "Why can the base not be one?",
        "a": "One raised to any power is still one, so the equation has no single answer."
      },
      {
        "q": "What is e?",
        "a": "The base of natural logarithms, about 2.71828. It appears wherever growth is continuous."
      },
      {
        "q": "What is the check line for?",
        "a": "It raises the base to the rounded exponent. Floating-point arithmetic and rounding make this an approximate check, not a proof of exact equality. Integer powers such as 2¹⁰ = 1024 usually match exactly."
      }
    ],
    "disclaimer": "Uses finite real numbers. Complex logarithms are not supported; the result and check are rounded."
  },
  "uk": {
    "longDescription": "Логарифм відповідає на питання, до якого степеня треба піднести основу, щоб отримати число. Усі три режими рахуються однією формулою — натуральний логарифм числа, поділений на натуральний логарифм основи, — а результат супроводжується перевіркою піднесенням до степеня.",
    "howToUse": [
      "Виберіть десятковий, натуральний логарифм або довільну основу.",
      "Введіть додатне число; у довільному режимі задайте додатну основу, не рівну одиниці.",
      "Прочитайте показник степеня й наближену перевірку; фіксовані режими не використовують поле основи."
    ],
    "howItWorks": "Логарифм рахується як log_b(x) = ln x ÷ ln b. Десятковий і натуральний режими лише фіксують основу: 10 та e ≈ 2,71828. Число має бути строго додатним, бо жоден степінь додатної основи не дає нуля чи від’ємного значення. Число додатне, основа додатна й не дорівнює 1; основи між 0 та 1 допустимі. Звичайний дробовий вивід округлюється до шести знаків; дуже малі числа показано в науковому записі, перевірка наближена.",
    "example": "Для x = 1024 та основи 2 результат 10. Для x = 4 та основи 0,5 результат −2, бо 0,5⁻² = 4. Для x = 1 логарифм дорівнює нулю за будь-якої допустимої основи; x = 0 недопустимий.",
    "faq": [
      {
        "q": "Чому число має бути додатним?",
        "a": "Бо додатна основа в жодному дійсному степені не дає нуля чи від’ємного числа. Логарифм нуля прямує до мінус нескінченності, а логарифма від’ємного серед дійсних немає."
      },
      {
        "q": "Чим натуральний логарифм відрізняється від десяткового?",
        "a": "Лише основою: у натурального це число e ≈ 2,71828, у десяткового — 10. Перехід між ними — множення на сталу, тому форма графіка однакова."
      },
      {
        "q": "Чому основа не може дорівнювати одиниці?",
        "a": "Бо одиниця в будь-якому степені дорівнює одиниці, і рівняння 1ˣ = 5 розв’язку не має. Формально ln 1 = 0, і вийшло б ділення на нуль."
      },
      {
        "q": "Де логарифми потрібні на практиці?",
        "a": "Скрізь, де величина змінюється в рази, а не на однакову величину: децибели, pH, зоряні величини, шкала Ріхтера. Логарифм перетворює множення на додавання."
      }
    ],
    "disclaimer": "Працює зі скінченними дійсними числами. Комплексні логарифми не підтримуються; результат і перевірка округлені."
  },
  "de": {
    "longDescription": "Findet den Exponenten, mit dem die Basis potenziert werden muss, um die Zahl zu ergeben. Alle drei Modi nutzen eine Formel, ln x geteilt durch ln b, und das Ergebnis kommt mit einer Probe durch Potenzieren.",
    "howToUse": [
      "Wähle Zehnerlogarithmus, natürlichen Logarithmus oder eine eigene Basis.",
      "Trage eine positive Zahl ein; eine eigene Basis muss positiv und ungleich eins sein.",
      "Lies Exponent und näherungsweise Probe ab; Modi mit fester Basis ignorieren das Basisfeld."
    ],
    "howItWorks": "log_b(x) = ln x ÷ ln b; die Modi für Zehner- und natürlichen Logarithmus legen nur die Basis fest. Die Zahl ist positiv, die Basis positiv und ungleich 1; Basen zwischen 0 und 1 sind zulässig. Gewöhnliche Dezimalausgaben werden auf sechs Stellen gerundet; sehr kleine Zahlen erscheinen in wissenschaftlicher Schreibweise, die Probe ist näherungsweise.",
    "example": "Bei x = 1024 und Basis 2 ist das Ergebnis 10. Bei x = 4 und Basis 0,5 ist es −2, da 0,5⁻² = 4. Für x = 1 ist der Logarithmus bei jeder zulässigen Basis null; x = 0 ist unzulässig.",
    "faq": [
      {
        "q": "Warum muss die Zahl positiv sein?",
        "a": "Keine Potenz einer positiven Basis ergibt jemals null oder eine negative Zahl, der Logarithmus hat dort also keinen Wert."
      },
      {
        "q": "Warum darf die Basis nicht eins sein?",
        "a": "Eins hoch jeder Potenz bleibt eins, die Gleichung hat also keine einzelne Antwort."
      },
      {
        "q": "Was ist e?",
        "a": "Die Basis der natürlichen Logarithmen, rund 2,71828. Sie taucht überall dort auf, wo Wachstum stetig verläuft."
      },
      {
        "q": "Wozu die Zeile mit der Probe?",
        "a": "Sie potenziert mit dem gerundeten Exponenten. Gleitkommarechnung und Rundung machen daraus eine näherungsweise Probe, keinen Beweis exakter Gleichheit. Ganzzahlige Potenzen wie 2¹⁰ = 1024 stimmen meist exakt überein."
      }
    ],
    "disclaimer": "Verwendet endliche reelle Zahlen. Komplexe Logarithmen werden nicht unterstützt; Ergebnis und Probe sind gerundet."
  },
  "es": {
    "longDescription": "Halla el exponente al que hay que elevar la base para obtener el número. Los tres modos usan una sola fórmula, ln x dividido entre ln b, y el resultado viene con una comprobación por potenciación.",
    "howToUse": [
      "Elige logaritmo decimal, natural o de base personalizada.",
      "Introduce un número positivo; una base personalizada debe ser positiva y distinta de uno.",
      "Consulta el exponente y la comprobación aproximada; los modos de base fija ignoran el campo de base."
    ],
    "howItWorks": "log_b(x) = ln x ÷ ln b; los modos decimal y natural solo fijan la base. El número es positivo y la base positiva y distinta de 1; se admiten bases entre 0 y 1. La salida decimal ordinaria se redondea a seis cifras; los números muy pequeños usan notación científica y la comprobación es aproximada.",
    "example": "Para x = 1024 y base 2, el resultado es 10. Para x = 4 y base 0,5 es −2, pues 0,5⁻² = 4. Para x = 1 el logaritmo es cero con toda base válida; x = 0 no es válido.",
    "faq": [
      {
        "q": "¿Por qué el número debe ser positivo?",
        "a": "Ninguna potencia de una base positiva da cero ni un número negativo, así que ahí el logaritmo no tiene valor."
      },
      {
        "q": "¿Por qué la base no puede ser uno?",
        "a": "Uno elevado a cualquier potencia sigue siendo uno, así que la ecuación no tiene una respuesta única."
      },
      {
        "q": "¿Qué es e?",
        "a": "La base de los logaritmos naturales, aproximadamente 2,71828. Aparece siempre que el crecimiento es continuo."
      },
      {
        "q": "¿Para qué está la línea de comprobación?",
        "a": "Eleva la base al exponente redondeado. El cálculo en coma flotante y el redondeo hacen que sea una comprobación aproximada, no una prueba de igualdad exacta. Potencias enteras como 2¹⁰ = 1024 suelen coincidir exactamente."
      }
    ],
    "disclaimer": "Usa números reales finitos. No admite logaritmos complejos; resultado y comprobación están redondeados."
  }
};
