import React, { useContext , useEffect} from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
// import { dataContext } from "../context/UserContext";
function Nav() {

  let  {input,setInput ,setCart , setShowCart, showCart} = useContext(dataContext)
// let {input , setInput ,cate,setCate}=useContext(dataContext);

//     useEffect(()=>{
//      let newList =  food_items.filter((item)=> item.food_name.includes(input)
//     ||item.food_name.toLowerCase().includes(input) )
//       setCate(newList);
//     },[input])

let items = useSelector(state=>state.cart)
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
flex justify-center items-center rounded-b-md  shadow-xl relative cursor-pointer ' 
onClick={()=>
  setShowCart(true)
} >
  <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>
    {items.length}
  </span>
    <LuShoppingBag className='w-[30px] h-[30px] text-green-600 cursor-pointer'/>
</div>



    </div>
  )
}

export default Nav;