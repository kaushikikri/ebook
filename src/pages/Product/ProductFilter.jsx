import { useFilter } from "../../context";

export const ProductFilter = ({ setShow }) => {
  const { state, dispatch } = useFilter();



  return (
    <section className="h-full bg-slate-50 dark:bg-gray-800 px-4 py-3 w-72 fixed z-40 top-0 left-0 dark:text-slate-100">
      <div>
        <div className="flex justify-between border-b py-2 text-lg text-slate-400 font-semibold">
          <h3>FILTERS</h3>
          <button onClick={() => setShow(false)}><i className="bi bi-x-lg"></i></button>
        </div>
      </div>
      <div className="my-4">
        <ul>
          <li className="mb-4">
            <div className="text-lg font-semibold mb-2">Sort by</div>
            <div>
              <input onChange={() => dispatch({ type: "Sort_By", payload: { sortPrice: 'lowtohigh' } })} checked={state.sortPrice === "lowtohigh" || false} className="h-4 w-4 mr-2" type="radio" name="price" id="price" value="Low" />
              <span> Price - Low to high</span>
            </div>
            <div>
              <input onChange={() => dispatch({ type: "Sort_By", payload: { sortPrice: 'hightolow' } })} checked={state.sortPrice === "hightolow" || false} className="h-4 w-4 mr-2" type="radio" name="price" id="price" value="High" />
              <span> Price - High to Low</span>
            </div>
          </li>

          <li className="mb-4">
            <div className="text-lg font-semibold mb-2">Ratings</div>
            <div>
              <input onChange={() => dispatch({ type: "Ratings", payload: { sortRating: "4 star & above" } })} checked={state.sortRating === "4 star & above" || false} className="h-4 w-4 mr-2" type="radio" name="rating" id="rating" value="4+" />
              <span> 4 Stars & Above</span>
            </div>
            <div>
              <input onChange={() => dispatch({ type: "Ratings", payload: { sortRating: "3 star & above" } })} checked={state.sortRating === "3 star & above" || false} className="h-4 w-4 mr-2" type="radio" name="rating" id="rating" value="3+" />
              <span> 3 Stars & Above</span>
            </div>
            <div>
              <input onChange={() => dispatch({ type: "Ratings", payload: { sortRating: "2 star & above" } })} checked={state.sortRating === "2 star & above" || false} className="h-4 w-4 mr-2" type="radio" name="rating" id="rating" value="2+" />
              <span> 2 Stars & Above</span>
            </div>
            <div>
              <input onChange={() => dispatch({ type: "Ratings", payload: { sortRating: "1 star & above" } })} checked={state.sortRating === "1 star & above" || false} className="h-4 w-4 mr-2" type="radio" name="rating" id="rating" value="1+" />
              <span> 1 Stars & Above</span>
            </div>
          </li>

          <li className="mb-4">
            <div className="text-lg font-semibold mb-2">Other Filters</div>
            <div>
              <input onChange={() => dispatch({ type: "Best_seller", payload: { bestSeller: !state.bestSeller } })} className="h-4 w-4 mr-2" checked={state.bestSeller} type="checkbox" name="others" id="others" value="Best seller" />
              <span> Best Seller only</span>
            </div>
            <div>
              <input onChange={() => dispatch({ type: "In_stock", payload: { inStock: !state.inStock } })} className="h-4 w-4 mr-2" checked={state.inStock} type="checkbox" name="others" id="others" value="Instock" />
              <span> INSTOCK only</span>
            </div>
          </li>
          <li className="mb-4">
            <button onClick={() => dispatch({
              type: "Clear_All"
            })} className="px-5 border py-2 rounded-lg text-lg">Clear Filter</button>
          </li>
        </ul>
      </div>
    </section>
  )
}
