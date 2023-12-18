import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListParts(props) {
    return (
        //myTask from tasks.js
        <div>
            <Card>
                <Card.Header>{props.myTask.taskName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer>{props.myTask.status}</footer>
                        <footer>{props.myTask.dueDate}</footer>
                        <footer>{props.myTask.difficulty}</footer>
                        <footer>{props.myTask.status}</footer>
                    </blockquote>
                </Card.Body>

                <Link to={'/edit/'+props.myTask._id} className="btn btn-primary">Edit</Link>

                 {/* add a varient variable to change the color danger = red    onclick calls an arrow function*/}
                 <Button variant="danger" onClick={(e)=>{
                    // make a http request to the sever on client side you need axios
                    axios.delete('http://localhost:4000/api/task/'+props.myTask._id)//id is from mongo db
                    .then((res)=>{
                        let reload = props.Reload();//invoke the reload function that was passed from read to tasks to listParts
                    })
                    .catch();
                }}>Delete</Button>
            </Card>
        </div>
    );
}

export default ListParts;