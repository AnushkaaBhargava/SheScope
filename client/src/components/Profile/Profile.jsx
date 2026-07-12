import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Profile() {

    const [profile,setProfile]=useState(null);
    const [isEditing,setIsEditing]=useState(false);

    const handleChange = (e) => {
    setProfile({
        ...profile,
        [e.target.name]: e.target.value
       });
    };

    const handleSave=async()=>{
        try{
            const res=await api.put("/profile",{
                name:profile.name,
                phone:profile.phone,
                branch:profile.branch,
                cgpa:profile.cgpa,
                year:profile.year
            });

            alert("Profile updated successfully!");
            setIsEditing(false);
        }catch(error){
         alert(error.response?.data?.message || "Something went wrong");
        }
    }
    
    useEffect(() => {

    const fetchProfile = async () => {

        try {

            const res = await api.get("/profile");
            console.log(res.data);
            setProfile(res.data.user);

        } catch (error) {

            console.log(error);

        }

    };
    fetchProfile();
    }, []);

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
                            <img
                             src={profile?.profilePic}
                             alt="Profile"
                            className="profile-image"
                         />
                        </div>

                        <div>
                            <h2>{profile?.name}</h2>
                            <p>{profile?.branch}</p>
                        </div>

                    </div>

                    <div className="profile-grid">

                        <div className="input-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={profile?.name || ""}
                                readOnly={!isEditing}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={profile?.email || ""}
                                readOnly

                            />
                        </div>

                        <div className="input-group">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={profile?.phone || ""}
                                readOnly={!isEditing}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Branch</label>
                            <input
                                type="text"
                                name="branch"
                                value={profile?.branch || ""}
                                readOnly={!isEditing}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>Year</label>
                            <input
                                type="text"
                                name="year"
                                value={profile?.year || ""}
                                readOnly={!isEditing}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group">
                            <label>CGPA</label>
                            <input
                                type="text"
                                name="cgpa"
                                value={profile?.cgpa || ""}
                                readOnly={!isEditing}
                                onChange={handleChange}
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

                    <button
                     className="edit-btn"
                     onClick={isEditing ? handleSave : () => setIsEditing(true)}
                     >
                      {isEditing ? "Save Profile" : "Edit Profile"}
                    </button>

                </div>

            </div>
        </>
    );
}