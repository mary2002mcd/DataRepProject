import ListParts from "./listParts";


function Tasks(props){

    //map function will give individual task from mongo
    return props.myTasks.map(
        //task is an argument
        (task)=>{
            //this loads the ListParts component which is the indivial cards that display the data
            return <ListParts myTask={task} key={task._id} Reload={()=>{props.ReloadData()}}></ListParts>
        }
    );
}
export default Tasks;