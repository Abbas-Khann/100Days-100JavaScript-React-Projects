import mongoose from "mongoose";

// creating a schema of the properties that a particular post is going to consist of
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likedCount: { 
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('PostMessage', postSchema);


export default postMessage