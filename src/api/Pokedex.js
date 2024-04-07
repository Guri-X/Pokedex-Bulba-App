import axios from "axios";

const Pokedex = () => ({

    getPokemon(nameOrID) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrID}/`)
    }

})

export default Pokedex;