// Категория «Быт и дом».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "household",
  order: 12,
  icon: "home",
  searchAliases: "быт дом хозяйство электричество киловатт счёт чаевые счет компания бассейн вода наполнение расход тариф коммунальные",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда хотите понять, какой прибор больше всего добавляет к счёту за свет.",
      "Когда компания просит разделить счёт поровну вместе с чаевыми.",
      "Когда наполняете бассейн и планируете, к какому часу он будет готов.",
      "Когда сравниваете два прибора по стоимости эксплуатации, а не по цене покупки.",
    ],
    checklist: [
      "Возьмите тариф из последней квитанции, а не из памяти: цены меняются.",
      "Уточните паспортную мощность прибора на его наклейке или в инструкции.",
      "Для бассейна измерьте глубину по факту, а не по номиналу чаши.",
      "Проверьте расход воды: у садового шланга и у скважины он различается в разы.",
    ],
    mistakes: [
      "Считать круглосуточную работу для техники, которая включается циклами.",
      "Путать мощность в ваттах с потреблённой энергией в киловатт-часах.",
      "Делить на количество блюд вместо количества людей при делении счёта.",
      "Брать объём бассейна по внешним размерам, забыв про толщину стенок.",
    ],
  },
  editorial: {
    ru: "Расчёты опираются на введённые значения и не учитывают многотарифные счётчики, циклы работы техники и потери. Тариф и цены берите из своих документов.",
    en: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    es: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    de: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    fr: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    it: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    pt: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    nl: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    pl: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    cs: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    sk: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    hu: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    ro: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    tr: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    uk: "Розрахунки спираються на введені значення й не враховують багатотарифні лічильники, цикли роботи техніки та втрати.",
    id: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
    vi: "The calculations use the values you enter and ignore multi-rate meters, appliance duty cycles and losses. Take tariffs and prices from your own paperwork.",
  },
};
