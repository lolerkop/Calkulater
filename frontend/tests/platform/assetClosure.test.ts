// Замыкание импортов маршрута — основа всех бюджетов страницы.
//
// Тесты работают на фикстурах, а не на текущей сборке: хешированные имена
// чанков меняются при каждом изменении кода, и привязка к ним сделала бы
// проверку хрупкой ровно там, где нужна устойчивость.

import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { closure, importsOf, rootsOf, routeClosureSize } from '../../scripts/lib/assetClosure.mjs';

let dir: string;
let astro: string;

const chunk = (name: string, body: string) => writeFileSync(join(astro, name), body, 'utf8');
const page = (name: string, refs: string[]) =>
  writeFileSync(join(dir, name), `<html><body>${refs.map((r) => `<script src="/_astro/${r}">`).join('')}</body></html>`, 'utf8');

beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'closure-'));
  astro = join(dir, '_astro');
  mkdirSync(astro);
});
afterEach(() => rmSync(dir, { recursive: true, force: true }));

describe('замыкание импортов', () => {
  it('находит корни страницы в разметке', () => {
    page('a.html', ['entry.abc123.js', 'client.def456.js']);
    const html = `<html><body><script src="/_astro/entry.abc123.js"></script>
      <astro-island component-url="/_astro/client.def456.js"></astro-island></body></html>`;
    expect(rootsOf(html).sort()).toEqual(['client.def456.js', 'entry.abc123.js']);
  });

  it('не повторяет один корень дважды', () => {
    expect(rootsOf('<a src="/_astro/x.js"><b src="/_astro/x.js">')).toEqual(['x.js']);
  });

  it('читает статические импорты чанка в обеих формах', () => {
    chunk('a.js', 'import{q}from"./b.js";import"./c.js";export const z=1;');
    expect([...importsOf(astro, 'a.js')].sort()).toEqual(['b.js', 'c.js']);
  });

  it('обходит граф транзитивно', () => {
    chunk('root.js', 'import{a}from"./mid.js";');
    chunk('mid.js', 'import{b}from"./leaf.js";');
    chunk('leaf.js', 'export const b=1;');
    expect([...closure(astro, ['root.js'])].sort()).toEqual(['leaf.js', 'mid.js', 'root.js']);
  });

  it('не зависит от имён чанков: общий модуль может называться как угодно', () => {
    // Rollup выносит совместный модуль в чанк с произвольным именем. Фильтр
    // по имени однажды уже пропустил настоящее нарушение изоляции.
    chunk('island.aaa.js', 'import{s}from"./compute.zzz.js";');
    chunk('compute.zzz.js', 'export const s=1;');
    expect([...closure(astro, ['island.aaa.js'])]).toContain('compute.zzz.js');
  });

  it('считает общий модуль один раз при нескольких путях к нему', () => {
    chunk('root.js', 'import{a}from"./left.js";import{b}from"./right.js";');
    chunk('left.js', 'import{s}from"./shared.js";');
    chunk('right.js', 'import{s}from"./shared.js";');
    chunk('shared.js', `export const s=${'"x".repeat(500)'};`);
    const modules = closure(astro, ['root.js']);
    expect(modules.size).toBe(4);
    expect([...modules].filter((m) => m === 'shared.js')).toHaveLength(1);
  });

  it('переживает цикл импортов', () => {
    chunk('a.js', 'import{b}from"./b.js";');
    chunk('b.js', 'import{a}from"./a.js";');
    expect([...closure(astro, ['a.js'])].sort()).toEqual(['a.js', 'b.js']);
  });

  it('пропускает отсутствующий файл, а не падает', () => {
    chunk('a.js', 'import{x}from"./missing.js";');
    expect([...closure(astro, ['a.js'])]).toEqual(['a.js']);
  });

  it('размер замыкания складывает raw и gzip без двойного счёта', () => {
    const body = 'export const value = "'.concat('q'.repeat(2000), '";');
    chunk('root.js', 'import{a}from"./left.js";import{b}from"./right.js";');
    chunk('left.js', 'import{v}from"./shared.js";');
    chunk('right.js', 'import{v}from"./shared.js";');
    chunk('shared.js', body);
    page('r.html', ['root.js']);
    const result = routeClosureSize(astro, join(dir, 'r.html'));
    expect(result.modules.size).toBe(4);
    // Общий модуль учтён однажды: иначе raw превысил бы длину всех файлов.
    expect(result.raw).toBeLessThan(body.length * 2);
    expect(result.gzip).toBeGreaterThan(0);
    expect(result.gzip).toBeLessThan(result.raw);
  });

  it('страница без скриптов даёт пустое замыкание', () => {
    page('empty.html', []);
    const result = routeClosureSize(astro, join(dir, 'empty.html'));
    expect(result.modules.size).toBe(0);
    expect(result.raw).toBe(0);
  });
});
