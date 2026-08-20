import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "address": "IPv4 address", "prefix": "Prefix length, bits" },
    options: {},
    results: {
      "Адрес сети": "Network address",
      "Маска подсети": "Subnet mask",
      "Широковещательный": "Broadcast address",
      "Первый узел": "First host",
      "Последний узел": "Last host",
      "Узлов в сети": "Usable hosts",
      "Обратная маска": "Wildcard mask",
      "Запись CIDR": "CIDR notation",
      "Проверьте данные": "Check the values",
    },
    values: {
      "нет": "none",
      "Адрес должен состоять из четырёх октетов через точку": "The address must have four dot-separated octets",
      "Каждый октет должен быть числом от 0 до 255": "Each octet must be a number from 0 to 255",
      "Длина префикса должна быть целым числом от 0 до 32": "The prefix length must be a whole number from 0 to 32",
    },
  },
  uk: {
    fields: { "address": "IPv4-адреса", "prefix": "Довжина префікса, біт" },
    options: {},
    results: {
      "Адрес сети": "Адреса мережі",
      "Маска подсети": "Маска підмережі",
      "Широковещательный": "Широкомовна адреса",
      "Первый узел": "Перший вузол",
      "Последний узел": "Останній вузол",
      "Узлов в сети": "Придатних вузлів",
      "Обратная маска": "Зворотна маска",
      "Запись CIDR": "Запис CIDR",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "нет": "немає",
      "Адрес должен состоять из четырёх октетов через точку": "Адреса має складатися з чотирьох октетів через крапку",
      "Каждый октет должен быть числом от 0 до 255": "Кожен октет має бути числом від 0 до 255",
      "Длина префикса должна быть целым числом от 0 до 32": "Довжина префікса має бути цілим числом від 0 до 32",
    },
  },
};
