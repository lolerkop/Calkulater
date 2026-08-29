import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "Стоимость поездки": "Trip cost",
    "Топливо": "Fuel",
    "Израсходовано литров": "Litres used",
    "Пройденное расстояние": "Distance covered",
    "Платные дороги": "Tolls",
    "На человека": "Per person",
    "Пассажиров": "Passengers",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "Стоимость поездки": "Вартість поїздки",
    "Топливо": "Пальне",
    "Израсходовано литров": "Витрачено літрів",
    "Пройденное расстояние": "Пройдена відстань",
    "Платные дороги": "Платні дороги",
    "На человека": "На людину",
    "Пассажиров": "Пасажирів",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'distance': 'Strecke, km',
      'consumption': 'Verbrauch, l/100 km',
      'fuelPrice': 'Kraftstoffpreis',
      'tolls': 'Maut',
      'passengers': 'Mitfahrende',
      'roundTrip': 'Rückfahrt',
    },
    options: {
      'no': 'Nein',
      'yes': 'Ja',
    },
    results: {
      'Стоимость поездки': 'Kosten der Fahrt',
      'Топливо': 'Kraftstoff',
      'Израсходовано литров': 'Verbrauchte Liter',
      'Пройденное расстояние': 'Zurückgelegte Strecke',
      'Платные дороги': 'Maut',
      'На человека': 'Je Person',
      'Пассажиров': 'Mitfahrende',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'л': 'l',
      'км': 'km',
      'Расстояние должно быть больше нуля': 'Die Strecke muss größer als null sein',
      'Расход должен быть больше нуля': 'Der Verbrauch muss größer als null sein',
      'Цена топлива должна быть больше нуля': 'Der Kraftstoffpreis muss größer als null sein',
      'Плата за дороги не может быть отрицательной': 'Die Maut kann nicht negativ sein',
      'Пассажиров должно быть не меньше одного': 'Es muss mindestens eine Person sein',
    },
  },
  en: {
    fields: { distance: "Distance, km", consumption: "Consumption, L/100 km", fuelPrice: "Fuel price", tolls: "Tolls", passengers: "Passengers", roundTrip: "Return trip" },
    options: { no: "No", yes: "Yes" },
    results: RESULTS_EN,
    values: {
    "₽": "$",
    "л": "L",
    "км": "km",
    "Расстояние должно быть больше нуля": "The distance must be greater than zero",
    "Расход должен быть больше нуля": "The consumption must be greater than zero",
    "Цена топлива должна быть больше нуля": "The fuel price must be greater than zero",
    "Плата за дороги не может быть отрицательной": "Tolls cannot be negative",
    "Пассажиров должно быть не меньше одного": "There must be at least one passenger",
    },
  },
  uk: {
    fields: { distance: "Відстань, км", consumption: "Витрата, л/100 км", fuelPrice: "Ціна пального", tolls: "Платні дороги", passengers: "Пасажирів", roundTrip: "Туди і назад" },
    options: { no: "Ні", yes: "Так" },
    results: RESULTS_UK,
    values: {
    "₽": "₴",
    "л": "л",
    "км": "км",
    "Расстояние должно быть больше нуля": "Відстань має бути більшою за нуль",
    "Расход должен быть больше нуля": "Витрата має бути більшою за нуль",
    "Цена топлива должна быть больше нуля": "Ціна пального має бути більшою за нуль",
    "Плата за дороги не может быть отрицательной": "Плата за дороги не може бути від’ємною",
    "Пассажиров должно быть не меньше одного": "Пасажирів має бути щонайменше один",
    },
  },
};
