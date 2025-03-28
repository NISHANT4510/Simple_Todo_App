import { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() === "") return;
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md transition-all transform hover:scale-105">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 accent-green-500"
        />
        {isEditing ? (
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {isEditing ? (
          <button onClick={handleEdit} className="text-green-500 text-xl">✔️</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 text-xl">✏️</button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 text-xl">🗑️</button>
      </div>
    </li>
  );
}

export default ToDoItem;