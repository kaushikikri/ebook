import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

import { useCart } from "../context";

import { Search, DropdownLogin, DropdownLogout } from "../components";



export const Header = () => {
  const { cartList } = useCart();

  const token = sessionStorage.getItem("token");

  const theme = JSON.parse(localStorage.getItem("dark"));

  const [dark, setDark] = useState(theme || false);
  const [show, setShow] = useState(false);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    localStorage.setItem("dark", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="dark:bg-gray-800">
      <nav className=" dark:bg-gray-900">
        <div className="flex flex-wrap border-b dark:border-0 dark:bg-gray-900 md:justify-between gap-3 justify-center  items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">

          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-10 mr-3" alt="Logo" />
            <span className="self-center text-2xl  whitespace-nowrap dark:text-white">eBook</span>
          </Link>

          <div className="flex items-center gap-4 mr-2">

            <span onClick={() => setDark(!dark)} className="text-slate-900 dark:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </span>

            <span onClick={() => setShow(!show)} className="text-slate-900 dark:text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>

            <Link to="cart" className="relative w-7 flex items-center h-10 cursor-pointer">
              <span className="text-slate-900 dark:text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </span>
              <span className="absolute w-4 text-white bg-red-600 text-center rounded-lg top-0 right-0">{cartList.length}</span>
            </Link>

            <span onClick={() => setLogout(!logout)} className="text-slate-900 dark:text-white cursor-pointer relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <div className="z-40 absolute right-0 top-10">
                
                {logout && (token ? <DropdownLogin /> : <DropdownLogout />)}
              </div>
            </span>

          </div>

        </div>

        {show && <Search setShow={setShow} />}
      </nav>

    </header>
  )
}
