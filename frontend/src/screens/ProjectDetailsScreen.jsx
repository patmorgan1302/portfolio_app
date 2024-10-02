import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProjectDetailsQuery } from '../slices/projectsApiSlice';



const ProjectDetailsScreen = () => {
    const { id: projectId } = useParams();

    const { data: project, error, isLoading } = useGetProjectDetailsQuery(projectId);


    return (
        <div >
            <Link className='btn btn-light my-3' to='/'>
            Go Back
            </Link>

            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{ error?.data?.message || error.error }</Message>
            ) : (<>
                <Row>
                    <Col md={6}>
                        <Image src={project.lucas_image} fluid />
                    </Col>
                    <Col md={6}>
                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <h3>{project.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item className="my-2">
                                {project.description}
                            </ListGroup.Item>

                            <ListGroup.Item className='my-3'>
                                <a href="https://youngladco.store/"><Image src={project.image} alt={project.name} fluid /></a>
                            </ListGroup.Item>
                        
                        </ListGroup>
                    </Col>
                </Row>
          
            </>
            )}
            
        </div>
    )};
export default ProjectDetailsScreen;