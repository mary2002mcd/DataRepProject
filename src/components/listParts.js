import { Card } from "react-bootstrap";

function ListParts(props) {
    return (
        //myTask from tasks.js
        <div>
            <Card>
                <Card.Header>{props.myTask.taskName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <footer>{props.myTask.status}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ListParts;