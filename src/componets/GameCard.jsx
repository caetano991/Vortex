import "./Gamecard.css";
import { Heart, Play } from "lucide-react";

export function GameCard({
  title,
  category,
  banner,
  index,
  isFavorite,
  onFavorite,
}) {
  return (
    <div
      className="vortex-card"
      data-aos="fade-up"
      data-aos-delay="{ index * 100 }"
    >
      <img src={banner} alt={title} className="card-img" />

      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={onFavorite}
      >
        <Heart
          size={18}
          fill={isFavorite ? "#7c3aed" : "trasparent"}
          stroke={isFavorite ? "#7c3aed" : "white"}
        />
      </button>

      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>
        <button className="play-btn">
          <Play size={14} fill="white" />
        </button>
      </div>
    </div>
  );
}
