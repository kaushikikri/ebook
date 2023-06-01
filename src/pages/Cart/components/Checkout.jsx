import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";
import { getUser, createOrder } from "../../../services";
import { toast } from "react-toastify";

export const Checkout = ({ setCheck }) => {
  const navigate = useNavigate();

  const { cartList, total, clearCart } = useCart();
  const [user, setUser] = useState({});

  const token = JSON.parse(sessionStorage.getItem("token"));
  const ebid = JSON.parse(sessionStorage.getItem("ebid"));

  useEffect(() => {
    async function fetchData() {

      try {
        const data = await getUser(token, ebid);
        setUser(data);
      }
      catch (e) {
        toast.error(e.message || "error");
      }

    }

    fetchData();
  }, [token, ebid])


  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const data = await createOrder(cartList, total, user, token);
      clearCart();
      navigate("/order-summary", { state: { status: true, data: data } });

    }
    catch (error) {
      toast.error(error.message || "Error");
      navigate("/order-summary", { state: { status: false } });
    }

  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full">

        <div className="relative mx-auto my-5 w-full max-w-md max-h-full">

          <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">

            <button onClick={() => setCheck(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl text-gray-900 dark:text-white uppercase"><i className="bi bi-credit-card"></i> Card payment</h3>

              <form className="space-y-6" onSubmit={(handleSubmit)}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-900 dark:text-white">Name:</label>
                  <input type="text" name="name" id="name" value={user.name || "Guest"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Kaushiki kri" disabled={true} required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white">Email:</label>
                  <input type="email" name="email" id="email" value={user.email || "backup@gmail.com"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" disabled={true} placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="card" className="block mb-2 text-sm text-gray-900 dark:text-white">Card Number:</label>
                  <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="4215625462597845" disabled={true} required />
                </div>
                <div>
                  <label htmlFor="expiry" className="block mb-2 text-sm text-gray-900 dark:text-white">Expiry date:</label>
                  <input type="month" name="expiry" id="expiry" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                  <label htmlFor="code" className="block mb-2 text-sm text-gray-900 dark:text-white">Security Code:</label>
                  <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value="546" disabled={true} required />
                </div>
                <div className="text-center text-green-600 font-medium text-2xl">${total} </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="bi bi-lock-fill"></i> Pay now</button>
              </form>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}
