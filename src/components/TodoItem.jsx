import { useState } from "react"
import App from "../App"
import Checkbox from '@mui/material/Checkbox';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    //Düzenleme butonu;
    const handleEdit = () => {
        setIsEditing(true)
    }

    //Düzenlemeyi kaydetme;
    const handleSave = () => {
        editTodo(todo.id, editedText);
        setIsEditing(false);
    }




    return (

        <div>
            <li>
                {isEditing ?
                    (
                        <>
                            <input typeof="submit" className="pl-2 mt-4 outline-none text-gray-700 bg-white rounded-md text-[17px] w-[400px] py-4 items-center" type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                            <button  className="text-xl pl-2" onClick={editedText == "" ? alert("You can't add an empty item") : handleSave}><i class="fa-solid fa-floppy-disk"></i></button>
                        </>
                    ) :

                    (
                        <div className="flex pt-4 ">

                            <div className="flex text-gray-700 bg-white rounded-md text-[17px] w-[400px] py-2 items-center">
                                <Checkbox />
                                <div>{todo.text}</div>
                            </div>
                            <button className="text-xl px-2 " onClick={handleEdit}><i class="fa-solid fa-pen-to-square"></i></button>
                            <button className="text-xl hover:translate-x-1 hover:-translate-y-1 transition duration-300" onClick={() => deleteTodo(todo.id)}> <i class="fa-solid fa-trash"></i> </button>
                        </div>
                    )
                }
            </li>
        </div>
    )
}

export default TodoItem