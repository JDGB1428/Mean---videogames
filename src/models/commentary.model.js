import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commentary:{
        type:[String],
        required:true
    },
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    game:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    }
}, {
    timestamps:true
});

export default mongoose.model("Comment", commentSchema);