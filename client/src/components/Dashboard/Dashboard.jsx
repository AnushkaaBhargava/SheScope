import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Dashboard(){

    const [dashboard,setDashboard]=useState(null);

    useEffect(()=>{

        const fetchDashboard= async()=>{
              try{

            const res=await api.get("/dashboard");
            console.log(res.data);
            setDashboard(res.data);

        }catch(error){
            console.log(error);
        }

        };

        fetchDashboard();
      
    },[]);

    return(
        <>
          <Navbar/>
          <div className="dashboard">
            <h1>Dashboard</h1>
            <p className="subtitle">
                    Welcome back! Here's an overview of your scholarship journey.
            </p>
            <div className="stats">
                <div className="stat-card">
                    <h2>{dashboard?.totalApplications}</h2>
                    <p>Total Applications</p>
                </div>

                <div className="stat-card">

                    <h2>{dashboard?.acceptedApplications}</h2>

                    <p>Accepted</p>

                </div>

                  <div className="stat-card">

                        <h2>{dashboard?.pendingApplications}</h2>

                        <p>Under Review</p>

                </div>
            </div>

            {/* <div className="recent-applications">
                 <h2>Recent Applications</h2>
                 {applications.map((item=>(
                   <div className="recent-card">

                    <div className="left">

                              <img
                                src={item.logo}
                               alt={item.company}
                                className="recent-logo"
                                />

                       <div>

                         <h3>{item.title}</h3>

                         <p>{item.company}</p>

                       <small>Applied: {item.appliedDate}</small>

                      </div>

                  </div>

                  <span
                      className={`status ${item.status
                       .toLowerCase()
                       .replace(/\s/g, "-")}`}
                    >
                   {item.status}
                   </span>

           </div>
                 )))}
            </div> */}

               {/* <div className="deadline-card">

                    <h2>Upcoming Deadlines</h2>

                    {applications.map((item) => (

                        <div
                            className="deadline-item"
                            key={item.id}
                        >

                            <span>{item.title}</span>

                            <strong>{item.deadline}</strong>

                        </div>

                    ))}

                </div> */}
          </div>
        </>
    )
}