import   {React, useContext, useEffect, useState }  from "react";
import Nav from "../components/Nav";
import categories from "../category";
import Card from "../components/card";
import { food_items } from "../food";
import Footer from "../components/Footer";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

function Home(){
    let {input , setInput ,cate,setCate ,showCart , setShowCart }=useContext(dataContext);

    useEffect(()=>{
     let newList =  food_items.filter((item)=> item.food_name.includes(input)
    ||item.food_name.toLowerCase().includes(input) )
      setCate(newList);
    },[input])



 function filter(category){
   if(category==="All"){
    setCate(food_items);
   }else{
    const newList = food_items.filter((item) =>(item.food_category===category));
    // food_items.filter((items)=>( items.food_category===category))
      setCate(newList);
}
     
 }

let items = useSelector(state=>state.cart)
 let subtotal = items.reduce((total,item)=> total+item.price , 0)
let deliveryFee = 20;
let taxes = subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryFee+taxes);
//  console.log(subtotal)
  //  console.log(items)
   

    return (
        <div className="bg-slate-200 w-full min-h-screen">

     <Nav/>

     {!input?  <div className="flex flex-wrap justify-center items-center gap-6
    w-full">
        {categories.map((item)=>(
       
            <div key={item.name}
             className=" flex flex-col items-center-safe
            w-[120px] h-[110px]  bg-white
            p-5 font-semibold text-gray600 rounded-lg shadow-blue-100 shadow-xl hover:bg-green-200 cursor-pointer
             transition-all duration-50  " onClick={()=> filter(item.name)}>
                {item.image} {item.name}
            </div>
        ))}
    </div>:null}
     
  
    
    <div className="w-full flex flex-wrap gap-5 px-5 justify-center 
    items-center pt-8 pb-8">
    {/* <Card/> */}
  {cate.map((item)=>{
    return(
   <Card key={item.food_name} name={item.food_name} image={item.food_image} price={item.price}  type={item.food_type}/>
    );  
})}


<div >
  
  <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 flex flex-col items-center
   bg-white shadow-xl p-6 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`} >

    <header className="w-[100%]  flex flex-row justify-between  p-1 ">
        <span className="text-green-400 text-[18px] font-semibold "> Order Items </span>
       <RxCross1   className=" w-10 h-8 text-red-400 text-[20px] font-semibold pr-5 cursor-pointer hover:text-gray-600 "
       onClick={()=> setShowCart(false)}/> 
    </header>
   {/* <Card2/> */}
  
  <div className="w-full mt-9 flex flex-col gap-8">
    {items.map((item)=>(
       <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
    ))}
  </div>
  
  <div className="w-full border-b-2 border-t-2 border-gray-400 mt-7
  fleex-col gap-4 p-8 ">

  <div className="w-full flex justify-between items-center">
    <span className="text-lg text-gray-600 font-semibold "> Subtotal </span>
    <span className="text-green-400 font-semibold text-lg "> Rs{subtotal}/- </span>
  </div>

  <div className="w-full flex justify-between items-center">
    <span className="text-lg text-gray-600 font-semibold "> Delivery </span>
    <span className="text-green-400 font-semibold text-lg "> Rs{deliveryFee}/- </span>
  </div>

  <div className="w-full flex justify-between items-center">
    <span className="text-lg text-gray-600 font-semibold "> Taxes </span>
    <span className="text-green-400 font-semibold text-lg "> Rs{taxes}/- </span>
  </div>
  
  </div>
 <div className="w-full flex justify-between items-center p-9">
    <span className="text-2xl text-gray-600 font-semibold "> Total </span>
    <span className="text-green-400 font-semibold text-2xl "> Rs{total}/- </span>
  </div>

  <button className="w-[80%] p-4 bg-green-200 rounded-lg flex justify-center items-center
bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer">
    Place Order 
  </button>
  

  </div>

</div>




    </div>

<Footer/>
        </div>
    )
}
// new change 

export default Home;


