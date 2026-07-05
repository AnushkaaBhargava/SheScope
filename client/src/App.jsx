import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Scholarships from "./pages/Scholarships";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import ApplyScholarship from "./pages/ApplyScholarship";


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

        <Route
        path="/apply/:id"
        element={<ApplyScholarship/>}
        />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
