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
    setList((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  console.log(list);
  return (
    <div>
      <h1>My Todos ({list.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add Todo</button>
      </form>
      <hr />
      {list.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default TodoList;
