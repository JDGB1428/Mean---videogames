import  mongoose  from "mongoose";

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
    // game:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Game',
    //     required:true 
    //  }
},{
    timestamps:true
});

export default mongoose.model('Comment', commentSchema);