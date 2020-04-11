import React, { useContext, useEffect } from 'react';

import { TodoContext, Todo } from './context/todoContext';

import { Button } from 'antd';

import './TodoList.css';


const TodoList: React.FC = () => {
  const { todos, fetchTodos, delTodo } = useContext(TodoContext)!;

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = (todo: Todo) => {
    delTodo(todo);
  };

  const renderList = todos ? (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo.title}</span>
          <Button onClick={() => handleDelete(todo)} type='primary' danger>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  ) : (
    <p className='spinner'>Please waiting</p>
  );

  return renderList;
};

export default TodoList;
