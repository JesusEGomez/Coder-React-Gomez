import './styles.css';
import { PRODUCTS } from '../../constans/data/products'
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
// import {Firestore, collection,getDocs, getFirestore} from 'firebase/firestore';
// import { useEffect } from 'react';


const Home = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/products/${product.id}`, {state: product});
    };
    // useEffect(()=>{
    //     const db = getFirestore();

    //     const products = collection (db, "products");
    //     getDocs(products)
    //     .then((snapshot)=>{
    //         const result = snapshot.docs.map((doc)=>(doc.data()))
    //         console.log(result);
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     } );
    // });
    
    return (
        <div className="home-container">
            <div className="home-header">
                <h2 className="Home-subTitle">Nuevos Ingresos</h2>
                <div className="products-container">
                    {PRODUCTS.map((product) => (
                        
                    <Card product={product.id <4? product:null} key={product.id} onSelect={onHandlerSelect} /> 
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Home;