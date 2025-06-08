// // import React from 'react'
// // import { useEffect,useState } from 'react';
// // import { FaSearch } from 'react-icons/fa';
// // import { MdPhone } from 'react-icons/md';
// // import { MdLocalShipping } from 'react-icons/md'; // Material Design
// // import { FaMapMarkerAlt } from 'react-icons/fa';
// // import { FaRegClock } from 'react-icons/fa';



// // function ConfirmOrders() {

// //     const [allorders,setAllorders]=useState([])
// //     const BASE_URL="http://localhost:8080/api"
// //     const token=localStorage.getItem('token')
    
// //       // console.log(orderstatus)

// //     async function getOrderData() {

// //           try {
// //             const response = await fetch(`${BASE_URL}/orders`,{
// //               method:"GET",
// //               headers:{
// //                       Authorization: `Bearer ${token}`,
// //               }
// //             });
            
// //             const responsedata = await response.json();
      
// //             if (response.ok) {

// //               const DeliverOrders = responsedata.orders.filter(order => order.status === 'Delivered');
// //               setAllorders(DeliverOrders); // Only confirmed orders
// //               console.log(responsedata)

              
// //             }
// //             else{
// //                 console.log("No Order")
// //                 setAllorders([])
// //             }

// //           } catch (error) {
// //             console.error('Error:', error);
// //           }
        
// //       }

    
// //       useEffect(()=>{
// //                 getOrderData();
// //           },[])

          

// //   return (
// //     <div className='w-full flex flex-col gap-10 py-10 px-10 bg-[#F5F5F5]'>

// //       <div className='flex justify-between'>
// //         <div>
// //           <h1 className='text-2xl font-semibold'>Orders Ready to Dispatch</h1>
// //           <h1>Manage confirmed orders and update dispatch status</h1>
// //         </div>
// //         <button className='bg-blue-50 px-3 rounded-lg font-semibold text-blue-600'>{allorders.length} order Delivered</button>
// //       </div>
// //       <div className='flex w-full gap-10 bg-white py-6 px-5 rounded-lg'>
// //         <div className='w-full flex items-center gap-2 outline-0 border border-black rounded-sm px-3 py-2'>
// //               <FaSearch size={20} color="gray" />
// //              <input type="text" placeholder='Search Order...' className='w-full h-full outline-0' />
// //         </div>
       
// //         <select name="" id="" className='outline-0 border border-black rounded-sm px-3 py-1'>
// //           <option value="">All Fields</option>
// //         </select>
// //       </div>

// //       <div>

// //         {
// //           allorders.length>0 ? allorders.map((order,index)=>{

// //            return  <div className='flex gap-10 flex-col bg-green-100 w-[600px] rounded-lg'>
             
// //             <div className='flex flex-col gap-4 px-4 py-4 h-[150px] bg-blue-600 rounded-tl-lg rounded-tr-lg'>
// //                   <div className='flex justify-between'>
// //                     <div className='flex flex-col'>
// //                       <h1>{order.name}</h1>
// //                       <h1>Ready to Dispatch</h1>
// //                     </div>
// //                     <div className='flex flex-col items-center'>
// //                       <h1>${order.totalAmount}</h1>
// //                       <h1>Total Amount</h1>
// //                     </div>
// //                   </div>
// //                   <div>
// //                         <h1>Order ID:{order._id}</h1>
// //                         <h1>Confirmed: {order.createdAt}</h1>
// //                   </div>
                  
// //                 </div>
// //                 <div className='bg-yellow-50 flex px-4 py-4 flex-col gap-8 w-auto h-[200px]'>

// //                       <div className='flex justify-between gap-2'>

// //                         <div className='flex gap-2 items-center'>
// //                           <MdPhone size={20} color="gray" />
                          
// //                           <div className='flex flex-col'>
// //                             <h1>Phone</h1>
// //                             <h1>{order.phone}</h1>
// //                           </div>
// //                         </div>

