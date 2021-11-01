import React from "react";

//Styles
import "../styles/Todo.css";

const Todo = ({ title, status, handleCompleteTodo, id }) => {
  return (
    <div className="todo-card">
      <div className="todo-title">
        <h4>{title.toUpperCase()}</h4>
      </div>

      <div className="todo-actions">
        <button
          className={status ? "reset": "complete"}
          onClick={() => handleCompleteTodo(id)}
        >
          {status ?  "Complete" : "Reset" }
        </button>
      </div>
    </div>
  );
};

export default Todo;
