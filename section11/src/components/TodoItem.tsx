import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItem({ id, content }: Props) {
  const dispatch = useTodoDispatch();
  return (
    <div>
      {`${id}번 : ${content}`}
      <button onClick={() => dispatch.deleteTodo(id)}>삭제</button>
    </div>
  );
}
