import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { relativityDilationCopyEn } from './copy.en';
import { relativityDilationCopyUk } from './copy.uk';
import { relativityDilationCopyDe } from './copy.de';
import { relativityDilationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "relativity-dilation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: relativityDilationCopyEn, uk: relativityDilationCopyUk, de: relativityDilationCopyDe },
  referenceCases: relativityDilationReferenceCases,
  publishedExample: { inputs: { beta: 0.5, properTime: 1 }, expected: ["1,155 с"] },
  presentation: {
    id: "relativity-dilation",
    name: "Калькулятор замедления времени",
    slug: "zamedlenie-vremeni",
    fullPath: "/physics/zamedlenie-vremeni/",
    category: "physics",
    icon: "clock",
    popularity: 29,
    isNew: false,
    shortDescription: "Множитель Лоренца, замедление времени и сокращение длины.",
    longDescription:
      "При обычных скоростях эффект неощутим: даже на орбитальной скорости множитель Лоренца отличается от единицы в девятом знаке. Заметным он становится ближе к скорости света, и растёт неравномерно — между 0,99c и 0,999c он отличается втрое. Поэтому скорость задаётся ДОЛЕЙ скорости света, а не метрами в секунду: в метрах эта разница теряется в разрядах.",
    seoTitle: "Калькулятор замедления времени — множитель Лоренца",
    seoDescription: "Рассчитайте множитель Лоренца, замедление времени и сокращение длины по доле скорости света.",
    h1: "Калькулятор замедления времени",
    keywords: ["замедление времени", "множитель Лоренца", "сокращение длины", "теория относительности"],
    fields: [
      { name: 'beta', label: 'Доля скорости света', type: 'number', defaultValue: 0.5, min: 0, step: 0.05 },
      { name: 'properTime', label: 'Собственное время, с', type: 'number', defaultValue: 1, min: 0, step: 1 },
    ],
    resultLabels: {
      "dilated": "Замедленное время",
      "gamma": "Множитель Лоренца",
      "contraction": "Сокращение длины",
      "speed": "Скорость",
      "difference": "Разница во времени",
    },
    howToUse: [
      "Скорость задаётся долей скорости света: 0,5 означает половину, 0,99 — девяносто девять процентов.",
      "Собственное время — то, что показывают часы движущегося наблюдателя.",
      "Сокращение длины показано долей: 50 % означает, что тело вдвое короче для неподвижного наблюдателя.",
      "Единицу задать нельзя: разогнать тело с массой до скорости света невозможно.",
    ],
    howItWorks: "γ = 1/√(1 − β²); замедленное время = собственное × γ.",
    example: "На половине скорости света секунда движущихся часов растягивается до 1,155 с.",
    faq: [
      { q: "Почему на бытовых скоростях эффекта не видно?", a: "Множитель отличается от единицы на β²/2. Для самолёта это 10⁻¹², то есть наносекунда за годы полёта. Спутники GPS — редкий случай, когда поправку приходится вводить: там она набегает до десятков микросекунд в сутки." },
      { q: "Что такое собственное время?", a: "Время по часам, движущимся вместе с объектом. Именно оно «настоящее» для самого объекта, а замедленным его видит неподвижный наблюдатель — и наоборот, что и порождает парадокс близнецов." },
      { q: "Почему нельзя достичь скорости света?", a: "На единице подкоренное выражение обращается в нуль, а множитель — в бесконечность. Физически это значит, что для разгона тела с массой потребовалась бы бесконечная энергия." },
      { q: "Сокращается ли длина на самом деле?", a: "Да, но только вдоль направления движения и только с точки зрения неподвижного наблюдателя. Для самого движущегося тела ничего не меняется — сокращается уже окружающий мир." },
    ],
    relatedCalculatorIds: ["escape-velocity", "kinetic-energy", "photon-energy"],
  },
};
