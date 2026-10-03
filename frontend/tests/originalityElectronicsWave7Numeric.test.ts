import { expect, it } from 'vitest';
import type { CalcFunction } from '../src/lib/types';
import { compute as c0 } from '../src/calculators/battery-charge-time/compute';
import { compute as c1 } from '../src/calculators/battery-runtime/compute';
import { compute as c2 } from '../src/calculators/battery-series-parallel/compute';
import { compute as c3 } from '../src/calculators/resistor-network/compute';
import { compute as c4 } from '../src/calculators/capacitor-network/compute';
import { compute as c5 } from '../src/calculators/capacitor-basics/compute';
import { compute as c6 } from '../src/calculators/kva-kw/compute';
import { compute as c7 } from '../src/calculators/single-phase/compute';

const engines:Record<string,CalcFunction> = {'battery-charge-time':c0,'battery-runtime':c1,'battery-series-parallel':c2,'resistor-network':c3,'capacitor-network':c4,'capacitor-basics':c5,'kva-kw':c6,'single-phase':c7};
// Independent Python Decimal, 160 digits; exact binary inputs, no engine import.
const fixtures = [
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 50.0,
      "currentA": 10.0,
      "efficiency": 100.0
    },
    "expected": {
      "В часах": 5.0,
      "Отдано зарядным устройством": 50.0
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 100.0,
      "currentA": 10.0,
      "efficiency": 80.0
    },
    "expected": {
      "В часах": 12.5,
      "Отдано зарядным устройством": 125.0
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 0.001,
      "currentA": 1.0,
      "efficiency": 100.0
    },
    "expected": {
      "В часах": 0.001,
      "Отдано зарядным устройством": 0.001
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 1e+300,
      "currentA": 1e+300,
      "efficiency": 100.0
    },
    "expected": {
      "В часах": 1.0,
      "Отдано зарядным устройством": 1e+300
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 1e-200,
      "currentA": 1e+100,
      "efficiency": 80.0
    },
    "expected": {
      "В часах": 1.25e-300,
      "Отдано зарядным устройством": 1.25e-200
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 1e+100,
      "currentA": 1e+200,
      "efficiency": 1.0
    },
    "expected": {
      "В часах": 1.0000000000000001e-98,
      "Отдано зарядным устройством": 1e+102
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 5.0,
      "currentA": 2.0,
      "efficiency": 90.0
    },
    "expected": {
      "В часах": 2.7777777777777777,
      "Отдано зарядным устройством": 5.555555555555555
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 1e-300,
      "currentA": 1e-200,
      "efficiency": 50.0
    },
    "expected": {
      "В часах": 2e-100,
      "Отдано зарядным устройством": 2e-300
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 1.0,
      "currentA": 1000000.0,
      "efficiency": 100.0
    },
    "expected": {
      "В часах": 1e-06,
      "Отдано зарядным устройством": 1.0
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-charge-time",
    "inputs": {
      "capacityAh": 12.0,
      "currentA": 3.0,
      "efficiency": 25.0
    },
    "expected": {
      "В часах": 16.0,
      "Отдано зарядным устройством": 48.0
    },
    "derivation": "t = 100 C/(I η); source Ah = 100 C/η, Decimal exact binary inputs"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 100.0,
      "voltage": 12.0,
      "load": 200.0,
      "dod": 80.0,
      "efficiency": 90.0
    },
    "expected": {
      "primary": 4.32,
      "Полезная энергия": 864.0,
      "Полная энергия батареи": 1200.0
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 0.001,
      "voltage": 1.0,
      "load": 1.0,
      "dod": 100.0,
      "efficiency": 100.0
    },
    "expected": {
      "primary": 0.001,
      "Полезная энергия": 0.001,
      "Полная энергия батареи": 0.001
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 1e-200,
      "voltage": 1e+200,
      "load": 1e+200,
      "dod": 100.0,
      "efficiency": 100.0
    },
    "expected": {
      "primary": 1e-200,
      "Полезная энергия": 1.0,
      "Полная энергия батареи": 1.0
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 1e-100,
      "voltage": 1e+100,
      "load": 1e-100,
      "dod": 50.0,
      "efficiency": 50.0
    },
    "expected": {
      "primary": 2.5e+99,
      "Полезная энергия": 0.25,
      "Полная энергия батареи": 1.0
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 200.0,
      "voltage": 24.0,
      "load": 600.0,
      "dod": 50.0,
      "efficiency": 80.0
    },
    "expected": {
      "primary": 3.2,
      "Полезная энергия": 1920.0,
      "Полная энергия батареи": 4800.0
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 1.999,
      "voltage": 1.0,
      "load": 1.0,
      "dod": 100.0,
      "efficiency": 100.0
    },
    "expected": {
      "primary": 1.999,
      "Полезная энергия": 1.999,
      "Полная энергия батареи": 1.999
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 1e+200,
      "voltage": 1e-200,
      "load": 1.0,
      "dod": 100.0,
      "efficiency": 100.0
    },
    "expected": {
      "primary": 1.0,
      "Полезная энергия": 1.0,
      "Полная энергия батареи": 1.0
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-runtime",
    "inputs": {
      "capacity": 3.0,
      "voltage": 3.7,
      "load": 2.0,
      "dod": 75.0,
      "efficiency": 90.0
    },
    "expected": {
      "primary": 3.7462500000000003,
      "Полезная энергия": 7.492500000000001,
      "Полная энергия батареи": 11.100000000000001
    },
    "derivation": "E0 = C U; E = E0 DoD η/10000; t = E/P"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 12,
      "series": 4,
      "parallel": 3,
      "cellVoltage": 3.7,
      "cellCapacity": 3.4
    },
    "expected": {
      "primary": 14.8,
      "Ёмкость сборки": 10.2,
      "Энергия": 150.96
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 12,
      "series": 3,
      "parallel": 4,
      "cellVoltage": 3.7,
      "cellCapacity": 3.4
    },
    "expected": {
      "primary": 11.100000000000001,
      "Ёмкость сборки": 13.6,
      "Энергия": 150.96
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 500,
      "series": 500,
      "parallel": 1,
      "cellVoltage": 1e-200,
      "cellCapacity": 1e+100
    },
    "expected": {
      "primary": 5e-198,
      "Ёмкость сборки": 1e+100,
      "Энергия": 5e-98
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 500,
      "series": 1,
      "parallel": 500,
      "cellVoltage": 1e+100,
      "cellCapacity": 1e-200
    },
    "expected": {
      "primary": 1e+100,
      "Ёмкость сборки": 5e-198,
      "Энергия": 5e-98
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 4,
      "series": 2,
      "parallel": 2,
      "cellVoltage": 1e-100,
      "cellCapacity": 1e+100
    },
    "expected": {
      "primary": 2e-100,
      "Ёмкость сборки": 2e+100,
      "Энергия": 4.0
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "battery-series-parallel",
    "inputs": {
      "cells": 1,
      "series": 1,
      "parallel": 1,
      "cellVoltage": 3.6,
      "cellCapacity": 5.0
    },
    "expected": {
      "primary": 3.6,
      "Ёмкость сборки": 5.0,
      "Энергия": 18.0
    },
    "derivation": "U = S Ucell, C = P Ccell, E = N Ucell Ccell"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "470.0 470.0",
      "mode": "series"
    },
    "expected": {
      "primary": 940.0
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "470.0 470.0",
      "mode": "parallel"
    },
    "expected": {
      "primary": 235.0
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "100.0 220.0 330.0",
      "mode": "series"
    },
    "expected": {
      "primary": 650.0
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "100.0 220.0 330.0",
      "mode": "parallel"
    },
    "expected": {
      "primary": 56.89655172413793
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-308 1e-308",
      "mode": "series"
    },
    "expected": {
      "primary": 2e-308
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-308 1e-308",
      "mode": "parallel"
    },
    "expected": {
      "primary": 5e-309
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e+308 1e+308",
      "mode": "parallel"
    },
    "expected": {
      "primary": 5e+307
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-100 1e+100",
      "mode": "series"
    },
    "expected": {
      "primary": 1e+100
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-100 1e+100",
      "mode": "parallel"
    },
    "expected": {
      "primary": 1e-100
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-200 2e-200 4e-200",
      "mode": "series"
    },
    "expected": {
      "primary": 7e-200
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "1e-200 2e-200 4e-200",
      "mode": "parallel"
    },
    "expected": {
      "primary": 5.714285714285714e-201
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "0.1 0.2 0.3",
      "mode": "series"
    },
    "expected": {
      "primary": 0.6
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "resistor-network",
    "inputs": {
      "resistances": "0.1 0.2 0.3",
      "mode": "parallel"
    },
    "expected": {
      "primary": 0.05454545454545455
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "470.0 470.0",
      "mode": "series"
    },
    "expected": {
      "primary": 235.0
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "470.0 470.0",
      "mode": "parallel"
    },
    "expected": {
      "primary": 940.0
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "100.0 220.0 330.0",
      "mode": "series"
    },
    "expected": {
      "primary": 56.89655172413793
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "100.0 220.0 330.0",
      "mode": "parallel"
    },
    "expected": {
      "primary": 650.0
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-308 1e-308",
      "mode": "series"
    },
    "expected": {
      "primary": 5e-309
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-308 1e-308",
      "mode": "parallel"
    },
    "expected": {
      "primary": 2e-308
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e+308 1e+308",
      "mode": "series"
    },
    "expected": {
      "primary": 5e+307
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-100 1e+100",
      "mode": "series"
    },
    "expected": {
      "primary": 1e-100
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-100 1e+100",
      "mode": "parallel"
    },
    "expected": {
      "primary": 1e+100
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-200 2e-200 4e-200",
      "mode": "series"
    },
    "expected": {
      "primary": 5.714285714285714e-201
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "1e-200 2e-200 4e-200",
      "mode": "parallel"
    },
    "expected": {
      "primary": 7e-200
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "0.1 0.2 0.3",
      "mode": "series"
    },
    "expected": {
      "primary": 0.05454545454545455
    },
    "derivation": "Exact Decimal reciprocal sum"
  },
  {
    "id": "capacitor-network",
    "inputs": {
      "capacitances": "0.1 0.2 0.3",
      "mode": "parallel"
    },
    "expected": {
      "primary": 0.6
    },
    "derivation": "Exact Decimal positive sum"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 100.0,
      "v": 12.0
    },
    "expected": {
      "primary": 1200.0,
      "Энергия поля": 0.0072
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 100.0,
      "v": -12.0
    },
    "expected": {
      "primary": -1200.0,
      "Энергия поля": 0.0072
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 100.0,
      "v": 24.0
    },
    "expected": {
      "primary": 2400.0,
      "Энергия поля": 0.0288
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 1e+200,
      "v": 1e-50
    },
    "expected": {
      "primary": 1e+150,
      "Энергия поля": 5e+93
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 1e-100,
      "v": 1e+50
    },
    "expected": {
      "primary": 1.0000000000000001e-50,
      "Энергия поля": 5.000000000000001e-07
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 1.0,
      "v": 0.0
    },
    "expected": {
      "primary": 0.0,
      "Энергия поля": 0.0
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "capacitor-basics",
    "inputs": {
      "mode": "charge",
      "c": 1e-200,
      "v": 1e+100
    },
    "expected": {
      "primary": 1e-100,
      "Энергия поля": 5e-07
    },
    "derivation": "µF V = µC; E_J = C_µF U²/(2e6)"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 5.0,
      "pf": 0.8
    },
    "expected": {
      "primary": 4.0,
      "Реактивная мощность": 2.9999999999999996,
      "Полная мощность": 5.0
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 5.0,
      "pf": 1.0
    },
    "expected": {
      "primary": 5.0,
      "Реактивная мощность": 0.0,
      "Полная мощность": 5.0
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 1e+200,
      "pf": 0.9
    },
    "expected": {
      "primary": 9e+199,
      "Реактивная мощность": 4.358898943540673e+199,
      "Полная мощность": 1e+200
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 1e+100,
      "pf": 0.9999999999999999
    },
    "expected": {
      "primary": 9.999999999999998e+99,
      "Реактивная мощность": 1.4901161193847656e+92,
      "Полная мощность": 1e+100
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 1e+100,
      "pf": 1e-100
    },
    "expected": {
      "primary": 1.0,
      "Реактивная мощность": 1e+100,
      "Полная мощность": 1e+100
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 1e-200,
      "pf": 0.5
    },
    "expected": {
      "primary": 5e-201,
      "Реактивная мощность": 8.660254037844386e-201,
      "Полная мощность": 1e-200
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "kva-kw",
    "inputs": {
      "mode": "kw",
      "kva": 0.0,
      "pf": 0.8
    },
    "expected": {
      "primary": 0.0,
      "Реактивная мощность": 0.0,
      "Полная мощность": 0.0
    },
    "derivation": "Q = sqrt(S² − P²) computed independently in 160-digit Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 230.0,
      "current": 8.0,
      "powerFactor": 0.9
    },
    "expected": {
      "primary": 1656.0,
      "Полная мощность": 1840.0,
      "Реактивная мощность": 802.0374056114839
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 230.0,
      "current": 8.0,
      "powerFactor": 1.0
    },
    "expected": {
      "primary": 1840.0,
      "Полная мощность": 1840.0,
      "Реактивная мощность": 0.0
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 1e+200,
      "current": 1.0,
      "powerFactor": 0.8
    },
    "expected": {
      "primary": 8e+199,
      "Полная мощность": 1e+200,
      "Реактивная мощность": 5.999999999999999e+199
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 1e-200,
      "current": 1.0,
      "powerFactor": 0.5
    },
    "expected": {
      "primary": 5e-201,
      "Полная мощность": 1e-200,
      "Реактивная мощность": 8.660254037844386e-201
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 1e+100,
      "current": 1.0,
      "powerFactor": 0.9999999999999999
    },
    "expected": {
      "primary": 9.999999999999998e+99,
      "Полная мощность": 1e+100,
      "Реактивная мощность": 1.4901161193847656e+92
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 230.0,
      "current": 0.0,
      "powerFactor": 0.8
    },
    "expected": {
      "primary": 0.0,
      "Полная мощность": 0.0,
      "Реактивная мощность": 0.0
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  },
  {
    "id": "single-phase",
    "inputs": {
      "mode": "P",
      "voltage": 1e+100,
      "current": 1e+100,
      "powerFactor": 1e-100
    },
    "expected": {
      "primary": 1e+100,
      "Полная мощность": 1e+200,
      "Реактивная мощность": 1e+200
    },
    "derivation": "P = Urms Irms PF; S = Urms Irms; Q = sqrt(S² − P²), independent Decimal"
  }
];

