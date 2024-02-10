import React, { useState } from "react";
import "./signUp.scss";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        usersName: "",
        email: "",
        city: "",
        bio: "",
        password: "",
        idRole: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:1212/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            console.log("Signup successful!");
        } catch (error) {
            console.error("Signup failed:", error.message);
        }
    };

    return (
        <div className="signup">
            <h2>SIGNUP</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
                <input type="text" name="usersName" placeholder="Username" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="city" placeholder="City" onChange={handleChange} />
                <textarea name="bio" placeholder="Bio" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="text" name="idRole" placeholder="Role" onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log In</a></p>
        </div>
    );
};

export default SignUp;
