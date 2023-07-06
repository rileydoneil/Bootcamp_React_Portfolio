import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, } from 'react';
import Header from './componenets/Header';
import Tasks from './componenets/Tasks';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }
  ])

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}



export default App;
