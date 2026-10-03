import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomPolygonCoordsCopyEn } from './copy.en';
import { geomPolygonCoordsCopyUk } from './copy.uk';
import { geomPolygonCoordsCopyDe } from './copy.de';
import { geomPolygonCoordsCopyEs } from './copy.es';
import { geomPolygonCoordsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-polygon-coords",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomPolygonCoordsCopyEn, uk: geomPolygonCoordsCopyUk, de: geomPolygonCoordsCopyDe, es: geomPolygonCoordsCopyEs },
  referenceCases: geomPolygonCoordsReferenceCases,
  publishedExample: { inputs: { points: '0 0\n4 0\n4 3\n0 3' }, expected: ["12"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-polygon-coords",
    name: "Калькулятор площади многоугольника по координатам",
    slug: "mnogougolnik-po-koordinatam",
    fullPath: "/geometry/mnogougolnik-po-koordinatam/",
    category: "geometry",
    icon: "shapes",
    popularity: 42,
    isNew: false,
    seoTitle: "Калькулятор площади многоугольника по координатам (формула шнурков)",
    h1: "Площадь многоугольника по координатам",
    keywords: ["площадь по координатам", "формула шнурков", "площадь неправильного многоугольника", "площадь участка по координатам"],
    fields: [
      {
        name: 'points', label: 'Вершины: x и y в строке, по порядку обхода', type: 'textarea',
        defaultValue: '0 0\n4 0\n4 3\n0 3',
      },
    ],
    resultLabels: {
      "area": "Площадь",
      "perimeter": "Периметр",
      "vertices": "Вершин",
      "centroidX": "Центроид X",
      "centroidY": "Центроид Y",
      "orientation": "Обход",
    },
    relatedCalculatorIds: ["geom-regular-polygon", "geom-triangle", "geom-trapezoid"],
  },
};
