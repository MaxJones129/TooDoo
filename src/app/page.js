'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
// import { useAuth } from '@/utils/context/authContext';
import ToDoCard from '../components/ToDoCard';
import getTodos from '../api/todosData';

function Home() {
  // const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {todos.map((todo) => (
        <ToDoCard key={todo.firebaseKey} toDoObj={todo}>
          <Button>To Did Done</Button>
        </ToDoCard>
      ))}
    </div>
  );
}

export default Home;
