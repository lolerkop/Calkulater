import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      length: 'Room length, m', width: 'Room width, m', doors: 'Doorways',
      doorWidth: 'Doorway width, m', plank: 'Plank length, m', waste: 'Cutting allowance, %',
    },
    options: {},
    results: {
      'Длина с запасом': 'Length with allowance', 'Периметр комнаты': 'Room perimeter',
      'Вычет на проёмы': 'Deduction for doorways', 'Планок': 'Planks',
      'Куплено с запасом': 'Bought in planks', 'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm', 'шт': 'pcs',
      'Длина комнаты должна быть больше нуля': 'The room length must be greater than zero',
      'Ширина комнаты должна быть больше нуля': 'The room width must be greater than zero',
      'Число проёмов не может быть отрицательным': 'The number of doorways cannot be negative',
      'Ширина проёма не может быть отрицательной': 'The doorway width cannot be negative',
      'Длина планки должна быть больше нуля': 'The plank length must be greater than zero',
      'Запас не может быть отрицательным': 'The allowance cannot be negative',
      'Проёмы длиннее периметра — проверьте данные': 'The doorways exceed the perimeter — check the values',
    },
  },
  uk: {
    fields: {
      length: 'Довжина кімнати, м', width: 'Ширина кімнати, м', doors: 'Дверних прорізів',
      doorWidth: 'Ширина прорізу, м', plank: 'Довжина планки, м', waste: 'Запас на підрізання, %',
    },
    options: {},
    results: {
      'Длина с запасом': 'Довжина із запасом', 'Периметр комнаты': 'Периметр кімнати',
      'Вычет на проёмы': 'Відрахування на прорізи', 'Планок': 'Планок',
      'Куплено с запасом': 'Куплено планками', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м': 'м', 'шт': 'шт',
      'Длина комнаты должна быть больше нуля': 'Довжина кімнати має бути більшою за нуль',
      'Ширина комнаты должна быть больше нуля': 'Ширина кімнати має бути більшою за нуль',
      'Число проёмов не может быть отрицательным': 'Кількість прорізів не може бути відʼємною',
      'Ширина проёма не может быть отрицательной': 'Ширина прорізу не може бути відʼємною',
      'Длина планки должна быть больше нуля': 'Довжина планки має бути більшою за нуль',
      'Запас не может быть отрицательным': 'Запас не може бути відʼємним',
      'Проёмы длиннее периметра — проверьте данные': 'Прорізи довші за периметр — перевірте дані',
    },
  },
};
