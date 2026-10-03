import type { EditorialSource } from './calculatorEditorial';

// Primary bodies actually read 2026-10-02. Labels bound each source to its evidence.
type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
const sources: Record<string, { href: string; label: Labels }> = {
  "gravity": {
    "href": "https://docs.brewfather.app/brewing-knowledge/fundamentals",
    "label": {
      "ru": "Brewfather: относительная плотность, линейная оценка ABV и отличие кажущегося сбраживания от реального; не гарантия точности",
      "en": "Brewfather: specific gravity, linear ABV estimation and apparent versus real attenuation; no accuracy guarantee",
      "uk": "Brewfather: відносна густина, лінійна оцінка ABV та позірне проти реального зброджування; не гарантія точності",
      "de": "Brewfather: relative Dichte, lineare ABV-Schätzung und scheinbarer gegenüber realem Vergärungsgrad; keine Genauigkeitsgarantie",
      "es": "Brewfather: densidad relativa, estimación lineal de ABV y atenuación aparente frente a real; sin garantía de precisión"
    }
  },
  "ukunit": {
    "href": "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/",
    "label": {
      "ru": "NHS: британская единица равна 10 мл или примерно 8 г спирта; объёмная формула отличается от выбранной плотности этой модели",
      "en": "NHS: a UK unit is 10 mL or about 8 g alcohol; its volume formula differs from this model’s selected density",
      "uk": "NHS: британська одиниця — 10 мл або приблизно 8 г спирту; об’ємна формула відрізняється від обраної густини моделі",
      "de": "NHS: britische Einheit mit 10 ml oder etwa 8 g Alkohol; Volumenformel unterscheidet sich von der gewählten Modelldichte",
      "es": "NHS: unidad británica de 10 ml o unos 8 g de alcohol; fórmula volumétrica distinta de la densidad elegida del modelo"
    }
  },
  "usdrink": {
    "href": "https://www.niaaa.nih.gov/alcohols-effects-health/what-standard-drink",
    "label": {
      "ru": "NIAAA: американская стандартная порция содержит примерно 14 г спирта; не показатель опьянения или разрешение на вождение",
      "en": "NIAAA: a US standard drink contains about 14 g alcohol; not an intoxication measure or driving permission",
      "uk": "NIAAA: стандартна порція США містить приблизно 14 г спирту; не показник сп’яніння або дозвіл керувати",
      "de": "NIAAA: US-Standardgetränk mit etwa 14 g Alkohol; kein Maß für Rausch oder Fahrerlaubnis",
      "es": "NIAAA: bebida estándar estadounidense con unos 14 g de alcohol; no mide intoxicación ni permite conducir"
    }
  },
  "baker": {
    "href": "https://www.kingarthurbaking.com/pro/reference/bakers-percentage",
    "label": {
      "ru": "King Arthur Baking: мука как база пекарских процентов и отдельный учёт муки и воды закваски; не норматив консистенции",
      "en": "King Arthur Baking: flour as the baker’s percentage basis and separate starter flour/water accounting; no consistency standard",
      "uk": "King Arthur Baking: борошно як база пекарських відсотків та окремий облік борошна й води закваски; не норма консистенції",
      "de": "King Arthur Baking: Mehlbasis für Bäckerprozente und getrennte Sauerteigmehl-/Wassererfassung; keine Konsistenznorm",
      "es": "King Arthur Baking: harina como base de porcentajes y separación de harina/agua de masa madre; no norma de consistencia"
    }
  },
  "brew": {
    "href": "https://support.moccamaster.com/hc/en-us/articles/1500009389881-How-much-coffee-should-I-use-in-my-Moccamaster",
    "label": {
      "ru": "Moccamaster: пример рецепта по входной воде с корректировкой вкуса; не подтверждение 1:16 или ёмкости гущи 2 мл/г",
      "en": "Moccamaster: an input-water recipe example adjustable to taste; does not validate 1:16 or grounds capacity of 2 mL/g",
      "uk": "Moccamaster: приклад рецепта за вхідною водою з корекцією смаку; не підтверджує 1:16 чи місткість гущі 2 мл/г",
      "de": "Moccamaster: Rezeptbeispiel mit Eingangswasser und Geschmacksanpassung; bestätigt weder 1:16 noch Satzkapazität 2 ml/g",
      "es": "Moccamaster: ejemplo de receta con agua de entrada ajustable al gusto; no valida 1:16 ni capacidad de posos 2 ml/g"
    }
  },
  "nutrition": {
    "href": "https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label",
    "label": {
      "ru": "FDA: американская маркировка обычно использует порцию, иногда упаковку; проверяйте основу, не назначение порции",
      "en": "FDA: US nutrition labels usually use a serving, sometimes a package; check the basis, not a serving prescription",
      "uk": "FDA: маркіровка США зазвичай використовує порцію, іноді упаковку; перевіряйте основу, не призначення порції",
      "de": "FDA: US-Nährwertetiketten meist je Portion, teils je Packung; Bezugsbasis prüfen, keine Portionsverordnung",
      "es": "FDA: etiquetado estadounidense normalmente por ración, a veces por envase; verificar base, no prescribir ración"
    }
  },
  "yield": {
    "href": "https://www.ars.usda.gov/ARSUserFiles/80400525/Articles/NDBC38_Beef_CookingYield.pdf",
    "label": {
      "ru": "USDA ARS: исследование выхода конкретных говяжьих отрубов и потерь влаги/жира; не универсальный коэффициент или сохранение калорий",
      "en": "USDA ARS: study of particular beef-cut yields and moisture/fat losses; no universal yield factor or calorie conservation",
      "uk": "USDA ARS: дослідження виходу конкретних яловичих відрубів та втрат вологи/жиру; не універсальний коефіцієнт чи збереження калорій",
      "de": "USDA ARS: Untersuchung bestimmter Rindfleisch-Ausbeuten und Wasser-/Fettverluste; kein allgemeiner Faktor oder Energieerhalt",
      "es": "USDA ARS: estudio de rendimiento de cortes bovinos concretos y pérdidas de agua/grasa; no factor universal ni conservación calórica"
    }
  },
  "lifestage": {
    "href": "https://www.aaha.org/resources/life-stage-canine-2019/canine-life-stage-definitions/",
    "label": {
      "ru": "AAHA: индивидуальные жизненные этапы собак вместо человеческих эквивалентов; не подтверждение коэффициентов 15/9/4/7",
      "en": "AAHA: individual canine life stages rather than human equivalents; does not validate coefficients 15/9/4/7",
      "uk": "AAHA: індивідуальні життєві етапи собак замість людських еквівалентів; не підтверджує коефіцієнти 15/9/4/7",
      "de": "AAHA: individuelle Hundelebensphasen statt Menschenäquivalenten; keine Bestätigung der Faktoren 15/9/4/7",
      "es": "AAHA: etapas vitales caninas individuales en vez de equivalentes humanos; no valida coeficientes 15/9/4/7"
    }
  },
  "rer": {
    "href": "https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/",
    "label": {
      "ru": "AAHA 2021: RER 70 × масса^0,75 и исходные множители с наблюдением и индивидуальной корректировкой; не готовое назначение рациона",
      "en": "AAHA 2021: RER 70 × weight^0.75 and starting factors with monitoring and individual adjustment; not a prescribed ration",
      "uk": "AAHA 2021: RER 70 × маса^0,75 та початкові множники зі спостереженням й індивідуальною корекцією; не призначений раціон",
      "de": "AAHA 2021: RER 70 × Gewicht^0,75 und Ausgangsfaktoren mit Beobachtung und individueller Anpassung; keine verordnete Ration",
      "es": "AAHA 2021: RER 70 × peso^0,75 y factores iniciales con observación y ajuste individual; no ración prescrita"
    }
  },
  "safety": {
    "href": "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures",
    "label": {
      "ru": "FoodSafety.gov: измеренные безопасные внутренние температуры и отдых по указаниям США; не проверка линейных минут/кг",
      "en": "FoodSafety.gov: measured safe internal temperatures and rests in US guidance; does not validate linear minutes/kg",
      "uk": "FoodSafety.gov: виміряні безпечні внутрішні температури й відпочинок за вказівками США; не перевірка лінійних хв/кг",
      "de": "FoodSafety.gov: gemessene sichere Innentemperaturen und Ruhezeiten nach US-Hinweisen; keine Prüfung linearer Minuten/kg",
      "es": "FoodSafety.gov: temperaturas internas seguras medidas y reposos de indicaciones de EE. UU.; no valida minutos/kg lineales"
    }
  },
  "yeast": {
    "href": "https://redstaryeast.com/frequently-asked-questions/",
    "label": {
      "ru": "Red Star: продуктовые способы внесения и замены активных/быстродействующих дрожжей; не универсальное одобрение модели 1:3:4",
      "en": "Red Star: product-specific mixing and active/instant substitutions; no universal approval of the 1:3:4 model",
      "uk": "Red Star: способи внесення й заміни активних/швидкодійних дріжджів для своїх продуктів; не універсальне схвалення моделі 1:3:4",
      "de": "Red Star: produktspezifisches Einmischen und aktive/Instant-Ersetzung; keine allgemeine Bestätigung des Modells 1:3:4",
      "es": "Red Star: mezclado y sustitución activa/instantánea específicos del producto; no aprobación universal del modelo 1:3:4"
    }
  }
};
const sourceIds: Record<string, string[]> = {
  "abv-alcohol": [
    "gravity"
  ],
  "alcohol-units": [
    "ukunit",
    "usdrink"
  ],
  "bakers-percentage": [
    "baker"
  ],
  "brew-ratio": [
    "brew"
  ],
  "calories-per-serving": [
    "nutrition"
  ],
  "cooked-weight": [
    "yield"
  ],
  "pet-age": [
    "lifestage"
  ],
  "pet-food": [
    "rer"
  ],
  "recipe-cost": [],
  "recipe-scale": [],
  "roast-time": [
    "safety"
  ],
  "yeast-convert": [
    "yeast"
  ]
};

export function getHouseholdWave16MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(sourceIds, id) ? sourceIds[id] : []).map(key => ({ href: sources[key].href, label: sources[key].label[locale as keyof Labels] ?? sources[key].label.en }));
}
