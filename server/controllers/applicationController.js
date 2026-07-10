import Application from "../models/Applications.js";

export const applyScholarship= async(req,res)=>{

    try{  

        const {scholarship,sop,resume}=req.body;

        const existingApplication=await Application.findOne({
              student:req.user.id,
              scholarship
        })

        if(existingApplication){
            return res.json({
                message:"You have already applied to this scholarship!"
            })
        }

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

export const getAllApplications=async (req,res)=>{
    try{

        const applications=await Application.find()
        .populate("student","name email")
        .populate("scholarship","title company");

        res.status(200).json({applications});

    }catch(error){

        res.status(500).json({
             message:error.message
        });

    }
}

export const updateApplicationStatus= async(req,res)=>{
    try{
        
        const {status}=req.body;

        const application=await Application.findByIdAndUpdate(
            req.params.id,
            {status},
            {returnDocument:"after"}
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found!"
            });
        }

        res.status(200).json({
            message:"Application status updated successfully!",
            application
        });
    }catch(error){

         res.status(500).json({
            message: error.message
        });


    }
}