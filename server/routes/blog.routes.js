// routes/blogRoutes.js

import express from 'express';
import { addBlog ,getBlogs ,updateBlog, deleteBlog } from '../controllers/blog.controller.js';

const router = express.Router();

// POST /api/blogs
router.post('/', addBlog);
router.get('/', getBlogs);
router.put('/update/:id', updateBlog);
router.delete('/delete/:id', deleteBlog);

export default router;
