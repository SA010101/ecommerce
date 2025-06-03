import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import Cardimg from "../../assets/watch.jpeg";

function Products() {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data)
  const [searchQuery, setSearchQuery] = useState("");
  const [pricefilter, setPricefilter] = useState("all");
  
  const storedValue = localStorage.getItem('user');
const storedUser = storedValue && storedValue !== "undefined" ? JSON.parse(storedValue) : null;
  const token=localStorage.getItem('token')
// console.log(storedUser.user.id)

  console.log(data)

console.log(storedUser)


  async function getData() {
    try {
      const response = await fetch('http://localhost:8080/api/products',{
        headers: {
  'Authorization': `Bearer ${token}`
}
      });
    
      if (response.ok) {
        console.log("Data getted successfully!!")
      }
    
      const responsedata = await response.json();
      setData(responsedata); // Set the fetched data in state
    } catch (error) {
      console.error('Error fetching cart items:', error.message);
    }
  }    

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data
    .filter((element) =>
      element.productName.toLowerCase().startsWith(searchQuery.toLowerCase())
    )
    .filter((element) => {
      if (pricefilter === "less") return element.price < 3000;
      if (pricefilter === "greater") return element.price >= 3000;
      return true;
    })
    .sort((a, b) => a.productName.localeCompare(b.productName));


    //Check The User is LogedIn or not 
  const addtocart = async (element) => {
    
        if (storedUser===null) {
          alert("Log In First")
          navigate('/Login');   // Redirect to register if not logged in
          return;
        } 
        else {
          // Proceed to add product to cart
        
          const cartItem = {

            userId:storedUser.user._id,
            productId: element._id,
            productName: element.productName,
            img:element.img,
            description: element.description,
            price: element.price,
            qty: element.qty || 1,
          };

          try {
      const response = await fetch("http://localhost:8080/api/addToCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(cartItem),
      });
      console.log("Sending data:", JSON.stringify(element));

      const responsedata = await response.json();
      
      if (response.ok) { 
        alert("Product Add to Cart")
      }
      else{
        alert(responsedata.message)
      }

      // console.log("your added item is", responsedata.data);
    } catch (error) {
      console.error("Error:", error);
    }

        }

      }

  return (
    

      <div className="flex flex-col">

        <div className="w-full h-[200px] flex flex-col justify-center items-center gap-4 bg-gray-100">
          <h1 className="text-5xl font-bold">Premium Collection</h1>
          <h1 className="text-lg">Find the perfect items of your lifestyle with our carefully curated selection of top quality products.</h1>
        </div>
      

    <div className="flex py-10 px-10">
      
      <div className="min-w-[20%] sticky top-[100px] shadow-[0_0_20px_rgba(0,0,0,0.5)] max-h-fit flex flex-col gap-5 px-3 py-4 rounded-xl">
        <input
          type="text"
          placeholder="Search Your Item"
          className="h-[50px] outline-black outline-3 bg-white rounded-lg p-3"
          // value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div>
          <h1 className="bg-pink-100 h-[50px] rounded-lg p-3">Category</h1>
          <div className="flex flex-col gap-3 items-baseline">
            <button>All</button>
            <button>Men's</button>
            <button>Women's</button>
            <button>Kid's</button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="bg-pink-100 h-[50px] rounded-lg p-3">Price Range</h1>

          <select
            className="h-[50px] w-full"
            onChange={(e) => setPricefilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="less">Less $3000</option>
            <option value="greater">Greater or = $3000</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
      
        <h1 className="text-4xl font-bold">
          Our <span className="text-red-600">Products</span>
        </h1>
        <div className="px-9 flex flex-wrap gap-5 justify-center">
          {filteredData.length > 0 ? (
            filteredData.map((element, index) => (

              <div
              key={index}
              className="w-[200px] min-h-[400px] flex flex-col text-center items-center gap-3 p-2 bg-white rounded-lg shadow-[2px_4px_8px_rgba(0,0,0,0.5)] hover:scale-105 hover:cursor-pointer"
            >
              <img src={element.img} alt="img" className="h-[150px] object-contain" />
              
              <h1 className="font-semibold h-[50px] overflow-hidden">{element.productName}</h1>
            
              <h1 className="font-semibold h-[60px] overflow-hidden text-sm">{element.description}</h1>
              
              <h1 className="font-bold text-xl">{"$" + element.price}</h1>
            
              <button
                className="bg-red-500 w-[90%] h-[35px] text-white hover:cursor-pointer"
                onClick={() => addtocart(element)}
              >
                Add to Favorite
              </button>
            </div>
            
            ))
          ) : (
            <h1 className="text-2xl font-bold text-gray-500">
              No products found
            </h1>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Products;
