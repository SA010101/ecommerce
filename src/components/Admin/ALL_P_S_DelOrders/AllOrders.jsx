// import React, { useState } from 'react'
// import { useEffect } from 'react';

// function AllOrders() {

//   const [showform,setShowform]=useState(false)
//   const [orderstatus,setOrderstatus]=useState("Out of Stock")
//   const [allorders,setAllorders]=useState([])
//   const token=localStorage.getItem('token')
 
//   const BASE_URL="http://localhost:8080/api"

//    async function getOrderData() {
     
//           try {
//             const response = await fetch(`${BASE_URL}/orders`,{
//               method:"GET",
//               headers:{
//                       Authorization: `Bearer ${token}`,
//               }
//             });
            
//             const responsedata = await response.json();
      
//             if (response.ok) {
//               console.log("Order Data fetched")
//               setAllorders(responsedata.orders);  // Store the fetched data in state
//             }
//             else{
//                 console.log("No Order")
//                 setAllorders([])
//             }

//           } catch (error) {
//             console.error('Error:', error);
//           }
        
//       }
      
//     const statusData={
//        newStatus:orderstatus,
//     }

//       async function UpdateStatus(orderId) {

//         console.log("Order Id received is: "+ orderId)
     
//           try {

//             const response = await fetch(`${BASE_URL}/updateOrderStatus/${orderId}`,{
//               method:"PUT",
//               headers:{
//                       Authorization: `Bearer ${token}`,
//                       'Content-Type': 'application/json'   // Add this line!
//               },
//               body: JSON.stringify(statusData)
//             });
            
//             const responsedata = await response.json();
      
//             if (response.ok) {
//               alert("Status Updated")
//               console.log(responsedata)
//               getOrderData()  // fetch Orders again
//             }
//             else{
//                 console.log("Not Updated")
                
//             }

//           } catch (error) {
//             console.error('Error:', error);
//           }
        
//       }

    
//     useEffect(()=>{
//           getOrderData();
//     },[])
  
//   return (
//     <div className='w-full h-auto px-5 py-6'>
      
//               <div className='bg-green-50 border border-[#F5F5F5] w-full px-3 py-3 rounded-lg'>
              
//                <div className='flex justify-between bg-[#F5F5F5]'>
//                 <h1>Customer Details</h1>
//                 <h1>Amount</h1>
//                 <h1>Status</h1>
//                 <h1>Date</h1>
//                 <h1>Actions</h1>
//                 </div> 
//                 <hr className='border border-[#F5F5F5]'/>

//                 {
//                   allorders.length>0? allorders.map((order,index)=>
//           <div key={index}>
//             <div className='flex justify-between'>

//                 <div className='flex flex-col'>
//                   <h1>{order.name}</h1>
//                   <h1>{order.phone}</h1>
//                   <h1>{order.address}</h1>
//                 </div>
//                 <div className='flex flex-col justify-center items-center'>
//                   <h1>Rs. {order.totalAmount}</h1>
//                   <h1>{order.items.length}</h1>
//                 </div>
//                 <h1>{order.status}</h1>
//                 <h1>{order.createdAt}</h1>
//                 <button className='cursor-pointer' onClick={()=>{setShowform(prev=> (!prev))}}>view Details</button>
                
//              </div> 
//             <hr className='border border-[#F5F5F5]'/>
//            {
//             showform && (
//               <div className='flex flex-col py-2 gap-2 bg-white'>
//              <h1>order</h1>

//              <div className='flex flex-wrap gap-3 py-2'>
//                    {
//                   order.items.map((item,index)=> 
//                     <div key={index} className='flex gap-2'>

//                   <img className='w-16 h-20' src={item.img} alt="img" />
//                   <div className='flex flex-col gap-1'>
//                     <h1>{item.productName}</h1>
//                     <h1>{item.quantity}</h1>
//                     <h1>{item.price}</h1>
//                   </div>

//                  </div>
              
              
//               )
//              }
//              </div>
            

//              <div className='flex justify-between'>
//                 <h1>Delivery Charges: ${order.deliveryCharges}</h1>
//                 <div className='flex gap-1'>
//                   <select name="" id="" onChange={(e)=> setOrderstatus(e.target.value)}>
//                     <option value="Out Of Stock">Out Of Stock</option>
//                     <option value="Cancel">Cancel</option>
//                     <option value="Confirmed">Confirmed</option>
//                   </select>

