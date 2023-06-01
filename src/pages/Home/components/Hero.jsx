import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex lg:gap-2 gap-4 lg:flex-row flex-col">
      <div className="flex flex-col gap-3 items-start justify-center">
        <h1 className="text-5xl font-bold dark:text-slate-300">The Ultimate eBook Store</h1>
        <p className="text-2xl dark:text-slate-300">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
        <Link to="/products" className="text-white bg-blue-600 rounded py-2 px-4 text-lg">Explore eBooks</Link>
      </div>
      <img className="lg:max-w-xl rounded" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="hero" />
    </section>
  )
}
