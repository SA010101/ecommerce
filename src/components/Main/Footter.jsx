import React from 'react'

function Footter() {
  return (
    <div className='w-full h-[200px] px-10 py-10 bg-[#002147] text-white flex flex-col justify-between'>

        <div className='flex justify-between'>
            <div className='text-xl font-bold'>BAZAR</div>
            <ul className='flex gap-3 font-semibold'>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
        <hr />
        <div className='flex justify-center'>&copy; 2025 BAZAR,All rights reserved</div>
      
    </div>
  )
}

export default Footter
