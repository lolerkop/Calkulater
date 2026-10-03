// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Средний чек — выручка на один заказ. Он помогает сравнить размер заказов по каналам или периодам при одинаковом учёте возвратов, налогов и доставки. Рост среднего чека сам по себе не показывает рост прибыли: скидки, наборы и бесплатная доставка могут изменить затраты.",
    "howToUse": [
      "Выберите один период и правило учёта возвратов, налогов и доставки.",
      "Введите выручку и положительное целое число заказов, которые её сформировали.",
      "Прочитайте средний чек; для сравнения периодов сохраняйте правило учёта."
    ],
    "howItWorks": "AOV = выручка ÷ заказы, обе величины за один период.",
    "example": "Выручка 250 000 при 200 заказах даёт средний чек 1250. Нулевая выручка при 200 заказах даёт ноль; ноль заказов не имеет среднего чека.",
    "faq": [
      {
        "q": "Вычитать ли возвраты?",
        "a": "Если нужен чистый средний чек, берите выручку после возвратов и считайте только завершённые заказы. Важно, чтобы обе величины следовали одному правилу."
      },
      {
        "q": "Почему число заказов должно быть целым?",
        "a": "Половины заказа не бывает; дробное значение означает, что период или источник данных взяты неверно."
      },
      {
        "q": "Включать ли доставку?",
        "a": "Это ваш выбор, но держите его одинаковым между периодами, иначе динамика потеряет смысл."
      },
      {
        "q": "Что поднимает средний чек?",
        "a": "Наборы, допродажи и порог бесплатной доставки могут увеличить заказ. Они также могут менять скидки, себестоимость и логистику, поэтому проверяйте маржинальный доход, а не обещайте бесплатный рост прибыли."
      }
    ],
    "disclaimer": "Средний чек не показывает медиану, прибыль или распределение заказов. Правило учёта выручки задаёте вы."
  },
  "en": {
    "longDescription": "Average order value is revenue per order. It compares basket sizes across channels or periods when refunds, tax and delivery follow the same accounting policy. A higher average does not by itself mean higher profit: discounts, bundles and free delivery can change costs.",
    "howToUse": [
      "Choose a period and a consistent policy for refunds, tax and delivery.",
      "Enter revenue and the positive whole count of orders that generated it.",
      "Read average order value; keep the accounting policy when comparing periods."
    ],
    "howItWorks": "AOV = revenue ÷ orders, both taken over the same period.",
    "example": "Revenue 250,000 across 200 orders gives AOV 1,250. Zero revenue across 200 orders gives zero; zero orders have no average order value.",
    "faq": [
      {
        "q": "Should returns be subtracted?",
        "a": "If you want net AOV, use revenue after returns and count only completed orders. What matters is that both figures follow one rule."
      },
      {
        "q": "Why must orders be whole?",
        "a": "There is no half order; a fractional count means the period or the data source is wrong."
      },
      {
        "q": "Does AOV include delivery?",
        "a": "That is your choice, but keep it consistent across periods or the trend becomes meaningless."
      },
      {
        "q": "What raises average order value?",
        "a": "Bundles, cross-selling and free-delivery thresholds can enlarge baskets. They can also change discounts, product and logistics costs, so check contribution margin rather than assuming profit grows at no cost."
      }
    ],
    "disclaimer": "AOV does not show the median, profit or order distribution. You choose the revenue accounting policy."
  },
  "uk": {
    "longDescription": "Середній чек — виторг на одне замовлення. Він допомагає порівняти розмір замовлень між каналами або періодами за однакового обліку повернень, податків і доставки. Зростання чека саме по собі не означає зростання прибутку: знижки, комплекти й безкоштовна доставка можуть змінювати витрати.",
    "howToUse": [
      "Виберіть період і єдине правило обліку повернень, податків та доставки.",
      "Введіть виторг і додатну цілу кількість замовлень, що його сформували.",
      "Прочитайте середній чек; для порівняння періодів зберігайте правило обліку."
    ],
    "howItWorks": "Середній чек дорівнює виторг ÷ замовлення, обидві величини за один період. Змішування періодів — найчастіша помилка: виторг за місяць, поділений на замовлення за тиждень, дає число, яке нічого не описує.",
    "example": "Виторг 250 000 за 200 замовлень дає середній чек 1250. Нульовий виторг за 200 замовлень дає нуль; за нуля замовлень середній чек не визначений.",
    "faq": [
      {
        "q": "Чому середній чек важливіший за кількість замовлень?",
        "a": "Жоден із цих показників не завжди важливіший. За сталої кількості замовлень приріст чека на 10% дає 10% виторгу, але прибуток залежить від маржі й витрат. Залучення та розмір кошика оцінюйте разом."
      },
      {
        "q": "Чи спотворюють середнє великі замовлення?",
        "a": "Так, і сильно. Одне оптове замовлення може підняти середній чек місяця, хоча роздрібна поведінка не змінилася. Поруч корисно дивитися на медіану."
      },
      {
        "q": "Чим підняти середній чек?",
        "a": "Комплектами, супутніми товарами, переходом на дорожчу позицію або порогом безкоштовної доставки. Їхній ефект потрібно перевіряти: знижка чи додаткова доставка можуть зменшити маржу навіть за вищого чека."
      },
      {
        "q": "Виторг брати з ПДВ чи без?",
        "a": "ПДВ і доставка враховуються за вашим правилом; зберігайте його між періодами. Для звірки з касою та аналізу продажів можуть бути потрібні різні бази. Форма не виділяє податки автоматично."
      }
    ],
    "disclaimer": "Середній чек не показує медіану, прибуток чи розподіл замовлень. Правило обліку виторгу задаєте ви."
  },
  "de": {
    "longDescription": "Der durchschnittliche Bestellwert ist der Umsatz je Bestellung. Er vergleicht Warenkörbe zwischen Kanälen oder Zeiträumen bei gleicher Behandlung von Erstattungen, Steuern und Versand. Ein höherer Wert bedeutet nicht automatisch mehr Gewinn: Rabatte, Sets und kostenloser Versand können die Kosten verändern.",
    "howToUse": [
      "Wähle einen Zeitraum und eine einheitliche Behandlung von Erstattungen, Steuern und Versand.",
      "Trage den Umsatz und die positive ganze Anzahl der zugehörigen Bestellungen ein.",
      "Lies den durchschnittlichen Bestellwert ab; behalte die Regeln bei Zeitvergleichen bei."
    ],
    "howItWorks": "Bestellwert = Umsatz ÷ Bestellungen, beides über denselben Zeitraum genommen.",
    "example": "Umsatz 250 000 bei 200 Bestellungen ergibt 1250 je Bestellung. Null Umsatz bei 200 Bestellungen ergibt null; bei null Bestellungen gibt es keinen Durchschnittswert.",
    "faq": [
      {
        "q": "Sollen Rücksendungen abgezogen werden?",
        "a": "Willst du den Nettowert, nimm den Umsatz nach Rücksendungen und zähle nur abgeschlossene Bestellungen. Wichtig ist, dass beide Zahlen einer Regel folgen."
      },
      {
        "q": "Warum müssen die Bestellungen ganzzahlig sein?",
        "a": "Eine halbe Bestellung gibt es nicht; eine gebrochene Zahl heißt, dass der Zeitraum oder die Datenquelle nicht stimmt."
      },
      {
        "q": "Ist der Versand im Bestellwert enthalten?",
        "a": "Das entscheidest du, aber halte es über die Zeiträume hinweg gleich, sonst verliert der Verlauf seinen Sinn."
      },
      {
        "q": "Was hebt den durchschnittlichen Bestellwert?",
        "a": "Sets, Zusatzverkäufe und Versandfreigrenzen können Warenkörbe vergrößern. Sie verändern möglicherweise Rabatte, Waren- und Logistikkosten. Prüfe den Deckungsbeitrag statt kostenlosen Gewinnzuwachs anzunehmen."
      }
    ],
    "disclaimer": "Der Durchschnitt zeigt weder Median noch Gewinn oder Verteilung der Bestellungen. Du bestimmst die Umsatzbasis."
  },
  "es": {
    "longDescription": "El ticket medio es el ingreso por pedido. Permite comparar cestas entre canales o periodos con el mismo criterio de reembolsos, impuestos y envío. Un ticket mayor no implica por sí solo más beneficio: descuentos, lotes y envío gratuito pueden cambiar los costes.",
    "howToUse": [
      "Elige un periodo y un criterio constante para reembolsos, impuestos y envío.",
      "Introduce los ingresos y el número entero positivo de pedidos que los generaron.",
      "Consulta el ticket medio; conserva el mismo criterio al comparar periodos."
    ],
    "howItWorks": "Ticket medio = ingresos ÷ pedidos, ambos tomados en el mismo periodo.",
    "example": "Ingresos 250 000 en 200 pedidos dan un ticket medio de 1250. Ingresos cero en 200 pedidos dan cero; con cero pedidos no hay ticket medio.",
    "faq": [
      {
        "q": "¿Hay que restar las devoluciones?",
        "a": "Si quieres el ticket medio neto, usa los ingresos tras devoluciones y cuenta solo los pedidos completados. Lo que importa es que ambas cifras sigan una misma regla."
      },
      {
        "q": "¿Por qué los pedidos deben ser un número entero?",
        "a": "No existe medio pedido; un recuento fraccionario significa que el periodo o la fuente de datos están mal."
      },
      {
        "q": "¿El ticket medio incluye el envío?",
        "a": "Eso lo eliges tú, pero mantenlo constante entre periodos o la tendencia pierde sentido."
      },
      {
        "q": "¿Qué sube el ticket medio?",
        "a": "Los lotes, la venta cruzada y los umbrales de envío gratuito pueden ampliar la cesta. También pueden cambiar descuentos y costes de productos y logística: revisa el margen, sin suponer que el beneficio crece gratis."
      }
    ],
    "disclaimer": "El ticket medio no muestra mediana, beneficio ni distribución de pedidos. Tú eliges el criterio de ingresos."
  }
};
