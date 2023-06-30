import './App.css';
import { useState, } from 'react';
import Header from './componenets/Header';
import Tasks from './componenets/Tasks';

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
    <div className="container">
      <Header />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : (
        'no stasks to show'
      )}
    </div>
  );
}



export default App;
