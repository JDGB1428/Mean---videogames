import Games from "../models/games.model.js";

export const getGames = async(req,res) => {
    const games = await Games.find();
    res.json(games);
};

export const createGames = async(req,res) => {
    const {title, description,image, category} = req.body;
    const newGame = new Games({
        title,
        description,
        image,
        commentary,
        category,
    });
    const SaveGame = await newGame.save();
    res.json(SaveGame);
};

export const getGame = async(req,res) => {
    const game = await Games.findById(req.params.id)
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

export const incrementView = async(req,res) => {
    const { id } = req.params;
    console.log(req.params);
    const game = await Games.findById(id);
    if (!game) {
      return res.status(404).send('Game not found');
    }
    game.view++;
    await game.save();

    res.json({ message: 'View count updated successfully' });
};