// //                          <div className='flex gap-2 items-center'>
// //                           <MdLocalShipping size={22} color="gray" />
// //                           <div className='flex flex-col'>
// //                             <h1>Delivery Charges</h1>
// //                             <h1>${order.deliveryCharges}</h1>
// //                           </div>
// //                         </div>

// //                       </div>
                      
// //                        <div className='flex justify-between gap-2'>

// //                         <div className='flex gap-2 items-center'>
// //                           <FaMapMarkerAlt size={22} color="red" />
// //                           <div className='flex flex-col'>
// //                             <h1>Delivery Address</h1>
// //                             <h1>{order.address}</h1>
// //                           </div>
// //                         </div>

// //                          <div className='flex gap-2 items-center'>
// //                           <FaRegClock size={20} color="gray" />
// //                           <div className='flex flex-col'>
// //                             <h1>Ordered At</h1>
// //                             <h1>{order.createdAt}</h1>
// //                           </div>
// //                         </div>

// //                       </div>

// //                       <button className='flex items-start bg-blue-500'>{order.status}</button>

// //                 </div>

// //                 <div className='w-full px-4 py-4 bg-fuchsia-100'>

// //                   <h1>Items Delivered</h1>

// //                   {/* <div className='flex h-[300px]'> */}
                              
// //                     {
// //                       order.items.map((item)=>{
// //                         return  <div className='flex py-2 px-3 items-center gap-3'>
// //                         <img className='w8 h-8' src={item.img} alt="img" />
// //                         <div className='flex flex-col'>
// //                           <h1>{item.productName}</h1>
// //                           <h1>{item.quantity}</h1>
// //                         </div>
                        
// //                       </div>
// //                       })
// //                     }          
                     

// //                   {/* </div> */}

// //                 </div>
                      
// //           </div>

// //           }):
// //           (
// //             <div className='flex justify-center'>No Orders Deliver Yet</div>
// //           )
           
// //         }
          

// //       </div>

// //     </div>
// //   )
// // }

// // export default ConfirmOrders


// import React, { useEffect, useState } from 'react';
// import { FaSearch, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
// import { MdPhone, MdLocalShipping } from 'react-icons/md';

// function ConfirmOrders() {
//   const [allorders, setAllorders] = useState([]);
//   const BASE_URL = "http://localhost:8080/api";
//   const token = localStorage.getItem('token');

//   async function getOrderData() {
//     try {
//       const response = await fetch(`${BASE_URL}/orders`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });

//       const responsedata = await response.json();

//       if (response.ok) {
//         const DeliverOrders = responsedata.orders.filter(order => order.status === 'Delivered');
//         setAllorders(DeliverOrders);
//       } else {
//         setAllorders([]);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }

//   useEffect(() => {
//     getOrderData();
//   }, []);

//   return (
//     <div className='w-full flex flex-col gap-12 py-12 px-12 bg-gray-50'>

//       <div className='flex justify-between items-center'>
//         <div>
//           <h1 className='text-3xl font-bold text-gray-900'>Orders Ready to Dispatch</h1>
//           <p className='text-gray-600 mt-1'>Manage confirmed orders and update dispatch status</p>
//         </div>
//         <button className='bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold shadow'>
//           {allorders.length} Orders Delivered
//         </button>
//       </div>

//       <div className='flex w-full gap-6 bg-white py-5 px-6 rounded-lg shadow-sm border border-gray-200'>
//         <div className='flex items-center gap-3 flex-1 border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400'>
//           <FaSearch size={20} className='text-gray-400' />
//           <input
//             type="text"
//             placeholder='Search Order...'
//             className='w-full h-full outline-none text-gray-700 placeholder-gray-400'
//           />
//         </div>

//         <select className='border border-gray-300 rounded-md px-4 py-2 text-gray-700'>
//           <option value="">All Fields</option>
//         </select>
//       </div>

//       <div className='flex flex-col gap-10 items-center'>

