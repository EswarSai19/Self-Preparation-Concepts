import React, { useState, useRef } from "react";
import "../CSS/Todo.css";
import { useEffect } from "react";
import TodoLists from "./TodoLists";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  //   const [count, setCount] = useState(0);
  let count = 0;
  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    // setCount(count + 1);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div>
      <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your task"
            className="todo-input"
          />
          <div className="todo-add-btn" onClick={() => add()}>
            ADD
          </div>
        </div>
        <div className="todo-list">
          {todos.map((item, ind) => {
            return (
              <TodoLists
                key={ind}
                no={item.no}
                display={item.display}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
