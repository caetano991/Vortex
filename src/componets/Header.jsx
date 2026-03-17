import './Header.css';
import { Bell, Zap } from 'lucide-react';

export function Header() {
    return(
        <header className="vortex-header">
            <div className="user-info">
                <h3>Bem-Vindo, <span className="destaque">Ricardo</span></h3>
                <p>Status: Online no Level 01</p>
            </div>
            <div className="header-actions">
                <div className="badge">
                    <Zap size={14}/>
                    <span>Pro Player</span>
                </div>
                <button className="notificacoes">
                    <Bell size={20}/>
                </button>
            </div>
        </header>
    )
}