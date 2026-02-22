import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Character() {
    const { characterName } = useParams();
    const [character, setCharacter] = useState(null);
    console.log(characterName);

    useEffect(() => {
        fetch('/characters.json')
        .then(response => response.json())
        .then(data => {                
            const ch = data.find(ch => characterName === ch.name);
            setCharacter(ch);
        })
    }, [characterName])

    return (
        <p>hi {character?.name}</p>
    )
}