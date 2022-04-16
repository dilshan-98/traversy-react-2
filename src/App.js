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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
