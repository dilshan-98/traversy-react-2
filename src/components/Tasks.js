const tasks = [
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
    }
]

const Tasks = () => {
    return (
        <div className="task">
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            )
            )}
        </div>
    )
}

export default Tasks;