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
        image : <TiThSmall className="w-[60px] h-[60px]"/> 
    }, 

    {
        
        id : 2, 
        name : "breakfast" ,
        image : <MdOutlineFreeBreakfast  className="w-[60px] h-[60px]"/>
    },

    {
        id : 3, 
        name :  "soups",
        image : <LuSoup  className="w-[60px] h-[60px]" />
    },

    {
        id : 4, 
        name : "pasta" ,
        image : <CgBowl className="w-[60px] h-[60px]"/>
    }, 

    {
        id : 5, 
        name : "main course " ,
        image :<BiDish className="w-[60px] h-[60px]"/>
    },

    {
        id : 6, 
        name : "pizza" ,
        image : <GiFullPizza className="w-[60px] h-[60px]" />
    },

    {
        id : 7, 
        name : "burger" ,
        image : <GiHamburger className="w-[60px] h-[60px]" /> 
    },
]

export default categories;