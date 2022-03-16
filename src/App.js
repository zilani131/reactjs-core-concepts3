import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
         <Counter></Counter>
         <Comments></Comments>
    </div>
  );
}
function Comments(){
  const [comments,setComment]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.json())
    .then(data=>setComment(data))
  },[])
  return(
    <div>
      {comments.map(comment=><Commnet email={comment.email} body={comment.body}></Commnet>)}
    </div>
  )
}
function Commnet(props){
  return (
    <div>
      <h2>Email:{props.email}</h2>
      <h3>{props.body}</h3>
    </div>
  )
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
