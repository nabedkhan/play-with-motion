"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate, usePresence } from "motion/react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: "1", title: "Buy groceries", completed: false },
  { id: "2", title: "Finish project", completed: false },
  { id: "3", title: "Call the bank", completed: false }
];

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleAddTodo = () => {
    if (newTodoTitle.trim()) {
      addTodo(newTodoTitle);
      setNewTodoTitle("");
    }
  };

  const addTodo = (title: string) => {
    const newTodo: Todo = { id: Date.now().toString(), title, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
                <div className="flex gap-2">
                  <input
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    type="text"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task..."
                  />

                  <button
                    onClick={handleAddTodo}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Add
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  <AnimatePresence>
                    {todos.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodo}
                        onToggle={toggleTodo}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodoItem({
  todo,
  onDelete,
  onToggle
}: {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          {
            scale: 0.97
          },
          { duration: 0.2, delay: 0.1 }
        );

        await animate(
          scope.current,
          {
            opacity: 0,
            x: todo.completed ? 20 : -20
          },
          {
            duration: 0.2,
            delay: 0.2
          }
        );

        safeToRemove();
      };

      exitAnimation();
    }
  }, [isPresent]);

  return (
    <motion.div
      layout
      ref={scope}
      className={`flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
        todo.completed ? "line-through" : ""
      }`}>
      <input
        type="checkbox"
        className="h-5 w-5 text-blue-500 cursor-pointer"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <span className="flex-1">{todo.title}</span>

      <button
        className="text-red-500 hover:text-red-600 cursor-pointer"
        onClick={() => onDelete(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </motion.div>
  );
}
