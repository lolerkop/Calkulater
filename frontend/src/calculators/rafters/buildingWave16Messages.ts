import type { CalculatorLocalization } from '../../lib/platform/types';
export const buildingWave16Messages={
 en:{
  'Введите конечные числа во все активные поля':'Enter finite numbers in every active field',
  'Выберите поддерживаемый режим расчёта':'Choose a supported calculation mode',
  'Результат выходит за числовой диапазон; измените данные':'The result exceeds the numeric range; change the inputs',
  'Введите целые числа в допустимом диапазоне':'Enter whole numbers within the supported range',
  'в диапазоне модели':'within the model range',
  'вне диапазона модели 0,60–0,65 м':'outside the model range of 0.60–0.65 m',
  'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.':'Capsule fill is estimated linearly from the level; it is an approximation, not the exact volume within the spherical ends.',
  'Плотности при 12 % — фиксированные параметры модели; линейная поправка не учитывает изменение объёма и разброс свойств реальной древесины.':'Densities at 12% are fixed model parameters; the linear adjustment does not account for volume changes or variation in real timber.',
 },
 uk:{
  'Введите конечные числа во все активные поля':'Введіть скінченні числа в усі активні поля',
  'Выберите поддерживаемый режим расчёта':'Виберіть підтримуваний режим розрахунку',
  'Результат выходит за числовой диапазон; измените данные':'Результат виходить за числовий діапазон; змініть дані',
  'Введите целые числа в допустимом диапазоне':'Введіть цілі числа в допустимому діапазоні',
  'в диапазоне модели':'у діапазоні моделі',
  'вне диапазона модели 0,60–0,65 м':'поза діапазоном моделі 0,60–0,65 м',
  'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.':'Для капсули налив оцінено лінійно за рівнем: це наближення, а не точний об’єм у сферичних торцях.',
  'Плотности при 12 % — фиксированные параметры модели; линейная поправка не учитывает изменение объёма и разброс свойств реальной древесины.':'Густини за 12 % — фіксовані параметри моделі; лінійна поправка не враховує зміну об’єму та розкид властивостей реальної деревини.',
 },
 de:{
  'Введите конечные числа во все активные поля':'Gib endliche Zahlen in alle aktiven Felder ein',
  'Выберите поддерживаемый режим расчёта':'Wähle einen unterstützten Berechnungsmodus',
  'Результат выходит за числовой диапазон; измените данные':'Das Ergebnis liegt außerhalb des Zahlenbereichs; ändere die Eingaben',
  'Введите целые числа в допустимом диапазоне':'Gib ganze Zahlen im unterstützten Bereich ein',
  'в диапазоне модели':'im Modellbereich',
  'вне диапазона модели 0,60–0,65 м':'außerhalb des Modellbereichs von 0,60–0,65 m',
  'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.':'Die Kapselfüllung wird linear aus dem Füllstand geschätzt; dies ist eine Näherung, kein exaktes Teilvolumen der kugelförmigen Enden.',
  'Плотности при 12 % — фиксированные параметры модели; линейная поправка не учитывает изменение объёма и разброс свойств реальной древесины.':'Die Dichten bei 12 % sind feste Modellparameter; die lineare Korrektur berücksichtigt weder Volumenänderungen noch die Streuung realer Holzeigenschaften.',
 },
 es:{
  'Введите конечные числа во все активные поля':'Introduce números finitos en todos los campos activos',
  'Выберите поддерживаемый режим расчёта':'Elige un modo de cálculo compatible',
  'Результат выходит за числовой диапазон; измените данные':'El resultado excede el intervalo numérico; cambia los datos',
  'Введите целые числа в допустимом диапазоне':'Introduce números enteros dentro del intervalo admitido',
  'в диапазоне модели':'dentro del intervalo del modelo',
  'вне диапазона модели 0,60–0,65 м':'fuera del intervalo del modelo de 0,60–0,65 m',
  'Для капсулы налив оценён линейно по уровню: это приближение, а не точный объём сферических торцов.':'El llenado de la cápsula se estima linealmente según el nivel; es una aproximación, no el volumen parcial exacto de los extremos esféricos.',
  'Плотности при 12 % — фиксированные параметры модели; линейная поправка не учитывает изменение объёма и разброс свойств реальной древесины.':'Las densidades al 12 % son parámetros fijos del modelo; el ajuste lineal no considera los cambios de volumen ni la variación de la madera real.',
 },
};
export function addBuildingWave16Messages(localization:CalculatorLocalization):void {
 for(const locale of ['en','uk','de','es'] as const){
  const bundle=localization[locale];if(!bundle)continue;
  Object.assign(bundle,{values:{...bundle.values,...buildingWave16Messages[locale]}});
 }
}
