import React,{useState} from 'react';

function TodoInputForm(){

    const[todo,setTodo]= useState({id: Date.now(), text: '', dateAdd: Date.now(), isComplete: false});

    return(
        <form className='inputTodo'>
        <input 
          value={todo.text}
          type="text"
          onChange={(e)=>setTodo({...todo, text: e.target.value})}
        />
        <button onClick={(e)=>""}>Add</button>
      </form>
    );
}

export default TodoInputForm;