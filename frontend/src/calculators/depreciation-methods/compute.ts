import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Амортизация актива тремя методами с ликвидационной стоимостью.
//
// Линейный делит амортизируемую базу поровну. Двойной убывающий берёт удвоенную
// линейную норму от ОСТАТОЧНОЙ стоимости и потому в первые годы списывает
// больше, но никогда не уводит книгу ниже ликвидационной стоимости — этот
// ограничитель и есть то, что отличает метод от простой геометрической
// прогрессии. Сумма чисел лет распределяет базу пропорционально оставшемуся
// сроку: в первый год из пяти списывается 5/15, в последний — 1/15.
//
// Отличие от амортизации автомобиля: там убывающий остаток с надбавкой первого
// года и без ликвидационной стоимости, и ответ один — сколько машина стоит
// через срок. Здесь выбор метода, остаточная стоимость и таблица по годам:
// вопрос бухгалтерский, а не потребительский.
const MAX_LIFE = 50;

export const compute: CalcFunction = (inputs) => {
  const cost = toNumber(inputs.cost);
  const salvage = toNumber(inputs.salvage);
  const life = Math.trunc(toNumber(inputs.life));
  const method = toStr(inputs.method, 'straight');
  const year = Math.trunc(toNumber(inputs.year));
  const fail = (message: string) => ({
    primary: { label: 'Амортизация за год', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  if (!(cost > 0)) return fail('Стоимость должна быть больше нуля');
  if (!(salvage >= 0)) return fail('Ликвидационная стоимость не может быть отрицательной');
  if (salvage >= cost) return fail('Ликвидационная стоимость должна быть меньше первоначальной');
  if (!(life >= 1)) return fail('Срок службы должен быть хотя бы один год');
  if (life > MAX_LIFE) return fail(`Срок службы не может превышать ${MAX_LIFE} лет`);
  if (!(year >= 1) || year > life) return fail('Год должен лежать внутри срока службы');

  const base = cost - salvage;
  const sumOfYears = (life * (life + 1)) / 2;
  const rows: string[][] = [];
  let book = cost;
  let accumulated = 0;
  // Величины запоминаются ЧИСЛАМИ: разбирать обратно уже отформатированную
  // строку значило бы считать по показу, а не по значению.
  let yearly = 0;
  let accumulatedAtYear = 0;
  let bookAtYear = cost;

  for (let y = 1; y <= life; y += 1) {
    let charge: number;
    if (method === 'ddb') charge = Math.min((book * 2) / life, book - salvage);
    else if (method === 'syd') charge = (base * (life - y + 1)) / sumOfYears;
    else charge = base / life;
    accumulated += charge;
    book -= charge;
    if (y === year) {
      yearly = charge;
      accumulatedAtYear = accumulated;
      bookAtYear = book;
    }
    rows.push([String(y), money(charge), money(accumulated), money(book)]);
  }

  return {
    primary: { label: 'Амортизация за год', value: money(yearly) },
    secondary: [
      { label: 'Накопленная амортизация', value: money(accumulatedAtYear) },
      { label: 'Остаточная стоимость', value: money(bookAtYear) },
      { label: 'Амортизируемая база', value: money(base) },
      { label: 'Доля списанного', value: `${fmtNumber((accumulatedAtYear / base) * 100, 2)}%` },
    ],
    table: {
      title: 'Амортизация по годам',
      columns: ['Год', 'За год', 'Накоплено', 'Остаточная стоимость'],
      rows,
    },
  };
};
