export type FieldType =
  | 'number'
  | 'select'
  | 'toggle'
  | 'date'
  | 'checkbox'
  | 'textarea';

export type FieldOption = { value: string; label: string };

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  defaultValue?: string | number | boolean;
  unit?: string;
  options?: FieldOption[];
  placeholder?: string;
  min?: number;
  max?: number;
  // Отрицательные значения осмысленны: температура, угол, проекция скорости,
  // манометрическое давление, изменение энергии, процентное изменение.
  // Объявляется явно, потому что отсутствие `min` иначе неотличимо от забытого
  // ограничения — а забытое ограничение пропускает опечатку вроде «−5 ГБ».
  signed?: boolean;
  step?: number;
  help?: string;
  readOnly?: boolean;
  // Необязательная сумма: доплата, разовый сбор, цена за единицу. Раннер такие
  // поля проверяет условием «> 0» и при нуле просто не выводит зависящую от них
  // строку, поэтому пустое поле значит «значения нет», а не ошибку ввода.
  // Ставить только там, где нуль — осмысленное «ничего», а не подмена
  // обязательной величины: иначе вместо ошибки посетитель получит правдоподобное,
  // но неверное число.
  optional?: boolean;
  showIf?: { field: string; equals: string | number | boolean };
};

export type FaqItem = { q: string; a: string };

export type CalculatorSeoContent = {
  intro: string;
  howItWorks: string;
  example: string;
  tips: string;
  faq: FaqItem[];
};

export type CategoryId =
  | 'finance'
  | 'currency'
  | 'sport'
  | 'building'
  | 'date-time'
  // Расширения таксономии, каждое вызвано реальным потребителем: складывать
  // математику или бизнес-метрики в «Финансы» значило бы исказить смысл раздела
  // ради экономии работы.
  | 'math'
  | 'business'
  // Первое расширение таксономии, и оно вызвано
  // реальным потребителем: физическим конвертерам не подходит ни одна из
  // прежних категорий. Складывать давление и энергию в «Валюты» значило бы
  // исказить смысл раздела ради экономии работы.
  | 'converters';

export type Category = {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  icon: string;
  faq: FaqItem[];
};

export type CalculatorDef = {
  id: string;
  name: string;
  resultTitle?: string;
  slug: string;
  fullPath: string;
  category: CategoryId;
  shortDescription: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  keywords: string[];
  icon: string;
  popularity: number;
  isNew?: boolean;
  fields: Field[];
  resultLabels: Record<string, string>;
  howToUse: string[];
  howItWorks: string;
  example: string;
  seoContent?: CalculatorSeoContent;
  faq: FaqItem[];
  relatedCalculatorIds: string[];
  disclaimer?: string;
};

export type CalcResultRow = {
  label: string;
  value: string;
  accent?: 'green' | 'red' | 'neutral';
  href?: string;
};

export type CalcResultTable = {
  title?: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export type CalcResult = {
  primary: { label: string; value: string };
  secondary: CalcResultRow[];
  table?: CalcResultTable;
  note?: string;
};

export type CalcFunction = (inputs: Record<string, string | number | boolean>) => CalcResult;
