'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ToDoCard({ toDoObj, children }) {
  // const [onToggle, setOnToggle] = useState(false);

  // const toggle = (firebaseKey) => {
  //   getSingleToDo(firebaseKey)
  // };

  return (
    <Card className="toDoCards" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h3>{toDoObj.prompt}</h3>
        <h5>
          {toDoObj.description}
          {toDoObj.prompt}
        </h5>

        <div>
          <input
            type="checkbox"
            checked={toDoObj.isDone}
            // onChange={() => onToggle(toDoObj.isDone)}
          />
          <span style={{ textDecoration: toDoObj.isDone ? 'line-through' : 'none' }}>{/* {toDoObj.description} */}</span>
        </div>

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
  }),
  children: PropTypes.shape({}).isRequired,
};

export default ToDoCard;
