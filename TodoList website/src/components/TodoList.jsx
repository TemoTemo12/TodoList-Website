// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [trash, setTrash] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // Add a new task to the Todo list
    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    // Delete a specific task and move it to Trash Bin
    const deleteTodo = (index) => {
        const deletedTodo = todos[index];
        setTodos(todos.filter((_, i) => i !== index));
        setTrash([...trash, deletedTodo]);
    };

    // Restore a specific task from Trash Bin to Todo list
    const restoreTodo = (index) => {
        const restoredTodo = trash[index];
        setTrash(trash.filter((_, i) => i !== index));
        setTodos([...todos, restoredTodo]);
    };

    // Clear all tasks in Todo list
    const deleteAllTodos = () => {
        setTrash([...trash, ...todos]);
        setTodos([]);
    };

    // Restore all tasks from Trash Bin to Todo list
    const restoreAllTodos = () => {
        setTodos([...todos, ...trash]);
        setTrash([]);
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br ${darkMode ? 'from-gray-800 to-gray-900' : 'from-purple-400 to-blue-500'} p-6`}>
            <div className={`max-w-lg w-full p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6`}>🎉 Todo List</h1>
                
                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="mb-4 bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold transition-transform transform hover:scale-105"
                >
                    Toggle Dark Mode
                </button>

                {/* Input and Add Button */}
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={`flex-1 border-2 rounded-lg p-3 mr-2 ${darkMode ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={addTodo}
                        className="bg-purple-600 text-white rounded-lg px-4 py-2 font-semibold transition-transform transform hover:scale-105"
                    >
                        Add
                    </button>
                </div>

                {/* Delete All Button */}
                <button
                    onClick={deleteAllTodos}
                    className="mb-4 bg-red-600 text-white rounded-lg px-4 py-2 font-semibold transition-transform transform hover:scale-105"
                >
                    Delete All
                </button>

                {/* Todo List */}
                <ul className="space-y-2 mb-6">
                    {todos.map((todo, index) => (
                        <li key={index} className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-102 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                            <span className="font-medium">{todo}</span>
                            <button
                                onClick={() => deleteTodo(index)}
                                className="bg-red-500 text-white rounded-lg px-3 py-1 transition-colors duration-300 hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Trash Bin Section */}
                <h2 className={`text-2xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-4`}>🗑️ Trash Bin</h2>

                {/* Restore All Button */}
                <button
                    onClick={restoreAllTodos}
                    className="mb-4 bg-green-600 text-white rounded-lg px-4 py-2 font-semibold transition-transform transform hover:scale-105"
                >
                    Restore All
                </button>

                {/* Trash List */}
                <ul className="space-y-2">
                    {trash.map((todo, index) => (
                        <li key={index} className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-102 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                            <span className="font-medium">{todo}</span>
                            <button
                                onClick={() => restoreTodo(index)}
                                className="bg-green-500 text-white rounded-lg px-3 py-1 transition-colors duration-300 hover:bg-green-600"
                            >
                                Restore
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
