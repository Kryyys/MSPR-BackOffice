// PAGE ACCUEIL

// import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom';
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1>Bonjour Marine</h1>

                {/* BOUTONS */}
                <div className="main">
                    <div className="section">
                        <Link to="http://localhost:3000/users" className="linkStyle">
                            Voir les utilisateurs
                        </Link>
                    </div>
                    <div className="section">
                        <Link to="http://localhost:3000/offers" className="linkStyle">
                            Voir les annonces
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home