import App from "../App"
import TodoItem from "./TodoItem"

const TodoList = ({todos, editTodo, deleteTodo}) => {

    return (
        <div>
            <ul>
                {
                    todos.map((todo) => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList