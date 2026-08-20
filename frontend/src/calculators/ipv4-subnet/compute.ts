import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Разбор сети IPv4 по адресу и длине префикса.
//
// Вся арифметика битовая и точная: адрес — 32-разрядное число, маска — префикс
// единиц слева, сеть — их поразрядное И. Поэтому граница подсети может лежать
// внутри октета: у /20 маска 255.255.240.0, и «на глаз» такую сеть не считают.
//
// Сдвиги в JavaScript знаковые, и `~mask` для /0 дал бы отрицательное число,
// поэтому каждый промежуточный результат приводится к беззнаковому виду
// маской 0xFFFFFFFF. Без этого широковещательный адрес получился бы неверным.
//
// Три случая разведены явно, потому что общая формула 2ⁿ − 2 для них неверна:
// /32 — единственный адрес узла, /31 — два адреса линка точка-точка без
// широковещательного (RFC 3021), и только при /30 и короче вычитаются адрес
// сети и широковещательный.

const OCTET = /^\d{1,3}$/;
const dotted = (value: number) =>
  [24, 16, 8, 0].map((shift) => (value >>> shift) & 255).join('.');

export const compute: CalcFunction = (inputs) => {
  const address = toStr(inputs.address, '').trim();
  const prefix = toNumber(inputs.prefix);

  const fail = (message: string) => ({
    primary: { label: 'Адрес сети', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const parts = address.split('.');
  if (parts.length !== 4) return fail('Адрес должен состоять из четырёх октетов через точку');
  for (const part of parts) {
    if (!OCTET.test(part) || Number(part) > 255) return fail('Каждый октет должен быть числом от 0 до 255');
  }
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) return fail('Длина префикса должна быть целым числом от 0 до 32');

  const ip = parts.reduce((acc, part) => (acc * 256 + Number(part)) >>> 0, 0) >>> 0;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const network = (ip & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;

  const single = prefix === 32;
  const pointToPoint = prefix === 31;
  const hosts = single ? 1 : pointToPoint ? 2 : Math.pow(2, 32 - prefix) - 2;
  const first = single || pointToPoint ? network : network + 1;
  const last = single ? network : pointToPoint ? broadcast : broadcast - 1;

  return {
    primary: { label: 'Адрес сети', value: dotted(network) },
    secondary: [
      { label: 'Маска подсети', value: dotted(mask) },
      { label: 'Широковещательный', value: single || pointToPoint ? 'нет' : dotted(broadcast) },
      { label: 'Первый узел', value: dotted(first) },
      { label: 'Последний узел', value: dotted(last) },
      { label: 'Узлов в сети', value: fmtNumber(hosts, 0) },
      { label: 'Обратная маска', value: dotted(~mask >>> 0) },
      { label: 'Запись CIDR', value: `${dotted(network)}/${fmtNumber(prefix, 0)}` },
    ],
  };
};
