import Navbar from './Navbar'
import React from "react";

export default function Layout({children}) {
  return (
    <div div className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#F1F1F1] min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}