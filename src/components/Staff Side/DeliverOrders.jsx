
import React from 'react'
import { useEffect,useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { MdLocalShipping } from 'react-icons/md'; // Material Design
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';



function DispatchOrders() {

    const [orderstatus,setOrderstatus]=useState("Out of Stock")
    const orders = JSON.parse(localStorage.getItem('ordersData') || '[]');
    const deliveredOrders = orders.filter(
          (order) => order.status === "Delivered"
        );


  return (
    <div className='w-full flex flex-col gap-10 py-10 px-10 bg-[#F5F5F5]'>

      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Orders Ready to Deliver</h1>
          <h1>Manage Dispatched orders and update Delivery status</h1>
        </div>
        <button className='bg-blue-50 px-3 rounded-lg font-semibold text-blue-600'>2 orders Ready</button>
      </div>
      <div className='flex w-full gap-10 bg-white py-6 px-5 rounded-lg'>
        <div className='w-full flex items-center gap-2 outline-0 border border-black rounded-sm px-3 py-2'>
              <FaSearch size={20} color="gray" />
             <input type="text" placeholder='Search Order...' className='w-full h-full outline-0' />
        </div>
       
        <select name="" id="" className='outline-0 border border-black rounded-sm px-3 py-1'>
          <option value="">All Fields</option>
        </select>
      </div>

      <div>

          {
                deliveredOrders.map((order,index)=>{
          
                     return  <div className='flex gap-10 flex-col bg-green-100 w-[600px] rounded-lg'>
                       
                      <div className='flex flex-col gap-4 px-4 py-4 h-[150px] bg-blue-600 rounded-tl-lg rounded-tr-lg'>
                            <div className='flex justify-between'>
                              <div className='flex flex-col'>
                                <h1>{order.name}</h1>
                                <h1>Ready to Dispatch</h1>
                              </div>
                              <div className='flex flex-col items-center'>
                                <h1>${order.totalAmount}</h1>
                                <h1>Total Amount</h1>
                              </div>
                            </div>
                            <div>
                                  <h1>Order ID:{order._id}</h1>
                                  <h1>Confirmed: {order.createdAt}</h1>
                            </div>
                            
                          </div>
                          <div className='bg-yellow-50 flex px-4 py-4 flex-col gap-8 w-auto h-[200px]'>
          
                                <div className='flex justify-between gap-2'>
          
                                  <div className='flex gap-2 items-center'>
                                    <MdPhone size={20} color="gray" />
                                    
                                    <div className='flex flex-col'>
                                      <h1>Phone</h1>
                                      <h1>{order.phone}</h1>
                                    </div>
                                  </div>
          
                                   <div className='flex gap-2 items-center'>
                                    <MdLocalShipping size={22} color="gray" />
                                    <div className='flex flex-col'>
                                      <h1>Delivery Charges</h1>
                                      <h1>${order.deliveryCharges}</h1>
                                    </div>
                                  </div>
          
                                </div>
                                
                                 <div className='flex justify-between gap-2'>
          
                                  <div className='flex gap-2 items-center'>
                                    <FaMapMarkerAlt size={22} color="red" />
                                    <div className='flex flex-col'>
                                      <h1>Delivery Address</h1>
                                      <h1>{order.address}</h1>
                                    </div>
                                  </div>
          
                                   <div className='flex gap-2 items-center'>
                                    <FaRegClock size={20} color="gray" />
                                    <div className='flex flex-col'>
                                      <h1>Ordered At</h1>
                                      <h1>{order.createdAt}</h1>
                                    </div>
                                  </div>
          
                                </div>
          
                                <button className='flex items-start bg-blue-500'>{order.status}</button>
          
                          </div>
          
                          <div className='w-full px-4 py-4 bg-fuchsia-100'>
          
                            <h1>Items Delivered</h1>
          
                            {/* <div className='flex h-[300px]'> */}
                                        
                              {
                                order.items.map((item)=>{
                                  return  <div className='flex py-2 px-3 items-center gap-3'>
                                  <img className='w8 h-8' src={item.img} alt="img" />
                                  <div className='flex flex-col'>
                                    <h1>{item.productName}</h1>
                                    <h1>{item.quantity}</h1>
                                  </div>
                                  
                                </div>
                                })
                              }          
                               
          
                            {/* </div> */}
          
                          </div>
                    </div>
          
                    })
                     
                  }

      </div>

    </div>
  )
}

export default DispatchOrders
