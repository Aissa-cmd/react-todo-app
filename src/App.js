import useLocalStorage from './useLocalStorage';
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const addTodo = (text) => {
        const newTodo = { id: todos.length, text: text };
        setTodos((currentTodos) => [...currentTodos, newTodo]);
    };

    const changeItemState = (id) => {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, compeleted: !todo.compeleted};
                }
                else return todo;
            })
        })
    }

    const deleteItem = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <Input addTodo={addTodo} />
                <Tasks todos={todos} changeItemState={changeItemState} deleteItem={deleteItem} />
            </div>
        </div>
    );
}

export default App;
