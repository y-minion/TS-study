import { useState } from "react";

interface EditorProps {
  onClick: (text: string) => void;
}

export default function Editor({ onClick }: EditorProps) {
  const [text, setText] = useState("");

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = (text: string) => {
    onClick(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={() => addTodo(text)}>추가</button>
    </div>
  );
}