const numeric=(s:string)=>{const t=s.replace(/[\s\u00a0\u202f]/g,'').replace(',','.');const m=/^([+-]?[\d.]+)·10\^(-?\d+)/.exec(t);return m?Number(m[1])*10**Number(m[2]):parseFloat(t);};
for(const [i,c] of fixtures.entries())it(c.id+' independent Decimal oracle '+i,()=>{
 const result=engines[c.id](c.inputs as Parameters<CalcFunction>[0]);expect(result.primary.value).not.toBe('—');
 for(const [key,expected]of Object.entries(c.expected)){
  const text=key==='primary'?result.primary.value:result.secondary.find(r=>r.label===key)?.value??'';
  const actual=numeric(text);expect(Number.isFinite(actual)).toBe(true);
  if(expected===0)expect(actual).toBe(0);
  else {
   const a=Math.abs(expected);
   const fixed=c.id==='battery-charge-time'?2:c.id==='battery-runtime'?(key==='primary'?2:1):undefined;
   const useFixed=fixed!==undefined&&a>=0.5*10**-fixed&&a<1e12;
   const scientific=a<1e-4||a>=1e12;
   const digits=useFixed?fixed!:a>=100?2:a>=1?3:a>=.01?4:6;
   const tolerance=(!useFixed&&scientific)?a*.00055:0.500001*10**-digits;
   expect(Math.abs(actual-expected)).toBeLessThanOrEqual(tolerance);
  }
 }
});
