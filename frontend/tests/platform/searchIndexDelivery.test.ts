import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = `${import.meta.dirname}/../../`;
const read = (file: string) => readFileSync(`${root}${file}`, 'utf8');

// Индекс поиска доставляется отдельным файлом на локаль и только по обращению.
// Убрать его из разметки мало: если он статически въедет в клиентский чанк,
// первоначальная отдача снова вырастет вместе с числом калькуляторов, просто
// в другой графе. Поэтому проверяется и то, и другое.
describe('доставка поискового индекса', () => {
  it('остров поиска не принимает корпус пропсом', () => {
    const source = read('src/components/islands/SearchBox.tsx');
    expect(source, 'props острова снова несут массив калькуляторов')
      .not.toMatch(/calculators:\s*Array</);
  });

  it('страницы не передают корпус в остров', () => {
    for (const page of ['src/pages/404.astro', 'src/pages/[locale]/index.astro']) {
      expect(read(page), `${page} передаёт калькуляторы в SearchBox`)
        .not.toMatch(/<SearchBox[^>]*calculators=/);
    }
  });

  it('клиентский код не импортирует полный источник калькуляторов', () => {
    for (const file of ['src/components/islands/SearchBox.tsx', 'src/lib/searchIndexClient.ts']) {
      const source = read(file);
      expect(source, `${file} импортирует i18n целиком`).not.toMatch(/from '.*lib\/i18n'/);
      expect(source, `${file} импортирует манифест калькуляторов`)
        .not.toMatch(/calculators\/manifest\.generated/);
    }
  });

  it('загрузка индекса остаётся отложенной, а не статическим импортом', () => {
    const loader = read('src/lib/searchIndexClient.ts');
    expect(loader, 'индекс должен запрашиваться, а не импортироваться').toMatch(/fetch\(/);
    expect(loader, 'статический импорт индекса вернул бы его в общий чанк')
      .not.toMatch(/^import .*search-index/m);
  });

  it('индекс собирается из общего источника, а не перечисляет калькуляторы руками', () => {
    const endpoint = read('src/pages/search-index/[locale].json.ts');
    expect(endpoint, 'источником должен быть getCalculators').toMatch(/getCalculators\(/);
    expect(endpoint, 'локали берутся из общего контракта').toMatch(/locales/);
  });
});
