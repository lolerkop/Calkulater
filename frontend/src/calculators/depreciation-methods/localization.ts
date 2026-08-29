import type { CalculatorLocalization } from '../../lib/platform/types';

// Подписи колонок и заголовок таблицы идут через ту же карту results, что и
// строки результата: платформа локализует таблицу этим же путём.
const RESULTS_EN = {
  'Амортизация за год': 'Depreciation for the year', 'Накопленная амортизация': 'Accumulated depreciation',
  'Остаточная стоимость': 'Book value', 'Амортизируемая база': 'Depreciable base',
  'Доля списанного': 'Share written off', 'Амортизация по годам': 'Depreciation by year',
  'Год': 'Year', 'За год': 'For the year', 'Накоплено': 'Accumulated',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Амортизация за год': 'Амортизація за рік', 'Накопленная амортизация': 'Накопичена амортизація',
  'Остаточная стоимость': 'Залишкова вартість', 'Амортизируемая база': 'Амортизована база',
  'Доля списанного': 'Частка списаного', 'Амортизация по годам': 'Амортизація за роками',
  'Год': 'Рік', 'За год': 'За рік', 'Накоплено': 'Накопичено',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'cost': 'Anschaffungswert, €',
      'salvage': 'Restwert, €',
      'life': 'Nutzungsdauer, Jahre',
      'method': 'Verfahren',
      'year': 'Anzuzeigendes Jahr',
    },
    options: {
      'straight': 'linear',
      'ddb': 'doppelt degressiv',
      'syd': 'arithmetisch-degressiv',
    },
    results: {
      'Амортизация за год': 'Abschreibung des Jahres',
      'Накопленная амортизация': 'Kumulierte Abschreibung',
      'Остаточная стоимость': 'Buchwert',
      'Амортизируемая база': 'Abschreibungsgrundlage',
      'Доля списанного': 'Bereits abgeschriebener Anteil',
      'Амортизация по годам': 'Abschreibung nach Jahren',
      'Год': 'Jahr',
      'За год': 'Im Jahr',
      'Накоплено': 'Kumuliert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Стоимость должна быть больше нуля': 'Der Anschaffungswert muss größer als null sein',
      'Ликвидационная стоимость не может быть отрицательной': 'Der Restwert kann nicht negativ sein',
      'Ликвидационная стоимость должна быть меньше первоначальной': 'Der Restwert muss unter dem Anschaffungswert liegen',
      'Срок службы должен быть хотя бы один год': 'Die Nutzungsdauer muss mindestens ein Jahr betragen',
      'Срок службы не может превышать 50 лет': 'Die Nutzungsdauer kann 50 Jahre nicht übersteigen',
      'Год должен лежать внутри срока службы': 'Das Jahr muss innerhalb der Nutzungsdauer liegen',
    },
  },
  en: {
    fields: {
      cost: 'Initial cost, ₽', salvage: 'Salvage value, ₽', life: 'Useful life, years',
      method: 'Method', year: 'Year to show',
    },
    options: { straight: 'straight line', ddb: 'double declining balance', syd: 'sum of years digits' },
    results: RESULTS_EN,
    values: {
      'Стоимость должна быть больше нуля': 'The cost must be greater than zero',
      'Ликвидационная стоимость не может быть отрицательной': 'The salvage value cannot be negative',
      'Ликвидационная стоимость должна быть меньше первоначальной': 'The salvage value must be lower than the initial cost',
      'Срок службы должен быть хотя бы один год': 'The useful life must be at least one year',
      'Срок службы не может превышать 50 лет': 'The useful life cannot exceed 50 years',
      'Год должен лежать внутри срока службы': 'The year must fall within the useful life',
    },
  },
  uk: {
    fields: {
      cost: 'Первісна вартість, ₽', salvage: 'Ліквідаційна вартість, ₽', life: 'Строк служби, років',
      method: 'Метод', year: 'Рік розрахунку',
    },
    options: { straight: 'прямолінійний', ddb: 'подвійний спадний залишок', syd: 'сума чисел років' },
    results: RESULTS_UK,
    values: {
      'Стоимость должна быть больше нуля': 'Вартість має бути більшою за нуль',
      'Ликвидационная стоимость не может быть отрицательной': 'Ліквідаційна вартість не може бути від’ємною',
      'Ликвидационная стоимость должна быть меньше первоначальной': 'Ліквідаційна вартість має бути меншою за первісну',
      'Срок службы должен быть хотя бы один год': 'Строк служби має бути щонайменше один рік',
      'Срок службы не может превышать 50 лет': 'Строк служби не може перевищувати 50 років',
      'Год должен лежать внутри срока службы': 'Рік має бути в межах строку служби',
    },
  },
};
