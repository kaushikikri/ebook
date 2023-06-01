import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { logout,getUser } from "../services";

export const DropdownLogin = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");

    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    useEffect(() => {
        async function fetchData() {
            
            try {
                const data = await getUser(token, ebid);
                data.email ? setUser(data.email) : handleLogout();
            }
            catch (err) {
                toast.error(err.message || "Error");
            }

        }
        fetchData();
    }, [ebid, token])//esLint-disable-line 


    function handleLogout() {
        logout();
        setShow(false);
        navigate("/");
    }

    
    return (
        <>
            <div id="dropdownInformation" className="z-10  bg-gray-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium truncate ">{user}</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                    <li>
                        <Link to="/products" onClick={() => setShow(!show)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBoooks</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" onClick={() => setShow(!show)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                </ul>
                <div onClick={handleLogout} className="py-2">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
                </div>
            </div>

        </>
    )
}
