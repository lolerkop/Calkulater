import type{EditorialSource}from './calculatorEditorial';
const primary:Record<string,readonly{href:string;labels:readonly string[]}[]>= {
  "tile-calculator": [
    {
      "href": "https://datasheets.tdx.henkel.com/CERESIT-CM-11-PLUS-en_GL.pdf",
      "labels": [
        "Ceresit CM 11 Plus: расход именно этого продукта зависит от плитки и шпателя; 5 кг/м² не универсальная норма",
        "Ceresit CM 11 Plus: this product rate depends on tile and trowel; 5 kg/m² is not a universal norm",
        "Ceresit CM 11 Plus: витрата цього продукту залежить від плитки й шпателя; 5 кг/м² не універсальна норма",
        "Ceresit CM 11 Plus: produktbezogener Verbrauch nach Fliese und Zahnung; 5 kg/m² sind keine allgemeine Norm",
        "Ceresit CM 11 Plus: consumo de este producto según baldosa y llana; 5 kg/m² no es una norma universal"
      ]
    }
  ],
  "paint-calculator": [
    {
      "href": "https://www.dulux.co.uk/en/expert-help/how-much-paint-do-you-need",
      "labels": [
        "Dulux: число слоёв и расход зависят от конкретной краски и поверхности; геометрическая формула здесь самостоятельная",
        "Dulux: coats and consumption depend on paint and surface; the geometric formula here is independent",
        "Dulux: шари й витрата залежать від фарби та поверхні; геометрична формула тут самостійна",
        "Dulux: Anstriche und Verbrauch nach Farbe und Oberfläche; die Geometrieformel hier ist eigenständig",
        "Dulux: capas y consumo según pintura y superficie; la fórmula geométrica aquí es propia"
      ]
    }
  ],
  "laminate-calculator": [
    {
      "href": "https://int.quick-step.com/-/media/imported%20assets/flooring/8/6/f/installation%20instructionsqsstandard%20laminatev2017enpdf261039.ashx?filename=Installation+instructions+Quick-Step+Laminate+-+LMP.pdf&rev=2d82cd2d1e7c4648bdae8452de050dfb&type=original",
      "labels": [
        "Quick-Step, прочитанная инструкция: зазоры и ровность относятся к этому покрытию; не универсальная норма",
        "Quick-Step instructions read: gaps and flatness apply to this flooring; not a universal standard",
        "Quick-Step, прочитана інструкція: зазори й рівність стосуються цього покриття; не універсальна норма",
        "Gelesene Quick-Step-Anleitung: Abstände und Ebenheit für diesen Belag; keine allgemeine Norm",
        "Instrucciones Quick-Step leídas: holguras y planitud para este revestimiento; no son una norma universal"
      ]
    }
  ],
  "screed-calculator": [
    {
      "href": "https://int.quick-step.com/-/media/imported%20assets/flooring/8/6/f/installation%20instructionsqsstandard%20laminatev2017enpdf261039.ashx?filename=Installation+instructions+Quick-Step+Laminate+-+LMP.pdf&rev=2d82cd2d1e7c4648bdae8452de050dfb&type=original",
      "labels": [
        "Quick-Step: сроки для основания только ориентировочные и требуют проверки влажности; норма сухой смеси вводится отдельно",
        "Quick-Step: subfloor drying times are indicative and require moisture checks; dry-mix rate is entered separately",
        "Quick-Step: строки для основи орієнтовні й потребують перевірки вологості; витрата сухої суміші вводиться окремо",
        "Quick-Step: Untergrundzeiten sind Richtwerte mit Feuchteprüfung; Trockenverbrauch wird separat eingegeben",
        "Quick-Step: secado de base orientativo y sujeto a humedad; el consumo de mezcla seca se introduce aparte"
      ]
    }
  ]
};
const index:Record<string,number>={ru:0,en:1,uk:2,de:3,es:4};
export function getBuildingWave17MethodSources(id:string,locale:string):EditorialSource[]{return(Object.hasOwn(primary,id)?primary[id]:[]).map(s=>({href:s.href,label:s.labels[index[locale]??1]}));}
