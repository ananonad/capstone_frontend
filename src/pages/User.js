import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

const User = () => {
    const [newForm, setNewFrom] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [user, setUser] = useState(null)

    const URL = "https://capstone-project22.herokuapp.com/user";

    const getUser = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setUser(data);
    };
    const createUser = async(user) => {
        await fetch(URL + "/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(user),
        });
        getUser();
    };
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(newForm);
        setNewForm({
            username: "",
            email: "",
            password: "",
        });
    const loaded = () => {
        return user,map((user) => (
            <div key={user.id} className="user">
                <Link to ={`/user/${user._id}`}><h1>{user.name}</h1></Link>
                <img src={user.image} alt={user.name} />
                <h3>{user.password}</h3>
                </div>
        ))
    };


    return (
        <section>
            <form onSubmit={handleSumbit}>
                <input
                type="text"
                value={newForm.username}
                name="username"
                placeholder="username"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.email}
                name="email"
                placeholder="email"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.password}
                name="password"
                placeholder="password"
                onChange={handleChange}
                />
                <input type="submit" value="Create User"/>
                </form>
        </section>
    )
    }
}
export default User;