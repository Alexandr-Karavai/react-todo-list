import React from 'react';
import classes from './TodoListItem.module.css'

const TodoListItem = props => {
    const styleDoneItem = [classes.TodoListItem];
    if (props.done) {
        styleDoneItem.push(classes.Checked)
    }
    if (props.important) {
        styleDoneItem.push(classes.ImportantItem)
    }

    return (
        <React.Fragment>
            <li className={styleDoneItem.join(' ')}>
                {props.title}
                <div>
                    <button className={[classes.ControlBtn, classes.CompleteBtn].join(' ')}
                            onClick={() => props.handelDone(props.id)}>
                        <i className="fas fa-check fa-lg"></i>
                    </button>
                    <button className={[classes.ControlBtn, classes.ImportantBtn].join(' ')}
                            onClick={() => props.handleImportant(props.id)}>
                        <i className="fas fa-exclamation fa-lg"></i>
                    </button>
                    <button className={[classes.ControlBtn, classes.RemoveBtn].join(' ')}
                            onClick={() => props.removeTodoItem(props.id)}>
                        <i className="fas fa-trash fa-lg"></i>
                    </button>
                </div>
            </li>
        </React.Fragment>
    );
};

export default TodoListItem;