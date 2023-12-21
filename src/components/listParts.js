import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//the cards themselves
function ListParts(props) {

    return (
        //colors, alignments and designs were all taken from bootstrap documentation
        //myTask from tasks.js
        //make it bootstrap so works when you shrink the screen
        <Container className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '20rem', backgroundColor: 'khaki', marginBottom: '10px', boxShadow: '0px 4px 8px 0px' }}>

                <Card.Body>
                    <Card.Title>{props.myTask.taskName}</Card.Title>
                    <Card.Subtitle className="text-danger">Due: {props.myTask.dueDate}</Card.Subtitle>
                    <Card.Text>Status: {props.myTask.status}</Card.Text>
                    <Card.Text>Difficulty: {props.myTask.difficulty}</Card.Text>
                </Card.Body>
                {/* button to edit the task */}
                <Link to={'/edit/' + props.myTask._id} className="btn btn-info">Edit</Link>

                {/* add a varient variable to change the color    onclick calls an arrow function*/}
                <Button variant="success" onClick={(e) => {
                    // make a http request to the sever on client side you need axios - delete
                    axios.delete('http://localhost:4000/api/task/' + props.myTask._id)//id is from mongo db
                        .then((res) => {
                            let reload = props.Reload();//invoke the reload function that was passed from read to tasks to listParts
                        })
                        .catch();
                }}>Delete Finished Task</Button>
            </Card>
            <br></br>
        </Container>

    );
}

export default ListParts;