// import logo from './logo.svg';

import Header from "./components/Header";

function App() {
  // const a = "sagar";
  return (
    <div className="App">
      {/* <h1 style={{color:'royalblue'}}>Hello this is {a}</h1> */}
      <Header title="Task-tracker" />
      {/* if we won't define any properties then header container will take 
defaultpropes  */}
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
