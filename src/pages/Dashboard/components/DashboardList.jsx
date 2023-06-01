import { DashboardCard } from "./DashboardCard";

export const DashboardList = ({ item }) => {
  const { cartList, id, total } = item;
  return (
    <section>
      <div className="border md:max-w-4xl mx-auto mt-3 p-3">
        <div className="dark:text-slate-200 flex justify-between font-medium">
          <h3>Order Id: {id}</h3>
          <h3>Total: ${total}</h3>
        </div>
        <div className="">
          {cartList.map((list) => <DashboardCard key={list.id} list={list} />)}
        </div>
      </div>
    </section>
  )
}
