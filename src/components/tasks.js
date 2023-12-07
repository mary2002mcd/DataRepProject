import ListParts from "./listParts";


function Tasks(props){

    //map function will give individual task
    return props.myTasks.map(
        //task is an argument
        (task)=>{
            return <ListParts myTask={task} key={task.isbn}></ListParts>
        }
    );
}
export default Tasks;