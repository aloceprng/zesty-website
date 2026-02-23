import processWall1 from '../assets/images/process wall 1.jpg'
import processWall2 from '../assets/images/process wall 2.jpg'
import processWall3 from '../assets/images/process wall 3.jpg'
import process1 from '../assets/images/process 1.jpg'
import process2 from '../assets/images/process 2.jpg'
import box1 from '../assets/images/box 1.jpg'
import box2 from '../assets/images/box 2.jpg'
import box3 from '../assets/images/box 3.jpg'
import productPile3 from '../assets/images/product pile 3.jpg'
import machine4 from '../assets/images/machine 4.jpg'
import poster1 from '../assets/images/poster 1.jpg'
import poster2 from '../assets/images/poster 2.jpg'
import poster3 from '../assets/images/poster 3.jpg'
import hamartia1 from '../assets/images/hamartia 1.jpg'
import hamartia2 from '../assets/images/hamartia 2.jpg'

const processImages = [processWall1, processWall2, processWall3, process1, process2];
const galleryImages = [box2, box3, productPile3, machine4, box1, poster1, poster2, poster3, hamartia1, hamartia2];

export default function Carousel({ type }) {
    if (type === "process") {
        return (
            <div className="carousel process-container">
                {processImages.map((src, i) => (
                    <img key={i} src={src} />
                ))}
            </div>
        )
    }

    if (type === "gallery") {
        return (
            <div className="carousel gallery-container">
                {galleryImages.map((src, i) => (
                    <img key={i} src={src} />
                ))}
            </div>
        )
    }
}