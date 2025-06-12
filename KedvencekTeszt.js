import Receptek from "../receptek.js";

(function csakKedvencekTeszt() {
    const tesztLista = [
        {
            nev: "teszt nem kedvenc recept",
            kep: "kepek/brownie.jpg",
            leiras: "Nem kedvenc recept.",
            hozzavalok: [],
            kedvenc: false,
            kategoria: "Főétel",
        },
        {
            nev: "Teszt kedvenc recept1",
            kep: "kepek/cezarsali.jpg",
            leiras: "Kedvenc recept.",
            hozzavalok: [],
            kedvenc: true,
            kategoria: "Desszert",
        },
        {
            nev: "teszt kedvenc recept2",
            kep: "kepek/csirkepaprikas.jpg",
            leiras: "Kedvenc recept.",
            hozzavalok: [],
            kedvenc: true,
            kategoria: "Leves",
        },
    ];
    // szuloelem letreh---> csak teszthez, h ne modositsd a domot
    const tesztSzuloElem = document.createElement("div");

    const receptek = new Receptek(tesztLista, tesztSzuloElem);
    

    // recept pld - szuloelemhez hozzarend
    receptek.csakKedvencek();



    //kedvencek jol jelennek e meg
    const megjelenitettElemek = tesztSzuloElem.querySelectorAll("div[adatIndex]");
    const megjelenitettSzovegek = Array.from(megjelenitettElemek).map(
        (elem) => elem.querySelector("h5").textContent
    );

    console.assert(
        megjelenitettElemek.length === 2,
        `hiba: A kedvencek szama nem egyezik (${megjelenitettElemek.length} találat, elvárt: 2)`
    );


    console.assert(
        megjelenitettSzovegek.includes("Teszt kedvenc recept1") &&
         megjelenitettSzovegek.includes("teszt kedvenc recept2"),
        "hiba: Nem a megfelelő receptek jelentek meg"
    );

  console.log("a teszt lefutott");
})();
