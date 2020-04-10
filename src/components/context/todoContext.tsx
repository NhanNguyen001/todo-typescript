import React, { useState, createContext } from 'react';

import axios from 'axios';

export type Todo = {
  title: string;
  userId?: number;
  id?: number | string;
  completed?: boolean;
};

type Todos = Todo[];

interface TodoContextType {
  todos: Todos;
  fetchTodos: () => void;
  addTodo: (todo: Todo) => void;
  delTodo: (todo: Todo) => void;
}

type Props = {
  children: React.ReactNode;
};

let url: string = `https://jsonplaceholder.typicode.com/todos?_limit=10`;

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoContextProvider = ({ children }: Props): JSX.Element => {
  const [todos, setTodos] = useState<Todos | []>([]);

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(url);
      setTodos(data);
    } catch (error) {
      console.log('error');
    }
  };

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const delTodo = (todo: Todo) => {
    console.log(todo);
    const newTodos = todos.filter((tod) => tod.title !== todo.title);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, fetchTodos, addTodo, delTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
