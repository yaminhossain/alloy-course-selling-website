import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import CartItems from "./CartItems/CartItems";

import TotalCartAmount from "./TotalCartAmount/TotalCartAmount";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const user = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/formCourses/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="w-3/4 my-8">
        <h1 className="text-5xl font-bold mb-5">Shopping Cart</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 bg-slate-100">
            {cartData.map((cartItem) => (
              <CartItems cartItem={cartItem} key={cartItem.id}></CartItems>
            ))}
          </div>
          <div className="border border-red-50">
            <TotalCartAmount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
