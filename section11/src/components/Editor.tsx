import { useContext, useState } from "react";
import { useTodoDispatch } from "../App";

interface EditorProps {}

export default function Editor({}: EditorProps) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = (text: string) => {
    dispatch.onClickBtn(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={() => addTodo(text)}>추가</button>
    </div>
  );
}
