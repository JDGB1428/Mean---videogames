import Comment from "../models/commentary.model.js";

export const getComment = async(req,res)=>{
    const commentary = await Comment.find();
    res.json(commentary);
}

export const createComment = async(req,res) => {
    const {commentary} = req.body;
    const newComment = new Comment({
        commentary,
        // game:req.games.id,
        // user:req.user.id
    });
    const SaveComment = await newComment.save();
    res.json(SaveComment);
};