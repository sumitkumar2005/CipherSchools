import React, { useState, useContext } from 'react';
import TaskContext from './context/TaskContext';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: "",
    description: ""
  });
const navigate = useNavigate();
  const handleInput = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addNewTask(task);
    setTask({
      title: "",
      description: ""
    });
  };

  return (
    <>
      <section className='screen'>
        <h3 className='ui heading center'>Input your todo list info</h3>
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleInput}
              value={task.title}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleInput}
              value={task.description}
            />
          </div>
          <button type='submit' className="ui primary button" onClick={(e)=>{
           
          }}>
            Submit
          </button>
        </form>
        <button onClick={(e)=>navigate("/")}>Go back</button>
      </section>
    </>
  );
};

export default AddTask;
