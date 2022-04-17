import { useState } from "react";

const Add = ({ onAdd }) => {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const addTask = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Please add a task");
            return;
        }

        //we can also directly call the function as well
        //onAdd({text, day, reminder})

        const addtask = { text, day, reminder };

        onAdd(addtask);

        setDay("");
        setReminder("");
        setText("");
    }

    return (
        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Add Day and Time</label>
                <input
                    type="text"
                    placeholder="Add Day and Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
            {/* <button className="btn btn-block">Add Task</button> */}
        </form>
    )
}

export default Add;