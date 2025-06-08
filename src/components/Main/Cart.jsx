import React, { useEffect, useState } from 'react'
// import Cardimg from '../../assets/watch.jpeg';
import decrement from '../../assets/Decrement.png'
import increment from '../../assets/Increment.png'
import { FaTrash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function Cart() {

    const navigate=useNavigate()

    const [cartdata,setCartdata]=useState([]);

    let storedUser = localStorage.getItem('user');
    const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
    const token=localStorage.getItem('token')

    const [delcharges,setDelcharges]=useState("3")
    const [itemsprice,setItemsprice]=useState([]);
      
    // Api Call for Get Cart Data
  async function getCartdata() {

    if(storedUser===null)
    {
      alert("User Not LogedIn")
      navigate("/product")
      
    }

    else{

      try {
        const response = await fetch(`http://localhost:8080/api/cartItems/${user.user._id}`,{
          method:"GET",
          headers:{
            'Authorization': `Bearer ${token}`,
          }
        });
        
        const responsedata = await response.json();
        setCartdata(responsedata);  // Store the fetched data in state
  
        if (response.ok) {
          console.log("Card data fetched Successfully!!")
        }
        else{
            setCartdata([])
        }
      } catch (error) {
        console.error('Error:', error);
        setCartdata([])
      }

    }
    
  }

useEffect(()=>{
      getCartdata();
},[])

  //Api Call for Delete Cart Data
  function deleteItem(product) {
    fetch(`http://localhost:8080/api/removeCartItem/${product._id}`, { 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.ok) alert("Product Deleted"); else("Failed to delete")
      return response.json();
    })
    .then(data => {
      console.log(`Item ${product._id} deleted successfully`, data);
      
      // Assuming setCartData updates the state in React
      setCartdata(prevCart => prevCart.filter(item => item._id !== product._id));
      getCartdata();
    })
    .catch(error => console.error('Error:', error));
  }
  
   const ItemsPrice=(cartdata)=>{
    const priceArray=cartdata.map((e)=> e.price * e.qty)
    setItemsprice(priceArray)
   }

useEffect(()=>{
  ItemsPrice(cartdata);
},[cartdata])

const incrementquantityApi = async (product) => {
  try {
    const response = await fetch(`http://localhost:8080/api/increment/${product._id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      // body: JSON.stringify() // include data here if required
    });

    const responsedata = await response.json();

    if (response.ok) {
      alert("Incremented");
      getCartdata()
    } else {
      alert("Failed");
    }
  } catch (error) {
    console.log("Error in server:", error.message);
  }
};


const decrementquantityApi = async (product) => {
  try {
    const response = await fetch(`http://localhost:8080/api/decrement/${product._id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      // body: JSON.stringify() // include data here if required
    });

    const responsedata = await response.json();

    if (response.ok) {
      alert("decremented");
      getCartdata()
    } else {
      alert("Failed");
    }
  } catch (error) {
    console.log("Error in server:", error.message);
  }
};

// Sum function for Adding Prices of ItemsPrice state
const sum = (arr) => {
  return arr.reduce((total, num) => total + num, 0);
};

  return (
    <div className='w-full bg-white flex'>

       <div className='w-[70%] flex flex-col items-center gap-4 p-10'>

       {cartdata.length > 0 ? (
  cartdata.map((product, index) => (
    <div key={index} className='w-full text-lg font-semibold flex justify-between items-center px-10 py-3 outline-3 outline-gray-400'>
      <div className='flex justify-center items-center gap-3'>
        <img className='w-24 h-28' src={product.img} alt="" />
        <h3>{product.productName}</h3> {/* Assuming productName exists */}
      </div>
      <div className='flex justify-center items-center gap-2'>
        <img className='w-6 h-6' src={decrement} alt="" onClick={()=>decrementquantityApi(product)}/>
        <h1>{product.qty}</h1>
        <img className='w-6 h-6' src={increment} alt="" onClick={()=>incrementquantityApi(product)} />
      </div>
      <div className='font-bold'>{"$"+product.price}</div>
      <button  onClick={()=>deleteItem(product)}><FaTrash className='cursor-pointer' size={24} color="red" /></button>
      
    </div>
  ))
) : (
  <h1 className='text-2xl font-bold text-center text-gray-500'>No Product Found, Add product in Cart</h1>
)}
</div>
      

       <div className='w-[30%] h-lvh p-10 bg-gray-300 text-xl font-bold flex flex-col gap-10'>

        <h1 className='text-4xl font-bold'>Summary</h1>

        <div className='flex justify-between'>
          <h1>ITEMS</h1>
          <h1>{"$"+ sum(itemsprice).toFixed(2)}</h1>
        </div> 

        <div className='flex flex-col gap-3'>
          <h1>SHIPPING</h1>
          <select className='bg-white w-full font-normal h-12 px-2 py-2' 
           onChange={(e)=>{setDelcharges(e.target.value)}} name="" id="">
            <option value="3">Normal-Delivery-$3.00</option>
            <option value="5">Standard-Delivery-$5.00</option>
            <option value="10">Urgent-Delivery-$10.00</option>
          </select>
        </div>

            <div className='flex flex-col gap-3'>
              <h1>GIVEN CODE</h1>
              <input className='bg-white w-full font-normal h-12 px-2 py-2' placeholder='Enter Your Code' type="number" />
            </div>

            <div className='flex flex-col gap-5'>

              <div className='flex justify-between'>
                <h1>Total Price</h1>
                <h1>{cartdata.length > 0 ? "$" + (sum(itemsprice) + Number(delcharges)).toFixed(2) : "$0"}</h1>
               </div>

             <button className='text-white w-full h-12 cursor-pointer bg-black' onClick={()=> navigate("/InfoInvoice", {state:{delcharges: delcharges}})}>Proceed To Checkout</button>
               
              
            </div>

       </div>
    </div>
  )
}

export default Cart
