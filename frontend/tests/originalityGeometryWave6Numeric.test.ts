import { describe, expect, it } from 'vitest';
import { ratio, sqrt } from '../src/lib/platform/geometryNumericInput';

// Independent Python Fraction→float ratios and 1800-digit Decimal roots; fixed seed604001.
// Literals include exact half-subnormal sqrt ties, signs, normal/overflow/underflow limits.
const fixtures = [
  {
    "op": "ratio",
    "a": {
      "coefficient": "26950533086075899",
      "exponent": 238
    },
    "b": {
      "coefficient": "18407159114453386",
      "exponent": -271
    },
    "expected": "2.4538521193089555e+153"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "55661619099441693",
      "exponent": -203
    },
    "b": {
      "coefficient": "12223539968956338",
      "exponent": 270
    },
    "expected": "1.8671142307205875e-142"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "10318920613679379",
      "exponent": 60
    },
    "b": {
      "coefficient": "31219438662537679",
      "exponent": 50
    },
    "expected": "338.46139332054145"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "65603450947730008",
      "exponent": -360
    },
    "b": {
      "coefficient": "10873234036299283",
      "exponent": -436
    },
    "expected": "4.558769350600091e+23"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-10424857450462866",
      "exponent": 983
    },
    "b": {
      "coefficient": "26546611772883539",
      "exponent": 1066
    },
    "expected": "-4.0604240031774104e-26"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-57520276498433936",
      "exponent": -1104
    },
    "b": {
      "coefficient": "34729563994311942",
      "exponent": -77
    },
    "expected": "-1.151638266245343e-309"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-61483802192999143",
      "exponent": -558
    },
    "b": {
      "coefficient": "35614747732937111",
      "exponent": 261
    },
    "expected": "-4.938151336816578e-247"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "58763030777839231",
      "exponent": -680
    },
    "b": {
      "coefficient": "2543619769911269",
      "exponent": 394
    },
    "expected": "1.14e-322"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-65276973341620406",
      "exponent": -1077
    },
    "b": {
      "coefficient": "17431626293491409",
      "exponent": -947
    },
    "expected": "-2.7512031906090058e-39"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-66696919242136849",
      "exponent": 19
    },
    "b": {
      "coefficient": "31147968550123818",
      "exponent": 1046
    },
    "expected": "-1.48891703813914e-309"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-55458710670529742",
      "exponent": 394
    },
    "b": {
      "coefficient": "2885358227553904",
      "exponent": -1088
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "5494756292694690",
      "exponent": -142
    },
    "b": {
      "coefficient": "2228040048366137",
      "exponent": -765
    },
    "expected": "8.584455245900206e+187"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-37500552752100884",
      "exponent": 568
    },
    "b": {
      "coefficient": "14226530044198014",
      "exponent": 440
    },
    "expected": "-8.969704356356814e+38"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-67238239736007943",
      "exponent": 558
    },
    "b": {
      "coefficient": "21955768322250659",
      "exponent": 888
    },
    "expected": "-1.4001324681931035e-99"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-64938681779795787",
      "exponent": 855
    },
    "b": {
      "coefficient": "10841696331837368",
      "exponent": -495
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "49216047103324103",
      "exponent": 823
    },
    "b": {
      "coefficient": "8213747274708401",
      "exponent": 517
    },
    "expected": "7.811673202745571e+92"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-15310646585520052",
      "exponent": 835
    },
    "b": {
      "coefficient": "13858639815663605",
      "exponent": -1073
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-211642649728379",
      "exponent": 378
    },
    "b": {
      "coefficient": "25614864419814964",
      "exponent": 1048
    },
    "expected": "-1.6866075256943677e-204"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-43274621419880599",
      "exponent": -672
    },
    "b": {
      "coefficient": "13871541506568358",
      "exponent": -32
    },
    "expected": "-6.83772021717853e-193"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-37066404679098528",
      "exponent": -992
    },
    "b": {
      "coefficient": "7665020244212341",
      "exponent": 429
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-39353795392010231",
      "exponent": 256
    },
    "b": {
      "coefficient": "6128992728835251",
      "exponent": 849
    },
    "expected": "-1.9806607182015937e-178"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-31074959903014317",
      "exponent": 62
    },
    "b": {
      "coefficient": "1433834222422487",
      "exponent": -1142
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "54333991933468516",
      "exponent": -997
    },
    "b": {
      "coefficient": "29220363300953177",
      "exponent": -840
    },
    "expected": "1.017833365693402e-47"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-45241535709619372",
      "exponent": 369
    },
    "b": {
      "coefficient": "18073556672531772",
      "exponent": 199
    },
    "expected": "-3.746217395175712e+51"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-52388186472357534",
      "exponent": -758
    },
    "b": {
      "coefficient": "24918341722314918",
      "exponent": 673
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-47107959862673040",
      "exponent": -1185
    },
    "b": {
      "coefficient": "30891856287581398",
      "exponent": 580
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-40135684724154471",
      "exponent": 748
    },
    "b": {
      "coefficient": "3072716523848289",
      "exponent": 276
    },
    "expected": "-1.5928179235794873e+143"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "48595401782282358",
      "exponent": 979
    },
    "b": {
      "coefficient": "24432512754120183",
      "exponent": -682
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-14460268868846442",
      "exponent": 757
    },
    "b": {
      "coefficient": "8582531867188212",
      "exponent": -477
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "49317555243928681",
      "exponent": 262
    },
    "b": {
      "coefficient": "23330692929669100",
      "exponent": 48
    },
    "expected": "5.565356307553166e+64"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-1355437619113720",
      "exponent": 56
    },
    "b": {
      "coefficient": "1935733205425411",
      "exponent": 371
    },
    "expected": "-1.0490239434036734e-95"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "54615811810034485",
      "exponent": -148
    },
    "b": {
      "coefficient": "8337915831155213",
      "exponent": 987
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "25585476854607066",
      "exponent": 115
    },
    "b": {
      "coefficient": "28329811845974957",
      "exponent": -118
    },
    "expected": "1.2466335630624219e+70"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-50421018947215494",
      "exponent": -2
    },
    "b": {
      "coefficient": "19124916739264937",
      "exponent": 994
    },
    "expected": "-3.936736832506078e-300"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "55758691750132095",
      "exponent": 470
    },
    "b": {
      "coefficient": "35511327201372606",
      "exponent": 448
    },
    "expected": "6585755.089246746"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "55962871535014575",
      "exponent": 715
    },
    "b": {
      "coefficient": "14401360964666512",
      "exponent": 615
    },
    "expected": "4.9260183024305776e+30"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "34916919769401201",
      "exponent": 488
    },
    "b": {
      "coefficient": "29698919060601890",
      "exponent": 434
    },
    "expected": "2.1179468052897388e+16"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-24518285646879947",
      "exponent": -32
    },
    "b": {
      "coefficient": "5743629077192181",
      "exponent": 402
    },
    "expected": "-9.622448530988114e-131"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-30501637099775770",
      "exponent": 37
    },
    "b": {
      "coefficient": "4926477246553976",
      "exponent": 722
    },
    "expected": "-3.85691118732142e-206"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "7180553301151648",
      "exponent": -524
    },
    "b": {
      "coefficient": "17276122083268834",
      "exponent": 568
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-19043472388516823",
      "exponent": -1139
    },
    "b": {
      "coefficient": "10066179360114590",
      "exponent": -799
    },
    "expected": "-8.446619882878119e-103"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-4434196954703842",
      "exponent": -1075
    },
    "b": {
      "coefficient": "15675458698976406",
      "exponent": 318
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "22537068395829264",
      "exponent": 721
    },
    "b": {
      "coefficient": "28199688832838342",
      "exponent": -591
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-26274591669670328",
      "exponent": -92
    },
    "b": {
      "coefficient": "18285605827937425",
      "exponent": -1070
    },
    "expected": "-3.670814014605423e+294"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "13113396832355039",
      "exponent": 737
    },
    "b": {
      "coefficient": "17958537192870593",
      "exponent": -327
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "47321885021181684",
      "exponent": -554
    },
    "b": {
      "coefficient": "27090876077030271",
      "exponent": -495
    },
    "expected": "3.0301856846675266e-18"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-65117471070324701",
      "exponent": -1197
    },
    "b": {
      "coefficient": "16020201106271500",
      "exponent": 982
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-53884949093978045",
      "exponent": -348
    },
    "b": {
      "coefficient": "32318345002211285",
      "exponent": 1012
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "3921673623168675",
      "exponent": -302
    },
    "b": {
      "coefficient": "2253080106674366",
      "exponent": 740
    },
    "expected": "3.6935104515e-314"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-70778244322391358",
      "exponent": 474
    },
    "b": {
      "coefficient": "255709754265162",
      "exponent": -715
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "8038972739143799",
      "exponent": -307
    },
    "b": {
      "coefficient": "5226511830170260",
      "exponent": 769
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "11219733848552675",
      "exponent": 965
    },
    "b": {
      "coefficient": "5277596493656482",
      "exponent": 778
    },
    "expected": "4.170187301168864e+56"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-18879969998228316",
      "exponent": -937
    },
    "b": {
      "coefficient": "30846727414350590",
      "exponent": 653
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "68225642526927989",
      "exponent": 470
    },
    "b": {
      "coefficient": "34669842056438459",
      "exponent": 1005
    },
    "expected": "1.749637550919364e-161"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-69182737799092834",
      "exponent": 203
    },
    "b": {
      "coefficient": "15936844822066451",
      "exponent": -1000
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-22696235514341217",
      "exponent": 126
    },
    "b": {
      "coefficient": "2234161526412896",
      "exponent": -991
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "67254740152128534",
      "exponent": -48
    },
    "b": {
      "coefficient": "13042380422303658",
      "exponent": 985
    },
    "expected": "5.6024825762626e-311"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-45971138121476487",
      "exponent": -544
    },
    "b": {
      "coefficient": "26410080685275133",
      "exponent": 26
    },
    "expected": "-4.50420345474055e-172"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "2420348663412057",
      "exponent": 317
    },
    "b": {
      "coefficient": "1505726618901997",
      "exponent": -897
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "49103769086106614",
      "exponent": -22
    },
    "b": {
      "coefficient": "7718960998924464",
      "exponent": 567
    },
    "expected": "3.139702769702978e-177"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-67178498485112083",
      "exponent": -700
    },
    "b": {
      "coefficient": "12463769747946530",
      "exponent": -769
    },
    "expected": "-3.1816366158788926e+21"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-63776358082749851",
      "exponent": -339
    },
    "b": {
      "coefficient": "7840426887215951",
      "exponent": 1
    },
    "expected": "-3.631796287564118e-102"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "27480615741981763",
      "exponent": 230
    },
    "b": {
      "coefficient": "13096026011145979",
      "exponent": 301
    },
    "expected": "8.887042116624836e-22"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "34448704084130577",
      "exponent": -608
    },
    "b": {
      "coefficient": "28400855140491169",
      "exponent": -219
    },
    "expected": "9.61995762362781e-118"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "7682724211346803",
      "exponent": -1176
    },
    "b": {
      "coefficient": "5537464334238964",
      "exponent": -123
    },
    "expected": "1.4375364e-317"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-37631752176821541",
      "exponent": -1135
    },
    "b": {
      "coefficient": "8918089204810213",
      "exponent": -601
    },
    "expected": "-7.503518252709766e-161"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "19056227773994777",
      "exponent": -668
    },
    "b": {
      "coefficient": "8810620956714360",
      "exponent": 401
    },
    "expected": "3.4e-322"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-44668801158369944",
      "exponent": 703
    },
    "b": {
      "coefficient": "22557617750221647",
      "exponent": -374
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "41440482409897709",
      "exponent": 457
    },
    "b": {
      "coefficient": "35818977635965031",
      "exponent": -842
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "17915844984820126",
      "exponent": 1072
    },
    "b": {
      "coefficient": "28519547808940468",
      "exponent": -1173
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-28742449689252468",
      "exponent": -878
    },
    "b": {
      "coefficient": "15979615133873531",
      "exponent": -609
    },
    "expected": "-1.8962195989008998e-81"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "21057374725535478",
      "exponent": 96
    },
    "b": {
      "coefficient": "18446007252234116",
      "exponent": 708
    },
    "expected": "6.716522968760917e-185"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-49365213272651408",
      "exponent": -181
    },
    "b": {
      "coefficient": "2962689539103154",
      "exponent": -327
    },
    "expected": "-1.4863265669041687e+45"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-62480553450938285",
      "exponent": 519
    },
    "b": {
      "coefficient": "26234966520228042",
      "exponent": -148
    },
    "expected": "-1.458382557423095e+201"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-71865977004480488",
      "exponent": -502
    },
    "b": {
      "coefficient": "2385740274208024",
      "exponent": 597
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-26631437746594852",
      "exponent": -80
    },
    "b": {
      "coefficient": "6486279324712274",
      "exponent": 854
    },
    "expected": "-2.827372411047361e-281"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "67801156845110866",
      "exponent": -739
    },
    "b": {
      "coefficient": "30967060927717075",
      "exponent": -466
    },
    "expected": "1.442607876780736e-82"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-42470841024829527",
      "exponent": 955
    },
    "b": {
      "coefficient": "5667328283553504",
      "exponent": 384
    },
    "expected": "-5.792152865076038e+172"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-28118046163910657",
      "exponent": 971
    },
    "b": {
      "coefficient": "18945461573715906",
      "exponent": -1165
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-50396221557634491",
      "exponent": 415
    },
    "b": {
      "coefficient": "22644422627717330",
      "exponent": -187
    },
    "expected": "-3.693976382691468e+181"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-21713841981083825",
      "exponent": -592
    },
    "b": {
      "coefficient": "17491192518912312",
      "exponent": 97
    },
    "expected": "-4.833372208451725e-208"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "52590008072140616",
      "exponent": 32
    },
    "b": {
      "coefficient": "2762595668498341",
      "exponent": 1030
    },
    "expected": "7.106409640785103e-300"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-52237596470336782",
      "exponent": -230
    },
    "b": {
      "coefficient": "12943014367233979",
      "exponent": 238
    },
    "expected": "-5.2955342611602e-141"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "62005013783868040",
      "exponent": -547
    },
    "b": {
      "coefficient": "7081822558142484",
      "exponent": 188
    },
    "expected": "4.844343769788639e-221"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "62672407492162424",
      "exponent": -247
    },
    "b": {
      "coefficient": "8661607011026686",
      "exponent": -151
    },
    "expected": "9.132681645557526e-29"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-39243475429826610",
      "exponent": -88
    },
    "b": {
      "coefficient": "29097801037135230",
      "exponent": 456
    },
    "expected": "-2.3420148833939846e-164"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "5516926377728433",
      "exponent": -955
    },
    "b": {
      "coefficient": "844383413081243",
      "exponent": -593
    },
    "expected": "6.955030911528906e-109"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-15437750688138561",
      "exponent": -304
    },
    "b": {
      "coefficient": "29767811685762742",
      "exponent": 367
    },
    "expected": "-5.293099072097386e-203"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "18149705488374367",
      "exponent": -1186
    },
    "b": {
      "coefficient": "27691032298230689",
      "exponent": 993
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "19777648733035756",
      "exponent": -153
    },
    "b": {
      "coefficient": "21256699162893052",
      "exponent": 716
    },
    "expected": "2.3638101928208253e-262"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "29719388936679998",
      "exponent": -728
    },
    "b": {
      "coefficient": "18706455894343118",
      "exponent": 270
    },
    "expected": "5.930791939511739e-301"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "44793427613171172",
      "exponent": -769
    },
    "b": {
      "coefficient": "35740818375525233",
      "exponent": -901
    },
    "expected": "6.823531978730238e+39"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-69989433491307498",
      "exponent": -835
    },
    "b": {
      "coefficient": "4513620918459117",
      "exponent": -1123
    },
    "expected": "-7.7116293563854e+87"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-16515759284940670",
      "exponent": 536
    },
    "b": {
      "coefficient": "19101887751376190",
      "exponent": -498
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-68516836626514326",
      "exponent": -928
    },
    "b": {
      "coefficient": "22489753789682242",
      "exponent": -462
    },
    "expected": "-1.5989490426806435e-140"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "6397456903017385",
      "exponent": 917
    },
    "b": {
      "coefficient": "17555229528403993",
      "exponent": 587
    },
    "expected": "7.970754369945852e+98"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-15986204349825215",
      "exponent": -460
    },
    "b": {
      "coefficient": "35959379092689111",
      "exponent": -547
    },
    "expected": "-6.879277027363299e+25"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "6589331078943561",
      "exponent": -814
    },
    "b": {
      "coefficient": "10810487684804933",
      "exponent": -45
    },
    "expected": "1.9630410305754546e-232"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "17683685474248488",
      "exponent": -1182
    },
    "b": {
      "coefficient": "16027568834587902",
      "exponent": -304
    },
    "expected": "5.474808566408299e-265"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "34997319991886048",
      "exponent": 922
    },
    "b": {
      "coefficient": "9754710482126349",
      "exponent": 564
    },
    "expected": "2.1064873333377974e+108"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-34612157279209130",
      "exponent": -1158
    },
    "b": {
      "coefficient": "30704768463460866",
      "exponent": 564
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "68262149749688069",
      "exponent": 683
    },
    "b": {
      "coefficient": "20834145356694476",
      "exponent": -724
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-64773939413360223",
      "exponent": 289
    },
    "b": {
      "coefficient": "35812467397021048",
      "exponent": -1015
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "25588202457446742",
      "exponent": -831
    },
    "b": {
      "coefficient": "31126296709140873",
      "exponent": -647
    },
    "expected": "3.352687869197142e-56"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "34850961164027905",
      "exponent": 328
    },
    "b": {
      "coefficient": "2779052305421054",
      "exponent": 626
    },
    "expected": "2.462517533418687e-89"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "12098579041034850",
      "exponent": -1186
    },
    "b": {
      "coefficient": "7910660964303603",
      "exponent": 220
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "1618623166560132",
      "exponent": -111
    },
    "b": {
      "coefficient": "21824112614246004",
      "exponent": -121
    },
    "expected": "75.94673615621089"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "12039164669196225",
      "exponent": -853
    },
    "b": {
      "coefficient": "710518361222571",
      "exponent": -1109
    },
    "expected": "1.962004229306086e+78"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "3941857971908329",
      "exponent": -533
    },
    "b": {
      "coefficient": "8550519247654659",
      "exponent": 667
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "6509697992293632",
      "exponent": 676
    },
    "b": {
      "coefficient": "23275864480280012",
      "exponent": -173
    },
    "expected": "1.0498357057583426e+255"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-48642565787372007",
      "exponent": -1095
    },
    "b": {
      "coefficient": "23165261161843910",
      "exponent": -368
    },
    "expected": "-2.9742154580980515e-219"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "34809707150310016",
      "exponent": 681
    },
    "b": {
      "coefficient": "26094330054600571",
      "exponent": -337
    },
    "expected": "3.747052726573024e+306"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "13345860104722615",
      "exponent": 719
    },
    "b": {
      "coefficient": "26960721543331395",
      "exponent": -1032
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-49191691380539280",
      "exponent": -108
    },
    "b": {
      "coefficient": "14026974739722087",
      "exponent": -1200
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "23138210454244171",
      "exponent": 724
    },
    "b": {
      "coefficient": "35888084116017655",
      "exponent": 956
    },
    "expected": "9.341583469526904e-71"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "10224904098002299",
      "exponent": -745
    },
    "b": {
      "coefficient": "25102508170854830",
      "exponent": -767
    },
    "expected": "1708449.046843075"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "58042958696066152",
      "exponent": -548
    },
    "b": {
      "coefficient": "11240469175824901",
      "exponent": -153
    },
    "expected": "6.399069335468676e-119"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-30391997653644403",
      "exponent": -125
    },
    "b": {
      "coefficient": "31986898566843133",
      "exponent": 549
    },
    "expected": "-1.2121881560843346e-203"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-31852854215943165",
      "exponent": 0
    },
    "b": {
      "coefficient": "8997508494994108",
      "exponent": -1073
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "10764546499983419",
      "exponent": -169
    },
    "b": {
      "coefficient": "6259584738695071",
      "exponent": -1017
    },
    "expected": "3.2276507698465824e+255"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "21248423110867806",
      "exponent": -679
    },
    "b": {
      "coefficient": "32774511664107821",
      "exponent": -200
    },
    "expected": "4.153579747145198e-145"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "18620041370236006",
      "exponent": 928
    },
    "b": {
      "coefficient": "34122345888393686",
      "exponent": 356
    },
    "expected": "8.43527567427729e+171"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "11421126343804289",
      "exponent": -818
    },
    "b": {
      "coefficient": "30893197189880707",
      "exponent": 169
    },
    "expected": "2.826443829090622e-298"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-40802494857330559",
      "exponent": -98
    },
    "b": {
      "coefficient": "28885711926857318",
      "exponent": -114
    },
    "expected": "-92572.83703933076"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-24675740313646974",
      "exponent": 937
    },
    "b": {
      "coefficient": "31553426416478336",
      "exponent": 513
    },
    "expected": "-3.387987708360753e+127"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-67004247735567680",
      "exponent": -1158
    },
    "b": {
      "coefficient": "744515825437916",
      "exponent": 116
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-57945913600851501",
      "exponent": -219
    },
    "b": {
      "coefficient": "21583178581988092",
      "exponent": -469
    },
    "expected": "-4.857427490579885e+75"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-12167055735049270",
      "exponent": 907
    },
    "b": {
      "coefficient": "14213951276819724",
      "exponent": 58
    },
    "expected": "-3.213194343674605e+255"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-40527052699705474",
      "exponent": -913
    },
    "b": {
      "coefficient": "34497361435970997",
      "exponent": 423
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "14268244738432815",
      "exponent": 893
    },
    "b": {
      "coefficient": "16044378521466596",
      "exponent": -763
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "69334845539344264",
      "exponent": -274
    },
    "b": {
      "coefficient": "31573591209004380",
      "exponent": -495
    },
    "expected": "7.400424161216254e+66"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-64579469518860540",
      "exponent": 751
    },
    "b": {
      "coefficient": "24886441396640650",
      "exponent": 225
    },
    "expected": "-5.700453308592597e+158"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-51427199454938448",
      "exponent": 321
    },
    "b": {
      "coefficient": "9934504844877417",
      "exponent": 796
    },
    "expected": "-5.306384412081637e-143"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-34763512915142552",
      "exponent": -738
    },
    "b": {
      "coefficient": "29585585141771922",
      "exponent": -149
    },
    "expected": "-5.799306295440325e-178"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-19287108863392399",
      "exponent": 516
    },
    "b": {
      "coefficient": "10886537724353118",
      "exponent": -223
    },
    "expected": "-5.123233448248536e+222"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-60290186127365148",
      "exponent": -1107
    },
    "b": {
      "coefficient": "19767336395022547",
      "exponent": -1079
    },
    "expected": "-1.1362099626598694e-08"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "19299347470865811",
      "exponent": -426
    },
    "b": {
      "coefficient": "3523608896813358",
      "exponent": -739
    },
    "expected": "9.139944746347123e+94"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "42980847601475368",
      "exponent": 373
    },
    "b": {
      "coefficient": "5464373775625006",
      "exponent": -56
    },
    "expected": "1.090442367832034e+130"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "4597834957346108",
      "exponent": -578
    },
    "b": {
      "coefficient": "29943777731557596",
      "exponent": 658
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "66661715124447058",
      "exponent": -957
    },
    "b": {
      "coefficient": "14367680116604995",
      "exponent": -852
    },
    "expected": "1.1437741799187746e-31"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "14255844937706384",
      "exponent": -1190
    },
    "b": {
      "coefficient": "8924678451312611",
      "exponent": -232
    },
    "expected": "6.556386372868485e-289"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-54244257931080634",
      "exponent": -381
    },
    "b": {
      "coefficient": "4044304783612321",
      "exponent": -402
    },
    "expected": "-28128061.581717398"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "29572227979513459",
      "exponent": 1040
    },
    "b": {
      "coefficient": "11406422899282757",
      "exponent": 892
    },
    "expected": "9.250685890882849e+44"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "36620812973994473",
      "exponent": 562
    },
    "b": {
      "coefficient": "11268286457810888",
      "exponent": 318
    },
    "expected": "9.187324252737587e+73"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-30672017114004450",
      "exponent": 731
    },
    "b": {
      "coefficient": "11958015267498676",
      "exponent": -543
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-71707988552020284",
      "exponent": -821
    },
    "b": {
      "coefficient": "30673758498235198",
      "exponent": -571
    },
    "expected": "-1.2921163755895858e-75"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-6302346688224779",
      "exponent": -532
    },
    "b": {
      "coefficient": "22306263274405778",
      "exponent": -41
    },
    "expected": "-4.419240072723952e-149"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "7318672210250684",
      "exponent": 423
    },
    "b": {
      "coefficient": "9676203199788581",
      "exponent": -385
    },
    "expected": "1.2911116886946774e+243"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "14785752611888011",
      "exponent": -687
    },
    "b": {
      "coefficient": "11436065304893349",
      "exponent": 965
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "71271969999593355",
      "exponent": -694
    },
    "b": {
      "coefficient": "19760673181055814",
      "exponent": 949
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "35879689991778930",
      "exponent": 172
    },
    "b": {
      "coefficient": "18242955930798928",
      "exponent": 198
    },
    "expected": "2.9307149903824058e-08"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "18457328055580431",
      "exponent": -144
    },
    "b": {
      "coefficient": "16387771258469245",
      "exponent": -193
    },
    "expected": "634043019352068.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-11186486481967650",
      "exponent": 774
    },
    "b": {
      "coefficient": "29840243172197505",
      "exponent": 396
    },
    "expected": "-2.307967586417424e+113"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-63090313911023747",
      "exponent": 296
    },
    "b": {
      "coefficient": "23780919071348460",
      "exponent": -1088
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "16727443130675598",
      "exponent": 7
    },
    "b": {
      "coefficient": "7216111010076471",
      "exponent": 606
    },
    "expected": "1.1172720995201737e-180"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "42636573838711144",
      "exponent": -807
    },
    "b": {
      "coefficient": "10171034050810549",
      "exponent": -913
    },
    "expected": "3.400922464217542e+32"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "69237310329986970",
      "exponent": 1059
    },
    "b": {
      "coefficient": "3326104000399597",
      "exponent": -372
    },
    "expected": "inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "24203576978668670",
      "exponent": -275
    },
    "b": {
      "coefficient": "27548035616302244",
      "exponent": -1018
    },
    "expected": "4.065141773737633e+223"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-42724332112704193",
      "exponent": -83
    },
    "b": {
      "coefficient": "4243304202322776",
      "exponent": -1035
    },
    "expected": "-3.832895572365511e+287"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-9325355882133374",
      "exponent": -903
    },
    "b": {
      "coefficient": "25680316075106996",
      "exponent": -930
    },
    "expected": "-48738811.2993139"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "52834152207978889",
      "exponent": 73
    },
    "b": {
      "coefficient": "1857868384542650",
      "exponent": -193
    },
    "expected": "3.3719307374942235e+81"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-5934582497033986",
      "exponent": -42
    },
    "b": {
      "coefficient": "408300763858892",
      "exponent": -1015
    },
    "expected": "-1.1603680439778037e+294"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "68778903926126958",
      "exponent": 688
    },
    "b": {
      "coefficient": "14350673852461651",
      "exponent": 926
    },
    "expected": "1.0850356013798286e-71"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-41742544415203254",
      "exponent": -1136
    },
    "b": {
      "coefficient": "9779587447700211",
      "exponent": -280
    },
    "expected": "-8.883458853769013e-258"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "67115789743623498",
      "exponent": -1181
    },
    "b": {
      "coefficient": "4552060005584914",
      "exponent": 953
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "54204084865373846",
      "exponent": -964
    },
    "b": {
      "coefficient": "32399176356871987",
      "exponent": -1119
    },
    "expected": "7.640950296484579e+46"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-5564332666973351",
      "exponent": -900
    },
    "b": {
      "coefficient": "35250774351371165",
      "exponent": -103
    },
    "expected": "-1.8938164339736207e-241"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "40554245971569808",
      "exponent": -208
    },
    "b": {
      "coefficient": "11392442002151312",
      "exponent": 503
    },
    "expected": "3.3043998025564274e-214"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-66311612238383002",
      "exponent": -671
    },
    "b": {
      "coefficient": "5456698729224632",
      "exponent": 176
    },
    "expected": "-1.294950844355814e-254"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "46583863125938567",
      "exponent": -1118
    },
    "b": {
      "coefficient": "6512325166179032",
      "exponent": -621
    },
    "expected": "1.7482018638109975e-149"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-43714420523203467",
      "exponent": 350
    },
    "b": {
      "coefficient": "11005071312860299",
      "exponent": -742
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-32654734140160116",
      "exponent": -1152
    },
    "b": {
      "coefficient": "18862076365995740",
      "exponent": 365
    },
    "expected": "-0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-40389326009366138",
      "exponent": -1186
    },
    "b": {
      "coefficient": "9490041978476623",
      "exponent": -1029
    },
    "expected": "-2.329641816933693e-47"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-43282394637991491",
      "exponent": 371
    },
    "b": {
      "coefficient": "16388167043428875",
      "exponent": -860
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "54236291985452577",
      "exponent": -538
    },
    "b": {
      "coefficient": "2484875886596326",
      "exponent": 835
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "50596167301203628",
      "exponent": -918
    },
    "b": {
      "coefficient": "21006000458001528",
      "exponent": 976
    },
    "expected": "0.0"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-29169874310719401",
      "exponent": -1177
    },
    "b": {
      "coefficient": "7061248326827392",
      "exponent": -257
    },
    "expected": "-4.66076345615272e-277"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "27351729571525303",
      "exponent": 30
    },
    "b": {
      "coefficient": "15145223911819925",
      "exponent": 772
    },
    "expected": "7.806427178150065e-224"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-4052939349140501",
      "exponent": 753
    },
    "b": {
      "coefficient": "21190052592599468",
      "exponent": 942
    },
    "expected": "-2.437636193760513e-58"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-59935811895290452",
      "exponent": 218
    },
    "b": {
      "coefficient": "26562836791604244",
      "exponent": -906
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-16914559965165280",
      "exponent": -689
    },
    "b": {
      "coefficient": "5774067723239368",
      "exponent": -197
    },
    "expected": "-2.2909782388184825e-148"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "64880426611483092",
      "exponent": -1010
    },
    "b": {
      "coefficient": "5498121910076242",
      "exponent": -113
    },
    "expected": "1.1168458145895667e-269"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-2029452448373375",
      "exponent": 594
    },
    "b": {
      "coefficient": "19913402607381739",
      "exponent": -1011
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-61182834015533451",
      "exponent": 420
    },
    "b": {
      "coefficient": "2467123904527317",
      "exponent": -737
    },
    "expected": "-inf"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "41896556411858243",
      "exponent": -976
    },
    "b": {
      "coefficient": "9230729226471250",
      "exponent": -2
    },
    "expected": "2.8426706159215324e-293"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "14423824309724361",
      "exponent": 541
    },
    "b": {
      "coefficient": "16871887936751284",
      "exponent": -243
    },
    "expected": "8.698279170672505e+235"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "70862140042053293",
      "exponent": 70
    },
    "b": {
      "coefficient": "818930123305444",
      "exponent": -302
    },
    "expected": "8.323879883127406e+113"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "51065853948123846",
      "exponent": -442
    },
    "b": {
      "coefficient": "30045665741170682",
      "exponent": -400
    },
    "expected": "3.864461184470262e-13"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-22738748496941307",
      "exponent": 379
    },
    "b": {
      "coefficient": "25663193377963490",
      "exponent": 416
    },
    "expected": "-6.4468270891567065e-12"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "22517272164520407",
      "exponent": 585
    },
    "b": {
      "coefficient": "10655228523783469",
      "exponent": 844
    },
    "expected": "2.281309093696055e-78"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-3551866009466435",
      "exponent": -72
    },
    "b": {
      "coefficient": "35017116828222435",
      "exponent": 454
    },
    "expected": "-4.617410324891969e-160"
  },
  {
    "op": "ratio",
    "a": {
      "coefficient": "-25197538273229235",
      "exponent": 754
    },
    "b": {
      "coefficient": "25518650543385792",
      "exponent": 1012
    },
    "expected": "-2.1318739732247883e-78"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1",
      "exponent": -2148
    },
    "expected": "5e-324"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "9",
      "exponent": -2150
    },
    "expected": "1e-323"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "25",
      "exponent": -2150
    },
    "expected": "1e-323"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1",
      "exponent": -2150
    },
    "expected": "0.0"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "9",
      "exponent": -2152
    },
    "expected": "5e-324"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": "1.0"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "2",
      "exponent": 0
    },
    "expected": "1.4142135623730951"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "4",
      "exponent": 0
    },
    "expected": "2.0"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "197300702571256714",
      "exponent": 284
    },
    "expected": "2.4764165636643972e+51"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "478511770578448694",
      "exponent": 865
    },
    "expected": "1.0849742654258169e+139"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "945933077661565430",
      "exponent": -257
    },
    "expected": "2.021043975341027e-30"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "134630868253842027",
      "exponent": 1903
    },
    "expected": "9.87673036302061e+294"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1038061765435209800",
      "exponent": -644
    },
    "expected": "1.1924851891976113e-88"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "419090655768897141",
      "exponent": -1089
    },
    "expected": "7.949162037353202e-156"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "761194356852117828",
      "exponent": -954
    },
    "expected": "2.2358355040172938e-135"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "834469580838130256",
      "exponent": 823
    },
    "expected": "6.832009642763615e+132"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "554016463074328496",
      "exponent": 1537
    },
    "expected": "1.6342293386589848e+240"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "341243718818405783",
      "exponent": 1981
    },
    "expected": "8.644562891636637e+306"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1033306667063889956",
      "exponent": 1658
    },
    "expected": "3.6389913328536074e+258"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "961600315991278009",
      "exponent": 1991
    },
    "expected": "inf"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "489733489258697659",
      "exponent": -1078
    },
    "expected": "3.8887698300738824e-154"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "691104281501225497",
      "exponent": 996
    },
    "expected": "6.803143510961698e+158"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "889943817207632372",
      "exponent": -1339
    },
    "expected": "2.723323276679072e-193"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "844705604924412922",
      "exponent": 674
    },
    "expected": "2.5731270284641358e+110"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "620472536253062619",
      "exponent": 1700
    },
    "expected": "5.913676945024416e+264"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "999079613497194287",
      "exponent": 527
    },
    "expected": "2.0950958955457454e+88"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "604326365032667156",
      "exponent": -1833
    },
    "expected": "9.923040063882216e-268"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "853079440944461083",
      "exponent": -819
    },
    "expected": "4.939824427956276e-115"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1125631069138192170",
      "exponent": 51
    },
    "expected": "5.034576279850875e+16"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "760653792655468202",
      "exponent": -496
    },
    "expected": "1.928211163215099e-66"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1141334015087116526",
      "exponent": 12
    },
    "expected": "68373270550.68252"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1119507423118944445",
      "exponent": 998
    },
    "expected": "1.7317345637256793e+159"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "632021211305415212",
      "exponent": 1989
    },
    "expected": "inf"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "679954702328281992",
      "exponent": -483
    },
    "expected": "1.650045947858247e-64"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "117293640445645956",
      "exponent": 1428
    },
    "expected": "2.951577132278466e+223"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "978626652120172758",
      "exponent": -1179
    },
    "expected": "3.4524394912422426e-169"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "561137431015582207",
      "exponent": 1972
    },
    "expected": "4.8990327696078855e+305"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "204923712121777558",
      "exponent": -1125
    },
    "expected": "2.120428077122369e-161"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "366235229460355316",
      "exponent": 182
    },
    "expected": "1.49833755349853e+36"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "800801357564065244",
      "exponent": -1224
    },
    "expected": "5.265080964553211e-176"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1020782631294984805",
      "exponent": -1624
    },
    "expected": "3.699219968864246e-236"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "942800374861011481",
      "exponent": 743
    },
    "expected": "6.604702534329339e+120"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "987251417803619557",
      "exponent": -830
    },
    "expected": "1.174263826408118e-116"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "282209247345237875",
      "exponent": 211
    },
    "expected": "3.047545250278579e+40"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "640974135857973708",
      "exponent": 1008
    },
    "expected": "4.193127492817661e+160"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "823425828315481843",
      "exponent": 553
    },
    "expected": "1.5581384465149285e+92"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "284519209218936253",
      "exponent": 911
    },
    "expected": "7.018088192025175e+145"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "555788130264874475",
      "exponent": 1309
    },
    "expected": "7.881099232388796e+205"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "675930785464988745",
      "exponent": 1056
    },
    "expected": "7.224184418098971e+167"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "420208446734965015",
      "exponent": 1773
    },
    "expected": "4.7295905555079904e+275"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1097588492913133756",
      "exponent": -41
    },
    "expected": "706.4881170378693"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1118102365199371950",
      "exponent": 152
    },
    "expected": "7.989515682292338e+31"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "182284832793682328",
      "exponent": 688
    },
    "expected": "1.5300082602968643e+112"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "45174844058882657",
      "exponent": 469
    },
    "expected": "8.298169742184209e+78"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "803024281011567642",
      "exponent": 1767
    },
    "expected": "8.17269906706223e+274"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "316313992778511772",
      "exponent": 130
    },
    "expected": "2.074956135949718e+28"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "887725621794936775",
      "exponent": -746
    },
    "expected": "4.8972355643281915e-104"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "521079231532185422",
      "exponent": 611
    },
    "expected": "6.654501960441619e+100"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "679500987252052188",
      "exponent": -130
    },
    "expected": "2.2343197676991013e-11"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "238916067278523881",
      "exponent": 882
    },
    "expected": "2.7755609360535373e+141"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "433370331513189938",
      "exponent": 600
    },
    "expected": "1.3409984853478018e+99"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "345218019701868273",
      "exponent": -608
    },
    "expected": "1.8027190438497723e-83"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1052323526413985862",
      "exponent": 988
    },
    "expected": "5.2467756935239836e+157"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "633484224709900020",
      "exponent": -446
    },
    "expected": "5.904442112582072e-59"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "844127334431736134",
      "exponent": -1988
    },
    "expected": "5.487673849133714e-291"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "499317914670237384",
      "exponent": -284
    },
    "expected": "1.267445196354198e-34"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "240521407359067590",
      "exponent": -2024
    },
    "expected": "1.1174323913495384e-296"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "540197401299495718",
      "exponent": -450
    },
    "expected": "1.36309844045343e-59"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "894772517377823394",
      "exponent": -1744
    },
    "expected": "3.0040011820411543e-254"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1044587887474228551",
      "exponent": -1701
    },
    "expected": "9.62633964155198e-248"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "914400290179758327",
      "exponent": 28
    },
    "expected": "15667082014878.703"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1136953123577724040",
      "exponent": -821
    },
    "expected": "2.8513994369732293e-115"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "300097740360972716",
      "exponent": 39
    },
    "expected": "406177888982273.7"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "139375450173604259",
      "exponent": -1868
    },
    "expected": "2.570852684980422e-273"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "413016794557644817",
      "exponent": 662
    },
    "expected": "2.811333842874648e+108"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "257693780354212715",
      "exponent": -950
    },
    "expected": "5.203601472653042e-135"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "312460853848298811",
      "exponent": -1124
    },
    "expected": "3.702885170632663e-161"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "983612144944498039",
      "exponent": 362
    },
    "expected": "3.0397730226684107e+63"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "434649614022497113",
      "exponent": 2
    },
    "expected": "1318559234.9568481"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "150959693181740324",
      "exponent": 1338
    },
    "expected": "9.516945919976405e+209"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "788171424858458296",
      "exponent": 1377
    },
    "expected": "1.6123612693603695e+216"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "78382754853732804",
      "exponent": -206
    },
    "expected": "2.760709490374553e-23"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "72633123818222447",
      "exponent": -508
    },
    "expected": "9.309973884455371e-69"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "870808026854367763",
      "exponent": 533
    },
    "expected": "1.5647863760778294e+89"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "188783231548328611",
      "exponent": 424
    },
    "expected": "2.8598337606631617e+72"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "411492911459450227",
      "exponent": -615
    },
    "expected": "1.7396324994490933e-84"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1080249363920252711",
      "exponent": -983
    },
    "expected": "1.1495269057259104e-139"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "58199100733170929",
      "exponent": -476
    },
    "expected": "5.461590935577419e-64"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "124854221139792626",
      "exponent": -2181
    },
    "expected": "1.8834e-320"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "564660195984913491",
      "exponent": -1135
    },
    "expected": "1.0999451977253081e-162"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "535375734677288649",
      "exponent": -2170
    },
    "expected": "1.76516e-318"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "920673500787186773",
      "exponent": -1003
    },
    "expected": "1.0363584580181922e-142"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "434452478454946910",
      "exponent": 1454
    },
    "expected": "4.65348145250446e+227"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "694732259964619206",
      "exponent": -73
    },
    "expected": "0.008576575028168821"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "151285127064862340",
      "exponent": 403
    },
    "expected": "1.767837098648183e+69"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "42725810717583909",
      "exponent": -603
    },
    "expected": "3.587578919008807e-83"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "911511432067389555",
      "exponent": -1711
    },
    "expected": "2.810087023205513e-249"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "377093477128406123",
      "exponent": 210
    },
    "expected": "2.4910018770584906e+40"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "845456156959020555",
      "exponent": -249
    },
    "expected": "3.057110139187632e-29"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "172968152388688211",
      "exponent": -14
    },
    "expected": "3249175.004107565"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "268058818466492544",
      "exponent": 978
    },
    "expected": "8.275284417370469e+155"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "363256997222409047",
      "exponent": 1403
    },
    "expected": "8.967036810845179e+219"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "967373348500773691",
      "exponent": 1412
    },
    "expected": "3.3111129657107307e+221"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "532862221907611291",
      "exponent": 1674
    },
    "expected": "6.689810817310027e+260"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1000947024613447229",
      "exponent": 546
    },
    "expected": "1.5184285563831734e+91"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "432219036050336146",
      "exponent": 1438
    },
    "expected": "1.8130877666344117e+225"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "603879545481333281",
      "exponent": -821
    },
    "expected": "2.07807845482017e-115"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "994872508602200781",
      "exponent": 493
    },
    "expected": "1.5950622846656817e+83"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "443412718426938617",
      "exponent": -862
    },
    "expected": "1.200814550638777e-121"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "853232390002826767",
      "exponent": 24
    },
    "expected": "3783498923651.7124"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "235833572488835317",
      "exponent": -1164
    },
    "expected": "3.0679292390393895e-167"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "865171606094607970",
      "exponent": -635
    },
    "expected": "2.463357847969167e-87"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "689752296907663081",
      "exponent": 96
    },
    "expected": "2.3376870422275825e+23"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "801460677152097590",
      "exponent": 1087
    },
    "expected": "3.6453879433675035e+172"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "232283043787336162",
      "exponent": 1483
    },
    "expected": "7.884071223807692e+231"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "726515188988524230",
      "exponent": -936
    },
    "expected": "1.1183670893832918e-132"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "523652056335529938",
      "exponent": -998
    },
    "expected": "4.421336508036221e-142"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1144455172600114220",
      "exponent": -1988
    },
    "expected": "6.389747595030601e-291"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "759837988082467609",
      "exponent": 1716
    },
    "expected": "1.6753161721692072e+267"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "684162318937582611",
      "exponent": 891
    },
    "expected": "1.0627782157860766e+143"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "548542360153149324",
      "exponent": -1240
    },
    "expected": "1.7021889767209577e-178"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "479160867362462405",
      "exponent": 745
    },
    "expected": "9.417032213152134e+120"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1128266572262757670",
      "exponent": -92
    },
    "expected": "1.5094754708792277e-05"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "763367712836837780",
      "exponent": 686
    },
    "expected": "1.5655084148317858e+112"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "421444011201402371",
      "exponent": -41
    },
    "expected": "437.77910827357107"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "1130117831435822901",
      "exponent": -1459
    },
    "expected": "2.661828231166047e-211"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "661555505696974693",
      "exponent": -807
    },
    "expected": "2.7840683530762164e-113"
  },
  {
    "op": "sqrt",
    "a": {
      "coefficient": "888702725431892419",
      "exponent": 245
    },
    "expected": "7.088473577610095e+45"
  }
];

describe('geometry wave6 bounded binary arithmetic independent oracles',()=>{
 for(const [index,r] of fixtures.entries())it(`${r.op}: fixed oracle ${index}`,()=>{
  const a={coefficient:BigInt(r.a.coefficient),exponent:r.a.exponent};
  const expected=Number(r.expected==='inf'?'Infinity':r.expected==='-inf'?'-Infinity':r.expected);
  const b='b'in r&&r.b?{coefficient:BigInt(r.b.coefficient),exponent:r.b.exponent}:undefined;
  const actual=r.op==='sqrt'?sqrt(a):ratio(a,b!);expect(actual).toBe(expected);
 });
});
