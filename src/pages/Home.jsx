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


  let items = useSelector(state=>state)
   console.log(items)


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
  
  <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0
   bg-white shadow-xl p-6  ${showCart ? "translate-x-0" : "translate-x-full"}`} >

    <header className="w-[100%]  flex flex-row justify-between  p-1 ">
        <span className="text-green-400 text-[18px] font-semibold "> Order Items </span>
       <RxCross1   className=" w-10 h-8 text-red-400 text-[20px] font-semibold pr-5 cursor-pointer hover:text-gray-600 "
       onClick={()=> setShowCart(false)}/> 
    </header>
   <Card2/>
  

  </div>

</div>




    </div>

<Footer/>
        </div>
    )
}
// new change 

export default Home;


