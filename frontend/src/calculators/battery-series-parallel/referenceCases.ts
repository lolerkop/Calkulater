import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const batterySeriesParallelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "12 ячеек 3,7 В 3,4 Ач, 4 последовательно × 3 параллельно",
    inputs: {"cellCapacity": 3.4, "cellVoltage": 3.7, "cells": 12, "parallel": 3, "series": 4},
    expectPrimary: "14,8 В",
    expectSecondary: [{ label: "Ёмкость сборки", value: "10,2 А·ч" }, { label: "Энергия", value: "150,96 Вт·ч" }, { label: "Ячеек", value: "12" }],
  },
  {
    name: "8 ячеек 1,2 В 2 Ач, 8 последовательно × 1 параллельно",
    inputs: {"cellCapacity": 2, "cellVoltage": 1.2, "cells": 8, "parallel": 1, "series": 8},
    expectPrimary: "9,6 В",
    expectSecondary: [{ label: "Ёмкость сборки", value: "2 А·ч" }, { label: "Энергия", value: "19,2 Вт·ч" }, { label: "Ячеек", value: "8" }],
  },
  {
    name: "одна ячейка",
    inputs: {"cellCapacity": 5, "cellVoltage": 3.6, "cells": 1, "parallel": 1, "series": 1},
    expectPrimary: "3,6 В",
    expectSecondary: [{ label: "Ёмкость сборки", value: "5 А·ч" }, { label: "Энергия", value: "18 Вт·ч" }, { label: "Ячеек", value: "1" }],
  },
  {
    name: "произведение схемы не совпадает с числом ячеек",
    inputs: {"cellCapacity": 2, "cellVoltage": 3.7, "cells": 10, "parallel": 3, "series": 4},
    expectPrimary: "—",
  },
];
