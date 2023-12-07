import { useState } from "react";




function Create() {
    //The React useState Hook allows us to track state in a function component.
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //write to the console
        console.log("Task Name: " + taskName + " Due Date: " + dueDate + " Difficulty: " + difficulty + "Status: " + status);
    }
    //return this to the screen when the component is called
    return (
        <div>
            <h2>Hello from the create component</h2>
            {/* when the button is clicked the function OnSubmit will be called */}
            {/* take in this information from the user  */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Task Name: </label>
                    <input type="text"
                        className="form-control"
                        value={taskName}
                        onChange={(e) => { setTaskName(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Add Due Date: </label>
                    <input type="text"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => { setDueDate(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Add Completion Status: </label>
                    <input type="text"
                        className="form-control"
                        value={status}
                        onChange={(e) => { setStatus(e.target.value) }} />

                </div>

                <div className="form-group">
                    <label>Add Difficulty: </label>
                    <input type="text"
                        className="form-control"
                        value={difficulty}
                        onChange={(e) => { setDifficulty(e.target.value) }} />

                </div>
                {/* button to call the function */}
                <div>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
}
export default Create;