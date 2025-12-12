import React  from "react";
import Nav from "../components/Nav";
import categories from "../category";

function Home(){
    return (
        <div className="bg-slate-200 w-full min-h-screen">

     <Nav/>
    <div className="flex flex-wrap justify-center items-center gap-6
    w-full]">
        {categories.map((items)=>(
            
            <div className=" flex flex-col items-center-safe
            w-[120px] h-[120px] bg-white
            p-5 font-semibold text-gray600 rounded-lg shadow-blue-100 shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-100">
                {items.image} {items.name}
            </div>
        ))}
    </div>
        </div>
    )
}
// new change 

export default Home;