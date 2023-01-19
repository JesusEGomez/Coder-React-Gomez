
import './App.css'
import Router from "./router";
import NavBar from "./components/NavBar";
import Sidebar from './components/sidebar';
import { useState } from 'react';
import { CartProvider } from './context';





function App() {
  const [isOpen, setOpen] = useState(false);

  const onHandlerSideBar = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="container">
    <CartProvider>
      <Sidebar 
        onClose={onHandlerSideBar} 
        isOpen={isOpen}
        />
      
      <NavBar 
        onHandlerCart={onHandlerSideBar}
      >
  
      </NavBar>

      <Router />

    </CartProvider>

    </div>

    
  );
}

export default App;