//         {allorders.length > 0 ? allorders.map((order, index) => (
//           <div key={index} className='flex flex-col bg-green-50 w-[620px] rounded-xl shadow-md overflow-hidden'>

//             <div className='bg-blue-700 text-white px-6 py-5 rounded-t-xl'>
//               <div className='flex justify-between mb-3'>
//                 <div>
//                   <h2 className='text-xl font-semibold'>{order.name}</h2>
//                   <p className='text-sm opacity-80'>Ready to Dispatch</p>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                   <h3 className='text-lg font-bold'>${order.totalAmount}</h3>
//                   <p className='text-sm opacity-80'>Total Amount</p>
//                 </div>
//               </div>
//               <div className='text-sm opacity-75'>
//                 <p>Order ID: <span className='font-mono'>{order._id}</span></p>
//                 <p>Confirmed: {new Date(order.createdAt).toLocaleString()}</p>
//               </div>
//             </div>

//             <div className='bg-yellow-50 flex flex-col gap-6 px-6 py-6 h-[210px]'>
//               <div className='flex justify-between'>
//                 <div className='flex items-center gap-3'>
//                   <MdPhone size={22} className='text-gray-500' />
//                   <div>
//                     <p className='text-sm font-semibold text-gray-700'>Phone</p>
//                     <p className='text-sm text-gray-600'>{order.phone}</p>
//                   </div>
//                 </div>

//                 <div className='flex items-center gap-3'>
//                   <MdLocalShipping size={24} className='text-gray-500' />
//                   <div>
//                     <p className='text-sm font-semibold text-gray-700'>Delivery Charges</p>
//                     <p className='text-sm text-gray-600'>${order.deliveryCharges}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className='flex justify-between'>
//                 <div className='flex items-center gap-3'>
//                   <FaMapMarkerAlt size={24} className='text-red-500' />
//                   <div>
//                     <p className='text-sm font-semibold text-gray-700'>Delivery Address</p>
//                     <p className='text-sm text-gray-600 max-w-xs truncate'>{order.address}</p>
//                   </div>
//                 </div>

//                 <div className='flex items-center gap-3'>
//                   <FaRegClock size={22} className='text-gray-500' />
//                   <div>
//                     <p className='text-sm font-semibold text-gray-700'>Ordered At</p>
//                     <p className='text-sm text-gray-600'>{new Date(order.createdAt).toLocaleString()}</p>
//                   </div>
//                 </div>
//               </div>

//               <button className='px-4 py-1 bg-blue-600 text-white rounded-lg w-max font-semibold'>
//                 {order.status}
//               </button>
//             </div>

//             <div className='bg-fuchsia-100 px-6 py-5 rounded-b-xl'>
//               <h3 className='text-lg font-semibold mb-3'>Items Delivered</h3>
//               <div className='flex flex-wrap gap-4 max-h-40 overflow-auto'>
//                 {order.items.map((item, idx) => (
//                   <div key={idx} className='flex items-center gap-3 bg-white rounded-md shadow px-3 py-2'>
//                     <img className='w-10 h-10 object-cover rounded' src={item.img} alt="product" />
//                     <div className='flex flex-col'>
//                       <p className='font-semibold text-gray-800'>{item.productName}</p>
//                       <p className='text-sm text-gray-600'>Qty: {item.quantity}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         )) : (
//           <div className='flex justify-center text-gray-500 text-lg mt-20'>No Orders Delivered Yet</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ConfirmOrders;


