import { getById } from "@/actions/todo.actions";

export default async function TodoPage({ params }: Readonly<{
  params: Promise<{ id: number }>;
}>) {
  const { id } = await params;

  // Fetch the todo item by id
  const todo = await getById(id);
  return (
    <div >
      {todo ? (
        <>
          <h1>{todo.id}</h1>
          <p>{todo.text}</p>
        </>
      ) : (
        <p>Todo not found !</p>
      )}
    </div>
  );
}