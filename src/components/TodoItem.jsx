import React from "react";

function TodoItem({todo,index,Delete}){
    return(
        <div className="todoItem">
            <div>
                {index}{todo.text}{todo.isComplete}
            </div>
            <div>
                <button>Edit</button>
                <button onClick={()=>Delete(todo.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;