import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import applications from "../MyApplication/applications";

export default function Dashboard(){

    const totalapplications=applications.length;

    const accepted=applications.filter((item)=>item.status==="Accepted").length;
    const underReview=applications.filter((item)=>item.status==="Under Review").length;

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
                    <h2>{totalapplications}</h2>
                    <p>Total Applications</p>
                </div>

                <div className="stat-card">

                    <h2>{accepted}</h2>

                    <p>Accepted</p>

                </div>

                  <div className="stat-card">

                        <h2>{underReview}</h2>

                        <p>Under Review</p>

                </div>
            </div>

            <div className="recent-applications">
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
            </div>

               <div className="deadline-card">

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

                </div>
          </div>
        </>
    )
}