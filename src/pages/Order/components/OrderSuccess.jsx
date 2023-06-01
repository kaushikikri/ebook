import { Link } from "react-router-dom";

export const OrderSuccess = ({ data }) => {
  return (
    <main>
      <div className="border rounded md:max-w-4xl mx-auto mt-3 py-5">
        <div className="flex flex-col items-center flex-wrap p-1 md:p-0">
          <div className="text-7xl text-green-600"><i className="bi bi-check-circle"></i></div>
          <div className="text-center mt-4 text-xl dark:text-slate-200">
            <h2>Thank you {data.users.name} for the order!</h2>
            <h2>Your Order ID: {data.id}</h2>
          </div>
          <div className="text-center mt-4 text-xl dark:text-slate-200">
            <h2>Your order is confirmed.</h2>
            <h2>Please check your mail ({data.users.email}) for the eBook.</h2>
          </div>
          <div className="text-center my-4 text-xl dark:text-slate-200">
            <h2>Payment ID: xyz_123456789</h2>
          </div>
          <Link to="/">
            <h5 className="text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-4 text-xl tracking-tight dark:text-slate-300">Continue Shopping <i className="bi bi-cart"></i></h5>
          </Link>
        </div>
      </div>
    </main>
  )
}
