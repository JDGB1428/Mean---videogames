import Comment from "../models/comment.model.js";

export const getComment = async(req,res) => {
    const comment = await Comment.find();
}