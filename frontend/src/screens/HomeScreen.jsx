import { Row, Col, Image, Container } from 'react-bootstrap';
import Project from '../components/Project';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ContactForm from '../components/ContactForm';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/twitter'
import 'react-social-icons/youtube'
import 'react-social-icons/github'
import { useGetProjectsQuery } from '../slices/projectsApiSlice';
import BirdMan from './BirdMan.png'
import BestFriends from './BestFriends.png'
import RamHead from './RamHead.png'


const HomeScreen = () => {
    const { data: projects, isLoading, error } = useGetProjectsQuery();

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (
                <>      
                    <Row style={{ marginBottom: '400px',}}>
                        <Col md={4}>
                            <Image src={BirdMan} alt='Bird' style={{height:'auto', width:'100%'}} fluid />
                        </Col>
                        <Col md={8} style={{ marginTop: '56px'}}>
                            <h3 style={{ marginBottom: '23px'}}>full stack developer & ui designer </h3>
                            <h1>WElCOME TO MY SITE. PLEASE TAKE A LOOK AROUND.</h1>
                            <div onClick={() => window.location.replace("/#projects")}>
                            <button style={{marginTop: '10px'}}> latest projects </button>                         
                            </div>
                            
                        </Col>
                    </Row>
                    <h2 id='projects' className="py-3">latest projects.</h2>
                    <Row>
                        {projects.map((project) => (
                                <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                    <Project project={project} />
                                </Col>
                        ))}
                    </Row>
                  
                    <h2 id="best-friends">
                        <Image src={BestFriends} alt='Bird' style={{height: 'auto', width:'100%', marginBottom: '90px'}} fluid />
                    </h2>
                    
                    <Row  id='experience' class="py-3">
                        <Container className='py-3'>
                            <h2 style={{ textAlign: 'left', marginBottom: '53px', }}>my experience.</h2>
                            <h5 className="py-3" style={{ textAlign: 'left'}}>
                                I am a full stack Javascript developer and UI designer.
                            </h5>

                            <h5 className="py-3" style={{ textAlign: 'left'}}>
                                I have experience with MERN stack development and have worked on a variety of projects. 
                            </h5>

                            <h5 className="py-3" style={{ textAlign: 'left'}}>
                               My latest work has involved collaboration with local artists and musicians to create a platform for sharing their work.
                            </h5>

                        </Container>
                    </Row>

                     <Row  id='contact' class="py-3">
                        <Container className='py-3'>
                            <h2 style={{ textAlign: 'left', marginBottom: '3px', marginTop: '122px' }}>contact.</h2>
                            <Row className='py-3' style={{ textAlign: 'left'}}>
                                <SocialIcon style={{ marginRight: '5px'}} url="www.linkedin.com" />
                                <SocialIcon style={{ marginRight: '5px'}} url="www.twitter.com" />
                                <SocialIcon style={{ marginRight: '5px'}} url="www.youtube.com" />
                                <SocialIcon url="www.github.com" />
                            </Row>
                            <h5 className="py-3" style={{ textAlign: 'left'}}>
                                <ContactForm />
                            </h5>
                        </Container>
                    </Row>

                    <footer>
                        <Image src={RamHead} alt='Bird' style={{height: 'auto', width:'100%'}} />
                    </footer>
                </>
            )}
       </>
    )
}

export default HomeScreen;