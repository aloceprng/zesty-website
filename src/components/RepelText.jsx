import { useMemo, useCallback, useRef, useState } from "react";

export default function RepelText({ text }) {
    const strength = 32;
    const radius = 90;
    const splitChars = (text) => text.split("");
    const chars = useMemo(() => splitChars(text), [text]);
    const [offsets, setOffsets] = useState(() => chars.map(() => ({ x: 0, y: 0 })));
    const charsRef = useRef([]);

    const onMouseMove = useCallback((e) => {
        setOffsets(charsRef.current.map((el) => {
            if (!el) return { x: 0, y: 0 };
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > radius) return { x: 0, y: 0 };
            const force = (1 - dist / radius) * strength;

            return { x: -(dx / dist) * force, y: -(dy / dist) * force };
        }));
    }, [strength, radius]);

    const onMouseLeave = useCallback(() => {
        setOffsets(chars.map(() => ({ x: 0, y: 0 })));
    }, [chars]);

    return (
        <div className="text" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            {chars.map((ch, i) => (
                <span
                    key={i}
                    ref={el => charsRef.current[i] = el}
                    style={{
                        display: "inline-block",
                        whiteSpace: ch === " " ? "pre" : "normal",
                        transform: `translate(${offsets[i]?.x ?? 0}px, ${offsets[i]?.y ?? 0}px)`,
                        transition: "transform 0.3s cubic-bezier(.22,1,.36,1)"}}>
                    {ch}
                </span>
            ))}
        </div>
    );
    }
