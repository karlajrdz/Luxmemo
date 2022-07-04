import PostMessage from "../models/postMessage.js";
//declare funtion
//make funtion async
export const getPosts = async (req, res) => {
  //the code in the catch succes  error
  try {
    //await because takes time to access
    const postMessages = await PostMessage.find();
    //200 everything went ok json with an array of all msjs
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//array function TO create a post
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    //async action
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
