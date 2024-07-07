import React, { createContext, useState } from "react";
import {v4 as randomUUID} from "uuid"

const TaskContext = createContext();
const Task_Editable_list=["title","description"];

const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, { ...task, created_date: new Date(),taskId:randomUUID() }]);
  };
  const DeleteTask = (taskId)=>{
    setTaskList(taskList.filter((task)=>{task.taskId!=taskId}))
  }
   const editTask=(task)=>{
    for (let t of taskList)
      {
        if(t.taskId===task.taskId)
      }
   }
  return (
    <TaskContext.Provider value={{ taskList, addNewTask ,DeleteTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
export default TaskContext;
