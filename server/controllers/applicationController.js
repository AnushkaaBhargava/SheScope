import Application from "../models/Applications.js";

export const applyScholarship= async(req,res)=>{

    try{  

        const {scholarship,sop,resume}=req.body;

        const application=await Application.create({
            student:req.user.id,
            scholarship,
            sop,
            resume
        })

        res.status(201).json({
            message: "Application submitted successfully!",
            application
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

export const getMyApplications= async (req,res)=>{

    try{

        const applications=await Application.find({
            student:req.user.id
        }).populate("scholarship");

        res.status(200).json({applications});

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }
}