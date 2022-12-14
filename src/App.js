import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // [
  //   {
  //     id: 1,
  //     text: "Doctor's Appointment",
  //     day: "Jan 10th at 5.00PM",
  //     reminder: true
  //   },
  //   {
  //     id: 2,
  //     text: "Teacher's Appointment",
  //     day: "Mar 10th at 5.00PM",
  //     reminder: false
  //   },
  //   {
  //     id: 9,
  //     text: "Seller's Appointment",
  //     day: "Feb 10th at 5.00PM",
  //     reminder: true
  //   },
  //   {
  //     id: 8,
  //     text: "Lawyer's Appointment",
  //     day: "Feb 17th at 5.00PM",
  //     reminder: false
  //   }
  // ]
  // );

  useEffect(() => {
    const getTasks = async () => {

      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;;
  };

  const deleteItem = async (id) => {
    // setTasks(tasks.filter((task) => task.id !== id))
    const res = fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);

    const gotTask = await res.json();

    const updatedTask = { ...gotTask, reminder: !gotTask.reminder };

    const sendTask = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await sendTask.json();

    setTasks(tasks.map((task) => task.id !== id ?
      task :
      { ...task, reminder: data.reminder }
    ))
  }

  const submit = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;

    // const newTask = { ...task, id };
    // console.log(newTask)
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  return (
    <Router>
      <div className="container">
        <Header title="Tasks Tracker" onAdd={() => setShowAddTask(!showAddTask)} showButonState={showAddTask} />
        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask submit={submit} />}
              {
                tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteItem} onToggle={toggleReminder} />
                ) : (
                  "No Tasks To Show!"
                )
              }
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//       </div>
//     )
//   }
// }

export default App;
