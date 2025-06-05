import { receptLista } from "./receptekLista.js";
import Receptek from "./receptek.js";

const szuloElem = document.querySelector("#receptek");
const receptekObj = new Receptek(receptLista, szuloElem);

document.querySelector("#kedvencekLink").addEventListener("click", (e) => {
  e.preventDefault();
  receptekObj.csakKedvencek();
});

document.querySelector("#osszesLink").addEventListener("click", (e) => {
  e.preventDefault();
  receptekObj.osszes();
});
