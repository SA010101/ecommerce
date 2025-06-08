import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'


function AdminMain() {

  const storedValue = localStorage.getItem('user');
  const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;
  const profileImg=storedUser.admin.profileImg


  const navigate=useNavigate();
  return (
    <div className='flex w-full '>
      
      <div className='flex flex-col gap-8 w-[25%] bg-[#F5F5F5]'>
        
        <div className='w-full sticky top-0 flex flex-col px-2 py-2 shadow-lg bg-white'>

        <div className='flex flex-col justify-center items-center gap-3 py-3'>
            <img className='w-14 h-14 rounded-[100%] bg-green-50' src={profileImg} alt="img" />
            <h1>{storedUser.admin.adminName}</h1>
            <h1>{storedUser.admin.email}</h1>

            <NavLink to="AdminProfileUpdate">
                <button className=' bg-blue-600 px-2 py-1 rounded-sm text-white font font-semibold'>Edit Profile</button>
            </NavLink>
        </div>

        <h1 className='px-2 py-2'>MAIN MENU</h1>
        <ul className='flex flex-col gap-2'>
  <NavLink to="" end>
  {({ isActive }) => (
    <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
      Dashboard
    </li>
  )}
</NavLink>


  <NavLink to="Products">
    {({ isActive }) => (
      <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
        Products
      </li>
    )}
  </NavLink>

  <NavLink to="Orders">
    {({ isActive }) => (
      <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
        Orders
      </li>
    )}
  </NavLink>

  <NavLink to="Users">
    {({ isActive }) => (
      <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
        Users
      </li>
    )}
  </NavLink>

  <NavLink to="Admins">
    {({ isActive }) => (
      <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
        Admins
      </li>
    )}
  </NavLink>

  <NavLink to="Settings">
    {({ isActive }) => (
      <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
        Settings
      </li>
    )}
  </NavLink>
</ul>


            <div className='flex gap-3 py-7 justify-center'>
              <NavLink to="/">
                   <button className='rounded-sm px-2 py-1 text-white bg-orange-500 cursor-pointer font-semibold'>Go To Website</button>
              </NavLink>

                   <button className='rounded-sm px-2 py-1 text-white bg-red-500 cursor-pointer font-semibold' onClick={()=>{localStorage.removeItem('user'), navigate('/')}}>Log out</button>
              
                  </div>

        </div>
        
      </div>

      <div className='w-full'>
        <Outlet/>
      </div>

    </div>
  )
}

export default AdminMain
