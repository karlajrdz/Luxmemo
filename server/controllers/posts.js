import express from "express";
import mongoose from "mongoose";
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

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id`);

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
   post,
    { new: true }
  );
  res.json(updatedPost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
};
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
await PostMessage.findByIdAndRemove(id);
console.log('DELETE!');
res.json({ message: "Post deleted successfully" });

export const likePost=async(req,res)=>{
const{id}=req.params;
if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).send('No post with that id');
const post=await PostMessage.findById(id);
//implementing the like count
const updatedPost=await PostMessage.findByIdAndUpdate(id, {likeCount:post.likeCount + 1}, {new: true})
res.json(updatedPost);
}
