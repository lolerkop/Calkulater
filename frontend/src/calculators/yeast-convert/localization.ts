import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "value": "Amount in the recipe, g",
    "from": "What the recipe lists",
    "to": "What you have"
  },
  "options": {
    "fresh": "fresh compressed",
    "active": "active dry",
    "instant": "instant"
  },
  "results": {
    "Нужно дрожжей": "Yeast needed",
    "В пересчёте на прессованные": "As fresh compressed",
    "Сухие активные": "Active dry",
    "Быстродействующие": "Instant",
    "Соотношение": "Ratio",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "г": "g",
    "Выберите вид дрожжей из списка": "Choose a yeast type from the list",
    "Масса должна быть больше нуля": "The amount must be greater than zero",
    "Выберите разные виды дрожжей": "Choose two different yeast types",
    "Использована выбранная модель 1 : 1/3 : 1/4 по массе. Инструкция производителя может задавать другую замену; подъёмная сила и время расстойки не измеряются.": "Selected mass model 1 : 1/3 : 1/4. Manufacturer instructions may specify another replacement; leavening power and proofing time are not measured."
  }
},
  "uk": {
  "fields": {
    "value": "Маса за рецептом, г",
    "from": "Що вказано в рецепті",
    "to": "Що є в наявності"
  },
  "options": {
    "fresh": "пресовані",
    "active": "сухі активні",
    "instant": "швидкодіючі"
  },
  "results": {
    "Нужно дрожжей": "Потрібно дріжджів",
    "В пересчёте на прессованные": "У перерахунку на пресовані",
    "Сухие активные": "Сухі активні",
    "Быстродействующие": "Швидкодіючі",
    "Соотношение": "Співвідношення",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "г": "г",
    "Выберите вид дрожжей из списка": "Оберіть вид дріжджів зі списку",
    "Масса должна быть больше нуля": "Маса має бути більшою за нуль",
    "Выберите разные виды дрожжей": "Оберіть різні види дріжджів",
    "Использована выбранная модель 1 : 1/3 : 1/4 по массе. Инструкция производителя может задавать другую замену; подъёмная сила и время расстойки не измеряются.": "Обрана масова модель 1 : 1/3 : 1/4. Інструкція виробника може задавати іншу заміну; підйомна сила й час вистоювання не вимірюються."
  }
},
  "de": {
  "fields": {
    "value": "Menge im Rezept, g",
    "from": "Was das Rezept nennt",
    "to": "Was du hast"
  },
  "options": {
    "fresh": "frische Hefe",
    "active": "Trockenhefe",
    "instant": "Instanthefe"
  },
  "results": {
    "Нужно дрожжей": "Nötige Hefe",
    "В пересчёте на прессованные": "Umgerechnet auf frische Hefe",
    "Сухие активные": "Trockenhefe",
    "Быстродействующие": "Instanthefe",
    "Соотношение": "Verhältnis",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "г": "g",
    "Выберите вид дрожжей из списка": "Wähle eine Hefeart aus der Liste",
    "Масса должна быть больше нуля": "Die Menge muss größer als null sein",
    "Выберите разные виды дрожжей": "Wähle zwei verschiedene Hefearten",
    "Использована выбранная модель 1 : 1/3 : 1/4 по массе. Инструкция производителя может задавать другую замену; подъёмная сила и время расстойки не измеряются.": "Gewähltes Massenmodell 1 : 1/3 : 1/4. Hersteller kann andere Ersetzung vorgeben; Triebkraft und Gehzeit werden nicht gemessen."
  }
},
  "es": {
  "fields": {
    "value": "Cantidad de la receta, g",
    "from": "Lo que indica la receta",
    "to": "Lo que tienes"
  },
  "options": {
    "fresh": "fresca prensada",
    "active": "seca activa",
    "instant": "instantánea"
  },
  "results": {
    "Нужно дрожжей": "Levadura necesaria",
    "В пересчёте на прессованные": "Equivalente en fresca prensada",
    "Сухие активные": "Seca activa",
    "Быстродействующие": "Instantánea",
    "Соотношение": "Proporción",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "г": "g",
    "Выберите вид дрожжей из списка": "Elige un tipo de levadura de la lista",
    "Масса должна быть больше нуля": "La cantidad debe ser mayor que cero",
    "Выберите разные виды дрожжей": "Elige dos tipos de levadura distintos",
    "Использована выбранная модель 1 : 1/3 : 1/4 по массе. Инструкция производителя может задавать другую замену; подъёмная сила и время расстойки не измеряются.": "Modelo de masa elegido 1 : 1/3 : 1/4. Fabricante puede indicar otra sustitución; no se miden fuerza fermentativa ni tiempo de levado."
  }
}
};
