import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
         <Counter></Counter>
    </div>
  );
}







// counter
function Counter(){
  const [count,setCount]=useState(0)
  const increaseHandle=()=>setCount(count+1)
  const decreaseHandle=()=>setCount(count-1)
  return(
    <div style={{color:"red",backgroundColor:"lightblue",width:"20%",padding:"20px",
    border:"2px solid blue",borderRadius:"20px",margin:"30px auto"}}>
      <h3>Count:{count}</h3>
      <button onClick={increaseHandle}>Increase</button>
      <button onClick={decreaseHandle}>Decrease</button>
    </div>
  )
}
export default App;
