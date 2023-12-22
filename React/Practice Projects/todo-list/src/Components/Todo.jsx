import React, { useState, useRef } from "react";
import "../CSS/Todo.css";
import { useEffect } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const add = () => {
    setTodos([
      ...todos,
      { no: count, text: inputRef.current.value, display: "" },
    ]);
    setCount(count + 1);
    inputRef.current.value = "";
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add todo here"
            className="todo-input"
          />
          <div className="todo-add-btn" onClick={() => add()}>
            ADD
          </div>
        </div>
        <div className="todo-list">
          {/* {todos.map((item, ind) => {
            return (
              <h2 key={ind}>
                {ind + 1}. {item}
              </h2>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
