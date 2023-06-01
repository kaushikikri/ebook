import { Link } from "react-router-dom";

export const DashboardEmpty = () => {
  return (
    <main>
      <div className="border border-gray-600 rounded md:max-w-4xl mx-auto mt-3 py-5">
        <div className="flex flex-col items-center flex-wrap p-1 md:p-0">
          <div className="text-7xl text-green-600"><i className="bi bi-cart"></i></div>
          <div className="text-center my-4 text-xl dark:text-slate-200">
            <h2>Oops! Your dashboard looks empty!</h2>
            <h2>Add eBooks to your cart from our store collection.</h2>
          </div>
          <Link to="/products">
            <h5 className="text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-4 text-xl tracking-tight dark:text-slate-300">Continue Shopping <i className="bi bi-cart"></i></h5>
          </Link>
        </div>
      </div>
    </main>
  )
}
