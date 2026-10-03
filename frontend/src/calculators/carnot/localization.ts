import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "tHot": "Temperatur des warmen Reservoirs",
      "tCold": "Temperatur des kalten Reservoirs"
    },
    "results": {
      "Предельный КПД": "Höchstwirkungsgrad",
      "Полезная работа из 1000 Дж тепла": "Nutzarbeit aus 1000 J Wärme",
      "Отдано холодильнику": "An das kalte Reservoir abgegeben",
      "Перепад температур": "Temperaturunterschied",
      "Отношение температур": "Verhältnis der Temperaturen",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      "Дж": "J",
      "К": "K",
      "Температура нагревателя должна быть больше нуля кельвинов": "Die Temperatur des warmen Reservoirs muss über null Kelvin liegen",
      "Температура холодильника должна быть больше нуля кельвинов": "Die Temperatur des kalten Reservoirs muss über null Kelvin liegen",
      "Холодильник не может быть теплее нагревателя": "Das kalte Reservoir kann nicht wärmer sein als das warme",
      "Введите конечные числа во все активные поля": "Gib in allen aktiven Feldern endliche Zahlen ein",
      "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "Das Ergebnis liegt außerhalb des Zahlenbereichs; prüfe die Größenordnung der Eingaben"
    }
  },
  "en": {
    "fields": {
      "tHot": "Hot reservoir temperature",
      "tCold": "Cold reservoir temperature"
    },
    "options": {},
    "results": {
      "Предельный КПД": "Maximum efficiency",
      "Полезная работа из 1000 Дж тепла": "Useful work from 1000 J of heat",
      "Отдано холодильнику": "Rejected to the cold reservoir",
      "Перепад температур": "Temperature difference",
      "Отношение температур": "Temperature ratio",
      "Проверьте данные": "Check the values"
    },
    "values": {
      "Дж": "J",
      "К": "K",
      "Температура нагревателя должна быть больше нуля кельвинов": "The hot temperature must be above zero kelvin",
      "Температура холодильника должна быть больше нуля кельвинов": "The cold temperature must be above zero kelvin",
      "Холодильник не может быть теплее нагревателя": "The cold reservoir cannot be warmer than the hot one",
      "Введите конечные числа во все активные поля": "Enter finite numbers in every active field",
      "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "The result is outside the numerical range; check the scale of the inputs"
    }
  },
  "uk": {
    "fields": {
      "tHot": "Температура нагрівника",
      "tCold": "Температура холодильника"
    },
    "options": {},
    "results": {
      "Предельный КПД": "Граничний ККД",
      "Полезная работа из 1000 Дж тепла": "Корисна робота з 1000 Дж тепла",
      "Отдано холодильнику": "Віддано холодильнику",
      "Перепад температур": "Перепад температур",
      "Отношение температур": "Відношення температур",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      "Дж": "Дж",
      "К": "К",
      "Температура нагревателя должна быть больше нуля кельвинов": "Температура нагрівника має бути вищою за нуль кельвінів",
      "Температура холодильника должна быть больше нуля кельвинов": "Температура холодильника має бути вищою за нуль кельвінів",
      "Холодильник не может быть теплее нагревателя": "Холодильник не може бути теплішим за нагрівник",
      "Введите конечные числа во все активные поля": "Введіть скінченні числа в усі активні поля",
      "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "Результат виходить за числовий діапазон; перевірте масштаб вхідних величин"
    }
  },
  "es": {
    "fields": {
      "tHot": "Temperatura del foco caliente",
      "tCold": "Temperatura del foco frío"
    },
    "options": {},
    "results": {
      "Предельный КПД": "Rendimiento máximo",
      "Полезная работа из 1000 Дж тепла": "Trabajo útil de 1000 J de calor",
      "Отдано холодильнику": "Cedido al foco frío",
      "Перепад температур": "Salto de temperatura",
      "Отношение температур": "Cociente de temperaturas",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      "Дж": "J",
      "К": "K",
      "Температура нагревателя должна быть больше нуля кельвинов": "La temperatura del foco caliente debe estar por encima de cero kelvin",
      "Температура холодильника должна быть больше нуля кельвинов": "La temperatura del foco frío debe estar por encima de cero kelvin",
      "Холодильник не может быть теплее нагревателя": "El foco frío no puede estar más caliente que el caliente",
      "Введите конечные числа во все активные поля": "Introduce números finitos en todos los campos activos",
      "Результат выходит за числовой диапазон; проверьте масштаб исходных величин": "El resultado queda fuera del intervalo numérico; revisa la escala de los datos"
    }
  }
};
