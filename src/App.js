import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  //delete tasks individually
  //1st ---> Delete from the static data define in the code itself
  // const deleteHandler = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id
  //   ))
  // }

  //2nd ---> Delete from the server using HTTP request
  const deleteHandler = async (id) => {
   await fetch(`http://localhost:5000/tasks/${id}`, {
     method: "DELETE"
   })
  }

  //toggle reminder for the tasks
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id !== id ? task : {
        ...task,
        reminder: !task.reminder
      })
    )
  }

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000);

    const newTask = { id, ...task };

    setTasks([...tasks, newTask])
  }

  const [showTask, setShowTask] = useState(false);

  //GET/Tasks from the Server

  //1st method
  // useEffect(() => {
  //   fetch("http://localhost:5000/tasks")
  //     .then((response) => {
  //       response.json()
  //         .then((data) => {
  //           setTasks(data);
  //         })
  //     })
  // })

  //2nd method
  useEffect (() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  })

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");

    const data = await response.json();

    return data;
  }

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowTask(!showTask)}
        addValue={showTask}
      />
      {showTask && <Add onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteHandler} onToggle={toggleReminder} />
        : "No tasks to show"}
    </div>
  );
}

export default App;
