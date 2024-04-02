import React from 'react';

const TaskInput = ({ onAddTask }) => {


    const onFinish =(e) => {
      e.preventDefault()
        const input = e.target.label;
        const inputValue = input.value;
        onAddTask(inputValue);
        input.value ='';

    };
    return (
        <form onSubmit={onFinish}>
            <input type='text' name = "label"/>
            <button type='submit'>Создать</button>
        </form>
    );
};

export default TaskInput;