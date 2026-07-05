import "./ApplyScholarship.css";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import scholarships from "../components/ScholarshipCard/scholarship";

export default function ApplyScholarship(){

    const {id}=useParams();

    const scholarship=scholarships.find(
        (item)=>item.id===Number(id)
    );

    const [formData,setformData]=useState({
        "fullName":"",
        "email":"",
        "phone":"",
        "college":"",
        "branch":"",
        "year":"",
        "cgpa":"",
        "sop":""
    }
    );

    function handleChange(e){
        setformData({
            ...formData,
            [e.target.name]:e.target.value
       });
    
}

function handleSubmit(e){
     e.preventDefault();
     console.log(formData);

        alert("Application Submitted Successfully!");

        setFormData({
            fullName: "",
            email: "",
            phone: "",
            college: "",
            branch: "",
            year: "",
            cgpa: "",
            sop: ""
        });
}

return(
    <> 
      <Navbar/>
         <div className="apply-page">

    <h1 className="page-title">Apply for Scholarship</h1>

    <div className="apply-container">

        {/* LEFT */}

        <div className="form-card">

            <h2>{scholarship.title}</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="college"
                    placeholder="College Name"
                    value={formData.college}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    value={formData.branch}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="year"
                    placeholder="Current Year"
                    value={formData.year}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="cgpa"
                    placeholder="CGPA"
                    value={formData.cgpa}
                    onChange={handleChange}
                />

                <label>Resume</label>

                <input type="file" />

                <label>Latest Marksheet</label>

                <input type="file" />

                <textarea
                    rows="5"
                    name="sop"
                    placeholder="Statement of Purpose"
                    value={formData.sop}
                    onChange={handleChange}
                />

                <button type="submit">
                    Submit Application
                </button>

            </form>

        </div>

        {/* RIGHT */}

        <div className="overview-card">

            <img
                src={scholarship.logo}
                alt={scholarship.company}
                className="company-logo"
            />

            <h2>{scholarship.company}</h2>

            <h3>{scholarship.title}</h3>

            <div className="info">

                <p><strong>Amount:</strong> {scholarship.amount}</p>

                <p><strong>Country:</strong> {scholarship.country}</p>

                <p><strong>Deadline:</strong> {scholarship.deadline}</p>

            </div>

            <hr />

            <h3>Eligibility</h3>

            <ul className="eligibility-list">

                <li>✔ Female Students</li>

                <li>✔ Undergraduate Degree</li>

                <li>✔ Minimum CGPA 8.0</li>

                <li>✔ Passionate about Technology</li>

            </ul>

        </div>

    </div>

</div>
    </>
)
}