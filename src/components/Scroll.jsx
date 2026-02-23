import { useState, useEffect } from "react";

export default function Scroll({ text }) {
    const [visible, setVisible] = useState(true);
    const letters = text.split("");
    const speed = 2.4;

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY < 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="scroll" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}>
            {letters.map((l, i) => (
                <span
                    key={i}
                    className="letter"
                    style={{ animationDelay: `${(i / letters.length) * speed * 0.6}s` }}>
                    {l === " " ? "\u00A0" : l}
                </span>
            ))}
        </div>
    )
}