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
import ProtectedRoute from "./components/ProtectedRoute";


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
           element={
           <ProtectedRoute>
            <ApplyScholarship />
           </ProtectedRoute>
         }
        />

         <Route
           path="/applications"
           element={
           <ProtectedRoute>
            <MyApplication />
          </ProtectedRoute>
           }
          />

        <Route
         path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        
        }
        />

        
        <Route
         path="/saved"
        element={
           <ProtectedRoute>
            <SavedScholarships/>
          </ProtectedRoute>
        }
        />

        <Route
         path="/profile"
        element={
           <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        }
        />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
