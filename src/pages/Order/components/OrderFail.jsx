import { Link } from "react-router-dom";

export const OrderFail = () => {
  return (
    <main>
      <div className="border rounded md:max-w-4xl mx-auto mt-3 py-5">
        <div className="flex flex-col items-center flex-wrap p-1 md:p-0">
          <div className="text-7xl text-red-600"><i className="bi bi-exclamation-circle"></i></div>
          <div className="text-center mt-4 text-xl dark:text-slate-200">
            <h2>Payment failed, please try again!</h2>
          </div>
          <div className="text-center my-4 text-xl dark:text-slate-200">
            <h2>Your order is not confirmed.</h2>
            <h2>Connect codebook@example.com for support.</h2>
          </div>
          <Link to="/cart">
            <h5 className="text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-4 text-xl tracking-tight dark:text-slate-300">Check Cart Again <i className="bi bi-cart"></i></h5>
          </Link>
        </div>
      </div>
    </main>
  )
}
