import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  );
}



export default App;
