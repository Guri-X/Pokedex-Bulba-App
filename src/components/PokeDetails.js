import { useEffect, useState } from "react"

export function PokeDetails({ pokeData }) {
    const [pokeStats, setPokeStats] = useState([])
    const [pokeType, setPokeType] = useState("")
    const [pokeAbilities, setPokeAbilities] = useState("")
    const [pokeMoves, setPokeMoves] = useState([])
    
    const pokeImg = pokeData.sprites.other.dream_world.front_default

    // Pokemon Stats
    useEffect(() => {
        const pStats = []

        pokeData.stats.forEach((st) => {
            const statValue = st.base_stat
            const statName = st.stat.name.toUpperCase()

            pStats.push(`${statName}: ${statValue}`)
        })

        setPokeStats(pStats)
    }, [pokeData.stats])

    // Pokemon Type
    useEffect(() => {
        const pTypes = []

        pokeData.types.forEach((typ) => {
            const typName = typ.type.name.toUpperCase()

            pTypes.push(typName)
        })

        setPokeType(pTypes.join(", "))
    }, [pokeData.types])

    // Pokemon Abilities
    useEffect(() => {
        const pAbilities = []

        pokeData.abilities.forEach((ab) => {
            const abName = ab.ability.name.toUpperCase()

            pAbilities.push(abName)
        })

        setPokeAbilities(pAbilities.join(", "))
    }, [pokeData.abilities])

    // Pokemon Moves
    useEffect(() => {
        const pMoves = []

        pokeData.moves.forEach((mv) => {
            const mvName = mv.move.name.toUpperCase()

            pMoves.push(mvName)
        })

        setPokeMoves(pMoves)
    }, [pokeData.moves])

    return (
        <div className="text-black">
            <div className="border-b-4 border-blue-500 mx-2 mt-10"></div>

            <div className="flex items-center justify-center mt-10">
                <div className="flex flex-col items-center">
                    
                    <div>
                        <span className="text-3xl font-bold">Pokemon: {pokeData.name}</span>
                    </div>

                    <div className="mt-10">
                        <img src={pokeImg} alt={`${pokeData.name} img`} height={200} width={200}></img>
                    </div>

                    <div className="flex">
                        <div className="mt-10">
                            <span className="text-2xl font-semibold">Basic Details</span>

                            <div className="border-b-4 border-blue-500"></div>

                            <div className="mt-5">
                                <ul className="list-disc">
                                    <li>Weight: {pokeData.weight}</li>
                                    <li>Height: {pokeData.height}</li>
                                    <li>Experience: {pokeData.base_experience}</li>
                                    <li>Type: {pokeType}</li>
                                    <li>Abilities: {pokeAbilities}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 ml-32">
                            <span className="text-2xl font-semibold">Stats</span>

                            <div className="border-b-4 border-blue-500"></div>

                            <div className="mt-5">
                                <ul className="list-disc">
                                    {
                                        pokeStats.map((stat) => (
                                            <li>{stat}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 ml-32">
                            <span className="text-2xl font-semibold">Moves</span>

                            <div className="border-b-4 border-blue-500"></div>

                            <div className="mt-5">
                                <ul className="list-disc">
                                    {
                                        pokeMoves.map((mv) => (
                                            <li>{mv}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-b-4 border-blue-500 mx-2 mt-10"></div>
        </div>
    )
}