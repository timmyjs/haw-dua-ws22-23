/**
 * WS 22/23 DuA - Übungsaufgaben: Funktionen
 */
console.log("%cÜbungsaufgabe: Funktionen", "color: #bf0b22");
console.log("%c--", "color: #bf0b22");

function zufallszahl(max = 10) {
	return Math.floor(Math.random() * max) + 1;
}

// 1.   Warm-up
//      - Erstellen Sie eine Variable, welche eine zufällige Zahl zugewiesen bekommt
//      - Schreiben Sie ein Funktion, welche diesen Wert verdoppelt und zurück gibt
//      - Geben Sie sowohl den ursprünglichen Wert, als auch das Ergebnis der Funktion auf der Konsole aus

const zahl = zufallszahl();
const zahl_veroppelt = function double(num) {
	return num * 2;
};
console.log(zahl, zahl_veroppelt);

// 2.   Formatieren
// --

// 2.a  Schreiben Sie eine Funktion zur Formatierung eines Namens:
//      - Parameter: Vorname, Name, Alter
//      - Rückgabewert: formatierter Name nach dem Schema: "Max Mustermann (42 Jahre)"
//      - Hinweis: String-Segmente können über das + miteinander verkettet werden

function format(name, vorname, alter) {
	return vorname + " " + name + " (" + alter + ")";
}
console.log(format("Musterfrau", "Maxi", 42));

// 2.b  Erweitern Sie die Parameter der Funktion aus 2.a um folgende Defaultwerte:
//      - Vorname: Max
//      - Nachname: Mustermann

function format(name = "Mustermann", vorname = "Max", alter) {
	return vorname + " " + name + " (" + alter + ")";
}
console.log(format(undefined, undefined, 42));

// 2.c  Erweitern Sie den Funktionskörper aus 2.a um folgender Bedingung:
//      - Wenn der Parameter Alter gesetzt ist, verhält sich die Funktion wie bisher
//      - Wenn der Parameter Alter nicht gesetzt ist, soll "Alter unbekannt" anstelle des Alters im Rückgabewert stehen

function format(name = "Mustermann", vorname = "Max", alter) {
	if (alter === undefined) {
		return vorname + " " + name + " (Alter unbekannt)";
	}
	return vorname + " " + name + " (" + alter + ")";
}
console.log(format());

// 3.   Rechnen
// --

// 3.a  Schreiben Sie Funktionen zur Berechnung der Grundrechenoperationen:
//      - Addition (+), Subtraktion (-), Multiplikation (*), Division (/)
//      - Jede Funktion akzeptiert zwei Zahlen als Parameter und gibt das Ergebnis der Berechnung zurück

function addition(a, b) {
	return a + b;
}

function subtraktion(a, b) {
	return a - b;
}

