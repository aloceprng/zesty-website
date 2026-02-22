import Lore from "../components/Lore";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";

export default function Home() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const raw = window.scrollY / window.innerHeight;
            setProgress(Math.min(1, Math.max(0, raw)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    
    }, []);

    return ( //home-page is sticky wrapper
        <>
            <div className="home-page page"> 
                <Hero />
                <Lore progress={progress}/>
            </div>
            <div className="spacer" />
            <div className="spacer" />
        </>
    )
}