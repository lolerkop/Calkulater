// Русская база категорий выводится из модулей категорий: восемь рукописных
// записей отсюда переехали в src/categories/<id>/. Файл остался точкой входа
// для существующих импортов, но перечислять категории больше не обязан.

import type { Category } from '../lib/types';
import { categoryDefinitions } from '../categories/manifest.generated';

export const categories: Category[] = categoryDefinitions.map((definition) => ({
  id: definition.id as Category['id'],
  name: definition.copy.ru.name,
  slug: definition.copy.ru.slug,
  description: definition.copy.ru.description,
  longDescription: definition.copy.ru.longDescription,
  seoTitle: definition.copy.ru.seoTitle,
  seoDescription: definition.copy.ru.seoDescription,
  h1: definition.copy.ru.h1,
  icon: definition.icon,
  faq: [...definition.faq.ru],
}));

export const categoriesBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
) as Record<string, Category>;
