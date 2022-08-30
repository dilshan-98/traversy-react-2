
function App() {  return (
  <div className="App">
    <h1>Hello</h1>
  </div>
);
}

export default App;

  /*
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
  //1st ---> to toggle reminder in the static data
  // const toggleReminder = (id) => {
  //   setTasks(tasks.map((task) =>
  //     task.id !== id ? task : {
  //       ...task,
  //       reminder: !task.reminder
  //     })
  //   )
  // }

  //2nd ---> toggle reminder in the server data
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();

    return data;
  }

  const toggleReminder = async (id) => {
    const taskFetched = await fetchTask(id);
    const updatedTask = {
      ...taskFetched,
      reminder: !taskFetched.reminder
    }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await response.json();

    //This is not necessary when data is fetched from BE in useEffect where the changing values were added as [tasks]
    setTasks(tasks.map((task) => task.id !== id ? 
    task :
    {
      ...task,
      reminder: data.reminder
    }
    ))

  }

  //Add Task
  //1st ---> Static data
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 10000);

  //   const newTask = { id, ...task };

  //   setTasks([...tasks, newTask])
  // }

  //2nd ---> HTTP request
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = response.json();

    setTasks([...tasks, data]);
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
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }

    getTasks();
  }, [])

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");

    const data = await response.json();

    return data;
  }

  */

  /*return (
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
  );*/

