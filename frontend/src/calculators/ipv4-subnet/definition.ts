import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ipv4SubnetCopyEn } from './copy.en';
import { ipv4SubnetCopyUk } from './copy.uk';
import { ipv4SubnetCopyDe } from './copy.de';
import { ipv4SubnetCopyEs } from './copy.es';
import { ipv4SubnetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "ipv4-subnet",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: ipv4SubnetCopyEn, uk: ipv4SubnetCopyUk, de: ipv4SubnetCopyDe, es: ipv4SubnetCopyEs },
  referenceCases: ipv4SubnetReferenceCases,
  publishedExample: { inputs: { address: '192.168.1.10', prefix: 24 }, expected: ["192.168.1.0"] },
  presentation: {
    ...contractContent.ru,
    id: "ipv4-subnet",
    name: "Калькулятор подсети IPv4",
    slug: "ipv4-subnet",
    fullPath: "/computers/ipv4-subnet/",
    category: "computers",
    icon: "globe",
    popularity: 40,
    isNew: false,
    seoTitle: "Калькулятор подсети IPv4 — маска, сеть и число узлов",
    h1: "Калькулятор подсети IPv4",
    keywords: ["калькулятор подсети", "маска подсети", "CIDR калькулятор", "адрес сети и широковещательный"],
    fields: [
  {
    "name": "address",
    "label": "IPv4-адрес",
    "type": "textarea",
    "defaultValue": "192.168.1.10"
  },
  {
    "name": "prefix",
    "label": "Длина префикса",
    "type": "number",
    "defaultValue": 24,
    "min": 0,
    "max": 32,
    "step": 1,
    "unit": "бит"
  }
],
    resultLabels: {
      "network": "Адрес сети",
      "mask": "Маска подсети",
      "broadcast": "Широковещательный",
      "first": "Первый узел",
      "last": "Последний узел",
      "hosts": "Узлов в сети",
      "wildcard": "Обратная маска",
      "cidr": "Запись CIDR",
    },
    relatedCalculatorIds: ["network-bandwidth", "convert-digital", "download-time"],
  },
};
