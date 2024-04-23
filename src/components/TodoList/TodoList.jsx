import TaskInput from "../TaskInput/Taskinput";
import TaskList from "../TaskList/TaskList";
import {useState} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import TaskStatus from "../TaskStatus/TaskStatus";

import TasksDelete from "../TaskStatus/TasksDelete";

const TodoList = () => {

    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('all')

    const addTask = (text) =>{
        const isInclude = tasks.some((task) => task.text === text);
        if (isInclude){
            alert('Данная задача уже сущестует')
            return;
        }

        if(text.trim() !==''){
            const newTask = {
                id: uuidv4(),
                text: text,
                isDone: status === 'done',
                isImportant: status === 'important',
            };
            setTasks((prevTasks) => [...prevTasks,newTask]);
        }else{
            alert('Напишите задачу');
        }
    }

    const removeTask = (id) => {
        setTasks((prevTasks)=> prevTasks.filter((task)=> task.id !== id))
    }

    return(
        <ChakraProvider>
            <div className='todo_block'
                style = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: '100vh',

            }}>
                <h1>Todolist</h1>
                <TaskInput onAddTask={addTask}/>
                <TaskStatus setStatus={setStatus} />
                <TaskList status={status}
                          setTasks={setTasks}
                          tasks={tasks}
                          onRemoveTask={removeTask} />
                <TasksDelete status={status}
                             setTasks={setTasks}
                             tasks={tasks}/>
            </div>
        </ChakraProvider>
    );
  
}
export default TodoList