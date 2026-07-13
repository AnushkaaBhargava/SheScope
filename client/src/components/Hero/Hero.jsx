import "./Hero.css";

export default function Hero() {
    return (
        <div className="hero">

            <div className="hero-left">

                <h1>Find Scholarships that match your Dreams!</h1>

                <p>
                    Discover scholarships designed to support women in higher
                    education and career growth.
                </p>

                {/* KEEP YOUR ORIGINAL SEARCH BAR HERE */}
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search scholarships..."
                    />

                    <button>Search</button>
                </div>

            </div>

            <div className="hero-right">
                <img
                    src="/student.svg"
                    alt="Student Illustration"
                />
            </div>

        </div>
    );
}