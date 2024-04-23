import React from 'react';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({tasks, onRemoveTask, setTasks, status}) => {

    const filteredTasks = tasks.filter((item)=>{
        if(status ==='done')
            return item.isDone
        else if(status === 'important')
            return item.isImportant
        else
            return true
    })


    return (
        <ul className='todo__block-list'>
            {filteredTasks.map((task)=>(
                <TaskItem
                    key={task.id}
                    task = {task}
                    setTasks={setTasks}
                    onRemoveTask = {onRemoveTask}/>
            ))}
        </ul>
    );
};

export default TaskList;