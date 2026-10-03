import { geometryWave8ScalarValues } from '../../lib/platform/geometryWave8ScalarLocalization';
import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  "de": {
    "fields": {
      "points": "Eckpunkte: x und y je Zeile, der Reihe nach"
    },
    "results": {
      "Площадь": "Fläche",
      "Периметр": "Umfang",
      "Вершин": "Eckpunkte",
      "Центроид X": "Schwerpunkt X",
      "Центроид Y": "Schwerpunkt Y",
      "Обход": "Umlaufsinn",
      "Проверьте данные": "Prüfe die Werte",
      "Единица периметра": "Umfangseinheit",
      "Единица площади": "Flächeneinheit"
    },
    "values": {
      ...geometryWave8ScalarValues.de,
      "против часовой": "gegen den Uhrzeigersinn",
      "по часовой": "im Uhrzeigersinn",
      "Нужны две координаты в строке:": "In der Zeile werden zwei Koordinaten gebraucht:",
      "Координаты должны быть числами в строке:": "Die Koordinaten müssen Zahlen sein, in der Zeile:",
      "Нужно не меньше трёх вершин": "Es werden mindestens drei Eckpunkte gebraucht",
      "Вершины лежат на одной прямой: многоугольника нет": "Die Eckpunkte liegen auf einer Geraden: es gibt kein Vieleck",
      "единица координат": "Koordinateneinheit",
      "Контур самопересекается или его стороны накладываются": "Der Umriss schneidet sich selbst oder Kanten überlappen",
      "Контур имеет нулевую площадь": "Der Umriss hat die Fläche null",
      "квадрат единицы координат": "Quadrat der Koordinateneinheit",
      "Контур ограничен 256 вершинами и 32768 символами": "Der Umriss ist auf 256 Punkte und 32768 Zeichen begrenzt",
      "Вершины не должны повторяться или образовывать нулевую сторону": "Eckpunkte dürfen sich nicht wiederholen oder eine Kante der Länge null bilden",
      "В каждой строке нужны две конечные координаты": "Jede Zeile braucht zwei endliche Koordinaten"
    }
  },
  "en": {
    "fields": {
      "points": "Vertices: x and y per line, in order"
    },
    "options": {},
    "results": {
      "Площадь": "Area",
      "Периметр": "Perimeter",
      "Вершин": "Vertices",
      "Центроид X": "Centroid X",
      "Центроид Y": "Centroid Y",
      "Обход": "Winding",
      "Проверьте данные": "Check the values",
      "Единица периметра": "Perimeter unit",
      "Единица площади": "Area unit"
    },
    "values": {
      ...geometryWave8ScalarValues.en,
      "против часовой": "counter-clockwise",
      "по часовой": "clockwise",
      "Нужны две координаты в строке:": "Two coordinates are required on the line:",
      "Координаты должны быть числами в строке:": "Coordinates must be numbers on the line:",
      "Нужно не меньше трёх вершин": "At least three vertices are required",
      "Вершины лежат на одной прямой: многоугольника нет": "The vertices are collinear, so there is no polygon",
      "единица координат": "coordinate unit",
      "Контур самопересекается или его стороны накладываются": "The outline crosses itself or its edges overlap",
      "Контур имеет нулевую площадь": "The outline has zero area",
      "квадрат единицы координат": "coordinate unit squared",
      "Контур ограничен 256 вершинами и 32768 символами": "The outline is limited to 256 vertices and 32768 characters",
      "Вершины не должны повторяться или образовывать нулевую сторону": "Vertices must not repeat or form a zero-length edge",
      "В каждой строке нужны две конечные координаты": "Each line needs two finite coordinates"
    }
  },
  "uk": {
    "fields": {
      "points": "Вершини: x і y у рядку, за порядком обходу"
    },
    "options": {},
    "results": {
      "Площадь": "Площа",
      "Периметр": "Периметр",
      "Вершин": "Вершин",
      "Центроид X": "Центроїд X",
      "Центроид Y": "Центроїд Y",
      "Обход": "Напрямок обходу",
      "Проверьте данные": "Перевірте дані",
      "Единица периметра": "Одиниця периметра",
      "Единица площади": "Одиниця площі"
    },
    "values": {
      ...geometryWave8ScalarValues.uk,
      "против часовой": "проти годинникової",
      "по часовой": "за годинниковою",
      "Нужны две координаты в строке:": "Потрібні дві координати в рядку:",
      "Координаты должны быть числами в строке:": "Координати мають бути числами в рядку:",
      "Нужно не меньше трёх вершин": "Потрібно щонайменше три вершини",
      "Вершины лежат на одной прямой: многоугольника нет": "Вершини лежать на одній прямій, тож багатокутника немає",
      "единица координат": "одиниця координат",
      "Контур самопересекается или его стороны накладываются": "Контур самоперетинається або його сторони накладаються",
      "Контур имеет нулевую площадь": "Контур має нульову площу",
      "квадрат единицы координат": "квадрат одиниці координат",
      "Контур ограничен 256 вершинами и 32768 символами": "Контур обмежений 256 вершинами та 32768 символами",
      "Вершины не должны повторяться или образовывать нулевую сторону": "Вершини не мають повторюватися чи утворювати нульову сторону",
      "В каждой строке нужны две конечные координаты": "У кожному рядку потрібні дві скінченні координати"
    }
  },
  "es": {
    "fields": {
      "points": "Vértices: x e y por línea, en orden"
    },
    "options": {},
    "results": {
      "Площадь": "Área",
      "Периметр": "Perímetro",
      "Вершин": "Vértices",
      "Центроид X": "Centroide X",
      "Центроид Y": "Centroide Y",
      "Обход": "Sentido de recorrido",
      "Проверьте данные": "Revisa los datos",
      "Единица периметра": "Unidad de perímetro",
      "Единица площади": "Unidad de área"
    },
    "values": {
      ...geometryWave8ScalarValues.es,
      "против часовой": "antihorario",
      "по часовой": "horario",
      "Нужны две координаты в строке:": "Hacen falta dos coordenadas en la línea:",
      "Координаты должны быть числами в строке:": "Las coordenadas deben ser números en la línea:",
      "Нужно не меньше трёх вершин": "Hacen falta al menos tres vértices",
      "Вершины лежат на одной прямой: многоугольника нет": "Los vértices están alineados: no hay polígono",
      "единица координат": "unidad de coordenadas",
      "Контур самопересекается или его стороны накладываются": "El contorno se cruza consigo mismo o sus lados se solapan",
      "Контур имеет нулевую площадь": "El contorno tiene área cero",
      "квадрат единицы координат": "unidad de coordenadas al cuadrado",
      "Контур ограничен 256 вершинами и 32768 символами": "El contorno está limitado a 256 vértices y 32768 caracteres",
      "Вершины не должны повторяться или образовывать нулевую сторону": "Los vértices no deben repetirse ni formar un lado de longitud cero",
      "В каждой строке нужны две конечные координаты": "Cada línea necesita dos coordenadas finitas"
    }
  }
};
