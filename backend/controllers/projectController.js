import asyncHandler from '../middleware/asyncHandler.js';
import Project from '../models/ProjectModel.js';


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});

//@desc Fetch a Single Produt
//@route GET api/products/:id
//@access Public

const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    
    if(project) {
        return res.json(project);
    } else {
        res.status(404);
        throw new Error('Not Found');
    }
});

export { getProjects, getProjectById };