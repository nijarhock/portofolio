import { GitHub, LinkedIn } from '@mui/icons-material'

import Foto from '../assets/FOTO.jpg'
import React from "react";
import { pink } from '@mui/material/colors';

export default function Home() {
  return (
    <div className='flex-1 min-h-fit mt-9'>
      <div className='flex-col leading-6'>
        <div className='mb-4  pb-2 max-h-fit'>
          <p className='text-4xl font-bold'>Profil</p>
          <div className='border-b-2 max-h-fit'></div>
        </div>
        <div className='justify-items-center mb-6'>
          <img src={Foto} className='rounded-full h-[270px] w-60 inline-flex'/>
        </div>
        <div className='text-align-center mb-6'>
          <p className='italic w-1/3 inline-flex'>
          "Menyukai hal - hal baru di
          bidang teknologi khususnya di
          bidang teknologi perangkat
          lunak. Cepat mempelajari hal -
          hal baru apalagi jika
          berhubungan dengan sistem
          perangkat lunak. Mempunyai
          impian untuk membuat aplikasi
          yang inovatif dan dipakai banyak
          orang"
          </p>
        </div>
        <div className='flex flex-row justify-center'>
          <a href="https://github.com/nijarhock"><GitHub sx={{ fontSize: 40, color: pink[500] }} /></a>
          <a href="https://www.linkedin.com/in/nijar-35a9b0128/"><LinkedIn sx={{ fontSize: 40, color: pink[500] }} /></a>
        </div>
      </div>
    </div>
  )
}