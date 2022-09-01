import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, useTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: "Jan 10th at 5.00PM",
        reminder: true
      },
      {
        id: 2,
        text: "Teacher's Appointment",
        day: "Mar 10th at 5.00PM",
        reminder: false
      },
      {
        id: 9,
        text: "Seller's Appointment",
        day: "Feb 10th at 5.00PM",
        reminder: true
      },
      {
        id: 8,
        text: "Lawyer's Appointment",
        day: "Feb 17th at 5.00PM",
        reminder: false
      }
    ]
  );

  return (
    <div className="App">
      <Header title="Tasks Tracker" />
      <Tasks tasks={tasks}/>
    </div>
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
