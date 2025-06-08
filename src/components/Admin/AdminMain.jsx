// import React from 'react'
// import { NavLink, Outlet, useNavigate } from 'react-router-dom'


// function AdminMain() {

//   const storedValue = localStorage.getItem('user');
//   const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;
//   const profileImg=storedUser.admin.profileImg


//   const navigate=useNavigate();
//   return (
//     <div className='flex w-full '>
      
//       <div className='flex flex-col gap-8 w-[25%] bg-[#F5F5F5]'>
        
//         <div className='w-full sticky top-0 flex flex-col px-2 py-2 shadow-lg bg-white'>

//         <div className='flex flex-col justify-center items-center gap-3 py-3'>
//             <img className='w-14 h-14 rounded-[100%] bg-green-50' src={profileImg} alt="img" />
//             <h1>{storedUser.admin.adminName}</h1>
//             <h1>{storedUser.admin.email}</h1>

//             <NavLink to="AdminProfileUpdate">
//                 <button className=' bg-blue-600 px-2 py-1 rounded-sm text-white font font-semibold'>Edit Profile</button>
//             </NavLink>
//         </div>

//         <h1 className='px-2 py-2'>MAIN MENU</h1>
//         <ul className='flex flex-col gap-2'>
//   <NavLink to="" end>
//   {({ isActive }) => (
//     <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//       Dashboard
//     </li>
//   )}
// </NavLink>


//   <NavLink to="Products">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Products
//       </li>
//     )}
//   </NavLink>

//   <NavLink to="Orders">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Orders
//       </li>
//     )}
//   </NavLink>

//   <NavLink to="Users">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Users
//       </li>
//     )}
//   </NavLink>

//   <NavLink to="Admins">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Admins
//       </li>
//     )}
//   </NavLink>

//   <NavLink to="Settings">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Settings
//       </li>
//     )}
//   </NavLink>
// </ul>


//             <div className='flex gap-3 py-7 justify-center'>
//               <NavLink to="/">
//                    <button className='rounded-sm px-2 py-1 text-white bg-orange-500 cursor-pointer font-semibold'>Go To Website</button>
//               </NavLink>

//                    <button className='rounded-sm px-2 py-1 text-white bg-red-500 cursor-pointer font-semibold' onClick={()=>{localStorage.removeItem('user'), navigate('/')}}>Log out</button>
              
//                   </div>

//         </div>
        
//       </div>

//       <div className='w-full'>
//         <Outlet/>
//       </div>

//     </div>
//   )
// }

// export default AdminMain


import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function AdminMain() {

  const storedValue = localStorage.getItem('user');
  const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;
  const profileImg=storedUser.admin.profileImg

  const navigate=useNavigate();
  return (
    <div className='flex w-full min-h-screen bg-gray-50'>
      
      <div className='flex flex-col gap-8 w-[25%] bg-white border-r border-gray-200 shadow-lg'>
        
        <div className='w-full sticky top-0 flex flex-col px-6 py-6 shadow-md bg-white z-10'>

          <div className='flex flex-col justify-center items-center gap-4 py-4 border-b border-gray-200'>
              <img 
                className='w-16 h-16 rounded-full object-cover shadow-md border-2 border-green-400 bg-green-50' 
                src={profileImg} 
                alt="img" 
              />
              <h1 className='text-xl font-semibold text-gray-800'>{storedUser.admin.adminName}</h1>
              <p className='text-sm text-gray-500 truncate max-w-[200px]'>{storedUser.admin.email}</p>

              <NavLink to="AdminProfileUpdate">
                  <button className='bg-blue-600 px-4 py-1 rounded-md text-white font-semibold hover:bg-blue-700 transition-colors duration-300'>Edit Profile</button>
              </NavLink>
          </div>

          <h1 className='px-2 py-3 text-gray-600 tracking-wide font-semibold text-sm uppercase'>Main Menu</h1>
          <ul className='flex flex-col gap-2'>
            <NavLink to="" end>
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Dashboard
                </li>
              )}
            </NavLink>

            <NavLink to="Products">
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Products
                </li>
              )}
            </NavLink>

            <NavLink to="Orders">
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Orders
                </li>
              )}
            </NavLink>

            <NavLink to="Users">
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Users
                </li>
              )}
            </NavLink>

            <NavLink to="Admins">
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Admins
                </li>
              )}
            </NavLink>

            <NavLink to="Settings">
              {({ isActive }) => (
                <li className={`px-4 py-3 rounded-md cursor-pointer font-medium transition-colors duration-300
                  ${isActive ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-100'}`}>
                  Settings
                </li>
              )}
            </NavLink>
          </ul>

          <div className='flex gap-4 py-7 justify-center border-t border-gray-200'>
            <NavLink to="/">
              <button className='rounded-md px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 font-semibold shadow-md transition-colors duration-300'>
                Go To Website
              </button>
            </NavLink>

            <button 
              className='rounded-md px-4 py-2 text-white bg-red-500 hover:bg-red-600 font-semibold shadow-md transition-colors duration-300' 
              onClick={() => { localStorage.removeItem('user'); navigate('/'); }}
            >
              Log out
            </button>
          </div>

        </div>
        
      </div>

      <div className='w-full p-6 bg-white shadow-inner overflow-auto'>
        <Outlet/>
      </div>

    </div>
  )
}

export default AdminMain
