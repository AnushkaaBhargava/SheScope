import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Scholarships from "./pages/Scholarships";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route
        path="/scholarships"
        element={<Scholarships/>}
        />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
