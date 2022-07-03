// import logo from './logo.svg';
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Taskform from "./Components/Taskform";

function App() {
  const [addbtn,setAddbtn]= useState(true)
  //  this above useState is used to add a functionality to the Add button 
  const [tasks, setTasks] = useState([]);

  // CRUD OPERATIONS
  // to fetch data from another server
  useEffect(() => {
      const getData = async() =>{
        const getDatafromserver= await fetchdata()
        setTasks(getDatafromserver)
      }
      getData()
    } 
   
  ,[])

  const fetchdata = async() =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data= await res.json()
     /*await-> it is an operator which waits for the promise this operator can only be used in 
      async function.
      async makes a function return a Promise
      await makes a function wait for a Promise */
      return data
    }


  //  creating function to save task
  // SAVE TASK

  const savetask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1; // this line will return
    // numbers 1-100
    const newTask = { id, ...task };
    // here '...task' is a spread operator which includes all the value
    // of that array task
    setTasks([...tasks, newTask]);
  };

  // now let us write a code to delete task(here we are just filtering it out the non deleted task)
  // Delete Task
  // to delete the task from server i.e from db.json file
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method : 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // creating reminder notification
  const onReminder = (id) => {
    //  console.log('reminder is working',id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, Reminder: !task.Reminder } : task
      )
    );
  };

  // const a = "sagar";
  return (
    <div className="App">
      {/* <h1 style={{color:'royalblue'}}>Hello this is {a}</h1> */}
      <Header title="Task-tracker"  onclickAdd={( )=> setAddbtn(!addbtn)  } addbtnvalue={addbtn}/>
      {/* if we won't define any properties then header container will take 
defaultpropes  */}
{ addbtn && <Taskform toaddtask={savetask} />
}
{/* this taskform will only show when when we click on 'Add' btn 
      note: we are using binary operation to toggle */}
      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={DeleteTask} onreminder={onReminder} />
      ) : (
        "Create new task"
      )}
    </div>
    // In above we have created ternary statement which will work as single line condition statement
    // that shows "create new task when there is no task created"
  );
}
// there are 3 ways to define the style for the tag
// 1. defining style inside the tag
// (<h1 style={{color:'royalblue'}}>Hello this is {a}</h1>)
// 2. defining style in some constant variable
//  <h1 style={headingstyle}>Hello this is {a}</h1>
// const headingstyle ={
//   color:'red'
//   backgroundcolor='black'
// }
// 3. creating a new .css file and defining the style dynamic styling
export default App;
