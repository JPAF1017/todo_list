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

      <div className='input-container'>{/* Input field to enter new heading */}
        <input
          type="text"
          className='heading-input'//CSS class for styling
          placeholder='Enter heading'//Text shown when input is empty
          value={headingInput}
          onChange={(e) => (setHeadingInput(e.target.value))}//Add onChange event handler to update headinInput state
        />
        {/* Button to add the entered heading to the todo list */}
        <button className='add-list-button' onClick={handleAddTodo}>Add Heading</button>
      </div>
    </>
  );
};

export default TodoList;
