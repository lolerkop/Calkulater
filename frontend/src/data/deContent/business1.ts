import type { DeDetailedContent } from './types';

export const deBusiness1Content: Partial<Record<string, DeDetailedContent>> = {
  'ad-budget-funnel': {
    longDescription: 'Wo der ROAS bereits ausgegebenes Geld benotet, rollt dies ein Budget nach vorn ab: wie viele Klicks es kauft, wie viele davon zu Bestellungen werden und welcher Umsatz daraus entsteht. Jede Stufe geht als Faktor in die nächste ein, ein Fehler in der Konversionsrate schadet der Antwort also genauso stark wie einer im Klickpreis — und die Konversion ist gewöhnlich die Zahl, die am leichtfertigsten geschätzt wird. Die Kosten je Bestellung stehen aus gutem Grund neben dem Umsatz: sie mit dem durchschnittlichen Bestellwert zu vergleichen ist die schnellste Probe darauf, ob der Plan überhaupt aufgehen kann, bevor Geld gebunden wird.',
    howToUse: [
      'Trage das Budget ein, das du ausgeben willst.',
      'Trage den Klickpreis ein, den du in der Auktion erwartest.',
      'Trage die Konversionsrate vom Klick zur Bestellung ein.',
      'Trage den durchschnittlichen Bestellwert der beworbenen Waren ein.',
    ],
    howItWorks: 'Klicks = Budget ÷ Klickpreis. Bestellungen = Klicks × Konversion ÷ 100. Umsatz = Bestellungen × durchschnittlicher Bestellwert, und der ROAS ist Umsatz ÷ Budget.',
    example: 'Ein Budget von 3000 € bei 0,48 € je Klick, 2,4 % Konversion und einem Bestellwert von 98 € bringt 14 700 € — ein ROAS von 4,9.',
    faq: [
      { q: 'Bei welcher Eingabe muss ich am vorsichtigsten sein?', a: 'Bei der Konversionsrate. Sie geht als Faktor durch die ganze Kette, und eine Schätzung von 3 % gegen tatsächliche 1,5 % halbiert den Umsatz, während sie auf der Seite wie ein kleiner Unterschied aussieht.' },
      { q: 'Welcher ROAS reicht aus?', a: 'Das hängt von der Marge ab. Bei einer Marge von dreißig Prozent deckt ein ROAS von 3,33 gerade die Ware; alles darunter verliert Geld, wie beeindruckend der Umsatz auch aussieht.' },
      { q: 'Sind Rücksendungen im Umsatz enthalten?', a: 'Nein. Es ist der Bruttoumsatz auf aufgegebene Bestellungen. In Warengruppen mit hoher Rücksendequote kann die brauchbare Zahl ein Fünftel niedriger liegen.' },
      { q: 'Warum stehen die Kosten je Bestellung gesondert da?', a: 'Weil sie sich unmittelbar mit dem durchschnittlichen Bestellwert und mit deiner Marge vergleichen lassen. Kostet eine Bestellung mehr in der Gewinnung, als sie einbringt, ist der Trichter kaputt, wie die Summen auch aussehen.' },
    ],
  },
  'ad-roi': {
    longDescription: 'Zeigt beide Maße für den Rückfluss einer Kampagne zugleich. Sie beantworten dieselbe Frage auf verschiedenen Skalen, und sie zu verwechseln ist teuer: bei doppeltem Umsatz gegenüber den Kosten beträgt der ROAS 2 und der ROI 100 Prozent.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'ROI = (Umsatz − Kosten) ÷ Kosten × 100. ROAS = Umsatz ÷ Kosten.',
    example: 'Ein Umsatz von 30 000 € bei Kosten von 10 000 € ergibt einen ROI von 200 % und einen ROAS von 3.',
    faq: [
      { q: 'Welche Zahl soll ich verwenden?', a: 'Der ROAS lässt sich leichter zwischen Kanälen vergleichen; der ROI beantwortet, ob die Kampagne Geld gebracht hat. Beide folgen aus denselben zwei Zahlen.' },
      { q: 'Wo liegt der Break-even?', a: 'Bei einem ROAS von 1, also einem ROI von null Prozent: der Umsatz deckt genau die Kosten.' },
      { q: 'Soll der Umsatz um den Wareneinsatz gemindert sein?', a: 'Wenn du den echten Rückfluss willst, ja. Mit dem Bruttoumsatz misst du den Durchsatz und nicht den Gewinn.' },
      { q: 'Warum kann der ROI −100 % betragen?', a: 'Die Kampagne hat überhaupt keinen Umsatz gebracht, die gesamten Kosten sind also verloren.' },
    ],
  },
  'aov': {
    longDescription: 'Der durchschnittliche Bestellwert teilt den Umsatz durch die Bestellungen, die ihn erzeugt haben. Er ist der einfachste Hebel in der Deckungsrechnung: den Warenkorb anzuheben kostet nichts an Gewinnung.',
    howToUse: [
      'Trage die Werte ein.',
      'Prüfe den zulässigen Bereich, wenn ein Feld abgewiesen wird.',
      'Lies das Ergebnis ab.',
    ],
    howItWorks: 'Bestellwert = Umsatz ÷ Bestellungen, beides über denselben Zeitraum genommen.',
    example: 'Ein Umsatz von 25 000 € über 200 Bestellungen ergibt einen durchschnittlichen Bestellwert von 125 €.',
    faq: [
      { q: 'Sollen Rücksendungen abgezogen werden?', a: 'Willst du den Nettowert, nimm den Umsatz nach Rücksendungen und zähle nur abgeschlossene Bestellungen. Wichtig ist, dass beide Zahlen einer Regel folgen.' },
      { q: 'Warum müssen die Bestellungen ganzzahlig sein?', a: 'Eine halbe Bestellung gibt es nicht; eine gebrochene Zahl heißt, dass der Zeitraum oder die Datenquelle nicht stimmt.' },
      { q: 'Ist der Versand im Bestellwert enthalten?', a: 'Das entscheidest du, aber halte es über die Zeiträume hinweg gleich, sonst verliert der Verlauf seinen Sinn.' },
      { q: 'Was hebt den durchschnittlichen Bestellwert?', a: 'Sets, Schwellen für kostenlosen Versand und Zusatzverkäufe. Anders als die Gewinnung kosten sie je zusätzlich verkaufter Einheit fast nichts.' },
    ],
  },
  'arpu-arppu': {
    longDescription: 'Berechnet zwei Durchschnitte mit verschiedenen Nennern, und der Nenner entscheidet über alles. ARPU teilt den Umsatz durch alle Nutzer; ARPPU teilt ihn allein durch die zahlenden. Der erste fällt, wenn das kostenlose Publikum wächst, der zweite nicht, keiner der beiden lässt sich also ohne den anderen lesen: ein steigender ARPPU neben einem fallenden ARPU heißt, dass weniger Menschen zahlen, jeder von ihnen aber mehr. Der Anteil der Zahlenden verbindet beide — ARPU ist ARPPU mal diesem Anteil, und zahlen alle, fallen die beiden Kennzahlen zusammen.',
    howToUse: [
      'Trage den Umsatz des Zeitraums ein.',
      'Trage die Gesamtzahl der Nutzer desselben Zeitraums ein.',
      'Trage ein, wie viele davon gezahlt haben.',
      'Alle drei Zahlen müssen denselben Zeitraum abdecken.',
    ],
    howItWorks: 'ARPU = Umsatz ÷ alle Nutzer. ARPPU = Umsatz ÷ zahlende Nutzer. Anteil der Zahlenden = zahlend ÷ alle. Daraus folgt ARPU = ARPPU × Anteil der Zahlenden.',
    example: 'Bei einem Umsatz von 50 000 €, 12 500 Nutzern und 900 Zahlenden beträgt der ARPU 4,00 € und der ARPPU 55,56 €.',
    faq: [
      { q: 'Wie unterscheidet sich ARPU vom durchschnittlichen Bestellwert?', a: 'Der Bestellwert teilt den Umsatz durch BESTELLUNGEN, während ARPU ihn durch Nutzer teilt. Ein Nutzer kann mehrere Bestellungen aufgeben, ARPU liegt deshalb meist höher.' },
      { q: 'Welche der beiden soll ich beobachten?', a: 'Beide. ARPU zeigt, was das ganze Publikum einbringt, ARPPU, wie wertvoll ein Zahlender ist. Ein steigender ARPPU bei fallendem ARPU heißt, dass weniger Menschen zahlen, jeder aber mehr.' },
      { q: 'Warum ist ARPPU verborgen, wenn niemand zahlt?', a: 'Weil es niemanden gibt, durch den sich der Umsatz teilen ließe. Unendlich auszugeben statt die Zeile ehrlich wegzulassen wäre schlechter, als nichts zu zeigen.' },
      { q: 'Wie hängen ARPU, ARPPU und der Anteil der Zahlenden zusammen?', a: 'ARPU = ARPPU × Anteil der Zahlenden. Es gibt also zwei Wege, ARPU zu heben: Zahlende mehr zahlen lassen oder ihre Zahl erhöhen.' },
      { q: 'Müssen alle drei Zahlen denselben Zeitraum abdecken?', a: 'Ja, immer. Jeder Zeitraum geht, und ein Monat ist die übliche Wahl, aber Monatsumsatz mit einem Jahrespublikum zu mischen macht die Kennzahl sinnlos.' },
    ],
  },
  'audience-growth': {
    longDescription: 'Zwei Zahlen beschreiben dasselbe Wachstum und beantworten verschiedene Fragen. Das Gesamtwachstum sagt, um wie viel größer das Publikum geworden ist; das Wachstum je Zeitraum sagt, welches Tempo dasselbe Ergebnis brächte, wenn es gleichmäßig verteilt wäre. Eine Verdopplung über ein Jahr und eine über einen Monat teilen die Gesamtzahl und haben sonst nichts gemein, weshalb Kanäle allein am Gesamtwachstum zu vergleichen in die Irre führt. Die Rate je Zeitraum macht verschieden alte Auftritte vergleichbar, und der Zuwachs hält die Prozentwerte ehrlich — hundert Prozent auf einer Grundlage von zwölf sind zwölf Menschen.',
    howToUse: [
      'Trage die Größe des Publikums am Anfang des Zeitraums ein.',
      'Trage die Größe am Ende ein.',
      'Trage ein, wie viele Zeiträume zwischen beiden Messungen lagen.',
      'Halte die Einheit des Zeitraums gleich — Monate oder Wochen, aber nicht beides.',
    ],
    howItWorks: 'Gesamtwachstum = (Ende ÷ Anfang − 1) × 100. Das Wachstum je Zeitraum ist dasselbe Verhältnis hoch eins durch die Zahl der Zeiträume, minus eins.',
    example: 'Von 12 000 auf 18 500 über sechs Zeiträume sind 54,17 % insgesamt und 7,49 % je Zeitraum.',
    faq: [
      { q: 'Warum liegt die Rate je Zeitraum unter dem Gesamtwachstum geteilt durch die Zeiträume?', a: 'Weil Wachstum sich aufzinst. Jeder Zeitraum wächst auf dem vorigen auf, das gleichmäßige Tempo zum selben Endpunkt liegt deshalb stets unter dem einfachen Durchschnitt.' },
      { q: 'Kommt das mit einem schrumpfenden Publikum zurecht?', a: 'Ja. Liegt der Endwert unter dem Anfangswert, kommen beide Raten negativ heraus — eine ehrliche Beschreibung des Rückgangs statt einer verborgenen Null.' },
      { q: 'Was zählt hier als Zeitraum?', a: 'Die Einheit, in der du gemessen hast: ein Monat, eine Woche, eine Kampagne. Dem Rechner ist sie gleich, solange Zählung und beide Messungen dieselbe Einheit meinen.' },
      { q: 'Warum wird auch der Zuwachs angezeigt?', a: 'Prozentwerte verbergen die Grundlage. Von zwölf auf vierundzwanzig sind hundert Prozent und zwölf Menschen, und die Spalte mit dem Zuwachs hält das im Blick.' },
    ],
  },
  'churn-retention': {
    longDescription: 'Ermittelt Abwanderung und Bindung von Kunden für einen Zeitraum. Im Nenner steht die Zahl der Kunden zu BEGINN des Zeitraums, nicht am Ende und nicht der Durchschnitt: wer im Lauf des Zeitraums hinzukam, gehört nicht hinein, sonst verdeckte der Zulauf die Verluste, und die Abwanderung sähe umso kleiner aus, je stärker du wirbst. Die mittlere Kundendauer folgt aus der Abwanderung als 100 ÷ Abwanderung: bei 5 % je Zeitraum bleibt ein Kunde rund zwanzig Zeiträume. Bei einer Abwanderung von null ist die Dauer unendlich, und die Zeile entfällt — dieser Rechner verspricht keinen unsterblichen Kunden. Der Nettozuwachs steht gesondert und darf negativ sein.',
    howToUse: [
      'Trage ein, wie viele Kunden du zu Beginn des Zeitraums hattest.',
      'Trage ein, wie viele im Zeitraum verloren gingen.',
      'Trage ein, wie viele im Zeitraum hinzukamen.',
      'Die Hinzugekommenen gehen nicht in den Nenner der Abwanderung ein.',
    ],
    howItWorks: 'Abwanderung = verloren ÷ Kunden am Anfang. Bindung = 100 % − Abwanderung. Nettozuwachs = (gewonnen − verloren) ÷ Kunden am Anfang. Mittlere Dauer = 100 ÷ Abwanderung in Prozent.',
    example: 'Von 1000 Kunden gingen 50 und kamen 80: Abwanderung 5,00 %, Bindung 95,00 %, am Ende 1030 Kunden.',
    faq: [
      { q: 'Warum die Kunden am Anfang und nicht am Ende?', a: 'Weil die Hinzugekommenen nie die Gelegenheit hatten zu gehen. Am Ende zu messen verdünnte die Abwanderung mit Neuzugängen und ließe sie umso kleiner aussehen, je stärker du wirbst.' },
      { q: 'Wie hängt die Abwanderung mit der Kundendauer zusammen?', a: 'Umgekehrt: Dauer ≈ 100 ÷ Abwanderung in Prozent. Bei 5 % monatlicher Abwanderung bleibt ein Kunde rund 20 Monate; bei 10 % nur 10.' },
      { q: 'Warum entfällt die Dauer bei einer Abwanderung von null?', a: 'Formal ist sie unendlich, und Unendlichkeit auf dem Bildschirm verspräche einen ewigen Kunden. Null Abwanderung in einem einzelnen Zeitraum ist gewöhnlich genug, Unsterblichkeit folgt daraus aber nicht.' },
      { q: 'Darf der Nettozuwachs negativ sein?', a: 'Ja, und das ist ein wichtiges Zeichen: es gingen mehr Kunden, als hinzukamen, die Grundlage schrumpft also selbst bei anständiger Bindung.' },
      { q: 'Soll die Abwanderung in Kunden oder in Umsatz gemessen werden?', a: 'Hier in Kunden. Die Umsatzabwanderung ist eine eigene Zahl und kann um ein Mehrfaches abweichen: ein einzelner großer Kunde bewegt die Kopfzahl kaum.' },
    ],
  },
};
