import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Card from "./Components/Card"
import Detail from "./Routes/Detail";



function App() {

  return (
      <div id="App">
 
        <Navbar></Navbar>
                
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favs" element={<Favs></Favs>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/card" element={<Card></Card>}></Route>
        </Routes>
          
        <Footer/>
    
      </div>
  );
}

export default App;
