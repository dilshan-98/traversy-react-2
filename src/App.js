import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id
    ))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteHandler} />
      : "No tasks to show"}
    </div>
  );
}

export default App;
