import express from "express";
//set up the router
import { getPosts, createPost } from "../controllers/posts.js";
const router = express.Router();
//call back function with a rquest and response
router.get("/", getPosts);
router.post("/", createPost);

export default router;
