import React from 'react';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, onRemoveTask, setTasks, status}) => {
    const filteredTasks = tasks.filter((item)=>{
        if(status ==='done')
            return item.isDone
        else if(status === 'important')
            return item.isDone
        else
            return true
    })



    return (
        <ul>
            {tasks.map((task)=>(
                <TaskItem
                    key={task.id}
                    task = {task}
                    onRemoveTask = {onRemoveTask}/>
            ))}
        </ul>
    );
};

export default TaskList;