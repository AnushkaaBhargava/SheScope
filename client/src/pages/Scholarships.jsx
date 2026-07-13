import Navbar from "../components/Navbar/Navbar";
import './Scholarships.css'
import { useState, useEffect } from "react";
import api from "../api/api";
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard"
export default function Scholarships() {
    
    const [scholarships, setScholarships] = useState([]);
    const [selectedCategory,setSelectedCategory]=useState("All");
    const [selectedCountry, setSelectedCountry] = useState("All");
    const [selectedAmount, setSelectedAmount] = useState("All");

    const filteredScholarships=scholarships.filter((scholarship)=>{
        if(selectedCategory!=="All" && selectedCategory!==scholarship.category){
            return false;
        }
        if(selectedCountry!=="All" && selectedCountry!==scholarship.country){
            return false;
        }
        if(selectedAmount!=="All" && selectedAmount!==scholarship.amount){
            return false;
        }
        return true;
    })

    useEffect(()=>{
        const fetchScholarships=async (req,res)=>{
             try{
            
                const res=await api.get("/scholarships");
                console.log(res.data);
              setScholarships(res.data);
               }catch(error){

                 console.log(error);

        }
        };

        fetchScholarships();
      
    },[]);

    return (

        <>

            <Navbar />
            <div className="scholarship-page">
                    <div className="scholarship-hero">

    <div className="hero-left">

        <h1>Browse Scholarships</h1>

        <p>
            Discover scholarships from top companies and organizations.
        </p>

        <div className="filters">

            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Arts">Arts</option>
            </select>

            <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
            >
                <option value="All">All Countries</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
            </select>

            <select
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
            >
                <option value="All">All Amounts</option>
                <option value="₹25,000">₹25,000+</option>
                <option value="₹50,000">₹50,000+</option>
                <option value="₹1,00,000">₹1,00,000+</option>
            </select>

               <p className="selected-category">
            Selected Category: {selectedCategory}
               </p>

        </div>


    </div>

    <div className="hero-right">
        <img
            src="/laptop.svg"
            alt="Scholarship Illustration"
        />
    </div>

</div>
              

                  <div className="cards">

                {filteredScholarships.map((scholarship) => (

                     <ScholarshipCard
                        key={scholarship._id}
                        id={scholarship._id}

                        logo={scholarship.logo}
                         company={scholarship.company}
                        title={scholarship.title}
                        category={scholarship.category}
                        amount={scholarship.amount}
                        country={scholarship.country}
                        deadline={new Date(scholarship.deadline).toLocaleDateString()}

                    />

                  ))}

    </div>
            </div>
            

        </>

    );

}