import { Link } from "react-router-dom";

export const Footer = () => {
  return (

    <footer className="dark:bg-gray-900 border-t dark:border-t-0">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="flex items-center md:justify-between justify-center flex-wrap gap-3">

          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">eBook</Link>. All Rights Reserved.
          </span>

          <div className="flex space-x-6 sm:justify-center items-center">

            <a href="https://www.instagram.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="bi bi-instagram"></i>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://twitter.com/kaushikik690" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://github.com/kaushikikri" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <i className="bi bi-github"></i>
              <span className="sr-only">GitHub account</span>
            </a>

          </div>
        </div>
      </div>
    </footer>

  )
}
