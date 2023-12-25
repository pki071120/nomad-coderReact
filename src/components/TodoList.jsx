import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    const li = () => {
      return <li>{todo}</li>;
    };
    setList((currentArray) => [...currentArray, li]);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do"
        />
        <button onClick={onSubmit}>Add Todo</button>
      </form>
      <ul>{list}</ul>
    </div>
  );
};

export default TodoList;
