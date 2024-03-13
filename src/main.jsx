import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './component/Header.jsx'
import Courseslist from './component/Courselist.jsx'
import Signup from './component/Signup.jsx'
import Enroll from './component/Enroll.jsx'
const router=createBrowserRouter([

  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"signup",
        element:<Signup/>,
      },
      {
        path:"home",
        element:<Header/>
      },
      {
        path:"courses",
        element:<Courseslist/>
      },
      {
        path:"enroll",
        element:<Enroll/>
      },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router ={router}/>

  
)