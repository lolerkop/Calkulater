// Проверка V2-определений. Валидируем только то, что платформа уже
// поддерживает: выдумывать проверки для несуществующих возможностей значило бы
// закреплять архитектуру, которой ещё нет.

import { categories } from '../../data/categories';
import { CALCULATOR_LIFECYCLES, type CalculatorDefinitionV2 } from './types';

export type DefinitionProblem = { id: string; problem: string };

export function validateDefinitions(definitions: readonly CalculatorDefinitionV2[]): DefinitionProblem[] {
  const problems: DefinitionProblem[] = [];
  const knownCategories = new Set(categories.map((category) => category.id));
  const seen = new Set<string>();

  for (const definition of definitions) {
    const { id } = definition;
    const fail = (problem: string) => problems.push({ id: id || '<без id>', problem });

    if (!id || !id.trim()) fail('пустой id');
    if (seen.has(id)) fail('дублирующийся id');
    seen.add(id);

    if (!CALCULATOR_LIFECYCLES.includes(definition.lifecycle)) fail(`неизвестный статус: ${definition.lifecycle}`);
    if (typeof definition.compute !== 'function') fail('отсутствует функция расчёта');
    if (!Number.isInteger(definition.definitionVersion) || definition.definitionVersion < 1) {
      fail('версия определения должна быть целым числом от 1');
    }

    const presentation = definition.presentation;
    if (!presentation) { fail('отсутствует presentation'); continue; }
    if (presentation.id !== id) fail(`id определения (${id}) не совпадает с presentation.id (${presentation.id})`);
    if (!knownCategories.has(presentation.category)) fail(`неизвестная категория: ${presentation.category}`);
    if (!presentation.slug?.trim()) fail('пустой slug');

    const fieldNames = new Set<string>();
    for (const field of presentation.fields) {
      if (!field.name?.trim()) fail('поле без имени');
      if (fieldNames.has(field.name)) fail(`дублирующееся имя поля: ${field.name}`);
      fieldNames.add(field.name);
      // Условная видимость обязана ссылаться на существующее поле, иначе поле
      // молча исчезнет из формы, а расчёт получит пустое значение.
      if (field.showIf && !presentation.fields.some((other) => other.name === field.showIf!.field)) {
        fail(`поле ${field.name} зависит от несуществующего поля ${field.showIf.field}`);
      }
    }

    if (definition.lifecycle === 'released') {
      if (!definition.copy?.en) fail('выпущенный калькулятор без английского копирайта');
      if (!definition.copy?.uk) fail('выпущенный калькулятор без украинского копирайта');
      if (!definition.referenceCases?.length) fail('выпущенный калькулятор без эталонных случаев');
    }
  }
  return problems;
}
