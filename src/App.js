import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  //let counter = 5; this variable will be updated but not propogate in the UI
  let[counter, setCounter] = useState(15)
  const addValue = ()=>{
    console.log("Clicked")

    // this will updated only once
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    //when you give like this then it update it 3 times
    //setCounter((prevCounter)=>prevCounter+1)
    //setCounter((prevCounter)=>prevCounter+1)
    //setCounter((prevCounter)=>prevCounter+1)
  }
  const removeValue = ()=>{
    if(counter <= 0){
      setCounter(0)
    }
    else{
      setCounter(counter - 1)
    }
  }
    
  
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //</div>
  );
}

export default App;
