
import React from "react";
/**
 * Conventional way for importing COMPONENTS in React
 */
import "./App.css";
/**
 * Conventional way for importing LIBRARIES in React
 */
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * 1) USING PRE-BUILT COMPONENTS: 
 * We import Buttom, Card and Form components from the React Bootstrap library.
 * Then we can use it in the code below in the JSX areas, eg in lines 14-25. 
 * For example we're using the Button component on line 21.
 */
import { Button, Card, Form } from 'react-bootstrap';

// Renders a Todo item on the page with buttons for marking the todo item as completed and for removing it from the page
function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

// Provides functionality for adding Todos to the list. Using a mix of HTML and JS to submit Todos
// It keeps track of the state of the App so we have visibilty of the other Todos 
function FormTodo({ addTodo }) {
  /**
     * Add you code here
     */

  const handleSubmit = e => {
    /**
     * Add you code here
     */
  };

  return (
    /**
     * Add you code here
     */
    <div></div>
  );
}

// The overall function that renders the overall HTML page and allows for calling methods to add, mark and remove Todos
function App() {
    /**
     * Add you code here
     */

  const addTodo = text => {
    /**
     * Add you code here
     */
  };

  const markTodo = index => {
     /**
     * Add you code here
     */
  };

  const removeTodo = index => {
    /**
     * Add you code here
     */
  };

  return (
    <div className="app">
      {/* Add you code here */}
    </div>
  );
}
export default App

/**
 * Happy Coding ;D Enjoy React 
 */