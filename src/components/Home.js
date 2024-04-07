import { useState } from "react";
import Pokedex from "../api/Pokedex";
import { PokeDetails } from "./PokeDetails";

export function Home() {
    const [pokeName, setPokeName] = useState("")
    const [pokeData, setPokeData] = useState({})

    const handlePokeInput = (evt) => {
        setPokeName(evt.currentTarget.value);
    }

    const getPokeDetails = () => {
        Pokedex().getPokemon(pokeName).then((data) => {
            setPokeData(data.data)
            setPokeName("")
        })
        .catch((err) => {
            console.error("Couldn't fetch pokemon data!")
            console.error(err)
        })
    }

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className={`${pokeData.id ? "" : "h-screen"} flex flex-col items-center`}>

                    <div className="mt-10">
                        <label className="input input-bordered flex items-center gap-2 w-96 bg-blue-500 text-black">
                            <input 
                                className="placeholder-black" 
                                type="text" 
                                placeholder="Enter Pokemon Name" 
                                value={pokeName}
                                onChange={handlePokeInput}
                            />

                            <button 
                                className="btn btn-primary ml-32"
                                onClick={getPokeDetails}
                            >
                                Search
                            </button>
                        </label>
                    </div>
                    
                </div>
            </div>

            <div>
                {
                    pokeData.id ? <PokeDetails pokeData={pokeData} /> : ""
                }
            </div>
        </div>
    )
}