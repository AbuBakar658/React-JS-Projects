import React from "react";
import logo from "./checklist.png";
import "./App.css"
function Header()
{
  
  return(
    <div className="todoheader">
      <img src={logo}alt="any"/>
      <p style={{fontSize:"20px"}}>All your tasks here.</p>
    </div>
  )
  
}
export default Header;