import { useState } from "react";

import { useCart } from "../../../context";

import { CartCard, Checkout } from "../components";

export const CartList = () => {
  const [check, setCheck] = useState(false);

  const { cartList, total } = useCart();

  return (
    <section>
      <h1 className=" text-center text-2xl font-medium dark:text-slate-100 underline my-4">My Cart ({cartList.length})</h1>
      <div className="relative md:max-w-4xl mx-auto">
        <div>
          {cartList.map((item) => (<CartCard key={item.id} item={item} />))}
        </div>
        <div className="border-b mb-3 px-2 py-4 flex justify-between text-lg dark:border-slate-700 dark:text-slate-200">
          <div className="font-medium">Total amount:</div>
          <div>${total}</div>
        </div>
        <button className="absolute right-0">
          <div onClick={() => setCheck(true)}>
            <h5 className="text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-4 text-lg uppercase tracking-tight dark:text-slate-300">Place Order <i className="bi bi-arrow-right"></i></h5>
          </div>
        </button>
      </div>
      {check && <Checkout setCheck={setCheck} />}

    </section>
  )
}
