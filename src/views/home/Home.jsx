// import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import { Link } from 'react-router-dom';
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1>Bonjour Marine</h1>

                <div className="main">
                    <div className="section">
                        Voir les utilisateurs
                    </div>
                    <div className="section">
                        Voir les annonces
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home