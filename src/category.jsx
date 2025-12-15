import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CgBowl } from "react-icons/cg";
import { BiDish } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

 const categories = [

    {
        id : 1, 
        name : "All" ,
        image : <TiThSmall className="w-[60px] h-[60px] text-emerald-800"/> 
    }, 

    {
        
        id : 2, 
        name : "breakfast" ,
        image : <MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-purple-900"/>
    },

    {
        id : 3, 
        name :  "soups",
        image : <LuSoup  className="w-[60px] h-[60px] text-purple-900" />
    },

      {
        id : 6, 
        name : "pizza" ,
        image : <GiFullPizza className="w-[60px] h-[60px] text-purple-900" />
    },
    
     {
        id : 7, 
        name : "burger" ,
        image : <GiHamburger className="w-[60px] h-[60px] text-purple-900" /> 
    },
    

   

   {
        id : 4, 
        name : "mainCourse " ,
        image :<BiDish className="w-[60px] h-[60px] text-purple-900"/>
    },

    {
        id : 5, 
        name : "pasta" ,
        image : <CgBowl className="w-[60px] h-[60px] text-purple-900 "/>
    }, 
   
]

export default categories;