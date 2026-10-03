import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "revenue": "Revenue",
      "cost": "Ad spend",
      "margin": "Margin before ads, %"
    },
    "results": {
      "ROAS": "ROAS",
      "ROAS в процентах": "ROAS as a percentage",
      "ROI": "ROI",
      "Прибыль": "Profit",
      "Точка окупаемости по доходу": "Break-even revenue",
      "ROAS по валовой марже": "ROAS on gross margin",
      "Проверьте данные": "Check the values",
      "Доходность рекламного расхода": "Return on ad spend after included costs",
      "Остаток после учтённых затрат и рекламы": "Remainder after included costs and ads",
      "ROAS для покрытия рекламы": "ROAS needed to cover advertising"
    },
    "values": {
      ...marketingScalarValues.en,
      "₽": "$",
      "Доход не может быть отрицательным": "Revenue cannot be negative",
      "Расход должен быть больше нуля": "The spend must be greater than zero",
      "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "Margin is set between 0 and 100 percent",
      "Количество не может быть отрицательным": "The count cannot be negative",
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Расходы не могут быть отрицательными": "Spend cannot be negative",
      "При нулевой марже конечного порога покрытия рекламы нет.": "With zero margin there is no finite revenue threshold for covering ads."
    }
  },
  "uk": {
    "fields": {
      "revenue": "Дохід",
      "cost": "Витрати на рекламу",
      "margin": "Маржа до реклами, %"
    },
    "results": {
      "ROAS": "ROAS",
      "ROAS в процентах": "ROAS у відсотках",
      "ROI": "ROI",
      "Прибыль": "Прибуток",
      "Точка окупаемости по доходу": "Точка окупності за доходом",
      "ROAS по валовой марже": "ROAS за валовою маржею",
      "Проверьте данные": "Перевірте дані",
      "Доходность рекламного расхода": "Дохідність рекламних витрат",
      "Остаток после учтённых затрат и рекламы": "Залишок після врахованих витрат і реклами",
      "ROAS для покрытия рекламы": "ROAS для покриття реклами"
    },
    "values": {
      ...marketingScalarValues.uk,
      "₽": "₴",
      "Доход не может быть отрицательным": "Дохід не може бути від’ємним",
      "Расход должен быть больше нуля": "Витрати мають бути більшими за нуль",
      "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "Маржа задається в діапазоні від 0 до 100 відсотків",
      "Количество не может быть отрицательным": "Кількість не може бути від’ємною",
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Расходы не могут быть отрицательными": "Витрати не можуть бути від’ємними",
      "При нулевой марже конечного порога покрытия рекламы нет.": "За нульової маржі немає скінченного порога виторгу для покриття реклами."
    }
  },
  "de": {
    "fields": {
      "revenue": "Umsatz",
      "cost": "Werbeausgaben",
      "margin": "Marge vor Werbung, %"
    },
    "results": {
      "ROAS": "ROAS",
      "ROAS в процентах": "ROAS in Prozent",
      "ROI": "ROI",
      "Прибыль": "Gewinn",
      "Точка окупаемости по доходу": "Umsatz am Break-even",
      "ROAS по валовой марже": "ROAS auf die Rohmarge",
      "Проверьте данные": "Prüfe die Werte",
      "Доходность рекламного расхода": "Rendite der Werbeausgaben",
      "Остаток после учтённых затрат и рекламы": "Rest nach berücksichtigten Kosten und Werbung",
      "ROAS для покрытия рекламы": "ROAS zur Deckung der Werbung"
    },
    "values": {
      ...marketingScalarValues.de,
      "₽": "€",
      "Доход не может быть отрицательным": "Der Umsatz kann nicht negativ sein",
      "Расход должен быть больше нуля": "Die Ausgaben müssen größer als null sein",
      "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "Die Marge liegt im Bereich von 0 bis 100 Prozent",
      "Количество не может быть отрицательным": "Die Anzahl darf nicht negativ sein",
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Расходы не могут быть отрицательными": "Die Ausgaben dürfen nicht negativ sein",
      "При нулевой марже конечного порога покрытия рекламы нет.": "Bei null Marge gibt es keinen endlichen Umsatz zur Deckung der Werbung."
    }
  },
  "es": {
    "fields": {
      "revenue": "Ingresos",
      "cost": "Inversión publicitaria",
      "margin": "Margen antes de publicidad, %"
    },
    "options": {},
    "results": {
      "ROAS": "ROAS",
      "ROAS в процентах": "ROAS en porcentaje",
      "ROI": "ROI",
      "Прибыль": "Beneficio",
      "Точка окупаемости по доходу": "Ingresos de equilibrio",
      "ROAS по валовой марже": "ROAS sobre margen bruto",
      "Проверьте данные": "Revisa los datos",
      "Доходность рекламного расхода": "Rentabilidad del gasto publicitario",
      "Остаток после учтённых затрат и рекламы": "Resto tras costes incluidos y publicidad",
      "ROAS для покрытия рекламы": "ROAS necesario para cubrir publicidad"
    },
    "values": {
      ...marketingScalarValues.es,
      "₽": "€",
      "Доход не может быть отрицательным": "Los ingresos no pueden ser negativos",
      "Расход должен быть больше нуля": "La inversión debe ser mayor que cero",
      "Маржинальность задаётся в диапазоне от 0 до 100 процентов": "El margen se fija entre 0 y 100 por ciento",
      "Количество не может быть отрицательным": "El recuento no puede ser negativo",
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Расходы не могут быть отрицательными": "El gasto no puede ser negativo",
      "При нулевой марже конечного порога покрытия рекламы нет.": "Con margen cero no hay un umbral finito de ingresos para cubrir publicidad."
    }
  }
};
