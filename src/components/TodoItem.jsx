import React,{useState} from "react";

function TodoItem({todo,index,Delete,ChangeComplete}){

    const[status, setStatus] = useState(todo.isComplete);

    function Handle(){
        setStatus(!status);
        ChangeComplete(todo);
    }
    return(
        <div className="todoItem">
            <div>
                {index}{todo.text}{todo.isComplete}
            </div>
            <div>
                <button>Edit</button>
                <button onClick={()=>Delete(todo.id)}>Delete</button>
                <input type="checkbox" 
                    checked={status} 
                    onChange={()=>Handle()}/>
            </div>
        </div>
    );
}

export default TodoItem;