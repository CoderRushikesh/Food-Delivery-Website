import React, { useState }  from "react";
import Nav from "../components/Nav";
import categories from "../category";
import Card from "../components/card";
import { food_items } from "../food";
import Footer from "../components/Footer";


function Home(){
    let [cate , setCate] =useState(food_items) 

 function filter(category){
   if(category==="All"){
    setCate(food_items)
   }else{
    const newList = food_items.filter((item) =>(item.food_category===category))
    // food_items.filter((items)=>( items.food_category===category))
      setCate(newList)
}
     
 }


    return (
        <div className="bg-slate-200 w-full min-h-screen">

     <Nav/>
     
    <div className="flex flex-wrap justify-center items-center gap-6
    w-full]">
        {categories.map((items)=>(
    
            <div className=" flex flex-col items-center-safe
            w-[120px] h-[110px]  bg-white
            p-5 font-semibold text-gray600 rounded-lg shadow-blue-100 shadow-xl hover:bg-green-200 cursor-pointer
             transition-all duration-50  " onClick={()=> filter(items.name)}>
                {items.image} {items.name}
            </div>
        ))}
    </div>
    
    <div className="w-full flex flex-wrap gap-5 px-5 justify-center 
    items-center pt-8 pb-8">
    {/* <Card/> */}
  {cate.map((item)=>{
    return(
   <Card name={item.food_name} image={item.food_image} price={item.price}  type={item.food_type}/>
    );  
})}

    </div>

<Footer/>
        </div>
    )
}
// new change 

export default Home;