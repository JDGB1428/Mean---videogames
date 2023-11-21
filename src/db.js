import mongoose from 'mongoose'

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://juangalindo00:Realmadrid2023@cluster0.zbonvoc.mongodb.net/videojuegos?retryWrites=true&w=majority')
        console.log('DB is connected')
    }catch(error){
        console.log(error)
    }
};