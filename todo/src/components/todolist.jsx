import { useState } from "react";

function TodoList({ tasks, onDelete}) {
    return (
        <div>
            <h2>my tasks</h2> 
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <strong>{task.text}</strong> - due: {task.dueDate} at {task.dueTime} <br/>
                        <em>Added on: {task.createdAt}</em>
                       
                        <button onClick={() => onDelete(index)}
                         style={{ marginLeft: '10px' }}>Delete</button>  
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default TodoList;
