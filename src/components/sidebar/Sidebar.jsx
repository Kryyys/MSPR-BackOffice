// import React from "react";
import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo"> Admin Arrosa'Je</span>
            </div>
            <div className="center">
                <ul>
                    <li>
                        <span>Titre 1</span>
                    </li>
                    <li>
                        <span>Titre 1</span>
                    </li>
                    <li>
                        <span>Titre 1</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">Couleur ?</div>
        </div>
    )
}

export default Sidebar