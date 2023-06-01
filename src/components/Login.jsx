import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

import { useTitle } from "../hook";
import { login } from '../services';

export const Login = () => {
    useTitle("Login");
    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const authData = {
                email: email.current.value,
                password: password.current.value,
            }
            const data = await login(authData);
            data.accessToken ? navigate("/products") : toast.error(data);
        }
        catch (error) {
            toast.error(error.message || "Error");
        }

        event.target.email.value = "";
        event.target.password.value = "";
    }

    async function handleGuest() {
        email.current.value = process.env.REACT_APP_GUEST_EMAIL;
        password.current.value = process.env.REACT_APP_GUEST_PASSWORD;

        try {
            const authData = {
                email: email.current.value,
                password: password.current.value,
            }
            const data = await login(authData);
            data.accessToken ? navigate("/products") : toast.error(data);
        }
        catch (error) {
            toast.error(error.message || "Error");
        }
    }

    return (
        <main className="my-10">
            <h1 className="text-3xl mb-5 font-medium text-center dark:text-slate-100 underline ">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm  text-gray-900 dark:text-white">Your email</label>
                    <input type="email" ref={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="kaushiki132@example.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm  text-gray-900 dark:text-white">Your password</label>
                    <input type="password" ref={password} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                </div>
            </form>
            <button onClick={handleGuest} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
        </main>
    )
}
