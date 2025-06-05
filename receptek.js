import Recept from "./Recept.js";

export default class Receptek {
  #lista = [];
  #szuloElem;

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.megjelenit(this.#lista);
  }

  megjelenit(lista) {
    this.#szuloElem.innerHTML = "";
    lista.forEach((recept, index) => {
      new Recept(recept, this.#szuloElem, index);
    });
  }

  csakKedvencek() {
    const kedvencLista = this.#lista.filter(recept => recept.kedvenc);
    this.megjelenit(kedvencLista);
  }

  osszes() {
    this.megjelenit(this.#lista);
  }
}
