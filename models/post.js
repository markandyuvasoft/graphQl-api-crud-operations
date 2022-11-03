import mongoose from "mongoose";

const postSchema= new mongoose.Schema({

    name:String,
    city:String
})

const Post= mongoose.model('graphql',postSchema)

export default Post