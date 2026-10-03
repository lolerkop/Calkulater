import {expect,test,type Page} from '@playwright/test';
// Prepared for ROOT's next coherent snapshot. Literal independent fixtures only;
// no registry/compute imports and no browser verification claim until execution.
type Inputs=Record<string,string|number>;
type Check={kind:'number';expected:number;tolerance:number;row?:number}|{kind:'text';expected:string;row?:number};
type UnitCheck={field:string;allowed:string[]};
type Alternate={inputs:Inputs;checks:Check[];visible?:string[];hidden?:string[];units?:UnitCheck[]};
type Sample={id:string;inputs:Inputs;checks:Check[];active:string;invalid:Inputs;proof:string;share:Record<string,string|null>;units:UnitCheck[];alternatives:Alternate[];visible?:string[];hidden?:string[]};
const samples:Sample[]=[
  {
    "id": "aspect-ratio",
    "inputs": {
      "mode": "reduce",
      "width": 2560,
      "height": 1080
    },
    "checks": [
      {
        "kind": "text",
        "expected": "64:27"
      }
    ],
    "active": "width",
    "invalid": {
      "width": 2560.5
    },
    "proof": "Exact integer GCD(2560,1080)=40, so64:27. Inverse16:9width1280 yields720; knownheight1080 yields1920.",
    "share": {
      "mode": null,
      "width": "2560",
      "height": null,
      "ratioW": null,
      "ratioH": null,
      "known": null,
      "side": null
    },
    "units": [
      {
        "field": "width",
        "allowed": [
          "px"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "mode": "side",
          "known": "width",
          "side": 1280,
          "ratioW": 16,
          "ratioH": 9
        },
        "checks": [
          {
            "kind": "number",
            "expected": 720.0,
            "tolerance": 0.0
          }
        ],
        "visible": [
          "mode",
          "ratioW",
          "ratioH",
          "known",
          "side"
        ],
        "hidden": [
          "width",
          "height"
        ]
      },
      {
        "inputs": {
          "known": "height",
          "side": 1080
        },
        "checks": [
          {
            "kind": "number",
            "expected": 1920.0,
            "tolerance": 0.0
          }
        ]
      }
    ],
    "visible": [
      "mode",
      "width",
      "height"
    ],
    "hidden": [
      "ratioW",
      "ratioH",
      "known",
      "side"
    ]
  },
  {
    "id": "color-convert",
    "inputs": {
      "hex": "#0F0"
    },
    "checks": [
      {
        "kind": "text",
        "expected": "rgb(0, 255, 0)"
      },
      {
        "kind": "text",
        "expected": "hsl(120, 100.00%, 50.00%)",
        "row": 0
      }
    ],
    "active": "hex",
    "invalid": {
      "hex": "#FFFF"
    },
    "proof": "HEX3expandsnibbles×17; RGBgreen0/255/0 yields exact hue120,saturation1,lightness.5. Gray128/255 has lightness50.196078...→50.20%.",
    "share": {
      "hex": "#0F0"
    },
    "units": [],
    "alternatives": [
      {
        "inputs": {
          "hex": "#808080"
        },
        "checks": [
          {
            "kind": "text",
            "expected": "rgb(128, 128, 128)"
          },
          {
            "kind": "text",
            "expected": "hsl(0, 0.00%, 50.20%)",
            "row": 0
          }
        ]
      }
    ]
  },
  {
    "id": "css-units",
    "inputs": {
      "value": -16,
      "fromUnit": "px",
      "toUnit": "rem",
      "rootSize": 16,
      "parentSize": 20
    },
    "checks": [
      {
        "kind": "number",
        "expected": -1.0,
        "tolerance": 0.0
      },
      {
        "kind": "number",
        "expected": -16.0,
        "tolerance": 0.0,
        "row": 0
      }
    ],
    "active": "value",
    "invalid": {
      "rootSize": 0
    },
    "proof": "Signed CSSlength−16px/16px perrem=−1rem;2em×20px=40px;96CSSpx=1in.",
    "share": {
      "value": "-16",
      "fromUnit": null,
      "toUnit": null,
      "rootSize": null,
      "parentSize": "20"
    },
    "units": [
      {
        "field": "value",
        "allowed": [
          "px"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "value": 2,
          "fromUnit": "em",
          "toUnit": "px"
        },
        "checks": [
          {
            "kind": "number",
            "expected": 40.0,
            "tolerance": 0.0
          },
          {
            "kind": "number",
            "expected": 40.0,
            "tolerance": 0.0,
            "row": 0
          }
        ],
        "units": [
          {
            "field": "value",
            "allowed": [
              "em"
            ]
          }
        ]
      },
      {
        "inputs": {
          "value": 0
        },
        "checks": [
          {
            "kind": "number",
            "expected": 0.0,
            "tolerance": 0.0
          }
        ]
      }
    ]
  },
  {
    "id": "download-time",
    "inputs": {
      "size": 1,
      "sizeUnit": "gib",
      "speed": 100,
      "speedUnit": "mbit"
    },
    "checks": [
      {
        "kind": "text",
        "expected": "1:26"
      },
      {
        "kind": "number",
        "expected": 85.89934592,
        "tolerance": 0.0051,
        "row": 0
      }
    ],
    "active": "size",
    "invalid": {
      "speed": 0
    },
    "proof": "1GiB=1073741824bytes; exact85.89934592s rounds86=1:26.119.9MBat8Mbit/s=119.9s rounds120=2:00.",
    "share": {
      "size": null,
      "sizeUnit": "gib",
      "speed": null,
      "speedUnit": null
    },
    "units": [
      {
        "field": "size",
        "allowed": [
          "GiB",
          "ГиБ",
          "ГіБ"
        ]
      },
      {
        "field": "speed",
        "allowed": [
          "Mbit/s",
          "Мбит/с",
          "Мбіт/с"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "size": 119.9,
          "sizeUnit": "mb",
          "speed": 8
        },
        "checks": [
          {
            "kind": "text",
            "expected": "2:00"
          },
          {
            "kind": "number",
            "expected": 119.9,
            "tolerance": 0.0051,
            "row": 0
          }
        ],
        "units": [
          {
            "field": "size",
            "allowed": [
              "MB",
              "МБ"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "files-on-disk",
    "inputs": {
      "capacity": 1,
      "capacityUnit": "gb",
      "fileSize": 0.1,
      "fileUnit": "gb",
      "reserved": 0
    },
    "checks": [
      {
        "kind": "number",
        "expected": 10.0,
        "tolerance": 0.0
      }
    ],
    "active": "fileSize",
    "invalid": {
      "reserved": 100
    },
    "proof": "Decimal round-trip model1GB/.1GB=10 exactly;floor(1/.3)=3;10%reserve givesfloor(.9/.1)=9.",
    "share": {
      "capacity": null,
      "capacityUnit": null,
      "fileSize": "0.1",
      "fileUnit": "gb",
      "reserved": null
    },
    "units": [
      {
        "field": "fileSize",
        "allowed": [
          "GB",
          "ГБ"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "fileSize": 0.3
        },
        "checks": [
          {
            "kind": "number",
            "expected": 3.0,
            "tolerance": 0.0
          }
        ]
      },
      {
        "inputs": {
          "fileSize": 0.1,
          "reserved": 10
        },
        "checks": [
          {
            "kind": "number",
            "expected": 9.0,
            "tolerance": 0.0
          }
        ]
      }
    ]
  },
  {
    "id": "fps-frametime",
    "inputs": {
      "mode": "fps",
      "fps": 50
    },
    "checks": [
      {
        "kind": "number",
        "expected": 20.0,
        "tolerance": 0.0
      }
    ],
    "active": "fps",
    "invalid": {
      "fps": 0
    },
    "proof": "Reciprocal1000ms/s:50FPS→20ms;50ms→20FPS, no displayHz claim.",
    "share": {
      "mode": null,
      "fps": "50",
      "frameTime": null
    },
    "units": [
      {
        "field": "fps",
        "allowed": [
          "FPS"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "mode": "ms",
          "frameTime": 50
        },
        "checks": [
          {
            "kind": "number",
            "expected": 20.0,
            "tolerance": 0.0
          }
        ],
        "visible": [
          "mode",
          "frameTime"
        ],
        "hidden": [
          "fps"
        ],
        "units": [
          {
            "field": "frameTime",
            "allowed": [
              "ms",
              "мс"
            ]
          }
        ]
      }
    ],
    "visible": [
      "mode",
      "fps"
    ],
    "hidden": [
      "frameTime"
    ]
  },
  {
    "id": "internet-traffic",
    "inputs": {
      "mbps": 5,
      "hoursPerDay": 3,
      "days": 30,
      "quotaGb": 100
    },
    "checks": [
      {
        "kind": "number",
        "expected": 202.5,
        "tolerance": 0.0501
      }
    ],
    "active": "mbps",
    "invalid": {
      "hoursPerDay": 24.5
    },
    "proof": "ExactdecimalGB5Mbit/s×3h/day×30days×3600/(8×1000)=202.5GB;10days67.5GB.",
    "share": {
      "mbps": null,
      "hoursPerDay": null,
      "days": null,
      "quotaGb": "100"
    },
    "units": [
      {
        "field": "mbps",
        "allowed": [
          "Mbit/s",
          "Мбит/с",
          "Мбіт/с"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "days": 10
        },
        "checks": [
          {
            "kind": "number",
            "expected": 67.5,
            "tolerance": 0.0501
          }
        ]
      }
    ]
  },
  {
    "id": "ipv4-subnet",
    "inputs": {
      "address": "192.168.1.11",
      "prefix": 31
    },
    "checks": [
      {
        "kind": "text",
        "expected": "192.168.1.10"
      },
      {
        "kind": "number",
        "expected": 2.0,
        "tolerance": 0.0,
        "row": 4
      }
    ],
    "active": "address",
    "invalid": {
      "address": "256.168.1.11"
    },
    "proof": "UnsignedIPv4mask /31groupspairs: .10/.11,2point-to-point addresses. /32single.11. /30network.8,broadcast.11,2hostslots.",
    "share": {
      "address": "192.168.1.11",
      "prefix": "31"
    },
    "units": [],
    "alternatives": [
      {
        "inputs": {
          "prefix": 32
        },
        "checks": [
          {
            "kind": "text",
            "expected": "192.168.1.11"
          },
          {
            "kind": "number",
            "expected": 1.0,
            "tolerance": 0.0,
            "row": 4
          }
        ]
      },
      {
        "inputs": {
          "prefix": 30
        },
        "checks": [
          {
            "kind": "text",
            "expected": "192.168.1.8"
          },
          {
            "kind": "text",
            "expected": "192.168.1.11",
            "row": 1
          },
          {
            "kind": "number",
            "expected": 2.0,
            "tolerance": 0.0,
            "row": 4
          }
        ]
      }
    ]
  },
  {
    "id": "modular-scale",
    "inputs": {
      "base": 16,
      "ratio": 1.25,
      "stepsUp": 5,
      "stepsDown": 2
    },
    "checks": [
      {
        "kind": "number",
        "expected": 48.828125,
        "tolerance": 0.00051
      },
      {
        "kind": "number",
        "expected": 10.24,
        "tolerance": 0.0051,
        "row": 0
      },
      {
        "kind": "number",
        "expected": 8.0,
        "tolerance": 0.0,
        "row": 1
      }
    ],
    "active": "base",
    "invalid": {
      "stepsUp": 21
    },
    "proof": "Decimalgeometricpowers16×1.25^5=48.828125;16/1.25²=10.24;8stepsinclbase,zero/zero1.",
    "share": {
      "base": null,
      "ratio": null,
      "stepsUp": null,
      "stepsDown": null
    },
    "units": [],
    "alternatives": [
      {
        "inputs": {
          "stepsUp": 0,
          "stepsDown": 0
        },
        "checks": [
          {
            "kind": "number",
            "expected": 16.0,
            "tolerance": 0.0
          },
          {
            "kind": "number",
            "expected": 1.0,
            "tolerance": 0.0,
            "row": 1
          }
        ]
      }
    ]
  },
  {
    "id": "network-bandwidth",
    "inputs": {
      "users": 3,
      "perUser": 10,
      "overhead": 0,
      "concurrency": 50
    },
    "checks": [
      {
        "kind": "number",
        "expected": 15.0,
        "tolerance": 0.0501
      },
      {
        "kind": "number",
        "expected": 1.5,
        "tolerance": 0.0051,
        "row": 1
      }
    ],
    "active": "users",
    "invalid": {
      "users": 1.5
    },
    "proof": "Expectedactive3×.5=1.5 users,×10Mbit/s=15;zero active share giveszero, not malformedusers.",
    "share": {
      "users": "3",
      "perUser": "10",
      "overhead": null,
      "concurrency": "50"
    },
    "units": [
      {
        "field": "perUser",
        "allowed": [
          "Mbit/s",
          "Мбит/с",
          "Мбіт/с"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "concurrency": 0
        },
        "checks": [
          {
            "kind": "number",
            "expected": 0.0,
            "tolerance": 0.0
          },
          {
            "kind": "number",
            "expected": 0.0,
            "tolerance": 0.0,
            "row": 1
          }
        ]
      }
    ]
  },
  {
    "id": "password-entropy",
    "inputs": {
      "length": 4,
      "charset": "digits",
      "rate": 1
    },
    "checks": [
      {
        "kind": "number",
        "expected": 13.287712379549449,
        "tolerance": 0.00051
      },
      {
        "kind": "number",
        "expected": 10000.0,
        "tolerance": 0.0,
        "row": 0
      },
      {
        "kind": "number",
        "expected": 5e-06,
        "tolerance": 5e-10,
        "row": 1
      }
    ],
    "active": "length",
    "invalid": {
      "length": 4.5
    },
    "proof": "UniformindependentdecimaldigitsM=10⁴,H=4log₂10,M/2≈5000;at1e9attempts/s5e−6s. Noactualpassword input.",
    "share": {
      "length": "4",
      "charset": "digits",
      "rate": "1"
    },
    "units": [
      {
        "field": "rate",
        "allowed": [
          "10⁹ попыток/с",
          "10⁹ attempts/s",
          "10⁹ спроб/с",
          "10⁹ Versuche/s",
          "10⁹ intentos/s"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "length": 1,
          "charset": "alnumsym"
        },
        "checks": [
          {
            "kind": "number",
            "expected": 6.554588851677638,
            "tolerance": 0.00051
          },
          {
            "kind": "number",
            "expected": 94.0,
            "tolerance": 0.0,
            "row": 0
          }
        ]
      }
    ]
  },
  {
    "id": "ppi-dpi",
    "inputs": {
      "w": 3,
      "h": 4,
      "diagonal": 1
    },
    "checks": [
      {
        "kind": "number",
        "expected": 5.0,
        "tolerance": 0.0
      },
      {
        "kind": "number",
        "expected": 5.08,
        "tolerance": 0.00051,
        "row": 1
      }
    ],
    "active": "w",
    "invalid": {
      "w": 3.5
    },
    "proof": "Exact3-4-5diagonal at1in→5ppi,pitch25.4/5=5.08mm.1920×1080at15.6in→141.211998082...ppi.",
    "share": {
      "w": "3",
      "h": "4",
      "diagonal": "1"
    },
    "units": [
      {
        "field": "w",
        "allowed": [
          "px"
        ]
      },
      {
        "field": "diagonal",
        "allowed": [
          "in"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "w": 1920,
          "h": 1080,
          "diagonal": 15.6
        },
        "checks": [
          {
            "kind": "number",
            "expected": 141.21199808219862,
            "tolerance": 0.0051
          }
        ]
      }
    ]
  },
  {
    "id": "raid",
    "inputs": {
      "level": "1",
      "disks": 3,
      "sizeTb": 4
    },
    "checks": [
      {
        "kind": "number",
        "expected": 4.0,
        "tolerance": 0.0
      },
      {
        "kind": "number",
        "expected": 12.0,
        "tolerance": 0.0,
        "row": 0
      },
      {
        "kind": "number",
        "expected": 2.0,
        "tolerance": 0.0,
        "row": 1
      }
    ],
    "active": "sizeTb",
    "invalid": {
      "level": "10",
      "disks": 3
    },
    "proof": "Equal4TB n-way3mirrorusable4/raw12,modeltolerates2failureswhileonecompletecopyhealthy.8diskRAID6=24TB;RAID10=16TB,guaranteeonefailure.",
    "share": {
      "level": "1",
      "disks": "3",
      "sizeTb": null
    },
    "units": [
      {
        "field": "sizeTb",
        "allowed": [
          "TB",
          "ТБ"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "level": "6",
          "disks": 8
        },
        "checks": [
          {
            "kind": "number",
            "expected": 24.0,
            "tolerance": 0.0
          },
          {
            "kind": "number",
            "expected": 2.0,
            "tolerance": 0.0,
            "row": 1
          }
        ]
      },
      {
        "inputs": {
          "level": "10"
        },
        "checks": [
          {
            "kind": "number",
            "expected": 16.0,
            "tolerance": 0.0
          },
          {
            "kind": "number",
            "expected": 1.0,
            "tolerance": 0.0,
            "row": 1
          }
        ]
      }
    ]
  },
  {
    "id": "tv-monitor-viewing-distance",
    "inputs": {
      "diag": 55,
      "ratio": "16:9",
      "lines": 2160
    },
    "checks": [
      {
        "kind": "number",
        "expected": 1.672651924157715,
        "tolerance": 0.00051
      }
    ],
    "active": "diag",
    "invalid": {
      "lines": 2160.5
    },
    "proof": "IndependentDecimal100 geometry:screenwidth=55×.0254×16/√337,d40=width/[2tan20°];chosenanglemodel only.110in doublesdistance.",
    "share": {
      "diag": null,
      "ratio": null,
      "lines": null
    },
    "units": [
      {
        "field": "diag",
        "allowed": [
          "in"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "diag": 110
        },
        "checks": [
          {
            "kind": "number",
            "expected": 3.34530384831543,
            "tolerance": 0.00051
          }
        ]
      }
    ]
  },
  {
    "id": "unix-timestamp",
    "inputs": {
      "mode": "toDate",
      "timestamp": 0
    },
    "checks": [
      {
        "kind": "text",
        "expected": "1970-01-01 00:00:00 UTC"
      }
    ],
    "active": "timestamp",
    "invalid": {
      "timestamp": 0.5
    },
    "proof": "Epochseconds0literalUTC. Python datetimeoracle0001−62135596800 and2000-02-29=951782400;noJS Date oracle.",
    "share": {
      "mode": null,
      "timestamp": "0",
      "date": null,
      "hour": null,
      "minute": null,
      "second": null
    },
    "units": [
      {
        "field": "timestamp",
        "allowed": [
          "s",
          "с"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "timestamp": -62135596800
        },
        "checks": [
          {
            "kind": "text",
            "expected": "0001-01-01 00:00:00 UTC"
          }
        ]
      },
      {
        "inputs": {
          "mode": "toTimestamp",
          "date": "2000-02-29",
          "hour": 0,
          "minute": 0,
          "second": 0
        },
        "checks": [
          {
            "kind": "number",
            "expected": 951782400.0,
            "tolerance": 0.0
          }
        ],
        "visible": [
          "mode",
          "date",
          "hour",
          "minute",
          "second"
        ],
        "hidden": [
          "timestamp"
        ]
      },
      {
        "inputs": {
          "date": "0001-01-01"
        },
        "checks": [
          {
            "kind": "number",
            "expected": -62135596800.0,
            "tolerance": 0.0
          }
        ]
      }
    ],
    "visible": [
      "mode",
      "timestamp"
    ],
    "hidden": [
      "date",
      "hour",
      "minute",
      "second"
    ]
  },
  {
    "id": "video-file-size",
    "inputs": {
      "videoMbps": 8,
      "audioKbps": 128,
      "minutes": 10
    },
    "checks": [
      {
        "kind": "number",
        "expected": 0.6096,
        "tolerance": 5.1e-05
      }
    ],
    "active": "videoMbps",
    "invalid": {
      "audioKbps": -1
    },
    "proof": "Meanrates add beforebytes: (8+.128)Mbit/s×600s/8000=.6096GB;halfonlyvideorate=.3096GB;halfduration=.3048GB.",
    "share": {
      "videoMbps": null,
      "audioKbps": null,
      "minutes": null
    },
    "units": [
      {
        "field": "videoMbps",
        "allowed": [
          "Mbit/s",
          "Мбит/с",
          "Мбіт/с"
        ]
      }
    ],
    "alternatives": [
      {
        "inputs": {
          "videoMbps": 4
        },
        "checks": [
          {
            "kind": "number",
            "expected": 0.3096,
            "tolerance": 5.1e-05
          }
        ]
      },
      {
        "inputs": {
          "videoMbps": 8,
          "minutes": 5
        },
        "checks": [
          {
            "kind": "number",
            "expected": 0.3048,
            "tolerance": 5.1e-05
          }
        ]
      }
    ]
  }
];
const paths:Record<string,Record<string,string>>={
  "aspect-ratio": {
    "ru": "/ru/computers/aspect-ratio/",
    "en": "/en/computers/aspect-ratio-calculator/",
    "uk": "/uk/kompyutery/spivvidnoshennya-storin/",
    "de": "/de/computer/seitenverhaeltnis-rechner/",
    "es": "/es/informatica/relacion-de-aspecto/"
  },
  "color-convert": {
    "ru": "/ru/computers/color-convert/",
    "en": "/en/computers/hex-rgb-hsl-converter/",
    "uk": "/uk/kompyutery/konverter-koloriv/",
    "de": "/de/computer/farbcode-umrechner/",
    "es": "/es/informatica/conversor-hex-rgb-hsl/"
  },
  "css-units": {
    "ru": "/ru/computers/css-units/",
    "en": "/en/computers/css-units-converter/",
    "uk": "/uk/kompyutery/css-odynytsi/",
    "de": "/de/computer/css-einheiten-umrechner/",
    "es": "/es/informatica/conversor-de-unidades-css/"
  },
  "download-time": {
    "ru": "/ru/computers/download-time/",
    "en": "/en/computers/download-time-calculator/",
    "uk": "/uk/kompyutery/chas-zavantazhennya/",
    "de": "/de/computer/downloadzeit-rechner/",
    "es": "/es/informatica/tiempo-de-descarga/"
  },
  "files-on-disk": {
    "ru": "/ru/computers/files-on-disk/",
    "en": "/en/computers/files-on-disk-calculator/",
    "uk": "/uk/kompyutery/fayly-na-nosiyi/",
    "de": "/de/computer/dateien-auf-datentraeger/",
    "es": "/es/informatica/archivos-en-un-disco/"
  },
  "fps-frametime": {
    "ru": "/ru/computers/fps-frametime/",
    "en": "/en/computers/fps-frame-time-calculator/",
    "uk": "/uk/kompyutery/fps-chas-kadru/",
    "de": "/de/computer/fps-frametime-rechner/",
    "es": "/es/informatica/fps-a-tiempo-de-fotograma/"
  },
  "internet-traffic": {
    "ru": "/ru/computers/internet-traffic/",
    "en": "/en/computers/internet-data-usage-calculator/",
    "uk": "/uk/kompyutery/internet-trafik/",
    "de": "/de/computer/datenverbrauch-rechner/",
    "es": "/es/informatica/consumo-de-datos-de-internet/"
  },
  "ipv4-subnet": {
    "ru": "/ru/computers/ipv4-subnet/",
    "en": "/en/computers/ipv4-subnet-calculator/",
    "uk": "/uk/kompyutery/pidmerezha-ipv4/",
    "de": "/de/computer/subnetzrechner/",
    "es": "/es/informatica/calculadora-de-subredes-ipv4/"
  },
  "modular-scale": {
    "ru": "/ru/computers/modular-scale/",
    "en": "/en/computers/modular-scale-calculator/",
    "uk": "/uk/kompyutery/modulna-shkala/",
    "de": "/de/computer/modulare-skala-rechner/",
    "es": "/es/informatica/escala-modular/"
  },
  "network-bandwidth": {
    "ru": "/ru/computers/network-bandwidth/",
    "en": "/en/computers/network-bandwidth-calculator/",
    "uk": "/uk/kompyutery/propuskna-zdatnist/",
    "de": "/de/computer/bandbreiten-rechner/",
    "es": "/es/informatica/ancho-de-banda-de-red/"
  },
  "password-entropy": {
    "ru": "/ru/computers/stoykost-parolya/",
    "en": "/en/computers/password-entropy/",
    "uk": "/uk/kompyutery/stiykist-parolya/",
    "de": "/de/computer/passwort-entropie/",
    "es": "/es/informatica/entropia-de-contrasenas/"
  },
  "ppi-dpi": {
    "ru": "/ru/computers/ppi/",
    "en": "/en/computers/ppi-calculator/",
    "uk": "/uk/kompyutery/ppi/",
    "de": "/de/computer/ppi-rechner/",
    "es": "/es/informatica/calculadora-de-ppi/"
  },
  "raid": {
    "ru": "/ru/computers/raid/",
    "en": "/en/computers/raid-calculator/",
    "uk": "/uk/kompyutery/raid-masyv/",
    "de": "/de/computer/raid-rechner/",
    "es": "/es/informatica/calculadora-de-raid/"
  },
  "tv-monitor-viewing-distance": {
    "ru": "/ru/computers/rasstoyanie-do-televizora/",
    "en": "/en/computers/tv-viewing-distance/",
    "uk": "/uk/kompyutery/vidstan-do-televizora/",
    "de": "/de/computer/sitzabstand-fernseher/",
    "es": "/es/informatica/distancia-de-vision-a-un-televisor/"
  },
  "unix-timestamp": {
    "ru": "/ru/computers/unix-timestamp/",
    "en": "/en/computers/unix-timestamp-converter/",
    "uk": "/uk/kompyutery/unix-chas/",
    "de": "/de/computer/unix-zeitstempel-umrechner/",
    "es": "/es/informatica/conversor-de-marca-de-tiempo-unix/"
  },
  "video-file-size": {
    "ru": "/ru/computers/video-file-size/",
    "en": "/en/computers/video-file-size-calculator/",
    "uk": "/uk/kompyutery/rozmir-videofaylu/",
    "de": "/de/computer/videodateigroesse-rechner/",
    "es": "/es/informatica/tamano-de-archivo-de-video/"
  }
};
const locales=['ru','en','uk','de','es'] as const;
const widths=[390,1365] as const;
const normalize=(text:string)=>text.replace(/[\u00a0\u202f]/g,' ').replace(/−/g,'-').trim();
function numeric(text:string,locale:string):number{
 const read=(part:string)=>Number(locale==='en'?part.replace(/[\s\u00a0\u202f,]/g,''):part.replace(/[\s\u00a0\u202f.]/g,'').replace(',','.'));
 const exponent=text.match(/([-−]?\d[\d\s\u00a0\u202f.,]*)·10\^(-?\d+)/);
 if(exponent)return read(exponent[1].replace('−','-'))*10**Number(exponent[2]);
 const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
 return token?read(token.replace('−','-')):NaN; // asynchronous error-to-valid recovery must retry
}
async function checks(page:Page,locale:string,expected:Check[]){
 await expect(page.getByTestId('calc-result-primary')).toBeVisible();
 for(const check of expected){
  const locator=check.row===undefined?page.getByTestId('calc-result-primary'):page.getByTestId(`calc-result-row-${check.row}`).locator('dd');
  const actual=async()=>(await locator.allTextContents()).join('');
  if(check.kind==='text')await expect.poll(async()=>normalize(await actual())).toBe(check.expected);
  else if(check.tolerance===0)await expect.poll(async()=>numeric(await actual(),locale)).toBe(check.expected);
  else await expect.poll(async()=>Math.abs(numeric(await actual(),locale)-check.expected)).toBeLessThan(check.tolerance);
 }
}
async function invalid(page:Page,locale:string){
 await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0||(await page.getByTestId('calc-result-primary').allTextContents()).some(v=>v.trim()==='—')).toBe(true);
 await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
 const text=(await page.locator('[data-testid^="field-error-"]:visible').allTextContents()).join(' ');
 if(locale!=='ru')expect(text).not.toMatch(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}
async function native(page:Page,locale:string){
 const result=page.getByTestId('calc-result');await expect(result).not.toContainText(/NaN|Infinity|undefined/);
 if(locale!=='ru')await expect(result).not.toContainText(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}
const query=(values:Inputs)=>new URLSearchParams(Object.entries(values).map(([key,value])=>[key,String(value)]));
async function put(page:Page,name:string,value:string|number){
 const control=page.getByTestId(`field-${name}`);
 if(await control.evaluate(element=>element.tagName==='SELECT'))await control.selectOption(String(value));
 else await control.fill(String(value));
}
async function fieldsets(page:Page,visible?:string[],hidden?:string[]){
 for(const name of visible??[])await expect(page.getByTestId(`field-${name}`)).toBeVisible();
 for(const name of hidden??[])await expect(page.getByTestId(`field-${name}`)).toHaveCount(0);
}
async function units(page:Page,items:UnitCheck[]){
 for(const item of items){
  const text=await page.getByTestId(`field-label-${item.field}`).innerText();
  // Alternative spellings identify one declared physical unit, never MB/MiB or bit/byte interchangeably.
  expect(item.allowed.some(unit=>text.includes(`(${unit})`)),`${item.field}: ${text}`).toBe(true);
 }
}
async function layout(page:Page,width:number){
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 for(const row of await page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]').all()){
  const dt=await row.locator('dt').boundingBox(),dd=await row.locator('dd').boundingBox();expect(dt).not.toBeNull();expect(dd).not.toBeNull();
  if(width===390){expect(dt!.width).toBeGreaterThanOrEqual(240);expect(dd!.width).toBeGreaterThanOrEqual(240);expect(dd!.y).toBeGreaterThanOrEqual(dt!.y+dt!.height-1);}
  else{expect(dt!.width).toBeGreaterThanOrEqual(140);expect(dd!.width).toBeGreaterThanOrEqual(160);}
 }
}
async function colorGrammar(page:Page){
 const rgb=await page.getByTestId('calc-result-primary').innerText();
 const hsl=await page.getByTestId('calc-result-row-0').locator('dd').innerText();
 expect(await page.evaluate(({rgb,hsl})=>CSS.supports('color',rgb)&&CSS.supports('color',hsl),{rgb,hsl})).toBe(true);
 expect(hsl).toMatch(/^hsl\(\d+, \d+\.\d{2}%, \d+\.\d{2}%\)$/);
}
for(const width of widths)test.describe(`ComputerWave9/${width}px`,()=>{
 test.use({viewport:{width,height:width===390?844:900}});
 for(const sample of samples)for(const locale of locales){
  const path=paths[sample.id][locale];
  test(`${locale}/${sample.id}: independent normal/modes/units/query reload/layout`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
   await page.goto(`${path}?${query(sample.inputs)}`);await checks(page,locale,sample.checks);
   await fieldsets(page,sample.visible,sample.hidden);await units(page,sample.units);await native(page,locale);await layout(page,width);
   if(sample.id==='color-convert')await colorGrammar(page);
   if(sample.id==='password-entropy')await expect(page.locator('main input[type="password"]')).toHaveCount(0);
   await page.reload();await checks(page,locale,sample.checks);await fieldsets(page,sample.visible,sample.hidden);
   for(const alternate of sample.alternatives){
    for(const[key,value]of Object.entries(alternate.inputs))await put(page,key,value);
    await checks(page,locale,alternate.checks);await fieldsets(page,alternate.visible,alternate.hidden);await units(page,alternate.units??[]);await native(page,locale);
    if(sample.id==='color-convert')await colorGrammar(page);
   }
   expect(errors).toEqual([]);
  });
  test(`${locale}/${sample.id}: actual invalid/blank recovery/clipboard/default omission/reload`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
   await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as Window&{computer9Share?:string}).computer9Share=text;}}}));
   await page.goto(`${path}?${query({...sample.inputs,...sample.invalid})}`);await invalid(page,locale);
   await page.goto(`${path}?${query(sample.inputs)}`);await checks(page,locale,sample.checks);
   await page.getByTestId(`field-${sample.active}`).fill('');await invalid(page,locale);
   await page.getByTestId(`field-${sample.active}`).fill(String(sample.inputs[sample.active]));await checks(page,locale,sample.checks);await native(page,locale);
   await page.getByTestId('calc-share-btn').click();await expect.poll(async()=>page.evaluate(()=>(window as Window&{computer9Share?:string}).computer9Share??'')).not.toBe('');
   const shared=await page.evaluate(()=>(window as Window&{computer9Share?:string}).computer9Share!);const url=new URL(shared);expect(url.pathname).toBe(path);
   for(const[key,expected]of Object.entries(sample.share))expect(url.searchParams.get(key)).toBe(expected);
   await page.goto(shared);await checks(page,locale,sample.checks);await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.inputs[sample.active]));
   await fieldsets(page,sample.visible,sample.hidden);await units(page,sample.units);await page.reload();await checks(page,locale,sample.checks);
   await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.inputs[sample.active]));await native(page,locale);expect(errors).toEqual([]);
  });
 }
});
