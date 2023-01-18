
import './App.css'
import Router from "./router";
import NavBar from "./components/NavBar";
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [isOpen, setOpen] = useState(false);

  const onHandlerSideBar = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="container">

    <Sidebar onClose={onHandlerSideBar} isOpen={isOpen}>
      <Link to={`/cart`} ><button>Ir al Carrito</button></Link>
    </Sidebar>
      
    <NavBar onHandlerCart={onHandlerSideBar}>
  
    </NavBar>

    

    <Router />
    
    </div>

    
  );
}

export default App;
