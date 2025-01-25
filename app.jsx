
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description) {
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
      setTitle(''); 
      setDescription('');
    }
  };

  return (
    <div>
      <h1>TODO Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Title" 
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="Description" 
            />
          </label>
        </div>
        <button type="submit">Add TODO</button>
      </form>
      <div >
        {todos.map((todo, index) => (
          <div key={index}>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
