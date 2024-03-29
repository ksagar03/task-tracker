// import logo from './logo.svg';
import { useState, useEffect } from "react";
 import {BrowserRouter as Routing, Route, Routes} from "react-router-dom"
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Taskform from "./Components/Taskform";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [addbtn,setAddbtn]= useState(true)
  //  this above useState is used to add a functionality to the Add button 
  const [tasks, setTasks] = useState([]);
// to create a useState we use above syntax 
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
     /*await-> it is an operator which waits for the promise, this operator can only be used in 
      async function.
      async makes a function return a Promise
      await makes a function wait for a Promise */
      return data
    }

    // this below will return single data based on requested id.
    const fetchsingledata = async(id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
       /*await-> it is an operator which waits for the promise this operator can only be used in 
        async function.
        async makes a function return a Promise
        await makes a function wait for a Promise */
        return data
      }


  //  creating function to save task
  // SAVE TASK

  const savetask = async (task) => {
    const res= await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(task)

  })

    const data= await res.json()
    setTasks([...tasks,data])

    
    // Just for reference
    // In bellow code we were creating random id but in above code json automaically creates id for
    //  the data.
    // const id = Math.floor(Math.random() * 100) + 1; // this line will return
    // // numbers 1-100
    // const newTask = { id, ...task };
    // // here '...task' is a spread operator which includes all the value
    // // of that array task
    // setTasks([...tasks, newTask]);
  };

  // now let us write a code to delete task(here we are just filtering it out the non deleted task)
  // Delete Task
  // to delete the task from server i.e from db.json file
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method : 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // creating reminder notification and updating(db.json) reminder value on toggleing 
  const onReminder = async (id) => {
    //  console.log('reminder is working',id)
    const onremindertask= await fetchsingledata(id)
    const updated_data={...onremindertask, Reminder:!onremindertask.Reminder}
    const res= await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type': 'Application/json',
      
      },
      body: JSON.stringify(updated_data)
      
    })
    const data = await res.json()
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, Reminder: data.Reminder } : task
      )
    );
  };

  // const a = "sagar";
  return (
   <Routing>
     <div className="container"> {/* CSS is defined using this class name*/}
      {/* <h1 style={{color:'royalblue'}}>Hello this is {a}</h1> */}
      <Header title="Task-tracker"  onclickAdd={( )=> setAddbtn(!addbtn)  } addbtnvalue={addbtn}/>
      {/* if we won't define any properties then header container will take 
      defaultpropes  */}
      <Routes>
      <Route path="/" element={
        <>
        { addbtn && <Taskform toaddtask={savetask} />
      } 
      {/* this taskform will only show when when we click on 'Add' btn 
      note: we are using binary operation to toggle */}
      {tasks.length > 0 ? (
        <Tasks task={tasks} onDelete={DeleteTask} onreminder={onReminder} />
      ) : (
        "Create new task"
      )}
      </>
      } />
      <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Routing>
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
