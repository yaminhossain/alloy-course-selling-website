import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const AddTOCart = () => {
    return (
        <button className="border my-3 w-full p-2 text-2xl font-semibold bg-violet-600 hover:bg-violet-700 text-white
      ">
        Add To Cart
        <ShoppingCartIcon className="h-6 inline-block ml-4"></ShoppingCartIcon>
      </button>
    );
};

export default AddTOCart;
