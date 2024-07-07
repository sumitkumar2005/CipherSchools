import React, { useContext } from 'react';
import './todoScreens.css';
import Task from './components/Task';
import { useNavigate } from 'react-router-dom';
import TaskContext from './components/context/TaskContext';

function TodoScreens() {
  const { taskList } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <>
      <h1 className='ui heading center'>TodoList</h1>
      <button className='ui primary button' onClick={() => navigate('/create')}>
        AddTask
      </button>
      <p>Task Count is {taskList.length}</p>
      <section>
        <div className="ui cards" style={{ margin: "10px", padding: "50px" }}>
          {taskList.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TodoScreens;
