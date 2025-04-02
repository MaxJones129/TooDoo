'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toggleDone } from '../api/todosData';

function ToDoCard({ toDoObj, children, onUpdate }) {
  // const [onToggle, setOnToggle] = useState(false);

  // const toggle = (firebaseKey) => {
  //   getSingleToDo(firebaseKey)
  // };
  const doDone = () => {
    toggleDone(toDoObj.firebaseKey, toDoObj.isDone).then(() => onUpdate());
  };

  return (
    <Card className="toDoCards" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h3>{toDoObj.prompt}</h3>
        <h5>
          {toDoObj.description}
          {toDoObj.prompt}
        </h5>
        <Button variant={toDoObj.isDone ? 'danger' : 'outline-danger'} onClick={doDone}>
          {toDoObj.isDone ? '⭐' : '❌'}
        </Button>

        {children}
      </Card.Body>
    </Card>
  );
}

ToDoCard.propTypes = {
  toDoObj: PropTypes.shape({
    prompt: PropTypes.string,
    description: PropTypes.string,
    isDone: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
  children: PropTypes.shape({}).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ToDoCard;
