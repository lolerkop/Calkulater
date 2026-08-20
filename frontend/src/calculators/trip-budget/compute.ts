import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Бюджет поездки целиком.
//
// Отличается от стоимости поездки тем, что считает не топливо, а все статьи
// сразу: ночи в отеле умножаются на число ночей, еда — на дни И на людей, а
// транспорт и развлечения входят суммой на всю поездку. Ночи и дни разведены
// намеренно: поездка на пять дней — это четыре ночи, и подставлять одно число в
// обе формулы значит ошибиться на целые сутки проживания.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const nights = toNumber(inputs.nights);
  const days = toNumber(inputs.days);
  const people = toNumber(inputs.people);
  const hotelPerNight = toNumber(inputs.hotelPerNight);
  const foodPerDayPerPerson = toNumber(inputs.foodPerDayPerPerson);
  const transport = toNumber(inputs.transport);
  const activities = toNumber(inputs.activities);
  const other = toNumber(inputs.other);

  const fail = (message: string) => ({
    primary: { label: 'Бюджет поездки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(days > 0)) return fail('Число дней должно быть больше нуля');
  if (!(people > 0)) return fail('Число человек должно быть больше нуля');
  if (nights < 0) return fail('Число ночей не может быть отрицательным');
  if (hotelPerNight < 0 || foodPerDayPerPerson < 0 || transport < 0 || activities < 0 || other < 0) {
    return fail('Сумма не может быть отрицательной');
  }

  const hotel = nights * hotelPerNight;
  const food = days * people * foodPerDayPerPerson;
  const total = hotel + food + transport + activities + other;

  return {
    primary: { label: 'Бюджет поездки', value: money(total) },
    secondary: [
      { label: 'На человека', value: money(total / people) },
      { label: 'В день', value: money(total / days) },
      { label: 'Проживание', value: money(hotel) },
      { label: 'Питание', value: money(food) },
      { label: 'Транспорт', value: money(transport) },
      { label: 'Развлечения', value: money(activities) },
      ...(other > 0 ? [{ label: 'Прочее', value: money(other) }] : []),
    ],
  };
};
