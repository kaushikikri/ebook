import { Link } from "react-router-dom";

export const DashboardCard = ({ list }) => {
  const { id, poster, name, price } = list;
  return (
    <section className="dark:border-slate-700 mt-4">
      <div className="flex flex-wrap gap-2 justify-between p-2 items-center">
        <div className="flex gap-2">
          <Link to={`/products/${id}`}>
            <img className="w-32 rounded" src={poster} alt={name} />
          </Link>
          <div className="pt-2">
            <Link to={`/products/${id}`}>
              <h3 className="text-lg dark:text-slate-200">{name}</h3>
            </Link>
            <div className="dark:text-slate-200 text-lg">${price}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
