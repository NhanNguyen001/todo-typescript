import React  from 'react';

import TodoContextProvider from './components/context/todoContext';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import './App.css';

const App: React.FC = () => {

  return (
    <TodoContextProvider>
      <div className='App'>
        <NewTodo />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
