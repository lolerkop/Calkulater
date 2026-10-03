import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "volume": "Water volume, L",
    "tFrom": "Start temperature, °C",
    "tTo": "Target temperature, °C",
    "power": "Heater power, kW",
    "efficiency": "Efficiency, %"
  },
  "options": {},
  "results": {
    "Время нагрева": "Heating time",
    "Часы и минуты": "Hours and minutes",
    "Энергия": "Energy",
    "Полезная мощность": "Useful power",
    "Перепад температур": "Temperature rise",
    "Проверьте данные": "Check the values",
    "Энергия источника": "Source energy"
  },
  "values": {
    ...marketingScalarValues.en,
    "ч": "h",
    "мин": "min",
    "кВт·ч": "kWh",
    "кВт": "kW",
    "К": "K",
    "Объём воды должен быть больше нуля": "The water volume must be greater than zero",
    "Мощность нагревателя должна быть больше нуля": "The heater power must be greater than zero",
    "КПД задаётся от 0 до 100 процентов": "Efficiency runs from 0 to 100 per cent",
    "Конечная температура должна быть выше начальной": "The target temperature must exceed the start temperature",
    "Модель жидкой воды допускает температуры от 0 до 100 °C": "The liquid-water model accepts temperatures from 0 to 100 °C"
  }
},
  "uk": {
  "fields": {
    "volume": "Об’єм води, л",
    "tFrom": "Початкова температура, °C",
    "tTo": "Кінцева температура, °C",
    "power": "Потужність нагрівача, кВт",
    "efficiency": "ККД, %"
  },
  "options": {},
  "results": {
    "Время нагрева": "Час нагрівання",
    "Часы и минуты": "Години та хвилини",
    "Энергия": "Енергія",
    "Полезная мощность": "Корисна потужність",
    "Перепад температур": "Перепад температур",
    "Проверьте данные": "Перевірте дані",
    "Энергия источника": "Енергія джерела"
  },
  "values": {
    ...marketingScalarValues.uk,
    "ч": "год",
    "мин": "хв",
    "кВт·ч": "кВт·год",
    "кВт": "кВт",
    "К": "К",
    "Объём воды должен быть больше нуля": "Об’єм води має бути більшим за нуль",
    "Мощность нагревателя должна быть больше нуля": "Потужність нагрівача має бути більшою за нуль",
    "КПД задаётся от 0 до 100 процентов": "ККД задається від 0 до 100 відсотків",
    "Конечная температура должна быть выше начальной": "Кінцева температура має бути вищою за початкову",
    "Модель жидкой воды допускает температуры от 0 до 100 °C": "Модель рідкої води допускає температури від 0 до 100 °C"
  }
},
  "de": {
  "fields": {
    "volume": "Wassermenge, l",
    "tFrom": "Anfangstemperatur, °C",
    "tTo": "Zieltemperatur, °C",
    "power": "Leistung des Erhitzers, kW",
    "efficiency": "Wirkungsgrad, %"
  },
  "results": {
    "Время нагрева": "Aufheizzeit",
    "Часы и минуты": "Stunden und Minuten",
    "Энергия": "Energie",
    "Полезная мощность": "Nutzleistung",
    "Перепад температур": "Temperaturhub",
    "Проверьте данные": "Prüfe die Werte",
    "Энергия источника": "Quellenenergie"
  },
  "values": {
    ...marketingScalarValues.de,
    "ч": "h",
    "мин": "min",
    "кВт·ч": "kWh",
    "кВт": "kW",
    "К": "K",
    "Объём воды должен быть больше нуля": "Die Wassermenge muss größer als null sein",
    "Мощность нагревателя должна быть больше нуля": "Die Leistung des Erhitzers muss größer als null sein",
    "КПД задаётся от 0 до 100 процентов": "Der Wirkungsgrad liegt zwischen 0 und 100 Prozent",
    "Конечная температура должна быть выше начальной": "Die Zieltemperatur muss über der Anfangstemperatur liegen",
    "Модель жидкой воды допускает температуры от 0 до 100 °C": "Das Flüssigwassermodell erlaubt Temperaturen von 0 bis 100 °C"
  }
},
  "es": {
  "fields": {
    "volume": "Volumen de agua, l",
    "tFrom": "Temperatura inicial, °C",
    "tTo": "Temperatura objetivo, °C",
    "power": "Potencia del calentador, kW",
    "efficiency": "Rendimiento, %"
  },
  "options": {},
  "results": {
    "Время нагрева": "Tiempo de calentamiento",
    "Часы и минуты": "Horas y minutos",
    "Энергия": "Energía",
    "Полезная мощность": "Potencia útil",
    "Перепад температур": "Salto de temperatura",
    "Проверьте данные": "Revisa los datos",
    "Энергия источника": "Energía de la fuente"
  },
  "values": {
    ...marketingScalarValues.es,
    "ч": "h",
    "мин": "min",
    "кВт·ч": "kWh",
    "кВт": "kW",
    "К": "K",
    "Объём воды должен быть больше нуля": "El volumen de agua debe ser mayor que cero",
    "Мощность нагревателя должна быть больше нуля": "La potencia del calentador debe ser mayor que cero",
    "КПД задаётся от 0 до 100 процентов": "El rendimiento va del 0 al 100 por ciento",
    "Конечная температура должна быть выше начальной": "La temperatura objetivo debe superar a la inicial",
    "Модель жидкой воды допускает температуры от 0 до 100 °C": "El modelo de agua líquida admite temperaturas de 0 a 100 °C"
  }
}
};
