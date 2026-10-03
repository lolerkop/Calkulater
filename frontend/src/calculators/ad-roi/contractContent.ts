// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Показывает две оценки по выручке кампании и расходам только на рекламу: ROAS и упрощённый ROI. Разница «выручка минус реклама» не учитывает себестоимость товара, комиссии и другие расходы, поэтому не является чистой прибылью бизнеса.",
    "howToUse": [
      "Введите выручку, отнесённую к этой рекламной кампании.",
      "Введите положительные расходы на ту же кампанию в той же денежной единице.",
      "Сравните ROAS и упрощённый ROI: строка разницы вычитает только рекламу."
    ],
    "howItWorks": "ROAS = выручка ÷ расходы на рекламу. Упрощённый ROI = (выручка − расходы на рекламу) ÷ расходы на рекламу × 100. ROAS 2 : 1 соответствует ROI 100%, однако положительная разница здесь не доказывает прибыль после всех затрат.",
    "example": "Выручка 200 000 и реклама 50 000: ROAS 4 : 1, упрощённый ROI 300%, разница 150 000. Нулевая выручка при тех же расходах: ROAS 0 : 1, ROI −100%.",
    "faq": [
      {
        "q": "Какой показатель использовать?",
        "a": "ROAS показывает выручку на единицу расходов на рекламу. Упрощённый ROI показывает превышение этой выручки над рекламой относительно рекламных расходов. Оба требуют одинакового правила атрибуции и не учитывают все затраты бизнеса."
      },
      {
        "q": "Где точка окупаемости?",
        "a": "ROAS 1 и ROI 0% означают покрытие только рекламных расходов. Если есть себестоимость и комиссии, точка безубыточности бизнеса выше и эта форма её не рассчитывает."
      },
      {
        "q": "Вычитать ли себестоимость из выручки?",
        "a": "Для обычного ROAS вводите выручку, не прибыль. Если вы вычтете себестоимость, строка ROAS станет другим показателем. Для ROI по всем затратам отдельно соберите полную сумму затрат и используйте калькулятор ROI."
      },
      {
        "q": "Почему ROI бывает −100 %?",
        "a": "Кампания не принесла выручки вовсе, и все расходы потеряны."
      }
    ],
    "disclaimer": "Не учитывает себестоимость, комиссии, налоги и стоимость привлечения вне введённой рекламы. Атрибуцию выручки задаёт пользователь."
  },
  "en": {
    "longDescription": "Shows ROAS and a simplified ROI using campaign revenue and advertising spend only. Revenue minus advertising spend excludes product costs, fees and other expenses, so it is not net business profit.",
    "howToUse": [
      "Enter revenue attributed to this advertising campaign.",
      "Enter positive advertising spend for the same campaign in the same monetary unit.",
      "Compare ROAS with the simplified ROI; the difference subtracts advertising spend only."
    ],
    "howItWorks": "ROAS = revenue ÷ advertising spend. Simplified ROI = (revenue − advertising spend) ÷ advertising spend × 100. ROAS of 2 : 1 corresponds to ROI of 100%, but a positive difference does not prove profit after all costs.",
    "example": "Revenue 200,000 and advertising 50,000: ROAS 4 : 1, simplified ROI 300%, difference 150,000. Zero revenue with the same spend gives ROAS 0 : 1 and ROI −100%.",
    "faq": [
      {
        "q": "Which figure should I use?",
        "a": "ROAS shows revenue per unit of advertising spend. Simplified ROI shows the excess of that revenue over advertising relative to advertising spend. Both require consistent attribution and exclude other business costs."
      },
      {
        "q": "Where is break-even?",
        "a": "ROAS 1 and ROI 0% cover advertising spend only. With product costs and fees, business break-even is higher and this form does not calculate it."
      },
      {
        "q": "Should revenue be net of cost of goods?",
        "a": "Use revenue, not profit, for conventional ROAS. Subtracting product costs changes what the ROAS row measures. For ROI based on all costs, collect the full cost total separately and use the ROI calculator."
      },
      {
        "q": "Why can ROI be −100%?",
        "a": "The campaign brought no revenue at all, so the entire spend was lost."
      }
    ],
    "disclaimer": "Excludes product costs, fees, taxes and acquisition costs outside the entered advertising spend. Revenue attribution is supplied by the user."
  },
  "uk": {
    "longDescription": "Показує ROAS і спрощений ROI за виторгом кампанії та витратами лише на рекламу. Різниця «виторг мінус реклама» не враховує собівартість товару, комісії та інші витрати, тому не є чистим прибутком бізнесу.",
    "howToUse": [
      "Введіть виторг, віднесений до цієї рекламної кампанії.",
      "Введіть додатні рекламні витрати тієї самої кампанії в тій самій грошовій одиниці.",
      "Порівняйте ROAS зі спрощеним ROI: рядок різниці віднімає лише рекламу."
    ],
    "howItWorks": "ROAS = виторг ÷ рекламні витрати. Спрощений ROI = (виторг − рекламні витрати) ÷ рекламні витрати × 100. ROAS 2 : 1 відповідає ROI 100%, проте додатна різниця не доводить прибуток після всіх витрат.",
    "example": "Виторг 200 000 і реклама 50 000: ROAS 4 : 1, спрощений ROI 300%, різниця 150 000. Нульовий виторг за тих самих витрат: ROAS 0 : 1, ROI −100%.",
    "faq": [
      {
        "q": "Чому ROAS 3 — це ROI 200 %, а не 300 %?",
        "a": "ROAS 3 означає три одиниці виторгу на одну одиницю реклами. Після віднімання лише реклами лишаються дві: спрощений ROI 200%. Це ще не чистий прибуток після собівартості та інших витрат."
      },
      {
        "q": "Який показник брати для рішення?",
        "a": "ROAS описує виторг відносно реклами. Навіть додатний спрощений ROI не доводить прибуток: за маржинального доходу до реклами 30% виторгу ROAS 3 дає 0,9 одиниці на одну одиницю реклами, тобто збиток."
      },
      {
        "q": "Чому ROAS може обманювати?",
        "a": "ROAS не містить собівартість. За однакових рекламних витрат ROAS 4 і маржинальний дохід до реклами 20% дають 0,8 витрат, а ROAS 2 і 60% — 1,2. Важлива база маржі; форма її не приймає."
      },
      {
        "q": "Який ROAS вважати достатнім?",
        "a": "Якщо частка маржинального доходу до реклами становить m і решта змінних витрат уже врахована, покриття реклами потребує ROAS = 1 ÷ m. За 25% це 4, за 50% — 2. Постійні витрати та атрибуцію треба оцінювати окремо."
      }
    ],
    "disclaimer": "Не враховує собівартість, комісії, податки й залучення поза введеною рекламою. Атрибуцію виторгу задає користувач."
  },
  "de": {
    "longDescription": "Zeigt ROAS und einen vereinfachten ROI aus Kampagnenumsatz und reinen Werbekosten. Umsatz abzüglich Werbekosten enthält weder Warenkosten noch Gebühren oder andere Ausgaben und ist daher kein Nettogewinn des Unternehmens.",
    "howToUse": [
      "Trage den dieser Werbekampagne zugeordneten Umsatz ein.",
      "Trage positive Werbekosten derselben Kampagne in derselben Geldeinheit ein.",
      "Vergleiche ROAS und vereinfachten ROI; die Differenz zieht nur Werbekosten ab."
    ],
    "howItWorks": "ROAS = Umsatz ÷ Werbekosten. Vereinfachter ROI = (Umsatz − Werbekosten) ÷ Werbekosten × 100. ROAS 2 : 1 entspricht ROI 100%, eine positive Differenz belegt jedoch keinen Gewinn nach sämtlichen Kosten.",
    "example": "Umsatz 200 000 und Werbung 50 000: ROAS 4 : 1, vereinfachter ROI 300%, Differenz 150 000. Null Umsatz bei denselben Kosten: ROAS 0 : 1, ROI −100%.",
    "faq": [
      {
        "q": "Welche Zahl soll ich verwenden?",
        "a": "ROAS zeigt Umsatz je Einheit Werbekosten. Der vereinfachte ROI zeigt den Überschuss des Umsatzes über Werbung relativ zu Werbekosten. Beide verlangen gleiche Zuordnung und lassen andere Geschäftskosten weg."
      },
      {
        "q": "Wo liegt der Break-even?",
        "a": "ROAS 1 und ROI 0% decken nur Werbung. Mit Warenkosten und Gebühren liegt die geschäftliche Gewinnschwelle höher; dieses Formular berechnet sie nicht."
      },
      {
        "q": "Soll der Umsatz um den Wareneinsatz gemindert sein?",
        "a": "Verwende für üblichen ROAS Umsatz statt Gewinn. Ein Abzug von Warenkosten verändert die Bedeutung der ROAS-Zeile. Sammle für ROI auf sämtliche Kosten die vollständigen Kosten separat und nutze den ROI-Rechner."
      },
      {
        "q": "Warum kann der ROI −100 % betragen?",
        "a": "Die Kampagne hat überhaupt keinen Umsatz gebracht, die gesamten Kosten sind also verloren."
      }
    ],
    "disclaimer": "Warenkosten, Gebühren, Steuern und weitere Akquisitionskosten sind nicht enthalten. Die Umsatzzuordnung legt der Nutzer fest."
  },
  "es": {
    "longDescription": "Muestra ROAS y un ROI simplificado con los ingresos de la campaña y solo el gasto publicitario. Ingresos menos publicidad excluye el coste de productos, comisiones y otros gastos; no es el beneficio neto del negocio.",
    "howToUse": [
      "Introduce los ingresos atribuidos a esta campaña publicitaria.",
      "Introduce el gasto publicitario positivo de la misma campaña y en la misma unidad monetaria.",
      "Compara ROAS y ROI simplificado; la diferencia resta solo el gasto publicitario."
    ],
    "howItWorks": "ROAS = ingresos ÷ gasto publicitario. ROI simplificado = (ingresos − gasto publicitario) ÷ gasto publicitario × 100. ROAS de 2 : 1 corresponde a ROI del 100%, pero una diferencia positiva no demuestra beneficio tras todos los costes.",
    "example": "Ingresos 200 000 y publicidad 50 000: ROAS 4 : 1, ROI simplificado 300%, diferencia 150 000. Ingresos cero con el mismo gasto: ROAS 0 : 1, ROI −100%.",
    "faq": [
      {
        "q": "¿Qué cifra debo usar?",
        "a": "ROAS muestra ingresos por unidad de gasto publicitario. El ROI simplificado mide el exceso de ingresos sobre publicidad respecto a ese gasto. Ambos requieren una atribución coherente y excluyen otros costes del negocio."
      },
      {
        "q": "¿Dónde está el umbral de rentabilidad?",
        "a": "ROAS 1 y ROI 0% cubren solo publicidad. Con productos y comisiones, el umbral real del negocio es mayor y este formulario no lo calcula."
      },
      {
        "q": "¿Los ingresos deben ir netos del coste de la mercancía?",
        "a": "Usa ingresos, no beneficio, para el ROAS habitual. Restar el coste de productos cambia el significado de esa fila. Para ROI sobre todos los costes, reúne el coste total por separado y usa la calculadora de ROI."
      },
      {
        "q": "¿Por qué el ROI puede ser del −100 %?",
        "a": "La campaña no trajo ningún ingreso, así que se perdió toda la inversión."
      }
    ],
    "disclaimer": "Excluye productos, comisiones, impuestos y captación fuera de la publicidad indicada. El usuario aporta la atribución de ingresos."
  }
};
