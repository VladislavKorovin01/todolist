import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todolist, Delete, ChangeStatus}){
    return(
        <div>
            {todolist.map((todo,index)=>
            <div key={todo.id}> 
                <TodoItem todo={todo} index={index+1} Delete={Delete} ChangeStatus={ChangeStatus}/>
            </div>)}
        </div>
    );
}

export default TodoList;