import Model from "../components/Model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RepelText from "../components/RepelText";

export default function Character() {
    const { characterName } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        setCharacter(null);
        fetch('/characters.json')
        .then(response => response.json())
        .then(data => {                
            const ch = data.find(ch => characterName === ch.name);
            setCharacter(ch);
        })
    }, [characterName])

    if (!character) return <div>Loading...</div>;

    return (
        <div className="character-page page">
            <div className="character-container">
                <Canvas camera={{ position: [0, 0.5, 2], fov: 80 }}>
                    <ambientLight intensity={0.2} color="0xfdfff4"/>
                    <directionalLight position={[5, 10, 5]} intensity={0.2} />
                    <OrbitControls 
                        autoRotate={true}
                        autoRotateSpeed={8}
                        />
                    <Environment preset="city" />
                    <Model name={character.name} state="default" position={[0, -1.25, 0]}/>
                </Canvas>
            </div>
            <div className="text-container">
                <Link to={"/characters"}>back to characters</Link>
                <RepelText text={`${character.name}`}/>
                <p> {character.description}</p>
                <span> favourite things: {character.favourite}</span>
                <p id="statement"> "{character.statement}" </p>
            </div>

        </div>
    )
}