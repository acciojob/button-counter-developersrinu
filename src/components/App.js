
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [counter,setCounter] = useState(0)
  return (
    <div>
    <p>Button clicked {counter} times</p>
    <button onClick={()=>{setCounter(counter+1)}}>click me</button>
       
    </div>
  )
}

export default App
