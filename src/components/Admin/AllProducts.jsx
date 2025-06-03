import React, { useEffect,useState } from 'react'
import { FaTrash } from 'react-icons/fa';

function AllProducts() {

    const BASE_URL="http://localhost:8080/api"
    const [data,setData]=useState([])
    const token=localStorage.getItem('token')
    console.log(token)
    console.log(data)
      async function getProducts() {
          try {
            const response = await fetch(`${BASE_URL}/products`,{
              method:"GET",
              headers: {
    Authorization: `Bearer ${token}`,
  }
            });
          
            const responsedata = await response.json();
            if (response.ok) {
              console.log("Data getted successfully!!")
                setData(responsedata);
            }
            else{
              setData([])
            }
             // Set the fetched data in state
          } catch (error) {
            console.error('Error fetching cart items:', error.message);
            setData([])
          }
        }    
      
        useEffect(() => {
          getProducts();
        }, []);

        const deleteUser=async (product)=>{

              try {
                const response = await fetch(`${BASE_URL}/deleteProduct/${product._id}`,{
                  method: 'DELETE',
                  headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                                // Add any auth token if required
                                 // 'Authorization': 'Bearer your_token_here'
                      }
                     });
              
                const responsedata = await response.json();
                if (response.ok) {
                  alert(`Product Deleted Successfully`)
                  getProducts();
                    
                }
                else{
                  alert("APi Error")
                }
                 // Set the fetched data in state
              } catch (error) {
                console.error('Error fetching cart items:', error.message);
                
              }
            }


          // Form Appearing for Adding New Product
       const [showForm, setShowForm] = useState(false);

        const [productName, setProductName] = useState("");
        const [img, setImg] = useState(null);
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        const [category,setCategory]=useState("")
        const [qty, setQty] = useState("");

        const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("img", img);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("qty", qty);

    try {
      const response = await fetch(`${BASE_URL}/addProduct`, {
        method: "POST",
        headers: {
    Authorization: `Bearer ${token}`,
  },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      
      if(response.ok){
        alert("Product Added successfully")
         // Reset form and hide
      setProductName("");
      setImg(null);
      setDescription("");
      setPrice("");
      setCategory("");
      setQty("");
      setShowForm(false);
      getProducts()
      }
      else{
        alert(data.error)
      }
     
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className='w-full flex flex-col bg-[#F5F5F5]'>
        
        <div>
          <h1 className='text-3xl font-semibold px-6 py-4 shadow-md z-10 bg-white'>Products Management</h1>
        </div>

        <div className='flex flex-col px-6'>
          <div className='flex justify-between px-6 py-4'>
            <h1 className='text-xl font-semibold'>All Products({data.length})</h1>
            <button className='rounded-sm px-2 py-1 font-semibold cursor-pointer text-white bg-blue-600' onClick={()=>{setShowForm(prev=>(!prev))}}>Add New Product</button>
          </div>

        <div className='rounded-4xl px-15 py-5 bg-[#F5F5F5]'>
          <div div className='bg-white'>

            {
            showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-5 p-5 border rounded bg-gray-100 max-w-md"
        >
          <h2 className="text-xl font-bold mb-3">Upload Product</h2>

          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="block w-full mb-2 p-2"
            required
          />

          <input
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
            className="block w-full mb-2"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mb-2 p-2"
            required
          ></textarea>

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full mb-2 p-2"
            required
          />

            <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full mb-2 p-2"
            required
          />

          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="block w-full mb-4 p-2"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )
      }

<div className="w-full rounded-sm overflow-auto">
  <table className="w-full border-collapse bg-white rounded-md overflow-hidden shadow-sm">
    <thead className="bg-gray-200 text-gray-700">
      <tr>
        <th className="px-4 py-2 text-left">Product</th>
        <th className="px-4 py-2 text-left">Description</th>
        <th className="px-4 py-2 text-left">Price</th>
        <th className="px-4 py-2 text-center" colSpan="2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map((product, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="px-4 py-2">
            <div className="flex items-center gap-2">
              <img
                src={product.img}
                alt="Product"
                className="w-7 h-7 object-cover rounded"
              />
              <span>{product.productName}</span>
            </div>
          </td>
          <td className="px-4 py-2">{product.description}</td>
          <td className="px-4 py-2">${product.price}</td>
          <td className="px-4 py-2 text-center">
            <button className="text-blue-600 hover:text-blue-800">
              Update
            </button>
          </td>
          <td className="px-4 py-2 text-center">
            <FaTrash
              className="text-red-600 hover:text-red-800 cursor-pointer"
              onClick={() => deleteUser(product)}
              size={16}
            />
          </td>
        </tr>
      ))}
    </tbody>
    
  </table>
</div>

</div>
</div>

        </div>
    </div>
  )
}

export default AllProducts
