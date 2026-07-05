import {Link,useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import scholarships from "../components/ScholarshipCard/scholarship";
import "./ScholarshipDetails.css";
import { FaCheckCircle } from "react-icons/fa";

export default function ScholarshipDetails(){

    const {id}=useParams();

    const scholarship=scholarships.find((item)=>item.id===Number(id));

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
                                This scholarship supports talented women pursuing
                                higher education in STEM fields. It aims to
                                encourage innovation and empower future leaders.
                            </p>

                    </section>

                     <section>
                      <h2>Eligibility</h2>

                      <div className="section-content">
                    <ul>
                       <li><FaCheckCircle className="check-icon" /> Female students</li>
                       <li><FaCheckCircle className="check-icon" /> Undergraduate degree</li>
                    </ul>

                    <ul>
                       <li><FaCheckCircle className="check-icon" /> Minimum CGPA 8.0</li>
                       <li><FaCheckCircle className="check-icon" /> Passionate about technology</li>
                   </ul>
                 </div>
                 </section>
                         <section>

                            <h2>Required Documents</h2>
                          <div className="section-content">
                            <ul>

                                <li><FaCheckCircle className="check-icon" />Resume</li>

                                <li><FaCheckCircle className="check-icon" />Latest Marksheet</li>
                            </ul>
                            <ul>
                                <li><FaCheckCircle className="check-icon" />Government ID</li>

                                <li><FaCheckCircle className="check-icon" />Income Certificate</li>

                            </ul>
                          </div>
                        </section>
                </div>
                 <div className="right">

                        <div className="info-card">

                            <h2>Quick Information</h2>

                            <p><strong>Amount:</strong> {scholarship.amount}</p>

                            <p><strong>Country:</strong> {scholarship.country}</p>

                            <p><strong>Deadline:</strong> {scholarship.deadline}</p>

                            <button className="apply-btn">
                                Apply Now
                            </button>

                        </div>

                    </div>

            </div>
            
        </section>
    </>
    )
}