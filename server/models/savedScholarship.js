import mongoose from "mongoose";

const savedScholarshipSchema=new mongoose.Schema({
      student:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true
      },

      scholarship:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Scholarship",
        required:true
      }
},{
    timestamps:true
});

export default mongoose.model("SavedScholarship",savedScholarshipSchema);