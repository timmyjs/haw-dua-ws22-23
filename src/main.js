/**
 * WS 22/23 DuA - Übungsaufgaben: Kontrollstrukturen II
 */
 console.log("%cÜbungsaufgabe: Kontrollstrukturen II", "color: #bf0b22");
 console.log("%c--", "color: #bf0b22");

 // Die Funktions 'zufallszahl' gibt eine Zufällige Zahl zwischen 1-10 zurück
 function zufallszahl(max = 10) {
   return Math.floor(Math.random() * max) + 1;
 }

 // 1.   Bedingte Anweisungen und logische Operatoren
 // --

 // 1.a  Schreiben Sie eine switch-Anweisung:
 //      - Verwenden Sie die Zufallszahl 'zahld' zur Fallunterscheidung
 //      - Weisen Sie in den Fallunterscheidungen der Variable 'wochentag' den entsprechenden Namen des Wochentages zu,
 //        z.B. 1 => Montag, ..., 7 => Sonntag
 {
   const zahl = zufallszahl(7);
   console.log("zahl: ", zahl);

   let wochentag = "";

   switch (zahl) {
	 case 1:
	   wochentag = "Montag";
	   break;
	 case 2:
	   wochentag = "Dienstag";
	   break;
	 case 3:
	   wochentag = "Mittwoch";
	   break;
	 case 4:
	   wochentag = "Donnerstag";
	   break;
	 case 5:
	   wochentag = "Freitag";
	   break;
	 case 6:
	   wochentag = "Samstag";
	   break;
	 case 7:
	   wochentag = "Sonntag";
	   break;
   }
 }

 // 1.b  Prüfen Sie, ob die 'zahl' sich innerhalb der gesetzten Grenzen (inklusive der Grenzwerte selbst) befindet.
 //      Falls nein, geben Sie 'Die Zahl befindet sich innerhalb der Grenzen" auf der Konsole aus.
 //      Falls nein, geben Sie 'Die Zahl befindet sich innerhalb der Grenzen" auf der Konsole aus.
 //      Hinweis: verwenden Sie logische Operatoren
 {
   const zahl = zufallszahl();
   console.log("zahl: ", zahl);

   const start = 5;
   const ende = 15;

   if (zahl >= start && zahl <= ende) {
	 console.log("Ja");
   } else {
	 console.log("Nein");
   }
 }

 // 1.c  Prüfen Sie, welche der Variablen die höchste Zahl beinhaltet und geben Sie diese auf der Konsole aus.
 //      Falls beide Zahlen den gleichen Wert haben, geben Sie den String "Gleichstand" auf der Konsole aus.
 //      Hinweis: verwenden Sie eine else if-Anweisung
 {
   const zahl1 = zufallszahl();
   console.log("zahl1: ", zahl1);

   const zahl2 = zufallszahl();
   console.log("zahl2: ", zahl2);

   if (zahl1 === zahl2) {
	 console.log("Gleichstand");
   } else if (zahl1 > zahl2) {
	 console.log(zahl1);
   } else {
	 console.log(zahl2);
   }
 }

 // 1.d  Prüfen Sie, welche der Variablen die höchste Zahl beinhaltet und geben Sie diese auf der Konsole aus.
 //      Hinwwies: verwenden Sie eine else-if Anweisung und logische Operatoren
 {
   const zahl1 = zufallszahl();
   console.log("zahl1: ", zahl1);

   const zahl2 = zufallszahl();
   console.log("zahl2: ", zahl2);

   const zahl3 = zufallszahl();
   console.log("zahl3: ", zahl3);

   if (zahl1 > zahl2 && zahl1 > zahl3) {
	 // 'zahl1' ist die größte Zahl
	 console.log(zahl1);
   } else if (zahl2 > zahl3) {
	 // 'zahl2' ist die größte Zahl
	 console.log(zahl2);
   } else {
	 // 'zahl3' ist die größte zahl
	 console.log(zahl3);
   }
 }

 // 1.e  Prüfen Sie, ob es sich bei der Variablen 'Jahr' um ein Schaltjahr handelt.
 //      Dabei gelten folgende Regeln:
 //      - Wenn die Jahreszahl durch vier teilbar ist, aber nicht durch 100, ist es ein Schaltjahr
 //      - Oder wenn die Jahreszahl durch 400 teilbar ist, ist es ein Schaltjahr
 //      Geben Sie das Ergebnis auf der Konsole aus.
 //    Hinweis: verwenden Sie logische Operatoren und den Modulo-Operator
 {
   const jahreszahl = zufallszahl(20) + 2000;
   console.log(jahreszahl);

   if (
	 (jahreszahl % 4 === 0 && jahreszahl % 100 !== 0) ||
	 jahreszahl % 400 === 0
   ) {
	 console.log(`Das Jahr ${jahreszahl} ist ein Schaltjahr`);
   } else {
	 console.log(`Das Jahr ${jahreszahl} ist kein Schaltjahr`);
   }
 }

 // 2.   while-Schleife
 // --

 // 2.a  Notieren Sie für jeden Durchlauf des folgenden Algorithmus die Konsolenausgabe:
 // const kurs = "Daten und Algorithmen";
 // let myString = "";
 // let index = 1;

 // while (index < kurs.length - 1) {
 //   myString += kurs[index];
 //   console.log(index, ":", myString);
 //   index += 5;
 // }

 // 2.b  Schreiben Sie das folgenden Program so um, das anstatt der for-Schleife eine while-Schleife verwendet wird.
 // const n = 22;
 // for (let l = 1; l <= 22; l += 1) {
 //   if (l % 2 === 0) {
 //     console.log(l);
 //   }
 // }

 const n = 22;
 let l = 1;
 while (l <= 22) {
   if (l % 2 === 0) {
	 console.log(l);
   }
   l += 1;
 }

 // 2.c  Schreiben Sie eine while-Schleife, die für jeden Durchlauf eine Reihe mit '*' auf der Konsole ausgibt. Dabei gelten folgende Regeln:
 //      - Solange 'zahl' größer als 0 ist, soll die Schleife weiter laufen (vergessen Sie nicht 'zahl' in jedem Durchlauf zu reduzieren)
 //      - Die Anzahl der Sterne pro Reihe entspricht dem aktuellen Wert von 'zahl'
 //      Bsp. für 'zahl' = 3:
 //      ***
 //      **
 //      *

 {
   let zahl = zufallszahl();
   console.log(zahl);

   while (zahl > 0) {
	 let stars = '';
	 for (let n = zahl; n > 0; n -= 1) {
	   stars += '*';
	 }
	 console.log(stars);
	 zahl -= 1;
   }
 }
