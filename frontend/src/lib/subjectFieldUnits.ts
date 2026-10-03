import type { Field } from './types';
import type { Locale } from './clientI18n';

// Subject-reviewed descriptions for fields whose quantity is defined by the
// published model but has no separate field.unit property. This module serves
// the static fields-and-units section only; it changes no parser or calculation.
// Evidence: reports/originality-final-static-unit-curation.json (155 exact pairs).
type PublicLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type Caption = Readonly<Record<PublicLocale, string>>;
type Contract = Readonly<{ type: Field['type']; captionKey: string }>;

const captions: Readonly<Record<string, Caption>> = {
  "money": {
    "ru": "денежные единицы",
    "en": "monetary units",
    "uk": "грошові одиниці",
    "de": "Geldeinheiten",
    "es": "unidades monetarias"
  },
  "g": {
    "ru": "г",
    "en": "g",
    "uk": "г",
    "de": "g",
    "es": "g"
  },
  "mL": {
    "ru": "мл",
    "en": "mL",
    "uk": "мл",
    "de": "ml",
    "es": "ml"
  },
  "months": {
    "ru": "месяцы",
    "en": "months",
    "uk": "місяці",
    "de": "Monate",
    "es": "meses"
  },
  "L": {
    "ru": "л",
    "en": "L",
    "uk": "л",
    "de": "l",
    "es": "l"
  },
  "kg_per_token": {
    "ru": "кг",
    "en": "kg",
    "uk": "кг",
    "de": "kg",
    "es": "kg"
  },
  "mL_g": {
    "ru": "мл/г",
    "en": "mL/g",
    "uk": "мл/г",
    "de": "ml/g",
    "es": "ml/g"
  },
  "fixed_physical_unit": {
    "ru": "имя и доход в одной денежной единице",
    "en": "name and income in one monetary unit",
    "uk": "ім’я та дохід в одній грошовій одиниці",
    "de": "Name und Einkommen in derselben Geldeinheit",
    "es": "nombre e ingresos en una misma unidad monetaria"
  },
  "years": {
    "ru": "годы",
    "en": "years",
    "uk": "роки",
    "de": "Jahre",
    "es": "años"
  },
  "calendar_years": {
    "ru": "лет",
    "en": "years",
    "uk": "років",
    "de": "Jahre",
    "es": "años"
  },
  "name_mass_in_g_energy_in_kcal_100_g": {
    "ru": "название; масса в г; ккал на 100 г",
    "en": "name; mass in g; kcal per 100 g",
    "uk": "назва; маса в г; ккал на 100 г",
    "de": "Name; Masse in g; kcal je 100 g",
    "es": "nombre; masa en g; kcal por 100 g"
  },
  "moneyOrCommissionPct": {
    "ru": "денежная сумма или % — по режиму расчёта",
    "en": "monetary amount or %, according to calculation mode",
    "uk": "грошова сума або % — за режимом розрахунку",
    "de": "Geldbetrag oder % je nach Berechnungsmodus",
    "es": "importe monetario o %, según el modo de cálculo"
  },
  "moneyPerItem": {
    "ru": "денежные единицы/единицу товара",
    "en": "monetary units/item",
    "uk": "грошові одиниці/одиницю товару",
    "de": "Geldeinheiten/Artikeleinheit",
    "es": "unidades monetarias/unidad de producto"
  },
  "selected_volume_unit_when_direction_toGrams_g_when_direction_toVolume": {
    "ru": "г или выбранная единица объёма — по направлению",
    "en": "g or selected volume unit, according to direction",
    "uk": "г або вибрана одиниця об’єму — за напрямом",
    "de": "g oder gewählte Volumeneinheit gemäß Richtung",
    "es": "g o unidad de volumen seleccionada, según dirección"
  },
  "kcal_100_g": {
    "ru": "ккал/100 г",
    "en": "kcal/100 g",
    "uk": "ккал/100 г",
    "de": "kcal/100 g",
    "es": "kcal/100 g"
  },
  "selectedLoanTerm": {
    "ru": "месяцы / годы",
    "en": "months / years",
    "uk": "місяці / роки",
    "de": "Monate / Jahre",
    "es": "meses / años"
  },
  "foreignOrPaymentCurrency": {
    "ru": "единицы обмениваемой валюты при продаже; денежные единицы расчёта при покупке",
    "en": "foreign-currency units when selling; payment-currency units when buying",
    "uk": "одиниці обмінюваної валюти під час продажу; грошові одиниці розрахунку під час купівлі",
    "de": "Fremdwährungseinheiten beim Verkauf; Zahlungswährungseinheiten beim Kauf",
    "es": "unidades de divisa al vender; unidades de la moneda de pago al comprar"
  },
  "paymentCurrency": {
    "ru": "денежные единицы расчёта",
    "en": "payment-currency units",
    "uk": "грошові одиниці розрахунку",
    "de": "Zahlungswährungseinheiten",
    "es": "unidades de la moneda de pago"
  },
  "paymentPerForeignCurrency": {
    "ru": "денежные единицы расчёта за 1 единицу обмениваемой валюты",
    "en": "payment-currency units per 1 foreign-currency unit",
    "uk": "грошові одиниці розрахунку за 1 одиницю обмінюваної валюти",
    "de": "Zahlungswährungseinheiten je 1 Fremdwährungseinheit",
    "es": "unidades de la moneda de pago por 1 unidad de divisa"
  },
  "calendar_days": {
    "ru": "дней",
    "en": "days",
    "uk": "днів",
    "de": "Tage",
    "es": "días"
  },
  "calendar_months": {
    "ru": "месяцев",
    "en": "months",
    "uk": "місяців",
    "de": "Monate",
    "es": "meses"
  },
  "calendar_weeks": {
    "ru": "недель",
    "en": "weeks",
    "uk": "тижнів",
    "de": "Wochen",
    "es": "semanas"
  },
  "fixed_physical_unit_2": {
    "ru": "название; остаток и месячный платёж в одной валюте; годовая ставка в %",
    "en": "name; balance and monthly payment in one currency; annual rate in %",
    "uk": "назва; залишок і місячний платіж в одній валюті; річна ставка у %",
    "de": "Name; Restschuld und Monatszahlung in derselben Währung; Jahreszins in %",
    "es": "nombre; saldo y pago mensual en una misma moneda; tipo anual en %"
  },
  "matchingConcentrationPerVolume": {
    "ru": "в одинаковых единицах концентрации на объём",
    "en": "in matching concentration-per-volume units",
    "uk": "в однакових одиницях концентрації на об’єм",
    "de": "in gleichen Einheiten der Konzentration je Volumen",
    "es": "en las mismas unidades de concentración por volumen"
  },
  "FIXED_UNIT": {
    "ru": "мл",
    "en": "mL",
    "uk": "мл",
    "de": "mL",
    "es": "mL"
  },
  "annualDividendPerShare": {
    "ru": "денежные единицы на акцию за год",
    "en": "monetary units per share over one year",
    "uk": "грошові одиниці на акцію за рік",
    "de": "Geldeinheiten je Aktie für ein Jahr",
    "es": "unidades monetarias por acción durante un año"
  },
  "moneyPerShare": {
    "ru": "денежные единицы/акцию",
    "en": "monetary units/share",
    "uk": "грошові одиниці/акцію",
    "de": "Geldeinheiten/Aktie",
    "es": "unidades monetarias/acción"
  },
  "drops_min": {
    "ru": "капель/мин",
    "en": "drops/min",
    "uk": "крапель/хв",
    "de": "Tropfen/min",
    "es": "gotas/min"
  },
  "FIXED_UNIT_2": {
    "ru": "сутки",
    "en": "days",
    "uk": "доби",
    "de": "Tage",
    "es": "días"
  },
  "FIXED_UNIT_3": {
    "ru": "ч/сутки",
    "en": "h/day",
    "uk": "год/добу",
    "de": "h/Tag",
    "es": "h/día"
  },
  "selectedPower": {
    "ru": "в выбранной единице мощности",
    "en": "in the selected power unit",
    "uk": "у вибраній одиниці потужності",
    "de": "in der gewählten Leistungseinheit",
    "es": "en la unidad de potencia seleccionada"
  },
  "hoursPerWorkingDay": {
    "ru": "ч/рабочий день",
    "en": "h/working day",
    "uk": "год/робочий день",
    "de": "h/Arbeitstag",
    "es": "h/día de trabajo"
  },
  "workingDaysPerMonth": {
    "ru": "рабочие дни/месяц",
    "en": "working days/month",
    "uk": "робочі дні/місяць",
    "de": "Arbeitstage/Monat",
    "es": "días de trabajo/mes"
  },
  "h": {
    "ru": "ч",
    "en": "h",
    "uk": "год",
    "de": "h",
    "es": "h"
  },
  "kW": {
    "ru": "кВт",
    "en": "kW",
    "uk": "кВт",
    "de": "kW",
    "es": "kW"
  },
  "L_kWh": {
    "ru": "л/(кВт·ч)",
    "en": "L/kWh",
    "uk": "л/(кВт·год)",
    "de": "l/kWh",
    "es": "l/kWh"
  },
  "commonCoordinateLength": {
    "ru": "общая единица длины координат",
    "en": "common coordinate length unit",
    "uk": "спільна одиниця довжини координат",
    "de": "gemeinsame Längeneinheit der Koordinaten",
    "es": "unidad común de longitud de las coordenadas"
  },
  "FIXED_UNIT_4": {
    "ru": "м²",
    "en": "m²",
    "uk": "м²",
    "de": "m²",
    "es": "m²"
  },
  "FIXED_UNIT_5": {
    "ru": "м",
    "en": "m",
    "uk": "м",
    "de": "m",
    "es": "m"
  },
  "FIXED_UNIT_6": {
    "ru": "Вт/м³",
    "en": "W/m³",
    "uk": "Вт/м³",
    "de": "W/m³",
    "es": "W/m³"
  },
  "selectedCurrent": {
    "ru": "в выбранной единице тока",
    "en": "in the selected current unit",
    "uk": "у вибраній одиниці струму",
    "de": "in der gewählten Stromeinheit",
    "es": "en la unidad de corriente seleccionada"
  },
  "FIXED_UNIT_7": {
    "ru": "лм",
    "en": "lm",
    "uk": "лм",
    "de": "lm",
    "es": "lm"
  },
  "FIXED_UNIT_8": {
    "ru": "лк",
    "en": "lx",
    "uk": "лк",
    "de": "lx",
    "es": "lx"
  },
  "FIXED_UNIT_9": {
    "ru": "г/моль",
    "en": "g/mol",
    "uk": "г/моль",
    "de": "g/mol",
    "es": "g/mol"
  },
  "FIXED_UNIT_10": {
    "ru": "моль",
    "en": "mol",
    "uk": "моль",
    "de": "mol",
    "es": "mol"
  },
  "selectedVolume": {
    "ru": "в выбранной единице объёма",
    "en": "in the selected volume unit",
    "uk": "у вибраній одиниці об’єму",
    "de": "in der gewählten Volumeneinheit",
    "es": "en la unidad de volumen seleccionada"
  },
  "moneyPerYear": {
    "ru": "денежные единицы/год",
    "en": "monetary units/year",
    "uk": "грошові одиниці/рік",
    "de": "Geldeinheiten/Jahr",
    "es": "unidades monetarias/año"
  },
  "FIXED_UNIT_11": {
    "ru": "моль/л",
    "en": "mol/L",
    "uk": "моль/л",
    "de": "mol/L",
    "es": "mol/L"
  },
  "selectedFlow": {
    "ru": "в выбранной единице объёмного расхода",
    "en": "in the selected volume-flow unit",
    "uk": "у вибраній одиниці об’ємної витрати",
    "de": "in der gewählten Einheit des Volumenstroms",
    "es": "en la unidad de caudal volumétrico seleccionada"
  },
  "FIXED_UNIT_12": {
    "ru": "м³",
    "en": "m³",
    "uk": "м³",
    "de": "m³",
    "es": "m³"
  },
  "FIXED_UNIT_13": {
    "ru": "мм",
    "en": "mm",
    "uk": "мм",
    "de": "mm",
    "es": "mm"
  },
  "name_quantity_in_ingredient_unit_price_in_one_currency_per_matching_quantity_unit": {
    "ru": "название; количество в единице ингредиента; цена за неё в одной валюте",
    "en": "name; quantity in ingredient unit; price per that unit in one currency",
    "uk": "назва; кількість в одиниці інгредієнта; ціна за неї в одній валюті",
    "de": "Name; Menge in Zutateneinheit; Preis je Einheit in einer Währung",
    "es": "nombre; cantidad en la unidad del ingrediente; precio por ella en una moneda"
  },
  "name_quantity_in_the_ingredient_unit_unchanged_per_row": {
    "ru": "название; количество в исходной единице ингредиента",
    "en": "name; quantity in the ingredient’s original unit",
    "uk": "назва; кількість у початковій одиниці інгредієнта",
    "de": "Name; Menge in der ursprünglichen Einheit der Zutat",
    "es": "nombre; cantidad en la unidad original del ingrediente"
  },
  "min": {
    "ru": "мин",
    "en": "min",
    "uk": "хв",
    "de": "min",
    "es": "min"
  },
  "min_kg": {
    "ru": "мин/кг",
    "en": "min/kg",
    "uk": "хв/кг",
    "de": "min/kg",
    "es": "min/kg"
  },
  "selected_distance_unit_km_or_mi": {
    "ru": "выбранная единица дистанции — км или мили",
    "en": "selected distance unit — km or mi",
    "uk": "вибрана одиниця дистанції — км або милі",
    "de": "gewählte Streckeneinheit — km oder mi",
    "es": "unidad de distancia seleccionada — km o mi"
  },
  "s": {
    "ru": "с",
    "en": "s",
    "uk": "с",
    "de": "s",
    "es": "s"
  },
  "fixed_physical_unit_3": {
    "ru": "название; цена в одной валюте; период в месяцах",
    "en": "name; price in one currency; period in months",
    "uk": "назва; ціна в одній валюті; період у місяцях",
    "de": "Name; Preis in derselben Währung; Zeitraum in Monaten",
    "es": "nombre; precio en una misma moneda; periodo en meses"
  },
  "fixed_physical_unit_4": {
    "ru": "начало и конец HH:MM; перерыв в минутах",
    "en": "start and end HH:MM; break in minutes",
    "uk": "початок і кінець HH:MM; перерва у хвилинах",
    "de": "Beginn und Ende HH:MM; Pause in Minuten",
    "es": "inicio y fin HH:MM; pausa en minutos"
  },
  "fixed_physical_unit_5": {
    "ru": "название; расход в единицах услуги; тариф в денежных единицах за такую единицу",
    "en": "name; usage in service units; tariff in monetary units per matching service unit",
    "uk": "назва; споживання в одиницях послуги; тариф у грошових одиницях за таку одиницю",
    "de": "Name; Verbrauch in Serviceeinheiten; Tarif in Geldeinheiten je entsprechender Serviceeinheit",
    "es": "nombre; consumo en unidades del servicio; tarifa en unidades monetarias por esa misma unidad"
  },
  "daysPerYear": {
    "ru": "дни/год",
    "en": "days/year",
    "uk": "дні/рік",
    "de": "Tage/Jahr",
    "es": "días/año"
  },
  "days": {
    "ru": "дни",
    "en": "days",
    "uk": "дні",
    "de": "Tage",
    "es": "días"
  },
  "FIXED_UNIT_14": {
    "ru": "°C",
    "en": "°C",
    "uk": "°C",
    "de": "°C",
    "es": "°C"
  },
  "FIXED_UNIT_15": {
    "ru": "л",
    "en": "L",
    "uk": "л",
    "de": "L",
    "es": "L"
  },
  "value_in_one_common_data_unit_weight_in_one_consistent_basis_no_fixed_SI_unit_is_inferred": {
    "ru": "значение в общей единице данных; вес в согласованной основе",
    "en": "value in a common data unit; weight on a consistent basis",
    "uk": "значення у спільній одиниці даних; вага на узгодженій основі",
    "de": "Wert in gemeinsamer Dateneinheit; Gewicht mit einheitlicher Grundlage",
    "es": "valor en una unidad común de datos; peso con una base coherente"
  }
};

