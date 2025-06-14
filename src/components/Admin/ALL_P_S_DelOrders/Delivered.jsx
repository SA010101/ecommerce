import React, { useState } from 'react'
import { useEffect } from 'react';

function Delivered() {

  const [allorders,setAllorders]=useState([])
   const token=localStorage.getItem('token')

      const DeliveredOrders = allorders.filter((order) => order.status === "Delivered");

  const BASE_URL="http://localhost:8080/api"

   async function getOrderData() {
     
          try {
            const response = await fetch(`${BASE_URL}/orders`,
              {
              method:"GET",
              headers:{
                      Authorization: `Bearer ${token}`,
              }
            }
            );
            
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
    <div className='w-full px-5 py-6'>
      
              <div className='bg-white w-full px-3 py-3 rounded-lg'>
               <div className='flex justify-between bg-[#F5F5F5]'>
                <h1>Customer Details</h1>
                <h1>Amount</h1>
                <h1>Status</h1>
                <h1>Date</h1>
                <h1>Actions</h1>
                </div> 
                <hr className='border border-[#F5F5F5]'/>

                {
                  DeliveredOrders.length>0 ? DeliveredOrders.map((order,index)=>
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
                <h1>view Details</h1>
                
             </div> 
            <hr className='border border-[#F5F5F5]'/>
            
                </div>
                  ):(
                    <div className='flex justify-center text-2xl font-semibold py-3'>No Orders Delivered Yet</div>
                  )
                  
                } 
            </div>

    </div>
  )
}

export default Delivered

