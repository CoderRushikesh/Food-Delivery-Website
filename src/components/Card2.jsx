import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem, increaseQty, decreaseQty } from "../redux/cartSlice";

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between items-center">
      
      {/* LEFT SECTION */}
      <div className="w-[60%] h-full flex gap-4">
        
        {/* IMAGE */}
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>

        {/* DETAILS */}
        <div className="w-[40%] h-full flex flex-col gap-3">
          <div className="text-lg text-gray-600 font-semibold">
            {name}
          </div>

          {/* QTY CONTROLS */}
          <div className="w-[100px] h-[40px] bg-slate-200 flex rounded-lg overflow-hidden shadow-lg text-xl">
            <button
              className="w-[30%] bg-white hover:bg-gray-300"
              onClick={() => dispatch(decreaseQty(id))}
            >
              -
            </button>

            <span className="w-[40%] flex justify-center items-center text-green-600 font-semibold">
              {qty}
            </span>

            <button
              className="w-[30%] bg-white hover:bg-gray-300"
              onClick={() => dispatch(increaseQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl text-green-500 font-semibold">
          ₹{price * qty}
        </span>

        <MdDelete
          className="w-7 h-7 text-red-500 cursor-pointer hover:text-red-700"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>

    </div>
  );
}

export default Card2;
