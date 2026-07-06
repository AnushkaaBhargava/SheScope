import "./Profile.css";
import Navbar from "../Navbar/Navbar";

export default function Profile() {
    return (
        <>
            <Navbar />

            <div className="profile-page">

                <h1>My Profile</h1>

                <p className="subtitle">
                    Manage your personal information and academic details.
                </p>

                <div className="profile-card">

                    <div className="profile-header">

                        <div className="profile-image">
                            👩
                        </div>

                        <div>
                            <h2>Anushkaa Bhargava</h2>
                            <p>Computer Science Engineering</p>
                        </div>

                    </div>

                    <div className="profile-grid">

                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value="Anushkaa Bhargava"
                                readOnly
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value="anushkaa@gmail.com"
                                readOnly
                            />
                        </div>

                        <div className="input-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                value="+91 9876543210"
                                readOnly
                            />
                        </div>

                        <div className="input-group">
                            <label>Branch</label>
                            <input
                                type="text"
                                value="Computer Science"
                                readOnly
                            />
                        </div>

                        <div className="input-group">
                            <label>Year</label>
                            <input
                                type="text"
                                value="3rd Year"
                                readOnly
                            />
                        </div>

                        <div className="input-group">
                            <label>CGPA</label>
                            <input
                                type="text"
                                value="8.9"
                                readOnly
                            />
                        </div>

                    </div>

                    <div className="resume-section">

                        <h3>Resume</h3>

                        <button className="resume-btn">
                            Upload Resume
                        </button>

                    </div>

                    <div className="sop-section">

                        <h3>Statement of Purpose</h3>

                        <textarea
                            rows="6"
                            placeholder="Write about your achievements, goals and why you deserve this scholarship..."
                        ></textarea>

                    </div>

                    <button className="edit-btn">
                        Edit Profile
                    </button>

                </div>

            </div>
        </>
    );
}