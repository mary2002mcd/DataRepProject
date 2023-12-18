import { Card } from "react-bootstrap";
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
            </Card>
        </div>
    );
}

export default ListParts;