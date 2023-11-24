import Comment from "../models/commentary.model.js";

export const getComment = async(req,res)=>{
    const commentary = await Comment.find();
    res.json(commentary);
}

export const createComment = async(req,res) => {
    const {commentary} = req.body;
    console.log(req.game)
    const newComment = new Comment({
        commentary,
    });
    const SaveComment = await newComment.save();
    res.json(SaveComment);
};
