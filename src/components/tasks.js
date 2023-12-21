import ListParts from "./listParts";


function Tasks(props){

    //map function will give individual task
    return props.myTasks.map(
        //task is an argument
        (task)=>{
            //this loads the ListParts component which gets data from the mongo database
            return <ListParts myTask={task} key={task._id} Reload={()=>{props.ReloadData()}}></ListParts>
        }
    );
}
export default Tasks;