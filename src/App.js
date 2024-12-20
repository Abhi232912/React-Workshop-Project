import React from 'react';

import Categories from './Pages/Categories';
import Contact from './Pages/Contact';
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
      <Route path="/Contact-US" element={<Contact />} />
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
