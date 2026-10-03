import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "equity": "Margin posted",
    "leverage": "Leverage, ×",
    "entry": "Entry price",
    "maintenancePct": "Fixed maintenance share of initial notional, %"
  },
  "results": {
    "Размер позиции": "Position size",
    "Единиц позиции": "Units held",
    "Цена ликвидации": "Liquidation price",
    "Падение до ликвидации": "Drop to liquidation",
    "Залог": "Margin posted",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "Залог должен быть больше нуля": "The margin must be greater than zero",
    "Плечо не может быть меньше единицы": "Leverage cannot be below one",
    "Цена входа должна быть больше нуля": "The entry price must be greater than zero",
    "Поддерживающая маржа должна быть от нуля до ста процентов": "The maintenance margin must be between zero and one hundred per cent",
    "Поддерживающая маржа должна быть меньше начальной доли залога": "Fixed maintenance must be below the initial collateral share"
  }
},
  "uk": {
  "fields": {
    "equity": "Застава",
    "leverage": "Плече, ×",
    "entry": "Ціна входу",
    "maintenancePct": "Фіксована підтримувальна частка початкової позиції, %"
  },
  "results": {
    "Размер позиции": "Розмір позиції",
    "Единиц позиции": "Одиниць позиції",
    "Цена ликвидации": "Ціна ліквідації",
    "Падение до ликвидации": "Падіння до ліквідації",
    "Залог": "Застава",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "Залог должен быть больше нуля": "Застава має бути більшою за нуль",
    "Плечо не может быть меньше единицы": "Плече не може бути меншим за одиницю",
    "Цена входа должна быть больше нуля": "Ціна входу має бути більшою за нуль",
    "Поддерживающая маржа должна быть от нуля до ста процентов": "Підтримувальна маржа має бути від нуля до ста відсотків",
    "Поддерживающая маржа должна быть меньше начальной доли залога": "Фіксована підтримувальна частка має бути меншою за початкову частку застави"
  }
},
  "de": {
  "fields": {
    "equity": "Eingesetzte Sicherheit",
    "leverage": "Hebel, ×",
    "entry": "Einstiegspreis",
    "maintenancePct": "Fester Erhaltungsanteil des Anfangsnotionals, %"
  },
  "results": {
    "Размер позиции": "Positionsgröße",
    "Единиц позиции": "Gehaltene Einheiten",
    "Цена ликвидации": "Liquidationspreis",
    "Падение до ликвидации": "Rückgang bis zur Liquidation",
    "Залог": "Eingesetzte Sicherheit",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "Залог должен быть больше нуля": "Die Sicherheit muss größer als null sein",
    "Плечо не может быть меньше единицы": "Der Hebel kann nicht unter eins liegen",
    "Цена входа должна быть больше нуля": "Der Einstiegspreis muss größer als null sein",
    "Поддерживающая маржа должна быть от нуля до ста процентов": "Die Erhaltungsmarge muss zwischen null und hundert Prozent liegen",
    "Поддерживающая маржа должна быть меньше начальной доли залога": "Die feste Erhaltungsmargin muss kleiner als der anfängliche Sicherheitenanteil sein"
  }
},
  "es": {
  "fields": {
    "equity": "Garantía aportada",
    "leverage": "Apalancamiento, ×",
    "entry": "Precio de entrada",
    "maintenancePct": "Porción fija de mantenimiento del nocional inicial, %"
  },
  "options": {},
  "results": {
    "Размер позиции": "Tamaño de la posición",
    "Единиц позиции": "Unidades en cartera",
    "Цена ликвидации": "Precio de liquidación",
    "Падение до ликвидации": "Caída hasta la liquidación",
    "Залог": "Garantía aportada",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "Залог должен быть больше нуля": "La garantía debe ser mayor que cero",
    "Плечо не может быть меньше единицы": "El apalancamiento no puede ser menor que uno",
    "Цена входа должна быть больше нуля": "El precio de entrada debe ser mayor que cero",
    "Поддерживающая маржа должна быть от нуля до ста процентов": "El margen de mantenimiento debe estar entre cero y cien por ciento",
    "Поддерживающая маржа должна быть меньше начальной доли залога": "El mantenimiento fijo debe ser inferior a la proporción inicial de garantía"
  }
}
};
