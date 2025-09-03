import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

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

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClick={onClickBtn} />
    </div>
  );
}

export default App;
