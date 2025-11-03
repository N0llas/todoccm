import Button from "@/components/Button";
import InsertBox from "@/components/InsertBox";

import { ButtonType, TodoCacheType } from "@/Types";
import { getAll } from "@/actions/todo.actions";

import styles from '../Styles.module.scss';

export default async function HomePage() {
  const todos: TodoCacheType[] = await getAll();
  return (
    <div>
      <InsertBox />
      <div className={styles.todoContainer}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.text}</span>

            {/* Using a fixed text with a timestamp to 
              simulate a real-time update. */}
            <Button
              id={todo.id}
              text={`Updated record with id = ${todo.id} time=${(new Date()).getTime()}`}
              type={ButtonType.Update} />

            <Button
              id={todo.id}
              type={ButtonType.Remove} />
          </div>
        ))}
      </div>
    </div>
  );
};