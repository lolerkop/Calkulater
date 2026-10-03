import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "tFrom": "От 0 до 100 °C для приближённой однофазной жидкой воды; лёд не рассчитывается.",
    "tTo": "Выше начальной и не более 100 °C; нагрев до точки кипения не включает испарение. Фактическая точка кипения зависит от давления.",
    "efficiency": "Более 0 до 100%; постоянная доля мощности источника, переданная воде. Для цены берите энергию источника Q/η."
  },
  "en": {
    "tFrom": "0–100 °C for approximate single-phase liquid water; ice is excluded.",
    "tTo": "Above initial and no more than 100 °C; reaching boiling excludes evaporation. Actual boiling point depends on pressure.",
    "efficiency": "Above 0 up to 100%; fixed share of source power delivered to water. Cost uses source energy Q/η."
  },
  "uk": {
    "tFrom": "0–100 °C для наближеної однофазної рідкої води; лід не рахується.",
    "tTo": "Вище початкової й не більше 100 °C; досягнення кипіння не включає випаровування. Реальна точка залежить від тиску.",
    "efficiency": "Понад 0 до 100%; стала частка потужності джерела, передана воді. Вартість бере енергію джерела Q/η."
  },
  "de": {
    "tFrom": "0–100 °C für angenähert einphasiges Flüssigwasser; Eis ist ausgeschlossen.",
    "tTo": "Über Start und höchstens 100 °C; Erreichen des Siedens enthält keine Verdampfung. Tatsächlicher Siedepunkt hängt vom Druck ab.",
    "efficiency": "Über 0 bis 100%; fester an Wasser übertragener Quellenleistungsanteil. Kosten nutzen Quellenenergie Q/η."
  },
  "es": {
    "tFrom": "0–100 °C para agua líquida monofásica aproximada; se excluye hielo.",
    "tTo": "Mayor que inicial y hasta 100 °C; alcanzar ebullición no incluye evaporar. La temperatura real depende de presión.",
    "efficiency": "Más de 0 hasta 100%; fracción fija de potencia entregada al agua. Coste usa energía de la fuente Q/η."
  }
});
