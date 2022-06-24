import React, { useState } from "react";
import "./styles.css";
/* Import Components */
import Form from "./components/addForm";
import List from "./components/itemList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <h2>by Sthevanie DS</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
