import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleSubmit = e => {
        e.preventDefault()
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const newUser = {name, email}
            fetch('http://localhost:5000/users', {
                method:"POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                  body:JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(result => {
                 if(result){
                     alert('user add successfully')
                     e.target.reset()
                 }
            })
    }
    return (
        <div>
                <h3>please add user</h3>
                <form  onSubmit={handleSubmit}>
                       <input type="text" placeholder='Name' ref={nameRef} />
                       <br/>
                       <br/>
                       <input type="email" placeholder='Email' ref={emailRef} />
                       <br/>
                       <br/>
                       <input type="submit" value='submit' />
                </form>
        </div>
    );
};

export default AddUser;