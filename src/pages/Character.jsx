import Model from "../components/Model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
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
        <div className="character-page">
            <div className="character-container">
                <Canvas camera={{ position: [0, 0.5, 2], fov: 80 }}>
                    <ambientLight intensity={0.2} color="0xfdfff4"/>
                    <directionalLight position={[5, 10, 5]} intensity={0.2} />
                    <OrbitControls 
                        autoRotate={true}
                        autoRotateSpeed={8}
                    />
                    <Environment preset="city" />
                    <Model name={character?.name} state="default" position={[0, -1.25, 0]}/>
                </Canvas>
            </div>
            <div className="text-container">
                <p> {character?.description}</p>
                <p> favourite things: {character?.favourite}</p>
            </div>
            
        </div>
    )
}