import "./SavedScholarships.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import api from "../../api/api.js"

export default function SavedScholarships(){
    
    const [savedScholarships, setSavedScholarships] = useState([]);

    useEffect(()=>{
        const savedScholarships=async ()=>{
            try{
               
               const res=await api.get("/saved");
               setSavedScholarships(res.data.savedScholarships);
            }catch(error){
                console.log(error);
            }
        };

        savedScholarships();
    },[]);

    return (
        <> 
           <Navbar/>
           <div className="saved-page">
               <div className="saved-header">

    <div className="saved-left">

        <h1>Saved Scholarships</h1>

        <p className="subtitle">
            Scholarships you've bookmarked for later.
        </p>

    </div>

    <div className="saved-right-image">

        <img
            src="/saved.svg"   // your illustration
            alt="Saved Scholarships"
        />

    </div>

</div>
                <div className="saved-list">

    {savedScholarships.length === 0 ? (

        <div className="empty-state">
            <h2>No saved scholarships yet!</h2>
            <p>Browse scholarships and save your favorites to view them here.</p>

            <Link to="/scholarships">
                <button className="view-btn">
                    Browse Scholarships
                </button>
            </Link>
        </div>

    ) : (

        savedScholarships.map((item) => (
            <div className="saved-card" key={item._id}>

                <img
                    src={item.scholarship?.logo}
                    alt={item.scholarship?.company}
                    className="saved-logo"
                />

                <div className="saved-info">

                    <h2>{item.scholarship?.title}</h2>

                    <h3>{item.scholarship?.company}</h3>

                    <span className="badge">
                        {item.scholarship?.category}
                    </span>

                </div>

                <div className="saved-right">

                    <p><strong>Amount:</strong> {item.scholarship?.amount}</p>

                    <p><strong>Country:</strong> {item.scholarship?.country}</p>

                    <p>
                        <strong>Deadline:</strong>{" "}
                        {item.scholarship
                            ? new Date(item.scholarship.deadline).toLocaleDateString()
                            : "N/A"}
                    </p>

                    {item.scholarship && (
                        <Link to={`/scholarships/${item.scholarship._id}`}>
                            <button className="view-btn">
                                View Scholarship
                            </button>
                        </Link>
                    )}

                </div>

            </div>
        ))

    )}

</div>
           </div>

        </>
    )
}