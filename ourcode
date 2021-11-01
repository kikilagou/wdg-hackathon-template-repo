
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
   * This is an example of a Hook.
   */
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    /**
     * If we haven't added text value for our Todo then don't do anything
     */
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

// The overall function that renders the overall HTML page and allows for calling methods to add, mark and remove Todos
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
     /**
     * ARRAY DESTRUCTURING
     * 
     */
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App

/**
 * Happy Coding ;D Enjoy React 
 */