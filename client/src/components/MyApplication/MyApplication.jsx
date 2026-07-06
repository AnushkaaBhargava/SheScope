import "./MyApplication.css";
import Navbar from "../Navbar/Navbar";
import applications from "../MyApplication/applications";

export default function MyApplication(){
    return(
        <>
         <Navbar/>
         <div className="application">
             <h1>My Applications</h1>

                <p className="subtitle">
                    Track the progress of all your scholarship applications.
                </p>
            <div className="application-list">
                {applications.map((item)=>(
                    <div className="application-card"
                         key={item.id}
                    >

                        <div className="left-section">

                                <img
                                    src={item.logo}
                                    alt={item.company}
                                    className="company-logo"
                                />

                                <div className="application-info">

                                    <h2>{item.title}</h2>

                                    <h3>{item.company}</h3>

                                    <p>
                                        <strong>Category:</strong> {item.category}
                                    </p>

                                    <p>
                                        <strong>Amount:</strong> {item.amount}
                                    </p>

                                    <p>
                                        <strong>Country:</strong> {item.country}
                                    </p>

                                    <p>
                                        <strong>Applied On:</strong> {item.appliedDate}
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