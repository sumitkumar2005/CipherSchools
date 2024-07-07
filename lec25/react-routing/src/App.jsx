import React, { useState } from 'react'
import TodoScreens from './screens/todoScreens'
import AddTask from './screens/components/addTask'
import { createBrowserRouter,Router, RouterProvider } from 'react-router-dom'

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<TodoScreens/>
      },
      {
        path:"/add-task",
        element:<AddTask/>
      }
    ]
  );
  const App = () =>{
    const [tasks, settasks] = useState([])
    return <RouterProvider router={router}/>;
  }



export default App
