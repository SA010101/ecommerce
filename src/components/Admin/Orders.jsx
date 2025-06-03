import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Orders() {
  return (
    <div className='w-full px-14 py-10 bg-[#F5F5F5]'>

      <div className='bg-white w-full h-full'>

      <div className='flex justify-between items-center bg-white border border-[#F5F5F5] px-5 py-4 rounded-sm'>
        <h1 className='text-2xl font-semibold'>Order Management</h1>
        <div className='flex gap-4 justify-center items-center'>
          <input className='bg-white outline-0 border border-black rounded-sm px-2 py-0.5' type="text" placeholder='Search Orders...'/>
          <button className='bg-blue-600 px-3 py-1 rounded-sm text-white cursor-pointer'>Search</button>
        </div>
      </div>
      <hr className='border border-[#F5F5F5]'/>
      <div className='flex flex-col gap-5 bg-white px-5 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center w-[150px] h-[70px] bg-purple-100'>Total Orders</div>
          <div className='flex justify-center items-center w-[150px] h-[70px] bg-amber-600'>Pending Orders</div>
          <div className='flex justify-center items-center w-[150px] h-[70px] bg-amber-600'>Total Revenue</div>
        </div>
        <ul className='flex py-1 gap-5'>

         <NavLink to="">
                <li className='bg-blue-100 px-4 py-1 rounded-sm'>All</li>
         </NavLink>

         <NavLink to="PendingOrders">
                <li className='bg-green-100 px-4 py-1 rounded-sm'>Pending</li>
         </NavLink>

         <NavLink to="Shipped">
                <li className='bg-indigo-300 px-4 py-1 rounded-sm'>Shipped</li>
         </NavLink>
          
          <NavLink to="Delivered">
                <li className='bg-cyan-100 px-4 py-1 rounded-sm'>Delivered</li>
          </NavLink>
          
        </ul>
      </div>
      <hr className='border border-[#F5F5F5]'/>

      <div className='w-full'>
      <Outlet />
      </div>

    </div>

    </div>
  )
}

export default Orders
