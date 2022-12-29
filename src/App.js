
import './App.css'
import Router from "./router";
import NavBar from "./components/NavBar";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      
    <NavBar>
      <div className='cart-link'><Link to='/cart'>Go to cart</Link></div>
      
    </NavBar>
    <Router />
    
    </div>

    
  );
}

export default App;
