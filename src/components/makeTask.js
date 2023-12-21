import { useState } from "react";
import axios from "axios";


//this page adds a new task to the mongo database
function MakeTask() {
    //The React useState Hook allows us to track state in a function component.
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //write to the console
        console.log("Task Name: " + taskName + " Due Date: " + dueDate + " Difficulty: " + difficulty + "Status: " + status);
        //a variable that holds all the parameters of each task
        const task = {
            taskName: taskName,
            dueDate: dueDate,
            difficulty: difficulty,
            status: status
        }

        //makes a http request
        axios.post('http://localhost:4000/api/task', task)
            .then()//invoke whats in here
            .catch();//if an exception
    }
    //return this to the screen when the component is called
    return (
        <div>
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
                {/* use the date input type to get the right format */}
                <div className="form-group">
                    <label>Add Due Date: </label>
                    <input type="date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => { setDueDate(e.target.value) }} />

                </div>
                {/* use the drop down menu to allow them to pick between 3 stages */}
                <div className="form-group">
                    <label>Add Completion Status: </label>
                    <select
                        className="form-control"
                        value={status}
                        onChange={(e) => { setStatus(e.target.value) }} >
                        <option>To Be Started</option>
                        <option>In Progress</option>
                        <option>Finished</option>

                    </select>

                </div>
                {/* use the drop down menu to allow them to pick between 3 levels */}
                <div className="form-group">
                    <label>Add Difficulty: </label>
                    <select
                        className="form-control"
                        value={difficulty}
                        onChange={(e) => { setDifficulty(e.target.value) }} >

                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Difficult</option>
                    </select>

                </div>
                {/* button to call the submit function */}
                <div>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
        </div>
    );
}
export default MakeTask;