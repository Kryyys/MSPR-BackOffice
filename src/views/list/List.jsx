// VIEW DE LA LISTE DE TOUS LES UTILISATEURS

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import profil from '../../assets/profil.png';

const List = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('http://localhost:1212/backoffice/users')
        .then(response => response.json())
        .then(data => {
          setUsers(data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des utilisateurs :', error);
        });
    }, []);

    // CONSTANTE POUR LA SUPPRESSION D'UTILISATEUR
    const handleDeleteUser = async (id) => {
        try {
          // Effectuer une requête DELETE pour supprimer un utilisateur
          const response = await fetch(`http://localhost:1212/backoffice/remove/${id}`, {
            method: 'DELETE',
          });
    
          // Vérifier si la suppression a réussi (statut 200 OK)
          if (response.ok) {
            // Actualiser la liste des utilisateurs après la suppression
            const updatedUsers = users.filter(user => user.idUser !== id);
            setUsers(updatedUsers);
          } else {
            console.error('Erreur lors de la suppression de l\'utilisateur');
          }
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
      };

      // VIEW
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <h1>Liste des utilisateurs</h1>
          <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Pseudo</th>
              <th>Email</th>
              <th>Rôles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.idUser}>
                <td className="lastNameImg">
                  <img src={profil} alt="Photo de profil" />   
                  {user.lastName}
                </td>
                <td>{user.firstName}</td>
                <td>{user.usersName}</td>
                <td>{user.email}</td>
                <td>{user.idRole}</td>
                <td className="actionButton">
                    <Link to={`informations/${user.idUser}`}>
                        <span className="UserButton"><VisibilityIcon/></span>
                    </Link>
                    <Link to={`modify/${user.idUser}`}>
                      <span className="UserButton"><ModeEditIcon/></span>
                    </Link>
                    <span className="deleteUserButton"><DeleteIcon onClick={() => handleDeleteUser(user.idUser)}/></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </div>
    )
}

export default List