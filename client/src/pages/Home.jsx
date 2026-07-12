import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard";
import scholarships from '../components/ScholarshipCard/scholarship'
import './Home.css'
import { useState,useEffect } from "react";
import LoginModal from "../components/LoginModal/LoginModal";
import api from "../api/api";

export default function Home(){

    const [showLogin,setShowLogin]=useState(false);
    const [scholarships,setScholarships]=useState([]);

    useEffect(()=>{
      const fetchScholarships=async()=>{
        try{
          const res=await api.get("/scholarships");
          setScholarships(res.data);

        }catch(error){
          console.log(error);

        }
      };

      fetchScholarships();
    },[]);

    return (
        <>
        <Navbar onLoginClick={()=>setShowLogin(true)}/>
        <Hero/>

         <section className="featured">
           <h2>Featured Scholarships</h2>
           <div className="cards">
          {scholarships.map((scholarship) => (
            <ScholarshipCard
              id={scholarship._id}
              logo={scholarship?.logo}
              company={scholarship?.company}
              title={scholarship?.title}
              category={scholarship?.category}
              amount={scholarship?.amount}
              country={scholarship?.country}
              deadline={new Date(scholarship.deadline).toLocaleDateString()}
            />
          ))}
        </div>
        </section>
        {showLogin && (
          <LoginModal
            onClose={()=>setShowLogin(false)}
          />
        )}
        </>

    );
}