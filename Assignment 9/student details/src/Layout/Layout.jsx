import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <main className='container mt-5'>
        <Outlet/>
    </main>
    </div>
    </>
  )
}
