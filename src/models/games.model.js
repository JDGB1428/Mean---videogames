import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    platform: {
        type:String,
        required:true,
    },
    publication_date:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        required:true
    }
}, {
    timestamps:true
});

export default mongoose.model("Game", gameSchema);