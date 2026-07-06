import "./SavedScholarships.css";
import Navbar from "../Navbar/Navbar";
import savedScholarships from "../SavedScholarships/savedScholarshipData";
import { Link } from "react-router-dom";

export default function SavedScholarships(){
    return (
        <> 
           <Navbar/>
           <div className="saved-page">
               <h1>Saved Scholarships</h1>
                  <p className="subtitle">
                    Scholarships you've bookmarked for later.
                </p>
                <div className="saved-list">
                    {savedScholarships.map((item)=>(
                        <div className="saved-card" key={item.id}>
                             <img
                               src={item.logo}
                               alt={item.company}
                              className="saved-logo"
                             />

                       <div className="saved-info">

                            <h2>{item.title}</h2>

                            <h3>{item.company}</h3>

                           <span className="badge">
                               {item.category}
                           </span>

                      </div>
                             <div className="saved-right">

                                <p>
                                    <strong>Amount:</strong> {item.amount}
                                </p>

                                <p>
                                    <strong>Country:</strong> {item.country}
                                </p>

                                <p>
                                    <strong>Deadline:</strong> {item.deadline}
                                </p>

                                <Link to={`/scholarships/${item.id}`}>
                                    <button className="view-btn">
                                        View Scholarship
                                    </button>
                                </Link>

                            </div>

                        </div>
                    ))}
                </div>
           </div>

        </>
    )
}