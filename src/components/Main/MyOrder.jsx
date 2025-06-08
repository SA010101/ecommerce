// import React, { useEffect,useState } from 'react'

// function MyOrder() {

//     const BASE_URL="http://localhost:8080/api"

//     let storedUser = localStorage.getItem('user');
//     const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
    
//     let userId = localStorage.getItem('userId');
//     const token=localStorage.getItem('token')
//     const [orderdata,setOrderdata]=useState([])
 

//     async function getOrderData() {
     
//           try {
//             const response = await fetch(`${BASE_URL}/userOrders/${userId}`,{
//               method:"GET",
//               headers:{
//                     'Authorization': `Bearer ${token}`
//               }

//             });
            
//             const responsedata = await response.json();
      
//             if (response.ok) {

//               setOrderdata(responsedata);  // Store the fetched data in state

//             }
//             else{
//                 console.log("No Order")
//             }

//           } catch (error) {
//             console.error('Error:', error);
//           }
        
//       }
    
//     useEffect(()=>{
//           getOrderData();
//     },[],orderdata)


//     async function cancelorder(order) {

//       console.log(order)
//       if(order.status=="Pending" || order.status=="Cancel" || order.status=="Out Of Stock")
      
//     {
//           try {
//             const response = await fetch(`${BASE_URL}/cancelOrder/${order._id}`,{
//               method:"DELETE",
//               headers:{
//                 'Authorization': `Bearer ${token}`
//               }
//             });
            
//             const responsedata = await response.json();
//             setOrderdata(responsedata);  // Store the fetched data in state
      
//             if (response.ok) {
//               console.log("Order Cancelled")
//               getOrderData()
//             }
//             else{
//                 console.log("Api Error")
//             }

//           } catch (error) {
//             console.error('Error:', error);
//           }
//         }

//         else {
//           alert("You Can't Cancel Order now")
//         }
        
//       }
      
    
//   return (
    
//     <div className='flex flex-col gap-6 py-5 items-center  bg-[#F5F5F5]'>

//       <h1 className='text-center text-3xl font-bold'>My Orders</h1>
//     {
//       // If Order Place then display it like that
//       orderdata.length>0 ? (
//       orderdata.map((order,index)=>
      
//          <div key={index} className='flex flex-col justify-center items-center w-[80%] px-28'>
//             <div className='w-full flex flex-col rounded-tr-lg rounded-tl-lg gap-1 px-3 py-3 border border-gray-200'>
                
//                 <div className='flex justify-between'>
//                     <h1>Order#</h1>
//                     <h1>{order.status}</h1>
//                 </div>
//                 <h1>{new Date(order.createdAt).toISOString().split('T')[0]}</h1>

//             </div>
//             <hr />
//             <div className='w-full flex bg-white px-3 py-3'>
//                 <div className='w-[50%]'>
//                     <h1>Shipping Details</h1>
//                     <h1>{order.name}</h1>
//                     <h1>{order.phone}</h1>
//                     <h1>{order.address}</h1>
//                 </div>

//                 <div className='w-[50%]'>
//                     <h1>Order Summary</h1>
//                     <div className='flex flex-col py-1 px-1 bg-[#F5F5F5]'>
//                            <div className='flex flex-col gap-1 py-2'>
              
//                             <div className='flex justify-between items-center'>
//                                 <h1>Items({order.items.length})</h1>
//                                 <h1>${order.totalAmount}</h1>
//                             </div>

//                             <div className='flex justify-between items-center'>
//                                 <h1>Shipping</h1>
//                                 <h1>${order.deliveryCharges}</h1>
//                             </div>
//                             <hr className='border border-gray-200'/>
//                             </div>
//                             <div className='flex justify-between items-center py-1'>
//                                 <h1>Total</h1>
//                                 <h1>${order.totalAmount + order.deliveryCharges}</h1>
//                             </div>

//                     </div>
//                 </div>
//             </div>
//             <hr className='border border-gray-200'/>
//             <div className='w-full '>

//                 <div className='flex flex-col rounded-br-lg rounded-bl-lg px-3 py-3 bg-white gap-2'>

//                 <h1>Order Items</h1>
//                 {
//                   order.items.map((item,index)=>

//                       <div key={index}>
//                      <div className='flex justify-between py-4'>
//                     <div className='flex gap-3'>
//                         <img className='w-[40px] h-[50px]' src={item.img} alt="img" />
//                         <div className='flex flex-col'>
//                             <h1>{item.productName}</h1>
//                             <h1>${item.price}*{item.quantity}</h1>
//                         </div>
//                     </div>
//                     <h1>${item.price * item.quantity}</h1>
//                 </div>
//                 <hr className='border-gray-200'/>
//                         </div>
//                   )
//                 }
//                <button className='bg-red-500 rounded-sm font-semibold text-white' onClick={()=>{ cancelorder(order)}}>Cancel Order</button>
//                     </div>
                    
//             </div>
//       </div>


//       )): // Else No Order Placed yet
//       (
//         <div>No Order Place Yet, Place the Order</div>
//       )
//     }
//     </div>
//   )
// }

