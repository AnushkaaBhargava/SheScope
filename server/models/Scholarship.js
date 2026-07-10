import mongoose from "mongoose";

const scholarshipSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    company:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    amount:{
        type:String,
        required:true
    },

    deadline:{
        type:Date,
        required:true
    },
    country:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },
      eligibility:{
        type:String,
        required:true
    },

    logo:{
        type:String
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"User"
    }
},
{
    timestamps:true
});

export default mongoose.model("Scholarship",scholarshipSchema);