import { Link } from "react-router-dom";
import { useTitle } from "../hook/useTitle";
import Logo from "../assets/logo.png";

export const Pagenotfound = () => {
  useTitle("Page Not Found");

  return (
    <main>
      <section className="text-center my-5">
        <h1 className="text-7xl font-medium dark:text-slate-200 my-5">404, Oops!</h1>
        <img className="mx-auto w-80" src={Logo} alt="logo" />
        <div className="my-4">
          <Link to="/">
            <button className="text-white bg-blue-600 hover:bg-blue-800 rounded py-2 px-12 text-2xl tracking-tight dark:text-slate-300">Back To Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
