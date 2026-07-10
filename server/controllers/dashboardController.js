import Application from "../models/Applications.js";
import SavedScholarship from "../models/savedScholarship.js";

export const getDashboard= async (req,res)=>{
    try{
         
         const totalApplications=await Application.countDocuments({
            student:req.user.id
         });

         const savedScholarshipscount=await SavedScholarship.countDocuments({
            student:req.user.id
         });

         const pendingApplications=await Application.countDocuments({
            student:req.user.id,
            status:"pending"
         });

         const acceptedApplications=await Application.countDocuments({
            student:req.user.id,
            status:"accepted"
         });

         const rejectedApplications=await Application.countDocuments({
            student:req.user.id,
            status:"Rejected"
         });


        res.status(200).json({
            totalApplications,
            savedScholarshipscount,
            pendingApplications,
            acceptedApplications,
            rejectedApplications
        });
        
        }catch(error){
          
          res.status(404).json({
            message:error.message
          });
        };
}