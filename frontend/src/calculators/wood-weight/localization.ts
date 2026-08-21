import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "volume": "Volume, m³", "species": "Species", "moisture": "Moisture content, %" },
    options: { "pine": "Pine",
      "spruce": "Spruce",
      "birch": "Birch",
      "oak": "Oak",
      "larch": "Larch",
      "aspen": "Aspen", },
    results: {
      "Масса": "Weight",
      "Плотность при заданной влажности": "Density at that moisture",
      "Базовая плотность при 12 %": "Reference density at 12 %",
      "Объём": "Volume",
      "Килограммов на кубометр": "Kilograms per cubic metre",
      "Проверьте данные": "Check the values",
    },
    values: {
      "кг": "kg", "кг/м³": "kg/m³", "м³": "m³",
      "Неизвестная порода древесины": "Unknown species",
      "Объём должен быть больше нуля": "The volume must be greater than zero",
      "Влажность должна быть от 0 до 100 %": "Moisture content must be between 0 and 100 %",
      "При такой влажности плотность обращается в ноль": "At that moisture the density works out to zero",
      "Базовые плотности даны при влажности 12 %. Пересчёт линейный, поэтому для свежесрубленного леса результат приблизителен.": "Reference densities are given at 12 % moisture. The conversion is linear, so for freshly felled timber the result is approximate.",
    },
  },
  uk: {
    fields: { "volume": "Об’єм, м³", "species": "Порода", "moisture": "Вологість, %" },
    options: { "pine": "Сосна",
      "spruce": "Ялина",
      "birch": "Береза",
      "oak": "Дуб",
      "larch": "Модрина",
      "aspen": "Осика", },
    results: {
      "Масса": "Маса",
      "Плотность при заданной влажности": "Густина за заданої вологості",
      "Базовая плотность при 12 %": "Довідкова густина за 12 %",
      "Объём": "Об’єм",
      "Килограммов на кубометр": "Кілограмів на кубометр",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "кг": "кг", "кг/м³": "кг/м³", "м³": "м³",
      "Неизвестная порода древесины": "Невідома порода деревини",
      "Объём должен быть больше нуля": "Об’єм має бути більшим за нуль",
      "Влажность должна быть от 0 до 100 %": "Вологість має бути від 0 до 100 %",
      "При такой влажности плотность обращается в ноль": "За такої вологості густина обертається на нуль",
      "Базовые плотности даны при влажности 12 %. Пересчёт линейный, поэтому для свежесрубленного леса результат приблизителен.": "Довідкові густини наведено за вологості 12 %. Перерахунок лінійний, тож для свіжозрубаного лісу результат приблизний.",
    },
  },
};
