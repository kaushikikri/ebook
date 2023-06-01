import { useState } from "react";
import { Link } from "react-router-dom";

export const DropdownLogout = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div id="dropdown" className="z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-50 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link to="/products" onClick={() => setShow(!show)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={() => setShow(!show)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" onClick={() => setShow(!show)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
                    </li>
                </ul>
            </div>
        </>

    )
}
