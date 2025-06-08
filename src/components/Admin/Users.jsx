import React from 'react'
import { useEffect,useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function Users() {

     const BASE_URL="http://localhost:8080/api"
    const [userdata,setUserdata]=useState([])
    const token=localStorage.getItem('token')

          async function getUsers() {
              try {
                const response = await fetch(`${BASE_URL}/Users`,{
                  method:"GET",
              headers:{
                      Authorization: `Bearer ${token}`,
              }
                });
              
                const responsedata = await response.json();
                if (response.ok) {
                  console.log("User Data get successfully!!")
                  setUserdata(responsedata.users);
                }
                else{
                  alert("Api Error")
                }
                 // Set the fetched data in state
              } catch (error) {
                console.error('Error fetching cart items:', error.message);
                setUserdata([])
              }
            }    
          
            useEffect(() => {
              getUsers();
            }, []);

            const deleteUser=async (user)=>{

              try {
                const response = await fetch(`${BASE_URL}/deleteUser/${user._id}`,{
                  method: 'DELETE',
                  headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                                // Add any auth token if required
                                 // 'Authorization': 'Bearer your_token_here'
                      }
                     });
              
                const responsedata = await response.json();
                if (response.ok) {
                  alert(`User Deleted Successfully`)
                  getUsers();
                    
                }
                else{
                  alert("APi Error")
                }
                 // Set the fetched data in state
              } catch (error) {
                console.error('Error fetching cart items:', error.message);
                
              }
            }


  return (
    <div className='w-full h-lvh px-5 py-5  bg-[#F5F5F5]'>
        <div className='w-full px-3 py-3 bg-white '>

              <div className='flex justify-between py-5'>

                <h1 className='text-2xl font-semibold'>Customer Managaement</h1>
                <div className='flex gap-6'>
                  <input className='outline-0 border-[4px] border-[#F5F5F5] rounded-sm px-1 py-1' type="text" name="" id=""  placeholder='Search users...'/>
                  <button className='bg-blue-600 px-2 rounded-sm cursor-pointer text-white' onClick={()=> 	window.location.reload()}>Refresh</button>
                </div>
                    
              </div>
              <hr className='border border-[#F5F5F5]'/>

            <div className='flex flex-col'>
              <div className='flex justify-between py-5'>
                <div className='flex justify-center items-center w-[250px] h-[100px] bg-green-200'>Total Users {userdata.length}</div>
                <div className='flex justify-center items-center w-[250px] h-[100px] bg-yellow-100'>Verified Users</div>
                <div className='flex justify-center items-center w-[250px] h-[100px] bg-blue-200'>Active Users</div>
              </div>

              <div className='py-4 bg-white'>
                <div className='flex justify-between items-center rounded-sm bg-[#F5F5F5] px-5 py-2'>
                  <h1>USERNAME</h1>
                  <h1>EMAIL</h1>
                  <h1>USERID</h1>
                  <h1>STATUS</h1>
                  <h1>Action</h1>
                </div>

                {
                  userdata.length>0 ? userdata.map((user,index)=>{
                      return(
                      <div key={index} >
                     <div className='flex justify-between items-center  px-5 py-4'>
                      <h1>{user.username}</h1>
                      <h1>{user.email}</h1>
                      <h1>{user._id}</h1>
                      <h1>Pending</h1>
                      <FaTrash className='cursor-pointer' onClick={()=>{deleteUser(user)}} />
                    </div>
                    <hr className='border border-[#F5F5F5]'/>
                    </div>
                      )

                  }):(
                    <div className='flex justify-center text-2xl font-semibold py-3'>No User Registered Yet</div>
                  )
                   
                }

              </div>
            </div>

        </div>
    </div>
  )
}

export default Users
