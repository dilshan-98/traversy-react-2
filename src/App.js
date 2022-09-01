import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="App">
      <Header title="Tasks Tracker"/>
      <Tasks />
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
