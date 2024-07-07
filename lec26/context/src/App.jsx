import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoScreens from './screens/todoScreens';
import AddTask from './screens/components/AddTask';
import { TaskProvider } from './screens/components/context/TaskContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoScreens />
  },
  {
    path: "/create",
    element: <AddTask />
  }
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
};

export default App;
