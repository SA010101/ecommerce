import React from 'react'
import { FaUserShield } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

function Admins() {

  const BASE_URL="http://localhost:8080/api"
        const [adminsdata,setAdminsdata]=useState([])
        const token=localStorage.getItem('token')
        console.log(adminsdata)

  const getAdmins=async ()=>{

              try {
                const response = await fetch(`${BASE_URL}/admins`,{
                  method:"GET",
                  headers:{
                    Authorization: `Bearer ${token}`,
                  }
                });
              
                const responsedata = await response.json();
                if (response.ok) {
                  console.log("Admins Data get successfully!!")
                    setAdminsdata(responsedata.admins);
                }
                else{
                  setAdminsdata([])
                }
                 // Set the fetched data in state
              } catch (error) {
                console.error('Error fetching cart items:', error.message);
                setAdminsdata([])
              }
                
            }
          
            useEffect(() => {
              getAdmins();
            }, []);


            const [showform,setShowform]=useState(false)
            const [adminame,setAdminname]=useState("")
            const [admiemail,setAdminemail]=useState("")
            const [password,setPassword]=useState("")

        const createAdmin=async ()=> {

    const adminData = {
      adminName:adminame,
      email:admiemail,
      password:password,
    };
  
    try {
      const response = await fetch('http://localhost:8080/api/adminSignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData)
      });
    
      const data = await response.json();
      console.log(data);
    
      if (response.ok) {
        alert('Admin account created Successfully!');
        setShowform(false)
        setAdminname("")
        setAdminemail("")
        setPassword("")
        getAdmins()
      } else {
        
        alert(data.message || 'Something went wrong during registration.');
      }
    
    } catch (error) {
      
      alert('Registration failed: ' + error.message);
    }
  }    
  
  function handleSubmit(e) {
    e.preventDefault();
    createAdmin();
  }
  
    
         const deleteAdmin=async (admin)=>{
          console.log(admin._id)
              
              try {
                const response = await fetch(`${BASE_URL}/removeAdmin/${admin._id}`,{
                  method:"DELETE",
                  headers:{
                    Authorization: `Bearer ${token}`,
                  }
                });
              
                const responsedata = await response.json();
                if (response.ok) {
                  alert("Admins remove Successfully!!")
                    getAdmins()
                }
                else{
                  alert(response.message)
                }
                 // Set the fetched data in state
              } catch (error) {
                console.error('Error fetching cart items:', error.message);
                
              }
                
            }

  return (
    <div className='flex flex-col gap-6 w-full bg-[#F5F5F5] h-lvh px-8 py-8'>
      <div className='flex justify-between px-8 py-5 gap-4 bg-white rounded-sm'>

        <div className='flex items-center gap-5'>
          <FaUserShield size={70} />
          <div>
            <h1 className='font-bold'>Admin Management</h1>
            <h1>Manage System Administrators and their access</h1>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex gap-2 items-center '>
            <RiAdminLine size={30} />
            <div className='flex flex-col items-center'>
              <h1>Total Admin</h1>
              <h1>2</h1>
            </div>
          </div>
          <button className='flex justify-center items-center gap-2 bg-blue-500 px-2 py-1 rounded-sm cursor-pointer' onClick={()=>{setShowform(prev=>(!prev))}}><FaPlus /> New Admin</button>
          <button className='bg-fuchsia-400 px-2 py-1 rounded-sm cursor-pointer' onClick={()=>{window.location.reload()}}>Refresh</button>
        </div>

      </div>

      {
          showform ? ( <div className='bg-blue-50 rounded-sm'>
          
          <div className='flex flex-col gap-3 bg-white w-full px-5 py-5'>
              <h1>Create New Admin</h1>
              <form className='flex flex-col gap-3' action="" onSubmit={handleSubmit}>
               
                <div className='flex gap-3 justify-between w-full'>
                  <input className='w-full outline-0 border border-[#F5F5F5] px-2 py-1 rounded-sm' type="text" placeholder='Enter Admin Name' onChange={(e)=>{setAdminname(e.target.value)}}/>
                  <input className='w-full outline-0 border border-[#F5F5F5] px-2 py-1 rounded-sm' type="email" placeholder='Enter email' onChange={(e)=>{setAdminemail(e.target.value)}}/>
                </div>
                  
                  <input className='w-full outline-0 border border-[#F5F5F5] px-2 py-1 rounded-sm' type="password" placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}}/>
              
                <div className='flex gap-4'>
                  <button className='bg-blue-600 font-semibold text-white px-2 py-1 rounded-sm cursor-pointer' type='submit'>Create Admin</button>
                  <button className='bg-red-600 text-white font-semibold px-2 py-1 rounded-sm cursor-pointer' type='button' onClick={()=>{setShowform(false)}}>Cancel</button>
                </div>

              </form>
            

          </div>

          </div>): (<></>)
      }
      

      <div className='bg-white rounded-sm'>
          <div className='flex justify-between items-center px-6 py-6'>
              <h1>Admin Accounts</h1>
              <input className='outline-0 border border-[#F5F5F5] px-2 py-1' type="text" placeholder='Search Admins...'/>
          </div>
          <hr className='border border-[#F5F5F5]'/>
          <div className='bg-white w-full px-5 py-5'>

<div className=" w-full rounded-sm overflow-auto">
  <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-sm">
    <thead className="bg-gray-200 text-gray-700">
      <tr>
        <th className="px-4 py-2 text-left">Admin Name</th>
        <th className="px-4 py-2 text-left">Email</th>
        <th className="px-4 py-2 text-center" colSpan="2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {adminsdata.map((admin) => (
        <tr key={admin.id} className="hover:bg-gray-100">
          <td className="px-4 py-2">{admin.adminName}</td>
          <td className="px-4 py-2">{admin.email}</td>
          <td className="px-4 py-2 text-center">
            <button className="text-blue-600 hover:text-blue-800">
              <FaEdit size={20} />
            </button>
          </td>
          <td className="px-4 py-2 text-center">
            <button className="text-red-600 hover:text-red-800">
              <FaTrash size={16} onClick={()=>{deleteAdmin(admin)}}/>
            </button>
          </td>
        </tr>
        
      ))}
    </tbody>
    <tfoot className="bg-gray-200 text-gray-700">
      <tr>
        <td colSpan="4" className="px-4 py-2 text-center">
          Total Admins: {adminsdata.length}
        </td>
      </tr>
    </tfoot>
  </table>
</div>

          </div>
      </div>
    </div>
  )
}

export default Admins
