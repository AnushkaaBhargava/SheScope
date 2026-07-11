import {Link,useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./ScholarshipDetails.css";
import { useEffect, useState } from "react";
import api from "../api/api";
import { FaCheckCircle } from "react-icons/fa";

export default function ScholarshipDetails(){

    const {id}=useParams();

    const [scholarship,setScholarship]=useState(null);

    useEffect(()=>{
        const fetchScholarship=async (req,res)=>{

            try{
                
                const res=await api.get(`/scholarships/${id}`);
                setScholarship(res.data);
            }
            catch(error){
                 console.log(error);
            }
        };

        fetchScholarship();
    },[]);

   
    const handleSave = async () => {

    try {

        await api.post("/saved", {
            scholarship: scholarship._id
        });

        alert("Scholarship saved successfully!");

    } catch (error) {

        alert(error.response?.data?.message || "Something went wrong");

    }

};

      if (!scholarship) {
        return (
            <>
                <Navbar />
                <h2>Scholarship not found.</h2>
            </>
        );
    }

    return(
        <>

           <Navbar />
          <section className='details-page'>

            <Link to="/scholarships" className="back-btn">
                    ← Back to Scholarships
            </Link>

            <div className="details-header">
                <div className="company">

                    <img 
                       src={scholarship.logo}
                       alt={scholarship.company}
                    />
                    <div>
                        <h1>{scholarship.title}</h1>
                        <h3>{scholarship.company}</h3>
                        <span className="badge">
                            {scholarship.category}
                        </span>
                    </div>

                    
                </div>

            </div>

            <div className="details-container">
                <div className="left">
                     <section>

                            <h2>About this Scholarship</h2>

                            <p>
                               {scholarship.description}
                            </p>

                    </section>

                     <section>
                       <h2>Eligibility</h2>

                    <div className="section-content">
                     <ul>
                        {scholarship.eligibility.map((item, index) => (
                       <li key={index}>
                       <FaCheckCircle className="check-icon" />
                    {item}
                </li>
            ))}
        </ul>

    </div>
</section>
                         <section>
                       <h2>Required Documents</h2>

                    <div className="section-content">
                     <ul>
                        {scholarship.requiredDocuments.map((item, index) => (
                       <li key={index}>
                       <FaCheckCircle className="check-icon" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
</section>
                </div>
                
                 <div className="right">
                  
                    <div className="info-card">

                            <h2>Quick Information</h2>

                            <p><strong>Amount:</strong> {scholarship.amount}</p>

                            <p><strong>Country:</strong> {scholarship.country}</p>

                            <p>
                              <strong>Deadline:</strong>{" "}
                              {new Date(scholarship.deadline).toLocaleDateString()}
                            </p>

                            <Link to={`/apply/${id}`} className="apply-btn">
                                Apply Now!
                             </Link>

                             <button
                             className="save-btn"
                             onClick={handleSave}
                                >
                             ❤️ Save Scholarship
                            </button>

                        </div>

                    </div>

            </div>
            
        </section>
    </>
    )
}