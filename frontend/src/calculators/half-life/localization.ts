import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';
import { auxiliaryScalarValues } from '../../lib/platform/auxiliaryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "n0": "Ausgangsmenge",
      "half": "Halbwertszeit",
      "t": "Verstrichene Zeit",
      "left": "Gewünschter Rest"
    },
    "options": {
      "remaining": "Rest nach einer Zeit",
      "time": "Zeit bis zu einem Rest"
    },
    "results": {
      "Остаток": "Rest",
      "Время": "Zeit",
      "Распалось": "Zerfallen",
      "Осталось доли": "Verbliebener Anteil",
      "Периодов полураспада прошло": "Verstrichene Halbwertszeiten",
      "Периодов полураспада": "Halbwertszeiten",
      "Среднее время жизни": "Mittlere Lebensdauer",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...mechanicsScalarValues.de,
      ...auxiliaryScalarValues.de,
      "г": "g",
      "лет": "Jahre",
      "%": "%",
      "Выберите режим расчёта из списка": "Wähle einen Rechenmodus aus der Liste",
      "Период полураспада должен быть больше нуля": "Die Halbwertszeit muss größer als null sein",
      "Исходное количество должно быть больше нуля": "Die Ausgangsmenge muss größer als null sein",
      "Время не может быть отрицательным": "Die verstrichene Zeit kann nicht negativ sein",
      "Остаток должен быть больше нуля": "Der Rest muss größer als null sein",
      "Остаток не может превышать исходное количество": "Der Rest kann die Ausgangsmenge nicht übersteigen"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "n0": "Initial amount",
      "half": "Half-life",
      "t": "Time elapsed",
      "left": "Remainder wanted"
    },
    "options": {
      "remaining": "remaining after time",
      "time": "time to remainder"
    },
    "results": {
      "Остаток": "Remaining",
      "Время": "Time",
      "Распалось": "Decayed",
      "Осталось доли": "Fraction left",
      "Периодов полураспада прошло": "Half-lives elapsed",
      "Периодов полураспада": "Half-lives",
      "Среднее время жизни": "Mean lifetime",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...mechanicsScalarValues.en,
      ...auxiliaryScalarValues.en,
      "г": "g",
      "лет": "years",
      "%": "%",
      "Выберите режим расчёта из списка": "Choose a calculation mode from the list",
      "Период полураспада должен быть больше нуля": "The half-life must be greater than zero",
      "Исходное количество должно быть больше нуля": "The initial amount must be greater than zero",
      "Время не может быть отрицательным": "The elapsed time cannot be negative",
      "Остаток должен быть больше нуля": "The remainder must be greater than zero",
      "Остаток не может превышать исходное количество": "The remainder cannot exceed the initial amount"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що шукаємо",
      "n0": "Початкова кількість",
      "half": "Період напіврозпаду",
      "t": "Минуло часу",
      "left": "Потрібний залишок"
    },
    "options": {
      "remaining": "залишок через час",
      "time": "час до залишку"
    },
    "results": {
      "Остаток": "Залишок",
      "Время": "Час",
      "Распалось": "Розпалося",
      "Осталось доли": "Залишилася частка",
      "Периодов полураспада прошло": "Періодів напіврозпаду минуло",
      "Периодов полураспада": "Періодів напіврозпаду",
      "Среднее время жизни": "Середній час життя",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      ...auxiliaryScalarValues.uk,
      "г": "г",
      "лет": "років",
      "%": "%",
      "Выберите режим расчёта из списка": "Оберіть режим розрахунку зі списку",
      "Период полураспада должен быть больше нуля": "Період напіврозпаду має бути більшим за нуль",
      "Исходное количество должно быть больше нуля": "Початкова кількість має бути більшою за нуль",
      "Время не может быть отрицательным": "Час не може бути відʼємним",
      "Остаток должен быть больше нуля": "Залишок має бути більшим за нуль",
      "Остаток не может превышать исходное количество": "Залишок не може перевищувати початкову кількість"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "n0": "Cantidad inicial",
      "half": "Semivida",
      "t": "Tiempo transcurrido",
      "left": "Resto deseado"
    },
    "options": {
      "remaining": "cantidad tras un tiempo",
      "time": "tiempo hasta un resto"
    },
    "results": {
      "Остаток": "Resto",
      "Время": "Tiempo",
      "Распалось": "Desintegrado",
      "Осталось доли": "Fracción restante",
      "Периодов полураспада прошло": "Semividas transcurridas",
      "Периодов полураспада": "Semividas",
      "Среднее время жизни": "Vida media",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...mechanicsScalarValues.es,
      ...auxiliaryScalarValues.es,
      "г": "g",
      "лет": "años",
      "%": "%",
      "Выберите режим расчёта из списка": "Elige un modo de cálculo de la lista",
      "Период полураспада должен быть больше нуля": "La semivida debe ser mayor que cero",
      "Исходное количество должно быть больше нуля": "La cantidad inicial debe ser mayor que cero",
      "Время не может быть отрицательным": "El tiempo transcurrido no puede ser negativo",
      "Остаток должен быть больше нуля": "El resto debe ser mayor que cero",
      "Остаток не может превышать исходное количество": "El resto no puede superar a la cantidad inicial"
    }
  }
};
