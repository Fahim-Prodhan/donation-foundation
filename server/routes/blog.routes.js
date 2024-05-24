// routes/blogRoutes.js

import express from 'express';
import { addBlog ,getBlogs ,updateBlog, deleteBlog,getBlogsCount,getDetails } from '../controllers/blog.controller.js';

const router = express.Router();

// POST /api/blogs
router.post('/', addBlog);
router.get('/', getBlogs);
router.put('/update/:id', updateBlog);
router.delete('/delete/:id', deleteBlog);
router.get('/countBlog',getBlogsCount)
router.get('/details/:id', getDetails)


export default router;
