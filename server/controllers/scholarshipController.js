import Scholarship from "../models/Scholarship.js";

export const getAllScholarships= async(req,res)=>{

    try{
         
         const scholarships=await Scholarship.find();
         res.status(200).json(scholarships);
    }
    catch(error){
          
        res.status(500).json({
            message: error.message
        });
    }
};

export const createScholarship=  async(req,res)=>{
    try{
      
      const scholarship=await Scholarship.create(req.body);

      res.status(201).json({
        message:"Scholarship created successfully!"
      });
    }
    catch(error){
           
        res.status(500).json({
            message: error.message
        });
    }
}

export const getScholarshipById=async(req,res)=>{
         
         try{
             
             const scholarship=await Scholarship.findById(req.params.id);

             if(!scholarship){
                res.status(404).json({
                    message:"Scholarship not found!"
                });
             };

             res.status(200).json(
                scholarship
             )
         }catch(error){
              res.status(500).json({
                message:error.message
              });
         }
}