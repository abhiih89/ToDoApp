import TodoList from "../components/todolist";
import React, { useEffect, useState } from "react";
function TodoPage() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [taskDate, setTaskDate] = useState('');
    const [taskTime, setTaskTime] = useState('');

    useEffect(() =>{ 
       const savedTasks = localStorage.getItem('tasks');
       if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
       } 
    }, []);

    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        console.log("Loaded tasks from localStorage:", tasks);
    }, [tasks]);


    const handleAdd = () => {
        if (task.trim() !== ""){

            const newTask = {
                text : task,
                dueDate : taskDate,
                dueTime : taskTime,
                createdAt : new Date().toLocaleString()
            };
            setTasks([...tasks, newTask]); 
            setTask("");
            setTaskDate("");
            setTaskTime("");
        }
    };

    const handleDelete = (indexToDelete) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(updatedTasks);
    };

    return(
    <div style={{ padding: '20px', paddingTop: '10px',  }}>
        <h1 >To-DO List</h1>

        <input
        type="text" 
        value={task} placeholder="Enter  a task" 
        onChange={(e) => setTask(e.target.value)}/>

        <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}/>

        <input 
        type="time"
        value={taskTime} 
        onChange={(e) => setTaskTime(e.target.value)}/>

        <button onClick={handleAdd} >Add Task</button>

        <TodoList tasks={tasks} onDelete={handleDelete} />

    
    </div>
    );
}
export default TodoPage;
