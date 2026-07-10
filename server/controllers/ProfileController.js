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