export const Testimonials = () => {
  
  return (
    <section className="text-center">
      <h2 className="text-2xl font-medium underline my-4 dark:text-slate-100 ">Student About eBook</h2>
      <div className="grid md:grid-cols-2 dark:bg-gray-800">

        <figure className="flex flex-col border dark:border-gray-700 p-5 gap-10 items-center rounded-t-lg md:rounded-tl-lg md:rounded-tr-none">
          <blockquote>
            <h2 className="text-lg font-semibold my-3 dark:text-slate-100">Very easy this was to integrate</h2>
            <p className="dark:text-slate-300">If you care for your time, I hands down would go with this."</p>
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
            <div className="text-left">
              <div className="dark:text-slate-100">Bonnie Green</div>
              <p className="text-sm dark:text-slate-300">Developer at Random AI</p>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col border dark:border-gray-700 p-5 gap-10 items-center md:rounded-tr-lg">
          <blockquote>
            <h2 className="text-lg font-semibold my-3 dark:text-slate-100">Solid foundation for any project</h2>
            <p className="dark:text-slate-300">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=crop&w=120&q=50" alt="user" />
            <div className="text-left">
              <div className="dark:text-slate-100">Roberta Casas</div>
              <p className="text-sm dark:text-slate-300">Lead designer at Random</p>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col border dark:border-gray-700 p-5 gap-10 items-center md:rounded-bl-lg">
          <blockquote>
            <h2 className="text-lg font-semibold my-3 dark:text-slate-100">Mindblowing workflow</h2>
            <p className="dark:text-slate-300">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
            <div className="text-left">
              <div className="dark:text-slate-100">Jese Leos</div>
              <p className="text-sm dark:text-slate-300">Software Engineer at Random</p>
            </div>
          </figcaption>
        </figure>

        <figure className="flex flex-col border dark:border-gray-700 p-5 gap-10 items-center rounded-b-lg md:rounded-br-lg md:rounded-bl-none">
          <blockquote>
            <h2 className="text-lg font-semibold my-3 dark:text-slate-100">Efficient Collaborating</h2>
            <p className="dark:text-slate-300">You have many examples that can be used to create a fast prototype for your team."</p>
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
            <div className="text-left">
              <div className="dark:text-slate-100">Joseph McFall</div>
              <p className="text-sm dark:text-slate-300">CTO at Random</p>
            </div>
          </figcaption>
        </figure>

      </div>
    </section>
  )
}
