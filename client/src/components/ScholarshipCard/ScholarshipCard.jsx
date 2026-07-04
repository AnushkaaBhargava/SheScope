import "./ScholarshipCard.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

export default function ScholarshipCard({
    logo,
    company,
    title,
    category,
    amount,
    country,
    deadline
}) {
    return (
        <div className="card">
            <div className="company-info">
                <div className="logo-box">
                 <img src={logo} alt={company}/>
                </div>
                <div>
                   <h3>{company}</h3>
                   <p className="category">{category}</p>
                </div>
                
            </div>

             <h3 className="scholarship-title">
              {title}
             </h3>

            <div className="details">
              <div className="detail">
                <FaMoneyBillWave style={{ color: "#16A34A",marginRight:"10px"}} />
                 <span>{amount}</span>
              </div>

               <div className="detail">
                  <FaMapMarkerAlt  style={{ color: "#DC2626" ,marginRight:"10px"}}/>
                  <span>{country}</span>
               </div>

               <div className="detail">
                 <FaCalendarAlt style={{ color: "#2563EB" ,marginRight:"10px" }} />
                <span>{deadline}</span>
               </div>
            </div>
            <button className="apply-btn" >
                View Details 
            </button>
        </div>
    );
}