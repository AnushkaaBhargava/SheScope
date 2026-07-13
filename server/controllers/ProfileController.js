import User from "../models/User.js";

export const Profile= async(req,res)=>{
    try{
        
        const user=await User.findById(req.user.id).select("-password");

        if(!user){
            return res.status(404).json({
                message:"User not found!"
            })
        }

        res.status(200).json({
            user
        })
    }catch(error){
        
        res.status(500).json({
            message:error.message
        });
    }
}

export const updateProfile=async (req,res)=>{
    try{
        
        const {phone,branch,cgpa,year}=req.body;
        const user=await User.findByIdAndUpdate(
            req.user.id,
            {
                phone,
                branch,
                cgpa,
                year
            },
            {
              returnDocument:"after"
            }

        ).select("-password");

         if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Profile updated successfully!",
            user
        });

    }catch(error){
          
          res.status(500).json({
            message:error.message
          });
    };
}

export const uploadProfilePicture = async (req, res) => {
    try {
        console.log("req.file:", req.file);
        console.log("req.user:", req.user);

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.profilePic = req.file.path;

        await user.save();

        res.json({
            message: "Uploaded successfully",
            profilePic: user.profilePic
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
};

export const uploadResume = async (req, res) => {
    try {

        console.log("REQ.FILE:");
        console.log(req.file);

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.resume = user.resume = `/uploads/resumes/${req.file.filename}`;

        await user.save();

        res.status(200).json({
            message: "Resume uploaded successfully!",
            resume: user.resume
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};