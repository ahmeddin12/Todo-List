import { useState } from "react";
import "./style.css";

function Todo() {
  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Sumbit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => {
            return (
              <li className="todo" key={id}>
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
