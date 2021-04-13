// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 49
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let pocetCiselVeSportce = 49;

for (let i = 1; i <= pocetCiselVeSportce; i = i + 1) {
    osudi.push(i);
}

// z osudi vyberu 7 náhodných čísel
let tazenaCisla = [];

for (let i = 0; i < 7; i++) {
    let vyherniIndex = Math.floor(Math.random() * osudi.length);
    let vyherniCislo = osudi[vyherniIndex];

    tazenaCisla.push(vyherniCislo);
    osudi.splice(vyherniIndex, 1);

    console.log(osudi);
    console.log(tazenaCisla);
}

// vypíšu do HTML