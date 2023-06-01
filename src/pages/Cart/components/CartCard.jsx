import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({ item }) => {
  const { del } = useCart();
  const { id, name, price, poster } = item;
  return (
    <section className="border-b dark:border-slate-700 mt-4">
      <div className="flex flex-wrap gap-2 justify-between p-2 items-center">
        <div className="flex gap-2">
          <Link to={`/products/${id}`}>
            <img className="w-32 rounded" src={poster} alt={name} />
          </Link>
          <div className="pt-2">
            <Link to={`products/${id}`}>
              <h3 className="text-lg dark:text-slate-200">{name}</h3>
            </Link>
            <div onClick={() => del(item)} className="text-sm text-red-400 cursor-pointer my-1">Remove</div>
          </div>
        </div>
        <div className="dark:text-slate-200 text-lg">${price}</div>
      </div>
    </section>
  )
}
