import { createBrowserRouter, Outlet } from "react-router-dom";
import Dashboard from "./component/Dashboard"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/", 
        element: <Dashboard />,
      },
    
    ],
  },
]);

export default router;