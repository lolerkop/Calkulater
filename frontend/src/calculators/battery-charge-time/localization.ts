import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "capacityAh": "Battery capacity, Ah",
      "currentA": "Charging current, A",
      "efficiency": "Charging efficiency, %",
    },
    options: {

    },
    results: {
      "Время зарядки": "Charging time",
      "В часах": "In hours",
      "Передано в батарею": "Delivered to the battery",
      "Отдано зарядным устройством": "Drawn from the charger",
      "Проверьте данные": "Check the values",
    },
    values: {
      "ч": "h",
      "мин": "min",
      "А·ч": "Ah",
      "Ёмкость должна быть больше нуля": "The capacity must be greater than zero",
      "Ток зарядки должен быть больше нуля": "The charging current must be greater than zero",
      "КПД должен быть от 1 до 100 %": "The efficiency must be between 1 and 100%",
    },
  },
  uk: {
    fields: {
      "capacityAh": "Ємність батареї, А·год",
      "currentA": "Струм заряджання, А",
      "efficiency": "ККД заряджання, %",
    },
    options: {

    },
    results: {
      "Время зарядки": "Час заряджання",
      "В часах": "У годинах",
      "Передано в батарею": "Передано в батарею",
      "Отдано зарядным устройством": "Віддано зарядним пристроєм",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "ч": "год",
      "мин": "хв",
      "А·ч": "А·год",
      "Ёмкость должна быть больше нуля": "Ємність має бути більшою за нуль",
      "Ток зарядки должен быть больше нуля": "Струм заряджання має бути більшим за нуль",
      "КПД должен быть от 1 до 100 %": "ККД має бути від 1 до 100 %",
    },
  },
};
