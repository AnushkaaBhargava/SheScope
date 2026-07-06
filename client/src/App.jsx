import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Scholarships from "./pages/Scholarships";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import ApplyScholarship from "./pages/ApplyScholarship";
import MyApplication from "./components/MyApplication/MyApplication";
import Dashboard from "./components/Dashboard/Dashboard";
import SavedScholarships from "./components/SavedScholarships/SavedScholarships";
import Profile from "./components/Profile/Profile";


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

        <Route
         path="/applications"
        element={<MyApplication/>}
        />

        <Route
         path="/dashboard"
        element={<Dashboard/>}
        />

        
        <Route
         path="/saved"
        element={<SavedScholarships/>}
        />

        <Route
         path="/profile"
        element={<Profile/>}
        />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
