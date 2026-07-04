import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ScholarshipCard from "../components/ScholarshipCard/ScholarshipCard";
import scholarships from '../components/ScholarshipCard/scholarship'
import './Home.css'

export default function Home(){
    return (
        <>
        <Navbar/>
        <Hero/>

         <section className="featured">
           <h2>Featured Scholarships</h2>
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
        </section>
        </>

    );
}