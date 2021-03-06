import React from 'react';
import TodoListItem from "./TodoListItem/TodoListItem";
import classes from './TodoList.module.css'

const TodoList = ({handelDone, removeTodoItem, handleImportant, mode, searchItems}) => {
    let listItem;
    const displayListItem = (mode) => {
        const newItems = searchItems();
        listItem = newItems.map(task => <TodoListItem
            key={task.id}
            id={task.id}
            title={task.title}
            done={task.done}
            important={task.important}
            handelDone={handelDone}
            handleImportant={handleImportant}
            removeTodoItem={removeTodoItem}/>)

        if(mode === 'done') {
            listItem = listItem.filter(item => item.props.done)
        }
        if(mode === 'active') {
            listItem = listItem.filter(item => !item.props.done)
        }
    };

    displayListItem(mode)

    return (
        <div className={classes.TodoList}>
            <ul>
                {listItem}
            </ul>
        </div>
    );
};

export default TodoList;