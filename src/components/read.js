import Tasks from "./tasks";

function Read() {
    const data = [
        {
            "taskName": "washing",
            "status": "not started"
        },
        {
            "taskName": "project",
            "status": "in progress"
        },
        {
            "taskName": "washing",
            "status": "complete"
        }
    ];

    return (
        <div>
            <h2>Hello from the read component!</h2>
            <Tasks myTasks={data}></Tasks> {/*call the tasks component */}
        </div>
    );
}

export default Read;