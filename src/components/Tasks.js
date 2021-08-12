import Task from "./Task";
import "./header.css";

function Tasks({ todos, changeItemState, deleteItem }) {
    return (
        <div className="todo-items-container">
            <ul className="todo-items-list">
               {todos.map(todo => <Task
                    key={todo.id} 
                    todo={todo}
                    handleChange={changeItemState.bind(this, todo.id)}
                    deleteItem={deleteItem.bind(this, todo.id)}
                />)} 
            </ul>
        </div>
    );
}

export default Tasks;
