//  COMPOSANTS DE LA SIDEBAR

// import React from "react";
import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin Arrosa'Je</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {/* ACCUEIL */}
                    <li>
                        <HomeIcon className="icon" />
                        <span><Link to="http://localhost:3000/" className="linkStyle">Accueil</Link></span>
                    </li>

                    {/* UTILISATEURS */}
                    <p className="title">UTILISATEURS</p>
                    <li>
                        
                        <PersonIcon className="icon" />
                        <span><Link to="http://localhost:3000/users" className="linkStyle">Utilisateurs</Link></span>
                    </li>
                    <li>
                        <AnnouncementIcon className="icon" />
                        <span><Link to="http://localhost:3000/offers" className="linkStyle">Annonces</Link></span>
                    </li>

                    {/* BOTANISTES */}
                    <p className="title">BOTANISTES</p>
                    <li>
                        
                        <PersonIcon className="icon" />
                        <span>Demandes</span>
                    </li>

                    {/* PERSONNEL */}
                    <p className="title">PERSONNEL</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profil</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Paramètres</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Déconnexion</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar