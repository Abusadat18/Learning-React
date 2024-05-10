import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Profile from './Profile.jsx'
import Popeye from './Popeye.jsx'
import Spinach from './Spinach.jsx'
import DefaultProfile from "./DefaultProfile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "profile",
    element: <Profile/>,
    children: [
      {path: "popeye", element: <Popeye/>},
      {path: "spinach", element: <Spinach/>},
      {index: true, element: <DefaultProfile/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