import React, { useEffect, useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { MdPhone, MdLocalShipping } from 'react-icons/md';

function ConfirmOrders() {
  const [allorders, setAllorders] = useState([]);
  const BASE_URL = "http://localhost:8080/api";
  const token = localStorage.getItem('token');

  async function getOrderData() {
    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      const responsedata = await response.json();

      if (response.ok) {
        const DeliverOrders = responsedata.orders.filter(order => order.status === 'Delivered');
        setAllorders(DeliverOrders);
      } else {
        setAllorders([]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <div className='w-full flex flex-col gap-12 py-12 px-12 bg-gray-50'>

      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Orders Ready to Dispatch</h1>
          <p className='text-gray-600 mt-1'>Manage confirmed orders and update dispatch status</p>
        </div>
        <button className='bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg font-semibold shadow'>
          {allorders.length} Orders Delivered
        </button>
      </div>

      <div className='flex w-full gap-6 bg-white py-5 px-6 rounded-lg shadow-sm border border-gray-200'>
        <div className='flex items-center gap-3 flex-1 border border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-400'>
          <FaSearch size={20} className='text-gray-400' />
          <input
            type="text"
            placeholder='Search Order...'
            className='w-full h-full outline-none text-gray-700 placeholder-gray-400'
          />
        </div>

        <select className='border border-gray-300 rounded-md px-4 py-2 text-gray-700'>
          <option value="">All Fields</option>
        </select>
      </div>

      <div className='flex flex-col gap-10 items-center'>

        {allorders.length > 0 ? allorders.map((order, index) => (
          <div key={index} className='flex flex-col bg-emerald-50 w-[800px] rounded-xl shadow-md overflow-hidden'>

            <div className='bg-emerald-600 text-white px-6 py-5 rounded-t-xl'>
              <div className='flex justify-between mb-3'>
                <div>
                  <h2 className='text-xl font-semibold'>{order.name}</h2>
                  <p className='text-sm opacity-90'>Ready to Dispatch</p>
                </div>
                <div className='flex flex-col items-center'>
                  <h3 className='text-lg font-bold'>${order.totalAmount}</h3>
                  <p className='text-sm opacity-90'>Total Amount</p>
                </div>
              </div>
              <div className='text-sm opacity-90'>
                <p>Order ID: <span className='font-mono'>{order._id}</span></p>
                <p>Confirmed: {new Date(order.createdAt).toLocaleString()}</p>
              </div>
            </div>

            <div className='bg-lime-50 flex flex-col gap-6 px-6 py-6 h-[210px]'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  <MdPhone size={22} className='text-gray-500' />
                  <div>
                    <p className='text-sm font-semibold text-gray-700'>Phone</p>
                    <p className='text-sm text-gray-600'>{order.phone}</p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <MdLocalShipping size={24} className='text-gray-500' />
                  <div>
                    <p className='text-sm font-semibold text-gray-700'>Delivery Charges</p>
                    <p className='text-sm text-gray-600'>${order.deliveryCharges}</p>
                  </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  <FaMapMarkerAlt size={24} className='text-red-500' />
                  <div>
                    <p className='text-sm font-semibold text-gray-700'>Delivery Address</p>
                    <p className='text-sm text-gray-600 max-w-xs truncate'>{order.address}</p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <FaRegClock size={22} className='text-gray-500' />
                  <div>
                    <p className='text-sm font-semibold text-gray-700'>Ordered At</p>
                    <p className='text-sm text-gray-600'>{new Date(order.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <button className='px-4 py-1 bg-emerald-600 text-white rounded-lg w-max font-semibold'>
                {order.status}
              </button>
            </div>

            <div className='bg-white px-6 py-5 rounded-b-xl'>
              <h3 className='text-lg font-semibold text-emerald-700 mb-3'>Items Delivered</h3>
              <div className='flex flex-wrap gap-4 max-h-40 overflow-auto'>
                {order.items.map((item, idx) => (
                  <div key={idx} className='flex items-center gap-3 bg-gray-50 rounded-md border border-gray-200 px-3 py-2'>
                    <img className='w-10 h-10 object-cover rounded' src={item.img} alt="product" />
                    <div className='flex flex-col'>
                      <p className='font-semibold text-gray-800'>{item.productName}</p>
                      <p className='text-sm text-gray-600'>Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )) : (
          <div className='flex justify-center text-gray-500 text-lg mt-20'>No Orders Delivered Yet</div>
        )}
      </div>
    </div>
  );
}

export default ConfirmOrders;
