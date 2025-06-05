export default class Recept {
  #obj = {};
  #szuloElem;
  #index;
  #receptElem;

  constructor(obj, szuloElem, index) {
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        this.#index = index;

        this.#receptElem = document.createElement("div");
        this.megjelenit();
        this.esemenykezelo();
  }

    megjelenit() {
        this.#receptElem.setAttribute("adatIndex", this.#index);
        this.#receptElem.innerHTML = `
            <h5>${this.#obj.nev}</h5>
            <div>
                <img src="${this.#obj.kep}" alt="${this.#obj.nev}">
            </div>
            <button class="kedvencGomb">
                ${this.#obj.kedvenc ? "💖 Kedvenc" : "🤍 Kedvenc"}
            </button>
            `;
        this.#szuloElem.appendChild(this.#receptElem);
    }



  esemenykezelo() {
        this.#receptElem.querySelector(".kedvencGomb").addEventListener("click", () => {
        this.#obj.kedvenc = !this.#obj.kedvenc;

        // Frissítem a gomb szövegét, hogy tükrözze az állapotot
        this.#receptElem.querySelector(".kedvencGomb").textContent = this.#obj.kedvenc ? "💖 Kedvenc" : "🤍 Kedvenc";

        // Kívánság esetén szórhatunk eseményt, pl. kedvenc változásra
        const event = new CustomEvent("kedvencValtozas", {
            detail: { index: this.#index, kedvenc: this.#obj.kedvenc }
        });
        window.dispatchEvent(event);
        });
  }
}
