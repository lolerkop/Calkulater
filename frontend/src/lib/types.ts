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
  step?: number;
  help?: string;
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
  | 'date-time';

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
