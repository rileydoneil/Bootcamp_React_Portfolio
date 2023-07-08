import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, } from 'react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import Projects from './componenets/Projects';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Projects/>
      <Footer/>
    </div>
  );
}



export default App;
