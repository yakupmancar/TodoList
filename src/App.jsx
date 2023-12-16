import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  //Local Storage'e veri kaydetme; 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  //Yeni bir Todo Ekleme;
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  //Bir Todo Silme;
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  //Bir Todo'yu güncelleme;
  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  }


  return (
    <div className="w-1/3 mx-auto mt-40">
      <h1 style={{letterSpacing: 7}} className="text-5xl font-bold text-gray-800 mb-4">TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  )


}
export default App
