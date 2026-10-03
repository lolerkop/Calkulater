import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "species": "Species and size",
    "years": "Age in years"
  },
  "options": {
    "cat": "cat",
    "dog-small": "small dog, up to 10 kg",
    "dog-large": "large dog, over 25 kg"
  },
  "results": {
    "Возраст в человеческих годах": "Age in human years",
    "Возраст питомца, лет": "Pet age, years",
    "Прибавка за каждый следующий год": "Added per further year",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "Выберите вид питомца из списка": "Choose a species from the list",
    "Возраст должен быть больше нуля": "The age must be greater than zero",
    "Условная шкала 15/9/4 или 15/9/7, а не измерение здоровья, биологического возраста или срока жизни. Прибавка в последней строке относится к годам после второго.": "Illustrative 15/9/4 or 15/9/7 scale, not a measure of health, biological age or lifespan. The final-row increment applies after year two."
  }
},
  "uk": {
  "fields": {
    "species": "Вид і розмір",
    "years": "Вік у роках"
  },
  "options": {
    "cat": "кіт",
    "dog-small": "малий собака, до 10 кг",
    "dog-large": "великий собака, понад 25 кг"
  },
  "results": {
    "Возраст в человеческих годах": "Вік у людських роках",
    "Возраст питомца, лет": "Вік тварини, років",
    "Прибавка за каждый следующий год": "Додається за кожен наступний рік",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "Выберите вид питомца из списка": "Оберіть вид тварини зі списку",
    "Возраст должен быть больше нуля": "Вік має бути більшим за нуль",
    "Условная шкала 15/9/4 или 15/9/7, а не измерение здоровья, биологического возраста или срока жизни. Прибавка в последней строке относится к годам после второго.": "Умовна шкала 15/9/4 або 15/9/7, не вимір здоров’я, біологічного віку чи тривалості життя. Приріст останнього рядка діє після другого року."
  }
},
  "de": {
  "fields": {
    "species": "Art und Größe",
    "years": "Alter in Jahren"
  },
  "options": {
    "cat": "Katze",
    "dog-small": "kleiner Hund, bis 10 kg",
    "dog-large": "großer Hund, über 25 kg"
  },
  "results": {
    "Возраст в человеческих годах": "Alter in Menschenjahren",
    "Возраст питомца, лет": "Alter des Tieres, Jahre",
    "Прибавка за каждый следующий год": "Zuwachs je weiterem Jahr",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "Выберите вид питомца из списка": "Wähle die Art des Tieres aus der Liste",
    "Возраст должен быть больше нуля": "Das Alter muss größer als null sein",
    "Условная шкала 15/9/4 или 15/9/7, а не измерение здоровья, биологического возраста или срока жизни. Прибавка в последней строке относится к годам после второго.": "Illustrative Skala 15/9/4 oder 15/9/7, keine Messung von Gesundheit, biologischem Alter oder Lebensdauer. Letzter Zuwachs gilt nach Jahr zwei."
  }
},
  "es": {
  "fields": {
    "species": "Especie y tamaño",
    "years": "Edad en años"
  },
  "options": {
    "cat": "gato",
    "dog-small": "perro pequeño, hasta 10 kg",
    "dog-large": "perro grande, más de 25 kg"
  },
  "results": {
    "Возраст в человеческих годах": "Edad en años humanos",
    "Возраст питомца, лет": "Edad de la mascota, años",
    "Прибавка за каждый следующий год": "Añadido por cada año siguiente",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "Выберите вид питомца из списка": "Elige una especie de la lista",
    "Возраст должен быть больше нуля": "La edad debe ser mayor que cero",
    "Условная шкала 15/9/4 или 15/9/7, а не измерение здоровья, биологического возраста или срока жизни. Прибавка в последней строке относится к годам после второго.": "Escala ilustrativa 15/9/4 o 15/9/7, no medida de salud, edad biológica ni esperanza de vida. Incremento final aplica después del segundo año."
  }
}
};
