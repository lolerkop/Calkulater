import type { APIRoute } from 'astro';
import { getCalculators, getCategories, locales, type Locale } from '../../lib/i18n';
import type { SearchableCalculator } from '../../lib/search';

export const prerender = true;

// Поисковый индекс отдельным статическим файлом на локаль.
//
// Раньше он ехал в HTML как props гидратации острова поиска: около 46 КБ
// сырого JSON на каждой странице с поиском, примерно 8 КиБ gzip — больше
// половины веса страницы 404. Платили за него все, кто просто открыл
// страницу, хотя нужен он только тому, кто начал искать.
//
// Здесь тот же индекс собирается из тех же источников, что и раньше, но
// становится обычным файлом, который браузер запрашивает по первому
// обращению к поиску. Ни один калькулятор здесь не перечислен: список
// приходит из getCalculators, поэтому новый калькулятор не требует правки
// этого файла.
export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = params.locale as Locale;
  const categories = getCategories(locale);
  const categoryName = new Map(categories.map((category) => [category.id, category.name]));

  const index: SearchableCalculator[] = getCalculators(locale).map((calculator) => ({
    id: calculator.id,
    name: calculator.name,
    shortDescription: calculator.shortDescription,
    fullPath: calculator.fullPath,
    keywords: calculator.keywords,
    category: calculator.category,
    categoryName: categoryName.get(calculator.category) ?? calculator.category,
    popularity: calculator.popularity,
    isNew: calculator.isNew,
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
