import Comment from "../models/comment.model.js";

export const getComment = async(req,res) => {
    const comment = await Comment.find({
        user:req.user.id,
        //game:req.game.id
    }).populate('user');
    res.json(comment);
}

export const createComments = async(req,res) =>{
    const {description} = req.body;
    const newComment = new Comment({
        description,
        user: req.user.id,
        //game: req.game.id
    })

    const savedComment = await newComment.save();
    res.json(savedComment);
}
