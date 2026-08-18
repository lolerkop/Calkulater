import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = { 'Результат': 'Result', 'Исходное значение': 'Input value', 'Соотношение': 'Relationship', 'Проверьте данные': 'Check the values' };
const RESULTS_UK = { 'Результат': 'Результат', 'Исходное значение': 'Вихідне значення', 'Соотношение': 'Співвідношення', 'Проверьте данные': 'Перевірте дані' };
const ERRORS_EN = {
  'Выберите единицы из списка': 'Choose units from the list',
  'Введите конечное число': 'Enter a finite number',
  'Результат вне допустимого диапазона': 'The result is outside the supported range',
};
const ERRORS_UK = {
  'Выберите единицы из списка': 'Оберіть одиниці зі списку',
  'Введите конечное число': 'Введіть скінченне число',
  'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { value: 'Density', from: 'From unit', to: 'To unit' },
    options: { kgm3: 'Kilogram per cubic metre (kg/m³)', gcm3: 'Gram per cubic centimetre (g/cm³)', kgl: 'Kilogram per litre (kg/L)', tm3: 'Tonne per cubic metre (t/m³)', gl: 'Gram per litre (g/L)', lbft3: 'Pound per cubic foot (lb/ft³)', lbgal: 'Pound per US gallon (lb/gal)', ozin3: 'Ounce per cubic inch (oz/in³)' },
    results: RESULTS_EN,
    values: { ...ERRORS_EN, 'кг/м³': 'kg/m³', 'г/см³': 'g/cm³', 'кг/л': 'kg/L', 'т/м³': 't/m³', 'г/л': 'g/L', 'lb/гал': 'lb/gal' },
  },
  uk: {
    fields: { value: 'Густина', from: 'З одиниці', to: 'В одиницю' },
    options: { kgm3: 'Кілограм на кубометр (кг/м³)', gcm3: 'Грам на кубічний сантиметр (г/см³)', kgl: 'Кілограм на літр (кг/л)', tm3: 'Тонна на кубометр (т/м³)', gl: 'Грам на літр (г/л)', lbft3: 'Фунт на кубічний фут (lb/ft³)', lbgal: 'Фунт на галон США (lb/gal)', ozin3: 'Унція на кубічний дюйм (oz/in³)' },
    results: RESULTS_UK,
    values: { ...ERRORS_UK, 'кг/м³': 'кг/м³', 'г/см³': 'г/см³', 'кг/л': 'кг/л', 'т/м³': 'т/м³', 'г/л': 'г/л', 'lb/гал': 'lb/гал' },
  },
};
