import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "meters": "Каждый ряд: название расход тариф. Расход периода, не накопленный счётчик. Точка/запятая десятичные, без группировки тысяч. Все цены в одной денежной единице.",
    "fixed": "Неотрицательная сумма постоянных начислений за тот же месяц; не повторяйте её в строках услуг."
  },
  "en": {
    "meters": "Each line: name usage tariff. Period consumption, not cumulative meter reading. Dot/comma are decimal; no thousands grouping. All prices use one currency.",
    "fixed": "Nonnegative fixed charges for the same month; do not repeat them in service lines."
  },
  "uk": {
    "meters": "Рядок: назва витрата тариф. Споживання періоду, не накопичений лічильник. Крапка/кома десяткові, без тисячних груп. Усі ціни в одній валюті.",
    "fixed": "Невід’ємна сума постійних нарахувань за той самий місяць; не повторюйте її в рядках послуг."
  },
  "de": {
    "meters": "Zeile: Name Verbrauch Tarif. Periodenverbrauch, kein kumulativer Stand. Punkt/Komma dezimal, keine Tausendergruppen. Alle Preise in einer Währung.",
    "fixed": "Nichtnegative Festgebühren desselben Monats; nicht in Servicezeilen wiederholen."
  },
  "es": {
    "meters": "Línea: nombre consumo tarifa. Consumo del periodo, no lectura acumulada. Punto/coma decimal, sin grupos de miles. Precios en una moneda.",
    "fixed": "Cargos fijos no negativos del mismo mes; no los repitas en líneas de servicios."
  }
});
