import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setLoading(true)
            })
    }, [])
    const emailS = {
        fontWeight: "bold"
    }



    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/userDelete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {

                        alert('user delete successfully')
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)

                    }
                })
        }
    }
    return (
        <div>
            <h3>User Available {loading ? users.length : "..."}</h3>
            {loading ?
                users.map(user =>

                    <p key={user._id}>

                        {user.name} :- <span style={emailS}> {user.email}</span>
                        <button onClick={() => handleDelete(`${user._id}`)} >X</button>
                        <NavLink to={`/updateUser/${user._id}`}><button>update</button></NavLink>

                    </p>

                ) : "Loading..."
            }
        </div>
    );
};

export default User;