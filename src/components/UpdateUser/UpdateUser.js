import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user,setUser] = useState({})
    const {id} = useParams();

     useEffect(() => {
            const url = `http://localhost:5000/updateUser/${id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
     },[])



   const updateName = e => {
        
         const updatedName = e.target.value;
         const updateUser = {name: updatedName, email: user.email}
         setUser(updateUser)
   }
   const updateEmail = e => {
         const updatedEmail = e.target.value;
         const updateUser = {name:user.name, email:updatedEmail}
         setUser(updateUser)
   }

     const handleUpdateUser = e => {
           
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
             method:"PUT",
             headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
            if(data.modifiedCount > 0){
                  alert("update documents successfully")
            }
      })

           
             e.preventDefault()
     }

    return (
        <div>
                <h3> update : {user.name}</h3>
                <p>{id}</p>

                <form onSubmit={handleUpdateUser}>

                      <input type="text" onChange={updateName} value={user.name || ''} />
                      <br/>
                      <input type="email" onChange={updateEmail} value={user.email || ''} />
                      <br/>
                      <input type="submit" value="submit" />
                </form>
        </div>
    );
};

export default UpdateUser;