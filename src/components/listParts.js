import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListParts(props) {

    return (
        //myTask from tasks.js
        //make it bootstrap so works when you shrink the screen
        <Container className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '20rem', backgroundColor: 'khaki', marginBottom: '10px', boxShadow: '0px 4px 8px 0px' }}>
                {/* <Card.Header>{props.myTask.taskName}</Card.Header> */}
                <Card.Body>
                    <Card.Title>{props.myTask.taskName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.myTask.dueDate}</Card.Subtitle>
                    <Card.Text>{props.myTask.status}</Card.Text>
                    <Card.Text>{props.myTask.difficulty}</Card.Text>
                </Card.Body>

                <Link to={'/edit/' + props.myTask._id} className="btn btn-primary">Edit</Link>

                {/* add a varient variable to change the color danger = red    onclick calls an arrow function*/}
                <Button variant="danger" onClick={(e) => {
                    // make a http request to the sever on client side you need axios
                    axios.delete('http://localhost:4000/api/task/' + props.myTask._id)//id is from mongo db
                        .then((res) => {
                            let reload = props.Reload();//invoke the reload function that was passed from read to tasks to listParts
                        })
                        .catch();
                }}>Delete</Button>
            </Card>
            <br></br>
        </Container>

    );
}

export default ListParts;