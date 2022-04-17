import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Read Books",
    day: "5th of May, 2022",
    reminder: true
  }, {
    id: 2,
    text: "Study for Exam",
    day: "6th of May, 2022",
    reminder: false
  }, {
    id: 3,
    text: "Go to School",
    day: "7th of May, 2022",
    reminder: true
  }]);

  //delete tasks individually
  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id
    ))
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

    const newTask = {id, ...task};

    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Add onAdd={addTask}/>
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteHandler} onToggle={toggleReminder} />
        : "No tasks to show"}
    </div>
  );
}

export default App;
