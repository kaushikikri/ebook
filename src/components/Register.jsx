import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { useTitle } from "../hook";
import { register } from '../services';

export const Register = () => {
    useTitle("Register");
    const navigate = useNavigate();

    async function handleRegister(event) {
        event.preventDefault();

        try {
            const authData = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
            }

            const data = await register(authData);
            data.accessToken ? navigate("/login") : toast.error(data);
        }
        catch (error) {
            toast.error(error.message || "Error");
        }

        event.target.name.value = "";
        event.target.email.value = "";
        event.target.password.value = "";
    }


    return (
        <main className="my-10">
            <h1 className="text-3xl mb-5 font-medium text-center dark:text-slate-100 underline ">Register</h1>
            <form onSubmit={handleRegister}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm  text-gray-900 dark:text-white">Your name</label>
                    <input type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Kaushiki Kumari" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm  text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="kaushiki132@example.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm  text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
        </main>

    )
}
