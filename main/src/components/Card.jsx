import { useState } from "react";
import "../../src/styles/card.css";
import handleLinks from "./links";

// eslint-disable-next-line react/prop-types
export default function Card({ img, title, repo, site }) {
    const [, setCard] = useState('overlay')

    function showCard(e) {
        e.stopPropagation();
        const overlay = e.currentTarget.querySelector('#overlay');
        
        setCard((prevCard) => {
            const newCard = prevCard === 'overlay' ? 'show p-4' : 'overlay';
            overlay.className = newCard;
            return newCard;
        });
    }

    return (
        <>
            <div onMouseEnter={showCard} onMouseLeave={showCard} className="card shadow-md flex-wrap">
                <img src={img} alt="" />
                <div id='overlay' className="overlay">
                    <h3 className="text-5xl bg-transparent" onClick={() => handleLinks(site)}>{title}</h3>
                    <i
                        onClick={() => handleLinks(repo)}
                        className="fa-brands fa-github fa-2x"
                    ></i>
                    <p className="block" >MERN stack</p>
                </div>
            </div>
        </>
    );
}
