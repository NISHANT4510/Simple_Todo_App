import ToDoItem from "./TodoItem";

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;