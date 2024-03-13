import React from "react";
import './index.css'
import Header from "./component/Header";
import Courses from "./component/Courses";
import Courseslist from "./component/Courselist";
import Signup from "./component/Signup";
import { Outlet } from "react-router-dom";
import Enroll from './component/Enroll';
const App=()=>{
  return(
<>
    <Outlet/> 
    {/* <Enroll/>
    <Courseslist/> */}
</>
  )
}
export default App