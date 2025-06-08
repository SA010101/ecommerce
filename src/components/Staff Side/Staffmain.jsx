// import React from 'react'
// import { NavLink, Outlet, useNavigate } from 'react-router-dom'


// function Staffmain() {

//   const storedValue = localStorage.getItem('user');
//   const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;
//   // const profileImg=storedUser.admin.profileImg
//   // console.log(profileImg)
//   console.log(storedUser)

//   const navigate=useNavigate();
//   return (
//     <div className='flex w-full '>
      
//       <div className='flex flex-col gap-8 w-[25%] bg-[#F5F5F5]'>
        
//         <div className='w-full sticky top-0 flex flex-col px-2 py-2 shadow-lg'>

//         <div className='flex flex-col rounded-tl-2xl rounded-br-2xl bg-blue-500 text-white justify-center items-center gap-3 py-3'>
//             <img className='w-14 h-14 rounded-[100%] bg-green-50' src="" alt="img" />
//             <h1>{storedUser.staff.staffName}</h1>
//             <h1>{storedUser.staff.email}</h1>

//             <NavLink to="/Staff-Home">
//                 <button className=' bg-blue-600 px-2 py-1 rounded-sm text-white font font-semibold'>Edit Profile</button>
//             </NavLink>
//         </div>

//         <h1 className='px-2 py-2'>MAIN MENU</h1>
//         <ul className='flex flex-col gap-2'>
//           <NavLink to="" end>
//           {({ isActive }) => (
//             <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//               Confirm Orders
//             </li>
//           )}
//         </NavLink>

//   <NavLink to="DispatchOrders">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Dispatch Orders
//       </li>
//     )}
//   </NavLink>

//   <NavLink to="DeliverOrders">
//     {({ isActive }) => (
//       <li className={`px-2 py-2 rounded-md ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>
//         Deliver Orders
//       </li>
//     )}
//   </NavLink>

//         </ul>

//             <div className='flex gap-3 py-7 justify-center'>
//               <NavLink to="/">
//                    <button className='rounded-sm px-2 py-1 text-white bg-blue-500 cursor-pointer font-semibold'>Go To Website</button>
//               </NavLink>

//               <button className='rounded-sm px-2 py-1 text-white bg-red-500 cursor-pointer font-semibold' onClick={()=>{localStorage.removeItem('user'), navigate('/')}}>Log out</button>
            
//             </div>

//             </div>
        
//             </div>

//       <div className='w-full'>
//         <Outlet/>
//       </div>

//     </div>
//   )
// }

// export default Staffmain


import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Staffmain() {
  const storedValue = localStorage.getItem('user');
  const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;

  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex flex-col w-[25%] bg-white shadow-lg sticky top-0 h-screen px-4 py-6 gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center bg-blue-500 text-white rounded-3xl py-6 px-4 shadow-md">
          <img
            className="w-20 h-20 rounded-full bg-green-100 object-cover"
            src="" // You can add storedUser.staff.profileImg here if available
            alt="Profile"
          />
          <h1 className="mt-4 text-xl font-semibold">{storedUser?.staff?.staffName}</h1>
          <p className="text-sm opacity-90">{storedUser?.staff?.email}</p>

          <NavLink to="/Staff-Home" className="mt-4">
            <button className="bg-white text-blue-600 font-semibold px-4 py-1 rounded-md shadow hover:bg-gray-100 transition">
              Edit Profile
            </button>
          </NavLink>
        </div>

        {/* Menu Title */}
        <h2 className="text-gray-700 text-lg font-semibold px-2">MAIN MENU</h2>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2 text-gray-700 text-base">
          <NavLink to="" end>
            {({ isActive }) => (
              <li
                className={`px-4 py-3 rounded-lg cursor-pointer select-none font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                Confirm Orders
              </li>
            )}
          </NavLink>

          <NavLink to="DispatchOrders">
            {({ isActive }) => (
              <li
                className={`px-4 py-3 rounded-lg cursor-pointer select-none font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                Dispatch Orders
              </li>
            )}
          </NavLink>

          <NavLink to="DeliverOrders">
            {({ isActive }) => (
              <li
                className={`px-4 py-3 rounded-lg cursor-pointer select-none font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                Deliver Orders
              </li>
            )}
          </NavLink>
        </ul>

        {/* Bottom Buttons */}
        <div className="mt-auto flex justify-center gap-4 pt-10">
          <NavLink to="/">
            <button className="rounded-md bg-blue-600 px-5 py-2 text-white font-semibold shadow hover:bg-blue-700 transition">
              Go To Website
            </button>
          </NavLink>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="rounded-md bg-red-600 px-5 py-2 text-white font-semibold shadow hover:bg-red-700 transition"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white p-8 min-h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Staffmain;
