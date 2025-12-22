import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';

function Nav() {

  let  {input,setInput} = useContext(dataContext)

  return (
    <div className='w-full h-[100px] flex justify-between items-center
    px-4 md:px-5'>
 
<div className=' bg-white w-[60px] h-[60px] 
flex justify-center items-center rounded-b-md  text-purple-900 shadow-xl'>
<MdFastfood className='w-[30px] h-[30px]  '/>

</div >


 <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 
 rounded-md shadow-blue-100 shadow-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
<FaSearch />
<input type="text" placeholder='Search Items... ' className='w-full outline-none text-[12px] md:text-[12px]
 ' onChange={(e)=>setInput(e.target.value)} value={input}/>
 </form>

  <div className=' bg-white w-[60px] h-[60px] 
flex justify-center items-center rounded-b-md  shadow-xl' >

    <LuShoppingBag className='w-[30px] h-[30px] text-green-600'/>
</div>



    </div>
  )
}

export default Nav;