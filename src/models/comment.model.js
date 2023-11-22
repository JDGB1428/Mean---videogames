import { mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    like:{
        type:Number,
        required:false,
    },
},{
    timestamps:true
});

export default mongoose.model('Comment', commentSchema);