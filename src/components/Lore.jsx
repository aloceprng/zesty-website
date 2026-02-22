export default function Lore({ progress }) {
    const y = (1 - progress) * 100;

    return(
        <div className="lore" style={{transform: `translateY(${y}%)`}}>
            <p> lore </p>
        </div>
    )
}