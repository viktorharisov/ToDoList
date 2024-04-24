import React from 'react';
import EditModal from "./EditModal";
import {doneHandler, importantHandler} from "../TaskService/TaskService";
import {CheckIcon, SunIcon} from "@chakra-ui/icons";

const TaskItem = ({task, onRemoveTask, setTasks}) => {
    return (
        <li className='item__delete'>
            <button onClick={() => doneHandler(task.id, setTasks)}>
                <CheckIcon color={task.isDone ? 'green' : 'black'}/>
            </button>
            <button onClick={() => importantHandler(task.id, setTasks)}>
                <SunIcon color={task.isImportant ? 'orangered' : 'black'}/>
            </button>

            <p className='item__delete-text'>{task.text}</p>
            <EditModal text={task.text} id={task.id} setTasks={setTasks}/>
            <button className='item__delete-btn' onClick={() => onRemoveTask(task.id)}>Удалить</button>

        </li>
    );
};

export default TaskItem;
