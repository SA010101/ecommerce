import React, { useEffect,useState } from 'react'

function MyOrder() {

    const BASE_URL="http://localhost:8080/api"

    let storedUser = localStorage.getItem('user');
    const user = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
    
    let userId = localStorage.getItem('userId');
    const token=localStorage.getItem('token')
    const [orderdata,setOrderdata]=useState([])
 

    async function getOrderData() {
     
          try {
            const response = await fetch(`${BASE_URL}/userOrders/${userId}`,{
              method:"GET",
              headers:{
                    'Authorization': `Bearer ${token}`
              }

            });
            
            const responsedata = await response.json();
      
            if (response.ok) {

              setOrderdata(responsedata);  // Store the fetched data in state

            }
            else{
                console.log("No Order")
            }

          } catch (error) {
            console.error('Error:', error);
          }
        
      }
    
    useEffect(()=>{
          getOrderData();
    },[],orderdata)


    async function cancelorder(order) {

      console.log(order)
      if(order.status=="Pending" || order.status=="Cancel" || order.status=="Out Of Stock")
      
    {
          try {
            const response = await fetch(`${BASE_URL}/cancelOrder/${order._id}`,{
              method:"DELETE",
              headers:{
                'Authorization': `Bearer ${token}`
              }
            });
            
            const responsedata = await response.json();
            setOrderdata(responsedata);  // Store the fetched data in state
      
            if (response.ok) {
              console.log("Order Cancelled")
              getOrderData()
            }
            else{
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
    
    <div className='flex flex-col gap-6 py-5 items-center  bg-[#F5F5F5]'>

      <h1 className='text-center text-3xl font-bold'>My Orders</h1>
    {
      // If Order Place then display it like that
      orderdata.length>0 ? (
      orderdata.map((order,index)=>
      
         <div key={index} className='flex flex-col justify-center items-center w-[80%] px-28'>
            <div className='w-full flex flex-col rounded-tr-lg rounded-tl-lg gap-1 px-3 py-3 border border-gray-200'>
                
                <div className='flex justify-between'>
                    <h1>Order#</h1>
                    <h1>{order.status}</h1>
                </div>
                <h1>{new Date(order.createdAt).toISOString().split('T')[0]}</h1>

            </div>
            <hr />
            <div className='w-full flex bg-white px-3 py-3'>
                <div className='w-[50%]'>
                    <h1>Shipping Details</h1>
                    <h1>{order.name}</h1>
                    <h1>{order.phone}</h1>
                    <h1>{order.address}</h1>
                </div>

                <div className='w-[50%]'>
                    <h1>Order Summary</h1>
                    <div className='flex flex-col py-1 px-1 bg-[#F5F5F5]'>
                           <div className='flex flex-col gap-1 py-2'>
              
                            <div className='flex justify-between items-center'>
                                <h1>Items({order.items.length})</h1>
                                <h1>${order.totalAmount}</h1>
                            </div>

                            <div className='flex justify-between items-center'>
                                <h1>Shipping</h1>
                                <h1>${order.deliveryCharges}</h1>
                            </div>
                            <hr className='border border-gray-200'/>
                            </div>
                            <div className='flex justify-between items-center py-1'>
                                <h1>Total</h1>
                                <h1>${order.totalAmount + order.deliveryCharges}</h1>
                            </div>

                    </div>
                </div>
            </div>
            <hr className='border border-gray-200'/>
            <div className='w-full '>

                <div className='flex flex-col rounded-br-lg rounded-bl-lg px-3 py-3 bg-white gap-2'>

                <h1>Order Items</h1>
                {
                  order.items.map((item,index)=>

                      <div key={index}>
                     <div className='flex justify-between py-4'>
                    <div className='flex gap-3'>
                        <img className='w-[40px] h-[50px]' src={item.img} alt="img" />
                        <div className='flex flex-col'>
                            <h1>{item.productName}</h1>
                            <h1>${item.price}*{item.quantity}</h1>
                        </div>
                    </div>
                    <h1>${item.price * item.quantity}</h1>
                </div>
                <hr className='border-gray-200'/>
                        </div>
                  )
                }
               <button className='bg-red-500 rounded-sm font-semibold text-white' onClick={()=>{ cancelorder(order)}}>Cancel Order</button>
                    </div>
                    
            </div>
      </div>


      )): // Else No Order Placed yet
      (
        <div>No Order Place Yet, Place the Order</div>
      )
    }
    </div>
  )
}

export default MyOrder
