import React from "react";
import { MyButton } from "./UI/MyButton/MyButton";

function TodoItem({todo,index,Delete,ChangeStatus}){
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
                <MyButton>Edit</MyButton>
                <MyButton onClick={()=>Delete(todo.id)}>Delete</MyButton>
                <input type="checkbox" onChange={()=>ChangeStatus(todo)}/>
            </div>
        </div>
    );
}

export default TodoItem;