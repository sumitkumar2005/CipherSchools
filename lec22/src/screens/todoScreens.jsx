import React, { useState } from 'react';
import './todoScreens.css';
import Task from './components/Task'; // Adjust the import path based on your folder structure
import AddTask from './components/addTask';

function TodoScreens() {
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, {
      title: "Go to gym",
      description: "Going gym is healthy",
      created_date: new Date()
    }]);
  };
  let addNewTask=(task)=>{
    setTaskList([...taskList,{...task,created_date : new Date()}])
  }

  return (
    <>
      <h1 className='ui heading center'>TodoList</h1>
      {/* <AddTask onSubmit={addNewTask}></AddTask> */}
      <button onClick={addTask} className='ui warning button'>
        Add task
      </button>
      <p>Task Count is {taskList.length}</p>
      <section>
        <div className="ui cards" style={{ margin: "10px", padding: "50px" }}>
          {taskList.map((task, index) => (
            <Task key={index} task={task}  />
          ))}
        </div>
      </section>
   
    </>
  );
}

export default TodoScreens;
