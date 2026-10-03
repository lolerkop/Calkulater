import type { CalculatorLocalization } from '../../lib/platform/types';
import { mechanicsScalarValues } from '../../lib/platform/mechanicsScalarLocalization';
import { auxiliaryScalarValues } from '../../lib/platform/auxiliaryScalarLocalization';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "massG": "Masse"
    },
    "results": {
      "Энергия покоя": "Ruheenergie",
      "В киловатт-часах": "In Kilowattstunden",
      "В тоннах тротилового эквивалента": "In Tonnen TNT-Äquivalent",
      "Масса": "Masse",
      "Проверьте данные": "Prüfe die Werte",
      "В миллионах киловатт-часов": "In Millionen Kilowattstunden"
    },
    "values": {
      ...mechanicsScalarValues.de,
      ...auxiliaryScalarValues.de,
      "Дж": "J",
      "кВт·ч": "kWh",
      "т": "t",
      "кг": "kg",
      "млн кВт·ч": "Mio. kWh",
      "Масса должна быть больше нуля": "Die Masse muss größer als null sein",
      "Это энергия покоя mc², а не выход топлива или доступная электрическая энергия.": "Dies ist die Ruheenergie mc², kein Brennstoffertrag oder verfügbare elektrische Energie."
    }
  },
  "en": {
    "fields": {
      "massG": "Mass"
    },
    "options": {},
    "results": {
      "Энергия покоя": "Rest energy",
      "В киловатт-часах": "In kilowatt-hours",
      "В тоннах тротилового эквивалента": "In tonnes of TNT equivalent",
      "Масса": "Mass",
      "Проверьте данные": "Check the values",
      "В миллионах киловатт-часов": "In million kilowatt-hours"
    },
    "values": {
      ...mechanicsScalarValues.en,
      ...auxiliaryScalarValues.en,
      "Дж": "J",
      "кВт·ч": "kWh",
      "т": "t",
      "кг": "kg",
      "млн кВт·ч": "million kWh",
      "Масса должна быть больше нуля": "The mass must be greater than zero",
      "Это энергия покоя mc², а не выход топлива или доступная электрическая энергия.": "This is the rest energy mc², rather than a fuel yield or available electrical energy."
    }
  },
  "uk": {
    "fields": {
      "massG": "Маса"
    },
    "options": {},
    "results": {
      "Энергия покоя": "Енергія спокою",
      "В киловатт-часах": "У кіловат-годинах",
      "В тоннах тротилового эквивалента": "У тоннах тротилового еквіваленту",
      "Масса": "Маса",
      "Проверьте данные": "Перевірте дані",
      "В миллионах киловатт-часов": "У мільйонах кіловат-годин"
    },
    "values": {
      ...mechanicsScalarValues.uk,
      ...auxiliaryScalarValues.uk,
      "Дж": "Дж",
      "кВт·ч": "кВт·год",
      "т": "т",
      "кг": "кг",
      "млн кВт·ч": "млн кВт·год",
      "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
      "Это энергия покоя mc², а не выход топлива или доступная электрическая энергия.": "Це енергія спокою mc², а не вихід палива чи доступна електрична енергія."
    }
  },
  "es": {
    "fields": {
      "massG": "Masa"
    },
    "options": {},
    "results": {
      "Энергия покоя": "Energía en reposo",
      "В киловатт-часах": "En kilovatios hora",
      "В тоннах тротилового эквивалента": "En toneladas equivalentes de TNT",
      "Масса": "Masa",
      "Проверьте данные": "Revisa los datos",
      "В миллионах киловатт-часов": "En millones de kilovatios hora"
    },
    "values": {
      ...mechanicsScalarValues.es,
      ...auxiliaryScalarValues.es,
      "Дж": "J",
      "кВт·ч": "kWh",
      "т": "t",
      "кг": "kg",
      "млн кВт·ч": "millones de kWh",
      "Масса должна быть больше нуля": "La masa debe ser mayor que cero",
      "Это энергия покоя mc², а не выход топлива или доступная электрическая энергия.": "Es la energía en reposo mc², no el rendimiento de un combustible ni la energía eléctrica disponible."
    }
  }
};
