// import logo from './logo.svg';
import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  
  const [task,settask] =useState([{id:1,
    text:"waking up at morning",
    day:"10th june at 05:00AM",
    Reminder:true},
    {id:2,
     text:"shopping",
     day:"11th june at 10:00AM",
     Reminder:true},
     {id:3,
        text:"cleaning",
        day:"12th june at 05:00PM",
        Reminder:false},])





  // const a = "sagar";
  return (
    <div className="App">
      {/* <h1 style={{color:'royalblue'}}>Hello this is {a}</h1> */}
      <Header title="Task-tracker" />
      {/* if we won't define any properties then header container will take 
defaultpropes  */}

      <Tasks task={task} />
    </div>
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
