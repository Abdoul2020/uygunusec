import React  from 'react';
import Router from './services/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('I am in app');
  

  return (
    <div className="App">
      <Navbar/>
      <Router/>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
