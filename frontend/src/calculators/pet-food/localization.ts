import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "weight": "Body weight, kg",
    "factor": "Energy requirement multiplier",
    "kcalPer100": "Food energy, kcal per 100 g"
  },
  "results": {
    "Норма корма в сутки": "Estimated daily food",
    "Потребность в энергии": "Energy requirement",
    "Обмен покоя (RER)": "Resting requirement (RER)",
    "Масса питомца": "Body weight",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "г": "g",
    "ккал": "kcal",
    "кг": "kg",
    "Масса питомца должна быть больше нуля": "The body weight must be greater than zero",
    "Множитель потребности должен быть больше нуля": "The requirement multiplier must be greater than zero",
    "Калорийность корма должна быть больше нуля": "The food energy must be greater than zero",
    "Это энергетическая оценка, а не назначение рациона. Вид, состояние тела, болезни, лакомства и индивидуальная потребность не определяются по этим трём входам.": "This is an energy estimate, not a feeding prescription. Species, body condition, illness, treats and individual needs are not determined by these three inputs."
  }
},
  "uk": {
  "fields": {
    "weight": "Маса тіла, кг",
    "factor": "Множник енергопотреби",
    "kcalPer100": "Калорійність корму, ккал на 100 г"
  },
  "results": {
    "Норма корма в сутки": "Оцінена порція корму на добу",
    "Потребность в энергии": "Потреба в енергії",
    "Обмен покоя (RER)": "Обмін спокою (RER)",
    "Масса питомца": "Маса тварини",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "г": "г",
    "ккал": "ккал",
    "кг": "кг",
    "Масса питомца должна быть больше нуля": "Маса тварини має бути більшою за нуль",
    "Множитель потребности должен быть больше нуля": "Множник потреби має бути більшим за нуль",
    "Калорийность корма должна быть больше нуля": "Калорійність корму має бути більшою за нуль",
    "Это энергетическая оценка, а не назначение рациона. Вид, состояние тела, болезни, лакомства и индивидуальная потребность не определяются по этим трём входам.": "Це енергетична оцінка, не призначення раціону. Вид, кондиція тіла, хвороби, ласощі й особисті потреби не визначаються трьома входами."
  }
},
  "de": {
  "fields": {
    "weight": "Körpergewicht, kg",
    "factor": "Faktor für den Energiebedarf",
    "kcalPer100": "Energiegehalt des Futters, kcal je 100 g"
  },
  "results": {
    "Норма корма в сутки": "Geschätzte tägliche Futtermenge",
    "Потребность в энергии": "Energiebedarf",
    "Обмен покоя (RER)": "Ruheumsatz (RER)",
    "Масса питомца": "Körpergewicht",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "г": "g",
    "ккал": "kcal",
    "кг": "kg",
    "Масса питомца должна быть больше нуля": "Das Körpergewicht muss größer als null sein",
    "Множитель потребности должен быть больше нуля": "Der Bedarfsfaktor muss größer als null sein",
    "Калорийность корма должна быть больше нуля": "Der Energiegehalt des Futters muss größer als null sein",
    "Это энергетическая оценка, а не назначение рациона. Вид, состояние тела, болезни, лакомства и индивидуальная потребность не определяются по этим трём входам.": "Energieabschätzung, keine Fütterungsverordnung. Art, Körperzustand, Krankheiten, Leckerli und individueller Bedarf ergeben sich nicht aus drei Eingaben."
  }
},
  "es": {
  "fields": {
    "weight": "Peso corporal, kg",
    "factor": "Multiplicador de necesidad energética",
    "kcalPer100": "Energía del alimento, kcal por 100 g"
  },
  "options": {},
  "results": {
    "Норма корма в сутки": "Alimento diario estimado",
    "Потребность в энергии": "Necesidad energética",
    "Обмен покоя (RER)": "Necesidad en reposo (RER)",
    "Масса питомца": "Peso corporal",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "г": "g",
    "ккал": "kcal",
    "кг": "kg",
    "Масса питомца должна быть больше нуля": "El peso corporal debe ser mayor que cero",
    "Множитель потребности должен быть больше нуля": "El multiplicador de necesidad debe ser mayor que cero",
    "Калорийность корма должна быть больше нуля": "La energía del alimento debe ser mayor que cero",
    "Это энергетическая оценка, а не назначение рациона. Вид, состояние тела, болезни, лакомства и индивидуальная потребность не определяются по этим трём входам.": "Estimación energética, no prescripción de dieta. Especie, condición corporal, enfermedades, premios y necesidades individuales no se deducen de tres entradas."
  }
}
};
