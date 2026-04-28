import { useState, useEffect } from 'react';
import {Sidebar} from './componets/Sidebar';
import {Header} from './componets/Header';
import {gamesData} from "./data/games";
import {GameCard} from './componets/GameCard';
import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css';

function App() {
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [activeTab, setActiveTab] = useState("dash");

    const filteredGames = gamesData
    .filter((game) => activeTab === "dash" || favorites.includes(game.id))
    .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));


      const toggleFavorites = (id) => {

        setFavorites((prev) => prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id])

      }


      useEffect(() => {
        AOS.init({
          duration: 1000,
          onde: false,
          easing: "ease-in-out"
        })
      },[]);


  return (
    <div className="vortex-app">
      <Sidebar/>

      <main className="vortex-main">
        <Header search = {search} setSearch = {setSearch} />
        <div className="vortex-content">

          <h2 className="section-title">
            {search ? `Resultados para: ${search}` :  "Jogos Recentes"}
          </h2>

          <div className="vortex-grid">

            {filteredGames.length > 0 ? (
              filteredGames.map((g, index) => (
                <GameCard 
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  index={index}
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toggleFavorites(g.id)}
                />
              ))
            ): (
              <p style={{color: "#94a3b8"}}>Nenhum item encontrado...</p>
            )
           }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;
