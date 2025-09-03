import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import { todo } from "node:test";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);
  const onClickBtn = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(() => todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClick={onClickBtn} />
      <div>
        {todos.map((item) => (
          <TodoItem
            id={item.id}
            content={item.content}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
