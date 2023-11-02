import './App.css';
import React,{useState,useEffect} from 'react';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { MyButton } from './components/UI/MyButton/MyButton';

function App() {

  const data = JSON.parse(localStorage.getItem('todolist'));
  // const data =null;
  const[todolist, setTodolist]=useState( data ? data : []);

  useEffect(()=>{localStorage.setItem('todolist', JSON.stringify(todolist));},[todolist])

  function Add(todo){
    setTodolist([...todolist,todo]);
  }

  function Delete(id){
    setTodolist(todolist.filter((t)=>t.id!==id));
  }

  function ChangeStatus(todo){
    let index = todolist.indexOf(todo);
    todo.isComplete = !todo.isComplete;
    
  }

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <TodoInputForm Add={Add}/>
        <TodoList todolist={todolist} Delete={Delete} ChangeStatus={ChangeStatus}/>
      </div>
    </div>
  );
}

export default App;
