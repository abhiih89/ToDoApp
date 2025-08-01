import { useState } from "react";

function TodoList({ tasks, onDelete}) {
    return (
        <div>
            <h2>my tasks</h2> 
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <strong style={{fontSize:'20px'}}>{task.text}</strong> - due: {task.dueDate} at {task.dueTime} <br/>
                        <em style={{fontSize:'13px'}}>Added on: {task.createdAt}</em>
                       
                        <button onClick={() => onDelete(index)}
                         style={{ marginLeft: '10px',  height:'30px',  fontSize:'12px' }}>🗑️</button>  
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default TodoList;
