import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "v0": "Anfangsgeschwindigkeit",
      "v": "Endgeschwindigkeit",
      "a": "Beschleunigung",
      "t": "Zeit"
    },
    "options": {
      "a": "die Beschleunigung",
      "v": "die Endgeschwindigkeit"
    },
    "results": {
      "Ускорение": "Beschleunigung",
      "Конечная скорость": "Endgeschwindigkeit",
      "Изменение скорости": "Geschwindigkeitsänderung",
      "Пройденный путь": "Zurückgelegter Weg",
      "Время": "Zeit",
      "Проверьте данные": "Prüfe die Werte",
      "Перемещение": "Verschiebung"
    },
    "values": {
      ...mechanicsScalarValues.de,
      "м/с²": "m/s²",
      "м/с": "m/s",
      "м": "m",
      "с": "s",
      "Время должно быть больше нуля": "Die Zeit muss größer als null sein"
    }
  },
  "en": {
    "fields": {
      "mode": "What to find",
      "v0": "Initial velocity",
      "v": "Final velocity",
      "a": "Acceleration",
      "t": "Time"
    },
    "options": {
      "a": "acceleration",
      "v": "final velocity"
    },
    "results": {
      "Ускорение": "Acceleration",
      "Конечная скорость": "Final velocity",
      "Изменение скорости": "Change in velocity",
      "Пройденный путь": "Distance travelled",
      "Время": "Time",
      "Проверьте данные": "Check the values",
      "Перемещение": "Displacement"
    },
    "values": {
      ...mechanicsScalarValues.en,
      "м/с²": "m/s²",
      "м/с": "m/s",
      "м": "m",
      "с": "s",
      "Время должно быть больше нуля": "The time must be greater than zero"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "v0": "Початкова швидкість",
      "v": "Кінцева швидкість",
      "a": "Прискорення",
      "t": "Час"
    },
    "options": {
      "a": "прискорення",
      "v": "кінцева швидкість"
    },
    "results": {
      "Ускорение": "Прискорення",
      "Конечная скорость": "Кінцева швидкість",
      "Изменение скорости": "Зміна швидкості",
      "Пройденный путь": "Пройдений шлях",
      "Время": "Час",
      "Проверьте данные": "Перевірте дані",
      "Перемещение": "Переміщення"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      "м/с²": "м/с²",
      "м/с": "м/с",
      "м": "м",
      "с": "с",
      "Время должно быть больше нуля": "Час має бути більшим за нуль"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "v0": "Velocidad inicial",
      "v": "Velocidad final",
      "a": "Aceleración",
      "t": "Tiempo"
    },
    "options": {
      "a": "aceleración",
      "v": "velocidad final"
    },
    "results": {
      "Ускорение": "Aceleración",
      "Конечная скорость": "Velocidad final",
      "Изменение скорости": "Cambio de velocidad",
      "Пройденный путь": "Distancia recorrida",
      "Время": "Tiempo",
      "Проверьте данные": "Revisa los datos",
      "Перемещение": "Desplazamiento"
    },
    "values": {
      ...mechanicsScalarValues.es,
      "м/с²": "m/s²",
      "м/с": "m/s",
      "м": "m",
      "с": "s",
      "Время должно быть больше нуля": "El tiempo debe ser mayor que cero"
    }
  }
};
