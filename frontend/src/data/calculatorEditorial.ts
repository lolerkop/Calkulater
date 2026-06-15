import {
  lastUpdated as currencyRatesDate,
  ratesAreStale,
  ratesUpdateFailed,
} from './currencies';
import type { CalculatorDef } from '../lib/types';

export type EditorialSource = {
  label: string;
  href?: string;
};

export type CalculatorEditorial = {
  heading: string;
  methodLabel: string;
  sourceLabel: string;
  reviewedLabel: string;
  limitationLabel: string;
  method: string;
  sources: EditorialSource[];
  reviewedAt: string;
  limitation: string;
  freshnessWarning?: string;
};

export const contentReviewedAt = '2026-06-15';

const labels = {
  ru: {
    heading: 'Источник и актуальность',
    method: 'Методика расчёта',
    source: 'Источник данных или нормы',
    reviewed: 'Дата последней проверки',
    limitation: 'Ограничение',
  },
  en: {
    heading: 'Sources and review status',
    method: 'Calculation method',
    source: 'Data or methodology source',
    reviewed: 'Last reviewed',
    limitation: 'Limitation',
  },
  uk: {
    heading: 'Джерела й актуальність',
    method: 'Методика розрахунку',
    source: 'Джерело даних або норми',
    reviewed: 'Дата останньої перевірки',
    limitation: 'Обмеження',
  },
} as const;

const genericLimitations = {
  ru: {
    finance: 'Расчёт справочный: договорные комиссии, льготы и индивидуальные условия учитываются только при наличии соответствующих полей.',
    currency: 'Это официальный справочный, а не коммерческий курс покупки или продажи. Банк или обменный пункт может применять спред и комиссию.',
    sport: 'Результат является ориентиром и не заменяет индивидуальную медицинскую или спортивную оценку.',
    building: 'Перед покупкой проверьте фактические замеры, размер упаковки, партию и рекомендации производителя.',
    'date-time': 'Для документов и сроков проверьте правила включения дат, праздники и требования конкретной организации.',
  },
  en: {
    finance: 'This is a reference estimate. Contract fees, benefits and individual terms are included only when the form has a matching input.',
    currency: 'This is an official reference rate, not a live commercial buy or sell quote. A bank or exchange service may add a spread and fees.',
    sport: 'The result is guidance and does not replace an individual medical or training assessment.',
    building: 'Before buying, verify the measurements, pack size, production batch and manufacturer instructions.',
    'date-time': 'For documents and deadlines, verify inclusion rules, holidays and the requirements of the relevant organization.',
  },
  uk: {
    finance: 'Результат довідковий: договірні комісії, пільги та індивідуальні умови враховуються лише за наявності відповідних полів.',
    currency: 'Це офіційний довідковий, а не комерційний курс купівлі чи продажу. Банк або обмінник може застосовувати спред і комісію.',
    sport: 'Результат є орієнтиром і не замінює індивідуальну медичну або спортивну оцінку.',
    building: 'Перед купівлею перевірте фактичні виміри, розмір упаковки, партію та рекомендації виробника.',
    'date-time': 'Для документів і строків перевірте правила включення дат, свята та вимоги конкретної організації.',
  },
} as const;

function language(locale: string): keyof typeof labels {
  return locale === 'ru' || locale === 'uk' ? locale : 'en';
}

function sourceText(locale: string, ru: string, en: string, uk: string): string {
  return locale === 'ru' ? ru : locale === 'uk' ? uk : en;
}

