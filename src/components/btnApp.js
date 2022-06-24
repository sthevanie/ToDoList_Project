import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <input type="checkbox" onClick={completeHandler} />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "Line-through" : null,
          backgroundColor: todo.completed ? "lightgrey" : null
        }}
      >
        {text}
      </li>
      <button onClick={deleteHandler} className="trsh-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
