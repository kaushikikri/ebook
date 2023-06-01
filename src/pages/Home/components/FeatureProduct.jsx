import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { GetFeaturedList } from "../../../services";

import { ProductCard } from "../../../components";

export const FeatureProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const data = await GetFeaturedList();
        setProduct(data);
      }
      catch (error) {
        toast.error(error.message || "Error");
      }

    }
    fetchData();
  }, [])


  return (
    <section className="my-20 text-center">
      <h2 className="text-2xl font-medium underline my-4 dark:text-slate-100 ">Featured eBooks</h2>
      <div className="flex flex-wrap justify-around gap-4">
        {product && product.map((item) => (<ProductCard key={item.id} featured={item} />))}
      </div>
    </section>
  )
}
