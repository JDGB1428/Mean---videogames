import { mongoose } from "mongoose";

const likeSchema = new mongoose.Schema({
    comment:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Likes', likeSchema);