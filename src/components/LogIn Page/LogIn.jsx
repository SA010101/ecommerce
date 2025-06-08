// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';



// const LogIn = () => {
//   const [useremail,setEmail]=useState("");
//   const [userpassword,setPassword]=useState("");
//   const [role,setRole]=useState("Customer")
//   const navigate = useNavigate();

//   async function UserLogin() {

//     const userData = {
//       email:useremail,
//       password:userpassword
//     };
  

//     if(role==="Admin")
//     {
//       try {
//       const response = await fetch("http://localhost:8080/api/adminLogin", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });
  
//       const data = await response.json();

//       if (response.ok) {
//        alert("✅ Admin Login Successfully!!!");
//        localStorage.setItem('user', JSON.stringify(data));
//        localStorage.setItem('token', data.token)
//        localStorage.setItem("userId", data.admin._id)
//        navigate('/Product')
//       }
//       else{
//         alert(data.message)
//       }
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//     }
//     }
    
//     else if(role==="Customer"){
//       try {
//       const response = await fetch("http://localhost:8080/api/login", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//       });
  
//       const data = await response.json();

//       if (response.ok) {
//        alert("✅ Customer Login Successfully!!!");
//        localStorage.setItem('user', JSON.stringify(data));
//        localStorage.setItem('token', data.token)
//        localStorage.setItem("userId", data.user._id)
//        navigate('/Product')
//       }
//       else{
//         alert(data.message)
//       }
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//     }
//     }

//     else{

//       try {
//       const response = await fetch("http://localhost:8080/api/staffLogin", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData)
//       });
  
//       const data = await response.json();

//       if (response.ok) {
//        alert("✅ Staff Login Successfully!!!");
//        localStorage.setItem('user', JSON.stringify(data));
//        localStorage.setItem('token', data.token)
//        localStorage.setItem("userId", data.staff._id)
//        navigate('/Product')
//       }
//       else{
//         alert(data.message)
//       }
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//     }
//     }
    
//   }
  
//   function handleLogin(e) {
//     e.preventDefault();
//     UserLogin();
//   }

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <input
//           type="email"
//           placeholder="Email"
//           // value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <input
//         autoComplete='on'
//           type="password"
//           placeholder="Password"
//           // value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <div className='flex items-center gap-2'>
//           <select className="w-full h-5 outline-0 border border-black rounded-sm" onChange={(e)=>{setRole(e.target.value)}} name="" id="">
//           <option value="Customer">Customer</option>
//           <option value="Admin">Admin</option>
//           <option value="Staff">Staff</option>
//         </select>
//         </div>
        
//         <button type="submit" style={styles.button}>Login</button>
//       </form>

//       <p style={styles.signupText}>
//         Don't have an account?{' '}
//         <Link to="/Register" style={styles.signupLink}>Register / Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '300px',
//     margin: '100px auto',
//     padding: '2rem',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     textAlign: 'center'
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem'
//   },
//   input: {
//     padding: '10px',
//     fontSize: '1rem',
//     borderRadius: '5px',
//     border: '1px solid #ddd'
//   },
//   button: {
//     padding: '10px',
//     fontSize: '1rem',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px'
//   },
//   error: {
//     color: 'red',
//     marginBottom: '1rem'
//   },
//   signupText: {
//     marginTop: '1rem',
//     fontSize: '0.9rem'
//   },
//   signupLink: {
//     color: '#007bff',
//     textDecoration: 'none',
//     fontWeight: 'bold'
//   }
// };

// export default LogIn;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [useremail, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();

  async function UserLogin() {
    const userData = {
      email: useremail,
      password: userpassword
    };

    if (role === "Admin") {
      try {
        const response = await fetch("http://localhost:8080/api/adminLogin", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Admin Login Successfully!!!");
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('token', data.token);
          localStorage.setItem("userId", data.admin._id);
          navigate('/Product');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    }

    else if (role === "Customer") {
      try {
        const response = await fetch("http://localhost:8080/api/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Customer Login Successfully!!!");
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('token', data.token);
          localStorage.setItem("userId", data.user._id);
          navigate('/Product');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    }

    else {
      try {
        const response = await fetch("http://localhost:8080/api/staffLogin", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Staff Login Successfully!!!");
          localStorage.setItem('user', JSON.stringify(data));
          localStorage.setItem('token', data.token);
          localStorage.setItem("userId", data.staff._id);
          navigate('/Product');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Registration failed:', error.message);
      }
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    UserLogin();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="w-[320px] p-8 bg-white rounded-3xl shadow-lg border border-purple-300">
        <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-6 tracking-wide">Welcome Back</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <input
            autoComplete="on"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />
          <select
            className="w-full h-11 border border-purple-400 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            onChange={(e) => { setRole(e.target.value) }}
            defaultValue="Customer"
          >
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/Register" className="text-purple-600 font-semibold hover:underline">
            Register / Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

