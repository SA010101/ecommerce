import React, { useState } from 'react'
import { useEffect } from 'react';

function AllOrders() {

  const [showform,setShowform]=useState(false)
  const [allorders,setAllorders]=useState([])
  const token=localStorage.getItem('token')
  console.log("token is :"+token)
  console.log(allorders)

  const BASE_URL="http://localhost:8080/api"

   async function getOrderData() {
     
          try {
            const response = await fetch(`${BASE_URL}/orders`,{
              method:"GET",
              headers:{
                      Authorization: `Bearer ${token}`,
              }
            });
            
            const responsedata = await response.json();
      
            if (response.ok) {
              console.log("Order Data fetched")
              setAllorders(responsedata.orders);  // Store the fetched data in state
            }
            else{
                console.log("No Order")
                setAllorders([])
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }
      
    
    useEffect(()=>{
          getOrderData();
    },[])
  
  return (
    <div className='w-full h-auto px-5 py-6'>
      
              <div className='bg-green-50 border border-[#F5F5F5] w-full px-3 py-3 rounded-lg'>
              
               <div className='flex justify-between bg-[#F5F5F5]'>
                <h1>Customer Details</h1>
                <h1>Amount</h1>
                <h1>Status</h1>
                <h1>Date</h1>
                <h1>Actions</h1>
                </div> 
                <hr className='border border-[#F5F5F5]'/>

                {
                  allorders.map((order,index)=>
          <div key={index}>
            <div className='flex justify-between'>

                <div className='flex flex-col'>
                  <h1>{order.name}</h1>
                  <h1>{order.phone}</h1>
                  <h1>{order.address}</h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1>Rs. {order.totalAmount}</h1>
                  <h1>{order.items.length}</h1>
                </div>
                <h1>{order.status}</h1>
                <h1>{order.createdAt}</h1>
                <button className='cursor-pointer' onClick={()=>{setShowform(prev=> (!prev))}}>view Details</button>
                
             </div> 
            <hr className='border border-[#F5F5F5]'/>
           {
            showform && (
              <div className='flex flex-col py-2 gap-2 bg-white'>
             <h1>order</h1>

             <div className='flex flex-wrap gap-3 py-2'>
                   {
                  order.items.map((item,index)=> 
                    <div key={index} className='flex gap-2'>

                  <img className='w-16 h-20' src={item.img} alt="img" />
                  <div className='flex flex-col gap-1'>
                    <h1>{item.productName}</h1>
                    <h1>{item.quantity}</h1>
                    <h1>{item.price}</h1>
                  </div>

                 </div>
              
              
              )
             }
             </div>
            

             <div className='flex justify-between'>
                <h1>Delivery Charges: ${order.deliveryCharges}</h1>
                <div className='flex gap-1'>
                  <select name="" id="">
                    <option value="">Out Of Stock</option>
                    <option value="">Cancel</option>
                    <option value="">Confirmed</option>
                  </select>

                  <button className='bg-blue-500 px-2 py-1 roundesm'>Update Status</button>
                </div>
              </div>
              </div>
            )
           }

            
             
            </div>
                 
                  )
                  
                } 
        </div>

    </div>
  )
}

export default AllOrders
