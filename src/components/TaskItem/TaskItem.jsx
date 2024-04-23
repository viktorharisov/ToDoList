import React from 'react';
import EditModal from "./EditModal";
import {doneHandler} from "../TaskService/TaskService";
import {CheckIcon} from "@chakra-ui/icons";

const TaskItem = ({task, onRemoveTask, setTasks}) => {
    return (
        <li className='item_delete'
            style ={{display: 'flex', alignItems: 'center', gap: '20px'}} >
            <button onClick = {() => doneHandler(task.id, setTasks)}>
                <CheckIcon color ={task.isDone ? 'green' : 'black'}/>
            </button>

            <p className='item_delete-text'>{task.text}</p>
            <EditModal text={task.text} id = {task.id} setTasks={setTasks}/>
            <button onClick={() => onRemoveTask(task.id) }>Удалить</button>

        </li>
    );
};

export default TaskItem;
