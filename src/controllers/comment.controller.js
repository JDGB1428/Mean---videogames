import Comment from "../models/comment.model.js";
import Games from "../models/games.model.js"

export const getComment = async(req,res) => {
    const comment = await Comment.find({
        user:req.user.id,
        game:req.game.id
    }).populate('user')
      .populate('game')
    res.json(comment);
}

export const createComments = async(req,res) =>{
    const {commentary} = req.body;
    const game = await Games.findById(req.params.id)
    const newComment = new Comment({
        commentary,
        user: req.user.id,
        game: game
    })

    const savedComment = await newComment.save();
    res.json(savedComment);
}
