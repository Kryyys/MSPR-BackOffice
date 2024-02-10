import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./offers.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Plant from '../../assets/plant.jpeg';

const Offers = () => {
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1212/backoffice/adv')
            .then(response => response.json())
            .then(data => {
                setAdvertisements(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            });
    }, []);

    const handleDeleteAdvertisement = async (idAdvertisement) => {
        try {
            const response = await fetch(`http://localhost:1212/backoffice/remove/${idAdvertisement}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Mettre à jour la liste des annonces après la suppression
                const updatedAdvertisements = advertisements.filter(ad => ad.idAdvertisement !== idAdvertisement);
                setAdvertisements(updatedAdvertisements);
            } else {
                console.error('Erreur lors de la suppression de l\'annonce');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'annonce :', error);
        }
    };

    return (
        <div className="offers">
            <Sidebar />
            <div className="offersContainer">
                <Navbar />
                <h1>Liste des Annonces</h1>
                <div className="advertisement-container">
                    {advertisements.map((ad, index) => (
                        <div key={ad.idAdvertisement} className="advertisement-bubble">
                            <img src={Plant} alt="Photo de l'annonce" className="profile-image" />
                            <div className="advertisement-info">
                                <h3>{ad.title}</h3>
                                <p><strong>Date de création:</strong> {ad.created_at}</p>
                                <p><strong>Date de début:</strong> {ad.start_date}</p>
                                <p><strong>Date de fin:</strong> {ad.end_date}</p>
                                <p><strong>Description:</strong> {ad.description}</p>
                                <div className="offersButton">
                                    <Link to={`/informationsOffer/${ad.idAdvertisement}`}>
                                        <button className="seeOffers">Voir l'annonce</button>
                                    </Link>
                                    <button className="deleteOffers" onClick={() => handleDeleteAdvertisement(ad.idAdvertisement)}>Supprimer l'annonce</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers;
