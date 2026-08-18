// Категория «Компьютеры и интернет».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "computers",
  order: 9,
  icon: "monitor",
  searchAliases: "компьютеры интернет сеть скорость загрузка файл гигабайт мегабит трафик fps кадры разрешение экран пропускная способность диск",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужно прикинуть, успеет ли файл скачаться до начала встречи.",
      "Когда планируете канал в офис и считаете полосу на всех сотрудников сразу.",
      "Когда сравниваете мониторы и переводите частоту кадров во время кадра.",
      "Когда подбираете разрешение под нужное соотношение сторон.",
    ],
    checklist: [
      "Определитесь, в каких приставках указан размер: десятичных или двоичных.",
      "Проверьте, в битах или в байтах измеряется ваша скорость подключения.",
      "Для расчёта полосы уточните, сколько пользователей активны одновременно, а не всего.",
      "Убедитесь, что разрешение введено в пикселях, а не в условных единицах.",
    ],
    mistakes: [
      "Делить размер файла на скорость канала, забыв перевести байты в биты.",
      "Считать мегабайт и мебибайт одним и тем же — на гигабайтах разница уже заметна.",
      "Планировать полосу по числу сотрудников вместо числа одновременных подключений.",
      "Ожидать, что реальная скорость совпадёт с теоретической без всякого запаса.",
    ],
  },
  editorial: {
    ru: "Расчёты теоретические и не учитывают накладные расходы протоколов, потери и загрузку сети. Реальные значения обычно оказываются ниже.",
    en: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    es: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    de: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    fr: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    it: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    pt: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    nl: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    pl: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    cs: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    sk: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    hu: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    ro: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    tr: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    uk: "Розрахунки теоретичні й не враховують накладні витрати протоколів, втрати та завантаження мережі. Реальні значення зазвичай нижчі.",
    id: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
    vi: "The calculations are theoretical and ignore protocol overhead, losses and network load. Real figures are usually lower.",
  },
};
