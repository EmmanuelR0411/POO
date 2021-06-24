class Pokedex {
    getinfo(name){
        fetch (`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data => {
            // Desestructuración, permite sacar elementos dentro de un arreglo
            const [DATA = null] = data;
            const MESSAGE = DATA || `El pokemon ${name} no existe`;
            console.log(MESSAGE);
        })
    }
}

const POKEDEX = new Pokedex ();
POKEDEX.getinfo('charmander');