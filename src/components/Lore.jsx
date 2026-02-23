import Scroll from "./Scroll";
import RepelText from "./RepelText";
import { Link } from "react-router-dom";

export default function Lore({ progress }) {
    const y = (1 - progress) * 100;

    return(
        <div className="lore" style={{transform: `translateY(${y}%)`}}>
            <Scroll text="scroll down!" />
            <div className="lore-container">
                <RepelText text="ZESTYville" />
                <p> is a secluded commune where oranges outnumber humans ~6,000:1.</p>
                <p> As a result, the current tax ranges from 85% to 115% depending 
                    on one's income per annum.</p>
                <Link to={"/characters"}>
                    <button> see the residents of ZESTYville!</button>
                </Link>
            </div>
        </div>
    )
}