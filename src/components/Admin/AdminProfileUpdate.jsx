// import React from 'react'
// import { useState } from 'react';
// import { FiCamera } from "react-icons/fi";


// function AdminProfileUpdate() {

//         let storedUser = localStorage.getItem('user');
//         const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
//         const token=localStorage.getItem('token')
//         const userId=localStorage.getItem('userId')
//         console.log(token)

//         const BASE_URL="http://localhost:8080/api"

//         const [adminName, setadminName] = useState(user?.admin?.adminName || "");
//         const [profileImg, setprofileImg] = useState(user?.user?.profileImg || "");
//         const [email, setEmail] = useState(user?.admin?.email || "");
//         const [phone, setphone] = useState(user?.admin?.phone || "");
//         const [currPassword,setcurrPassword]=useState("")
//         const [newPassword,setnewPassword]=useState("")

//         const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("adminName", adminName);
//     formData.append("profileImg", profileImg);
//     formData.append("email", email);
//     formData.append("phone",phone);
//     formData.append("currPassword",currPassword);
//     formData.append("newPassword",newPassword);

//     try {
//       const response = await fetch(`${BASE_URL}/updateAdminProfile/${userId}`, {
//         method: "PUT",
//         headers: {
//     Authorization: `Bearer ${token}`,
//   },
//         body: formData,
//       });

//       const data = await response.json();
//       console.log(data);
      
//       if(response.ok){
//         alert("Admin Profile Updated successfully")

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
//             src={ profileImg? URL.createObjectURL(profileImg) : user?.admin?.profileImg}
//             alt="Profile"
//             className='w-24 h-24 rounded-full object-cover'

//             />

//             {/* File input for new image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setprofileImg(e.target.files[0])}
//             />



//         </div>
          
//           <input autoComplete='on' value={adminName} onChange={(e)=>{setadminName(e.target.value)}} type="text" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='User Name'/>
//           <input autoComplete='on' value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Email'/>
//           <input autoComplete='on' value={phone} onChange={(e)=>{setphone(e.target.value)}} type="number" className='outline-0 border border-black rounded-sm px-3 py-1 bg-white' placeholder='Phone'/>

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

// export default AdminProfileUpdate


import React from 'react'
import { useState } from 'react';
import { FiCamera } from "react-icons/fi";

function AdminProfileUpdate() {

  let storedUser = localStorage.getItem('user');
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  console.log(token)

  const BASE_URL = "http://localhost:8080/api"

  const [adminName, setadminName] = useState(user?.admin?.adminName || "");
  const [profileImg, setprofileImg] = useState(user?.user?.profileImg || "");
  const [email, setEmail] = useState(user?.admin?.email || "");
  const [phone, setphone] = useState(user?.admin?.phone || "");
  const [currPassword, setcurrPassword] = useState("")
  const [newPassword, setnewPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("adminName", adminName);
    formData.append("profileImg", profileImg);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("currPassword", currPassword);
    formData.append("newPassword", newPassword);

    try {
      const response = await fetch(`${BASE_URL}/updateAdminProfile/${userId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Admin Profile Updated successfully")
      }
      else {
        alert(data.error)
      }

    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };


  return (
    <div className='flex flex-col items-center justify-center bg-gray-50 min-h-screen py-10 px-4 sm:px-0'>

      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>

        <div className='flex flex-col items-center gap-4 mb-8'>
          <h1 className='text-2xl font-bold text-gray-800'>Update Profile</h1>

          {/* Profile Image Container */}
          <div className="relative group w-28 h-28 rounded-full overflow-hidden shadow-md border-4 border-green-300 cursor-pointer">
            <img
              src={profileImg ? URL.createObjectURL(profileImg) : user?.admin?.profileImg}
              alt="Profile"
              className='w-full h-full object-cover'
            />
            {/* Camera icon overlay */}
            <label htmlFor="file-upload" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full text-white text-3xl cursor-pointer">
              <FiCamera />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setprofileImg(e.target.files[0])}
            />
          </div>
        </div>

        <div className='flex flex-col gap-5'>

          <input
            autoComplete='on'
            value={adminName}
            onChange={(e) => { setadminName(e.target.value) }}
            type="text"
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='User Name'
          />

          <input
            autoComplete='on'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='Email'
          />

          <input
            autoComplete='on'
            value={phone}
            onChange={(e) => { setphone(e.target.value) }}
            type="number"
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='Phone'
          />
        </div>

        <hr className='my-8 border-gray-300' />

        <div className='flex flex-col gap-5'>
          <h1 className='text-xl font-semibold text-gray-800'>Change Password</h1>

          <input
            autoComplete='on'
            value={currPassword}
            onChange={(e) => { setcurrPassword(e.target.value) }}
            type="password"
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='Current Password'
          />

          <input
            autoComplete='on'
            value={newPassword}
            type="password"
            onChange={(e) => { setnewPassword(e.target.value) }}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='New Password'
          />

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-300'
          >
            Update Profile
          </button>
        </div>
      </form>

    </div>
  )
}

export default AdminProfileUpdate
