
import './App.css';
import NavBar from './components/NavBar';
import {PRODUCTS} from './constans/data/products'
import Card from './components/card';


function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <header className="App-header">
        <div className="products-container">
        {PRODUCTS.map((product)=>(
          <Card product={product} key={product.id}/>
        ))}
        </div>
      </header>
      
    </div>
  );
}

export default App;
