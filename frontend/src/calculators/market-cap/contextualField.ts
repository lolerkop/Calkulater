import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "shares": "Положительное целое число акций в обращении; не среднее для EPS.",
    "price": "Одна введённая цена за тот же класс акций; котировка не загружается."
  },
  "en": {
    "shares": "Positive whole shares outstanding, not the weighted EPS average.",
    "price": "One entered quote for the same share class; no live quote is fetched."
  },
  "uk": {
    "shares": "Додатне ціле число акцій в обігу, не середнє для EPS.",
    "price": "Одна введена ціна того самого класу; котирування не завантажується."
  },
  "de": {
    "shares": "Positive ganze ausstehende Aktien, kein EPS-Durchschnitt.",
    "price": "Ein eingegebener Kurs derselben Klasse; kein Live-Abruf."
  },
  "es": {
    "shares": "Acciones en circulación enteras positivas, no media ponderada del BPA.",
    "price": "Un precio de la misma clase; no se obtiene cotización en vivo."
  }
});
