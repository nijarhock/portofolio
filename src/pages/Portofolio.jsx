import React from "react";
import Portofolio1 from "../assets/portofolio-1.png"
import { IconButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Portofolio() {
  return (
    <div className='flex-1 min-h-fit mt-9'>
      <div className='mb-4  pb-2 max-h-fit'>
        <p className='text-4xl font-bold'>Portofolio</p>
        <div className='border-b-2 max-h-fit'></div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row px-10">
          <div className="flex-1">
            <img src={Portofolio1} className="round h-[250px] w-[500px]" alt="Portofolio" />
          </div>
          <div className="flex-1 content-center grid">
            <p>spiderloverpetshop.com aplikasi simple catalog barang dan berita menggunakan Laravel, Bootstrap, Jquery </p>
          </div>
        </div>
        <div class="p-4">
          <IconButton color="primary" size="large"><ChevronLeftIcon /></IconButton>
          <IconButton color="primary" size="large"><ChevronRightIcon /></IconButton>
        </div>
      </div>
    </div>
  )
}