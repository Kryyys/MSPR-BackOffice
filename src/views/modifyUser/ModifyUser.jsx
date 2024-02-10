import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import "./modifyUser.scss";

const ModifyUser = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        usersName: "",
        email: "",
        city: "",
        idRole: 1 
    });

    const { idUser } = useParams();

    useEffect(() => {
        fetch(`http://localhost:1212/backoffice/edit/${idUser}`)
            .then(response => response.json())
            .then(data => {
                setUser(data); 
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, [idUser]); 

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:1212/backoffice/edit/${idUser}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
    
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
    
            console.log('User updated successfully');
            window.location.href = '/users';
        } catch (error) {
            console.error('Error updating user:', error.message);
        }
    };
    

    return (
        <div className="modify">
            <Sidebar />
            <div className="muContainer">
                <Navbar />
                <h1>Modifier les informations</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Prénom:
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Nom:
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Nom d'utilisateur:
                        <input
                            type="text"
                            name="usersName"
                            value={user.usersName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ville:
                        <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Rôle:
                        <select name="idRole" value={user.idRole} onChange={handleChange}>
                            {/* Options du menu déroulant */}
                            {Array.from({ length: 10 }, (_, i) => i + 1).map(role => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyUser;
