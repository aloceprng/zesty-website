export default function Carousel({ type }) {    
    if (type === "process") {
        return (
            <div className="carousel process-container">
                <img src="src/assets/images/process wall 1.jpg" />
                <img src="src/assets/images/process wall 2.jpg" />
                <img src="src/assets/images/process wall 3.jpg" />
                <img src="src/assets/images/process wall.jpg" />
                <img src="src/assets/images/process 1.jpg" />
                <img src="src/assets/images/process 2.jpg" />
            </div>
        )
    }

    if (type === "gallery") {
        return (
            <div className="carousel gallery-container">
                <img src="src\assets\images\box 2.jpg"/>
                <img src="src\assets\images\box 3.jpg" />
                <img src="src\assets\images\product pile 3.jpg" />
                <img src="src\assets\images\machine 4.jpg" />
                <img src="src\assets\images\box 1.jpg" />
                <img src="src\assets\images\poster 1.jpg" />
                <img src="src\assets\images\poster 2.jpg" />
                <img src="src\assets\images\poster 3.jpg" />
                <img src="src\assets\images\hamartia 1.jpg" />
                <img src="src\assets\images\hamartia 2.jpg" />
            </div>
        )
    }

    if (type === "machine") {
        return (
            <div className="carousel machine-container">
                <img src="src\assets\images\process machine 1.jpg"/>
                <img src="src\assets\images\process machine 2.jpg"/>
                <img src="src\assets\images\process machine 3.jpg"/>
                <img src="src\assets\images\process machine 4.jpg"/>
            </div>
        )
    }
}