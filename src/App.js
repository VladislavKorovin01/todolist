import './App.css';
import React,{useState} from 'react';
import TodoInputForm from './components/TodoInputForm';

function App() {


  function Add(e){
    e.preventDefault();

  }

  return (
    <div className="App">
      <TodoInputForm/>
    </div>
  );
}

export default App;
