import './style.css';
import { PRODUCTS } from '../../constans/data/products'
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Products = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const onHandlerSelect = (product) => {
        navigate(`/products/${product.id}`, {state: product});
    };
    return (
        <div className="allProducts-container">
            <div className='category'>
            <button className="buttonCategory" onClick={()=> setCategory(1)} >Textiles</button>
            <button className="buttonCategory" onClick={()=> setCategory(3)}>Sahumerios</button>
            <button className="buttonCategory" onClick={()=> setCategory(2)}>Aromatizador</button>
            <button className="buttonCategory" onClick={()=> setCategory("")}>Todos</button>



            </div>
            <div className="products-header">
                <div className="products-container">
                    {PRODUCTS.map((product) => (
                        
                    <Card product={product.categoryId === category || category === ""? product:null} key={product.id} onSelect={onHandlerSelect} /> 
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Products;