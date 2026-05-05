import { useState, useEffect } from "react";
import { Sidebar } from "./componets/Sidebar";
import { Header } from "./componets/Header";
import {gamesData} from "./data/games";
import { GameCard } from "./componets/GameCard";
import {GameModal} from "./componets/GameModal";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [search, setSearch] =useState ('');
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]); //Use states favoritos passo 1

  const [ selectedGame, setSelectedGame] = useState(null);

  const filteredGames = gamesData
  .filter ((game) => activeTab === "dash" || favorites.includes(game.id)) // inclui o Id no favoritos passo 2
  .filter((game)=>game.title.toLowerCase().includes(search.toLowerCase()));

  const toggleFavorite = (id) => {

      setFavorites((prev) => prev.includes (id) ? prev.filter((favId) => favId !==id) : [...prev, id],
     
     
      );
  };
   



   useEffect(()  => {
      AOS.init({
        duration: 1000,
        once: false,
        easing: "ease-in-out",

      })
   },[]);


    return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">

        <Header search = {search} setSearch={setSearch} />

        <div className="vortex-content">

          <h2 className="section-title">

            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Favoritos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          <div className="vortex-grid">
       
         {filteredGames.length > 0 ? (
          filteredGames.map((g,index) => (
            <GameCard
                key={g.id}
                title = {g.title}
                category={g.category}
                banner={g.banner}
                index ={index}
                isFavorite= {favorites.includes(g.id)}
                onFavorite= {() => toggleFavorite(g.id)}

                onPlay={()=> setSelectedGame(g)}
              />
          ))
         ): (
         <p style={{color:"#94a3b8"}}> Nenhum jogo encontrado...</p>

         )}


          </div>
        </div>
      </main>
      <GameModal game={selectedGame} onClose={()=> setSelectedGame(null)} />
    </div>
  );
}
export default App;