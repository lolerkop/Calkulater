import type { CalculatorCopy } from '../../lib/platform/types';

export const inclinedPlaneCopyDe: CalculatorCopy = {
  name: "Rechner für die schiefe Ebene",
  slug: "schiefe-ebene-rechner",
  shortDescription: "Hangabtriebskraft, Reibung und Beschleunigung.",
  seoTitle: "Schiefe Ebene berechnen — Hangabtrieb und Reibung",
  seoDescription: "Berechne Hangabtriebskraft, Normalkraft, Reibung und Beschleunigung eines Körpers auf einer schiefen Ebene.",
  h1: "Rechner für die schiefe Ebene",
  keywords: ["schiefe Ebene berechnen", "Hangabtriebskraft", "Normalkraft", "Reibung Neigung"],
  longDescription: "Berechne die Kräfte an einem Körper, der bereits eine gerade Rampe hinabgleitet. Die Gewichtskraft wird in eine parallele und eine normale Komponente zerlegt; anschließend wird die Gleitreibung abgezogen. Hangabwärts ist positiv: Positive Beschleunigung erhöht die Geschwindigkeit, negative bremst bis zum Stillstand. Der Beginn des Gleitens erfordert ein eigenes Haftreibungsmodell.",
  howToUse: ["Gib die Masse in Kilogramm und den Winkel zur Horizontalen in Grad ein, keine Steigung in Prozent.", "Verwende die Gleitreibungszahl der tatsächlichen Oberflächen; 0,2 ist ein Beispielwert, keine allgemeine Materialkonstante.", "Lies die Vorzeichen mit positiver Richtung hangabwärts. Negative Beschleunigung gilt nur solange der Körper abwärts gleitet."],
  howItWorks: "Mit g = 9,80665 m/s²: F∥ = mg sin α, N = mg cos α, FR = μN, Fnet = F∥ − FR, a = Fnet/m. μ ist dimensionslos. Angenommen werden Gleitbewegung abwärts, konstantes μ, keine Zugkraft, kein Rollen und kein Luftwiderstand. Bei 90° ist N = 0 der Grenzfall.",
  example: "50 kg, 30°, μ = 0,2: F∥ = 245,17 N; N = 424,64 N; Reibung = 84,928 N; resultierende Kraft = 160,24 N; a = 3,205 m/s². Auf einer horizontalen Fläche mit gleicher Masse und μ ist a = −1,961 m/s²: Der gleitende Körper wird langsamer. Das ist keine Stabilitätsreserve.",
  faq: [{"q": "Warum fällt die Masse aus der Beschleunigung heraus?", "a": "Beide Kräfte enthalten m: a = g(sin α − μ cos α). Bei gleichen Oberflächen steigen mit der Masse die Kräfte, aber nicht diese Beschleunigung."}, {"q": "Beginnt eine ruhende Kiste zu rutschen?", "a": "Das lässt sich hier nicht bestimmen. Dafür gilt mg sin α > μs mg cos α mit der Haftreibungszahl μs. Die eingegebene Zahl beschreibt Gleitreibung."}, {"q": "Gilt das für Aufwärtsbewegung oder Rollen?", "a": "Nein. Bei Bewegung aufwärts wirkt die Reibung andersherum; beim Rollen muss die Rotationsbewegung berücksichtigt werden."}, {"q": "Wie wird eine Prozentsteigung zum eingegebenen Winkel?", "a": "Bei Höhengewinn Δh und horizontaler Strecke L ist die Steigung p = 100Δh/L und der Winkel α = arctan(p/100). 100 % Steigung entsprechen 45°, nicht 90°. Gib den umgerechneten Winkel in Grad ein."}],
  disclaimer: "Modell für Abwärtsgleiten, keine Berechnung zur Ladungssicherung oder Tragwerksstabilität. Der Oberflächenzustand beeinflusst die Reibung.",
};
