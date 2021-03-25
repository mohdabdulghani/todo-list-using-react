import React,  { useState } from "react";




function App() {
    
    const [inputList,setInputList ] = useState()
    const [Item, setItem] = useState([])

    const itemEvent = (event) => {
      setInputList(event.target.value);
    }
    const listOfItems = () => {
       setItem((oldItem) => {
         return[...oldItem,inputList];
       })
       setInputList("")
    }

  return (
    <>
    <h1>To do list</h1>
  <input type="text" placeholder="enter text" value={inputList} onChange={itemEvent}></input>
    <button onClick={listOfItems}>+</button>
    <ol>
      
      {Item.map((itemval) => {
          return <li> {itemval} </li>;
      })}
    </ol>
    </>
    
  );
}

export default App;
