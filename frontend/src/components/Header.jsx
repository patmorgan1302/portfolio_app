import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {

    return (
        <header style={{ opacity: '0.7', padding: '12px', backgroundColor: '#FFFBE6' }} className="shadow p-3 mb-5 bg-white rounded">
            <Navbar expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand ><strong>
                        PATRICK MORGAN
                        </strong></Navbar.Brand>
                    </LinkContainer>
             
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>

                        
                           
                           <LinkContainer to='/'>
                                <Nav.Link onClick={() => window.location.replace("/#projects")}>
                                    Projects
                                </Nav.Link>
                           </LinkContainer> 

                           <LinkContainer to='/'>
                                <Nav.Link onClick={() => window.location.replace("/#experience")}>
                                    Experience
                                </Nav.Link>
                           </LinkContainer> 

                           <LinkContainer to='/'>
                                <Nav.Link onClick={() => window.location.replace("/#contact")}>
                                    Contact
                                </Nav.Link>
                           </LinkContainer> 
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;