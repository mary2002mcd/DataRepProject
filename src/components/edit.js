import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

//this is to update the already existing information in the mongo database
export default function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array objects push() method
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [dueDate, setDueDate] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/task/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTaskName(response.data.taskName);
                setStatus(response.data.status);
                setDifficulty(response.data.difficulty);
                setDueDate(response.data.dueDate);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();//this is stopped from starting multiple times
        const newTask = { //object called newTask
            id: id,
            taskName: taskName,
            status: status,
            difficulty: difficulty,
            dueDate: dueDate
        };
        axios.put('http://localhost:4000/api/task/' + id, newTask)//updates and brings you back to the list page
            .then((res) => {
                console.log(res.data);
                navigate('/todolist');
            });
    }
    return (//html
        <div>
            {/* calling the variable handleSubmit when the form is submitted*/}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Task Name: </label>
                    <input type="text"
                        className="form-control"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Status: </label>
                    <select
                        className="form-control"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>To Be Started</option>
                        <option>In Progress</option>
                        <option>Finished</option>
                    </select>
                </div>
                <div className="form-group"><label>Edit Difficulty: </label>
                    <select
                        className="form-control"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Difficult</option>
                    </select>
                </div>
                <div className="form-group"><label>Edit Due Date: </label>
                    <input type="date"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Task" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}