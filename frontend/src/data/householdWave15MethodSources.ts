import type { EditorialSource } from './calculatorEditorial';

// Primary bodies read 2026-10-02; bounded source labels describe actual scope.
// Pure volume/time and tariff arithmetic needs no borrowed approval.
type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
const sources: Record<string, { href: string; label: Labels }> = {
  "prime": {
    "href": "https://www.seachem.com/prime.php",
    "label": {
      "ru": "Seachem Prime: инструкции различают добавление в новую воду и прямо в аквариум; не универсальная доза",
      "en": "Seachem Prime: instructions distinguish new-water and direct-tank dosing; no universal dose",
      "uk": "Seachem Prime: інструкції розрізняють додавання в нову воду та в акваріум; не універсальна доза",
      "de": "Seachem Prime: Anleitung unterscheidet Frischwasser- und Beckenzugabe; keine allgemeine Dosis",
      "es": "Seachem Prime: instrucciones distinguen agua nueva y adición al acuario; no dosis universal"
    }
  },
  "aquarium": {
    "href": "https://www.msdvetmanual.com/multimedia/table/essential-maintenance",
    "label": {
      "ru": "MSD Veterinary Manual: объём подмены зависит от заселения и контроля воды; не назначение фиксированного графика",
      "en": "MSD Veterinary Manual: change volume depends on stocking and water testing; no prescribed fixed schedule",
      "uk": "MSD Veterinary Manual: об’єм підміни залежить від заселення та перевірки води; не фіксований графік",
      "de": "MSD Veterinary Manual: Wechselmenge hängt von Besatz und Wasserprüfung ab; kein fester Pflegeplan",
      "es": "MSD Veterinary Manual: cambio depende de población y pruebas de agua; no calendario fijo"
    }
  },
  "drip": {
    "href": "https://water.usgs.gov/edu/activity-drip.html",
    "label": {
      "ru": "USGS: размер капли не универсален; их пример 0,25 мл отличается от нашего входа 0,05 мл",
      "en": "USGS: no universal drip size; its 0.25 mL example differs from our 0.05 mL input",
      "uk": "USGS: розмір краплі не універсальний; їхній приклад 0,25 мл відрізняється від нашого входу 0,05 мл",
      "de": "USGS: kein allgemeines Tropfenvolumen; Beispiel 0,25 ml unterscheidet sich von unserer Eingabe 0,05 ml",
      "es": "USGS: no tamaño universal de gota; su ejemplo 0,25 ml difiere de nuestra entrada 0,05 ml"
    }
  },
  "energy": {
    "href": "https://www.pubs.ext.vt.edu/2901/2901-9014/2901-9014.html",
    "label": {
      "ru": "Virginia Cooperative Extension, 2020: мощность × часы и тариф; режим влияет на фактическое потребление",
      "en": "Virginia Cooperative Extension, 2020: power × hours and tariff; operating settings affect actual use",
      "uk": "Virginia Cooperative Extension, 2020: потужність × години й тариф; режим впливає на споживання",
      "de": "Virginia Cooperative Extension, 2020: Leistung × Stunden und Tarif; Betriebsstufe beeinflusst Verbrauch",
      "es": "Virginia Cooperative Extension, 2020: potencia × horas y tarifa; el modo afecta al consumo"
    }
  },
  "generator": {
    "href": "https://emc.cat.com/n/api/pubdirect?media_string_id=LEHE1468-",
    "label": {
      "ru": "Caterpillar 3412, LEHE1468-04 (10/2019): расход при разных нагрузках конкретной модели; не подтверждение общего 0,3",
      "en": "Caterpillar 3412, LEHE1468-04 (10/2019): load-specific fuel data for this model; not approval of a universal 0.3",
      "uk": "Caterpillar 3412, LEHE1468-04 (10/2019): витрати за різних навантажень цієї моделі; не підтвердження загальних 0,3",
      "de": "Caterpillar 3412, LEHE1468-04 (10/2019): Lastverbrauch dieses Modells; kein Beleg für allgemeine 0,3",
      "es": "Caterpillar 3412, LEHE1468-04 (10/2019): consumo por carga de ese modelo; no valida 0,3 universal"
    }
  },
  "heatload": {
    "href": "https://bsesc.energy.gov/training-modules/hvac-cold-climate-heat-pump-sizing",
    "label": {
      "ru": "DOE/PNNL: проектная отопительная нагрузка требует расчёта; не подтверждение Вт/м³ или 100 Вт на окно",
      "en": "DOE/PNNL: design heating load needs calculation; not validation of W/m³ or 100 W per window",
      "uk": "DOE/PNNL: проєктна опалювальна потреба вимагає розрахунку; не підтвердження Вт/м³ чи 100 Вт на вікно",
      "de": "DOE/PNNL: Auslegungsheizlast braucht Berechnung; kein Beleg für W/m³ oder 100 W je Fenster",
      "es": "DOE/PNNL: carga de diseño requiere cálculo; no valida W/m³ ni 100 W por ventana"
    }
  },
  "maintenance": {
    "href": "https://cie.co.at/eilv/753",
    "label": {
      "ru": "CIE: коэффициент сохранения — отношение света с течением времени к начальному",
      "en": "CIE: maintenance factor compares light after time with initial light",
      "uk": "CIE: коефіцієнт збереження порівнює світло з часом із початковим",
      "de": "CIE: Wartungsfaktor vergleicht Licht nach einer Zeit mit Anfangslicht",
      "es": "CIE: factor de mantenimiento compara luz con el tiempo y luz inicial"
    }
  },
  "utilisation": {
    "href": "https://cie.co.at/eilvterm/17-29-069",
    "label": {
      "ru": "CIE: коэффициент использования — доля потока на опорной плоскости; здесь принят равным 1",
      "en": "CIE: utilisation is the flux fraction on the reference plane; here assumed 1",
      "uk": "CIE: коефіцієнт використання — частка потоку на опорній площині; тут прийнятий за 1",
      "de": "CIE: Nutzungsgrad ist der Lichtstromanteil auf der Bezugsebene; hier mit 1 angenommen",
      "es": "CIE: utilización es fracción de flujo en el plano de referencia; aquí se supone 1"
    }
  },
  "rainhealth": {
    "href": "https://www.cdc.gov/drinking-water/about/collecting-rainwater-and-your-health-an-overview.html",
    "label": {
      "ru": "CDC, 2024: дождевая вода, микробы, химические загрязнения и требования конкретного использования",
      "en": "CDC, 2024: rainwater, microbes, chemicals and use-specific requirements",
      "uk": "CDC, 2024: дощова вода, мікроби, хімічні забруднення й вимоги конкретного використання",
      "de": "CDC, 2024: Regenwasser, Keime, Chemikalien und nutzungsspezifische Anforderungen",
      "es": "CDC, 2024: lluvia, microbios, sustancias químicas y requisitos según uso"
    }
  },
  "waterheat": {
    "href": "https://openstax.org/books/college-physics-2e/pages/14-2-temperature-change-and-heat-capacity",
    "label": {
      "ru": "OpenStax College Physics 2e: Q=mcΔT без смены фазы; 4186 Дж/(кг·K) как приближённое значение для воды",
      "en": "OpenStax College Physics 2e: Q=mcΔT without phase change; 4186 J/(kg·K) as an approximate water value",
      "uk": "OpenStax College Physics 2e: Q=mcΔT без зміни фази; 4186 Дж/(кг·K) як наближене значення води",
      "de": "OpenStax College Physics 2e: Q=mcΔT ohne Phasenwechsel; angenähert 4186 J/(kg·K) für Wasser",
      "es": "OpenStax College Physics 2e: Q=mcΔT sin cambio de fase; 4186 J/(kg·K) como aproximación para agua"
    }
  },
  "temperature": {
    "href": "https://www.nist.gov/pml/owm/si-units-temperature",
    "label": {
      "ru": "NIST: около 0 °C для замерзания и 100 °C для кипения воды; температурные разности K и °C равны",
      "en": "NIST: water freezing near 0 °C and boiling near 100 °C; K and °C temperature differences match",
      "uk": "NIST: вода замерзає близько 0 °C і кипить близько 100 °C; різниці K та °C однакові",
      "de": "NIST: Wasser gefriert nahe 0 °C und siedet nahe 100 °C; Temperaturdifferenzen K und °C sind gleich",
      "es": "NIST: agua congela cerca de 0 °C y hierve cerca de 100 °C; diferencias K y °C iguales"
    }
  }
};
const sourceIds: Record<string, string[]> = {
  "aquarium-water-change": [
    "prime",
    "aquarium"
  ],
  "drip-water-leak": [
    "drip"
  ],
  "electricity-usage": [
    "energy"
  ],
  "generator-fuel": [
    "generator"
  ],
  "heating-power": [
    "heatload"
  ],
  "lighting": [
    "maintenance",
    "utilisation"
  ],
  "rainfall-volume": [
    "rainhealth"
  ],
  "water-heating": [
    "waterheat",
    "temperature"
  ],
  "pool-fill-time": [],
  "utility-total": []
};

export function getHouseholdWave15MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(sourceIds, id) ? sourceIds[id] : []).map(key => ({
    href: sources[key].href,
    label: sources[key].label[locale as keyof Labels] ?? sources[key].label.en,
  }));
}