export const subjectFieldUnitContracts: Readonly<Record<string, Readonly<Record<string, Contract>>>> = {
  "ad-roi": {
    "revenue": {
      "type": "number",
      "captionKey": "money"
    },
    "spend": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "alcohol-units": {
    "standard_g": {
      "type": "number",
      "captionKey": "g"
    },
    "volume_ml": {
      "type": "number",
      "captionKey": "mL"
    }
  },
  "annuity": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "aov": {
    "revenue": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "aquarium-water-change": {
    "volume": {
      "type": "number",
      "captionKey": "L"
    }
  },
  "bakers-percentage": {
    "flour": {
      "type": "number",
      "captionKey": "g"
    }
  },
  "barbell-plates": {
    "plates": {
      "type": "textarea",
      "captionKey": "kg_per_token"
    }
  },
  "brew-ratio": {
    "coffee": {
      "type": "number",
      "captionKey": "g"
    },
    "ratio": {
      "type": "number",
      "captionKey": "mL_g"
    },
    "water": {
      "type": "number",
      "captionKey": "mL"
    }
  },
  "budget-split": {
    "incomes": {
      "type": "textarea",
      "captionKey": "fixed_physical_unit"
    }
  },
  "cagr": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "calorie-calculator": {
    "age": {
      "type": "number",
      "captionKey": "calendar_years"
    }
  },
  "calories-per-serving": {
    "ingredients": {
      "type": "textarea",
      "captionKey": "name_mass_in_g_energy_in_kcal_100_g"
    }
  },
  "commission": {
    "a": {
      "type": "number",
      "captionKey": "money"
    },
    "b": {
      "type": "number",
      "captionKey": "moneyOrCommissionPct"
    }
  },
  "compound-interest": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "contribution-margin": {
    "price": {
      "type": "number",
      "captionKey": "moneyPerItem"
    },
    "variable": {
      "type": "number",
      "captionKey": "moneyPerItem"
    }
  },
  "convert-cooking-weight": {
    "value": {
      "type": "number",
      "captionKey": "selected_volume_unit_when_direction_toGrams_g_when_direction_toVolume"
    }
  },
  "cooked-weight": {
    "cooked": {
      "type": "number",
      "captionKey": "g"
    },
    "kcalPer100Raw": {
      "type": "number",
      "captionKey": "kcal_100_g"
    },
    "raw": {
      "type": "number",
      "captionKey": "g"
    }
  },
  "credit-calculator": {
    "term": {
      "type": "number",
      "captionKey": "selectedLoanTerm"
    }
  },
  "currency-exchange-fee": {
    "amount": {
      "type": "number",
      "captionKey": "foreignOrPaymentCurrency"
    },
    "feeFixed": {
      "type": "number",
      "captionKey": "paymentCurrency"
    },
    "rate": {
      "type": "number",
      "captionKey": "paymentPerForeignCurrency"
    }
  },
  "date-shift-calculator": {
    "shiftDays": {
      "type": "number",
      "captionKey": "calendar_days"
    },
    "shiftMonths": {
      "type": "number",
      "captionKey": "calendar_months"
    },
    "shiftWeeks": {
      "type": "number",
      "captionKey": "calendar_weeks"
    },
    "shiftYears": {
      "type": "number",
      "captionKey": "calendar_years"
    }
  },
  "dca": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "debt-snowball-avalanche": {
    "debts": {
      "type": "textarea",
      "captionKey": "fixed_physical_unit_2"
    }
  },
  "deposit-calculator": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "depreciation-methods": {
    "life": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "dilution": {
    "c1": {
      "type": "number",
      "captionKey": "matchingConcentrationPerVolume"
    },
    "c2": {
      "type": "number",
      "captionKey": "matchingConcentrationPerVolume"
    },
    "v1": {
      "type": "number",
      "captionKey": "FIXED_UNIT"
    },
    "v2": {
      "type": "number",
      "captionKey": "FIXED_UNIT"
    }
  },
  "discount-calculator": {
    "discountAmt": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "dividend-yield": {
    "dividend": {
      "type": "number",
      "captionKey": "annualDividendPerShare"
    },
    "price": {
      "type": "number",
      "captionKey": "moneyPerShare"
    }
  },
  "drip-water-leak": {
    "dropMl": {
      "type": "number",
      "captionKey": "mL"
    },
    "drops": {
      "type": "number",
      "captionKey": "drops_min"
    }
  },
  "early-repayment": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "electricity-usage": {
    "days": {
      "type": "number",
      "captionKey": "FIXED_UNIT_2"
    },
    "hoursPerDay": {
      "type": "number",
      "captionKey": "FIXED_UNIT_3"
    },
    "power": {
      "type": "number",
      "captionKey": "selectedPower"
    }
  },
  "emergency-fund": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "freelance-rate": {
    "hoursPerDay": {
      "type": "number",
      "captionKey": "hoursPerWorkingDay"
    },
    "workDays": {
      "type": "number",
      "captionKey": "workingDaysPerMonth"
    }
  },
  "generator-fuel": {
    "hours": {
      "type": "number",
      "captionKey": "h"
    },
    "load": {
      "type": "number",
      "captionKey": "kW"
    },
    "sfc": {
      "type": "number",
      "captionKey": "L_kWh"
    }
  },
  "geom-polygon-coords": {
    "points": {
      "type": "textarea",
      "captionKey": "commonCoordinateLength"
    }
  },
  "heating-power": {
    "area": {
      "type": "number",
      "captionKey": "FIXED_UNIT_4"
    },
    "height": {
      "type": "number",
      "captionKey": "FIXED_UNIT_5"
    },
    "wattsPerM3": {
      "type": "number",
      "captionKey": "FIXED_UNIT_6"
    }
  },
  "home-equity": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "inflation": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "installment": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "lease-payment": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "led-resistor": {
    "current": {
      "type": "number",
      "captionKey": "selectedCurrent"
    }
  },
  "lighting": {
    "area": {
      "type": "number",
      "captionKey": "FIXED_UNIT_4"
    },
    "lampLumens": {
      "type": "number",
      "captionKey": "FIXED_UNIT_7"
    },
    "norm": {
      "type": "number",
      "captionKey": "FIXED_UNIT_8"
    }
  },
  "ltv": {
    "months": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "max-loan": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "molarity": {
    "mass": {
      "type": "number",
      "captionKey": "g"
    },
    "molarMass": {
      "type": "number",
      "captionKey": "FIXED_UNIT_9"
    },
    "moles": {
      "type": "number",
      "captionKey": "FIXED_UNIT_10"
    },
    "volume": {
      "type": "number",
      "captionKey": "selectedVolume"
    }
  },
  "moles": {
    "mass": {
      "type": "number",
      "captionKey": "g"
    },
    "molarMass": {
      "type": "number",
      "captionKey": "FIXED_UNIT_9"
    },
    "moles": {
      "type": "number",
      "captionKey": "FIXED_UNIT_10"
    }
  },
  "mortgage-calculator": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "one-rep-max-calculator": {
    "weight": {
      "type": "number",
      "captionKey": "kg_per_token"
    }
  },
  "overtime": {
    "normalHours": {
      "type": "number",
      "captionKey": "h"
    },
    "overtimeHours": {
      "type": "number",
      "captionKey": "h"
    }
  },
  "payback-period": {
    "cashflow": {
      "type": "number",
      "captionKey": "moneyPerYear"
    },
    "investment": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "pet-age": {
    "years": {
      "type": "number",
      "captionKey": "calendar_years"
    }
  },
  "pet-food": {
    "kcalPer100": {
      "type": "number",
      "captionKey": "kcal_100_g"
    },
    "weight": {
      "type": "number",
      "captionKey": "kg_per_token"
    }
  },
  "ph-poh": {
    "h": {
      "type": "number",
      "captionKey": "FIXED_UNIT_11"
    }
  },
  "pool-fill-time": {
    "depth": {
      "type": "number",
      "captionKey": "FIXED_UNIT_5"
    },
    "diameter": {
      "type": "number",
      "captionKey": "FIXED_UNIT_5"
    },
    "flow": {
      "type": "number",
      "captionKey": "selectedFlow"
    },
    "length": {
      "type": "number",
      "captionKey": "FIXED_UNIT_5"
    },
    "volume": {
      "type": "number",
      "captionKey": "FIXED_UNIT_12"
    },
    "width": {
      "type": "number",
      "captionKey": "FIXED_UNIT_5"
    }
  },
  "rainfall-volume": {
    "area": {
      "type": "number",
      "captionKey": "FIXED_UNIT_4"
    },
    "depth": {
      "type": "number",
      "captionKey": "FIXED_UNIT_13"
    }
  },
  "real-return": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "recipe-cost": {
    "ingredients": {
      "type": "textarea",
      "captionKey": "name_quantity_in_ingredient_unit_price_in_one_currency_per_matching_quantity_unit"
    }
  },
  "recipe-scale": {
    "ingredients": {
      "type": "textarea",
      "captionKey": "name_quantity_in_the_ingredient_unit_unchanged_per_row"
    }
  },
  "refinancing": {
    "newMonths": {
      "type": "number",
      "captionKey": "months"
    },
    "oldMonths": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "revenue-per-employee": {
    "revenue": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "roast-time": {
    "base_minutes": {
      "type": "number",
      "captionKey": "min"
    },
    "minutes_per_kg": {
      "type": "number",
      "captionKey": "min_kg"
    },
    "weight": {
      "type": "number",
      "captionKey": "kg_per_token"
    }
  },
  "roi": {
    "extra": {
      "type": "number",
      "captionKey": "money"
    },
    "invested": {
      "type": "number",
      "captionKey": "money"
    },
    "received": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "running-pace-calculator": {
    "distance": {
      "type": "number",
      "captionKey": "selected_distance_unit_km_or_mi"
    },
    "hours": {
      "type": "number",
      "captionKey": "h"
    },
    "minutes": {
      "type": "number",
      "captionKey": "min"
    },
    "seconds": {
      "type": "number",
      "captionKey": "s"
    }
  },
  "savings-goal": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "scale-model": {
    "model": {
      "type": "number",
      "captionKey": "FIXED_UNIT_13"
    },
    "real": {
      "type": "number",
      "captionKey": "FIXED_UNIT_13"
    }
  },
  "shipping-per-unit": {
    "packaging": {
      "type": "number",
      "captionKey": "money"
    },
    "shipping": {
      "type": "number",
      "captionKey": "money"
    }
  },
  "simple-interest": {
    "interest": {
      "type": "number",
      "captionKey": "money"
    },
    "principal": {
      "type": "number",
      "captionKey": "money"
    },
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "sleep-time": {
    "fallAsleep": {
      "type": "number",
      "captionKey": "min"
    },
    "hour": {
      "type": "number",
      "captionKey": "h"
    },
    "minute": {
      "type": "number",
      "captionKey": "min"
    }
  },
  "solution-concentration": {
    "solute": {
      "type": "number",
      "captionKey": "g"
    },
    "solution": {
      "type": "number",
      "captionKey": "g"
    },
    "volume": {
      "type": "number",
      "captionKey": "FIXED_UNIT"
    }
  },
  "subscriptions-cost": {
    "items": {
      "type": "textarea",
      "captionKey": "fixed_physical_unit_3"
    }
  },
  "time-duration": {
    "endHour": {
      "type": "number",
      "captionKey": "h"
    },
    "endMinute": {
      "type": "number",
      "captionKey": "min"
    },
    "spanHour": {
      "type": "number",
      "captionKey": "h"
    },
    "spanMinute": {
      "type": "number",
      "captionKey": "min"
    },
    "startHour": {
      "type": "number",
      "captionKey": "h"
    },
    "startMinute": {
      "type": "number",
      "captionKey": "min"
    }
  },
  "time-value-money": {
    "years": {
      "type": "number",
      "captionKey": "years"
    }
  },
  "timesheet-week": {
    "lines": {
      "type": "textarea",
      "captionKey": "fixed_physical_unit_4"
    }
  },
  "timezone-difference": {
    "fromOffset": {
      "type": "number",
      "captionKey": "h"
    },
    "hour": {
      "type": "number",
      "captionKey": "h"
    },
    "minute": {
      "type": "number",
      "captionKey": "min"
    },
    "toOffset": {
      "type": "number",
      "captionKey": "h"
    }
  },
  "utility-total": {
    "meters": {
      "type": "textarea",
      "captionKey": "fixed_physical_unit_5"
    }
  },
  "vacation-accrual": {
    "daysPerYear": {
      "type": "number",
      "captionKey": "daysPerYear"
    },
    "daysUsed": {
      "type": "number",
      "captionKey": "days"
    },
    "monthsWorked": {
      "type": "number",
      "captionKey": "months"
    }
  },
  "water-heating": {
    "power": {
      "type": "number",
      "captionKey": "kW"
    },
    "tFrom": {
      "type": "number",
      "captionKey": "FIXED_UNIT_14"
    },
    "tTo": {
      "type": "number",
      "captionKey": "FIXED_UNIT_14"
    },
    "volume": {
      "type": "number",
      "captionKey": "FIXED_UNIT_15"
    }
  },
  "weighted-mean": {
    "pairs": {
      "type": "textarea",
      "captionKey": "value_in_one_common_data_unit_weight_in_one_consistent_basis_no_fixed_SI_unit_is_inferred"
    }
  },
  "work-hours": {
    "breakMin": {
      "type": "number",
      "captionKey": "min"
    },
    "endHour": {
      "type": "number",
      "captionKey": "h"
    },
    "endMin": {
      "type": "number",
      "captionKey": "min"
    },
    "startHour": {
      "type": "number",
      "captionKey": "h"
    },
    "startMin": {
      "type": "number",
      "captionKey": "min"
    }
  },
  "workday-cost": {
    "days": {
      "type": "number",
      "captionKey": "workingDaysPerMonth"
    },
    "hours": {
      "type": "number",
      "captionKey": "hoursPerWorkingDay"
    }
  },
  "yeast-convert": {
    "value": {
      "type": "number",
      "captionKey": "g"
    }
  }
};

export function subjectFieldUnitLabel(calculatorId: string, field: Field, locale: Locale): string | undefined {
  if (field.unit || !Object.hasOwn(subjectFieldUnitContracts, calculatorId)) return undefined;
  const fields = subjectFieldUnitContracts[calculatorId];
  if (!Object.hasOwn(fields, field.name)) return undefined;
  const contract = fields[field.name];
  if (contract.type !== field.type) return undefined;
  const native: PublicLocale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  return captions[contract.captionKey][native];
}
