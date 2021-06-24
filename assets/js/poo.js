class Pokemon {
    // Con el # convertimos a la variable en privada, si no la ponemos es publica
    #name = "";
    #type = "";
    #evolutions = [];

    constructor(name, type, evolutions){
        // La palabra this sirve para hacer referencia al objeto que se ejecuta actualemnete
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    // Creamos un metodo para cambiar los valores 
    set name (value) {
        this.#name = value;
    }

    // Creamos un metodo para cambiar los valores (Atributos privados pero metodo publico)
    set type (value) {
        this.#type = value;
    }

    // Creamos un metodo para cambiar los valores, set recibe un paremetro pero no tiene un retorno
    set evolutions (value) {
        this.#evolutions = value;
    }

    // get no recibe parametros pero tiene un retorno, es un metodo para consultar
    get name(){
        return this.#name;
    }


    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }

    // Creamos un metodo llamado attack
    attack(){
        return `${this.#name}, esta atacando`;
    }

    // Creamos otro metodo
    evolve(evolution = 0){
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = 'No puedo evolucionar';

        if(EVOLVE){
            message = `${this.#name}, esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }
}

const charmander = new Pokemon('Charmander', 'Fuego', ['Charmeleon', 'Charizar']);
const SQuirtle = new Pokemon('Squirtle', 'Agua', ['Wartotle', 'Blastoise']);

// Aqui estamos llamando a los metodos no a los atributos, ya que si intentamos llamar a los
// atributos directamente no nos deja ya que los atributos son privados (#)
console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
console.log(charmander.name);
