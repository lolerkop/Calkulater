import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, measure, positive, RANGE, read, times } from '../engine-displacement/automotiveNumeric';
const G = 9.80665, KMH_IN_MS = 3.6;
export const compute: CalcFunction = inputs => {
  const speed = read(inputs.speed), reaction = read(inputs.reaction), mu = read(inputs.mu), grade = read(inputs.grade);
  const fail = (message: string) => ({ primary: { label: 'Полный остановочный путь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(speed, reaction, mu, grade)) return fail(INPUT);
  if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
  if (reaction < 0) return fail('Время реакции не может быть отрицательным');
  if (!(mu > 0)) return fail('Коэффициент сцепления должен быть больше нуля');
  // Linearized gentle-grade model: G = gradePct/100, not the exact inclined-plane cosine/sine model.
  const effective = add(times(exact(mu), exact(100)), exact(grade));
  if (effective.coefficient <= 0n) return fail('В модели требуется положительное μ + уклон/100');
  const decelExact = times(exact(G), effective), decel = evaluated(decelExact, exact(100));
  const reactionDistance = evaluated(times(exact(speed), exact(reaction)), exact(KMH_IN_MS));
  const braking = evaluated(times(exact(speed), exact(speed), exact(100)), times(exact(KMH_IN_MS), exact(KMH_IN_MS), exact(2), decelExact));
  const brakeTime = evaluated(times(exact(speed), exact(100)), times(exact(KMH_IN_MS), decelExact));
  const total = evaluated(add(times(exact(speed), exact(speed), exact(100)), times(exact(speed), exact(reaction), exact(KMH_IN_MS), exact(2), decelExact)), times(exact(KMH_IN_MS), exact(KMH_IN_MS), exact(2), decelExact));
  if (!positive(decel, braking, brakeTime, total) || !finite(reactionDistance) || (reaction > 0 && !(reactionDistance > 0))) return fail(RANGE);
  return { primary: { label: 'Полный остановочный путь', value: `${measure(total)} м` }, secondary: [
    { label: 'Путь за время реакции', value: `${measure(reactionDistance)} м` }, { label: 'Тормозной путь', value: `${measure(braking)} м` },
    { label: 'Замедление', value: `${measure(decel)} м/с²` }, { label: 'Время торможения', value: `${measure(brakeTime)} с` },
  ] };
};
