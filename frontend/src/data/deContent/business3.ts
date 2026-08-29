import type { DeDetailedContent } from './types';

export const deBusiness3Content: Partial<Record<string, DeDetailedContent>> = {
  'cpm': {
    longDescription: 'Teilt das Budget durch die Einblendungen und multipliziert mit tausend oder rechnet rückwärts, wie viele Einblendungen ein Budget kauft. Der Nenner unterscheidet den CPM von den Kennzahlen daneben: der CPC teilt durch Klicks und der CPA durch Handlungen, und die Formeln sehen sich ähnlich genug, dass ein Tausch eine plausible falsche Zahl liefert.',
    howToUse: [
      'Wähle, welchen Wert du brauchst.',
      'Trage die beiden bekannten ein.',
      'Lies das Ergebnis und die Kosten einer einzelnen Einblendung ab.',
    ],
    howItWorks: 'CPM = Budget ÷ Einblendungen × 1000; die beiden anderen Richtungen stellen dieselbe Beziehung um.',
    example: '900 € auf 1 200 000 Einblendungen sind ein CPM von 0,75 €.',
    faq: [
      { q: 'Was gilt als guter CPM?', a: 'Das hängt vom Platz und vom Publikum ab, deshalb wird kein Richtwert genannt. Vergleiche stattdessen mit deinen eigenen Kampagnen.' },
      { q: 'Wie unterscheidet sich CPM von CPC?', a: 'Durch den Nenner. Der CPM teilt durch Tausender von Einblendungen; der CPC teilt durch Klicks.' },
      { q: 'Darf das Budget null sein?', a: 'Ja, dann ist der CPM null. Eine kostenlose Platzierung ist ein echter Fall und kein Eingabefehler.' },
      { q: 'Sind Einblendungen dasselbe wie Reichweite?', a: 'Nein. Einblendungen zählen Ansichten, auch mehrfache bei derselben Person; die Reichweite zählt Menschen.' },
    ],
  },
  'ctr': {
    longDescription: 'Teilt Klicks durch Einblendungen und ergibt so die Klickrate. Der Nenner unterscheidet die Klickrate von den Kennzahlen daneben: die Konversion teilt durch Klicks, der ROAS durch Kosten, und beides zu verwechseln liefert eine Zahl, die völlig plausibel aussieht. Trage die Kampagnenkosten ein, und Klickpreis sowie Kosten je tausend Einblendungen folgen daraus.',
    howToUse: [
      'Trage die Zahl der Klicks ein.',
      'Trage die Zahl der Einblendungen ein.',
      'Ergänze die Kosten für den Klickpreis.',
    ],
    howItWorks: 'CTR = Klicks ÷ Einblendungen × 100; der Klickpreis ist Kosten ÷ Klicks.',
    example: '1250 Klicks auf 84 000 Einblendungen sind eine Klickrate von 1,49 Prozent.',
    faq: [
      { q: 'Was gilt als gute Klickrate?', a: 'Das hängt ganz vom Kanal, vom Platz und vom Publikum ab, deshalb wird hier kein Richtwert genannt. Vergleiche stattdessen mit deiner eigenen Geschichte.' },
      { q: 'Warum dürfen Klicks die Einblendungen nicht übersteigen?', a: 'Jedem Klick geht eine Einblendung voraus. Mehr Klicks als Einblendungen heißt meist, dass die beiden Zahlen aus verschiedenen Zeiträumen oder Berichten stammen.' },
      { q: 'Wie unterscheidet sich die Klickrate von der Konversionsrate?', a: 'Durch den Nenner. Die Klickrate teilt durch Einblendungen; die Konversionsrate teilt durch Klicks oder Besuche.' },
      { q: 'Was passiert bei null Klicks?', a: 'Die Klickrate ist null, und das ist ein echtes Ergebnis. Der Klickpreis hat keinen Wert, weil es nichts gibt, wodurch geteilt werden könnte.' },
    ],
  },
  'cycle-time': {
    longDescription: 'Den Takt setzt der Kunde und nicht die Linie: die verfügbare Schichtzeit geteilt durch die Einheiten, die diese Schicht ausliefern muss. Die tatsächliche Zykluszeit wird dann dagegen gehalten — ist sie größer, kann die Zelle nicht mithalten, wie „schnell“ sie sich auch anfühlt. Deshalb bedeutet eine Auslastung über hundert Prozent eine Unterdeckung und keine Überstunden: du musst den Zyklus verkürzen oder parallele Stationen hinzufügen.',
    howToUse: [
      'Verfügbare Zeit heißt reine Arbeitszeit: zieh Pausen, Schichtübergaben und geplante Stillstände vorher ab.',
      'Nimm die Nachfrage derselben Schicht, die die verfügbare Zeit abdeckt, sonst ist der Takt sinnlos.',
      'Die tatsächliche Zykluszeit ist die mittlere Zeit je Einheit, die die Zelle derzeit erreicht.',
      'Eine Auslastung über hundert Prozent bedeutet Unterdeckung und keine Überstunden.',
    ],
    howItWorks: 'Takt = verfügbare Zeit / Nachfrage; Auslastung = tatsächlicher Zyklus / Takt.',
    example: 'Eine Schicht von 480 Minuten für 120 Einheiten ergibt einen Takt von 4 Minuten; ein tatsächlicher Zyklus von 3,5 Minuten sind 87,5 % Auslastung.',
    faq: [
      { q: 'Wie unterscheidet sich der Takt von der Zykluszeit?', a: 'Der Takt ist die Anforderung des Kunden, die Zykluszeit das Können der Zelle. Der Takt lässt sich nicht „verbessern“: er bewegt sich nur mit der Nachfrage oder der Schichtlänge. Verbessert wird der Zyklus, indem man ihn unter den Takt zieht.' },
      { q: 'Was, wenn der Zyklus den Takt übersteigt?', a: 'Drei Wege: den Zyklus verkürzen, eine parallele Station hinzufügen oder die verfügbare Zeit verlängern. Die Rechnung zeigt, wie groß die Unterdeckung ist, und das sagt dir, ob eine Maßnahme reicht.' },
      { q: 'Soll ich eine Reserve einplanen?', a: 'Meist ja: Zyklen werden auf 85–95 % des Takts geplant, um Stillstände und Rüstvorgänge aufzufangen. Genau am Takt zu laufen heißt, dass jede Unterbrechung sofort zu einer versäumten Lieferung wird.' },
      { q: 'Ist die Rüstzeit enthalten?', a: 'Nur, wenn du sie von der verfügbaren Zeit abgezogen hast. Der Takt wird aus reiner Arbeitszeit gerechnet — Rüsten, Reinigen und geplante Wartung gehören nicht hinein.' },
    ],
  },
  'email-metrics': {
    longDescription: 'Die Nenner sind hier bewusst gewählt und nicht alle gleich. Öffnungs- und Klickrate teilen durch zugestellte statt durch versandte Nachrichten, denn eine E-Mail, die nie im Postfach ankam, hatte nie die Gelegenheit geöffnet zu werden, und sie dem Text anzulasten bestraft das Schreiben für das Verhalten eines Mailservers. Die Klicks je Öffnung teilen dagegen durch die Öffnungen und beantworten eine wirklich andere Frage: wie überzeugend die Nachricht für jemanden ist, der schon liest. Eine Kampagne kann eine schwache Klickrate und ausgezeichnete Klicks je Öffnung haben, und diese Verbindung weist auf die Betreffzeile und nicht auf den Inhalt.',
    howToUse: [
      'Trage ein, wie viele E-Mails versandt wurden.',
      'Trage ein, wie viele tatsächlich zugestellt wurden.',
      'Trage ein, wie viele geöffnet und wie viele geklickt wurden.',
      'Der Trichter muss sich bei jedem Schritt verengen — jede Zahl ist höchstens so groß wie die vorige.',
    ],
    howItWorks: 'Die Zustellrate ist zugestellt ÷ versandt. Öffnungs- und Klickrate teilen durch zugestellt. Die Klicks je Öffnung teilen Klicks durch Öffnungen.',
    example: 'Von 12 000 versandten kamen 11 640 an, 3025 wurden geöffnet und 412 geklickt — 97 % Zustellrate und 25,99 % Öffnungsrate.',
    faq: [
      { q: 'Warum teilt die Öffnungsrate durch zugestellt und nicht durch versandt?', a: 'Weil nicht zugestellte Post nicht geöffnet werden konnte. Durch versandt zu teilen mischt die Pflege der Liste in eine Kennzahl, die die Betreffzeile messen soll.' },
      { q: 'Was ist der Unterschied zwischen Klickrate und Klicks je Öffnung?', a: 'Die Klickrate misst Klicks gegen alle, die die E-Mail erhalten haben; die Klicks je Öffnung messen sie gegen die, die sie geöffnet haben. Ein hoher zweiter Wert bei niedrigem erstem weist auf die Betreffzeile und nicht auf den Inhalt.' },
      { q: 'Wie verlässlich sind Öffnungsraten heute?', a: 'Weniger als früher. Datenschutzfunktionen, die Zählpixel vorab laden, blähen die Öffnungen auf, der Verlauf über die Zeit sagt deshalb weit mehr aus als der absolute Wert.' },
      { q: 'Warum ist eine Stufe meines Trichters größer als die vorige?', a: 'Das ist ein Fehler beim Export und keine ungewöhnliche Kampagne. Öffnungen können Zustellungen nicht übersteigen und Klicks nicht die Öffnungen; eine Umkehrung heißt meist, dass die Zahlen aus verschiedenen Zeiträumen stammen.' },
    ],
  },
  'employee-cost': {
    longDescription: 'Das Gehalt ist das, was der Mitarbeiter sieht; der Betrieb zahlt erheblich mehr. Die Arbeitgeberbeiträge kommen auf das Gehalt obendrauf und werden nicht davon abgezogen, ein Satz von zwanzig Prozent fügt also ein Fünftel hinzu, statt eines wegzunehmen — die Richtung ist der häufigste Fehler in einem Einstellungsbudget. Die Gemeinkosten decken Arbeitsplatz, Ausstattung, Software und Weiterbildung ab, und sie hängen meist nicht am Gehalt, weshalb sie als Betrag und nicht als Prozentsatz eingetragen werden. Der Faktor am Ende ist die eine Zahl, die man sich merken sollte: eine Einstellung allein nach dem Gehalt zu planen liegt um nahezu die Hälfte daneben.',
    howToUse: [
      'Trage das Bruttogehalt für den Zeitraum ein.',
      'Trage den Satz der Arbeitgeberbeiträge ein, der obendrauf kommt.',
      'Trage die Gemeinkosten desselben Zeitraums als Betrag ein.',
      'Nimm durchgehend denselben Zeitraum — monatlich oder jährlich, nicht gemischt.',
    ],
    howItWorks: 'Beiträge = Gehalt × Satz ÷ 100. Gesamt = Gehalt + Beiträge + Gemeinkosten. Der Faktor ist das Gesamte geteilt durch das Gehalt.',
    example: 'Ein Gehalt von 4500 € mit 21 % Beiträgen und 600 € Gemeinkosten kostet 6045 € — das 1,34-Fache des Gehalts.',
    faq: [
      { q: 'Kommen die Beiträge auf das Gehalt obendrauf oder werden sie abgezogen?', a: 'Sie kommen obendrauf. Die Lohnsteuer wird vom Gehalt des Mitarbeiters einbehalten, die Arbeitgeberbeiträge liegen jedoch darüber und erscheinen nie auf der Abrechnung.' },
      { q: 'Was gehört in die Gemeinkosten?', a: 'Arbeitsplatz, Ausstattung, Softwarelizenzen, Weiterbildung, die auf die Verweildauer verteilte Personalsuche. Alles, was der Betrieb nicht mehr zahlen würde, wenn die Stelle wegfiele.' },
      { q: 'Wozu der Faktor?', a: 'Weil er jedes Gehalt sofort in eine Budgetzahl übersetzt. Weißt du, dass deine Organisation bei rund 1,35 liegt, ist ein Angebot von 5000 € eine Verpflichtung von 6750 € ohne weiteres Rechnen.' },
      { q: 'Ist bezahlter Urlaub enthalten?', a: 'Nicht gesondert. Urlaub steckt bereits in einem Jahresgehalt; rechnest du je Monat, denk daran, dass der Betrieb zwölf Monate für elf Monate Leistung zahlt.' },
    ],
  },
  'engagement-rate': {
    longDescription: 'Berechnet die Interaktionsrate — den Anteil der Reaktionen am Publikum. Es gibt zwei mögliche Nenner, und sie liefern verschiedene Zahlen: die Reichweite zeigt, wie der Beitrag bei denen ankam, die ihn gesehen haben, während die Abonnenten zeigen, wie er gegen das ganze Publikum abschneidet. Keiner von beiden ist für sich richtig, deshalb wird die Grundlage ausdrücklich gewählt und im Ergebnis genannt: vergleichen lassen sich nur Werte mit demselben Nenner.',
    howToUse: [
      'Trage die Gesamtzahl der Interaktionen ein.',
      'Wähle die Grundlage: Reichweite oder Abonnenten.',
      'Trage ihren Wert ein und lies die Interaktionsrate ab.',
    ],
    howItWorks: 'Interaktionsrate = Interaktionen ÷ Grundlage × 100, wobei die Grundlage nach deiner Wahl die Reichweite des Beitrags oder die Abonnentenzahl ist.',
    example: '450 Interaktionen bei einer Reichweite von 9000 ergeben eine Interaktionsrate von 5,00 %.',
    faq: [
      { q: 'Welche Grundlage ist richtig — Reichweite oder Abonnenten?', a: 'Beide sind gebräuchlich und beide aussagekräftig. Die Reichweite beantwortet „wie kam der Beitrag bei denen an, die ihn gesehen haben“; die Abonnenten beantworten „wie schnitt er gegen das ganze Publikum ab“. Vergleichbar sind nur Werte auf derselben Grundlage.' },
      { q: 'Was zählt als Interaktion?', a: 'Was du hineinnehmen willst: Gefällt-mir-Angaben, Kommentare, Weiterleitungen, Speicherungen. Wichtig ist, über alle verglichenen Beiträge hinweg gleich zu zählen.' },
      { q: 'Wie unterscheidet sich das von der Klickrate?', a: 'Die Klickrate ist der Anteil der Klicks an Werbeeinblendungen. Die Interaktionsrate ist der Anteil der Reaktionen am Publikum eines Beitrags. Andere Nenner, andere Handlungen.' },
      { q: 'Welches Niveau gilt als gut?', a: 'Das hängt von der Plattform, vom Thema und von der Größe des Publikums ab, deshalb wird hier kein Richtwert genannt. Vergleiche mit deinen eigenen früheren Beiträgen.' },
    ],
  },
};
