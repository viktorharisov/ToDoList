import React from 'react';

const TaskItem = ({task, onRemoveTask}) => {
    return (
        <li style ={{display: 'flex', alignItems: 'center', gap: '20px'}} >
            <p>{task.text}</p>
            <button onClick={() => onRemoveTask(task.id) }>Удалить</button>
        </li>
    );
};

export default TaskItem;