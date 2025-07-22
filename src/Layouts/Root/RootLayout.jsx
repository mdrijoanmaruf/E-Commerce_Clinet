import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Shared/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className='min-h-[80vh]'>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default RootLayout