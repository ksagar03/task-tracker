// import logo from './logo.svg';
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Taskform from "./components/Taskform";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "waking up at morning",
      day: "10th june at 05:00AM",
      Reminder: false
    },
    { id: 2, text: "shopping", day: "11th june at 10:00AM", Reminder: true },
    { id: 3, text: "cleaning", day: "12th june at 05:00PM", Reminder: false }
  ]);

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
  const DeleteTask = (id) => {
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
      <Header title="Task-tracker" />
      {/* if we won't define any properties then header container will take 
defaultpropes  */}
      <Taskform toaddtask={savetask} />

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
