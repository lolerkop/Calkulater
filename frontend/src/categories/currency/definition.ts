// Категория «Валюты».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "currency",
  order: 1,
  icon: "banknote",
  searchAliases: "валюты курс обмен доллар евро лей mdl usd eur конвертер перевод",
  copy,
  faq,
  guidance: {
    useCases: [
      "Перед поездкой, переводом или сравнением цены в другой валюте.",
      "Когда нужно быстро прикинуть сумму без ручного пересчёта курса.",
      "Для предварительного бюджета, который потом нужно сверить с банком.",
    ],
    checklist: [
      "Проверьте направление обмена: из какой валюты и в какую.",
      "Сверьте сохранённый справочный курс с коммерческим курсом банка или обменника.",
      "Учитывайте комиссии, спред и лимиты перевода отдельно.",
    ],
    mistakes: [
      "Принимать справочный курс за гарантированный курс покупки или продажи.",
      "Менять местами валюту списания и валюту получения.",
      "Забывать про комиссию банка, платёжной системы или обменника.",
    ],
  },
  editorial: {
    ru: "Это сохранённый справочный, а не коммерческий курс покупки или продажи. Резервный источник отмечен отдельно; банк может применять спред и комиссию.",
    en: "These are saved reference rates, not live commercial buy or sell quotes. Fallback sources are marked; banks may add a spread and fees.",
    uk: "Це збережені довідкові, а не комерційні курси купівлі чи продажу. Резервне джерело позначено окремо; банк може застосовувати спред і комісію.",
    de: "Dies sind gespeicherte Referenzkurse, keine handelbaren An- oder Verkaufskurse. Ersatzquellen sind gekennzeichnet; Banken können Spread und Gebühren aufschlagen.",
    es: "Se usan tipos de referencia guardados, no ofertas de compra o venta. Las fuentes de reserva se señalan; los bancos aplican sus propios tipos y comisiones.",
  },
};
