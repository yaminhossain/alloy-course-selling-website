import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const AddTOCart = () => {
    return (
        <button className="border my-3 w-full p-4 font-semibold bg-violet-600 hover:bg-violet-700 text-white
      ">
        Add To Cart
        <ShoppingCartIcon className="h-6 inline-block ml-4"></ShoppingCartIcon>
      </button>
    );
};

export default AddTOCart;