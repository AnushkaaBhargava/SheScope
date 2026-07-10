import SavedScholarship from "../models/savedScholarship.js";

export const saveScholarship=async (req,res)=>{
    try{

        const {scholarship}=req.body;

        const existing=await SavedScholarship.findOne({
            student:req.user.id,
            scholarship
        })

        if(existing){
            return res.status(400).json({
              message: "This scholarship is already saved!"
             });
        };

        const saved=await SavedScholarship.create({
            student:req.user.id,
            scholarship
        });

        res.status(200).json({
            message:"Scholarship saved!",
            saved
        })

    }catch(error){
        res.status(500).json({
            message: error.message
        });

    }
}

export const getSavedScholarships=async (req,res)=>{
    try{

        const savedScholarships=await SavedScholarship.find({
            student:req.user.id
        }).populate("scholarship");

        res.status(200).json({savedScholarships});

    }catch(error){
          
          res.status(500).json({
            message:error.message
          });
    }
} 

export const deleteSavedScholarship=async (req,res)=>{
    try{
        
        const {scholarship}=req.body;
        const deleteSavedScholarship=await SavedScholarship.findOneAndDelete({
              student:req.user.id,
              scholarship

        });
        
        if(!scholarship){
            return res.status(404).json({
                message:"No such scholarship is saved"
            })
        }
        res.status(200).json({
            message:"Scholarship Deleted!",
            deleteSavedScholarship
        })
    }catch(error){
          
          res.status(500).json({
            message:error.message
          })
    }
}