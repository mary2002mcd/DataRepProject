const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
//need to install cors to bypass the errors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//parse the body of a http request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//localhost:4000
app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/api/task', (req,res)=>{
    console.log(req.body);
    res.send("Data Recieved");
})

app.get('/api/tasks', (req, res) => {
    //the data for the app
    const tasks = [
        {
            "taskName": "washing",
            "status": "not started",
            "difficulty": "easy",
            "dueDate": "Wednesday"
        },
        {
            "taskName": "project",
            "status": "in progress",
            "difficulty": "hard",
            "dueDate": "Wednesday"
        },
        {
            "taskName": "make dinner",
            "status": "finished",
            "difficulty": "medium",
            "dueDate": "Wednesday"
        }
    ]
    //array - called in read.js
    res.json({
        myTasks: tasks,
        "Message": "Some Information",
        "Disclaimer": "Hello World"
    })
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})