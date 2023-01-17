import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYb5PpBxICeAQu63WxvP53ppuN0wNKvdk",
  authDomain: "proyectofinal-react-coder.firebaseapp.com",
  projectId: "proyectofinal-react-coder",
  storageBucket: "proyectofinal-react-coder.appspot.com",
  messagingSenderId: "113861104392",
  appId: "1:113861104392:web:143b721ebd9adf407f12bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


