import React from "react";
import Button from "../Button";

/*
   Find the bug in this component
  
   When the user enters a todo into the text field and then clicks the "add button"
   a todo should be added to the list of todos.
*/
export default function Challenge2() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onAddTodo = () => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Challenge 2</h2>
        <p>
          When the user enters a todo into the text field and then clicks the
          "add button" a todo should be added to the list of todos.
        </p>
      </div>
      <div>
        <input
          type="text"
          className="px-8 py-2 rounded shadow border border-gray-400"
          placeholder="Enter a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={onAddTodo}>Add Todo</Button>
        <div className="my-4">
          <h3 className="text-xl mb-1">Todos</h3>
          <div>
            {todos.length > 0 &&
              todos.map((t) => (
                <div className="py-1 border-b border-gray-300 odd:bg-gray-100 last:border-0">
                  {t}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
