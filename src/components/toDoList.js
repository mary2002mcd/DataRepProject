import Tasks from "./tasks";
import { useEffect, useState } from "react";
import axios from "axios";

function ToDoList() {
    const [data, setData] = useState([]);
    // const data = [
    //     {
    //         "taskName": "washing",
    //         "status": "not started",
    //         "difficulty": "easy",
    //         "dueDate": "Wednesday"
    //     },
    //     {
    //         "taskName": "project",
    //         "status": "in progress",
    //         "difficulty": "medium",
    //         "dueDate": "Tuesday",
    //     },
    //     {
    //         "taskName": "washing",
    //         "status": "complete",
    //         "difficulty": "hard",
    //         "dueDate": "Monday"
    //     }
    // ];

    //useEffect is a React Hook that lets you synchronize a component with an external system.
    useEffect(
        () => {
            //asyncrious operation taking place here
            //callback, get data from tasks component
            axios.get('http://localhost:4000/api/tasks').then((response) => {
                setData(response.data)
            }).catch((error) => { //catch errors - is to send an error message to the console
                console.log(error);
            });
        }, []
    );

          //to make the read component automatically update when deleted so you dont have to refresh
          const Reload = (e)=>{
            //get all the data from the database
            axios.get('http://localhost:4000/api/tasks').then((response) => {
                    setData(response.data)
                }).catch((error) => { //catch errors - is to send an error message to the console
                    console.log(error);
                });
        }

    return (
        //give it the color of a cork post it board
        <div style={{backgroundColor: 'burlywood'}}>
            <h2>To-Do List!</h2>
            <Tasks myTasks={data} ReloadData={Reload}></Tasks> {/*call the tasks component */}
        </div>
    );
}



export default ToDoList;