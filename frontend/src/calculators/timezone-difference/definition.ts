import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { timezoneDifferenceCopyEn } from './copy.en';
import { timezoneDifferenceCopyUk } from './copy.uk';
import { timezoneDifferenceCopyDe } from './copy.de';
import { timezoneDifferenceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "timezone-difference",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: timezoneDifferenceCopyEn, uk: timezoneDifferenceCopyUk, de: timezoneDifferenceCopyDe },
  referenceCases: timezoneDifferenceReferenceCases,
  publishedExample: { inputs: { fromOffset: 3, toOffset: -5, hour: 14, minute: 30 }, expected: ["06:30"] },
  presentation: {
    id: "timezone-difference",
    name: "Калькулятор разницы часовых поясов",
    slug: "timezone-difference",
    fullPath: "/date-time/timezone-difference/",
    category: "date-time",
    icon: "globe",
    popularity: 39,
    isNew: false,
    shortDescription: "Перевод времени между двумя смещениями UTC с учётом перехода через полночь.",
    longDescription:
      "Переводит время между двумя часовыми поясами, заданными смещениями UTC. Смещения вводятся числами, и это осознанное ограничение: калькулятор не знает базы часовых поясов, не выводит переход на летнее время и не хранит историю правил — он сравнивает ровно те смещения, которые вы указали. Дробные смещения поддерживаются: UTC+5:30 в Индии и UTC+5:45 в Непале не исключения, а действующие пояса, поэтому разница считается в минутах. Переход через полночь показан отдельной строкой, иначе время выглядело бы тем же календарным днём.",
    seoTitle: "Калькулятор разницы часовых поясов по смещению UTC",
    seoDescription: "Переведите время между двумя часовыми поясами по их смещениям UTC, включая дробные смещения и переход через полночь.",
    h1: "Калькулятор разницы часовых поясов",
    keywords: ["разница часовых поясов", "перевод времени", "смещение UTC", "который час в другом городе"],
    fields: [
      { name: 'fromOffset', label: 'Смещение UTC откуда', type: 'number', defaultValue: 3, min: -12, max: 14, step: 0.25, signed: true },
      { name: 'toOffset', label: 'Смещение UTC куда', type: 'number', defaultValue: -5, min: -12, max: 14, step: 0.25, signed: true },
      { name: 'hour', label: 'Часы', type: 'number', defaultValue: 14, min: 0, max: 23, step: 1 },
      { name: 'minute', label: 'Минуты', type: 'number', defaultValue: 30, min: 0, max: 59, step: 5 },
    ],
    resultLabels: {
      "target": "Время в точке назначения",
      "difference": "Разница",
      "shift": "Сдвиг суток",
      "day": "Календарный день",
      "source": "Исходное время",
    },
    howToUse: [
      "Введите смещение UTC того пояса, где известно время.",
      "Введите смещение UTC того пояса, в который переводите.",
      "Укажите часы и минуты исходного времени.",
      "Проверьте строку календарного дня: время могло уйти на соседние сутки.",
    ],
    howItWorks:
      "Разница смещений переводится в минуты и прибавляется к исходному времени. Если сумма выходит за пределы суток, время переносится на соседний день, а сдвиг показывается отдельно.",
    example: "14:30 при смещении UTC+3 соответствует 06:30 того же дня при смещении UTC−5.",
    faq: [
      { q: "Почему пояса вводятся числами, а не выбираются из списка?", a: "Потому что список требует базы часовых поясов и её ежегодного обновления. Показывать устаревшее правило хуже, чем попросить смещение, которое вы можете проверить прямо сейчас." },
      { q: "Учитывается ли переход на летнее время?", a: "Нет. Если в одном из поясов действует летнее время, укажите смещение уже с его учётом — например UTC+2 вместо UTC+1." },
      { q: "Поддерживаются ли получасовые пояса?", a: "Да. Индия использует UTC+5:30, Непал — UTC+5:45, и такие смещения вводятся как 5,5 и 5,75." },
      { q: "Что означает сдвиг суток?", a: "Что переведённое время попало на соседний календарный день: плюс единица — следующие сутки, минус единица — предыдущие." },
      { q: "Как узнать смещение нужного города?", a: "Оно указано в настройках часового пояса на телефоне и компьютере рядом с названием города — обычно в виде UTC+3 или GMT+3." },
    ],
    relatedCalculatorIds: ["time-duration", "date-shift-calculator", "convert-time"],
  },
};
