import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./seeOffer.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Plant from '../../assets/plant.jpeg';
import { useParams } from 'react-router-dom';

const SeeOffer = () => {

    const { idAdvertisement } = useParams();

    // Déclarer une variable d'état pour stocker les informations de l'utilisateur
    const [adData, setAdData] = useState(null);

    // Utiliser useEffect pour effectuer une action asynchrone après le rendu initial
    useEffect(() => {
        // Définir une fonction asynchrone pour récupérer les informations de l'utilisateur depuis l'API
        const fetchData = async () => {
            try {
                // Effectuer une requête HTTP pour récupérer les informations de l'utilisateur
                const response = await fetch(`http://localhost:1212/backoffice/adv_usr/${idAdvertisement}`);

                const data = await response.json();

                // Mettre à jour l'état avec les informations de l'utilisateur récupérées
                setAdData(data);
                // console.log(adData);

                // console.log('Data from API:', data);
                // console.log('AdData 1 :', adData);
            } catch (error) {
                // Gérer les erreurs lors de la récupération des informations de l'utilisateur
                console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
            }


        };

        // Appeler la fonction asynchrone
        fetchData();
    }, [idAdvertisement]); // L'effet doit être réexécuté si l'id de l'annonce change

    if (adData === null) {
        return <p>Chargement en cours...</p>;
    }

    console.log(adData);
    return (

        <div className="seeOffer">
            <Sidebar />
            <div className="seeOfferContainer">
                <Navbar />
                <h1>Annonce {adData[0].title}</h1>

                <div className="flexOffer">
                    <div className="offerImage">
                        <span className="adPicture"><img src={Plant} alt="Photos de l'annonce" /></span>
                    </div>
                    <div className="offerInfo">
                        <table className="offerTable">
                            <tbody>
                                <tr>
                                    <td className="bold">Ville</td>
                                    <td>{adData[0].city}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Utilisateur</td>
                                    <td>{adData[0].lastName} {adData[0].firstName}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Date de création</td>
                                    <td>{adData[0].created_at}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Date de début</td>
                                    <td>{adData[0].start_date}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Date de fin</td>
                                    <td>{adData[0].end_date}</td>
                                </tr>
                                <tr>
                                    <td className="bold">Description</td>
                                    <td>{adData[0].description}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="offersButton">
                                <Link to={`/offers`}>
                                    <button className="seeOffers">Retour aux annonces</button>
                                </Link>
                                    <button className="deleteOffers">Supprimer l'annonce</button>
                                </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SeeOffer;
