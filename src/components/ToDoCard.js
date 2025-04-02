'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ToDoCard({ toDoObj, children }) {
  return (
    <Card className="toDoCards" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <h3>{toDoObj.prompt}</h3>
        <h5>
          {toDoObj.description}
          {toDoObj.prompt}
        </h5>

        {/* SHOW TODO CARD CHECKBOX FOR IS DONE */}

        {children}
      </Card.Body>
    </Card>
  );
}

ToDoCard.propTypes = {
  toDoObj: PropTypes.shape({
    prompt: PropTypes.string,
    description: PropTypes.string,
  }),
  children: PropTypes.shape({}).isRequired,
};

export default ToDoCard;
