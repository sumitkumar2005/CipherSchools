import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import TaskContext from './context/TaskContext';

const Task = ({ task: { title, description, created_date,taskId } }) => {
  const {DeleteTask} = useContext(TaskContext);
  const [isEdit, setisEdit] = useState(false)
  return (
    <div className="card">
      <div className="content">
        <img
          className="right floated mini ui image"
          src="/images/avatar/large/elliot.jpg"
          alt="avatar"
        />
        <div className="header">
          {title}
        </div>
        <div className="meta">
          {description}
        </div>
        <div className="description">
          {created_date.toLocaleString()}
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">completed</div>
          <div className="ui basic red button " onClick={(e)=>{
            DeleteTask(taskId)
          }}>Delete</div>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    created_date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Task;
