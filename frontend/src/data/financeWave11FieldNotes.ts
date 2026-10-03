import type{Field}from '../lib/types';
const native:Record<string,Record<string,Record<string,Omit<Partial<Field>,'options'>&{options?:Record<string,string>}>>>={
  "ru": {
    "income-tax-calculator": {
      "incomeBeforePeriod": {
        "label": "Облагаемая база до этого месяца",
        "help": "Введите накопленную базу после прежних вычетов. При месячном расчёте 0 или пустое поле означает средний налог условного полного года; при годовом расчёте это поле не используется."
      },
      "deductions": {
        "help": "Допустимые вычеты за выбранный период проверяются отдельно. Пустое поле означает 0; прошлые вычеты уже должны быть учтены в предыдущей облагаемой базе."
      },
      "rate": {
        "help": "Применяется только в фиксированном режиме: от 0 до менее 100%. Калькулятор не определяет статус, вид дохода или право на эту ставку."
      },
      "mode": {
        "options": {
          "progressive": "Основная шкала РФ с 2025 года",
          "fixed": "Фиксированная"
        }
      }
    },
    "vat-calculator": {
      "operationDate": {
        "optional": true,
        "label": "Дата операции для справки",
        "help": "Пустая дата допустима и не вызывает предупреждения. Дата только вызывает предупреждение о переходе 20% → 22% с 2026 года. Ставка не переключается автоматически; правила авансов, возвратов и корректировок проверяются отдельно."
      }
    },
    "margin-calculator": {
      "quantity": {
        "help": "Целое число не меньше 1. Дробное количество не усекается и 0 не заменяется на 1."
      },
      "markupPct": {
        "help": "Для продажи в убыток допустима отрицательная наценка выше−100%; полученная цена должна быть положительной."
      },
      "marginPct": {
        "help": "Допустима отрицательная маржа для убытка; значение должно быть меньше 100% и давать положительную цену."
      }
    },
    "break-even-calculator": {
      "plannedUnits": {
        "help": "Целое неотрицательное число. Пустое поле или 0 скрывает строки плана; дробные единицы не округляются."
      }
    }
  },
  "en": {
    "margin-calculator": {
      "quantity": {
        "help": "A whole number of at least 1. A fraction is not truncated, and 0 is not replaced with 1."
      },
      "markupPct": {
        "help": "A sale at a loss may use a negative markup above−100%; the resulting price must remain positive."
      },
      "marginPct": {
        "help": "A negative margin can describe a loss; it must be below 100% and produce a positive price."
      }
    },
    "break-even-calculator": {
      "plannedUnits": {
        "help": "A non-negative whole number. Blank or 0 hides the planned-sales rows; fractional units are not rounded."
      }
    }
  },
  "uk": {
    "margin-calculator": {
      "quantity": {
        "help": "Ціле число не менше 1. Дріб не відкидається, а 0 не замінюється на 1."
      },
      "markupPct": {
        "help": "Для продажу зі збитком можлива від’ємна націнка понад−100%; отримана ціна має бути додатною."
      },
      "marginPct": {
        "help": "Від’ємна маржа може описувати збиток; значення має бути менше 100% і давати додатну ціну."
      }
    },
    "break-even-calculator": {
      "plannedUnits": {
        "help": "Ціле невід’ємне число. Порожнє поле або 0 приховує рядки плану; дробові одиниці не округлюються."
      }
    }
  },
  "de": {
    "margin-calculator": {
      "quantity": {
        "help": "Eine ganze Zahl ab 1. Ein Bruch wird nicht abgeschnitten und 0 wird nicht durch 1 ersetzt."
      },
      "markupPct": {
        "help": "Für einen Verkauf mit Verlust ist ein negativer Aufschlag über−100% möglich; der Preis muss positiv bleiben."
      },
      "marginPct": {
        "help": "Eine negative Marge kann einen Verlust beschreiben; sie muss unter 100% liegen und einen positiven Preis ergeben."
      }
    },
    "break-even-calculator": {
      "plannedUnits": {
        "help": "Eine nicht negative ganze Zahl. Leer oder 0 blendet die Planzeilen aus; Bruchteile werden nicht gerundet."
      }
    }
  },
  "es": {
    "margin-calculator": {
      "quantity": {
        "help": "Un entero de al menos 1. No se trunca una fracción ni se sustituye 0 por 1."
      },
      "markupPct": {
        "help": "Una venta con pérdida admite un recargo negativo superior a−100%; el precio resultante debe ser positivo."
      },
      "marginPct": {
        "help": "Un margen negativo puede describir una pérdida; debe ser inferior al 100% y producir un precio positivo."
      }
    },
    "break-even-calculator": {
      "plannedUnits": {
        "help": "Un entero no negativo. Vacío o 0 oculta las filas del plan; las unidades fraccionarias no se redondean."
      }
    }
  }
};
export function applyFinanceWave11Fields(id:string,fields:Field[],locale:string):Field[]{const own=native[locale]?.[id];return own?fields.map(field=>{const patch=own[field.name];if(!patch)return field;const{options,...rest}=patch;return{...field,...rest,...(options&&field.options?{options:field.options.map(option=>({...option,label:options[option.value]??option.label}))}:{})};}):fields;}
