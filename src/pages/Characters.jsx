import Model from "../components/Model";
import Scroll from "../components/Scroll";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [activeCharacter, setActiveCharacter] = useState(null);

    useEffect(() => {
        fetch('/characters.json')
        .then(response => response.json())
        .then(data => setCharacters(data));
    }, []);

    return(
        <div className="characters-page page" style={{ height: window.innerHeight - 90 }}>
            <div className="name-container" onMouseLeave={() => setActiveCharacter(null)}>
                {characters.map((c) => (
                    <Link to={`/characters/${c.name}`} key={c.name}
                    onMouseEnter={() => setActiveCharacter(c)}>
                        <p>{c.name}</p> 
                    </Link>  
                ))}
            </div>
            <div className="character-container">
                {activeCharacter ? 
                    <Canvas camera={{ position: [0, 0.5, 2], fov: 80 }} >
                        <ambientLight intensity={0.2} color="0xfdfff4"/>
                        <directionalLight position={[5, 10, 5]} intensity={0.2} />
                        <OrbitControls 
                            autoRotate={true}
                            autoRotateSpeed={8}
                        />
                        <Environment preset="city" />
                        <Model name={activeCharacter.name} state="default" position={[0, -1.25, 0]}/>
                    </Canvas> : <Scroll text="< select a character!"/>
                }
            </div>
        </div>
    )
}