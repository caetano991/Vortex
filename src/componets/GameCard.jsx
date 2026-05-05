import './GameCard.css';
import { Heart, Play } from "lucide-react";

export function GameCard({ title, category, banner, index, isFavorite, onFavorite, onPlay}) {
    return (
        <div className="vortex-card"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" //define efeito
        data-aos-delay = {index * 50} // define o tempo de animação de cada card
       
        >

            <img src={banner} alt={title} className='card-img' />
           
            <button className={`favorite-btn ${isFavorite ? "active" : ''}`}
            onClick={onFavorite}
            >
            <Heart
            size={18}
            fill={isFavorite ? "#7c3aed" :  "transparent"}
            stroke={isFavorite ? "#7c3aed" :  "white"}
            />
           
            </button>

            <div className="card-info">
                <h4>{title}</h4>
                <p>{category}</p>
                <button className="play-btn" onClick={onPlay}><Play size={14} fill="white" /></button>
            </div>



        </div>
    )
}