//                   <button className='bg-blue-500 px-2 py-1 roundesm cursor-pointer' onClick={()=>{UpdateStatus(order._id)}}>Update Status</button>
//                 </div>
//               </div>
//               </div>
//             )
//            }

            
//             </div>
                 
//                   ):(
//                     <div className='flex justify-center text-2xl font-semibold py-3'>No Orders</div>
//                   )
                  
//                 } 
//         </div>

//     </div>
//   )
// }

// export default AllOrders


import React, { useState, useEffect } from 'react';

function AllOrders() {
  const [showform, setShowform] = useState(false);
  const [orderstatus, setOrderstatus] = useState("Out of Stock");
  const [allorders, setAllorders] = useState([]);
  const token = localStorage.getItem('token');
  const BASE_URL = "http://localhost:8080/api";

  async function getOrderData() {
    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const responsedata = await response.json();

      if (response.ok) {
        console.log("Order Data fetched");
        setAllorders(responsedata.orders);
      } else {
        console.log("No Order");
        setAllorders([]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const statusData = {
    newStatus: orderstatus,
  };

  async function UpdateStatus(orderId) {
    console.log("Order Id received is: " + orderId);

    try {
      const response = await fetch(`${BASE_URL}/updateOrderStatus/${orderId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(statusData),
      });

      const responsedata = await response.json();

      if (response.ok) {
        alert("Status Updated");
        console.log(responsedata);
        getOrderData();
      } else {
        console.log("Not Updated");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className="w-full h-auto px-6 py-8 bg-gray-50 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-5 gap-4 text-gray-700 font-semibold border-b border-gray-300 pb-3">
          <span>Customer Details</span>
          <span className="text-center">Amount</span>
          <span className="text-center">Status</span>
          <span className="text-center">Date</span>
          <span className="text-center">Actions</span>
        </div>

        {allorders.length > 0 ? (
          allorders.map((order, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <div className="grid grid-cols-5 gap-4 items-center py-4 hover:bg-gray-50 transition duration-150 ease-in-out">
                <div className="flex flex-col space-y-1 text-gray-800">
                  <span className="font-medium">{order.name}</span>
                  <span className="text-sm text-gray-500">{order.phone}</span>
                  <span className="text-sm text-gray-500 truncate max-w-xs">{order.address}</span>
                </div>
                <div className="text-center text-gray-800">
                  <p className="font-semibold">Rs. {order.totalAmount}</p>
                  <p className="text-sm text-gray-500">{order.items.length} items</p>
                </div>
                <div className="text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        order.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Cancel"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="text-center text-gray-600 text-sm">{new Date(order.createdAt).toLocaleDateString()}</div>
                <div className="text-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
                    onClick={() => setShowform((prev) => !prev)}
                  >
                    View Details
                  </button>
                </div>
              </div>

              {showform && (
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <h2 className="text-lg font-bold mb-4 text-gray-700">Order Details</h2>

                  <div className="flex flex-wrap gap-6 mb-4">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex gap-4 items-center bg-white rounded shadow p-3 w-full sm:w-auto">
                        <img className="w-16 h-20 object-cover rounded-md" src={item.img} alt="Product" />
                        <div className="flex flex-col text-gray-700">
                          <span className="font-semibold">{item.productName}</span>
                          <span>Quantity: {item.quantity}</span>
                          <span>Price: Rs. {item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-gray-700 font-medium mb-3">
                    <span>Delivery Charges: Rs. {order.deliveryCharges}</span>
                    <div className="flex items-center space-x-2">
                      <select
                        value={orderstatus}
                        onChange={(e) => setOrderstatus(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="Out Of Stock">Out Of Stock</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Confirmed">Confirmed</option>
                      </select>
                      <button
                        onClick={() => UpdateStatus(order._id)}
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition duration-150"
                      >
                        Update Status
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-40 text-gray-500 text-xl font-semibold">No Orders</div>
        )}
      </div>
    </div>
  );
}

export default AllOrders;
