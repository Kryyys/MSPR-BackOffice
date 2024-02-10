import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./modifyUser.scss"

function ModifyUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    usersName: '',
    email: '',
    city: '',
    idRole: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1212/backoffice/edit/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching user:', error));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:1212/backoffice/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update user');
        }
        return response.json();
      })
      .then(data => {
        console.log('User updated successfully:', data);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className="modifyUser">
    <Sidebar />
    <div className="muContainer">
        <Navbar />
        <h1>Modifier les informations</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="usersName">Username:</label>
        <input
          type="text"
          id="usersName"
          name="usersName"
          value={user.usersName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="idRole">Role:</label>
        <input
          type="number"
          id="idRole"
          name="idRole"
          value={user.idRole}
          onChange={handleChange}
          min="1"
          max="10"
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>

    </div>
    </div>
  );
}

export default ModifyUser;
