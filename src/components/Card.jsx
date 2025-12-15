import React from 'react'
 import image1 from "../assets/image1.avif"
 import { LuLeafyGreen } from "react-icons/lu";
 import { GiChickenOven } from "react-icons/gi";

function Card({name , image , price , type}) {
  return (
   <div className='w-[300px] h-[400px] bg-white  rounded-lg p-3 flex flex-col gap-3 
   shadow-lg'>

    <div className='w-[100%] h-[65%] overflow-hidden  '>
 <img src={ image} alt="image unable to load " className='object-cover rounded-lg'/>
 
    </div>
 
 <div className='text-2xl font-semibold'>
{name}
 </div>

<div className='w-full flex justify-between items-center'>
<div className='text-xl font-bold text-green-500'> Rs {price}/- </div>
<div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'> 
   {type==="veg"?<LuLeafyGreen />:<GiChickenOven className='text-red-600' />}  
<span>{type}</span> </div>
</div>

<button className='w-full p-4 bg-green-200 rounded-lg
bg-green-300 text-gray-700 hover:bg-green-400 transition-all'> Add to dish </button>
   </div>


  )
}

export default Card;