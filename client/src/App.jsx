import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Scholarships from "./pages/Scholarships";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScholarshipDetails from "./pages/ScholarshipDetails";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route
        path="/scholarships"
        element={<Scholarships/>}
        />
        <Route
        path="/scholarships/:id"
        element={<ScholarshipDetails/>}
        />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
