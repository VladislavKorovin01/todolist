import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todolist, Delete, ChangeComplete}){
    return(
        <div>
            {todolist.map((todo,index)=>
            <div key={todo.id}> 
                <TodoItem todo={todo} index={index+1} Delete={Delete} ChangeComplete={ChangeComplete}/>
            </div>)}
        </div>
    );
}

export default TodoList;