import React, {useState} from 'react';

import './App.css';


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([])

  

  function addItem(){
    console.log(newItem);
    
    if (!newItem){
      alert("Enter an item.");
      return;
    }
    

    let temp = [...items]
    console.log(temp);
    temp.push(newItem);
    setItems(temp);
    console.log(items)
    setNewItem("");

  }

  function deleteitem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);

  }

  return (
    <div className="App">
    
    <h1>To do List </h1>

    <input 
    
    type="text"
    placeholder='Add an item ...'
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    />

    <button onClick={() => addItem()}>Add</button>

    <ul> 
      {items.map((item,index) => {
        return( 
          <li key={index}>{item} 
          <button onClick={() => deleteitem(item.id)}>☓</button>
          </li>
        )
      }) }
    </ul>

    
    </div>
  );
}

export default App;
