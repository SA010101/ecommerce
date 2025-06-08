import React, { useState } from 'react'
import { useEffect } from 'react';

function AllOrders() {

  const [showform,setShowform]=useState(false)
  const [orderstatus,setOrderstatus]=useState("Out of Stock")
  const [allorders,setAllorders]=useState([])
  const token=localStorage.getItem('token')
 
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
      
    const statusData={
       newStatus:orderstatus,
    }

      async function UpdateStatus(orderId) {

        console.log("Order Id received is: "+ orderId)
     
          try {

            const response = await fetch(`${BASE_URL}/updateOrderStatus/${orderId}`,{
              method:"PUT",
              headers:{
                      Authorization: `Bearer ${token}`,
                      'Content-Type': 'application/json'   // Add this line!
              },
              body: JSON.stringify(statusData)
            });
            
            const responsedata = await response.json();
      
            if (response.ok) {
              alert("Status Updated")
              console.log(responsedata)
              getOrderData()  // fetch Orders again
            }
            else{
                console.log("Not Updated")
                
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
                  allorders.length>0? allorders.map((order,index)=>
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
                  <select name="" id="" onChange={(e)=> setOrderstatus(e.target.value)}>
                    <option value="Out Of Stock">Out Of Stock</option>
                    <option value="Cancel">Cancel</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>

                  <button className='bg-blue-500 px-2 py-1 roundesm cursor-pointer' onClick={()=>{UpdateStatus(order._id)}}>Update Status</button>
                </div>
              </div>
              </div>
            )
           }

            
            </div>
                 
                  ):(
                    <div className='flex justify-center text-2xl font-semibold py-3'>No Orders</div>
                  )
                  
                } 
        </div>

    </div>
  )
}

export default AllOrders
