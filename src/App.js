import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


function App() {


  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/portfolio" element={<Portfolio/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path='/resume' element={<Resume/>} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}



export default App;
