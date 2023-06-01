import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context";
import { toast } from "react-toastify";

import { useTitle } from "../../hook";
import { getProductList } from "../../services";

import { ProductCard } from "../../components";
import { ProductFilter } from "./ProductFilter";


export const ProductList = () => {

  const { productList, initialize } = useFilter();
  const [show, setShow] = useState(false);

  const query = useLocation().search;
  const searchQ = new URLSearchParams(query).get("q");

  useEffect(() => {
    async function fetchData() {

      try {
        const data = await getProductList(searchQ);
        initialize(data);
      }
      catch (err) {
        toast.error(err.message);
      }

    }
    fetchData();
  }, [])

  useTitle("Explore eBooks Collection");

  return (
    <main>
      {show && <ProductFilter setShow={setShow} />}

      <div className="mt-3 mb-5">
        <div className=" mb-5 flex justify-between">
          <h1 className="text-2xl font-bold dark:text-slate-100 ">All eBooks ({productList.length})</h1>
          <button onClick={() => setShow(!show)} className="text-2xl bg-slate-100 rounded px-2 py-1">
            <i className="bi bi-three-dots-vertical"></i>
          </button>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {productList.length !== 0 && productList.map((item) => (<ProductCard key={item.id} featured={item} />))}
        </div>
      </div>
    </main>
  )
}
