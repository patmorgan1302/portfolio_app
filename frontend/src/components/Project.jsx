import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Project = ({ project }) => {
    return (

      <Card className='my-3 p-3 rounded' style={{ width: 'auto'}}>

        <Link to={`/project/${project._id}`}>
          <Card.Img src={project.image} variant='top' />
        </Link>

        <Card.Body>
          <Link style={{ textDecoration: 'none', fontSize: 'large', color: 'black', fontFamily: 'Helvetica', textAlign: 'center'}} to={`/project/${project._id}`}>
            <Card.Title as='div' className='project-title'>
              <strong>{project.name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
        
      </Card>
    )
};

export default Project;