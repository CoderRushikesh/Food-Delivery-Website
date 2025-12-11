import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

function Nav() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center
    px-8'>
 
<div className=' bg-white w-[60px] h-[60px] 
flex justify-center items-center rounded-b-md  text-purple-900 shadow-xl'>
<MdFastfood className='w-[30px] h-[30px]  '/>

</div >


 <form className='w-[60%] h-[60px] bg-white flex items-center px-5 gap-5 
 rounded-md shadow-blue-100 shadow-xl'>
<FaSearch />
<input type="text" placeholder='Search Items... ' className='w-full outline-none '/>
 </form>

  <div className=' bg-white w-[60px] h-[60px] 
flex justify-center items-center rounded-b-md  shadow-xl' >

    <LuShoppingBag className='w-[30px] h-[30px] text-green-600'/>
</div>



    </div>
  )
}

export default Nav;