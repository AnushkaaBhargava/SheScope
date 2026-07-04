import Navbar from "../components/Navbar/Navbar";
import './Scholarships.css'
import scholarships from '../components/ScholarshipCard/scholarship'
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard"
export default function Scholarships() {

    return (

        <>

            <Navbar />
            <div className="scholarship-page">
                <h1>Browse Scholarships</h1>

              <p>
               Discover scholarships from top companies and organizations.
              </p>
                <div className="filters">
                <select>
                    <option>Category</option>
                    <option>Engineering</option>
                    <option>Medical</option>
                    <option>Arts</option>

                </select>

                 <select>
                    <option>Country</option>
                   <option>India</option>
                   <option>USA</option>
                   <option>Canada</option>
                 </select>

                  <select>
                    <option>Amount</option>
                    <option>₹25,000+</option>
                    <option>₹50,000+</option>
                    <option>₹1,00,000+</option>
                 </select>

              </div>
              
                  <h3 className="results">
                     Showing {scholarships.length} Scholarships
                 </h3>

                  <div className="cards">

                {scholarships.map((scholarship) => (

                     <ScholarshipCard

                        key={scholarship.id}

                        logo={scholarship.logo}
                         company={scholarship.company}
                        title={scholarship.title}
                        category={scholarship.category}
                        amount={scholarship.amount}
                        country={scholarship.country}
                        deadline={scholarship.deadline}

                    />

                  ))}

    </div>
            </div>
            

        </>

    );

}