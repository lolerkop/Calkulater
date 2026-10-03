import {expect,it} from 'vitest';
import {sqrtRatio,type Dyadic} from '../src/lib/platform/electronicsNumericInput';
// Literal independent Python Fraction/Decimal2500 oracles, including final-subnormal ties.
const rows=[
  {
    "name": "actual-binary-0-0",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-0-1",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "1.4901161193847656e-08"
  },
  {
    "name": "actual-binary-0-2",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "2.2227587494850774e-12"
  },
  {
    "name": "actual-binary-0-3",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "2.2227587494850775e-62"
  },
  {
    "name": "actual-binary-0-4",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "2.2227587494850777e-112"
  },
  {
    "name": "actual-binary-0-5",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "7.028980337440463e-162"
  },
  {
    "name": "actual-binary-0-6",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "3.1434555694052576e-162"
  },
  {
    "name": "actual-binary-0-7",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "2.2227587494850775e-162"
  },
  {
    "name": "actual-binary-0-8",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "1.5717277847026288e-162"
  },
  {
    "name": "actual-binary-0-9",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "1.2833103623588053e-162"
  },
  {
    "name": "actual-binary-0-10",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "2.2227587494850775e-212"
  },
  {
    "name": "actual-binary-0-11",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "2.2227587494850775e-262"
  },
  {
    "name": "actual-binary-0-12",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "2.222758749483e-312"
  },
  {
    "name": "actual-binary-0-13",
    "n": {
      "coefficient": "1",
      "exponent": -1074
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "1.6578092e-316"
  },
  {
    "name": "actual-binary-1-0",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "67108864.0"
  },
  {
    "name": "actual-binary-1-1",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-1-2",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "0.00014916681462400413"
  },
  {
    "name": "actual-binary-1-3",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.4916681462400414e-54"
  },
  {
    "name": "actual-binary-1-4",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1.4916681462400415e-104"
  },
  {
    "name": "actual-binary-1-5",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "4.7170688552396615e-154"
  },
  {
    "name": "actual-binary-1-6",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "2.1095373229726e-154"
  },
  {
    "name": "actual-binary-1-7",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.4916681462400413e-154"
  },
  {
    "name": "actual-binary-1-8",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "1.0547686614863e-154"
  },
  {
    "name": "actual-binary-1-9",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "8.612150057732779e-155"
  },
  {
    "name": "actual-binary-1-10",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1.4916681462400414e-204"
  },
  {
    "name": "actual-binary-1-11",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1.4916681462400414e-254"
  },
  {
    "name": "actual-binary-1-12",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1.4916681462400414e-304"
  },
  {
    "name": "actual-binary-1-13",
    "n": {
      "coefficient": "1",
      "exponent": -1022
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "1.1125369292536007e-308"
  },
  {
    "name": "actual-binary-2-0",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "449891379454.31964"
  },
  {
    "name": "actual-binary-2-1",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6703.903964971299"
  },
  {
    "name": "actual-binary-2-2",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-2-3",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-2-4",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e-100"
  },
  {
    "name": "actual-binary-2-5",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.1622776601683795e-150"
  },
  {
    "name": "actual-binary-2-6",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.4142135623730952e-150"
  },
  {
    "name": "actual-binary-2-7",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e-150"
  },
  {
    "name": "actual-binary-2-8",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865476e-151"
  },
  {
    "name": "actual-binary-2-9",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896258e-151"
  },
  {
    "name": "actual-binary-2-10",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e-200"
  },
  {
    "name": "actual-binary-2-11",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e-250"
  },
  {
    "name": "actual-binary-2-12",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1e-300"
  },
  {
    "name": "actual-binary-2-13",
    "n": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-305"
  },
  {
    "name": "actual-binary-3-0",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "4.4989137945431965e+61"
  },
  {
    "name": "actual-binary-3-1",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.703903964971299e+53"
  },
  {
    "name": "actual-binary-3-2",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-3-3",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-3-4",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-3-5",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.1622776601683794e-100"
  },
  {
    "name": "actual-binary-3-6",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.414213562373095e-100"
  },
  {
    "name": "actual-binary-3-7",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e-100"
  },
  {
    "name": "actual-binary-3-8",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865475e-101"
  },
  {
    "name": "actual-binary-3-9",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896258e-101"
  },
  {
    "name": "actual-binary-3-10",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e-150"
  },
  {
    "name": "actual-binary-3-11",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e-200"
  },
  {
    "name": "actual-binary-3-12",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "9.999999999999999e-251"
  },
  {
    "name": "actual-binary-3-13",
    "n": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-255"
  },
  {
    "name": "actual-binary-4-0",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "4.4989137945431964e+111"
  },
  {
    "name": "actual-binary-4-1",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.7039039649712986e+103"
  },
  {
    "name": "actual-binary-4-2",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+100"
  },
  {
    "name": "actual-binary-4-3",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-4-4",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-4-5",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.162277660168379e-50"
  },
  {
    "name": "actual-binary-4-6",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.414213562373095e-50"
  },
  {
    "name": "actual-binary-4-7",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-4-8",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865475e-51"
  },
  {
    "name": "actual-binary-4-9",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896258e-51"
  },
  {
    "name": "actual-binary-4-10",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e-100"
  },
  {
    "name": "actual-binary-4-11",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e-150"
  },
  {
    "name": "actual-binary-4-12",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1e-200"
  },
  {
    "name": "actual-binary-4-13",
    "n": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-205"
  },
  {
    "name": "actual-binary-5-0",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "1.4226814587507304e+161"
  },
  {
    "name": "actual-binary-5-1",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "2.119960574434296e+153"
  },
  {
    "name": "actual-binary-5-2",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "3.1622776601683796e+149"
  },
  {
    "name": "actual-binary-5-3",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "3.1622776601683795e+99"
  },
  {
    "name": "actual-binary-5-4",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "3.1622776601683793e+49"
  },
  {
    "name": "actual-binary-5-5",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-5-6",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "0.4472135954999579"
  },
  {
    "name": "actual-binary-5-7",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "0.31622776601683794"
  },
  {
    "name": "actual-binary-5-8",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "0.22360679774997896"
  },
  {
    "name": "actual-binary-5-9",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "0.18257418583505539"
  },
  {
    "name": "actual-binary-5-10",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "3.1622776601683794e-51"
  },
  {
    "name": "actual-binary-5-11",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "3.1622776601683795e-101"
  },
  {
    "name": "actual-binary-5-12",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "3.162277660168379e-151"
  },
  {
    "name": "actual-binary-5-13",
    "n": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "2.358534427619831e-155"
  },
  {
    "name": "actual-binary-6-0",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "3.1812124520951964e+161"
  },
  {
    "name": "actual-binary-6-1",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "4.740375954054589e+153"
  },
  {
    "name": "actual-binary-6-2",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "7.071067811865475e+149"
  },
  {
    "name": "actual-binary-6-3",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "7.071067811865475e+99"
  },
  {
    "name": "actual-binary-6-4",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "7.071067811865475e+49"
  },
  {
    "name": "actual-binary-6-5",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "2.23606797749979"
  },
  {
    "name": "actual-binary-6-6",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-6-7",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "0.7071067811865476"
  },
  {
    "name": "actual-binary-6-8",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "0.5"
  },
  {
    "name": "actual-binary-6-9",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "0.408248290463863"
  },
  {
    "name": "actual-binary-6-10",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "7.071067811865475e-51"
  },
  {
    "name": "actual-binary-6-11",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "7.071067811865475e-101"
  },
  {
    "name": "actual-binary-6-12",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "7.071067811865475e-151"
  },
  {
    "name": "actual-binary-6-13",
    "n": {
      "coefficient": "1",
      "exponent": -1
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "5.2738433074315e-155"
  },
  {
    "name": "actual-binary-7-0",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "4.4989137945431964e+161"
  },
  {
    "name": "actual-binary-7-1",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.703903964971299e+153"
  },
  {
    "name": "actual-binary-7-2",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+150"
  },
  {
    "name": "actual-binary-7-3",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1e+100"
  },
  {
    "name": "actual-binary-7-4",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-7-5",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.162277660168379"
  },
  {
    "name": "actual-binary-7-6",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.4142135623730951"
  },
  {
    "name": "actual-binary-7-7",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-7-8",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "0.7071067811865476"
  },
  {
    "name": "actual-binary-7-9",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "0.5773502691896257"
  },
  {
    "name": "actual-binary-7-10",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-7-11",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e-100"
  },
  {
    "name": "actual-binary-7-12",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1e-150"
  },
  {
    "name": "actual-binary-7-13",
    "n": {
      "coefficient": "1",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-155"
  },
  {
    "name": "actual-binary-8-0",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "6.362424904190393e+161"
  },
  {
    "name": "actual-binary-8-1",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "9.480751908109177e+153"
  },
  {
    "name": "actual-binary-8-2",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1.414213562373095e+150"
  },
  {
    "name": "actual-binary-8-3",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.414213562373095e+100"
  },
  {
    "name": "actual-binary-8-4",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1.414213562373095e+50"
  },
  {
    "name": "actual-binary-8-5",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "4.47213595499958"
  },
  {
    "name": "actual-binary-8-6",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "2.0"
  },
  {
    "name": "actual-binary-8-7",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.4142135623730951"
  },
  {
    "name": "actual-binary-8-8",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-8-9",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "0.816496580927726"
  },
  {
    "name": "actual-binary-8-10",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1.414213562373095e-50"
  },
  {
    "name": "actual-binary-8-11",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1.414213562373095e-100"
  },
  {
    "name": "actual-binary-8-12",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1.414213562373095e-150"
  },
  {
    "name": "actual-binary-8-13",
    "n": {
      "coefficient": "2",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "1.0547686614863e-154"
  },
  {
    "name": "actual-binary-9-0",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "7.792347271021305e+161"
  },
  {
    "name": "actual-binary-9-1",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "1.1611502276392735e+154"
  },
  {
    "name": "actual-binary-9-2",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1.732050807568877e+150"
  },
  {
    "name": "actual-binary-9-3",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.7320508075688773e+100"
  },
  {
    "name": "actual-binary-9-4",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1.7320508075688773e+50"
  },
  {
    "name": "actual-binary-9-5",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "5.477225575051661"
  },
  {
    "name": "actual-binary-9-6",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "2.449489742783178"
  },
  {
    "name": "actual-binary-9-7",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.7320508075688772"
  },
  {
    "name": "actual-binary-9-8",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "1.224744871391589"
  },
  {
    "name": "actual-binary-9-9",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-9-10",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1.7320508075688773e-50"
  },
  {
    "name": "actual-binary-9-11",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1.7320508075688774e-100"
  },
  {
    "name": "actual-binary-9-12",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1.7320508075688772e-150"
  },
  {
    "name": "actual-binary-9-13",
    "n": {
      "coefficient": "3",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "1.291822508659917e-154"
  },
  {
    "name": "actual-binary-10-0",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "4.498913794543197e+211"
  },
  {
    "name": "actual-binary-10-1",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.703903964971299e+203"
  },
  {
    "name": "actual-binary-10-2",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+200"
  },
  {
    "name": "actual-binary-10-3",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1e+150"
  },
  {
    "name": "actual-binary-10-4",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e+100"
  },
  {
    "name": "actual-binary-10-5",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.162277660168379e+50"
  },
  {
    "name": "actual-binary-10-6",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.414213562373095e+50"
  },
  {
    "name": "actual-binary-10-7",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-10-8",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865475e+49"
  },
  {
    "name": "actual-binary-10-9",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896258e+49"
  },
  {
    "name": "actual-binary-10-10",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-10-11",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-10-12",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1e-100"
  },
  {
    "name": "actual-binary-10-13",
    "n": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-105"
  },
  {
    "name": "actual-binary-11-0",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "4.4989137945431965e+261"
  },
  {
    "name": "actual-binary-11-1",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.703903964971299e+253"
  },
  {
    "name": "actual-binary-11-2",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+250"
  },
  {
    "name": "actual-binary-11-3",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1e+200"
  },
  {
    "name": "actual-binary-11-4",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e+150"
  },
  {
    "name": "actual-binary-11-5",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.162277660168379e+100"
  },
  {
    "name": "actual-binary-11-6",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.414213562373095e+100"
  },
  {
    "name": "actual-binary-11-7",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e+100"
  },
  {
    "name": "actual-binary-11-8",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865475e+99"
  },
  {
    "name": "actual-binary-11-9",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896257e+99"
  },
  {
    "name": "actual-binary-11-10",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-11-11",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-11-12",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1e-50"
  },
  {
    "name": "actual-binary-11-13",
    "n": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200207e-55"
  },
  {
    "name": "actual-binary-12-0",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "Infinity"
  },
  {
    "name": "actual-binary-12-1",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "6.703903964971298e+303"
  },
  {
    "name": "actual-binary-12-2",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1e+300"
  },
  {
    "name": "actual-binary-12-3",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.0000000000000001e+250"
  },
  {
    "name": "actual-binary-12-4",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1e+200"
  },
  {
    "name": "actual-binary-12-5",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "3.1622776601683793e+150"
  },
  {
    "name": "actual-binary-12-6",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.4142135623730951e+150"
  },
  {
    "name": "actual-binary-12-7",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e+150"
  },
  {
    "name": "actual-binary-12-8",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "7.071067811865476e+149"
  },
  {
    "name": "actual-binary-12-9",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "5.773502691896258e+149"
  },
  {
    "name": "actual-binary-12-10",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1e+100"
  },
  {
    "name": "actual-binary-12-11",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1e+50"
  },
  {
    "name": "actual-binary-12-12",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "actual-binary-12-13",
    "n": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "7.458340731200208e-05"
  },
  {
    "name": "actual-binary-13-0",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1074
    },
    "expected": "Infinity"
  },
  {
    "name": "actual-binary-13-1",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1022
    },
    "expected": "8.988465674311579e+307"
  },
  {
    "name": "actual-binary-13-2",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "6032057205060441",
      "exponent": -1049
    },
    "expected": "1.3407807929942597e+304"
  },
  {
    "name": "actual-binary-13-3",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1723641332219371",
      "exponent": -715
    },
    "expected": "1.3407807929942597e+254"
  },
  {
    "name": "actual-binary-13-4",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "492525077454931",
      "exponent": -381
    },
    "expected": "1.3407807929942595e+204"
  },
  {
    "name": "actual-binary-13-5",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "3602879701896397",
      "exponent": -55
    },
    "expected": "4.2399211488685914e+154"
  },
  {
    "name": "actual-binary-13-6",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": -1
    },
    "expected": "1.8961503816218352e+154"
  },
  {
    "name": "actual-binary-13-7",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.3407807929942596e+154"
  },
  {
    "name": "actual-binary-13-8",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "9.480751908109176e+153"
  },
  {
    "name": "actual-binary-13-9",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": "7.741001517595157e+153"
  },
  {
    "name": "actual-binary-13-10",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "10000000000000000159028911097599180468360808563945281389781327557747838772170381060813469985856815104",
      "exponent": 0
    },
    "expected": "1.3407807929942596e+104"
  },
  {
    "name": "actual-binary-13-11",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "99999999999999996973312221251036165947450327545502362648241750950346848435554075534196338404706251868027512415973882408182135734368278484639385041047239877871023591066789981811181813306167128854888448",
      "exponent": 0
    },
    "expected": "1.3407807929942597e+54"
  },
  {
    "name": "actual-binary-13-12",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "1000000000000000052504760255204420248704468581108159154915854115511802457988908195786371375080447864043704443832883878176942523235360430575644792184786706982848387200926575803737830233794788090059368953234970799945081119038967640880074652742780142494579258788820056842838115669472196386865459400540160",
      "exponent": 0
    },
    "expected": "13407.807929942595"
  },
  {
    "name": "actual-binary-13-13",
    "n": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "d": {
      "coefficient": "179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "half-MIN tie0",
    "n": {
      "coefficient": "1",
      "exponent": -2150
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "0.0"
  },
  {
    "name": "one-and-half-MIN tieeven2",
    "n": {
      "coefficient": "9",
      "exponent": -2150
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e-323"
  },
  {
    "name": "two-and-half-MIN tieeven2",
    "n": {
      "coefficient": "25",
      "exponent": -2150
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1e-323"
  },
  {
    "name": "MIN square",
    "n": {
      "coefficient": "1",
      "exponent": -2148
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "5e-324"
  },
  {
    "name": "normal-boundary-midpoint",
    "n": {
      "coefficient": "81129638414606663681390495662081",
      "exponent": -2150
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "2.2250738585072014e-308"
  },
  {
    "name": "one+halfULP tieeven1",
    "n": {
      "coefficient": "81129638414606699710187514626049",
      "exponent": -106
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "name": "huge finite square",
    "n": {
      "coefficient": "9",
      "exponent": 2040
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "3.3706746278668423e+307"
  },
  {
    "name": "tiny rational root",
    "n": {
      "coefficient": "1",
      "exponent": -2100
    },
    "d": {
      "coefficient": "9",
      "exponent": 0
    },
    "expected": "2.763015e-317"
  },
  {
    "name": "MIN exact",
    "n": {
      "coefficient": "4",
      "exponent": -2150
    },
    "d": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "5e-324"
  }
];
for(const r of rows)it('sqrt rational: '+r.name,()=>{const n:Dyadic={coefficient:BigInt(r.n.coefficient),exponent:r.n.exponent};const d:Dyadic={coefficient:BigInt(r.d.coefficient),exponent:r.d.exponent};expect(sqrtRatio(n,d)).toBe(Number(r.expected));});
it('sqrt rational rejects a negative numerator and nonpositive denominator',()=>{expect(sqrtRatio({coefficient:-1n,exponent:0},{coefficient:1n,exponent:0})).toBeNaN();expect(sqrtRatio({coefficient:1n,exponent:0},{coefficient:0n,exponent:0})).toBeNaN();});
