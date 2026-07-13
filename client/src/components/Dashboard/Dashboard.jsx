import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Dashboard(){

    const [dashboard,setDashboard]=useState(null);
    const [applications,setApplications]=useState([]);

    useEffect(()=>{

        const fetchDashboard= async()=>{
              try{

            const res=await api.get("/dashboard");
            setDashboard(res.data);

            const appRes=await api.get("/applications/my")
            setApplications(appRes.data.applications);

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
              <div className="dashboard-header">

    <div className="dashboard-left">

        <h1>Dashboard</h1>

        <p className="subtitle">
            Welcome back! Here's an overview of your scholarship journey. 👋
        </p>

    </div>

    <div className="dashboard-right">

        <img
            src="/dashboard.svg"
            alt="Dashboard Illustration"
        />

    </div>

</div>
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
               <div className="recent-applications">

    <h2>Recent Applications</h2>

    {applications.length === 0 ? (

        <p>No applications yet.</p>

    ) : (

        applications.slice(0, 3).map((item) => (

            <div
                className="recent-card"
                key={item._id}
            >

                <div>

                    <h3>{item.scholarship?.title}</h3>

                    <p>{item.scholarship?.company}</p>

                    <small>
                        Applied:
                        {" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                    </small>

                </div>

                <span
                    className={`status ${item.status.toLowerCase()}`}
                >
                    {item.status}
                </span>

            </div>

        ))

    )}

</div>
          </div>
        </>
    )
}