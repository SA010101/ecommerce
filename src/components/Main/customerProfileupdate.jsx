import React from 'react'
import { useState } from 'react';
import { FiCamera } from "react-icons/fi";


function CustomerProfileupdate() {

        let storedUser = localStorage.getItem('user');
        const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
        const token=localStorage.getItem('token')
        console.log(token)

        const BASE_URL="http://localhost:8080/api"

        const [fullName, setfullName] = useState(user?.user?.username || "");
        const [img, setImg] = useState(null);
        const [email, setEmail] = useState(user?.user?.email || "");
        const [address, setAddress] = useState(user?.user?.address || "");
        const [currPassword,setcurrPassword]=useState("")
        const [newPassword,setnewPassword]=useState("")

        const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("img", img);
    formData.append("email", email);
    formData.append("address",address);
    formData.append("currPassword",currPassword);
    formData.append("newPassword",newPassword);

    try {
      const response = await fetch(`${BASE_URL}/profile`, {
        method: "PUT",
        headers: {
    Authorization: `Bearer ${token}`,
  },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      
      if(response.ok){
        alert("Profile Updated successfully")
         // Reset form and hide
      // setImg(null);
      // setfullName("");
      // setEmail("");
      // setAddress("");
      // setcurrPassword("");
      // setnewPassword()
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };


  return (
    <div className='flex flex-col gap-3 justify-center items-center bg-white py-7'>
      
      <form action="" onSubmit={handleSubmit} className='w-[400px] bg-[#F5F5F5] px-7 py-3 rounded-lg'>
          <div className='flex flex-col justify-center  gap-3 py-4'>

        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='font-semibold'>Update Profile</h1>
          
        
        {/* Display selected image preview OR user image */}
          <img
            src={img ? URL.createObjectURL(img) : user?.user?.img}
            alt="Profile"
            className='w-24 h-24 rounded-full object-cover'

            />

            {/* File input for new image */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImg(e.target.files[0])}
            />



        </div>
          
          <input value={fullName} onChange={(e)=>{setfullName(e.target.value)}} type="text" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='User Name'/>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Email'/>
          <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Address'/>

      </div>

        <hr className='border border-black'/>

      <div className='flex flex-col justify-center gap-3 py-4'>

          <h1 className='font-semibold'>Change Password</h1>
          <input value={currPassword} onChange={(e)=>{setcurrPassword(e.target.value)}} type="password" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Current Password'/>
          <input value={newPassword} type="password" onChange={(e)=>{setnewPassword(e.target.value)}} className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='New Password'/>
          <button  className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-sm' type='submit'>Update Profile</button>
      </div>
      </form>
      
        

    </div>
  )
}

export default CustomerProfileupdate
