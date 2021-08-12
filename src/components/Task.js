import React from "react";
import './task.css';


function Task({ todo, handleChange, deleteItem }) {
    return (
        <div className={todo.compeleted ? 'item-container item-checked' : 'item-container'}>
            <li 
                className="todo-item"
            >{ todo.text }</li>
            <button onClick={handleChange} className="item-check">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteItem} className="item-remove">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default Task;
