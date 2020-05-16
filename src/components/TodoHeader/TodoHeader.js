import React, { useState } from 'react';
import classes from './TodoHeader.module.css'

const TodoHeader = props =>{
    const [todos, setTodos] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        props.addNewTodoItem(todos)
        setTodos('')
    };

    return (
        <nav className={classes.TodoHeader}>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="What do you want to do today?"
                    onChange={(e) => setTodos(e.target.value)}
                    value={todos}/>
                <button className={classes.AddBtn}>Add</button>
            </form>
        </nav>
    );
};

export default TodoHeader;