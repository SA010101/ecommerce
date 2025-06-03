import React from 'react';
import bgImage from '../../assets/blank-blue.jpg'
import bluebg from '../../assets/Shoping.webp'
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div className="flex items-center justify-between h-[630px] overflow-hidden bg-cover bg-center px-9"
        style={{ backgroundImage: `url(${bgImage})` }} // Replace with your image path
    >
      <div className="flex flex-col justify-center gap-7 w-full text-white font-semibold">
        <h1 className="text-2xl font-bold">TRENDY TREASURES</h1>
        <h1 className='font-bold text-6xl'>Elevate Your Look <span className='text-yellow-300'>With Every Click.</span> Shop Today</h1>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, error!</h1>
        
        <button className='w-[230px] h-[60px] text-black bg-amber-100 rounded-xl'>
          <NavLink to="/product">
               SHOP NOW
           </NavLink>
       </button>

      </div>

      <div className="text-white ml-10 w-full flex justify-center items-center">
        <img className='w-full h-full' src={bluebg} alt="image" />
      </div>
    </div>
  );
}

export default Home;
