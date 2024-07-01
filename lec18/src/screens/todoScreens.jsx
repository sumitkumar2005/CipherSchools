import React, { useState } from 'react';
import './todoScreens.css';
import Task from './components/Task'; // Adjust the import path based on your folder structure

function TodoScreens() {
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, {
      title: "Go to gym",
      description: "Going gym is healthy"
    }]);
  };

  return (
    <>
      <h1 className='ui heading center'>TodoList</h1>
      <button onClick={addTask} className='ui warning button'>
        Add task
      </button>
      <p>Task Count is {taskList.length}</p>
      {taskList.map((task, index) => (
        <Task key={index} title={task.title} description={task.description} />
      ))}
    </>
  );
}

export default TodoScreens;
