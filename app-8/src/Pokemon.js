import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Pokemon() {
    const [name, setName] = useState("")
    const [types, setTypes] = useState([])
    const [abilities, updateAbilities] = useState([])
    const [sprites, updateSprites] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/jellicent")
        .then(res => {
            updateAbilities([...res.data.abilities])
            setName(res.data.name)
            setTypes([...res.data.types])
            updateSprites([res.data.sprites])
        })
    }, [])

    const capitalize = string => string.slice(0,1).toUpperCase() + string.slice(1, string.length)

    const format = string => string.replace("-", " ")

    const displayTypes = () => {
        const typesDisplay = types.map(type => capitalize(type.type.name))
        if (typesDisplay.length > 1) {
            typesDisplay.splice(1, 0, "/")
        }
        return typesDisplay
    }

    const renderAbilities = () => {
        const abilArray = abilities.map(ab => capitalize(ab.ability.name)).map(ab => format(ab))
        if (abilArray.length === 3) {
            abilArray.splice(1, 0, " | ")
            abilArray.splice(3, 0, " | ")
        } else {
            abilArray.splice(1, 0, " | ")
        }
        return abilArray
    }

    const renderSprites = () => {
        const spriteObj = sprites[0]
        let keys;
        if (spriteObj) {
            keys = Object.keys(spriteObj).map(key => {
                if (key !== "other" && key !== "versions") {
                    return key
                }
            }).filter(key => key) 
        }
        if (keys) {
            return keys.map((key, idx) => <img key={idx} src={spriteObj[key]} />)
        }
    }

    return (
        <div>
            <h1>Name: {capitalize(name)}</h1>
            <h2>Type: {displayTypes()}</h2>
            <h3>Abilities: {renderAbilities()}</h3>
            <h4>Sprites</h4>
            <div>
                {renderSprites()}
            </div>
        </div>
    )
}
