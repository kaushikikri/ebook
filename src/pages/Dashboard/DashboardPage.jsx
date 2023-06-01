import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useTitle } from "../../hook";
import { getUserOrder } from "../../services";

import { DashboardEmpty, DashboardList  } from "./components";


export const DashboardPage = () => {
  useTitle("Dashboard");

  const [order, setOrder] = useState([])
  const token = JSON.parse(sessionStorage.getItem("token"));
  const ebid = JSON.parse(sessionStorage.getItem("ebid"));

  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getUserOrder(token, ebid);
        setOrder(data);
      }
      catch (e) {
        toast.error(e.message || "Error");
      }

    }
    fetchdata();
  }, [token, ebid])

  return (
    <main className="my-10">
      <h1 className="text-2xl mb-5 font-medium text-center dark:text-slate-100 underline ">My Dashboard ({order.length})</h1>
      {order && order.map((item) => (<DashboardList key={item.id} item={item} />))}
      {order.length === 0 && <DashboardEmpty />}

    </main>
  )
}
