// import React from "react";
import "./sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"> Admin Arrosa'Je</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <HomeIcon className="icon" />
                        <span>Accueil</span>
                    </li>
                    <p className="title">UTILISATEURS</p>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Utilisateurs</span>
                    </li>
                    <li>
                        <AnnouncementIcon className="icon" />
                        <span>Annonces</span>
                    </li>
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