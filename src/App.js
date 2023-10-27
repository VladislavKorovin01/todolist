import './App.css';
import React,{useState,useEffect} from 'react';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';
import Header from './components/Header';

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

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <TodoInputForm Add={Add}/>
        <TodoList todolist={todolist} Delete={Delete}/>
      </div>
    </div>
  );
}

export default App;
