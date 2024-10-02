import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return( 
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p>&copy; {currentYear} Princess Dynamite Designs © // YNGLD Designs ©</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;  