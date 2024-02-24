import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1-QlV7vNooYCJYRXMnMqOeDWdb72GeY",
  authDomain: "ap-portfolio-cbe6e.firebaseapp.com",
  projectId: "ap-portfolio-cbe6e",
  storageBucket: "ap-portfolio-cbe6e.appspot.com",
  messagingSenderId: "89059473010",
  appId: "1:89059473010:web:af24d661027ee5bc4bf4eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)