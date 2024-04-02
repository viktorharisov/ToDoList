import React from 'react';
import TaskItem from "../TaskItem";

const TaskList = ({tasks, onRemovedTask}) => {
    return (
        <ul>
            {tasks.map((task)=>(
                <TaskItem key={task.id} task = {task} onRemoveTask = {onRemovedTask}/>
            ))}
        </ul>
    );
};

export default TaskList;