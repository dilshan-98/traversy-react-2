import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => (
                <Task task={task} key={task.id}/>
            ))}
        </div>
    );
}

export default Tasks;