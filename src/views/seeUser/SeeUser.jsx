// import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./seeUser.scss"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profil from "../../assets/profil.png";
import { Link } from 'react-router-dom';

const SeeUser = () => {
    const { idUser } = useParams();
    // const [redirectToUsers, setRedirectToUsers] = useState(false);

    // Déclarer une variable d'état pour stocker les informations de l'utilisateur
    const [userData, setUserData] = useState(null);

    // Utiliser useEffect pour effectuer une action asynchrone après le rendu initial
    useEffect(() => {
        // Définir une fonction asynchrone pour récupérer les informations de l'utilisateur depuis l'API
        const fetchData = async () => {
            try {
                // Effectuer une requête HTTP pour récupérer les informations de l'utilisateur
                const response = await fetch(`http://localhost:1212/backoffice/users/info/${idUser}`);

                const data = await response.json();

                // Mettre à jour l'état avec les informations de l'utilisateur récupérées
                setUserData(data);
                // console.log('userData 1 :', userData);
            } catch (error) {
                // Gérer les erreurs lors de la récupération des informations de l'utilisateur
                console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
            }
        };

        // Appeler la fonction asynchrone
        fetchData();
    }, [idUser]); // L'effet doit être réexécuté si l'id de l'utilisateur change

    if (userData === null) {
        return <p>Chargement en cours...</p>;
    }

    // console.log('userData 2 :', userData);
    // console.log('userData 2.1', userData[0]);
    const handleDeleteUser = async (id) => {
        try {
            // Effectuer une requête DELETE pour supprimer un utilisateur
            const response = await fetch(`http://localhost:1212/backoffice/remove/${id}`, {
                method: 'DELETE',
            });

            // Vérifier si la suppression a réussi (statut 200 OK)
            if (response.ok) {
                // Rediriger l'utilisateur vers la page /users après la suppression
                window.location.href = '/users';
            } else {
                console.error('Erreur lors de la suppression de l\'utilisateur');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
    };


    // Afficher les informations de l'utilisateur une fois qu'elles sont disponibles
    return (
        <div className="seeUser">
            <Sidebar />

            <div className="seeUserContainer">
                <Navbar />

                <h1>Informations de l'utilisateur {userData[0].lastName} {userData[0].firstName}</h1>

                <span className="avatarUser"><img src={profil} alt="Avatar de l'utilisateur" /></span>

                <table className="userTable">
                    <tbody>
                        <tr>
                            <td className="bold">Nom</td>
                            <td>{userData[0].lastName}</td>
                        </tr>
                        <tr>
                            <td className="bold">Prénom</td>
                            <td>{userData[0].firstName}</td>
                        </tr>
                        <tr>
                            <td className="bold">Pseudo</td>
                            <td>{userData[0].usersName}</td>
                        </tr>
                        <tr>
                            <td className="bold">Email</td>
                            <td>{userData[0].email}</td>
                        </tr>
                        <tr>
                            <td className="bold">Rôle</td>
                            <td>{userData[0].name}</td>
                        </tr>
                        <tr>
                            <td className="bold">Ville</td>
                            <td>{userData[0].city}</td>
                        </tr>
                        <tr>
                            <td className="bold">Création du compte</td>
                            <td>{userData[0].created_at}</td>
                        </tr>
                        <tr>
                            <td className="bold">Bio</td>
                            <td>{userData[0].bio}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="usersButton">
                    <Link to={`/users`}>
                        <button className="seeUsers">Retour aux utilisateurs</button>
                    </Link>
                    <button className="deleteUser" onClick={() => handleDeleteUser(idUser)}>Supprimer l'utilisateur</button>
                </div>

            </div>
        </div>
    );
};

export default SeeUser;
