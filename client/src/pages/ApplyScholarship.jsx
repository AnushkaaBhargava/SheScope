import "./ApplyScholarship.css";
import Navbar from "../components/Navbar/Navbar";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function ApplyScholarship(){

    const {id}=useParams();
    const [scholarship, setScholarship] = useState(null);

    useEffect(()=>{
        const fetchScholarship=async ()=>{
              try{
                 
                 const res=await api.get(`/scholarships/${id}`)
                 setScholarship(res.data);
              }catch(error){
                  console.log(error);
              }
        }

        fetchScholarship();
    },[id]);

    const [formData,setFormData]=useState({
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
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
       });
    
}

const handleSubmit=async(e)=>{


    e.preventDefault();
     
     try{

        const res=await api.post("/applications",{
            scholarship:id,
            sop:formData.sop,
            resume:""
        })

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

     }catch(error){
           console.log(error);
     }

        
}

if (!scholarship) {
    return (
        <>
            <Navbar />
            <h2>Loading...</h2>
        </>
    );
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

                <p><strong>Deadline:</strong> {new Date(scholarship.deadline).toLocaleDateString()}</p>

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