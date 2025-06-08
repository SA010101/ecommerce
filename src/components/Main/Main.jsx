// import React from 'react';
// import { NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { MdLocalShipping } from "react-icons/md";
// import { FaShoppingCart } from 'react-icons/fa';
// import { FaUser } from 'react-icons/fa';
// import { MdLogout } from "react-icons/md";
// import Footter from './Footter';
// import { useLocation } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

// function Main() {

//   // const user=localStorage.getItem('user')
//   let storedUser = localStorage.getItem('user');
// const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
// // console.log(user)

// const location = useLocation();
// // console.log(user.user.username)

// const token=localStorage.getItem('token')

// const Navigate=useNavigate();

//   return (
//     <div className='w-full'>

//       <nav className="bg-red-100 font-semibold text-xl p-4 h-[80px] sticky top-0 z-50 shadow-md">
      
//         <div className="w-full px-6 mx-auto flex justify-between items-center">
//           {/* Logo or site name */}
//           <h1 className="text-black text-2xl font-bold">BAZAR</h1>
      

//           {/* Navbar links */}
//           <div className="flex space-x-6 items-baseline">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "font-semibold text-blue-700"
//                   : "text-black hover:text-blue-700 transition duration-200"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/product"
//               className={({ isActive }) =>
//                 isActive
//                   ? "font-semibold text-blue-700"
//                   : "text-black hover:text-blue-700 transition duration-200"
//               }
//             >
//               Product
//             </NavLink>

//             <button className='bg-blue-600 text-white px-3 py-2.5 rounded-xl'>
//             <NavLink
//               to="/Login"
//               // to="/AdminMain"
//             >
//               Login
//             </NavLink>
//             </button>
            
//           </div>

//                 <div className='flex space-x-6'>

//                {
//                      user && user.admin ? (
//     // Admin view
//     <>
//       <div>{user.admin.adminName}</div>
//       <NavLink
//         to="/AdminMain"
//         className={({ isActive }) =>
//           isActive
//             ? "font-semibold text-blue-700"
//             : "text-black hover:text-blue-700 transition duration-200"
//         }
//       >
//         <div>Dashboard</div>
//       </NavLink>
//       <MdLogout
//         size={24}
//         className="cursor-pointer"
//         onClick={() => {
//           localStorage.removeItem('user');
//           window.location.reload();
//         }}
//       />
//     </>
//   ) : user && user.user ? (
//     // Regular user view
//     <>
//         <NavLink to="/customerUpdate">
//               {user.user.username}
//         </NavLink>

//       <NavLink
//         to="/MyOrder"
//         className={({ isActive }) =>
//           isActive
//             ? "font-semibold text-blue-700"
//             : "text-black hover:text-blue-700 transition duration-200"
//         }
//       >
//         <MdLocalShipping size={30} color="black" />
//       </NavLink>
//       <NavLink
//         to="/Cart"
//         className={({ isActive }) =>
//           isActive
//             ? "font-semibold text-blue-700"
//             : "text-black hover:text-blue-700 transition duration-200"
//         }
//       >
//         <FaShoppingCart size={25} color="black" />
//       </NavLink>
//       <MdLogout
//         size={24}
//         className="cursor-pointer"
//         onClick={() => {
//           localStorage.removeItem('user');
//           Navigate("/product")
//         }}
//       />
//     </>
//   ):  user && user.staff ? (
//     // Admin view
//     <>
//       <div>{user.staff.staffName}</div>
//       <NavLink
//         to="Staff-Home"
//         className={({ isActive }) =>
//           isActive
//             ? "font-semibold text-blue-700"
//             : "text-black hover:text-blue-700 transition duration-200"
//         }
//       >
//         <div>Dashboard</div>
//       </NavLink>
//       <MdLogout
//         size={24}
//         className="cursor-pointer"
//         onClick={() => {
//           localStorage.removeItem('user');
//           window.location.reload();
//         }}
//       />
//     </>
//   ) : (
//     // Guest view
//     <div className='flex gap-2 justify-center items-center'>
//        <FaUser size={24} />
//       <div>Guest</div>
//     </div>
//   )
// }

//                 </div>
              

//         </div>

//       </nav>

//            <div>
//                 <Outlet />
//            </div>

//               <Footter/>
//     </div>

//   );
// }

// export default Main;


import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { MdLocalShipping, MdLogout } from "react-icons/md";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Footter from './Footter';
import { useLocation } from 'react-router-dom';

function Main() {

  let storedUser = localStorage.getItem('user');
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  const location = useLocation();
  const token = localStorage.getItem('token');
  const Navigate = useNavigate();

  return (
    <div className='w-full'>

      <nav className="bg-gradient-to-r from-red-100 to-pink-100 font-semibold text-xl px-6 py-4 h-[80px] sticky top-0 z-50 shadow-lg">
        <div className="w-full mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <h1 className="text-black text-3xl font-extrabold tracking-wide">BAZAR</h1>

          {/* Navbar links */}
          <div className="flex flex-wrap space-x-6 items-center text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "text-black hover:text-blue-600 hover:underline transition duration-200"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "text-black hover:text-blue-600 hover:underline transition duration-200"
              }
            >
              Product
            </NavLink>

            <button className='bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300'>
              <NavLink to="/Login">Login</NavLink>
            </button>
          </div>

          {/* User Role Based Section */}
          <div className='flex items-center space-x-5'>

            {
              user && user.admin ? (
                // Admin View
                <>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.admin.adminName}
                  </span>
                  <NavLink
                    to="/AdminMain"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-black hover:text-blue-600 hover:underline transition duration-200"
                    }
                  >
                    <div>Dashboard</div>
                  </NavLink>
                  <MdLogout
                    size={26}
                    className="cursor-pointer text-red-600 hover:text-red-800 transition duration-200"
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}
                  />
                </>
              ) : user && user.user ? (
                // Regular User View
                <>
                  <NavLink to="/customerUpdate" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
                    {user.user.username}
                  </NavLink>

                  <NavLink
                    to="/MyOrder"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-black hover:text-blue-600 transition duration-200"
                    }
                  >
                    <MdLocalShipping size={30} color="black" />
                  </NavLink>

                  <NavLink
                    to="/Cart"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-black hover:text-blue-600 transition duration-200"
                    }
                  >
                    <FaShoppingCart size={25} color="black" />
                  </NavLink>

                  <MdLogout
                    size={26}
                    className="cursor-pointer text-red-600 hover:text-red-800 transition duration-200"
                    onClick={() => {
                      localStorage.removeItem('user');
                      Navigate("/product")
                    }}
                  />
                </>
              ) : user && user.staff ? (
                // Staff View
                <>
                  <span className="text-lg font-semibold text-gray-800">
                    {user.staff.staffName}
                  </span>
                  <NavLink
                    to="Staff-Home"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-blue-700 border-b-2 border-blue-700 pb-1"
                        : "text-black hover:text-blue-600 hover:underline transition duration-200"
                    }
                  >
                    <div>Dashboard</div>
                  </NavLink>
                  <MdLogout
                    size={26}
                    className="cursor-pointer text-red-600 hover:text-red-800 transition duration-200"
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}
                  />
                </>
              ) : (
                // Guest View
                <div className='flex items-center gap-2 text-gray-600 text-lg'>
                  <FaUser size={22} />
                  <span className='italic'>Guest</span>
                </div>
              )
            }

          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="px-4 md:px-8 py-6">
        <Outlet />
      </div>

      {/* Footer */}
      <Footter />

    </div>
  );
}

export default Main;

