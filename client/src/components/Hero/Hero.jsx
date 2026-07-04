import "./Hero.css";

export default function Hero(){
    return (
        <div className="hero">
            <h1>Find Scholarships that match your Dreams!</h1>

             <p>
                Discover scholarships designed to support women
                in higher education and career growth.
            </p>
            
             <div className="search-box">
             <input
                type="text"
                placeholder="Search scholarships..."
                />

             <button>Search</button>
      </div>
        </div>
    );
}