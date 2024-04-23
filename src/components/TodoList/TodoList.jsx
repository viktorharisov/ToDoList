import TaskInput from "../TaskInput/Taskinput";
import TaskList from "../TaskList/TaskList";
import {useState} from "react";
import {Button, ChakraProvider} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import TaskStatus from "../TaskStatus/TaskStatus";
import {DeleteIcon} from "@chakra-ui/icons";

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
                isDone: false,
                isImportant: false,
            };
            setTasks((prevTasks) => [...prevTasks,newTask]);
        }else{
            alert('Напишите задачу');
        }

    }

    const deleteTasksByStatus = () => {
        switch (status) {
            case 'important':
                return setTasks((prev) => prev.filter((item)=>!item.isImportant))
            case 'done':
                return setTasks((prev) => prev.filter((item)=>!item.isDone))
            default:
                return setTasks([])
        }
    }

    const tabText = () => {
        switch (status) {
            case 'done':
                return 'выполненных';
            case 'important':
                return 'важных';
            default:
                return 'всех задач';
        }
    };

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
                <div className='delete__status'>
                    <Button
                        onClick={deleteTasksByStatus}>
                        Очистить список задач из {tabText()}
                        <DeleteIcon ms={1}/>
                    </Button>
                </div>
            </div>
        </ChakraProvider>
    );
  
}
export default TodoList