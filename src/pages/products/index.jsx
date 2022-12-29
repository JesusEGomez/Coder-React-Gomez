import './style.css';
import { PRODUCTS } from '../../constans/data/products'
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';


const Products = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/products/${product.id}`, {state: product});
    };
    return (
        <div className="allProducts-container">
            <div className='category'>
            <button></button>
            <button></button>
            <button></button>



            </div>
            <div className="products-header">
                <div className="products-container">
                    {PRODUCTS.map((product) => (
                        
                    <Card product={product} key={product.id} onSelect={onHandlerSelect} /> 
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Products;