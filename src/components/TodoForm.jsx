import { useState } from "react"
import App from "../App"

const TodoForm = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if(newTodo == "") {
            alert("You can't add an empty item")
        }
        else {
            addTodo({
                id: new Date().getTime(),
                text: newTodo,
            });
            setNewTodo('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className="flex items-center" onSubmit={handleSubmit}>
                <input className="mr-5 text-[19px] border rounded-lg py-[14px] shadow outline-none w-[400px] pl-2 my-2" type="text" value={newTodo} placeholder="What are we doing today?" onChange={(e) => setNewTodo(e.target.value)} />
                <button className="text-gray-100 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full h-10 w-10 text-3xl flex justify-center items-center" onClick={handleAddTodo}> + </button>
            </form>
        </div>
    )
}

export default TodoForm