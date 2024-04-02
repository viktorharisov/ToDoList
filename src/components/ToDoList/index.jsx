import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import {useState} from "react";
const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    const addTask =(text) =>{
        if(text.trim() !==''){
            const newTask = {
                id: Math.ceil(Math.random()*99999),
                text: text,
            };
            setTasks((prevTasks) => [...prevTasks,newTask]);
        }else{
            alert('Напишите задачу');
        }

    }

    const removeTask = (id) => {
        setTasks((prevTasks)=> prevTasks.filter((t)=> t.id !== id))
    }

    return(
        <div
            style = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                minHeight: '100vh',

        }}>
            <h1>Todolist</h1>
            <TaskInput onAddTask={addTask}/>
            <TaskList tasks={tasks} onRemovedTask ={removeTask}/>
        </div>
    );
  
}
export default TodoList