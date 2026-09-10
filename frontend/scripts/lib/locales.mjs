// Состав локалей для проверок артефакта.
//
// Читается из самого артефакта, а не выписывается буквами. Прежде список стоял
// в восьми файлах, и добавление локали означало восемь правок — которые легко
// не сделать: тогда новая локаль просто не проверяется, и молчание ворот
// выглядит как их согласие.
//
// Признак локали — каталог из двух букв со своей главной страницей: так в
// список не попадёт ни `_astro`, ни случайная директория ассетов.

import fs from 'node:fs';
import path from 'node:path';

export function distLocales(root = 'dist') {
  return fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^[a-z]{2}$/.test(entry.name))
    .map((entry) => entry.name)
    .filter((locale) => fs.existsSync(path.join(root, locale, 'index.html')))
    .sort();
}
