import React,{useState} from 'react';

function TodoInputForm({Add}){

    const[todo,setTodo]= useState({id: Date.now(), text: '', dateAdd: Date.now(), isComplete: false});

    function AddNewTodo(e){
        e.preventDefault();
        Add(todo);
        setTodo({id: 0, text: '', dateAdd: '', isComplete: false});
    }
    return(
        <form className='inputTodo'>
        <input 
          value={todo.text}
          type="text"
          onChange={(e)=>setTodo({...todo,id: Date.now(), dateAdd:Date.now(), text: e.target.value})}
        />
        <button onClick={(e)=>AddNewTodo(e)}>Add</button>
      </form>
    );
}

export default TodoInputForm;