import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'volume': 'Beckenvolumen, l',
      'changePct': 'Anteil gewechselten Wassers, %',
      'decorPct': 'Anteil von Bodengrund und Einrichtung, %',
    },
    results: {
      'Объём подмены': 'Zu wechselndes Wasser',
      'Чистый объём воды': 'Nettowassermenge',
      'Останется': 'Bleibt im Becken',
      'Объём аквариума': 'Beckenvolumen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Объём аквариума должен быть больше нуля': 'Das Beckenvolumen muss größer als null sein',
      'Доля подмены должна быть больше нуля и не больше ста процентов': 'Der Wechselanteil muss über null und höchstens hundert Prozent betragen',
      'Доля грунта и декора должна быть от нуля до ста процентов': 'Der Anteil von Bodengrund und Einrichtung muss zwischen null und hundert Prozent liegen',
    },
  },
  en: {
    fields: {
      volume: 'Tank volume, l',
      changePct: 'Share of water changed, %',
      decorPct: 'Share taken by substrate and decor, %',
    },
    results: {
      'Объём подмены': 'Water to change',
      'Чистый объём воды': 'Net water volume',
      'Останется': 'Left in the tank',
      'Объём аквариума': 'Tank volume',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Объём аквариума должен быть больше нуля': 'The tank volume must be greater than zero',
      'Доля подмены должна быть больше нуля и не больше ста процентов': 'The change share must be above zero and at most one hundred per cent',
      'Доля грунта и декора должна быть от нуля до ста процентов': 'The substrate and decor share must be between zero and one hundred per cent',
    },
  },
  uk: {
    fields: {
      volume: 'Обсяг акваріума, л',
      changePct: 'Частка підміни води, %',
      decorPct: 'Частка ґрунту й декору, %',
    },
    results: {
      'Объём подмены': 'Обсяг підміни',
      'Чистый объём воды': 'Чистий обсяг води',
      'Останется': 'Залишиться',
      'Объём аквариума': 'Обсяг акваріума',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Объём аквариума должен быть больше нуля': 'Обсяг акваріума має бути більшим за нуль',
      'Доля подмены должна быть больше нуля и не больше ста процентов': 'Частка підміни має бути більшою за нуль і не більшою за сто відсотків',
      'Доля грунта и декора должна быть от нуля до ста процентов': 'Частка ґрунту й декору має бути від нуля до ста відсотків',
    },
  },
  es: {
    fields: {
      "volume": "Volumen del acuario, l",
      "changePct": "Parte del agua que se cambia, %",
      "decorPct": "Parte ocupada por sustrato y decoración, %",
    },
    options: {},
    results: {
      "Объём подмены": "Agua que cambiar",
      "Чистый объём воды": "Volumen neto de agua",
      "Останется": "Queda en el acuario",
      "Объём аквариума": "Volumen del acuario",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Объём аквариума должен быть больше нуля": "El volumen del acuario debe ser mayor que cero",
      "Доля подмены должна быть больше нуля и не больше ста процентов": "La parte que se cambia debe ser mayor que cero y como mucho cien por cien",
      "Доля грунта и декора должна быть от нуля до ста процентов": "La parte de sustrato y decoración debe estar entre cero y cien por ciento",
    },
  },
};
