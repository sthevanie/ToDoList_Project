import React from "react";
import Todo from "./btnApp";

const List = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <ul className="list-todo">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};
export default List;
