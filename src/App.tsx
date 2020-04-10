import React, { useState } from 'react';

import TodoContextProvider from './components/context/todoContext';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <TodoContextProvider>
      <div className='App'>
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      </div>
    </TodoContextProvider>
  );
};

export default App;