export function getCalculatorEditorial(calculator: CalculatorDef, locale: string): CalculatorEditorial {
  const lang = language(locale);
  const copy = labels[lang];
  const base: CalculatorEditorial = {
    heading: copy.heading,
    methodLabel: copy.method,
    sourceLabel: copy.source,
    reviewedLabel: copy.reviewed,
    limitationLabel: copy.limitation,
    method: calculator.howItWorks,
    sources: [{
      label: sourceText(
        locale,
        'Формула и входные параметры, описанные на этой странице.',
        'The formula and input definitions documented on this page.',
        'Формула та вхідні параметри, описані на цій сторінці.',
      ),
    }],
    reviewedAt: contentReviewedAt,
    limitation: genericLimitations[lang][calculator.category],
  };

  if (calculator.category === 'currency') {
    return {
      ...base,
      method: `${calculator.howItWorks} ${sourceText(
        locale,
        `В расчёте используются курсы на ${currencyRatesDate}.`,
        `The calculation uses reference rates dated ${currencyRatesDate}.`,
        `У розрахунку використано курси на ${currencyRatesDate}.`,
      )}`,
      sources: [{
        label: sourceText(locale, 'Банк России: база данных по курсам валют', 'Bank of Russia: currency rate database', 'Банк Росії: база даних курсів валют'),
        href: 'https://www.cbr.ru/currency_base/',
      }],
      freshnessWarning: ratesUpdateFailed
        ? sourceText(
            locale,
            'Не удалось обновить курсы при последней сборке. Используются последние сохранённые данные.',
            'The rates could not be updated during the latest build. The last saved data is being used.',
            'Не вдалося оновити курси під час останньої збірки. Використовуються останні збережені дані.',
          )
        : ratesAreStale
          ? sourceText(
              locale,
              'Дата курса старше четырёх дней. Данные могут быть устаревшими.',
              'The reference-rate date is more than four days old. The data may be stale.',
              'Дата курсу старша за чотири дні. Дані можуть бути застарілими.',
            )
          : undefined,
    };
  }

  if (calculator.id === 'income-tax-calculator') {
    return {
      ...base,
      sources: [{
        label: 'ФНС России: прогрессивная шкала НДФЛ 13/15/18/20/22%',
        href: 'https://www.nalog.gov.ru/rn77/news/tax_doc_news/15562179/',
      }],
      limitation: 'Расчёт предназначен для основной прогрессивной шкалы доходов резидента за налоговый период 2025-2026. Отдельные налоговые базы, статус нерезидента и вычеты требуют самостоятельной проверки.',
    };
  }

  if (calculator.id === 'vat-calculator') {
    return {
      ...base,
      sources: [{
        label: 'ФНС России: применение основной ставки НДС 22% с 1 января 2026 года',
        href: 'https://www.nalog.gov.ru/rn25/news/activities_fts/16590316/',
      }],
      limitation: 'Ставка 22% применяется к операциям 2026 года; ставка 20% оставлена для сверки операций прошлых периодов. Право на ставки 0%, 5%, 7% или 10% зависит от вида операции и налогового режима.',
    };
  }

  if (calculator.id === 'bmi-calculator') {
    return {
      ...base,
      sources: [{
        label: sourceText(locale, 'ВОЗ: формула и ограничения индекса массы тела', 'WHO: BMI formula and interpretation limits', 'ВООЗ: формула й обмеження індексу маси тіла'),
        href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
      }],
      limitation: sourceText(
        locale,
        'Категории предназначены для взрослых. ИМТ не измеряет долю жира и может быть непоказателен для детей, беременных, пожилых людей и спортсменов с высокой мышечной массой.',
        'Adult cutoffs do not measure body fat directly and may be unsuitable for children, pregnancy, older adults or muscular athletes.',
        'Категорії призначені для дорослих. ІМТ не вимірює частку жиру й може бути непоказовим для дітей, вагітних, літніх людей і спортсменів із великою м’язовою масою.',
      ),
    };
  }

  if (calculator.category === 'building') {
    return {
      ...base,
      sources: [{
        label: sourceText(
          locale,
          'Геометрические формулы; площадь упаковки и расход материала берутся с маркировки производителя.',
          'Geometry formulas; pack coverage and material consumption come from the manufacturer label.',
          'Геометричні формули; площу упаковки й витрату матеріалу беруть із маркування виробника.',
        ),
      }],
    };
  }

  return base;
}
