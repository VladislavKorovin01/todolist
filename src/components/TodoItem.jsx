import React from "react";

function TodoItem({todo,index,Delete}){
    return(
        <div className="todoItem">
            <div className="indextext">
                <div className="indexItem">
                    {index}
                </div>
                <div className="texttodo">
                    {todo.text}
                </div>
            </div>

            <div>
                <button>Edit</button>
                <button onClick={()=>Delete(todo.id)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;