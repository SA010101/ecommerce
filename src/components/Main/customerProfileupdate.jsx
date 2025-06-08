// import React from 'react'
// import { useState } from 'react';
// import { FiCamera } from "react-icons/fi";


// function CustomerProfileupdate() {

//         const BASE_URL="http://localhost:8080/api"
//         let storedUser = localStorage.getItem('user');
//         const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
//         const token=localStorage.getItem('token')

//         const [fullName, setfullName] = useState(user?.user?.username || "");
//         const [img, setImg] = useState(null);
//         const [email, setEmail] = useState(user?.user?.email || "");
//         const [address, setAddress] = useState(user?.user?.address || "");
//         const [currPassword,setcurrPassword]=useState("")
//         const [newPassword,setnewPassword]=useState("")

//         const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullName", fullName);
//     formData.append("img", img);
//     formData.append("email", email);
//     formData.append("address",address);
//     formData.append("currPassword",currPassword);
//     formData.append("newPassword",newPassword);

//     console.log("checking img attribute",img)

//     try {
//       const response = await fetch(`${BASE_URL}/profile`, {
//         method: "PUT",
//         headers: {
//     Authorization: `Bearer ${token}`,
//       },
//         body: formData,
//       });

//       const data = await response.json();
//       console.log(data);
      
//       if(response.ok){
//         alert("Profile Updated successfully")
        
//       }
//       else{
//         alert(data.error)
//       }
     
//     } catch (error) {
//       console.error("Error uploading product:", error);
//     }
//   };


//   return (
//     <div className='flex flex-col gap-3 justify-center items-center bg-white py-7'>
      
//       <form action="" onSubmit={handleSubmit} className='w-[400px] bg-[#F5F5F5] px-7 py-3 rounded-lg'>
//           <div className='flex flex-col justify-center  gap-3 py-4'>

//         <div className='flex flex-col justify-center items-center gap-2'>
//           <h1 className='font-semibold'>Update Profile</h1>
          
        
//         {/* Display selected image preview OR user image */}
//           <img
//             src={img ? URL.createObjectURL(img) : user?.user?.img}
//             alt="Profile"
//             className='w-24 h-24 rounded-full object-cover'

//             />

//             {/* File input for new image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImg(e.target.files[0])}
//             />



//         </div>
          
//           <input value={fullName} onChange={(e)=>{setfullName(e.target.value)}} type="text" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='User Name'/>
//           <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Email'/>
//           <input value={address} onChange={(e)=>{setAddress(e.target.value)}} type="text" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Address'/>

//       </div>

//         <hr className='border border-black'/>

//       <div className='flex flex-col justify-center gap-3 py-4'>

//           <h1 className='font-semibold'>Change Password</h1>
//           <input autoComplete='on' value={currPassword} onChange={(e)=>{setcurrPassword(e.target.value)}} type="password" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Current Password'/>
//           <input autoComplete='on' value={newPassword} type="password" onChange={(e)=>{setnewPassword(e.target.value)}} className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='New Password'/>
//           <button  className='bg-blue-600 text-white font-semibold px-3 py-1 rounded-sm' type='submit'>Update Profile</button>
//       </div>
//       </form>
      
        

//     </div>
//   )
// }

// export default CustomerProfileupdate


import React from 'react'
import { useState } from 'react';
import { FiCamera } from "react-icons/fi";


function CustomerProfileupdate() {

        const BASE_URL="http://localhost:8080/api"
        let storedUser = localStorage.getItem('user');
        const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
        const token=localStorage.getItem('token')

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

    console.log("checking img attribute",img)

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
        
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };


  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white flex flex-col gap-6 justify-center items-center py-10 px-4'>
      
      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-8'>
          <div className='flex flex-col items-center gap-5'>

            <h1 className='text-2xl font-extrabold text-gray-900 tracking-wide'>Update Profile</h1>
          
            {/* Display selected image preview OR user image */}
            <div className="relative">
              <img
                src={img ? URL.createObjectURL(img) : user?.user?.img}
                alt="Profile"
                className='w-28 h-28 rounded-full object-cover border-4 border-purple-400 shadow-md'
              />
              {/* Camera icon overlay */}
              <label 
                htmlFor="profileImage"
                className='absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-purple-700 transition'
                title="Change profile picture"
              >
                <FiCamera className='text-white w-5 h-5'/>
              </label>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                className='hidden'
              />
            </div>

          </div>
          
          <div className='space-y-4'>
            <input 
              value={fullName} 
              onChange={(e)=>{setfullName(e.target.value)}} 
              type="text" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='User Name'
              required
            />
            <input 
              value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} 
              type="email" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Email'
              required
            />
            <input 
              value={address} 
              onChange={(e)=>{setAddress(e.target.value)}} 
              type="text" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Address'
            />
          </div>

          <hr className='border-purple-300' />

          <div className='space-y-4'>
            <h1 className='text-xl font-semibold text-gray-800'>Change Password</h1>
            <input 
              autoComplete='on' 
              value={currPassword} 
              onChange={(e)=>{setcurrPassword(e.target.value)}} 
              type="password" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='Current Password'
            />
            <input 
              autoComplete='on' 
              value={newPassword} 
              onChange={(e)=>{setnewPassword(e.target.value)}} 
              type="password" 
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition' 
              placeholder='New Password'
            />
            <button 
              className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition'
              type='submit'
            >
              Update Profile
            </button>
          </div>
      </form>
    </div>
  )
}

export default CustomerProfileupdate

