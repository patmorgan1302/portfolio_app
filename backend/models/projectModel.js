import mongoose from 'mongoose' ;

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technology_stack: {
        type: String,
        required: true
    },
    project_link: {
        type: String,
        required: true
    },
    lucas_image: {
        type: String,
        required: true
    }
    
} , {timestamps: true});

const Project = mongoose.model('Project', projectSchema);

export default Project;
