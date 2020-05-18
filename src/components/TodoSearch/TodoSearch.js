import React from 'react';
import classes from './TodoSearch.module.css'

const TodoSearch = (props) => {
    let allBtn = [classes.ControlBtn], activeBtn = [classes.ControlBtn], doneBtn = [classes.ControlBtn];
    if (props.mode === 'all') {
        allBtn.push(classes.Active)
    }
    if (props.mode === 'active') {
        activeBtn.push(classes.Active)
    }
    if (props.mode === 'done') {
        doneBtn.push(classes.Active)
    }

    return (
        <div className={classes.TodoSearch}>
            <input placeholder={'Type to search'} type="text"/>
            <div>
                <button
                    className={allBtn.join(' ')}
                    onClick={() => props.handleDisplay('all')}>All</button>
                <button
                    className={activeBtn.join(' ')}
                    onClick={() => props.handleDisplay('active')}>Active</button>
                <button
                    className={doneBtn.join(' ')}
                    onClick={() => props.handleDisplay('done')}>Done</button>
            </div>
        </div>
    );
};

export default TodoSearch;