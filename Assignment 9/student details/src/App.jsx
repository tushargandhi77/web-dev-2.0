import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './Layout/Layout'
import StudentInfo from './Pages/Studentinfo'
import StudentAcademicInfo from './Pages/Studentacdemic'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/studentinfo", element: <StudentInfo />},
        { path: "/studentacademic", element: <StudentAcademicInfo />}
      ]
    }
  ])

  return <RouterProvider router={router} />
  }


export default App
