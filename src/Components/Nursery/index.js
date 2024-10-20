import './index.css'
import { useRef } from 'react';

const nurseryPlants = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_70_nocevc.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_69_m0jrw5.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_71_tjtqbq.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_70_nocevc.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_69_m0jrw5.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 9,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_71_tjtqbq.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 10,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 11,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 12,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_70_nocevc.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 13,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_69_m0jrw5.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 14,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_71_tjtqbq.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 15,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 16,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 17,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_70_nocevc.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 18,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_69_m0jrw5.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 19,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_71_tjtqbq.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    },
    {
        id: 20,
        image: "https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Ellipse_68_wbk18k.png",
        description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum"
    }
];


const Nursery = () => {
    const scrollRef = useRef(null);

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="Nursery">
            <h1>Nursery</h1>
            <div className="scroll-container" ref={scrollRef}>
                {nurseryPlants.map(plant => (
                    <div key={plant.id} className="plant-card">
                        <img src={plant.image} alt={`Plant ${plant.id}`} className="plant-image" />
                        <p className="plant-description">{plant.description}</p>
                    </div>
                ))}
            </div>
            <button className="scroll-button left" onClick={() => scroll(-200)}>{"<"}</button>
            <button className="scroll-button right" onClick={() => scroll(200)}>{">"}</button>
        </div>
    );
}

export default Nursery