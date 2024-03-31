import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
    <Navbar/>
    <main className='container my-2'>
        <Outlet/>
    </main>
    </>
  )
}
