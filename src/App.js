import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import User from './components/User/User';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {


  return (
    <div className="App">
           <Header></Header>
           <Routes>
              <Route path="/"  element={<Home/>}></Route>
              <Route path="/addUser" element={<AddUser/>}></Route>
              <Route path="/user" element={<User/>}></Route>
              <Route path="/updateUser/:id" element={<UpdateUser/>}></Route>
           </Routes>
    </div>
  );
}

export default App;
