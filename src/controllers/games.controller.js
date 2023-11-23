import Games from "../models/games.model.js";

export const getGames = async(req,res) => {
    const games = await Games.find({
        user:req.user.id
    }).polygon('user');
    res.json(games);
};

export const createGames = async(req,res) => {
    const {title, description, price, platform, category, publication_date} = req.body;

    console.log(req.comment);

    const newGame = new Games({
        title,
        description,
        price,
        category,
        publication_date,
        platform,
        user:req.user.id
    });
    const SaveGame = await newGame.save();
    res.json(SaveGame);
};

export const getGame = async(req,res) => {
    const game = await Games.findById()
    if(!game) return res.status(404).json({message: 'Game not found'})
    res.json(game);
};

export const getcategory =  async(req,res)=>{
    const category = req.query.category;
    const game = await Games.findOne({category:category})
    if(!game) return res.status(404).json({message: "Game not found"})
    res.json(game);
}

export const updateGames = async(req,res) => {
    const game = await Games.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    if(!game) return res.status(404).json({message:'Game not found'})
    res.json(game);
};

export const deleteGames = async(req,res) => {
    const game = await Games.findByIdAndDelete(req.params.id)
    if(!game) return res.status(404).json({message:" Game not found"})
    res.json(game)
};