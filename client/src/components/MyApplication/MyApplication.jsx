import "./MyApplication.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/api";


export default function MyApplication(){

    
const [applications, setApplications] = useState([]);

useEffect(()=>{

    const fetchApplications=async()=>{
        try{

            const res=await api.get("/applications/my");
            console.log(res.data)
            setApplications(res.data.applications);

        }catch(error){
            console.log(error);
        }
    };

    fetchApplications();
},[])


    return(
        <>
         <Navbar/>
         <div className="application">
              <div className="application-header">

    <div className="application-left">

        <h1>My Applications</h1>

        <p className="subtitle">
            Track the progress of all your scholarship applications.
        </p>

    </div>

    <div className="application-right">

        <img
            src="/applications.svg"
            alt="Applications Illustration"
        />

    </div>

</div>
            <div className="application-list">
                {applications.map((item)=>(
                    <div className="application-card"
                         key={item._id}
                    >

                        <div className="left-section">

                                <img
                                    src={item.scholarship?.logo}
                                    alt={item.scholarship?.company}
                                    className="company-logo"
                                />

                                <div className="application-info">

                                    <h2>{item.scholarship?.title}</h2>

                                    <h3>{item.scholarship?.company}</h3>

                                    <p>
                                        <strong>Category:</strong> {item.scholarship?.category}
                                    </p>

                                    <p>
                                        <strong>Amount:</strong> {item.scholarship?.amount}
                                    </p>

                                    <p>
                                        <strong>Country:</strong> {item.scholarship?.country}
                                    </p>

                                    <p>
                                        <strong>Applied On:</strong> {new Date(item.createdAt).toLocaleDateString()}
                                    </p>

                                </div>

                            </div>
                            <div className="right-section">
                                 <h3>Application Progress</h3>
                             <div className="timeline">
                                        <div className="step completed">
                                   ✅ Application Submitted
                                 </div>

                                 <div className={`step ${
                                item.progress>=2 ? "completed":""
                                }`}>
                                    {item.progress >= 2 ? "✅" : "○"} Under Review
                                 </div>

                                 <div className={`step ${ item.progress>=3? "completed":""}`}>
                                    {item.progress >= 3 ? "✅" : "○"} Interview
                                 </div>

                                  <div className={`step ${ item.progress>=4? "completed":""}`}>
                                    {item.progress >= 4 ? "✅" : "○"} Final Decision
                                 </div>
                            </div>
                               <span
                                  className={`status ${item.status
                                     .toLowerCase()
                                     .replace(/\s/g, "-")}`}
>
                                   {item.status}
                               </span>

                             <button className="view-btn">
                                 View Details
                              </button>

                                 
                            </div>



                    </div>
                ))}
            </div>

         </div>
        
        </>
    )
}