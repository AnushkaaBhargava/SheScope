import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
         type:String,
         required:true,
         unique:true,
         lowercase:true,
    },

    password:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },

    branch:{
        type:String
    },
    year:{
        type:String
    },
    cgpa:{
        type:Number
    },
    resume:{
        type:String,
        default:""
    },
    profilePic: {
            type: String,
            default: "",
    },
    role:{
        type:String,
        enum:["student","admin"],
        default:"student"
    },
},{
    timestamps:true
});

const User=mongoose.model("User",userSchema);

export default User;