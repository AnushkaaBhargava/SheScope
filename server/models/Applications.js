import mongoose from "mongoose";

const ApplicationSchema= new mongoose.Schema({

    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    scholarship:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Scholarship",
        required:true
    },

    sop:{
        type:String,

    },

    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending"
    }

},
{
    timestamps:true
});

export default mongoose.model("Application",ApplicationSchema);