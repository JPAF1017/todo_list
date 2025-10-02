import React, { useState } from 'react';
import './TodoList.css';

const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState([]);
const [listInputs, setListInputs] = useState([]);

const handleAddTodo = () => {
  if (headingInput.trim() !== ''){
    setTodos([...todos, {heading: headingInput, lists: []}]);
    setHeadingInput('');
  }
};

const TodoList = () => {
  

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
