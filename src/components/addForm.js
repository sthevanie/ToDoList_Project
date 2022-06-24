import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const FormHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={FormHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        ADD
      </button>
    </form>
  );
};
export default Form;
