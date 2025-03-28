import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTask = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo(""); 
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <Header />
      <div className="w-full max-w-lg bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter new task..."
            className="w-full p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-5 py-3 rounded-md text-lg font-bold shadow-md hover:bg-blue-800 transition-all"
          >
            Add
          </button>
        </div>
        <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
