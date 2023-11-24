import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    
    image:{
        type:[String]
    },
    category:{
        type:String,
        required:true,
    }
}, {
    timestamps:true
});

export default mongoose.model("Game", gameSchema);