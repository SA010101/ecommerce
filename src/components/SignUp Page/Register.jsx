import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Register()
{

  const [name,setUsername]=useState("");
  const [useremail,setEmail]=useState("");
  const [userpassword,setPassword]=useState("");
  const [role,setRole]=useState("Customer")
  const navigate=useNavigate()
  console.log(role)

  async function registerUser() {

    const customerData = {
      username:name,
      email:useremail,
      password:userpassword
    };
  
    const staffData={
      staffName:name,
      email:useremail,
      password:userpassword
    }

      if(role==="Customer"){

           try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
      });
    
      const data = await response.json();
      console.log(data);
    
      if (response.ok) {
        alert('Customer Register Successful');
        navigate("/product")

      } else {
        // If backend sends specific error message, show that
        alert(data.message || 'Something went wrong during registration.');
      }
    
    } catch (error) {
      
      alert('Registration failed: ' + error.message);
    }

      }

      else{

               try {
      const response = await fetch('http://localhost:8080/api/staffSignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(staffData)
      });
    
      const data = await response.json();
      console.log(data);
    
      if (response.ok) {
        alert('Staff Register Successful!');
        navigate("/product")
      } else {
        // If backend sends specific error message, show that
        alert(data.message || 'Something went wrong during registration.');
      }
    
    } catch (error) {
      
      alert('Registration failed: ' + error.message);
    }

      }

   
  }    
  
  function handleSubmit(e) {
    e.preventDefault();
    registerUser();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="username"
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="mail"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <select className="w-full h-5 outline-0 border border-black rounded-sm" onChange={(e)=>{setRole(e.target.value)}} name="" id="">
          <option value="Customer">Customer</option>
          <option value="Staff">Staff</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
