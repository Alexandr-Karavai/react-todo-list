import React, {Component} from 'react';
import TodoHeader from "../../components/TodoHeader/TodoHeader";
import TodoList from "../../components/TodoList/TodoList";
import classes from './Todo.module.css'

class Todo extends Component {
    state = {
        items: [
            {id: 123, title: 'Learn JS', important: false, done: false},
            {id: 112, title: 'Learn React', important: true, done: false},
            {id: 134, title: 'Learn Node', important: false, done: true},
            {id: 152, title: 'Learn MongoDB', important: false, done: false}
        ]
    };

    handleDone = id => {
        this.setState(prevState => {
            const newState = prevState.items.map(item => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item
            });
            return {
                items: newState
            }
        });
    };

    handleImportant = id => {
        this.setState(prevState => {
            const newState = prevState.items.map(item => {
                if (item.id === id) {
                    item.important = !item.important;
                }
                return item
            });
            return {
                items: newState
            }
        });
    };

    createTodoItem = title => ({id: this.state.items.length + 1, title, important: false, done: false});

    addNewTodoItem = title => {
        this.setState(prevState => {
            return {
                items: [...prevState.items, this.createTodoItem(title)]
            }
        })
    };

    removeTodoItem = id => {
        this.setState(prevState => {
            const newItems = [...prevState.items]
            newItems.splice(prevState.items.findIndex(item => item.id === id), 1)
            return {
                items: newItems
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className={classes.Todo}>
                    <div className={classes.TodoWrapper}>
                        <TodoHeader addNewTodoItem={this.addNewTodoItem}/>
                        <TodoList
                            items={this.state.items}
                            handelDone={this.handleDone}
                            handleImportant={this.handleImportant}
                            removeTodoItem={this.removeTodoItem}/>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

export default Todo;