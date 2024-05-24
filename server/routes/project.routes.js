// routes/projects.js

import express from 'express';
import { addProject ,getProjects,updateProject,deleteProject,getProjectsCount,getDetailsProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/projects', addProject);
router.get('/projects', getProjects);
router.put('/update/:id', updateProject);
router.delete('/delete/:id', deleteProject);
router.get('/countProject',getProjectsCount)
router.get('/details/:id',getDetailsProject)


export default router;
