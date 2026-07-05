import Navbar from "../components/Navbar/Navbar";
import './Scholarships.css'
import scholarships from '../components/ScholarshipCard/scholarship'
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard"
import { useState } from "react";
export default function Scholarships() {

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

    return (

        <>

            <Navbar />
            <div className="scholarship-page">
                <h1>Browse Scholarships</h1>

              <p>
               Discover scholarships from top companies and organizations.
              </p>
                <div className="filters">
                <select value={selectedCategory}
                  onChange={(e)=>setSelectedCategory(e.target.value)}
                >
                    <option value="All">All categories</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medical">Medical</option>
                    <option value="Arts">Arts</option>

                </select>

                 <select value={selectedCountry}
                    onChange={(e)=>setSelectedCountry(e.target.value)}
                 >
                    <option value="All">All countries</option>
                   <option value="India">India</option>
                   <option value="USA">USA</option>
                   <option value="Canada">Canada</option>
                 </select>

                  <select value={selectedAmount}
                     onChange={(e)=>setSelectedAmount(e.target.value)}
                  >
                    <option value="All">All amounts</option>
                    <option value="₹25,1000">₹25,000+</option>
                    <option value="₹50,000">₹50,000+</option>
                    <option value="₹1,00,000">₹1,00,000+</option>
                 </select>

              </div>

                  <p>Selected Category: {selectedCategory}</p>
              
                  <h3 className="results">
                     Showing {filteredScholarships.length} Scholarships
                 </h3>

                  <div className="cards">

                {filteredScholarships.map((scholarship) => (

                     <ScholarshipCard

                        id={scholarship.id}

                        logo={scholarship.logo}
                         company={scholarship.company}
                        title={scholarship.title}
                        category={scholarship.category}
                        amount={scholarship.amount}
                        country={scholarship.country}
                        deadline={scholarship.deadline}

                    />

                  ))}

    </div>
            </div>
            

        </>

    );

}