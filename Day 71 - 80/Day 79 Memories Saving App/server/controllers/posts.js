import postMessage from "../Models/postMessage.js"


// fetching the posts in the getPost function
export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new postMessage(body);

    try {
        await newPost.save()
        res.status(201).json(newPost)
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}