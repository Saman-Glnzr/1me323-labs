//Kort beskrivning: 
// Denna kod importerar funktioner från math.js och använder dem för att utföra grundläggande matematiska operationer. " * as tar alla funktioner i math.js och använder dess funktion i import utan att importera allting var för sig, medans " as" byter namn på funktionerna när man importerar"



import { add as kuk, subtract as Subtraction } from './math.js'; 
console.log("addition: ", kuk(5, 3));
console.log("subtraction: ", Subtraction(5, 3));

import * as MathUtils from './math.js';
console.log("Using MathUtils - Addition: ", MathUtils.add(7, 2));
console.log("Using MathUtils - PI: ", MathUtils.PI);
console.log("Using MathUtils - Division: ", MathUtils.default(10, 2));





//Frågor

   // När är det lämpligt att använda namngivna exporter vs default export?

   //Svar: Namngivna exporter är lämpliga när du vill exportera flera funktioner eller variabler från en modul, vilket gör det möjligt att importera endast de delar som behövs. Default export är användbar när en modul huvudsakligen fokuserar på en enda funktion eller klass, vilket gör importen enklare och mer intuitiv. Tänk som class och ID system


   // Vilka fördelar ger moduler jämfört med att ha all kod i en fil?

   //Svar: Moduler skapar en bättre struktur av koden som gör det enklare att kontrollera/ändra på saker.

    //Hur kan namespace-import hjälpa till att organisera kod?
    //Svar: Name-space import gör så att man kan sammanfatta och använda all logiskt funktion i en fil utan att behöva importera allting var för sig, detta leder till bättre struktur