// export default MyOrder


import React, { useEffect, useState } from 'react'

function MyOrder() {

  const BASE_URL = "http://localhost:8080/api"

  let storedUser = localStorage.getItem('user');
  const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;

  let userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token')
  const [orderdata, setOrderdata] = useState([])


  async function getOrderData() {

    try {
      const response = await fetch(`${BASE_URL}/userOrders/${userId}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const responsedata = await response.json();

      if (response.ok) {
        setOrderdata(responsedata);  // Store the fetched data in state
      }
      else {
        console.log("No Order")
      }

    } catch (error) {
      console.error('Error:', error);
    }

  }

  useEffect(() => {
    getOrderData();
  }, [])

  async function cancelorder(order) {
    console.log(order)
    if (order.status === "Pending" || order.status === "Cancel" || order.status === "Out of Stock") {
      try {
        const response = await fetch(`${BASE_URL}/cancelOrder/${order._id}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const responsedata = await response.json();
        setOrderdata(responsedata);  // Store the fetched data in state

        if (response.ok) {
          console.log("Order Cancelled")
          getOrderData()
        }
        else {
          console.log("Api Error")
        }

      } catch (error) {
        console.error('Error:', error);
      }
    }
    else {
      alert("You Can't Cancel Order now")
    }
  }


  return (

    <div className='flex flex-col gap-8 py-8 items-center bg-gradient-to-b from-indigo-50 to-white min-h-screen'>

      <h1 className='text-center text-4xl font-extrabold text-indigo-700 mb-8'>My Orders</h1>

      {
        orderdata.length > 0 ? (
          orderdata.map((order, index) =>

            <div key={index} className='flex flex-col justify-center items-center w-[90%] max-w-4xl px-8 py-6 rounded-xl shadow-lg bg-white border border-indigo-100'>

              <div className='w-full flex flex-col rounded-t-lg gap-1 px-4 py-4 bg-indigo-50 border-b border-indigo-200'>

                <div className='flex justify-between'>
                  <h1 className='font-semibold text-indigo-600'>Order#</h1>
                  <h1 className={`font-semibold ${
                    order.status === 'Pending' ? 'text-yellow-600' :
                    order.status === 'Cancel' ? 'text-red-600' :
                    order.status === 'Delivered' ? 'text-green-600' : 'text-gray-600'
                  }`}>{order.status}</h1>
                </div>
                <h1 className='text-gray-500'>{new Date(order.createdAt).toISOString().split('T')[0]}</h1>

              </div>
              <hr className='border-indigo-200 w-full' />
              <div className='w-full flex bg-white px-6 py-6'>

                <div className='w-1/2 pr-8 border-r border-indigo-100'>
                  <h2 className='font-semibold text-indigo-700 mb-3'>Shipping Details</h2>
                  <p className='text-gray-700'>{order.name}</p>
                  <p className='text-gray-700'>{order.phone}</p>
                  <p className='text-gray-700'>{order.address}</p>
                </div>

                <div className='w-1/2 pl-8'>
                  <h2 className='font-semibold text-indigo-700 mb-3'>Order Summary</h2>
                  <div className='flex flex-col bg-indigo-50 p-4 rounded-lg'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-indigo-600 font-medium'>Items ({order.items.length})</span>
                      <span className='font-semibold text-indigo-800'>${order.totalAmount}</span>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-indigo-600 font-medium'>Shipping</span>
                      <span className='font-semibold text-indigo-800'>${order.deliveryCharges}</span>
                    </div>
                    <hr className='border-indigo-300 mb-3' />
                    <div className='flex justify-between items-center font-bold text-indigo-900'>
                      <span>Total</span>
                      <span>${order.totalAmount + order.deliveryCharges}</span>
                    </div>

                  </div>
                </div>
              </div>
              <hr className='border-indigo-200 w-full' />
              <div className='w-full'>

                <div className='flex flex-col rounded-b-lg px-6 py-6 bg-white gap-4'>

                  <h2 className='text-indigo-700 font-semibold'>Order Items</h2>
                  {
                    order.items.map((item, idx) =>

                      <div key={idx} className='flex justify-between items-center py-3 border-b border-indigo-100'>

                        <div className='flex gap-4 items-center'>
                          <img className='w-[50px] h-[60px] rounded-md object-cover' src={item.img} alt="product" />
                          <div className='flex flex-col'>
                            <h3 className='font-medium text-indigo-800'>{item.productName}</h3>
                            <p className='text-indigo-600'>${item.price} × {item.quantity}</p>
                          </div>
                        </div>

                        <h3 className='font-semibold text-indigo-900'>${item.price * item.quantity}</h3>
                      </div>
                    )
                  }
                  <button
                    className='self-start mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-md transition-colors duration-200'
                    onClick={() => { cancelorder(order) }}
                  >
                    Cancel Order
                  </button>
                </div>

              </div>
            </div>
          )) : // Else No Order Placed yet
          (
            <div className='text-center text-gray-500 text-xl mt-12'>
              No Order Placed Yet, Place the Order
            </div>
          )
      }
    </div>
  )
}

export default MyOrder
