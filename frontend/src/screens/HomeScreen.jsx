import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { useParams, Link } from 'react-router-dom';
import Product from '../components/Product';
import axios from 'axios';


const HomeScreen = () => {
    // set products state to update the UI
    const [products, setProducts] = useState([]);

    // fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios('/api/products');
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return (
        <>
            <h2>My Portfolio Page</h2>
            <Row>
               {products.map((product) => (
                     <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={product} />
                     </Col>
               ))}
            </Row>
        </>
       
    )
}

export default HomeScreen;