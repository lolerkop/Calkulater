import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "current": "Current, A", "length": "One-way run, m", "section": "Conductor cross-section, mm²",
      "material": "Conductor material", "phase": "Supply", "voltage": "Nominal voltage, V",
    },
    options: { "copper": "Copper", "aluminium": "Aluminium", "single": "Single-phase", "three": "Three-phase" },
    results: {
      "Падение напряжения": "Voltage drop",
      "Доля от номинала": "Share of nominal",
      "Напряжение у нагрузки": "Voltage at the load",
      "Сопротивление линии": "Line resistance",
      "Потери мощности": "Power lost in the cable",
      "Проверьте данные": "Check the values",
    },
    values: {
      "В": "V", "Ом": "Ω", "Вт": "W",
      "Неизвестный материал проводника": "Unknown conductor material",
      "Неизвестная схема питания": "Unknown supply type",
      "Ток, длина, сечение и напряжение должны быть больше нуля": "Current, length, cross-section and voltage must all be greater than zero",
      "Удельное сопротивление взято при 20 °C. Нагретый проводник сопротивляется сильнее, поэтому в работе падение будет чуть больше расчётного.": "Resistivity is taken at 20 °C. A warm conductor resists more, so the drop in service will be a little larger than calculated.",
    },
  },
  uk: {
    fields: {
      "current": "Струм, А", "length": "Довжина в один бік, м", "section": "Переріз жили, мм²",
      "material": "Матеріал жили", "phase": "Живлення", "voltage": "Номінальна напруга, В",
    },
    options: { "copper": "Мідь", "aluminium": "Алюміній", "single": "Однофазне", "three": "Трифазне" },
    results: {
      "Падение напряжения": "Падіння напруги",
      "Доля от номинала": "Частка від номіналу",
      "Напряжение у нагрузки": "Напруга на навантаженні",
      "Сопротивление линии": "Опір лінії",
      "Потери мощности": "Втрати потужності в кабелі",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "В": "В", "Ом": "Ом", "Вт": "Вт",
      "Неизвестный материал проводника": "Невідомий матеріал жили",
      "Неизвестная схема питания": "Невідома схема живлення",
      "Ток, длина, сечение и напряжение должны быть больше нуля": "Струм, довжина, переріз і напруга мають бути більшими за нуль",
      "Удельное сопротивление взято при 20 °C. Нагретый проводник сопротивляется сильнее, поэтому в работе падение будет чуть больше расчётного.": "Питомий опір узято за 20 °C. Нагріта жила чинить більший опір, тож у роботі падіння буде трохи більшим за розрахункове.",
    },
  },
};
