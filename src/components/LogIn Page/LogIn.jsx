import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const [useremail,setEmail]=useState("");
  const [userpassword,setPassword]=useState("");
  // const [ischeck,setIscheck]=useState(false)
  const [role,setRole]=useState("Customer")
  // console.log(ischeck)
  const navigate = useNavigate();

  async function UserLogin() {

    const userData = {
      email:useremail,
      password:userpassword
    };
  

    if(role==="Admin")
    {
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
       localStorage.setItem('token', data.token)
       localStorage.setItem("userId", data.admin._id)
       console.log(data)
       navigate('/Product')
      }
      else{
        alert(data.message)
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
    }
    
    else if(role==="Customer"){
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
       localStorage.setItem('token', data.token)
       localStorage.setItem("userId", data.user._id)
       console.log(data)
       navigate('/Product')
      }
      else{
        alert(data.message)
      }
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
    }

    else{

      try {
      const response = await fetch("http://localhost:8080/api/staffLogin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      const data = await response.json();

      if (response.ok) {
       alert("✅ Staff Login Successfully!!!");
       localStorage.setItem('user', JSON.stringify(data));
       localStorage.setItem('token', data.token)
       localStorage.setItem("userId", data.staff._id)
       console.log(data)
       navigate('/Product')
      }
      else{
        alert(data.message)
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
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <div className='flex items-center gap-2'>
          <select className="w-full h-5 outline-0 border border-black rounded-sm" onChange={(e)=>{setRole(e.target.value)}} name="" id="">
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>
        </div>
        
        <button type="submit" style={styles.button}>Login</button>
      </form>

      <p style={styles.signupText}>
        Don't have an account?{' '}
        <Link to="/Register" style={styles.signupLink}>Register / Sign Up</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  },
  error: {
    color: 'red',
    marginBottom: '1rem'
  },
  signupText: {
    marginTop: '1rem',
    fontSize: '0.9rem'
  },
  signupLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default LogIn;
