/**
 * WS 22/23 DuA - Übungsaufgaben: Volle Kontrolle
 */
 console.log("%cÜbungsaufgabe: Volle Kontrolle", "color: #bf0b22");
 console.log("%c--", "color: #bf0b22");

 // 1.
 // --
 // 1.a  Schreiben Sie ein Programm, dass die Summe alle Zahlen aus beiden Arrays berechnet
 //      und geben Sie das Ergebnis auf der Konsole aus.
 const array1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
 const array2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

 let result1 = 0;
 for (let l = 0; l < array1.length; l += 1) {
   result1 += array1[l];
 }

 let result2 = 0;
 for (let l = 0; l < array2.length; l += 1) {
   result1 += array2[l];
 }

 console.log(result1 + result2); // => 627

 // 1.b  Schreiben Sie ein Programm, dass alle gerade Zahlen einschließlich n, aber exklusive 0 auf der Konsole ausgibt
 //      Hinweis: Sie können den Modulo Operator '%' verwenden, um den Rest einer Division zu erhalten. Bsp: 4 % 2 => 0; 5 % 2 => 1.
 const n = 22;
 for (let l = 1; l <= 22; l += 1) {
   if (l % 2 === 0) {
	 console.log(l);
   }
 }

 // 1.c  Schreiben Sie ein Programm, dass alle Elemente in umgekehrter Reihenfolge auf der Konsole ausgibt.
 //      Fügen Sie außerdem in der Ausgabe ein Leerzeichen zwischen jedem Element hinzu.
 const array = [
   "dog",
   "lazy",
   "the",
   "over",
   "jumps",
   "fox",
   "brown",
   "quick",
   "The",
 ];

 let reversedArray = [];
 for (let l = array.length - 1; l >= 0; l -= 1) {
   reversedArray.push(array[l]);
   if (l !== 0) {
	 reversedArray.push("");
   }
 }

 console.log(reversedArray);
