import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context";

import { Rating } from "./Rating";



export const ProductCard = ({ featured }) => {
  const { cartList, add, del } = useCart();
  const [inCart, setCart] = useState(false);

  useEffect(() => {
    const res = cartList.find(item => item.id === featured.id);
    if (res) {
      setCart(true);
    }
    else {
      setCart(false);
    }
  }, [cartList, featured.id])

  const { id, name, overview, price, poster, rating, best_seller, in_stock } = featured;

  return (
    <section>
      <div className=" max-w-sm dark:bg-gray-800 border border-gray-200  dark:border-gray-700 rounded-lg shadow-md">

        <Link to={`/products/${id}`} className="relative">
          {best_seller && <span className="absolute top-4 right-2 px-2  bg-orange-500 bg-opacity-90 text-slate-300 rounded">Best Seller</span>}
          <img className=" rounded-t-lg h-64 w-full" src={poster} alt={name} />
        </Link>

        <div className="p-4 text-left">

          <Link to={`/products/${id}`}>
            <h5 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-slate-300">{name}</h5>
          </Link>

          <p className="py-2 dark:text-slate-300">{overview}</p>

          <div className="flex items-center ">
            <Rating rating={rating} />
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-3xl  text-gray-900 dark:text-white">${price}</span>
            {in_stock &&
              (inCart
                ?
                <button onClick={() => del(featured)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Remove Item <i className="bi bi-trash3"></i>
                </button>
                :
                <button onClick={() => add(featured)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )
            }




          </div>

        </div>


      </div>

    </section>
  )
}
