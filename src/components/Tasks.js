import Task from "./Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="tasks">
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    );
}

export default Tasks;