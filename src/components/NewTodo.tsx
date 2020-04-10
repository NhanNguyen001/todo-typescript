import React, { useState, useContext } from 'react';
import { Button, Input } from 'antd';

import { TodoContext, Todo } from './context/todoContext';

import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [value, setValue] = useState<Todo>({ title: '' });
  const { title } = value;
  const { addTodo } = useContext(TodoContext)!;

  const handleChange = (event: HandleNameChangeInterface) => {
    console.log('handleChange');
    const { value } = event.target;
    setValue({ title: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit');
    addTodo(value);
    setValue({ title: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <Input
          type='text'
          id='todo-text'
          name='title'
          value={title}
          placeholder='Add Todo ...'
          onChange={handleChange}
        />
      </div>
      <Button htmlType='submit' type='primary'>
        Add Todo
      </Button>
    </form>
  );
};

export default NewTodo;
