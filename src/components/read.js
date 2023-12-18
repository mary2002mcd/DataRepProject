import Tasks from "./tasks";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
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

    return (
        <div>
            <h2>Hello from the read component!</h2>
            <Tasks myTasks={data}></Tasks> {/*call the tasks component */}
        </div>
    );
}



export default Read;