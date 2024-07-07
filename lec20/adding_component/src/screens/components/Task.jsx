import React from 'react';

const Task = ({ title, description }) => {
  return (
    <div className="task">
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default Task;
