import './styles.css';
import { PRODUCTS } from '../../constans/data/products'
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/products/${product.id}`, {state: product});
    };
    return (
        <div className="home-container">
            <div className="home-header">
                <div className="products-container">
                    {PRODUCTS.map((product) => (
                        <Card product={product} key={product.id} onSelect={onHandlerSelect} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;