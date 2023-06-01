import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


import { useTitle } from "../hook";
import { useCart } from "../context";
import { getProduct } from "../services";

import { Rating } from "../components"


export const ProductDetail = () => {
  const [inCart, setCart] = useState(false);

  const { add, del, cartList } = useCart();
  const params = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProduct(params.id);
        setInfo(data);
      }
      catch (err) {
        toast.error(err.message || "Error");
      }

    }
    fetchData();
  }, [params.id]) //esLint-disable-line

  useTitle(info.name);

  useEffect(() => {
    const res = cartList.find(item => item.id === info.id);
    if (res) {
      setCart(true);
    }
    else {
      setCart(false);
    }
  }, [cartList, info.id])

  return (
    <main>
      <section>

        <h1 className="text-4xl font-semibold dark:text-slate-100 text-center my-4">{info.name}</h1>
        <h2 className="text-lg mb-2 dark:text-slate-100 text-center">{info.overview}</h2>

        <div className="flex flex-wrap justify-around gap-5 px-4 my-4">

          <img className="rounded-lg md:max-w-xl" src={info.poster} alt={info.name} />

          <div className="max-w-xl">

            <h1 className="text-4xl font-medium mb-3 dark:text-slate-100">${info.price}</h1>
            <Rating rating={info.rating} />
            <div className="my-3 text-base font-medium">
              {info.best_seller && <button className="mr-3 uppercase  bg-yellow-50 rounded py-1 px-2 border text-yellow-700">Best Seller</button>}
              {info.in_stock
                ? (<button className="mr-3 uppercase bg-cyan-50 rounded py-1 px-2 border text-green-700">Instock</button>)
                : (<button className="mr-3 uppercase bg-red-50 rounded py-1 px-2 border text-red-700">Out of stock</button>)
              }
              <button className="mr-3 uppercase bg-blue-50 rounded py-1 px-2 border text-blue-700">{info.size} MB</button>
            </div>
            {info.in_stock &&
              (inCart
                ?
                <button onClick={() => del(info)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Item <i className="bi bi-trash3"></i>
                </button>
                :
                <button onClick={() => add(info)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )
            }



            <div className="dark:text-slate-100 my-4 text-lg">
              {info.long_description}
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}
