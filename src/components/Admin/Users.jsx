// import React from 'react'
// import { useEffect,useState } from 'react';
// import { FaTrash } from 'react-icons/fa';

// function Users() {

//      const BASE_URL="http://localhost:8080/api"
//     const [userdata,setUserdata]=useState([])
//     const token=localStorage.getItem('token')

//           async function getUsers() {
//               try {
//                 const response = await fetch(`${BASE_URL}/Users`,{
//                   method:"GET",
//               headers:{
//                       Authorization: `Bearer ${token}`,
//               }
//                 });
              
//                 const responsedata = await response.json();
//                 if (response.ok) {
//                   console.log("User Data get successfully!!")
//                   setUserdata(responsedata.users);
//                 }
//                 else{
//                   alert("Api Error")
//                 }
//                  // Set the fetched data in state
//               } catch (error) {
//                 console.error('Error fetching cart items:', error.message);
//                 setUserdata([])
//               }
//             }    
          
//             useEffect(() => {
//               getUsers();
//             }, []);

//             const deleteUser=async (user)=>{

//               try {
//                 const response = await fetch(`${BASE_URL}/deleteUser/${user._id}`,{
//                   method: 'DELETE',
//                   headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${token}`,
//                                 // Add any auth token if required
//                                  // 'Authorization': 'Bearer your_token_here'
//                       }
//                      });
              
//                 const responsedata = await response.json();
//                 if (response.ok) {
//                   alert(`User Deleted Successfully`)
//                   getUsers();
                    
//                 }
//                 else{
//                   alert("APi Error")
//                 }
//                  // Set the fetched data in state
//               } catch (error) {
//                 console.error('Error fetching cart items:', error.message);
                
//               }
//             }


//   return (
//     <div className='w-full h-lvh px-5 py-5  bg-[#F5F5F5]'>
//         <div className='w-full px-3 py-3 bg-white '>

//               <div className='flex justify-between py-5'>

//                 <h1 className='text-2xl font-semibold'>Customer Managaement</h1>
//                 <div className='flex gap-6'>
//                   <input className='outline-0 border-[4px] border-[#F5F5F5] rounded-sm px-1 py-1' type="text" name="" id=""  placeholder='Search users...'/>
//                   <button className='bg-blue-600 px-2 rounded-sm cursor-pointer text-white' onClick={()=> 	window.location.reload()}>Refresh</button>
//                 </div>
                    
//               </div>
//               <hr className='border border-[#F5F5F5]'/>

//             <div className='flex flex-col'>
//               <div className='flex justify-between py-5'>
//                 <div className='flex justify-center items-center w-[250px] h-[100px] bg-green-200'>Total Users {userdata.length}</div>
//                 <div className='flex justify-center items-center w-[250px] h-[100px] bg-yellow-100'>Verified Users</div>
//                 <div className='flex justify-center items-center w-[250px] h-[100px] bg-blue-200'>Active Users</div>
//               </div>

//               <div className='py-4 bg-white'>
//                 <div className='flex justify-between items-center rounded-sm bg-[#F5F5F5] px-5 py-2'>
//                   <h1>USERNAME</h1>
//                   <h1>EMAIL</h1>
//                   <h1>USERID</h1>
//                   <h1>STATUS</h1>
//                   <h1>Action</h1>
//                 </div>

//                 {
//                   userdata.length>0 ? userdata.map((user,index)=>{
//                       return(
//                       <div key={index} >
//                      <div className='flex justify-between items-center  px-5 py-4'>
//                       <h1>{user.username}</h1>
//                       <h1>{user.email}</h1>
//                       <h1>{user._id}</h1>
//                       <h1>Pending</h1>
//                       <FaTrash className='cursor-pointer' onClick={()=>{deleteUser(user)}} />
//                     </div>
//                     <hr className='border border-[#F5F5F5]'/>
//                     </div>
//                       )

//                   }):(
//                     <div className='flex justify-center text-2xl font-semibold py-3'>No User Registered Yet</div>
//                   )
                   
//                 }

//               </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Users


import React from 'react';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Users() {
  const BASE_URL = "http://localhost:8080/api";
  const [userdata, setUserdata] = useState([]);
  const token = localStorage.getItem('token');

  async function getUsers() {
    try {
      const response = await fetch(`${BASE_URL}/Users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responsedata = await response.json();
      if (response.ok) {
        console.log("User Data get successfully!!");
        setUserdata(responsedata.users);
      } else {
        alert("Api Error");
      }
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
      setUserdata([]);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (user) => {
    try {
      const response = await fetch(`${BASE_URL}/deleteUser/${user._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const responsedata = await response.json();
      if (response.ok) {
        alert(`User Deleted Successfully`);
        getUsers();
      } else {
        alert("APi Error");
      }
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
    }
  };

  return (
    <div className="w-full min-h-screen px-8 py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Customer Management</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search users..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150"
            >
              Refresh
            </button>
          </div>
        </div>

        <hr className="border-gray-300 mb-8" />

        <div className="flex justify-between mb-6 gap-6 flex-wrap">
          <div className="flex justify-center items-center w-64 h-28 bg-green-200 rounded-lg shadow-md text-xl font-semibold text-green-900">
            Total Users: {userdata.length}
          </div>
          <div className="flex justify-center items-center w-64 h-28 bg-yellow-100 rounded-lg shadow-md text-xl font-semibold text-yellow-900">
            Verified Users
          </div>
          <div className="flex justify-center items-center w-64 h-28 bg-blue-200 rounded-lg shadow-md text-xl font-semibold text-blue-900">
            Active Users
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-md shadow-md">
          <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-100 text-gray-700 font-semibold uppercase tracking-wide">
            <span>USERNAME</span>
            <span>EMAIL</span>
            <span>USERID</span>
            <span>STATUS</span>
            <span className="text-center">ACTION</span>
          </div>

          {userdata.length > 0 ? (
            userdata.map((user, index) => (
              <div key={index} className="grid grid-cols-5 gap-4 items-center px-6 py-5 border-b border-gray-200 hover:bg-gray-50 transition duration-150">
                <span className="text-gray-800 font-medium truncate">{user.username}</span>
                <span className="text-gray-600 truncate">{user.email}</span>
                <span className="text-gray-600 truncate">{user._id}</span>
                <span className="text-yellow-600 font-semibold">Pending</span>
                <button
                  onClick={() => deleteUser(user)}
                  className="text-red-600 hover:text-red-800 flex justify-center"
                  title="Delete User"
                  aria-label={`Delete user ${user.username}`}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 text-xl font-semibold py-10">
              No User Registered Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
