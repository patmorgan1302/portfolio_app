import { Row, Col } from 'react-bootstrap';
// import { useParams, Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>) : (
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
                )}
       </>
    )
}

export default HomeScreen;