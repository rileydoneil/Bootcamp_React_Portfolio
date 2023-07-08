import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, } from 'react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import Projects from './componenets/Projects';
import Resume from './pages/Resume';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}



export default App;
