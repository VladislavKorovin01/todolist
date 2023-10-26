import './App.css';
import React,{useState} from 'react';
import TodoInputForm from './components/TodoInputForm';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  const[todolist, setTodolist]=useState([]);

  function Add(todo){
    setTodolist([...todolist,todo]);
    console.log(todolist);
  }

  function Delete(id){
    setTodolist(todolist.filter((t)=>t.id===id));
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
