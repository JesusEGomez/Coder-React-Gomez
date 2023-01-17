
import './App.css'
import Router from "./router";
import NavBar from "./components/NavBar";
import Sidebar from './components/sidebar';
import { useState } from 'react';


function App() {
  const [isOpen, setOpen] = useState(false);

  const onHandlerSideBar = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="container">

    <Sidebar onClose={onHandlerSideBar} isOpen={isOpen}>
      <h2>Item List</h2>
    </Sidebar>
      
    <NavBar onHandlerCart={onHandlerSideBar}>
  
    </NavBar>

    

    <Router />
    
    </div>

    
  );
}

export default App;
