import React from 'react'
import Navber from '../../Header/Navber'
import { Outlet } from 'react-router'
import Footer from '../../Footer/Footer'


const Root = () => {
  return (
    <div className='max-w-6xl mx-auto mt-2'>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root