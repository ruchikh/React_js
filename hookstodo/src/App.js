import React from 'react';
import './App.css';
import TextTodo from './components/TextTodo' 
import {useState} from "react";
import TodoList from './components/TodoList';
// import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todos</h1>

      <TextTodo saveTodo={todotext => {
        const trimtext = todotext.trim();
        if(trimtext.length>0){
          setTodos([...todos, trimtext]);
        }
      }} />
      <TodoList todos={todos} deleteTodo={todoIndex => {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
  
    setTodos(newTodos);
  }}/>
      
    </div>
  );
}

export default App;
