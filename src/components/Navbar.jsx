import React, { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { pink } from "@mui/material/colors";

export default function Navbar() {
  const [toggle, settoggle] = useState(false)
  return (
    <div className="flex flex-row sm:justify-center mb-5 mt-0 bg-gray-200/[0.3] hover:bg-gray-200/[0.5]">
      <ul className="list-none sm:flex hidden justify-center m-3">
        <li><Link to="/" className="p-3 outline outline-1 outline-gray-200/[0.3] hover:outline-blue-400">Home</Link></li>
        <li><Link to="/skill" className="p-3 outline outline-1 outline-gray-200/[0.3] hover:outline-blue-400">Skill</Link></li>
        <li><Link to="/portofolio" className="p-3 outline outline-1 outline-gray-200/[0.3] hover:outline-blue-400">Portofolio</Link></li>
        <li><Link to="/contact" className="p-3 outline outline-1 outline-gray-200/[0.3] hover:outline-blue-400">Contact</Link></li>
      </ul>
      <div className="sm:hidden flex justify-end">
        <button onClick={() => settoggle((prev) => !prev)}>{!toggle ? <MenuIcon sx={{ fontSize: 40, color: pink[500] }}/> : <CloseIcon sx={{ fontSize: 40, color: pink[500] }}/>}</button>
      </div>
      <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-12 left-0 mx-2 my-1 bg-gray-200/[0.3]`}>
        <ul className="list-none">
          <li className="p-3 mb-2 cursor-pointer"><Link to="/" >Home</Link></li>
          <li className="p-3 mb-2 cursor-pointer"><Link to="/skill" >Skill</Link></li>
          <li className="p-3 mb-2 cursor-pointer"><Link to="/portofolio" >Portofolio</Link></li>
          <li className="p-3  cursor-pointer"><Link to="/contact" >Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

