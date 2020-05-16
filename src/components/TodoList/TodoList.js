import React from 'react';
import TodoListItem from "./TodoListItem/TodoListItem";
import classes from './TodoList.module.css'

const TodoList = ({items, handelDone, removeTodoItem, handleImportant}) => {
    return (
        <div className={classes.TodoList}>
            <ul>
                {
                    items.map(task => <TodoListItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        done={task.done}
                        important={task.important}
                        handelDone={handelDone}
                        handleImportant={handleImportant}
                        removeTodoItem={removeTodoItem}/>)
                }
            </ul>
        </div>
    );
};

export default TodoList;