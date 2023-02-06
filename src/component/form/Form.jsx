import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/todo-context';
import './form.css'

function Form() {
     const [title, setTitle] = useState("");
     const { todoList, updateTodoList } = useContext(TodoContext);
   
     const handleSubmit = (e) => {
       e.preventDefault();
   
       if (title === "") {
         alert("Vui long nhap tieu de");
         return;
       }
   
       updateTodoList([title, ...todoList]);
     };
   
     return (
       <div className="add-form">
         <input
           onChange={(e) => setTitle(e.target.value)}
           className="add-form-title-field"
           type={"text"}
         />
         <button onClick={handleSubmit} className="add-form-submit-button">
           Add
         </button>
       </div>
     )
}

export default Form;