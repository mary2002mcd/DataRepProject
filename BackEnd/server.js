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

// Connecting to mongo db
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.2qikblf.mongodb.net/DB14?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//creating the schema
const taskSchema = new mongoose.Schema({
    taskName: String,
    status: String,
    difficulty: String,
    dueDate: String
})
//add to the taskSchema
const taskModel = mongoose.model('my_tasks', taskSchema);

//server logic for delete -- params of the url
app.delete('/api/task/:id', async (req, res)=>{
    console.log("Delete: "+ req.params.id)
    //local variable book - everytime you want to interact with the database you use the book model
    let task = await bookModel.findByIdAndDelete(req.params.id);
    res.send(task);//async so wont proceed to this line until the previous one is finished
})

//method for updated the details of the task - async to make sure task is not null
app.put('/api/task/:id', async(req, res)=>{
    console.log("update: "+req.params.id);

    let task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(task);//send back updated book
})

app.post('/api/task', (req, res) => {
    console.log(req.body);

    taskModel.create({
        taskName: req.body.taskName,
        status: req.body.status,
        difficulty: req.body.difficulty,
        dueDate: req.body.dueDate
    })
        .then(() => { res.send("Data Recieved") })
        .catch(() => { res.send("Data NOT Recieved")});

})

//get all the taskss
app.get('/api/tasks', async(req, res) => {
    
    let tasks = await taskModel.find({});
    res.json(tasks);
   
})

//get the task with a specific id
app.get('/api/task/:identifier',async(req,res)=>{
    console.log(req.params.identifier);

    let task = await taskModel.findById(req.params.identifier);

    res.send(task);
})
//localhost:4000
// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.post('/api/task', (req,res)=>{
//     console.log(req.body);
//     res.send("Data Recieved");
// })

// app.get('/api/tasks', (req, res) => {
//     //the data for the app
//     const tasks = [
//         {
//             "taskName": "washing",
//             "status": "not started",
//             "difficulty": "easy",
//             "dueDate": "Wednesday"
//         },
//         {
//             "taskName": "project",
//             "status": "in progress",
//             "difficulty": "hard",
//             "dueDate": "Wednesday"
//         },
//         {
//             "taskName": "make dinner",
//             "status": "finished",
//             "difficulty": "medium",
//             "dueDate": "Wednesday"
//         }
//     ]
//     //array - called in read.js
//     res.json({
//         myTasks: tasks,
//         "Message": "Some Information",
//         "Disclaimer": "Hello World"
//     })
// })

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})