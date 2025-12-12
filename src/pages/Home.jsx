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
            
            <div className="flex flex-wrap flex-col justify-center items-center w-[120px] h-[120px] bg-white">{items.image} {items.name}
            </div>
        ))}
    </div>
        </div>
    )
}
// new change 

export default Home;