import React from "react";

/*
   Find the bug in this component
  
   When the user enters a todo into the text field and then clicks the "add button"
   a todo should be added to the list of todos.
*/
export default function Challenge2() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onAddTodo = () => {
    setTodos([todo]);
  };

  return (
    <>
      <div className="challenge-header">
        <h2>Challenge 2</h2>
        <p>
          When the user enters a todo into the text field and then clicks the
          "add button" a todo should be added to the list of todos.
        </p>
      </div>
      <div className="challenge-content">
        <input
          type="text"
          className="text-input"
          placeholder="Enter a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="button" onClick={onAddTodo}>
          Add Todo
        </button>
        <div className="todos">
          <h3 className="todo-header">Todos</h3>
          {todos.length > 0 &&
            todos.map((t) => <div className="todo">{t}</div>)}
        </div>
      </div>
    </>
  );
}
