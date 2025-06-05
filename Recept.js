export default class Recept {


    #receptObjLista = [];

  constructor(lista, szuloElem, reszletesElem) {    //(nev, kep, leiras, hozzavalok, kedvenc, kategoria)
    this.receptObjLista = rObjLista();
    this.nev = nev;
    this.kep = kep;
    this.kedvenc = kedvencBeallit();
    this.kategoria = kategoria;
  }

  rObjLista(lista){
    for (let i = 0; i < lista.length; i++){
        const nev = lista[i].nev;
        const kep = lista[i].kep;
        const leiras = lista[i].leiras;
        const hozzavalok = lista[i].hozzavalok;
        const kedvenc = lista[i].kedvenc;
        const kategoria = lista[i].kategoria;

        const ujRecept = new Recept(nev, kep, leiras, hozzavalok, kedvenc, kategoria);
        
        this.#receptObjLista[i] = ujRecept;
    }
  }

   megjelenit() {
        
        
    }

  kedvencBeallit() {
    this.kedvenc = !this.kedvenc;
  }
}