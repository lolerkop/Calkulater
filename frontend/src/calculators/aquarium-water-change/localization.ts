import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
};
