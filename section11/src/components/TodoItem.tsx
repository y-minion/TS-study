import { Todo } from "../types";

interface Props extends Todo {
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ id, content, deleteTodo }: Props) {
  return (
    <div>
      {`${id}번 : ${content}`}
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </div>
  );
}