function multiplikation(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

// 3.b  Schreiben Sie eine weitere Funktion, welche zur Berechung aller Grundrechenoperationen für zwei Zahlen verwendet werden kann:
//      - Verwenden Sie im Funktionskörper die Funktionen aus 3.a
//      - Geben Sie das Ergebnis der Berechnung zurück

function rechnen(a, b, rechenart) {
	let ergebnis;
	switch (rechenart) {
		case "addition":
			ergebnis = addition(a, b);
			break;
		case "subtraktion":
			ergebnis = subtraktion(a, b);
			break;
		case "multiplikation":
			ergebnis = multiplikation(a, b);
			break;
		case "division":
			ergebnis = division(a, b);
			break;
	}
	return ergebnis;
}

console.log(rechnen(1, 2, "addition"));
console.log(rechnen(2, 1, "subtraktion"));
console.log(rechnen(2, 2, "multiplikation"));
console.log(rechnen(4, 2, "division"));

// 4.   Kreisinformationen
// --

// 4.a  Schreiben Sie eine Funktion zur Berechnung von Kreisinformationen:
//      - Die Funktion benötigt zur Berechnung der Informationen einen Radius
//      - Die Funktion kann den Kreisumfang berechnen (Kreisumfang = 2πr)
//      - Die Funktion kann die Kreisfläche berechnen (Kreisfläche = πr²)
//      - Beim Aufrufen der Funktion kann entschieden werden, welche Information zurück gegeben werden soll
//      - Hinweis: Verwenden Sie 'Math.PI' aus der JavaScript-Standardbibliothekt, um Pi zu erhalten
//      - Hinweis: Verwenden Sie die Funktion 'Math.pow(number, 2)' aus der JavaScript-Standardbibliothek, um den Radius zu quadrieren

function kreisinformationen(r, information) {
	const umfang = 2 * Math.PI * r;
	const flaeche = Math.PI * Math.pow(r, 2);

	if (information === "umfang") {
		return umfang;
	} else if (information === "flaeche") {
		return flaeche;
	} else {
		console.log("Kein Wert für Parameter 'information' angegeben");
	}
}

// 4.b  Erweitern Sie die in 4.a erstellt Funktion, sodass auch beide Informationen zurück gegeben werden können:
//      - Der Parameter zur Steuerung der Informationen ist optional
//      - Wenn dieser Paramaeter weggelassen, gibt die Funktion beide Informationen zurück
//      - Hinweis: Auch Arrays können Rückgabewerte sein

function kreisinformationen(r, information) {
	const umfang = 2 * Math.PI * r;
	const flaeche = Math.PI * Math.pow(r, 2);
	if (information === "umfang") {
		return umfang;
	} else if (information === "flaeche") {
		return flaeche;
	} else {
		return [umfang, flaeche];
	}
}

// 4.b  Verwenden Sie die in 4.a erstelle Funktion mit einem Radius Ihrer Wahl und geben Sie die Ergebnisse formatiert auf der Konsole aus:
//      - "Der Kreisumfang für den Radius {r} ist {u}", wobei {r} durch den Radius und {u} durch den Kreisumfang ersetzt werden soll
//      - "Die Kreisfläche für den Radius {r} ist {f}", wobei {r} durch den Radius und {f} durch die Kreisfläche ersetzt werden soll

const radius = 5;
const info = kreisinformationen(radius);

console.log("Der Kreisumfang für den Radius " + radius + " ist " + info[0]);
console.log("Die Kreisfläche für den Radius " + radius + " ist " + info[1]);

// 5.   Aktienkurse
// --

// 5.a  Schreiben Sie ein Programm, dass die Kurswerte einer Aktie analysiert:
//      - Die Kurswerte einer Aktie werden ab einem bestimmten Startdatum gesammelt
//      - Erstellen Sie fürs Erfassen der Kurswerte eine geeignete Datenstrukture
//      - Kurswerte: 100, 110, 115, 100, 95, 75, 70, 90, 105, 140

const kurswerte = [100, 110, 115, 100, 95, 75, 70, 90, 105, 140];

// 5.b  Zur Kategorisierung des Aktienkurses sollen die Kurswerte farblich kodiert werden:
//      - Schreiben Sie eine Funktion, welche in Abhängigkeit des Kurswertes einen entsprechenden Farbcode zurück gibt
//      - 'blau', falls der Kurswert größer als 90 und kleiner als 110 ist
//      - 'grün', falls der Kurswert größer oder gleich 110 ist
//      - 'rot', falls der Kurswert kleiner oder gleich 90 ist

function kategorie(wert) {
	if (wert > 90 && wert < 110) {
		return "blau";
	} else if (wert >= 110) {
		return "grün";
	} else {
		return "rot";
	}
}

// 5.c  Geben Sie den Verlauf des Aktienkurses formatiert auf der Konsole aus:
//      - Für jeden Eintrag in der Datenstruktur aus 3.a soll eine Ausgabe erzeugt werden
//      - "Die Kategorie für den Kurswert am Tag {t} ist {k}", wobei {t} durch den jeweiligen Tag und {k} durch die Kategorie des jeweiligen Kurswerts ersetzt werden soll

for (let n = 0; n < kurswerte.length; n += 1) {
	const tag = n + 1;
	console.log(
		"Die Kategrie für den Kurswert am Tag " + tag + " ist " + kategorie(kurswerte[n])
	);
}
